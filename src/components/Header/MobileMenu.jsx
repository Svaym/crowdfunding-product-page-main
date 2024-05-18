import NavLinks from "./NavLinks";
import logo from '../../assets/logo.svg'
import { useState } from "react";

export default function MobileMenu() {
  const [click, setClick] = useState(false)
  return (
    <header className="hidden xxs:block xxs:py-6 xxs:bg-hero-mobile xxs:h-80 xxs:bg-top">
      <div className="container">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" />
          {!click ? <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" className="cursor-pointer" onClick={() => setClick(!click)}/></g></svg> : <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path className="cursor-pointer" d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" onClick={() => setClick(!click)}/></g></svg>}
          {click && <NavLinks />}
        </div>
      </div>
    </header>
  )
}
