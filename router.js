const express = require('express')
const ControlPedido = require('./private/src/controllers/controller')

const router = express.Router();
router.get('/pedido',ControlPedido.AdicionarPedido)