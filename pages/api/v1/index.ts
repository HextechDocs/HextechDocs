import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    users: [User!]!
    games: [game!]!
  }
  type User {
    name: String
  }

  type game {
    name: [String]
    slug: String
    gameLogo: String
  }

  type api {
    name: String
    categories: [category]
  }

  type category {
    name: String
    documents: [document!]!
  }

  type document {
    metadata: String
    body: String
    name: String
  }

  type metadata {
    name: String
    tags: [String!]!
    description: String
    shortDescription: String
  }
`;

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: "github" }];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/v1" });
