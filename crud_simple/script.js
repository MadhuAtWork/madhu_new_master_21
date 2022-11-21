var selectedRow = null;


function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["Meeting_center_code_master"] = document.getElementById("Meeting_center_code_master").value;
    formData["AREA_CODE_master"] = document.getElementById("AREA_CODE_master").value;
    formData["BRANCH_CODE_master"] = document.getElementById("BRANCH_CODE_master").value;
    formData["LOCATION_CODE_master"] = document.getElementById("LOCATION_CODE_master").value;
    formData["CITY_CODE_master"] = document.getElementById("CITY_CODE_master").value;
    formData["NAME_master"] = document.getElementById("NAME_master").value;
    // formData["UPDATE_TIME_master"] = document.getElementById("UPDATE_TIME_master").value;
    return formData;
}

function insertNewRecord(data) {
    // var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    // var newRow = table.insertRow(table.length);
    // cell1 = newRow.insertCell(0);
    // cell1.innerHTML = data.Meeting_center_code_master;
    // cell2 = newRow.insertCell(1);
    // cell2.innerHTML = data.AREA_CODE_master;
    // cell3 = newRow.insertCell(2);
    // cell3.innerHTML = data.BRANCH_CODE_master;
    // cell4 = newRow.insertCell(3);
    // cell4.innerHTML = data.LOCATION_CODE_master;
    // cell5 = newRow.insertCell(4);
    // cell5.innerHTML = data.CITY_CODE_master;
    // cell6 = newRow.insertCell(5);
    // cell6.innerHTML = data.NAME_master;
    // cell7 = newRow.insertCell(6);
    // cell7.innerHTML = data.UPDATE_TIME_master;
    // cell8 = newRow.insertCell(7);
    // cell8.innerHTML = `<button onClick="onEdit(this)">Edit</button>`


    var Meeting_center_code_master = document.getElementById("Meeting_center_code_master").value;
    var AREA_CODE_master = document.getElementById("AREA_CODE_master").value;
    var BRANCH_CODE_master = document.getElementById("BRANCH_CODE_master").value;
    var LOCATION_CODE_master = document.getElementById("LOCATION_CODE_master").value;
    var CITY_CODE_master = document.getElementById("CITY_CODE_master").value;
    var NAME_master = document.getElementById("NAME_master").value;
    // var UPDATE_TIME_master = document.getElementById("UPDATE_TIME_master").value;

    if (Meeting_center_code_master == "" || Meeting_center_code_master == null || Meeting_center_code_master == undefined) {

        document.getElementById("Meeting_center_code_error").innerHTML = "valid details"

    } else
        if (AREA_CODE_master == "" || AREA_CODE_master == null || AREA_CODE_master == undefined) {

            document.getElementById("AREA_CODE_master_error").innerHTML = " Enter valid details"
        } else

            if (BRANCH_CODE_master == "" || BRANCH_CODE_master == null || BRANCH_CODE_master == undefined) {

                document.getElementById("BRANCH_CODE_master_error").innerHTML = " Entervalid details"

            } else
                if (LOCATION_CODE_master == "" || LOCATION_CODE_master == null || LOCATION_CODE_master == undefined) {

                    document.getElementById("LOCATION_CODE_master_error").innerHTML = " Enter valid details"

                } else
                    if (CITY_CODE_master == "" || CITY_CODE_master == null || CITY_CODE_master == undefined) {

                        document.getElementById("CITY_CODE_master_error").innerHTML = " Enter valid details"

                    } else
                        if (NAME_master == "" || NAME_master == null || NAME_master == undefined) {

                            document.getElementById("NAME_master_error").innerHTML = " Enter valid details"

                        } 
                      
                            else {

                                var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
                                var newRow = table.insertRow(table.length);
                                cell1 = newRow.insertCell(0);
                                cell1.innerHTML = data.Meeting_center_code_master;
                                cell2 = newRow.insertCell(1);
                                cell2.innerHTML = data.AREA_CODE_master;
                                cell3 = newRow.insertCell(2);
                                cell3.innerHTML = data.BRANCH_CODE_master;
                                cell4 = newRow.insertCell(3);
                                cell4.innerHTML = data.LOCATION_CODE_master;
                                cell5 = newRow.insertCell(4);
                                cell5.innerHTML = data.CITY_CODE_master;
                                cell6 = newRow.insertCell(5);
                                cell6.innerHTML = data.NAME_master;
                                cell7 = newRow.insertCell(6);
                                // cell7.innerHTML = data.UPDATE_TIME_master;
                                cell8 = newRow.insertCell(7);
                                cell8.innerHTML = `<button onClick="onEdit(this)" id="meeting_master_edit_button" >Edit</button>`
                                alert("record successfull");
                                var form1 = document.getElementById("form1");
                                if (form1.style.display === "none") {
                                    form1.style.display = "flex";
                                } else {
                                    form1.style.display = "none";
                                }
                            }
}

