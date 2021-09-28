import './App.css';
import Quote from "./Quote/Quote";
import Todos from "./Todo/Todos"

function App() {
  return (
    <div className='conteiner'>

      <Quote />

      <div className="cirle__1"></div>
      <div className="cirle__2"></div>
      <div className="cirle__3"></div>
      <div className="cirle__4"></div>

      <Todos />

      <div className="author">
        <h4>Created by Lorenzo Syku, 2021</h4>
      </div>
    </div>  
  );
}

export default App;
