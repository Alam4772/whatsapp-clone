export interface Call {
  id: string;
  name: string;
  avatar: string;
  type: "incoming" | "outgoing" | "missed";
  time: string;
  video: boolean;
}
