import { For, type Component } from 'solid-js';
import { customElement } from 'solid-element';

import logo from './logo.svg';
import styles from './App.module.css';
import  './Clock';


const style = `.App {
  text-align: center;
  display: flex;
  gap: 12px;
  padding: 12px;
  flex-wrap: wrap;
  
  
}
`

const App: Component = () => {
  const count = new Array(1000).fill(0)
  return (
    <>
    <style>{style}</style>
    <div classList={{[styles.App] : true, "container": true, "App": true}}>
      <For each={count}>
        {(item, index) => <solid-clock></solid-clock>
       }
</For>
    </div>
    </>
    
  );
};
customElement('app-root', {someProp: 'one', otherProp: 'two'}, App)

export default App;
