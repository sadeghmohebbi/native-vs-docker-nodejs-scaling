// Copyright 2024 Sadegh Mohebbi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const cluster = require('node:cluster')
const process = require('node:process')

const NumberOfWorkers = process.argv.at(2) ?? 8

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < NumberOfWorkers; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)

    if (cluster.workers.length < NumberOfWorkers) {
      for (let i = 0; i < (NumberOfWorkers - cluster.workers.length); i++) {
        cluster.fork();
      }
    }
  })

} else {
  require('./app')
  console.log(`Worker ${process.pid} started`);
}