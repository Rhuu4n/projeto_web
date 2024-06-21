import React from 'react';
import Link from 'next/link';
import './logoLink.css';

const LogoLink = () => {
  return (
    <div id="logoGuilty">
      <Link href="/" legacyBehavior>
        <a>
          <img src="icon/logoH1R4.svg" alt="logotipo hira, voltar ao menu principal" />
        </a>
      </Link>
    </div>
  );
}

export default LogoLink;