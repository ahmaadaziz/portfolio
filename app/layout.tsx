import { GlobalContextProvider } from "./context/store";
import StyledComponentsRegistry from "@/lib/utils/registry";
import localFont from "next/font/local";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import CustomCursor from "@/lib/components/CustomCursor";
import GlobalWrapper from "@/lib/components/Wrappers/GlobalWrapper/GlobalWrapper";
import Navbar from "@/lib/components/Navbar/Navbar";
import "./globals.css";

//@ts-ignore
// const TTCommons = localFont({ src: "./fonts/TTCommonsProVar.woff2" });

const Okine = localFont({
  src: [
    {
      path: "./fonts/MADEOkineSansPERSONALUSE-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/MADEOkineSansPERSONALUSE-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/MADEOkineSansPERSONALUSE-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/MADEOkineSansPERSONALUSE-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MADEOkineSansPERSONALUSE-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/MADEOkineSansPERSONALUSE-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
});

const Tommy = localFont({
  src: [
    {
      path: "./fonts/MADE TOMMY Black_PERSONAL USE.otf",
      weight: "900",
      style: "black",
    },
    {
      path: "./fonts/MADE TOMMY ExtraBold_PERSONAL USE.otf",
      weight: "800",
      style: "bolder",
    },
    {
      path: "./fonts/MADE TOMMY Bold_PERSONAL USE.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/MADE TOMMY Medium_PERSONAL USE.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/MADE TOMMY Regular_PERSONAL USE.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MADE TOMMY Light_PERSONAL USE.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/MADE TOMMY Thin_PERSONAL USE.otf",
      weight: "100",
      style: "lighter",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${Tommy.className} ${Okine.className}`}
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
