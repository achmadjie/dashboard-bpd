import "bootstrap/dist/css/bootstrap.css";
import { Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.css";
import SideBar from "./components/side-bar/SideBar";
import styles from "@/app/pages/dashboard/Dashboard.module.css";

const pops = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Dashboard BPD",
  description: "Dashboard BPD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pops.className} suppressHydrationWarning>
        <div className={`${styles.container_content_section} d-flex gap-3`}>
          <SideBar />
          <div
            className={`${styles.container_content} d-flex flex-column gap-4`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
