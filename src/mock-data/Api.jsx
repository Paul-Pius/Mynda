import { users } from "./Data";

export const getUsers = () => 
    new Promise((resolve, reject) => {
        if (!users) {
            return reject(new Error("users not found"))
        }
        resolve(Object.values(users))
    })
   