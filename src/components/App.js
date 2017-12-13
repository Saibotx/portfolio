import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
// import Home from './Home';

// import PageShell from './PageShell.js';

import Home from '../pages/home/index.jsx';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';



export default function App() {
  return (
    // <div style={s.root}>
    <div>
      {/* <h1 style={s.title}>Single Page Apps for GitHub Pages</h1>
      <Interactive
        as="a"
        href="https://github.com/rafrex/spa-github-pages"
        style={s.repoLink}
        {...s.link}
      >https://github.com/rafrex/spa-github-pages</Interactive>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav> */}
      <Home/>

      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/engineer" component={PageShell(ExampleComponent)} />
        <Route path="/photographer" component={PageShell(ExampleComponent)} />
        <Route component={PageNotFound} />
      </Switch> */}
{/*
      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="http://www.rafaelpedicini.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Code and concept by <span {...s.childLink}>Rafael Pedicini</span>
        </Interactive>
      </div> */}
    </div>
  );
}
