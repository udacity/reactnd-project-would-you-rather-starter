import { connect } from 'react-redux'

function isLoggedIn({ logout }) {
  return true
}

const mapStateToProps = ({ authedUser }) => ({
  logout: authedUser === null,
})

export default connect(mapStateToProps)(isLoggedIn)