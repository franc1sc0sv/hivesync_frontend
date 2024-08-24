export interface NotificationProps {
  id: string;
  message: string;
  category: string;
  data: any;
  createdAt: string;
  to_user_id: string;
}

type Category = "all" | "request" | "invitation" | "message";

type Categories = {
  name: string;
  id: Category;
}[];
