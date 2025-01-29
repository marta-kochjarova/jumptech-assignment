import { Vacation, VacationState } from "../../types/Vacation";

   export const vacations: Vacation[] = [
     {
          id: 1,
          userId: 1,
          submitted: new Date('2025-01-02'),
          state: VacationState.APPROVED_BY_MANAGER,
          firstDay: new Date('2025-01-10'),
          lastDay: new Date('2025-01-12'),
          days: 3.0,
          approvedByManager: {
               id: 1,
               firstName: 'Meno',
               lastName: 'Priezvisko',
               username: 'mpriezvisko',
               teams: [1],
               roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST', 'SALARY_MANAGER']
          },
          approvedByDate: new Date('2025-01-03')
     },
     {
          id: 2,
          userId: 2,
          submitted: new Date('2025-01-02'),
          state: VacationState.PENDING,
          firstDay: new Date('2025-01-10'),
          lastDay: new Date('2025-01-10'),
          days: 0.5,
          approvedByManager: null,
          approvedByDate: null,
     }
   ]