export interface Project {
  id: number;
  title: string;
  location: string;
  date: string;
  type: string;
  image: string;
  description: string;
  detailedDescription: string;
  features: string[];
  images: string[];
}

export let currentProject:number=1;

export const projects: Project[] = [
  {
    "id": 1,
    "title": "Nanma One (5 Towers)",
    "location": "Vytila",
    "date": "2024",
    "type": "Residential (G+28)",
    "image": "assets/projects/nanma-one/img1.jpg",
    "description": "Installation of fire system, fire alarm system for safety compliance.",
    "detailedDescription": "Fire system, fire alarm system installation at Vytila in 2024 ensures compliance with Residential (G+28) safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire system included in system",
      "Fire alarm system included in system",
      "Complies with Residential (G+28) safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 2,
    "title": "Sreedevi Cinemas",
    "location": "Kodaly",
    "date": "2022",
    "type": "Assembly",
    "image": "assets/projects/sreedevi-cinemas/img1.jpg",
    "description": "Installation of fire alarm, fire hydrant for safety compliance.",
    "detailedDescription": "Fire alarm, fire hydrant installation at Kodaly in 2022 ensures compliance with Assembly safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire alarm included in system",
      "Fire hydrant included in system",
      "Complies with Assembly safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 3,
    "title": "St Joseph's Church Amalanagar",
    "location": "Thrissur",
    "date": "2019",
    "type": "Assembly",
    "image": "assets/projects/amala-nagar-church/img1.jpg",
    "description": "Installation of fire hydrant system, fire alarm system for safety compliance.",
    "detailedDescription": "Fire hydrant system, fire alarm system installation at Thrissur in 2019 ensures compliance with Assembly Building safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Fire alarm system included in system",
      "Complies with Assembly Building safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 4,
    "title": "St Joseph's School Kuriachira",
    "location": "Kuriachira",
    "date": "2020",
    "type": "Educational",
    "image": "assets/projects/st-josephs-kuriachira/img1.jpg",
    "description": "Installation of fire hydrant system for safety compliance.",
    "detailedDescription": "Fire hydrant system installation at Kuriachira in 2020 ensures compliance with Educational Building safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Complies with Educational Building safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 5,
    "title": "Little Queen Public School",
    "location": "Thrissur",
    "date": "2019",
    "type": "Educational",
    "image": "assets/projects/little-queen-public-school/img1.jpg",
    "description": "Installation of fire system hydrant system for safety compliance.",
    "detailedDescription": "Fire system hydrant system installation at Thrissur in 2019 ensures compliance with Educational Building safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire system hydrant system included in system",
      "Complies with Educational Building safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 6,
    "title": "Ceat Tyres",
    "location": "Vennala",
    "date": "2020",
    "type": "Commercial",
    "image": "assets/projects/ceat/img1.jpg",
    "description": "Installation of fire alarm, sprinkler system for safety compliance.",
    "detailedDescription": "Fire alarm, sprinkler system installation at Vennala in 2020 ensures compliance with Commercial Building safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire alarm included in system",
      "Sprinkler system included in system",
      "Complies with Commercial Building safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 7,
    "title": "St Patriks School",
    "location": "Vallachira",
    "date": "2025",
    "type": "Educational",
    "image": "assets/projects/st-patrics/img1.jpg",
    "description": "Installation of fire alarm system for safety compliance.",
    "detailedDescription": "Fire system installation at Vallachira in 2025 ensures compliance with Educational safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire system included in system",
      "Complies with Educational safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 8,
    "title": "Nanma IOC",
    "location": "Kaloor",
    "date": "2020",
    "type": "Residential (G+19)",
    "image": "assets/projects/Ioc nanma/img1.jpg",
    "description": "Installation of fire alarm, PA talkback system, wet riser system for safety compliance.",
    "detailedDescription": "Fire alarm, pa talkback system, wet riser system installation at Kaloor in 2020 ensures compliance with Residential Building (G+19) safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire alarm included in system",
      "Pa talkback system included in system",
      "Wet riser system included in system",
      "Complies with Residential Building (G+19) safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 9,
    "title": "Euphrasia Training College",
    "location": "Kattoor",
    "date": "2025",
    "type": "Educational",
    "image": "assets/projects/euphrasia-training-college/img1.jpg",
    "description": "Installation of fire hydrant, fire alarm system for safety compliance.",
    "detailedDescription": "Fire hydrant, fire alarm system installation at Kattoor in 2025 ensures compliance with Educational safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant included in system",
      "Fire alarm system included in system",
      "Complies with Educational safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 10,
    "title": "St Arnolds Public School",
    "location": "Aduvassery",
    "date": "2020",
    "type": "Educational",
    "image": "assets/projects/st-arnolds-public-school/img1.jpg",
    "description": "Installation of fire hydrant system for safety compliance.",
    "detailedDescription": "Fire hydrant system installation at Aduvassery in 2020 ensures compliance with Educational Building safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Emergency response integration",
      "24/7 monitoring and maintenance available",
      "Complies with Educational Building safety regulations"
    ],
    "images": [ ]
  },
  {
    "id": 11,
    "title": "Sam Palace",
    "location": "Cherpu",
    "date": "2020",
    "type": "Assembly",
    "image": "assets/projects/sam-palace/img1.jpg",
    "description": "Installation of fire hydrant system, fire alarm for safety compliance.",
    "detailedDescription": "Fire hydrant system, fire alarm installation at Cherpu in 2020 ensures compliance with Assembly safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Complies with Assembly safety regulations",
      "24/7 monitoring and maintenance available",
      "Fire alarm included in system",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 12,
    "title": "Panthalookaran Silks",
    "location": "Kodakara",
    "date": "2021",
    "type": "Commercial",
    "image": "assets/projects/panthalookaran/img1.jpg",
    "description": "Installation of fire alarm, fire hydrant for safety compliance.",
    "detailedDescription": "Fire alarm, fire hydrant installation at Kodakara in 2021 ensures compliance with Commercial safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire alarm included in system",
      "Fire hydrant included in system",
      "Complies with Commercial safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 13,
    "title": "Bini Heritage",
    "location": "Thrissur",
    "date": "2024",
    "type": "4 Star Hotel",
    "image": "assets/projects/Bini Heritage/img1.jpg",
    "description": "Installation of wet riser system, fire alarm, fire detection system for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm, fire detection system installation at Thrissur in 2024 ensures compliance with 4 Star Hotel safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm included in system",
      "Fire detection system included in system",
      "Complies with 4 Star Hotel safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 14,
    "title": "Wedding Village",
    "location": "Thrissur",
    "date": "2023",
    "type": "Assembly",
    "image": "assets/projects/wedding village/img1.jpg",
    "description": "Installation of fire hydrant, fire alarm system for safety compliance.",
    "detailedDescription": "Fire hydrant, fire alarm system installation at Thrissur in 2023 ensures compliance with Assembly safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant included in system",
      "Fire alarm system included in system",
      "Complies with Assembly safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 15,
    "title": "St Charles Borromeo Convent",
    "location": "Kakkanad",
    "date": "2021",
    "type": "Educational",
    "image": "assets/projects/charles-borremeo-convent/img1.png",
    "description": "Installation of fire hydrant and fire alarm for safety compliance.",
    "detailedDescription": "Fire hydrant installation at Kakkanad in 2021 ensures compliance with Educational safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant included in system",
      "Complies with Educational safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 16,
    "title": "Kalyan Jewellers",
    "location": "Thodupuzha",
    "date": "2019",
    "type": "Commercial",
    "image": "assets/projects/kalyan-jewellers/img1.jpg",
    "description": "Installation of fire alarm with smoke detector system for safety compliance.",
    "detailedDescription": "Fire alarm with smoke detector system installation at Thodupuzha in 2019 ensures compliance with Commercial safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire alarm with smoke detector included in system",
      "Complies with Commercial safety regulations",
      "Emergency response integration",
      "24/7 monitoring and maintenance available"
    ],
    "images": [ ]
  },
  {
    "id": 17,
    "title": "SIFL (Gov)",
    "location": "Athani",
    "date": "2021",
    "type": "Industrial",
    "image": "assets/projects/sifl/img1.jpg",
    "description": "Installation of wet riser system, fire alarm, smoke detector system for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm, smoke detector system installation at Athani in 2021 ensures compliance with Industrial safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm included in system",
      "Smoke detector system included in system",
      "Complies with Industrial safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 18,
    "title": "Regional Science Centre (Gov)",
    "location": "Chalakkudy",
    "date": "2021",
    "type": "Assembly",
    "image": "assets/projects/Regional science centre/img1.jpg",
    "description": "Installation of wet riser system, fire alarm with detector for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm with detector installation at Chalakkudy in 2021 ensures compliance with Assembly safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm with detector included in system",
      "Complies with Assembly safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [
      "assets/projects/Regional science centre/img2.jpg"
     ]
  },
  {
    "id": 19,
    "title": "Mala Co-operative Bank",
    "location": "Aloor",
    "date": "2020",
    "type": "Commercial",
    "image": "assets/projects/Mala cooperative bank/img1.jpg",
    "description": "Installation of fire alarm system for safety compliance.",
    "detailedDescription": "Fire system installation at Aloor in 2020 ensures compliance with Commercial safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire system included in system",
      "Complies with Commercial safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 20,
    "title": "Four Star Movies",
    "location": "Manjapra",
    "date": "2021",
    "type": "Assembly",
    "image": "assets/projects/Four star movies/img1.jpg",
    "description": "Installation of wet riser system, fire alarm, detector system for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm, detector system installation at Manjapra in 2021 ensures compliance with Assembly safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm included in system",
      "Detector system included in system",
      "Complies with Assembly safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 21,
    "title": "Star Convention Hall",
    "location": "Manjapra",
    "date": "2021",
    "type": "Assembly",
    "image": "assets/projects/Star convention manjapra/img1.jpg",
    "description": "Installation of fire hydrant system for safety compliance.",
    "detailedDescription": "Fire hydrant system installation at Manjapra in 2021 ensures compliance with Assembly safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Complies with Assembly safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 22,
    "title": "Hindalco Industries (New Powder Coating Plant)",
    "location": "Alupuram",
    "date": "2024",
    "type": "Industrial",
    "image": "assets/projects/Hindalco industries/img6.jpg",
    "description": "Installation of fire hydrant system, fire alarm system for safety compliance.",
    "detailedDescription": "Fire hydrant system, fire alarm system installation at Alupuram in 2024 ensures compliance with Industrial safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Fire alarm system included in system",
      "Complies with Industrial safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ 
      "assets/projects/Hindalco industries/img1.jpg",
      "assets/projects/Hindalco industries/img2.jpg",
      "assets/projects/Hindalco industries/img3.jpg",
      "assets/projects/Hindalco industries/img4.jpg",
      "assets/projects/Hindalco industries/img5.jpg"
    ]
  },
  {
    "id": 23,
    "title": "St Anne's School",
    "location": "Bangalore",
    "date": "2020",
    "type": "Educational",
    "image": "assets/projects/st-anne's-banglore/img1.jpg",
    "description": "Installation of fire hydrant and sprinkler system for safety compliance.",
    "detailedDescription": "Fire hydrant and sprinkler system installation at Bangalore in 2020 ensures compliance with Educational safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant and sprinkler system included in system",
      "Complies with Educational safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 24,
    "title": "Velvet Cinemas Kumarakom",
    "location": "Kumarakom",
    "date": "2022",
    "type": "Multiplex",
    "image": "assets/projects/velvet cinemas/img10.jpg",
    "description": "Installation of wet riser system, fire alarm with detector system, PA cum talk back system, fire NOC for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm with detector system, pa cum talk back system, fire noc installation at Kumarakom in 2022 ensures compliance with Multiplex safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm with detector system included in system",
      "Pa cum talk back system included in system",
      "Fire noc included in system",
      "Complies with Multiplex safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ 
      "assets/projects/velvet cinemas/img9.jpg",
      "assets/projects/velvet cinemas/img6.jpg",
      "assets/projects/velvet cinemas/img8.jpg",
      "assets/projects/velvet cinemas/img7.jpg",
      "assets/projects/velvet cinemas/img5.jpg",
      "assets/projects/velvet cinemas/img4.jpg",
      "assets/projects/velvet cinemas/img3.jpg",
      "assets/projects/velvet cinemas/img2.jpg",
      "assets/projects/velvet cinemas/img1.jpg"
    ]
  },
  {
    "id": 25,
    "title": "Fashion Paints",
    "location": "Irinjalakuda",
    "date": "2023",
    "type": "Storage",
    "image": "assets/projects/fashion-paints/img1.jpg",
    "description": "Installation of fire hydrant system for safety compliance.",
    "detailedDescription": "Fire hydrant system installation at Irinjalakuda in 2023 ensures compliance with Storage safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Complies with Storage safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 26,
    "title": "Gov Ayurveda Hospital Thrissur",
    "location": "Thrissur",
    "date": "2020",
    "type": "Hospital",
    "image": "assets/projects/ayurveda hospital/img1.jpg",
    "description": "Installation of sprinkler system, PA system for safety compliance.",
    "detailedDescription": "Sprinkler system, PA system installation at Thrissur in 2020 ensures compliance with Hospital safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Sprinkler system included in system",
      "Pa system included in system",
      "Complies with Hospital safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ 'assets/projects/ayurveda hospital/img2.jpg' ]
  },
  {
    "id": 27,
    "title": "St Antonys Church",
    "location": "Chirakkal",
    "date": "2021",
    "type": "Assembly",
    "image": "assets/projects/chirakal-church/img1.jpg",
    "description": "Installation of fire alarm, fire hydrant system for safety compliance.",
    "detailedDescription": "Fire alarm, fire hydrant system installation at Chirakkal in 2021 ensures compliance with Assembly safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire alarm included in system",
      "Fire hydrant system included in system",
      "Complies with Assembly safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 28,
    "title": "Don Bosco School",
    "location": "Irinjalakuda",
    "date": "2025",
    "type": "Educational",
    "image": "assets/projects/don-bosco/img1.jpg",
    "description": "Installation of fire hydrant system for safety compliance.",
    "detailedDescription": "Fire hydrant system installation at Irinjalakuda in 2025 ensures compliance with Educational safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Complies with Educational safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 29,
    "title": "St Cinemas",
    "location": "Kalady",
    "date": "2024",
    "type": "Multiplex",
    "image": "assets/projects/st-cinemas/img1.jpg",
    "description": "Installation of wet riser system, fire alarm, fire detection system for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm, fire detection system installation at Kalady in 2024 ensures compliance with Multiplex safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm included in system",
      "Fire detection system included in system",
      "Complies with Multiplex safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 30,
    "title": "Devamatha Hospital",
    "location": "Koratty",
    "date": "2022",
    "type": "Hospital",
    "image": "assets/projects/devamatha-hospital/img1.jpg",
    "description": "Installation of wet riser system, fire alarm, smoke detection system for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm, smoke detection system installation at Koratty in 2022 ensures compliance with Hospital safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm included in system",
      "Smoke detection system included in system",
      "Complies with Hospital safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 31,
    "title": "Silver Crest (Bashi Builders)",
    "location": "Irinjalakuda",
    "date": "2022",
    "type": "Residential",
    "image": "assets/projects/Silver crest/img1.jpg",
    "description": "Installation of fire alarm system for safety compliance.",
    "detailedDescription": "Fire system installation at Irinjalakuda in 2022 ensures compliance with Residential safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire system included in system",
      "Complies with Residential safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 32,
    "title": "Indel M27",
    "location": "Thripunithura",
    "date": "2021",
    "type": "Commercial",
    "image": "assets/projects/m27/img1.jpg",
    "description": "Installation of fire hydrant, fire alarm for safety compliance.",
    "detailedDescription": "Fire hydrant, fire alarm installation at Thripunithura in 2021 ensures compliance with Commercial safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant included in system",
      "Fire alarm included in system",
      "Complies with Commercial safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  }
]


