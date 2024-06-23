interface NotificationIconProps {
    pictureRoute: string;
    message: string;
    timeAgo: string;
  }
  
  export const NotificationIcon = ({ pictureRoute, message, timeAgo }: NotificationIconProps) => {
    return (
      <div className="flex items-center p-4 w-full border-b-0">
        <img src={pictureRoute} alt="User" className="w-12 h-12 rounded-full object-cover mr-3" />
        <div className="flex flex-col w-full">
          <p className="text-white">{message}</p>
          <span className="text-white text-sm self-end">{timeAgo}</span>
        </div>
      </div>
    );
  };
  
  