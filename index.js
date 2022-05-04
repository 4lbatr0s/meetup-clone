"use strict";

const app = require('./app')


//app.listen requires a callback function because it needs to request a permission to use the port 3000.
app.listen(3000, () => {
  console.log(`Server listening at port  ${3000}`);
});
