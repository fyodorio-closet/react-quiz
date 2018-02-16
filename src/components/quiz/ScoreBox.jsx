import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ScoreBox extends Component{
    
    render(){
        return(
            <div className="card mb-3">
                <div className="card-header">
                    Question {this.props.current} out of {this.props.questions.length} <span className="float-right"><strong>Score: {this.props.score}</strong></span>
                </div>
            </div>
        )
    }
}

export default ScoreBox;