export interface ProjectType {
  id: string;
  pageTitle: string;
  objective: string;
  architecture: { label: string; detail: string }[];
  aiWorkflow: string;
  source: string;
  demo: string;
  tags: string[];
}
