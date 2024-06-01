import { isDefined } from './is-defined.js';

describe('isDefined', () => {
    it('returns true for defined values', () => {
        expect(isDefined('lorem')).toBe(true);
        expect(isDefined(123)).toBe(true);
        expect(isDefined({})).toBe(true);
        expect(isDefined(true)).toBe(true);
        expect(isDefined(false)).toBe(true);
        expect(isDefined(null)).toBe(true);
    });

    it('returns false for undefined values', () => {
        expect(isDefined(undefined)).toBe(false);
    });
});
