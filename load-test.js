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
import { check, sleep } from 'k6'
import http from 'k6/http'

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: '1m', target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 1 minutes.
    { duration: '2m', target: 200 }, // stay at higher 200 users for 3 minutes
    { duration: '3m', target: 0 }, // ramp-down to 0 users
  ],
}

export default function () {
  const randomNumber = Math.round(Math.random() * 1000)
  const res = http.get(`http://localhost:8080/calc/log10/${randomNumber}`)
  sleep(1)
  check(res, {
    'is status 200': (r) => r.status === 200,
  })
}