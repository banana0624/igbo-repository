import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { LanguageProvider } from "../src/context/LanguageContext";

export default function CulturalLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col bg-neutral-50 text-gray-800">
            <Header />
            <main className="flex-1 container mx-auto px-4">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

