function makeObjetTwo(idValue, passwordValue, emailValue) {
  //함수를 '선언문' 방식, 기명함수 방식으로 바꾸었고, this 바인딩 능력을 활용해 제작했다.
  (this.id = idValue),
    (this.password = passwordValue),
    (this.email = emailValue);
}
//함수 호출할때 new 라는 키워드를 추가했다.

let result = new makeObjetTwo("아이디테스트", "패스워드테스트", "이메일테스트");
//결과적으로 변수 result는 객체이지만, '무언가 함수로부터 만들어진' '인스턴스(instance)'라고 명명한다.

//예제 -1번과 결과물은 같은 객체이기에 보기엔 같아보이지만 ,'인스턴스'이냐의 유무에서 완전히 다른 판정을 내린다.

console.log(result);
