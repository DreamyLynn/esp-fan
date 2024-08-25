const {forcePowerSource, light} = require('zigbee-herdsman-converters/lib/modernExtend');
const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const ota = require('zigbee-herdsman-converters/lib/ota');
const utils = require('zigbee-herdsman-converters/lib/utils');
const globalStore = require('zigbee-herdsman-converters/lib/store');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    zigbeeModel: ['ESP32C6.Fan'],
    model: 'ESP32C6.Fan',
    vendor: 'SnowyLynn',
    description: 'Fan test',
    fromZigbee: [fz.fan],
    toZigbee: [tz.fan_mode],
    exposes: [e.fan().withModes(['low', 'medium', 'high', 'on'])],
    meta: {},
}

module.exports = definition;
