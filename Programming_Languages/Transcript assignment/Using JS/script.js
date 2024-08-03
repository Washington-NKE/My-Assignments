const studentMarks = [{
    no: 1,
    studentId: '0705',
    name: 'Washington',
    ccs2102: 9,
    ccs2103: 4,
    sas2101: 7
},  {
    no: 2,
    studentId: '0727',
    name: 'John',
    ccs2102: 54,
    ccs2103: 78,
    sas2101: 52
}, {
    no: 3,
    studentId: '0762',
    name: 'Nyambu',
    ccs2102: 76,
    ccs2103: 72,
    sas2101: 21
}
];



// Function to fetch and parse the CSV file
function fetchCSV() {
    fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            const parsedData = parseCSV(data);
            console.log(parsedData);
            displayData(parsedData);
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
}

//Function to parse CSV data
function parseCSV(data) {
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
        const values = line.split(',');
        const obj = {};
        headers.forEach((header, index) => {
            obj[header.trim()] = values[index].trim();
        });
        return obj;
    });
}

// Function to display the CSV data 
function displayData(data) {
    let grade= '';
    let html = `
    <div class = "table">
    <table>
        <tr id = "headrow">
            <td id = "no"> S/NO</td>
            <td id = "id">Student ID</td>
            <td id = "marks"> Mean </td>
            <td id = "grade" > Grade</td>
        </tr>
    `;
    
    data.forEach((row, index) => {
        const sum = parseInt(row.ccs2102) + parseInt(row.ccs2103) + parseInt(row.sas2101);
         const   average =  (sum / 3).toFixed(2);
         grade = determineGrade(average);
    
       html += `
        <tr id = "${grade}">
            <td id = "no"> ${index + 1} </td>
            <td id = "id">${row.studentId}</td>
            <td id = "marks"> ${average}</td>
            <td id = "grade"> ${grade}</td>
        </tr>
        `;
    });
    
    html += `  </table></div>
     `;
    
    console.log(html);
    
    document.querySelector('.display-js').innerHTML = html;
}

//Function to determine the grade
    function determineGrade(average) {
        if (average >= 70) {
            return 'A';
        } else if (average >= 60) {
            return 'B';
        } else if (average >= 50) {
            return 'C';
        } else if (average >= 40) {
            return 'D';
        } else {
            return 'F';
        }
    }   

// Call the fetchCSV function
fetchCSV();



