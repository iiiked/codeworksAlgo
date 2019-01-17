const permutations = (str) => {
  const result = [];
  if (str.length < 2) return [str];
  [...str].forEach((char, i) => {
    const rest = str.substring(0, i) + str.substring(i + 1);
    permutations(rest).forEach(p => result.push(char + p));
  });
  return [...new Set(result)];
}; 

module.exports = permutations;
