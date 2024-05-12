import React from "react";
import { techStackDetails, techTolls } from "../constants/Data";
import { styles } from "../styles";
import { easeInOut, motion } from "framer-motion";

function Technologies() {
  return (
    <div className="bg-tertiary min-h-screen">
      <section className="container mx-auto max-width pb-20 ">
        <div className="my-10">
          <h1 className={styles.sectionHeadText}>Tech Stack</h1>
          <p className={styles.sectionSubText}>
            Technologies I've been working with recently
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 items-center gap-10">
          {techStackDetails.map((el, i) => (
            <motion.div
              key={el.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: easeInOut, delay: i * 0.2 }}
            >
              <img
                src={el.icon}
                alt={el.name}
                loading="lazy"
                className="w-16"
              />
            </motion.div>
          ))}
        </div>
        <div className="my-10">
          <h1 className={styles.sectionHeadText}>Tools</h1>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 items-center gap-10">
          {techTolls.map((el, i) => (
            <motion.div
              key={el.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: easeInOut, delay: i * 0.2 }}
            >
              <img
                src={el.icon}
                alt={el.name}
                loading="lazy"
                className="w-16"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Technologies;
