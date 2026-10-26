// The renderer bundle is cached once and its scene bootstrap is DOM-guarded.
import {decodeAtmosphereData} from './sky.js?v=release-20261026-performance';
self.onmessage=async({data})=>{
 try{
  const textures=await decodeAtmosphereData(data.float32);
  self.postMessage({textures},textures.map(t=>t.buffer));
 }catch(error){self.postMessage({error:String(error.message||error)});}
};
