import React, { FC } from 'react';
import Image from 'next/image';
import NoAvatar from '@/assets/images/no-avatar.png'
import { User } from '@/types/user';
// Assume this interface is defined elsewhere, but you can also inline it.
// Make sure it has the optional picture_profile property.


// Props for the Avatar component, ensuring we ONLY accept a `User` object.
interface AvatarProps {
    user?: User;
}

const Avatar: FC<AvatarProps> = ({ user }) => {
    const profilePicture = user?.picture_profile !== "" ? user?.picture_profile : NoAvatar;
    console.log("Profile Picture URL:", profilePicture);

    return (

        <Image
            src={profilePicture || NoAvatar}
            alt="Profile"
            width={45}
            height={45}
            className='rounded-full'
        />
    );
};

export default Avatar;
