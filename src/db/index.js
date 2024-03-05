import mongoose from 'mongoose';

let DB_NAME = 'digilib';
async function dbConnect (uri) {
  try {
    const connectionInstance = await mongoose.connect(`${uri}/${DB_NAME}`);
    if(!connectionInstance)
      throw new Error(`Couldn\'t connect to the DB. Error occured!`);

    return true;
  } catch(err) {
    throw err;
  }
}

export { dbConnect };