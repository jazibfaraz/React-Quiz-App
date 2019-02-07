import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './QuizPage.css';
import Header2 from '../header2/header2';


class QuizPage extends Component {
  constructor(){
     super();
     
     
  }

  check(e)
  {
     console.log(e.target.value)
     
  }


  render() { 

    if(this.props.match.params.keyword === 'comp-sci')
    {

    return (

      <div className="App">
      {console.log(this.props.match.params.keyword)}
      
      
      <Header2 /><br />

      comp science

      <div className='quiz-container'>

      <div className='question-div' style={{textAlign: "left", textIndent: 20, fontSize: 25}}>
      <p>Q1 ) Who is the father of computer ?</p>
      </div>
      <div className='options-div'>
      <ol style={{float: 'left', textIndent: 10, textAlign: "left",  fontSize: 20}}>
          <li><input type="radio" value='Steve Jobs' name='Steve Jobs' onClick={this.check.bind(this)} /> Steve Jobs</li>
          <li><input type='radio' value={'Bill Gates'} name='Bill Gates' /> Bill Gates</li>
          <li><input type='radio' value={'Charles Babbage'} name='Charles Babbage' /> Charles Babbage</li>
          <li><input type='radio' value={'Mark Zuckerburg'} name='Mark Zuckerburg' /> Mark Zuckerburg</li>
      </ol>
      </div>
      <button type='button' style={{float:"left", height: 40, width: 140, marginLeft: 20, backgroundColor: 'transparent', borderRadius: 25, }}>Next -></button>
      
      </div>
      
      }
      
        
      </div>
    
    );
    }
    
    else if(this.props.match.params.keyword === 'history'){
        return(
            <div className='App'>
                <Header2 />
            <div> History</div>
            </div>
        )
    }

    else if(this.props.match.params.keyword === 'gen-know'){
        return(
            <div className='App'>
                <Header2 />
            <div> General Knowledge</div>
            </div>
        )
    }

    else if(this.props.match.params.keyword === 'sports'){
        return(
            <div className='App'>
                <Header2 />
            <div> Sports</div>
            </div>
        )
    }

  }
}

export default QuizPage;
