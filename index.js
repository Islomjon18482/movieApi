// index.js

// Expressni import qilamiz
const express = require('express');
// Expressning app() metodini chaqiramiz
const app = express();
// Portni aniqlaymiz
const port = 3000;

app.get('/', (req, res) => {
    res.json(
        {
            ALYac: {
              detected: false,
              result: null,
              update: '20240322',
              version: '2.0.0.8'
            },
            AVG: {
              detected: false,
              result: null,
              update: '20240322',
              version: '23.9.8494.0'
            },
            Acronis: {
              detected: false,
              result: null,
              update: '20230828',
              version: '1.2.0.121'
            },
            'AhnLab-V3': {
              detected: false,
              result: null,
              update: '20240322',
              version: '3.25.1.10473'
            },
            Alibaba: {
              detected: false,
              result: null,
              update: '20190527',
              version: '0.3.0.5'
            },
            'Antiy-AVL': { detected: false, result: null, update: '20240322', version: '3.0' },
            Arcabit: {
              detected: false,
              result: null,
              update: '20240322',
              version: '2022.0.0.18'
            },
            Avast: {
              detected: false,
              result: null,
              update: '20240322',
              version: '23.9.8494.0'
            },
            'Avast-Mobile': {
              detected: false,
              result: null,
              update: '20240322',
              version: '240322-00'
            },
            Avira: {
              detected: false,
              result: null,
              update: '20240322',
              version: '8.3.3.18'
            },
            Baidu: {
              detected: false,
              result: null,
              update: '20190318',
              version: '1.0.0.2'
            },
            BitDefender: { detected: false, result: null, update: '20240322', version: '7.2' },
            BitDefenderTheta: {
              detected: false,
              result: null,
              update: '20240305',
              version: '7.2.37796.0'
            },
            Bkav: {
              detected: false,
              result: null,
              update: '20240322',
              version: '2.0.0.1'
            },
            'CAT-QuickHeal': {
              detected: false,
              result: null,
              update: '20240321',
              version: '22.00'
            },
            CMC: {
              detected: false,
              result: null,
              update: '20240317',
              version: '2.4.2022.1'
            },
            Cynet: {
              detected: false,
              result: null,
              update: '20240322',
              version: '4.0.1.1'
            },
            DrWeb: {
              detected: false,
              result: null,
              update: '20240322',
              version: '7.0.62.1180'
            },
            'ESET-NOD32': {
              detected: false,
              result: null,
              update: '20240322',
              version: '28937'
            },
            Emsisoft: {
              detected: false,
              result: null,
              update: '20240322',
              version: '2022.6.0.32461'
            },
            'F-Secure': {
              detected: false,
              result: null,
              update: '20240322',
              version: '18.10.1547.307'
            },
            FireEye: {
              detected: false,
              result: null,
              update: '20240322',
              version: '35.47.0.0'
            },
            Fortinet: {
              detected: false,
              result: null,
              update: '20240322',
              version: 'None'
            },
            GData: {
              detected: false,
              result: null,
              update: '20240322',
              version: 'A:25.37612B:27.35361'
            },
            Google: {
              detected: false,
              result: null,
              update: '20240322',
              version: '1711096290'
            },
            Gridinsoft: {
              detected: false,
              result: null,
              update: '20240322',
              version: '1.0.169.174'
            },
            Ikarus: {
              detected: false,
              result: null,
              update: '20240322',
              version: '6.3.12.0'
            },
            Jiangmin: {
              detected: false,
              result: null,
              update: '20240321',
              version: '16.0.100'
            },
            K7AntiVirus: {
              detected: false,
              result: null,
              update: '20240322',
              version: '12.149.51457'
            },
            K7GW: {
              detected: false,
              result: null,
              update: '20240322',
              version: '12.149.51455'
            },
            Kaspersky: {
              detected: false,
              result: null,
              update: '20240322',
              version: '22.0.1.28'
            },
            Kingsoft: {
              detected: false,
              result: null,
              update: '20230906',
              version: 'None'
            },
            Lionic: { detected: false, result: null, update: '20240322', version: '7.5' },
            MAX: {
              detected: false,
              result: null,
              update: '20240322',
              version: '2023.1.4.1'
            },
            Malwarebytes: {
              detected: false,
              result: null,
              update: '20240322',
              version: '4.5.5.54'
            },
            MaxSecure: {
              detected: false,
              result: null,
              update: '20240322',
              version: '1.0.0.1'
            },
            McAfee: {
              detected: false,
              result: null,
              update: '20240321',
              version: '6.0.6.653'
            },
            'MicroWorld-eScan': {
              detected: false,
              result: null,
              update: '20240322',
              version: '14.0.409.0'
            },
            Microsoft: {
              detected: false,
              result: null,
              update: '20240322',
              version: '1.1.24020.9'
            },
            'NANO-Antivirus': {
              detected: false,
              result: null,
              update: '20240322',
              version: '1.0.146.25796'
            },
            Panda: {
              detected: false,
              result: null,
              update: '20240321',
              version: '4.6.4.2'
            },
            SUPERAntiSpyware: {
              detected: false,
              result: null,
              update: '20240322',
              version: '5.6.0.1032'
            },
            Sangfor: {
              detected: false,
              result: null,
              update: '20240318',
              version: '2.23.0.0'
            },
            SentinelOne: {
              detected: false,
              result: null,
              update: '20240129',
              version: '24.1.0.5'
            },
            Skyhigh: {
              detected: false,
              result: null,
              update: '20240321',
              version: 'v2021.2.0+4045'
            },
            Sophos: {
              detected: false,
              result: null,
              update: '20240322',
              version: '2.4.3.0'
            },
            Symantec: {
              detected: false,
              result: null,
              update: '20240322',
              version: '1.21.0.0'
            },
            TACHYON: {
              detected: false,
              result: null,
              update: '20240322',
              version: '2024-03-22.02'
            },
            Tencent: {
              detected: false,
              result: null,
              update: '20240322',
              version: '1.0.0.1'
            },
            TrendMicro: {
              detected: false,
              result: null,
              update: '20240322',
              version: '11.0.0.1006'
            },
            'TrendMicro-HouseCall': {
              detected: false,
              result: null,
              update: '20240322',
              version: '10.0.0.1040'
            },
            Trustlook: { detected: false, result: null, update: '20240322', version: '1.0' },
            VIPRE: {
              detected: false,
              result: null,
              update: '20240321',
              version: '6.0.0.35'
            },
            Varist: {
              detected: false,
              result: null,
              update: '20240322',
              version: '6.5.1.2'
            },
            ViRobot: {
              detected: false,
              result: null,
              update: '20240322',
              version: '2014.3.20.0'
            },
            VirIT: {
              detected: false,
              result: null,
              update: '20240321',
              version: '9.5.666'
            },
            Xcitium: {
              detected: false,
              result: null,
              update: '20240322',
              version: '36545'
            },
            Yandex: {
              detected: false,
              result: null,
              update: '20240322',
              version: '5.5.2.24'
            },
            Zillya: {
              detected: false,
              result: null,
              update: '20240321',
              version: '2.0.0.5076'
            },
            ZoneAlarm: { detected: false, result: null, update: '20240322', version: '1.0' },
            Zoner: {
              detected: false,
              result: null,
              update: '20240322',
              version: '2.2.2.0'
            }
        }
    )
  })




app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishga tushdi`);
});
