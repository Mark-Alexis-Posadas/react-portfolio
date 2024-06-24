export interface ProjectType {
  id: string;
  pageTitle: string;
  description: string;
  features: { text: string }[];
  source: string;
  demo: string;
  buttons: string[];
  tags: string[];
}
