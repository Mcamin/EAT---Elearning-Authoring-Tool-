
const CourseMutations = {

  getCourse: (state, course) => {
    state.currentCourse= course;
  },
  getCourses: (state, courses) => {
    state.courses= courses;
  },
  createCourse: (state, newCourse) => {
    state.currentCourse= newCourse;
    state.courses.push(newCourse);
  },
  updateCourse: (state, payload) => {
    //Loop through Payload and update Course Attributes
    for (let key in Object.keys(payload.props))
    state.currentCourse[key] = payload.props[key];

  },
  deleteCourse: (state, CourseId) => {
    //Check if the currentCourse have the ID and empty it
    //Check if the array of courses contain that course and delete it
  },

  resetCourse: (state) => {
    state.currentCourse= null;
  },
  resetCoursesArray: (state) => {
    state.courses= [];
  },

};

const SectionMutations = {
  getSection: (state, section) => {
    state.sections.push(section);
  },
  getSections: (state, sections) => {
    state.sections= sections;
  },
  createSection: (state, newSection) => {
    state.currentSection= newSection;
    state.sections.push(newSection);
  },
  updateSection: (state, payload) => {

  },
  deleteSection: (state, sectionId) => {
    //Check if the currentCourse have the ID and empty it
    //Check if the array of courses contain that course and delete it
  },
  resetSection: (state) => {
    state.currentSection= null;
  },
  resetSectionsArray: (state) => {
    state.sections= [];
  },
};

const ModuleMutations = {
  getModule: (state, _module) => {
    state.modules.push(_module);
  },
  getModules: (state, modules) => {
    state.modules= modules;
  },
  createModule: (state, newModule) => {
    state.currentModule= newModule;
    state.modules.push(newModule);
  },
  updateModule: (state, payload) => {
    //Loop through Payload and update Course Attributes
  },
  deleteModule: (state, moduleId) => {
    //Check if the currentCourse have the ID and empty it
    //Check if the array of courses contain that course and delete it
  },
  resetModule: (state) => {
    state.currentModule= null;
  },
  resetModulesArray: (state) => {
    state.modules= [];
  },
};

const LessonMutations = {
  getLesson: (state, lesson) => {
    state.lessons.push(lesson);
  },
  getLessons: (state, lessons) => {
    state.lessons= lessons;
  },
  createLesson: (state, newLesson) => {
    state.currentLesson= newLesson;
    state.lessons.push(newLesson);
  },
  updateLesson: (state, payload) => {
    //Loop through Payload and update Course Attributes
  },
  deleteLesson: (state, lessonId) => {
    //Check if the currentCourse have the ID and empty it
    //Check if the array of courses contain that course and delete it
  },
  resetLesson: (state) => {
    state.currentLesson= null;
  },
  resetLessonsArray: (state) => {
    state.lessons= [];
  },

};

const InteractionMutations = {
  getInteraction: (state, interaction) => {
    state.interactions.push(interaction);
  },
  getInteractions: (state, lessons) => {
    state.lessons= lessons;
  },
  createInteraction: (state, newInteraction) => {
    state.currentInteraction= newInteraction;
    state.interactions.push(newInteraction);
  },
  updateInteraction: (state, payload) => {
    //Loop through Payload and update Course Attributes
  },
  deleteInteraction: (state, interactionId) => {
    //Check if the currentCourse have the ID and empty it
    //Check if the array of courses contain that course and delete it
  },
    resetInteraction: (state) => {
      state.currentInteraction= null;
    },
    resetInteractionsArray: (state) => {
      state.interactions= [];
    },

},
 GlobalMutations = {
  getLanguages: (state, languages) => {
    state.languages= languages;
  },

  getCategories: (state, categories) => {
    state.categories= categories;
  },
};


/*createSectionTitle: (state,payload) => {
  let temp = state.course.sections.find(
    section => section.title === payload.oldTitle);
  state.course.sections[state.course.sections.indexOf(temp)].title =payload.newTitle;*/



export  {
  GlobalMutations,
  InteractionMutations,
  LessonMutations,
  ModuleMutations,
  SectionMutations,
  CourseMutations
}
