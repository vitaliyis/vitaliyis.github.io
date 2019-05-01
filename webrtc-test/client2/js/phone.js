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
	}

};