처음 botStep이 뜨는건 이전 task의 userStep이 활성화 되었는지를 체크하여 실행

1. MotionList aniCondition -> botStep
    - 일단, showBotStep을 true로, MotionList aniCondition을 true로 설정

2. dispatch, setShowBotStep, setShowUserStep, isLastLocate
3. useSelector (botStep, userStep)
4. div로 감싸로 높이 조절 showHeight 모듈 + 40

5. 이전 userStep 에서 활성화시킨 값을 통해 botStep 활성화하기
   이후 setTimeout으로 botStep값 dispatch 하기 -> useEffect 활용

6. CTA 버튼, userStep condition값으로 disabled 연결하기

7. CTA 버튼 연결 or 바텀시트 연결

8. 마지막 step 체크 - 다음 userStep 값을 지정   
