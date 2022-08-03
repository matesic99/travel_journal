import './App.css';
import data from './data';
import Header from './Header';
import Article from './Article';

function App() {

  const cards = data.map(card =>{
    return(
    <Article key={card.id} {...card} />

    )
  }
  )
  




  return (
    <div className="ApP m-auto">
    
      <Header />
      <div className="content">

        {cards}
      </div>
    </div>


  )
}

export default App;
