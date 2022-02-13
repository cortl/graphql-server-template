const books = [
	{
		author: 'Kate Chopin',
		title: 'The Awakening',
	},
	{
		author: 'Paul Auster',
		title: 'City of Glass',
	},
];

const resolvers = {
	Query: {
		books: () => books,
	},
};

export { resolvers };
