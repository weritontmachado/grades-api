export default (mongoose) => {
  const gradeSchema = mongoose.Schema({
    name: { type: String, required: true },

    subject: { type: String, required: true },

    type: { type: String, required: true },

    value: { type: Number, required: true, min: 0 },

    lastModified: { type: Date, default: Date.now },
  });
  const Grade = mongoose.model('grade', gradeSchema, 'grade');

  return Grade;
};
