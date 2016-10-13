import React from 'react';
import ReactDOM from 'react-dom';
import { TweenMax, TimelineMax } from 'gsap';
import _ from 'lodash';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

import qData from '../question-data';
import rData from '../result-data';

export default class Page extends React.Component {

	constructor() {
		super();
		this.state = {
			optionClicked: false,
			subQuestion: false,
			subQuestionNo: 0,
			count: 0,
			answersArray: [],
			countLength: qData.length
		}
	}

	componentDidMount() {
		TweenMax.from(this.refs.container, 0.5, { y: '100%', autoAlpha: 0 });		
	}

	getCurrentObj() {
		if (this.state.subQuestion) {
			return qData[this.state.count].options[this.state.subQuestionNo].subQuestion;
		}

		return qData[this.state.count];
	}

	renderQuestion() {
		const currentObj = this.getCurrentObj();

		return currentObj.question;
	}

	handelOptionClick(qKey, key, e) {
		if(!this.state.optionClicked) {
			this.setState({
				optionClicked: true
			});

			const target = e.target.closest('.option');

			TweenMax.to(target, 0.25, { autoAlpha: 0.5});
			let newAnswersArray = this.state.answersArray;
			newAnswersArray.push({qKey,key});

			TweenMax.to(this.refs.container, 0.5, { delay: 0.25, y: '100%', autoAlpha: 0, onComplete: ()=>{
				this.setState({
					subQuestion: false,
					count: this.state.count + 1,
					answersArray: newAnswersArray
				});
				TweenMax.set(target, { autoAlpha: 1});
				this.refs.container.scrollTop = 0;
				TweenMax.to(this.refs.container, 0.5, { y: '0%', autoAlpha: 1, onComplete: () => {
					this.setState({
						optionClicked: false
					});
				} });
			} });
		}
	}

	handelSubOptionClick(qKey, key,e) {
		if(!this.state.optionClicked) {
			this.setState({
				optionClicked: true
			});

			const target = e.target.closest('.option');

			TweenMax.to(target, 0.25, { autoAlpha: 0.5});
			const currentObj = this.getCurrentObj();
			let newAnswersArray = this.state.answersArray;
			newAnswersArray.push({qKey,key});

			let subQuestionIndex = _.findIndex(currentObj.options, (o) => {
				return (
					o.key == key
				)
			});

			TweenMax.to(this.refs.container, 0.5, { delay: 0.25, y: '100%', autoAlpha: 0, onComplete: ()=>{
				this.setState({
					subQuestion: true,
					subQuestionNo: subQuestionIndex,
					answersArray: newAnswersArray
				});
				TweenMax.set(target, { autoAlpha: 1});
				this.refs.container.scrollTop = 0;
				TweenMax.to(this.refs.container, 0.5, { y: '0%', autoAlpha: 1, onComplete: () => {
					this.setState({
						optionClicked: false
					});
				} });
			} });
		}
	}

	handelReset() {

		TweenMax.to(this.refs.container, 0.5, { y: '100%', autoAlpha: 0, onComplete: ()=>{
			this.setState({
				subQuestion: false,
				subQuestionNo: 0,
				count: 0,
				answersArray: []
			});
			this.refs.container.scrollTop = 0;
			TweenMax.to(this.refs.container, 0.5, { y: '0%', autoAlpha: 1 });
		} });
	}

	renderOptions() {
		const currentObj = this.getCurrentObj();
		const qKey = currentObj.key;
		const optionsArray = currentObj.options;

		const options = optionsArray.map((val,i)=> {
			const { image, text, key, subQuestion } = val;
			if (subQuestion) {

				return (
					<div className="option" onClick={this.handelSubOptionClick.bind(this, qKey, key)} key={i}>
						<img src={image} />
						<div>{text}</div>
					</div>
				);
			}
			return (
				<div className="option" onClick={this.handelOptionClick.bind(this, qKey, key)} key={i}>
					<img src={image} />
					<div>{text}</div>
				</div>
			);
		});
		return options;
	}

	renderCrumbs() {

		const crumbsArray = this.state.answersArray.map((val)=> {
			return val.key;
		});

		const crumbs = crumbsArray.map((val,i) => {
			return (
				<div key={i}>
					{val}
				</div>
			);
		});

		return crumbs;
	}

	renderResult() {

		console.log(rData);



		return 'Result';
	}

	render() {

		const styles = {
			container: {
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'tomato',
				overflow: 'auto'
			}
		}

		return(
			<div ref="container" style={styles.container}>

				{(this.state.count >= this.state.countLength) 

					?

					<div>
						<div>{this.renderCrumbs()}</div>

						<div>{this.renderResult()}</div>
						<div onClick={this.handelReset.bind(this)}>Reset finder</div>
					</div>

					:

					<div>
						<div>{this.renderCrumbs()}</div>
						<div>
							{this.renderQuestion()}
						</div>

						<div>
							{this.renderOptions()}
						</div>
					</div>
				}

			</div>			
		);

	}

}