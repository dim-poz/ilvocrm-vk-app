import React from 'react';

const Group = ({group}) => {
	return <li>{group}</li>
}

const UserGroups = ({groups}) => {
	let listGroups = 'Группы не найдены';
	if (groups) {
		listGroups = groups.map((group)=><Group group={group}/>)
	}
	return <div><ul>{listGroups}</ul></div>
}

export default UserGroups;
