export interface IBlog {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  tags: string[];
}
export interface IExercise {
  title: string;
  kcal: string;
  time: string;
}
export interface IDiary {
  title: string;
  date: string;
  time: string;
  content: string;
}
