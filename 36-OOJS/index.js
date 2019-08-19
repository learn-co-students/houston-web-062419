class Image{
    constructor(title, url){
        this.title = title
        this.url = url
    }

    render(){
        let p = document.createElement("p")
        p.innerText = this.title

        let image = document.createElement("img")
        image.src = this.url

        document.body.append(p,image)
    }
}

let imageForm = document.querySelector(".new-form")

imageForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let img = new Image(e.target[0].value, e.target[1].value)

    img.render()

    // debugger

})

class Person{
    constructor(name){
        this.name =name
    }

    render(){
        return this.name
    }
}

class Student extends Person{
    constructor(name){
        super(name)
    }

    render(){
        let li = document.createElement("li")
        li.innerText = `${super.render()}, I am a student`

        document.body.append(li)
    }

}

class Teacher extends Person{
    constructor(name){
        super(name)
    }

    render(){
        let li = document.createElement("li")
        li.innerText = `${super.render()}, I am a teacher`

        document.body.append(li)
    }
}


let taskForm = document.querySelector(".task-form")

taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // debugger
    switch(e.target[1].value){
        case "student":
            let s =  new Student(e.target[0].value)
            s.render()
            break
        case "teacher":
            let t =  new Teacher(e.target[0].value)
            t.render()
            break 
        default:
            console.log("Invalid Selection!!")
    }

    taskForm.reset()
})