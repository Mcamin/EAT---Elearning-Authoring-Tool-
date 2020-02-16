//helper function
import {dynamicSort} from '@/utils/helpers'

const CourseGetters = {
  // Get all Courses
  getAllCourses: state => {
    return state.courses;
  },
  // Get a Course by ID
  getCourseByID: state => id =>{
    return state.courses.filter(course => course.id=== id)[0];
  },
    // Get Course Content
  getCourseContent:(state,getters) => id => {
      let course = getters.getCourseByID(id);
      if(course !== undefined){
        // Loop over Index Object k,v
        course.content = getters.fetchContent(course.contentIndex);
        return course.content;
      }
    },
  // Get the courses by a category
  getCoursesByCategory: state => category =>{
    return state.courses.filter(course => course.category=== category);
  },

  ascendingCoursesSort: state => {
    return state.courses.sort(dynamicSort("title"));
  },

  descendingCoursesSort: state => {
    return state.courses.sort(dynamicSort("-title"));
  },

    // Get Course Content
    fetchContent: (state,getters) => (IndexObject) => {
      // Get Content Index
      let content_kv = Object.entries(IndexObject),
        tempArray = [];
      for (let [key, value] of content_kv) {
        switch (key.charAt(0)){
          case "s":
            let section = getters.getSectionByID(key);
            if(section !== undefined){
              if(section.modulesIndex)
                section.modules = getters.fetchContent(section.modulesIndex);
              tempArray[value] = section;
            }
            break;
          case "m":
            let module = getters.getModuleByID(key);
            if(module !== undefined){
              if(module.contentIndex)
                module.content = getters.fetchContent(module.contentIndex);
              tempArray[value] = module;
            }
            break;
          case "l":
            let lesson = getters.getLessonByID(key);
            if(lesson !== undefined){
              tempArray[value] = lesson;
            }
            break;
          case "i":
            let interaction = getters.getInteractionByID(key);
            if(interaction !== undefined){
              tempArray[value] = interaction;
            }
            break;
        }
      }
      return tempArray;
    },
},

  SectionGetters = {
    // get all Sections
    getSections: (state) => {
      return state.sections;
    },

    // Get a Section by ID
    getSectionByID: state => id =>{
      return state.sections.filter(section => section.id=== id)[0];
    }
  },

  ModuleGetters = {
    /* Module Array Module getters */

    // get all Modules
    getModules: (state) => {
      return state.modules;
    },

    // Get a Module by ID
    getModuleByID: state => id =>{
      return state.modules.filter(section => section.id=== id)[0];
    },
  },

  LessonGetters = {
    /* Lessons Array Module getters */

    // get all Sections
    getLessons: (state) => {
      return state.lessons;
    },

    // Get a lesson by ID
    getLessonByID: state => id =>{
      return state.lessons.filter(lesson => lesson.id=== id)[0];
    },

  },

  InteractionGetters = {
    /* Interactions Array Module getters */

    // get all Interactions
    getInteractions: (state) => {
      return state.interactions;
    },

    // Get an Interaction by ID
    getInteractionByID: state => id  =>{
      return state.interactions.filter(interaction => interaction.id=== id)[0];
    },
  }


export default {
  CourseGetters,
  SectionGetters,
  ModuleGetters,
  LessonGetters,
  InteractionGetters,

}
