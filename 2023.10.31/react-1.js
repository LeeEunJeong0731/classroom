/** 
 * 에디터에 드디어 내장된 JSDoc 주석 방식으로 아래의 함수를 설명한다.
 * 
 * @Param {string} elementNode
 * @Param {object} attributes
 * @Param {array} children
 * @retruns string
 * 
 * @example
 * component(
 * 'div',
 * { sytle: 'color :blue;'}
 * [component('h1',{},['this is page 1']
 * ])
 */

function component(elementNode,attributes,children){
    // HTML Element 문자열로 '조립(assemble)' 하는 패턴
let elementStr =`<${elementNode}`;
for(let key in attributes){ // 객체의 키(key)를 배열 처럼 순회 한다.
    //조건식에서 "존재 유무"로도 사용하기도 한다.
if (children){
    children.forEach((child)=>{
        //children 매개변수는 배열이어야 한다.
        //배열의 각 요소를 순회하는 forEach()를 사용하였다.
        // 절차형으로 for 문을 사용해도 되지만, 자바스크립트 다운 방식으로 작성 했다.

        if(typeof child === "string"){
            elementStr += child;
        } else {
            elementStr += component(child.elementNode,child.attributes, clid.child);
        }
    })
}
elementStr+=`</${elementNode}>`; // 맨 위 변수에 덧붙여서 반환한다.

return elementStr; // 함수가 호출 되는 순간 문자열이 변환된다.
}
//문자열로 잘 작동하는지 테스트 한 아래 코드

let tset = component('div',{style:"color:blue"},[component('h1',{},['This is page 1'])])
};
console.log(test);