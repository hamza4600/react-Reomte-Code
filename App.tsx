import "aos/dist/aos.css";
import Amplify from "aws-amplify";
import { IntercomProvider } from "react-use-intercom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ErrorProvider from "state/error/error.provider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "@remotebase/common/src/GlobalStyles";
import "./assets/css/icon.css";
import { AuthProvider } from "state/auth";
import { shouldUseIntercom } from "utils";
import config from "@remotebase/amplify-constants/aws-exports";
import MainRouter from "./router";
import "./assets/css/index.css";

Amplify.configure(config);

const App: React.FC = () => {
    return (
        <ErrorProvider>
            <IntercomProvider
                appId={process.env.REACT_APP_INTERCOM_APP_ID || ""}
                shouldInitialize={shouldUseIntercom}
                autoBoot
            >
                <Router>
                    <div className="App">
                        <GlobalStyles />
                        <AuthProvider>
                            <Route path="/" component={MainRouter} />
                        </AuthProvider>
                    </div>
                </Router>
            </IntercomProvider>
        </ErrorProvider>
    );
};

export default App;
