const fs = require('fs');

module.exports = {
  writer: function(pathToCsv) {
    const authoredCsv = fs.createWriteStream(pathToCsv);

    authoredCsv.write(':TYPE,id:START_ID(Person),id:END_ID(Opinion)\n');

    return {
      write: (topicId, opinionId, authorId) => {
        authoredCsv.write(`:AUTHORED_${topicId},${authorId},${opinionId}\n`);
      },

      end: () => authoredCsv.end()
    };
  }
};
