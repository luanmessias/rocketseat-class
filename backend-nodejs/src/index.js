const express = require('express');
const cors = require('cors')
const { uuid, isUuid } = require('uuidv4')

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Metodo: HTTP
 * 
 * GET: Get informations from back-end
 * POST: Create an information on back-end
 * PUT/PATCH: Change an information on back-end
 * DELETE:  Dele an information on back-end
 */

 /**
  * Kind of parameters:
  * 
  * query params: filters and pagination
  * Route Params: Indentfy resources (update or delete)
  * Request Body: content when we will create or update a resource (json)
  */

  /**
   * Middleware: 
   * Interceptor of requisitions that can totaly intercep one reruisition
   * or can change the requisition data
   */
 

const projects = [];

function logRequests(request, response, next){
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}]${url}`

  console.log(logLabel)

  return next();

}

function validateProjectId(request, response, next){
  const {id} = request.params;

  if(!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID.' })
  }

  return next()
}

app.use(logRequests)
app.use('/projects/:id', validateProjectId)
  
app.get('/projects', (request, response) => {
  const {title} = request.query

  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return response.json(results)
})

app.post('/projects', (request, response) => {
  const {title,owner} = request.body

  const project = {id: uuid(), title, owner}

  projects.push(project)

  return response.json(project)
})

app.put('/projects/:id', (request, response) => {
  const {id} = request.params;
  const {title,owner} = request.body

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0) {
    return response.status(400).json({ error:'project not found' })
  }

  const project = {
    id,
    title,
    owner
  }

  projects[projectIndex] = project
  
  return response.json(project)
})

app.delete('/projects/:id', (request, response) => {
  const {id} = request.params

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0) {
    return response.status(400).json({ error:'project not found' })
  }

  projects.splice(projectIndex, 1)

  return response.status(204).send().json({})
})

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});