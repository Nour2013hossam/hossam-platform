// @ts-check
import { module } from "@prisma/composer";
import hossamPlatformService from "./service.mjs";

export default module("hossam-platform", ({ provision }) => {
  provision(hossamPlatformService, { id: "hossamplatform" });
});
