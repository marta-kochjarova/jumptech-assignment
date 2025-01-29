import { User } from "../../types/User";

export const users: User[] = [
     {
          id: 1,
          firstName: 'Peter',
          lastName: 'Novák',
          username: 'pnovak',
          teams: [1],
          roles: ['USER', 'MANAGER']
     },
     {
          id: 2,
          firstName: 'Anna',
          lastName: 'Kováčová',
          username: 'akovacova',
          teams: [1, 2],
          roles: ['ADMINISTRATOR', 'USER', 'MANAGER']
     },
     {
          id: 3,
          firstName: 'Martin',
          lastName: 'Horváth',
          username: 'mhorvath',
          teams: [],
          roles: ['USER']
     },
     {
          id: 4,
          firstName: 'Jana',
          lastName: 'Svobodová',
          username: 'jsvobodova',
          teams: [2],
          roles: ['USER', 'ECONOMIST']
     },
     {
          id: 5,
          firstName: 'Michal',
          lastName: 'Krejčí',
          username: 'mkrejci',
          teams: [1, 2],
          roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST']
     },
     {
          id: 6,
          firstName: 'Eva',
          lastName: 'Tóthová',
          username: 'etothova',
          teams: [],
          roles: ['USER', 'SALARY_MANAGER']
     },
     {
          id: 7,
          firstName: 'Daniel',
          lastName: 'Balog',
          username: 'dbalog',
          teams: [1],
          roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     {
          id: 8,
          firstName: 'Lucia',
          lastName: 'Vargová',
          username: 'lvargova',
          teams: [2],
          roles: ['ADMINISTRATOR', 'USER']
     },
     {
          id: 9,
          firstName: 'Tomáš',
          lastName: 'Molnár',
          username: 'tmolnar',
          teams: [1, 2],
          roles: ['USER', 'SALARY_MANAGER', 'ECONOMIST']
     },
     {
          id: 10,
          firstName: 'Katarína',
          lastName: 'Balážová',
          username: 'kbalazova',
          teams: [],
          roles: ['USER', 'MANAGER']
     },
     {
          id: 11,
          firstName: 'Juraj',
          lastName: 'Polák',
          username: 'jpolak',
          teams: [1],
          roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'SALARY_MANAGER']
     },
     {
          id: 12,
          firstName: 'Zuzana',
          lastName: 'Kováčiková',
          username: 'zkovacikova',
          teams: [2],
          roles: ['USER', 'ECONOMIST']
     },
     {
          id: 13,
          firstName: 'Roman',
          lastName: 'Nagy',
          username: 'rnagy',
          teams: [1, 2],
          roles: ['USER']
     },
     {
          id: 14,
          firstName: 'Mária',
          lastName: 'Šimková',
          username: 'msimkova',
          teams: [],
          roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST', 'SALARY_MANAGER']
     },
     {
          id: 15,
          firstName: 'Filip',
          lastName: 'Lukáč',
          username: 'flukac',
          teams: [1],
          roles: ['USER', 'MANAGER', 'ECONOMIST']
     }
]