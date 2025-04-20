export const GALLERY_IMAGES = [
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/coli-cauz.jpg',
    alt: 'Cauz, Xalapa, Veracruz 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Comitancillo-10.webp',
    alt: 'San Pedro Comitancillo, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Comitancillo-24.webp',
    alt: 'San Pedro Comitancillo, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Comitancillo-15.webp',
    alt: 'San Pedro Comitancillo, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Comitancillo-25.webp',
    alt: 'San Pedro Comitancillo, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Comitancillo-9.webp',
    alt: 'San Pedro Comitancillo, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Santo_Domingo-14.webp',
    alt: 'Santo Domingo, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Zanatepec-36.webp',
    alt: 'Zanatepec, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Santo_Domingo-5.webp',
    alt: 'Santo Domingo, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Zanatepec-22.webp',
    alt: 'Zanatepec, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Zanatepec-25.webp',
    alt: 'Zanatepec, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Zanatepec-38.webp',
    alt: 'Zanatepec, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Zanatepec-39.webp',
    alt: 'Zanatepec, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/Zanatepec-50.webp',
    alt: 'Zanatepec, Oaxaca 2022',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://mudiicontent.s3.us-east-2.amazonaws.com/coyo/DSC_0113.webp',
    alt: 'Mudii Co, Xalapa, Veracruz 2020',
    title: 'Title 1'
  }

]

export function scrollToElementById(id: string, offset: number = 0) {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
