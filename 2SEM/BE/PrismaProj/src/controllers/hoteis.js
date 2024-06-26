const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    console.log(data);

    const hoteis = await prisma.hoteis.create({
        data
    });

    res.status(201).json(hoteis).end();
}

const read = async (req, res) => {
    const hoteis = await prisma.hoteis.findMany({
        include : {
            destinos : true,
        }
    });

    res.status(200).json(hoteis).end();
}

const readById = async (req, res) => {
    const hoteis = await prisma.hoteis.findUnique({
        where : {
            id : Number(req.params.id)
        },
        include : {
            destinos: {
                select : {
                    nome: true
                }
            }
        }
    });

    res.status(200).json(hoteis).end();
}

const readByName = async (req, res) => {
    const { nome } = req.body;

    const hoteis = await prisma.hoteis.findMany({
        where : {
            nome : {
                contains : nome
            }
        }
    });

    res.status(200).json(hoteis).end();
}

const remove = async (req, res) => {
    const hoteis = await prisma.hoteis.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(hoteis).end();
}

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const hoteis = await prisma.hoteis.update({
        where: {
            id
        },
        data
    });

    res.status(200).json(hoteis).end();
}

module.exports = {
    create,
    read,
    remove,
    update,
    readById,
    readByName,
}