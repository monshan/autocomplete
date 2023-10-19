import Autocomplete from './components/Autocomplete';

function App() {
  return (
    <div className="grid xl:grid-cols-12 grid-cols-8 gap-2 w-screen h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-400 to-orange-300">
      <Autocomplete />
    </div>
  );
}

export default App;
