import React from 'react';
import Container from '../ui/Container';
import Content from '../ui/Content';

const Skills = ({ offset, invis }) => {
  return (
    <Container
      className={ invis ? 'invis' : ''}
      style={ offset ? { position: 'relative', bottom: offset } : ''}>
      <Content className="black col-12 sm-col-8 mx-auto">
        <h2>
          SKILLS
        </h2>
        <div className="clearfix">
          <div className="col col-12 sm-col-6 lg-col-8">
            <div className="col col-6">
              <h3>Web</h3>
              <div>
                <div>React</div>
                <div>Angular 2</div>
                <div>jQuery</div>
                <div>Gulp</div>
                <div>Webpack</div>
                <div>Ionic</div>
                <div>React Native</div>
                <div>MongoDB</div>
                <div>PostgreSQL</div>
              </div>
            </div>
            <div className="col col-6">
              <h3>Coding</h3>
              <div>
                <div>Javascript</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>PHP</div>
                <div>C++</div>
                <div>Python</div>
                <div>LabVIEW</div>
                <div>Verilog</div>
                <div>PLC</div>
              </div>
            </div>
          </div>
          <div className="col col-12 sm-col-6 lg-col-4">
            <h3>Technologies</h3>
            <div>
              <div>Revision Control - svn/git</div>
              <div>Embedded Design - µC/FPGA</div>
              <div>PCB & Circuit Design</div>
              <div>Development Life Cycle</div>
              <div>Webd Design</div>
              <div>Networking/Scripting</div>
              <div>Android Modding</div>
              <div>Parallelization - mpi</div>
              <div>Server/DB Administration</div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Skills;
