const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const {username} = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "79455fd9-6ac3-44f2-8e23-bf0aaafad579"}}
        )
        return req.status(r.status).json(r.data);
        }
        catch (e) {
            return res.status(e.response.status).json(e.response.data);
               }
}); 

app.listen(3001);
