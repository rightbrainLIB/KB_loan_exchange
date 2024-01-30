처음 botStep이 뜨는건 이전 task의 userStep이 활성화 되었는지를 체크하여 실행

1. MotionList aniCondition -> botStep
    - 일단, showBotStep을 true로, MotionList aniCondition을 true로 설정

2. div로 감싸고 높이 조절, MotionList의 showHeight속성값으로 (모듈 + 40)

3. dispatch, setShowBotStep, setShowUserStep, isLastLocate

const dispatch = useDispatch();

const [showBotStep, setShowBotStep] = useState(false);
const [showUserStep, setShowUserStep] = useState(false);
const [isLastChoice, setIsLastChoice] = useState(false);

4. useSelector (botStep, userStep)
   userStep = 이전 task 속성
   botStep = 파일명과 같은 slice 속성 등록

const { changeUserInput, selected10Years } = useSelector(
(state: KBState) => state.loan.userStep
);
const { loanPeriodSelect } = useSelector(
(state: KBState) => state.loan.botStep
);

5. 이전 userStep 에서 활성화시킨 값을 통해 botStep 활성화하기
    - setTimeout, 600으로 botStep값 dispatch 하기 -> useEffect 활용

6. CTA 버튼, userStep condition값으로 disabled 연결하기

- @slices/exchangeSlices 에서 botStep의 현재 state setter, userStep의 현재 state setter 불러오기

7. CTA 버튼 연결 or 바텀시트 연결

- 최종 CTA 버튼 선택시 : goNextTask
    - goNextTask : setShowUserStep(true),
      : setTimeout(() => dispatch(다음state true setter()), )

8. 마지막 step 체크 - 다음 userStep 값을 지정   
   // 마지막 step 체크하기
   const lastStr = LastTrueUserStepLoan();

useEffect(() => {
setIsLastChoiceNegative(lastStr === "saveAlarm");
setIsLastChoicePositive(lastStr === "isTakenPlace");
}, [lastStr]);