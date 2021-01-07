const express = require('express');
const cors = require('cors');
const app = express();
const iVolunteerData = require('./ivolunteerData');

app.set('port', process.env.PORT || 3001); 
app.use(express.json());
app.use(cors());
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
  const correctUser = app.locals.users.find(user => user.id === parseInt(id));
  const { eventName, positionName, date } = registeredJob;
  const signedUpEvent = correctUser.upcomingJobs.find(job => job.eventName === eventName)

  if (correctUser && registeredJob.id && eventName && positionName && date && !signedUpEvent) {
    correctUser.upcomingJobs.push(registeredJob);
    response.status(200).json(`The ${correctUser.name} has registered for ${registeredJob.positionName}`)
  } else {
    response.status(200).json('Please make sure the user id and all position info are correct')
  } 
})

app.patch('/events/:id', (request, response) => {
  const { id } = request.params;
  const eventUpdate = request.body;

  const correctEvent = app.locals.events.find(event => event.id === id);
  const correctPosting = correctEvent.openJobs.find(job => job.id === eventUpdate.jobId);

  if (correctEvent && correctPosting) {
    const updatedCorrectOpenJobs = correctEvent.openJobs.map( openJob => {
      if (openJob.id === eventUpdate.jobId && correctPosting.numberOfSpots > 0) {
        return {...openJob, numberOfSpots: correctPosting.numberOfSpots - 1}
      } else {
        return openJob
      }
    })
    const updatedEvents = app.locals.events.map(event => event.id === id ? {...event, openJobs: updatedCorrectOpenJobs} : event);
    app.locals.events = updatedEvents;

    response.status(200).json(`The ${correctPosting.name} in ${correctEvent.name} has been updated`);
  } else {
    response.status(200).json('Please make sure the event or posting id is correct')
  }
})