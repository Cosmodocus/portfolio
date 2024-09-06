import { Link } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import ProfilePic from '../assets/profile.jpg';

const Hero = () => {
	return (
		<div className='w-full min-h-screen flex items-center justify-center'>
			<div className='flex flex-col gap-6 text-center items-center'>
				<img
					src={ProfilePic}
					alt='Profile'
					className='w-40 md:w-64 rounded-full border-4 0'
				/>
				<h1 className='text-4xl md:text-6xl font-bold '>
					Frontend & Fullstack Developer
				</h1>
				<p className='text-xl md:text-2xl '>
					My name is Reza and I&apos;m a developer based in Canada with expertise in developing{' '}
					<span className='font-semibold text-coral'>Frontend & Fullstack</span>
					{' '}web applications.
				</p>
				<div className='flex items-center justify-center gap-4'>
					<button className='md:text-xl text-lg border-4 rounded-full px-4 py-2'>
						<Link
							to={'/details'}
							className='flex items-center gap-2'
						>
							<FaFolderOpen />
							Check out my Projects!
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
