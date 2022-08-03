import './App.css';
import Output from './components/Output';

function App() {
  return (
    <div className="font-[Poppins] min-h-screen text-white flex flex-col ">
      <header className="drop-shadow-lg bg-[#222222] py-6 pl-2">
        <h1 className="text-2xl font-bold ">Email Web Scraper</h1>
      </header>
      <main className="text-neutral-800 font-bold my-12">
        <div className="h-28 flex flex-col justify-center items-center m-auto space-y-3">
          <h2 className="text-xl">Enter a URL</h2>
          <input
            className="border-[1px] font-normal border-neutral-100 py-1 px-2 rounded-xl text-center drop-shadow-md"
            placeholder="URL..."
          />
          <button className="bg-[#046739] w-24 py-1.5 text-white rounded-lg drop-shadow-md hover:bg-[#153f2b] transition">
            Search
          </button>
        </div>
        <Output />
      </main>
      <footer className="shadow-lg bg-[#222222] text-xs py-6 pl-2 fixed bottom-0 w-full">
        Made by jeffyun123
      </footer>
    </div>
  );
}

export default App;
