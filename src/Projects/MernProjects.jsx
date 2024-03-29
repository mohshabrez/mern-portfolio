import NavSection from "./NavSection"
import social from "../assets/social.png"
import fit from "../assets/fittohit.png"
import inventory from "../assets/inventory.png"
import financial from "../assets/financial.png"
import school from "../assets/Shoolmanagment.png"
import hospital from "../assets/hospital.png"
import event from "../assets/event.png"

export const MernProjects = () => {
    return(
        <>
        <NavSection/>
        <div className="projectsPage border grid grid-cols-3 gap-6 justify-between">
        <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={social}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Socialo App</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/socialio_master">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://socialeoo.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={fit}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Fitness Managment</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Fitness-Tracker--Assignment-17">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://hit-to-fit.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={inventory}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Inventory Managment</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/inventory-managment">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://inventory-managments-app.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={financial}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Financial Managment</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Financial-Managment">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://financial-management-app.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={school}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">School Managment</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/school-managment">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://school-managment-app.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={hospital}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Hospital Managment</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Patient-managment">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://hospital-managment-app.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          <div id="mernProjects" className="details-container projectsContainer color-container">
            <div className="article-container">
              <img
                src={event}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Event Managment</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/mohshabrez/Event-managment">Github</a>
              </button>
              <button
                class="btn btn-color-2 project-btn"
              >
                <a href="https://event-managment-app.netlify.app/">Live Demo</a>
              </button>
              </div>
          </div>
          </div>
          </>
    )
}