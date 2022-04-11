var sharp = require('sharp');

sharp('cat.jfif').rotate(200).resize(100,100).toFile('output.jfif', (err, info) => {})