// Preserve the source half-float values without millions of proxy iterator calls.
let halfValues;
export function halfToFloat(data) {
 if (!halfValues) {
  halfValues = new Float32Array(65536);
  for (let bits=0; bits<65536; bits++) {
   const sign=bits&32768 ? -1 : 1, exponent=(bits>>>10)&31, mantissa=bits&1023;
   halfValues[bits]=exponent===0 ? sign*mantissa*2**-24 : exponent===31 ? (mantissa ? NaN : sign*Infinity) : sign*(1+mantissa/1024)*2**(exponent-15);
  }
 }
 const output=new Float32Array(data.length);
 for(let i=0;i<data.length;i++)output[i]=halfValues[data[i]];
 return output;
}

// Dedicated decoder is optional: old browsers and blocked workers retain fallback.
export function decodeAtmosphereInWorker(float32) {
 return new Promise((resolve,reject)=>{
  let worker;
  try { worker=new Worker(new URL('./sky-decode-worker.js?v=release-20261027-content-polish',import.meta.url),{type:'module'}); }
  catch(error){ reject(error);return; }
  const finish=(error,result)=>{clearTimeout(timeout);worker.terminate();error?reject(error):resolve(result);};
  const timeout=setTimeout(()=>finish(new Error('Atmosphere decoder timed out')),15000);
  worker.onmessage=({data})=>data.error?finish(new Error(data.error)):finish(null,data.textures);
  worker.onerror=event=>{event.preventDefault();finish(new Error('Atmosphere decoder unavailable'));};
  worker.postMessage({float32});
 });
}
