//Dependências - Frameworks
const express = require("express");
const con = require("../connect/connect").con;
const cors = require("cors");


const create = (req, res) => {
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = Number (req.body.valor);
    let query = `INSERT INTO item(nome, descricao, valor) VALUES`;
    query += `('${nome}', '${descricao}', '${valor}');`;
    con.query(query,(err, result)=>{
        if(err)
            res.status(400).json(err + "- Id já existente!").end();
        else{
            const novo = req.body;
            novo.id = result.insertId;
            res.status(201).json(novo).end();
        }
    });
}


const read = (req, res) => {
    con.query("SELECT * FROM item ORDER BY id",(err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}


const update = (req, res) => {
    let id = req.params.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = Number(req.body.valor);
    let query = `UPDATE item SET nome = '${nome}', descricao = '${descricao}', valor = ${valor} WHERE id = ${id}`;
    con.query(query,(err, result)=>{
        if(err){
            res.status(400).json(err).end();
             console.log(err);
            }
        else{
            if(result.affectedRows > 0)
                res.status(202).json(result).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}


const del = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM item WHERE id = ${id}`,(err, result)=>{
        if(err)
            res.json(err);
        else{
            if(result.affectedRows > 0)
                res.status(204).json("Registro " + req.params.id + "").end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
};