var submit = $("#submitButton");
var colorPicker = $("#colorPicker");
var gridTable = $("#pixelCanvas");

function makeGrid(event) {
    event.preventDefault(); // Prevent of refreshing site

    var grid = $("table");
    grid.empty();
    var gridRows = $("#inputHeight").val(); // gets value from height
    var gridCols = $("#inputWidth").val(); // gets value from width



    // Create rows
    for (var i = 0; i < gridRows; i++) {
        grid.append("<tr></tr>");

        // Create cols
        var td = $("tr:last-child");
        for (var j = 0; j < gridCols; j++) {
            td.append("<td></td>")
        }
    }
}

// There will be color picker
colorPicker.change(function () {
    var pickedColor = colorPicker.val(); // gets value of picked color
        console.log(">>>>>>>>>>>", pickedColor);
});

// Color each cell
gridTable.on("mousedown mouseup", "td",  function(e){
     if (e.type === "mousedown") {
         var pickedColor = colorPicker.val();
         $(this).css("background-color", pickedColor);
     }
});

 // Changed coursor type to pointer on grid
gridTable.on("mousemove", function(){
        $(this).css("cursor", "pointer");
});

submit.on("click", makeGrid);