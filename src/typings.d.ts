/// <reference types="jquery"/>


interface CounterUp {
    settings: CounterUpSettings;

    (behavior: 'enable'): JQuery;
    (settings?: CounterUpSettings): JQuery;
}

interface CounterUpSettings {
    delay?: number;
    time?: number;
}

interface JQuery {
    counterUp: CounterUp;
}

declare module 'waypoints' {
    export = Waypoint;
}
