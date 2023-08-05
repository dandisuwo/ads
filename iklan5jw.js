
        
        player.setup({
            playlist: [{
                "image": getIMG,
                "sources": [{
                    "default": false,
                    "type": "application/dash+xml",
                    "file": "https://d25hrl3oturblv.cloudfront.net/out/v1/b433318b703240799f5940024d113bc6/index.mpd",
                    "drm": {
                        "clearkey": {
                            "keyId": "b7990eaceef137ccf32106593abd33c3",
                            "key": "67d835357d1f5b42b91ef27181d04fd4"
                        }
                    },
                    "label": "0"
                }]
            }],
            width: "100%",
            height: "100%",
            aspectratio: "16:9",
	    stretching: 'uniform',
            autostart: true,
		mute: false,
            logo: {
                file:"https://cdn.jsdelivr.net/gh/Arjunaaaaa/lsbtv/logolsbtv.png",
              link: 'https://linktr.ee/livestreambolatv',
                position: 'bottom-right',

            
             },
		captions: {
		        color: '#FFF',
		         fontSize: 15,
		         backgroundOpacity: 0,
		         edgeStyle: 'raised' 
		    },
          
            cast: {},
            //sharing: {}
        });

      function toggleStretchingMode() {
    player.setConfig({
      stretching: player.getConfig().stretching === "uniform" ? "exactfit" : "uniform"
    });
  }

  // Tambahkan event listener ke tombol
  const stretchingButton = document.getElementById("stretching-button");
  stretchingButton.addEventListener("click", toggleStretchingMode);



        // Listener untuk memastikan pemutar JW Player telah dimuat sebelum mengaksesnya
        jwplayer().on('ready', function () {
            player = jwplayer('player');
        });
