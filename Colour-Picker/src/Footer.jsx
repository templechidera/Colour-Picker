import { FaReact } from "react-icons/fa6";
import { FaGithub, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-row">
          <FaReact size={22} className="react-icon" />
          <span>Made with React</span>
        </div>

        <div className="footer-row">
          <span>
            Developed by <strong>Dev Temple Chidera</strong>
          </span>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/templechidera"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://x.com/DevTemple_Dera?t=tix7UmdeuBDJR7Cf5_H6cw&s=09"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
