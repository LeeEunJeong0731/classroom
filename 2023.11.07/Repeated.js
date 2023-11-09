/**
 * @param {DOM element string} tahName
 * @param {object} styleObject
 * @returns DOM element
 *
 * ? Object.key()는
 * ? 객체의 key값들을 배열로 반환한다.
 * ? forEach는
 * ? 배열의 각 요소에 대해 제공된 함수를 차례대로 한번씩 실핼한다.
 * * for()문을 '배열에서' 사용하게끔 추상화된 javascript 문법이다.
 */

export default function (tahName, styleObject) {
  //DOM API 태그 요소를 아래의 element로 생성한다.
  const element = document.createElement(tagName);
  //javascript에서 자원하는 key() 메서드를 활용해, 간편하게 배열로 가공한다.
  let styleObjectkeyArray = Object.keys(styleObject);
  // 배열에 있는 값을 '반복문을 통해' 활용한단느 의미에서 for Each를 사용한다.
  //아랴의 forEach() 콜백함수 key는 사실상 배열의 원소가 된다.
  // 이러한 key와 같은 매개변수를 ' 반복하는 동안 ' 사용하는 것으로 '반복자 (iterator')라고 한다.
  //개발자들은 이러한 것을 '인자를 전달한다'고 표현한다.
  styleObjectkeyArray.forEach((key) => {
    element.style[key] = styleObject[key];
  });
  return element;
}
