export interface Category {
  code: string;
  description: string;
  level: number;
  parentCode: string | null;
  children: Category[];
}