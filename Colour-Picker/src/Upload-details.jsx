function UploadDetails({ canvasRef, fileName, setFileName, handleColorPick }) {
  function handleUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setFileName(imgURL);

      const img = new Image();
      img.src = imgURL;
      img.onload = function () {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      };
    }
  }

  return (
    <div className="upload-details">
      <input
        className="input-file"
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      <label className="label" htmlFor="file-upload">
        Upload Image
      </label>

      <div className="upload-status-wrapper">
        <span className={`upload-status ${fileName ? "loaded" : ""}`}>
          {fileName ? "Image loaded ✅" : "Click 'Upload Image' to start"}
        </span>
      </div>

      <div className="canvas-box">
        <div>
          {!fileName && (
            <img
              className="placeholder"
              src="https://iili.io/f22XbkB.md.png"
              alt="placeholder"
            />
          )}
        </div>
        <div>
          <canvas
            className="canvas"
            ref={canvasRef}
            onClick={handleColorPick}
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default UploadDetails;
