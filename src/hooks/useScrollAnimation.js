import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (options = {}) => {
const elementRef = useRef(null);
const [isVisible, setIsVisible] = useState(false);
const [hasAnimated, setHasAnimated] = useState(false);
const { threshold = 0.1, triggerOnce = true , rootMargin = "0px 0px -100px 0px" , delay = 0 } = options;

useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    setIsVisible(true);
                    if (triggerOnce) {
                        setHasAnimated(true);
                    }
                },delay);

            } else if (!triggerOnce && !hasAnimated) {
                setIsVisible(false);
            }
        },
        { threshold, rootMargin }
    );
    observer.observe(element);
    return () => {
        observer.unobserve(element);
    };
}, [threshold, triggerOnce, rootMargin, delay, hasAnimated]);
return [elementRef, isVisible];
};

export const useScrollProgress = () => {
const [scrollProgress, setScrollProgress] = useState(0);
useEffect(() => {
    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const curentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100 , Math.max(0, curentProgress)));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);
return scrollProgress;
};

export const useParallax = (speed = 0.5) => {
    const [offset, setOffsetY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY * speed);
        };
        window.addEventListener("scroll", handleScroll , { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);
    return offset;
}