import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './D8News.css';
import Loader from 'react-loader-spinner';
import { Fade } from 'react-awesome-reveal';

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

    let finishedList = []
    //console.log(this.props.dataFromPage, "checking for additional data item")

    let feedTags = feedURL.split(",");
    let baseFeed = feedTags.shift();
    console.log(baseFeed);
    console.log(feedTags);

    let keepTags = []
    let removeTags = []
    for (let i = 0; i < feedTags.length; i++){
      if(feedTags[i][0] == "-") {
        removeTags.push(feedTags[i].substring(1).toLowerCase())
      }
      else {
        if(feedTags[i][0] == "&") {
          keepTags.push(feedTags[i].substring(1).toLowerCase())
        }
        else {
          keepTags.push(feedTags[i].toLowerCase())
        }

      }
    }

    // Show items with these tags
    console.log("Show items with these tags");
    console.log(keepTags);

    // Hide items with these tags
    console.log("Hide items with these tags");
    console.log(removeTags);


    axios.get(baseFeed).then(response => {
    //Filters through interests property from feed Obj to find matches to tag filters

    //splits interest tags from feed data and compares to tags selected by user, and pushes news articles that match selected tags to the array of displayed articles
    if(keepTags.length > 0){
      for (let i = 0; i < response.data.nodes.length; i++){
        console.log('process story ------- '+response.data.nodes[i].node.title);
        //console.log(response.data.nodes[i].node.interests.split("|"))
        let allNodeTags = response.data.nodes[i].node.interests.toLowerCase().split("|")
        allNodeTags = allNodeTags.concat(response.data.nodes[i].node.news_units.toLowerCase().split("|"))
        allNodeTags = allNodeTags.concat(response.data.nodes[i].node.audiences.toLowerCase().split("|"))
        console.log('All tags for this story:')
        console.log(allNodeTags)
        if (allNodeTags.some(interest => keepTags.includes(interest.toLowerCase()))){
          finishedList.push(response.data.nodes[i])
          console.log('matched')
        }
      }
      //finishedList = response.data.nodes;
    }
    else {
      finishedList = response.data.nodes;
    }

    if(removeTags.length > 0){
      let newFinishedList = []
      for (let i = 0; i < finishedList.length; i++){
        let allNodeTags = response.data.nodes[i].node.interests.toLowerCase().split("|")
        allNodeTags = allNodeTags.concat(response.data.nodes[i].node.news_units.toLowerCase().split("|"))
        allNodeTags = allNodeTags.concat(response.data.nodes[i].node.audiences.toLowerCase().split("|"))
        console.log('process story ------- '+response.data.nodes[i].node.title);
        console.log(finishedList[i].node.interests.split("|"));
        if (allNodeTags.some(interest => removeTags.includes(interest.toLowerCase()))){

        }
        else {
          newFinishedList.push(finishedList[i])
        }
      }
      finishedList = newFinishedList;
    }


      console.log("finished array", finishedList)

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


  setFeedLength = size => {
    if (size === 'Three') {

      return this.state.ourData.slice(0, 3).map(thisNode => (
        {
        nid: thisNode.node.nid,
        teaser: thisNode.node.clas_teaser,
        title: thisNode.node.title,
        image_url: thisNode.node.image_url,
        image_alt: thisNode.node.image_alt,
        path: thisNode.node.path + + "?{_src}=news-story",
        saf: thisNode.node.field_saf,
        interests: thisNode.node.interests
      }));
    }
    else {
      return this.state.ourData.map(thisNode => ({
        nid: thisNode.node.nid,
        teaser: thisNode.node.clas_teaser,
        title: thisNode.node.title,
        image_url: thisNode.node.image_url,
        image_alt: thisNode.node.image_alt,
        path: thisNode.node.path + "?{_src}=news-story",
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
      let newTeaser = listNode.teaser
      if(listNode.teaser.length > 120) {
        newTeaser = listNode.teaser.substr(0, listNode.teaser.lastIndexOf(' ', 120))
        newTeaser += "..."
      }
      return(
          <div className="col col-12 col-lg-4" key={listNode.nid}>
            <button onClick={ () => window.open(listNode.path, '_blank')}>
              <div className="card card-story card-hover h-100">
                <img className="card-img-top" src={listNode.image_url} alt={listNode.image_alt} />
                <div className="card-header">
                  <h4 className="card-title">{listNode.title}</h4>
                </div>
                <div className="card-body">
                  <p className="card-text text-dark card-teaser">{newTeaser}</p>
                </div>
                <div className="card-tags">
                  {listNode.interests.split("|").map(( tagItem, index ) => {
                    return(
                      <span className='btn btn-tag btn-tag-alt-white' href='#'>{tagItem} </span>
                    )
                  })}
                </div>
              </div>

            </button>
          </div>
      )
    });
  }

  else {
    newsItems = results.map(( listNode, index ) => {
      let newTeaser = listNode.teaser
      if(listNode.teaser.length > 120) {
        newTeaser = listNode.teaser.substr(0, listNode.teaser.lastIndexOf(' ', 120))
        newTeaser += "..."
      }
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
                <div className="row row-spaced">
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
