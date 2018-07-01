import React from 'react'
import { connect } from 'react-redux'
import { fetchLecture } from '../../actions'
import { NavLink } from 'react-router-dom'

const dummyData = require('../../dummy.json')

class LectureItem extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
    const item = this.fakeGetItem(this.props.match.params.id)
    this.props.fetchItem(item)
  }
  componentWillUpdate(next) {
    if (this.props.match.params.id !== next.match.params.id) {
      const item = this.fakeGetItem(next.match.params.id)
      this.props.fetchItem(item)
    }
  }

  fakeGetItem(id) {
    let item = dummyData.find((i) => {
      return i.id === Number(id)
    })
    return item
  }

  render() {
    return (
      <div className="lecture-item-paper">
        <NavLink to="/class" id="close-item-bt">
          <p>←</p>
        </NavLink>
        <div className="resp-container">
          <iframe className="resp-iframe" src={this.props.item.url} frameBorder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen title="nny-temp"></iframe>
        </div>
        <div className="lecture-item">
          <div className="lecture-item-teacher">
            <img src="https://uploads.codesandbox.io/uploads/user/191fe0d6-4122-481d-8cff-755c18cc455e/AMhe-leo.jpg" alt="Teacher face" />
            <span className="lecture-item-teacher-mask"></span>
          </div>
          <div className="lecture-item-head">
            <h1>{this.props.item.title}</h1>
            <p>{this.props.item.series + ' 제' + (this.props.item.number % 100) + '강_with ' + this.props.item.teacher}</p>
          </div>
        </div>
        <div id="lecture-item-tp-write">
          <form>
            <fieldset className="self-tp">
              <legend>나만의 문장 만들기</legend>
              <div className="self-tp-field">
                <input type="text" name="self-tp" placeholder="try to make your own sentence" />
                <span className="focus-border"></span>
              </div>
              <button>등록</button>
            </fieldset>
          </form>
        </div>
        <div className="lecture-item-tp-list">
          <ul>
            <li>
              <p>I told you not to do that! _ <b>hubert</b></p>
            </li>
            <li>
              <p>The only thing you have to do is catch the killer _ <b>hubert</b></p>
            </li>
            <li>
              <p>keep the door open _ <b>hubert</b></p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (item) => dispatch(fetchLecture(item))
  }
}

let mapStateToProps = (state) => {
  return {
    item: state.fetcher.current
  }
}

LectureItem = connect(mapStateToProps, mapDispatchToProps)(LectureItem)
export default LectureItem