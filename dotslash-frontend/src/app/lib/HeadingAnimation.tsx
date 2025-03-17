// Staggered container for paragraph text
export const headingVariants = {
    hidden: { opacity: 1,
        y:50,
     },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.5,
            duration: 0.7,
        }
    }
};