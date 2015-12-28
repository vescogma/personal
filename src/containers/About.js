import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { setMargin, moveSection } from '../actions/section';
import calculateMargin from '../utils/calculateMargin';
import Header from '../components/about/Header';
import Skills from '../components/about/Skills';
import Projects from '../components/about/Projects';
import Footer from '../components/about/Footer';

function mapStateToProps(state) {
  return {
    scrollCollection: state.section.get('collection'),
    marginOffset: state.section.get('margin'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    moveSection: (section) => dispatch(moveSection(section)),
    setMargin: (height) => dispatch(setMargin(height)),
  };
}

@connect(mapStateToProps, mapDispatchToProps)

class About extends Component {
  static propTypes = {
    scrollCollection: PropTypes.object,
    marginOffset: PropTypes.number,
    setMargin: PropTypes.func.isRequired,
    moveSection: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.setOffset();
    window.addEventListener('scroll', this.setOffset.bind(this));
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.marginOffset !== this.props.marginOffset;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setOffset.bind(this));
  }

  render() {
    { props } = this;
    return (
      <div>
        <div className="background">
          <div
            className="fit bg-red scroll-0"
            ref="header">
            <Header />
          </div>
          <div
            className={`fit bg-yellow scroll-1 ${ props.scrollCollection.get('skills') ? isVisible : '' }`}
            ref="back-skills">
            <Skills />
          </div>
          <div
            className={`fit bg-navy scroll-2 ${ props.scrollCollection.get('projects') ? isVisible : '' }`}
            ref="back-project">
            <Projects />
          </div>
        </div>
        <div ref="scroller">
          <div
            className={`fit bg-yellow ${ props.scrollCollection.get('skills') ? isVisible : '' }`}
            ref="skills">
            <Skills />
          </div>
          <div
            className={`fit bg-navy ${ props.scrollCollection.get('projects') ? isVisible : '' }`}
            ref="projects">
            <Projects />
          </div>
          <div className="fit bg-green" ref="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }

  setOffset = () => {
    this.props.moveSection(calculateMargin(
      window.scrollY,
      ['skills', 'projects'],
      this.refs.header.offsetHeight,
      this.refs.skills.offsetHeight,
      this.refs.projects.offsetHeight,
      this.refs.footer.offsetHeight,
    ));
  }
}

export default About;
