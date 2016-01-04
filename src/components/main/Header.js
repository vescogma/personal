import React from 'react';
import Container from '../ui/Container';
import Content from '../ui/Content';
import Image from '../ui/Image';
import MyFace from '../../assets/face.jpg';

const Header = ({ offset, invis }) => {
  return (
    <Container
      className={ invis ? 'invis' : ''}
      style={ offset ? { position: 'relative', bottom: offset } : ''}>
      <Content className="center black col-12 sm-col-8 mx-auto">
        <h2>
          Hello, my name is Miguel Vesco.
        </h2>
        <div className="p2 image-wrap mx-auto">
          <Image
            className="circle image-max"
            src={ MyFace } />
        </div>
        <div className="rounded p1 bg-black white">
          <p>
            I am a Developer, Musician, and a Mechatronics Engineering graduate.
          </p><p>
            I follow emerging technologies and their industries. I have a great interest in
            graphic design, enjoy messing with hardware, have a passion for music,
            enjoy good company and love delicious food.
          </p><p>
            Welcome to my site :)
          </p>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
