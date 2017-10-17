var table = $('#table_id').DataTable();

//  function that initialises the table with known data
function initializeTable() {
    $.get("/api/getMovieList", function (movie) {
        var tableData = [];
        for (var i = 0; i < movie.length; i++) {
            table.row.add([
                movie[i].movieName,
                movie[i].movieSeen,
                "<a class=\"btn btn-info\" id=\"markButton\">Markeer als gezien</a>",
                "<button><a class=\"btn btn-danger\" id=\"deleteButton\">Delete</a></button>"
            ]).draw(false);
        }
    });
}

// adds the movie to the table
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
                    table.row.add([
                        movie.movieName,
                        movie.movieSeen,
                        "<a class=\"btn btn-info\" id=\"markButton\">Markeer als gezien</a>",
                        "<button><a class=\"btn btn-danger\" id=\"deleteButton\">Delete</a></button>"
                    ]).draw(false);
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
}
// deletes the movie from the table
function deleteMovie(row) {
    if (confirm("Are you sure you want to delete movie '" + row.data()[1] + "' ?")) {
        $.ajax({url: "/api/deleteMovie/" + row.data()[0], type: "DELETE"}).done(function () {
            row.remove().draw();
        })
    }
}
//  initialises the table and adds functionality to the buttons
initializeTable();

    // this is the movie submit button
    $("#submit").click(function(){
        addMovie();
    });

    // does not work yet
    $("#deleteButton").click(function(){
        deleteMovie(row);
    });

    // has no functionality added, and button doesn't function.
    $("#markButton").click(function(){
                markMovie();
    });