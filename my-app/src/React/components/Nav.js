import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Nav extends React.Component {
    render() {
        return (
            <div>
                {this.props.authedUser}
            <Link to="/"><button>Login</button></Link>
            <Link to="/Dashboard"><button>Dashboard </button></Link>
            <Link to="/NewQuestion"><button>New Question </button></Link>
            <Link to="/Leaderboard"><button>Leaderboard </button></Link>
            </div>
        )
    }
}

function mapStateToProps({authedUser,users}){
    return {authedUser,
        users:Object.keys(users)}
    
}

export default connect(mapStateToProps)(Nav)
