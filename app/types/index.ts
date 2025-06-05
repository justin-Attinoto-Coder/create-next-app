export interface Model {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  backupImage: string;
  category: string;
  dateAdded: string;
}

export interface ModelDetailPageProps {
  params: Promise<{ id: string }>;
}

export interface RootLayoutProps {
  children: React.ReactNode;
}