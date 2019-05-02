import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import D8NewsCustom from './components/D8NewsCustom';
import './D8News.css';
import {  Container, Row, Col, Input, InputGroup, InputGroupAddon, Fade } from 'reactstrap';


class D8News extends Component {

  constructor(props){
    super(props);
    this.state = {
        displayOption: ''
      };
  }


  handleOptionImageClick = (option, e) => {
    e.preventDefault();
    this.setState({
      displayOption: option
    })
    this.updateInputConfig('displayOption', option)
  }

  handleFeedURL = e =>{
    e.preventDefault()
    this.setState({
      feedURL: e.target.value
    })
    this.updateInputConfig('feedURL', e.target.value)
  }

  updateInputConfig = (key, data) => {
    let inputValue = JSON.parse(document.querySelectorAll('input#'+this.state.containerId)["0"].value)
    inputValue[key] = data
    document.querySelectorAll('input#'+this.state.containerId)["0"].value = JSON.stringify(inputValue)
    return true
  }

  componentDidMount(){
    this.setState({
      containerId: ReactDOM.findDOMNode(this).parentNode.parentNode.getAttribute("id")
    })
    let inputFieldValue = document.querySelectorAll('input#' + ReactDOM.findDOMNode(this).parentNode.parentNode.getAttribute("id"))["0"].value

    if (inputFieldValue) {
      inputFieldValue = JSON.parse(inputFieldValue)

      this.setState({
        isConfigured: true,
        displayOption: inputFieldValue.displayOption,
        feedURL: inputFieldValue.feedURL,
      })

    }
    else {
      document.querySelectorAll('input#'+ReactDOM.findDOMNode(this).parentNode.parentNode.getAttribute("id"))["0"].value = JSON.stringify({
        displayOption: '',
        feedURL: '',
        custom1Nid: '',
        custom1Url: '',
        custom1CustomTitle: '',
        custom2Nid: '',
        custom2Url: '',
        custom2CustomTitle: '',
        custom3Nid: '',
        custom3Url: '',
        custom3CustomTitle: '',
      });
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="3">
                <button className={this.state.displayOption === 'random' ? 'configOptionImage configImageSelected' :'configOptionImage'} onClick={(e) => this.handleOptionImageClick('random', e)}>
                  <img src="/profiles/openclas/modules/custom/clas_news_asunow/images/randomBtn.png" alt="random" />
                </button>
            </Col>
            <Col xs="3">
                <button className={this.state.displayOption === 'latest' ? 'configOptionImage configImageSelected' :'configOptionImage'} onClick={(e) => this.handleOptionImageClick('latest', e)}>
                  <img src="/profiles/openclas/modules/custom/clas_news_asunow/images/latestBtn.png" alt="latest" />
                </button>
            </Col>
            <Col xs="3">
                <button className={this.state.displayOption === 'all' ? 'configOptionImage configImageSelected' :'configOptionImage'} onClick={(e) => this.handleOptionImageClick('all', e)}>
                  <img src="/profiles/openclas/modules/custom/clas_news_asunow/images/allBtn.png" alt="all"/>
                </button>
            </Col>
            <Col xs="3">
                <button className={this.state.displayOption === 'custom' ? 'configOptionImage configImageSelected' :'configOptionImage'} onClick={(e) => this.handleOptionImageClick('custom', e)}>
                  <img src="/profiles/openclas/modules/custom/clas_news_asunow/images/customBtn.png" alt="custom"/>
                </button>
            </Col>
          </Row>
        </Container>
        {this.state.displayOption ?
        <Fade>
          <Container className="optionsContainer">
                  {this.state.displayOption !== 'custom' ?
                    <Row>
                      <Col xs="12">
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">News tag</InputGroupAddon>
                            <Input placeholder="Example: college-liberal-arts-and-sciences" value={this.state.feedURL} onChange={(e) => this.handleFeedURL(e)} />
                          </InputGroup>
                      </Col>
                    </Row>
                   :
                   <D8NewsCustom newsConfig={this.state} updateInputConfig={this.updateInputConfig} />
                  }
          </Container>
        </Fade>
        : ''}

      </div>
      )
  }
}

export default D8News;
