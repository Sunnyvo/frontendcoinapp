import ActionCable from "actioncable";
const token = window.sessionStorage.getItem('key')
const App = {};
App.cable = ActionCable.createConsumer(`ws://localhost:3001/cable?token=${token}`);
export default App.cable