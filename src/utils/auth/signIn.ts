import { auth } from "../firebase";

const signIn = async (email: string, password: string): Promise<void> => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    console.log(user.additionalUserInfo.username);
  } catch (err) {
    console.error(err.message);
  }
};

export default signIn;
