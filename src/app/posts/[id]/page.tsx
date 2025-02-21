import { PostDetailProps } from '@/types';
import Link from 'next/link';

const fetchSinglePost = async (id: number) => {
	const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

	const res = await fetch(url);
	if (!res.ok) console.log('Error fetching posts');
	return res.json();
};

export default async function PostDetailPage({ params }: PostDetailProps) {
	const post = await fetchSinglePost(Number(params.id));
	if (!post) return null;

	return (
		<article aria-label="post-title">
			<h1 id="post-title">{post?.title}</h1>
			<p>{post?.body}</p>

			<Link href="/" aria-label="Go to Home Page">
				Return Home
			</Link>
		</article>
	);
}
