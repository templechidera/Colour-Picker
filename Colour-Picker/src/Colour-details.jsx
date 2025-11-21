import React, { useState } from "react";

function HandleColor({ color }) {
  const [copiedButton, setCopiedButton] = useState(null);

  if (!color) return null;

  const copyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedButton(id);
    setTimeout(() => setCopiedButton(null), 2000);
  };

  return (
    <div className="color-card">
      <h2>Color Details</h2>

      <div
        className="color-preview"
        style={{ backgroundColor: color.hex }}
      ></div>

      <div className="copy-color">
        <div className="copy-row">
          <p className="hex-text">HEX: {color.hex}</p>
          <div className="copy-btn-wrapper">
            <button
              onClick={() => copyText(color.hex, "hex")}
              className="copy-btn"
            >
              Copy
            </button>
            {copiedButton === "hex" && (
              <span className="copied-indicator">Copied!</span>
            )}
          </div>
        </div>

        <div className="copy-row">
          <p className="rgb-text">
            RGB: ({color.r}, {color.g}, {color.b})
          </p>
          <div className="copy-btn-wrapper">
            <button
              onClick={() =>
                copyText(`rgb(${color.r}, ${color.g}, ${color.b})`, "rgb")
              }
              className="copy-btn"
            >
              Copy
            </button>
            {copiedButton === "rgb" && (
              <span className="copied-indicator">Copied!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HandleColor;
