import React, { Component } from 'react';

import ContactForm from './../shared/ContactForm';

class Home extends Component {
  submit = values => {
    // print the form values to the console
    console.log('Values:', values);
  };

  render() {
    return (
      <div className="Home">
        <h1 className="Home-title">Redux Form</h1>
        <ContactForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default Home;
