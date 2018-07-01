import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { fetchLectures } from '../../actions'
import LectureItem from './item.js'
import './class.css'

import Store from '../../contextStore'

const dummyData = require('../../dummy.json')

class Class extends React.Component {
  constructor() {
    super()
    this.state = {
      levels: ["Primer", "Beginner", "Challenger", "Flyer"],
      level: "challenger"
    }
  }
  componentWillMount() {
    this.props.fetchLec(dummyData)
  }

  setLectureIcon(num) {
    let imgNum = Math.floor(num / 100)
    if ((imgNum > 4) || (imgNum <= 0)) {
      imgNum = 1
    }
    if (this.state.level === "beginner"){
      imgNum += 10
    } else if (this.state.level === "challenger") {
      imgNum += 20
    } else if (this.state.level === "flyer") {
      imgNum += 30
    } 
    return imgNum
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const challengerItems = this.props.lectures.map(e => (
      <NavLink to={this.props.match.url + '/' + e.id} onClick={() => this.topFunction()}><li className="lecture-list-item">
        <div className="lecture-list-item-icon" num={this.setLectureIcon(e.number)}></div>
        <h1 className="lecture-list-item-head">{e.title}</h1>
        <p className="lecture-list-item-info">
          {e.series + ' 제' + (e.number % 100) + '강_with ' + e.teacher}
        </p>
      </li></NavLink>
    ))
    const ClassIntro = () => (
      <div className="class-page-intro">
        <h1>혼자하는 TP 영상은</h1>
        <p>
          <br/>
          보다 효과적인 Practice을 안내하고자 제작된<br />
          보좌적 학습자료로 각강의 개월차 내용 중 진행 강사의 판단하에<br />
          추가적인 연습이 필요한 Chapter를 선별,<br />
          영상으로 제작&제공하는 형태입니다.<br />
          이에 모든 Chapter를 이와 같은 자료로 제공하는 것은 아님을 안내드립니다.<br />
        </p>
      </div>
    )
    return (
      <div id="class">
        <div id="lectures">
          <div>
            <Route exact path={`${this.props.match.path}`} component={ClassIntro} />
            <Route path={`${this.props.match.path}/:id`} component={LectureItem} />
          </div>
          
          <div className="level-list-container">
            <ul className="level-list">
              <Store.Consumer>
                {store => {
                  return (
                    this.state.levels.map(level => {
                      if (store.user.level === level) {
                        return (
                          <li className="level-list-item selected">
                            <div className="level-list-item-icon">
                              <p className="level-list-item-title">{level}</p>
                            </div>
                          </li>
                        )
                      } else {
                        return (
                          <li className="level-list-item">
                            <div className="level-list-item-icon">
                              <p className="level-list-item-title">{level}</p>
                            </div>
                          </li>
                        )
                      }
                    })
                  )
                }
                }
              </Store.Consumer>
            </ul>
          </div>
          <div className="level-list-container-right"></div>
          <div className="lecture-list-paper" level="primer">
            <ul className="lecture-list">
              {challengerItems}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    fetchLec: (data) => dispatch(fetchLectures(data))
  }
}

let mapStateToProps = (state) => {
  return {
    lectures: state.fetcher.all
  }
}

Class = connect(mapStateToProps, mapDispatchToProps)(Class)
export default Class