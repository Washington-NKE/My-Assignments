let studentMarks = [{
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
}];



//Fuction to fetch and parse the csv file
function fetchCSV() {
   return fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            return new Promise((resolve, reject) => {
                Papa.parse(data, {
                    header: true,
                    dynamicTyping: true,
                    complete: function(results) {
                        resolve(results.data);
                },
                error: function(error) {
                    reject(error);
                }
            });
        });
    });
}
    
// Function to display the CSV data
function displayData(data) {
    data.forEach(row => {
       studentMarks.push(row);
    });
    return studentMarks;
}

fetchCSV()
    .then(data => {
        displayData(data);
        console.log(studentMarks);
        console.log(studentMarks.length);
    
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


        function generateTable (grade,html) {
        studentMarks.forEach((averageMarks) => {
            const sum = averageMarks.ccs2102 + averageMarks.ccs2103 + averageMarks.sas2101;
            const   average =  (sum / 3).toFixed(2);
            grade = determineGrade(average);

        html += `
            <tr id = "${grade}">
                <td id = "no"> ${averageMarks.no} </td>
                <td id = "id">${averageMarks.studentId}</td>
                <td id = "marks"> ${average}</td>
                <td id = "grade"> ${grade}</td>
            </tr>
            `;
        
        });

        html += `  </table>
        </div>
        `;

        return html;
            }


html = generateTable(grade,html);

document.querySelector('.display-js').innerHTML = html;
})
.catch(error => console.error('Error fetching the CSV file:', erro));


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

    grade = determineGrade(average);
}
 
