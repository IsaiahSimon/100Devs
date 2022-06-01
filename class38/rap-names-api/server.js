const { response } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const rappers = {
  '21 savage': {
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthPlace': 'London, England'
  },
  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthPlace': 'Chicago, Illinois'
  },
  'dylan': {
    'age': 29,
    'birthName': 'Dylan',
    'birthPlace': 'Dylan'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:rapperName', (req, res) => {
  const rapperName = req.params.rapperName.toLowerCase();           // look at query parameters
  console.log(rapperName);
  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers['dylan']);
  }

  //res.json(rappers);
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}
);