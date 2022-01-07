const url ="http://127.0.0.1:5500/animales.json" ;

const getUsers = async () => {
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    const {animales} = data
    let res = animales.map(item => item.imagen)
    console.log(res)
    return {res}
}




export default getUsers;


 






