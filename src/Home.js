import './css/home.css';
import Card from './components/card.js';
import Footer from './components/footer';
import Header from './components/header';


const Home = () => {
  return (
    <div className="App">
       <Header />
      <section className="display-section">
        <img className="main-logo"
        src="./luckymelogo.png"
        alt="" />
        <h1 className="main-text">LuckyMe Logs</h1>
        <p style={{color: 'white'}}>Application Logs from the server.</p>
      </section>
      <div className="display-section-2">
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
