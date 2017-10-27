import React, { Component } from 'react';

import About from './About';
import Info from './Info';
import Hobbies from './Hobbies';

class WizardForm extends Component {
  state = {
    page: 1,
    message: null,
  };

  nextPage = () => {
    let page = this.state.page;

    this.setState({ page: (page += 1) });
  };

  previousPage = () => {
    let page = this.state.page;

    this.setState({ page: (page -= 1) });
  };

  finishForm = () => {
    this.setState({ message: 'Form finished' });
  };

  render() {
    const { page } = this.state;

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

        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default WizardForm;
