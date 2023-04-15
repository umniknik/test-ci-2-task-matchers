import sortinghealth from '../sortinghealth';

test('Testing sortfunction for heroes', () => {
  const heroesRandom = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const heroesSort = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortinghealth(heroesRandom);
  expect(result).toEqual(heroesSort);
});
