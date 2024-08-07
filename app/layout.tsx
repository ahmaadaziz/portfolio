import { GlobalContextProvider } from "./context/store";
import StyledComponentsRegistry from "@/lib/utils/registry";
import localFont from "next/font/local";

import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

import CustomCursor from "@/lib/components/CustomCursor";
import GlobalWrapper from "@/lib/components/Wrappers/GlobalWrapper/GlobalWrapper";
import Navbar from "@/lib/components/Navbar/Navbar";
import "./globals.css";
import React from "react";

const Satoshi = localFont({ src: "./fonts/Satoshi-Variable.woff2" });
const TT = localFont({ src: "./fonts/TTCommonsProVar.woff2" });

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body
      className={`${TT.className} ${Satoshi.className}`}
    >
    <StyledComponentsRegistry>
      <GlobalContextProvider>
        <CustomCursor />
        <GlobalWrapper>
          <Navbar />
          {children}
        </GlobalWrapper>
      </GlobalContextProvider>
    </StyledComponentsRegistry>
    </body>
    </html>
  );
}
