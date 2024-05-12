import { projectDetails } from "../constants/Data";
import { styles } from "../styles";

function Projects() {
  return (
    <div className="bg-tertiary min-h-screen pt-0">
      <section className="container mx-auto max-width ">
        <div className="md:mb-20 mb-10">
          <h1 className={styles.sectionHeadText}>Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectDetails.map(
            ({ id, title, image, techstack, previewLink, githubLink }) => (
              <div
                key={id}
                className="bg-gray-700 min-h-[300px] p-2 rounded-lg"
              >
                <img
                  src={image}
                  alt="project image"
                  loading="lazy"
                  className="rounded-lg w-full"
                />
                <div className="p-2">
                  <h1 className="text-white font-semibold text-lg">{title}</h1>
                  <h3 className="text-white font-medium pt-4">
                    <span className="font-light">{techstack}</span>
                  </h3>
                  <div className="flex justify-between items-center mt-5">
                    <div>
                      <i className="fas fa-link text-white"></i>
                      <a
                        href={previewLink}
                        target="_blank"
                        className="underline pl-2 font-light text-white"
                      >
                        Live Preview
                      </a>
                    </div>
                    <div>
                      <i className="fa-brands fa-github"></i>
                      <a
                        href={githubLink}
                        target="_blank"
                        className="underline pl-2 font-light text-white"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Projects;
