import { Dispatch, SetStateAction } from "react";
import { vacations } from "../utils/dummyData/vacations";
import { Vacation } from "../types/Vacation";


export const getVacationsByUser = async (userId: number | null, setVacations: Dispatch<SetStateAction<Vacation[] | null>>) => {
  try {
    if (userId === null) {
      setVacations(null);
    } else {
      setVacations(vacations.filter((user) => user.userId === userId));
    }
  } catch (error) {
    console.error("Error fetching vacations:", error);
  }
};

export const cancelVacation = async (vacationId: number) => {
  try {
    alert('Vacation cancelled :(');
  } catch (error) {
    console.error("Error cancelling vacation:", error);
  }
}
