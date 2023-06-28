const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3333;

app.listen(3333, () => console.log(`server running on port ${PORT}`));
