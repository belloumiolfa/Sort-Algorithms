import './App.css';
import {
   HashRouter as Router,
   Route,
   Redirect,
   Routes,
} from 'react-router-dom';
import SortingAlgorithms from './Sorting/Pages/SortingAlgorithms';
import Header from './Welcom/Components/Header';
import Hero from './Welcom/Pgaes/Hero';
import Algorithm from './Sorting/Pages/Algorithm';
import Compaire from './Sorting/Pages/Compaire';

function App() {
   return (
      <Router>
         <Header />
         <div id='main'>
            <Routes>
               <Route path='/' element={<Hero />} />
               <Route path='/sorting' element={<SortingAlgorithms />} />
               <Route path='/sorting/:name' element={<Algorithm />} />
               <Route path='/compaire' element={<Compaire />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
