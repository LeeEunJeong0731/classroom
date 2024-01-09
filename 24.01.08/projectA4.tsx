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
