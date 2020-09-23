const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let firstArr = [];
    let secondArr = [];
    for(let i = 0; i < firstRow.length; i++) {
        if (firstRow[i] === 'а' || firstRow[i] === 'a') {
            firstArr.push(firstRow[i]);
        }
    }
    for(let i = 0; i < secondRow.length; i++) {
        if (secondRow[i] === 'а' || secondRow[i] === 'a') {
            secondArr.push(secondRow[i]);
        }
    }
    let answer = firstArr.length > secondArr.length ? firstRow : secondRow;

    return answer;
}

console.log(getRow(firstRow, secondRow));