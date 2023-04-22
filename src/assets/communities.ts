let imagePath: string;
if(process.env.NODE_ENV === 'production') {
  imagePath = 'https://poorvi-vaish.github.io/Eth-Profile';
} else {
  imagePath = '';
}


export const images = [
  `${imagePath}/images/img2.png`,
  `${imagePath}/images/img3.png`,
  `${imagePath}/images/img4.png`,
  `${imagePath}/images/img5.png`,
]