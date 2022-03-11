import React from 'react';
import { MdDirectionsBike } from 'react-icons/md';
import '../../styles/mobile/mobileFooter.css';

function MobileFooter() {
  return (
    <footer id="mobFooter">
      <span>
        {'Developed by '}
        <a
          href="https://github.com/joaofelipelliccione"
          rel="noreferrer"
          target="_blank"
        >
          João Felipe Pelliccione
        </a>
        {' '}
        <MdDirectionsBike />
      </span>
    </footer>
  );
}

export default MobileFooter;
