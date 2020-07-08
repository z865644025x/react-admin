import React from 'react';
import { useHistory } from "react-router-dom";

export const RouterDemo: React.FC = () =>{
	const history = useHistory();
	console.log(history);
	let arr: any = history.location.state;
	return (
		<div>
			<span>{arr.name}</span>
		</div>
	)
}