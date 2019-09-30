import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Needed for react-bootstrap to work.
import 'bootstrap/dist/css/bootstrap.min.css';

import BackButton from './Components/BackButton';
import ForwardButton from './Components/ForwardButton';
import PageHeader from './Components/PageHeader';
import NumberArea from './Components/NumberArea';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
      // <div className='d-flex flex-row'>
      //   <BackButton text='down' classes='bg-info'/>
      //   <ForwardButton text='up' classes='bg-warning'/>
      // </div>

      <div className='d-flex flex-column'>
        <PageHeader 
          headerColor='bg-info'
          headerText='Jumbotron'
          headerSubtext='subtext'
        />
        <div className='d-flex flex-row mx-5 ButtonArea justify-content-center'>
          {/* <div className='col-sm-3'></div> */}
          <BackButton 
            // className='tallButton'
            buttonClass='tallButton'
            downSymbol='<'
            click={() => this.subtractNumber()}
          />

          {/* <div className='numberArea col-sm-1'>0</div> */}

          <NumberArea 
            number={this.state.counter}
          />


          <ForwardButton 
            buttonClass='tallButton'
            upSymbol='>'
            click={() => this.addNumber()}
          />

          {/* <div className='col-sm-3'></div> */}

        </div>
      </div>
    )
  }
}

export default App;
