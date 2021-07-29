const { AuthenticationError } = require('apollo-server-express');
const {Books, Users, User} = require('../models');
const signToken = require('../utils/auth');

const resolvers = {
    Query: {
        books: async () => {
          return await Books.find({});
        },
        users: async () => {
         return await Users.find({});
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user }; 
        },
        login: async (parent, { email, password }) => {
            const user = await user.findOne({ email});
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const correctPassword = await user.isCorrectPassword(password);
            if (!correctPassword) {
                throw new AuthenticationError('Incorrect credentials');
                
            }
        }
    }
    // Mutation: {
    //   createBooks: async () => {
    //     return books;
    //   },
    //   createUser: async ({}) => {
    //     return user;
    //   },
    // },
};

module.exports = resolvers;