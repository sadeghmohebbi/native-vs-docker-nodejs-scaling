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

const express = require('express')

const app = express()
const Port = process.env.POST ?? 3000

app.get('/', (req, res) => {
  return res.status(200).send('open for discover: <a href="/calc/log10/20">log10(20)</a>')
})

app.get('/calc/log10/:num', (req, res) => {
  const num = parseInt(req.params.num)
  return res.status(200).send(`answer: log10(${num}) is ${Math.log10(num)}`)
})

app.listen(Port, () => {
  console.log(`calculator app is listening on port ${Port}`)
})
