/* eslint-disable react/prop-types */

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <a href={deployedLink} className="project-card" target="_blank" rel="noopener noreferrer">
      <div className="project-content">
        <img src={image} alt={title} className="project-image" />
        <h3>{title}</h3>
        <span>View Project</span>
      </div>
      <div className="repo-link">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </a>
  );
}

export default Project;