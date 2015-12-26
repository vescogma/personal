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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setOffset.bind(this));
  }

  render() {
    const { props } = this;

    return (
      <div>
        <div className="background">
          <div className="fit bg-red scroll-back scroll-0" ref="header">
            <Header />
          </div>
          { props.scrollCollection.get('skills') === true ?
            <div className="fit bg-gray scroll-back scroll-1" ref="skills">
              <Skills />
            </div> : '' }
          { props.scrollCollection.get('projects') === true ?
            <div className="fit bg-navy scroll-back scroll-2" ref="projects">
              <Projects />
            </div> : '' }
        </div>
        <div ref="scroller" style={{ paddingTop: props.marginOffset }}>
          { props.scrollCollection.get('skills') === false ?
            <div className="fit bg-gray" ref="skills">
              <Skills />
            </div> : '' }
          { props.scrollCollection.get('projects') === false ?
            <div className="fit bg-navy" ref="projects">
              <Projects />
            </div> : '' }
          <div className="fit bg-green" ref="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }

  setOffset = () => {
    const scrollMap = calculateMargin(
      window.scrollY,
      { section: 'header', value: this.refs.header.offsetHeight },
      [
        { section: 'skills', value: this.refs.skills.offsetHeight },
        { section: 'projects', value: this.refs.projects.offsetHeight },
        { section: 'footer', value: this.refs.footer.offsetHeight },
      ],
    );
    this.props.moveSection(scrollMap);
  };
}

export default About;
