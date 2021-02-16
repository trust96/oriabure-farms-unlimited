import { auth } from "../firebase";

export const signUp = (username: string, email: string, password: string) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => console.log(user));

  auth.currentUser.updateProfile({
    displayName: username,
  });
};
