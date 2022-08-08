const {format_date} = require('../utils/helpers')

// creating test to that format_date() takes Date() objects and returns dates in MM/DD/YYYY
test('format_date() returns a date string', () => {
    const date = new Date('2022-05-20 16:12:03');
    
    expect(format_date(date)).toBe('5/20/2025');
});