import firebase from 'firebase'

class Firebase{
  constructor(){
    this.init()    //initialize connection when firebase object is created
    this.observeAuth() //to sign in everyone as anonymous, we are modifying onAuthStateChanged()
  }

  init = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyBGUQYHfOzgU9tT_z4gMxlAXmiao-agcIE",
      authDomain: "reactbootcamp-af1c4.firebaseapp.com",
      databaseURL: "https://reactbootcamp-af1c4.firebaseio.com",
      projectId: "reactbootcamp-af1c4",
      storageBucket: "reactbootcamp-af1c4.appspot.com",
      messagingSenderId: "894814163462",
      appId: "1:894814163462:web:c815f05988434a48"
    };

    firebase.initializeApp(firebaseConfig)
  }

  observeAuth = () => {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
  }

  onAuthStateChanged = user => {
    if(!user){
      try{
        firebase.auth().signInAnonymously()
      }
      catch({message}) {}
    }
  }

  get uid(){
    return (firebase.auth().currentUser || {} ).uid
  }

  get ref(){
    return firebase.database().ref('message')
  }

  get timeStamp(){
    return firebase.database.ServerValue.TIMESTAMP
  }

  parse = dataSnapshot => {
    const {timeStamp: numberStamp, user, text} = dataSnapshot.val()
    const { key: _id } = dataSnapshot

    const timeStamp = new Date(numberStamp)
    //const _id = key

    const message = {
      user,
      text,
      _id,
      timeStamp
    }
    return message
  }

  on = callback => {
    this.ref
      .limitToLast(50)
      .on('child_added', dataSnapshot => callback(this.parse(dataSnapshot)))
  }

  send = messages => {
    for(var i=0; i<messages.length; i++){
      const {user, text} = messages[i]
      const message = {
        user,
        text,
        timeStamp: this.timeStamp
      }

      this.append(message)
    }
  }

  append = message => {
    this.ref.push(message)
  }

  off(){
    this.ref.off()
  }

}

Firebase.shared = new Firebase()
export default Firebase
