import React, { Component } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import Modal from '@material-ui/core/Modal'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import { connect } from 'react-redux'
import './vote.css'

function mapStateToProps({ users }) {
    return {
        users,
    }
}

function setVoterObjects({ votes, users }) {
     if (votes && users) {
         let voterObjects = []
         votes.forEach((voter) => {
             const voterObj = Object.keys(users).map((key) => key === voter ? users[key] : undefined).filter((val) => val)
             if (voterObj[0]) {
                 voterObjects.push(voterObj[0])
             }
         })
         return voterObjects;
     }
     return []
}

class Vote extends Component {
    state = {
        modalOpen: false,
        voterObjects: null,
    }
    static getDerivedStateFromProps(props) {
        return {
            voterObjects: setVoterObjects(props),
        }
    }
    handleOpen(e) {
        e.stopPropagation();
        this.setState({
            modalOpen: true
        })
    }
    handleClose(e) {
        e.stopPropagation();
        this.setState({
            modalOpen: false
        })
    }
    voterAvatarStyle(voter) {
        return {
            backgroundImage: `url(${voter.avatarURL})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '50px',
            width: '30px',
            height: '30px',
            marginRight: '10px'
        }
    }
    render() {
        const { modalOpen, voterObjects } = this.state
        const { votes, activeIconColor } = this.props
        return (
            <div className="vote">
                {activeIconColor !== 'action' && (
                    <div className="vote-count">
                        {votes.length}
                    </div>
                )}
                <ThumbUpAltIcon color={activeIconColor} onClick={(e) => this.handleOpen(e)}></ThumbUpAltIcon>
                <Modal className="vote-list-modal" open={modalOpen} 
                    onClose={(e)  => this.handleClose(e)} 
                    BackdropComponent={Backdrop}>
                    <div className="vote-list-container">
                        <div className="vote-list-header">
                            <ThumbUpAltIcon className="vote-list-icon" color="secondary"></ThumbUpAltIcon>
                        </div>
                        {voterObjects && voterObjects.map((voter, idx) => (
                            <div key={idx} className="voter-container">
                                <div className="voter-avatar" style={this.voterAvatarStyle(voter)}></div>
                                <div className="voter-name">
                                    {voter.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Vote)
