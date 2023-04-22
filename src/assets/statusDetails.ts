let imagePath: string;
if(process.env.NODE_ENV === 'production') {
  imagePath = 'https://poorvi-vaish.github.io/Eth-Profile';
} else {
  imagePath = '';
}


export const statusDetails = [
  {
    "img": `${imagePath}/images/frame1.png`,
    "name": "ENS Linked",
    "status": "ENS Linked",
    "username": "diangaling.eth",
    "time": "2 months ago",
    "points": "+200XP",
    "value": "1.82",
    "color": "blue",
    "grColor": "grBlue"
  },
  {
    "img": `${imagePath}/images/frame2.png`,
    "name": "Best Flip",
    "status": "Sold",
    "username": "CryptoPunk #1234",
    "time": "10 days ago",
    "points": "+150XP",
    "value": "98.5",
    "color": "yellow",
    "grColor": "grYellow"
  },
  {
    "img": `${imagePath}/images/frame3.png`,
    "name": "Should Have...",
    "status": "Mint",
    "username": "Rare Apepe #1234",
    "time": "10 days ago",
    "points": "+200XP",
    "value": "1.82",
    "color": "mint",
    "grColor": "grMint"
  },
  {
    "img": `${imagePath}/images/frame4.png`,
    "name": "First NFT Bought",
    "status": "Bought",
    "username": "BAYC #1234",
    "time": "10 days ago",
    "points": "+200XP",
    "value": "1.82",
    "color": "blue",
    "grColor": "grBlue"
  },
  {
    "img": `${imagePath}/images/frame5.png`,
    "name": "Paper Handed",
    "status": "Sold",
    "username": "Moonbirds #1234",
    "time": "10 days ago",
    "points": "+200XP",
    "value": "1.82",
    "color": "mint",
    "grColor": "grMint"
  }
]
