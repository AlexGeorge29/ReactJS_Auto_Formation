function CoolComponent({ adjective = 'Cool' }) {
  return <p>Youpi So {adjective} !</p>
}

ReactDOM.render(
  <div>
    <CoolComponent adjective="awesome" />
    <CoolComponent />
  </div>,
  document.getElementById('root')
)
