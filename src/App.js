import './App.css';
import { Footer } from './footer';
import { Form } from './form';
import { Guide } from './guide';
import { Journey } from './journey';
import { Navbar } from './navbar';
import { Places } from './places';
import { Things } from './things';
import { Blog } from './blog';
import { Offers } from './offers';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Journey />
      <Offers />
      <Things />
      <Places />
      <Guide />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
