import { Inter, Montserrat, Poppins } from "next/font/google";

const mons = Montserrat({ weight: ["400", "500", "600", "800"], subsets: ["latin"] });
const pops = Poppins({ weight: ["400", "500", "600", "800"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "500", "600", "800"], subsets: ["latin"] });

export { mons, pops, inter};
