const fs = require('fs');
const path = require('path');

// 파일이 .text 파일인지 확인 하는 함수

const isTxtFile = (fileName) => {
  //경로의 확장자를 반환한다.
  let result = path.extname(FileName).toLowerCase() === '.txt';
  return result; //문자열이다.
};

// 두 .txt 파일의 내용을 비교하는 함수

const compareFiles = (operator, operand) => {
  try {
    //예외처리
    //파일 확장자 검사
    if (!isTxtFile(operator) || !isTxtFile(operand)) {
      console.error('둘다 .txt 파일이 아닙니다.');
      return false;
    }

    //파일의 전체 경로를 생성
    // _dirname은 현재 파일의 위치를 나타낸다.
    const filePathOperator = path.join(__dirname, operator);
    const filepathOperand = path.join(__dirname, operand);

    //순서대로(동기적으로) 파일을 일게 접미사인 Sync를 붙였다. (Node.js 에서 Sync 는 동기적으로 실행한다는 의미이다.)

    const dataOpretor = fs.readFileSync(filePathOperator, 'utf8');
    const dataOperand = fs.readFileSync(filepathOperand, 'utf8');

    let isResult = dataOpretor === dataOperand;
    //파일의 내용을 비교하여 결과를 반환한다.
    return isResult;
  } catch (error) {
    console.error('Error reading files:', error);
    return false;
  }
};

//함수 사용 예
const areDilesEqual = compareFiles('opertor.txt', 'opreand.txt');
console.log(areDilesEqual); //내용이 같다며 true, 다르다면 false 를 출력한다.
