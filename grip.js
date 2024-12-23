const container = document.getElementById("container");
function makeGrid(){
    var line = document.getElementById("container");
    for(let i = 0; i < 4; i++){
        let row = document.createElement("tr");
        row.id = "row" + i;
        line.appendChild(row);
        let rown = document.getElementById("row"+i);
        for (let j = 0; j < 4; j++){
            let cell = document.createElement("td");
            cell.id = "cell" + j;
            rown.appendChild(cell);
        }
    }
}

window.onload = makeGrid();