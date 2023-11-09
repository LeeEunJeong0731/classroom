const workVarIable = {
    first : "1",
    second:"2,5"
};

/**
 * 
 * @param {object} obj
 * @returns object
 * 
 * *객체를 조회하며 속성의 값이 정수로 변환 될 수 있는지 확인하는 함수입니다.
 */
function convertTointeggrs(obj){
    const result = {};

    for (const key in obj){ 
        try {
            //parseInt 함수를 사용하여 문자열을 정수로 변환합니다.
            //변환된 값이 원래 값과 다르면 (소수점 등으로 인해 ) 에러를 발생시킵니다.
            const valueAsUnreggr = parseInt(obj[key],10); // 두번째 매개변수 10은 10진수를 의미합니다.
            if (valueAsUnreggr.toString() !== obj[key]){
                throw new Error(`${obj[key]}은(는) 점수로 정확하게 변환 될 수 없습니다.`);
                // 위 Error를 발생시키려면, catch 구문으로 실행이 넘어갑니다
            }
            //if() 조건식은 falsy(실패스러운) 원하는 값이 하닌 경우에만 실행됩니다.
            //즉,valueAsInteger가 NaN이 아닌 경우에만 실행됩니다.

            result[key]=valueAsUnreggr;
            catch(error){
                //변환 중 에러가 발생하면 여기서 처리합니다.
                console.log(`"${key}" 속성 처리 중 오류 발생 ${error.message}`);

                /**
                 * 에러 처리와 에러 발생을 동의어로 혼동하는 경우가 매우 많기 때문에 구분합니다.
                 * 에러는 try 부분에서 발생하고,cahch 부분은 콘솔에 '에러'임을 명시해했을뿐
                 * 에러를 발생기키지는 않았습니다.
                 * 원하는 값을 반환하거나, 다른 처리를 할 수 있습니다. */ 
            }
            }
        } return result
}

const convertedValues = convertTointeggrs(workVarIable);