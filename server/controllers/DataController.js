const db = require('../setting/db')

exports.getAll = (req, res) => {
    const sql = 'SELECT * FROM books'

    db.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(result)
        }
    })
}

exports.getByID = (req, res) => {
    const sql = `SELECT * FROM books WHERE id = ${req.params.id}`

    db.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(result.length ? result[0] : null)
        }
    })
}

exports.add = (req, res) => {
    console.log(req)
    const sql = `INSERT INTO books (title, author, publication_year, genre, visible)
    VALUES ('${req.body.title}', '${req.body.author}', '${req.body.publication_year}', '${req.body.genre}', ${req.body.visible});`

    db.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send()
        }
    })
}

exports.update = (req, res) => {
    const sql = `UPDATE books
    SET title = '${req.body.title}', author = '${req.body.author}', publication_year = '${req.body.publication_year}', genre = '${req.body.genre}', visible = ${req.body.visible}
    WHERE id = ${req.body.id};`

    db.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send()
        }
    })
}

exports.delete = (req, res) => {
    const sql = `DELETE FROM books WHERE id = ${req.params.id}`

    db.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send()
        }
    })
}

exports.visible = (req, res) => {
    const sql = `UPDATE books
    SET visible = ${req.body.visible}
    WHERE id = ${req.body.id};`

    db.query(sql, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send()
        }
    })
}