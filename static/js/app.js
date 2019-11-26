// from table_data.js
var tableData = table_data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
    // First: clear any existing data
    tbody.html("");

    // Next, Loop through each object in the data
    // append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append row to table body
        var row = tbody.append("tr");

        // loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
                cell.text(val);
            }
        );
    });
}

function handleClick() {

    // grab the player name value from the filter
    var name = d3.select("#name").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and filter the 
    // data using that date
    if (date) {
        // apply `filter` to the table data to only keep the
        // rows where the `name` value matches the filter value
        filteredData = filteredData.filter(row => row.name === name);
    }

    // rebuild the table using filtered data
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);