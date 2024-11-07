import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const houseFont = localFont({
	src: './fonts/HousttelySignature-GOonZ.ttf',
	variable: '--font-house',
})
const bebas = localFont({
	src: './fonts/BebasNeue-Regular.ttf',
	variable: '--font-bebas',
})
const manrope = localFont({
	src: './fonts/Manrope-VariableFont_wght.ttf',
	variable: '--font-manrope',
})

export const metadata: Metadata = {
	title: 'Ahmed Design',
	description: 'Freelance Interior Designer Website',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' data-theme='dark'>
			<body
				className={`${houseFont.variable} ${bebas.variable} ${manrope.variable} antialiased no-scrollbar `}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
