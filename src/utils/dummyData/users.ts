import { User } from "../../types/User";

export const users: User[] = [
     {
          id: 1,
          firstName: 'Meno',
          lastName: 'Priezvisko',
          username: 'mpriezvisko',
          teams: [1],
          roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST', 'SALARY_MANAGER']
     },
     {
          id: 2,
          firstName: 'Meno',
          lastName: 'Priezvisko 2',
          username: 'mpriezvisko2',
          teams: [1,2],
          roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST', 'SALARY_MANAGER']
     },
     {
          id: 3,
          firstName: 'Meno',
          lastName: 'Priezvisko 3',
          username: 'mpriezvisko3',
          teams: [],
          roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST', 'SALARY_MANAGER']
     }
]