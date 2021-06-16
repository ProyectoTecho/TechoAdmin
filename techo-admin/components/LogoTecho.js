import React from "react";
import Image from "next/image";
import Link from 'next/link'

const LogoTecho = ({ styles }) => {
  return (
    <div>
      <div className={styles}>
        <Link href="/Home"><Image src="/techo-footer.png" width="auto" height="100" /></Link>
      </div>
    </div>
  );
};

export default LogoTecho;
