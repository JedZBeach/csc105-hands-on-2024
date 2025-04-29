import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	firstName: string;
	lastName: string;
};
const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
		});
	} catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
};
const getAllUsers = async (c: Context) => {
	try {
		const users = await userModel.getAllUsers();
			return c.json(
				{
					success: true,
					data: users,
					msg: "get get get get get Allllllll!!!!!!!!!!!!",
				},
				
			);
	} catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
};
const editUser = async (c: Context) => {
	try {
	  const id = parseInt(c.req.param("id"));
	  if (isNaN(id)) {
		return c.json(
		  {
			success: false,
			data: null,
			msg: "Invalid user ID",
		  },
		  400
		);
	  }
  
	  const body = await c.req.json<createUserBody>();
	  const { firstName, lastName } = body;
  
	  if (!firstName && !lastName) {
		return c.json(
		  {
			success: false,
			data: null,
			msg: "Missing required fields",
		  },
		  400
		);
	  }
  
	  const updatedUser = await userModel.editUser(id, firstName, lastName);
  
	  if (!updatedUser) {
		return c.json(
		  {
			success: false,
			data: null,
			msg: `User with ID ${id} not found`,
		  },
		  404
		);
	  }
  
	  return c.json({
		success: true,
		data: updatedUser,
		msg: `User with ID ${id} updated successfully!`,
	  });
	} catch (e) {
	  return c.json(
		{
		  success: false,
		  data: null,
		  msg: `${e}`,
		},
		500
	  );
	}
  };
export { createUser , getAllUsers, editUser};