import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { moveSection } from '../actions/section';
import { getSections, findDifference} from '../utils/scrollingFunctions';
import MyBanner from '../assets/banner.png';
import Header from '../components/main/Header';
import Skills from '../components/main/Skills';
import Projects from '../components/main/Projects';
import Footer from '../components/main/Footer';

function mapStateToProps(state) {
  return {
    sections: state.section.get('collection'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    moveSection: (section) => dispatch(moveSection(section)),
  };
}

@connect(mapStateToProps, mapDispatchToProps)

class Main extends Component {
  static propTypes = {
    sections: PropTypes.object,
    marginOffset: PropTypes.number,
    moveSection: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.setOffset();
    window.addEventListener('scroll', this.setOffset.bind(this));
    window.addEventListener('resize', this.setOffset.bind(this));
  }

  shouldComponentUpdate(nextProps) {
    return findDifference(this.props.sections, nextProps.sections);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setOffset.bind(this));
    window.removeEventListener('resize', this.setOffset.bind(this));
  }

  render() {
    const { props } = this;
    const header = props.sections.get('header');
    const skill = props.sections.get('skill');
    const project = props.sections.get('project');
    return (
      <div>
        <div className="background">
          <div
            className="fit scroll z0"
            style={{ background: 'url(' + MyBanner + ') 0 0 / cover' }}>
            <Header
              offset={ header }
              invis={ !header } />
          </div>
          <div className={`fit bg-white scroll z1 ${ !skill ? 'invis' : '' }`}>
            <Skills
              offset={ skill }
              invis={ !skill } />
          </div>
          <div className={`fit bg-silver scroll z2 ${ !project ? 'invis' : '' }`}>
            <Projects
              offset={ project }
              invis={ !project } />
          </div>
        </div>
        <div ref="scroller">
          <div
            ref="header"
            className={`fit ${ header ? 'invis' : '' }`}>
            <Header />
          </div>
          <div
            ref="skill"
            className={`fit bg-white ${ skill ? 'invis' : '' }`}>
            <Skills />
          </div>
          <div
            ref="project"
            className={`fit bg-silver ${ project ? 'invis' : '' }`}>
            <Projects />
          </div>
          <div ref="footer" className="fit bg-white">
            <Footer />
          </div>
        </div>
      </div>
    );
  }

  setOffset = () => {
    const nextSections = getSections(
      window.scrollY,
      window.innerHeight,
      ['header', 'skill', 'project'],
      this.refs.header.offsetHeight,
      this.refs.skill.offsetHeight,
      this.refs.project.offsetHeight,
      this.refs.footer.offsetHeight,
    );
    if (findDifference(this.props.sections, nextSections)) {
      this.props.moveSection(nextSections);
    }
  }
}

export default Main;
