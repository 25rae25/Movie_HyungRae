import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts"
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'All Movies',
	description: '조형래 영화 소개',
};

export default async function PostPage() {
	const posts = await getAllPosts();
	const categories = [...new Set(posts.map((post)=> post.category))]
	return <FilterablePosts posts={posts} categories={categories} />
}