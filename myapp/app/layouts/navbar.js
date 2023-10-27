import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo1 from '../../public/images/log.png'

export default function navbar() {
  return (
    <nav className="navbar">
    <section className="logo-zone">
    <figure>
      <Image className="logo" src={logo1} alt="" />
    </figure>
    <h2>CAHIER JOURNALIER</h2>
    </section>
      <ul className="list">
        <li>
          <Link className="lien" href='/'>Home</Link>
        </li>
        <li>
          <Link className="lien" href='/jornals'>Journals</Link>
        </li>
        <li>
        <Link className="lien" href='/form'>Remplir cahier du jour</Link>
      </li>
      </ul>
    </nav>
  );
}
