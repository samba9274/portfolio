import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import "./styles/loader.css";

const App = lazy(() => import("./components/App"));
const renderLoader = () => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "8px solid #e0e0e0",
      borderRadius: "50%",
      borderTop: "8px solid #555",
      width: "50px",
      height: "50px",
      WebkitAnimation: "spin 1s linear infinite",
      MozAnimation: "spin 1s linear infinite",
      animation: "spin 1s linear infinite",
    }}
  />
);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={renderLoader()}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();