const router = require('express').Router();
const User = require('../models/User')
// Memanggil User
router.get("/", (req,res) => {
const {page, perpage,sort} = req.query;
User.paginate({}, { page: parseInt(page, 10), limit: parseInt(perpage, 10) , sort:{nama: parseInt(sort)}})
.then(result => res.send(result.docs))

})
// Menambah User
router.post("/", (req,res) => {
User.create(req.body)
.then(data => res.send(data))
})
//Mengedit Data
router.get("/edit/:id", (req,res) => {
User.findById({_id : req.params.id})
.then(data => res.send(data))
})
router.put("/edit/:id", (req,res) => {
User.findByIdAndUpdate({_id : req.params.id}, { $set:
{
nama : req.body.nama,
email : req.body.email,
nomor : req.body.nomor
}})
.then(data => {
User.find({})
.then(data => res.send(data))
})
})
// Menghapus User
router.delete("/edit/:id", (req,res) => {
const id = req.params.id
User.findByIdAndRemove(id)
.then(data => res.send("Succesfully"))
})
module.exports = router;