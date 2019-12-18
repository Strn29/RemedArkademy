import React, {Component} from 'react';
import{
  BrowserRouter,
  Route,
  Switch

} from "react-router-dom"
import Landing from "./landing";

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route path="/">
          <Landing></Landing>
        </Route>
      </Switch>
      </BrowserRouter>
    )
  }
}
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

export default App;
