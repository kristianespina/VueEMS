import { GraphQLServer } from 'graphql-yoga';
import { startDB, models } from './db';
import resolvers from './graphql/resolvers';
import jwt from 'jsonwebtoken';

const db = startDB({
    user: 'admin',
    pwd: 'admin1234',
    url: 'ds235243.mlab.com:35243',
    db: 'ems',
})

// Context contains Models and Database Connection (MongoDB)
const SECRET_KEY = 'WTCuz9uGvg22KYcyHmNKX2SKRtkXksOB'
const opts = {
    port: 4000,
    endpoint: '/graphql',
};

// context
const context = (req) => ({
    models,
    db,
    SECRET_KEY,
    req: req.request,
})
const authenticateUser = async(resolve, root, args, context, info) => {
    const token = context.req.headers.authorization;
    try {
        const { email } = await jwt.verify(token, SECRET_KEY);
        req.email = email;
    } catch(err) {
        console.log(err);
    }
    const result = await resolve(root, args, context, info)
    return result
}
const Server = new GraphQLServer({
    typeDefs: `${__dirname}/graphql/schema.graphql`,
    resolvers,
    context,
    middlewares: [authenticateUser]
});


Server.start(opts, () => {
    console.log(`Server is running on localhost:${opts.port}`);
})


