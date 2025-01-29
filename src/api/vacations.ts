import { Dispatch, SetStateAction } from "react";
import { vacations } from "../utils/dummyData/vacations";
import { Vacation } from "../types/Vacation";


export const getVacations = async (userId: number | null, setVacations: Dispatch<SetStateAction<Vacation[]>>) => {
  try {
    if (userId === null) {
      setVacations(vacations);
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
