const express = require('express')
const ControlPedido = require('./private/src/controllers/controller')
const router = express.Router();

router.get('/render_pedido',ControlPedido.render_pedido)
router.get('/',ControlPedido.home);
module.exports = router;
