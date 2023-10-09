import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import LoginForm from './components/login-form/LoginForm'
import Login from "./pages/login/Login";
import SideBar from "./components/side-bar/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import Carousel from "./components/carousel/CarouselItem";
import TableListLinmas from "./components/table-list-linmas/TableListLinmas";
import TableLaporan from "./components/table-laporan/TableLaporan";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TableLinmas from "./components/table-linmas/TableLinmas";
import ListLinmas from "./pages/list-linmas/ListLinmas";
import ListLaporan from "./pages/list-laporan/ListLaporan";
import VillageStatistics from "./components/village-statistics/VillageStatistics";
import BarChart from "./components/bar-chart/BarChart";
import DoughnutChart from "./components/doughnut-chart/DoughnutChart";
import PieChart from "./components/pie-chart/PieChart";
import InputLinmasModal from "./components/input-linmas-modal/InputLinmasModal";
import DashboardContent from "./components/dashboard-content/DashboardContent";
import InputLaporanModal from "./components/input-laporan-modal/InputLaporanModal";
import ActiveLinmas from "./components/activate-linmas/ActivateLinmas";
import NonActiveLinmas from "./components/non-activate-linmas/NonActivateLinmas";
import EditLinmasModal from "./components/edit-linmas-modal/EditLinmasModal";
import ChangePassword from "./components/change-password/ChangePassword";
import Link from "next/link";
import DashboardContentKemendagri from "./components/dashboard-content-kemendagri/DashboardContentKemendagri";
import DashboardKemendagri from "./pages/dashboard-kemendagri/DashboardKemendagri";

import "./globals.css";
import DoughnutChartKemendagri from "./components/doughnut-chart-kemendagri/DoughnutChartKemendagri";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard BPD",
  description: "Dashboard BPD",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* <LoginForm /> */}
        {/* <Login /> */}
        {/* <SideBar /> */}
        {/* <DashboardContent /> */}
        <Dashboard />
        {/* <TableListLinmas /> */}
        {/* <TableLinmas /> */}
        {/* <Carousel /> */}
        {/* <ListLinmas /> */}
        {/* <TableLaporan /> */}
        {/* {<ListLaporan />} */}
        {/* <VillageStatistics /> */}
        {/* <BarChart /> */}
        {/* <DoughnutChart /> */}
        {/* <PieChart /> */}
        {/* <InputLinmasModal /> */}
        {/* <InputLaporanModal /> */}
        {/* <ActiveLinmas /> */}
        {/* <NonActiveLinmas /> */}
        {/* <EditLinmasModal /> */}
        {/* <ChangePassword /> */}
        {/* <DashboardContentKemendagri></DashboardContentKemendagri> */}
        {/* <DashboardKemendagri></DashboardKemendagri> */}
        {/* <DoughnutChartKemendagri></DoughnutChartKemendagri> */}
      </body>
    </html>
  );
}
