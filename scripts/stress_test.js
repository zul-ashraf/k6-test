// Stress Test using k6
// Purpose: To determine the limits of the system under test and how it behaves under extreme conditions.
// This test gradually increases the load until the system breaks down, identifying its threshold.

import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '2m', target: 100 },  // ramp up to 100 users
        { duration: '5m', target: 100 },  // stay at 100 users
        { duration: '2m', target: 200 },  // ramp up to 200 users
        { duration: '5m', target: 200 },  // stay at 200 users
        { duration: '2m', target: 0 },    // ramp down to 0 users
    ],
};

export default function () {
    let response = http.get('https://test-api.k6.io');
    check(response, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}