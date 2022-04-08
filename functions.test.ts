const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('shuffleArray return an array', () => {
        expect(shuffleArray(['armo', 'khaled', 'andrew', 'DJ'])).toBe(['Dj', 'andrew', 'khaled', 'armo'])})


    test('shuffleArray to have the same length', () => {
        expect(shuffleArray(['armo', 'khaled', 'andrew', 'DJ'])).toContainEqual(['Dj', 'andrew', 'khaled', 'armo'])})
    

    
    
})