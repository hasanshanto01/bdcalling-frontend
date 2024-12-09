import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

import logo from "../../../public/logo.svg";
import {
  FaRegHeart,
  FiShoppingCart,
  RiUserLine,
  IoIosSearch,
  MdKeyboardArrowDown,
} from "../../utils/Icon";

function Navbar() {
  return (
    <nav className="px-28 py-2 flex justify-between items-center gap-8">
      {/* logo */}
      <div>
        <Link href="/">
          <Image src={logo} alt="Brand Logo" width={160} priority />
        </Link>
      </div>
      {/* logo */}

      {/* search bar & menus */}
      <div className="flex items-center gap-5">
        <form className="flex">
          <div className={styles.searchBox}>
            <div className={styles.searchIcon}>
              <IoIosSearch />
            </div>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search"
              className={styles.searchField}
            />
          </div>
          <input type="submit" value="Search" className={styles.searchBtn} />
        </form>

        <ul className="flex items-center gap-5">
          <li className="flex items-center gap-1 cursor-pointer">
            <span className={styles.menuOpacity}>All Category</span>
            <MdKeyboardArrowDown className={styles.navArrowIcon} />
          </li>
          <li className={styles.menuOpacity}>
            <Link href="/about" className="inline-block w-full">
              About Us
            </Link>
          </li>
          <li className={styles.menuOpacity}>
            <Link href="/contact" className="inline-block w-full">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {/* search bar & menus */}

      {/* nav operations */}
      <div className="flex items-center gap-5">
        <FaRegHeart className={styles.navOperationIcon} />
        <FiShoppingCart className={styles.navOperationIcon} />
        <RiUserLine className={styles.navOperationIcon} />
      </div>
      {/* nav operations */}
    </nav>
  );
}

export default Navbar;
