export interface App {
  name: string;
  category: string;
  description: string;
  iconName: string;
  technologies: string[];
  downloads: {
    web?: string;
    appStore?: number;
    github?: string;
    altStore?: boolean;
  };
}
