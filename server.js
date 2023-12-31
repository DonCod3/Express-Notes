const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require('./routes/apiRoute');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); 

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost${PORT}`);
});