import './App.css';
import Hand from './components/Hand/Hand';

function App() {

  return (
    <>
      <main id="table">
        <section className="adversary-side">
          
        </section>
        <section className="main-side">
        </section>
        <section className="my-side">
          <Hand />
        </section>
      </main>
    </>
  )
}

export default App;
