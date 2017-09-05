
# Legion
A simple script  that uses the power of webtorrent to serve your  site's scripts and resources ,its all <a href="https://webtorrent.io/">Webtorrent</a>  here, legion just handles the file.this will reduce the load on your servers  by letting your users chip  in , a script 
here or there wont hurt .Oh and Torrents are immutable so rest assured no ones going to  change your files

## Getting started
Download  <a href="https://webtorrent.io/desktop/">webtorrent desktop</a> client for use as your very own cdn server.
Add your scripts after installation to start seeding, you can simply drag and drop them in there one by one not bulk.

Then open your index.html file and  add the <a href="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js">webtorrent standalone script</a> as well as  legion.js 
```javascript
<script src="webtorrent.min.js"><script>
<script src="legion.js"></script>
```
Now call the main function like so:
```javascript
 <script>
    legion.main("location","fallback","infohash")
  eg. legion.main("head","tcs.css","db285c841af6a3c19ef8b479b8e9c0c031797c80,db285c841af6a3c19ef8b479b8e9c0c031797c80")
      legion.main("body","cs.css","db285c841af6a3c19ef8b479b8e9c0c031797c80,db285c841af6a3c19ef8b479b8e9c0c031797c80")
 </script>
 ```

 You can add as many as you want 
 
  <strong>locations</strong> in the document can either be the <strong>head</strong> or the<strong>body</strong>
 The <strong>infohash</strong> is the infohash of the torrent you created in the webtorrent client, it can be as many as you want  but remember to add them in order of preference{important files first}
 
 The fallback fields accepts the file paths to your scripts , this is used when your user dosent support webtorrent you can just add only the name if legion.js is in the same folder
 
 
oh and to get the info hash of your torrent just rightclick your torrent in the webtorrent desktop 
copy the instant.io link 
paste it in your editor and just copy everything after  instant.io/#


## Prerequisites
<a href="https://webtorrent.io/desktop/"> webtorrent desktop</a>
{you can use  instant.io but you would essentialy be hosting your scripts in a browser}

 <p><a href="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js">webtorrent script</a> </p>


## License
This project is licensed under the MIT License - see the LICENSE.md file for details

