import data from '../default.json';
 import ActionCable from 'actioncable';
var cable = ActionCable.createConsumer('ws://localhost:3000/cable')

var ex = {
  subscribe(received) {
    cable.subscriptions.create('PriceChannel', {
      received: function(data) {
        console.log('data:', data);
      },
    });
  }
}
export default function(){
  console.log(ex)
  return data
}