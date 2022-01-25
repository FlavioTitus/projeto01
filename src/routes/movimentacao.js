const { Router } = require('express')

const router = Router()

const movimentacoes = [
    {"id": 1,"tipo":"entrada","valor": 1000,"data":new Date()},
    {"id": 2,"tipo":"saida","valor": 500,"data":new Date()},
    {"id": 3,"tipo":"entrada","valor": 100,"data":new Date()},
    {"id": 4,"tipo":"saida","valor": 800,"data":new Date()} ]


router.get('/', (req, res) => {
    res
        .status(200)
        .json(movimentacoes)
})


router.post('/',(req, res) => {
    const {id, tipo, valor} = req.body

    const movimentacao = res.send({
        id,
        tipo,
        valor,
        data : new Date()
    })

    movimentacoes.push(movimentacao)

    res
    .status(201)
    .json(movimentacoes)
})


router.put('/:id',(req, res) => {
    const body = req.query
	res
		.status(202)
		.json({ status: "atualizado",  body});

})


router.delete('/:id', (req, res) => {
    res
        .status(203)
        .json({
            status: 'mov deleted',
        });
});



module.exports = router