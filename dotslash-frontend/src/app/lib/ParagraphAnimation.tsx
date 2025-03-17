// Staggered container for paragraph text
export const paragraphVariants = {
    hidden: { opacity: 0.2,
        y:50,
     },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
            duration: 1.25,
        }
    }
};