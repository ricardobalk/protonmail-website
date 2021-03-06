import styles from "./Navbar.module.scss";
import PMLogo from "../PMLogo";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import CTAButton from "../callToActionButton";
import { useState, useEffect } from "react";

export const Navbar = () => {
  let [opaqueNavbar, makeNavbarOpaque] = useState(Boolean);
  let navbarDebounceTimer!: number;

  /**
   * @function handleNavbarOpacity() changes the value of `opaqueNavbar`
   * to `true` when the user scrolls down.
   *
   * The value of `opaqueNavbar` can be used to add and remove CSS classes,
   * in this case for changing the appearance of the navigation bar.
   *
   * It comes with a debouncing mechanism to prevent changing the value too many times,
   * as JavaScript could trigger events an excessive amount of times,
   * especially when using it with a scroll listener.
   */
  const handleNavbarOpacity = (): void => {
    if (navbarDebounceTimer) {
      window.cancelAnimationFrame(navbarDebounceTimer);
    }
    navbarDebounceTimer = window.requestAnimationFrame(() => {
      if (window.scrollY > 50) {
        makeNavbarOpaque(true);
      } else {
        makeNavbarOpaque(false);
      }
    });
  };

  useEffect(() => {
    handleNavbarOpacity();
    window.addEventListener("scroll", handleNavbarOpacity);
    return () => window.removeEventListener("scroll", handleNavbarOpacity);
  });

  return (
    <header
      className={`${styles.navbar} ${opaqueNavbar ? styles.opaque : ""}`}
      onScroll={handleNavbarOpacity}
    >
      <div className={styles.primary}>
        <SocialIcons size={16} />
        <div className="language-picker"></div>
      </div>

      <div className={styles.secondary}>
        <div className={styles.logo}>
          <PMLogo />
        </div>

        <nav className={styles.navlinks}>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>

          <Link href="/security-details">
            <a className={styles.link}>Security</a>
          </Link>

          <Link href="/blog">
            <a className={styles.link}>Blog</a>
          </Link>

          <Link href="https://careers.protonmail.com/">
            <a className={`${styles.link} external`}>Careers</a>
          </Link>

          <Link href="/support">
            <a className={styles.link}>Support</a>
          </Link>

          <Link href="/#professional">
            <a className={`${styles.link} dropdown`}>Professional</a>
          </Link>

          <Link href="https://protonvpn.com/">
            <a className={`${styles.link} external`}>VPN</a>
          </Link>
        </nav>
        <div className={styles.buttons}>
          <Link href="/login">
            <a className={styles.button}>
              <CTAButton type={1}>Log in</CTAButton>
            </a>
          </Link>

          <Link href="/signup">
            <a className={styles.button}>
              <CTAButton type={2}>Sign up</CTAButton>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
