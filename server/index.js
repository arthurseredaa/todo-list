import { db } from "./database/index";
import { resolvers } from "./resolvers/index.js";
import { typeDefs } from "./types/index.js";
import cors from "cors";
import express from "express";
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.use(cors());

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
