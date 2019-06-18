export function checkRedirect(userFromCookie, logState) {
  
  
    
    if (userFromCookie && logState === null) {
      return true
    }

    if (logState === false || (!userFromCookie && logState === null)) {
      return false
    }
  
}

