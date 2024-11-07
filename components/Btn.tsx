import React from 'react'

type BtnProps = {
	title: string
	className?: string
}

const Btn = ({ title, className }: BtnProps) => {
	return (
		<button
			className={`${className} uppercase btn btn-outline xl:btn-wide btn-block`}
		>
			{title}
		</button>
	)
}

export default Btn
