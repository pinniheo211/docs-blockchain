import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export const useSplitAnimation = (selector) => {
  useEffect(() => {
    function setupSplits() {
      var tlSplitBurrowing = gsap.timeline(),
        SplitBurrowing = new SplitType(selector, {
          type: "words",
        }),
        words = SplitBurrowing.words;

      tlSplitBurrowing.to(
        words,
        {
          y: 0,
          stagger: 0.02,
          scrollTrigger: {
            trigger: selector,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
          },
        },
        "+=0"
      );
    }

    ScrollTrigger.addEventListener("refresh", setupSplits);
    setupSplits();

    return () => {
      ScrollTrigger.removeEventListener("refresh", setupSplits);
    };
  }, [selector]);
};
