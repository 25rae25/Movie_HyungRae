'use client'

import { Post } from "@/service/posts";
import { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

type Props = {
	posts: Post[];
	categories: string[];
}

const ALL_Movies = 'movies';

export default function FilterablePosts({posts, categories}:Props) {
	const [selected, setSelected] = useState(ALL_Movies);
	const filtered = selected === ALL_Movies ? posts : posts.filter(post => post.category === selected); 
	return (
		<section className="flex m-4">
			<PostsGrid posts={filtered} />
			<Categories categories={[ALL_Movies, ...categories]} selected={selected} onClick={setSelected} />
		</section>
	)
}