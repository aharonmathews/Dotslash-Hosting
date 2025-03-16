// Staggered container for paragraph text
export const paragraphVariants = {
    hidden: { opacity: 0,
        y:20,
     },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            staggerChildren: 0.01,
            delayChildren: 0.2,
            duration: 0.5,
        }
    }
};