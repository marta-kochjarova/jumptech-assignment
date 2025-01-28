import { vacations } from "../utils/dummyData/vacations";

export const getVacations = async (userId: number | null) => {
  try {
    if (userId === null) {
      return vacations;
    } else {
      return vacations.filter((user) => user.userId === userId);
    }
  } catch (error) {
    console.error("Error fetching vacations:", error);
  }
};
