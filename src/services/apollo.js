import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri: "https://pubg-draft.now.sh/graphql",
  fetch,
})
