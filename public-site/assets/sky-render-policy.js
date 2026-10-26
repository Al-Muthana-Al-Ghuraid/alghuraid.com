// Gate expensive scene work; elapsed time belongs to rendered frames, not RAF ticks.
export function createRenderPolicy(fps=60){
 let lastFrame,nextFrame,wasBlocked=true,lastKey='',idle=false;
 const interval=1000/fps;
 return {
  frame(now,{blocked=false,moving=true,settled=false,key='',force=false}={}){
   if(blocked){wasBlocked=true;return null;}
   const changed=key!==lastKey;
   if(wasBlocked){wasBlocked=false;lastFrame=nextFrame=undefined;idle=false;}
   if(!moving&&settled&&idle&&!changed&&!force)return null;
   if(nextFrame!==undefined&&now<nextFrame-.25&&!force)return null;
   // Preserve theme-transition wall time; the renderer separately caps simulation steps.
   // Hidden/frozen/idle periods are excluded so returning cannot advance the scene.
   const seconds=lastFrame===undefined||idle?0:Math.max(0,(now-lastFrame)/1000);
   nextFrame=nextFrame===undefined?now+interval:nextFrame+interval;
   if(nextFrame<=now)nextFrame=now+interval-((now-nextFrame)%interval);
   lastFrame=now;lastKey=key;idle=!moving&&settled;
   return seconds;
  },
  invalidate(){idle=false;lastKey='';lastFrame=nextFrame=undefined;}
 };
}
