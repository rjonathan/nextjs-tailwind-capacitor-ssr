import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

const PageLayout = ({ children, h1 = null, hrefRetour = null }) => {
  return (
    <>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", duration: 1 }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default PageLayout;
