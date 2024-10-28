pnpm build
rm -rf /home/www-data/trentshailer.com/dist
mkdir -p /home/www-data/trentshailer.com/dist
cp nginx.conf /home/www-data/trentshailer.com/nginx.conf
mv dist /home/www-data/trentshailer.com
