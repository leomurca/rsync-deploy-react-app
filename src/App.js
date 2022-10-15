import "./App.css";

import rsyncLogo from "./assets/rsync-logo.png";
import reactLogo from "./assets/react-logo.png";
import githubActionsLogo from "./assets/github-actions-logo.png";

function App() {
  return (
    <div className="App">
      <h1>rsync-deploy-react-app</h1>
      <div className="Logotypes">
        <img src={rsyncLogo} alt="Rsync Logo" />
        <h1>+</h1>
        <img src={reactLogo} alt="React Logo" />
        <h1>+</h1>
        <img src={githubActionsLogo} alt="Github Actions Logo" />
      </div>
      <p>
        Web site created to illustrate how to deploy a react application using
        rsync + Github Actions. <br /> See the full tutorial{" "}
        <a
          href="https://leomurca.xyz/posts/how-to-deploy-react-applications-using-github-actions-+-rsync/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

export default App;
