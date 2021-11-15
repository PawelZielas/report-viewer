export interface FileInfo {
  filename: string,
  filesize: number
}

export interface ReportsData {
  date: number;
  category: string;
  title: string;
  description: string;
  files: FileInfo[];
}
