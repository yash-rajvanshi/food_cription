import "./globals.css";
import { Zain, Karla, League_Script } from "next/font/google";


const karla = Karla({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-karla" });
const leagueScript = League_Script({ subsets: ["latin"], weight: ["400"], variable: "--font-league-script" });
const zain = Zain({ subsets: ["latin"], weight: ["200","300","400","800", "700","900"], variable: "--font-zain" });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${karla.className} ${zain.variable} ${leagueScript.variable} custom-scrollbar`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
