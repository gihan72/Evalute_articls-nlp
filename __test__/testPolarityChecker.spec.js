
import "babel-polyfill";


import { checPolarity } from "../src/client/js/formHandler"


describe('Testing polarity translation function', () => {
   
    test('Testing the checPolarity() function', () => {
        
        expect(checPolarity('P+')).toBe('STRONG POSITIVE')
    })

    test('Testing the checPolarity() function', () => {
        expect(checPolarity('P')).toBe('POSITIVE')
    })

    test('Testing the checPolarity() function', () => {
        expect(checPolarity('NEW')).toBe('NEUTRAL')
    })

    test('Testing the checPolarity() function', () => {
        expect(checPolarity('N')).toBe('NEGATIVE')
    })

    test('Testing the checPolarity() function', () => {
        expect(checPolarity('N+')).toBe('STRONG NEGATIVE')
    })

    test('Testing the checPolarity() function', () => {
        expect(checPolarity('NONE')).toBe('NO SENTIMENT')
    })

    test('Testing the checPolarity() function', () => {
        expect(checPolarity).toBeDefined();
    })

});