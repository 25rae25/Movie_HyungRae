import Image from "next/image";
import profileImage from '../../public/images/hr_profile.png'
import Link from "next/link";


export default function Hero() {
	return(
		<section className="text-center">
			<Image src={profileImage}
			 className="rounded-full mx-auto"
			 alt="picture of the author" 
			 width={180} 
			 height={180}
			 priority />
			<h2 className="text-3xl font-bold mt-2">{"안녕하세요 조형래입니다"}</h2>
			<h3 className="text-xl font-semibold">영화 촬영감독</h3>
			<p className="mt-2">제32회 부일영화상 촬영상 - 콘크리트 유토피아</p>
			<p className="mt-2">제38회 청룡영화상 촬영조명상 - 불한당:나쁜 놈들의 세상</p>
			<p className="my-2">제38회 청룡영화상 조명상 - 불한당:나쁜 놈들의 세상</p>
			<Link href='/content'>
				<button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 my-4">Contact Me</button>
			</Link>
		</section>
	)
}