export const Mainprojects: Project[] =[
  {
    "id": 1,
    "title": "Nanma One (5 Towers)",
    "location": "Vytila",
    "date": "2024",
    "type": "Residential (G+28)",
    "image": "assets/projects/nanma-one/img1.jpg",
    "description": "Installation of fire system, fire alarm system for safety compliance.",
    "detailedDescription": "Fire system, fire alarm system installation at Vytila in 2024 ensures compliance with Residential (G+28) safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire system included in system",
      "Fire alarm system included in system",
      "Complies with Residential (G+28) safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 7,
    "title": "St Patriks School",
    "location": "Vallachira",
    "date": "2025",
    "type": "Educational",
    "image": "assets/projects/st-patrics/img1.jpg",
    "description": "Installation of fire alarm system for safety compliance.",
    "detailedDescription": "Fire system installation at Vallachira in 2025 ensures compliance with Educational safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire system included in system",
      "Complies with Educational safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 19,
    "title": "Mala Co-operative Bank",
    "location": "Aloor",
    "date": "2020",
    "type": "Commercial",
    "image": "assets/projects/Mala cooperative bank/img1.jpg",
    "description": "Installation of fire alarm system for safety compliance.",
    "detailedDescription": "Fire system installation at Aloor in 2020 ensures compliance with Commercial safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire system included in system",
      "Complies with Commercial safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 24,
    "title": "Velvet Cinemas Kumarakom",
    "location": "Kumarakom",
    "date": "2022",
    "type": "Multiplex",
    "image": "assets/projects/velvet cinemas/img10.jpg",
    "description": "Installation of wet riser system, fire alarm with detector system, PA cum talk back system, fire NOC for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm with detector system, pa cum talk back system, fire noc installation at Kumarakom in 2022 ensures compliance with Multiplex safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm with detector system included in system",
      "Pa cum talk back system included in system",
      "Fire noc included in system",
      "Complies with Multiplex safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ 
      "assets/projects/velvet cinemas/img9.jpg",
      "assets/projects/velvet cinemas/img6.jpg",
      "assets/projects/velvet cinemas/img8.jpg",
      "assets/projects/velvet cinemas/img7.jpg",
      "assets/projects/velvet cinemas/img5.jpg",
      "assets/projects/velvet cinemas/img4.jpg",
      "assets/projects/velvet cinemas/img3.jpg",
      "assets/projects/velvet cinemas/img2.jpg",
      "assets/projects/velvet cinemas/img1.jpg"
    ]
  },
  {
    "id": 31,
    "title": "Silver Crest (Bashi Builders)",
    "location": "Irinjalakuda",
    "date": "2022",
    "type": "Residential",
    "image": "assets/projects/Silver crest/img1.jpg",
    "description": "Installation of fire alarm system for safety compliance.",
    "detailedDescription": "Fire system installation at Irinjalakuda in 2022 ensures compliance with Residential safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire system included in system",
      "Complies with Residential safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 27,
    "title": "St Antonys Church",
    "location": "Chirakkal",
    "date": "2021",
    "type": "Assembly",
    "image": "assets/projects/chirakal-church/img1.jpg",
    "description": "Installation of fire alarm, fire hydrant system for safety compliance.",
    "detailedDescription": "Fire alarm, fire hydrant system installation at Chirakkal in 2021 ensures compliance with Assembly safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire alarm included in system",
      "Fire hydrant system included in system",
      "Complies with Assembly safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 4,
    "title": "St Joseph's School Kuriachira",
    "location": "Kuriachira",
    "date": "2020",
    "type": "Educational",
    "image": "assets/projects/st-josephs-kuriachira/img1.jpg",
    "description": "Installation of fire hydrant system for safety compliance.",
    "detailedDescription": "Fire hydrant system installation at Kuriachira in 2020 ensures compliance with Educational Building safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Complies with Educational Building safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 22,
    "title": "Hindalco Industries (New Powder Coating Plant)",
    "location": "Alupuram",
    "date": "2024",
    "type": "Industrial",
    "image": "assets/projects/Hindalco industries/img6.jpg",
    "description": "Installation of fire hydrant system, fire alarm system for safety compliance.",
    "detailedDescription": "Fire hydrant system, fire alarm system installation at Alupuram in 2024 ensures compliance with Industrial safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Fire alarm system included in system",
      "Complies with Industrial safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ 
      "assets/projects/Hindalco industries/img1.jpg",
      "assets/projects/Hindalco industries/img2.jpg",
      "assets/projects/Hindalco industries/img3.jpg",
      "assets/projects/Hindalco industries/img4.jpg",
      "assets/projects/Hindalco industries/img5.jpg"
    ]
  },
  {
    "id": 20,
    "title": "Four Star Movies",
    "location": "Manjapra",
    "date": "2021",
    "type": "Assembly",
    "image": "assets/projects/Four star movies/img1.jpg",
    "description": "Installation of wet riser system, fire alarm, detector system for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm, detector system installation at Manjapra in 2021 ensures compliance with Assembly safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm included in system",
      "Detector system included in system",
      "Complies with Assembly safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 13,
    "title": "Bini Heritage",
    "location": "Thrissur",
    "date": "2024",
    "type": "4 Star Hotel",
    "image": "assets/projects/Bini Heritage/img1.jpg",
    "description": "Installation of wet riser system, fire alarm, fire detection system for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm, fire detection system installation at Thrissur in 2024 ensures compliance with 4 Star Hotel safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm included in system",
      "Fire detection system included in system",
      "Complies with 4 Star Hotel safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 8,
    "title": "Nanma IOC",
    "location": "Kaloor",
    "date": "2020",
    "type": "Residential (G+19)",
    "image": "assets/projects/Ioc nanma/img1.jpg",
    "description": "Installation of fire alarm, PA talkback system, wet riser system for safety compliance.",
    "detailedDescription": "Fire alarm, pa talkback system, wet riser system installation at Kaloor in 2020 ensures compliance with Residential Building (G+19) safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire alarm included in system",
      "Pa talkback system included in system",
      "Wet riser system included in system",
      "Complies with Residential Building (G+19) safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 32,
    "title": "Indel M27",
    "location": "Thripunithura",
    "date": "2021",
    "type": "Commercial",
    "image": "assets/projects/m27/img1.jpg",
    "description": "Installation of fire hydrant, fire alarm for safety compliance.",
    "detailedDescription": "Fire hydrant, fire alarm installation at Thripunithura in 2021 ensures compliance with Commercial safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant included in system",
      "Fire alarm included in system",
      "Complies with Commercial safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 14,
    "title": "Wedding Village",
    "location": "Thrissur",
    "date": "2023",
    "type": "Assembly",
    "image": "assets/projects/wedding village/img1.jpg",
    "description": "Installation of fire hydrant, fire alarm system for safety compliance.",
    "detailedDescription": "Fire hydrant, fire alarm system installation at Thrissur in 2023 ensures compliance with Assembly safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant included in system",
      "Fire alarm system included in system",
      "Complies with Assembly safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 30,
    "title": "Devamatha Hospital",
    "location": "Koratty",
    "date": "2022",
    "type": "Hospital",
    "image": "assets/projects/devamatha-hospital/img1.jpg",
    "description": "Installation of wet riser system, fire alarm, smoke detection system for safety compliance.",
    "detailedDescription": "Wet riser system, fire alarm, smoke detection system installation at Koratty in 2022 ensures compliance with Hospital safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Wet riser system included in system",
      "Fire alarm included in system",
      "Smoke detection system included in system",
      "Complies with Hospital safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  },
  {
    "id": 25,
    "title": "Fashion Paints",
    "location": "Irinjalakuda",
    "date": "2023",
    "type": "Storage",
    "image": "assets/projects/fashion-paints/img1.jpg",
    "description": "Installation of fire hydrant system for safety compliance.",
    "detailedDescription": "Fire hydrant system installation at Irinjalakuda in 2023 ensures compliance with Storage safety standards, enhancing emergency readiness and fire protection.",
    "features": [
      "Fire hydrant system included in system",
      "Complies with Storage safety regulations",
      "24/7 monitoring and maintenance available",
      "Emergency response integration"
    ],
    "images": [ ]
  }
]
export class ProjectService {
  static getAllProjects(): Project[] {
    return projects;
  }
  static getAllProjectsMain(): Project[] {
    return Mainprojects;
  }

  
  static setCurrentProjectId(id: number) {
    currentProject=id;
  }
  static getCurrentProjectId() {
    return currentProject;
  }
}