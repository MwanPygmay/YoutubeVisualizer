const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQL,
  GraphQLObjectType,
  GraphQLNonNull,
} = require("graphql");

const app = express();

const history = [{ youtubeUrl: "potit pavé" }];
const bookmarks = { bookmarks: [] };

const HistoryType = new GraphQLObjectType({
  name: "History",
  description: "History of former urls",
  fields: () => ({
    youtubeUrl: { type: GraphQLString },
  }),
});


const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    history: {
      type: new GraphQLList(HistoryType),
      description: "All history",
      resolve: () => history,
    },
    helloworld: {
      type: GraphQLString,
      description: "chien",
      resolve: () => "ça marche!"
    }
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addUrlToHistory: {
      type: HistoryType,
      description: "Add a new url to history",
      args: {
        youtubeUrl: {
          type: GraphQLString,
        },
      },
      resolve: (root, args) => {
        const newUrl = {
          youtubeUrl: args.youtubeUrl,
        };
        history.push(newUrl);
        return newUrl;
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000);

console.log("Running a GraphQL API server at localhost:4000/graphql");
