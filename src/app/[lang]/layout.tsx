import FaviconMetadata from "@/components/FaviconMetadata";
import Footer from "@/components/navigation/Footer";
import Navbars from "@/components/navigation/Navbars";
import PopupController from "@/controllers/PopupController";
import { getDictionary } from "@/lib/dictonaries";
import MuiProvider from "@/providers/MuiProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Locale, i18n } from "../../i18n.config";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "700"],
});
export const metadata: Metadata = {
  title: {
    default: "Basket",
    template: "%s | Basket",
  },
  description: "Made with Love By Finland",
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang ?? i18n.defaultLocale}>
      <FaviconMetadata />
      <body className={montserrat.className}>
        <ReduxProvider>
          <MuiProvider>
            <Navbars dictionary={dictionary} />
            <main>{children}</main>
            <Footer footerLang={dictionary.footer} />
            <PopupController
              popupLang={dictionary.popups}
              msgsLang={dictionary.msgs}
            />
          </MuiProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
