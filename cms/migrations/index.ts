import * as migration_20261124_193408_initial from './20261124_193408_initial';

export const migrations = [
  {
    up: migration_20261124_193408_initial.up,
    down: migration_20261124_193408_initial.down,
    name: '20261124_193408_initial'
  },
];
