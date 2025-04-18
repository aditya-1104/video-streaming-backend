console.log(">>> loaded index.js");

import { app } from "./app.js";
import { dbConnector } from "./db/dbConnecter.js";

process.on('unhandledRejection', (err) => {
    console.error('UNHANDLED REJECTION Shutting down...', err.message);
    process.exit(1);
});

dbConnector()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App is listening on http://localhost:${process.env.PORT}`);
    });
})
.catch(() => {
    console.log(`Terminating the node executing thread!`);
    process.exit(1);
});
