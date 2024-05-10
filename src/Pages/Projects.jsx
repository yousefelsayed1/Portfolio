import React, { useRef } from "react";
import { projectDetails } from "../Details";
import { styles } from "../styles";

function Projects() {
  return (
    <div className="bg-tertiary h-home pt-0">
      <main className="container mx-auto max-width ">
        <section>
          <h1 className={styles.sectionHeadText}>Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {React.Children.toArray(
              projectDetails.map(
                ({ title, image, techstack, previewLink, githubLink }) => (
                  <article className="rounded-xl mt-10 overflow-hidden">
                    <div className="bg-gray-700 article-img">
                      <img src={image} alt="" loading="lazy" />
                    </div>
                    <div className="bg-gray-700 article p-4">
                      <h1 className="text-white font-semibold text-lg pt-1">
                        {title}
                      </h1>
                      <h3 className="text-white font-medium pt-4">
                        <span className="font-light">{techstack}</span>
                      </h3>
                      <div className="flex justify-between items-center mt-5">
                        <div>
                          <i className="fas fa-link text-white"></i>
                          <a
                            href={previewLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline pl-2 font-light text-white"
                          >
                            Live Preview
                          </a>
                        </div>
                        <div>
                          <i class="fa-brands fa-github"></i>
                          <a
                            href={githubLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline pl-2 font-light text-white"
                          >
                            View Code{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
