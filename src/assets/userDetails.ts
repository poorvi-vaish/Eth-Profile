let imagePath: string;
if(process.env.NODE_ENV === 'production') {
  imagePath = 'https://poorvi-vaish.github.io/Eth-Profile';
} else {
  imagePath = '';
}

export const userDetails = [{
  img: `${imagePath}/images/NFT1.png`,
  name: "Azuki #1234",
  bought: "02.28",
  floor: "2.74",
  score: "+21.6%"
},
{
  img: `${imagePath}/images/NFT2.png`,
  name: "MAYC #1234",
  bought: "02.28",
  floor: "2.74",
  score: "+21.6%"
},
{
  img: `${imagePath}/images/NFT3.png`,
  name: "MoonBirds #1234",
  bought: "02.28",
  floor: "2.74",
  score: "+21.6%"
},
{
  img: `${imagePath}/images/NFT4.png`,
  name: "Otherdeed #1234",
  bought: "02.28",
  floor: "2.74",
  score: "+21.6%"
},
{
  img: `${imagePath}/images/NFT5.png`,
  name: "Cryptoz #1234",
  bought: "02.28",
  floor: "2.74",
  score: "+21.6%"
},]