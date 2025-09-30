export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  outgoing: boolean; // true if sent by current user
}
