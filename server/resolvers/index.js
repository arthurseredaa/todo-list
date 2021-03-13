import { todoQueries, todoMutations } from "./Todo";
import { userMutatations } from "./User";

export const resolvers = {
  Query: { ...todoQueries },
  Mutation: { ...todoMutations, ...userMutatations },
};
