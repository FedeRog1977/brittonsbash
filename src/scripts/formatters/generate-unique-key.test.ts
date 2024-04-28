import { generateUniqueKey } from './generate-unique-key.js'

describe('generateUniqueKey', () => {
    it('generates a random string followed by a numerical length of the input string', () => {
        const specimenOne = generateUniqueKey(23)
        const specimenTwo = generateUniqueKey(114)
        const specimenThree = generateUniqueKey()

        expect(specimenOne).toMatch(/23/u)
        expect(specimenOne).toHaveLength(8)

        expect(specimenTwo).toMatch(/114/u)
        expect(specimenTwo).toHaveLength(9)

        expect(specimenThree).toHaveLength(6)
    })
})
