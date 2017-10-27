import React, { Component } from 'react';

import About from './About';
import Info from './Info';
import Hobbies from './Hobbies';

class WizardForm extends Component {
  state = {
    page: 1,
  };

  nextPage = () => {
    let page = this.state.page;
    console.log('assd');

    this.setState({ page: (page += 1) });
  };

  previousPage = () => {
    let page = this.state.page;

    this.setState({ page: (page -= 1) });
  };

  render() {
    const { page } = this.state;

    return (
      <div>
        {page === 1 && <About onSubmit={this.nextPage} />}
        {page === 2 && <Info />}
        {page === 3 && <Hobbies />}
      </div>
    );
  }
}

export default WizardForm;
