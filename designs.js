// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


var submit = $("#submitButton");
var colorPicker = $("#colorPicker");
var gridTable = $("#pixelCanvas");

function makeGrid(event) {
    event.preventDefault();

    var grid = $("table");
    grid.empty();
    var rows = $("#inputHeight").val(); // gets value from height
    var cols = $("#inputWidth").val(); // gets value from width



    //create rows
    for (var i = 0; i < rows; i++) {
        grid.append("<tr></tr>");

        // create cols
        var td = $("tr:last-child");
        for (var j = 0; j < cols; j++) {
            td.append("<td></td>")
        }
    }
}

// There will be color picker
colorPicker.change(function () {
    var pickedColor = colorPicker.val(); // gets value of picked color
    $("td").css("background-color", pickedColor);
    console.log(">>>>>>>>>>>", pickedColor);
});

// Color each cell
 gridTable.on("mousedown", function(){
     var pickedColor = colorPicker.val();
     $("td").css("background-color", pickedColor);
 });


submit.on("click", makeGrid);