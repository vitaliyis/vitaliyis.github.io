var phone = new class phone {
	constructor(){
		this.stack = null;
		this.session = null;
		this.option = null;
		this.audio = {
			main: new Audio(),
		};
		this.audio.main.autoplay = true;
	}
	
	init (data) {
		this.startOption = data;
		this.prepare();
		this.start();
	}

	prepare(){
		this.callBtn = document.getElementById('callbtn');
		this.declineBtn = document.getElementById('hangupbtn');
	}

	start () {
		
		this.ua = new SIP.UA(this.startOption);
		// this.ua.start();
		// this.ua.register();
		// SIPml.init(phone.createSipStack);
		// window.onunload = () => phone.stopStack();
	}

	// call(action){
	// 	if (action == "call") {
			
	// 	}
	// }

	// sipEventsListener (e) {
	// 	console.log('- sip event: ' + e.type);
	// 	switch (e.type) {
	// 		case "started":
	// 			login();
	// 			document.getElementById('register').classList.add("hidden");
	// 			document.getElementById('phone').classList.add("active");
	// 			break;
	// 		case "i_new_call":
	// 			callBtn.setAttribute("data-action", "answer");
	// 			declineBtn.classList.add("active");
	// 			ringing.play();
	// 			callSession = e.newSession;
	// 			callSession.setConfiguration({
	// 				audio_remote: document.getElementById(startOption.audioId),
	// 				events_listener: {
	// 					events: '*',
	// 					listener: callEventsListener
	// 				}
	// 			});
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }
	
	// createSipStack() {
	// 	sipStack = new SIPml.Stack({
	// 		realm: startOption.realm,
	// 		impi: startOption.impi,
	// 		impu: startOption.impu,
	// 		password: startOption.password,
	// 		display_name: startOption.display_name,
	// 		enable_rtcweb_breaker: startOption.enable_rtcweb_breaker,
	// 		websocket_proxy_url: startOption.websocket_proxy_url,
	// 		ice_servers: startOption.ice_servers,
	// 		events_listener: {
	// 			events: '*',
	// 			listener: sipEventsListener
	// 		},
	// 		sip_headers: [
	// 			{ name: 'User-Agent', value: 'WebRTC-Phone sipML' }
	// 		]
	// 	});
	// 	sipStack.start();
	// }
	
	// registerEventsListener (e) {
	// 	console.log('- register session event: ' + e.type);
	// }
	
	// login() {
	// 	registerSession = sipStack.newSession('register', {
	// 		events_listener: {
	// 		events: '*',
	// 		listener: registerEventsListener
	// 		}
	// 	});
	// 	registerSession.register();
	// }
	
	// logout() {
	// 	registerSession.unregister();
	// }

	// callEventsListener (e) {
	// 	console.log('- call session event: ' + e.type);
	// 	switch (e.type) {
	// 		case "i_new_call":
	// 			callBtn.setAttribute("data-action", "answer");
	// 			break;
	// 		case "i_ao_request":
	// 			callBtn.setAttribute("data-action", "ringing");
	// 			declineBtn.classList.remove("active");
	// 			break;
	// 		case "connected":
	// 			callBtn.setAttribute("data-action", "hangup");
	// 			declineBtn.classList.remove("active");
	// 			ringing.pause();
	// 			calling.pause();
	// 			break;
	// 		case "terminating":
	// 		case "terminated":
	// 			callBtn.setAttribute("data-action", "call");
	// 			declineBtn.classList.remove("active");
	// 			ringing.pause();
	// 			calling.pause();
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }

	// call(to) {
	// 	callSession = sipStack.newSession('call-audio', {
	// 		audio_remote: document.getElementById(startOption.audioId),
	// 		events_listener: {
	// 			events: '*',
	// 			listener: callEventsListener
	// 		}
	// 	});
	// 	callSession.call('sip:' + to + '@' + startOption.realm);
	// 	calling.play();
	// }

	// callEvt (e, to) {
	// 	switch (e) {
	// 		case "call":
	// 			callSession = sipStack.newSession('call-audio', {
	// 				audio_remote: document.getElementById(startOption.audioId),
	// 				events_listener: {
	// 					events: '*',
	// 					listener: callEventsListener
	// 				}
	// 			});
	// 			callSession.call(`sip:${to}@${startOption.realm}`);
	// 			calling.play();
	// 			break;
	// 		case "hangup":
	// 		case "ringing":
	// 			callSession.reject();
	// 			break;
	// 		case "answer":
	// 			callSession.accept();
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }

	// answer(e) {
	// 	callSession.accept();
	// }

	// hangup(e) {
	// 	callSession.reject();
	// }

	// stopStack(e) {
	// 	if (sipStack) {
	// 		sipStack.stop();
	// 		sipStack = null;
	// 		callSession = null;
	// 	}
	// }
};