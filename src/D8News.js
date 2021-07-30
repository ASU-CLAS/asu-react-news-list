import React, { Component } from 'react';
import './D8News.css';
import Fade from 'react-reveal/Fade';

class D8News extends Component {
  render() {
    return (
      <Fade>
        <div className="D8News">
          <div className="row row-spaced">
            {this.props.newsItems}
          </div>
        </div>
      </Fade>
    );
  }
}

export default D8News;
