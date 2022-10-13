// running backend code in the frontend:
import fs from 'node:fs';

console.log('fs, fs');

export const products = [
  {
    id: 1,
    name: 'rainbow',
    price: 15,
    description:
      'No matter if rain or shine - this hat is meant to brighten your day!',
  },
  {
    id: 2,
    name: 'donut',
    price: 15,
    description: 'Perfect for anyone with a certain sweet tooth...',
  },
  { id: 3, name: 'cherry', price: 15, description: 'This hat screams SUMMER!' },
  {
    id: 4,
    name: 'croc',
    price: 15,
    description:
      "Just in case you don't wanna talk to anybody, we've got you covered...",
  },
];
