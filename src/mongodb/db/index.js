import mongoose from 'mongoose';
import User from './models/User.js';

mongoose.Promise = global.Promise;

export const startDB = ({
    user,
    pwd,
    url,
    db,
}) => mongoose.connect(`mongodb://${user}:${pwd}@${url}/${db}`);

export const models = {
    User,
}