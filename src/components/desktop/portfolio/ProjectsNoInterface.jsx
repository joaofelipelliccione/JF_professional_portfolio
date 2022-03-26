import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/desktop/portfolio/projectsNoInterface.css';

function ProjectsNoInterface() {
  const withoutInterface = useSelector((state) => state.reducer.projectsData.withoutInterface);

  return (
    <section id="projectsWithoutInterface">
      <h2>Projects without Interface</h2>
      <div id="projectsWithoutIntContainer">
        {withoutInterface.map(({ id, title, skills, description, timeInProg, URL }) => (
          <div id="eachProjectWithoutIntCard" key={ id }>
            <div id="eachProjectWithoutIntCardFront">
              <h3>{ title }</h3>
              <h4>{`Use of ${skills}`}</h4>
            </div>
            <div id="eachProjectWithoutIntCardBack">
              <p id="noInterfaceProjectDescription">{ description }</p>
              <p id="noInterfaceTimeInProg">{`Time since I started coding: ${timeInProg}`}</p>
              <a href={ URL } target="_blank" rel="noreferrer">Check the code!</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsNoInterface;
