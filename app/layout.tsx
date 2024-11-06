import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const houseFont = localFont({
	src: './fonts/HousttelySignature-GOonZ.ttf',
	variable: '--font-house',
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
		<html lang='en'>
			<body className={`${houseFont.variable} antialiased`}>
				<main className='font-houseFont'>{children}</main>
			</body>
		</html>
	)
}
