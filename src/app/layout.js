import {Montserrat} from "next/font/google";
import "./globals.scss";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata = {
    title: "Table",
    description: "Products table",
};

export default function RootLayout({children}) {

    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
