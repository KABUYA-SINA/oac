import { BrowserRouter } from 'react-router-dom';
import LocationProvider from './components/LocationProvider';
import Roads from './components/Roads';
import Footer from './components/Footer';
import '../src/sass/layout/_container.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <LocationProvider>
          <Roads />
        </LocationProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;