//Dados

const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "2199999999",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject:"Química",
        cost: "20",
        weekday: [0],
        time_from: [],
        time_to: []
    },

    {
        name: "Daniela Rodrigues",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "2199999999",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject:"Química",
        cost: "20",
        weekday: [2],
        time_from: [],
        time_to: []
    },
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades da app

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html",{proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query


    const isNotEmpty = Object.keys(data).length > 0
    //se tiver data (dados), adicionar
    if (isNotEmpty) {
        //adicionar data à lista proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    
    //se não tiver dados, mostrar a página

    return res.render("give-classes.html", {subjects, weekdays})
}

//servidor
const express = require('express')
const server = express()


//importando o nunjucks
const nunjucks = require('nunjucks')
//configuração do nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache:true,
})

//Início e configuração do servidor
server
//configurações dos arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

//start do servidor
.listen(5500)