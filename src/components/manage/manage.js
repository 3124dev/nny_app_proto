import React from 'react'
import { connect } from 'react-redux'
import { fetchLectures } from '../../actions'
import "./manage.css"

const dummyData = require('../../dummy.json')

class Manage extends React.Component {
  componentWillMount() {
    this.props.fetchLec(dummyData)
  }

  render() {
    const iconEdit = (
      <div className="edit-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    )
    const iconDelete = (
      <div className="delete-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    )

    const tableItems = this.props.lectures.map(e => (
      <tr>
        <td className="col-1" data-th="num" >{e.number}</td>
        <td className="col-1">{e.teacher}</td>
        <td className="col-3">{e.title}</td>
        <td className="col-2">{e.series}</td>
        <td className="col-3 m">{e.url}</td>
        <td className="col-1 table-btn"><button className="edit"><p>EDIT</p>{iconEdit}</button></td>
        <td className="col-1 table-btn"><button className="delete"><p>DELETE</p>{iconDelete}</button></td>
      </tr>
    ))

    return (
      <div id="manage" class="container">
        <button className="insert-btn">INSERT</button>
        <button className="insert-btn-fixed">+</button>
        <table>
          <thead>
            <tr>
              <th className="col-1">num</th>
              <th className="col-1">teacher</th>
              <th className="col-3">title</th>
              <th className="col-2">series</th>
              <th className="col-3">url</th>
              <th className="col-1">EDIT</th>
              <th className="col-1">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {tableItems}
          </tbody>
        </table>
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

Manage = connect(mapStateToProps, mapDispatchToProps)(Manage)
export default Manage