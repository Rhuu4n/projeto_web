import React from 'react';
import { Link } from 'react-router-dom';

const logoLink = () => {
  return (
    <div className="logoGuilty">
      <Link to="/">
        <img src="icon/logoH1R4.svg" alt="logotipo hira" />
      </Link>
    </div>
  );
}

export default logoLink;