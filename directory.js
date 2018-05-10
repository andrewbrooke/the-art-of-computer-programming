const args = require('commander');
const requireDirectory = require('require-directory');

const volumes = requireDirectory(module, './volumes');

args
    .option('--volume <volume>', 'Required: Specify volume')
    .option('--program <program>', 'Required: Specify program')
    .option('<input...>', 'Specify input arguments')
    .parse(process.argv);

const volume = args.volume;
const program = args.program;
const input = args.args || [];

// Check for required parameters
if (!volume || !program) {
    console.error('--volume and --program options are required');
    process.exit(1);
}

// Check valid volume
if (!volumes[volume]) {
    console.error('Unknown volume specified');
    process.exit(1);
}

// Check valid program
if (!volumes[volume][program]) {
    console.error('Unknown program specified');
    process.exit(1);
}

// Check input
if (input.length === 0) {
    volumes[volume][program].usage();
    process.exit(1);
}

try {
    const result = volumes[volume][program].default(...input);
    console.log(result);
} catch (err) {
    console.error(err.message + '\n');
    volumes[volume][program].usage();
    process.exit(1);
}
