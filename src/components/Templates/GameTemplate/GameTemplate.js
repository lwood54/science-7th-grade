import React, { Component } from "react";

import NavigationBar from "../../Navigation/NavigationBar/NavigationBar";

// import GameBoard from "./GameBoard";
// import CardDeck from "./CardDeck";

import cls from "./GameTemplate.module.css";

// need to import game object that will be passed in the props
// and used for rendering the cards and column headings.

class GameTemplate extends Component {
	/// WHAT MAY NEED TO HAPPEN FOR THIS TO WORK NOW ///
	// may have to store a list of the targets in state
	// store a list of cards in state
	// keep track when they are updated, remove card from array
	// when it has been dropped on correct div

	state = {
		correctAnswers: 0,
		wrongAnswers: 0,
		targets: [],
		cards: []
	};

	handleAppend = (Container, AddItem) => {};

	shuffleArray = array => {
		// copy array to manipulate
		let arrayCopy = [...array];
		let mixedArray = [];
		// loop through copy until no elements left
		while (arrayCopy.length > 0) {
			let randNum = Math.floor(Math.random() * arrayCopy.length);
			// add removed elements to mixedArray as looping occurs
			mixedArray.push(arrayCopy.splice(randNum, 1)[0]);
		}
		return mixedArray;
	};

	componentDidUpdate() {}

	componentDidMount() {
		let cards = [];
		let gameCopy = { ...this.props.game };
		let arrayOfCols = Object.keys(gameCopy);
		arrayOfCols.forEach(col => {
			let itemsArray = Object.keys(gameCopy[col]);
			itemsArray.forEach(item => {
				if (item === "image") {
					cards.push(
						<div
							className={cls.CardContainer}
							key={`${col}_${item}`}
							id={`${col}_${item}`}
							onDragStart={this.handleDrag}
							draggable
						>
							<img
								src={gameCopy[col][item]}
								alt="game piece"
								className={cls.Image}
								draggable="false"
							/>
						</div>
					);
				} else if (item === "hint" || item === "definition") {
					cards.push(
						<div
							key={`${col}_${item}`}
							id={`${col}_${item}`}
							className={cls.CardContainer}
							onDragStart={this.handleDrag}
							draggable
						>
							<div className={cls.CardContent}>
								{gameCopy[col][item]}
							</div>
						</div>
					);
				}
			});
		});
		let targets = [];
		arrayOfCols.forEach(col => {
			targets.push(
				<div className={cls.Col} key={`cls.${col}`}>
					<h1 className={cls.colTitle}>{gameCopy[col].heading}</h1>
					<React.Fragment>
						<div
							className={cls.Target}
							onDragOver={this.handleDragOver}
							onDrop={this.handleDrop}
							id={`${col}_1`}
							key={`${col}_1`}
						/>
						<div
							className={cls.Target}
							onDragOver={this.handleDragOver}
							onDrop={this.handleDrop}
							id={`${col}_2`}
							key={`${col}_2`}
						/>
						<div
							className={cls.Target}
							onDragOver={this.handleDragOver}
							onDrop={this.handleDrop}
							id={`${col}_3`}
							key={`${col}_3`}
						/>
					</React.Fragment>
				</div>
			);
		});

		let shuffledCards = this.shuffleArray(cards);
		this.setState({
			targets: targets,
			cards: shuffledCards
		});
		// console.log("shuffled cards: ", shuffledCards);
		// console.log("targets: ", targets);
	}

	handleDrag = event => {
		event.dataTransfer.setData("text", event.target.id);
	};
	handleDragOver = event => {
		event.preventDefault();
	};

	setCorrect(targ, dragElement) {
		targ.style.backgroundColor = "#00897b";
		dragElement.style.backgroundColor = "#00897b";
		dragElement.style.color = "white";
		dragElement.setAttribute("draggable", false);
		dragElement.style.boxShadow = "none";
		dragElement.style.cursor = "not-allowed";
	}

	setWrong(targ, dragElement) {
		targ.style.backgroundColor = "#ba000d";
		dragElement.style.boxShadow = "2px 2px 4px black";
	}

	// mouseOver = ev => {
	//         ev.target.style.transform = 'scale(1.1)';
	//         ev.target.style.transition = 'all 0.3s';
	// };

	// mouseOut = ev => {
	//         ev.target.style.transform = 'scale(1.0)';
	//         ev.target.style.transition = 'all 0.1s';
	// };

	updateCorrect() {
		let updtCorrect = this.state.correctAnswers;
		updtCorrect += 1;
		console.log("CORRECT: ", updtCorrect);
		this.setState({ correctAnswers: updtCorrect });
	}

	updateWrong() {
		let updtWrong = this.state.wrongAnswers;
		updtWrong += 1;
		console.log("WRONG: ", updtWrong);
		this.setState({ wrongAnswers: updtWrong });
	}

