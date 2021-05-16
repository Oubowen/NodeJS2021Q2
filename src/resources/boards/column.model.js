class Column {
  constructor({ title = 'COLUMN', order = 0 } = {}) {
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
