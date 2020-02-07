// returning multiple things from a function

let myYoutubeVideo = {
    title: 'Loops in Javascript',
    videoCreator: 'Hitesh Choudhary',
    videoDescription: 'This is a video description',
    videoLength: 15
}

console.log(`There is a new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)

// console.log(`Video Length = ${myYoutubeVideo.videoLength}`)

let duration = function(myObject)
{
    return {
        formatOne: `Duration of video : ${myObject.videoLength + 10}`,
        formatTwo: `Duration of video : ${myObject.videoLength + 20}`
    }
}

let obj = duration(myYoutubeVideo)

console.log(obj.formatOne)
console.log(obj.formatTwo)