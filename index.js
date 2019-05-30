const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log('im listening');
}

app.listen(PORT, handleListening);