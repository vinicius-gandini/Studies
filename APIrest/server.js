import app from "./app";

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`escutando na porta ${port}`);
  console.log(`CTRL + Cliqye em http://localhost:${port}`);
});
