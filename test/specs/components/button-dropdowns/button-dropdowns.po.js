'use strict';

const Page = require('../../page');

class ButtonDropdownsPage extends Page {
  constructor() {
    super();
    this.dropdownTypes = ['single', 'split', 'sizing', 'dropup'];
  }

  get menu() { return browser.element('.dropdown-menu'); }
  get dropdownBtn() {
    return browser.element('.btn.btn-default.dropdown-toggle');
  }

  open(dropdownType) {
    const path = 'components/button-dropdowns/button-dropdowns-' + dropdownType + '.html';
    super.open(path);
  }
}

module.exports = new ButtonDropdownsPage();
