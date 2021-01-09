import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AuthContextProvider } from './contexts/AuthContext'
import { FeedPage, SignInPage, SignUpPage, UploadPage } from "./components/pages"

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <FeedPage></FeedPage>
          </Route>
          <Route path="/signin" exact>
            <SignInPage></SignInPage>
          </Route>        
          <Route path="/signup" exact>  
            <SignUpPage></SignUpPage>
          </Route>        
          <Route path="/upload" exact>
            <UploadPage></UploadPage>
          </Route>        
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
