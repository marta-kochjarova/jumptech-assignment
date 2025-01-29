import React from "react";
import { Vacation } from "../types/Vacation";
import { cancelVacation } from "../api/vacations";

export const vacationsTableMapper = (vacations: Vacation[] | null) => {
  if (vacations) {
    return vacations.map((vacation) => {

      return {
        submitted: vacation.submitted.toLocaleDateString("sk-SK"),
        state: vacation.state,
        firstDay: (
          <>
            <span className="d-block"> {vacation.firstDay.toLocaleDateString("sk-SK")} </span>
            <span>{vacation.days > 0.5 ? '(Full Day)' : '(Half Day)'}</span>
          </>
        ),
        lastDay: (
          <>
            <span className="d-block"> {vacation.lastDay.toLocaleDateString("sk-SK")} </span>
            <span>{vacation.days > 0.5 ? '(Full Day)' : '(Half Day)'}</span>
          </>
        ),
        days: vacation.days.toFixed(1),
        approvedByManager: vacation.approvedByManager ? vacation.approvedByManager.firstName : "-",
        approvedByDate: vacation.approvedByDate ? vacation.approvedByDate.toLocaleDateString("sk-SK") : "-",
        actions: ( <button onClick={() => cancelVacation(vacation.id)}>Cancel</button> ),
      };
    });
  } else {
    return null;
  }
};
