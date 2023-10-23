import jwt from "jsonwebtoken";

const verifyJWT = (token, keySecret) => {
    return jwt.verify(token, keySecret)
}

export default verifyJWT