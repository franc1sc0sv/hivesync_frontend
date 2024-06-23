export interface NotificationProps {
    pictureRoute: string;
    message: string;
    timeAgo: string;
  }
  
  export const Notification = ({ message, timeAgo }: NotificationProps) => {
    return (
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-400"></div>
          <p className="text-white">{message}</p>
        </div>
        <span className="text-gray-400 text-sm">{timeAgo}</span>
      </div>
    );
  };
  