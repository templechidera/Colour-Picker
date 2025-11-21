import { IoColorPalette } from "react-icons/io5";

function Header() {
  return (
    <div className="parent">
      <header className="header">
        <div className="title-row">
          <IoColorPalette size={40} />
          <h1>Pixel Pick</h1>
        </div>
        <span className="tagline">Pick colours from any image</span>
      </header>
    </div>
  );
}

export default Header;
