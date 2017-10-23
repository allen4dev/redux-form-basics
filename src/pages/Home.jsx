import React, { Component } from 'react';

import SynchronousValidation from './../shared/SynchronousValidation';

class Home extends Component {
  submit = values => {
    console.log('VALUES', values);
  };

  render() {
    return (
      <div className="Home">
        <h1 className="Home-title">Redux Form</h1>
        <SynchronousValidation onSubmit={this.submit} />
      </div>
    );
  }
}

export default Home;
