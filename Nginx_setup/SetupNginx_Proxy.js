var shell = require('shelljs');

shell.echo = 'Installing Nginx';
shell.exec('sudo apt-get update');
  if(!shell.test('-d', '/etc/nginx/' )){

      if(shell.exec('sudo apt-get install nginx').code !== 0){
        shell.echo('Failed to fetch Nginx');
        shell.exit(1);
      }

  }

shell.exec('sudo service nginx start');

shell.cd('/etc/nginx/sites-available');

  if(shell.test('-f', 'default')){

    shell.exec('sudo rm -rf default');
  }

shell.exec('sudo cp /home/sid/Documents/mywebsite/Nginx_setup/default /etc/nginx/sites-available/');

shell.exec('sudo service nginx reload');
