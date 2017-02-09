const fs = require('fs');
const picker = require('./numberPicker');

const forcem = require('forcem-ipsum');

module.exports = {
  writer: function (pathToCsv) {
    const opinionsCsv = fs.createWriteStream(pathToCsv);

    opinionsCsv.write('id:ID(Opinion),created:long,text\n');

    return {
      write: opinionId => {
        const text = forcem('e' + picker.range(4, 7), picker.range(1, 6)).join('\n\n');
        const created = picker.dateWithinYear();

        opinionsCsv.write(`${opinionId},${created},"${text}"\n`);
      },

      end: () => opinionsCsv.end()
    };
  }
};
