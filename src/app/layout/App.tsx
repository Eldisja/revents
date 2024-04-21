import { Button } from "semantic-ui-react"

function App() {

  return (
    <div>
      <h1>Welcome to Revents</h1>
      <button className="ui red icon button">
        <i className="user icon"></i>CSS Button
      </button>

      <Button icon = 'smile' content = 'React button' color="green" loading={true} />
    </div>
  )
}

export default App