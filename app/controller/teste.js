const meuTeste = (httpRequest) => {
    const { nome } = httpRequest.body
    console.log(nome)
    httpRequest.res.json(httpRequest.body)
}

module.exports = { meuTeste }
