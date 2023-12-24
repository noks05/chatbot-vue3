import { assoc } from "./assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const generateId = (obj) => assoc('id', generateRandomString())(obj);
