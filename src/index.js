import fs from 'node:fs';

import Apollo from 'apollo-server';
import { buildSchema } from 'graphql';

import { resolvers } from './resolvers.js';

const { ApolloServer } = Apollo;

const SCHEMA_PATH = 'src/schema';

const typeDefs = buildSchema(
	fs
		.readdirSync(SCHEMA_PATH)
		.map((file) => fs.readFileSync(`${SCHEMA_PATH}/${file}`).toString())
		.join('\n')
);

const server = new ApolloServer({ resolvers, typeDefs });

server.listen().then(({ url }) => {
	// eslint-disable-next-line no-console
	console.log(`🚀 Server ready at ${url}`);
});
