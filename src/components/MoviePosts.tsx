import { getFeaturedPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function MoviePosts() {

	const posts = await getFeaturedPosts()
	return(
		<section>
			<h2 className="text-2xl font-bold my-2">Movice Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	)
}