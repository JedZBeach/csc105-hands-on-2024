import { db } from "../index.ts";

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}
const createUser = async( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const getAllUsers = async () => {
    return await db.user.findMany();
};
const editUser = async (id: number, firstName?: string, lastName?: string) => {
    const updateData: { firstName?: string; lastName?: string } = {};
    if (firstName !== undefined) {
      updateData.firstName = firstName;
    }
    if (lastName !== undefined) {
      updateData.lastName = lastName;
    }
  
    const updatedUser = await db.user.update({
      where: {
        id: id,
      },
      data: {
        ...updateData,
      },
    });
    return updatedUser;
  };
  
    


export { isDuplicate, createUser, getAllUsers, editUser};