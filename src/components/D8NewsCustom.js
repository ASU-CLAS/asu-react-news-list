import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../D8News.css';
import {  Row,
          Col,
          Input,
          Form,
          FormGroup,
          Label,
          Fade
         } from 'reactstrap';


class D8NewsCustom extends Component {

  constructor(props){
    super(props);
    this.state = {
        customPreviewImg: '/profiles/openclas/modules/custom/clas_news_asunow/images/previewimg.png',
        customPreviewTitle: 'Please enter a valid ASU Now article URL to render to render this preview.',
        customPreviewSaf: 'arizona-impact',
        customCurrent: 1,
        customUrl: '',
        customImg: '',
        customTitle: '',
        customSaf: '',
        custom1Img: '',
        custom1Url: '',
        custom1Title: '',
        custom1CustomTitle: '',
        custom1Saf: '',
        custom2Img: '',
        custom2Url: '',
        custom2Title: '',
        custom2CustomTitle: '',
        custom2Saf: '',
        custom3Img: '',
        custom3Url: '',
        custom3Title: '',
        custom3CustomTitle: '',
        custom3Saf: '',
        previewIsLoading: false,
        urlError: false
      };
  }



  handleUpdateTitle = (e) => {
    e.preventDefault();
    switch (this.state.customCurrent) {
      case 1:
        this.setState({
          customTitle: e.target.value,
          custom1CustomTitle: e.target.value
        })
        this.props.updateInputConfig('custom1CustomTitle', e.target.value)
        break;
      case 2:
        this.setState({
          customTitle: e.target.value,
          custom2CustomTitle: e.target.value
        })
        this.props.updateInputConfig('custom2CustomTitle', e.target.value)
        break;
      case 3:
        this.setState({
          customTitle: e.target.value,
          custom3CustomTitle: e.target.value
        })
        this.props.updateInputConfig('custom3CustomTitle', e.target.value)
        break;
      default:
        console.log('no current custom numb');

    }
  }

  handleResetCustomTitle = (e) => {
    e.preventDefault();
    switch (this.state.customCurrent) {
      case 1:
        this.setState({
          customTitle: this.state.custom1Title,
          custom1CustomTitle: ""
        })
        break;
      case 2:
        this.setState({
          customTitle: this.state.custom2Title,
          custom2CustomTitle: ""
        })
        break;
      case 3:
        this.setState({
          customTitle: this.state.custom3Title,
          custom3CustomTitle: ""
        })

        break;
      default:
        console.log('no current custom numb');

    }
  }

  handleCustomCurrent = (e, option) => {

    e.preventDefault()
    switch (option) {
      case 1:
        this.setState({
          customCurrent: option,
          customTitle: this.state.custom1CustomTitle === '' ? this.state.custom1Title : this.state.custom1CustomTitle,
          customUrl: this.state.custom1Url,
          customImg: this.state.custom1Img,
          customSaf: this.state.custom1Saf,
          urlError: false,
          previewIsLoading: false
        })
        this.getCustomDataByNid(this.state.custom1Nid)
        break;
      case 2:
        this.setState({
          customCurrent: option,
          customTitle: this.state.custom2CustomTitle === '' ? this.state.custom2Title : this.state.custom2CustomTitle,
          customUrl: this.state.custom2Url,
          customImg: this.state.custom2Img,
          customSaf: this.state.custom2Saf,
          urlError: false,
          previewIsLoading: false
        })
        this.getCustomDataByNid(this.state.custom2Nid)
        break;
      case 3:
        this.setState({
          customCurrent: option,
          customTitle: this.state.custom3CustomTitle === '' ? this.state.custom3Title : this.state.custom3CustomTitle,
          customUrl: this.state.custom3Url,
          customImg: this.state.custom3Img,
          customSaf: this.state.custom3Saf,
          urlError: false,
          previewIsLoading: false
        })
        this.getCustomDataByNid(this.state.custom3Nid)
        break;
    }

  }

  checkHostName = url => {
    let match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
  }

