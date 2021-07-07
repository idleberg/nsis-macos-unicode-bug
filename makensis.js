import { spawnSync } from 'child_process';

spawnSync('makensis', ['-V4', 'demo.nsi']);