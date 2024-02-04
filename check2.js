    function dotProduct(v1, v2) {
//   Calculate the dot product of two vectors.
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length");
    }  
    let result = 0;
        for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }
    return result;
}

    function areOrthogonal(vectorsPairs) {
// Determine if a list of pairs of vectors are orthogonal.  
    for (let i = 0; i < vectorsPairs.length; i++) {
        const v1 = vectorsPairs[i][0];
        const v2 = vectorsPairs[i][1];
        if (dotProduct(v1, v2) !== 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
    const vectorsPairs = [
    [[1, 0, 0], [0, 1, 0]],
    [[0, 1, 0], [0, 0, 1]],
    [[1, 0, 0], [0, 0, 1]],
    ];
    console.log(areOrthogonal(vectorsPairs)); // Output: false