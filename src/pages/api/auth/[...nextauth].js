import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import NextAuth from "next-auth";
import { User } from "next-auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "username",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials, req) {
        try {
          const { username, password } = credentials;
          /*
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          {
            username,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        */
          const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });

          const user = await res.json();

          console.log({ user });

          if (res.ok && user) {
            return user;
          } else return null;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/Login",
  },
};

export default NextAuth(authOptions);
