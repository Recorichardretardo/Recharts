import React, { Component } from 'react';
import './index.scss'


class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }

   renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, age, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td><input name="age" value={age} onChange={(e)=>this.onChange(e,index,name)}/></td>
               <td><input name="email" value={email} onChange={(e)=>this.onChange(e,index,name)}/></td>
            </tr>
         )
      })
   }

   onChange = (event,index,name) => {
      let val = index+1
      let {students} = this.state;
      for (var i = 0; i < students.length; i++) {
         // if (students[i].id === val) {
         //    students[i][event.target.name] = event.target.value;
         //   break;
         // }
         if (students[i].name === name) {
            students[i][event.target.name] = event.target.value;
           break;
         }
         // if (i === val) {
         //    students[i][event.target.name] = event.target.value;
         //   break;
         // }
       }
      //  console.log("students",students )
       this.setState({
         students:students
       })




   }

   renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

    render() {
      return (
         <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table //exporting a component make it reusable and this is the beauty of react