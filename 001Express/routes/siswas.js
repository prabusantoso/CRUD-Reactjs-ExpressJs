var express = require('express');
var router = express.Router();
var models = require('../models')
const { checkAuth } = require('../middlewares/auth')
/* GET users listing. */

router.get('/', function(req, res, next) {
  models.Siswa.findAll().then(siswas => {
    res.status(200).json({message: "Read Data Siswa", data: siswas})
  }).catch(err => {
    console.log(err)
    res.status(500).json({message: "Terjadi Kesalahan"})
  })
});

router.get('/:id', function(req, res, next) {
  const siswaId = req.params.id
  models.Siswa.findOne({where: {id: siswaId}}).then(siswas => {
    res.status(200).json({message: "Read Data Siswa", data: siswas})
  }).catch(err => {
    console.log(err)
    res.status(500).json({message: "Terjadi Kesalahan"})
  })
});


router.delete('/:id', (req, res) => {
  const siswaId = req.params.id
  models.Siswa.findOne({where: {id: siswaId}}).then(siswa => {
    return siswa.destroy()
  }).then(siswa => {
    res.status(200).json({message: "Delete Data Siswa"})
  }).catch(err => {
    res.status(500).json({message: "Terjadi Kesalahan"})
  })
})

//create new data siswa
router.post('/', (req, res) =>{
  const { nama, alamat, kelas } = req.body
  models.Siswa.create({nama, alamat, kelas }).then(siswa => {
    res.status(201).json({message: "Success Simpan Data Siswa", data: siswa})
  }).catch(err => {
    res.status(500).json({message: "Invalid Token"})
  })
})

//update Data siswa
router.put('/:id', (req, res) => {
  const siswaId = req.params.id
  const { nama, alamat, kelas } = req.body
  models.Siswa.findOne({where: {id: siswaId}}).then(siswa => {
    return siswa.update({
      nama,
      alamat,
      kelas
    }).then(updateSiswa => {
      res.status(201).json({message: "Update Data Siswa", data:updateSiswa})
    }).catch(err => {
      console.log(err)
      res.status(500).json({message: "Terjadi Kesalahan"})
    })
  })
})

module.exports = router;