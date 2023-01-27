import {gql} from 'apollo-angular'


const HISTORY_QUERY = gql`
{
  history{
    youtubeUrl
  }
}
`

const TEST_QUERY = gql`{helloworld}`

const ADD_URL_TO_HISTORY = gql`
mutation addTodo($youtubeUrl: String!) {
  addTodo(youtubeUrl: $youtubeUrl) {
    youtubeUrl
  }
}
`
export {HISTORY_QUERY,ADD_URL_TO_HISTORY, TEST_QUERY}