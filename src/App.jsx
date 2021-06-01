import './App.css';
import mobile from './images/mobile.jpg';
import desktop from './images/desktop.jpg';

function App() {
  return (
    <div className='body'>
        <div class="card">
            <div className="image">
                <picture>
                    <source />
                    <img src={mobile} alt="mobile" />
                </picture>
            </div>
            <div className="text">
                <h1>Get <span>insights</span> that help your bussiness grow.</h1>
                <br />
                <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <br />
                <div className="infos">
                    <div className="info">
                        <h2>10k+</h2>
                        <h3>COMPANIES</h3>
                    </div>
                    <div className="info">
                        <h2>314</h2>
                        <h3>TEMPLATES</h3>
                    </div>
                    <div className="info">
                        <h2>12M+</h2>
                        <h3>QUERIES</h3>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  );
}

export default App;
