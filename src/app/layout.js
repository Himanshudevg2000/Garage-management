import localFont from "next/font/local";
import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "B&K Garage Management System",
  description: "A comprehensive system to manage vehicles, services, and appointments efficiently",
  keywords: "garage management, vehicle services, appointment scheduling, car service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body className="">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
