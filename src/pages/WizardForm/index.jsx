import React, { Component } from 'react';

import About from './About';
import Info from './Info';
import Hobbies from './Hobbies';

class WizardForm extends Component {
  state = {
    page: 1,
    finish: false,
    values: null,
  };

  nextPage = () => {
    let page = this.state.page;

    this.setState({ page: (page += 1) });
  };

  previousPage = () => {
    let page = this.state.page;

    this.setState({ page: (page -= 1) });
  };

  finishForm = values => {
    this.setState({ values });
  };

  render() {
    const { page } = this.state;
    console.log(this.state.values);
    return (
      <div>
        {page === 1 && <About onSubmit={this.nextPage} />}
        {page === 2 && (
          <Info onSubmit={this.nextPage} previousPage={this.previousPage} />
        )}
        {page === 3 && (
          <Hobbies
            onSubmit={this.finishForm}
            previousPage={this.previousPage}
          />
        )}

        {this.state.values && (
          <div>
            <h3>Finish Form</h3>
            <p>Fullname: {this.state.values.fullname}</p>
            <p>Email: {this.state.values.email}</p>
            <p>Username: {this.state.values.username}</p>
            <p>Sex: {this.state.values.sex}</p>
            <p>Artist: {this.state.values.artist}</p>
            <p>ESports: {this.state.values.sports}</p>
          </div>
        )}
      </div>
    );
  }
}

export default WizardForm;
