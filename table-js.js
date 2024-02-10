var marking = false;

function addRow() {
    var tableToEdit = document.getElementById("myTable");
    var newRow = tableToEdit.insertRow(tableToEdit.rows.length);
        for (var i = 0; i < 2;i++) {
            var cell = newRow.insertCell(i);
            cell.setAttribute('contenteditable', 'true');
        }

        var optionsCell = newRow.insertCell(2);
        var tableCheckbox = document.createElement('input');
        tableCheckbox.type = 'checkbox';
        tableCheckbox.className = 'tableCheckbox';
        tableCheckbox.onchange = function() {
            isChecked(this);
        };
        if (!marking){
            tableCheckbox.style.display = 'none';
        }
        else {
            tableCheckbox.style.display = 'inline';
        }
        var upButton = document.createElement('button');
        upButton.className = 'upButton';
        upButton.innerHTML='⬆';
        upButton.onclick = function() {
            moveRowUp(this);
        };
        var downButton = document.createElement('button');
        downButton.className = 'downButton';
        downButton.innerHTML = '⬇';
        downButton.onclick = function() {
            moveRowDown(this);
        };
        
        optionsCell.appendChild(tableCheckbox);
        optionsCell.appendChild(upButton);
        optionsCell.appendChild(downButton);
        rowsCount();
}

function deleteLastRow(){
    
    var tableToEdit = document.getElementById("myTable");
    tableToEdit.deleteRow(-1);
    rowsCount();

}


function moveRowUp(button) {
    var thisRow = button.parentNode.parentNode;
    var previousRow = thisRow.previousElementSibling;

    if (previousRow) {
        thisRow.parentNode.insertBefore(thisRow, previousRow);
    }
}

function moveRowDown(button){
    var thisRow = button.parentNode.parentNode;
    var nextRow = thisRow.nextElementSibling;

    if (nextRow) {
        thisRow.parentNode.insertBefore(nextRow, thisRow);
    }
}

function markRows(){
    marking = !marking;
    var tableCheckboxes = document.getElementsByClassName('tableCheckbox');
    

    if (marking){
        for (var i = 0; i < tableCheckboxes.length; i++) {
            tableCheckboxes[i].style.display = 'inline';
        }
    }
    else {
        for (var i = 0; i < tableCheckboxes.length; i++) {
            tableCheckboxes[i].style.display = 'none';
        }
    }
    return marking;
}

function isChecked(checkbox) {
    var isChecked = false;
    if (checkbox.checked) {
        isChecked = true;
        console.log(isChecked);
    }
    return isChecked;
}

function deleteCheckedRows() {
    var tableToEdit = document.getElementById("myTable");
    var rows = tableToEdit.getElementsByTagName('tr');
    for (var i = rows.length - 1; i >= 0; i--) {
        var checkbox = rows[i].querySelector('input[type="checkbox"]');

        if (checkbox && checkbox.checked) {
            tableToEdit.deleteRow(i);
            rowsCount();
        }
    }
}

function rowsCount() {
    var tableToEdit = document.getElementById("myTable");
    var rowsCount = document.getElementById("rowsCount");
    rowsCount.textContent = 'ILOŚĆ WIERSZY: ' +  tableToEdit.rows.length;
}