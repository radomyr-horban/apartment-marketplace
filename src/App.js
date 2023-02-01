import './App.css';
import Apartment from './components/Apartment';
import ApartmentForm from './components/ApartmentForm';
import SortPanel from './components/SortPanel';

function App() {
  return (
    <div className='App'>
      <h1>Apartments Marketplace</h1>
      <ApartmentForm />
      <SortPanel />

      <Apartment />
      <Apartment />
      <Apartment />
    </div>
  );
}

export default App;
