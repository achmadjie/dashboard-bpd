// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import SideBar from "./components/side-bar/SideBar";
import SideBarKemendagri from "./components/side-bar-kemendagri/SideBarKemendagri";
import styles from "./pages/dashboard/Dashboard.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export const metadata = {
  title: "Dashboard BPD",
  description: "Dashboard BPD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
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
