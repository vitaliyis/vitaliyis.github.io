'use strict';
const audio = document.querySelector('audio');

const constraints = window.constraints = {
    audio: true,
    video: false
};

let config = {
    uri: '0@fusionpbx.comapptech.net',
    transportOptions: {
        wsServers: ['wss://fusionpbx.comapptech.net:7443'],
        traceSip: true,
        usePreloadedRoute: true,
    },
    realm: "fusionpbx.comapptech.net",
    contact_uri: "0@fusionpbx.comapptech.net",
    authorizationUser: '0',
    registrarServer: "0@fusionpbx.comapptech.net",
    userAgentString: "0@fusionpbx.comapptech.net",
    displayName: "0",
    password: '8*m3Xf.vq!',
    register: true,
    usePreloadedRoute: true,
    hackWssInTransport: true,
    stunServers: "stun:stun.l.google.com:19302",
    dtmfType: SIP.C.dtmfType.RTP
};

var session;
// var ua = new SIP.UA(config);
phone.init(config);

setTimeout(() => {
    var options = {
        'extraHeaders': ['X-Foo: foo', 'X-Bar: bar', 'Contact: <sip:8573019304@fusionpbx.comapptech.net;transport=wss>;expires=600']
    };
    phone.ua.register(options);

    setTimeout(() => {
        console.log(phone.ua.isRegistered());
        // my code
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
    session.dtmf(10);
}, false);
document.getElementById('0').addEventListener("click", function () {
    session.dtmf(11);
}, false);
document.getElementById('#').addEventListener("click", function () {
    session.dtmf(12);
}, false);
var trackAdded = 0;

function myCall () {

    // my code start
    btnCall.setAttribute('disabled', true);
    range.setAttribute('disabled', true);
    waitTitle.style.display = 'block';
    // my code end

    session = phone.ua.invite('sip:1999@fusionpbx.comapptech.net', {
    // session = phone.ua.invite('sip:8573019304@fusionpbx.comapptech.net', {
    //session = phone.ua.invite('sip:7816651997@fusionpbx.comapptech.net', {
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

    session.on('dtmf', function(request, dtmf)
    {
        console.log('request=======>',request);
        console.log('dtmf=======>',dtmf);
    })

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
            range.removeAttribute('disabled');
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



