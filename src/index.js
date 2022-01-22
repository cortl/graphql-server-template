import Apollo from 'apollo-server';
import { buildSchema } from 'graphql';
import fs from 'fs';

import { resolvers } from './resolvers.js';

const { ApolloServer } = Apollo;

const SCHEMA_PATH = 'src/schema';

const typeDefs = buildSchema(
	fs
		.readdirSync(SCHEMA_PATH)
		.map((file) => fs.readFileSync(`${SCHEMA_PATH}/${file}`).toString())
		.join('\n')
);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
