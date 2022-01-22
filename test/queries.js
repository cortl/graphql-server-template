import {gql} from 'graphql-request'

const getBooks = gql`
query GetBooks {
    books {
        author
        title
    }
}
`

export {
    getBooks
}