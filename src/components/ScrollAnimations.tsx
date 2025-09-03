import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.section-fade');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    // Initial check
    handleScrollAnimations();

    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('load', handleScrollAnimations);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      window.removeEventListener('load', handleScrollAnimations);
    };
  }, []);

  return null;
}