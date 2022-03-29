import './App.css';
import Header from './Components/Header/Header';
import Bigcard from './Components/Bigcards/Bigcard';
import Smallcard from './Components/Smallcards/Smallcard';

/* props video https://www.youtube.com/watch?v=UrpNtB61qyo */

function App() {
  return (
    <>
        <Header />
      <div className="main-container">
        <Bigcard />
        <Smallcard />
      </div>
    </>
  );
}

export default App;
