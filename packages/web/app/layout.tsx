import type { Metadata } from "next";
import { Bricolage_Grotesque, Foldit, Victor_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const bG = Bricolage_Grotesque({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const victorMono = Victor_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const foldIt = Foldit({
	variable: "--font-style",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

// TODO

// SEO & Other cvonfiguration in here

export const metadata: Metadata = {
	title: "JMK Fashion x Adire Wears",
	description: "JMK Fashion is here, when in doubt wear JMK Fashion",
};

export default function ({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`${bG.variable} ${victorMono.variable} ${foldIt.variable} antialiased font-sans`}
			>
				{children}
			</body>
		</html>
	);
}
