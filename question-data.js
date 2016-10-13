export default [

	{
		question: 'Question one Try it',
		key: 'ANSWER Q1',
		optional: false,
		options: [
			{
				image: 'https://placehold.it/300x300&text=Casual Outing',
				text: 'This is option one',
				key: 'Casual Outing',
				subQuestion: 
					{
						question: 'Question 1a Try it',
						key: 'ANSWER Q2',
						optional: true,
						options: [
							{
								image: 'https://placehold.it/300x300&text=Feminine',
								text: 'This is option one',
								key: 'Feminine'
							},
							{
								image: 'https://placehold.it/300x300&text=Sophisticated',
								text: 'This is option two',
								key: 'Sophisticated'
							},
							{
								image: 'https://placehold.it/300x300&text=Sporty',
								text: 'This is option three',
								key: 'Sporty'
							},
							{
								image: 'https://placehold.it/300x300&text=Skip',
								text: 'This is option three',
								key: 'Skip'
							},
						]
					},
			},
			{
				image: 'https://placehold.it/300x300&text=Party',
				text: 'This is option two',
				key: 'Party',
				subQuestion: 
					{
						question: 'Question 1b Try it',
						optional: true,
						key: 'ANSWER Q2',
						options: [
							{
								image: 'https://placehold.it/300x300&text=Bold',
								text: 'This is option one',
								key: 'Bold'
							},
							{
								image: 'https://placehold.it/300x300&text=Feminine',
								text: 'This is option two',
								key: 'Feminine'
							},
							{
								image: 'https://placehold.it/300x300&text=Sophisticated',
								text: 'This is option three',
								key: 'Sophisticated'
							},
							{
								image: 'https://placehold.it/300x300&text=Skip',
								text: 'This is option three',
								key: 'Skip'
							},
						]
					},
			},
			{
				image: 'https://placehold.it/300x300&text=Work Wear',
				text: 'This is option three',
				key: 'Work Wear'
			}
		]
	},
	{
		question: 'Question two Try it',
		optional: true,
		key: 'ANSWER Q3',
		options: [
			{
				image: 'https://placehold.it/300x300&text=Shape ID 324',
				text: 'This is option one',
				key: 'Shape ID 324'
			},
			{
				image: 'https://placehold.it/300x300&text=Shape ID 424',
				text: 'This is option two',
				key: 'Shape ID 424'
			},
			{
				image: 'https://placehold.it/300x300&text=Shape ID 333',
				text: 'This is option three',
				key: 'Shape ID 333'
			},
			{
				image: 'https://placehold.it/300x300&text=Shape ID 443',
				text: 'This is option four',
				key: 'Shape ID 443'
			},
			{
				image: 'https://placehold.it/300x300&text=Skip',
				text: 'This is option three',
				key: 'Skip'
			},
		]
	},
	{
		question: 'Question four Try it',
		optional: true,
		key: 'ANSWER Q4',
		options: [
			{
				image: 'https://placehold.it/300x300&text=I want to hide my tummy',
				text: 'This is option one',
				key: 'I want to hide my tummy'
			},
			{
				image: 'https://placehold.it/300x300&text=I want to look taller',
				text: 'This is option two',
				key: 'I want to look taller'
			},
			{
				image: 'https://placehold.it/300x300&text=I don’t wear sleeveless',
				text: 'This is option three',
				key: 'I don’t wear sleeveless'
			},
			{
				image: 'https://placehold.it/300x300&text=I don’t want anything revealing or short',
				text: 'This is option four',
				key: 'I don’t want anything revealing or short'
			},
			{
				image: 'https://placehold.it/300x300&text=I want to see dresses in Petit sizes',
				text: 'This is option four',
				key: 'I want to see dresses in Petit sizes'
			},
			{
				image: 'https://placehold.it/300x300&text=I want to see dresses in Plus sizes',
				text: 'This is option four',
				key: 'I want to see dresses in Plus sizes'
			},
			{
				image: 'https://placehold.it/300x300&text=Skip',
				text: 'This is option three',
				key: '(skip)'
			},
		]
	},

];