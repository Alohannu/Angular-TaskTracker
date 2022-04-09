export interface Task {
  id?: number; // ? means optional
  text: string;
  day: string;
  reminder: boolean;
}
