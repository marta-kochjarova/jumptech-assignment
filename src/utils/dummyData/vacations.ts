   export const vacations = [
     {
          id: 1,
          userId: 1,
          submitted: '2025-01-02',
          state: 'APPROVED_BY_MANAGER',
          firstDay: '2025-01-10',
          lastDay: '2025-01-12',
          days: 3.0,
          approvedByManager: {
               id: 1,
               firstName: 'Meno',
               lastName: 'Priezvisko',
               username: 'mpriezvisko',
               teams: [1],
               roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST', 'SALARY_MANAGER']
          },
          approvedByDate: '2025-01-03'
     },
     {
          id: 2,
          userId: 2,
          submitted: '2025-01-02',
          state: 'PENDING',
          firstDay: '2025-01-10',
          lastDay: '2025-01-10',
          days: 0.5,
          approvedByManager: null,
          approvedByDate: null,
     }
   ]