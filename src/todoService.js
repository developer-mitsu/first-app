import axios from 'axios'

const url = 'http://localhost:3001/todos'

const renderApp = () => {
    axios
        .get(url)
        .then((res) => {
            
        })
}