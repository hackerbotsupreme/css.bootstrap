// Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clean out the table
    tbody.html("");
    // Loop through each object in the data array
    data.forEach((dataRow) => {
        // Append a row to the HTML table
        let row = tbody.append("tr");
        // Add each value from the object into a cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);    
        });
    });
}

function handleClick() {
    // Create a date variable from value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // If statement in case a date is selected
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
    buildTable(filteredData);
}

// Use D3 to listen for a click event
d3.selectAll("#filter-btn").on("click", handleClick);

// Build original table when the page loads
buildTable(tableData);