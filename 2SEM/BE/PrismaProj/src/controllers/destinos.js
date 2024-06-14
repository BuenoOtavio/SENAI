const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    console.log(data);

    const destinos = await prisma.destinos.create({
        data
    });

    res.status(201).json(destinos).end();
}

const read = async (req, res) => {
    const destinos = await prisma.destinos.findMany({
        include : {
            pontosTuristicos : true,
            hoteis : true
        }
    });

    res.status(200).json(destinos).end();
}

const readById = async (req, res) => {
    const destinos = await prisma.destinos.findUnique({
        where : {
            id : Number(req.params.id)
        },
        include : {
            pontosTuristicos: {
                select : {
                    nome: true
                }
            },
            hoteis : {
                select : {
                    nome: true
                } 
            }
        }
    });

    res.status(200).json(destinos).end();
}

const readByName = async (req, res) => {
    const { nome } = req.body;

    const destinos = await prisma.destinos.findMany({
        where : {
            nome : {
                contains : nome
            }
        }
    });

    res.status(200).json(destinos).end();
}

const remove = async (req, res) => {
    const destinos = await prisma.destinos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(destinos).end();
}

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    console.log("Funcionando kk")

    const destinos = await prisma.destinos.update({
        where: {
            id
        },
        data
    });

    res.status(200).json(destinos).end();
}

module.exports = {
    create,
    read,
    remove,
    update,
    readById,
    readByName,
}