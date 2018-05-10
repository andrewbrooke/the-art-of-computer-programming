# the-art-of-computer-programming
Some code to go along with Donald Knuth's book series

## structure

The code for the algorithms is contained within the `volumes` directory, with subdirectories for each volume. (`1`, `2`, etc.)

Within each of the aforementioned directories are individual files for each algorithm. These may be accessed individually or through the `directory.js` file at the root of the repository.

## directory.js usage

This file may be used to specify which algorithm you would like to run, and with which inputs.

Run `node directory.js --help` for help.

The program takes two base arguments:

- `--volume`: Specify the volume you want to access, eg. 1
- `--program`: Specify the program you want to access, eg. euclid

Any input to the requested program can be specified as the remaining arguments. Putting it all together:

`node directory.js --volume 1 --program euclid 20 100`

or via `npm start`

`npm run start -- --volume 1 --program euclid 20 100`

If no input is specified (and some input is required), that program's usage will be output.

## tests

Built with Mocha and Chai, coverage with nyc

Run with `npm test`
