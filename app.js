const ponyFirstNames = ['Twilight', 'Apple', 'Rarity', 'Rainbow', 'Flutter', 'Pinkie', 'Cheerie', 'Cutie', 'Sweetie', 'Quila', 'Koyah', 'Looby', 'Grandma', 'Grandad', 'Celestia', 'Daisy', 'Cadence', 'Princess', 'Scooti', 'Derpy', 'Love', 'Big', 'Pound', 'Granny', 'Trixie', 'Aloe', 'Blue', 'Charity', 'Cherry', 'Coco', 'Pokey', 'Starlight', 'Diamond', 'Silver', 'Bulk', 'Cranky', 'Hoity', 'Sapphire', 'Fancy', 'Sassy', 'Soarin', 'Hoops', 'Star', 'Flim', 'Daring', 'Lyra', 'Lemon', 'Octavia', 'Cheese', 'Double', 'Party', 'Sugar', 'RaRa', 'Sven', 'Countess', 'Sun', 'Moon', 'Twinkle', 'Pumpkin', 'Smart', 'Clover', 'Shining', 'Doctor', 'Bon', 'Special Agent', 'Daring'];

const ponyLastNames = ['Sparkle', 'Jack', 'Dash', 'Shy', 'Pie', 'Lee', 'Belle', 'Moon', 'Luna', '', 'Loo', 'Hooves', 'Heart', 'Macintosh', 'Cake', 'Cupcake', 'Smith', 'Bloom', 'Bobbin', 'KindHeart', 'Jubilee', 'Pommel', 'Smokes', 'Glimmer', 'Tiara', 'Spoon', 'Biceps', 'Doodle', 'Toity', 'Blueblood', 'Saddles', 'Rainboom', 'Chrysalis', 'Swirl', 'Heartstrings', 'Hearts', 'Melody', 'Sandwich', 'Diamond', 'Favour', 'Gallop', 'Coloratura', 'Burst', 'Dancer', 'Shine', 'Cookie', 'Pudding', 'Hurricane', 'Candy', 'Clever', 'Armour', 'Platinum', 'Hooves', 'Bon', 'Sweetie Drops', 'Do'];

const ponyName = document.getElementById('name');

document.getElementById('btn').addEventListener('click', () => {
  let firstName = ponyFirstNames[Math.floor(Math.random() * ponyFirstNames.length)];
  let lastName = ponyLastNames[Math.floor(Math.random() * ponyLastNames.length)];
  ponyName.innerHTML = `${firstName} ${lastName}`;
});