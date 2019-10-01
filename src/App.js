import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Needed for react-bootstrap to work.
import 'bootstrap/dist/css/bootstrap.min.css';

import BackButton from './Components/BackButton';
import ForwardButton from './Components/ForwardButton';
import PageHeader from './Components/PageHeader';
import NumberArea from './Components/NumberArea';


class App extends Component {

  state = {
    counter: 0
  }

  addNumber = () => {
    let currentCounter = this.state.counter;
    currentCounter++;

    this.setState({
      counter: currentCounter
    })

    console.log(this.state.counter);
  }

  subtractNumber = () => {
    let currentCounter = this.state.counter;
    currentCounter--;

    this.setState({
      counter: currentCounter
    })

    console.log(this.state.counter);
  }

  render() {
    return (
      <div className='firstContainer d-flex flex-column align-items-center'>
        <PageHeader 
          headerColor='bg-info'
          headerText='React Counter App'
          headerSubtext='Press buttons to increment or decrement by 1.'
        />

        <div className='row space'></div>

        <div className='d-flex flex-xl-row flex-column justify-content-center mainAppContainer'>
          <BackButton 
            buttonClass='backButton'
            downSymbol='<'
            click={() => this.subtractNumber()}
          />

          <NumberArea 
            number={this.state.counter}
            numberAreaClass='numberArea'
          />

          <ForwardButton 
            buttonClass='forwardButton'
            upSymbol='>'
            click={() => this.addNumber()}
          />

        </div>
      </div>
    )
  }
}

export default App;
