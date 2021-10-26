import "./index.css"
import ReactDOM from "react-dom"
import App from "./components/basic/App"

/* const root = document.getElementById('root')
ReactDOM.render('Olá mundo!', root) */

/* const root = document.getElementById('root')
ReactDOM.render(<b>Olá mundo!</b>, root) */

const root = document.getElementById('root')
ReactDOM.render(
    <App/>,
    root
)