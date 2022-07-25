import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuotes from "./components/pages/NewQuotes";
import QuotesDetails from "./components/pages/QuotesDetails";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quotesId">
            <QuotesDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuotes />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
