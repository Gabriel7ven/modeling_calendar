import { Pool } from 'pg'
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',//'postgres',
  password: 'Mcz163285!bELEM',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM cantores ORDER BY nome DESC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// Rota para API JSON (mantém a original)
const getUsersAPI = (request, response) => {
  pool.query('SELECT * FROM cantores ORDER BY nome DESC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// Rota para página HTML
const getUsersPage = (request, response) => {
  // Função callback que será executada quando a consulta terminar
  const handleQueryResult = (erroConsulta, resultadoConsulta) => {
    if (erroConsulta) {
      console.error('Erro:', erroConsulta);
      return response.status(500).render('error', { 
        message: 'Erro no banco de dados' 
      });
    }
    
    // 'resultadoConsulta' contém os dados da consulta SQL
    const dadosCantores = resultadoConsulta.rows;
    const totalCantores = resultadoConsulta.rowCount;
    
    response.render('cantores.ejs', {
      titulo: 'Lista de Cantores',
      cantores: dadosCantores,
      quantidade: totalCantores
    });
  };
  
  // Executa a consulta e passa a função callback
  pool.query('SELECT * FROM cantores ORDER BY nome DESC', handleQueryResult);
};


const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  console.log(request.body);
  const { name, church } = request.body
  
  pool.query('INSERT INTO cantores (nome, igreja) VALUES ($1, $2)', [name, church], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User ${name} added with sucess!`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

export  {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUsersAPI,
  getUsersPage
}