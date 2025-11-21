import Header from "./Header";
import UploadDetails from "./Upload-details";
import "./App.css";
import HandleColor from "./Colour-details";
import { useState, useRef } from "react";
import Footer from "./Footer";

function App() {
  const [fileName, setFileName] = useState(null);
  const [color, setColor] = useState(null);
  const canvasRef = useRef(null);

  function handleColorPick(e) {
    if (!fileName) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(
      ((e.clientY - rect.top) / rect.height) * canvas.height
    );

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = pixel;
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)}`;

    setColor({ r, g, b, hex });
  }

  return (
    <div className="app-container">
      <Header />
      <div className="main">
        <div className="upload-section">
          <UploadDetails
            canvasRef={canvasRef}
            fileName={fileName}
            setFileName={setFileName}
            handleColorPick={handleColorPick}
          />
        </div>

        <div className="colordetails">
          <HandleColor color={color} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
