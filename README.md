# **Favo-API**

### [Favo]()
### [Favo-Repo](https://github.com/Elle624/ivolunteer)
### [Favo-API](https://github.com/Elle624/ivolunteer-api)

### [Link To Our Project Description](https://frontend.turing.io/projects/module-3/stretch.html)

---

## **Purpose**

To be used with the Favo project

---

## **Set UP**

---

Clone down this repo
CD into this repo

Run npm install

Run nodemon server.js to start the server

## **Endpoints**

---

## GET user

URL:
```bash 
https://locahost:3001/users/:id
```

Sample response (200):

```JavaScript

[
    {
      id: 1,
      name: "Wheezy Joe",
      rating: 4.4,
      profilePicture: 'https://randomuser.me/api/portraits/men/52.jpg',
      volunteeredHours: 10.2,
      upcomingJobs: [
        {
          id: '1-posting-23',
          eventId: 'event-10',
          eventName: 'Help a local animal shelter',
          positionName: 'dog walkers',
          date: '2021/03/01'
        }
      ]
    }
  ]

```

### GET all events

URL:
```bash
https://locahost:3001/events
```

Sample response (200):

```JavaScript

[
    {
      id: 'event-1',
      date: '2021/02/01',
      name: 'Somthing',
      organization: 'Something, LLC.',
      location: '123 Something Dr., Denver, CO, 80204',
      description: 'Somthing about the event.',
      duration: 10,
      category: 'Sports',
      openJobs: [
        {
          id: 'posting-1',
          name: 'assisting with check-in',
          numberOfSpots: 3
        },
        {
          id: 'posting-2',
          name: 'tossing color',
          numberOfSpots: 5
        },
        {
          id: 'posting-3',
          name: 'handing out water',
          numberOfSpots: 6
        }
      ]
    },

  ....
]

```
### GET event by its id

URL:
```bash
https://locahost:3001/events/:id
```
Sample response (200):

```JavaScript

{
      id: 'event-1',
      date: '2021/02/01',
      name: 'Somthing',
      organization: 'Something, LLC.',
      location: '123 Something Dr., Denver, CO, 80204',
      description: 'Somthing about the event.',
      duration: 10,
      category: 'Sports',
      openJobs: [
        {
          id: 'posting-1',
          name: 'assisting with check-in',
          numberOfSpots: 3
        },
        {
          id: 'posting-2',
          name: 'tossing color',
          numberOfSpots: 5
        },
        {
          id: 'posting-3',
          name: 'handing out water',
          numberOfSpots: 6
        }
      ]
}

```

### POST an upcoming job to user profile

URL:
```bash
https://locahost:3001/users/:id
```

Sample request:

```JavaScript

{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: "1-posting-1",
    eventName: "Color Run",
    eventId: "event-1"
    positionName: "assisting with check-in",
    dat: "2021/02/01"
})
}

```

### PATCH the amount of open positions on the single event page

URL:
```bash
https://locahost:3001/events/:id
```

Sample request:

```JavaScript

{
    jobId: "posting-0"
}

```


### DELETE the upcoming job from user

URL:
```bash
https://locahost:3001/events/:id
```
Sample request:

```JavaScript

{
  eventId: "event-1",
  jobId: "1-posting-1"
}

```

---

### Credits

<img src="https://avatars1.githubusercontent.com/u/67164959?s=460&u=310e4e6d6122c9344036dfc4d06e39bcc7dd876b&v=4" alt="Wizard of Styles"
 width="150" height="auto" />\

**Cooper Terrones**
[GitHub Profile](https://github.com/coopterrones)

<img src="https://avatars2.githubusercontent.com/u/68085997?s=400&u=a632625a079a0ed8f6f0d7adb4820e82a0d24d48&v=4" alt="Wonder Woman"
 width="150" height="auto" />\

**Elle Li**
[GitHub Profile](hhttps://github.com/Elle624)

<img src="https://avatars0.githubusercontent.com/u/66269306?s=460&u=b59f8ccc1002269319d952aa028ee270629b2ead&v=4" alt="Philosoraptor"
 width="150" height="auto" />\

**Olga Morgan**
[GitHub Profile](https://github.com/scripka)