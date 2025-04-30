/*import Hero from componented hero.jsx so it will be visible on the app */
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Offers from './components/Offers.jsx'
import Plan from './components/Plan.jsx'
import ImageSlider from './components/ImageSlider.jsx'

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Navbar></Navbar>
      <Offers></Offers>
      <Plan></Plan>
      <ImageSlider></ImageSlider>
    </div> 
  );
}

export default App;
 