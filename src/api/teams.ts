import { teams } from "../utils/dummyData/teams";

export const getTeams = async () => {
  try{
    return teams;
  } catch (error) {
      console.error('Error fetching teams:', error);
  }
  
};
