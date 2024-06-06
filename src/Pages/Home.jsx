import { styles } from "../styles";
import { personalDetails } from "../constants/Data";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { activeContext } from "../context/ActiveContext";
import { useContext } from "react";

function Home() {
  let navigate = useNavigate();
  const { setActive } = useContext(activeContext);
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <section
        className={`container mx-auto max-w-[90%] min-h-screen md:flex justify-between items-center gap-24`}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.8,
          }}
          className={`flex flex-row items-start gap-5 md:mb-0 mb-20`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Youssef</span>
            </h1>
            <p className={`${styles.heroSubText} my-2 text-white-100`}>
              Frontend developer
              <br />I develop and maintain web applications using React and its
              ecosystem
            </p>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-20, 0, -20] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="mt-10 bg-gradient rounded-xl p-0.5 w-fit"
            >
              <button
                type="button"
                onClick={() => {
                  navigate("/about");
                  setActive("About");
                }}
                className="text-white rounded-xl p-2.5 bg-[#604dee] md:text-lg font-bold"
              >
                About me
              </button>
            </motion.div>
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
