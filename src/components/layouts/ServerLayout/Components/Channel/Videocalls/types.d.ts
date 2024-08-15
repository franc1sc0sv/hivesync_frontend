export type UserCardType = {
    user: string;
    userId: string;
    userImageUrl: string;
    userColor: string;
  };
  
  export interface UserCardProps {
    users: UserCardType[];
  }