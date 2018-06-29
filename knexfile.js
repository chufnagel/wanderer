module.exports = {
  //   development: {
  //   client: 'pg',
  //   connection: {
  //     host: '127.0.0.1',
  //     database: 'wanderer',
  //     user: 'bodzin',
  //     port: 5432
  //   },
  //   useNullAsDefault: true,
  //   pool: {
  //     min: 1,
  //     max: 9
  //   },
  //   migrations: {
  //     directory: "./migrations"
  //   },
  //   seeds: {
  //     directory: "./seeds"
  //   }
  // },
  development: {
    client: 'pg',
    connection: {
      host: 'ec2-23-23-245-89.compute-1.amazonaws.com',
      database: 'd1s3hv2vnf6mjn',
      user: 'bzkhzzkphhbcmx',
      password: 'f2efb58e636344d91637ca7bb756150d65bdd3a8b33f6c60dc6ec7b73e40fdbf'
    },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 9
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
//   mysql: {
//     client: 'mysql',
//     connection: {
//       host: '127.0.0.1',
//       user: 'root',
//       password: 'T2sFb6eXKHrV2d',
//       database: 'goalposts',
//     },
//     useNullAsDefault: true,
//     pool: {
//       min: 1,
//       max: 9,
//     },
//     migrations: {
//       directory: './migrations',
//     },
//     seeds: {
//       directory: './seeds',
//     },
//   },
//   postgres: {
//     client: 'pg',
//     connection: {
//       host: '127.0.0.1',
//       user: 'postgres',
//       database: 'goalposts',
//     },
//     useNullAsDefault: true,
//     pool: {
//       min: 1,
//       max: 9,
//     },
//     migrations: {
//       directory: './migrations',
//     },
//     seeds: {
//       directory: './seeds',
//     },
//   },
// }
