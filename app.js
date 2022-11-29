const app = require('./config/server');
const routes = require('./app/routes');

routes(app);

app.use((req, res, next) => {
  res.status(404)
  res.render('error', { message: 'Página não encontrada!' });
  next()
});

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500)
  res.render('error', { message: 'Erro!' });
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Iniciando a liga calango de futebol localhost:3000');

})
