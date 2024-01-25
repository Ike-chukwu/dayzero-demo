"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/Navbar.module.css";
import Button from "../Button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = (props) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isMenuActive ? "hidden" : "auto";
    }
  }, [isMenuActive]);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <img className={styles.orgLogo} src="/logo.png" alt="" />
      </Link>
      {pathname.includes("/marketplace") ? (
        <div className={styles.extraMiddleLink}>
          <Link
            style={{
              textDecoration: "none",
              color: pathname == "/marketplace" ? "#FF3B00" : "white",
            }}
            href="/marketplace"
            className={styles.extraLink}
          >
            overview
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: pathname == "/marketplace/buy" ? "#FF3B00" : "white",
            }}
            href="/marketplace/buy"
            className={styles.extraLink}
          >
            buy
          </Link>
        </div>
      ) : (
        <div className={styles.middleIconPack}>
          <img
            src="/discord.png"
            style={{ width: "20px", height: " 20px" }}
            alt=""
          />
          <img
            src="/line.png"
            style={{ width: " 0.5px", height: " 20px", background: "#FBEFC5" }}
            alt=""
          />
          <img
            src="/telegram.png"
            style={{ width: " 20px", height: " 20px" }}
            alt=""
          />
          <img
            src="/line.png"
            style={{ width: " 0.5px", height: " 20px", background: "#FBEFC5" }}
            alt=""
          />
          <img
            src="/x.png"
            style={{ width: " 20px", height: " 20px" }}
            alt=""
          />
        </div>
      )}

      <div className={styles.btnPack}>
        {pathname === "/marketplace" ? (
          <Button
            bgColor="#FF3B00"
            color="white"
            onClick={(e) => {
              e.preventDefault();
              setMenuActive(false);
              props.setWalletOpen(true);
            }}
          >
            connect wallet
          </Button>
        ) : (
          <>
            <Button
              bgColor="white"
              color="black"
              onClick={(e) => {
                e.preventDefault();
                setMenuActive(false);
                props.setWalletOpen(true);
              }}
            >
              my account
            </Button>
            <Button bgColor="#FF3B00" color="white">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/marketplace"
              >
                marketplace
              </Link>
            </Button>
          </>
        )}
      </div>

      <div
        className={
          isMenuActive
            ? `${styles.mobileNav} ${styles.active}`
            : `${styles.mobileNav}`
        }
      >
        <img
          src="/close.png"
          className={styles.closeBtn}
          alt=""
          onClick={() => setMenuActive(false)}
        />

        <div className={styles.routes}>
          {pathname.includes("/dashboard") ||
          pathname.includes("/marketplace") ? null : (
            <p
              className={styles.route}
              onClick={() => {
                setMenuActive(false);
                props.setWalletOpen(true);
              }}
            >
              my account
            </p>
          )}
          {pathname.includes("/dashboard") && (
            <>
              <Link
                className={styles.route}
                href="/dashboard"
                style={{
                  textDecoration: "none",
                  color: pathname == "/dashboard" ? "#FF3B00" : "white",
                }}
                onClick={() => {
                  setMenuActive(false);
                }}
              >
                overview
              </Link>
              <Link
                className={styles.route}
                href="/dashboard/pvestats"
                style={{
                  textDecoration: "none",
                  color:
                    pathname == "/dashboard/pvestats" ? "#FF3B00" : "white",
                }}
                onClick={() => {
                  setMenuActive(false);
                }}
              >
                pve stats
              </Link>
              <Link
                className={styles.route}
                href="/dashboard/pvpstats"
                style={{
                  textDecoration: "none",
                  color:
                    pathname == "/dashboard/pvpstats" ? "#FF3B00" : "white",
                }}
                onClick={() => {
                  setMenuActive(false);
                }}
              >
                pvp stats
              </Link>
              <Link
                className={styles.route}
                style={{
                  textDecoration: "none",
                  color:
                    pathname == "/dashboard/warevents" ? "#FF3B00" : "white",
                }}
                href="/dashboard/warevents"
                onClick={() => {
                  setMenuActive(false);
                }}
              >
                war events
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color:
                    pathname == "/dashboard/leaderboard" ? "#FF3B00" : "white",
                }}
                className={styles.route}
                href="/dashboard/leaderboard"
                onClick={() => {
                  setMenuActive(false);
                }}
              >
                leaderboard
              </Link>
            </>
          )}
          {pathname.includes("/dashboard") ||
          pathname.includes("/marketplace") ? null : (
            <Link
              style={{
                textDecoration: "none",
                color: pathname == "/marketplace" ? "#FF3B00" : "white",
              }}
              className={styles.route}
              href="/marketplace"
              onClick={() => {
                setMenuActive(false);
              }}
            >
              marketplace
            </Link>
          )}
          {pathname.includes("/marketplace") && (
            <>
              <Link
                style={{
                  textDecoration: "none",
                  color: pathname == "/marketplace" ? "#FF3B00" : "white",
                }}
                className={styles.route}
                href="/marketplace"
                onClick={() => {
                  setMenuActive(false);
                }}
              >
                overview
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: pathname == "/marketplace/buy" ? "#FF3B00" : "white",
                }}
                className={styles.route}
                href="/marketplace/buy"
                onClick={() => {
                  setMenuActive(false);
                }}
              >
                buy
              </Link>
            </>
          )}
        </div>

        <div className={styles.socials}>
          <p className={styles.social}>discord</p>
          <p className={styles.social}>telegram</p>
          <p className={styles.social}>twitter</p>
        </div>
      </div>

      <div className={styles.lastPart}>
        {pathname.includes("/marketplace") && (
          <button
            className={styles.btnW}
            onClick={() => {
              props.setWalletOpen(true);
            }}
          >
            connect wallet
          </button>
        )}
        <img
          src="/Menu.png"
          alt=""
          className={styles.menu}
          onClick={() => setMenuActive(true)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
