import React, { Component } from 'react';

import WizardForm from './WizardForm';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 className="Home-title">Redux Form</h1>
        <WizardForm />
      </div>
    );
  }
}

export default Home;
