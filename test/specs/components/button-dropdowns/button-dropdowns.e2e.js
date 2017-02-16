'use strict';

// Pageobject pattern (http://webdriver.io/guide/testrunner/pageobjects.html)
const po = require('./button-dropdowns.po');

describe('Component: button dropdowns', function() {
  po.dropdownTypes.forEach(function(dropdownType) {
    describe(dropdownType, function() {
      beforeEach(function() {
        po.open(dropdownType);
      });

      it('has a hidden menu', function() {
        expect(po.menu.isVisible()).to.be.false;
      });

      describe('on dropdown button click', function() {
        beforeEach(function() {
          po.dropdownBtn.click();
          po.menu.waitForVisible();
        });

        it('shows menu', function() {
          expect(po.menu.isVisible()).to.be.true;
        });

        describe('on 2nd dropdown button click', function() {
          beforeEach(function() {
            po.dropdownBtn.click();
            browser.waitUntil(function() {
              return !po.menu.isVisible();
            }, null, 'expected dropdown menu to hide');
          });

          it('hides menu', function() {
            expect(po.menu.isVisible()).to.be.false;
          });
        });
      });
    });
  });
});
