const { request, response } = require('express');
const express = require('express');
const app = express();
const iVolunteerData = require('./ivolunteerData')

app.set('port', process.env.PORT || 3001); 
app.use(express.json());
app.locals.title = 'iVolunteer API';
app.locals.users = iVolunteerData.users;
app.locals.events = iVolunteerData.events;

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})

app.get('/users/:id', (request, response) => {
  const { id } = request.params;
  const user = app.locals.users.find(user => user.id === parseInt(id))
  response.json(user);
})

app.get('/events', (request, response) => {
  response.json(app.locals.events);
})

app.get('/events/:id', (request, response) => {
  const { id } = request.params;
  const event = app.locals.events.find(event => event.id === id)

  response.json(event);
})

app.post('/users/:id', (request, response) => {
  const { id } = request.params;
  const registeredJob = request.body;
  console.log(id)
  const correctUser = app.locals.users.find(user => user.id === parseInt(id));
  
  if(correctUser) {
    correctUser.upcomingJobs.push(registeredJob);
    response.status(200).json(`The ${correctUser.name} has registered for ${registeredJob.positionName}`)
  } else {
    response.status(200).json('Please make sure the user id is correct')
  } 
})