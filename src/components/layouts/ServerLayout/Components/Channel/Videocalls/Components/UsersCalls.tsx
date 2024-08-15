import React from 'react';
import { UserCard } from './UserCard';
import { userData } from '../../../../../../../pages/User/mocks/userData';
import { type UserCardType } from '../types';
import { UserCardProps } from '../types';

export const UsersCalls: React.FC<UserCardProps> = ({ users }) => {
  
  const { picture, name, themeColor,username } = userData;
  const firstUser: UserCardType = {
    user: name,
    userId: username, 
    userImageUrl: picture,
    userColor: themeColor
  };
  const allUsers = [firstUser, ...users];

  return (
    <>
      {allUsers.map((user) => (
        <UserCard
          key={user.userId}
          user={user.user}
          userId={user.userId}
          userImageUrl={user.userImageUrl}
          userColor={user.userColor}
        />
      ))}
    </>
  );
};
