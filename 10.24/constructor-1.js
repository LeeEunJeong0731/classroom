const makeObjetOne = (idValue, passwordValue, emailValue) => {
  //리턴 데이터 타입을 객체로 만들고 , '정적인' key값에'동적인' value 값을 매개변수로 만들었다.
  //'매개변수 인자를 객체에 전달했다'라고 표현한다.

  return {
    id: idValue,
    password: passwordValue,
    email: emailValue,
  };
};
//함수 makeObjetOne()은 객체를 '리턴' 했기에 result 변수는 사실상 객체를 담은 변수이다.

let result = makeObjetOne("아이디테스트", "패스워드테스트", "이메일테스트");
console.log(result);
