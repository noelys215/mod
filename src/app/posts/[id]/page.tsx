import { PostDetailProps } from '@/types';
import Link from 'next/link';

const fetchSinglePost = async (id: number) => {
	const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

	const res = await fetch(url);
	if (!res.ok) console.log('Error fetching posts');
	return res.json();
};

export default async function PostDetailPage({ params }: PostDetailProps) {
	const post = await fetchSinglePost(Number((await params).id));
	if (!post) return null;

	return (
		<div className="max-w-2xl mx-auto py-10 px-5">
			<article
				aria-label="post-title"
				className="border border-gray-700 p-6 rounded-lg shadow-md bg-gray-900">
				<h1 id="post-title" className="text-3xl font-bold text-pink-500">
					{post?.title}
				</h1>
				<p className="mt-4 text-lg text-gray-300">{post?.body}</p>

				{/* Home Button */}
				<div className="mt-8 text-center">
					<Link
						href="/"
						aria-label="Go to Home Page"
						className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition">
						Return Home
					</Link>
				</div>
			</article>
		</div>
	);
}
