// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy' // YES
// Example - Hello // NO

const checkforY = (str) => {    
    if (str.includes('y')) {
        console.log("YES");    // Checked for Y 
    } else {
        console.log("NO")
    }
}
checkforY("Hello");
checkforY("Crazy");


// 2. Write a function that finds a factorial of a number.  5! ==> 5 * 4 * 3 * 2 * 1
// Example - 5! = 120 (Use a normal loop for this one.) // ForEach

// function getFactorial(num) {
// logic
// return the value;

function getFactorial(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {  // Logic with decrements
        result *= i;                 // Result in multiplied
    }
    return result;
}
 
console.log(getFactorial(7));       //5040 will be printed off


//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },  290
//   { name: "Daniel", marks: [40, 80, 100, 100] }, //
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70], 240
//   },
// ];



function getHighestAverageStudent (studentList) {
    let highestAverage = 0;
    let highestAverageStudent = '';

    studentList.forEach(student => {    
        let totalMarks = student.marks.reduce ((a, b) => a + b, 0);
        let averageMarks = totalMarks / student.marks.length;

        // Keeping track of the highest marks on an average

        if (averageMarks > highestAverage) {  
            highestAverage = averageMarks;
            highestAverageStudent = student.name;
        }
    });
    
    // if the marks are higher for one, this code iterates and updates it again

    return highestAverageStudent;
}

let studentList = [
    { name: "Mike" , marks: [80, 50, 60, 100] },
    { name: "Daniel" , marks: [40, 80, 100, 100] },
    { name: "Stacy" , marks: [20, 100, 50, 70] },
];

console.log(getHighestAverageStudent(studentList));


//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4

function findMostFrequent(arr) {
    let counts = {};
    let maxCount = 0;
    let mostFrequent;

    arr.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostFrequent = num;
        }
    });

    // Incrementing counts, figuring out the maxed counts and then updating it
    
    return mostFrequent;
}

let numbers = [20, 4, -10, 4, 11, 20, 4, 2];
console.log(findMostFrequent(numbers)); 

// Accordingly, this will print off 4



//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

function findUnique(arr) {
    let counts = {};
    arr.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    for (let num in counts) {
        if (counts[num] === 1) {
            return Number(num);
        }
    }
}

numbers = [20, 20, 11, 4, 11, 20, 2, 4];
console.log(findUnique(numbers)); // This will print '2'
 


// aba abba  abca  acca a 
//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

let arr = ['abc', 'aba', 'ccc', 'dca', 'a' ];

// Using the filter method from ES6 to filter out

let palindromes = arr.filter(word => {
    return word === word.split('').reverse().join('');
});

console.log(palindromes);  