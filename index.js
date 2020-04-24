const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  name: 'Kermit',
  color: 'green',
  album: {
    the_muppet_movie: {
      song: 'The Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
let [moo,neigh,baa,oink,cluck] = farmAnimals.split(' ');
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.
let [Bessie, , Dolly, Babe, Little] = farmAnimals.split(' ');
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.
let [black_and_white, , black,pink] = farmAnimals.split(' ');
// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
let [red, orange, yellow, green, blue, indigo, violet] = colors;
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let [r, o, y, g, b, ,v] = colors;
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
let [ , , , , ,indg] = colors;
// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names
let {name, color,job, partner} = k_muppet;
let{song}= k_muppet.album.the_muppet_movie;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
let{song_2, song_4} = k_muppet.album.the_muppet_movie;
const k_job = job;
const k_partner=partner;