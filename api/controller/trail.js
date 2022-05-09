const model = require('../src/api')
const { Op } = require("sequelize");

const read = (req, res) => {
  if (req.query.name !== undefined) {
    const name = req.query.name
    model.Trails.findAll({ where: { nome: { [Op.like]: `%${name}%` } } }
    ).then((data) => {
      res.send(data)
    }).catch((error) => {
      console.log(error)
      res.send(error)
    })
  }
  else {
    model.Trails.findAll(
    ).then((data) => {
      res.send(data)
    }).catch((error) => {
      console.log(error)
      res.send(error)
    })
  }
};

const read_id = (req, res) => {
  const id = parseInt(req.params.id)
  model.Trails.findAll({ where: { 'id': id } }
  ).then((data) => {
    res.send(data)
  }).catch((error) => {
    console.log(error)
    res.send(error)
  })
};

const associatedVideos = (req, res) => {
  const id = parseInt(req.params.id)
  const trail = model.Trails.findAll({ where: { 'id': id }, include: model.Videos }
  ).then((data) => {
    res.send(data)
  }).catch((error) => {
    console.log(error)
    res.send(error)
  })
}

const associatedReports = (req, res) => {
  const id = parseInt(req.params.id)
  const trail = model.Trails.findAll({ where: { 'id': id }, include: model.Reports }
  ).then((data) => {
    res.send(data)
  }).catch((error) => {
    console.log(error)
    res.send(error)
  })
}

const associatedComments = (req, res) => {
  const id = parseInt(req.params.id)
  const trails = model.Trails.findAll({ where: { 'id': id }, include: model.Comments }
  ).then((data) => {
    res.send(data)
  }).catch((error) => {
    console.log(error)
    res.send(error)
  })
}

const associatedUser = (req, res) => {
  const id = parseInt(req.params.id)
  const trail = model.Trails.findAll({ where: { 'id': id }, include: model.Users }
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
  model.Trails.build(dados)
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
  model.Trails.update(dados, {
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
  model.Trails.destroy({
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
  , associatedVideos
  , associatedReports
  , associatedComments
  , associatedUser
};
