"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 8081;
app_1.default.listen(PORT, () => {
    console.info(`Express server listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map