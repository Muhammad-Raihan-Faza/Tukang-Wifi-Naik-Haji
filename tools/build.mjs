import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {execFileSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
execFileSync(process.execPath,['tools/check.mjs'],{cwd:root,stdio:'inherit'});
const dist=path.join(root,'dist');fs.rmSync(dist,{recursive:true,force:true});fs.mkdirSync(dist,{recursive:true});
const page=fs.readFileSync(path.join(root,'index.html'),'utf8');
const styles=[...new Set([...page.matchAll(/href=\"([^\"]+\.css)\"/g)].map(x=>x[1]))];
for(const file of ['index.html',...styles]){const source=path.join(root,file);if(!fs.existsSync(source))throw Error(`Stylesheet tidak ditemukan: ${file}`);fs.copyFileSync(source,path.join(dist,file));}
fs.cpSync(path.join(root,'src'),path.join(dist,'src'),{recursive:true});
fs.cpSync(path.join(root,'assets'),path.join(dist,'assets'),{recursive:true});
console.log('Build website statis selesai: dist/');
