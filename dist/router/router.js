"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = require("../mysql/mysql");
// Router es para definir que rutas se tienen en el proyecto
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = `
        SELECT *
        FROM heroes`;
    mysql_1.MySQL.ejecutarQuery(query, (err, heroes) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroes
            });
        }
    });
    /* res.json({
        ok: true,
        mensaje: 'Todo esta bien!'
    }); */
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    const escapedId = mysql_1.MySQL.instance.cnn.escape(id);
    const query = `SELECT * FROM heroes WHERE id = ${escapedId}`;
    mysql_1.MySQL.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroe: heroe[0]
            });
        }
    });
    /* res.json({
        ok: true,
        mensaje: 'Todo esta bien!',
        id: id
    }); */
});
exports.default = router;
