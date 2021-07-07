import { resolve } from 'path';
import { spawnSync } from 'child_process';

spawnSync('makensis', ['-V4', resolve(process.env.WORKSPACE, 'demo.nsi')]);