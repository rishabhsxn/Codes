// methods
// this keyword demonstration

let myTodos = {
    day: 'Monday',
    meetings: 0,      // these variables are not directly available to
    meetDone: 0,      // to the following methods, so use 'this' keyword

    addMeetings: function(meet=0) {
        this.meetings = this.meetings + meet
    },

    meetingsDone: function(meet=0) {
        this.meetDone = this.meetDone + meet
    },

    summary: function() {
        console.log(`You have ${this.meetings - this.meetDone} meetings left`)
    }
}

myTodos.addMeetings(4)
myTodos.addMeetings(3)

myTodos.meetingsDone(5)

myTodos.summary()