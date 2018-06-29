import React, { Component } from 'react';
import axios from 'axios';
import './D8News.css';

class D8News extends Component {

  state = {
    ourData: []
  };

  componentDidMount() {
    const feedURL = this.props.dataFromPage.feed
    axios.get(feedURL).then(response => {
          this.setState({
            ourData: response.data.nodes,
          })
    })
  }

  setFirstInterest = interests => {
    var i = interests;
    i = i.substring(0, i.indexOf('|'));
    console.log(i);
    return i
  }

  setFeedLength = size => {
    if (size === 'Three') {
      return this.state.ourData.slice(0, 3).map(thisNode => ({ nid: thisNode.node.nid, title: thisNode.node.title, image_url: thisNode.node.image_url, image_alt: thisNode.node.image_alt, path: thisNode.node.path, author: thisNode.node["contributor-contact-information-name"], post_date: thisNode.node.post_date, interests: this.setFirstInterest(thisNode.node.interests) }));
    }
    else {
      console.log(this.state.ourData);
      return this.state.ourData.map(thisNode => ({ nid: thisNode.node.nid, title: thisNode.node.title, image_url: thisNode.node.image_url, image_alt: thisNode.node.image_alt, path: thisNode.node.path, author: thisNode.node["contributor-contact-information-name"], post_date: thisNode.node.post_date, interests: this.setFirstInterest(thisNode.node.interests) }));
    }
  }


  render() {
    let results = this.setFeedLength(this.props.dataFromPage.items)

    return (
      <div id="D8News">
        <div className="container">
            <div className="row">

              {results.map(( listNode, index ) => {

                return(
                      <div className="col-12 col-md-4" key={listNode.nid}>
                        <div className="card">
                          <img className="card-img-top" src={listNode.image_url} alt={listNode.image_alt} />
                          <div className="card-body cardBody">
                            <span className="cardInterest">{listNode.interests}</span>
                            <h5 className="card-title">{listNode.title}</h5>
                          </div>
                        </div>
                      </div>



                )

              })}

            </div>
        </div>
      </div>
    );
  }
}

export default D8News;
