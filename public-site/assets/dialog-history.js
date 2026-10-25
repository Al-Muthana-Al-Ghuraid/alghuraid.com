// Dialogs inside retained details share the top-level page's browser history.
export function bindDialogHistory(dialog,restore){
 if(!dialog)return;
 let host=window;
 if(new URLSearchParams(location.search).get('embedded')==='1'&&parent.location.origin===location.origin)host=parent;
 let manager=host.portfolioDialogs;
 if(!manager){
  manager=host.portfolioDialogs={records:new Map(),current:null,handled:new WeakSet()};
  manager.handlePop=event=>{
   if(manager.handled.has(event))return true;
   const incoming=event.state?.portfolioOverlay,previous=manager.current;
   const target=manager.records.get(incoming);
   if(previous&&previous.id!==incoming){
    if(previous.dialog.open){previous.internal=true;previous.dialog.close();}
    manager.current=null;
   }
   if(target?.dialog.isConnected){
    manager.current=target;
    if(!target.dialog.open){target.internal=true;target.restore?target.restore():target.dialog.showModal();}
   }
   const handled=!!(previous||target?.dialog.isConnected);if(handled)manager.handled.add(event);
   for(const [id,record]of manager.records)if(!record.dialog.isConnected)manager.records.delete(id);
   return handled;
  };
  host.addEventListener('popstate',event=>{if(manager.handlePop(event))event.stopImmediatePropagation();},true);
 }
 const record={id:crypto.randomUUID(),dialog,restore,internal:false};manager.records.set(record.id,record);
 new MutationObserver(()=>{
  if(record.internal){record.internal=false;return;}
  if(dialog.open){
   manager.current=record;
   host.history.pushState({...host.history.state,portfolioOverlay:record.id},'',host.location.href);
  }else if(manager.current===record){
   if(host.history.state?.portfolioOverlay===record.id)host.history.back();else manager.current=null;
  }
 }).observe(dialog,{attributes:true,attributeFilter:['open']});
}
