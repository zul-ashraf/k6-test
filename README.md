#### Running the tests
Start InfluxDB and Grafana:
```
docker-compose up -d influxdb grafana
```
Execute the K6 Test:
```
docker-compose run k6 run /scripts/<script-name>.js
```

#### Viewing the results
Open Grafana in your browser:
```
http://localhost:3000/d/k6/k6-load-testing-results
```

#### Dashboards
The dashboard in /dashboards is adapted from the excellent K6 / Grafana dashboard here:
https://grafana.com/grafana/dashboards/2587

#### References
* https://k6.io/docs/
* https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3