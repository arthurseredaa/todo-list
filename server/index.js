import cors from "cors";
import express from "express";

import { resolvers } from "./resolvers/index.js";
import { typeDefs } from "./types/index.js";
import { dbConnect } from "./database/index.js";
const { ApolloServer } = require("apollo-server-express");

dbConnect();

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.use(cors());

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
