'use babel';

const moment = require('moment');

module.exports = {

  config: {
    format: {
      title: 'Format',
      description: 'How to display date and time. See below for available options.',
      type: 'string',
      default: 'LLLL',
    },
    locale: {
      title: 'Locale',
      description: 'How to localize months, weekdays, etc.',
      type: 'string',
      default: 'en',
      // enum: ['en', 'ja', 'de']
    }
  },

  activate() {
    this.subscription = inkdrop.commands.add(document.body, {
      'insert-date:toggle': () => {
        const format = inkdrop.config.get('insert-date.format');
        const locale = inkdrop.config.get('insert-date.locale');
        moment.locale(locale);

        const cm = inkdrop.getActiveEditor().codeMirror;
        cm.replaceSelection(moment().format(format) + "\n");
      }
    })
  },

  deactivate() {
    this.subscription.dispose();
  }

};
