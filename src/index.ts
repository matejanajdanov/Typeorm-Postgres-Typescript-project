import 'reflect-metadata';
import { config } from 'dotenv';
import { createConnection, getConnectionOptions } from 'typeorm';
import { Post } from './entity/Post';
// import { User } from './entity/User';

// Init env file
config();

const main = async () => {
  const connection = await createConnection();
  const postRepository = connection.getRepository(Post);
  await postRepository.insert({ title: 'my first post' });

};

main();
