import { Email } from ".";

export interface User {
    id: number;
    name: string;
    status: string;
    species: string;
}

export const UserEmptyState: User = {
    id: 0,
    name: '',
    status: '',
    species: ''
};