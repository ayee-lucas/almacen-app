'use strict';

import bcrypt from "bcrypt"

const checkPass = async (password,  hash) => {
    try {
        return await bcrypt.compare(password, hash);
    } catch (err) {
        console.log(err);
        return false;
    }
}

export default checkPass;
