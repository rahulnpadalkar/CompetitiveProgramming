/*  https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
    Passed all tests. Code submitted on 11 Feb 2019.
*/
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the rotLeft function below.
function rotLeft(a, d) {

    //a is the number of elements in the array and d is the number of rotations
    var realRotations = getRealNumberOfRotations(a.length, d), temp = [];
    temp = temp.concat(a);
    for (var i = 0; i < a.length; i++){
        temp[getFinalIndex(i, d, a.length)] = a[i];
    }
    return temp;

}

function getFinalIndex(index, rotations, length) {
    var absoluteIndex = index - rotations;
    if (absoluteIndex < 0) {
        return ((index - rotations) + length);
    } else {
        return absoluteIndex;
    }
}

function getRealNumberOfRotations(arrayLength,d) {

    if (d > arrayLength) {

        return arrayLength % d;
    }
    return d;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
