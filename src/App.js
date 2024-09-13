import React , { Component }  from "react";
import CourseList from './components/CourseList/CList'
import CourseForm from './components/CourseForm/CF'

class App extends Component{

  state = {
    // courses:[
    //    { name : "html"},
    //    { name : "css"},
    //    { name : "js"}
    // ],
    courses: [],
    current : ''
  }

  //updatecourse
  updateCourse = (e) => {
    //  console.log(e.target.value)
    this.setState({
        current : e.target.value
    })
  }

  //addcourse
  addCourse = (e) => {
    
      e.preventDefault();
      // console.log("course add")
      let current =this.state.current;
    if(current){
      let courses = this.state.courses;
      courses.push({name: current})
      this.setState({
        courses,
        current : ""
      })
    }
      
    

  }

  //deleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses
    courses.splice(index,1)
    // courses.filter((e) => {
    //   return e.index !== index ? e : ""
    // })
    this.setState({
      courses
    })
  }

  //editCourse
  editCourse = (index , value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
    // this.setState({
    //   courses
    // })
  }


  render(){
    const {courses} = this.state;
    let length = courses.length;
    const courseList = courses.map((course, index)=>{
      // console.log(e, index)
      return   <CourseList key={index}  details={course}  deleteCourse={this.deleteCourse} index={index} update={this.handleChange} editCourse={this.editCourse}/>
    })

    return(
      <section className="App">
         <h2>Add Courses</h2>
         <CourseForm  updateCourse={this.updateCourse}  addCourse={this.addCourse} current={this.state.current}/>
         // <ul>{courseList}</ul>
  <ul>
          {this.state.courses.length > 0 ? (
            courseList
          ) : (
            <p>there is no courses to show</p>
          )}
        </ul>
      </section>
    )
  }
}


export default App;



