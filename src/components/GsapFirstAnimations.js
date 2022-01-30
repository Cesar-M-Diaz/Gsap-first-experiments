import '../assets/styles/GsapFirsfAnimation.css';
import { useEffect, useRef, useState } from 'react';
import { gsap, Power3 } from 'gsap';

function GsapFirstAnimation() {
  const [yellowIsClicked, setYellowIsClicked] = useState(false);
  const [redIsClicked, setRedIsClicked] = useState(false);
  const [blueIsClicked, setBlueIsClicked] = useState(false);
  const appRef = useRef(null);
  const circleYellowRef = useRef(null);
  const circleredRef = useRef(null);
  const circleBlueRef = useRef(null);

  const handleExpand = (e) => {
    let ref;

    switch (e.target.className) {
      case 'circle':
        ref = circleYellowRef;
        setYellowIsClicked(true);
        break;
      case 'circle red':
        ref = circleredRef;
        setRedIsClicked(true);
        break;
      case 'circle blue':
        ref = circleBlueRef;
        setBlueIsClicked(true);
        break;
      default:
        break;
    }

    gsap.to(ref.current, {
      duration: 1,
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
  };

  const handleShrink = (e) => {
    let ref;

    switch (e.target.className) {
      case 'circle':
        ref = circleYellowRef;
        setYellowIsClicked(false);
        break;
      case 'circle red':
        ref = circleredRef;
        setRedIsClicked(false);
        break;
      case 'circle blue':
        ref = circleBlueRef;
        setBlueIsClicked(false);
        break;
      default:
        break;
    }

    gsap.to(ref.current, {
      duration: 1,
      width: 100,
      height: 100,
      ease: Power3.easeOut,
    });
  };

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 0,
      css: {
        visibility: 'visible',
      },
    });
    gsap.from(
      [circleYellowRef.current, circleredRef.current, circleBlueRef.current],
      {
        duration: 1,
        stagger: 0.5,
        opacity: 0,
        x: 100,
        ease: Power3.easeOut,
      },
    );
  }, []);

  return (
    <div ref={appRef} className="App">
      <header className="App-header">
        <div className="circle-container">
          <div
            ref={circleYellowRef}
            onClick={!yellowIsClicked ? handleExpand : handleShrink}
            className="circle"
          ></div>
          <div
            ref={circleredRef}
            onClick={!redIsClicked ? handleExpand : handleShrink}
            className="circle red"
          ></div>
          <div
            ref={circleBlueRef}
            onClick={!blueIsClicked ? handleExpand : handleShrink}
            className="circle blue"
          ></div>
        </div>
      </header>
    </div>
  );
}

export default GsapFirstAnimation;
