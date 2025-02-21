export interface PostProps {
	id: number;
	title: string;
	body?: string;
}

export interface PostDetailProps {
	params: Promise<{ id: string }>;
}

export interface SearchPageProps {
	searchParams: Promise<{ page?: string }>;
}
