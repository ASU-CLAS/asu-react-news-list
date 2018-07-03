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

    return (
      <div id="D8News">
        <div className="container">
            <div className="row">

              {results.map(( listNode, index ) => {

                return(
                      <div className="col-12 col-md-4 mb-4 zoom" key={listNode.nid}>
                        <a href={listNode.path}>
                          <div className="card h-100">
                            <img className="card-img-top" src={listNode.image_url} alt={listNode.image_alt} />
                            <div className={this.setSafPath(listNode.saf) + " card-body cardBody"}>
                              <a href={listNode.saf ? "//asunow.asu.edu/topics/now/" + this.setSafPath(listNode.saf) : "//asunow.asu.edu/topics/news/saf/asu-news" }><span className={this.setSafPath(listNode.saf) + "Int cardInterest"}>{listNode.saf ? listNode.saf : 'ASU News'}</span></a>
                              <h5 className="card-title">{listNode.title}</h5>
                            </div>
                          </div>
                        </a>
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
