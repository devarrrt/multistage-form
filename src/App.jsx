import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Step1, Step2, Step3, ResultPage } from './components'

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route patch="/result" component={ResultPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
