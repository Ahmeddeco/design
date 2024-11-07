'use client'
import headerData from '@/data/header.json'
import Link from 'next/link'
import { useState } from 'react'
import Btn from './Btn'

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		console.log('click')
		setShowMenu((prev) => !prev)
	}
	return (
		<header className='fixed justify-between items-center px-6  z-10 w-full h-20'>
			<div className=' flex justify-between h-full w-full items-center py-3 border-b-2 border-neutral-content'>
				<Link href='/' className='font-bebas text-neutral-content text-xl'>
					deco
				</Link>

				<ul
					className={`flex flex-col duration-300 sm:flex-row absolute right-0 bg-black w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${
						showMenu ? 'top-0' : '-top-[100vh]'
					} `}
				>
					{headerData.header.map((item, index) => {
						return (
							<li
								className='text-neutral-content text-base uppercase'
								key={index}
							>
								<Link href={item.href}>{item.label}</Link>
							</li>
						)
					})}
				</ul>
				<div>
					<button
						onClick={() => toggleMenu()}
						className='text-neutral-content sm:hidden z-20 relative'
					>
						{showMenu ? 'Close' : 'Menu'}
					</button>
					<Btn title={'contact us'} />
				</div>
			</div>
		</header>
	)
}

export default Header
