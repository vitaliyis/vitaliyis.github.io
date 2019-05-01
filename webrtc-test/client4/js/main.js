'use strict';
const audio = document.querySelector('audio');

const constraints = window.constraints = {
    audio: true,
    video: false
};

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
//     stunServers: "stun:stun.l.google.com:19302",
//     autostart: true,
//     audioId: "remote-audio"
//
// };

// let config = {
//     uri: '1997@173.9.102.87:6588',
//     transportOptions: {
//         wsServers: ['wss://173.9.102.87:8089/ws'],
//         traceSip: true,
//         usePreloadedRoute: true,
//     },
//     realm: "173.9.102.87:6588",
//     contact_uri: "sip:1997@173.9.102.87",
//     authorizationUser: '1997',
//     registrarServer: "sip:1997@173.9.102.87:6588",
//     userAgentString: "sip:1997@173.9.102.87:6588",
//     displayName: "1997",
//     password: '!@#$%~',
//     register: true,
//     usePreloadedRoute: true,
//     hackWssInTransport: true,
//     stunServers: "stun:stun.l.google.com:19302",
//     audioId: "remote-audio"
//
// };

let config = {
    uri: '3003@fusionpbx.comapptech.net',
    transportOptions: {
        wsServers: ['wss://fusionpbx.comapptech.net:7443'],
        traceSip: true,
        usePreloadedRoute: true,
    },
    realm: "fusionpbx.comapptech.net",
    contact_uri: "3003@fusionpbx.comapptech.net",
    authorizationUser: '3003',
    registrarServer: "3003@fusionpbx.comapptech.net",
    userAgentString: "3003@fusionpbx.comapptech.net",
    displayName: "3003",
    password: '*y!!yInQX*',
    register: true,
    usePreloadedRoute: true,
    hackWssInTransport: true,
    stunServers: "stun:stun.l.google.com:19302",

};

var session;
// var ua = new SIP.UA(config);
phone.init(config);

setTimeout(() => {
    var options = {
        'extraHeaders': ['X-Foo: foo', 'X-Bar: bar', 'Contact: <sip:7816651997@fusionpbx.comapptech.net;transport=wss>;expires=600']
    };
    phone.ua.register(options);

    setTimeout(() => {
        console.log(phone.ua.isRegistered());
        // my code
        // btnCall.removeAttribute('disabled');
        myCall();

    }, 1000);
}, 2000);

var endButton = document.getElementById('hangupbtn');
endButton.addEventListener("click", function () {
    session.terminate();
    // alert("Call Ended");
}, false);

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
document.getElementById('9').addEventListener("click", function () {
    session.dtmf(9);
}, false);
document.getElementById('*').addEventListener("click", function () {
    session.dtmf("*");
}, false);
document.getElementById('0').addEventListener("click", function () {
    session.dtmf(0);
}, false);
document.getElementById('#').addEventListener("click", function () {
    session.dtmf("#");
}, false);
var trackAdded = 0;

function myCall () {
    session = phone.ua.invite('sip:7816651997@fusionpbx.comapptech.net', {
        // session = phone.ua.invite('sip:1234@127.0.0.1:5061', {
        sessionDescriptionHandlerOptions: {
            constraints: {
                audio: true,
                video: false
            },
        }
    });
    let remoteVideo = document.getElementById('remoteVideo');
    let localVideo = document.getElementById('localVideo');

    session.on('trackAdded', function() {
        // We need to check the peer connection to determine which track was added
        var pc = session.sessionDescriptionHandler.peerConnection;

        // Gets remote tracks
        var remoteStream = new MediaStream();
        pc.getReceivers().forEach(function(receiver) {
            remoteStream.addTrack(receiver.track);
        });
        remoteVideo.srcObject = remoteStream;
        remoteVideo.play();

        // Gets local tracks
        var localStream = new MediaStream();
        pc.getSenders().forEach(function(sender) {
            // my code start
            buttons.forEach(btn =>  btn.removeAttribute('disabled') );
            btnHangup.removeAttribute('disabled');
            btnCall.setAttribute('disabled', true);
            waitTitle.style.display = 'none';
            // my code end

            localStream.addTrack(sender.track);
        });
        localVideo.srcObject = localStream;
        localVideo.play();
    });
}

var callBtn = document.getElementById('callbtn');
callBtn.addEventListener("click", myCall);



