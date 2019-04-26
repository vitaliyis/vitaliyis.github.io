var remoteVideoElement = document.getElementById('remoteVideoElement');

// let config = {
//     uri: '702@127.0.0.1',
//     transportOptions: {
//         wsServers: ['wss://127.0.0.1:8089/ws'],
//         traceSip: true,
//         usePreloadedRoute: true,
//     },
//     realm: "127.0.0.1:5061",
//     contact_uri: "sip:702@127.0.0.1",
//     authorizationUser: '702',
//     registrarServer: "sip:702@127.0.0.1:5061",
//     userAgentString: "sip:702@127.0.0.1:5061",
//     displayName: "702",
//     password: '702',
//     register: true,
//     usePreloadedRoute: true,
//     hackWssInTransport: true,
//     stunServers: "stun:stun.l.google.com:19302"
//
// };

let config = {
    uri: '1997@173.9.102.87:6588',
    transportOptions: {
        wsServers: ['wss://173.9.102.87:8089/ws'],
        traceSip: true,
        usePreloadedRoute: true,
    },
    realm: "173.9.102.87:6588",
    contact_uri: "sip:1997@173.9.102.87",
    authorizationUser: '1997',
    registrarServer: "sip:1997@173.9.102.87:6588",
    userAgentString: "sip:1997@173.9.102.87:6588",
    displayName: "1997",
    password: '!@#$%~',
    register: true,
    usePreloadedRoute: true,
    hackWssInTransport: true,
    stunServers: "stun:stun.l.google.com:19302"

};
var session;
// var ua = new SIP.UA(config);
phone.init(config);

setTimeout(() => {
    var options = {
        'extraHeaders': ['X-Foo: foo', 'X-Bar: bar', 'Contact: <sip:1997@173.9.102.87;transport=wss>;expires=600']
    };
    phone.ua.register(options);

    setTimeout(() => {
        console.log('Registered Success!: ', phone.ua.isRegistered());
    }, 1000);
}, 2000);

// var endButton = document.getElementById('hangupbtn');
// endButton.addEventListener("click", function () {
//     session.terminate();
//     alert("Call Ended");
// }, false);

phone.ua.on('registrationFailed', e => {
    console.log("My register", e);
});

document.getElementById('1').addEventListener("click", function () {
    session.dtmf(1);
}, false);
document.getElementById('2').addEventListener("click", function () {
    session.dtmf(2);
}, false);
document.getElementById('3').addEventListener("click", function () {
    session.dtmf(3);
}, false);
document.getElementById('4').addEventListener("click", function () {
    session.dtmf(4);
}, false);
document.getElementById('5').addEventListener("click", function () {
    session.dtmf(5);
}, false);
document.getElementById('6').addEventListener("click", function () {
    session.dtmf(6);
}, false);
document.getElementById('7').addEventListener("click", function () {
    session.dtmf(7);
}, false);
document.getElementById('8').addEventListener("click", function () {
    session.dtmf(8);
}, false);
document.getElementById('8').addEventListener("click", function () {
    session.dtmf(8);
}, false);
document.getElementById('9').addEventListener("click", function () {
    session.dtmf(9);
}, false);
document.getElementById('*').addEventListener("click", function () {
    session.dtmf("*");
}, false);
document.getElementById('8').addEventListener("click", function () {
    session.dtmf(0);
}, false);
document.getElementById('8').addEventListener("click", function () {
    session.dtmf("#");
}, false);
document.getElementById('callbtn').addEventListener("click", function () {
    session = phone.ua.invite('sip:7816651997@173.9.102.87:6588', {
    // session = phone.ua.invite('sip:1234@127.0.0.1:5061', {
        sessionDescriptionHandlerOptions: {
            constraints: {
                audio: true,
                video: false
            }
        }
    });
    session.accept;
});

// function onConnected() {
// var options = {
//     media: {
//         constraints:{
//             audio:true,
//             video:false
//         },
//         render: {
//             remote: {
//                 audio: document.getElementById('audio_remote')
//             },
//
//             local:  {
//                 audio: document.getElementById('localAudio')
//             }
//         }
//     }
// };

// }