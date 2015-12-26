import React from 'react';
import Container from '../ui/Container';
import Content from '../ui/Content';
import Image from '../ui/Image';

const Projects = () => {
  return (
    <Container>
      <Content className="center white col-12 sm-col-8 mx-auto">
        <h2>
          Hello, this is the projects section.
        </h2>
        <div className="p2 col-8 sm-col-6 mx-auto">
          <Image
            className="circle image-max"
            src="http://miguel.io/img/me.jpg" />
        </div>
        <p>
          I am a Developer, Musician, and a Mechatronics Engineering graduate.
        </p><p>
          I follow emerging technologies and their industries. I have a great interest in
          graphic design, enjoy messing with hardware, have a passion for music,
          enjoy good company and love delicious food.
        </p><p>
          Welcome to my site :)
        </p>
      </Content>
    </Container>
  );
};

export default Projects;
