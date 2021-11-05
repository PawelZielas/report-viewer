export interface File {
  filename: string,
  filesize: number
}

export interface ReportsData {
  date: number;
  category: string;
  title: string;
  description: string;
  files: File[];
}
