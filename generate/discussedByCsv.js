const fs = require('fs');

module.exports = {
  writer: function(pathToCsv) {
    const discussesCsv = fs.createWriteStream(pathToCsv);

    discussesCsv.write(':TYPE,id:START_ID(Topic),id:END_ID(Opinion)\n');

    return {
      write: (topicId, opinionId) => {
        discussesCsv.write(`:DISCUSSED_BY,${topicId},${opinionId}\n`);
      },

      end: () => discussesCsv.end()
    };
  }
};
