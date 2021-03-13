import { User } from "../database/models/User";

export const userMutations = {
  createUser: (_, { input }) => User.create({ input }),
};
