// Soak Test using k6
// Purpose: To determine if the system can sustain a continuous expected load.
// This test involves applying a moderate load on the system for an extended period to identify issues like memory leaks.

import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    duration: '24h', // 24 hours
    vus: 50, // 50 users
};

export default function () {
    let response = http.get('https://test-api.k6.io');
    check(response, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}
