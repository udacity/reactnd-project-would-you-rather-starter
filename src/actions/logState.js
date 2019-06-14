export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export function logIn() {
  return {
    type: LOG_IN
  }
}

export function logOut() {
  return {
    type: LOG_OUT
  }
}