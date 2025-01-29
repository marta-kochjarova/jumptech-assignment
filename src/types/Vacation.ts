import { User } from './User';

export enum VacationState {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}

export interface Vacation {
  id: number;
  userId: number;
  submitted: Date;
  state: VacationState;
  firstDay: Date;
  lastDay: Date;
  days: number;
  approvedByManager: User | null;
  approvedByDate: Date | null;
}

