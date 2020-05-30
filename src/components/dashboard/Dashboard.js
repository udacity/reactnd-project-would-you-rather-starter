import React, { Component } from 'react'
import './dashboard.css'
import Questions from '../questions/Questions'
import Leaderboard from '../leaderboard/Leaderboard'
import { connect } from 'react-redux'
import Tab from '@material-ui/core/Tab'
import Tabs  from '@material-ui/core/Tabs'
import TabPanel from '../material-ui/TabPanel/TabPanel'
import { DEFAULT_TAB_KEY, TABS_MAP } from './constants'
import { setAuthedUserQuestions } from '../../actions'

function mapStateToProps({ users, authedUser, questions, authedUserQuestions }) {
    return {
        users,
        authedUser,
        authedUserQuestions,
        questions,
    }
}

function setAvailableQuestions() {
    const unAuthedUserQuestions = []
    const unAuthedUserIds = Object.keys(this.props.users).filter(userKey => userKey !== this.props.authedUser)
    if (unAuthedUserIds) {
        unAuthedUserIds.forEach((key) => {
            const userQuestionIds = this.props.users[key].questions
            if (userQuestionIds) {
                userQuestionIds.forEach((id) => {
                    const questionObj = this.props.questions[id]
                    if (questionObj) {
                        unAuthedUserQuestions.push(questionObj)
                    }
                })
            }
        })
    }
    this.setState({
        availableQuestions: unAuthedUserQuestions
    })
}

class Dashboard extends Component {
    state = {
        availableQuestions: null,
        currentTab: DEFAULT_TAB_KEY,
    }
    componentDidMount() {
        this.props.dispatch(setAuthedUserQuestions(this.props))
        setAvailableQuestions.call(this)
    }
    activateTab(tabKey) {
        this.setState({
            currentTab: tabKey || DEFAULT_TAB_KEY
        })
    }
    render() {
        const { availableQuestions, currentTab } = this.state
        const { authedUserQuestions  } = this.props
        return (
            <div className="dashboard">
                <Tabs className="dashboard-tabs" value={currentTab} centered>
                    {TABS_MAP.map((tab) => (
                        <Tab onClick={() => {  this.activateTab(tab.key) }} key={tab.key} label={tab.name} value={tab.key} />
                    ))}
                </Tabs>
                {TABS_MAP.map((tab) => (
                    <TabPanel className="panel-content" key={tab.key} value={tab.key} index={currentTab}>
                        {tab.key === 'myQuestions' && (
                            <Questions questions={authedUserQuestions}></Questions>
                        )}
                        {tab.key === 'answerQuestions' && (
                            <Questions questions={availableQuestions}></Questions>
                        )}
                        {tab.key === 'leaderboard' && (
                            <Leaderboard></Leaderboard>
                        )}
                    </TabPanel>
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Dashboard)
