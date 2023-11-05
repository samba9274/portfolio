import { constants } from "../data";

export const Footer = () => (
  <footer id="StatusBar">
    <ul>
      <li>
        <i className="far fa-times-circle"></i>
        {constants.zero}
      </li>
      <li>
        <i className="fas fa-exclamation-triangle"></i>
        {constants.zero}
      </li>
    </ul>
  </footer>
);
