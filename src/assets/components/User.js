import React from 'react';

const User = ({user}) => {
	if (!user)
		user = 'Ошибка получения пользователя'
	// let listGroups = 'Группы не найдены';
	// if (groups) {
	// 	listGroups = groups.map((group)=><Group group={group}/>)
	// }
	return <div><ul><pre>{user}</pre></ul></div>
}

export default User;
