import type { Metadata } from 'next';
import { Geist, Geist_Mono, Nunito_Sans } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });

export const metadata: Metadata = {
	title: 'MOD Posts',
	description: 'MOD Assessment',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
