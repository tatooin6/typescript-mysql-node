"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Router es para definir que rutas se tienen en el proyecto
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!'
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!',
        id: id
    });
});
exports.default = router;
