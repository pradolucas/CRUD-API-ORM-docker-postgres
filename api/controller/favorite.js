const model = require('../src/api')
const { Op } = require("sequelize");

const read = (req, res) => {
  model.Favorites.findAll(
  ).then((data) => {
    res.send(data)
  }).catch((error) => {
    console.log(error)
    res.send(error)
  })
};

const read_id = (req, res) => {
  const id = parseInt(req.params.id)
  model.Favorites.findAll({ where: { 'id': id } }
  ).then((data) => {
    res.send(data)
  }).catch((error) => {
    console.log(error)
    res.send(error)
  })
};

const associatedTrails = (req, res) => {
  const id = parseInt(req.params.id)
  const favorite = model.Favorites.findAll({ where: { 'id': id }, include: model.Trails }
  ).then((data) => {
    res.send(data)
  }).catch((error) => {
    console.log(error)
    res.send(error)
  })
}

const associatedUsers = (req, res) => {
  const id = parseInt(req.params.id)
  const favorite = model.Favorites.findAll({ where: { 'id': id }, include: model.Users }
  ).then((data) => {
    res.send(data)
  }).catch((error) => {
    console.log(error)
    res.send(error)
  })
}

// .build().save() == .create()
const insert = (req, res) => {
  const dados = req.body
  model.Favorites.build(dados)
    .save()
    .then((data) => {
      res.send(true)
    }).catch((error) => {
      console.log(error)
      res.send(false)
    })
}

const update = (req, res) => {
  const dados = req.body
  model.Favorites.update(dados, {
    where: {
      id: dados.id
    }
  })
    .then((data) => {
      res.send(true)
    }).catch((error) => {
      console.log(error)
      res.send(false)
    })
}

const del = (req, res) => {
  const dados = req.body
  model.Favorites.destroy({
    where: {
      id: dados.id
    }
  })
    .then((rowDeleted) => {
      res.send(true)
    }, (err) => {
      console.log(err)
      res.send(false)
    })
}

module.exports = {
  read
  , read_id
  , insert
  , update
  , del
  , associatedTrails
  , associatedUsers
};
