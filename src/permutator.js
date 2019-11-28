const createPermutations = string => {
    if (string.length < 2) return string; // Break condition

    const permutations = [];

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        // Stop duplicates:
        if (string.indexOf(char) != i) continue;

        const remainingString =
            string.slice(0, i) + string.slice(i + 1, string.length);
        for (const subPermutation of createPermutations(remainingString))
            permutations.push(char + subPermutation);
    }
    const permutationArray = permutations.sort();
    return permutationArray;
};

const findIndex = str => {
    const string = str.toLowerCase();
    const permutationArray = createPermutations(string);
    const index = permutationArray.indexOf(string);

    return index;
};

exports.findIndex = findIndex;
exports.createPermutations = createPermutations;
