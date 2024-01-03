// makeReact 함수는 간략화된 useState 훅의 모의 버전입니다.
const makeReact = function (){
//전역 상태 저장소입니다. 실제 react에서는 각 컴포넌트가 자신의 상태를 관리합니다.
const global={};
let index = 0;

function useState(initialState){
    //상태 배열이 아직 초기화 되지 않았다면 초기화합니다.
    // 이 배열은 모든 상태 값을 저장합니다.
    if(global.states === undefined){
        global.states = [];
    }

    //현재 상태를 가져오거나 초기 상태를 설정합니다.
    // 여기서는 상태가 배열에 저장되며, 순서에 따라 관리 됩니다.
    //global.states[index] 값이 없으면 initialState를 사용한는 취지의 or 연산자를 사용
    const currentState= global.states[index] || initialState;
    global.states[index] = currentState;

    //setState 함수는 클로저를 사용하여 현재 상태의 인덱슬를 기억합니다.
    //상태를 업데이트 하려면 이 함수를 호출합니다.
    const setState=(function(){
        let currentIndex=index; // currentIdex도 클로저 이다.
        return function(value){
            global.states[currentIndex] = value;
        }
    })();
    //(function({ 로직 })();<-- 즉시 실행 함수 IIFE (Immediarely Invoked Function Expression)
    //선언과 동시에 실행되는 함수로 한번만 실행되고 사라짐
    //매번 메모리에 남아있는 함수선언과 다릅니다.
    //특수한 셩우에만 사용하는 것이 좋다.(찾아야 하는 경우가 있음)

    //다음 상태를 위해 인덱스를 증가시킵니다.

    index=index+1;
    //현재 상태와 그 상태를 업데이트 하는 함수를 반환 합니다.
    // 이는 React의 useState() 함수는 결국 배열을 반환하는 함수
}
//MakeComponent 함수는 간략화된 React 컴포넌트 입니다.
function MakeComponent(){
    //useState 훗을 사용하여 상태와 상태 설정 함수를 가져옵니다.
    //초기 상태는 'true' 입니다.
    const useState=makeReact(); //useState() 구현을 위한 안티 패턴
    const [state,setState]= useState(true);

    //결과적으로 아래와 같은 간단한 click 이벤트 핸들일 뿐이니지만,
    //내부적으론느 '지정된 상태'를 업데이트 하는 로직을 품고있습니다.
    return(
        <>
        <div>{state.toString()}</div>
        <button onClock={()=> setState(!state)}>토글</button>
        </>
    )
}
}
console.log(<MakeComponent());