import { Vacation, VacationState } from "../../types/Vacation";

export const vacations: Vacation[] = [
  {
    id: 1,
    userId: 3,
    submitted: new Date("2024-01-15"),
    state: VacationState.APPROVED,
    firstDay: new Date("2024-02-01"),
    lastDay: new Date("2024-02-05"),
    days: 5.0,
    approvedByManager: {
      id: 11,
      firstName: "Juraj",
      lastName: "Polák",
      username: "jpolak",
      teams: [1],
      roles: ["ADMINISTRATOR", "USER", "MANAGER", "SALARY_MANAGER"],
    },
    approvedByDate: new Date("2024-01-20"),
  },
  {
    id: 2,
    userId: 7,
    submitted: new Date("2024-01-20"),
    state: VacationState.PENDING,
    firstDay: new Date("2024-03-15"),
    lastDay: new Date("2024-03-15"),
    days: 0.5,
    approvedByManager: null,
    approvedByDate: null,
  },
  {
    id: 3,
    userId: 12,
    submitted: new Date("2024-02-01"),
    state: VacationState.APPROVED,
    firstDay: new Date("2024-04-10"),
    lastDay: new Date("2024-04-14"),
    days: 5.0,
    approvedByManager: {
      id: 5,
      firstName: "Michal",
      lastName: "Krejčí",
      username: "mkrejci",
      teams: [1, 2],
      roles: ["ADMINISTRATOR", "USER", "MANAGER", "ECONOMIST"],
    },
    approvedByDate: new Date("2024-02-05"),
  },
  {
     id: 4,
     userId: 5,
     submitted: new Date('2024-02-15'),
     state: VacationState.REJECTED,
     firstDay: new Date('2024-03-20'),
     lastDay: new Date('2024-03-25'),
     days: 6.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 5,
     userId: 9,
     submitted: new Date('2024-02-20'),
     state: VacationState.APPROVED,
     firstDay: new Date('2024-05-01'),
     lastDay: new Date('2024-05-01'),
     days: 1.0,
     approvedByManager: {
       id: 7,
       firstName: 'Daniel',
       lastName: 'Balog',
       username: 'dbalog',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2024-02-25')
   },
   {
     id: 6,
     userId: 15,
     submitted: new Date('2024-03-01'),
     state: VacationState.CANCELLED,
     firstDay: new Date('2024-06-15'),
     lastDay: new Date('2024-06-20'),
     days: 6.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 7,
     userId: 2,
     submitted: new Date('2024-03-10'),
     state: VacationState.APPROVED,
     firstDay: new Date('2024-07-01'),
     lastDay: new Date('2024-07-14'),
     days: 14.0,
     approvedByManager: {
       id: 15,
       firstName: 'Filip',
       lastName: 'Lukáč',
       username: 'flukac',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2024-03-15')
   },
   {
     id: 8,
     userId: 11,
     submitted: new Date('2024-03-20'),
     state: VacationState.PENDING,
     firstDay: new Date('2024-05-15'),
     lastDay: new Date('2024-05-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 9,
     userId: 6,
     submitted: new Date('2024-04-01'),
     state: VacationState.APPROVED,
     firstDay: new Date('2024-08-01'),
     lastDay: new Date('2024-08-07'),
     days: 7.0,
     approvedByManager: {
       id: 11,
       firstName: 'Juraj',
       lastName: 'Polák',
       username: 'jpolak',
       teams: [1],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'SALARY_MANAGER']
     },
     approvedByDate: new Date('2024-04-05')
   },
   {
     id: 10,
     userId: 13,
     submitted: new Date('2024-04-15'),
     state: VacationState.REJECTED,
     firstDay: new Date('2024-06-01'),
     lastDay: new Date('2024-06-01'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 11,
     userId: 4,
     submitted: new Date('2024-05-01'),
     state: VacationState.APPROVED,
     firstDay: new Date('2024-09-15'),
     lastDay: new Date('2024-09-19'),
     days: 5.0,
     approvedByManager: {
       id: 5,
       firstName: 'Michal',
       lastName: 'Krejčí',
       username: 'mkrejci',
       teams: [1, 2],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2024-05-05')
   },
   {
     id: 12,
     userId: 8,
     submitted: new Date('2024-05-15'),
     state: VacationState.PENDING,
     firstDay: new Date('2024-07-20'),
     lastDay: new Date('2024-07-20'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 13,
     userId: 1,
     submitted: new Date('2024-06-01'),
     state: VacationState.APPROVED,
     firstDay: new Date('2024-10-01'),
     lastDay: new Date('2024-10-14'),
     days: 14.0,
     approvedByManager: {
       id: 7,
       firstName: 'Daniel',
       lastName: 'Balog',
       username: 'dbalog',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2024-06-05')
   },
   {
     id: 14,
     userId: 14,
     submitted: new Date('2024-06-15'),
     state: VacationState.CANCELLED,
     firstDay: new Date('2024-08-15'),
     lastDay: new Date('2024-08-20'),
     days: 6.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 15,
     userId: 10,
     submitted: new Date('2024-07-01'),
     state: VacationState.APPROVED,
     firstDay: new Date('2024-11-01'),
     lastDay: new Date('2024-11-05'),
     days: 5.0,
     approvedByManager: {
       id: 15,
       firstName: 'Filip',
       lastName: 'Lukáč',
       username: 'flukac',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2024-07-05')
   },
   {
     id: 16,
     userId: 3,
     submitted: new Date('2024-07-15'),
     state: VacationState.PENDING,
     firstDay: new Date('2024-09-01'),
     lastDay: new Date('2024-09-01'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 17,
     userId: 7,
     submitted: new Date('2024-08-01'),
     state: VacationState.APPROVED,
     firstDay: new Date('2024-12-20'),
     lastDay: new Date('2024-12-31'),
     days: 12.0,
     approvedByManager: {
       id: 11,
       firstName: 'Juraj',
       lastName: 'Polák',
       username: 'jpolak',
       teams: [1],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'SALARY_MANAGER']
     },
     approvedByDate: new Date('2024-08-05')
   },
   {
     id: 18,
     userId: 12,
     submitted: new Date('2024-08-15'),
     state: VacationState.REJECTED,
     firstDay: new Date('2024-10-15'),
     lastDay: new Date('2024-10-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 19,
     userId: 5,
     submitted: new Date('2024-09-01'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-01-02'),
     lastDay: new Date('2025-01-15'),
     days: 14.0,
     approvedByManager: {
       id: 5,
       firstName: 'Michal',
       lastName: 'Krejčí',
       username: 'mkrejci',
       teams: [1, 2],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2024-09-05')
   },
   {
     id: 20,
     userId: 9,
     submitted: new Date('2024-09-15'),
     state: VacationState.PENDING,
     firstDay: new Date('2024-11-15'),
     lastDay: new Date('2024-11-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 21,
     userId: 15,
     submitted: new Date('2024-10-01'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-02-01'),
     lastDay: new Date('2025-02-07'),
     days: 7.0,
     approvedByManager: {
       id: 7,
       firstName: 'Daniel',
       lastName: 'Balog',
       username: 'dbalog',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2024-10-05')
   },
   {
     id: 22,
     userId: 2,
     submitted: new Date('2024-10-15'),
     state: VacationState.CANCELLED,
     firstDay: new Date('2024-12-01'),
     lastDay: new Date('2024-12-05'),
     days: 5.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 23,
     userId: 11,
     submitted: new Date('2024-11-01'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-03-01'),
     lastDay: new Date('2025-03-14'),
     days: 14.0,
     approvedByManager: {
       id: 15,
       firstName: 'Filip',
       lastName: 'Lukáč',
       username: 'flukac',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2024-11-05')
   },
   {
     id: 24,
     userId: 6,
     submitted: new Date('2024-11-15'),
     state: VacationState.PENDING,
     firstDay: new Date('2025-01-15'),
     lastDay: new Date('2025-01-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 25,
     userId: 13,
     submitted: new Date('2024-12-01'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-04-01'),
     lastDay: new Date('2025-04-07'),
     days: 7.0,
     approvedByManager: {
       id: 11,
       firstName: 'Juraj',
       lastName: 'Polák',
       username: 'jpolak',
       teams: [1],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'SALARY_MANAGER']
     },
     approvedByDate: new Date('2024-12-05')
   },
   {
     id: 26,
     userId: 4,
     submitted: new Date('2024-12-15'),
     state: VacationState.REJECTED,
     firstDay: new Date('2025-02-15'),
     lastDay: new Date('2025-02-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 27,
     userId: 8,
     submitted: new Date('2025-01-02'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-05-01'),
     lastDay: new Date('2025-05-14'),
     days: 14.0,
     approvedByManager: {
       id: 5,
       firstName: 'Michal',
       lastName: 'Krejčí',
       username: 'mkrejci',
       teams: [1, 2],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2025-01-05')
   },
   {
     id: 28,
     userId: 1,
     submitted: new Date('2025-01-15'),
     state: VacationState.PENDING,
     firstDay: new Date('2025-03-15'),
     lastDay: new Date('2025-03-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 29,
     userId: 14,
     submitted: new Date('2025-01-20'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-06-01'),
     lastDay: new Date('2025-06-07'),
     days: 7.0,
     approvedByManager: {
       id: 7,
       firstName: 'Daniel',
       lastName: 'Balog',
       username: 'dbalog',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2025-01-25')
   },
   {
     id: 30,
     userId: 10,
     submitted: new Date('2025-02-01'),
     state: VacationState.CANCELLED,
     firstDay: new Date('2025-04-15'),
     lastDay: new Date('2025-04-20'),
     days: 6.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 31,
     userId: 3,
     submitted: new Date('2025-02-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-07-01'),
     lastDay: new Date('2025-07-14'),
     days: 14.0,
     approvedByManager: {
       id: 15,
       firstName: 'Filip',
       lastName: 'Lukáč',
       username: 'flukac',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2025-02-20')
   },
   {
     id: 32,
     userId: 7,
     submitted: new Date('2025-03-01'),
     state: VacationState.PENDING,
     firstDay: new Date('2025-05-15'),
     lastDay: new Date('2025-05-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 33,
     userId: 12,
     submitted: new Date('2025-03-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-08-01'),
     lastDay: new Date('2025-08-07'),
     days: 7.0,
     approvedByManager: {
       id: 11,
       firstName: 'Juraj',
       lastName: 'Polák',
       username: 'jpolak',
       teams: [1],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'SALARY_MANAGER']
     },
     approvedByDate: new Date('2025-03-20')
   },
   {
     id: 34,
     userId: 5,
     submitted: new Date('2025-04-01'),
     state: VacationState.REJECTED,
     firstDay: new Date('2025-06-15'),
     lastDay: new Date('2025-06-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 35,
     userId: 9,
     submitted: new Date('2025-04-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-09-01'),
     lastDay: new Date('2025-09-14'),
     days: 14.0,
     approvedByManager: {
       id: 5,
       firstName: 'Michal',
       lastName: 'Krejčí',
       username: 'mkrejci',
       teams: [1, 2],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2025-04-20')
   },
   {
     id: 36,
     userId: 15,
     submitted: new Date('2025-05-01'),
     state: VacationState.PENDING,
     firstDay: new Date('2025-07-15'),
     lastDay: new Date('2025-07-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 37,
     userId: 2,
     submitted: new Date('2025-05-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-10-01'),
     lastDay: new Date('2025-10-07'),
     days: 7.0,
     approvedByManager: {
       id: 7,
       firstName: 'Daniel',
       lastName: 'Balog',
       username: 'dbalog',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2025-05-20')
   },
   {
     id: 38,
     userId: 11,
     submitted: new Date('2025-06-01'),
     state: VacationState.CANCELLED,
     firstDay: new Date('2025-08-15'),
     lastDay: new Date('2025-08-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 39,
     userId: 6,
     submitted: new Date('2025-06-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-11-01'),
     lastDay: new Date('2025-11-14'),
     days: 14.0,
     approvedByManager: {
       id: 15,
       firstName: 'Filip',
       lastName: 'Lukáč',
       username: 'flukac',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2025-06-20')
   },
   {
     id: 40,
     userId: 13,
     submitted: new Date('2025-07-01'),
     state: VacationState.PENDING,
     firstDay: new Date('2025-09-15'),
     lastDay: new Date('2025-09-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 41,
     userId: 4,
     submitted: new Date('2025-07-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2025-12-01'),
     lastDay: new Date('2025-12-07'),
     days: 7.0,
     approvedByManager: {
       id: 11,
       firstName: 'Juraj',
       lastName: 'Polák',
       username: 'jpolak',
       teams: [1],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'SALARY_MANAGER']
     },
     approvedByDate: new Date('2025-07-20')
   },
   {
     id: 42,
     userId: 8,
     submitted: new Date('2025-08-01'),
     state: VacationState.REJECTED,
     firstDay: new Date('2025-10-15'),
     lastDay: new Date('2025-10-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 43,
     userId: 1,
     submitted: new Date('2025-08-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-01-02'),
     lastDay: new Date('2026-01-15'),
     days: 14.0,
     approvedByManager: {
       id: 5,
       firstName: 'Michal',
       lastName: 'Krejčí',
       username: 'mkrejci',
       teams: [1, 2],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2025-08-20')
   },
   {
     id: 44,
     userId: 14,
     submitted: new Date('2025-09-01'),
     state: VacationState.PENDING,
     firstDay: new Date('2025-11-15'),
     lastDay: new Date('2025-11-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 45,
     userId: 10,
     submitted: new Date('2025-09-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-02-01'),
     lastDay: new Date('2026-02-07'),
     days: 7.0,
     approvedByManager: {
       id: 7,
       firstName: 'Daniel',
       lastName: 'Balog',
       username: 'dbalog',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2025-09-20')
   },
   {
     id: 46,
     userId: 3,
     submitted: new Date('2025-10-01'),
     state: VacationState.CANCELLED,
     firstDay: new Date('2025-12-15'),
     lastDay: new Date('2025-12-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 47,
     userId: 7,
     submitted: new Date('2025-10-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-03-01'),
     lastDay: new Date('2026-03-14'),
     days: 14.0,
     approvedByManager: {
       id: 15,
       firstName: 'Filip',
       lastName: 'Lukáč',
       username: 'flukac',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2025-10-20')
   },
   {
     id: 48,
     userId: 12,
     submitted: new Date('2025-11-01'),
     state: VacationState.PENDING,
     firstDay: new Date('2026-01-15'),
     lastDay: new Date('2026-01-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 49,
     userId: 5,
     submitted: new Date('2025-11-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-04-01'),
     lastDay: new Date('2026-04-07'),
     days: 7.0,
     approvedByManager: {
       id: 11,
       firstName: 'Juraj',
       lastName: 'Polák',
       username: 'jpolak',
       teams: [1],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'SALARY_MANAGER']
     },
     approvedByDate: new Date('2025-11-20')
   },
   {
     id: 50,
     userId: 9,
     submitted: new Date('2025-12-01'),
     state: VacationState.REJECTED,
     firstDay: new Date('2026-02-15'),
     lastDay: new Date('2026-02-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 51,
     userId: 15,
     submitted: new Date('2025-12-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-05-01'),
     lastDay: new Date('2026-05-14'),
     days: 14.0,
     approvedByManager: {
       id: 5,
       firstName: 'Michal',
       lastName: 'Krejčí',
       username: 'mkrejci',
       teams: [1, 2],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2025-12-20')
   },
   {
     id: 52,
     userId: 2,
     submitted: new Date('2026-01-02'),
     state: VacationState.PENDING,
     firstDay: new Date('2026-03-15'),
     lastDay: new Date('2026-03-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 53,
     userId: 11,
     submitted: new Date('2026-01-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-06-01'),
     lastDay: new Date('2026-06-07'),
     days: 7.0,
     approvedByManager: {
       id: 7,
       firstName: 'Daniel',
       lastName: 'Balog',
       username: 'dbalog',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2026-01-20')
   },
   {
     id: 54,
     userId: 6,
     submitted: new Date('2026-02-01'),
     state: VacationState.CANCELLED,
     firstDay: new Date('2026-04-15'),
     lastDay: new Date('2026-04-20'),
     days: 6.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 55,
     userId: 13,
     submitted: new Date('2026-02-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-07-01'),
     lastDay: new Date('2026-07-14'),
     days: 14.0,
     approvedByManager: {
       id: 15,
       firstName: 'Filip',
       lastName: 'Lukáč',
       username: 'flukac',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2026-02-20')
   },
   {
     id: 56,
     userId: 4,
     submitted: new Date('2026-03-01'),
     state: VacationState.PENDING,
     firstDay: new Date('2026-05-15'),
     lastDay: new Date('2026-05-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 57,
     userId: 8,
     submitted: new Date('2026-03-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-08-01'),
     lastDay: new Date('2026-08-07'),
     days: 7.0,
     approvedByManager: {
       id: 11,
       firstName: 'Juraj',
       lastName: 'Polák',
       username: 'jpolak',
       teams: [1],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'SALARY_MANAGER']
     },
     approvedByDate: new Date('2026-03-20')
   },
   {
     id: 58,
     userId: 1,
     submitted: new Date('2026-04-01'),
     state: VacationState.REJECTED,
     firstDay: new Date('2026-06-15'),
     lastDay: new Date('2026-06-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 59,
     userId: 14,
     submitted: new Date('2026-04-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-09-01'),
     lastDay: new Date('2026-09-14'),
     days: 14.0,
     approvedByManager: {
       id: 5,
       firstName: 'Michal',
       lastName: 'Krejčí',
       username: 'mkrejci',
       teams: [1, 2],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2026-04-20')
   },
   {
     id: 60,
     userId: 10,
     submitted: new Date('2026-05-01'),
     state: VacationState.PENDING,
     firstDay: new Date('2026-07-15'),
     lastDay: new Date('2026-07-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 61,
     userId: 3,
     submitted: new Date('2026-05-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-10-01'),
     lastDay: new Date('2026-10-07'),
     days: 7.0,
     approvedByManager: {
       id: 7,
       firstName: 'Daniel',
       lastName: 'Balog',
       username: 'dbalog',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2026-05-20')
   },
   {
     id: 62,
     userId: 7,
     submitted: new Date('2026-06-01'),
     state: VacationState.CANCELLED,
     firstDay: new Date('2026-08-15'),
     lastDay: new Date('2026-08-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 63,
     userId: 12,
     submitted: new Date('2026-06-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-11-01'),
     lastDay: new Date('2026-11-14'),
     days: 14.0,
     approvedByManager: {
       id: 15,
       firstName: 'Filip',
       lastName: 'Lukáč',
       username: 'flukac',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2026-06-20')
   },
   {
     id: 64,
     userId: 5,
     submitted: new Date('2026-07-01'),
     state: VacationState.PENDING,
     firstDay: new Date('2026-09-15'),
     lastDay: new Date('2026-09-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 65,
     userId: 9,
     submitted: new Date('2026-07-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2026-12-01'),
     lastDay: new Date('2026-12-07'),
     days: 7.0,
     approvedByManager: {
       id: 11,
       firstName: 'Juraj',
       lastName: 'Polák',
       username: 'jpolak',
       teams: [1],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'SALARY_MANAGER']
     },
     approvedByDate: new Date('2026-07-20')
   },
   {
     id: 66,
     userId: 15,
     submitted: new Date('2026-08-01'),
     state: VacationState.REJECTED,
     firstDay: new Date('2026-10-15'),
     lastDay: new Date('2026-10-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 67,
     userId: 2,
     submitted: new Date('2026-08-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2027-01-02'),
     lastDay: new Date('2027-01-15'),
     days: 14.0,
     approvedByManager: {
       id: 5,
       firstName: 'Michal',
       lastName: 'Krejčí',
       username: 'mkrejci',
       teams: [1, 2],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2026-08-20')
   },
   {
     id: 68,
     userId: 11,
     submitted: new Date('2026-09-01'),
     state: VacationState.PENDING,
     firstDay: new Date('2026-11-15'),
     lastDay: new Date('2026-11-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 69,
     userId: 6,
     submitted: new Date('2026-09-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2027-02-01'),
     lastDay: new Date('2027-02-07'),
     days: 7.0,
     approvedByManager: {
       id: 7,
       firstName: 'Daniel',
       lastName: 'Balog',
       username: 'dbalog',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2026-09-20')
   },
   {
     id: 70,
     userId: 13,
     submitted: new Date('2026-10-01'),
     state: VacationState.CANCELLED,
     firstDay: new Date('2026-12-15'),
     lastDay: new Date('2026-12-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 71,
     userId: 4,
     submitted: new Date('2026-10-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2027-03-01'),
     lastDay: new Date('2027-03-14'),
     days: 14.0,
     approvedByManager: {
       id: 15,
       firstName: 'Filip',
       lastName: 'Lukáč',
       username: 'flukac',
       teams: [1],
       roles: ['USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2026-10-20')
   },
   {
     id: 72,
     userId: 8,
     submitted: new Date('2026-11-01'),
     state: VacationState.PENDING,
     firstDay: new Date('2027-01-15'),
     lastDay: new Date('2027-01-15'),
     days: 1.0,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 73,
     userId: 1,
     submitted: new Date('2026-11-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2027-04-01'),
     lastDay: new Date('2027-04-07'),
     days: 7.0,
     approvedByManager: {
       id: 11,
       firstName: 'Juraj',
       lastName: 'Polák',
       username: 'jpolak',
       teams: [1],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'SALARY_MANAGER']
     },
     approvedByDate: new Date('2026-11-20')
   },
   {
     id: 74,
     userId: 14,
     submitted: new Date('2026-12-01'),
     state: VacationState.REJECTED,
     firstDay: new Date('2027-02-15'),
     lastDay: new Date('2027-02-15'),
     days: 0.5,
     approvedByManager: null,
     approvedByDate: null
   },
   {
     id: 75,
     userId: 10,
     submitted: new Date('2026-12-15'),
     state: VacationState.APPROVED,
     firstDay: new Date('2027-05-01'),
     lastDay: new Date('2027-05-14'),
     days: 14.0,
     approvedByManager: {
       id: 5,
       firstName: 'Michal',
       lastName: 'Krejčí',
       username: 'mkrejci',
       teams: [1, 2],
       roles: ['ADMINISTRATOR', 'USER', 'MANAGER', 'ECONOMIST']
     },
     approvedByDate: new Date('2026-12-20')
   }
];
