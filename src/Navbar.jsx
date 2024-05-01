import { links, social } from './data';
import { FaBars } from 'react-icons/fa';
import logo from '../src/assets/react.svg';
import { useRef, useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleNavToggle = () => {
    console.log(linksRef.current.getBoundingClientRect());
    setShowLinks(!showLinks);
  };

 


            const linksStyles = {
              height: showLinks
                ? `${linksRef.current.getBoundingClientRect().height}px`
                : '0px',
            };
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt={logo} />
            <button className="nav-toggle" onClick={handleNavToggle}>
              <FaBars />
            </button>
          </div>
          <div
            className="links-container"
            ref={linksContainerRef}
            style={linksStyles}
          >
            <ul className="links" ref={linksRef}>
              {links.map((link) => (
                <li className="link" key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((socials) => (
              <li key={socials.id}>
                <a href={socials.url}>{socials.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
