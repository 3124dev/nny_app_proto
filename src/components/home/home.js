import React from 'react'
import Instafeed from 'react-instafeed'
import './home.css'

class Home extends React.Component {
  render() {
    const instafeedTarget = 'instafeed'
    const templatei = 
    '<div class="instafeed__item_wrapper">' + 
      '<div class="instafeed__item__head">' +
        '<img class="instafeed__item__icon />' +
        '<p class="instafeed__item__id"><b>NNY</b></p>' +
        '<p class="instafeed__item__location">{{location}}</p>' +
      '</div>' +
      '<a href="{{link}}" target="_blank" class="instafeed__item">' +
        '<img class="instafeed__item__background" type="{{type}}" src="{{image}}" />' +
        '<div class="instafeed__item__overlay">' +
          '<div class="instafeed__item__overlay--inner">' +
            '<p class="instafeed__item__caption"><b>NNY</b> {{model.short_caption}}</p>' +
          '</div>' +
        '</div>' +
      '</a>' +
    '</div>'
    return (
      <div id={instafeedTarget}>
        <div className="instafeed__feeders">
          <InstaFeeder /><InstaFeeder />
        </div>
        <Instafeed
          limit='3'
          ref='instafeed'
          resolution='low_resolution'
          sortBy='most-recent'
          target={instafeedTarget}
          template={templatei}
          userId='8058623428'
          clientId='0a17b16f348e4a638e5424d2a9ae0c92'
          accessToken='8058623428.0a17b16.790fb305fc3046e799eef99d65264d83'
        />
      </div>
    )
  }
}

const InstaFeeder = (props) => {
  return (
    <div className="feeder_wrapper">
      <img alt="insta feeder icon" className="feeder_icon" src="https://uploads.codesandbox.io/uploads/user/191fe0d6-4122-481d-8cff-755c18cc455e/AMhe-leo.jpg" />
      <span className="feeder_icon_mask"></span>
      <p>Leo</p>
    </div>
  )
}

export default Home