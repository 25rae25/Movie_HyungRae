import Link from "next/link";

export default function Header() {
	return(
			<header className="flex justify-between items-center p-4">
			<Link href="/">
				<h1 className="text-3xl font-bold">{"Hyungrae's Movies"}</h1>
			</Link>
			<nav className="flex gap-4">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/posts">posts</Link>
				<Link href="/contact">Contact</Link>
			</nav>
		</header>
	)
}