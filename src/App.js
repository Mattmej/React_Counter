import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Needed for react-bootstrap to work.
import 'bootstrap/dist/css/bootstrap.min.css';

import BackButton from './Components/BackButton';
import ForwardButton from './Components/ForwardButton';
import PageHeader from './Components/PageHeader';

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
        <div className='d-flex flex-row mx-5 ButtonArea'>
          <div className='col-sm-3'></div>
          <BackButton 
            // classes='bg-success'
            colClass='bg-success'
            text='down'
          />
          <div className='col-2 bg-danger'>Number</div>

          <ForwardButton 
            // classes='bg-warning'
            colClass='bg-warning'
            text='up'
          />

<div className='col-sm-3'></div>

        </div>
      </div>
    )
  }
}

export default App;
