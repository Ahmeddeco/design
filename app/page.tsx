import About from '@/components/home/About'
import Hero from '@/components/home/Hero'

export default function HomePage() {
	return (
		<main className='w-full no-scrollbar'>
			<Hero />
			<About />
		</main>
	)
}
