"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./components/Navbar/Navbar";
import styles from "./../styles/layout.module.css";
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Wallet from "./components/Wallet/Wallet";

export default function RootLayout({ children }) {
  const [isWalletOpen, setWalletOpen] = useState(true);


  return (
    <html lang="en">
      <body>
        <Navbar isWalletOpen={isWalletOpen} setWalletOpen={setWalletOpen} />
        <Wallet isWalletOpen={isWalletOpen} setWalletOpen={setWalletOpen} />
        {children}
      </body>
    </html>
  );
}
