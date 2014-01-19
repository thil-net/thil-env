thil-env
=============

A set of files to load onto THIL so you can figure out the runtime environment.

To load it (or any GitHub repo) into THIL (http://www.thil.net/), find the “download ZIP" button on the lower right of the repository page, copy the URL that it links to, and feed it to THIL as a quoted string. Like this:

http://api.thil.net/put/?%22https://github.com/thil-net/thil-env/archive/master.zip%22

(Note "%22" is escaped quotes)

Your THIL URL will always run the latest version. If you want to load it once and ignore updates, just don't quote the ZIP url when you give it to THIL.

Here's a running example: http://u3xq013spjw84o8ggwsg408w48.ord.thil.net/thil-env-master/ append the file you want to see the output of to that URL. For example to view the output of phpinfo.php go to 

http://u3xq013spjw84o8ggwsg408w48.ord.thil.net/thil-env-master/phpinfo.php

Enjoy :)
