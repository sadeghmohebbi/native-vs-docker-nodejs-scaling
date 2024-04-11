# Docker Scale vs Node Cluster
benchmark (stress test) for sample node js backend app

# How to run

requirements:
- docker and compose plugin
- k6 (from grafana) [to install it, see this page](https://grafana.com/docs/k6/latest/set-up/install-k6/)

running node backend app that scaled vi docker deploy scale feature:

```
sudo docker compose -f docker-compose.scaled.yml up -d --build
```

now you can run test via command below:

```
k6 run load-test.js
```

repeat last step after these command to evaluate node backend app that scaled with node native cluster builtin module

```
sudo docker compose -f docker-compose.scaled.yml down
sudo docker compose -f docker-compose.native-cluster up -d --build
```

## Contribution

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License
> Copyright 2024 Sadegh Mohebbi
> 
> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
> 
>     https://www.apache.org/licenses/LICENSE-2.0
> 
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.


