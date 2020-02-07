let myYoutubeVideo = {
    title: 'Loops in Javascript',
    videoCreator: 'Hitesh Choudhary',
    videoDescription: 'This is a video description',
    videoLength: 15
}

console.log(`There is a new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)

console.log(`Video Length = ${myYoutubeVideo.videoLength}`)
myYoutubeVideo.videoLength = 10                // changes the value in object itself
console.log('After modification')
console.log(`Video Length = ${myYoutubeVideo.videoLength}`)


// returning multiple things from a function

