import { IUser } from "./user.interface";
import User from "./user.model";

// create user
export const createUserToDB = async (payload: IUser): Promise<IUser> => {

    // creating a new user
    const user = new User(payload); // User -> class, user -> instance
    await user.save(); // built in instance method

    user.fullName(); // custom instance method
    console.log(user.fullName());
    return user;
    }

// find all users
export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

// find user by id
export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({id: payload}, {name: 1, email: 1, contactNumber: 1});
    return user;

}

// class -> Attach -> Method -> directly call using class instance

export const getAdminUsersFromDB = async () => {

    const admins = await User.getAdminUsers();
    return admins;
}

