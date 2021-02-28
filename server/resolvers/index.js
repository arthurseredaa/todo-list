import { todoQueries, todoMutations } from "./Todo";

export const resolvers = {
  Query: { ...todoQueries },
  Mutation: { ...todoMutations },
};
