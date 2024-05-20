import NavLinks from "./NavLinks";
import logo from '../../assets/logo.svg'

export default function Menu() {
  return (
    <header className="py-6 bg-hero-desktop bg-no-repeat bg-cover h-96 bg-top xxs:hidden">
      <div className="container">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" />
          <NavLinks />
        </div>
      </div>
    </header>
  )
}
