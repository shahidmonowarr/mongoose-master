import User from "./user.model";

export const createUserToDB = async () => {
    const user = await new User({
        id: "1234",
        role: "student",
        password: "123456",
        name: {
            firstName: "Mr. Tanmay",
            middleName: "Munna",
            lastName: "Gupta",
            },
        gender: "male",
        email: "monu@gmail.com",
        contactNumber: "123456789",
        emergencyContactNumber: "123456789",
        presentAddress: "abcdef",
        dateOfBirth: "1998-01-01",
        permanentAddress: "abc",
    });
      await user.save(); 
      console.log(user);
        return user;
    }