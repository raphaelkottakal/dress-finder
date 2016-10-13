export default [

	{
		question: 'Question one Try it',
		key: 'ANSWER Q1',
		optional: false,
		options: [
			{
				image: 'https://placehold.it/300x300&text=Option one',
				text: 'This is option one',
				key: 'Casual Outing',
				subQuestion: 
					{
						question: 'Question 1a Try it',
						key: 'ANSWER Q2',
						optional: true,
						options: [
							{
								image: 'https://placehold.it/300x300&text=Option one',
								text: 'This is option one',
								key: 'Feminine'
							},
							{
								image: 'https://placehold.it/300x300&text=Option two',
								text: 'This is option two',
								key: 'q two'
							},
							{
								image: 'https://placehold.it/300x300&text=Option three',
								text: 'This is option three',
								key: 'q three'
							},
							{
								image: 'https://placehold.it/300x300&text=Option four',
								text: 'This is option four',
								key: 'q four'
							},
						]
					},
			},
			{
				image: 'https://placehold.it/300x300&text=Option two',
				text: 'This is option two',
				key: 'q two',
				subQuestion: 
					{
						question: 'Question 1b Try it',
						optional: true,
						key: 'ANSWER Q2',
						options: [
							{
								image: 'https://placehold.it/300x300&text=Option one',
								text: 'This is option one',
								key: 'q one'
							},
							{
								image: 'https://placehold.it/300x300&text=Option two',
								text: 'This is option two',
								key: 'q two'
							},
							{
								image: 'https://placehold.it/300x300&text=Option three',
								text: 'This is option three',
								key: 'q three'
							},
							{
								image: 'https://placehold.it/300x300&text=Option four',
								text: 'This is option four',
								key: 'q four'
							},
						]
					},
			},
			{
				image: 'https://placehold.it/300x300&text=Option three',
				text: 'This is option three',
				key: 'q three'
			}
		]
	},
	{
		question: 'Question two Try it',
		optional: true,
		key: 'ANSWER Q3',
		options: [
			{
				image: 'https://placehold.it/300x300&text=Option one',
				text: 'This is option one',
				key: 'Shape ID 324'
			},
			{
				image: 'https://placehold.it/300x300&text=Option two',
				text: 'This is option two',
				key: 'q two'
			},
			{
				image: 'https://placehold.it/300x300&text=Option three',
				text: 'This is option three',
				key: 'q three'
			},
			{
				image: 'https://placehold.it/300x300&text=Option four',
				text: 'This is option four',
				key: 'q four'
			},
		]
	},
	{
		question: 'Question four Try it',
		optional: true,
		key: 'ANSWER Q4',
		options: [
			{
				image: 'https://placehold.it/300x300&text=Option one',
				text: 'This is option one',
				key: 'I want to hide my tummy'
			},
			{
				image: 'https://placehold.it/300x300&text=Option two',
				text: 'This is option two',
				key: 'q two'
			},
			{
				image: 'https://placehold.it/300x300&text=Option three',
				text: 'This is option three',
				key: 'q three'
			},
			{
				image: 'https://placehold.it/300x300&text=Option four',
				text: 'This is option four',
				key: 'q four'
			},
		]
	},

];