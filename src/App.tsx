import Autocomplete from './components/Autocomplete';

function App() {
  return (
    <div className="grid xl:grid-cols-12 grid-cols-8 gap-2 w-screen h-screen">
      <Autocomplete labelName="Country" />
    </div>
  );
}

export default App;
