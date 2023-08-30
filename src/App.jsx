
import './App.css';
import ColorFlipper from './components/colorflipper';

// const simpleColors = [
//   { name: 'Blue', hex: '#0000FF' },
//   { name: 'Red', hex: '#FF0000' },
//   { name: 'Green', hex: '#00FF00' },
//   { name: 'Yellow', hex: '#FFFF00' },
//   { name: 'Orange', hex: '#FFA500' },
//   { name: 'Purple', hex: '#800080' },
//   { name: 'Pink', hex: '#FFC0CB' },
//   { name: 'Brown', hex: '#A52A2A' },
//   { name: 'Gray', hex: '#808080' },
//   { name: 'White', hex: '#FFFFFF' },
//   { name: 'Magenta', hex: '#FF00FF' },
//   { name: 'Cyan', hex: '#00FFFF' },
// ];

const App = () => {
  // const [colorIndex, setColorIndex] = useState(0);
  // const [showHex, setShowHex] = useState(false);

  // const changeColor = () => {
  //   const newIndex = (colorIndex + 1) % simpleColors.length;
  //   setColorIndex(newIndex);
  // };



  return (
    // <div className="app" style={{ backgroundColor: showHex ? simpleColors[colorIndex].hex : simpleColors[colorIndex].name }}>
    //   <nav className="navbar">
    //     <h3>Color Flipper</h3>
    //     <div>
    //       <a href='#' onClick={() => setShowHex(false)}>Simple</a>
    //       <a href='#' onClick={() => setShowHex(true)}>Hex</a>
    //     </div>

    //   </nav>
    //   <header className="app-header">
    //     <h3>Background Color: {showHex ? simpleColors[colorIndex].hex : simpleColors[colorIndex].name}</h3>
    //     <button onClick={changeColor}>Change Color</button>
    //   </header>
    // </div>
    <ColorFlipper />
  );
}

export default App;
