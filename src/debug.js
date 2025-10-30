// Oops! This factory function exposes the students array.
// Can you make it private using closure?

const createCourse = (topic, instructor) => {
  return {
    topic,
    instructor,
    students: [],
    addStudent(name) {
      this.students.push(name);
    },
    removeStudent(name) {
      this.students.splice(this.students.indexOf(name), 1);
    },
    getStudents() {
      return this.students;
    },
  };
};

module.exports = {
  createCourse,
};
