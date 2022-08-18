var mqtt = require('mqtt')
const client = mqtt.connect('mqtt://3.110.196.82:1883/')

client.on("connect", function(res, err) {
    if(err) {
        console.log(err)
    }
    else {
        console.log("Connected to broker!")
        client.subscribe("test", function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log("Subscribed to thee topic!")
            }
        })
    }
})

client.on("message", function(topic, data) {
    var thing = mqtt.connect("mqtt://demo.thingsboard.io/", {
        username : "jeet_yo"
    })
    thing.on('connect', function() {
        console.log('connected')
        thing.publish('v1/devices/me/telemetry', data, function(err) {
            if(err) {
                console.log(err)
            }
        })
    })
})