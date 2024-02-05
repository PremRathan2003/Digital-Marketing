import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import BlogPage from './components/BlogPage/BlogPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';
import Navbar from './components/Navbar/Navbar';
import ServiceDetailPage from './components/ServicesPage/ServiceDetailPage';
import BlogPostPage from './components/BlogPostPage/BlogPostPage';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
        <Redirect exact from="/Digital-Marketing" to="/" />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutUsPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/blog/:id" component={BlogPostPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/services/:id" component={ServiceDetailPage} />
        <Route exact path="/contact" component={ContactUsPage} />
      </Switch>
    </>
    
  );
}

export default App;
