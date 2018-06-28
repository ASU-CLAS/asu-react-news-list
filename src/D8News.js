import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
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

  setFeedLength = size => {
    if (size === 'Three') {
      return this.state.ourData.slice(0, 3).map(thisNode => ({ nid: thisNode.node.nid, title: thisNode.node.title, image_url: thisNode.node.image_url, image_alt: thisNode.node.image_alt, path: thisNode.node.path, author: thisNode.node["contributor-contact-information-name"], post_date: thisNode.node.post_date }));
    }
    else {
      return this.state.ourData.map(thisNode => ({ nid: thisNode.node.nid, title: thisNode.node.title, image_url: thisNode.node.image_url, image_alt: thisNode.node.image_alt, path: thisNode.node.path, author: thisNode.node["contributor-contact-information-name"], post_date: thisNode.node.post_date }));
    }
  }

  render() {
    let results = this.setFeedLength(this.props.dataFromPage.items)

    return (
      <div id="D8News">
        <Container>
            <Row>

              {results.map(( listNode, index ) => {

                return(

                  <Col xs="12" sm="6" md="4" lg="3" xl="3" key={listNode.nid}>
                    <Card>
                      <CardImg top width="100%" src={listNode.image_url} alt={listNode.image_alt} />
                      <CardBody>
                        <CardTitle>{listNode.title}</CardTitle>
                        <CardSubtitle>{listNode.author}<br />
                        {listNode.post_date}</CardSubtitle>
                        <Button className="btn btn-warning"><a href={listNode.path} className="text-dark" target="_blank">Read More</a></Button>
                      </CardBody>
                    </Card>
                  </Col>

                )

              })}

            </Row>
        </Container>
      </div>
    );
  }
}

export default D8News;
