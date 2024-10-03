import localFont from "next/font/local";
import { FaHome, FaCar, FaWrench, FaCalendarAlt, FaReceipt, FaChartLine } from "react-icons/fa";
import "../styles/globals.css";
import Link from "next/link";

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
  title: "Garage Management System",
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
      <body className="bg-gray-100 text-gray-900 font-sans antialiased flex">
        <aside className="bg-blue-800 text-white w-64 p-6 h-screen shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Garage Management</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="flex items-center p-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  <FaHome className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="flex items-center p-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  <FaCar className="mr-2" />
                  Manage Vehicles
                </Link>
              </li>
              <li>
                <Link href="/services" className="flex items-center p-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  <FaWrench className="mr-2" />
                  Manage Services
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="flex items-center p-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  <FaCalendarAlt className="mr-2" />
                  Manage Appointments
                </Link>
              </li>
              <li>
                <Link href="/billing" className="flex items-center p-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  <FaReceipt className="mr-2" />
                  Billing & Invoicing
                </Link>
              </li>
              <li>
                <Link href="/reports" className="flex items-center p-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  <FaChartLine className="mr-2" />
                  Reports
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 container p-6 pt-6">
          {children}
        </main>
      </body>

    </html>
  );
}
