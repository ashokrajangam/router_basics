import React, { Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import {Link, Route, Switch, Redirect} from "react-router-dom"

const Home = () => {
  return(
    <div>This is Home</div>
  )
}

const About = (props) => {
  return(
    <div>
      {props.match.params.name!=='ashok'?<Redirect to='/notAshok' />:null}
      This is About {props.match.params.name}
    </div>
  )
}

const Contact = () => {
  return(
    <div>This is Contact</div>
  )
}


const Show404 = () => {
  return (
    <h2>404 not found</h2>
  )
}



class App extends React.Component{
  constructor(props){
    super(props);    
  }

  render(){
    const name = 'ashok1';
    const isAuthenticated = true;
    return (     
      <Router>
      <div> 
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to={`/about/${name}`}>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/sst'>sdf</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path='/' exact component={Home} />
        {isAuthenticated ?
        <Fragment>
        <Route path='/about/:name' component={About} />
        <Route path='/contact' component={Contact} />
        </Fragment>
        :<Redirect to='/' />  
        }      
      </Switch>
      </Router>
    )
  }
}

export default App;