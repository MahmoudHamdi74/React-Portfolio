import { motion } from "framer-motion";
import { useParallax, useScrollAnimation, useScrollProgress } from "../../hooks/useScrollAnimation";

export const ScrollProgressBar = () => {
    const scrollProgress = useScrollProgress();
    return (
        <motion.div
            className="flex top-0 left-0 right-0 h-1 z-50"
            initial={{opacity: 0}}
            animate={{opacity: scrollProgress > 5 ? 1 : 0}}
            transition={{duration: 0.3}}
        >
            <motion.div
                className="h-full bg-linear-to-r from-yellow-400 to-orange-400 dark:from-blue-500 dark:to-purple-500"
                style={{ width: `${scrollProgress}%` }}
                transition={{duration: 0.1 , ease: "easeOut"}}
            />
            <motion.div
                className="absolute top-0 left-0 h-full bglinear-to-r from-yellow-400 to-orange-400 dark:from-blue-500 dark:to-purple-500 opacity-50"
                style={{ width: `${100 - scrollProgress}%` }}
                transition={{duration: 0.1 , ease: "easeOut"}}
            />
        </motion.div>
    );
};

export const ParallaxBackground = () => {
    const slowParallax = useParallax(0.3);
    const mediumParallax = useParallax(0.5);
    const fastParallax = useParallax(0.8);
    
    const getGridientColors = () =>{
        switch (document.documentElement.classList.contains("dark") ? "dark" : "light"){
            case "light":
                return{
                    slow: "from-yellow-400 to-orange-400",
                    medium: "from-yellow-300 to-orange-300",
                    fast: "from-yellow-200 to-orange-200"
                }
            case "dark":
                return{
                    slow: "from-blue-500 to-purple-500",
                    medium: "from-blue-400 to-purple-400",
                    fast: "from-blue-300 to-purple-300"
                }
            default:
                return{
                    slow: "from-blue-500 to-purple-500",
                    medium: "from-blue-400 to-purple-400",
                    fast: "from-blue-300 to-purple-300"
                }
        }
    };
    const colors = getGridientColors();
    return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <motion.div
                className={`absolute top-0 left-0 w-full h-screen bg-linear-to-r ${colors.slow} opacity-30`}
                style={{ transform: `translateY(${slowParallax}px)` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" />
            </motion.div>
            <motion.div
        className={`absolute inset-0 bg-linear-to-tl ${colors.medium}`}
        style={{ transform: `translateY(${mediumParallax}px)` }}
      >
        <div className="absolute top-2/3 right-1/3 w-80 h-80 rounded-full blur-2xl opacity-20" />
      </motion.div>

      {/* Fast moving accents */}
      <motion.div
        className={`absolute inset-0 bg-linear-to-r ${colors.fast}`}
        style={{ transform: `translateY(${fastParallax}px)` }}
      >
        <div className="absolute top-1/2 left-2/3 w-64 h-64 rounded-full blur-xl opacity-15" />
      </motion.div>
      <motion.div
       style={{ transform: `translateY(${slowParallax * 0.5}px)` }}
        className="absolute top-1/3 right-1/4 opacity-5"
      >
        <motion.div
            animate={{ rotate: 360 }}
            transition={{duration:20,repeat:Infinity,ease:"linear"}}
            className="w-32 h-32 border border-gray-300 dark:border-purple-500/20 rotate-45"
        />
      </motion.div>
      <motion.div
        style={{ transform: `translateY(${mediumParallax * 0.3}px)` }}
        className="absolute bottom-1/4 left-1/5 opacity-5"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={'w-24 h-24 rounded-full border border-gray-300 dark:border-blue-500/20'}
        />
      </motion.div>
        </div>
    );
};

export const TextReveal = ({children , delay = 0 , className = ""}) => {
    const [ref , isVisible] = useScrollAnimation({delay});
    return (
        <div ref={ref} className={`${className} overflow-hidden`}>
            <motion.div
                initial={{y: "100%"}}
                animate={{y: isVisible ? "0%" : "100%"}}
                transition={{duration: 0.9 , ease: "easeOut"}}
            >
                {children}
            </motion.div>
        </div>
    );
}

export const StaggeredList = ({children , itemDelay = 0.1 , className = ""}) => {
    const [ref , isVisible] = useScrollAnimation();
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: itemDelay}
                },
            }
        }
        className={className}
        >
            {children}
        </motion.div>
    );
}

export const StaggeredListItem = ({children , className = ""}) => (
    <motion.div
        variants={{
            hidden: {opacity: 0 , x: -30},
            visible: {opacity: 1 , x: 0 , transition: {duration: 0.6 , ease: "easeOut"}}
        }}
        className={className}
    >
        {children}
    </motion.div>
);

export const AnimatedCounter = ({
    from = 0,
    to,
    suffix ="",
    className = "",
})=> {
    const [ref , isVisible] = useScrollAnimation({triggerOnce: true});
    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{opacity: 0}}
            animate={{opacity: isVisible ? 1 : 0}}
            >
                {isVisible ? `${to}${suffix}` : `${from}${suffix}`}
            </motion.span>
    )
}