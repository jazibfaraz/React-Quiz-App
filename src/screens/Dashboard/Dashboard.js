import React, { Component } from 'react';
import Header2 from '../header2/header2';
import './Dashboard.css'
import swal from 'sweetalert';

class Dashboard extends Component {
  constructor()
    {
      super();

      this.showAlert = this.showAlert.bind(this);
    }
  
  showAlert()
  {
    swal({
      title: 'yo',
      text: 'it works',
      icon: 'success'
    })
  }


  render() {

    return (

      <div className="App">
      <Header2 /> <br />
        

        <div className='container'>
          <div className='grid' id='image-div1' onClick={this.showAlert}>
            <div className='image-div'>
              <div className='image-div-title'>Computer Science</div>
            </div>
          </div>

          <div className='grid' id='image-div2'>
            <div className='image-div'>
            <div className='image-div-title'>General Knowledge</div>
            </div>
          </div>

          <div className='grid'>
            <div className='image-div' id='image-div3' >
            <div className='image-div-title'>History</div>
            </div>
          </div>

          <div className='grid' >
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
