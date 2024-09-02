import {Montserrat} from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata = {
    title: "Table",
    description: "Products table",
};

export default function RootLayout({children}) {

    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Header/>
                {children}
            </body>
        </html>
    );
}
