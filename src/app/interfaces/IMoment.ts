export interface IMoment {
  id?: number;
  title: string;
  description: string;
  image: string;
  created_at?: string;
  update_at?: string;
  comments?: [{ text: string; username: string }];
}
