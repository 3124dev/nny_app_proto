import React from 'react'
import GlobalInput from '../g_input/g_input.js'
import { NavLink } from 'react-router-dom'
import './signup.css'
const rules = require('./rules.js')

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regularCourse: {
        primer: true,
        beginner: false,
        challenger: false,
        flyer: false,
        disciple: false
      },
      extraCourse: {
        conversation: false,
        booster1: false,
        bosster2: false
      },
      userID: '',
      group: '',
      pw: '',
      pw2: '',
      allok: false
    }
    this.oks = {}
  }

  handleRadio (e) {
    let obj = {}
    obj[e.target.value] = e.target.value.checked
    this.setState({ regularCourse: obj })
  }

  handleCheckBox (e) {
    let obj = Object.assign(this.state.extraCourse)
    obj[e.target.value] = e.target.value.checked
    this.setState({ extraCourse: obj })
  }

  handleChange (e) {
    this.oks[e.name] = e.isOK
    this.setState({
      [e.name]: e.value,
      allok: (this.oks['userID'] && this.oks['group'] && this.oks['pw'] && this.oks['pw2'])
    })
  }

  handleSubmit (e) {
    window.alert(JSON.stringify(this.state))
    e.preventDefault()
  }

  render () {
    const doChange = e => this.handleChange(e)
    const doSubmit = e => this.handleSubmit(e)
    const asciiFilter = /[^\u0020-\u007e]+/g

    const iconWalk = (
      <div className="icon walk-icon">
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
        </svg>
      </div>
    )

    const iconBike = (
      <div className="icon bike-icon">
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
        </svg>
      </div>
    )

    const iconCar = (
      <div className="icon car-icon">
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    )

    const iconFly = (
      <div className="icon fly-icon">
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.18 9" />
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    )

    const iconSchool = (
      <div className="icon school-icon">
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      </div>
    )

    return (
      <div id="signup">
        <form className="signup-form" onSubmit={doSubmit}>
          <h1>수강 정보 입력
            <NavLink to="/login" id="back-bt">
              <p>←</p>
            </NavLink>
          </h1>
          <fieldset>
            <legend>누나영 아카데미 수강 정보를 입력해주세요.</legend>

            <div className="radio-wrapper">
              <label className="radio-container primer">{iconWalk}
                PRIMER
                <input type="radio" name="class" value="primer"
                  checked={this.state.regularCourse['primer']}
                  onChange={(e) => this.handleRadio(e)} />
                <span className="radio-mark"></span>
              </label>
              <label className="radio-container beginner">{iconBike}
                BEGINNER
              <input type="radio" name="class" value="beginner"
                checked={this.state.regularCourse['beginner']}
                onChange={(e) => this.handleRadio(e)} />
                <span className="radio-mark"></span>
              </label>
              <label className="radio-container challenger">{iconCar}
                CHALLENGER
              <input type="radio" name="class" value="challenger"
                checked={this.state.regularCourse['challenger']}
                onChange={(e) => this.handleRadio(e)} />
                <span className="radio-mark"></span>
              </label>
              <label className="radio-container flyer">{iconFly}
                FLYER
              <input type="radio" name="class" value="flyer"
                checked={this.state.regularCourse['flyer']}
                onChange={(e) => this.handleRadio(e)} />
                <span className="radio-mark"></span>
              </label>
              <label className="radio-container disciple">{iconSchool}
                DISCIPLE
              <input type="radio" name="class" value="disciple"
                checked={this.state.regularCourse['disciple']}
                onChange={(e) => this.handleRadio(e)} />
                <span className="radio-mark"></span>
              </label>
                <br />

              <p>현재 수강중인 정규반을 선택하세요.</p>
            </div>

            <GlobalInput name="userID" label="영어 이름(아이디)"
              msg="영문과 숫자조합 6~20자 내외로 작성해주세요."
              value={this.state.userID}
              filter={asciiFilter}
              pattern={rules.alphaNumPat}
              onChange={doChange} />
            <GlobalInput name="group" label="스터디 그룹"
              msg="영문과 숫자조합 6~20자 내외로 작성해주세요."
              value={this.state.group}
              filter={asciiFilter}
              pattern={rules.alphaNumPat}
              onChange={doChange} />

            <GlobalInput name="pw" label="비밀번호"
              pw={true}
              msg="영문과 숫자조합 6~20자 내외로 작성해주세요."
              value={this.state.pw}
              filter={asciiFilter}
              pattern={rules.pw}
              onChange={doChange} />
            <GlobalInput name="pw2" label="비밀번호 재확인"
              pw={true}
              msg="영문과 숫자조합 6~20자 내외로 작성해주세요."
              value={this.state.pw2}
              filter={asciiFilter}
              pattern={rules.pw}
              onChange={doChange} />

            <div className="checkbox-wrapper">
              <p>단과반</p>
              <label className="checkbox-container conversation">
                conversation
                <input type="checkbox" name="extraClass" value="conversation"
                  checked={this.state.extraCourse['conversation']}
                  onChange={(e) => this.handleCheckBox(e)} />
                <span className="checkbox-mark"></span>
              </label>
              <label className="checkbox-container booster1">
                booster1
                <input type="checkbox" name="extraClass" value="booster1"
                  checked={this.state.extraCourse['booster1']}
                  onChange={(e) => this.handleCheckBox(e)} />
                <span className="checkbox-mark"></span>
              </label>
              <label className="checkbox-container booster2">
                booster2
                <input type="checkbox" name="extraClass" value="booster2"
                  checked={this.state.extraCourse['booster2']}
                  onChange={(e) => this.handleCheckBox(e)} />
                <span className="checkbox-mark"></span>
              </label>
            </div>
            <div className="button-container">
              <button disabled={!this.state.allok}>회원가입</button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Signup