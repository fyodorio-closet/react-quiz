import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import ScoreBox from './quiz/ScoreBox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Michael'
                        },
                        {
                            id: 'b',
                            text: 'Fred'
                        },
                        {
                            id: 'c',
                            text: 'Steve'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 2,
                    text: `What is your mother's name?`,
                    choices: [
                        {
                            id: 'a',
                            text: 'Sara'
                        },
                        {
                            id: 'b',
                            text: 'Mary'
                        },
                        {
                            id: 'c',
                            text: 'Tay'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 3,
                    text: `What is your father's name?`,
                    choices: [
                        {
                            id: 'a',
                            text: 'John'
                        },
                        {
                            id: 'b',
                            text: 'Joey'
                        },
                        {
                            id: 'c',
                            text: 'Val'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 4,
                    text: `What is your friend's name?`,
                    choices: [
                        {
                            id: 'a',
                            text: 'Simon'
                        },
                        {
                            id: 'b',
                            text: 'Andy'
                        },
                        {
                            id: 'c',
                            text: 'Bruce'
                        }
                    ],
                    correct: 'a'
                },
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current) {
        this.setState({current});
    }

    setScore(score) {
        this.setState({score});
    }

    render(){
        if (this.state.current > this.state.questions.length) {
            var scorebox = '';
            var results = <Results {...this.state} />
        } else {
            var scorebox = <ScoreBox {...this.state} />
            var results = '';
        }
        return(
            <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
                {results}
            </div>
        )
    }
}

export default App;