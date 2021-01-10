import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AuthContextProvider } from './contexts/AuthContext'
import { MusicContextProvider } from './contexts/MusicContext'
import { FeedPage, SignInPage, SignUpPage, UploadPage } from "./components/pages"

const App = () => {

  return (
    <AuthContextProvider>
    <MusicContextProvider>
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
    </MusicContextProvider>
    </AuthContextProvider>
  );
}

export default App;
