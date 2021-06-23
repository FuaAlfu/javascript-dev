const url = 'https://www.breakingbadapi.com/api/';

//old ways
// fetch(url)
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) =>console.log(err));

const getData = async () => {
    try {
        const res = await fetch(url)
        return res.json();
        //console.log(res)
    } catch (error) {
        console.log(error)
    }
}

console.log(getData().then());
getData()
