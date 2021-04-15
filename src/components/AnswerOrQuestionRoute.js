import {Route, Redirect} from 'react-router-dom';
import AnswerQuestion from '../containers/AnswerQuestion';
import ResultPage from '../containers/ResultPage';
export default function AnswerOrQuestionRoute({component: Component, ...rest}) {
    // alert(JSON.stringify())
    // <AnswerQuestion {...rest}
return (
    <Route {...rest}
render={ (props) => props.showResult ? <ResultPage />:  <div>{props.showResult}</div> } />
)
}