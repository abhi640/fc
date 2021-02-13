import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import PricingPage from './pages/PricingPage/Pricing';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import Gallery from './pages/Gallery/Gallery';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer, Pricing } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/gallery' exact component={Gallery} />
        <Route path='/pricing' exact component={PricingPage} />
        <Route path='/reviews' exact component={ReviewPage} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
