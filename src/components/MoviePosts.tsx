import { getAllPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function MoviePosts() {

	const posts = await getAllPosts()
	return(
		<section>
			<h2>Movice Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	)
}