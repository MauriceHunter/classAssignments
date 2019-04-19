var slideshow = {
    photoList: ["pic 1", "pic 2", "pic 3", "pic 4"],
    currentPhotoIndex: 0,
    nextPhoto: function(){
        if (this.currentPhotoIndex == 3){
            console.log("End of slideshow!")
        } else {
            this.currentPhotoIndex = this.currentPhotoIndex + 1
            console.log(this.currentPhotoIndex)
        }
    },
    prevPhoto: function(){
        if (this.currentPhotoIndex == 0){
            console.log("this is the beginning of the slideshow")
        } else {
            this.currentPhotoIndex = this.currentPhotoIndex - 1
            console.log(this.currentPhotoIndex)
        }
    },
    getCurrentPhoto: function(){
        console.log(this.photoList[this.currentPhotoIndex])
    },
}

console.log(slideshow.getCurrentPhoto())