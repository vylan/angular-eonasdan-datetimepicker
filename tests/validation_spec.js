var moment = require('moment');

describe('validation datetimepicker test page', function () {

    var dtFormat = 'YYYY/MM/DD HH:mm';

    beforeEach(function () {
        browser.get('http://localhost:8000/examples/validation.html');
        browser.waitForAngular();
    });

    it('should fail empty', function () {
        var input = element(by.tagName('input'));
        expect(input.getAttribute('value')).toBe('');
        expect(input.getAttribute('class')).toContain('ng-invalid');
        expect(input.getAttribute('class')).toContain('ng-invalid-required');
    });

    it('should be ok when filled', function () {
        var opener = 'input-group-addon';
        element(by.className(opener)).click().click();

        var input = element(by.tagName('input'));
        expect(input.getAttribute('value')).toBe(moment().format(dtFormat));
        expect(input.getAttribute('class')).not.toContain('ng-invalid');
        expect(input.getAttribute('class')).not.toContain('ng-invalid-required');
    });

    it('should failed when cleared', function () {
        var opener = 'input-group-addon';
        element(by.className(opener)).click().click();
        element(by.buttonText('Clear the time')).click();

        var input = element(by.tagName('input'));
        expect(input.getAttribute('value')).toBe('');
        expect(input.getAttribute('class')).toContain('ng-invalid');
        expect(input.getAttribute('class')).toContain('ng-invalid-required');
    });

});