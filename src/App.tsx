import Autocomplete from './components/Autocomplete';

function App() {
  return (
    <div className="grid xl:grid-cols-12 grid-cols-4 xl:grid-rows-6 grid-rows-3 gap-2 w-screen h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-400 to-orange-300 xl:text-lg text-md">
      <Autocomplete />
    </div>
  );
}

export default App;
