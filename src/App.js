import React from 'react';
import logo from './logo.svg';
import './App.css';
import Redirect from './Task19/Redirect';
import Shop from './Task22/Shop';
import CheckoutForm from './Task23/CheckoutForm';
import Language from './Task24/Language';
import Animation from './Task25/Animation';
import Chart from './Task26/Chart';
import Api from './Task27/Api';
import Web from './Task20/Web';
import Chunks from './Task21/Chunks';


console.log(Language);
console.log(Animation);
console.log(Chart);
console.log(Api);
function App() {
  return (
    <div>
    <section>
       <Redirect />
           </section>
           <section>
       <Shop />
           </section>
           <section>
       <CheckoutForm />
           </section>
           <section>
       <Language />
           </section>
           <section>
       <Animation />
           </section>
           <section>
       <Chart />
           </section>
           <section>
       <Api />
           </section>
           <section>
       <Web />
           </section>
           <section>
       <Chunks />
           </section>
           </div>
           
           
  );
}

export default App;
