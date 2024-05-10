import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";
import { styles } from "../styles";

function About() {
  return (
    <div className="bg-tertiary">
      <main className="container mx-auto max-width pb-20">
        <section>
          <h1 className={styles.sectionHeadText}>About Me</h1>
          <p className="text-content py-8 lg:max-w-3xl">
            {personalDetails.about}
          </p>
        </section>
        <section>
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
        </section>
        <section>
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
        </section>
      </main>
    </div>
  );
}

export default About;
