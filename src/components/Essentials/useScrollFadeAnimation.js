import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const useScrollFadeAnimation = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollThreshold = windowHeight * 0.45; // Adjust this value to change when the animation triggers

    if (scrollPosition > scrollThreshold) {
      controls.start({ opacity: 2 });
    } else {
      controls.start({ opacity: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return controls;
};

export const useScrollFadeAnimationRight = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const scrollThreshold = windowWidth * 0.35; // Adjust this value to change when the animation triggers

    if (scrollPosition > scrollThreshold) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 100 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return controls;
};

export const useScrollFadeAnimationLeft = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const scrollThreshold = windowWidth * 0.35; // Adjust this value to change when the animation triggers

    if (scrollPosition > scrollThreshold) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: -100 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return controls;
};
