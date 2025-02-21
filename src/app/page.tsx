export default function Home() {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	// Fetch Posts from API (limit 10)

	const fetchPosts = async () => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log('Error fetching posts:' + error);
		}
	};
	fetchPosts();

	return (
		<div>
			{/* Display Posts Detail Page */}
			<h1>Home</h1>
		</div>
	);
}
