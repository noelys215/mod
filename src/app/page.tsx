const fetchPosts = async (page: number) => {
	// Fetch Posts from API (limit 10)
	const url = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;
	const res = await fetch(url);
	if (!res.ok) console.log('Error fetching posts');
	return res.json();
};

export default async function Home({ pageParams }: { pageParams: { page: string } }) {
	const page = Number(pageParams?.page) || 2;
	const posts = await fetchPosts(page);

	console.log(posts);
	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{posts.map((post: { id: number; title: string; body: string }) => (
					<li key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
