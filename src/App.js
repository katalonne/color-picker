import './App.css';
import { ColorPicker } from './color-picker/color-picker'

function App() {
  const initialColor = {
    h: 140,
    s: 1,
    l: 0.50,
    a: 1,
  }
  return (
    <div className="App">
      <ColorPicker initialColor={initialColor} width={400} height={200}   />
    </div>
  );
}

export default App;
