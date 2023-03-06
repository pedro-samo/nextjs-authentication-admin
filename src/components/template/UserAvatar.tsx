import useAuth from '@/src/data/hook/useAuth'
import Image from 'next/image'
import Link from 'next/link'
import { AvatarIcon } from '../icons'

interface UserAvatarProps {
  className?: string
}

const UserAvatar = (props: UserAvatarProps) => {
  const { user } = useAuth()

  return (
    <Link href="/profile">
      {user?.imageUrl ? (
        <Image
          alt="User Avatar Image"
          src={user?.imageUrl}
          width="35"
          height="35"
          className={`rounded-full cursor-pointer ${props.className}`}
        />
      ) : (
        <div className="text-gray-900 dark:text-gray-100 ml-3">
          {AvatarIcon(10)}
        </div>
      )}
    </Link>
  )
}

export default UserAvatar
