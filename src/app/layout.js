import { Footer } from "@components/footer";
import "./globals.css";
import { Header } from "@components/header";

export const metadata = {
  title: "Geronto+ | Fisioterapia Domiciliar",
  description: "Fisioterapia Domiciliar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
