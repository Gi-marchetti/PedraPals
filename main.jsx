const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

function Main(){
    return (
        <div id="card">
            <h1>PedraPals</h1>
        </div>
    )
}
function Main2(){
    return (
        <div id="card">
            <h1>PedraPals2</h1>
        </div>
    )
}
function Main3(){
    return (
        <div id="card">
            <h1>PedraPals2</h1>
        </div>
    )
}


root.render(
    <div id="container">
        <div id = "principal">
            <Main/>
            <Main2/>
            <Main3/>
        </div>
    </div>
);