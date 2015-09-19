var shell = require('shelljs');

shell.echo = 'Installing Nginx';
shell.exec('sudo apt-get update');
  if(!test('-d', '/etc/nginx/' )){

      if(shell.exec('sudo apt-get install nginx').code !== 0){
        shell.echo('Failed to fetch Nginx');
        shell.exit(1);
      }

  }

shell.exec('sudo service nginx start');

cd('/etc/nginx/sites-available');

  if(test('-f', 'default')){

    shell.exec('sudo rm -rf default');
  }

mv(-f, '*/mywebsite/Nginx_setup/default', '/etc/nginx/sites-available');

shell.exec('sudo service nginx reload');
