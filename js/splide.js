export function splideJs() {
  const splide = new Splide('#hero-carousel', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 7000,
    arrows: true,
    pagination: true,
  });
  splide.mount();
}