// Review-only compositing: original sky engine, image cutouts, gentle distant-horizon opacity.
const city=document.querySelector('.city-back'),status=document.querySelector('#candidate-status');
const day=new Image(),night=new Image();
day.src='/assets/riyadh-candidate-day-cutout-v1.png';
night.src='/assets/riyadh-candidate-night-fewer-lights-v2.png';
try{
 await Promise.all([day.decode(),night.decode()]);
 function prepare(image){
  const canvas=document.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;
  const context=canvas.getContext('2d',{willReadFrequently:true});context.drawImage(image,0,0);
  const pixels=context.getImageData(0,0,canvas.width,canvas.height),data=pixels.data,w=canvas.width,h=canvas.height;
  // Generated cutouts use near-opaque alpha even inside buildings. Restore solid interiors.
  for(let i=3;i<data.length;i+=4)if(data[i]>=220)data[i]=255;
  for(let x=0;x<w;x++){
   let edge=-1;for(let y=0;y<h;y++)if(data[(y*w+x)*4+3]>32){edge=y;break;}
   // Distant city only. Taller landmark columns remain crisp and fully opaque.
   if(edge<h*.432||edge>h*.48)continue;
   const start=Math.floor(h*.425),end=Math.ceil(h*.48);
   for(let y=0;y<end;y++){const t=Math.max(0,Math.min(1,(y-start)/(end-start))),s=t*t*(3-2*t);data[(y*w+x)*4+3]*=s;}
  }
  context.putImageData(pixels,0,0);return{canvas,context,pixels};
 }
 const dayLayer=prepare(day);let nightLayer=prepare(night);
 // One fixed silhouette: source-atop changes color while preserving day alpha.
 const output=document.createElement('canvas');output.className='candidate-composite';
 output.width=dayLayer.canvas.width;output.height=dayLayer.canvas.height;city.appendChild(output);
 const painter=output.getContext('2d');let lastBlend=-1;
 function render(force=false){
  const blend=Math.max(0,Math.min(1,parseFloat(city.style.getPropertyValue('--night'))||0));
  if(!force&&Math.abs(blend-lastBlend)<.001)return;lastBlend=blend;
  painter.globalCompositeOperation='copy';painter.globalAlpha=1;painter.drawImage(dayLayer.canvas,0,0);
  painter.globalCompositeOperation='source-atop';painter.globalAlpha=blend;
  painter.drawImage(nightLayer.canvas,0,0,output.width,output.height);
  painter.globalAlpha=1;painter.globalCompositeOperation='source-over';
  // Verify actual foreground alpha once at the midpoint, where the old fade leaked sky.
  if(blend>.48&&blend<.54&&!city.dataset.opacityCheck){
   const samples=[.2,.5,.8].map(x=>painter.getImageData(Math.floor(output.width*x),Math.floor(output.height*.8),1,1).data[3]);
   city.dataset.opacitySamples=samples.join(',');city.dataset.opacityCheck=samples.every(alpha=>alpha===255)?'pass':'fail';
  }
 }
 function lights(percent){
  const copy=new ImageData(new Uint8ClampedArray(nightLayer.pixels.data),nightLayer.pixels.width,nightLayer.pixels.height),d=copy.data,amount=percent/100;
  if(amount!==1)for(let i=0;i<d.length;i+=4){const r=d[i]/255,g=d[i+1]/255,b=d[i+2]/255,brightness=Math.max(r,g,b),warmth=Math.max(0,Math.min(1,(r-b+.08)/.16));const lightScale=amount<1?1/(1+(1-amount)*3*brightness):1+(amount-1)*brightness,scale=1+warmth*(lightScale-1);d[i]*=scale;d[i+1]*=scale;d[i+2]*=scale;}
  nightLayer.context.putImageData(copy,0,0);render(true);document.querySelector('#candidate-light-value').value=percent+'%';
 }
 lights(100);document.querySelector('#candidate-lights').oninput=e=>lights(Number(e.target.value));
 document.querySelector('#candidate-density').onchange=async e=>{
  status.textContent='Loading lighting version…';const image=new Image();
  image.src=e.target.value==='fewer'?'/assets/riyadh-candidate-night-fewer-lights-v2.png':'/assets/riyadh-candidate-night-cutout-v1.png';
  try{await image.decode();nightLayer=prepare(image);lights(Number(document.querySelector('#candidate-lights').value));status.textContent=e.target.value==='fewer'?'Fewer lights · original intensity':'Previous dense lights · original intensity';}catch(error){status.textContent='Could not load lighting version.';console.error(error);}
 };
 const update=window.skyState.update;window.skyState.update=function(phase){update.call(this,phase);render();};
 city.style.visibility='visible';status.textContent='Fewer lights · intensity 100%';city.dataset.candidate='ready';
}catch(error){status.textContent='City layers failed to load; reload the preview.';console.error(error);}

