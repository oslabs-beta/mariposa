import * as React from 'react';
import * as ReactDOM from 'react-dom';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <h1>
      Nice from a react app
    </h1>
  )
}

ReactDOM.render(<App />, mainElement);
