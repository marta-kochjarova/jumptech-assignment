import React from "react";
import { Vacation } from "../types/Vacation";
import { cancelVacation } from "../api/vacations";

export const vacationsTableMapper = (vacations: Vacation[]) => {
  return vacations.map((vacation) => {
     return {
          submitted: vacation.submitted.toLocaleDateString('sk-SK'),
          state: vacation.state,
          firstDay: vacation.firstDay.toLocaleDateString('sk-SK'),
          lastDay: vacation.lastDay.toLocaleDateString('sk-SK'),
          days: vacation.days.toFixed(1),
          approvedByManager: vacation.approvedByManager ? vacation.approvedByManager.firstName : '-',
          approvedByDate: vacation.approvedByDate ? vacation.approvedByDate.toLocaleDateString('sk-SK') : '-',
          actions: (<button onClick={() => cancelVacation(vacation.id)}>Cancel</button> )
     }
  });
};

