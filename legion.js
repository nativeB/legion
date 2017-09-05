//nativeB
(function(window){
    'use strict';
    function main_legion(){
        var legion = {};
        legion.main = function(){
            var torrentId=[...arguments]
            var where=torrentId.shift()
            var fallback=torrentId.shift()
            //check if webRTC is supported
            if (WebTorrent.WEBRTC_SUPPORT) {
                var client = new WebTorrent()
                var i=0;
                //get params and download
                var whereto=document.head;
                //if specified
                if(where==='body')
                {
                     whereto = document.body
                }
                //use spread content
                torrentId.forEach( function (file){
                    client.add(file,{announce: ['udp://tracker.openbittorrent.com:80',
                        'udp://tracker.leechers-paradise.org:6969',
                        'udp://tracker.coppersurfer.tk:6969',
                        'udp://tracker.opentrackr.org:1337',
                        'udp://explodie.org:6969',
                        'udp://zer0day.ch:1337',
                        'wss://tracker.btorrent.xyz',
                        'wss://tracker.openwebtorrent.com',
                        'wss://tracker.fastcast.nz'] }, function (torrent) {
                        var file = torrent.files.find(function (file) {
                            return file.name
                        })
                        //only append when done
                        torrent.on('done', onDone)
                        function onDone () {
                            //get file as blob
                            file.getBlobURL(function (err, url) {
                                if (err) throw err
                                if(file.name.endsWith('js')) {
                                    var h = document.createElement('script');
                                    h.src = url;
                                    h.id = i
                                    whereto.prepend(h)
                                    i++
                                    }
                                else if(file.name.endsWith('css')){
                                    var s = document.createElement('link');
                                    s.href= url
                                    s.rel="stylesheet"
                                    s.id = i
                                   whereto.prepend(s)
                                    i++

                                }
                            })}
                    })
                   })}
            else
            {// TODO: complete fallback code
                console.error('This browser is does not support WebRTC fallback used . Please use a browser with WebRTC support.')
                legion.fallback(fallback)
            }


        }

        legion.fallback=function () {
            //fallback just loads your scripts normally
            var i=0;
            var fallbackparams=[...arguments]
            var head = document.head
            fallbackparams.forEach(function (file) {
                if(file.endsWith('js')) {
                    var h = document.createElement('script');
                    h.src =file;
                    h.id = i;
                    console.log("calledn")
                    head.append(h)
                    i++
                }
                else if(file.endsWith('css')){
                    var s = document.createElement('link');
                    s.href= file
                    s.rel="stylesheet"
                    s.id = i
                    console.log("calledn")
                    head.append(s)
                    i++
                }
            })


        }
        return legion;
    }
    //define globally if it doesn't already exist
    if(typeof(legion) === 'undefined'){
        window.legion = main_legion();
    }
    else{
        console.log("legion already defined.");
    }
})(window);









