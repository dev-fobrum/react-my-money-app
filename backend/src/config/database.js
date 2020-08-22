const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://mymoneyapp:minhasenhasecreta@127.0.0.1:27017/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o permitido"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o permitido"
mongoose.Error.messages.Number.enum = "O '{VALUE}' informado não é válido para enum"