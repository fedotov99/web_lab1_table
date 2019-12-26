var sorted = false;

function sortTable() {
    var table = document.getElementById("ballsTable");
    var rows = table.rows;
    var sortedRows = Array.from(rows).slice(1); // slice th
    sortedRows.sort(sortFunction);
    table.append(...sortedRows);
    sorted = !sorted;
};

function sortFunction(row1, row2) {
    if (!sorted) {
        return row1.cells[1].innerHTML > row2.cells[1].innerHTML ? 1 : -1; // asc
    } else {
        return row1.cells[1].innerHTML < row2.cells[1].innerHTML ? 1 : -1; // desc
    }

};

function deleteRow() {
    var row = event.target;
    if(confirm("Вы действительно хотите удалить данную строку?")) {
        var table = document.getElementById("ballsTable");
        var index = row.parentNode.rowIndex;
        table.deleteRow(index);
    }
};