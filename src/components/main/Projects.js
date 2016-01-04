import React from 'react';
import Container from '../ui/Container';
import Content from '../ui/Content';

const Projects = ({ offset, invis }) => {
  return (
    <Container
      className={ invis ? 'invis' : ''}
      style={ offset ? { position: 'relative', bottom: offset } : ''}>
      <Content className="center black col-12 sm-col-8 mx-auto">
        <h2>
          Hello, this is the projects section.
        </h2>
        <div>
          Project 1
        </div>
        <div>
          Some kind of description for project 1 goes here. Lorem ipsum carpen
          diem some other latin why do I even bother seriously. I guess I should
          add a picture as well. I will have to find it later  guess.
        </div>
        <div>
          Project 2
        </div>
        <div>
          Some kind of description for project 22 goes here. Lorem ipsum carpen
          diem some other latin why do I even bother seriously. I guess I should
          add a picture as well. I will have to find it later  guess.
        </div>
        <div>
          Project 3
        </div>
        <div>
          Some kind of description for project 3 goes here. Lorem ipsum carpen
          diem some other latin why do I even bother seriously. I guess I should
          add a picture as well. I will have to find it later  guess.
        </div>
      </Content>
    </Container>
  );
};

export default Projects;
