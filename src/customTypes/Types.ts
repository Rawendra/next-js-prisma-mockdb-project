export interface SnippetShowProps {
  params: {
    id: string;
  };
}
export interface CustomEditorProps {
  snippet: {
    code: string;
    id:  number;
    title: string;
  };
}

export interface SnippetType {
  id: number;
  code: string;
}
