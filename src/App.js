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
        <div className='d-flex flex-row mx-auto'>
          <BackButton 
            classes='bg-success'
            text='down'
          />
          <ForwardButton 
            classes='bg-warning'
            text='up'
          />
        </div>
      </div>
    )
  }
}

export default App;
