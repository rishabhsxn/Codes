import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import EmployeeApp from './src/EmployeeApp'

const initState = {
  1: {
    empId: 1,
    empName: 'Employee One',
    empSalary: 10000.0
  },
  2: {
    empId: 2,
    empName: 'Employee Two',
    empSalary: 20000.0
  },
  3: {
    empId: 3,
    empName: 'Employee Three',
    empSalary: 30000.0
  },
  4: {
    empId: 4,
    empName: 'Employee Four',
    empSalary: 40000.0
  },
  5: {
    empId: 5,
    empName: 'Employee Five',
    empSalary: 50000.0
  }
}

const reducer = (state=initState, action) => {
  let initialSalary, newSalary, change, employeeObject
  if(action.id){
    initialSalary = state[action.id].empSalary
    change = 0.20 * initialSalary
  }

  switch(action.type){
    case 'GOOD_PERFORMANCE':
      newSalary = initialSalary + change
      employeeObject = state[action.id]
      employeeObject.empSalary = newSalary
      return Object.assign({}, state)

    case 'BAD_PERFORMANCE':
      newSalary = initialSalary - change
      employeeObject = state[action.id]
      employeeObject.empSalary = newSalary
      return Object.assign({}, state)
  }

  return state
}

const store = createStore(reducer)
 
export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <EmployeeApp />
      </Provider>
    )
  }
}