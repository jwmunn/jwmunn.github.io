---
layout: post
title:  "Migrating Wordpress from Cloud9 to GoDaddy"
date:   2017-10-23 12:00:00
permalink: blog/cloud9-to-godaddy-wp-migration/
tags: [web development, wordpress]
---

Ok so you’ve built out a Wordpress site in Cloud9. It was great during development because you could easily show it to your client. But now the honeymoon is over and you need to move it over to their server on GoDaddy. Because of the way Cloud9 is set up the migration wizard on GoDaddy won’t work. Let’s step through how to successfully migrate the site.

### Downloading your content and data from Cloud9

**1. Download wp-content folder**

Login to your Cloud9 workspace
Right click and download your wp-content folder.

![Download wp-content from c9](/images/wp-migration/c9-download.gif)

**2. Export your site**

Login to your Cloud9 Wordpress Dashboard

Go to Tools > Export > Download Export File. This should download an `.xml` file.

**3. Download Database**

Make sure phpMyAdmin is installed. In your Cloud9 text editor, go to the terminal and run the command:
`phpmyadmin-ctl install`

![Install phpMyAdmin on c9](/images/wp-migration/phpmyadmin-install.gif)

In your browser go to that url and login to phpMyAdmin. Choose your c9 table that has all of your `wp_tablename` tables. Either select all and export or click the **Export** tab, leave the default format SQL and press Go. You should now have a `.sql` file.

![Export .sql file](/images/wp-migration/sql-export.gif)


At the end of these 3 steps you should have a `wp-content` folder, `.xml` file and `.sql` file. These 3 files make up your Wordpress site and content.

### Migrating to GoDaddy

##### These steps are for a managed Wordpress hosting account. Tip: GoDaddy has fantastic customer service, if you get stuck call them and they will help you through it.
<br />

Login to your account, then under My Products > Managed WordPress click **Manage**. If you haven’t created your site yet do that now. Select New Wordpress Site since the migration option won’t work. Choose your domain. Once the site is done go to **Settings**.

![GoDaddy Settings](/images/wp-migration/godaddy-settings.gif)

### 1. Enable SFTP

On the right hand side under Settings > SFTP/SSH access. Choose manage and turn it on.

### 2. Upload the contents of your wp-content

Using an FTP client like Filezilla, enter the credentials from the previous step and connect to the GoDaddy server. You should see the Wordpress File structure inside the `www` folder. Navigate to the `wp-content` folder and then ftp the contents of your downloaded `wp-content` folder, overwriting the default contents on GoDaddy. 

##### This can take a long time, I recommend using an FTP client that shows the progress of the upload and file queue.
<br />

### 3. Import your .xml file
Once you’ve overwritten the wp-content folder, go to yourdomain.com/wp-admin and login to the Wordpress admin dashboard.

Go to Appearance > Themes and activate your theme.

Go to Tools > Import. Choose `Install Now` under the WordPress option. Once installed click `Run Importer` and upload the .xml file you downloaded from Cloud9.

### 4. Drop Database tables and Import SQL file
![Drop Tables](/images/wp-migration/drop-tables.gif)

Back in your GoDaddy > Wordpress > Settings, Under SFTP there is an option to Open phpMyAdmin. Once in phpMyAdmin select your database. Select all tables (there is a select all option on the bottom) then choose ‘Drop’. Once you’ve dropped the existing tables you can import your .sql file you downloaded from Cloud9.

### 5. Fix permalinks
If you refresh your browser at your GoDaddy domain you should see your site. However if you click any links it will redirect you back to your Cloud9 links. You need to update 2 tables to fix that. In phpMyAdmin select your database then the `wp_options` table. The 2 rows you need to edit with your new domain are `siteurl` and `home`. It’s also worth noting that now that you’ve imported your tables from Cloud9 your wp-admin login info has been over written and you’ll need to log in using the same info you did on Cloud9.

> Now grab a beer and enjoy looking through your migrated Wordpress site, you deserve it.
