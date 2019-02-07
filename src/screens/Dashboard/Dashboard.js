import React, { Component } from 'react';
import Header2 from '../header2/header2';
import './Dashboard.css'
import swal from 'sweetalert';

class Dashboard extends Component {
  constructor()
    {
      super();

      this.compSci = this.compSci.bind(this);
      this.genKnow = this.genKnow.bind(this);
      this.history = this.history.bind(this);
      this.sports = this.sports.bind(this);
    }

    sports()
    {
      this.props.history.push('/QuizPage/sports');
    }

    history()
    {
      this.props.history.push('/QuizPage/history');
    }

    genKnow()
    {
      this.props.history.push('/QuizPage/gen-know');
    }
  
    compSci()
    {
      this.props.history.push('/QuizPage/comp-sci')

      // swal({
      //   title: 'yo',
      //   text: 'it works',
      //   icon: 'success'
      // })

    }


  render() {

    return (

      <div className="App">
        <Header2 /> <br />
        

        <div className='container'>
          <div className='grid'  onClick={this.compSci}>
            <div className='image-div' id='image-div1'>
              <div className='image-div-title'>Computer Science</div>
            </div>
          </div>

          <div className='grid' onClick={this.genKnow} >
            <div className='image-div' id='image-div2'>
            <div className='image-div-title'>General Knowledge</div>
            </div>
          </div>

          <div className='grid' onClick={this.history} >
            <div className='image-div' id='image-div3' >
            <div className='image-div-title'>History</div>
            </div>
          </div>

          <div className='grid' onClick={this.sports} >
            <div className='image-div' id='image-div4'>
            <div className='image-div-title'>Sports</div>
            </div>
          </div>


        </div>

        

      </div>
    );
  }
}

export default Dashboard;
