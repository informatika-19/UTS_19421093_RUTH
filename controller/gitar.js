const gitarModel = require ('../model/gitar')
const objectid = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    gitarModel.create(data)
    .then(() => resolve ({
        status : true,
        pesan: 'berhasil input pembelian'
    })).catch (() => reject({
        status : false,
        pesan: 'gagal input pembelian'
    }))

})

exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    gitarModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : ' berhasil memperbaharui ',
      })).catch(()=> reject ({
      status : false,
      pesan : 'gagal memperbaharui',
    }))
  })

  exports.showAllData = () =>
    new Promise((resolve, reject)=>{
    gitarModel.find()
      .then (result =>{
        resolve({
          status : true,
          pesan : 'berhasil menampilkan',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan',
        data : []
      }))
    })  

exports.showbyID = (id) =>
    new Promise((resolve, reject) => {
    gitarModel.findOne({
        _id: objectid(id)
      }).then (result =>{
        resolve({
          status : true,
          pesan : 'berhasil menampilkan',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan',
        data : null
      }))
    })

exports.delete = (id) =>
    new Promise((resolve, reject)=>{
      gitarModel.deleteOne({
        _id: objectid(id)
      }).then (() => resolve({
        status : true,
        pesan : 'berhasil menghapus',
        })).catch(()=> reject ({
        status : false,
        pesan : 'gagal menghapus',
        }))
    })