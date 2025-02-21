export interface PostProps {
	id: number;
	title: string;
	body?: string;
}

export interface HomePageProps {
	searchParams: { page?: string };
}
export interface PostDetailProps {
	params: { id: string };
}
