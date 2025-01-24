import Project from "../components/Project";

function Portfolio() {
  const projects = [
    
    {
      title: "Blog Fusion",
      image: "https://st2.depositphotos.com/4107269/7705/i/450/depositphotos_77053627-stock-photo-journalist-working-on-his-new.jpg", 
      deployedLink: "https://bhavesh68.github.io/Blog-Fusion/",
      repoLink: "https://github.com/bhavesh68/Blog-Fusion"
    },
    {
      title: "Weather App",
      image: "https://cdn.vectorstock.com/i/500p/04/95/weather-forecast-app-interface-widget-vector-39490495.jpg", 
      deployedLink: "https://city-weather-app-i088.onrender.com/",
      repoLink: "https://github.com/bhavesh68/City-Weather-App"
    }
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;