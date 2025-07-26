import { Poppins } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/SideMenu"
import TopMenu from "@/components/TopMenu"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700", "800"]
});

export const metadata = {
  title: "Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <main className=""> */}
        {/* <SideMenu /> */}
        {/* <section className="overflow-hidden pl-[300px] max-lg:pl-[146px] w-full min-h-screen max-md:pl-0"> */}
        {/* <div className="fixed"> */}

        {/* <div class="absolute inset-0 z-10 h-auto w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className="p-4"> */}

        {/* <TopMenu />
        {children} */}
        {/* </div> */}
        {/* </section> */}
        {/* </main> */}

        <div className="overlfow-x-hidden ">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          </div>

          <div className="container mx-auto px-8">
            <TopMenu />
            {children}
          </div>

        </div>
      </body>
    </html>

  );
}

