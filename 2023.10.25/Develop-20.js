class MakeInstance {
    //객체를 생성 하는 '공장'에 해당하는 생성자 함수 
    constructor(idValue, passwordValue,emailValue){
        this.id=idValue,
        this.password=passwordValue,
        this.email=emailValue
    }
}

/**
 * 관용적으로 사용하는 '셋팅'한다는 말과 매우 닮은
 * 생성자 함수의 특별한 기능 set 키워드 setter
 * 아래의 코드는 특정 기능을 따로 하기 위함이 아닌,
 * 객체를 만들 때 필요한 데이터 타입과 같은 '셋팅'을 도와주는 함수로
 * 객체 지향 언어에서 매우 중요한 개념 중 하나이다.
 * 조금 더 객체지향언어 유저들의 용어로 '은닉화 (private) 라고 부른다.
 */
 set id(value){
    if(typeof(value)==="string"){
        this._id=value+"님";
    } else{console.log("id는 문자열이어야 합니다.");}
}

const instace=new MakeInstance('test','password','email')

console.table(instace)
