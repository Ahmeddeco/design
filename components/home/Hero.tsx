import React from 'react'

const Hero = () => {
	return (
		<section className='bg-hero-dark-background bg-cover bg-no-repeat min-h-dvh xl:bg-center h-dvh p-6 '>
			<div className='h-full flex flex-col gap-4 justify-end text-white pb-10'>
				<h1 className='capitalize h1'>design your home with design</h1>
				<p className='p'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore
					consequuntur quia incidunt fugiat quisquam id sed omnis dolore
					delectus provident, cumque natus obcaecati accusantium in eveniet,
					modi ab quod?
				</p>
				<button className='uppercase btn btn-outline xl:btn-wide btn-block'>
					explore more
				</button>
			</div>
		</section>
	)
}

export default Hero
