import FriendListItem from "../FriendListItem/FriendListItem"
import css from './FriendList.module.css'

export default function FriendList({ friends } ) {
    return (<ul className={css.listFriends}>{friends.map((friend) => {
        return <li key={friend.id} className={css.itemList}>
                   <FriendListItem friend={friend} />
                </li>
                 })}
	
      </ul>)
}