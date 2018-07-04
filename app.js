const ponyFirstNames = "Twilight,Apple,Rarity,Rainbow,Flutter,Pinkie,Cheerie,Cutie,Sweetie,Quila,Koyah,Looby,Grandma,Grandad,Celestia,Daisy,Cadence,Princess,Scooti,Derpy,Love,Big,Pound,Granny,Trixie,Aloe,Blue,Charity,Cherry,Coco,Pokey,Starlight,Diamond,Silver,Bulk,Cranky,Hoity,Sapphire,Fancy,Sassy,Soarin,Hoops,Star,Flim,Daring,Lyra,Lemon,Octavia,Cheese,Double,Party,Sugar,RaRa,Sven,Countess,Sun,Moon,Twinkle,Pumpkin,Smart,Clover,Shining,Doctor,Bon,Special Agent,Daring,Songbird,Tempest,Princess,Queen,Lickety,DJ,Zecora,Ace,Spitfire,Mr Carrot,Fizzlepop,Sunburst,Flurry,Maud,Fire,Zephyr".split(',')

const ponyLastNames = "Sparkle,Jack,Dash,Shy,Pie,Lee,Belle,Moon,Luna,,Loo,Hooves,Heart,Macintosh,Cake,Cupcake,Smith,Bloom,Bobbin,KindHeart,Jubilee,Pommel,Smokes,Glimmer,Tiara,Spoon,Biceps,Doodle,Toity,Blueblood,Saddles,Rainboom,Chrysalis,Swirl,Heartstrings,Hearts,Melody,Sandwich,Diamond,Favour,Gallop,Coloratura,Burst,Dancer,Shine,Cookie,Pudding,Hurricane,Candy,Clever,Armour,Platinum,Hooves,Bon,Sweetie Drops,Do,Serenade,Shadow,Skystar,Novo,Squid,Pon-3,Berrytwist,Streak,Breeze".split(',')


const backgroundContainer = document.querySelector('.container'),
  button = document.querySelector('#btn'),
  ponyName = document.getElementById('name')

let alpha = 1,
  l, r

document.addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    random()
    fadeOut()
  }
})

button.addEventListener('click', () => {
  button.disabled = true
  fadeOut()
  random()
})

setBackground(true)

function random() {
  let firstName = ponyFirstNames[Math.floor(Math.random() * ponyFirstNames.length)],
    lastName = ponyLastNames[Math.floor(Math.random() * ponyLastNames.length)]
  ponyName.innerHTML = `${firstName} ${lastName}`
}

function setBackground(newColor = false) {
  const rc = () => Math.floor(Math.random() * 256)
  if (newColor) {
    l = `rgba(${rc()}, ${rc()}, ${rc()}`
    r = `rgba(${rc()}, ${rc()}, ${rc()}`
  }
  backgroundContainer.style.background = `linear-gradient(to right, ${l}, ${alpha}), ${r}, ${alpha}))`
}

function fadeOut() {
  let fadeOutInterval = setInterval(() => {
    alpha -= 0.1
    setBackground()
    if (alpha <= 0) {
      clearInterval(fadeOutInterval)
      fadeIn()
    }
  }, 30)
}

function fadeIn() {
  setBackground(true)
  let fadeInInterval = setInterval(() => {
    alpha += 0.1
    setBackground()
    if (alpha >= 1) {
      clearInterval(fadeInInterval)
      button.disabled = false
    }
  }, 30)
}