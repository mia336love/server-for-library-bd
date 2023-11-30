const pg = require('pg')

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'library_charo',
  password: '1234',
  port: 8000,
});

async function getAllAu() {
  const client = await pool.connect();
  try {
    const query = {
      text: `SELECT * FROM Author`,
    }

    return await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function getAllRdrs() {
  const client = await pool.connect();
  try {
    const query = {
      text: `SELECT * FROM Readers`,
    }

    return await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function getAllBks() {
  const client = await pool.connect();
  try {
    const query = {
      text: `SELECT * FROM Books`,
    }

    return await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function getAllGenres() {
  const client = await pool.connect();
  try {
    const query = {
      text: `SELECT * FROM Genres`,
    }

    return await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function addNewAuthor(surname, name, lastname, birthdate) {
  const client = await pool.connect();
  try {
    const query = {
      text: `CALL fill_author_table($1, $2, $3, $4) `,
      values: [surname, name, lastname, birthdate]
    }

    await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function addNewBook(bName, count, genre, aSurname, aName, aLastname) {
  const client = await pool.connect();
  try {
    const query = {
      text: `CALL add_book($1, $2, $3, $4, $5, $6) `,
      values: [bName, count, genre, aSurname, aName, aLastname]
    }

    await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function addNewGenre(name) {
  const client = await pool.connect();
  try {
    const query = {
      text: `CALL fill_genres_table($1)`,
      values: [name]
    }

    await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function addGenreBook(bName, gName) {
  const client = await pool.connect();
  try {
    const query = {
      text: `CALL fill_genresOfBook_table($1, $2)`,
      values: [bName, gName]
    }

    await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function addNewReader(rSurname, rName, rLastname, rPassport, rPhone) {
  const client = await pool.connect();
  try {
    const query = {
      text: `CALL fill_reader_table($1, $2, $3, $4, $5)`,
      values: [rSurname, rName, rLastname, rPassport, rPhone]
    }

    await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function giveBook(rName, rSurname, rLastName, bName) {
  const client = await pool.connect();
  try {
    const query = {
      text: `CALL get_book($1, $2, $3, $4)`,
      values: [rName, rSurname, rLastName, bName]
    }

    await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function returnBook(rName, rSurname, rLastName, bName) {
  const client = await pool.connect();
  try {
    const query = {
      text: `CALL return_book($1, $2, $3, $4)`,
      values: [rName, rSurname, rLastName, bName]
    }

    await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}

async function getMB() {
  const client = await pool.connect();
  try {
    const query = {
      text: `select b.title, r.r_surname, r.r_name, r.r_last_name, mb.date_out, mb.date_in from moving_books mb join books b on b.id_book = mb.id_book join readers r on r.id_reader = mb.id_reader`,
    }

    return await client.query(query)
  } catch (e) {
    throw e
  } finally {
    client.release()
  }
}


module.exports = {
  getAllAu,
  getAllRdrs,
  getAllBks,
  getAllGenres,
  addNewAuthor,
  addNewBook,
  addNewGenre,
  addGenreBook,
  addNewReader,
  giveBook,
  returnBook,
  getMB,
}