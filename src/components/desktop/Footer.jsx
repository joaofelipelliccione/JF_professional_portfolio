import React from 'react';
import { MdDirectionsBike } from 'react-icons/md';
import '../../styles/desktop/footer.css';

function Footer() {
  return (
    <footer id="footer">
      <span>
        Developed by
        <a href="https://github.com/joaofelipelliccione" rel="noreferrer" target="_blank"> João Felipe Pelliccione</a>
        {' '}
        <MdDirectionsBike />
      </span>
    </footer>
  );
}

export default Footer;
