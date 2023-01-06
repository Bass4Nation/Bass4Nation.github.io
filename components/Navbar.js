import Link from "next/link";
import style from "../styles/Navbar.module.css";

// This is the list of items in the navbar
const navItemList = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/aboutme" },
  { name: "My websites", href: "/websites" },
  { name: "My Anime watchlist", href: "/anime" },
];

const Navbar = () => {
  return (
    <nav>
      <div className={style.navigationPanel}>
        {navItemList.map((item) => (
          <Link href={item.href} key={item.name} className={style.nav_item}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
