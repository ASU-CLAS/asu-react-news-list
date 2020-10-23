import React, { Component } from 'react';
import axios from 'axios';
import './D8News.css';
import Loader from 'react-loader-spinner';
import Fade from 'react-reveal/Fade';
import { Target } from 'react-popper';

class D8News extends Component {

  state = {
    ourData: [],
    pages: 0,
    currentPage: 0,
    isLoaded: false,
    callErr: true,
    errMsg: ''
  };

  componentDidMount() {
    const feedURL = this.props.dataFromPage.feed

    let interestsGroup = feedURL.split("&").slice(1, 50)
    let finishedList = []
    console.log(this.props.dataFromPage, "checking for additional data item")
    
    //split feedURL as I was getting a bug where if the first interest had no space (e.g. &Generosity) it would refuse to run the app at all. Split and sliced to return original feedURL minus additional interests
    axios.get(feedURL.split("&").slice(0, 1)).then(response => {
    //Filters through interests property from feed Obj to find matches to tag filters
    //console.log(response.data.nodes[4].node.interests.split("|"), "Testing testing")
    if(interestsGroup.length > 0){
      for (let i = 0; i < response.data.nodes.length; i++){
        if (response.data.nodes[i].node.interests.split("|").some(interest => interestsGroup.includes(interest))){
          finishedList.push(response.data.nodes[i])
        }
      }
    }
    else {
      finishedList = response.data.nodes;
    }
      //console.log("finished array", finishedList)
      
      this.setState({
        ourData: finishedList,
        pages: response.data.pager.pages,
        currentPage: response.data.pager.page,
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
      
      return this.state.ourData.slice(0, 3).map(thisNode => (
        {
        nid: thisNode.node.nid,
        title: thisNode.node.title,
        image_url: thisNode.node.image_url,
        image_alt: thisNode.node.image_alt,
        path: thisNode.node.path,
        saf: thisNode.node.field_saf,
        interests: thisNode.node.interests
      }));
    }
    else {
      return this.state.ourData.map(thisNode => ({
        nid: thisNode.node.nid,
        title: thisNode.node.title,
        image_url: thisNode.node.image_url,
        image_alt: thisNode.node.image_alt,
        path: thisNode.node.path,
        saf: thisNode.node.field_saf,
        interests: thisNode.node.interests
      }));
    }
  }


  render() {
    let results = this.setFeedLength(this.props.dataFromPage.items);
    console.log(results)
    let newsItems;
    
    if (this.props.dataFromPage.view === "Cards") {
    newsItems = results.map(( listNode, index ) => {
      return(
          <div className="col col-12 col-lg-4" key={listNode.nid}>
            <button onClick={ () => window.open(listNode.path, '_blank')}>
              <div className="card card-story card-hover h-100">
                <img className="card-img-top" src={listNode.image_url} alt={listNode.image_alt} />
                <div className="card-header">
                  <h3 className="card-title">{listNode.title}</h3>
                  
                </div>
              </div>
              
            </button>
          </div>
      )
    });
  }

  else {
    newsItems = results.map(( listNode, index ) => {
      return(
          <div className="card card-hover" key={listNode.nid}>
            <button onClick={ () => window.open(listNode.path, '_blank')}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img className="card-img h-100" src={listNode.image_url} alt={listNode.image_alt} />
                </div>
                <div className="col-md-8">
                    <div className="list-view card-body">
                      <h3 className="list-view card-title">{listNode.title}
                        <p className="card-text text-muted">{listNode.interests.split("|").join(", ")}</p>
                      </h3>
                      
                    </div>
                 </div>
              </div>
              
            </button>
          </div>
      )
    });
  }

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
          <div className="D8News">
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