	appendChild = (targetId, cardId) => {
		let targetsCopy = [...this.state.targets];
		let cardsCopy = [...this.state.cards];
		console.log("targetId: ", targetId);
		console.log("cardId: ", cardId);
		let targetIdIndex3 = targetId.split("")[3];
		console.log("targetIdIndex3: ", targetIdIndex3);
		let cardIdIndex3 = cardId.split("")[3];
		console.log("cardIdIndex3: ", cardIdIndex3);
		if (targetIdIndex3 === cardIdIndex3) {
			this.updateCorrect();
		} else {
			this.updateWrong();
		}
		// targetsCopy.forEach((target, i) => {
		// 	console.log("id", target.props.id);
		// 	if (target.props.id.includes("col1")) {
		// 		cardsCopy.forEach((card, k) => {
		// 			console.log("card id: ", card.props.id);
		// 			console.log("card index position: ", i);
		// 			if (card.props.id === "col1") {
		// 				targetsCopy.splice(
		// 					i,
		// 					1,
		// 					<div {...target.props} key={target.props.id}>
		// 						{card}
		// 					</div>
		// 				);
		// 				cardsCopy.splice(k, 1);
		// 			}
		// 		});
		// 	} else {
		// 		return <div {...target.props} key={target.props.id} />;
		// 	}
		// });
		// this.setState({
		// 	targets: targetsCopy,
		// 	cards: cardsCopy
		// });
	};

	handleDrop = ev => {
		if (!ev.target.classList[0].includes("Target")) {
			return false;
		} else if (ev.target.children.length > 0) {
			console.log("already child present");
			return false;
		} else {
			ev.preventDefault();
			let targetId = ev.target.id;
			let cardId = ev.dataTransfer.getData("text");
			this.appendChild(targetId, cardId);
		}
	};

	// handleDrop = event => {
	//         if (event.target.children.length > 0) {
	//                 return false;
	//         } else if (!event.target.classList[0].includes('Target')) {
	//                 return false;
	//         } else {
	//                 let parentClasses = event.target.parentNode.classList;
	//                 let parentEntries = Object.entries(parentClasses)[0][1];
	//                 try {
	//                         event.preventDefault();
	//                         let data = event.dataTransfer.getData('text');
	//                         let targ = event.target;
	//                         let dragItem = document.getElementById(data);
	//                         targ.appendChild(document.getElementById(data));
	//                         let dataIndex3 = parseInt(data.split('')[3]);
	//                         if (parentEntries.includes('col5')) {
	//                                 if (dataIndex3 === 5) {
	//                                         let updtCorrect = this.state.correctAnswers;
	//                                         updtCorrect += 1;
	//                                         console.log(updtCorrect);
	//                                         this.setState({ correctAnswers: updtCorrect });
	//                                         // this.setCorrect(targ, dragItem);
	//                                 } else {
	//                                         this.setWrong(targ, dragItem);
	//                                 }
	//                         } else if (parentEntries.includes('col4')) {
	//                                 if (dataIndex3 === 4) {
	//                                         this.setCorrect(targ, dragItem);
	//                                 } else {
	//                                         this.setWrong(targ, dragItem);
	//                                 }
	//                         } else if (parentEntries.includes('col3')) {
	//                                 if (dataIndex3 === 3) {
	//                                         this.setCorrect(targ, dragItem);
	//                                 } else {
	//                                         this.setWrong(targ, dragItem);
	//                                 }
	//                         } else if (parentEntries.includes('col2')) {
	//                                 if (dataIndex3 === 2) {
	//                                         this.setCorrect(targ, dragItem);
	//                                 } else {
	//                                         this.setWrong(targ, dragItem);
	//                                 }
	//                         } else if (parentEntries.includes('col1')) {
	//                                 if (dataIndex3 === 1) {
	//                                         this.setCorrect(targ, dragItem);
	//                                 } else {
	//                                         this.setWrong(targ, dragItem);
	//                                 }
	//                         }
	//                 } catch (err) {
	//                         console.log('error: ', err);
	//                 }
	//         }
	// };

	render() {
		const quizletLink = this.props.vertMenuItems
			.map(item => {
				return item["Quizlet"];
			})
			.join("");
		const homeLink = this.props.vertMenuItems
			.map(item => {
				return item["Home"];
			})
			.join("");
		const unitMain = this.props.vertMenuItems
			.map(item => {
				return item["Unit Page"];
			})
			.join("");
		// get the object to be rendered with heading at the top of a column
		// eventually i will need to have a stack of cards that include all of the
		// other parts of the clumn objects that will also have to be
		// drag n drop enabled, the targets will have to be a grid of empty boxes
		// const col1 = Object.entries(this.props.game.col1).map(item => item);
		return (
			<div style={{ width: "100%" }}>
				<NavigationBar
					title={this.props.title}
					quizletLink={quizletLink}
					homeLink={homeLink}
					unitMain={unitMain}
				/>
				<div className={cls.GameBoard}>{this.state.targets}</div>
				<div className={cls.CardDeckContainer}>
					<div className={cls.CardStackLocation}>{this.state.cards}</div>
				</div>
			</div>
		);
	}
}

export default GameTemplate;

/*
<GameBoard
	draggingOver={this.handleDragOver}
        droppedOn={this.handleDrop}
        {...this.props.game}
/>
<h1 onClick={this.appendChild} className={cls.Title}>
        {this.props.title} Review Game
</h1>
<div>
        <button onClick={this.appendChild}>append</button>
        {this.state.targets}
        {this.state.cards}
</div>

<div className={cls.CardDeckContainer}>
        <CardDeck startingDrag={this.handleDrag} {...this.props.game} />
</div>
*/
