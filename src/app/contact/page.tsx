import ContactForm from '@/components/ContactForm';
import {AiFillGithub, AiOutlineFileText, AiFillInstagram } from 'react-icons/ai';

const LINKS = [
	{icon: <AiFillGithub />, url: ''},
	{icon: <AiOutlineFileText />, url: ''},
	{icon: <AiFillInstagram />, url: ''}, 
]

export default function ContactPage() {
	return (
		<section className='flex flex-col items-center'>
			<h2 className='text-3xl font-bold my-2'>Contacty Me</h2>
			<p>whdudfo0124@gmail.com</p>
			<ul className='flex gap-4 my-2'>
				{LINKS.map((link, index) => 
				<a key={index} href={link.url} target='_blank' rel='noreferrer' className='text-5xl hover:text-yellow-400'>
					{link.icon}
				</a>)}
			</ul>
			<h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
			<ContactForm />
		</section>
	)
}