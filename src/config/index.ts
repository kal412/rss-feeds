import dotenv from 'dotenv';
dotenv.config();

export const config = {
    nodeEnv : process.env.ENV_NODE ?? 'development',
    port : process.env.PORT ?? 3000,
}