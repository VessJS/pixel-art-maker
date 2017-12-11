const submit = $("#submitButton");
const colorPicker = $("#colorPicker");
const gridTable = $("#pixelCanvas");
const grid = $("table");

function makeGrid(event) {
    // event.preventDefault(); // Prevent of refreshing site


    grid.empty();
    const gridRows = $("#inputHeight").val(); // gets value from height
    const gridCols = $("#inputWidth").val(); // gets value from width



    // Create rows
    for (let i = 0; i < gridRows; i++) {
        grid.append("<tr></tr>");

        // Create cols
        var td = $("tr:last-child");
        for (let j = 0; j < gridCols; j++) {
            td.append("<td></td>")
        }
    }
}

// There will be color picker
colorPicker.change(function () {
    const pickedColor = colorPicker.val(); // gets value of picked color
        console.log(">>>>>>>>>>>", pickedColor);
});

// Color each cell
gridTable.on("mousedown", "td",  function(){
        const pickedColor = colorPicker.val();
        $(this).css("background-color", pickedColor);
});

// // Color all cells
// gridTable.click("td", function(e){
//     if (e.shiftKey) {
//         var pickedColor = colorPicker.val();
//         $(this).css("background-color", pickedColor);
//     }
// });

 // Changed coursor type to pointer on grid
gridTable.on("mousemove", function(){
        $(this).css("cursor", "pointer");
});

const sizePicker = $("#sizePicker");
sizePicker.on("submit", function(e) {
    e.preventDefault();
    makeGrid();
});