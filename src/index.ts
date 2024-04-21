import { configurations } from "./config/index";

import server from "./server";
import Database from "./database/core/index";

const PORT = configurations.application.port || 5000;

(async function () {
    try {
        const db = new Database();

        db.connect();

        server.listen(PORT, () => {
            console.log(`Application run on the ${PORT}`);
        });
    } catch (e: any) {
        throw new Error(e);
    }
})();   
