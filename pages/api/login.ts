import { loginHandler } from "next-password-protect";

export default loginHandler(process.env.PROD_PASSWORD || "", {
  cookieName: "authorization",
});
