export function viewerLayout(width,height,ratio,zoom=1){
 const base=Math.min(width,height*ratio),w=base*zoom,h=w/ratio,sw=Math.max(width,w),sh=Math.max(height,h);
 return {width:w,height:h,surfaceWidth:sw,surfaceHeight:sh,left:(sw-w)/2,top:(sh-h)/2};
}
export function zoomViewport(view,next,from,to=from){
 const zoom=Math.min(4,Math.max(1,next)),old=viewerLayout(view.width,view.height,view.ratio,view.zoom),layout=viewerLayout(view.width,view.height,view.ratio,zoom);
 const x=(view.scrollX+from.x-old.left)/old.width,y=(view.scrollY+from.y-old.top)/old.height;
 return {...layout,zoom,scrollX:Math.max(0,Math.min(layout.surfaceWidth-view.width,layout.left+x*layout.width-to.x)),scrollY:Math.max(0,Math.min(layout.surfaceHeight-view.height,layout.top+y*layout.height-to.y))};
}
