import express from 'express';
import compression from 'compression';

const app = express();
const PORT = process.env.PORT || 3000;

//Compression middleware
app.use(compression());

//Simple endpoint
app.get('/', (req, res) => {
  const largePayload = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    address: {
      street: `123 Main St Apt ${i + 1}`,
      city: 'Anytown',
      state: 'Anystate',
      zip: `12345-${String(i + 1).padStart(4, '0')}`,
    },
    phone: `555-555-${String(i + 1).padStart(4, '0')}`,
    website: `http://www.user${i + 1}.com`,
    company: {
      name: `Company ${i + 1}`,
      catchPhrase: `Catchphrase ${i + 1}`,
      bs: `BS ${i + 1}`,
    },
  }));
  res.json(largePayload);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
