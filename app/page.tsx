import Btn from "@/components/layout/Btn"

export default function HomePage() {
	return (
		<main className='w-full no-scrollbar'>
			{/* hero section */}
			<section className='bg-hero-dark-background bg-cover bg-no-repeat min-h-dvh xl:bg-center h-dvh p-6 '>
				<div className='h-full flex flex-col gap-4 justify-end text-white pb-10 '>
					<h1 className='capitalize h1'>design your home with deco</h1>
					<p className='p'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
						labore consequuntur quia incidunt fugiat quisquam id sed omnis
						dolore delectus provident, cumque natus obcaecati accusantium in
						eveniet, modi ab quod?
					</p>
					<Btn
						title={'explore more'}
						size='btn-block'
						className='xl:btn-wide'
						href='#'
					/>
				</div>
			</section>
		</main>
	)
}
