//11.2.4 import data from data js--tried using the relative path to circumvent error and did not work
const tableData = static/js/data.js;

//reference the HTML table using d3
var tbody =d3.select(tbody);

//11.5.1

function buildTable(data){
    //step 1: clear out previous data
    tbody.html("");  
//use fat arrow loop to loop through each object & append row and cells for each val in row
data.forEach((dataRow) => {
    //append row to table body
    let row = tbody.append("tr");
//loop through and add value as table cell
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    }
    );
  });
}
 
//11.5.3
function handleClick() {
  let date = d3.select("#datetime").property("value"); 
  let filteredData = tableData;

//filter data by date--11.5.4
if (date){
    //apply filter to table data only, where datetime matches filter value
    fiteredData = filteredData.filter(row => row.datetime === date);
};

//rebuild table using the filtered data
//@note: if no data was entered then filteredData will use tableData
buildTable(filteredData);
};
d3.selectAll("#filter-btn").on("click", handleClick);


//build the table when the page loads
buildTable(tableData);

