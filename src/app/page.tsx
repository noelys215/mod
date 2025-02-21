const fetchPosts = async (page: number) => {
	// Fetch Posts from API (limit 10)
	const url = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;

	try {
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log('Error fetching posts:' + error);
	}
};

export default async function Home({ pageParams }: { pageParams: { page: string } }) {
	const page = Number(pageParams?.page) || 1;
	const posts = await fetchPosts(page);

	console.log(posts);
	return (
		<div>
			{/* Display Posts Detail Page */}
			<h1>Home</h1>
		</div>
	);
}
