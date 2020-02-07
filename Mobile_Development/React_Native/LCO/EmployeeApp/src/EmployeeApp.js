import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Card, Icon} from 'native-base'

class EmployeeApp extends React.Component{
  render(){
    return (
      <View style={styles.screen}>
        <FlatList
          data={Object.values(this.props.data)}
          renderItem={ ({item}) => (
            <Card style={styles.container}>
              <View style={styles.idContainer}>
                <Text style={styles.idText}>{item.empId}</Text>
              </View>
              <View style={styles.nameAndSalaryContainer}>
                <Text style={styles.nameText}>Name: {item.empName}</Text>
                <Text style={styles.salaryText}>Salary: {item.empSalary.toFixed(2)}</Text>
              </View>
              <View style={styles.performanceIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.goodPerformance(item.empId);
                  }}
                >
                  <Icon
                    ios="ios-thumbs-up"
                    android="md-thumbs-up"
                    style={styles.goodPerformance}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.props.badPerformance(item.empId);
                  }}
                >
                  <Icon
                    ios="ios-thumbs-down"
                    android="md-thumbs-down"
                    style={styles.badPerformance}
                  />
                </TouchableOpacity>
              </View>
            </Card>
          ) }
          keyExtractor={ item => item.empId.toString() }
        />
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    data : state
  }
}

function mapDispatchToProps(dispatch){
  return{
    goodPerformance: (id) => dispatch({
      type: 'GOOD_PERFORMANCE',
      id: id
    }),
    badPerformance: (id) => dispatch({
      type: 'BAD_PERFORMANCE',
      id: id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeApp)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 30
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  //list card view container
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  // no. of employee container
  idContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  // no. of employee text
  idText: {
    fontSize: 18,
    color: "#000"
  },
  // name and salary text container
  nameAndSalaryContainer: {
    flex: 4,
    padding: 20
  },
  // employee name text
  nameText: {
    fontSize: 16,
    color: "#000"
  },
  // employee salary text
  salaryText: {
    fontSize: 16,
    color: "#000"
  },
  // like dislike icon container
  performanceIconContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  //like icon
  goodPerformance: {
    color: "green"
  },
  // dislike icon
  badPerformance: {
    color: "red"
  }
});