const { spawnSync } = require('child_process');

spawnSync('makensis', ['-V4', 'demo.nsi']);