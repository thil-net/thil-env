#!/usr/bin/node
var os = require('os');
console.log({
  "process": {
    "argv": process.argv, 
    "execPath": process.execPath, 
    "execArgv": process.execArgv, 
    "cwd": process.cwd(), 
    "env": process.env, 
    "gid": process.getgid(), 
    "uid": process.getuid(), 
    "groups": process.getgroups(), 
    "version": process.version, 
    "versions": process.versions, 
    "config": process.config, 
    "arch": process.arch, 
    "platform": process.platform
  }, 
  "os": {
    "endianness": os.endianness(), 
    "hostname": os.hostname(), 
    "type": os.type(), 
    "platform": os.platform(), 
    "arch": os.arch(), 
    "release": os.release(), 
    "uptime": os.uptime(), 
    "loadavg": os.loadavg(), 
    "totalmem": os.totalmem(), 
    "freemem": os.freemem(), 
    "cpus": os.cpus(), 
    "networkInterfaces": JSON.stringify(os.networkInterfaces()), 
    "EOL": os.EOL
  }
});
