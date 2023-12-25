// Smoke Test using k6
// Purpose: To ensure that the most crucial functions of the system work as expected.
// This is a preliminary test that runs with a very small load before more intense testing.

import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 1, // 1 user looping for 1 minute
    duration: '1m',
};

export default function () {
    let response = http.get('https://test-api.k6.io');
    check(response, { 'status was 200': (r) => r.status == 200 });
}