var table = $('#table_id').DataTable();

function initializeTable() {
    $.get("/api/getMovieList", function (movie) {
        console.log(movie);
        var tableData = [];
        for (var i = 0; i < movie.length; i++) {
            table.row.add([
                movie[i].movieName,
                movie[i].movieSeen,
                "<a class=\"btn btn-info\" id=\"markButton\">Markeer als gezien</a>",
                "<a class=\"btn btn-danger\" id=\"deleteButton\">Delete</a>"
            ]).draw(false);
        }
    });
}

function addMovie() {
	// Vul hieronder je object, zoals deze er in Java uit ziet.
    var obj = {
        movieName: $("#movieAdd").val()
    }

    // Verstuur object
    $.ajax({
            url: "/api/addMovie",
            type: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            success: function(movie) {
            if (movie) {

                console.log(movie);
                table.row.add([
                    movie.movieName,
                    movie.movieSeen,
                    "<a class=\"btn btn-info\" id=\"markButton\">Markeer als gezien</a>",
                    "<a class=\"btn btn-danger\" id=\"deleteButton\">Delete</a>"
                ]).draw(false);

            }

            },
            error: function(err) {
                console.log(err);
            }
        });
}

function deleteMovie(row) {
    if (confirm("Are you sure you want to delete movie '" + row.data()[1] + "' ?")) {
        $.ajax({url: "/api/deleteMovie/" + row.data()[0], type: "DELETE"}).done(function () {
            row.remove().draw();
        })
    }
}

initializeTable();
    $("#submit").click(function(){
        addMovie();
    });
    $("#deleteButton").click(function(){
            deleteMovie();
    });