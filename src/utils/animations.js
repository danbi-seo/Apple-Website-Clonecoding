import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGasp = (target, animationProps, scrollProps) => {
  gsap.to(
    target,
    {
      ...animationProps,
      scrollTrigger: {
        trigger: target,
        toggleActions: "restart pause pause reverse",
        start: "top 90%",
        scrollProps,
      },
    },
    []
  );
};
/* target: 애니메이션 대상, 타켓이 아래지점 10%에 닿을때 트리거 시작. 

toggleActions: "restart pause pause reverse"
-onEnter : restart(뷰포트로 들어오면 처음부터 재생)
-onLeave: pause(뷰포트 벗어나면 일시정지)
-onEnterBack: pause(다시 아래에서 위로 들어올때 일시정지)
-onLeaveBack: reverse(다시 위로 벗어나면 역재생)
*/

export const animateWithTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power1.easeInOut",
  });
  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.easeInOut",
    },
    "<"
  );
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.easeInOut",
    },
    "<"
  );
};

/* 
GASP 타임라인을 받아서 y축을 변경하고, firstTarget secondTarget 의 속성 애니메이션을 동시에 실행하도록 하는 유틸 함수

-gsap.timeline() 트윈 3개 추가
-rotationRef.current.rotation 객체의 y 값을 rotationState로 1초 동안 보간(두 값 사이의 중간값을 계산해가며 시간에 따라 변하게 함)
-세 번째 인자인 포지션 파라미터 "<"는 바로 직전 트윈과 같은 시작 시각을 의미 → 즉, 회전 트윈과 동시에 시작
*/
