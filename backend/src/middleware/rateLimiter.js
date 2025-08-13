import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
try {
    //change the my-rate-limit to userid for unique identifier for your application or endpoint
    const {success} = await ratelimit.limit( "my-rate-limit");

    if(!success) {
        return res.status(429).json({ 
            message: "Too many requests, please try again later." });
    }
      
    next();
} catch (error) {
    console.log("Rate limiter error:", error);
    next(error);
}
};

export default rateLimiter;