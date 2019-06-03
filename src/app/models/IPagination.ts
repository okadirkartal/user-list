import { IUser } from './IUsers';
Ş
export interface IPagination {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
} 