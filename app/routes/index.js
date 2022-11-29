const templates = ['fotos', 'local', 'premiacao', 'regulamento', 'tabela', 'artilharia', 'goleiro']

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get(new RegExp(`/(${templates.join('|')})`), (req, res) => {
    res.render(req.params[0], {
      path: req.path
    })
  })
}
