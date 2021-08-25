import React from 'react'
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
import './About.css'
 
const App = () => {
  const items = [
    {
      id: 1,
      header: 'Founder',
      description:
        'B.Sundar Rao, persiued B.Tech in the stream of Civil, working in Airforce 2011 batch with inspired by Swamy Puri jagannath',
      image: 'https://scontent.fvga2-1.fna.fbcdn.net/v/t1.0-9/103481740_1411418835726140_4193046029634681517_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=w36oX4RoqzEAX9bYfVd&_nc_ht=scontent.fvga2-1.fna&oh=f596d302a1756d5697c39595a7b0468c&oe=6028B36E'
    },
    {
      id: 2,
      header: 'General Manager',
      description:
        'Ravi, complted ITI in the stream of Diesel Mechical. currently working as Junior executing in the visakha terminal as full time job holder',
      image: 'https://scontent.fvga2-1.fna.fbcdn.net/v/t1.0-9/53266991_1028121850719840_164025136041689088_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=RT38O2x9QJEAX-nlpZ0&_nc_oc=AQmNlbv84bpkeZrhRtqGCn3uFRVb6oSBBOmOu57_O4dR2OLTJ6JPgdSRejb61dxnM1jUfK0c_rJPZdG-SCJgOosv&_nc_ht=scontent.fvga2-1.fna&oh=488244f7c588fe87ab0e1a4c5104477b&oe=60287552'
    },
    {
      id: 3,
      header: 'Chief Advicer',
      description:
        'Janaki ramayya also know as Janu, studying MSC in Maharaja Interrnational University and waiting for the opportunities to show level best of skills',
      image: 'https://scontent.fvga2-1.fna.fbcdn.net/v/t1.0-9/103212846_2599372670328829_3645347319901350960_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=k6LQqP0PLYMAX-MEbo-&_nc_ht=scontent.fvga2-1.fna&oh=18fdfbdf7ed0a5148511018a2974938e&oe=602B1124'
    },
    {
      id: 4,
      header: 'Managing Director',
      description:
        'Hemanth ',
      image: 'https://scontent.fvga2-1.fna.fbcdn.net/v/t1.0-9/109516781_294305065318599_1759959893770906658_o.jpg?_nc_cat=110&ccb=2&_nc_sid=19026a&_nc_ohc=Mz5VwZ7fsksAX88UB7h&_nc_ht=scontent.fvga2-1.fna&oh=77dfab4248571ca90bfc7401e25cf5a7&oe=602AA870'
    },
    {
      id: 5,
      header: 'Worker',
      description:
        'finibus id eros eu, commodo sollicitudin lacus. Nunc semper enim nec est viverra, at pharetra orci lobortis. Nulla facilisi. Sed non lectus nunc.',
      image: 'https://scontent.fhyd1-3.fna.fbcdn.net/v/t1.0-9/45734182_320871818697429_3774260300144967680_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=FfWUmctu7fQAX8fpGfl&_nc_ht=scontent.fhyd1-3.fna&oh=e6716e0853450e9e932b4ac098e9b3a2&oe=60340667'
    }
  ]
  return (
   <div className='about-main'>
        <div className='about-container'>
        <CardView
        items={items}
        activeColor='#000'
        imageHeight='420px'
        imageWidth='450px'
/>
        </div>
   </div>
  )
}
 
export default App