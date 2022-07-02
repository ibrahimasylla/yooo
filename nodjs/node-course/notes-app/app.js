const chalk = require("chalk");
const yargs = require("yargs");

// const error = chalk.bold.red;
// const warning = chalk.keyword("orange");

// const senegal = chalk.keyword("green");

// console.log(error("Error!"));
// console.log(warning("Warning!"));

// console.log(senegal("Yoo"));

// const name = "Sindre";
// console.log(chalk.green("Hello %s"), name);

// console.log(process.argv);

// const commande = process.argv[2];

// if (commande === "add") {
//   console.log("Adding note");
// } else if (commande === "remove") {
//   console.log("removing ");
// }

//add,remove,read,list

//Crete add comande
yargs.command({
  command: 'add',
  describe: 'add description ',
  builder:{
    title:{
      describe:'note title ',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:' Note !! ',
      demandOption:true,
      type:'string'

    }

  },
  handler: function (argv) {
    console.log("title : " +argv.title);
    console.log("Body: " +argv.body);
  },
});

yargs.command({
  command: 'list',
  describe: 'list description ',
  handler: function () {
    console.log("listiing out  ");
  },
});

yargs.command({
  command: 'read',
  describe: 'read description ',
  handler: function () {
    console.log("reading");
  },
});

yargs.command({
  command: 'remove',
  describe: 'add description ',
  handler: function () {
    console.log("removing");
  },
});



yargs.parse();