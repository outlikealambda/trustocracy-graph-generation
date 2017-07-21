const picker = require('./numberPicker');
const topicsCsv = require('./topicsCsv');
const opinionsCsv = require('./opinionsCsv');
const authoredCsv = require('./authoredCsv');
const discussesCsv = require('./discussesCsv');

function go(
  topicCount,
  opinionRange,
  personCount,
  topicsPath,
  opinionsPath,
  authoredPath
) {
  const topicsWriter = topicsCsv.writer(topicsPath || 'topics.csv');
  const opinionsWriter = opinionsCsv.writer(topicsPath || 'opinions.csv');
  const authoredWriter = authoredCsv.writer(topicsPath || 'authored.csv');
  const discussesWriter = discussesCsv.writer(topicsPath || 'discusses.csv');

  let opinionId = 0;

  for (let t = 0; t < topicCount; t++) {
    topicsWriter.write(t);

    console.log('o.range', opinionRange);
    let opinionCount = picker.range(opinionRange[0], opinionRange[1]);
    console.log('o.count', opinionCount);

    let authors = [];

    for (let o = 0; o < opinionCount; o++) {
      let author = picker.excluding(personCount, authors);
      authors.push(author);

      opinionsWriter.write(opinionId);
      authoredWriter.write(t, opinionId, author);
      discussesWriter.write(t, opinionId);

      // opinionId is sequential across topics
      opinionId += 1;
    }
  }

  topicsWriter.end();
  opinionsWriter.end();
  authoredWriter.end();
  discussesWriter.end();
}

module.exports = {
  go
};
