import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component{
    
    render(){
        var percent = this.props.score / this.props.questions.length * 100;
        if (percent > 80) {
            var message = 'Great Job!';
        } else if (percent < 80 && percent > 60) {
            var message = 'You Did OK!';
        } else {
            var message = 'You Did Horrible!';
        }
        return(
            <div className="card">
                <div className="card-header">You Got {this.props.score} Out Of {this.props.questions.length}</div>
                <div className="card-body">
                    <h2>{percent}% - {message}</h2>
                    <a href="/app" className="btn btn-info">Take Again</a>
                </div>
                
            </div>
        )
    }
}

export default Results;