import Navbar from "./Navbar";
import "../style/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      {children}
    </>
  );
}
