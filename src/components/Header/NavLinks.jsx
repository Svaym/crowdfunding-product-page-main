
export default function NavLinks() {
  return (
    <nav className="xxs:bg-white xxs:w-2/3 xxs:h-24 xxs:rounded-lg xxs:absolute xxs:top-16 xxs:p-2 xxs:left-1/2 xxs:-translate-x-1/2 xxs:animate-fade">
      <ul className="text-white flex items-center gap-x-5 font-medium xs:text-[15px] xxs:text-base xxs:text-black xxs:flex-col xxs:gap-y-1">
        <li>
          <a className="transition duration-200 ease-linear hover:contrast-50" href="#">About</a>
        </li>
        <li>
          <a className="transition duration-200 ease-linear hover:contrast-50" href="#">Discover</a>
        </li>
        <li>
          <a className="transition duration-200 ease-linear hover:contrast-50" href="#">Get Started</a>
        </li>
      </ul>
    </nav>
  );
}