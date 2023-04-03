//import data from data js
const tableData = data;
console.log (tableData)
//console.log(data)
//reference the HTML table using d3
var tbody =d3.select("tbody");

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
};

// 1. Create a variable to keep track of all the filters as an object.
let filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {
  // 4a. Save the element that was changed as a variable.
  let changedElement = d3.select(this);

  // 4b. Save the value that was changed as a variable.
  let elementValue = changedElement.property("value");
  console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
  let filterID = changedElement.attr("id");
  console.log(filterID);

  // 5. If a filter value was entered then add that filterId and value to the filters list
  if (elementValue) {
      filters[filterID] = elementValue;
  }
  // Otherwise, clear that filter from the filters object.
  else{
      delete filters(filterID);
  }

  // 6. Call function to apply all filters and rebuild the table
  filterTable();
}

// 7. Use this function to filter the table when data is entered.
function filterTable() {
  // 8. Set the filtered data to the tableData.
  let updateFilters = tableData;

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  Object.keys(filters).forEach((key) => {
    let input = d3.select("#" +key).property("value")
    if(input){
      updateFilters = updateFilters.filter(row => row[key] === input)};
    });
  // 10. Finally, rebuild the table using the filtered data
   buildTable(updateFilters)  
}
  
// 2. Attach an event to listen for changes to each filter
  
d3.selectAll("input").on("change", updateFilters);

  // Build the table when the page loads
buildTable(tableData);