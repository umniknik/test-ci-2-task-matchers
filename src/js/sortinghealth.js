export default function sortinghealth(heroes) {
  heroes.sort((a, b) => b.health - a.health);
  return heroes;
}
