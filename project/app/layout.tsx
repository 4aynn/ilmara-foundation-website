import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Ilmara Foundation",description:"Brighter futures through education."};
export default function Layout({children}: {children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
