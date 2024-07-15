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
    `
   
});

html += `  </table>
</div>
 `

console.log(html);



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
 


document.querySelector('.display-js').innerHTML = html;