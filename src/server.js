// Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


// Configurar Nunjucks(Template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Configuração do servidor
server
// Receber dados do req.body
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))     // Configurar arquivos estáticos
//Rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes',pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)  // Start servidor