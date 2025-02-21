import { HomePageProps, PostProps } from '@/types';
import Link from 'next/link';

// import { Oswald, Source_Code_Pro } from 'next/font/google';

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
		<div className={`max-w-3xl mx-auto py-10 px-5`}>
			{/* Posts */}
			<section aria-label="posts-heading">
				<h1 className="text-3xl font-bold text-center text-pink-800 mb-6" id="posts-header">
					Posts
				</h1>
				<ul className="space-y-4">
					{posts.map((post: PostProps) => (
						<li
							className="border border-gray-200 p-4 rounded-md shadow-sm transition hover:shadow-md"
							key={post.id}>
							<h2 className="text-xl font-semibold">
								<Link href={`/posts/${post.id}`}>{post.title}</Link>
							</h2>
						</li>
					))}
				</ul>
			</section>

			{/* Pagination Buttons */}

			<nav
				className="flex justify-center gap-4 mt-8"
				aria-label="Pagination"
				role="navigation">
				{/* If page is greater than 1, render Prev button */}
				{page > 1 && (
					<Link
						href={`/?page=${page - 1}`}
						aria-label="Go to Previous Page"
						className="px-4 py-2 bg-pink-300 rounded-lg hover:bg-pink-400 transition">
						&larr; Prev
					</Link>
				)}
				{/* If the length of posts equals 10, render the Next button */}
				{/* if 7 posts are rendered, should mean theres no additional pages */}
				{posts.length === 10 && (
					<Link
						href={`/?page=${page + 1}`}
						aria-label="Go to Next Page"
						className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
						Next &rarr;
					</Link>
				)}
			</nav>
		</div>
	);
}
