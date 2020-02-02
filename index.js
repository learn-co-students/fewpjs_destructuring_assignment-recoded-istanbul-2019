const farmAnimals = 'cow horse sheep pig chicken'
const [moo,neigh,baa,oink,cluck]=farmAnimals.split(" ");
console.log(moo,neigh,baa,oink,cluck);

const [Bessie, ,Dolly,Babe,Little]=farmAnimals.split(" ");
console.log(Bessie,Dolly,Babe,Little);
const [black_and_white, ,black,pink]=farmAnimals.split(" ");
console.log(black_and_white,black,pink);
  
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const [red,orange,yellow,green,blue,indigo,violet]=colors;
console.log(red,orange,yellow,green,blue,indigo,violet);

const [r,o,y,g,b,,v]=colors;
console.log(r,o,y,g,b,v);

const [,,,,,indg]=colors;
console.log(indg);

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const {name , color, song,job,partner}=muppet;
console.log(name , color, song,job,partner);
const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};
const {song_2,song_4}= k_muppet.k_album.the_muppet_movie;
console.log(song_2,song_4);

const {k_name,k_color,k_job,k_partner}= k_muppet;
console.log(k_name,k_color,k_job,k_partner);
