import { app } from "./app";

import "./database";

import "./shared/container";

app.listen(4321, () => {
  console.log("Server is Running");
});
