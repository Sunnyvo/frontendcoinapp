import ActionCable from "actioncable";
const token = window.sessionStorage.getItem('key')
const App = {};
App.cable = ActionCable.createConsumer(`ws://localhost:3000/cable?token=${token}&platform=${platform}`);
export default App.cable