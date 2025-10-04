import { expressRouter } from "../config/express.config.js";
import { shortanUrl, shortUrlStatus, shortUrlRedirect } from "../controllers/urlC.js";

const urlRouter = expressRouter;

urlRouter.post("/shorten", shortanUrl);

urlRouter.get("/status/:shortCode", shortUrlStatus);

urlRouter.get("/:shortCode", shortUrlRedirect);

export { urlRouter };
