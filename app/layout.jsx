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
        <main className="flex flex-row">
          <SideMenu />
          <section className="overflow-hidden pl-[300px] max-lg:pl-[146px] w-full min-h-screen max-md:pl-0">
            <TopMenu />
            {children}
          </section>
        </main>
      </body>
    </html>

  );
}
