const { request, response } = require('express');
const express = require('express');
const app = express();
const iVolunteerData = require('./ivolunteerData')

app.set('port', process.env.PORT || 3001); 
app.locals.title = 'iVolunteer API';

app.locals.users = iVolunteerData.users

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})

app.get('/users/:id', (request, response) => {
  const { id } = request.params;
  const user = app.locals.users.find(user => user.id === parseInt(id))
  response.json(user);
})