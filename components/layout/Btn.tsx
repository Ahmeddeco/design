'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

type BtnProps = {
	title?: string
	className?: string
	size?: 'btn-lg' | 'btn-xs' | 'btn-sm' | 'btn-wide' | 'btn-block'
	onClick?: VoidFunction
	href: string | '#'
	icon?: ReactNode
}

const Btn = ({ title, className, size, onClick, href, icon }: BtnProps) => {
	return (
		<Link href={href}>
			<button
				className={`${className} ${size} uppercase  btn btn-outline `}
				onClick={onClick}
			>
				{title}
				{icon}
			</button>
		</Link>
	)
}

export default Btn
