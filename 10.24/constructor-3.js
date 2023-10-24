/**
 * 예제 -2번과 완전히 동일한 동작, 동일한 인스턴스 결과물을 만들어내는 함수이다.
 * 결과물도 같고 접근방식도 비슷하지만, '작성법'이 결정적으로는 다르다.
 *
 * 여기서 작성된 class 는 CSS의 작성법을 이야기 하는 것이며,
 * 객체지향 언어 ("사실상" 모든 작성을 객체로만 해야하는 ) JAVA에서 벤치마킹한 javascript의 새로운 문법이다.
 *
 * -2번의 문재는 일반 함수와는 구분이 '가시적'으로 어렵다는 문제점 때문에
 * 자바스크립트의 최신버전에서는 '인스턴스'를 만드는 함수의  새로운 작성법을 도입하고 일반 함수작성법과 구분 짓고 있다.
 * */
class makeObjetThree {
  constructor(idValue, passwordValue, emailValue) {
    //Class는 매개변수 자리가 없고 '블럭 스코프'를 이야기  하는 중괄호를 작성한다.
    //매개변수는 특정 함수인 Construcor()자리에 배치하며
    //construcor라는 이름은 작명할 수 없다. 위 클래스명을 작명한다.

    (this.id = idValue),
      (this.password = passwordValue),
      (this.email = emailValue);
  }
}

let result = new makeObjetThree(
  "아이디테스트",
  "패스워드테스트",
  "이메일테스트"
);

console.log(result);
