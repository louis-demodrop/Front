import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Header } from './components/organisms/Header';
import { FeedPage, SignInPage, SignUpPage, UploadPage } from "./components/pages"

const App = () => {

  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header></Header>
            <FeedPage></FeedPage>
          </Route>
          <Route path="/signin" exact>
            <SignInPage></SignInPage>
          </Route>        
          <Route path="/signup" exact>  
            <SignUpPage></SignUpPage>
          </Route>        
          <Route path="/upload" exact>
            <Header></Header>
            <UploadPage></UploadPage>
          </Route>        
        </Switch>
      </Router>
  );
}

export default App;
