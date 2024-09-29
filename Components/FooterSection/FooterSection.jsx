import React from "react";
import Image from "next/image";
import styles from "./FooterSection.module.css";
import footerBackground from "../../public/Assets/Footer_Background.png";
import coin from "../../public/Assets/coins.png";
import logo from "../../public/svgs/logo.svg";

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.footerBackground}
        src={footerBackground}
        alt="Footer background"
      />

      <div className={styles.content}>
        <div className={styles.lable}>
          <div className={styles.investingContainer}>
            <div>
              <h2 className={styles.heading}>
                INVESTING WITH US TAKES MINUTES
              </h2>
              <p className={styles.subheading}>
                Navigating Your Financial Future, Empowering Wealth, One Step at
                a Time.
              </p>
              <button className={styles.getStartedButton}>Get Started</button>
            </div>
            <div className={styles.coinImage}>
              <Image src={coin} alt="Coins" />
            </div>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinkColumn}>
            <Image className={styles.logo} src={logo} alt="Logo" />
            <ul className={styles.socialLinks}>
              <li>
                <a href="#" className={styles.socialLink}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink}>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink}>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className={styles.socialLink}>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinkColumn}>
            <h3 className={styles.footerLinkTitle}>Navigation</h3>
            <ul className={styles.footerLinkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Features
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Market
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinkColumn}>
            <h3 className={styles.footerLinkTitle}>Features</h3>
            <ul className={styles.footerLinkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Crypto Wallet
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Exchange Services
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Investment Portfolio
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Portfolio Management
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinkColumn}>
            <h3 className={styles.footerLinkTitle}>Legal</h3>
            <ul className={styles.footerLinkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Term Of Services
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Licensed &amp; Regulation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.lineDetail}></div>
        </div>
        <div className={styles.rightsAndPolicy}>
          <div className={styles.left}>
            <div className="text-[14px] font-light">
              <a>© 2024, All Rights Reserved.</a>
            </div>
          </div>
          <div className={styles.right}>
            <div className="text-[14px] font normal ">
              <a href="#" className={styles.rightBottomItems}>
                Sitemap
              </a>
              <a href="#" className={styles.rightBottomItems}>
                Privacy Policy
              </a>
              <a href="#" className={styles.rightBottomItems}>
                IMAP Policy
              </a>
              <a href="#" className={styles.rightBottomItems}>
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
