import jwt from "jsonwebtoken"


const generateToken = async(data) => {
    try {
        const payload = {
            uui: data.id,
            name: data.name,
            email: data.email,
            role: data.role,
            username:  data.username,
            iat: Math.floor(Date.now()/ 1000),
            exp:  Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30 //30 dias
        }

        return jwt.sign(payload, `${process.env.NEXTAUTH_SECRET}`);

        
    } catch (err) {
        console.log(err)
        return err
    }

}

export default generateToken;