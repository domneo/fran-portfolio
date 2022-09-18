import { passwordCheckHandler } from "next-password-protect";

export default passwordCheckHandler(process.env.PROD_PASSWORD || "", {
  cookieName: "authorization",
});
