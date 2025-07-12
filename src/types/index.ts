// Global type definitions for the Axon.page project

export interface NavItem {
  href: string;
  label: string;
  icon?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: 'sky' | 'purple';
  delay?: number;
}

export interface Technology {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  borderColor: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
  delay?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: 'sky' | 'purple';
  readMoreColor: string;
  delay?: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  linkColor: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  href?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PageProps {
  className?: string;
  children?: React.ReactNode;
}

export type Theme = 'light' | 'dark';

export interface AppConfig {
  theme: Theme;
  language: string;
  apiUrl: string;
}
