require('dotenv').config()
function pedal(text, color) {
  const colors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    reset: '\x1b[0m'
  };

  const selectedColor = colors[color] || colors.white;

  return `${selectedColor}${text}${colors.reset}`;
}

// Przykład użycia funkcji

console.log(`ILOŚĆ UŻYWANYCH KONT: `+pedal(process.env.ILE_KONT,'green'));

const { Client } = require('discord.js-selfbot-v13')
const client = new Client({
    checkUpdate: false,
});
client.on('ready', async () => {

  const channel = await client.channels.fetch(process.env.klamer_kanal1)
  
  async function bump() {
      await channel.sendSlash('302050872383242240', 'bump')
      //await channel.send('cwel')
  }

  function loop() {
      // tutaj taki lekki bypassik że nie wysyła równo co 2 godziny bo podobno ban
      var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
      var jebac_dziwki = Math.round(randomNum / 60000);
      console.log('\n')
      console.log(`--------------------------------------------------------------------------------`)
      console.count(`${pedal('BUMPED ','green')+pedal(process.env.klamer_serwer1,'red')} WITH ACCOUNT ${pedal(client.user.tag,'blue')} | BUMPS `)
      console.log(`NEXT BUMP ${process.env.klamer_serwer1} IN ${pedal(jebac_dziwki+' MINUTES','yellow')}`)
      console.log(`--------------------------------------------------------------------------------`)
      setTimeout(function () {
          bump()
          loop()
      }, randomNum)
  }
  
  bump()
  loop()
})
client.login(process.env.klamer_cwel1)

if (process.env.ILE_KONT >=2) {
  const client2 = new Client({
    checkUpdate: false,
  });
  client2.login(process.env.klamer_cwel2); 
  
  client2.on('ready', async () => {
    const channel = await client2.channels.fetch(process.env.klamer_kanal2)
    async function bump() {
    //await channel.send('cwel')
    await channel.sendSlash('302050872383242240', 'bump')
    }
  function loop() {
    // tutaj taki lekki bypassik że nie wysyła równo co 2 godziny bo podobno ban
    var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
    var jebac_dziwki = Math.round(randomNum / 60000);
    console.log('\n')
    console.log(`--------------------------------------------------------------------------------`)
    console.count(`${pedal('BUMPED ','green')+pedal(process.env.klamer_serwer2,'red')} WITH ACCOUNT ${pedal(client2.user.tag,'blue')} | BUMPS `)
    console.log(`NEXT BUMP ${process.env.klamer_serwer2} IN ${pedal(jebac_dziwki+' MINUTES','yellow')}`)
    console.log(`--------------------------------------------------------------------------------`)
  
    setTimeout(function () {
        bump()
        loop()
    }, randomNum)
  }
  
  bump()
  loop()
  })
}

if(process.env.ILE_KONT >= 3) {
  const client3 = new Client({
    checkUpdate: false,
  });
  client3.login(process.env.klamer_cwel3); 
  
  client3.on('ready', async () => {
    const channel = await client3.channels.fetch(process.env.klamer_kanal3)
    async function bump() {
    //await channel.send('cwel')
    await channel.sendSlash('302050872383242240', 'bump')
    }
  function loop() {
    // tutaj taki lekki bypassik że nie wysyła równo co 2 godziny bo podobno ban
    var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
    var jebac_dziwki = Math.round(randomNum / 60000);
    console.log('\n')
    console.log(`--------------------------------------------------------------------------------`)
    console.count(`${pedal('BUMPED ','green')+pedal(process.env.klamer_serwer3,'red')} WITH ACCOUNT ${pedal(client3.user.tag,'blue')} | BUMPS `)
    console.log(`NEXT BUMP ${process.env.klamer_serwer3} IN ${pedal(jebac_dziwki+' MINUTES','yellow')}`)
    console.log(`--------------------------------------------------------------------------------`)
  
    setTimeout(function () {
        bump()
        loop()
    }, randomNum)
  }
  
  bump()
  loop()
  })
}
if(process.env.ILE_KONT >= 4) {  const client4 = new Client({
  checkUpdate: false,
});
client4.login(process.env.klamer_cwel4); 

client4.on('ready', async () => {
    const channel = await client4.channels.fetch(process.env.klamer_kanal4)
    async function bump() {
    //await channel.send('cwel')
    await channel.sendSlash('302050872383242240', 'bump')
    }
  function loop() {
    // tutaj taki lekki bypassik że nie wysyła równo co 2 godziny bo podobno ban
    var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
    var jebac_dziwki = Math.round(randomNum / 60000);
    console.log('\n')
    console.log(`--------------------------------------------------------------------------------`)
    console.count(`${pedal('BUMPED ','green')+pedal(process.env.klamer_serwer4,'red')} WITH ACCOUNT ${pedal(client4.user.tag,'blue')} | BUMPS `)
    console.log(`NEXT BUMP ${process.env.klamer_serwer4} IN ${pedal(jebac_dziwki+' MINUTES','yellow')}`)
    console.log(`--------------------------------------------------------------------------------`)

    setTimeout(function () {
        bump()
        loop()
    }, randomNum)
}

bump()
loop()
})  }
if(process.env.ILE_KONT >= 5) {  const client5 = new Client({
  checkUpdate: false,
});
client5.login(process.env.klamer_cwel5); 

client5.on('ready', async () => {
  const channel = await client5.channels.fetch(process.env.klamer_kanal5)
  async function bump() {
  //await channel.send('cwel')
  await channel.sendSlash('302050872383242240', 'bump')
  }
function loop() {
  // tutaj taki lekki bypassik że nie wysyła równo co 2 godziny bo podobno ban
  var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
  var jebac_dziwki = Math.round(randomNum / 60000);
  console.log('\n')
  console.log(`--------------------------------------------------------------------------------`)
  console.count(`${pedal('BUMPED ','green')+pedal(process.env.klamer_serwer5,'red')} WITH ACCOUNT ${pedal(client5.user.tag,'blue')} | BUMPS `)
  console.log(`NEXT BUMP ${process.env.klamer_serwer5} IN ${pedal(jebac_dziwki+' MINUTES','yellow')}`)
  console.log(`--------------------------------------------------------------------------------`)

  setTimeout(function () {
      bump()
      loop()
  }, randomNum)
}

bump()
loop()
})  }








































