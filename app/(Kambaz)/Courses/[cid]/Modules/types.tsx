export interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: {
    _id: string;
    name: string;
    description: string;
    module: string;
  }[];
  editing?: boolean;
}