function resetForm() {
    document.getElementById("Meeting_center_code_master").value = "";
    document.getElementById("AREA_CODE_master").value = "";
    document.getElementById("BRANCH_CODE_master").value = "";
    document.getElementById("LOCATION_CODE_master").value = "";
    document.getElementById("CITY_CODE_master").value = "";
    document.getElementById("NAME_master").value = "";
    // document.getElementById("UPDATE_TIME_master").value = "";
    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Meeting_center_code_master").value = selectedRow.cells[0].innerHTML;
    document.getElementById("AREA_CODE_master").value = selectedRow.cells[1].innerHTML;
    document.getElementById("BRANCH_CODE_master").value = selectedRow.cells[2].innerHTML;
    document.getElementById("LOCATION_CODE_master").value = selectedRow.cells[3].innerHTML;
    document.getElementById("CITY_CODE_master").value = selectedRow.cells[4].innerHTML;
    document.getElementById("NAME_master").value = selectedRow.cells[5].innerHTML;
    // document.getElementById("UPDATE_TIME_master").value = selectedRow.cells[6].innerHTML;

    
    var form1 = document.getElementById("form1");
    if (form1.style.display === "none") {
        form1.style.display = "flex";
    } else {
        form1.style.display = "flex";
    }

    document.getElementById("meeting_master_header_text").innerHTML =`<divc style="color:white">EDIT</div>`
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Meeting_center_code_master;
    selectedRow.cells[1].innerHTML = formData.AREA_CODE_master;
    selectedRow.cells[2].innerHTML = formData.BRANCH_CODE_master;
    selectedRow.cells[3].innerHTML = formData.LOCATION_CODE_master;
    selectedRow.cells[4].innerHTML = formData.CITY_CODE_master;
    selectedRow.cells[5].innerHTML = formData.NAME_master;
    // selectedRow.cells[6].innerHTML = formData.UPDATE_TIME_master;
    alert("record updated");
    var form1 = document.getElementById("form1");
    if (form1.style.display === "none") {
        form1.style.display = "flex";
    } else {
        form1.style.display = "none";
    }

}

function form_master_add() {
    var form1 = document.getElementById("form1");
    if (form1.style.display === "none") {
        form1.style.display = "flex";
    } else {
        form1.style.display = "flex";
    }
    document.getElementById("meeting_master_header_text").innerHTML =`<divc style="color:white">NEW</div>`
    
}
function form_master_cancel() {
    var form1 = document.getElementById("form1");
    if (form1.style.display === "none") {
        form1.style.display = "flex";
    } else {
        form1.style.display = "none";
    }
}





function searchTable() {
    var input,input1,filter1, filter, table, tr, td, i,j;
    input = document.getElementById("myInput_BRANCH_CODE_search");
    input1 = document.getElementById("myInput_LOCATION_CODE_search");
    filter = input.value.toUpperCase();
    filter1 = input1.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

if(filter == ""){


    for (j = 0; j < tr.length; j++) {
        td = tr[j].getElementsByTagName("td")[4];
    if(td){
      let textvalue1 = td.textContent || td.innerHTML;
      if(textvalue1.toUpperCase().indexOf(filter1) > -1){
          tr[j].style.display = "";
      }else{
          tr[j].style.display = "none";
      }
    }
    
    }


}else{




    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
  if(td){
    let textvalue = td.textContent || td.innerHTML;
    if(textvalue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display = "";
    }else{
        tr[i].style.display = "none";
    }
  }

}

}


document.getElementById("myInput_BRANCH_CODE_search").value="";
document.getElementById("myInput_LOCATION_CODE_search").value="";
}



function NAME_master_onkeypress(e, t) {
    var inputValue = event.which;
    // allow letters and whitespaces only.
    if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
        event.preventDefault();
    }
}

// function NAME_master_onkeypress(e, t) {
//     var charCode = event.which;
//     // allow letters and whitespaces only.
//     if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
//         event.preventDefault();
//     }
// }





