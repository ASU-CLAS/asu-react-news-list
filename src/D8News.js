import React, { Component } from 'react';
import axios from 'axios';
import './D8News.css';
import Loader from 'react-loader-spinner';
import Fade from 'react-reveal/Fade';

class D8News extends Component {

  state = {
    ourData: [],
    isLoaded: false,
    callErr: true,
    errMsg: ''
  };

  componentDidMount() {
    const feedURL = this.props.dataFromPage.feed
    axios.get(feedURL).then(response => {
      this.setState({
        ourData: response.data.nodes,
        isLoaded: true,
        callErr: false,
      })
    }).catch((error) => {
        // API call error catching
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response);
            this.setState({
              isLoaded: true,
              callErr: true,
              errMsg: 'Server responded with a status code of: ' + error.response.status
            })

        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            this.setState({
              isLoaded: true,
              callErr: true,
              errMsg: 'The request was made but no response was received.'
            })
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        //display config info for error
        console.log(error.config);
    });
  }

  setSafPath = saf => {
    let path
    switch (saf) {
      case 'Global Engagement':
        path = 'global-engagement'
        break;
      case 'Arizona Impact':
        path = 'arizona-impact'
        break;
      case 'Sun Devil Life':
        path = 'sun-devil-life'
        break;
      case 'Creativity':
        path = 'creativity'
        break;
      case 'Discoveries':
        path = 'discoveries'
        break;
      case 'Entrepreneurship':
        path = 'entrepreneurship'
        break;
      case 'Solutions':
        path = 'solutions'
        break;
      default:
        path = 'asu-news'
    }
    return path
  }

  setFeedLength = size => {
    if (size === 'Three') {
      return this.state.ourData.slice(0, 3).map(thisNode => ({
        nid: thisNode.node.nid,
        title: thisNode.node.title,
        image_url: thisNode.node.image_url,
        image_alt: thisNode.node.image_alt,
        path: thisNode.node.path,
        saf: thisNode.node.field_saf
      }));
    }
    else {
      console.log(this.state.ourData);
      return this.state.ourData.map(thisNode => ({
        nid: thisNode.node.nid,
        title: thisNode.node.title,
        image_url: thisNode.node.image_url,
        image_alt: thisNode.node.image_alt,
        path: thisNode.node.path,
        saf: thisNode.node.field_saf
      }));
    }
  }


  render() {
    let results = this.setFeedLength(this.props.dataFromPage.items)
    const newsItems = results.map(( listNode, index ) => {
      return(
          <div className="col-12 col-md-4 mb-4 zoom" key={listNode.nid}>
            <button onClick={ () => window.location.href = listNode.path}>
              <div className="card h-100">
                <img className="card-img-top" src={listNode.image_url} alt={listNode.image_alt} />
                <div className="card-body cardBody">
                  
                  <h5 className="card-title-width">{listNode.title}</h5>
                  {/*<div className="button-padding">
                    <p className="gold-button">Request Info</p>
      </div>*/}
                </div>
            </div> 
              
            </button>
          </div>
      )
    });

    if ( !this.state.isLoaded ) {
      return(
        <div className="loader">
          <Loader
  	       type="ThreeDots"
    	     color="#5C6670"
    	     height="100"
    	     width="100"
      	  />
        </div>
      )
    }
    else if (this.state.callErr && this.state.isLoaded) {
      return(
        <Fade>
          <div className="errorContainer">
            <img className="errorIcon" src="https://clas.asu.edu/sites/default/files/styles/panopoly_image_original/public/warning.png" alt="asu news loading error" />
            <h3 className="errorTitle">Oops! Looks like the ASU Now News Feed could not be loaded.</h3>
            <p className="errorCode">{this.state.errMsg}</p>
          </div>
        </Fade>
      )
    }
    else {
      return (
        <Fade>
          <div id="D8News">
            <div className="container">
                <div className="row">
                  {newsItems}
                </div>
            </div>
          </div>
        </Fade>
      );
    }
  }
}

/* Saved Snippet
    {/*<div className={this.setSafPath(listNode.saf) + " card-body cardBody"}>
                  <a href={listNode.saf ? "//asunow.asu.edu/topics/now/" + this.setSafPath(listNode.saf) : "//asunow.asu.edu/topics/news/saf/asu-news" }><span className={this.setSafPath(listNode.saf) + "Int cardInterest"}>{listNode.saf ? listNode.saf : 'ASU News'}</span></a>
                  <h5 className="card-title">{listNode.title}</h5>
      </div> */
export default D8News;
