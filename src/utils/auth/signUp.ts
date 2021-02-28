import { auth } from "../firebase";

export const signUp = async (
  username: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
  auth.currentUser.updateProfile({
    displayName: username,
  });
};
