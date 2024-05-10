import React from "react";
import { techStackDetails } from "../Details";
import { styles } from "../styles";
function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <div className="bg-tertiary">
      <main className="container mx-auto max-width pb-20 ">
        <section>
          <h1 className={styles.sectionHeadText}>Tech Stack</h1>
          <p className={styles.sectionSubText}>
            Technologies I've been working with recently
          </p>
        </section>
        <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={html} title="html" alt="html" loading="lazy" />
          <img src={css} title="CSS" alt="css" loading="lazy" />
          <img src={js} title="JavaScript" alt="js" loading="lazy"/>
          <img src={react} title="React" alt="react" loading="lazy"/>
          <img src={redux} title="Redux" alt="redux" loading="lazy"/>
          <img src={tailwind} title="Tailwind CSS" alt="tailwind" loading="lazy"/>
          <img src={bootstrap} title="Bootstrap" alt="bootstrap" loading="lazy"/>
          <img src={sass} title="SASS" alt="sass" loading="lazy"/>
        </section>
        <section>
          <h1 className={styles.sectionHeadText}>Tools</h1>
        </section>
        <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img src={vscode} title="Visual Studio Code" alt="" loading="lazy"/>
          <img src={git} title="Git" alt="Git" loading="lazy"/>
          <img src={github} title="Github" alt="Github" loading="lazy"/>
          <img src={figma} title="Figma" alt="Figma" loading="lazy"/>
          <img src={npm} title="NPM" alt="NPM" loading="lazy"/>
          <img src={postman} title="Postman" alt="Postman" loading="lazy"/>
        </section>
      </main>
    </div>
  );
}

export default Technologies;
