const router = require('express').Router()
const gitarController = require('../controller/gitar')

router.post('/form', (req, res)=> {
    gitarController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/alldata', (req, res)=> {
    gitarController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/getbyid/:id', (req, res)=> {
    gitarController.showbyID(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.put('/ubah/:id', (req, res)=> {
    gitarController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.delete('/hapus/:id', (req, res)=> {
    gitarController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  module.exports = router