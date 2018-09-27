const os = require('os')

console.log('arquitetura: ', os.arch())
console.log('CPU: ', os.cpus())
console.log('total CPU: ', os.cpus().length)

const memoryfree = (os.freemem()/1024)/1024
const totalm = (os.totalmem()/1024)/1024
console.log('memoria livre (MB): ', memoryfree)
console.log('memoria total (GB): ', totalm)
console.log('memoria livre %: ', (memoryfree/totalm)*100)

console.log('hostname: ', os.hostname())
console.log('plataforma: ', os.platform())
console.log('username: ', os.userInfo().username)

const up = (os.uptime()/60)/60
console.log('uptime (horas): ', up)

console.log('network', os.networkInterfaces())
