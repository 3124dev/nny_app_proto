export const FETCH_LECTURES = 'FETCH_LECTURES'
export const FETCH_LECTURE = 'FETCH_LECTURE'

export function fetchLectures(data) {
  return {
    type: FETCH_LECTURES,
    all: data
  }
}

export function fetchLecture(item) {
  return {
    type: FETCH_LECTURE,
    item
  }
}

export const CHECK_AUTH = "CHECK_AUTH"
export const PUT_AUTH = "PUT_AUTH"

export function checkAuth(){
  return {
    type: CHECK_AUTH
  }
}

export function putAuth(auth){
  return {
    type: PUT_AUTH,
    isAuth: auth
  }
}