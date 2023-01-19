import axios from "axios";

const MyTest = () => {

    const handleGetData = () => {

        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((data) => {
            console.log(data.data);
        })
    }


    return(
        <>
            <h1>Hello world</h1>
            <button onClick={handleGetData}>Get data</button>
        </>
    )
}

export default MyTest;