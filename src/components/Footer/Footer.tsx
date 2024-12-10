import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

import logo from "../../../public/logo.svg";
import qrCode from "../../../public/qr_code.svg";
import googlePlay from "../../../public/google_play.svg";
import appStore from "../../../public/app_store.svg";

function Footer() {
  return (
    <footer
      className={`px-4 md:px-14 lg:px-28 py-6 flex flex-wrap justify-between gap-1 lg:gap-8 ${styles.footerContainer}`}
    >
      <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
        <div>
          <Link href="/">
            <Image src={logo} alt="Brand Logo" width={140} priority />
          </Link>
          <p className={styles.desc}>
            Ecommerce is a free UI Kit from Paperpillar that you can use for
            your personal or commercial project.
          </p>
        </div>
        <form className="mt-5 flex items-center gap-2">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Type your email address"
            className={styles.emailField}
          />
          <input type="submit" value="Submit" className={styles.submitBtn} />
        </form>
      </div>

      <div className="w-fit">
        <h4 className={styles.linkSectionHeader}>Account</h4>
        <ul>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>

      <div className="w-fit">
        <h4 className={styles.linkSectionHeader}>Quick Link</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="w-fit">
        <h4 className={styles.linkSectionHeader}>Support</h4>
        <ul>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
      </div>

      <div className="w-fit mt-5 md:mt-0">
        <h4 className={styles.linkSectionHeader}>Download App</h4>
        <div className="flex items-center gap-2">
          <Image src={qrCode} alt="QR Code" width={80} priority />
          <div>
            <Image src={googlePlay} alt="Google Play" width={120} priority />
            <Image src={appStore} alt="App Store" width={120} priority />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
