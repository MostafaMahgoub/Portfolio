import React from 'react';

function NavProjectsMenu({setActiveNav}) {
    return (
        <nav className="nav" aria-label="In-page jump links">
            <ul>
              <li>
                <a className="nav-link" href="#electronJS" onClick={function() { setActiveNav('ElectronJS') }}>
                  <span className="nav-indicator" />
                  <span className="nav-text">ElectronJS</span>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#a.m.s" onClick={function() { setActiveNav('A.M.S') }}>
                  <span className="nav-indicator" />
                  <span className="nav-text">A.M.S</span>
                </a>
              </li>
            </ul>
        </nav>
    );
  }
  
  export default NavProjectsMenu;