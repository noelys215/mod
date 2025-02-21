import { HomePageProps, PostProps } from '@/types';
import Link from 'next/link';

const fetchPosts = async (page: number) => {
	// Fetch Posts from API (limit 10)
	const url = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;
	const res = await fetch(url);
	if (!res.ok) console.log('Error fetching posts');
	return res.json();
};

export default async function Home({ searchParams }: HomePageProps) {
	const page = Number(searchParams?.page) || 1;
	const posts = await fetchPosts(page);

	console.log(posts);
	return (
		<div>
			{/* Posts */}
			<section aria-label="posts-heading">
				<h1 id="posts-header">Posts</h1>
				<ul>
					{posts.map((post: PostProps) => (
						<li key={post.id}>
							<Link href={`/posts/${post.id}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			</section>

			{/* Pagination Buttons */}

			<nav aria-label="Pagination" role="navigation">
				{/* If page is greater than 1, render Prev button */}
				{page > 1 && (
					<Link href={`/?page=${page - 1}`} aria-label="Go to Previous Page">
						Prev
					</Link>
				)}
				{/* If the length of posts equals 10, render the Next button */}
				{/* if 7 posts are rendered, should mean theres no additional pages */}
				{posts.length === 10 && (
					<Link href={`/?page=${page + 1}`} aria-label="Go to Next Page">
						Next
					</Link>
				)}
			</nav>
		</div>
	);
}
