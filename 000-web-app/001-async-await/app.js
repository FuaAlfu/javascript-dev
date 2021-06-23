/*
async - await

*/

const example = async () => {
    return 'hi'
}

async function someFunc (){
    const result = await example();
    console.log(result);
}

//invoke func
someFunc()

//----------------------
const users = [
    {id:1, name: 'fua'},
    {id:2, name: 'mua'},
    {id:3, name: 'nata'},
]

const articles = [
    {userId:1, articles: ['fua', 'mua', 'nata']},
    {userId:2, articles: ['one', 'two', 'three']},
    {userId:3, articles: ['four', 'five', 'six']},
]

function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name)

        if(user){
            return resolve(user)
        }else{
            reject(`no such user with name: ${name}`)
        }
    })
}

function getArticles(userId){
    return new Promise((resolve, reject) =>{
        const userArticles = articles.find((user) => user.userId === userId)
        if(userArticles){
            return resolve(userArticles.articles)
        }else{
             reject(`Wrong ID`)
        }
    })
}