import Hero from "@/components/Hero";

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2'

export default function AboutPage() {
	return (
		<>
			<Hero />
			<section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
				<h2 className={TITLE_CLASS}>Who Am I?</h2>
				<p>영화 촬영감독 입니다<br/>
				영화 촬영을 잘하는 사람입니다
				</p>
				<h2 className={TITLE_CLASS}>경력</h2>
				<p>2010 한국영화아카데미 27기 <br />
				중앙대학교 영화학과 학사</p>
				<h2 className={TITLE_CLASS}>수상</h2>
				<p>제32회 부일영화상 촬영상 - 콘크리트 유토피아 (2017) <br />
				제38회 청룡영화상 촬영조명상 - 불한당:나쁜 놈들의 세상 (2017) <br />
				제38회 청룡영화상 조명상 - 불한당:나쁜 놈들의 세상 (2017)
				</p>
			</section>
		</>
	)
}