import logo from './images/Combined Shape.svg';
import pacet1 from './images/kopi1 copy.png';
import pacet2 from './images/kopi2.png';
import pacet3 from './images/kopi3.png';
import pacet4 from './images/kopi4.png';
import shape from './images/Shape.svg';
import shape2 from './images/Combined Shape (1).svg';
import shape3 from './images/Combined Shape.png';
import path1 from './images/Path.svg';
import path2 from './images/Path.png';
import path3 from './images/Shape (1).svg';
import backImg from './images/Bitmap.png';


import './App.css';

function App() {
  return (
    <div classNameName="App">
      <div className="container">
        <header>
          <nav>
            <img src={logo} alt="logo" />
            <h3>coffeeroasters</h3>
          </nav>

          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>Create your planF</li>
          </ul>
        </header>
        <main>
          <section className="hero" style={{backgroundImage : `url(${backImg})`}} >

            <div className="hero__item">
              <h1>Great coffee made simple.</h1>
              <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from
                our best roasters delivered directly to your door, at your schedule.</p>
              <button>Create your plan</button>
            </div>
          </section>
          <section className="collection">
            <h2 className="our">our collection</h2>
            <ul className="collection__list">
              <li>
                <img src={pacet1} alt="pacet" />
                <h3>Gran Espresso</h3>
                <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
              </li>
              <li>
                <img src={pacet2} alt="pacet" />
                <h3>Planalto</h3>
                <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
              </li>
              <li>
                <img src={pacet3} alt="pacet" />
                <h3>Piccollo</h3>
                <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
              </li>
              <li>
                <img src={pacet4} alt="pacet" />
                <h3>Danche</h3>
                <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
              </li>
            </ul>
          </section>
          <section className="choose">
            <div className="choose__item">
              <h2>Why choose us?</h2>
              <p>A large part of our role is choosing which particular coffees will be featured
                in our range. This means working closely with the best coffee growers to give
                you a more impactful experience on every level.</p>
            </div>
            <div className="cards">
              <div className="card">
                <img className="card__img" src={shape} alt="img" />
                <h3 className="card__title">Best quality</h3>
                <p className="card__text">Discover an endless variety of the world’s best artisan coffee from each
                  of our roasters.</p>
              </div>
              <div className="card">
                <img className="card__img" src={shape2} alt="img" />
                <h3 className="card__title">Exclusive benefits</h3>
                <p className="card__text">Special offers and swag when you subscribe, including 30% off your first
                  shipment.</p>
              </div>
              <div className="card">
                <img className="card__img" src={shape3} alt="img" />
                <h3 className="card__title">Free shipping</h3>
                <p className="card__text">We cover the cost and coffee is delivered fast. Peak freshness:
                  guaranteed.</p>
              </div>
            </div>
          </section>
          <section className="works">
            <h3>How it works</h3>
            <div className="list">
              <div className="srcles">
                <span className="srcle"></span>
                <span className="srcle"></span>
                <span className="srcle"></span>
                <span className="hr"></span>
              </div>
              <ul className="list__item">
                <li>
                  <h1>01</h1>
                  <h2>Pick your
                    coffee</h2>
                  <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we
                    pay fair prices for them. There are new coffees in all profiles every month for you to
                    try out.</p>
                </li>
                <li>
                  <h1>02</h1>
                  <h2>Choose the frequency</h2>
                  <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                </li>
                <li>
                  <h1>03</h1>
                  <h2>Receive and enjoy!</h2>
                  <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-className coffees curated to provide a distinct tasting experience.</p>
                </li>
              </ul>
              <button>Create your plan</button>
            </div>
          </section>
        </main>
        <footer>
          <div className="footer-nav">
            <img src={logo} alt="logo" />
            <h3>coffeeroasters</h3>
            <ul>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>Create your planF</li>
            </ul>
          </div>
          <div className="footer-link">
            <img src={path1} alt="" />
            <img src={path2} alt="" />
            <img src={path3} alt="" />
          </div>

        </footer>



      </div>
    </div >
  );
}

export default App;
