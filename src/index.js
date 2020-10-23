import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import Header from './Components/Header';
import Home from './Components/Home';
import Research from './Components/Research';
import About from './Components/About';
import Team from './Components/Team';
import Publication from './Components/Publication';
import Footer from './Components/Footer';
import Signin from './Components/Signin';
import Contact from './Components/Contact';
import Topic1 from './Components/Topic1';
import Topic2 from './Components/Topic2';
import Topic3 from './Components/Topic3';
import Topic4 from './Components/Topic4';
import GetInvolved from './Components/GetInvolved';
import CustomNav from './Components/CustomNav';
import {  BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './index.css';
import {createBrowserHistory} from 'history'
import Support from './Components/Support';
import ScrollToTop from 'react-router-scroll-top';
import Admin from './Components/Admin'

ReactDOM.render(
  <React.StrictMode>
  	<Router basename={process.env.PUBLIC_URL} onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}>
  		<Header />
  		<CustomNav />
  		<Switch>
  		<Route path="/" exact component={Home}  />
  		<Route path="/About"  component={About}  />
      <Route path="/Admin"  component={Admin}  />
  		<Route path="/Research"  component={Research}  />
  		<Route path="/Publication"  component={Publication} />
  		<Route path="/Team"  component={Team} />
      <Route path="/Contact"  component={Contact} />
      <Route path="/topic1" component={Topic1}/>
      <Route path="/topic2" component={Topic2}/>
      <Route path="/topic3" component={Topic3}/>
      <Route path="/topic4" component={Topic4}/>
      <Route path="/GetInvolved" component={GetInvolved}/>
  		</Switch>
  		<Footer />
  	</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

