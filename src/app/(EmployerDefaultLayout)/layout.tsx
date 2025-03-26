import "../globals.css";
import Header from "../components/employer/Header";
import Footer from "../components/employer/Footer";

export default function EmployerDefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
