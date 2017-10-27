import React, { Component } from 'react';

import About from './About';
import Info from './Info';
import Hobbies from './Hobbies';

class WizardForm extends Component {
  state = {
    page: 1,
  };

  render() {
    const { page } = this.state;

    return (
      <div>
        {page === 1 && <About />}
        {page === 2 && <Info />}
        {page === 3 && <Hobbies />}
        <div>
          <button
            onClick={() => this.setState({ page: (this.state.page -= 1) })}>
            -1
          </button>
          <button
            onClick={() => this.setState({ page: (this.state.page += 1) })}>
            +1
          </button>
        </div>
      </div>
    );
  }
}

export default WizardForm;
