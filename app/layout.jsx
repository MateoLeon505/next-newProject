import NavBar from "@/components/navBar";
import "./globals.css";

export const metadata = {
  title: "New Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className='container mx-auto h-screen flex justify-center items-center'>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;