const express = require('express');
const app = express();
const port = 3000;

const Rooms = [
  {id : 1, name : "01/01", detail : "...text....", Image : "https://www.uthongmansion.com/uploads/1/0/1/5/10151411/room-with-furniture-air-conditiner-uthongmansion-monthly-rental-prakasa-samutprakarn-robinson-samutprakarn_orig.jpg"},
  {id : 2, name : "01/02", detail : "...text....", Image : "https://www.uthongmansion.com/uploads/1/0/1/5/10151411/room-with-furniture-air-conditiner-uthongmansion-monthly-rental-prakasa-samutprakarn-robinson-samutprakarn_orig.jpg"},
  {id : 3, name : "01/03", detail : "...text....", Image : "https://www.uthongmansion.com/uploads/1/0/1/5/10151411/room-with-furniture-air-conditiner-uthongmansion-monthly-rental-prakasa-samutprakarn-robinson-samutprakarn_orig.jpg"},
  {id : 4, name : "01/04", detail : "...text....", Image : "https://www.uthongmansion.com/uploads/1/0/1/5/10151411/room-with-furniture-air-conditiner-uthongmansion-monthly-rental-prakasa-samutprakarn-robinson-samutprakarn_orig.jpg"},
  {id : 5, name : "01/05", detail : "...text....", Image : "https://www.uthongmansion.com/uploads/1/0/1/5/10151411/room-with-furniture-air-conditiner-uthongmansion-monthly-rental-prakasa-samutprakarn-robinson-samutprakarn_orig.jpg"},
  {id : 6, name : "01/06", detail : "...text....", Image : "https://www.uthongmansion.com/uploads/1/0/1/5/10151411/room-with-furniture-air-conditiner-uthongmansion-monthly-rental-prakasa-samutprakarn-robinson-samutprakarn_orig.jpg"},
  {id : 7, name : "01/07", detail : "...text....", Image : "https://www.uthongmansion.com/uploads/1/0/1/5/10151411/room-with-furniture-air-conditiner-uthongmansion-monthly-rental-prakasa-samutprakarn-robinson-samutprakarn_orig.jpg"},
  {id : 8, name : "01/08", detail : "...text....", Image : "https://www.uthongmansion.com/uploads/1/0/1/5/10151411/room-with-furniture-air-conditiner-uthongmansion-monthly-rental-prakasa-samutprakarn-robinson-samutprakarn_orig.jpg"},
  {id : 9, name : "01/09", detail : "...text....", Image : "https://www.uthongmansion.com/uploads/1/0/1/5/10151411/room-with-furniture-air-conditiner-uthongmansion-monthly-rental-prakasa-samutprakarn-robinson-samutprakarn_orig.jpg"},
  {id : 10, name : "01/10", detail : "...text....", Image : "https://www.uthongmansion.com/uploads/1/0/1/5/10151411/room-with-furniture-air-conditiner-uthongmansion-monthly-rental-prakasa-samutprakarn-robinson-samutprakarn_orig.jpg"}
]

app.get('/Rooms', (req, res) => {
  res.json(Rooms);
})

app.get('/Rooms/:id', (req, res) => {
  const Roomid = parseInt(req.params,id)
  const Room = Rooms.find(r => r.id === Roomid)

  if (Room){
    res.json(Room)
  }else{
    res.status(404).send("ไม่พบห้องที่ระบุ")
  }
})

// POST - เพิ่มห้องใหม่
app.post('/Rooms', (req, res) => {
  const newId = Math.max(...Rooms.map(r => r.id)) + 1
  const newRoom = { id: newId, ...req.body }
  Rooms.push(newRoom)
  res.status(201).json(newRoom)
})

// PUT - แก้ไขห้อง
app.put('/Rooms/:id', (req, res) => {
  const Roomid = parseInt(req.params.id)
  const index = Rooms.findIndex(r => r.id === Roomid)
  
  if (index !== -1) {
    Rooms[index] = { id: Roomid, ...req.body }
    res.json(Rooms[index])
  } else {
    res.status(404).send("ไม่พบห้องที่ระบุ")
  }
})

// DELETE - ลบห้อง
app.delete('/Rooms/:id', (req, res) => {
  const Roomid = parseInt(req.params.id)
  const index = Rooms.findIndex(r => r.id === Roomid)
  
  if (index !== -1) {
    const deletedRoom = Rooms.splice(index, 1)[0]
    res.json(deletedRoom)
  } else {
    res.status(404).send("ไม่พบห้องที่ระบุ")
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})