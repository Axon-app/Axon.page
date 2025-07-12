// Global type definitions for the Axon.page project

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
