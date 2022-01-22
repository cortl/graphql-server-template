import {request} from 'graphql-request';
import {getBooks} from './queries';

const BASE_URL = 'http://localhost:4000/'

describe('GraphQL', () => {

    describe('when books are queried', () => {
        let actual;

        beforeEach(async () => {
            const response = await request(BASE_URL, getBooks);

            actual = response.books;
        });

        test('should return books', () => {
            expect(actual[0]).toStrictEqual({
                author: 'Kate Chopin',
                title: 'The Awakening'
            })
        });
    });

});