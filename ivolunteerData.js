const iVolunteerData = {
  users: [
    {
      id: 1,
      name: "Wheezy Joe",
      rating: 4.4,
      profilePicture: 'https://randomuser.me/api/portraits/men/52.jpg',
      volunteeredHours: 10.2,
      upcomingJobs: [
        {
          id: '1-posting-23',
          eventName: 'Help a local animal shelter',
          positionName: 'dog walkers',
          date: '2021/03/01'
        }
      ]
    }
  ],
  events: [
    {
      id: 'event-1',
      date: '2021/02/01',
      name: 'Color Run',
      organization: 'The Color Run, LLC.',
      location: '123 Cassette Dr., Denver, CO, 80204',
      description: 'The Color Run is an event series and five kilometer paint race, inspired by the Hindu festival of Holi, that is owned and operated by The Color Run LLC, a for-profit company.',
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
    {
      id: 'event-2',
      date: '2021/02/05',
      name: 'Food Delivery',
      organization: 'Individual',
      location: '123 Goose Blv., Denver, CO, 80208',
      description: 'Deliver food for a memorial hospital',
      duration: 3,
      category: 'Healthcare',
      openJobs: [
        {
          id: 'posting-4',
          name: 'driver',
          numberOfSpots: 2
        },
        {
          id: 'posting-5',
          name: 'cook',
          numberOfSpots: 3
        }
      ]
    },
    {
      id: 'event-3',
      date: '2021/03/02',
      name: 'Bolder Boulder 10K',
      organization: 'Bolder Boulder',
      location: '2400 Colorado Ave, Boulder, CO 80305',
      description: '10K Race',
      duration: 7,
      category: 'Sports',
      openJobs: [
        {
          id: 'posting-6',
          name: 'handing out water',
          numberOfSpots: 4
        },
        {
          id: 'posting-7',
          name: 'assisting with check-in',
          numberOfSpots: 5
        },
        {
          id: 'posting-8',
          name: 'course marshall',
          numberOfSpots: 11
        }
      ]
    },
    {
      id: 'event-4',
      date: '2021/02/20',
      name: 'Deliver masks to a retirement home',
      organization: 'Individual',
      location: '345 Liberty Rd., Denver, CO 80304',
      description: 'Deliver 10 bags of new masks to a retirement home - Evergreen',
      duration: 2,
      category: 'Senior',
      openJobs: [
        {
          id: 'posting-9',
          name: 'driver',
          numberOfSpots: 1
        },
        {
          id: 'posting-10',
          name: 'handing out masks',
          numberOfSpots: 2
        }
      ]
    },
    {
      id: 'event-5',
      date: '2021/02/15',
      name: 'Grocery Distribution',
      organization: 'North Middle School',
      location: '12095 E Montview Blvd, Denver, CO',
      description: 'Help us load food boxes for We Dont Wastes drive-up grocery',
      duration: 4,
      category: 'Food',
      openJobs: [
        {
          id: 'posting-11',
          name: 'loaders',
          numberOfSpots: 4
        },
        {
          id: 'posting-12',
          name: 'driver',
          numberOfSpots: 3
        },
        {
          id: 'posting-13',
          name: 'participants register',
          numberOfSpots: 2
        }
      ]
    },
    {
      id: 'event-6',
      date: '2021/03/20',
      name: 'Spring Cleanup',
      organization: 'Never Not Doing Things Colorado',
      location: '2855 West Holden Place, Denver, CO 80204',
      description: 'Sloans Lake runs about 2mi ish in length and we will be walking up and back removing litter.',
      duration: 4,
      category: 'Environment',
      openJobs: [
        {
          id: 'posting-14',
          name: 'cleanup volunteers',
          numberOfSpots: 15
        }
      ]
    },
    {
      id: 'event-7',
      date: '2021/02/08',
      name: 'Childrens Ministry and 4FIVE',
      organization: 'Crossroads Community Church',
      location: '9900 South Twenty Mile Road, Denver, CO 80134',
      description: 'Help us to organize an event for children',
      duration: 10,
      category: 'Children',
      openJobs: [
        {
          id: 'posting-15',
          name: 'cleanup volunteers',
          numberOfSpots: 10
        },
        {
          id: 'posting-16',
          name: 'handling checkins',
          numberOfSpots: 8
        },
        {
          id: 'posting-17',
          name: 'distributors of tags for kids',
          numberOfSpots: 5
        }
      ]
    },
    {
      id: 'event-8',
      date: '2021/02/03',
      name: 'Shelter Associate',
      organization: 'Volunteers of America Colorado Branch',
      location: 'Denver, CO',
      description: 'This program serves multiple populations in different programs: family shelter, respite shelter and a Grant Per Diem program within the facility.',
      duration: 7,
      category: 'Other',
      openJobs: [
        {
          id: 'posting-18',
          name: 'event coordinator',
          numberOfSpots: 1
        },
        {
          id: 'posting-19',
          name: 'assistants',
          numberOfSpots: 2
        }
      ]
    },
    {
      id: 'event-9',
      date: '2021/02/03',
      name: 'Human Trafficking Legal Program',
      organization: 'ALIGHT',
      location: 'Denver, CO',
      description: 'Non-profit organization that exists to unlock a fresh start for human trafficking survivors',
      duration: 3,
      category: 'Other',
      openJobs: [
        {
          id: 'posting-20',
          name: 'clerical help',
          numberOfSpots: 3
        },
        {
          id: 'posting-21',
          name: 'attorney assistant',
          numberOfSpots: 1
        }
      ]
    },
    {
      id: 'event-10',
      date: '2021/03/01',
      name: 'Help a local animal shelter',
      organization: 'Dumb friends league',
      location: '1 Cat Dr., Denver, CO',
      description: 'Help our local animal shelter by walking dogs and spending time with cats',
      duration: 3,
      category: 'animal',
      openJobs: [
        {
          id: 'posting-22',
          name: 'photographer',
          numberOfSpots: 2
        },
        {
          id: 'posting-23',
          name: 'dog walkers',
          numberOfSpots: 5
        },
        {
          id: 'posting-24',
          name: 'cleanup volunteers',
          numberOfSpots: 2
        }
      ]
    },
    {
      id: 'event-11',
      date: '2021/04/10',
      name: 'Sewing, crafting, crocheting for soldiers',
      organization: 'Angels Sewing and Crafting Team',
      location: '19 veteran Dr., Denver, CO',
      description: 'Provide lovingly created handmade pieces of comfort and support to veterans, deployed service members and their families.',
      duration: 3,
      category: 'Veterans',
      openJobs: [
        {
          id: 'posting-25',
          name: 'crafty folks',
          numberOfSpots: 6
        }
      ]
    },
    {
      id: 'event-12',
      date: '2021/05/17',
      name: 'Food Donation Drive',
      organization: '',
      location: '6 foodtruck Dr., Denver, CO',
      description: 'We are distributing food to people in need.',
      duration: 8,
      category: 'Food',
      openJobs: [
        {
          id: 'posting-26',
          name: 'driver',
          numberOfSpots: 1
        },
        {
          id: 'posting-27',
          name: 'distributors',
          numberOfSpots: 2
        }
      ]
    },
    {
      id: 'event-13',
      date: '2021/05/24',
      name: "Support Female Caregivers Virtually",
      organization: "The Women of Valor Program",
      location: 'Remote',
      description: 'We focuses on female caregivers of post-9/11 wounded, ill and injured service members and veterans. We are seeking female volunteers to support these selfless heroes.',
      duration: 4,
      category: 'Remote',
      openJobs: [
        {
          id: 'posting-28',
          name: 'crisis counselor',
          numberOfSpots: 5
        }
      ]
    },
    {
      id: 'event-14',
      date: '2021/05/11',
      name: 'Bake goodies for Deployed Service Members',
      organization: "Soldiers' Angels",
      location: '234 baking blvd., Denver, CO',
      description: 'Do you love to bake? The Angel Bakers Team is a program of Soldiers’ Angels that supports service members who are deployed in support of combat or humanitarian missions overseas. Our goal is to ensure no service member feels alone.',
      duration: 4.5,
      category: 'Veterans',
      openJobs: [
        {
          id: 'posting-29',
          name: 'bakers',
          numberOfSpots: 10
        }
      ]
    },
  ]
}

module.exports = iVolunteerData;