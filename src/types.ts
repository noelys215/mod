export interface PostProps {
	id: number;
	title: string;
	body?: string;
}

export interface HomePageProps {
	searchParams: { [key: string]: string | undefined };
}
export interface PostDetailProps {
	params: { id: string };
}
