const { machineId } = require('node-machine-id')

const start = async () => {
  const id = await machineId()
  console.log("machine id=",id)
}
start()