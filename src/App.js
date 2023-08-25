import './App.css';
import { RandomGifs } from './components/RandomGifs';
import { TagGifs } from './components/TagGifs';

function App() {
  return (
    <div>
      <h1 className=' bg-red-300 py-2 text-2xl text-center mt-2 mx-4 rounded-md font-semibold border-2 border-black'>RONDOM GIFS</h1>
      <div className=' flex flex-col justify-center items-center mt-8'>
        <RandomGifs/>
        <TagGifs/>
      </div>
    </div>
  );
}

export default App;
