export interface Courses {
  _id: string;
  name: string;
  number: string;
 
  // optional profile fields
  startDate?: string;
  endDate?: string;
  department?: string;
  credits?: number;   
    description?: string;
    title?: string;
    img?: string;
    term? : string
}