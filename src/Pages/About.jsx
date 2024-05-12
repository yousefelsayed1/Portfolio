import React, { useContext } from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../constants/Data";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
import { activeContext } from "../context/ActiveContext";

export default function About() {
  const { setActive } = useContext(activeContext);
  let navigate = useNavigate();
  return (
    <div className="bg-tertiary min-h-screen">
      <section className="container mx-auto max-width">
        <div className="md:mb-24 mb-10">
          <h1 className={styles.sectionHeadText}>About Me</h1>
          <p className="text-secondary py-8 lg:max-w-3xl">
            {personalDetails.about}
          </p>
          <div className="bg-gradient rounded-xl p-0.5 w-fit drop-shadow-md">
            <button
              onClick={() => {
                navigate("/projects");
                setActive("Projects");
              }}
              className="text-white rounded-xl p-3 bg-[#604dee] md:text-lg font-bold"
            >
              See my Projects
            </button>
          </div>
        </div>
        <div className="md:mb-24 mb-10">
          <h1 className={styles.sectionHeadText}>Work Experience</h1>
          {React.Children.toArray(
            workDetails.map(
              ({ Position, Company, Location, Type, Duration }) => (
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              )
            )
          )}
        </div>
        <div className="md:mb-24 mb-10">
          <h1 className={styles.sectionHeadText}>Education</h1>
          {React.Children.toArray(
            eduDetails.map(
              ({ Position, Company, Location, Type, Duration }) => (
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              )
            )
          )}
        </div>
      </section>
    </div>
  );
}
