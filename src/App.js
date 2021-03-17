import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Header } from './components/organisms/Header';
import { FeedPage, SignInPage, SignUpPage, UploadPage } from "./components/pages";
import { LandingPage } from "./components/pages/LandingPage";
import { useLoginStatus } from "./hooks/useLoginStatus";

const App = () => {
  const logged = useLoginStatus();
  
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            {
              !logged ? <LandingPage></LandingPage> : 
              <>
                <Header></Header>
                <FeedPage></FeedPage>
              </>
            }
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