  handleCustomUrl = (option, e) => {

    if (this.checkHostName(e.target.value) === 'asunow.asu.edu') {
      let endpoint = e.target.value.substr(e.target.value.lastIndexOf('.edu/') + 5);

      this.setState({
        customUrl: e.target.value,
        previewIsLoading: true,
        urlError: false
      })

      const feedURL = '/clas-feeds/asunow/getnid/' + endpoint
        axios.get(feedURL).then(response => {

          switch(this.state.customCurrent){
            case 1:
              this.setState({
                custom1Nid: response.data.node,
                custom1Url: this.state.customUrl
              })
              this.props.updateInputConfig('custom1Nid', response.data.node)
              this.props.updateInputConfig('custom1Url', this.state.customUrl)
              this.getCustomDataByNid(response.data.node)
              break;
            case 2:
              this.setState({
                custom2Nid: response.data.node,
                custom2Url: this.state.customUrl
              })
              this.props.updateInputConfig('custom2Nid', response.data.node)
              this.props.updateInputConfig('custom2Url', this.state.customUrl)
              this.getCustomDataByNid(response.data.node)
              break;
            case 3:
              this.setState({
                custom3Nid: response.data.node,
                custom3Url: this.state.customUrl
              })
              this.props.updateInputConfig('custom3Nid', response.data.node)
              this.props.updateInputConfig('custom3Url', this.state.customUrl)
              this.getCustomDataByNid(response.data.node)
              break;
          }

        }).catch((error) => {
            // API call error catching
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response);
                this.setState({
                  previewIsLoading: false,
                  urlError: true,
                  errMsg: 'Server responded with a status code of: ' + error.response.status
                })

            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                this.setState({
                  previewIsLoading: false,
                  urlError: true,
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
    else {
      this.setState({
        urlError: true
      })
    }




  }

  getCustomDataByNid = (nid) => {
    const feedURL = '/clas-feeds/asunow/story/' + nid
      axios.get(feedURL).then(response => {

        switch(this.state.customCurrent){
          case 1:
            this.setState({
              custom1Img: response.data.nodes[0].node.hero_image,
              custom1Title: response.data.nodes[0].node.title,
              custom1Saf: response.data.nodes[0].node.field_saf,
              customImg: response.data.nodes[0].node.hero_image,
              customTitle: this.state.custom1CustomTitle === '' ? response.data.nodes[0].node.title : this.state.custom1CustomTitle,
              customSaf: response.data.nodes[0].node.field_saf,
              previewIsLoading: false
            })
            break;
          case 2:
            this.setState({
              custom2Img: response.data.nodes[0].node.hero_image,
              custom2Title: response.data.nodes[0].node.title,
              custom2Saf: response.data.nodes[0].node.field_saf,
              customImg: response.data.nodes[0].node.hero_image,
              customTitle: this.state.custom2CustomTitle === '' ? response.data.nodes[0].node.title : this.state.custom2CustomTitle,
              customSaf: response.data.nodes[0].node.field_saf,
              previewIsLoading: false
            })
            break;
          case 3:
            this.setState({
              custom3Img: response.data.nodes[0].node.hero_image,
              custom3Title: response.data.nodes[0].node.title,
              custom3Saf: response.data.nodes[0].node.field_saf,
              customImg: response.data.nodes[0].node.hero_image,
              customTitle: this.state.custom3CustomTitle === '' ? response.data.nodes[0].node.title : this.state.custom3CustomTitle,
              customSaf: response.data.nodes[0].node.field_saf,
              previewIsLoading: false
            })
            break;
        }



      }).catch((error) => {
          // API call error catching
          if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response);
              this.setState({
                previewIsLoading: false,
                urlError: true,
                errMsg: 'Server responded with a status code of: ' + error.response.status
              })

          } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
              this.setState({
                previewIsLoading: false,
                urlError: true,
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

  componentDidMount(){

    let inputFieldValue = document.querySelectorAll('input#' + this.props.newsConfig.containerId)["0"].value

    if (inputFieldValue) {
      inputFieldValue = JSON.parse(inputFieldValue)

      this.setState({
        isConfigured: true,
        displayOption: inputFieldValue.displayOption,
        feedURL: inputFieldValue.feedURL,
        customUrl: inputFieldValue.custom1Url,
        customTitle: inputFieldValue.custom1CustomTitle,
        custom1Nid: inputFieldValue.custom1Nid,
        custom1Url: inputFieldValue.custom1Url,
        custom1CustomTitle: inputFieldValue.custom1CustomTitle,
        custom2Nid: inputFieldValue.custom2Nid,
        custom2Url: inputFieldValue.custom2Url,
        custom2CustomTitle: inputFieldValue.custom2CustomTitle,
        custom3Nid: inputFieldValue.custom3Nid,
        custom3Url: inputFieldValue.custom3Url,
        custom3CustomTitle: inputFieldValue.custom3CustomTitle
      })

      if (inputFieldValue.custom1Nid) {
        this.getCustomDataByNid(inputFieldValue.custom1Nid)
      }

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
               <Row>
                 <Col sm={{ size: 'auto', offset: 4 }}>
                  <Row>
                    <Col xs="4">
                        <button className={this.state.customCurrent === 1 ? 'configCustomOptionImage configCustomImageSelected' :'configCustomOptionImage'} onClick={(e) => this.handleCustomCurrent(e, 1)}>
                          <img src="/profiles/openclas/modules/custom/clas_news_asunow/images/customBtn1.png" alt="custom story 1 options" />
                        </button>
                    </Col>
                    <Col xs="4">
                        <button className={this.state.customCurrent === 2 ? 'configCustomOptionImage configCustomImageSelected' :'configCustomOptionImage'} onClick={(e) => this.handleCustomCurrent(e, 2)}>
                          <img src="/profiles/openclas/modules/custom/clas_news_asunow/images/customBtn2.png" alt="custom story 2 options" />
                        </button>
                    </Col>
                    <Col xs="4">
                        <button className={this.state.customCurrent === 3 ? 'configCustomOptionImage configCustomImageSelected' :'configCustomOptionImage'} onClick={(e) => this.handleCustomCurrent(e, 3)}>
                          <img src="/profiles/openclas/modules/custom/clas_news_asunow/images/customBtn3.png" alt="custom story 3 options" />
                        </button>
                    </Col>
                  </Row>
                 </Col>
               </Row>
               <Row className="previewContainer">
                 <Col xs="6">
                   <Form>
                    <FormGroup>
                      <Label for="exampleEmail">News article url:</Label>
                      <Input placeholder="" value={this.state.customUrl} onChange={ (e) => this.handleCustomUrl('custom1Url', e)} />
                      { this.state.urlError ?   <Fade><p className="urlError">Please enter a valid asunow.asu.edu domain</p></Fade> : '' }
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Custom Title</Label><a className="resetCustomTitle" href="#" onClick={ (e) => this.handleResetCustomTitle(e) }><i class="fas fa-undo"></i></a>
                      <Input type="textarea" name="text" id="exampleText" value={this.state.customTitle} onChange={(e) => this.handleUpdateTitle(e)} />
                    </FormGroup>
                    <p className="customTitleInstructions">When adding a custom title please keep in mind that tilte line should not exceed 3 lines as a quality standard.</p>
                  </Form>
                 </Col>
                 <Col xs="6">
                   <Col sm="12" md={{ size: 10, offset: 1 }} className="zoom">
                     <button>
                       <div className="card h-100">
                        <div className={this.state.previewIsLoading ? 'animated-background' : 'previewImgBackground'}>
                           <img className="card-img-top" src={this.state.customImg ? this.state.customImg : this.state.customPreviewImg} alt="preview image" />
                        </div>
                         <div className={this.state.customSaf ? this.setSafPath(this.state.customSaf) + ' card-body cardBody' : 'arizona-impact card-body cardBody'}>
                           <a href="#"><span className={this.setSafPath(this.state.customSaf) + "Int cardInterest"}>{this.state.customSaf ? this.state.customSaf : 'Preview'}</span></a>
                           <h5 className="card-title">{this.state.customTitle ? this.state.customTitle : this.state.customPreviewTitle}</h5>
                         </div>
                       </div>
                     </button>
                   </Col>
                 </Col>
               </Row>
             </div>
      )
  }
}

export default D8NewsCustom;
