const _pokemon = {
  pokemonName: "피카츄",
  type: "전기",
  level: 42,
  skills: ["10만볼트", "전광석화", "아이언테일", "볼트태클"],
};
const { pokemonName, type } = _pokemon;

//그동안 객체 접근 방식을 채택해서 작성 했던 방식으로,
//javascript 뿐만 아니라 , 다른 언어에서도 많이 사용하는 방식
console.log(_pokemon.pokemonName);
console.log(_pokemon.type);

//구조분해 할당 방식 : 구조를 분해하여, 변수로 할당(만드는) 방식으로,
//복잡한 객체를 다룰 때, 간결하게 코드를 작성 할 수 있도록
//모던 javascript에서 지원 하고 있음
//본 예제와 같은 경우는 큰 의미가 없지만, 프로토콜 관련 큰 객체를 다루면서,
//특정 속성만 사용을 원하는 등, '억양'에 따라 코드 자체의 직관성을 높일 수 있음
console.log(pokemonName);
console.log(type);

//결과적으로 위의 두 방식은 동일한 결과를 출력함
//'변수' 선언 방식과 또 객체로부터 '변수'처럼 사용하는 방식의 차이.
