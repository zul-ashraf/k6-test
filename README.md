## k6とDocker Composeで負荷テスト

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
ブラウザで Grafana ダッシュボードを確認できる：

```
http://localhost:3000/d/k6/k6-load-testing-results
```
<img width="1470" alt="Screenshot 2023-12-25 at 12 59 10" src="https://github.com/zul-ashraf/k6-test/assets/63733652/37a44846-8dd2-4174-93a5-4e5f17bc47ee">


#### 参考
* https://k6.io/docs/
* https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3
