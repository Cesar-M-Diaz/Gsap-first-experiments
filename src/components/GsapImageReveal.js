import React, { useRef, useEffect } from 'react';
import '../assets/styles/GsapImageReveal.scss';
import Illustration from '../assets/images/james-jean.jpg';
import { gsap, Power2 } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const GsapImageReveal = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const imageReveal = CSSRulePlugin.getRule('.img-container:after');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
    },
  });

  useEffect(() => {
    tl.to(containerRef.current, {
      dusration: 0,
      css: { visibility: 'visible' },
    });
    tl.to(imageReveal, {
      dusration: 1.4,
      width: '0%',
      ease: Power2.easeInOut,
    });
    tl.from(imageRef.current, {
      duration: 2.5,
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.6,
    });
  });

  return (
    <section className="main">
      <p>GSAP IMAGE REVEAL</p>
      <div className="container" ref={containerRef}>
        <>
          <div className="img-container">
            <img ref={imageRef} src={Illustration} />
          </div>
        </>
      </div>
    </section>
  );
};

export default GsapImageReveal;
