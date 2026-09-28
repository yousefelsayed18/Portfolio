import "./globals.css";
import Navbar from "./_Component/Navbar/Navbar";

const title = "Yousef Elsayed | Front-End Developer (React & Next.js)";
const description =
  "Portfolio of Yousef Elsayed, a Front-End Developer building responsive, high-performance web applications with React, Next.js and TypeScript.";

export const metadata = {
  metadataBase: new URL("https://portfolio-j9n2.vercel.app"),
  title,
  description,
  openGraph: { title, description, url: "/", type: "website" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
