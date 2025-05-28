<<<<<<< HEAD
import prisma from '../database/client.js'

const controller = {}   // Objeto vazio

controller.create = async function (req, res) {
  try {
    // Dentro do parâmetro req (requisição), haverá
    // um objeto chamado "body" que contém as informações
    // que queremos armazenar do BD. Então, invocamos o
    // Prisma para fazer a interface com o BD, repassando
    // o req.body
    await prisma.car.create({ data: req.body })

    // Se der tudo certo, enviamos como resposta o 
    // código HTTP apropriado, no caso
    // HTTP 201: Created
    res.status(201).end()
  }
  catch(error) {
    // Se algo de errado acontecer, cairemos aqui
    // Nesse caso, vamos exibir o erro no console e enviar
    // o código HTTP correspondente a erro do servidor
    // HTTP 500: Internal Server Error
    console.error(error)
    res.status(500).end()
  }
}

controller.retrieveAll = async function (req, res) {
  try {
    // Recupera todos os registros de carros do banco de dados,
    // ordenados pelo campo "model"
    const result = await prisma.car.findMany({
      orderBy: [ { model: 'asc' } ]
    })

    // HTTP 200: OK (implícito)
    res.send(result)
  }
  catch(error) {
    // Se algo de errado acontecer, cairemos aqui
    // Nesse caso, vamos exibir o erro no console e enviar
    // o código HTTP correspondente a erro do servidor
    // HTTP 500: Internal Server Error
    console.error(error)
    res.status(500).end()
  }
}

controller.retrieveOne = async function (req, res) {
  try {
    // Busca no banco de dados apenas o carro indicado
    // pelo parâmetro "id"
    const result = await prisma.car.findUnique({
      where: { id: Number(req.params.id) }
    })

    // Encontrou ~> HTTP 200: OK (implícito)
    if(result) res.send(result)

    // Não encontrou ~> HTTP 404: Not found
    else res.status(404).end()
  }
  catch(error) {
    // Se algo de errado acontecer, cairemos aqui
    // Nesse caso, vamos exibir o erro no console e enviar
    // o código HTTP correspondente a erro do servidor
    // HTTP 500: Internal Server Error
    console.error(error)
    res.status(500).end()
  }
}

controller.update = async function(req, res) {
  try {
    // Busca o registro no banco de dados pelo seu id
    // e atualiza as informações com o conteúdo de req.body
    await prisma.car.update({
      where: { id: Number(req.params.id) },
      data: req.body
    })

    // Encontrou e atualizou ~> HTTP 204: No content
    res.status(204).end()
  }
  catch(error) {
    console.error(error)
    
    // Não encontrou e não atualizou ~> HTTP 404: Not found
    if(error?.code === 'P2025') res.status(404).end()
    // Outros tipos de erro ~> HTTP 500: Internal server error
    else res.status(500).end()
  }
}

controller.delete = async function(req, res) {
  try {
    await prisma.car.delete({
      where: { id: Number(req.params.id) }
    })

    // Encontrou e excluiu ~> HTTP 204: No content
    res.status(204).end()
  }
  catch(error) {
    console.error(error)
    
    // Não encontrou e não excluiu ~> HTTP 404: Not found
    if(error?.code === 'P2025') res.status(404).end()
    // Outros tipos de erro ~> HTTP 500: Internal server error
    else res.status(500).end()
  }
}

export default controller
=======
import prisma from '../database/client.js'

const controller = {}   // Objeto vazio

controller.create = async function (req, res) {
  try {
    // Dentro do parâmetro req (requisição), haverá
    // um objeto chamado "body" que contém as informações
    // que queremos armazenar do BD. Então, invocamos o
    // Prisma para fazer a interface com o BD, repassando
    // o req.body
    await prisma.car.create({ data: req.body })

    // Se der tudo certo, enviamos como resposta o 
    // código HTTP apropriado, no caso
    // HTTP 201: Created
    res.status(201).end()
  }
  catch(error) {
    // Se algo de errado acontecer, cairemos aqui
    // Nesse caso, vamos exibir o erro no console e enviar
    // o código HTTP correspondente a erro do servidor
    // HTTP 500: Internal Server Error
    console.error(error)
    res.status(500).end()
  }
}

controller.retrieveAll = async function (req, res) {
  try {
    // Recupera todos os registros de carros do banco de dados,
    // ordenados pelo campo "model"
    const result = await prisma.car.findMany({
      orderBy: [ { model: 'asc' } ]
    })

    // HTTP 200: OK (implícito)
    res.send(result)
  }
  catch(error) {
    // Se algo de errado acontecer, cairemos aqui
    // Nesse caso, vamos exibir o erro no console e enviar
    // o código HTTP correspondente a erro do servidor
    // HTTP 500: Internal Server Error
    console.error(error)
    res.status(500).end()
  }
}

controller.retrieveOne = async function (req, res) {
  try {
    // Busca no banco de dados apenas o carro indicado
    // pelo parâmetro "id"
    const result = await prisma.car.findUnique({
      where: { id: Number(req.params.id) }
    })

    // Encontrou ~> HTTP 200: OK (implícito)
    if(result) res.send(result)

    // Não encontrou ~> HTTP 404: Not found
    else res.status(404).end()
  }
  catch(error) {
    // Se algo de errado acontecer, cairemos aqui
    // Nesse caso, vamos exibir o erro no console e enviar
    // o código HTTP correspondente a erro do servidor
    // HTTP 500: Internal Server Error
    console.error(error)
    res.status(500).end()
  }
}

controller.update = async function(req, res) {
  try {
    // Busca o registro no banco de dados pelo seu id
    // e atualiza as informações com o conteúdo de req.body
    await prisma.car.update({
      where: { id: Number(req.params.id) },
      data: req.body
    })

    // Encontrou e atualizou ~> HTTP 204: No content
    res.status(204).end()
  }
  catch(error) {
    console.error(error)
    
    // Não encontrou e não atualizou ~> HTTP 404: Not found
    if(error?.code === 'P2025') res.status(404).end()
    // Outros tipos de erro ~> HTTP 500: Internal server error
    else res.status(500).end()
  }
}

controller.delete = async function(req, res) {
  try {
    await prisma.car.delete({
      where: { id: Number(req.params.id) }
    })

    // Encontrou e excluiu ~> HTTP 204: No content
    res.status(204).end()
  }
  catch(error) {
    console.error(error)
    
    // Não encontrou e não excluiu ~> HTTP 404: Not found
    if(error?.code === 'P2025') res.status(404).end()
    // Outros tipos de erro ~> HTTP 500: Internal server error
    else res.status(500).end()
  }
}

export default controller
>>>>>>> 5a9f04e931d3f2f9a9b6cbc4b079c3d06102a9a3
