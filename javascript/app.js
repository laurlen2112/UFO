//import data from data js
const tableData = data;

//reference the HTML table using d3
var tbody =d3.select(tbody);

function buildTable(data){
    //step 1: clear out previous data
    tbody.html("");  
//use fat arrow loop to loop through each object & append row and cells for each val in row
data.forEach((dataRow) =>{
    //append row to table body
    let row = tbody.append("tr");
//loop through and add value as table cell
    Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
    );
});
