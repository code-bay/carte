import { Deta } from "deta";
import { env } from "$env/dynamic/private";

export const deta = Deta(env.DETA_PROJECT_KEY);