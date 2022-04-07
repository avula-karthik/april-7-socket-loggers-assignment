import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
const API_ENDPOINT = 'http://localhost:3001';
function SocketDemo() {
    const [response, setResponse] = useState([]);
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        setSocket(socketIOClient(API_ENDPOINT));
        const destructFunction = () => {
            console.log(socket);
            socket.disconnect();
        };
        return destructFunction;
    }, []);
    useEffect(() => {
        connectSocketConnection(socket);
    }, [socket]);
    const connectSocketConnection = (socket) => {
        if (socket != null) {
            socket.on('GetTime', (data) => {
                setResponse(data);
                console.log(response);
            });
        }
    };
    const socketConnect = () => {
        setSocket(socketIOClient(API_ENDPOINT));
    };
    const socketDisconnect = () => {
        socket.disconnect();
    };
    return (
        <div>
            <button className='btn btn-primary' onClick={socketConnect}>
                Connect
            </button>
            <button className='btn btn-danger' onClick={socketDisconnect}>
                Disconnect
            </button>
            <h4>current time is {response}</h4>
        </div>
    );
}
export default SocketDemo;
