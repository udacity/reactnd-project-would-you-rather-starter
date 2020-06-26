import React, { Component } from 'react'
import './dashboard.css'
import Questions from '../questions/Questions'
import Leaderboard from '../leaderboard/Leaderboard'
import AddQuestion from '../questions/AddQuestion'
import { connect } from 'react-redux'
import Tab from '@material-ui/core/Tab'
import Tabs  from '@material-ui/core/Tabs'
import  { TabPanel } from '../styled'
import { DEFAULT_TAB_KEY, TABS_MAP } from './constants'
import { setAvailableQuestions, setAuthedUserQuestions } from '../../actions'
import {  Route } from 'react-router-dom'

function mapStateToProps({ users, authedUser, questions, authedUserQuestions, availableQuestions }) {
    return {
        users,
        authedUser,
        authedUserQuestions,
        questions,
        availableQuestions,
    }
}

class Dashboard extends Component {
    state = {
        currentTab: DEFAULT_TAB_KEY,
    }
    componentDidMount() {
        this.props.dispatch(setAuthedUserQuestions(this.props))
        this.props.dispatch(setAvailableQuestions(this.props))
    }
    activateTab(tabKey) {
        this.setState({
            currentTab: tabKey || DEFAULT_TAB_KEY
        })
    }
    render() {
        const { currentTab } = this.state
        const { authedUserQuestions, availableQuestions  } = this.props
        return (
            <div className="dashboard">
                    <Route exact path='/'>
                        <Tabs className="dashboard-tabs" value={currentTab} centered>
                            {TABS_MAP.map((tab) => (
                                <Tab onClick={() => {  this.activateTab(tab.key) }} key={tab.key} label={tab.name} value={tab.key} />
                            ))}
                        </Tabs>
                        {TABS_MAP.map((tab) => (
                            <TabPanel className="panel-content" key={tab.key} value={tab.key} index={currentTab}>
                                {tab.key === 'myQuestions' && (
                                    <Questions data={authedUserQuestions}></Questions>
                                )}
                                {tab.key === 'answeredQuestions' && availableQuestions && (
                                    <Questions data={availableQuestions.answeredQuestions}></Questions>
                                )}
                                {tab.key === 'unansweredQuestions' && availableQuestions && (
                                    <Questions data={availableQuestions.unansweredQuestions}></Questions>
                                )}
                                {tab.key === 'leaderboard' && (
                                    <Leaderboard></Leaderboard>
                                )}
                            </TabPanel>
                        ))}
                </Route>
                <Route exact path='/add' render={({ history }) =><AddQuestion history={history}/>}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Dashboard)
