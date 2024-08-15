export const UserAvatarTemplate = ({ username }: { username: string }) => {
  const firstLetterName = username[0].toUpperCase();

  return (
    <div className="grid text-6xl font-medium text-white font-exo place-items-center w-28 h-28 rounded-2xl bg-secondary">
      {firstLetterName}
    </div>
  );
};
