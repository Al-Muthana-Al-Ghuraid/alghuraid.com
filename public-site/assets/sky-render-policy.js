// Gate expensive scene work; elapsed time belongs to rendered frames, not RAF ticks.
export function createRenderPolicy(fps=60){
 let lastFrame,nextFrame,wasBlocked=true,lastKey='',idle=false,currentFPS=fps;
 return {
  frame(now,{blocked=false,moving=true,settled=false,key='',force=false,frameFPS=fps}={}){
   if(blocked){wasBlocked=true;return null;}
   const requested=frameFPS===120?120:fps,interval=1000/requested;
   if(requested!==currentFPS){currentFPS=requested;nextFrame=lastFrame===undefined?undefined:lastFrame+interval;}
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

// Raise only the desktop theme-transition ceiling, never the settled scene budget.
export function themeFrameRate({width,reduced=false,startup=false,progress=1,target,goal}){
 return width>800&&!reduced&&!startup&&(progress<1||target!==goal)?120:60;
}
