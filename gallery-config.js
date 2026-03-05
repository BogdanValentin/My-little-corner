// ========================================================
//  GALLERY CONFIGURATION
//  --------------------------------------------------------
//  Your photo categories live here. To populate a category:
//
//  1. Place your images in  photos/<category>/
//  2. List the filenames in the 'images' array below
//  3. (Optional) Set a 'cover' path for the index preview
//
//  Example:
//    {
//      id: 'animals',
//      label: 'Animals',
//      cover: 'photos/animals/hero.jpg',
//      images: [
//        'photos/animals/01.jpg',
//        'photos/animals/02.jpg',
//        'photos/animals/03.jpg'
//      ],
//      imageData: [
//        { number: '01', title: 'Morning Visitor', description: 'A fox at dawn.' },
//        { number: '02', title: 'Wings',           description: 'Heron in flight.' },
//      ]
//    }
//
//  The gallery grid adapts automatically:
//    ≤ 6 images  → 2 × 3 grid
//    ≤ 12 images → 3 × 4 grid
//    ≤ 20 images → 4 × 5 grid
//    ≤ 36 images → 5 × 8 grid
//    > 36 images → 8 × 12 grid
//
//  Categories with no images will use built-in placeholders.
// ========================================================

const GALLERY_CATEGORIES = [
  {
    id: 'animals',
    label: 'Animals',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'architecture',
    label: 'Architecture',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'portraits',
    label: 'Portraits',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'sport',
    label: 'Sport',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'landscapes',
    label: 'Landscapes',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'astronomy',
    label: 'Astronomy',
    cover: 'photos/astronomy/1.jpg',
    images: [
      'photos/astronomy/1.jpg',
      'photos/astronomy/2.jpg',
      'photos/astronomy/3.jpg',
      'photos/astronomy/4.jpg',
      'photos/astronomy/5.jpg',
      'photos/astronomy/6.jpg',
      'photos/astronomy/7.jpg',
      'photos/astronomy/8.jpg'
    ],
    imageData: [
      { number: '01', title: 'Astronomy 1', description: '' },
      { number: '02', title: 'Astronomy 2', description: '' },
      { number: '03', title: 'Astronomy 3', description: '' },
      { number: '04', title: 'Astronomy 4', description: '' },
      { number: '05', title: 'Astronomy 5', description: '' },
      { number: '06', title: 'Astronomy 6', description: '' },
      { number: '07', title: 'Astronomy 7', description: '' },
      { number: '08', title: 'Astronomy 8', description: '' }
    ]
  },
  {
    id: 'flowers',
    label: 'Flowers',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'events',
    label: 'Events',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'art',
    label: 'Art',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'autoportret',
    label: 'Autoportraits',
    cover: null,
    images: [],
    imageData: []
  },
  {
    id: 'vehicles',
    label: 'Vehicles',
    cover: 'photos/vehicles/1.jpg',
    images: [
      'photos/vehicles/1.jpg',
      'photos/vehicles/2.jpg',
      'photos/vehicles/3.jpg',
      'photos/vehicles/4.jpg',
      'photos/vehicles/5.jpg',
      'photos/vehicles/6.jpg',
      'photos/vehicles/7.jpg',
      'photos/vehicles/8.jpg',
      'photos/vehicles/9.jpg',
      'photos/vehicles/10.jpg',
      'photos/vehicles/11.jpg',
      'photos/vehicles/12.jpg',
      'photos/vehicles/13.jpg',
      'photos/vehicles/14.jpg',
      'photos/vehicles/15.jpg',
      'photos/vehicles/16.jpg',
      'photos/vehicles/17.jpg',
      'photos/vehicles/18.jpg',
      'photos/vehicles/19.jpg',
      'photos/vehicles/20.jpg'
    ],
    imageData: [
      { number: '01', title: 'Vehicle 1', description: '' },
      { number: '02', title: 'Vehicle 2', description: '' },
      { number: '03', title: 'Vehicle 3', description: '' },
      { number: '04', title: 'Vehicle 4', description: '' },
      { number: '05', title: 'Vehicle 5', description: '' },
      { number: '06', title: 'Vehicle 6', description: '' },
      { number: '07', title: 'Vehicle 7', description: '' },
      { number: '08', title: 'Vehicle 8', description: '' },
      { number: '09', title: 'Vehicle 9', description: '' },
      { number: '10', title: 'Vehicle 10', description: '' },
      { number: '11', title: 'Vehicle 11', description: '' },
      { number: '12', title: 'Vehicle 12', description: '' },
      { number: '13', title: 'Vehicle 13', description: '' },
      { number: '14', title: 'Vehicle 14', description: '' },
      { number: '15', title: 'Vehicle 15', description: '' },
      { number: '16', title: 'Vehicle 16', description: '' },
      { number: '17', title: 'Vehicle 17', description: '' },
      { number: '18', title: 'Vehicle 18', description: '' },
      { number: '19', title: 'Vehicle 19', description: '' },
      { number: '20', title: 'Vehicle 20', description: '' }
    ]
  },
  {
    id: 'bw',
    label: 'Black & White',
    cover: null,
    images: [],
    imageData: []
  }
];
