import { useState } from 'react';

function Devices() {

  const [devices, setDevices] = useState([
    {
      id: 1,
      name: 'Device 1',
      status: 'OFF',
      topic: 'topic1',
      turn_on: "11h",
      turn_off: "11h" 
    }
  ]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('online');
  const [topic, setTopic] = useState('');
  const [turnOn, setTurnOn] = useState();
  const [turnOff, setTurnOff] = useState();
  const [editDevice, setEditDevice] = useState(null);

  // call api
  function addDevice(e) {
    e.preventDefault();
    
    if(!name) return;

    let newDevice = {
      id: Date.now(),
      name,
      status,
      topic,
      turn_on: turnOn,
      turn_off: turnOff
    };

    setDevices([...devices, newDevice]);
    setName('');
  }

  // call api
  function deleteDevice(id) {
    let updatedDevices = devices.filter(d => d.id !== id);
    setDevices(updatedDevices);
  }

  // call api
  function editDeviceData(id) {
    let device = devices.find(d => d.id === id);
    setName(device.name);
    setStatus(device.status);
    setTopic(device.topic);
    setTurnOn(device.turn_on); 
    setTurnOff(device.turn_off);
    setEditDevice(device); 
  }

  function updateDevice(e) {
    e.preventDefault();

    let updatedDevice = {
      ...editDevice,
      name,
      status,
      topic,
      turn_on: turnOn,
      turn_off: turnOff
    };

    let updatedDevices = devices.map(d => (d.id === editDevice.id ? updatedDevice : d));
    
    setDevices(updatedDevices);
    setName('');
    setEditDevice(null);
  }

  return (
    <div className="container mx-auto max-w-2xl pt-10 pb-16">
      <h1 className="text-4xl font-medium text-center text-blue-500 mb-6">Devices CRUD</h1>

      <form onSubmit={editDevice ? updateDevice : addDevice}>
        <div className="form-control ">
          <label className='pr-2 text-white'>Name</label>
          <input 
            type="text" 
            className="border p-2 rounded "
            value={name}
            onChange={e => setName(e.target.value)}  
          />
        </div>
        <button className="bg-blue-500 text-white px-3 py-2 rounded mt-5">
          {editDevice ? 'Update' : 'Add'}
        </button>
      </form>
      <table className="table-auto w-full text-left mt-6">
        <thead>
          <tr className='text-white'>
            <th>Name</th>
            <th>Status</th>
            <th>Topic</th>
            <th>Turn on</th>
            <th>Turn off</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device.id} className='text-sm divide-y divide-gray-100 text-amber-50 font-size'>
              <td>{device.name}</td>
              <td>{device.status}</td>
              <td>{device.topic}</td>
              <td>{device.turn_on }</td>  
              <td>{device.turn_off }</td>
              <td>
                <button
                  onClick={() => editDeviceData(device.id)}
                  className="mr-2 text-blue-500"  
                >
                  Edit
                </button> 
                <button
                  onClick={() => deleteDevice(device.id)} 
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Devices;