import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ES Modules
import dotenv from 'dotenv';
dotenv.config();

//create a reatelimiter that allows 5 requests per 60 seconds
// one user send 5 requests per 60 seconds whole application will brake 
const ratelimit = new Ratelimit ({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "60 s"),
});

export default ratelimit;