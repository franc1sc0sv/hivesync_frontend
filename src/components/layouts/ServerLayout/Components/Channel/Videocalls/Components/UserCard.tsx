
 interface userCardProps {
  user: string
  userId: string | any
  userImageUrl: string
  userColor: string
 }
export const UserCard: React.FC<userCardProps> =({
  user,
  userId,
  userImageUrl,
  userColor,
}) => {
  //NO se que wea con el user id pero si entiendo que se lo necesitas pasar qsy
  console.log(userId)

  const backgroundColorCard = `bg-${userColor}`
  return (
    <div className={` ${backgroundColorCard} h-[10.5rem] w-[14rem] sm:h-[13.5rem] sm:w-[21rem] rounded-md flex items-center justify-center mb-4 md:mb-0 relative `}>
      <div className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] rounded-full bg-white overflow-hidden">
        <img src={`${userImageUrl}`} alt="avatar" className="w-full h-full object-cover" />
      </div>
      <p className="bg-overlay_2 opacity-90 text-white pt-1 pb-1 pl-2 pr-2 rounded-md absolute bottom-0 left-0 mb-2 ml-2">
        {user}
      </p>
    </div>
  );
};
