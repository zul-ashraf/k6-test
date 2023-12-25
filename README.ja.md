## Docker Composeでk6負荷テスト

#### テストの実行
InfluxDBとGrafanaを起動する：
```
docker-compose up -d influxdb grafana
```
K6 テストを実行する：
```
docker-compose run k6 run /scripts/<script-name>.js
```

#### 結果
ブラウザで Grafana ダッシュボードを開く：
```
http://localhost:3000/d/k6/k6-load-testing-results
```

#### 参考
* https://k6.io/docs/
* https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3