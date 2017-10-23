import React, { Component } from 'react';

import FieldLevelValidation from './../shared/FieldLevelValidation';

class Home extends Component {
  submit = values => {
    console.log('VALUES', values);
  };

  render() {
    return (
      <div className="Home">
        <h1 className="Home-title">Redux Form</h1>
        <FieldLevelValidation onSubmit={this.submit} />
      </div>
    );
  }
}

export default Home;
