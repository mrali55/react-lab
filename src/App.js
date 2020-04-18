import React from 'react';
import Controller from './components/Controller';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
     <Controller/>
    </div>
  );
}
console.log('aaaaaa');

export default App;

ReactDOM.render(<App />, document.querySelector('#app'));
