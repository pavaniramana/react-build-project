// import logo from './logo.svg';
import Bollywood from './Bollywood';
import { Provider } from './Createcontext';
import Header from './Header';
import Hollywood from './Hollywood';
import Technology from './Technology';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import Information from './Information';
import Travel from './Travel';
import Food from './Food';



function App() {
  return (
    <Provider>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>

          <Route path='/bollywood' element={<Bollywood />} />

          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/travel' element={<Travel/>}/>

          <Route path='/technology' element={<Technology />} />
          <Route path='/food' element={<Food/>}/>
          <Route path='/category' element={<Information/>}>
            <Route path=':id' element={<Information/>}/>
          </Route>


        </Routes>



      </Router>

    </div>
    </Provider>
  );

}

export default App;
