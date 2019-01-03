import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

export default {
    Query: {
        getUsers: (parent, args, { models }) => models.User.find({},{password: 0}),
        getUser: (parent, { email }, { models }) => 
            models.User.findOne({ email },{password: 0}),
        
    },
    Mutation: {
        createUser: async (parent, args, { models }) => {
            const user = args;
            user.password = await bcrypt.hash(user.password,12);
            return models.User.create(user);
        },
        deleteUser: async (parent, { email, password }, { models }) => {
            try {
                password = bcrypt.hash(password,12);
                models.User.deleteOne({ email,password })
            } catch (e) {
                throw new Error(e);
            }
            return true;
        },
        login: async(parent, { email, password }, { models, SECRET_KEY }) => {
            const user = await models.User.findOne({email});
            if (!user) {
                throw new Error('Email not found...');
            }

            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                throw new Error('Incorrect password!');
            }
            const token = jwt.sign(
                {
                    email: _.pick(user,['id','email'])
                },
                SECRET_KEY,
                {
                    expiresIn: '1d',
                },
            );
            // req.session.token = asd
            console.log(`Your token: ${token}`);
            return token;
        },
    },
}