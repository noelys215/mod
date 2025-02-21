import Link from 'next/link';

const fetchSinglePost = async (id: number) => {
	const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

	const res = await fetch(url);
	if (!res.ok) console.log('Error fetching posts');
	return res.json();
};

export default async function PostDetailPage({ params }: { params: { id: string } }) {
	const post = await fetchSinglePost(Number(params.id));
	if (!post) return null;

	console.log(post);
	return (
		<div>
			<h1>Post Details</h1>
			<p>{post?.title}</p>
			<p>{post?.body}</p>
			<Link href="/">Home</Link>
		</div>
	);
}
