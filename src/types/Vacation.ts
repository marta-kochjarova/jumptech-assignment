import { User } from './User';

export enum VacationState {
  PENDING = 'PENDING',
  APPROVED_BY_MANAGER = 'APPROVED_BY_MANAGER',
  REJECTED = 'REJECTED',
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

