import { styles } from "../styles";
import { personalDetails } from "../Details";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-home ">
      <section
        className={`w-full mx-auto h-home md:flex justify-between items-center max-w-[90%]`}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.8,
          }}
          className={`mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Youssef</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Frontend developer
              <br />I develop and maintain web applications using React and its
              ecosystem
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.8,
          }}
          className="mt-5 md:mt-0 "
        >
          <img
            className="profile w-4/5 md:w-full md:ml-auto mx-auto rounded-full bg-gradient p-2"
            src={personalDetails.img}
            alt="youssef image"
            loading="lazy"
          />
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
