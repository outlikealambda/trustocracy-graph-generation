const fs = require('fs');
const picker = require('./numberPicker');

const topics = [
  'Hillary vs. Donald',
  'The TMT',
  "Honolulu's Rail project",
  'Visitor Drownings',
  'The Zika Virus',
  'The Houseless',
  'Police Accountability',
  'Kakaako Development',
  'Housing Prices',
  'Traffic'
];

module.exports = {
  writer: function(pathToCsv) {
    const topicsCsv = fs.createWriteStream(pathToCsv);

    topicsCsv.write('id:ID(Topic),text,created:long\n');

    return {
      write: topicId => {
        const text = topics[topicId];
        const created = picker.dateWithinYear();

        topicsCsv.write(`${topicId},"${text}",${created}\n`);
      },

      end: () => topicsCsv.end()
    };
  }
};
