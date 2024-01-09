import React, { useState, useEffect } from 'react';

const Subscription;
React.FC = () => {
  // 상태값은 boolean 타입으로 초기화하여, 구독 상태를 마치 스위치 켜듯 토글 할 수 있도롣 조정

  const [isSubscribed, setIsSubscribed] = useState(false);
};
/**
 * sessionStorage는 window.sessionStorage 객체를 줄여 가용한 것이므로 사실상 window.sessionStorage와 같다.
 * 세션은 브라우저가 종로 되면 세연은 사라진다. (간단하게 상태를 저장할 때 사용한다.)
 *
 * 단순 객체 방식으로 사용 할 수 없고, setItem, getItem,removeItem 메서드를 사용해야한다.
 * 키워드 "window.sessionStorage"
 *
 * use Effect() 메서드가 동작되면, 상태가 true로 바뀌고,
 * sessionStorage에 'isSubscribed' 라는 키로 true가 저장된다.
 */
useEffect(() => {
  const subscriptionStatus = sessionStorage.getItem('isSubscribed') === 'true';
  setIsSubscribed(subscriptionStatus);
}, []);

/*
handLeSubscribe() 메서드는 fetch() 메서드를 사용하여 서버에 구독 요청을 보낸다.
'.subscribe' 로 작성된 경로는, 임의의 GET 요청을 받아 처리하는 라우터를 의미하고, 다른 REST APi 처럼 주소의 형태, 경로의 형태 등 여러가지가 될 수 있다 * */

const handleSubscribe = async () => {
    try {
        const response = await fetch('/subscribe');
        if (!response.ok){
            /*
            response.ok 는 fetch() 메서드가 정상적으로 동작했는지를 확인하는 속성 */
            
        }
    }
}