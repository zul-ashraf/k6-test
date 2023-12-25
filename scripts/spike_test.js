// Spike Test using k6
// Purpose: To see how the system handles a sudden surge in traffic.
// This test involves suddenly increasing the load significantly for a short period and then bringing it back down.

import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 50 },   // below normal load
        { duration: '1m', target: 50 },
        { duration: '10s', target: 500 },  // spike to 500 users
        { duration: '3m', target: 500 },   // stay at 500 users
        { duration: '10s', target: 50 },   // scale down to 50 users
        { duration: '3m', target: 50 },
        { duration: '10s', target: 0 },
    ],
};

export default function () {
    let response = http.get('https://test-api.k6.io');
    check(response, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}