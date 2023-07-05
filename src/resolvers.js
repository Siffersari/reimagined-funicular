import { users } from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
      return users.find(user => user.id === parseInt(id));
    },
    users: (parent, args, context, info) => {
      return users;
    }
  }
};

export default resolvers;