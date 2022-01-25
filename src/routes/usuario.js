
const { Router } = require('express')

const router = Router()

const usuarios = [
    {"id": 1,"nome":"juca"},
    {"id": 2,"nome":"josefa"},
    {"id": 3,"nome":"antonio"},
    {"id": 4,"nome":"maria"} ]


router.get('/',(req, res) => {
    res
    .status(200)
    .json(usuarios)
})

router.post('/',(req, res) => {
    const {id, nome} = req.body

    const usuario = res.send({
        id,
        nome
    })

    usuarios.push(usuario)

    res
    .status(201)
    .json(usuarios)
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
            status: 'user deleted',
        });
});



module.exports = router
