import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.mp3':'audio/mpeg','.ico':'image/x-icon'};
const port=Number(process.env.PORT)||3000;
http.createServer((req,res)=>{
 try{
  const u=new URL(req.url,'http://localhost');
  let pathname=decodeURIComponent(u.pathname);
  if(pathname==='/'||!path.extname(pathname)) pathname='/index.html';
  const full=path.resolve(root,'.'+pathname);
  if(full!==root&&!full.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
  fs.readFile(full,(err,data)=>{
   if(err){res.writeHead(404);res.end('Not Found');return;}
   res.writeHead(200,{'Content-Type':mime[path.extname(full)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);
  });
 }catch{res.writeHead(400);res.end('Bad Request');}
}).listen(port,()=>console.log(`Tukang WiFi Naik Haji V3: http://localhost:${port}`));
