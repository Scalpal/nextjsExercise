import { useState } from "react";
import Link from 'next/link'; 

const Navbar = () => {

  return (
    <nav className="navbar">

      <h2> User website </h2>

      <ul className="flex flex-row">
        <li> <Link href="/customer-add"> Create customer </Link> </li>
        <li> <Link href="/customer-list"> Customer list </Link></li>
      </ul>
    </nav>
  )
}


export default Navbar; 