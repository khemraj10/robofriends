import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {

	// const cardComponent = robots.map((user, i) => {
	// 	console.log(user, i);
	// 	return (
	// 		<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
	// 	); 
	// })

	// if(true) {
	// 	throw new Error('NOOOOOOO!');
	// }

	return (
		<div>
			{/* {cardComponent} */}
			{/* cardsArray would be better name for this */}
			{
				robots.map((user, i) => {
					// console.log(user);
					// console.log(i);
					return (
						<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
					);
				})
			}
		</div>
	);
}

export default CardList;