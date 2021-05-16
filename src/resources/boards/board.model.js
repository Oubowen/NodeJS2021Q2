const uuid = require('uuid');

class Board {
  constructor({
    id = uuid.v4(),
    title = 'BOARD',
    columns = [
      {
        id: uuid.v4(),
        title: 'COLUMN',
        order: 0,
      },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
