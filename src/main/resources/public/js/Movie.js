  $(document).ready( function () {
      $('#table_id').DataTable();
  } );

$("#submit").click(function(){
	var res = $("#movieAdd").val();


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
        success: function(result) {
            console.log(result);
            $("#moviesuccesful").html("<strong><font size=\"3\">" + "De film \"" + result.movieName + "\"is toegevoegd aan de lijst</font></strong>");
        },
        error: function(err) {
            console.log(err);
        }
    });
});

function deleteMovie(row) {
    if (confirm("Are you sure you want to delete movie '" + row.data()[1] + "' ?")) {
        $.ajax({url: "/api/deleteRoom/" + row.data()[0], type: "DELETE"}).done(function () {
            row.remove().draw();
        })
    }
}