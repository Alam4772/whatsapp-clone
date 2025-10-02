export interface Chat {
  id: string;
  name: string;
  picture: string;
  lastMessage: string;
  time: string;
  unread?: number;
}
