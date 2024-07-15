// Function to fetch and parse the CSV file
function fetchCSV() {
    fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            Papa.parse(data, {
                header: true,
                dynamicTyping: true,
                complete: function(results) {
                    console.log(results.data);
                    // Process the CSV data here
                    displayData(results.data);
                }
            });
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
}

// Function to display the CSV data (for demonstration purposes)
function displayData(data) {
    data.forEach(row => {
        console.log(row);
    });
}

// Call the fetchCSV function
fetchCSV();
