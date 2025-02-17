const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="post">
    <input type="submit" name = "position" value="문과생">
    <input type="submit" name="position" value="이과생">
  </form>
  `);
});

app.post('/', (req, res) => {
  console.log(req.body); //req.body에 name, value를 객체형식으로 넣는다.
});

app.listen(3000, () => {
  console.log('3000포트에서 서버 시작');
});