const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var validator = require('validator');

const BookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: { type: String, required: true },
    status: { type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance' },
    due_back: { type: Date, default: Date.now }
  }
);

BookInstanceSchema.virtual('url').get(function () {
  return `/catalog/bookinstance/${this._id}`;
})

const BookInstance = mongoose.model("BookInstance", BookInstanceSchema);

module.exports = BookInstance;
