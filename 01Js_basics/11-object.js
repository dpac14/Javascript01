

// const instagramUser = new Object() this is singelton object     
//  const instagramUser = {} non singelton object

const instagramUser = {}

instagramUser.id = "User@123"
instagramUser.name = "Rohit"
// instagramUser.email = "roht@insta.com"
instagramUser.isLoggedIn = false

// console.log(instagramUser);

const reguralUser = {
    email: "hitesh@insta.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhari"
        }

    }
}
// console.log(reguralUser.fullname.userfullname.lastname); 

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "e", 6: "f" }

// const obj3 = {obj1,obj2,obj4}
// const obj3 = Object.assign(obj1,obj2,obj4)
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 1,
        email: "d@gmail.com"
    },
]

users[1].email
// console.log(instagramUser);
// console.log(Object.keys(instagramUser))
// console.log(Object.values(instagramUser));
// console.log(Object.entries(instagramUser));
// console.log(instagramUser.hasOwnProperty('isLoggedIn'))


// Object De-Structure & JSON 

const course = {
    coursename: "Js In Hindi",
    price: "999",
    courseInstructor: "Code with Hitesh"
}
//  course.courseInstructor

const { courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

