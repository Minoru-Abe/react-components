import logo from './logo.svg';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';

function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>second test</SecondaryButton>
    </div>
  );
}

export default App;
