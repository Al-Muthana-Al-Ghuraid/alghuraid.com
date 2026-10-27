import {halfToFloat,decodeAtmosphereInWorker} from './sky-atmosphere.js?v=release-20261027-feedback-batch-2';
import {createRenderPolicy,themeFrameRate} from './sky-render-policy.js?v=release-20261027-content-polish';
var Xd=0,Tu=1,Yd=2;var wa=1,qd=2,Ts=3,ai=0,Zt=1,An=2,Qt=0,Nr=1,Eu=2,wu=3,Mu=4,bu=5;var ki=100,Zd=101,Kd=102,Qd=103,jd=104,Jd=200,Cu=201,$d=202,ef=203,Zo=204,Ko=205,tf=206,nf=207,rf=208,sf=209,af=210,of=211,cf=212,lf=213,uf=214,Qo=0,fs=1,jo=2,cr=3,Jo=4,$o=5,ec=6,tc=7,Ru=0,hf=1,df=2,Gn=0,Iu=1,Du=2,Pu=3,Nu=4,Lu=5,Uu=6,Ou=7;var Bu=300,mr=301,Ur=302,Sc=303,Ac=304,Ma=306,bn=1e3,Fn=1001,nc=1002,Ft=1003,ff=1004;var ba=1005;var et=1006,Tc=1007;var kn=1008;var Ct=1009,Ca=1010,Ra=1011,gr=1012,Es=1013,Cn=1014,Gt=1015,Pt=1016,Ec=1017,wc=1018,vr=1020,Fu=35902,Hu=35899,zu=1021,Gu=1022,kt=1023,Ai=1026,Mi=1027,Tn=1028,Mc=1029,Rn=1030,bc=1031;var Cc=1033,Ia=33776,Da=33777,Pa=33778,Na=33779,Rc=35840,Ic=35841,Dc=35842,Pc=35843,Nc=36196,Lc=37492,Uc=37496,Oc=37488,Bc=37489,La=37490,Fc=37491,Hc=37808,zc=37809,Gc=37810,kc=37811,Vc=37812,Wc=37813,Xc=37814,Yc=37815,qc=37816,Zc=37817,Kc=37818,Qc=37819,jc=37820,Jc=37821,$c=36492,el=36494,tl=36495,nl=36283,il=36284,Ua=36285,rl=36286;var da=2300,ic=2301,qo=2302,pu=2303,mu=2400,gu=2401,vu=2402;var ui=3200;var ku=0,pf=1,jt="",Ot="srgb",ln="srgb-linear",fa="linear",Tt="srgb";var Dr=7680;var xu=519,mf=512,gf=513,vf=514,sl=515,xf=516,_f=517,al=518,yf=519,_u=35044;var hi="300 es",si=2e3,pa=2001;function Jm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $m(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sf(){let n=ps("canvas");return n.style.display="block",n}var wd={},ms=null;function Vu(...n){let e="THREE."+n.shift();ms?ms("log",e,...n):console.log(e,...n)}function Af(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=Af(n);let e="THREE."+n.shift();if(ms)ms("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=Af(n);let e="THREE."+n.shift();if(ms)ms("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function rc(...n){let e=n.join(" ");e in wd||(wd[e]=!0,Xe(...n))}function Tf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Ef={[Qo]:fs,[jo]:ec,[Jo]:tc,[cr]:$o,[fs]:Qo,[ec]:jo,[tc]:Jo,[$o]:cr},sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Md=1234567,ua=Math.PI/180,gs=180/Math.PI;function ws(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Wu(n,e){return(n%e+e)%e}function e0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function t0(n,e,t){return n!==e?(t-n)/(e-n):0}function ha(n,e,t){return(1-t)*n+t*e}function n0(n,e,t,i){return ha(n,e,1-Math.exp(-t*i))}function i0(n,e=1){return e-Math.abs(Wu(n,e*2)-e)}function r0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function s0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function a0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function o0(n,e){return n+Math.random()*(e-n)}function c0(n){return n*(.5-Math.random())}function l0(n){n!==void 0&&(Md=n);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u0(n){return n*ua}function h0(n){return n*gs}function d0(n){return(n&n-1)===0&&n!==0}function f0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function p0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function m0(n,e,t,i,r){let s=Math.cos,a=Math.sin,c=s(t/2),l=a(t/2),u=s((e+i)/2),h=a((e+i)/2),p=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),y=a((i-e)/2);switch(r){case"XYX":n.set(c*h,l*p,l*d,c*u);break;case"YZY":n.set(l*d,c*h,l*p,c*u);break;case"ZXZ":n.set(l*p,l*d,c*h,c*u);break;case"XZX":n.set(c*h,l*y,l*m,c*u);break;case"YXY":n.set(l*m,c*h,l*y,c*u);break;case"ZYZ":n.set(l*y,l*m,c*h,c*u);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function us(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Vn={DEG2RAD:ua,RAD2DEG:gs,generateUUID:ws,clamp:lt,euclideanModulo:Wu,mapLinear:e0,inverseLerp:t0,lerp:ha,damp:n0,pingpong:i0,smoothstep:r0,smootherstep:s0,randInt:a0,randFloat:o0,randFloatSpread:c0,seededRandom:l0,degToRad:u0,radToDeg:h0,isPowerOfTwo:d0,ceilPowerOfTwo:f0,floorPowerOfTwo:p0,setQuaternionFromProperEuler:m0,normalize:yn,denormalize:us},De=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,c){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],d=s[a+0],m=s[a+1],y=s[a+2],E=s[a+3];if(p!==E||l!==d||u!==m||h!==y){let x=l*d+u*m+h*y+p*E;x<0&&(d=-d,m=-m,y=-y,E=-E,x=-x);let g=1-c;if(x<.9995){let w=Math.acos(x),C=Math.sin(w);g=Math.sin(g*w)/C,c=Math.sin(c*w)/C,l=l*g+d*c,u=u*g+m*c,h=h*g+y*c,p=p*g+E*c}else{l=l*g+d*c,u=u*g+m*c,h=h*g+y*c,p=p*g+E*c;let w=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=w,u*=w,h*=w,p*=w}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){let c=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[a],d=s[a+1],m=s[a+2],y=s[a+3];return e[t]=c*y+h*p+l*m-u*d,e[t+1]=l*y+h*d+u*p-c*m,e[t+2]=u*y+h*m+c*d-l*p,e[t+3]=h*y-c*p-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,c=Math.cos,l=Math.sin,u=c(i/2),h=c(r/2),p=c(s/2),d=l(i/2),m=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=d*h*p+u*m*y,this._y=u*m*p-d*h*y,this._z=u*h*y+d*m*p,this._w=u*h*p-d*m*y;break;case"YXZ":this._x=d*h*p+u*m*y,this._y=u*m*p-d*h*y,this._z=u*h*y-d*m*p,this._w=u*h*p+d*m*y;break;case"ZXY":this._x=d*h*p-u*m*y,this._y=u*m*p+d*h*y,this._z=u*h*y+d*m*p,this._w=u*h*p-d*m*y;break;case"ZYX":this._x=d*h*p-u*m*y,this._y=u*m*p+d*h*y,this._z=u*h*y-d*m*p,this._w=u*h*p+d*m*y;break;case"YZX":this._x=d*h*p+u*m*y,this._y=u*m*p+d*h*y,this._z=u*h*y-d*m*p,this._w=u*h*p-d*m*y;break;case"XZY":this._x=d*h*p-u*m*y,this._y=u*m*p-d*h*y,this._z=u*h*y+d*m*p,this._w=u*h*p+d*m*y;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],c=t[5],l=t[9],u=t[2],h=t[6],p=t[10],d=i+c+p;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>c&&i>p){let m=2*Math.sqrt(1+i-c-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(c>p){let m=2*Math.sqrt(1+c-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-i-c);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,c=t._x,l=t._y,u=t._z,h=t._w;return this._x=i*h+a*c+r*u-s*l,this._y=r*h+a*l+s*c-i*u,this._z=s*h+a*u+i*l-r*c,this._w=a*h-i*c-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,c=this.dot(e);c<0&&(i=-i,r=-r,s=-s,a=-a,c=-c);let l=1-t;if(c<.9995){let u=Math.acos(c),h=Math.sin(u);l=Math.sin(l*u)/h,t=Math.sin(t*u)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,c=e.z,l=e.w,u=2*(a*r-c*i),h=2*(c*t-s*r),p=2*(s*i-a*t);return this.x=t+l*u+a*p-c*h,this.y=i+l*h+c*u-s*p,this.z=r+l*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,c=t.y,l=t.z;return this.x=r*l-s*c,this.y=s*a-i*l,this.z=i*c-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ql=new L,bd=new Zn,Qe=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,c,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,c,l,u)}set(e,t,i,r,s,a,c,l,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=c,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],c=i[3],l=i[6],u=i[1],h=i[4],p=i[7],d=i[2],m=i[5],y=i[8],E=r[0],x=r[3],g=r[6],w=r[1],C=r[4],R=r[7],U=r[2],I=r[5],B=r[8];return s[0]=a*E+c*w+l*U,s[3]=a*x+c*C+l*I,s[6]=a*g+c*R+l*B,s[1]=u*E+h*w+p*U,s[4]=u*x+h*C+p*I,s[7]=u*g+h*R+p*B,s[2]=d*E+m*w+y*U,s[5]=d*x+m*C+y*I,s[8]=d*g+m*R+y*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],l=e[6],u=e[7],h=e[8];return t*a*h-t*c*u-i*s*h+i*c*l+r*s*u-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],l=e[6],u=e[7],h=e[8],p=h*a-c*u,d=c*l-h*s,m=u*s-a*l,y=t*p+i*d+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/y;return e[0]=p*E,e[1]=(r*u-h*i)*E,e[2]=(c*i-r*a)*E,e[3]=d*E,e[4]=(h*t-r*l)*E,e[5]=(r*s-c*t)*E,e[6]=m*E,e[7]=(i*l-u*t)*E,e[8]=(a*t-i*s)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,c){let l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*c)+a+e,-r*u,r*l,-r*(-u*a+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Zl.makeScale(e,t)),this}rotate(e){return this.premultiply(Zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zl=new Qe,Cd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function g0(){let n={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Tt&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jt?fa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ln]:{primaries:e,whitePoint:i,transfer:fa,toXYZ:Cd,fromXYZ:Rd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Cd,fromXYZ:Rd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),n}var ht=g0();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var jr,sc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jr===void 0&&(jr=ps("canvas")),jr.width=e.width,jr.height=e.height;let r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ps("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},v0=0,vs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?s.push(Kl(r[a].image)):s.push(Kl(r[a]))}else s=Kl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var x0=0,Ql=new L,Xt=class n extends sn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Fn,r=Fn,s=et,a=kn,c=kt,l=Ct,u=n.DEFAULT_ANISOTROPY,h=jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=ws(),this.name="",this.source=new vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bn:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bn:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Bu;Xt.DEFAULT_ANISOTROPY=1;var ut=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,u=l[0],h=l[4],p=l[8],d=l[1],m=l[5],y=l[9],E=l[2],x=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-E)<.01&&Math.abs(y-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+E)<.1&&Math.abs(y+x)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(u+1)/2,R=(m+1)/2,U=(g+1)/2,I=(h+d)/4,B=(p+E)/4,A=(y+x)/4;return C>R&&C>U?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=I/i,s=B/i):R>U?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=I/r,s=A/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=B/s,r=A/s),this.set(i,r,s,t),this}let w=Math.sqrt((x-y)*(x-y)+(p-E)*(p-E)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(x-y)/w,this.y=(p-E)/w,this.z=(d-h)/w,this.w=Math.acos((u+m+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ac=class extends sn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new Xt(r),a=i.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new vs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},gt=class extends ac{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xs=class extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ma=class extends gt{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new xs(null,e,t,i),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},un=class extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ke=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,c,l,u,h,p,d,m,y,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,c,l,u,h,p,d,m,y,E,x)}set(e,t,i,r,s,a,c,l,u,h,p,d,m,y,E,x){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=c,g[13]=l,g[2]=u,g[6]=h,g[10]=p,g[14]=d,g[3]=m,g[7]=y,g[11]=E,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),a=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),c=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*p,y=c*h,E=c*p;t[0]=l*h,t[4]=-l*p,t[8]=u,t[1]=m+y*u,t[5]=d-E*u,t[9]=-c*l,t[2]=E-d*u,t[6]=y+m*u,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,m=l*p,y=u*h,E=u*p;t[0]=d+E*c,t[4]=y*c-m,t[8]=a*u,t[1]=a*p,t[5]=a*h,t[9]=-c,t[2]=m*c-y,t[6]=E+d*c,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,m=l*p,y=u*h,E=u*p;t[0]=d-E*c,t[4]=-a*p,t[8]=y+m*c,t[1]=m+y*c,t[5]=a*h,t[9]=E-d*c,t[2]=-a*u,t[6]=c,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,m=a*p,y=c*h,E=c*p;t[0]=l*h,t[4]=y*u-m,t[8]=d*u+E,t[1]=l*p,t[5]=E*u+d,t[9]=m*u-y,t[2]=-u,t[6]=c*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*u,y=c*l,E=c*u;t[0]=l*h,t[4]=E-d*p,t[8]=y*p+m,t[1]=p,t[5]=a*h,t[9]=-c*h,t[2]=-u*h,t[6]=m*p+y,t[10]=d-E*p}else if(e.order==="XZY"){let d=a*l,m=a*u,y=c*l,E=c*u;t[0]=l*h,t[4]=-p,t[8]=u*h,t[1]=d*p+E,t[5]=a*h,t[9]=m*p-y,t[2]=y*p-m,t[6]=c*h,t[10]=E*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_0,e,y0)}lookAt(e,t,i){let r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),tr.crossVectors(i,On),tr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),tr.crossVectors(i,On)),tr.normalize(),bo.crossVectors(On,tr),r[0]=tr.x,r[4]=bo.x,r[8]=On.x,r[1]=tr.y,r[5]=bo.y,r[9]=On.y,r[2]=tr.z,r[6]=bo.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],c=i[4],l=i[8],u=i[12],h=i[1],p=i[5],d=i[9],m=i[13],y=i[2],E=i[6],x=i[10],g=i[14],w=i[3],C=i[7],R=i[11],U=i[15],I=r[0],B=r[4],A=r[8],D=r[12],k=r[1],N=r[5],q=r[9],J=r[13],te=r[2],V=r[6],Q=r[10],j=r[14],ue=r[3],de=r[7],Ee=r[11],Ie=r[15];return s[0]=a*I+c*k+l*te+u*ue,s[4]=a*B+c*N+l*V+u*de,s[8]=a*A+c*q+l*Q+u*Ee,s[12]=a*D+c*J+l*j+u*Ie,s[1]=h*I+p*k+d*te+m*ue,s[5]=h*B+p*N+d*V+m*de,s[9]=h*A+p*q+d*Q+m*Ee,s[13]=h*D+p*J+d*j+m*Ie,s[2]=y*I+E*k+x*te+g*ue,s[6]=y*B+E*N+x*V+g*de,s[10]=y*A+E*q+x*Q+g*Ee,s[14]=y*D+E*J+x*j+g*Ie,s[3]=w*I+C*k+R*te+U*ue,s[7]=w*B+C*N+R*V+U*de,s[11]=w*A+C*q+R*Q+U*Ee,s[15]=w*D+C*J+R*j+U*Ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],c=e[5],l=e[9],u=e[13],h=e[2],p=e[6],d=e[10],m=e[14],y=e[3],E=e[7],x=e[11],g=e[15],w=l*m-u*d,C=c*m-u*p,R=c*d-l*p,U=a*m-u*h,I=a*d-l*h,B=a*p-c*h;return t*(E*w-x*C+g*R)-i*(y*w-x*U+g*I)+r*(y*C-E*U+g*B)-s*(y*R-E*I+x*B)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],l=e[6],u=e[7],h=e[8],p=e[9],d=e[10],m=e[11],y=e[12],E=e[13],x=e[14],g=e[15],w=t*c-i*a,C=t*l-r*a,R=t*u-s*a,U=i*l-r*c,I=i*u-s*c,B=r*u-s*l,A=h*E-p*y,D=h*x-d*y,k=h*g-m*y,N=p*x-d*E,q=p*g-m*E,J=d*g-m*x,te=w*J-C*q+R*N+U*k-I*D+B*A;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/te;return e[0]=(c*J-l*q+u*N)*V,e[1]=(r*q-i*J-s*N)*V,e[2]=(E*B-x*I+g*U)*V,e[3]=(d*I-p*B-m*U)*V,e[4]=(l*k-a*J-u*D)*V,e[5]=(t*J-r*k+s*D)*V,e[6]=(x*R-y*B-g*C)*V,e[7]=(h*B-d*R+m*C)*V,e[8]=(a*q-c*k+u*A)*V,e[9]=(i*k-t*q-s*A)*V,e[10]=(y*I-E*R+g*w)*V,e[11]=(p*R-h*I-m*w)*V,e[12]=(c*D-a*N-l*A)*V,e[13]=(t*N-i*D+r*A)*V,e[14]=(E*C-y*U-x*w)*V,e[15]=(h*U-p*C+d*w)*V,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,c=e.y,l=e.z,u=s*a,h=s*c;return this.set(u*a+i,u*c-r*l,u*l+r*c,0,u*c+r*l,h*c+i,h*l-r*a,0,u*l-r*c,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,c=t._z,l=t._w,u=s+s,h=a+a,p=c+c,d=s*u,m=s*h,y=s*p,E=a*h,x=a*p,g=c*p,w=l*u,C=l*h,R=l*p,U=i.x,I=i.y,B=i.z;return r[0]=(1-(E+g))*U,r[1]=(m+R)*U,r[2]=(y-C)*U,r[3]=0,r[4]=(m-R)*I,r[5]=(1-(d+g))*I,r[6]=(x+w)*I,r[7]=0,r[8]=(y+C)*B,r[9]=(x-w)*B,r[10]=(1-(d+E))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Jr.set(r[0],r[1],r[2]).length(),c=Jr.set(r[4],r[5],r[6]).length(),l=Jr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ni.copy(this);let u=1/a,h=1/c,p=1/l;return ni.elements[0]*=u,ni.elements[1]*=u,ni.elements[2]*=u,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=p,ni.elements[9]*=p,ni.elements[10]*=p,t.setFromRotationMatrix(ni),i.x=a,i.y=c,i.z=l,this}makePerspective(e,t,i,r,s,a,c=si,l=!1){let u=this.elements,h=2*s/(t-e),p=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r),y,E;if(l)y=s/(a-s),E=a*s/(a-s);else if(c===si)y=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(c===pa)y=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,c=si,l=!1){let u=this.elements,h=2/(t-e),p=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r),y,E;if(l)y=1/(a-s),E=a/(a-s);else if(c===si)y=-2/(a-s),E=-(a+s)/(a-s);else if(c===pa)y=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=y,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Jr=new L,ni=new ke,_0=new L(0,0,0),y0=new L(1,1,1),tr=new L,bo=new L,On=new L,Id=new ke,Dd=new Zn,lr=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],c=r[8],l=r[1],u=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Id,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};lr.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},S0=0,Pd=new L,$r=new Zn,Li=new ke,Co=new L,aa=new L,A0=new L,T0=new Zn,Nd=new L(1,0,0),Ld=new L(0,1,0),Ud=new L(0,0,1),Od={type:"added"},E0={type:"removed"},es={type:"childadded",child:null},jl={type:"childremoved",child:null},Sn=class n extends sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new lr,i=new Zn,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new Qe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Ud,e)}translateOnAxis(e,t){return Pd.copy(e).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Co.copy(e):Co.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(aa,Co,this.up):Li.lookAt(Co,aa,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(Li),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Od),es.child=e,this.dispatchEvent(es),es.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E0),jl.child=e,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Od),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(s(e.materials,this.material[l]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];r.animations.push(s(e.animations,l))}}if(t){let c=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),y=a(e.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(c){let l=[];for(let u in c){let h=c[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Sn.DEFAULT_UP=new L(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pr=class extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},w0={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,c=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let E of e.hand.values()){let x=t.getJointPose(E,i),g=this._getHandJoint(u,E);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,y=.005;u.inputState.pinching&&d>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Jl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var dt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=Wu(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Jl(a,s,e+1/3),this.g=Jl(a,s,e),this.b=Jl(a,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let i=wf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return ht.workingToColorSpace(mn.copy(this),e),Math.round(lt(mn.r*255,0,255))*65536+Math.round(lt(mn.g*255,0,255))*256+Math.round(lt(mn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,s=mn.b,a=Math.max(i,r,s),c=Math.min(i,r,s),l,u,h=(c+a)/2;if(c===a)l=0,u=0;else{let p=a-c;switch(u=h<=.5?p/(a+c):p/(2-a-c),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Ot){ht.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(Ro);let i=ha(nr.h,Ro.h,t),r=ha(nr.s,Ro.s,t),s=ha(nr.l,Ro.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new dt;dt.NAMES=wf;var oi=class extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new L,Ui=new L,$l=new L,Oi=new L,ts=new L,ns=new L,Bd=new L,eu=new L,tu=new L,nu=new L,iu=new ut,ru=new ut,su=new ut,or=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ii.subVectors(e,t),r.cross(ii);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ii.subVectors(r,t),Ui.subVectors(i,t),$l.subVectors(e,t);let a=ii.dot(ii),c=ii.dot(Ui),l=ii.dot($l),u=Ui.dot(Ui),h=Ui.dot($l),p=a*u-c*c;if(p===0)return s.set(0,0,0),null;let d=1/p,m=(u*l-c*h)*d,y=(a*h-c*l)*d;return s.set(1-m-y,y,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,r,s,a,c,l){return this.getBarycoord(e,t,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(c,Oi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return iu.setScalar(0),ru.setScalar(0),su.setScalar(0),iu.fromBufferAttribute(e,t),ru.fromBufferAttribute(e,i),su.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(iu,s.x),a.addScaledVector(ru,s.y),a.addScaledVector(su,s.z),a}static isFrontFacing(e,t,i,r){return ii.subVectors(i,t),Ui.subVectors(e,t),ii.cross(Ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ii.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,c;ts.subVectors(r,i),ns.subVectors(s,i),eu.subVectors(e,i);let l=ts.dot(eu),u=ns.dot(eu);if(l<=0&&u<=0)return t.copy(i);tu.subVectors(e,r);let h=ts.dot(tu),p=ns.dot(tu);if(h>=0&&p<=h)return t.copy(r);let d=l*p-h*u;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ts,a);nu.subVectors(e,s);let m=ts.dot(nu),y=ns.dot(nu);if(y>=0&&m<=y)return t.copy(s);let E=m*u-l*y;if(E<=0&&u>=0&&y<=0)return c=u/(u-y),t.copy(i).addScaledVector(ns,c);let x=h*y-m*p;if(x<=0&&p-h>=0&&m-y>=0)return Bd.subVectors(s,r),c=(p-h)/(p-h+(m-y)),t.copy(r).addScaledVector(Bd,c);let g=1/(x+E+d);return a=E*g,c=d*g,t.copy(i).addScaledVector(ts,a).addScaledVector(ns,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ci=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(s,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Do.subVectors(this.max,oa),is.subVectors(e.a,oa),rs.subVectors(e.b,oa),ss.subVectors(e.c,oa),ir.subVectors(rs,is),rr.subVectors(ss,rs),br.subVectors(is,ss);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-br.z,br.y,ir.z,0,-ir.x,rr.z,0,-rr.x,br.z,0,-br.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-br.y,br.x,0];return!au(t,is,rs,ss,Do)||(t=[1,0,0,0,1,0,0,0,1],!au(t,is,rs,ss,Do))?!1:(Po.crossVectors(ir,rr),t=[Po.x,Po.y,Po.z],au(t,is,rs,ss,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new L,new L,new L,new L,new L,new L,new L,new L],ri=new L,Io=new ci,is=new L,rs=new L,ss=new L,ir=new L,rr=new L,br=new L,oa=new L,Do=new L,Po=new L,Cr=new L;function au(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Cr.fromArray(n,s);let c=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),u=t.dot(Cr),h=i.dot(Cr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>c)return!1}return!0}var zi=M0();function M0(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let u=l-127;u<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):u<-14?(i[l]=1024>>-u-14,i[l|256]=1024>>-u-14|32768,r[l]=-u-1,r[l|256]=-u-1):u<=15?(i[l]=u+15<<10,i[l|256]=u+15<<10|32768,r[l]=13,r[l|256]=13):u<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),c=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,s[l]=u|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(c[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:c}}function b0(n){Math.abs(n)>65504&&Xe("DataUtils.toHalfFloat(): Value out of range."),n=lt(n,-65504,65504),zi.floatView[0]=n;let e=zi.uint32View[0],t=e>>23&511;return zi.baseTable[t]+((e&8388607)>>zi.shiftTable[t])}function C0(n){let e=n>>10;return zi.uint32View[0]=zi.mantissaTable[zi.offsetTable[e]+(n&1023)]+zi.exponentTable[e],zi.floatView[0]}var li=class{static toHalfFloat(e){return b0(e)}static fromHalfFloat(e){return C0(e)}},qt=new L,No=new De,R0=0,rn=class extends sn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_u,this.updateRanges=[],this.gpuType=Gt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_u&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var va=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xa=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Hn=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},I0=new ci,ca=new L,ou=new L,Vi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):I0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);let t=ca.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(ou)),this.expandByPoint(ca.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},D0=0,qn=new ke,cu=new Sn,as=new L,Bn=new ci,la=new ci,tn=new L,gn=class n extends sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?xa:va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Hn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let c=t[s];la.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(Bn.min,la.min),Bn.expandByPoint(tn),tn.addVectors(Bn.max,la.max),Bn.expandByPoint(tn)):(Bn.expandByPoint(la.min),Bn.expandByPoint(la.max))}Bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)tn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(tn));if(t)for(let s=0,a=t.length;s<a;s++){let c=t[s],l=this.morphTargetsRelative;for(let u=0,h=c.count;u<h;u++)tn.fromBufferAttribute(c,u),l&&(as.fromBufferAttribute(e,u),tn.add(as)),r=Math.max(r,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),c=[],l=[];for(let A=0;A<i.count;A++)c[A]=new L,l[A]=new L;let u=new L,h=new L,p=new L,d=new De,m=new De,y=new De,E=new L,x=new L;function g(A,D,k){u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,D),p.fromBufferAttribute(i,k),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,D),y.fromBufferAttribute(s,k),h.sub(u),p.sub(u),m.sub(d),y.sub(d);let N=1/(m.x*y.y-y.x*m.y);isFinite(N)&&(E.copy(h).multiplyScalar(y.y).addScaledVector(p,-m.y).multiplyScalar(N),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-y.x).multiplyScalar(N),c[A].add(E),c[D].add(E),c[k].add(E),l[A].add(x),l[D].add(x),l[k].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let A=0,D=w.length;A<D;++A){let k=w[A],N=k.start,q=k.count;for(let J=N,te=N+q;J<te;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let C=new L,R=new L,U=new L,I=new L;function B(A){U.fromBufferAttribute(r,A),I.copy(U);let D=c[A];C.copy(D),C.sub(U.multiplyScalar(U.dot(D))).normalize(),R.crossVectors(I,D);let N=R.dot(l[A])<0?-1:1;a.setXYZW(A,C.x,C.y,C.z,N)}for(let A=0,D=w.length;A<D;++A){let k=w[A],N=k.start,q=k.count;for(let J=N,te=N+q;J<te;J+=3)B(e.getX(J+0)),B(e.getX(J+1)),B(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new L,s=new L,a=new L,c=new L,l=new L,u=new L,h=new L,p=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let y=e.getX(d+0),E=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,x),c.add(h),l.add(h),u.add(h),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(c,l){let u=c.array,h=c.itemSize,p=c.normalized,d=new u.constructor(l.length*h),m=0,y=0;for(let E=0,x=l.length;E<x;E++){c.isInterleavedBufferAttribute?m=l[E]*c.data.stride+c.offset:m=l[E]*h;for(let g=0;g<h;g++)d[y++]=u[m++]}return new rn(d,h,p)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let c in r){let l=r[c],u=e(l,i);t.setAttribute(c,u)}let s=this.morphAttributes;for(let c in s){let l=[],u=s[c];for(let h=0,p=u.length;h<p;h++){let d=u[h],m=e(d,i);l.push(m)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let c=0,l=a.length;c<l;c++){let u=a[c];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let u=i[l];e.data.attributes[l]=u.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],h=[];for(let p=0,d=u.length;p<d;p++){let m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let s=e.morphAttributes;for(let u in s){let h=[],p=s[u];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var P0=0,vn=class extends sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Nr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Ko,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zo&&(i.blendSrc=this.blendSrc),this.blendDst!==Ko&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let c in s){let l=s[c];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Fi=new L,lu=new L,Lo=new L,sr=new L,uu=new L,Uo=new L,hu=new L,_a=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){lu.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(lu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Lo),c=sr.dot(this.direction),l=-sr.dot(Lo),u=sr.lengthSq(),h=Math.abs(1-a*a),p,d,m,y;if(h>0)if(p=a*l-c,d=a*c-l,y=s*h,p>=0)if(d>=-y)if(d<=y){let E=1/h;p*=E,d*=E,m=p*(p+a*d+2*c)+d*(a*p+d+2*l)+u}else d=s,p=Math.max(0,-(a*d+c)),m=-p*p+d*(d+2*l)+u;else d=-s,p=Math.max(0,-(a*d+c)),m=-p*p+d*(d+2*l)+u;else d<=-y?(p=Math.max(0,-(-a*s+c)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+u):d<=y?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(p=Math.max(0,-(a*s+c)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+u);else d=a>0?-s:s,p=Math.max(0,-(a*d+c)),m=-p*p+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(lu).addScaledVector(Lo,d),m}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),c=i-a,l=i+a;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,c,l,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(c=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(c=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||c>r)||((c>i||i!==i)&&(i=c),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,r,s){uu.subVectors(t,e),Uo.subVectors(i,e),hu.crossVectors(uu,Uo);let a=this.direction.dot(hu),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;sr.subVectors(this.origin,e);let l=c*this.direction.dot(Uo.crossVectors(sr,Uo));if(l<0)return null;let u=c*this.direction.dot(uu.cross(sr));if(u<0||l+u>a)return null;let h=-c*sr.dot(hu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ys=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fd=new ke,Rr=new _a,Oo=new Vi,Hd=new L,Bo=new L,Fo=new L,Ho=new L,du=new L,zo=new L,zd=new L,Go=new L,hn=class extends Sn{constructor(e=new gn,t=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let c=this.morphTargetInfluences;if(s&&c){zo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let h=c[l],p=s[l];h!==0&&(du.fromBufferAttribute(p,e),a?zo.addScaledVector(du,h):zo.addScaledVector(du.sub(t),h))}t.add(zo)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(Oo.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Oo,Hd)===null||Rr.origin.distanceToSquared(Hd)>(e.far-e.near)**2))&&(Fd.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Fd),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,c=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(c!==null)if(Array.isArray(a))for(let y=0,E=d.length;y<E;y++){let x=d[y],g=a[x.materialIndex],w=Math.max(x.start,m.start),C=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let R=w,U=C;R<U;R+=3){let I=c.getX(R),B=c.getX(R+1),A=c.getX(R+2);r=ko(this,g,e,i,u,h,p,I,B,A),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let y=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let x=y,g=E;x<g;x+=3){let w=c.getX(x),C=c.getX(x+1),R=c.getX(x+2);r=ko(this,a,e,i,u,h,p,w,C,R),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,E=d.length;y<E;y++){let x=d[y],g=a[x.materialIndex],w=Math.max(x.start,m.start),C=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let R=w,U=C;R<U;R+=3){let I=R,B=R+1,A=R+2;r=ko(this,g,e,i,u,h,p,I,B,A),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let y=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let x=y,g=E;x<g;x+=3){let w=x,C=x+1,R=x+2;r=ko(this,a,e,i,u,h,p,w,C,R),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function N0(n,e,t,i,r,s,a,c){let l;if(e.side===Zt?l=i.intersectTriangle(a,s,r,!0,c):l=i.intersectTriangle(r,s,a,e.side===ai,c),l===null)return null;Go.copy(c),Go.applyMatrix4(n.matrixWorld);let u=t.ray.origin.distanceTo(Go);return u<t.near||u>t.far?null:{distance:u,point:Go.clone(),object:n}}function ko(n,e,t,i,r,s,a,c,l,u){n.getVertexPosition(c,Bo),n.getVertexPosition(l,Fo),n.getVertexPosition(u,Ho);let h=N0(n,e,t,i,Bo,Fo,Ho,zd);if(h){let p=new L;or.getBarycoord(zd,Bo,Fo,Ho,p),r&&(h.uv=or.getInterpolatedAttribute(r,c,l,u,p,new De)),s&&(h.uv1=or.getInterpolatedAttribute(s,c,l,u,p,new De)),a&&(h.normal=or.getInterpolatedAttribute(a,c,l,u,p,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:c,b:l,c:u,normal:new L,materialIndex:0};or.getNormal(Bo,Fo,Ho,d.normal),h.face=d,h.barycoord=p}return h}var Ti=class extends Xt{constructor(e=null,t=1,i=1,r,s,a,c,l,u=Ft,h=Ft,p,d){super(null,a,c,l,u,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fu=new L,L0=new L,U0=new Qe,Si=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=fu.subVectors(i,t).cross(L0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(fu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||U0.getNormalMatrix(e),r=this.coplanarPoint(fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ir=new Vi,O0=new De(.5,.5),Vo=new L,ya=class{constructor(e=new Si,t=new Si,i=new Si,r=new Si,s=new Si,a=new Si){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si,i=!1){let r=this.planes,s=e.elements,a=s[0],c=s[1],l=s[2],u=s[3],h=s[4],p=s[5],d=s[6],m=s[7],y=s[8],E=s[9],x=s[10],g=s[11],w=s[12],C=s[13],R=s[14],U=s[15];if(r[0].setComponents(u-a,m-h,g-y,U-w).normalize(),r[1].setComponents(u+a,m+h,g+y,U+w).normalize(),r[2].setComponents(u+c,m+p,g+E,U+C).normalize(),r[3].setComponents(u-c,m-p,g-E,U-C).normalize(),i)r[4].setComponents(l,d,x,R).normalize(),r[5].setComponents(u-l,m-d,g-x,U-R).normalize();else if(r[4].setComponents(u-l,m-d,g-x,U-R).normalize(),t===si)r[5].setComponents(u+l,m+d,g+x,U+R).normalize();else if(t===pa)r[5].setComponents(l,d,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);let t=O0.distanceTo(e.center);return Ir.radius=.7071067811865476+t,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Vo.x=r.normal.x>0?e.max.x:e.min.x,Vo.y=r.normal.y>0?e.max.y:e.min.y,Vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sa=class extends Xt{constructor(e=[],t=mr,i,r,s,a,c,l,u,h){super(e,t,i,r,s,a,c,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Kn=class extends Xt{constructor(e,t,i=Cn,r,s,a,c=Ft,l=Ft,u,h=Ai,p=1){if(h!==Ai&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:p};super(d,r,s,a,c,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},oc=class extends Kn{constructor(e,t=Cn,i=mr,r,s,a=Ft,c=Ft,l,u=Ai){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,c,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Aa=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ss=class n extends gn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let c=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],u=[],h=[],p=[],d=0,m=0;y("z","y","x",-1,-1,i,t,e,a,s,0),y("z","y","x",1,-1,i,t,-e,a,s,1),y("x","z","y",1,1,e,i,t,r,a,2),y("x","z","y",1,-1,e,i,-t,r,a,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hn(u,3)),this.setAttribute("normal",new Hn(h,3)),this.setAttribute("uv",new Hn(p,2));function y(E,x,g,w,C,R,U,I,B,A,D){let k=R/B,N=U/A,q=R/2,J=U/2,te=I/2,V=B+1,Q=A+1,j=0,ue=0,de=new L;for(let Ee=0;Ee<Q;Ee++){let Ie=Ee*N-J;for(let Oe=0;Oe<V;Oe++){let Ze=Oe*k-q;de[E]=Ze*w,de[x]=Ie*C,de[g]=te,u.push(de.x,de.y,de.z),de[E]=0,de[x]=0,de[g]=I>0?1:-1,h.push(de.x,de.y,de.z),p.push(Oe/B),p.push(1-Ee/A),j+=1}}for(let Ee=0;Ee<A;Ee++)for(let Ie=0;Ie<B;Ie++){let Oe=d+Ie+V*Ee,Ze=d+Ie+V*(Ee+1),pt=d+(Ie+1)+V*(Ee+1),Ye=d+(Ie+1)+V*Ee;l.push(Oe,Ze,Ye),l.push(Ze,pt,Ye),ue+=6}c.addGroup(m,ue,D),m+=ue,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ur=class n extends gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,c=Math.floor(i),l=Math.floor(r),u=c+1,h=l+1,p=e/c,d=t/l,m=[],y=[],E=[],x=[];for(let g=0;g<h;g++){let w=g*d-a;for(let C=0;C<u;C++){let R=C*p-s;y.push(R,-w,0),E.push(0,0,1),x.push(C/c),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<c;w++){let C=w+u*g,R=w+u*(g+1),U=w+1+u*(g+1),I=w+1+u*g;m.push(C,R,I),m.push(R,U,I)}this.setIndex(m),this.setAttribute("position",new Hn(y,3)),this.setAttribute("normal",new Hn(E,3)),this.setAttribute("uv",new Hn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Or(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Gd(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Gd(r[0])){let s=[];for(let a=0,c=r.length;a<c;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=Or(n[t]);for(let r in i)e[r]=i[r]}return e}function Gd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function B0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Mf={clone:Or,merge:xn},F0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=B0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ei=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var cc=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ui,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lc=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var hr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let c=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let c=t[1];e<c&&(i=2,s=c);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let c=i+a>>>1;e<t[c]?a=c:i=c+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uc=class extends hr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mu,endingEnd:mu}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,c=r[s],l=r[a];if(c===void 0)switch(this.getSettings_().endingStart){case gu:s=e,c=2*t-i;break;case vu:s=r.length-2,c=t+r[s]-r[s+1];break;default:s=e,c=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gu:a=e,l=2*i-t;break;case vu:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let u=(i-t)*.5,h=this.valueSize;this._weightPrev=u/(t-c),this._weightNext=u/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=e*c,u=l-c,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,m=this._weightNext,y=(i-t)/(r-t),E=y*y,x=E*y,g=-d*x+2*d*E-d*y,w=(1+d)*x+(-1.5-2*d)*E+(-.5+d)*y+1,C=(-1-m)*x+(1.5+m)*E+.5*y,R=m*x-m*E;for(let U=0;U!==c;++U)s[U]=g*a[h+U]+w*a[u+U]+C*a[l+U]+R*a[p+U];return s}},hc=class extends hr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=e*c,u=l-c,h=(i-t)/(r-t),p=1-h;for(let d=0;d!==c;++d)s[d]=a[u+d]*p+a[l+d]*h;return s}},dc=class extends hr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fc=class extends hr{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=e*c,u=l-c,h=this.settings||this.DefaultSettings_,p=h.inTangents,d=h.outTangents;if(!p||!d){let E=(i-t)/(r-t),x=1-E;for(let g=0;g!==c;++g)s[g]=a[u+g]*x+a[l+g]*E;return s}let m=c*2,y=e-1;for(let E=0;E!==c;++E){let x=a[u+E],g=a[l+E],w=y*m+E*2,C=d[w],R=d[w+1],U=e*m+E*2,I=p[U],B=p[U+1],A=(i-t)/(r-t),D,k,N,q,J;for(let te=0;te<8;te++){D=A*A,k=D*A,N=1-A,q=N*N,J=q*N;let Q=J*t+3*q*A*C+3*N*D*I+k*r-i;if(Math.abs(Q)<1e-10)break;let j=3*q*(C-t)+6*N*A*(I-C)+3*D*(r-I);if(Math.abs(j)<1e-10)break;A=A-Q/j,A=Math.max(0,Math.min(1,A))}s[E]=J*x+3*q*A*R+3*N*D*B+k*g}return s}},zn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case ic:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break;case pu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Xe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return qo;case this.InterpolantFactoryMethodBezier:return pu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let c=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){let l=i[c];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,c,l),e=!1;break}if(a!==null&&a>l){qe("KeyframeTrack: Out of order keys.",this,c,l,a),e=!1;break}a=l}if(r!==void 0&&$m(r))for(let c=0,l=r.length;c!==l;++c){let u=r[c];if(isNaN(u)){qe("KeyframeTrack: Value is not a valid number.",this,c,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qo,s=e.length-1,a=1;for(let c=1;c<s;++c){let l=!1,u=e[c],h=e[c+1];if(u!==h&&(c!==1||u!==e[0]))if(r)l=!0;else{let p=c*i,d=p-i,m=p+i;for(let y=0;y!==i;++y){let E=t[p+y];if(E!==t[d+y]||E!==t[m+y]){l=!0;break}}}if(l){if(c!==a){e[a]=e[c];let p=c*i,d=a*i;for(let m=0;m!==i;++m)t[d+m]=t[p+m]}++a}}if(s>0){e[a]=e[s];for(let c=s*i,l=a*i,u=0;u!==i;++u)t[l+u]=t[c+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=ic;var dr=class extends zn{constructor(e,t,i){super(e,t,i)}};dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=da;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends zn{constructor(e,t,i,r){super(e,t,i,r)}};pc.prototype.ValueTypeName="color";var mc=class extends zn{constructor(e,t,i,r){super(e,t,i,r)}};mc.prototype.ValueTypeName="number";var gc=class extends hr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=(i-t)/(r-t),u=e*c;for(let h=u+c;u!==h;u+=4)Zn.slerpFlat(s,0,a,u-c,a,u,l);return s}},Ta=class extends zn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}};Ta.prototype.ValueTypeName="quaternion";Ta.prototype.InterpolantFactoryMethodSmooth=void 0;var fr=class extends zn{constructor(e,t,i){super(e,t,i)}};fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=da;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends zn{constructor(e,t,i,r){super(e,t,i,r)}};vc.prototype.ValueTypeName="vector";var ds={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(kd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!kd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function kd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var As=class{constructor(e,t,i){let r=this,s=!1,a=0,c=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,c),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,c),a===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=u.length;p<d;p+=2){let m=u[p],y=u[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bf=new As,an=class{constructor(e){this.manager=e!==void 0?e:bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};an.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hi={},yu=class extends Error{constructor(e,t){super(e),this.response=t}},pr=class extends an{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ds.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:i,onError:r});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:i,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;let h=Hi[e],p=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),m=d?parseInt(d):0,y=m!==0,E=0,x=new ReadableStream({start(g){w();function w(){p.read().then(({done:C,value:R})=>{if(C)g.close();else{E+=R.byteLength;let U=new ProgressEvent("progress",{lengthComputable:y,loaded:E,total:m});for(let I=0,B=h.length;I<B;I++){let A=h[I];A.onProgress&&A.onProgress(U)}g.enqueue(R),w()}},C=>{g.error(C)})}}});return new Response(x)}else throw new yu(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,c));case"json":return u.json();default:if(c==="")return u.text();{let p=/charset="?([^;"\s]*)"?/i.exec(c),d=p&&p[1]?p[1].toLowerCase():void 0,m=new TextDecoder(d);return u.arrayBuffer().then(y=>m.decode(y))}}}).then(u=>{ds.add(`file:${e}`,u);let h=Hi[e];delete Hi[e];for(let p=0,d=h.length;p<d;p++){let m=h[p];m.onLoad&&m.onLoad(u)}}).catch(u=>{let h=Hi[e];if(h===void 0)throw this.manager.itemError(e),u;delete Hi[e];for(let p=0,d=h.length;p<d;p++){let m=h[p];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var os=new WeakMap,xc=class extends an{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ds.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let p=os.get(a);p===void 0&&(p=[],os.set(a,p)),p.push({onLoad:t,onError:r})}return a}let c=ps("img");function l(){h(),t&&t(this);let p=os.get(this)||[];for(let d=0;d<p.length;d++){let m=p[d];m.onLoad&&m.onLoad(this)}os.delete(this),s.manager.itemEnd(e)}function u(p){h(),r&&r(p),ds.remove(`image:${e}`);let d=os.get(this)||[];for(let m=0;m<d.length;m++){let y=d[m];y.onError&&y.onError(p)}os.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){c.removeEventListener("load",l,!1),c.removeEventListener("error",u,!1)}return c.addEventListener("load",l,!1),c.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),ds.add(`image:${e}`,c),s.manager.itemStart(e),c.src=e,c}};var Ea=class extends an{constructor(e){super(e)}load(e,t,i,r){let s=this,a=new Ti,c=new pr(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(l){let u;try{u=s.parse(l)}catch(h){r!==void 0?r(h):qe(h);return}u.image!==void 0?a.image=u.image:u.data!==void 0&&(a.image.width=u.width,a.image.height=u.height,a.image.data=u.data),a.wrapS=u.wrapS!==void 0?u.wrapS:Fn,a.wrapT=u.wrapT!==void 0?u.wrapT:Fn,a.magFilter=u.magFilter!==void 0?u.magFilter:et,a.minFilter=u.minFilter!==void 0?u.minFilter:et,a.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(a.colorSpace=u.colorSpace),u.flipY!==void 0&&(a.flipY=u.flipY),u.format!==void 0&&(a.format=u.format),u.type!==void 0&&(a.type=u.type),u.mipmaps!==void 0&&(a.mipmaps=u.mipmaps,a.minFilter=kn),u.mipmapCount===1&&(a.minFilter=et),u.generateMipmaps!==void 0&&(a.generateMipmaps=u.generateMipmaps),a.needsUpdate=!0,t&&t(a,u)},i,r),a}},Lr=class extends an{constructor(e){super(e)}load(e,t,i,r){let s=new Xt,a=new xc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}};var Xo=new L,Yo=new Zn,yi=new L,wi=class extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xo,Yo,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,Yo,yi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xo,Yo,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,Yo,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ar=new L,Vd=new De,Wd=new De,nn=class extends wi{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,Vd,Wd),t.subVectors(Wd,Vd)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}let c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Wi=class extends wi{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,c=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,c-=h*this.view.offsetY,l=c-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var cs=-90,ls=1,_c=class extends Sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new nn(cs,ls,e,t);r.layers=this.layers,this.add(r);let s=new nn(cs,ls,e,t);s.layers=this.layers,this.add(s);let a=new nn(cs,ls,e,t);a.layers=this.layers,this.add(a);let c=new nn(cs,ls,e,t);c.layers=this.layers,this.add(c);let l=new nn(cs,ls,e,t);l.layers=this.layers,this.add(l);let u=new nn(cs,ls,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,c,l]=t;for(let u of t)this.remove(u);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,c,l,u,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},yc=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Yu="\\[\\]\\.:\\/",z0=new RegExp("["+Yu+"]","g"),qu="[^"+Yu+"]",G0="[^"+Yu.replace("\\.","")+"]",k0=/((?:WC+[\/:])*)/.source.replace("WC",qu),V0=/(WCOD+)?/.source.replace("WCOD",G0),W0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qu),X0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qu),Y0=new RegExp("^"+k0+V0+W0+X0+"$"),q0=["material","materials","bones","map"],Su=class{constructor(e,t,i){let r=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z0,"")}static parseTrackName(e){let t=Y0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);q0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let c=s[a];if(c.name===t||c.uuid===t)return c;let l=i(c.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Su;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q2=new Float32Array(1);var P=class n{constructor(e){this.value=e}clone(){return new n(this.value.clone===void 0?this.value:this.value.clone())}};var Au=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};function Zu(n,e,t,i){let r=Z0(i);switch(t){case zu:return n*e;case Tn:return n*e/r.components*r.byteLength;case Mc:return n*e/r.components*r.byteLength;case Rn:return n*e*2/r.components*r.byteLength;case bc:return n*e*2/r.components*r.byteLength;case Gu:return n*e*3/r.components*r.byteLength;case kt:return n*e*4/r.components*r.byteLength;case Cc:return n*e*4/r.components*r.byteLength;case Ia:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:case Pc:return Math.max(n,16)*Math.max(e,8)/4;case Rc:case Dc:return Math.max(n,8)*Math.max(e,8)/2;case Nc:case Lc:case Oc:case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uc:case La:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $c:case el:case tl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nl:case il:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ua:case rl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z0(n){switch(n){case Ct:case Ca:return{byteLength:1,components:1};case gr:case Ra:case Pt:return{byteLength:2,components:1};case Ec:case wc:return{byteLength:2,components:4};case Cn:case Es:case Gt:return{byteLength:4,components:1};case Fu:case Hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Qf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function tg(n){let e=new WeakMap;function t(c,l){let u=c.array,h=c.usage,p=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,h),c.onUploadCallback();let m;if(u instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=n.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=n.SHORT;else if(u instanceof Uint32Array)m=n.UNSIGNED_INT;else if(u instanceof Int32Array)m=n.INT;else if(u instanceof Int8Array)m=n.BYTE;else if(u instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function i(c,l,u){let h=l.array,p=l.updateRanges;if(n.bindBuffer(u,c),p.length===0)n.bufferSubData(u,0,h);else{p.sort((m,y)=>m.start-y.start);let d=0;for(let m=1;m<p.length;m++){let y=p[d],E=p[m];E.start<=y.start+y.count+1?y.count=Math.max(y.count,E.start+E.count-y.start):(++d,p[d]=E)}p.length=d+1;for(let m=0,y=p.length;m<y;m++){let E=p[m];n.bufferSubData(u,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=e.get(c);l&&(n.deleteBuffer(l.buffer),e.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let h=e.get(c);(!h||h.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let u=e.get(c);if(u===void 0)e.set(c,t(c,l));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,c,l),u.version=c.version}}return{get:r,remove:s,update:a}}var ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ig=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ug=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$g=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ev=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_v=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,b1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:ng,alphahash_pars_fragment:ig,alphamap_fragment:rg,alphamap_pars_fragment:sg,alphatest_fragment:ag,alphatest_pars_fragment:og,aomap_fragment:cg,aomap_pars_fragment:lg,batching_pars_vertex:ug,batching_vertex:hg,begin_vertex:dg,beginnormal_vertex:fg,bsdfs:pg,iridescence_fragment:mg,bumpmap_pars_fragment:gg,clipping_planes_fragment:vg,clipping_planes_pars_fragment:xg,clipping_planes_pars_vertex:_g,clipping_planes_vertex:yg,color_fragment:Sg,color_pars_fragment:Ag,color_pars_vertex:Tg,color_vertex:Eg,common:wg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:bg,displacementmap_pars_vertex:Cg,displacementmap_vertex:Rg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Dg,colorspace_fragment:Pg,colorspace_pars_fragment:Ng,envmap_fragment:Lg,envmap_common_pars_fragment:Ug,envmap_pars_fragment:Og,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Zg,envmap_vertex:Fg,fog_vertex:Hg,fog_pars_vertex:zg,fog_fragment:Gg,fog_pars_fragment:kg,gradientmap_pars_fragment:Vg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:Yg,lights_pars_begin:qg,lights_toon_fragment:Kg,lights_toon_pars_fragment:Qg,lights_phong_fragment:jg,lights_phong_pars_fragment:Jg,lights_physical_fragment:$g,lights_physical_pars_fragment:ev,lights_fragment_begin:tv,lights_fragment_maps:nv,lights_fragment_end:iv,lightprobes_pars_fragment:rv,logdepthbuf_fragment:sv,logdepthbuf_pars_fragment:av,logdepthbuf_pars_vertex:ov,logdepthbuf_vertex:cv,map_fragment:lv,map_pars_fragment:uv,map_particle_fragment:hv,map_particle_pars_fragment:dv,metalnessmap_fragment:fv,metalnessmap_pars_fragment:pv,morphinstance_vertex:mv,morphcolor_vertex:gv,morphnormal_vertex:vv,morphtarget_pars_vertex:xv,morphtarget_vertex:_v,normal_fragment_begin:yv,normal_fragment_maps:Sv,normal_pars_fragment:Av,normal_pars_vertex:Tv,normal_vertex:Ev,normalmap_pars_fragment:wv,clearcoat_normal_fragment_begin:Mv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:Cv,iridescence_pars_fragment:Rv,opaque_fragment:Iv,packing:Dv,premultiplied_alpha_fragment:Pv,project_vertex:Nv,dithering_fragment:Lv,dithering_pars_fragment:Uv,roughnessmap_fragment:Ov,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Hv,shadowmap_vertex:zv,shadowmask_pars_fragment:Gv,skinbase_vertex:kv,skinning_pars_vertex:Vv,skinning_vertex:Wv,skinnormal_vertex:Xv,specularmap_fragment:Yv,specularmap_pars_fragment:qv,tonemapping_fragment:Zv,tonemapping_pars_fragment:Kv,transmission_fragment:Qv,transmission_pars_fragment:jv,uv_pars_fragment:Jv,uv_pars_vertex:$v,uv_vertex:e1,worldpos_vertex:t1,background_vert:n1,background_frag:i1,backgroundCube_vert:r1,backgroundCube_frag:s1,cube_vert:a1,cube_frag:o1,depth_vert:c1,depth_frag:l1,distance_vert:u1,distance_frag:h1,equirect_vert:d1,equirect_frag:f1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:v1,meshlambert_vert:x1,meshlambert_frag:_1,meshmatcap_vert:y1,meshmatcap_frag:S1,meshnormal_vert:A1,meshnormal_frag:T1,meshphong_vert:E1,meshphong_frag:w1,meshphysical_vert:M1,meshphysical_frag:b1,meshtoon_vert:C1,meshtoon_frag:R1,points_vert:I1,points_frag:D1,shadow_vert:P1,shadow_frag:N1,sprite_vert:L1,sprite_frag:U1},be={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ci={basic:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:xn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:xn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new dt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:xn([be.points,be.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:xn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:xn([be.common,be.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:xn([be.sprite,be.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:xn([be.common,be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:xn([be.lights,be.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ci.physical={uniforms:xn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var ol={r:0,b:0,g:0},O1=new ke,jf=new Qe;jf.set(-1,0,0,0,1,0,0,0,1);function B1(n,e,t,i,r,s){let a=new dt(0),c=r===!0?0:1,l,u,h=null,p=0,d=null;function m(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let R=w.backgroundBlurriness>0;C=e.get(C,R)}return C}function y(w){let C=!1,R=m(w);R===null?x(a,c):R&&R.isColor&&(x(R,1),C=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(w,C){let R=m(C);R&&(R.isCubeTexture||R.mapping===Ma)?(u===void 0&&(u=new hn(new Ss(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:Or(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=R,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(C.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(jf),u.material.toneMapped=ht.getTransfer(R.colorSpace)!==Tt,(h!==R||p!==R.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=R,p=R.version,d=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new hn(new ur(2,2),new Bt({name:"BackgroundMaterial",uniforms:Or(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=ht.getTransfer(R.colorSpace)!==Tt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||p!==R.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=R,p=R.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function x(w,C){w.getRGB(ol,Xu(n)),t.buffers.color.setClear(ol.r,ol.g,ol.b,C,s)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,C=1){a.set(w),c=C,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,x(a,c)},render:y,addToRenderList:E,dispose:g}}function F1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function c(N,q,J,te,V){let Q=!1,j=p(N,te,J,q);s!==j&&(s=j,u(s.object)),Q=m(N,te,J,V),Q&&y(N,te,J,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,R(N,q,J,te),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function u(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function p(N,q,J,te){let V=te.wireframe===!0,Q=i[q.id];Q===void 0&&(Q={},i[q.id]=Q);let j=N.isInstancedMesh===!0?N.id:0,ue=Q[j];ue===void 0&&(ue={},Q[j]=ue);let de=ue[J.id];de===void 0&&(de={},ue[J.id]=de);let Ee=de[V];return Ee===void 0&&(Ee=d(l()),de[V]=Ee),Ee}function d(N){let q=[],J=[],te=[];for(let V=0;V<t;V++)q[V]=0,J[V]=0,te[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:J,attributeDivisors:te,object:N,attributes:{},index:null}}function m(N,q,J,te){let V=s.attributes,Q=q.attributes,j=0,ue=J.getAttributes();for(let de in ue)if(ue[de].location>=0){let Ie=V[de],Oe=Q[de];if(Oe===void 0&&(de==="instanceMatrix"&&N.instanceMatrix&&(Oe=N.instanceMatrix),de==="instanceColor"&&N.instanceColor&&(Oe=N.instanceColor)),Ie===void 0||Ie.attribute!==Oe||Oe&&Ie.data!==Oe.data)return!0;j++}return s.attributesNum!==j||s.index!==te}function y(N,q,J,te){let V={},Q=q.attributes,j=0,ue=J.getAttributes();for(let de in ue)if(ue[de].location>=0){let Ie=Q[de];Ie===void 0&&(de==="instanceMatrix"&&N.instanceMatrix&&(Ie=N.instanceMatrix),de==="instanceColor"&&N.instanceColor&&(Ie=N.instanceColor));let Oe={};Oe.attribute=Ie,Ie&&Ie.data&&(Oe.data=Ie.data),V[de]=Oe,j++}s.attributes=V,s.attributesNum=j,s.index=te}function E(){let N=s.newAttributes;for(let q=0,J=N.length;q<J;q++)N[q]=0}function x(N){g(N,0)}function g(N,q){let J=s.newAttributes,te=s.enabledAttributes,V=s.attributeDivisors;J[N]=1,te[N]===0&&(n.enableVertexAttribArray(N),te[N]=1),V[N]!==q&&(n.vertexAttribDivisor(N,q),V[N]=q)}function w(){let N=s.newAttributes,q=s.enabledAttributes;for(let J=0,te=q.length;J<te;J++)q[J]!==N[J]&&(n.disableVertexAttribArray(J),q[J]=0)}function C(N,q,J,te,V,Q,j){j===!0?n.vertexAttribIPointer(N,q,J,V,Q):n.vertexAttribPointer(N,q,J,te,V,Q)}function R(N,q,J,te){E();let V=te.attributes,Q=J.getAttributes(),j=q.defaultAttributeValues;for(let ue in Q){let de=Q[ue];if(de.location>=0){let Ee=V[ue];if(Ee===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(Ee=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(Ee=N.instanceColor)),Ee!==void 0){let Ie=Ee.normalized,Oe=Ee.itemSize,Ze=e.get(Ee);if(Ze===void 0)continue;let pt=Ze.buffer,Ye=Ze.type,re=Ze.bytesPerElement,fe=Ye===n.INT||Ye===n.UNSIGNED_INT||Ee.gpuType===Es;if(Ee.isInterleavedBufferAttribute){let ve=Ee.data,Ge=ve.stride,Je=Ee.offset;if(ve.isInstancedInterleavedBuffer){for(let Ve=0;Ve<de.locationSize;Ve++)g(de.location+Ve,ve.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<de.locationSize;Ve++)x(de.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Ve=0;Ve<de.locationSize;Ve++)C(de.location+Ve,Oe/de.locationSize,Ye,Ie,Ge*re,(Je+Oe/de.locationSize*Ve)*re,fe)}else{if(Ee.isInstancedBufferAttribute){for(let ve=0;ve<de.locationSize;ve++)g(de.location+ve,Ee.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ve=0;ve<de.locationSize;ve++)x(de.location+ve);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let ve=0;ve<de.locationSize;ve++)C(de.location+ve,Oe/de.locationSize,Ye,Ie,Oe*re,Oe/de.locationSize*ve*re,fe)}}else if(j!==void 0){let Ie=j[ue];if(Ie!==void 0)switch(Ie.length){case 2:n.vertexAttrib2fv(de.location,Ie);break;case 3:n.vertexAttrib3fv(de.location,Ie);break;case 4:n.vertexAttrib4fv(de.location,Ie);break;default:n.vertexAttrib1fv(de.location,Ie)}}}}w()}function U(){D();for(let N in i){let q=i[N];for(let J in q){let te=q[J];for(let V in te){let Q=te[V];for(let j in Q)h(Q[j].object),delete Q[j];delete te[V]}}delete i[N]}}function I(N){if(i[N.id]===void 0)return;let q=i[N.id];for(let J in q){let te=q[J];for(let V in te){let Q=te[V];for(let j in Q)h(Q[j].object),delete Q[j];delete te[V]}}delete i[N.id]}function B(N){for(let q in i){let J=i[q];for(let te in J){let V=J[te];if(V[N.id]===void 0)continue;let Q=V[N.id];for(let j in Q)h(Q[j].object),delete Q[j];delete V[N.id]}}}function A(N){for(let q in i){let J=i[q],te=N.isInstancedMesh===!0?N.id:0,V=J[te];if(V!==void 0){for(let Q in V){let j=V[Q];for(let ue in j)h(j[ue].object),delete j[ue];delete V[Q]}delete J[te],Object.keys(J).length===0&&delete i[q]}}}function D(){k(),a=!0,s!==r&&(s=r,u(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:D,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:x,disableUnusedAttributes:w}}function H1(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function c(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=c}function z1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let B=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(B){return!(B!==kt&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(B){let A=B===Pt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ct&&i.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Gt&&!A)}function l(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=l(u);h!==u&&(Xe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:R,maxSamples:U,samples:I}}function G1(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Si,c=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,m){let y=p.clippingPlanes,E=p.clipIntersection,x=p.clipShadows,g=n.get(p);if(!r||y===null||y.length===0||s&&!x)s?h(null):u();else{let w=s?0:i,C=w*4,R=g.clippingState||null;l.value=R,R=h(y,d,C,m);for(let U=0;U!==C;++U)R[U]=t[U];g.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=w}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,y){let E=p!==null?p.length:0,x=null;if(E!==0){if(x=l.value,y!==!0||x===null){let g=m+E*4,w=d.matrixWorldInverse;c.getNormalMatrix(w),(x===null||x.length<g)&&(x=new Float32Array(g));for(let C=0,R=m;C!==E;++C,R+=4)a.copy(p[C]).applyMatrix4(w,c),a.normal.toArray(x,R),x[R+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}var xr=4,Cf=[.125,.215,.35,.446,.526,.582],Br=20,k1=256,Oa=new Wi,Rf=new dt,Ku=null,Qu=0,ju=0,Ju=!1,V1=new L,ll=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:c=V1}=s;Ku=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,c),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Qu,ju),this._renderer.xr.enabled=Ju,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:et,minFilter:et,generateMipmaps:!1,type:Pt,format:kt,colorSpace:ln,depthBuffer:!1},r=If(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=W1(s)),this._blurMaterial=Y1(s,e,t),this._ggxMaterial=X1(s,e,t)}return r}_compileMaterial(e){let t=new hn(new gn,e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,i,r,s){let l=new nn(90,1,t,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(Rf),p.toneMapping=Gn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new Ss,new ys({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,x=E.material,g=!1,w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,g=!0):(x.color.copy(Rf),g=!0);for(let C=0;C<6;C++){let R=C%3;R===0?(l.up.set(0,u[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[C],s.y,s.z)):R===1?(l.up.set(0,0,u[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[C],s.z)):(l.up.set(0,u[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[C]));let U=this._cubeSize;Ms(r,R*U,C>2?U:0,U,U),p.setRenderTarget(r),g&&p.render(E,l),p.render(e,l)}p.toneMapping=m,p.autoClear=d,e.background=w}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===mr||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let c=s.uniforms;c.envMap.value=e;let l=this._cubeSize;Ms(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Oa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,c=this._lodMeshes[i];c.material=a;let l=a.uniforms,u=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),d=0+u*1.25,m=p*d,{_lodMax:y}=this,E=this._sizeLods[i],x=3*E*(i>y-xr?i-y+xr:0),g=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=y-t,Ms(s,x,g,3*E,2*E),r.setRenderTarget(s),r.render(c,Oa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,Ms(e,x,g,3*E,2*E),r.setRenderTarget(e),r.render(c,Oa)}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,c){let l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");let h=3,p=this._lodMeshes[r];p.material=u;let d=u.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Br-1),E=s/y,x=isFinite(s)?1+Math.floor(h*E):Br;x>Br&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Br}`);let g=[],w=0;for(let B=0;B<Br;++B){let A=B/E,D=Math.exp(-A*A/2);g.push(D),B===0?w+=D:B<x&&(w+=2*D)}for(let B=0;B<g.length;B++)g[B]=g[B]/w;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=g,d.latitudinal.value=a==="latitudinal",c&&(d.poleAxis.value=c);let{_lodMax:C}=this;d.dTheta.value=y,d.mipInt.value=C-i;let R=this._sizeLods[r],U=3*R*(r>C-xr?r-C+xr:0),I=4*(this._cubeSize-R);Ms(t,U,I,3*R,2*R),l.setRenderTarget(t),l.render(p,Oa)}};function W1(n){let e=[],t=[],i=[],r=n,s=n-xr+1+Cf.length;for(let a=0;a<s;a++){let c=Math.pow(2,r);e.push(c);let l=1/c;a>n-xr?l=Cf[a-n+xr-1]:a===0&&(l=0),t.push(l);let u=1/(c-2),h=-u,p=1+u,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,y=6,E=3,x=2,g=1,w=new Float32Array(E*y*m),C=new Float32Array(x*y*m),R=new Float32Array(g*y*m);for(let I=0;I<m;I++){let B=I%3*2/3-1,A=I>2?0:-1,D=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];w.set(D,E*y*I),C.set(d,x*y*I);let k=[I,I,I,I,I,I];R.set(k,g*y*I)}let U=new gn;U.setAttribute("position",new rn(w,E)),U.setAttribute("uv",new rn(C,x)),U.setAttribute("faceIndex",new rn(R,g)),i.push(new hn(U,null)),r>xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function If(n,e,t){let i=new gt(n,e,t);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function X1(n,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Y1(n,e,t){let i=new Float32Array(Br),r=new L(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Df(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Pf(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ul=class extends gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ss(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Qt});s.uniforms.tEquirect.value=t;let a=new hn(r,s),c=t.minFilter;return t.minFilter===kn&&(t.minFilter=et),new _c(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}};function q1(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){let m=d.mapping;if(m===Sc||m===Ac)if(e.has(d)){let y=e.get(d).texture;return c(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let E=new ul(y.height);return E.fromEquirectangularTexture(n,d),e.set(d,E),d.addEventListener("dispose",u),c(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let m=d.mapping,y=m===Sc||m===Ac,E=m===mr||m===Ur;if(y||E){let x=t.get(d),g=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new ll(n)),x=y?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let w=d.image;return y&&w&&w.height>0||E&&w&&l(w)?(i===null&&(i=new ll(n)),x=y?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}function c(d,m){return m===Sc?d.mapping=mr:m===Ac&&(d.mapping=Ur),d}function l(d){let m=0,y=6;for(let E=0;E<y;E++)d[E]!==void 0&&m++;return m===y}function u(d){let m=d.target;m.removeEventListener("dispose",u);let y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function h(d){let m=d.target;m.removeEventListener("dispose",h);let y=t.get(m);y!==void 0&&(t.delete(m),y.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Z1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&rc("WebGLRenderer: "+i+" extension not supported."),r}}}function K1(n,e,t,i){let r={},s=new WeakMap;function a(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",a),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function c(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(p){let d=p.attributes;for(let m in d)e.update(d[m],n.ARRAY_BUFFER)}function u(p){let d=[],m=p.index,y=p.attributes.position,E=0;if(y===void 0)return;if(m!==null){let w=m.array;E=m.version;for(let C=0,R=w.length;C<R;C+=3){let U=w[C+0],I=w[C+1],B=w[C+2];d.push(U,I,I,B,B,U)}}else{let w=y.array;E=y.version;for(let C=0,R=w.length/3-1;C<R;C+=3){let U=C+0,I=C+1,B=C+2;d.push(U,I,I,B,B,U)}}let x=new(y.count>=65535?xa:va)(d,1);x.version=E;let g=s.get(p);g&&e.remove(g),s.set(p,x)}function h(p){let d=s.get(p);if(d){let m=p.index;m!==null&&d.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:c,update:l,getWireframeAttribute:h}}function Q1(n,e,t){let i;function r(p){i=p}let s,a;function c(p){s=p.type,a=p.bytesPerElement}function l(p,d){n.drawElements(i,d,s,p*a),t.update(d,i,1)}function u(p,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,p*a,m),t.update(d,i,m))}function h(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,m);let E=0;for(let x=0;x<m;x++)E+=d[x];t.update(E,i,1)}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function j1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,c){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=c*(s/3);break;case n.LINES:t.lines+=c*(s/2);break;case n.LINE_STRIP:t.lines+=c*(s-1);break;case n.LINE_LOOP:t.lines+=c*s;break;case n.POINTS:t.points+=c*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function J1(n,e,t){let i=new WeakMap,r=new ut;function s(a,c,l){let u=a.morphTargetInfluences,h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0,d=i.get(c);if(d===void 0||d.count!==p){let D=function(){B.dispose(),i.delete(c),c.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let m=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],g=c.morphAttributes.normal||[],w=c.morphAttributes.color||[],C=0;m===!0&&(C=1),y===!0&&(C=2),E===!0&&(C=3);let R=c.attributes.position.count*C,U=1;R>e.maxTextureSize&&(U=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let I=new Float32Array(R*U*4*p),B=new xs(I,R,U,p);B.type=Gt,B.needsUpdate=!0;let A=C*4;for(let k=0;k<p;k++){let N=x[k],q=g[k],J=w[k],te=R*U*4*k;for(let V=0;V<N.count;V++){let Q=V*A;m===!0&&(r.fromBufferAttribute(N,V),I[te+Q+0]=r.x,I[te+Q+1]=r.y,I[te+Q+2]=r.z,I[te+Q+3]=0),y===!0&&(r.fromBufferAttribute(q,V),I[te+Q+4]=r.x,I[te+Q+5]=r.y,I[te+Q+6]=r.z,I[te+Q+7]=0),E===!0&&(r.fromBufferAttribute(J,V),I[te+Q+8]=r.x,I[te+Q+9]=r.y,I[te+Q+10]=r.z,I[te+Q+11]=J.itemSize===4?r.w:1)}}d={count:p,texture:B,size:new De(R,U)},i.set(c,d),c.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let E=0;E<u.length;E++)m+=u[E];let y=c.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function $1(n,e,t,i,r){let s=new WeakMap;function a(u){let h=r.render.frame,p=u.geometry,d=e.get(u,p);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){let m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function c(){s=new WeakMap}function l(u){let h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}var ex={[Iu]:"LINEAR_TONE_MAPPING",[Du]:"REINHARD_TONE_MAPPING",[Pu]:"CINEON_TONE_MAPPING",[Nu]:"ACES_FILMIC_TONE_MAPPING",[Uu]:"AGX_TONE_MAPPING",[Ou]:"NEUTRAL_TONE_MAPPING",[Lu]:"CUSTOM_TONE_MAPPING"};function tx(n,e,t,i,r){let s=new gt(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Kn(e,t):void 0}),a=new gt(e,t,{type:Pt,depthBuffer:!1,stencilBuffer:!1}),c=new gn;c.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Hn([0,2,0,0,2,0],2));let l=new Ei({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new hn(c,l),h=new Wi(-1,1,1,-1,0,1),p=null,d=null,m=!1,y,E=null,x=[],g=!1;this.setSize=function(w,C){s.setSize(w,C),a.setSize(w,C);for(let R=0;R<x.length;R++){let U=x[R];U.setSize&&U.setSize(w,C)}},this.setEffects=function(w){x=w,g=x.length>0&&x[0].isRenderPass===!0;let C=s.width,R=s.height;for(let U=0;U<x.length;U++){let I=x[U];I.setSize&&I.setSize(C,R)}},this.begin=function(w,C){if(m||w.toneMapping===Gn&&x.length===0)return!1;if(E=C,C!==null){let R=C.width,U=C.height;(s.width!==R||s.height!==U)&&this.setSize(R,U)}return g===!1&&w.setRenderTarget(s),y=w.toneMapping,w.toneMapping=Gn,!0},this.hasRenderPass=function(){return g},this.end=function(w,C){w.toneMapping=y,m=!0;let R=s,U=a;for(let I=0;I<x.length;I++){let B=x[I];if(B.enabled!==!1&&(B.render(w,U,R,C),B.needsSwap!==!1)){let A=R;R=U,U=A}}if(p!==w.outputColorSpace||d!==w.toneMapping){p=w.outputColorSpace,d=w.toneMapping,l.defines={},ht.getTransfer(p)===Tt&&(l.defines.SRGB_TRANSFER="");let I=ex[d];I&&(l.defines[I]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=R.texture,w.setRenderTarget(E),w.render(u,h),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Jf=new Xt,th=new Kn(1,1),$f=new xs,ep=new un,tp=new Sa,Nf=[],Lf=[],Uf=new Float32Array(16),Of=new Float32Array(9),Bf=new Float32Array(4);function Rs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Nf[r];if(s===void 0&&(s=new Float32Array(r),Nf[r]=s),e!==0){i.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,n[a].toArray(s,c)}return s}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dl(n,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function ax(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Jt(t,i))return;Bf.set(i),n.uniformMatrix2fv(this.addr,!1,Bf),$t(t,i)}}function ox(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Jt(t,i))return;Of.set(i),n.uniformMatrix3fv(this.addr,!1,Of),$t(t,i)}}function cx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Jt(t,i))return;Uf.set(i),n.uniformMatrix4fv(this.addr,!1,Uf),$t(t,i)}}function lx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function fx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function vx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(th.compareFunction=t.isReversedDepthBuffer()?al:sl,s=th):s=Jf,t.setTexture2D(e||s,r)}function xx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ep,r)}function _x(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tp,r)}function yx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$f,r)}function Sx(n){switch(n){case 5126:return nx;case 35664:return ix;case 35665:return rx;case 35666:return sx;case 35674:return ax;case 35675:return ox;case 35676:return cx;case 5124:case 35670:return lx;case 35667:case 35671:return ux;case 35668:case 35672:return hx;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return yx}}function Ax(n,e){n.uniform1fv(this.addr,e)}function Tx(n,e){let t=Rs(e,this.size,2);n.uniform2fv(this.addr,t)}function Ex(n,e){let t=Rs(e,this.size,3);n.uniform3fv(this.addr,t)}function wx(n,e){let t=Rs(e,this.size,4);n.uniform4fv(this.addr,t)}function Mx(n,e){let t=Rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bx(n,e){let t=Rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cx(n,e){let t=Rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rx(n,e){n.uniform1iv(this.addr,e)}function Ix(n,e){n.uniform2iv(this.addr,e)}function Dx(n,e){n.uniform3iv(this.addr,e)}function Px(n,e){n.uniform4iv(this.addr,e)}function Nx(n,e){n.uniform1uiv(this.addr,e)}function Lx(n,e){n.uniform2uiv(this.addr,e)}function Ux(n,e){n.uniform3uiv(this.addr,e)}function Ox(n,e){n.uniform4uiv(this.addr,e)}function Bx(n,e,t){let i=this.cache,r=e.length,s=dl(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=th:a=Jf;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||a,s[c])}function Fx(n,e,t){let i=this.cache,r=e.length,s=dl(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ep,s[a])}function Hx(n,e,t){let i=this.cache,r=e.length,s=dl(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tp,s[a])}function zx(n,e,t){let i=this.cache,r=e.length,s=dl(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$f,s[a])}function Gx(n){switch(n){case 5126:return Ax;case 35664:return Tx;case 35665:return Ex;case 35666:return wx;case 35674:return Mx;case 35675:return bx;case 35676:return Cx;case 5124:case 35670:return Rx;case 35667:case 35671:return Ix;case 35668:case 35672:return Dx;case 35669:case 35673:return Px;case 5125:return Nx;case 36294:return Lx;case 36295:return Ux;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return zx}}var nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sx(t.type)}},ih=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gx(t.type)}},rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let c=r[s];c.setValue(e,t[c.id],i)}}},$u=/(\w+)(\])?(\[|\.)?/g;function Ff(n,e){n.seq.push(e),n.map[e.id]=e}function kx(n,e,t){let i=n.name,r=i.length;for($u.lastIndex=0;;){let s=$u.exec(i),a=$u.lastIndex,c=s[1],l=s[2]==="]",u=s[3];if(l&&(c=c|0),u===void 0||u==="["&&a+2===r){Ff(t,u===void 0?new nh(c,n,e):new ih(c,n,e));break}else{let p=t.map[c];p===void 0&&(p=new rh(c),Ff(t,p)),t=p}}}var bs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let c=e.getActiveUniform(t,a),l=e.getUniformLocation(t,c.name);kx(c,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let c=t[s],l=i[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Hf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Vx=37297,Wx=0;function Xx(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let c=a+1;i.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return i.join(`
`)}var zf=new Qe;function Yx(n){ht._getMatrix(zf,ht.workingColorSpace,n);let e=`mat3( ${zf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case fa:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Xx(n.getShaderSource(e),c)}else return s}function qx(n,e){let t=Yx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Zx={[Iu]:"Linear",[Du]:"Reinhard",[Pu]:"Cineon",[Nu]:"ACESFilmic",[Uu]:"AgX",[Ou]:"Neutral",[Lu]:"Custom"};function Kx(n,e){let t=Zx[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cl=new L;function Qx(){ht.getLuminanceCoefficients(cl);let n=cl.x.toFixed(4),e=cl.y.toFixed(4),t=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function Jx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $x(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:c}}return t}function Fa(n){return n!==""}function kf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(n){return n.replace(e_,n_)}var t_=new Map;function n_(n,e){let t=st[e];if(t===void 0){let i=t_.get(e);if(i!==void 0)t=st[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sh(t)}var i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(n){return n.replace(i_,r_)}function r_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var s_={[wa]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function a_(n){return s_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var o_={[mr]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function c_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":o_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var l_={[Ur]:"ENVMAP_MODE_REFRACTION"};function u_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":l_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var h_={[Ru]:"ENVMAP_BLENDING_MULTIPLY",[hf]:"ENVMAP_BLENDING_MIX",[df]:"ENVMAP_BLENDING_ADD"};function d_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":h_[n.combine]||"ENVMAP_BLENDING_NONE"}function f_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function p_(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,c=t.fragmentShader,l=a_(t),u=c_(t),h=u_(t),p=d_(t),d=f_(t),m=jx(t),y=Jx(s),E=r.createProgram(),x,g,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Fa).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Fa).join(`
`),g.length>0&&(g+=`
`)):(x=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),g=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?st.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,qx("linearToOutputTexel",t.outputColorSpace),Qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),a=sh(a),a=kf(a,t),a=Vf(a,t),c=sh(c),c=kf(c,t),c=Vf(c,t),a=Wf(a),c=Wf(c),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===hi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let C=w+x+a,R=w+g+c,U=Hf(r,r.VERTEX_SHADER,C),I=Hf(r,r.FRAGMENT_SHADER,R);r.attachShader(E,U),r.attachShader(E,I),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function B(N){if(n.debug.checkShaderErrors){let q=r.getProgramInfoLog(E)||"",J=r.getShaderInfoLog(U)||"",te=r.getShaderInfoLog(I)||"",V=q.trim(),Q=J.trim(),j=te.trim(),ue=!0,de=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,U,I);else{let Ee=Gf(r,U,"vertex"),Ie=Gf(r,I,"fragment");qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+Ee+`
`+Ie)}else V!==""?Xe("WebGLProgram: Program Info Log:",V):(Q===""||j==="")&&(de=!1);de&&(N.diagnostics={runnable:ue,programLog:V,vertexShader:{log:Q,prefix:x},fragmentShader:{log:j,prefix:g}})}r.deleteShader(U),r.deleteShader(I),A=new bs(r,E),D=$x(r,E)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(E,Vx)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wx++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=I,this}var m_=0,ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new oh(e),t.set(e,i)),i}},oh=class{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}};function g_(n){return n===Rn||n===La||n===Ua}function v_(n,e,t,i,r,s){let a=new ga,c=new ah,l=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return l.add(A),A===0?"uv":`uv${A}`}function E(A,D,k,N,q,J){let te=N.fog,V=q.geometry,Q=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?N.environment:null,j=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ue=e.get(A.envMap||Q,j),de=ue&&ue.mapping===Ma?ue.image.height:null,Ee=m[A.type];A.precision!==null&&(d=i.getMaxPrecision(A.precision),d!==A.precision&&Xe("WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));let Ie=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Oe=Ie!==void 0?Ie.length:0,Ze=0;V.morphAttributes.position!==void 0&&(Ze=1),V.morphAttributes.normal!==void 0&&(Ze=2),V.morphAttributes.color!==void 0&&(Ze=3);let pt,Ye,re,fe;if(Ee){let nt=Ci[Ee];pt=nt.vertexShader,Ye=nt.fragmentShader}else pt=A.vertexShader,Ye=A.fragmentShader,c.update(A),re=c.getVertexShaderID(A),fe=c.getFragmentShaderID(A);let ve=n.getRenderTarget(),Ge=n.state.buffers.depth.getReversed(),Je=q.isInstancedMesh===!0,Ve=q.isBatchedMesh===!0,Mt=!!A.map,it=!!A.matcap,vt=!!ue,St=!!A.aoMap,rt=!!A.lightMap,Yt=!!A.bumpMap,Lt=!!A.normalMap,fn=!!A.displacementMap,z=!!A.emissiveMap,Vt=!!A.metalnessMap,ot=!!A.roughnessMap,bt=A.anisotropy>0,we=A.clearcoat>0,Dt=A.dispersion>0,M=A.iridescence>0,_=A.sheen>0,Y=A.transmission>0,ie=bt&&!!A.anisotropyMap,pe=we&&!!A.clearcoatMap,xe=we&&!!A.clearcoatNormalMap,ye=we&&!!A.clearcoatRoughnessMap,ee=M&&!!A.iridescenceMap,se=M&&!!A.iridescenceThicknessMap,Ce=_&&!!A.sheenColorMap,Ae=_&&!!A.sheenRoughnessMap,me=!!A.specularMap,_e=!!A.specularColorMap,We=!!A.specularIntensityMap,Fe=Y&&!!A.transmissionMap,Ke=Y&&!!A.thicknessMap,O=!!A.gradientMap,Z=!!A.alphaMap,ne=A.alphaTest>0,Pe=!!A.alphaHash,Se=!!A.extensions,he=Gn;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(he=n.toneMapping);let He={shaderID:Ee,shaderType:A.type,shaderName:A.name,vertexShader:pt,fragmentShader:Ye,defines:A.defines,customVertexShaderID:re,customFragmentShaderID:fe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:Ve,batchingColor:Ve&&q._colorsTexture!==null,instancing:Je,instancingColor:Je&&q.instanceColor!==null,instancingMorph:Je&&q.morphTexture!==null,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Mt,matcap:it,envMap:vt,envMapMode:vt&&ue.mapping,envMapCubeUVHeight:de,aoMap:St,lightMap:rt,bumpMap:Yt,normalMap:Lt,displacementMap:fn,emissiveMap:z,normalMapObjectSpace:Lt&&A.normalMapType===pf,normalMapTangentSpace:Lt&&A.normalMapType===ku,packedNormalMap:Lt&&A.normalMapType===ku&&g_(A.normalMap.format),metalnessMap:Vt,roughnessMap:ot,anisotropy:bt,anisotropyMap:ie,clearcoat:we,clearcoatMap:pe,clearcoatNormalMap:xe,clearcoatRoughnessMap:ye,dispersion:Dt,iridescence:M,iridescenceMap:ee,iridescenceThicknessMap:se,sheen:_,sheenColorMap:Ce,sheenRoughnessMap:Ae,specularMap:me,specularColorMap:_e,specularIntensityMap:We,transmission:Y,transmissionMap:Fe,thicknessMap:Ke,gradientMap:O,opaque:A.transparent===!1&&A.blending===Nr&&A.alphaToCoverage===!1,alphaMap:Z,alphaTest:ne,alphaHash:Pe,combine:A.combine,mapUv:Mt&&y(A.map.channel),aoMapUv:St&&y(A.aoMap.channel),lightMapUv:rt&&y(A.lightMap.channel),bumpMapUv:Yt&&y(A.bumpMap.channel),normalMapUv:Lt&&y(A.normalMap.channel),displacementMapUv:fn&&y(A.displacementMap.channel),emissiveMapUv:z&&y(A.emissiveMap.channel),metalnessMapUv:Vt&&y(A.metalnessMap.channel),roughnessMapUv:ot&&y(A.roughnessMap.channel),anisotropyMapUv:ie&&y(A.anisotropyMap.channel),clearcoatMapUv:pe&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:xe&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:se&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(A.sheenRoughnessMap.channel),specularMapUv:me&&y(A.specularMap.channel),specularColorMapUv:_e&&y(A.specularColorMap.channel),specularIntensityMapUv:We&&y(A.specularIntensityMap.channel),transmissionMapUv:Fe&&y(A.transmissionMap.channel),thicknessMapUv:Ke&&y(A.thicknessMap.channel),alphaMapUv:Z&&y(A.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Lt||bt),vertexNormals:!!V.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(Mt||Z),fog:!!te,useFog:A.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||V.attributes.normal===void 0&&Lt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ge,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ze,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,decodeVideoTexture:Mt&&A.map.isVideoTexture===!0&&ht.getTransfer(A.map.colorSpace)===Tt,decodeVideoTextureEmissive:z&&A.emissiveMap.isVideoTexture===!0&&ht.getTransfer(A.emissiveMap.colorSpace)===Tt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===An,flipSided:A.side===Zt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Se&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&A.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function x(A){let D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(let k in A.defines)D.push(k),D.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(g(D,A),w(D,A),D.push(n.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function g(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function w(A,D){a.disableAll(),D.instancing&&a.enable(0),D.instancingColor&&a.enable(1),D.instancingMorph&&a.enable(2),D.matcap&&a.enable(3),D.envMap&&a.enable(4),D.normalMapObjectSpace&&a.enable(5),D.normalMapTangentSpace&&a.enable(6),D.clearcoat&&a.enable(7),D.iridescence&&a.enable(8),D.alphaTest&&a.enable(9),D.vertexColors&&a.enable(10),D.vertexAlphas&&a.enable(11),D.vertexUv1s&&a.enable(12),D.vertexUv2s&&a.enable(13),D.vertexUv3s&&a.enable(14),D.vertexTangents&&a.enable(15),D.anisotropy&&a.enable(16),D.alphaHash&&a.enable(17),D.batching&&a.enable(18),D.dispersion&&a.enable(19),D.batchingColor&&a.enable(20),D.gradientMap&&a.enable(21),D.packedNormalMap&&a.enable(22),D.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.reversedDepthBuffer&&a.enable(4),D.skinning&&a.enable(5),D.morphTargets&&a.enable(6),D.morphNormals&&a.enable(7),D.morphColors&&a.enable(8),D.premultipliedAlpha&&a.enable(9),D.shadowMapEnabled&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.decodeVideoTextureEmissive&&a.enable(20),D.alphaToCoverage&&a.enable(21),D.numLightProbeGrids>0&&a.enable(22),A.push(a.mask)}function C(A){let D=m[A.type],k;if(D){let N=Ci[D];k=Mf.clone(N.uniforms)}else k=A.uniforms;return k}function R(A,D){let k=h.get(D);return k!==void 0?++k.usedTimes:(k=new p_(n,D,A,r),u.push(k),h.set(D,k)),k}function U(A){if(--A.usedTimes===0){let D=u.indexOf(A);u[D]=u[u.length-1],u.pop(),h.delete(A.cacheKey),A.destroy()}}function I(A){c.remove(A)}function B(){c.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:C,acquireProgram:R,releaseProgram:U,releaseShaderCache:I,programs:u,dispose:B}}function x_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function r(a,c,l){n.get(a)[c]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function __(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Yf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qf(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function c(d,m,y,E,x,g){let w=n[e];return w===void 0?(w={id:d.id,object:d,geometry:m,material:y,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:x,group:g},n[e]=w):(w.id=d.id,w.object=d,w.geometry=m,w.material=y,w.materialVariant=a(d),w.groupOrder=E,w.renderOrder=d.renderOrder,w.z=x,w.group=g),e++,w}function l(d,m,y,E,x,g){let w=c(d,m,y,E,x,g);y.transmission>0?i.push(w):y.transparent===!0?r.push(w):t.push(w)}function u(d,m,y,E,x,g){let w=c(d,m,y,E,x,g);y.transmission>0?i.unshift(w):y.transparent===!0?r.unshift(w):t.unshift(w)}function h(d,m){t.length>1&&t.sort(d||__),i.length>1&&i.sort(m||Yf),r.length>1&&r.sort(m||Yf)}function p(){for(let d=e,m=n.length;d<m;d++){let y=n[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:p,sort:h}}function y_(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new qf,n.set(i,[a])):r>=s.length?(a=new qf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function S_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new dt};break;case"SpotLight":t={position:new L,direction:new L,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function A_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var T_=0;function E_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function w_(n){let e=new S_,t=A_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);let r=new L,s=new ke,a=new ke;function c(u){let h=0,p=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,y=0,E=0,x=0,g=0,w=0,C=0,R=0,U=0,I=0,B=0;u.sort(E_);for(let D=0,k=u.length;D<k;D++){let N=u[D],q=N.color,J=N.intensity,te=N.distance,V=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Rn?V=N.shadow.map.texture:V=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=q.r*J,p+=q.g*J,d+=q.b*J;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(N.sh.coefficients[Q],J);B++}else if(N.isDirectionalLight){let Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,ue=t.get(N);ue.shadowIntensity=j.intensity,ue.shadowBias=j.bias,ue.shadowNormalBias=j.normalBias,ue.shadowRadius=j.radius,ue.shadowMapSize=j.mapSize,i.directionalShadow[m]=ue,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=N.shadow.matrix,w++}i.directional[m]=Q,m++}else if(N.isSpotLight){let Q=e.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(q).multiplyScalar(J),Q.distance=te,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,i.spot[E]=Q;let j=N.shadow;if(N.map&&(i.spotLightMap[U]=N.map,U++,j.updateMatrices(N),N.castShadow&&I++),i.spotLightMatrix[E]=j.matrix,N.castShadow){let ue=t.get(N);ue.shadowIntensity=j.intensity,ue.shadowBias=j.bias,ue.shadowNormalBias=j.normalBias,ue.shadowRadius=j.radius,ue.shadowMapSize=j.mapSize,i.spotShadow[E]=ue,i.spotShadowMap[E]=V,R++}E++}else if(N.isRectAreaLight){let Q=e.get(N);Q.color.copy(q).multiplyScalar(J),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=Q,x++}else if(N.isPointLight){let Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){let j=N.shadow,ue=t.get(N);ue.shadowIntensity=j.intensity,ue.shadowBias=j.bias,ue.shadowNormalBias=j.normalBias,ue.shadowRadius=j.radius,ue.shadowMapSize=j.mapSize,ue.shadowCameraNear=j.camera.near,ue.shadowCameraFar=j.camera.far,i.pointShadow[y]=ue,i.pointShadowMap[y]=V,i.pointShadowMatrix[y]=N.shadow.matrix,C++}i.point[y]=Q,y++}else if(N.isHemisphereLight){let Q=e.get(N);Q.skyColor.copy(N.color).multiplyScalar(J),Q.groundColor.copy(N.groundColor).multiplyScalar(J),i.hemi[g]=Q,g++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;let A=i.hash;(A.directionalLength!==m||A.pointLength!==y||A.spotLength!==E||A.rectAreaLength!==x||A.hemiLength!==g||A.numDirectionalShadows!==w||A.numPointShadows!==C||A.numSpotShadows!==R||A.numSpotMaps!==U||A.numLightProbes!==B)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=x,i.point.length=y,i.hemi.length=g,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=R+U-I,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=B,A.directionalLength=m,A.pointLength=y,A.spotLength=E,A.rectAreaLength=x,A.hemiLength=g,A.numDirectionalShadows=w,A.numPointShadows=C,A.numSpotShadows=R,A.numSpotMaps=U,A.numLightProbes=B,i.version=T_++)}function l(u,h){let p=0,d=0,m=0,y=0,E=0,x=h.matrixWorldInverse;for(let g=0,w=u.length;g<w;g++){let C=u[g];if(C.isDirectionalLight){let R=i.directional[p];R.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(x),p++}else if(C.isSpotLight){let R=i.spot[m];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(x),m++}else if(C.isRectAreaLight){let R=i.rectArea[y];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(x),a.identity(),s.copy(C.matrixWorld),s.premultiply(x),a.extractRotation(s),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(C.isPointLight){let R=i.point[d];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(x),d++}else if(C.isHemisphereLight){let R=i.hemi[E];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(x),E++}}}return{setup:c,setupView:l,state:i}}function Zf(n){let e=new w_(n),t=[],i=[],r=[];function s(d){p.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function c(d){i.push(d)}function l(d){r.push(d)}function u(){e.setup(t)}function h(d){e.setupView(t,d)}let p={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c,pushLightProbeGrid:l}}function M_(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),c;return a===void 0?(c=new Zf(n),e.set(r,[c])):s>=a.length?(c=new Zf(n),a.push(c)):c=a[s],c}function i(){e=new WeakMap}return{get:t,dispose:i}}var b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,R_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],I_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Kf=new ke,Ba=new L,eh=new L;function D_(n,e,t){let i=new ya,r=new De,s=new De,a=new ut,c=new cc,l=new lc,u={},h=t.maxTextureSize,p={[ai]:Zt,[Zt]:ai,[An]:An},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:b_,fragmentShader:C_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let y=new gn;y.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new hn(y,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let g=this.type;this.render=function(I,B,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;this.type===qd&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wa);let D=n.getRenderTarget(),k=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Qt),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let J=g!==this.type;J&&B.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(V=>V.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,V=I.length;te<V;te++){let Q=I[te],j=Q.shadow;if(j===void 0){Xe("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let ue=j.getFrameExtents();r.multiply(ue),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ue.x),r.x=s.x*ue.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ue.y),r.y=s.y*ue.y,j.mapSize.y=s.y));let de=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=de,j.map===null||J===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ts){if(Q.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new gt(r.x,r.y,{format:Rn,type:Pt,minFilter:et,magFilter:et,generateMipmaps:!1}),j.map.texture.name=Q.name+".shadowMap",j.map.depthTexture=new Kn(r.x,r.y,Gt),j.map.depthTexture.name=Q.name+".shadowMapDepth",j.map.depthTexture.format=Ai,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ft,j.map.depthTexture.magFilter=Ft}else Q.isPointLight?(j.map=new ul(r.x),j.map.depthTexture=new oc(r.x,Cn)):(j.map=new gt(r.x,r.y),j.map.depthTexture=new Kn(r.x,r.y,Cn)),j.map.depthTexture.name=Q.name+".shadowMap",j.map.depthTexture.format=Ai,this.type===wa?(j.map.depthTexture.compareFunction=de?al:sl,j.map.depthTexture.minFilter=et,j.map.depthTexture.magFilter=et):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ft,j.map.depthTexture.magFilter=Ft);j.camera.updateProjectionMatrix()}let Ee=j.map.isWebGLCubeRenderTarget?6:1;for(let Ie=0;Ie<Ee;Ie++){if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,Ie),n.clear();else{Ie===0&&(n.setRenderTarget(j.map),n.clear());let Oe=j.getViewport(Ie);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),q.viewport(a)}if(Q.isPointLight){let Oe=j.camera,Ze=j.matrix,pt=Q.distance||Oe.far;pt!==Oe.far&&(Oe.far=pt,Oe.updateProjectionMatrix()),Ba.setFromMatrixPosition(Q.matrixWorld),Oe.position.copy(Ba),eh.copy(Oe.position),eh.add(R_[Ie]),Oe.up.copy(I_[Ie]),Oe.lookAt(eh),Oe.updateMatrixWorld(),Ze.makeTranslation(-Ba.x,-Ba.y,-Ba.z),Kf.multiplyMatrices(Oe.projectionMatrix,Oe.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Kf,Oe.coordinateSystem,Oe.reversedDepth)}else j.updateMatrices(Q);i=j.getFrustum(),R(B,A,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===Ts&&w(j,A),j.needsUpdate=!1}g=this.type,x.needsUpdate=!1,n.setRenderTarget(D,k,N)};function w(I,B){let A=e.update(E);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new gt(r.x,r.y,{format:Rn,type:Pt})),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(B,null,A,d,E,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(B,null,A,m,E,null)}function C(I,B,A,D){let k=null,N=A.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)k=N;else if(k=A.isPointLight===!0?l:c,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){let q=k.uuid,J=B.uuid,te=u[q];te===void 0&&(te={},u[q]=te);let V=te[J];V===void 0&&(V=k.clone(),te[J]=V,B.addEventListener("dispose",U)),k=V}if(k.visible=B.visible,k.wireframe=B.wireframe,D===Ts?k.side=B.shadowSide!==null?B.shadowSide:B.side:k.side=B.shadowSide!==null?B.shadowSide:p[B.side],k.alphaMap=B.alphaMap,k.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,k.map=B.map,k.clipShadows=B.clipShadows,k.clippingPlanes=B.clippingPlanes,k.clipIntersection=B.clipIntersection,k.displacementMap=B.displacementMap,k.displacementScale=B.displacementScale,k.displacementBias=B.displacementBias,k.wireframeLinewidth=B.wireframeLinewidth,k.linewidth=B.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let q=n.properties.get(k);q.light=A}return k}function R(I,B,A,D,k){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&k===Ts)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,I.matrixWorld);let J=e.update(I),te=I.material;if(Array.isArray(te)){let V=J.groups;for(let Q=0,j=V.length;Q<j;Q++){let ue=V[Q],de=te[ue.materialIndex];if(de&&de.visible){let Ee=C(I,de,D,k);I.onBeforeShadow(n,I,B,A,J,Ee,ue),n.renderBufferDirect(A,null,J,Ee,I,ue),I.onAfterShadow(n,I,B,A,J,Ee,ue)}}}else if(te.visible){let V=C(I,te,D,k);I.onBeforeShadow(n,I,B,A,J,V,null),n.renderBufferDirect(A,null,J,V,I,null),I.onAfterShadow(n,I,B,A,J,V,null)}}let q=I.children;for(let J=0,te=q.length;J<te;J++)R(q[J],B,A,D,k)}function U(I){I.target.removeEventListener("dispose",U);for(let A in u){let D=u[A],k=I.target.uuid;k in D&&(D[k].dispose(),delete D[k])}}}function P_(n,e){function t(){let O=!1,Z=new ut,ne=null,Pe=new ut(0,0,0,0);return{setMask:function(Se){ne!==Se&&!O&&(n.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){O=Se},setClear:function(Se,he,He,nt,zt){zt===!0&&(Se*=nt,he*=nt,He*=nt),Z.set(Se,he,He,nt),Pe.equals(Z)===!1&&(n.clearColor(Se,he,He,nt),Pe.copy(Z))},reset:function(){O=!1,ne=null,Pe.set(-1,0,0,0)}}}function i(){let O=!1,Z=!1,ne=null,Pe=null,Se=null;return{setReversed:function(he){if(Z!==he){let He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Z=he;let nt=Se;Se=null,this.setClear(nt)}},getReversed:function(){return Z},setTest:function(he){he?ve(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(he){ne!==he&&!O&&(n.depthMask(he),ne=he)},setFunc:function(he){if(Z&&(he=Ef[he]),Pe!==he){switch(he){case Qo:n.depthFunc(n.NEVER);break;case fs:n.depthFunc(n.ALWAYS);break;case jo:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case Jo:n.depthFunc(n.EQUAL);break;case $o:n.depthFunc(n.GEQUAL);break;case ec:n.depthFunc(n.GREATER);break;case tc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=he}},setLocked:function(he){O=he},setClear:function(he){Se!==he&&(Se=he,Z&&(he=1-he),n.clearDepth(he))},reset:function(){O=!1,ne=null,Pe=null,Se=null,Z=!1}}}function r(){let O=!1,Z=null,ne=null,Pe=null,Se=null,he=null,He=null,nt=null,zt=null;return{setTest:function(At){O||(At?ve(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(At){Z!==At&&!O&&(n.stencilMask(At),Z=At)},setFunc:function(At,ti,Yn){(ne!==At||Pe!==ti||Se!==Yn)&&(n.stencilFunc(At,ti,Yn),ne=At,Pe=ti,Se=Yn)},setOp:function(At,ti,Yn){(he!==At||He!==ti||nt!==Yn)&&(n.stencilOp(At,ti,Yn),he=At,He=ti,nt=Yn)},setLocked:function(At){O=At},setClear:function(At){zt!==At&&(n.clearStencil(At),zt=At)},reset:function(){O=!1,Z=null,ne=null,Pe=null,Se=null,he=null,He=null,nt=null,zt=null}}}let s=new t,a=new i,c=new r,l=new WeakMap,u=new WeakMap,h={},p={},d={},m=new WeakMap,y=[],E=null,x=!1,g=null,w=null,C=null,R=null,U=null,I=null,B=null,A=new dt(0,0,0),D=0,k=!1,N=null,q=null,J=null,te=null,V=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ue=0,de=n.getParameter(n.VERSION);de.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(de)[1]),j=ue>=1):de.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),j=ue>=2);let Ee=null,Ie={},Oe=n.getParameter(n.SCISSOR_BOX),Ze=n.getParameter(n.VIEWPORT),pt=new ut().fromArray(Oe),Ye=new ut().fromArray(Ze);function re(O,Z,ne,Pe){let Se=new Uint8Array(4),he=n.createTexture();n.bindTexture(O,he),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<ne;He++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Z+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return he}let fe={};fe[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),c.setClear(0),ve(n.DEPTH_TEST),a.setFunc(cr),Yt(!1),Lt(Tu),ve(n.CULL_FACE),St(Qt);function ve(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Ge(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Je(O,Z){return d[O]!==Z?(n.bindFramebuffer(O,Z),d[O]=Z,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Z),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ve(O,Z){let ne=y,Pe=!1;if(O){ne=m.get(Z),ne===void 0&&(ne=[],m.set(Z,ne));let Se=O.textures;if(ne.length!==Se.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let he=0,He=Se.length;he<He;he++)ne[he]=n.COLOR_ATTACHMENT0+he;ne.length=Se.length,Pe=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ne)}function Mt(O){return E!==O?(n.useProgram(O),E=O,!0):!1}let it={[ki]:n.FUNC_ADD,[Zd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};it[Qd]=n.MIN,it[jd]=n.MAX;let vt={[Jd]:n.ZERO,[Cu]:n.ONE,[$d]:n.SRC_COLOR,[Zo]:n.SRC_ALPHA,[af]:n.SRC_ALPHA_SATURATE,[rf]:n.DST_COLOR,[tf]:n.DST_ALPHA,[ef]:n.ONE_MINUS_SRC_COLOR,[Ko]:n.ONE_MINUS_SRC_ALPHA,[sf]:n.ONE_MINUS_DST_COLOR,[nf]:n.ONE_MINUS_DST_ALPHA,[of]:n.CONSTANT_COLOR,[cf]:n.ONE_MINUS_CONSTANT_COLOR,[lf]:n.CONSTANT_ALPHA,[uf]:n.ONE_MINUS_CONSTANT_ALPHA};function St(O,Z,ne,Pe,Se,he,He,nt,zt,At){if(O===Qt){x===!0&&(Ge(n.BLEND),x=!1);return}if(x===!1&&(ve(n.BLEND),x=!0),O!==bu){if(O!==g||At!==k){if((w!==ki||U!==ki)&&(n.blendEquation(n.FUNC_ADD),w=ki,U=ki),At)switch(O){case Nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eu:n.blendFunc(n.ONE,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",O);break}else switch(O){case Nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wu:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mu:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",O);break}C=null,R=null,I=null,B=null,A.set(0,0,0),D=0,g=O,k=At}return}Se=Se||Z,he=he||ne,He=He||Pe,(Z!==w||Se!==U)&&(n.blendEquationSeparate(it[Z],it[Se]),w=Z,U=Se),(ne!==C||Pe!==R||he!==I||He!==B)&&(n.blendFuncSeparate(vt[ne],vt[Pe],vt[he],vt[He]),C=ne,R=Pe,I=he,B=He),(nt.equals(A)===!1||zt!==D)&&(n.blendColor(nt.r,nt.g,nt.b,zt),A.copy(nt),D=zt),g=O,k=!1}function rt(O,Z){O.side===An?Ge(n.CULL_FACE):ve(n.CULL_FACE);let ne=O.side===Zt;Z&&(ne=!ne),Yt(ne),O.blending===Nr&&O.transparent===!1?St(Qt):St(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);let Pe=O.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(O){N!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),N=O)}function Lt(O){O!==Xd?(ve(n.CULL_FACE),O!==q&&(O===Tu?n.cullFace(n.BACK):O===Yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),q=O}function fn(O){O!==J&&(j&&n.lineWidth(O),J=O)}function z(O,Z,ne){O?(ve(n.POLYGON_OFFSET_FILL),(te!==Z||V!==ne)&&(te=Z,V=ne,a.getReversed()&&(Z=-Z),n.polygonOffset(Z,ne))):Ge(n.POLYGON_OFFSET_FILL)}function Vt(O){O?ve(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function ot(O){O===void 0&&(O=n.TEXTURE0+Q-1),Ee!==O&&(n.activeTexture(O),Ee=O)}function bt(O,Z,ne){ne===void 0&&(Ee===null?ne=n.TEXTURE0+Q-1:ne=Ee);let Pe=Ie[ne];Pe===void 0&&(Pe={type:void 0,texture:void 0},Ie[ne]=Pe),(Pe.type!==O||Pe.texture!==Z)&&(Ee!==ne&&(n.activeTexture(ne),Ee=ne),n.bindTexture(O,Z||fe[O]),Pe.type=O,Pe.texture=Z)}function we(){let O=Ie[Ee];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Dt(){try{n.compressedTexImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function M(){try{n.compressedTexImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function _(){try{n.texSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function Y(){try{n.texSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function xe(){try{n.texStorage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function ye(){try{n.texStorage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function ee(){try{n.texImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function se(){try{n.texImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function Ce(O){return p[O]!==void 0?p[O]:n.getParameter(O)}function Ae(O,Z){p[O]!==Z&&(n.pixelStorei(O,Z),p[O]=Z)}function me(O){pt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),pt.copy(O))}function _e(O){Ye.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ye.copy(O))}function We(O,Z){let ne=u.get(Z);ne===void 0&&(ne=new WeakMap,u.set(Z,ne));let Pe=ne.get(O);Pe===void 0&&(Pe=n.getUniformBlockIndex(Z,O.name),ne.set(O,Pe))}function Fe(O,Z){let Pe=u.get(Z).get(O);l.get(Z)!==Pe&&(n.uniformBlockBinding(Z,Pe,O.__bindingPointIndex),l.set(Z,Pe))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},Ee=null,Ie={},d={},m=new WeakMap,y=[],E=null,x=!1,g=null,w=null,C=null,R=null,U=null,I=null,B=null,A=new dt(0,0,0),D=0,k=!1,N=null,q=null,J=null,te=null,V=null,pt.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),c.reset()}return{buffers:{color:s,depth:a,stencil:c},enable:ve,disable:Ge,bindFramebuffer:Je,drawBuffers:Ve,useProgram:Mt,setBlending:St,setMaterial:rt,setFlipSided:Yt,setCullFace:Lt,setLineWidth:fn,setPolygonOffset:z,setScissorTest:Vt,activeTexture:ot,bindTexture:bt,unbindTexture:we,compressedTexImage2D:Dt,compressedTexImage3D:M,texImage2D:ee,texImage3D:se,pixelStorei:Ae,getParameter:Ce,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:xe,texStorage3D:ye,texSubImage2D:_,texSubImage3D:Y,compressedTexSubImage2D:ie,compressedTexSubImage3D:pe,scissor:me,viewport:_e,reset:Ke}}function N_(n,e,t,i,r,s,a){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new De,h=new WeakMap,p=new Set,d,m=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,_){return y?new OffscreenCanvas(M,_):ps("canvas")}function x(M,_,Y){let ie=1,pe=Dt(M);if((pe.width>Y||pe.height>Y)&&(ie=Y/Math.max(pe.width,pe.height)),ie<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let xe=Math.floor(ie*pe.width),ye=Math.floor(ie*pe.height);d===void 0&&(d=E(xe,ye));let ee=_?E(xe,ye):d;return ee.width=xe,ee.height=ye,ee.getContext("2d").drawImage(M,0,0,xe,ye),Xe("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+xe+"x"+ye+")."),ee}else return"data"in M&&Xe("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),M;return M}function g(M){return M.generateMipmaps}function w(M){n.generateMipmap(M)}function C(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(M,_,Y,ie,pe,xe=!1){if(M!==null){if(n[M]!==void 0)return n[M];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ye;ie&&(ye=e.get("EXT_texture_norm16"),ye||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===n.RED&&(Y===n.FLOAT&&(ee=n.R32F),Y===n.HALF_FLOAT&&(ee=n.R16F),Y===n.UNSIGNED_BYTE&&(ee=n.R8),Y===n.UNSIGNED_SHORT&&ye&&(ee=ye.R16_EXT),Y===n.SHORT&&ye&&(ee=ye.R16_SNORM_EXT)),_===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.R8UI),Y===n.UNSIGNED_SHORT&&(ee=n.R16UI),Y===n.UNSIGNED_INT&&(ee=n.R32UI),Y===n.BYTE&&(ee=n.R8I),Y===n.SHORT&&(ee=n.R16I),Y===n.INT&&(ee=n.R32I)),_===n.RG&&(Y===n.FLOAT&&(ee=n.RG32F),Y===n.HALF_FLOAT&&(ee=n.RG16F),Y===n.UNSIGNED_BYTE&&(ee=n.RG8),Y===n.UNSIGNED_SHORT&&ye&&(ee=ye.RG16_EXT),Y===n.SHORT&&ye&&(ee=ye.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ee=n.RG16UI),Y===n.UNSIGNED_INT&&(ee=n.RG32UI),Y===n.BYTE&&(ee=n.RG8I),Y===n.SHORT&&(ee=n.RG16I),Y===n.INT&&(ee=n.RG32I)),_===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),Y===n.UNSIGNED_INT&&(ee=n.RGB32UI),Y===n.BYTE&&(ee=n.RGB8I),Y===n.SHORT&&(ee=n.RGB16I),Y===n.INT&&(ee=n.RGB32I)),_===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ee=n.RGBA32UI),Y===n.BYTE&&(ee=n.RGBA8I),Y===n.SHORT&&(ee=n.RGBA16I),Y===n.INT&&(ee=n.RGBA32I)),_===n.RGB&&(Y===n.UNSIGNED_SHORT&&ye&&(ee=ye.RGB16_EXT),Y===n.SHORT&&ye&&(ee=ye.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),_===n.RGBA){let se=xe?fa:ht.getTransfer(pe);Y===n.FLOAT&&(ee=n.RGBA32F),Y===n.HALF_FLOAT&&(ee=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ee=se===Tt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&ye&&(ee=ye.RGBA16_EXT),Y===n.SHORT&&ye&&(ee=ye.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function U(M,_){let Y;return M?_===null||_===Cn||_===vr?Y=n.DEPTH24_STENCIL8:_===Gt?Y=n.DEPTH32F_STENCIL8:_===gr&&(Y=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cn||_===vr?Y=n.DEPTH_COMPONENT24:_===Gt?Y=n.DEPTH_COMPONENT32F:_===gr&&(Y=n.DEPTH_COMPONENT16),Y}function I(M,_){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ft&&M.minFilter!==et?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function B(M){let _=M.target;_.removeEventListener("dispose",B),D(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function A(M){let _=M.target;_.removeEventListener("dispose",A),N(_)}function D(M){let _=i.get(M);if(_.__webglInit===void 0)return;let Y=M.source,ie=m.get(Y);if(ie){let pe=ie[_.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&k(M),Object.keys(ie).length===0&&m.delete(Y)}i.remove(M)}function k(M){let _=i.get(M);n.deleteTexture(_.__webglTexture);let Y=M.source,ie=m.get(Y);delete ie[_.__cacheKey],a.memory.textures--}function N(M){let _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(_.__webglFramebuffer[ie]))for(let pe=0;pe<_.__webglFramebuffer[ie].length;pe++)n.deleteFramebuffer(_.__webglFramebuffer[ie][pe]);else n.deleteFramebuffer(_.__webglFramebuffer[ie]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[ie])}else{if(Array.isArray(_.__webglFramebuffer))for(let ie=0;ie<_.__webglFramebuffer.length;ie++)n.deleteFramebuffer(_.__webglFramebuffer[ie]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ie=0;ie<_.__webglColorRenderbuffer.length;ie++)_.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[ie]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let Y=M.textures;for(let ie=0,pe=Y.length;ie<pe;ie++){let xe=i.get(Y[ie]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(Y[ie])}i.remove(M)}let q=0;function J(){q=0}function te(){return q}function V(M){q=M}function Q(){let M=q;return M>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),q+=1,M}function j(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function ue(M,_){let Y=i.get(M);if(M.isVideoTexture&&bt(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&Y.__version!==M.version){let ie=M.image;if(ie===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(Y,M,_);return}}else M.isExternalTexture&&(Y.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+_)}function de(M,_){let Y=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&Y.__version!==M.version){Ge(Y,M,_);return}else M.isExternalTexture&&(Y.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+_)}function Ee(M,_){let Y=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&Y.__version!==M.version){Ge(Y,M,_);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+_)}function Ie(M,_){let Y=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&Y.__version!==M.version){Je(Y,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+_)}let Oe={[bn]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},Ze={[Ft]:n.NEAREST,[ff]:n.NEAREST_MIPMAP_NEAREST,[ba]:n.NEAREST_MIPMAP_LINEAR,[et]:n.LINEAR,[Tc]:n.LINEAR_MIPMAP_NEAREST,[kn]:n.LINEAR_MIPMAP_LINEAR},pt={[mf]:n.NEVER,[yf]:n.ALWAYS,[gf]:n.LESS,[sl]:n.LEQUAL,[vf]:n.EQUAL,[al]:n.GEQUAL,[xf]:n.GREATER,[_f]:n.NOTEQUAL};function Ye(M,_){if(_.type===Gt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===et||_.magFilter===Tc||_.magFilter===ba||_.magFilter===kn||_.minFilter===et||_.minFilter===Tc||_.minFilter===ba||_.minFilter===kn)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Oe[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Oe[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Oe[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Ze[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Ze[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ft||_.minFilter!==ba&&_.minFilter!==kn||_.type===Gt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function re(M,_){let Y=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",B));let ie=_.source,pe=m.get(ie);pe===void 0&&(pe={},m.set(ie,pe));let xe=j(_);if(xe!==M.__cacheKey){pe[xe]===void 0&&(pe[xe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),pe[xe].usedTimes++;let ye=pe[M.__cacheKey];ye!==void 0&&(pe[M.__cacheKey].usedTimes--,ye.usedTimes===0&&k(_)),M.__cacheKey=xe,M.__webglTexture=pe[xe].texture}return Y}function fe(M,_,Y){return Math.floor(Math.floor(M/Y)/_)}function ve(M,_,Y,ie){let xe=M.updateRanges;if(xe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,Y,ie,_.data);else{xe.sort((Ae,me)=>Ae.start-me.start);let ye=0;for(let Ae=1;Ae<xe.length;Ae++){let me=xe[ye],_e=xe[Ae],We=me.start+me.count,Fe=fe(_e.start,_.width,4),Ke=fe(me.start,_.width,4);_e.start<=We+1&&Fe===Ke&&fe(_e.start+_e.count-1,_.width,4)===Fe?me.count=Math.max(me.count,_e.start+_e.count-me.start):(++ye,xe[ye]=_e)}xe.length=ye+1;let ee=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ae=0,me=xe.length;Ae<me;Ae++){let _e=xe[Ae],We=Math.floor(_e.start/4),Fe=Math.ceil(_e.count/4),Ke=We%_.width,O=Math.floor(We/_.width),Z=Fe,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Ke,O,Z,ne,Y,ie,_.data)}M.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function Ge(M,_,Y){let ie=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ie=n.TEXTURE_3D);let pe=re(M,_),xe=_.source;t.bindTexture(ie,M.__webglTexture,n.TEXTURE0+Y);let ye=i.get(xe);if(xe.version!==ye.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ne=ht.getPrimaries(ht.workingColorSpace),Pe=_.colorSpace===jt?null:ht.getPrimaries(_.colorSpace),Se=_.colorSpace===jt||ne===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let se=x(_.image,!1,r.maxTextureSize);se=we(_,se);let Ce=s.convert(_.format,_.colorSpace),Ae=s.convert(_.type),me=R(_.internalFormat,Ce,Ae,_.normalized,_.colorSpace,_.isVideoTexture);Ye(ie,_);let _e,We=_.mipmaps,Fe=_.isVideoTexture!==!0,Ke=ye.__version===void 0||pe===!0,O=xe.dataReady,Z=I(_,se);if(_.isDepthTexture)me=U(_.format===Mi,_.type),Ke&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,me,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,me,se.width,se.height,0,Ce,Ae,null));else if(_.isDataTexture)if(We.length>0){Fe&&Ke&&t.texStorage2D(n.TEXTURE_2D,Z,me,We[0].width,We[0].height);for(let ne=0,Pe=We.length;ne<Pe;ne++)_e=We[ne],Fe?O&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,Ce,Ae,_e.data):t.texImage2D(n.TEXTURE_2D,ne,me,_e.width,_e.height,0,Ce,Ae,_e.data);_.generateMipmaps=!1}else Fe?(Ke&&t.texStorage2D(n.TEXTURE_2D,Z,me,se.width,se.height),O&&ve(_,se,Ce,Ae)):t.texImage2D(n.TEXTURE_2D,0,me,se.width,se.height,0,Ce,Ae,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,me,We[0].width,We[0].height,se.depth);for(let ne=0,Pe=We.length;ne<Pe;ne++)if(_e=We[ne],_.format!==kt)if(Ce!==null)if(Fe){if(O)if(_.layerUpdates.size>0){let Se=Zu(_e.width,_e.height,_.format,_.type);for(let he of _.layerUpdates){let He=_e.data.subarray(he*Se/_e.data.BYTES_PER_ELEMENT,(he+1)*Se/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,he,_e.width,_e.height,1,Ce,He)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,se.depth,Ce,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,me,_e.width,_e.height,se.depth,0,_e.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,se.depth,Ce,Ae,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,me,_e.width,_e.height,se.depth,0,Ce,Ae,_e.data)}else{Fe&&Ke&&t.texStorage2D(n.TEXTURE_2D,Z,me,We[0].width,We[0].height);for(let ne=0,Pe=We.length;ne<Pe;ne++)_e=We[ne],_.format!==kt?Ce!==null?Fe?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,Ce,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,me,_e.width,_e.height,0,_e.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?O&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,_e.width,_e.height,Ce,Ae,_e.data):t.texImage2D(n.TEXTURE_2D,ne,me,_e.width,_e.height,0,Ce,Ae,_e.data)}else if(_.isDataArrayTexture)if(Fe){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,me,se.width,se.height,se.depth),O)if(_.layerUpdates.size>0){let ne=Zu(se.width,se.height,_.format,_.type);for(let Pe of _.layerUpdates){let Se=se.data.subarray(Pe*ne/se.data.BYTES_PER_ELEMENT,(Pe+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,se.width,se.height,1,Ce,Ae,Se)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ce,Ae,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,se.width,se.height,se.depth,0,Ce,Ae,se.data);else if(_.isData3DTexture)Fe?(Ke&&t.texStorage3D(n.TEXTURE_3D,Z,me,se.width,se.height,se.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ce,Ae,se.data)):t.texImage3D(n.TEXTURE_3D,0,me,se.width,se.height,se.depth,0,Ce,Ae,se.data);else if(_.isFramebufferTexture){if(Ke)if(Fe)t.texStorage2D(n.TEXTURE_2D,Z,me,se.width,se.height);else{let ne=se.width,Pe=se.height;for(let Se=0;Se<Z;Se++)t.texImage2D(n.TEXTURE_2D,Se,me,ne,Pe,0,Ce,Ae,null),ne>>=1,Pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),se.parentNode!==ne){ne.appendChild(se),p.add(_),ne.onpaint=nt=>{let zt=nt.changedElements;for(let At of p)zt.includes(At.image)&&(At.needsUpdate=!0)},ne.requestPaint();return}let Pe=0,Se=n.RGBA,he=n.RGBA,He=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Pe,Se,he,He,se),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(We.length>0){if(Fe&&Ke){let ne=Dt(We[0]);t.texStorage2D(n.TEXTURE_2D,Z,me,ne.width,ne.height)}for(let ne=0,Pe=We.length;ne<Pe;ne++)_e=We[ne],Fe?O&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Ce,Ae,_e):t.texImage2D(n.TEXTURE_2D,ne,me,Ce,Ae,_e);_.generateMipmaps=!1}else if(Fe){if(Ke){let ne=Dt(se);t.texStorage2D(n.TEXTURE_2D,Z,me,ne.width,ne.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Ae,se)}else t.texImage2D(n.TEXTURE_2D,0,me,Ce,Ae,se);g(_)&&w(ie),ye.__version=xe.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Je(M,_,Y){if(_.image.length!==6)return;let ie=re(M,_),pe=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+Y);let xe=i.get(pe);if(pe.version!==xe.__version||ie===!0){t.activeTexture(n.TEXTURE0+Y);let ye=ht.getPrimaries(ht.workingColorSpace),ee=_.colorSpace===jt?null:ht.getPrimaries(_.colorSpace),se=_.colorSpace===jt||ye===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,Ae=_.image[0]&&_.image[0].isDataTexture,me=[];for(let he=0;he<6;he++)!Ce&&!Ae?me[he]=x(_.image[he],!0,r.maxCubemapSize):me[he]=Ae?_.image[he].image:_.image[he],me[he]=we(_,me[he]);let _e=me[0],We=s.convert(_.format,_.colorSpace),Fe=s.convert(_.type),Ke=R(_.internalFormat,We,Fe,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,Z=xe.__version===void 0||ie===!0,ne=pe.dataReady,Pe=I(_,_e);Ye(n.TEXTURE_CUBE_MAP,_);let Se;if(Ce){O&&Z&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ke,_e.width,_e.height);for(let he=0;he<6;he++){Se=me[he].mipmaps;for(let He=0;He<Se.length;He++){let nt=Se[He];_.format!==kt?We!==null?O?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,nt.width,nt.height,We,nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,Ke,nt.width,nt.height,0,nt.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,nt.width,nt.height,We,Fe,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,Ke,nt.width,nt.height,0,We,Fe,nt.data)}}}else{if(Se=_.mipmaps,O&&Z){Se.length>0&&Pe++;let he=Dt(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ke,he.width,he.height)}for(let he=0;he<6;he++)if(Ae){O?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,me[he].width,me[he].height,We,Fe,me[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ke,me[he].width,me[he].height,0,We,Fe,me[he].data);for(let He=0;He<Se.length;He++){let zt=Se[He].image[he].image;O?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,zt.width,zt.height,We,Fe,zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,Ke,zt.width,zt.height,0,We,Fe,zt.data)}}else{O?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Fe,me[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ke,We,Fe,me[he]);for(let He=0;He<Se.length;He++){let nt=Se[He];O?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,We,Fe,nt.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,Ke,We,Fe,nt.image[he])}}}g(_)&&w(n.TEXTURE_CUBE_MAP),xe.__version=pe.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ve(M,_,Y,ie,pe,xe){let ye=s.convert(Y.format,Y.colorSpace),ee=s.convert(Y.type),se=R(Y.internalFormat,ye,ee,Y.normalized,Y.colorSpace),Ce=i.get(_),Ae=i.get(Y);if(Ae.__renderTarget=_,!Ce.__hasExternalTextures){let me=Math.max(1,_.width>>xe),_e=Math.max(1,_.height>>xe);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,xe,se,me,_e,_.depth,0,ye,ee,null):t.texImage2D(pe,xe,se,me,_e,0,ye,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),ot(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,pe,Ae.__webglTexture,0,Vt(_)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,pe,Ae.__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(M,_,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){let ie=_.depthTexture,pe=ie&&ie.isDepthTexture?ie.type:null,xe=U(_.stencilBuffer,pe),ye=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ot(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt(_),xe,_.width,_.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt(_),xe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,xe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,M)}else{let ie=_.textures;for(let pe=0;pe<ie.length;pe++){let xe=ie[pe],ye=s.convert(xe.format,xe.colorSpace),ee=s.convert(xe.type),se=R(xe.internalFormat,ye,ee,xe.normalized,xe.colorSpace);ot(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt(_),se,_.width,_.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt(_),se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,se,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(M,_,Y){let ie=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let pe=i.get(_.depthTexture);if(pe.__renderTarget=_,(!pe.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ie){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,_.depthTexture.addEventListener("dispose",B)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,_.depthTexture);let Ce=s.convert(_.depthTexture.format),Ae=s.convert(_.depthTexture.type),me;_.depthTexture.format===Ai?me=n.DEPTH_COMPONENT24:_.depthTexture.format===Mi&&(me=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,me,_.width,_.height,0,Ce,Ae,null)}}else ue(_.depthTexture,0);let xe=pe.__webglTexture,ye=Vt(_),ee=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,se=_.depthTexture.format===Mi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ai)ot(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ee,xe,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,se,ee,xe,0);else if(_.depthTexture.format===Mi)ot(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ee,xe,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,se,ee,xe,0);else throw new Error("Unknown depthTexture format")}function vt(M){let _=i.get(M),Y=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){let ie=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ie){let pe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ie.removeEventListener("dispose",pe)};ie.addEventListener("dispose",pe),_.__depthDisposeCallback=pe}_.__boundDepthTexture=ie}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(Y)for(let ie=0;ie<6;ie++)it(_.__webglFramebuffer[ie],M,ie);else{let ie=M.texture.mipmaps;ie&&ie.length>0?it(_.__webglFramebuffer[0],M,0):it(_.__webglFramebuffer,M,0)}else if(Y){_.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ie]),_.__webglDepthbuffer[ie]===void 0)_.__webglDepthbuffer[ie]=n.createRenderbuffer(),Mt(_.__webglDepthbuffer[ie],M,!1);else{let pe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=_.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,xe)}}else{let ie=M.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Mt(_.__webglDepthbuffer,M,!1);else{let pe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,xe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function St(M,_,Y){let ie=i.get(M);_!==void 0&&Ve(ie.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&vt(M)}function rt(M){let _=M.texture,Y=i.get(M),ie=i.get(_);M.addEventListener("dispose",A);let pe=M.textures,xe=M.isWebGLCubeRenderTarget===!0,ye=pe.length>1;if(ye||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=_.version,a.memory.textures++),xe){Y.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer[ee]=[];for(let se=0;se<_.mipmaps.length;se++)Y.__webglFramebuffer[ee][se]=n.createFramebuffer()}else Y.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)Y.__webglFramebuffer[ee]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ee=0,se=pe.length;ee<se;ee++){let Ce=i.get(pe[ee]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&ot(M)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ee=0;ee<pe.length;ee++){let se=pe[ee];Y.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ee]);let Ce=s.convert(se.format,se.colorSpace),Ae=s.convert(se.type),me=R(se.internalFormat,Ce,Ae,se.normalized,se.colorSpace,M.isXRRenderTarget===!0),_e=Vt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,me,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(Y.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)Ve(Y.__webglFramebuffer[ee][se],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se);else Ve(Y.__webglFramebuffer[ee],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);g(_)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ee=0,se=pe.length;ee<se;ee++){let Ce=pe[ee],Ae=i.get(Ce),me=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(me=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Ae.__webglTexture),Ye(me,Ce),Ve(Y.__webglFramebuffer,M,Ce,n.COLOR_ATTACHMENT0+ee,me,0),g(Ce)&&w(me)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ee=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,ie.__webglTexture),Ye(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)Ve(Y.__webglFramebuffer[se],M,_,n.COLOR_ATTACHMENT0,ee,se);else Ve(Y.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,ee,0);g(_)&&w(ee),t.unbindTexture()}M.depthBuffer&&vt(M)}function Yt(M){let _=M.textures;for(let Y=0,ie=_.length;Y<ie;Y++){let pe=_[Y];if(g(pe)){let xe=C(M),ye=i.get(pe).__webglTexture;t.bindTexture(xe,ye),w(xe),t.unbindTexture()}}}let Lt=[],fn=[];function z(M){if(M.samples>0){if(ot(M)===!1){let _=M.textures,Y=M.width,ie=M.height,pe=n.COLOR_BUFFER_BIT,xe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(M),ee=_.length>1;if(ee)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let se=M.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ce]);let Ae=i.get(_[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,pe,n.NEAREST),l===!0&&(Lt.length=0,fn.length=0,Lt.push(n.COLOR_ATTACHMENT0+Ce),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Lt.push(xe),fn.push(xe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,fn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ce]);let Ae=i.get(_[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Vt(M){return Math.min(r.maxSamples,M.samples)}function ot(M){let _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function bt(M){let _=a.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function we(M,_){let Y=M.colorSpace,ie=M.format,pe=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||Y!==ln&&Y!==jt&&(ht.getTransfer(Y)===Tt?(ie!==kt||pe!==Ct)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",Y)),_}function Dt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(u.width=M.naturalWidth||M.width,u.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(u.width=M.displayWidth,u.height=M.displayHeight):(u.width=M.width,u.height=M.height),u}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.getTextureUnits=te,this.setTextureUnits=V,this.setTexture2D=ue,this.setTexture2DArray=de,this.setTexture3D=Ee,this.setTextureCube=Ie,this.rebindTextures=St,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function L_(n,e){function t(i,r=jt){let s,a=ht.getTransfer(r);if(i===Ct)return n.UNSIGNED_BYTE;if(i===Ec)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ca)return n.BYTE;if(i===Ra)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===Es)return n.INT;if(i===Cn)return n.UNSIGNED_INT;if(i===Gt)return n.FLOAT;if(i===Pt)return n.HALF_FLOAT;if(i===zu)return n.ALPHA;if(i===Gu)return n.RGB;if(i===kt)return n.RGBA;if(i===Ai)return n.DEPTH_COMPONENT;if(i===Mi)return n.DEPTH_STENCIL;if(i===Tn)return n.RED;if(i===Mc)return n.RED_INTEGER;if(i===Rn)return n.RG;if(i===bc)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===Ia||i===Da||i===Pa||i===Na)if(a===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Ic||i===Dc||i===Pc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nc||i===Lc||i===Uc||i===Oc||i===Bc||i===La||i===Fc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nc||i===Lc)return a===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oc)return s.COMPRESSED_R11_EAC;if(i===Bc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===La)return s.COMPRESSED_RG11_EAC;if(i===Fc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hc||i===zc||i===Gc||i===kc||i===Vc||i===Wc||i===Xc||i===Yc||i===qc||i===Zc||i===Kc||i===Qc||i===jc||i===Jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jc)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$c||i===el||i===tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$c)return a===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===el)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nl||i===il||i===Ua||i===rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ua)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Bt({vertexShader:U_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new ur(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends sn{constructor(e,t){super();let i=this,r=null,s=1,a=null,c="local-floor",l=1,u=null,h=null,p=null,d=null,m=null,y=null,E=typeof XRWebGLBinding<"u",x=new ch,g={},w=t.getContextAttributes(),C=null,R=null,U=[],I=[],B=new De,A=null,D=new nn;D.viewport=new ut;let k=new nn;k.viewport=new ut;let N=[D,k],q=new yc,J=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let fe=U[re];return fe===void 0&&(fe=new _s,U[re]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(re){let fe=U[re];return fe===void 0&&(fe=new _s,U[re]=fe),fe.getGripSpace()},this.getHand=function(re){let fe=U[re];return fe===void 0&&(fe=new _s,U[re]=fe),fe.getHandSpace()};function V(re){let fe=I.indexOf(re.inputSource);if(fe===-1)return;let ve=U[fe];ve!==void 0&&(ve.update(re.inputSource,re.frame,u||a),ve.dispatchEvent({type:re.type,data:re.inputSource}))}function Q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",j);for(let re=0;re<U.length;re++){let fe=I[re];fe!==null&&(I[re]=null,U[re].disconnect(fe))}J=null,te=null,x.reset();for(let re in g)delete g[re];e.setRenderTarget(C),m=null,d=null,p=null,r=null,R=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){c=re,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(re){u=re},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(B),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ge=null,Je=null;w.depth&&(Je=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=w.stencil?Mi:Ai,Ge=w.stencil?vr:Cn);let Ve={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new gt(d.textureWidth,d.textureHeight,{format:kt,type:Ct,depthTexture:new Kn(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new gt(m.framebufferWidth,m.framebufferHeight,{format:kt,type:Ct,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(c),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(re){for(let fe=0;fe<re.removed.length;fe++){let ve=re.removed[fe],Ge=I.indexOf(ve);Ge>=0&&(I[Ge]=null,U[Ge].disconnect(ve))}for(let fe=0;fe<re.added.length;fe++){let ve=re.added[fe],Ge=I.indexOf(ve);if(Ge===-1){for(let Ve=0;Ve<U.length;Ve++)if(Ve>=I.length){I.push(ve),Ge=Ve;break}else if(I[Ve]===null){I[Ve]=ve,Ge=Ve;break}if(Ge===-1)break}let Je=U[Ge];Je&&Je.connect(ve)}}let ue=new L,de=new L;function Ee(re,fe,ve){ue.setFromMatrixPosition(fe.matrixWorld),de.setFromMatrixPosition(ve.matrixWorld);let Ge=ue.distanceTo(de),Je=fe.projectionMatrix.elements,Ve=ve.projectionMatrix.elements,Mt=Je[14]/(Je[10]-1),it=Je[14]/(Je[10]+1),vt=(Je[9]+1)/Je[5],St=(Je[9]-1)/Je[5],rt=(Je[8]-1)/Je[0],Yt=(Ve[8]+1)/Ve[0],Lt=Mt*rt,fn=Mt*Yt,z=Ge/(-rt+Yt),Vt=z*-rt;if(fe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Vt),re.translateZ(z),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Je[10]===-1)re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let ot=Mt+z,bt=it+z,we=Lt-Vt,Dt=fn+(Ge-Vt),M=vt*it/bt*ot,_=St*it/bt*ot;re.projectionMatrix.makePerspective(we,Dt,M,_,ot,bt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Ie(re,fe){fe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(fe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let fe=re.near,ve=re.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),q.near=k.near=D.near=fe,q.far=k.far=D.far=ve,(J!==q.near||te!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),J=q.near,te=q.far),q.layers.mask=re.layers.mask|6,D.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;let Ge=re.parent,Je=q.cameras;Ie(q,Ge);for(let Ve=0;Ve<Je.length;Ve++)Ie(Je[Ve],Ge);Je.length===2?Ee(q,D,k):q.projectionMatrix.copy(D.projectionMatrix),Oe(re,q,Ge)};function Oe(re,fe,ve){ve===null?re.matrix.copy(fe.matrixWorld):(re.matrix.copy(ve.matrixWorld),re.matrix.invert(),re.matrix.multiply(fe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=gs*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(q)},this.getCameraTexture=function(re){return g[re]};let Ze=null;function pt(re,fe){if(h=fe.getViewerPose(u||a),y=fe,h!==null){let ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let Ge=!1;ve.length!==q.cameras.length&&(q.cameras.length=0,Ge=!0);for(let it=0;it<ve.length;it++){let vt=ve[it],St=null;if(m!==null)St=m.getViewport(vt);else{let Yt=p.getViewSubImage(d,vt);St=Yt.viewport,it===0&&(e.setRenderTargetTextures(R,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(R))}let rt=N[it];rt===void 0&&(rt=new nn,rt.layers.enable(it),rt.viewport=new ut,N[it]=rt),rt.matrix.fromArray(vt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(vt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(St.x,St.y,St.width,St.height),it===0&&(q.matrix.copy(rt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ge===!0&&q.cameras.push(rt)}let Je=r.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();let it=p.getDepthInformation(ve[0]);it&&it.isValid&&it.texture&&x.init(it,r.renderState)}if(Je&&Je.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let it=0;it<ve.length;it++){let vt=ve[it].camera;if(vt){let St=g[vt];St||(St=new Aa,g[vt]=St);let rt=p.getCameraImage(vt);St.sourceTexture=rt}}}}for(let ve=0;ve<U.length;ve++){let Ge=I[ve],Je=U[ve];Ge!==null&&Je!==void 0&&Je.update(Ge,fe,u||a)}Ze&&Ze(re,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),y=null}let Ye=new Qf;Ye.setAnimationLoop(pt),this.setAnimationLoop=function(re){Ze=re},this.dispose=function(){}}},B_=new ke,np=new Qe;np.set(-1,0,0,0,1,0,0,0,1);function F_(n,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function i(x,g){g.color.getRGB(x.fogColor.value,Xu(n)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function r(x,g,w,C,R){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(x,g):g.isMeshLambertMaterial?(s(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(x,g),p(x,g)):g.isMeshPhongMaterial?(s(x,g),h(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(x,g),d(x,g),g.isMeshPhysicalMaterial&&m(x,g,R)):g.isMeshMatcapMaterial?(s(x,g),y(x,g)):g.isMeshDepthMaterial?s(x,g):g.isMeshDistanceMaterial?(s(x,g),E(x,g)):g.isMeshNormalMaterial?s(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&c(x,g)):g.isPointsMaterial?l(x,g,w,C):g.isSpriteMaterial?u(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Zt&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Zt&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let w=e.get(g),C=w.envMap,R=w.envMapRotation;C&&(x.envMap.value=C,x.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(R)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(np),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function c(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,w,C){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*w,x.scale.value=C*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function u(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function p(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function d(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function m(x,g,w){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Zt&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,g){g.matcap&&(x.matcap.value=g.matcap)}function E(x,g){let w=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H_(n,e,t,i){let r={},s={},a=[],c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,C){let R=C.program;i.uniformBlockBinding(w,R)}function u(w,C){let R=r[w.id];R===void 0&&(y(w),R=h(w),r[w.id]=R,w.addEventListener("dispose",x));let U=C.program;i.updateUBOMapping(w,U);let I=e.render.frame;s[w.id]!==I&&(d(w),s[w.id]=I)}function h(w){let C=p();w.__bindingPointIndex=C;let R=n.createBuffer(),U=w.__size,I=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,U,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,R),R}function p(){for(let w=0;w<c;w++)if(a.indexOf(w)===-1)return a.push(w),w;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let C=r[w.id],R=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let I=0,B=R.length;I<B;I++){let A=Array.isArray(R[I])?R[I]:[R[I]];for(let D=0,k=A.length;D<k;D++){let N=A[D];if(m(N,I,D,U)===!0){let q=N.__offset,J=Array.isArray(N.value)?N.value:[N.value],te=0;for(let V=0;V<J.length;V++){let Q=J[V],j=E(Q);typeof Q=="number"||typeof Q=="boolean"?(N.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,q+te,N.__data)):Q.isMatrix3?(N.__data[0]=Q.elements[0],N.__data[1]=Q.elements[1],N.__data[2]=Q.elements[2],N.__data[3]=0,N.__data[4]=Q.elements[3],N.__data[5]=Q.elements[4],N.__data[6]=Q.elements[5],N.__data[7]=0,N.__data[8]=Q.elements[6],N.__data[9]=Q.elements[7],N.__data[10]=Q.elements[8],N.__data[11]=0):ArrayBuffer.isView(Q)?N.__data.set(new Q.constructor(Q.buffer,Q.byteOffset,N.__data.length)):(Q.toArray(N.__data,te),te+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,C,R,U){let I=w.value,B=C+"_"+R;if(U[B]===void 0)return typeof I=="number"||typeof I=="boolean"?U[B]=I:ArrayBuffer.isView(I)?U[B]=I.slice():U[B]=I.clone(),!0;{let A=U[B];if(typeof I=="number"||typeof I=="boolean"){if(A!==I)return U[B]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(A.equals(I)===!1)return A.copy(I),!0}}return!1}function y(w){let C=w.uniforms,R=0,U=16;for(let B=0,A=C.length;B<A;B++){let D=Array.isArray(C[B])?C[B]:[C[B]];for(let k=0,N=D.length;k<N;k++){let q=D[k],J=Array.isArray(q.value)?q.value:[q.value];for(let te=0,V=J.length;te<V;te++){let Q=J[te],j=E(Q),ue=R%U,de=ue%j.boundary,Ee=ue+de;R+=de,Ee!==0&&U-Ee<j.storage&&(R+=U-Ee),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=R,R+=j.storage}}}let I=R%U;return I>0&&(R+=U-I),w.__size=R,w.__cache={},this}function E(w){let C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(C.boundary=16,C.storage=w.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",w),C}function x(w){let C=w.target;C.removeEventListener("dispose",x);let R=a.indexOf(C.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function g(){for(let w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:u,dispose:g}}var z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function G_(){return bi===null&&(bi=new Ti(z_,16,16,Rn,Pt),bi.name="DFG_LUT",bi.minFilter=et,bi.magFilter=et,bi.wrapS=Fn,bi.wrapT=Fn,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var Cs=class{constructor(e={}){let{canvas:t=Sf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Ct}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;let E=m,x=new Set([Cc,bc,Mc]),g=new Set([Ct,Cn,gr,vr,Ec,wc]),w=new Uint32Array(4),C=new Int32Array(4),R=new L,U=null,I=null,B=[],A=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,N=!1,q=null;this._outputColorSpace=Ot;let J=0,te=0,V=null,Q=-1,j=null,ue=new ut,de=new ut,Ee=null,Ie=new dt(0),Oe=0,Ze=t.width,pt=t.height,Ye=1,re=null,fe=null,ve=new ut(0,0,Ze,pt),Ge=new ut(0,0,Ze,pt),Je=!1,Ve=new ya,Mt=!1,it=!1,vt=new ke,St=new L,rt=new ut,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function fn(){return V===null?Ye:1}let z=i;function Vt(o,f){return t.getContext(o,f)}try{let o={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",nt,!1),z===null){let f="webgl2";if(z=Vt(f,o),z===null)throw Vt(f)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(o){throw qe("WebGLRenderer: "+o.message),o}let ot,bt,we,Dt,M,_,Y,ie,pe,xe,ye,ee,se,Ce,Ae,me,_e,We,Fe,Ke,O,Z,ne;function Pe(){ot=new Z1(z),ot.init(),O=new L_(z,ot),bt=new z1(z,ot,e,O),we=new P_(z,ot),bt.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),Dt=new j1(z),M=new x_,_=new N_(z,ot,we,M,bt,O,Dt),Y=new q1(k),ie=new tg(z),Z=new F1(z,ie),pe=new K1(z,ie,Dt,Z),xe=new $1(z,pe,ie,Z,Dt),We=new J1(z,bt,_),Ae=new G1(M),ye=new v_(k,Y,ot,bt,Z,Ae),ee=new F_(k,M),se=new y_,Ce=new M_(ot),_e=new B1(k,Y,we,xe,y,l),me=new D_(k,xe,bt),ne=new H_(z,Dt,bt,we),Fe=new H1(z,ot,Dt),Ke=new Q1(z,ot,Dt),Dt.programs=ye.programs,k.capabilities=bt,k.extensions=ot,k.properties=M,k.renderLists=se,k.shadowMap=me,k.state=we,k.info=Dt}Pe(),E!==Ct&&(D=new tx(E,t.width,t.height,r,s));let Se=new lh(k,z);this.xr=Se,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let o=ot.get("WEBGL_lose_context");o&&o.loseContext()},this.forceContextRestore=function(){let o=ot.get("WEBGL_lose_context");o&&o.restoreContext()},this.getPixelRatio=function(){return Ye},this.setPixelRatio=function(o){o!==void 0&&(Ye=o,this.setSize(Ze,pt,!1))},this.getSize=function(o){return o.set(Ze,pt)},this.setSize=function(o,f,v=!0){if(Se.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=o,pt=f,t.width=Math.floor(o*Ye),t.height=Math.floor(f*Ye),v===!0&&(t.style.width=o+"px",t.style.height=f+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,o,f)},this.getDrawingBufferSize=function(o){return o.set(Ze*Ye,pt*Ye).floor()},this.setDrawingBufferSize=function(o,f,v){Ze=o,pt=f,Ye=v,t.width=Math.floor(o*v),t.height=Math.floor(f*v),this.setViewport(0,0,o,f)},this.setEffects=function(o){if(E===Ct){qe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(o){for(let f=0;f<o.length;f++)if(o[f].isOutputPass===!0){Xe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(o||[])},this.getCurrentViewport=function(o){return o.copy(ue)},this.getViewport=function(o){return o.copy(ve)},this.setViewport=function(o,f,v,S){o.isVector4?ve.set(o.x,o.y,o.z,o.w):ve.set(o,f,v,S),we.viewport(ue.copy(ve).multiplyScalar(Ye).round())},this.getScissor=function(o){return o.copy(Ge)},this.setScissor=function(o,f,v,S){o.isVector4?Ge.set(o.x,o.y,o.z,o.w):Ge.set(o,f,v,S),we.scissor(de.copy(Ge).multiplyScalar(Ye).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(o){we.setScissorTest(Je=o)},this.setOpaqueSort=function(o){re=o},this.setTransparentSort=function(o){fe=o},this.getClearColor=function(o){return o.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(o=!0,f=!0,v=!0){let S=0;if(o){let T=!1;if(V!==null){let F=V.texture.format;T=x.has(F)}if(T){let F=V.texture.type,b=g.has(F),H=_e.getClearColor(),G=_e.getClearAlpha(),W=H.r,K=H.g,$=H.b;b?(w[0]=W,w[1]=K,w[2]=$,w[3]=G,z.clearBufferuiv(z.COLOR,0,w)):(C[0]=W,C[1]=K,C[2]=$,C[3]=G,z.clearBufferiv(z.COLOR,0,C))}else S|=z.COLOR_BUFFER_BIT}f&&(S|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),v&&(S|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S!==0&&z.clear(S)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(o){o.setRenderer(this),q=o},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),_e.dispose(),se.dispose(),Ce.dispose(),M.dispose(),Y.dispose(),xe.dispose(),Z.dispose(),ne.dispose(),ye.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",go),Se.removeEventListener("sessionend",vo),xi.stop()};function he(o){o.preventDefault(),Vu("WebGLRenderer: Context Lost."),N=!0}function He(){Vu("WebGLRenderer: Context Restored."),N=!1;let o=Dt.autoReset,f=me.enabled,v=me.autoUpdate,S=me.needsUpdate,T=me.type;Pe(),Dt.autoReset=o,me.enabled=f,me.autoUpdate=v,me.needsUpdate=S,me.type=T}function nt(o){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",o.statusMessage)}function zt(o){let f=o.target;f.removeEventListener("dispose",zt),At(f)}function At(o){ti(o),M.remove(o)}function ti(o){let f=M.get(o).programs;f!==void 0&&(f.forEach(function(v){ye.releaseProgram(v)}),o.isShaderMaterial&&ye.releaseShaderCache(o))}this.renderBufferDirect=function(o,f,v,S,T,F){f===null&&(f=Yt);let b=T.isMesh&&T.matrixWorld.determinant()<0,H=qr(o,f,v,S,T);we.setMaterial(S,b);let G=v.index,W=1;if(S.wireframe===!0){if(G=pe.getWireframeAttribute(v),G===void 0)return;W=2}let K=v.drawRange,$=v.attributes.position,X=K.start*W,ae=(K.start+K.count)*W;F!==null&&(X=Math.max(X,F.start*W),ae=Math.min(ae,(F.start+F.count)*W)),G!==null?(X=Math.max(X,0),ae=Math.min(ae,G.count)):$!=null&&(X=Math.max(X,0),ae=Math.min(ae,$.count));let ge=ae-X;if(ge<0||ge===1/0)return;Z.setup(T,S,H,v,G);let ce,le=Fe;if(G!==null&&(ce=ie.get(G),le=Ke,le.setIndex(ce)),T.isMesh)S.wireframe===!0?(we.setLineWidth(S.wireframeLinewidth*fn()),le.setMode(z.LINES)):le.setMode(z.TRIANGLES);else if(T.isLine){let Me=S.linewidth;Me===void 0&&(Me=1),we.setLineWidth(Me*fn()),T.isLineSegments?le.setMode(z.LINES):T.isLineLoop?le.setMode(z.LINE_LOOP):le.setMode(z.LINE_STRIP)}else T.isPoints?le.setMode(z.POINTS):T.isSprite&&le.setMode(z.TRIANGLES);if(T.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))le.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{let Me=T._multiDrawStarts,oe=T._multiDrawCounts,ze=T._multiDrawCount,Ne=G?ie.get(G).bytesPerElement:1,Re=M.get(S).currentProgram.getUniforms();for(let Te=0;Te<ze;Te++)Re.setValue(z,"_gl_DrawID",Te),le.render(Me[Te]/Ne,oe[Te])}else if(T.isInstancedMesh)le.renderInstances(X,ge,T.count);else if(v.isInstancedBufferGeometry){let Me=v._maxInstanceCount!==void 0?v._maxInstanceCount:1/0,oe=Math.min(v.instanceCount,Me);le.renderInstances(X,ge,oe)}else le.render(X,ge)};function Yn(o,f,v){o.transparent===!0&&o.side===An&&o.forceSinglePass===!1?(o.side=Zt,o.needsUpdate=!0,wr(o,f,v),o.side=ai,o.needsUpdate=!0,wr(o,f,v),o.side=An):wr(o,f,v)}this.compile=function(o,f,v=null){v===null&&(v=o),I=Ce.get(v),I.init(f),A.push(I),v.traverseVisible(function(T){T.isLight&&T.layers.test(f.layers)&&(I.pushLight(T),T.castShadow&&I.pushShadow(T))}),o!==v&&o.traverseVisible(function(T){T.isLight&&T.layers.test(f.layers)&&(I.pushLight(T),T.castShadow&&I.pushShadow(T))}),I.setupLights();let S=new Set;return o.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;let F=T.material;if(F)if(Array.isArray(F))for(let b=0;b<F.length;b++){let H=F[b];Yn(H,v,T),S.add(H)}else Yn(F,v,T),S.add(F)}),I=A.pop(),S},this.compileAsync=function(o,f,v=null){let S=this.compile(o,f,v);return new Promise(T=>{function F(){if(S.forEach(function(b){M.get(b).currentProgram.isReady()&&S.delete(b)}),S.size===0){T(o);return}setTimeout(F,10)}ot.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let na=null;function Xl(o){na&&na(o)}function go(){xi.stop()}function vo(){xi.start()}let xi=new Qf;xi.setAnimationLoop(Xl),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(o){na=o,Se.setAnimationLoop(o),o===null?xi.stop():xi.start()},Se.addEventListener("sessionstart",go),Se.addEventListener("sessionend",vo),this.render=function(o,f){if(f!==void 0&&f.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;q!==null&&q.renderStart(o,f);let v=Se.enabled===!0&&Se.isPresenting===!0,S=D!==null&&(V===null||v)&&D.begin(k,V);if(o.matrixWorldAutoUpdate===!0&&o.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(f),f=Se.getCamera()),o.isScene===!0&&o.onBeforeRender(k,o,f,V),I=Ce.get(o,A.length),I.init(f),I.state.textureUnits=_.getTextureUnits(),A.push(I),vt.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),Ve.setFromProjectionMatrix(vt,si,f.reversedDepth),it=this.localClippingEnabled,Mt=Ae.init(this.clippingPlanes,it),U=se.get(o,B.length),U.init(),B.push(U),Se.enabled===!0&&Se.isPresenting===!0){let b=k.xr.getDepthSensingMesh();b!==null&&ia(b,f,-1/0,k.sortObjects)}ia(o,f,0,k.sortObjects),U.finish(),k.sortObjects===!0&&U.sort(re,fe),Lt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Lt&&_e.addToRenderList(U,o),this.info.render.frame++,Mt===!0&&Ae.beginShadows();let T=I.state.shadowsArray;if(me.render(T,o,f),Mt===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(S&&D.hasRenderPass())===!1){let b=U.opaque,H=U.transmissive;if(I.setupLights(),f.isArrayCamera){let G=f.cameras;if(H.length>0)for(let W=0,K=G.length;W<K;W++){let $=G[W];_o(b,H,o,$)}Lt&&_e.render(o);for(let W=0,K=G.length;W<K;W++){let $=G[W];xo(U,o,$,$.viewport)}}else H.length>0&&_o(b,H,o,f),Lt&&_e.render(o),xo(U,o,f)}V!==null&&te===0&&(_.updateMultisampleRenderTarget(V),_.updateRenderTargetMipmap(V)),S&&D.end(k),o.isScene===!0&&o.onAfterRender(k,o,f),Z.resetDefaultState(),Q=-1,j=null,A.pop(),A.length>0?(I=A[A.length-1],_.setTextureUnits(I.state.textureUnits),Mt===!0&&Ae.setGlobalState(k.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?U=B[B.length-1]:U=null,q!==null&&q.renderEnd()};function ia(o,f,v,S){if(o.visible===!1)return;if(o.layers.test(f.layers)){if(o.isGroup)v=o.renderOrder;else if(o.isLOD)o.autoUpdate===!0&&o.update(f);else if(o.isLightProbeGrid)I.pushLightProbeGrid(o);else if(o.isLight)I.pushLight(o),o.castShadow&&I.pushShadow(o);else if(o.isSprite){if(!o.frustumCulled||Ve.intersectsSprite(o)){S&&rt.setFromMatrixPosition(o.matrixWorld).applyMatrix4(vt);let b=xe.update(o),H=o.material;H.visible&&U.push(o,b,H,v,rt.z,null)}}else if((o.isMesh||o.isLine||o.isPoints)&&(!o.frustumCulled||Ve.intersectsObject(o))){let b=xe.update(o),H=o.material;if(S&&(o.boundingSphere!==void 0?(o.boundingSphere===null&&o.computeBoundingSphere(),rt.copy(o.boundingSphere.center)):(b.boundingSphere===null&&b.computeBoundingSphere(),rt.copy(b.boundingSphere.center)),rt.applyMatrix4(o.matrixWorld).applyMatrix4(vt)),Array.isArray(H)){let G=b.groups;for(let W=0,K=G.length;W<K;W++){let $=G[W],X=H[$.materialIndex];X&&X.visible&&U.push(o,b,X,v,rt.z,$)}}else H.visible&&U.push(o,b,H,v,rt.z,null)}}let F=o.children;for(let b=0,H=F.length;b<H;b++)ia(F[b],f,v,S)}function xo(o,f,v,S){let{opaque:T,transmissive:F,transparent:b}=o;I.setupLightsView(v),Mt===!0&&Ae.setGlobalState(k.clippingPlanes,v),S&&we.viewport(ue.copy(S)),T.length>0&&Er(T,f,v),F.length>0&&Er(F,f,v),b.length>0&&Er(b,f,v),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function _o(o,f,v,S){if((v.isScene===!0?v.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[S.id]===void 0){let X=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[S.id]=new gt(1,1,{generateMipmaps:!0,type:X?Pt:Ct,minFilter:kn,samples:Math.max(4,bt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let F=I.state.transmissionRenderTarget[S.id],b=S.viewport||ue;F.setSize(b.z*k.transmissionResolutionScale,b.w*k.transmissionResolutionScale);let H=k.getRenderTarget(),G=k.getActiveCubeFace(),W=k.getActiveMipmapLevel();k.setRenderTarget(F),k.getClearColor(Ie),Oe=k.getClearAlpha(),Oe<1&&k.setClearColor(16777215,.5),k.clear(),Lt&&_e.render(v);let K=k.toneMapping;k.toneMapping=Gn;let $=S.viewport;if(S.viewport!==void 0&&(S.viewport=void 0),I.setupLightsView(S),Mt===!0&&Ae.setGlobalState(k.clippingPlanes,S),Er(o,v,S),_.updateMultisampleRenderTarget(F),_.updateRenderTargetMipmap(F),ot.has("WEBGL_multisampled_render_to_texture")===!1){let X=!1;for(let ae=0,ge=f.length;ae<ge;ae++){let ce=f[ae],{object:le,geometry:Me,material:oe,group:ze}=ce;if(oe.side===An&&le.layers.test(S.layers)){let Ne=oe.side;oe.side=Zt,oe.needsUpdate=!0,yo(le,v,S,Me,oe,ze),oe.side=Ne,oe.needsUpdate=!0,X=!0}}X===!0&&(_.updateMultisampleRenderTarget(F),_.updateRenderTargetMipmap(F))}k.setRenderTarget(H,G,W),k.setClearColor(Ie,Oe),$!==void 0&&(S.viewport=$),k.toneMapping=K}function Er(o,f,v){let S=f.isScene===!0?f.overrideMaterial:null;for(let T=0,F=o.length;T<F;T++){let b=o[T],{object:H,geometry:G,group:W}=b,K=b.material;K.allowOverride===!0&&S!==null&&(K=S),H.layers.test(v.layers)&&yo(H,f,v,G,K,W)}}function yo(o,f,v,S,T,F){o.onBeforeRender(k,f,v,S,T,F),o.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,o.matrixWorld),o.normalMatrix.getNormalMatrix(o.modelViewMatrix),T.onBeforeRender(k,f,v,S,o,F),T.transparent===!0&&T.side===An&&T.forceSinglePass===!1?(T.side=Zt,T.needsUpdate=!0,k.renderBufferDirect(v,f,S,T,o,F),T.side=ai,T.needsUpdate=!0,k.renderBufferDirect(v,f,S,T,o,F),T.side=An):k.renderBufferDirect(v,f,S,T,o,F),o.onAfterRender(k,f,v,S,T,F)}function wr(o,f,v){f.isScene!==!0&&(f=Yt);let S=M.get(o),T=I.state.lights,F=I.state.shadowsArray,b=T.state.version,H=ye.getParameters(o,T.state,F,f,v,I.state.lightProbeGridArray),G=ye.getProgramCacheKey(H),W=S.programs;S.environment=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?f.environment:null,S.fog=f.fog;let K=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap;S.envMap=Y.get(o.envMap||S.environment,K),S.envMapRotation=S.environment!==null&&o.envMap===null?f.environmentRotation:o.envMapRotation,W===void 0&&(o.addEventListener("dispose",zt),W=new Map,S.programs=W);let $=W.get(G);if($!==void 0){if(S.currentProgram===$&&S.lightsStateVersion===b)return Ao(o,H),$}else H.uniforms=ye.getUniforms(o),q!==null&&o.isNodeMaterial&&q.build(o,v,H),o.onBeforeCompile(H,k),$=ye.acquireProgram(H,G),W.set(G,$),S.uniforms=H.uniforms;let X=S.uniforms;return(!o.isShaderMaterial&&!o.isRawShaderMaterial||o.clipping===!0)&&(X.clippingPlanes=Ae.uniform),Ao(o,H),S.needsLights=Zr(o),S.lightsStateVersion=b,S.needsLights&&(X.ambientLightColor.value=T.state.ambient,X.lightProbe.value=T.state.probe,X.directionalLights.value=T.state.directional,X.directionalLightShadows.value=T.state.directionalShadow,X.spotLights.value=T.state.spot,X.spotLightShadows.value=T.state.spotShadow,X.rectAreaLights.value=T.state.rectArea,X.ltc_1.value=T.state.rectAreaLTC1,X.ltc_2.value=T.state.rectAreaLTC2,X.pointLights.value=T.state.point,X.pointLightShadows.value=T.state.pointShadow,X.hemisphereLights.value=T.state.hemi,X.directionalShadowMatrix.value=T.state.directionalShadowMatrix,X.spotLightMatrix.value=T.state.spotLightMatrix,X.spotLightMap.value=T.state.spotLightMap,X.pointShadowMatrix.value=T.state.pointShadowMatrix),S.lightProbeGrid=I.state.lightProbeGridArray.length>0,S.currentProgram=$,S.uniformsList=null,$}function So(o){if(o.uniformsList===null){let f=o.currentProgram.getUniforms();o.uniformsList=bs.seqWithValue(f.seq,o.uniforms)}return o.uniformsList}function Ao(o,f){let v=M.get(o);v.outputColorSpace=f.outputColorSpace,v.batching=f.batching,v.batchingColor=f.batchingColor,v.instancing=f.instancing,v.instancingColor=f.instancingColor,v.instancingMorph=f.instancingMorph,v.skinning=f.skinning,v.morphTargets=f.morphTargets,v.morphNormals=f.morphNormals,v.morphColors=f.morphColors,v.morphTargetsCount=f.morphTargetsCount,v.numClippingPlanes=f.numClippingPlanes,v.numIntersection=f.numClipIntersection,v.vertexAlphas=f.vertexAlphas,v.vertexTangents=f.vertexTangents,v.toneMapping=f.toneMapping}function Yr(o,f){if(o.length===0)return null;if(o.length===1)return o[0].texture!==null?o[0]:null;R.setFromMatrixPosition(f.matrixWorld);for(let v=0,S=o.length;v<S;v++){let T=o[v];if(T.texture!==null&&T.boundingBox.containsPoint(R))return T}return null}function qr(o,f,v,S,T){f.isScene!==!0&&(f=Yt),_.resetTextureUnits();let F=f.fog,b=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?f.environment:null,H=V===null?k.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ht.workingColorSpace,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,W=Y.get(S.envMap||b,G),K=S.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,$=!!v.attributes.tangent&&(!!S.normalMap||S.anisotropy>0),X=!!v.morphAttributes.position,ae=!!v.morphAttributes.normal,ge=!!v.morphAttributes.color,ce=Gn;S.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ce=k.toneMapping);let le=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,Me=le!==void 0?le.length:0,oe=M.get(S),ze=I.state.lights;if(Mt===!0&&(it===!0||o!==j)){let $e=o===j&&S.id===Q;Ae.setState(S,o,$e)}let Ne=!1;S.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==ze.state.version||oe.outputColorSpace!==H||T.isBatchedMesh&&oe.batching===!1||!T.isBatchedMesh&&oe.batching===!0||T.isBatchedMesh&&oe.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&oe.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&oe.instancing===!1||!T.isInstancedMesh&&oe.instancing===!0||T.isSkinnedMesh&&oe.skinning===!1||!T.isSkinnedMesh&&oe.skinning===!0||T.isInstancedMesh&&oe.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&oe.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&oe.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&oe.instancingMorph===!1&&T.morphTexture!==null||oe.envMap!==W||S.fog===!0&&oe.fog!==F||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==Ae.numPlanes||oe.numIntersection!==Ae.numIntersection)||oe.vertexAlphas!==K||oe.vertexTangents!==$||oe.morphTargets!==X||oe.morphNormals!==ae||oe.morphColors!==ge||oe.toneMapping!==ce||oe.morphTargetsCount!==Me||!!oe.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Ne=!0):(Ne=!0,oe.__version=S.version);let Re=oe.currentProgram;Ne===!0&&(Re=wr(S,f,T),q&&S.isNodeMaterial&&q.onUpdateProgram(S,Re,oe));let Te=!1,Le=!1,mt=!1,Be=Re.getUniforms(),Ue=oe.uniforms;if(we.useProgram(Re.program)&&(Te=!0,Le=!0,mt=!0),S.id!==Q&&(Q=S.id,Le=!0),oe.needsLights){let $e=Yr(I.state.lightProbeGridArray,T);oe.lightProbeGrid!==$e&&(oe.lightProbeGrid=$e,Le=!0)}if(Te||j!==o){we.buffers.depth.getReversed()&&o.reversedDepth!==!0&&(o._reversedDepth=!0,o.updateProjectionMatrix()),Be.setValue(z,"projectionMatrix",o.projectionMatrix),Be.setValue(z,"viewMatrix",o.matrixWorldInverse);let Wt=Be.map.cameraPosition;Wt!==void 0&&Wt.setValue(z,St.setFromMatrixPosition(o.matrixWorld)),bt.logarithmicDepthBuffer&&Be.setValue(z,"logDepthBufFC",2/(Math.log(o.far+1)/Math.LN2)),(S.isMeshPhongMaterial||S.isMeshToonMaterial||S.isMeshLambertMaterial||S.isMeshBasicMaterial||S.isMeshStandardMaterial||S.isShaderMaterial)&&Be.setValue(z,"isOrthographic",o.isOrthographicCamera===!0),j!==o&&(j=o,Le=!0,mt=!0)}if(oe.needsLights&&(ze.state.directionalShadowMap.length>0&&Be.setValue(z,"directionalShadowMap",ze.state.directionalShadowMap,_),ze.state.spotShadowMap.length>0&&Be.setValue(z,"spotShadowMap",ze.state.spotShadowMap,_),ze.state.pointShadowMap.length>0&&Be.setValue(z,"pointShadowMap",ze.state.pointShadowMap,_)),T.isSkinnedMesh){Be.setOptional(z,T,"bindMatrix"),Be.setOptional(z,T,"bindMatrixInverse");let $e=T.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Be.setValue(z,"boneTexture",$e.boneTexture,_))}T.isBatchedMesh&&(Be.setOptional(z,T,"batchingTexture"),Be.setValue(z,"batchingTexture",T._matricesTexture,_),Be.setOptional(z,T,"batchingIdTexture"),Be.setValue(z,"batchingIdTexture",T._indirectTexture,_),Be.setOptional(z,T,"batchingColorTexture"),T._colorsTexture!==null&&Be.setValue(z,"batchingColorTexture",T._colorsTexture,_));let tt=v.morphAttributes;if((tt.position!==void 0||tt.normal!==void 0||tt.color!==void 0)&&We.update(T,v,Re),(Le||oe.receiveShadow!==T.receiveShadow)&&(oe.receiveShadow=T.receiveShadow,Be.setValue(z,"receiveShadow",T.receiveShadow)),(S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial)&&S.envMap===null&&f.environment!==null&&(Ue.envMapIntensity.value=f.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=G_()),Le){if(Be.setValue(z,"toneMappingExposure",k.toneMappingExposure),oe.needsLights&&Yl(Ue,mt),F&&S.fog===!0&&ee.refreshFogUniforms(Ue,F),ee.refreshMaterialUniforms(Ue,S,Ye,pt,I.state.transmissionRenderTarget[o.id]),oe.needsLights&&oe.lightProbeGrid){let $e=oe.lightProbeGrid;Ue.probesSH.value=$e.texture,Ue.probesMin.value.copy($e.boundingBox.min),Ue.probesMax.value.copy($e.boundingBox.max),Ue.probesResolution.value.copy($e.resolution)}bs.upload(z,So(oe),Ue,_)}if(S.isShaderMaterial&&S.uniformsNeedUpdate===!0&&(bs.upload(z,So(oe),Ue,_),S.uniformsNeedUpdate=!1),S.isSpriteMaterial&&Be.setValue(z,"center",T.center),Be.setValue(z,"modelViewMatrix",T.modelViewMatrix),Be.setValue(z,"normalMatrix",T.normalMatrix),Be.setValue(z,"modelMatrix",T.matrixWorld),S.uniformsGroups!==void 0){let $e=S.uniformsGroups;for(let Wt=0,xt=$e.length;Wt<xt;Wt++){let Un=$e[Wt];ne.update(Un,Re),ne.bind(Un,Re)}}return Re}function Yl(o,f){o.ambientLightColor.needsUpdate=f,o.lightProbe.needsUpdate=f,o.directionalLights.needsUpdate=f,o.directionalLightShadows.needsUpdate=f,o.pointLights.needsUpdate=f,o.pointLightShadows.needsUpdate=f,o.spotLights.needsUpdate=f,o.spotLightShadows.needsUpdate=f,o.rectAreaLights.needsUpdate=f,o.hemisphereLights.needsUpdate=f}function Zr(o){return o.isMeshLambertMaterial||o.isMeshToonMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isShadowMaterial||o.isShaderMaterial&&o.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(o,f,v){let S=M.get(o);S.__autoAllocateDepthBuffer=o.resolveDepthBuffer===!1,S.__autoAllocateDepthBuffer===!1&&(S.__useRenderToTexture=!1),M.get(o.texture).__webglTexture=f,M.get(o.depthTexture).__webglTexture=S.__autoAllocateDepthBuffer?void 0:v,S.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(o,f){let v=M.get(o);v.__webglFramebuffer=f,v.__useDefaultFramebuffer=f===void 0};let To=z.createFramebuffer();this.setRenderTarget=function(o,f=0,v=0){V=o,J=f,te=v;let S=null,T=!1,F=!1;if(o){let H=M.get(o);if(H.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(z.FRAMEBUFFER,H.__webglFramebuffer),ue.copy(o.viewport),de.copy(o.scissor),Ee=o.scissorTest,we.viewport(ue),we.scissor(de),we.setScissorTest(Ee),Q=-1;return}else if(H.__webglFramebuffer===void 0)_.setupRenderTarget(o);else if(H.__hasExternalTextures)_.rebindTextures(o,M.get(o.texture).__webglTexture,M.get(o.depthTexture).__webglTexture);else if(o.depthBuffer){let K=o.depthTexture;if(H.__boundDepthTexture!==K){if(K!==null&&M.has(K)&&(o.width!==K.image.width||o.height!==K.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(o)}}let G=o.texture;(G.isData3DTexture||G.isDataArrayTexture||G.isCompressedArrayTexture)&&(F=!0);let W=M.get(o).__webglFramebuffer;o.isWebGLCubeRenderTarget?(Array.isArray(W[f])?S=W[f][v]:S=W[f],T=!0):o.samples>0&&_.useMultisampledRTT(o)===!1?S=M.get(o).__webglMultisampledFramebuffer:Array.isArray(W)?S=W[v]:S=W,ue.copy(o.viewport),de.copy(o.scissor),Ee=o.scissorTest}else ue.copy(ve).multiplyScalar(Ye).floor(),de.copy(Ge).multiplyScalar(Ye).floor(),Ee=Je;if(v!==0&&(S=To),we.bindFramebuffer(z.FRAMEBUFFER,S)&&we.drawBuffers(o,S),we.viewport(ue),we.scissor(de),we.setScissorTest(Ee),T){let H=M.get(o.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+f,H.__webglTexture,v)}else if(F){let H=f;for(let G=0;G<o.textures.length;G++){let W=M.get(o.textures[G]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+G,W.__webglTexture,v,H)}}else if(o!==null&&v!==0){let H=M.get(o.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,H.__webglTexture,v)}Q=-1},this.readRenderTargetPixels=function(o,f,v,S,T,F,b,H=0){if(!(o&&o.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let G=M.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&b!==void 0&&(G=G[b]),G){we.bindFramebuffer(z.FRAMEBUFFER,G);try{let W=o.textures[H],K=W.format,$=W.type;if(o.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+H),!bt.textureFormatReadable(K)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable($)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}f>=0&&f<=o.width-S&&v>=0&&v<=o.height-T&&z.readPixels(f,v,S,T,O.convert(K),O.convert($),F)}finally{let W=V!==null?M.get(V).__webglFramebuffer:null;we.bindFramebuffer(z.FRAMEBUFFER,W)}}},this.readRenderTargetPixelsAsync=async function(o,f,v,S,T,F,b,H=0){if(!(o&&o.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let G=M.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&b!==void 0&&(G=G[b]),G)if(f>=0&&f<=o.width-S&&v>=0&&v<=o.height-T){we.bindFramebuffer(z.FRAMEBUFFER,G);let W=o.textures[H],K=W.format,$=W.type;if(o.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+H),!bt.textureFormatReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let X=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,X),z.bufferData(z.PIXEL_PACK_BUFFER,F.byteLength,z.STREAM_READ),z.readPixels(f,v,S,T,O.convert(K),O.convert($),0);let ae=V!==null?M.get(V).__webglFramebuffer:null;we.bindFramebuffer(z.FRAMEBUFFER,ae);let ge=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Tf(z,ge,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,X),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,F),z.deleteBuffer(X),z.deleteSync(ge),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(o,f=null,v=0){let S=Math.pow(2,-v),T=Math.floor(o.image.width*S),F=Math.floor(o.image.height*S),b=f!==null?f.x:0,H=f!==null?f.y:0;_.setTexture2D(o,0),z.copyTexSubImage2D(z.TEXTURE_2D,v,0,0,b,H,T,F),we.unbindTexture()};let en=z.createFramebuffer(),Mn=z.createFramebuffer();this.copyTextureToTexture=function(o,f,v=null,S=null,T=0,F=0){let b,H,G,W,K,$,X,ae,ge,ce=o.isCompressedTexture?o.mipmaps[F]:o.image;if(v!==null)b=v.max.x-v.min.x,H=v.max.y-v.min.y,G=v.isBox3?v.max.z-v.min.z:1,W=v.min.x,K=v.min.y,$=v.isBox3?v.min.z:0;else{let Ue=Math.pow(2,-T);b=Math.floor(ce.width*Ue),H=Math.floor(ce.height*Ue),o.isDataArrayTexture?G=ce.depth:o.isData3DTexture?G=Math.floor(ce.depth*Ue):G=1,W=0,K=0,$=0}S!==null?(X=S.x,ae=S.y,ge=S.z):(X=0,ae=0,ge=0);let le=O.convert(f.format),Me=O.convert(f.type),oe;f.isData3DTexture?(_.setTexture3D(f,0),oe=z.TEXTURE_3D):f.isDataArrayTexture||f.isCompressedArrayTexture?(_.setTexture2DArray(f,0),oe=z.TEXTURE_2D_ARRAY):(_.setTexture2D(f,0),oe=z.TEXTURE_2D),we.activeTexture(z.TEXTURE0),we.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,f.flipY),we.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),we.pixelStorei(z.UNPACK_ALIGNMENT,f.unpackAlignment);let ze=we.getParameter(z.UNPACK_ROW_LENGTH),Ne=we.getParameter(z.UNPACK_IMAGE_HEIGHT),Re=we.getParameter(z.UNPACK_SKIP_PIXELS),Te=we.getParameter(z.UNPACK_SKIP_ROWS),Le=we.getParameter(z.UNPACK_SKIP_IMAGES);we.pixelStorei(z.UNPACK_ROW_LENGTH,ce.width),we.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce.height),we.pixelStorei(z.UNPACK_SKIP_PIXELS,W),we.pixelStorei(z.UNPACK_SKIP_ROWS,K),we.pixelStorei(z.UNPACK_SKIP_IMAGES,$);let mt=o.isDataArrayTexture||o.isData3DTexture,Be=f.isDataArrayTexture||f.isData3DTexture;if(o.isDepthTexture){let Ue=M.get(o),tt=M.get(f),$e=M.get(Ue.__renderTarget),Wt=M.get(tt.__renderTarget);we.bindFramebuffer(z.READ_FRAMEBUFFER,$e.__webglFramebuffer),we.bindFramebuffer(z.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let xt=0;xt<G;xt++)mt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,M.get(o).__webglTexture,T,$+xt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,M.get(f).__webglTexture,F,ge+xt)),z.blitFramebuffer(W,K,b,H,X,ae,b,H,z.DEPTH_BUFFER_BIT,z.NEAREST);we.bindFramebuffer(z.READ_FRAMEBUFFER,null),we.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(T!==0||o.isRenderTargetTexture||M.has(o)){let Ue=M.get(o),tt=M.get(f);we.bindFramebuffer(z.READ_FRAMEBUFFER,en),we.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mn);for(let $e=0;$e<G;$e++)mt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,T,$+$e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ue.__webglTexture,T),Be?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tt.__webglTexture,F,ge+$e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tt.__webglTexture,F),T!==0?z.blitFramebuffer(W,K,b,H,X,ae,b,H,z.COLOR_BUFFER_BIT,z.NEAREST):Be?z.copyTexSubImage3D(oe,F,X,ae,ge+$e,W,K,b,H):z.copyTexSubImage2D(oe,F,X,ae,W,K,b,H);we.bindFramebuffer(z.READ_FRAMEBUFFER,null),we.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Be?o.isDataTexture||o.isData3DTexture?z.texSubImage3D(oe,F,X,ae,ge,b,H,G,le,Me,ce.data):f.isCompressedArrayTexture?z.compressedTexSubImage3D(oe,F,X,ae,ge,b,H,G,le,ce.data):z.texSubImage3D(oe,F,X,ae,ge,b,H,G,le,Me,ce):o.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,F,X,ae,b,H,le,Me,ce.data):o.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,F,X,ae,ce.width,ce.height,le,ce.data):z.texSubImage2D(z.TEXTURE_2D,F,X,ae,b,H,le,Me,ce);we.pixelStorei(z.UNPACK_ROW_LENGTH,ze),we.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne),we.pixelStorei(z.UNPACK_SKIP_PIXELS,Re),we.pixelStorei(z.UNPACK_SKIP_ROWS,Te),we.pixelStorei(z.UNPACK_SKIP_IMAGES,Le),F===0&&f.generateMipmaps&&z.generateMipmap(oe),we.unbindTexture()},this.initRenderTarget=function(o){M.get(o).__webglFramebuffer===void 0&&_.setupRenderTarget(o)},this.initTexture=function(o){o.isCubeTexture?_.setTextureCube(o,0):o.isData3DTexture?_.setTexture3D(o,0):o.isDataArrayTexture||o.isCompressedArrayTexture?_.setTexture2DArray(o,0):_.setTexture2D(o,0),we.unbindTexture()},this.resetState=function(){J=0,te=0,V=null,we.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var fl=class{constructor(e,t){this.renderer=e,this.last=-1,this.target=new gt(1024,1024,{depthBuffer:!1,minFilter:et,magFilter:et}),this.target.texture.wrapS=this.target.texture.wrapT=bn,this.target.texture.colorSpace=jt,this.material=new Bt({depthTest:!1,depthWrite:!1,uniforms:{source:new P(t),phase:new P(0)},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`precision highp float;
   uniform sampler2D source;uniform float phase;varying vec2 vUv;
   void main(){
    // Separate layer paths, not faster deformation of a single cloud shape.
    float p=phase*phase*(3.-2.*phase);
    vec2 lower=vec2(.115*p,.018*sin(p*3.14159265));
    vec2 upper=vec2(-.085*p,.062*p);
    vec2 high=vec2(.04*p,-.025*p);
    float r=texture2D(source,fract(vUv+lower)).r;
    float g=texture2D(source,fract(vUv+upper)).g;
    float b=texture2D(source,fract(vUv+high)).b;
    gl_FragColor=vec4(r,g,b,texture2D(source,vUv).a);
   }`}),this.scene=new oi,this.scene.add(new hn(new ur(2,2),this.material)),this.camera=new Wi(-1,1,1,-1,0,1),this.update(0)}get texture(){return this.target.texture}update(e){if(Math.abs(e-this.last)<1e-5)return;this.last=e,this.material.uniforms.phase.value=e;let t=this.renderer.getRenderTarget(),i=this.renderer.autoClear;this.renderer.setRenderTarget(this.target),this.renderer.autoClear=!0,this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(t),this.renderer.autoClear=i}};function ip(n=0){return{phase:n,start:n,goal:n,elapsed:4.5,duration:4.5,progress:1,pulse:0,direction:0}}function rp(n,e,t,i=!1){e!==n.goal&&(n.start=n.phase,n.goal=e,n.elapsed=0,n.duration=4.5*Math.max(.35,Math.abs(e-n.start)),n.direction=Math.sign(e-n.start)),n.elapsed+=Math.max(0,t),n.progress=i?1:Math.min(1,n.elapsed/n.duration);let r=n.progress,s=1-Math.pow(1-r,3);return n.phase=n.start+(n.goal-n.start)*s,n.pulse=r<1?Math.sin(Math.PI*s)**2:0,n}var k_=(()=>{let n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new gn;return t.setAttribute("position",new rn(n,3)),t.setAttribute("uv",new rn(e,2)),t})(),In=class fh{static get fullscreenGeometry(){return k_}constructor(e="Pass",t=new oi,i=new Wi){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new hn(fh.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new oi),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=ui){}render(e,t,i,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof gt||t instanceof vn||t instanceof Xt||t instanceof fh)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},V_=class extends In{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,r){let s=n.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},W_=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,ph="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",X_=class extends Bt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new P(null),depthBuffer:new P(null),channelWeights:new P(null),opacity:new P(1)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:W_,vertexShader:ph}),this.depthFunc=fs}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){let e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){let e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},cp=class extends In{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new X_,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new gt(1,1,{minFilter:et,magFilter:et,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,r){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Ct?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===Ot&&(this.renderTarget.texture.colorSpace=Ot))}},sp=new dt,mh=class extends In{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,r){let s=this.overrideClearColor,a=this.overrideClearAlpha,c=n.getClearAlpha(),l=s!==null,u=a>=0;l?(n.getClearColor(sp),n.setClearColor(s,u?a:c)):u&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(sp,c):u&&n.setClearAlpha(c)}},Y_=class extends In{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new mh(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,r){let s=n.getContext(),a=n.state.buffers,c=this.scene,l=this.camera,u=this.clearPass,h=this.inverted?0:1,p=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,h,4294967295),a.stencil.setClear(p),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?u.render(n,null):(u.render(n,e),u.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(c,l)):(n.setRenderTarget(e),n.render(c,l),n.setRenderTarget(t),n.render(c,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},uh=1/1e3,q_=1e3,Z_=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*uh}get fixedDelta(){return this._fixedDelta*uh}set fixedDelta(n){this._fixedDelta=n*q_}get elapsed(){return this._elapsed*uh}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},lp=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new cp,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new Z_,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){let e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){let e=n.getSize(new De),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Ct&&n.outputColorSpace===Ot&&(this.inputBuffer.texture.colorSpace=Ot,this.outputBuffer.texture.colorSpace=Ot,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(let r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){let t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){let n=this.inputBuffer,e=new Kn;this.depthTexture=e,n.stencilBuffer?(e.format=Mi,e.type=vr):e.type=Gt;let t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new gt(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){let e=this.renderer,t=this.depthRenderTarget,i=e.properties,r=e.getContext();e.setRenderTarget(t);let s=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,c=n.stencilBuffer?r.DEPTH_BUFFER_BIT|r.STENCIL_BUFFER_BIT:r.DEPTH_BUFFER_BIT;r.bindFramebuffer(r.READ_FRAMEBUFFER,s),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,a),r.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,c,r.NEAREST),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(let n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,i){let r=this.renderer,s=r===null?new De:r.getDrawingBufferSize(new De),a={minFilter:et,magFilter:et,stencilBuffer:e,depthBuffer:n,type:t},c=new gt(s.width,s.height,a);return i>0&&(c.samples=i),t===Ct&&r!==null&&r.outputColorSpace===Ot&&(c.texture.colorSpace=Ot),c.texture.name="EffectComposer.Buffer",c.texture.generateMipmaps=!1,c}setMainScene(n){for(let e of this.passes)e.mainScene=n}setMainCamera(n){for(let e of this.passes)e.mainCamera=n}addPass(n,e){let t=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new De),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(r.width,r.height),n.initialize(i,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){let c=this.createDepthTexture();for(n of t)n.setDepthTexture(c)}else{let c=this.depthRenderTarget.depthTexture;n.setDepthTexture(c)}}removePass(n){let e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){let s=(c,l)=>c||l.needsDepthTexture;if(!e.reduce(s,!1)){let c=this.depthRenderTarget.depthTexture;n.getDepthTexture()===c&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){let e=this.renderer,t=this.copyPass,i=this.inputBuffer,r=this.outputBuffer,s,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(let c of this.passes)if(c.enabled){if(i.depthTexture=this.depthTexture,r.depthTexture=null,c.render(e,i,r,n,a),c.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),c.needsSwap){if(a){t.renderToScreen=c.renderToScreen;let l=e.getContext(),u=e.state.buffers.stencil;u.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,r,n,a),u.setFunc(l.EQUAL,1,4294967295)}s=i,i=r,r=s}c instanceof Y_?a=!0:c instanceof V_&&(a=!1)}}setSize(n,e,t){let i=this.renderer,r=i.getSize(new De);(n===void 0||e===void 0)&&(n=r.width,e=r.height),(r.width!==n||r.height!==e)&&i.setSize(n,e,t);let s=i.getDrawingBufferSize(new De);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(s.width,s.height);for(let a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),In.fullscreenGeometry.dispose()}},di={NONE:0,DEPTH:1,CONVOLUTION:2},_t={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},K_=class{constructor(){this.shaderParts=new Map([[_t.FRAGMENT_HEAD,null],[_t.FRAGMENT_MAIN_UV,null],[_t.FRAGMENT_MAIN_IMAGE,null],[_t.VERTEX_HEAD,null],[_t.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=di.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ln}};var hh=!1,ap=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case An:t=this.materialsFlatShadedDoubleSide;break;case Zt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case An:t=this.materialsDoubleSide;break;case Zt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Bt))return n.clone();let e=n.uniforms,t=new Map;for(let r in e){let s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,t.set(r,s))}let i=n.clone();for(let r of t)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){let e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(let t of e)t.uniforms=Object.assign({},n.uniforms),t.side=ai;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Zt,i}),this.materialsDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=An,i}),this.materialsFlatShaded=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Zt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{let i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=An,i})}}render(n,e,t){let i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,hh){let r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(let s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{let r=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=r}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return hh}static set workaroundEnabled(n){hh=n}};var yr=-1,Hr=class extends sn{constructor(n=null,e=yr,t=yr,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new De(1,1),this.preferredSize=new De(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new De,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==yr?t.width=e.width:e.height!==yr?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==yr?t.height=e.height:e.width!==yr?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(yr),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return yr}};var ct={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Q_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",j_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",J_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$_="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ey="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ty="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ny="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ry="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ay="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ly="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",py="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",my="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",_y="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ay="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ty="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ey="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wy="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",My="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",by="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cy=new Map([[ct.ADD,Q_],[ct.ALPHA,j_],[ct.AVERAGE,J_],[ct.COLOR,$_],[ct.COLOR_BURN,ey],[ct.COLOR_DODGE,ty],[ct.DARKEN,ny],[ct.DIFFERENCE,iy],[ct.DIVIDE,ry],[ct.DST,null],[ct.EXCLUSION,sy],[ct.HARD_LIGHT,ay],[ct.HARD_MIX,oy],[ct.HUE,cy],[ct.INVERT,ly],[ct.INVERT_RGB,uy],[ct.LIGHTEN,hy],[ct.LINEAR_BURN,dy],[ct.LINEAR_DODGE,fy],[ct.LINEAR_LIGHT,py],[ct.LUMINOSITY,my],[ct.MULTIPLY,gy],[ct.NEGATION,vy],[ct.NORMAL,xy],[ct.OVERLAY,_y],[ct.PIN_LIGHT,yy],[ct.REFLECT,Sy],[ct.SATURATION,Ay],[ct.SCREEN,Ty],[ct.SOFT_LIGHT,Ey],[ct.SRC,wy],[ct.SUBTRACT,My],[ct.VIVID_LIGHT,by]]),Ry=class extends sn{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new P(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return Cy.get(this.blendFunction)}};var zr=class extends sn{constructor(n,e,{attributes:t=di.NONE,blendFunction:i=ct.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:c=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=c,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new Ry(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=ln,this._outputColorSpace=jt}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=ui){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(let n of Object.keys(this)){let e=this[n];(e instanceof gt||e instanceof vn||e instanceof Xt||e instanceof In)&&this[n].dispose()}}};var LM=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])];var Iy=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,Dy=class extends Bt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:"184".replace(/\D+/g,"")},uniforms:{inputBuffer:new P(null),threshold:new P(0),smoothing:new P(1),range:new P(null)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Iy,vertexShader:ph}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},Py=class extends In{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:r=Hr.AUTO_SIZE,height:s=Hr.AUTO_SIZE,resolutionX:a=r,resolutionY:c=s}={}){super("LuminancePass"),this.fullscreenMaterial=new Dy(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new gt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");let l=this.resolution=new Hr(this,a,c,i);l.addEventListener("change",u=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,r){let s=this.fullscreenMaterial;s.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==Ct&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};var Ha=class extends In{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,r){let s=this.fullscreenMaterial.uniforms;e!==null&&s!==void 0&&s[this.input]!==void 0&&(s[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==Ct&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};var gh=class extends In{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new mh,this.overrideMaterialManager=t===null?null:new ap(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){let n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){let e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new ap(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,r){let s=this.scene,a=this.camera,c=this.selection,l=a.layers.mask,u=s.background,h=n.shadowMap.autoUpdate,p=this.renderToScreen?null:e;c!==null&&a.layers.set(c.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(p),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,s,a):n.render(s,a),a.layers.mask=l,s.background=u,n.shadowMap.autoUpdate=h}};var En={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,UNCHARTED2:4,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8};var FM=Math.PI*.5;var Ny=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,Ly=class extends Bt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new P(null),luminanceBuffer1:new P(null),minLuminance:new P(.01),deltaTime:new P(0),tau:new P(1)},extensions:{shaderTextureLOD:!0},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ny,vertexShader:ph})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},Uy=class extends In{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new Ly,this.needsSwap=!1,this.renderTargetPrevious=new gt(1,1,{minFilter:Ft,magFilter:Ft,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";let i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new cp(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,r){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},Oy=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,up=class extends zr{constructor({blendFunction:n=ct.SRC,adaptive:e=!1,mode:t=e?En.REINHARD2_ADAPTIVE:En.AGX,resolution:i=256,maxLuminance:r=4,whitePoint:s=r,middleGrey:a=.6,minLuminance:c=.01,averageLuminance:l=1,adaptationRate:u=1}={}){super("ToneMappingEffect",Oy,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new P(null)],["maxLuminance",new P(r)],["whitePoint",new P(s)],["middleGrey",new P(a)],["averageLuminance",new P(l)]])}),this.renderTargetLuminance=new gt(1,1,{minFilter:kn,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new Py({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new Uy(this.luminancePass.texture,{minLuminance:c,adaptationRate:u}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;let t="184".replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case En.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case En.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case En.CINEON:case En.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case En.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case En.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case En.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===En.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){let e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===En.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?En.REINHARD2_ADAPTIVE:En.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}};var By=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,Fy="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Hy=class extends Bt{constructor(n,e,t,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"184".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new P(null),depthBuffer:new P(null),resolution:new P(new De),texelSize:new P(new De),cameraNear:new P(.3),cameraFar:new P(1e3),aspect:new P(1),time:new P(0)},blending:Qt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=ui){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=By.replace(_t.FRAGMENT_HEAD,n.get(_t.FRAGMENT_HEAD)||"").replace(_t.FRAGMENT_MAIN_UV,n.get(_t.FRAGMENT_MAIN_UV)||"").replace(_t.FRAGMENT_MAIN_IMAGE,n.get(_t.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=Fy.replace(_t.VERTEX_HEAD,n.get(_t.VERTEX_HEAD)||"").replace(_t.VERTEX_MAIN_SUPPORT,n.get(_t.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(let e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(let e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(let e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof nn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){let t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return _t}};var VM=Number("184".replace(/\D+/g,"")),Fr=255/256,WM=new Float32Array([Fr/256**3,Fr/256**2,Fr/256,Fr]),XM=new Float32Array([Fr,Fr/256,Fr/256**2,1/256**3]);function op(n,e,t){for(let i of e){let r="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,r))}}function zy(n,e,t){let i=e.getFragmentShader(),r=e.getVertexShader(),s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&di.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let c=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts,u=l.get(_t.FRAGMENT_HEAD)||"",h=l.get(_t.FRAGMENT_MAIN_UV)||"",p=l.get(_t.FRAGMENT_MAIN_IMAGE)||"",d=l.get(_t.VERTEX_HEAD)||"",m=l.get(_t.VERTEX_MAIN_SUPPORT)||"",y=new Set,E=new Set;if(a&&(h+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){let w=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);m+=`	${n}MainSupport(`,m+=w?`vUv);
`:`);
`;for(let C of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let R of C[1].split(/\s*,\s*/))t.varyings.add(R),y.add(R),E.add(R);for(let C of r.matchAll(c))E.add(C[1])}for(let w of i.matchAll(c))E.add(w[1]);for(let w of e.defines.keys())E.add(w.replace(/\([\w\s,]*\)/g,""));for(let w of e.uniforms.keys())E.add(w);E.delete("while"),E.delete("for"),E.delete("if"),e.uniforms.forEach((w,C)=>t.uniforms.set(n+C.charAt(0).toUpperCase()+C.slice(1),w)),e.defines.forEach((w,C)=>t.defines.set(n+C.charAt(0).toUpperCase()+C.slice(1),w));let x=new Map([["fragment",i],["vertex",r]]);op(n,E,t.defines),op(n,E,x),i=x.get("fragment"),r=x.get("vertex");let g=e.blendMode;if(t.blendModes.set(g.blendFunction,g),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(p+=e.inputColorSpace===Ot?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==jt?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);let w=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;p+=`${n}MainImage(color0, UV, `,(t.attributes&di.DEPTH)!==0&&w.test(i)&&(p+="depth, ",t.readDepth=!0),p+=`color1);
	`;let C=n+"BlendOpacity";t.uniforms.set(C,g.opacity),p+=`color0 = blend${g.blendFunction}(color0, color1, ${C});

	`,u+=`uniform float ${C};

`}if(u+=i+`
`,r!==null&&(d+=r+`
`),l.set(_t.FRAGMENT_HEAD,u),l.set(_t.FRAGMENT_MAIN_UV,h),l.set(_t.FRAGMENT_MAIN_IMAGE,p),l.set(_t.VERTEX_HEAD,d),l.set(_t.VERTEX_MAIN_SUPPORT,m),e.extensions!==null)for(let w of e.extensions)t.extensions.add(w)}}var pl=class extends In{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new Hy(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(let e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(let e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){let e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let n=new K_,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===ct.DST)n.attributes|=a.getAttributes()&di.DEPTH;else{if((n.attributes&a.getAttributes()&di.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);zy("e"+e++,a,n)}let t=n.shaderParts.get(_t.FRAGMENT_HEAD),i=n.shaderParts.get(_t.FRAGMENT_MAIN_IMAGE),r=n.shaderParts.get(_t.FRAGMENT_MAIN_UV),s=/\bblend\b/g;for(let a of n.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;(n.attributes&di.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===Ot&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(_t.FRAGMENT_HEAD,t),n.shaderParts.set(_t.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(_t.FRAGMENT_MAIN_UV,r);for(let[a,c]of n.shaderParts)c!==null&&n.shaderParts.set(a,c.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=ui){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(let t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,r){for(let s of this.effects)s.update(n,e,i);if(!this.skipRendering||this.renderToScreen){let s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(let t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(let i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==Ct&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}};var qM=[new Float32Array(3),new Float32Array(3)],ZM=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],KM=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var QM=[new Float32Array(2),new Float32Array(2)];var jM=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),JM=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],$M=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],e3=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var t3=new Map([[_n(0,0,0,0),new Float32Array([0,0,0,0])],[_n(0,0,0,1),new Float32Array([0,0,0,1])],[_n(0,0,1,0),new Float32Array([0,0,1,0])],[_n(0,0,1,1),new Float32Array([0,0,1,1])],[_n(0,1,0,0),new Float32Array([0,1,0,0])],[_n(0,1,0,1),new Float32Array([0,1,0,1])],[_n(0,1,1,0),new Float32Array([0,1,1,0])],[_n(0,1,1,1),new Float32Array([0,1,1,1])],[_n(1,0,0,0),new Float32Array([1,0,0,0])],[_n(1,0,0,1),new Float32Array([1,0,0,1])],[_n(1,0,1,0),new Float32Array([1,0,1,0])],[_n(1,0,1,1),new Float32Array([1,0,1,1])],[_n(1,1,0,0),new Float32Array([1,1,0,0])],[_n(1,1,0,1),new Float32Array([1,1,0,1])],[_n(1,1,1,0),new Float32Array([1,1,1,0])],[_n(1,1,1,1),new Float32Array([1,1,1,1])]]);function dh(n,e,t){return n+(e-n)*t}function _n(n,e,t,i){let r=dh(n,e,.75),s=dh(t,i,1-.25);return dh(r,s,1-.125)}var Gy=!0,vh="Invariant failed";function Sr(n,e){if(!n){if(Gy)throw new Error(vh);var t=typeof e=="function"?e():e,i=t?"".concat(vh,": ").concat(t):vh;throw new Error(i)}}var hp=128,dp=128,fp=64,ky="9627216cc50057994c98a2118f3c4a23765d43b9",Vy=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${ky}/packages/core/assets/stbn.bin`;var za=class extends an{load(e,t,i,r){let s=new un,a=new pr(this.manager);return a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.setResponseType("arraybuffer"),a.load(e,c=>{Sr(c instanceof ArrayBuffer),s.image.data=new Uint8Array(c),s.image.width=hp,s.image.height=dp,s.image.depth=fp,s.type=Ct,s.format=Tn,s.minFilter=Ft,s.magFilter=Ft,s.wrapS=bn,s.wrapT=bn,s.wrapR=bn,s.needsUpdate=!0,t?.(s)},i,r),s}};var Wy=new L;function mp(n,e,t=new L,i){let{x:r,y:s,z:a}=n,c=e.x,l=e.y,u=e.z,h=r*r*c,p=s*s*l,d=a*a*u,m=h+p+d,y=Math.sqrt(1/m);if(!Number.isFinite(y))return;let E=Wy.copy(n).multiplyScalar(y);if(m<(i?.centerTolerance??.1))return t.copy(E);let x=E.multiply(e).multiplyScalar(2),g=(1-y)*n.length()/(x.length()/2),w=0,C,R,U,I;do{g-=w,C=1/(1+g*c),R=1/(1+g*l),U=1/(1+g*u);let B=C*C,A=R*R,D=U*U,k=B*C,N=A*R,q=D*U;I=h*B+p*A+d*D-1,w=I/((h*k*c+p*N*l+d*q*u)*-2)}while(Math.abs(I)>1e-12);return t.set(r*C,s*R,a*U)}var Is=new L,xh=new L,_h=new L,yh=class{constructor(e,t,i){this.radii=new L(e,t,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}get flattening(){return 1-this.minimumRadius/this.maximumRadius}get eccentricity(){return Math.sqrt(this.eccentricitySquared)}get eccentricitySquared(){let e=this.maximumRadius**2,t=this.minimumRadius**2;return(e-t)/e}reciprocalRadii(e=new L){let{x:t,y:i,z:r}=this.radii;return e.set(1/t,1/i,1/r)}reciprocalRadiiSquared(e=new L){let{x:t,y:i,z:r}=this.radii;return e.set(1/t**2,1/i**2,1/r**2)}projectOnSurface(e,t=new L,i){return mp(e,this.reciprocalRadiiSquared(),t,i)}getSurfaceNormal(e,t=new L){return t.multiplyVectors(this.reciprocalRadiiSquared(Is),e).normalize()}getEastNorthUpVectors(e,t=new L,i=new L,r=new L){this.getSurfaceNormal(e,r),t.set(-e.y,e.x,0).normalize(),i.crossVectors(r,t).normalize()}getEastNorthUpFrame(e,t=new ke){let i=Is,r=xh,s=_h;return this.getEastNorthUpVectors(e,i,r,s),t.makeBasis(i,r,s).setPosition(e)}getNorthUpEastFrame(e,t=new ke){let i=Is,r=xh,s=_h;return this.getEastNorthUpVectors(e,i,r,s),t.makeBasis(r,s,i).setPosition(e)}getIntersection(e,t=new L){let i=this.reciprocalRadii(Is),r=xh.copy(i).multiply(e.origin),s=_h.copy(i).multiply(e.direction),a=r.lengthSq(),c=s.lengthSq(),l=r.dot(s),u=l**2-c*(a-1);if(a===1)return t.copy(e.origin);if(a>1){if(l>=0||u<0)return;let h=Math.sqrt(u),p=(-l-h)/c,d=(-l+h)/c;return e.at(Math.min(p,d),t)}if(a<1){let h=l**2-c*(a-1),p=Math.sqrt(h),d=(-l+p)/c;return e.at(d,t)}if(l<0)return e.at(-l/c,t)}getOsculatingSphereCenter(e,t,i=new L){Sr(this.radii.x===this.radii.y);let r=this.radii.x**2,s=this.radii.z**2,a=Is.set(e.x/r,e.y/r,e.z/s).normalize();return i.copy(a.multiplyScalar(-t).add(e))}getNormalAtHorizon(e,t,i=new L){Sr(this.radii.x===this.radii.y);let r=this.radii.x**2,s=this.radii.z**2,a=e,c=t,l=(a.x*c.x+a.y*c.y)/r+a.z*c.z/s;l/=(a.x**2+a.y**2)/r+a.z**2/s;let u=Is.copy(c).multiplyScalar(-l).add(e);return i.set(u.x/r,u.y/r,u.z/s).normalize()}};yh.WGS84=new yh(6378137,6378137,6356752314245179e-9);var fi=yh;var ml=new L,pp=new L,Ga=class Sh{constructor(e=0,t=0,i=0){this.longitude=e,this.latitude=t,this.height=i}set(e,t,i){return this.longitude=e,this.latitude=t,i!=null&&(this.height=i),this}clone(){return new Sh(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<Sh.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,t){let i=(t?.ellipsoid??fi.WGS84).reciprocalRadiiSquared(ml),r=mp(e,i,pp,t);if(r==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);let s=ml.multiplyVectors(r,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);let a=ml.subVectors(e,r);return this.height=Math.sign(a.dot(e))*a.length(),this}toECEF(e=new L,t){let i=t?.ellipsoid??fi.WGS84,r=ml.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),a=pp.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(r,a),e.divideScalar(Math.sqrt(a.dot(e))).add(a.multiplyScalar(this.height))}fromArray(e,t=0){return this.longitude=e[t],this.latitude=e[t+1],this.height=e[t+2],this}toArray(e=[],t=0){return e[t]=this.longitude,e[t+1]=this.latitude,e[t+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Ga.MIN_LONGITUDE=-Math.PI,Ga.MAX_LONGITUDE=Math.PI,Ga.MIN_LATITUDE=-Math.PI/2,Ga.MAX_LATITUDE=Math.PI/2;var Qn=Ga;var jn=Uint8Array,Ds=Uint16Array,Xy=Int32Array,gp=new jn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),vp=new jn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Yy=new jn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xp=function(n,e){for(var t=new Ds(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new Xy(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},_p=xp(gp,2),yp=_p.b,qy=_p.r;yp[28]=258,qy[258]=28;var Sp=xp(vp,0),Zy=Sp.b,P3=Sp.r,Eh=new Ds(32768);for(yt=0;yt<32768;++yt)Xi=(yt&43690)>>1|(yt&21845)<<1,Xi=(Xi&52428)>>2|(Xi&13107)<<2,Xi=(Xi&61680)>>4|(Xi&3855)<<4,Eh[yt]=((Xi&65280)>>8|(Xi&255)<<8)>>1;var Xi,yt,ka=(function(n,e,t){for(var i=n.length,r=0,s=new Ds(e);r<i;++r)n[r]&&++s[n[r]-1];var a=new Ds(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var c;if(t){c=new Ds(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var u=r<<4|n[r],h=e-n[r],p=a[n[r]-1]++<<h,d=p|(1<<h)-1;p<=d;++p)c[Eh[p]>>l]=u}else for(c=new Ds(i),r=0;r<i;++r)n[r]&&(c[r]=Eh[a[n[r]-1]++]>>15-n[r]);return c}),Va=new jn(288);for(yt=0;yt<144;++yt)Va[yt]=8;var yt;for(yt=144;yt<256;++yt)Va[yt]=9;var yt;for(yt=256;yt<280;++yt)Va[yt]=7;var yt;for(yt=280;yt<288;++yt)Va[yt]=8;var yt,Ap=new jn(32);for(yt=0;yt<32;++yt)Ap[yt]=5;var yt;var Ky=ka(Va,9,1);var Qy=ka(Ap,5,1),Ah=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},pi=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Th=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},jy=function(n){return(n+7)/8|0},Jy=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new jn(n.subarray(e,t))};var $y=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],mi=function(n,e,t){var i=new Error(e||$y[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,mi),!t)throw i;return i},eS=function(n,e,t,i){var r=n.length,s=i?i.length:0;if(!r||e.f&&!e.l)return t||new jn(0);var a=!t,c=a||e.i!=2,l=e.i;a&&(t=new jn(r*3));var u=function(Ve){var Mt=t.length;if(Ve>Mt){var it=new jn(Math.max(Mt*2,Ve));it.set(t),t=it}},h=e.f||0,p=e.p||0,d=e.b||0,m=e.l,y=e.d,E=e.m,x=e.n,g=r*8;do{if(!m){h=pi(n,p,1);var w=pi(n,p+1,3);if(p+=3,w)if(w==1)m=Ky,y=Qy,E=9,x=5;else if(w==2){var I=pi(n,p,31)+257,B=pi(n,p+10,15)+4,A=I+pi(n,p+5,31)+1;p+=14;for(var D=new jn(A),k=new jn(19),N=0;N<B;++N)k[Yy[N]]=pi(n,p+N*3,7);p+=B*3;for(var q=Ah(k),J=(1<<q)-1,te=ka(k,q,1),N=0;N<A;){var V=te[pi(n,p,J)];p+=V&15;var C=V>>4;if(C<16)D[N++]=C;else{var Q=0,j=0;for(C==16?(j=3+pi(n,p,3),p+=2,Q=D[N-1]):C==17?(j=3+pi(n,p,7),p+=3):C==18&&(j=11+pi(n,p,127),p+=7);j--;)D[N++]=Q}}var ue=D.subarray(0,I),de=D.subarray(I);E=Ah(ue),x=Ah(de),m=ka(ue,E,1),y=ka(de,x,1)}else mi(1);else{var C=jy(p)+4,R=n[C-4]|n[C-3]<<8,U=C+R;if(U>r){l&&mi(0);break}c&&u(d+R),t.set(n.subarray(C,U),d),e.b=d+=R,e.p=p=U*8,e.f=h;continue}if(p>g){l&&mi(0);break}}c&&u(d+131072);for(var Ee=(1<<E)-1,Ie=(1<<x)-1,Oe=p;;Oe=p){var Q=m[Th(n,p)&Ee],Ze=Q>>4;if(p+=Q&15,p>g){l&&mi(0);break}if(Q||mi(2),Ze<256)t[d++]=Ze;else if(Ze==256){Oe=p,m=null;break}else{var pt=Ze-254;if(Ze>264){var N=Ze-257,Ye=gp[N];pt=pi(n,p,(1<<Ye)-1)+yp[N],p+=Ye}var re=y[Th(n,p)&Ie],fe=re>>4;re||mi(3),p+=re&15;var de=Zy[fe];if(fe>3){var Ye=vp[fe];de+=Th(n,p)&(1<<Ye)-1,p+=Ye}if(p>g){l&&mi(0);break}c&&u(d+131072);var ve=d+pt;if(d<de){var Ge=s-de,Je=Math.min(de,ve);for(Ge+d<0&&mi(3);d<Je;++d)t[d]=i[Ge+d]}for(;d<ve;++d)t[d]=t[d-de]}}e.l=m,e.p=Oe,e.b=d,e.f=h,m&&(h=1,e.m=E,e.d=y,e.n=x)}while(!h);return d!=t.length&&a?Jy(t,0,d):t.subarray(0,d)};var tS=new jn(0);var nS=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&mi(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&mi(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Ps(n,e){return eS(n.subarray(nS(n,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var iS=typeof TextDecoder<"u"&&new TextDecoder,rS=0;try{iS.decode(tS,{stream:!0}),rS=1}catch{}var Wa=class extends Ea{constructor(e){super(e),this.type=Pt,this.outputFormat=kt,this.part=0}parse(e){let D=Math.pow(2.7182818,2.2),k=null;function N(o,f){let v=0;for(let T=0;T<65536;++T)(T==0||o[T>>3]&1<<(T&7))&&(f[v++]=T);let S=v-1;for(;v<65536;)f[v++]=0;return S}function q(o){for(let f=0;f<16384;f++)o[f]={},o[f].len=0,o[f].lit=0,o[f].p=null}let J={l:0,c:0,lc:0};function te(o,f,v,S,T){for(;v<o;)f=f<<8|_e(S,T),v+=8;v-=o,J.l=f>>v&(1<<o)-1,J.c=f,J.lc=v}let V=new Array(59);function Q(o){for(let v=0;v<=58;++v)V[v]=0;for(let v=0;v<65537;++v)V[o[v]]+=1;let f=0;for(let v=58;v>0;--v){let S=f+V[v]>>1;V[v]=f,f=S}for(let v=0;v<65537;++v){let S=o[v];S>0&&(o[v]=S|V[S]++<<6)}}function j(o,f,v,S,T,F){let b=f,H=0,G=0;for(;S<=T;S++){if(b.value-f.value>v)return!1;te(6,H,G,o,b);let W=J.l;if(H=J.c,G=J.lc,F[S]=W,W==63){if(b.value-f.value>v)throw new Error("Something wrong with hufUnpackEncTable");te(8,H,G,o,b);let K=J.l+6;if(H=J.c,G=J.lc,S+K>T+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)F[S++]=0;S--}else if(W>=59){let K=W-59+2;if(S+K>T+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)F[S++]=0;S--}}Q(F)}function ue(o){return o&63}function de(o){return o>>6}function Ee(o,f,v,S){for(;f<=v;f++){let T=de(o[f]),F=ue(o[f]);if(T>>F)throw new Error("Invalid table entry");if(F>14){let b=S[T>>F-14];if(b.len)throw new Error("Invalid table entry");if(b.lit++,b.p){let H=b.p;b.p=new Array(b.lit);for(let G=0;G<b.lit-1;++G)b.p[G]=H[G]}else b.p=new Array(1);b.p[b.lit-1]=f}else if(F){let b=0;for(let H=1<<14-F;H>0;H--){let G=S[(T<<14-F)+b];if(G.len||G.p)throw new Error("Invalid table entry");G.len=F,G.lit=f,b++}}}return!0}let Ie={c:0,lc:0};function Oe(o,f,v,S){o=o<<8|_e(v,S),f+=8,Ie.c=o,Ie.lc=f}let Ze={c:0,lc:0};function pt(o,f,v,S,T,F,b,H,G){if(o==f){S<8&&(Oe(v,S,T,F),v=Ie.c,S=Ie.lc),S-=8;let W=v>>S;if(W=new Uint8Array([W])[0],H.value+W>G)return!1;let K=b[H.value-1];for(;W-- >0;)b[H.value++]=K}else if(H.value<G)b[H.value++]=o;else return!1;Ze.c=v,Ze.lc=S}function Ye(o){return o&65535}function re(o){let f=Ye(o);return f>32767?f-65536:f}let fe={a:0,b:0};function ve(o,f){let v=re(o),T=re(f),F=v+(T&1)+(T>>1),b=F,H=F-T;fe.a=b,fe.b=H}function Ge(o,f){let v=Ye(o),S=Ye(f),T=v-(S>>1)&65535,F=S+T-32768&65535;fe.a=F,fe.b=T}function Je(o,f,v,S,T,F,b){let H=b<16384,G=v>T?T:v,W=1,K,$;for(;W<=G;)W<<=1;for(W>>=1,K=W,W>>=1;W>=1;){$=0;let X=$+F*(T-K),ae=F*W,ge=F*K,ce=S*W,le=S*K,Me,oe,ze,Ne;for(;$<=X;$+=ge){let Re=$,Te=$+S*(v-K);for(;Re<=Te;Re+=le){let Le=Re+ce,mt=Re+ae,Be=mt+ce;H?(ve(o[Re+f],o[mt+f]),Me=fe.a,ze=fe.b,ve(o[Le+f],o[Be+f]),oe=fe.a,Ne=fe.b,ve(Me,oe),o[Re+f]=fe.a,o[Le+f]=fe.b,ve(ze,Ne),o[mt+f]=fe.a,o[Be+f]=fe.b):(Ge(o[Re+f],o[mt+f]),Me=fe.a,ze=fe.b,Ge(o[Le+f],o[Be+f]),oe=fe.a,Ne=fe.b,Ge(Me,oe),o[Re+f]=fe.a,o[Le+f]=fe.b,Ge(ze,Ne),o[mt+f]=fe.a,o[Be+f]=fe.b)}if(v&W){let Le=Re+ae;H?ve(o[Re+f],o[Le+f]):Ge(o[Re+f],o[Le+f]),Me=fe.a,o[Le+f]=fe.b,o[Re+f]=Me}}if(T&W){let Re=$,Te=$+S*(v-K);for(;Re<=Te;Re+=le){let Le=Re+ce;H?ve(o[Re+f],o[Le+f]):Ge(o[Re+f],o[Le+f]),Me=fe.a,o[Le+f]=fe.b,o[Re+f]=Me}}K=W,W>>=1}return $}function Ve(o,f,v,S,T,F,b,H,G){let W=0,K=0,$=b,X=Math.trunc(S.value+(T+7)/8);for(;S.value<X;)for(Oe(W,K,v,S),W=Ie.c,K=Ie.lc;K>=14;){let ge=W>>K-14&16383,ce=f[ge];if(ce.len)K-=ce.len,pt(ce.lit,F,W,K,v,S,H,G,$),W=Ze.c,K=Ze.lc;else{if(!ce.p)throw new Error("hufDecode issues");let le;for(le=0;le<ce.lit;le++){let Me=ue(o[ce.p[le]]);for(;K<Me&&S.value<X;)Oe(W,K,v,S),W=Ie.c,K=Ie.lc;if(K>=Me&&de(o[ce.p[le]])==(W>>K-Me&(1<<Me)-1)){K-=Me,pt(ce.p[le],F,W,K,v,S,H,G,$),W=Ze.c,K=Ze.lc;break}}if(le==ce.lit)throw new Error("hufDecode issues")}}let ae=8-T&7;for(W>>=ae,K-=ae;K>0;){let ge=f[W<<14-K&16383];if(ge.len)K-=ge.len,pt(ge.lit,F,W,K,v,S,H,G,$),W=Ze.c,K=Ze.lc;else throw new Error("hufDecode issues")}return!0}function Mt(o,f,v,S,T,F){let b={value:0},H=v.value,G=me(f,v),W=me(f,v);v.value+=4;let K=me(f,v);if(v.value+=4,G<0||G>=65537||W<0||W>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let $=new Array(65537),X=new Array(16384);q(X);let ae=S-(v.value-H);if(j(o,v,ae,G,W,$),K>8*(S-(v.value-H)))throw new Error("Something wrong with hufUncompress");Ee($,G,W,X),Ve($,X,o,v,K,W,F,T,b)}function it(o,f,v){for(let S=0;S<v;++S)f[S]=o[f[S]]}function vt(o){for(let f=1;f<o.length;f++){let v=o[f-1]+o[f]-128;o[f]=v}}function St(o,f){let v=0,S=Math.floor((o.length+1)/2),T=0,F=o.length-1;for(;!(T>F||(f[T++]=o[v++],T>F));)f[T++]=o[S++]}function rt(o){let f=o.byteLength,v=new Array,S=0,T=new DataView(o);for(;f>0;){let F=T.getInt8(S++);if(F<0){let b=-F;f-=b+1;for(let H=0;H<b;H++)v.push(T.getUint8(S++))}else{let b=F;f-=2;let H=T.getUint8(S++);for(let G=0;G<b+1;G++)v.push(H)}}return v}function Yt(o,f,v,S,T,F){let b=new DataView(F.buffer),H=v[o.idx[0]].width,G=v[o.idx[0]].height,W=3,K=Math.floor(H/8),$=Math.ceil(H/8),X=Math.ceil(G/8),ae=H-($-1)*8,ge=G-(X-1)*8,ce={value:0},le=new Array(W),Me=new Array(W),oe=new Array(W),ze=new Array(W),Ne=new Array(W);for(let Te=0;Te<W;++Te)Ne[Te]=f[o.idx[Te]],le[Te]=Te<1?0:le[Te-1]+$*X,Me[Te]=new Float32Array(64),oe[Te]=new Uint16Array(64),ze[Te]=new Uint16Array($*64);for(let Te=0;Te<X;++Te){let Le=8;Te==X-1&&(Le=ge);let mt=8;for(let Ue=0;Ue<$;++Ue){Ue==$-1&&(mt=ae);for(let tt=0;tt<W;++tt)oe[tt].fill(0),oe[tt][0]=T[le[tt]++],fn(ce,S,oe[tt]),z(oe[tt],Me[tt]),Vt(Me[tt]);W==3&&ot(Me);for(let tt=0;tt<W;++tt)bt(Me[tt],ze[tt],Ue*64)}let Be=0;for(let Ue=0;Ue<W;++Ue){let tt=v[o.idx[Ue]].type;for(let $e=8*Te;$e<8*Te+Le;++$e){Be=Ne[Ue][$e];for(let Wt=0;Wt<K;++Wt){let xt=Wt*64+($e&7)*8;b.setUint16(Be+0*tt,ze[Ue][xt+0],!0),b.setUint16(Be+2*tt,ze[Ue][xt+1],!0),b.setUint16(Be+4*tt,ze[Ue][xt+2],!0),b.setUint16(Be+6*tt,ze[Ue][xt+3],!0),b.setUint16(Be+8*tt,ze[Ue][xt+4],!0),b.setUint16(Be+10*tt,ze[Ue][xt+5],!0),b.setUint16(Be+12*tt,ze[Ue][xt+6],!0),b.setUint16(Be+14*tt,ze[Ue][xt+7],!0),Be+=16*tt}}if(K!=$)for(let $e=8*Te;$e<8*Te+Le;++$e){let Wt=Ne[Ue][$e]+8*K*2*tt,xt=K*64+($e&7)*8;for(let Un=0;Un<mt;++Un)b.setUint16(Wt+Un*2*tt,ze[Ue][xt+Un],!0)}}}let Re=new Uint16Array(H);b=new DataView(F.buffer);for(let Te=0;Te<W;++Te){v[o.idx[Te]].decoded=!0;let Le=v[o.idx[Te]].type;if(v[Te].type==2)for(let mt=0;mt<G;++mt){let Be=Ne[Te][mt];for(let Ue=0;Ue<H;++Ue)Re[Ue]=b.getUint16(Be+Ue*2*Le,!0);for(let Ue=0;Ue<H;++Ue)b.setFloat32(Be+Ue*2*Le,Z(Re[Ue]),!0)}}}function Lt(o,f,v,S,T,F){let b=new DataView(F.buffer),H=v[o],G=H.width,W=H.height,K=Math.ceil(G/8),$=Math.ceil(W/8),X=Math.floor(G/8),ae=G-(K-1)*8,ge=W-($-1)*8,ce={value:0},le=0,Me=new Float32Array(64),oe=new Uint16Array(64),ze=new Uint16Array(K*64);for(let Ne=0;Ne<$;++Ne){let Re=8;Ne==$-1&&(Re=ge);for(let Te=0;Te<K;++Te)oe.fill(0),oe[0]=T[le++],fn(ce,S,oe),z(oe,Me),Vt(Me),bt(Me,ze,Te*64);for(let Te=8*Ne;Te<8*Ne+Re;++Te){let Le=f[o][Te];for(let mt=0;mt<X;++mt){let Be=mt*64+(Te&7)*8;for(let Ue=0;Ue<8;++Ue)b.setUint16(Le+Ue*2*H.type,ze[Be+Ue],!0);Le+=16*H.type}if(K!=X){let mt=X*64+(Te&7)*8;for(let Be=0;Be<ae;++Be)b.setUint16(Le+Be*2*H.type,ze[mt+Be],!0)}}}H.decoded=!0}function fn(o,f,v){let S,T=1;for(;T<64;)S=f[o.value],S==65280?T=64:S>>8==255?T+=S&255:(v[T]=S,T++),o.value++}function z(o,f){f[0]=Z(o[0]),f[1]=Z(o[1]),f[2]=Z(o[5]),f[3]=Z(o[6]),f[4]=Z(o[14]),f[5]=Z(o[15]),f[6]=Z(o[27]),f[7]=Z(o[28]),f[8]=Z(o[2]),f[9]=Z(o[4]),f[10]=Z(o[7]),f[11]=Z(o[13]),f[12]=Z(o[16]),f[13]=Z(o[26]),f[14]=Z(o[29]),f[15]=Z(o[42]),f[16]=Z(o[3]),f[17]=Z(o[8]),f[18]=Z(o[12]),f[19]=Z(o[17]),f[20]=Z(o[25]),f[21]=Z(o[30]),f[22]=Z(o[41]),f[23]=Z(o[43]),f[24]=Z(o[9]),f[25]=Z(o[11]),f[26]=Z(o[18]),f[27]=Z(o[24]),f[28]=Z(o[31]),f[29]=Z(o[40]),f[30]=Z(o[44]),f[31]=Z(o[53]),f[32]=Z(o[10]),f[33]=Z(o[19]),f[34]=Z(o[23]),f[35]=Z(o[32]),f[36]=Z(o[39]),f[37]=Z(o[45]),f[38]=Z(o[52]),f[39]=Z(o[54]),f[40]=Z(o[20]),f[41]=Z(o[22]),f[42]=Z(o[33]),f[43]=Z(o[38]),f[44]=Z(o[46]),f[45]=Z(o[51]),f[46]=Z(o[55]),f[47]=Z(o[60]),f[48]=Z(o[21]),f[49]=Z(o[34]),f[50]=Z(o[37]),f[51]=Z(o[47]),f[52]=Z(o[50]),f[53]=Z(o[56]),f[54]=Z(o[59]),f[55]=Z(o[61]),f[56]=Z(o[35]),f[57]=Z(o[36]),f[58]=Z(o[48]),f[59]=Z(o[49]),f[60]=Z(o[57]),f[61]=Z(o[58]),f[62]=Z(o[62]),f[63]=Z(o[63])}function Vt(o){let f=.5*Math.cos(.7853975),v=.5*Math.cos(3.14159/16),S=.5*Math.cos(3.14159/8),T=.5*Math.cos(3*3.14159/16),F=.5*Math.cos(5*3.14159/16),b=.5*Math.cos(3*3.14159/8),H=.5*Math.cos(7*3.14159/16),G=new Array(4),W=new Array(4),K=new Array(4),$=new Array(4);for(let X=0;X<8;++X){let ae=X*8;G[0]=S*o[ae+2],G[1]=b*o[ae+2],G[2]=S*o[ae+6],G[3]=b*o[ae+6],W[0]=v*o[ae+1]+T*o[ae+3]+F*o[ae+5]+H*o[ae+7],W[1]=T*o[ae+1]-H*o[ae+3]-v*o[ae+5]-F*o[ae+7],W[2]=F*o[ae+1]-v*o[ae+3]+H*o[ae+5]+T*o[ae+7],W[3]=H*o[ae+1]-F*o[ae+3]+T*o[ae+5]-v*o[ae+7],K[0]=f*(o[ae+0]+o[ae+4]),K[3]=f*(o[ae+0]-o[ae+4]),K[1]=G[0]+G[3],K[2]=G[1]-G[2],$[0]=K[0]+K[1],$[1]=K[3]+K[2],$[2]=K[3]-K[2],$[3]=K[0]-K[1],o[ae+0]=$[0]+W[0],o[ae+1]=$[1]+W[1],o[ae+2]=$[2]+W[2],o[ae+3]=$[3]+W[3],o[ae+4]=$[3]-W[3],o[ae+5]=$[2]-W[2],o[ae+6]=$[1]-W[1],o[ae+7]=$[0]-W[0]}for(let X=0;X<8;++X)G[0]=S*o[16+X],G[1]=b*o[16+X],G[2]=S*o[48+X],G[3]=b*o[48+X],W[0]=v*o[8+X]+T*o[24+X]+F*o[40+X]+H*o[56+X],W[1]=T*o[8+X]-H*o[24+X]-v*o[40+X]-F*o[56+X],W[2]=F*o[8+X]-v*o[24+X]+H*o[40+X]+T*o[56+X],W[3]=H*o[8+X]-F*o[24+X]+T*o[40+X]-v*o[56+X],K[0]=f*(o[X]+o[32+X]),K[3]=f*(o[X]-o[32+X]),K[1]=G[0]+G[3],K[2]=G[1]-G[2],$[0]=K[0]+K[1],$[1]=K[3]+K[2],$[2]=K[3]-K[2],$[3]=K[0]-K[1],o[0+X]=$[0]+W[0],o[8+X]=$[1]+W[1],o[16+X]=$[2]+W[2],o[24+X]=$[3]+W[3],o[32+X]=$[3]-W[3],o[40+X]=$[2]-W[2],o[48+X]=$[1]-W[1],o[56+X]=$[0]-W[0]}function ot(o){for(let f=0;f<64;++f){let v=o[0][f],S=o[1][f],T=o[2][f];o[0][f]=v+1.5747*T,o[1][f]=v-.1873*S-.4682*T,o[2][f]=v+1.8556*S}}function bt(o,f,v){for(let S=0;S<64;++S)f[v+S]=li.toHalfFloat(we(o[S]))}function we(o){return o<=1?Math.sign(o)*Math.pow(Math.abs(o),2.2):Math.sign(o)*Math.pow(D,Math.abs(o)-1)}function Dt(o){return new DataView(o.array.buffer,o.offset.value,o.size)}function M(o){let f=o.viewer.buffer.slice(o.offset.value,o.offset.value+o.size),v=new Uint8Array(rt(f)),S=new Uint8Array(v.length);return vt(v),St(v,S),new DataView(S.buffer)}function _(o){let f=o.array.slice(o.offset.value,o.offset.value+o.size),v=Ps(f),S=new Uint8Array(v.length);return vt(v),St(v,S),new DataView(S.buffer)}function Y(o){let f=o.viewer,v={value:o.offset.value},S=new Uint16Array(o.columns*o.lines*(o.inputChannels.length*o.type)),T=new Uint8Array(8192),F=0,b=new Array(o.inputChannels.length);for(let ge=0,ce=o.inputChannels.length;ge<ce;ge++)b[ge]={},b[ge].start=F,b[ge].end=b[ge].start,b[ge].nx=o.columns,b[ge].ny=o.lines,b[ge].size=o.type,F+=b[ge].nx*b[ge].ny*b[ge].size;let H=ne(f,v),G=ne(f,v);if(G>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(H<=G)for(let ge=0;ge<G-H+1;ge++)T[ge+H]=We(f,v);let W=new Uint16Array(65536),K=N(T,W),$=me(f,v);Mt(o.array,f,v,$,S,F);for(let ge=0;ge<o.inputChannels.length;++ge){let ce=b[ge];for(let le=0;le<b[ge].size;++le)Je(S,ce.start+le,ce.nx,ce.size,ce.ny,ce.nx*ce.size,K)}it(W,S,F);let X=0,ae=new Uint8Array(S.buffer.byteLength);for(let ge=0;ge<o.lines;ge++)for(let ce=0;ce<o.inputChannels.length;ce++){let le=b[ce],Me=le.nx*le.size,oe=new Uint8Array(S.buffer,le.end*2,Me*2);ae.set(oe,X),X+=Me*2,le.end+=Me}return new DataView(ae.buffer)}function ie(o){let f=o.array.slice(o.offset.value,o.offset.value+o.size),v=Ps(f),S=o.inputChannels.length*o.lines*o.columns*o.totalBytes,T=new ArrayBuffer(S),F=new DataView(T),b=0,H=0,G=new Array(4);for(let W=0;W<o.lines;W++)for(let K=0;K<o.inputChannels.length;K++){let $=0;switch(o.inputChannels[K].pixelType){case 1:G[0]=b,G[1]=G[0]+o.columns,b=G[1]+o.columns;for(let ae=0;ae<o.columns;++ae){let ge=v[G[0]++]<<8|v[G[1]++];$+=ge,F.setUint16(H,$,!0),H+=2}break;case 2:G[0]=b,G[1]=G[0]+o.columns,G[2]=G[1]+o.columns,b=G[2]+o.columns;for(let ae=0;ae<o.columns;++ae){let ge=v[G[0]++]<<24|v[G[1]++]<<16|v[G[2]++]<<8;$+=ge,F.setUint32(H,$,!0),H+=4}break}}return F}function pe(o){let f=o.array,v=o.offset.value,S=o.columns,T=o.lines,F=o.inputChannels,b=o.totalBytes,H=en.compression==="B44A_COMPRESSION",G=new Uint8Array(T*S*b),W=new Uint16Array(16),K=0;for(let $=0;$<F.length;$++){let X=F[$],ae=X.pixelType*2,ge=Math.ceil(S/X.xSampling),ce=Math.ceil(T/X.ySampling),le=X.xSampling===1&&X.ySampling===1;if(X.pixelType!==1){for(let ze=0;ze<ce;ze++)if(le){let Ne=ze*S*b+K*S;for(let Re=0;Re<ge*ae;Re++)G[Ne+Re]=f[v++]}else v+=ge*ae;K+=ae;continue}let Me=Math.ceil(ge/4),oe=Math.ceil(ce/4);for(let ze=0;ze<oe;ze++)for(let Ne=0;Ne<Me;Ne++){if(H&&f[v+2]>=52){let Re=f[v]<<8|f[v+1],Te=Re&32768?Re&32767:~Re&65535;W.fill(Te),v+=3}else{let Re=f[v]<<8|f[v+1],Te=f[v+2]>>2,Le=32<<Te,mt=Re+((f[v+2]<<4|f[v+3]>>4)&63)*(1<<Te)-Le&65535,Be=mt+((f[v+3]<<2|f[v+4]>>6)&63)*(1<<Te)-Le&65535,Ue=Be+(f[v+4]&63)*(1<<Te)-Le&65535,tt=Re+(f[v+5]>>2&63)*(1<<Te)-Le&65535,$e=mt+((f[v+5]<<4|f[v+6]>>4)&63)*(1<<Te)-Le&65535,Wt=Be+((f[v+6]<<2|f[v+7]>>6)&63)*(1<<Te)-Le&65535,xt=Ue+(f[v+7]&63)*(1<<Te)-Le&65535,Un=tt+(f[v+8]>>2&63)*(1<<Te)-Le&65535,Kr=$e+((f[v+8]<<4|f[v+9]>>4)&63)*(1<<Te)-Le&65535,ra=Wt+((f[v+9]<<2|f[v+10]>>6)&63)*(1<<Te)-Le&65535,_i=xt+(f[v+10]&63)*(1<<Te)-Le&65535,Mr=Un+(f[v+11]>>2&63)*(1<<Te)-Le&65535,Eo=Kr+((f[v+11]<<4|f[v+12]>>4)&63)*(1<<Te)-Le&65535,wo=ra+((f[v+12]<<2|f[v+13]>>6)&63)*(1<<Te)-Le&65535,Mo=_i+(f[v+13]&63)*(1<<Te)-Le&65535,sa=[Re,tt,Un,Mr,mt,$e,Kr,Eo,Be,Wt,ra,wo,Ue,xt,_i,Mo];for(let Qr=0;Qr<16;Qr++)W[Qr]=sa[Qr]&32768?sa[Qr]&32767:~sa[Qr]&65535;v+=14}if(X.pLinear){if(k===null){k=new Uint16Array(65536);for(let Re=0;Re<65536;Re++)if((Re&31744)===31744||Re>32768)k[Re]=0;else{let Te=Z(Re);k[Re]=Te<=0?0:li.toHalfFloat(8*Math.log(Te))}}for(let Re=0;Re<16;Re++)W[Re]=k[W[Re]]}for(let Re=0;Re<4;Re++){let Te=ze*4+Re;if(!(Te>=ce))for(let Le=0;Le<4;Le++){let mt=Ne*4+Le;if(mt>=ge)continue;let Be=W[Re*4+Le];for(let Ue=0;Ue<X.ySampling;Ue++){let tt=Te*X.ySampling+Ue;if(!(tt>=T))for(let $e=0;$e<X.xSampling;$e++){let Wt=mt*X.xSampling+$e;if(Wt>=S)continue;let xt=tt*S*b+K*S+Wt*2;G[xt]=Be&255,G[xt+1]=Be>>8&255}}}}}K+=2}return new DataView(G.buffer)}function xe(o){let f=o.viewer,v={value:o.offset.value},S=new Uint8Array(o.columns*o.lines*(o.inputChannels.length*o.type*2)),T={version:Fe(f,v),unknownUncompressedSize:Fe(f,v),unknownCompressedSize:Fe(f,v),acCompressedSize:Fe(f,v),dcCompressedSize:Fe(f,v),rleCompressedSize:Fe(f,v),rleUncompressedSize:Fe(f,v),rleRawSize:Fe(f,v),totalAcUncompressedCount:Fe(f,v),totalDcUncompressedCount:Fe(f,v),acCompression:Fe(f,v)};if(T.version<2)throw new Error("EXRLoader.parse: "+en.compression+" version "+T.version+" is unsupported");let F=new Array,b=ne(f,v)-2;for(;b>0;){let ce=ye(f.buffer,v),le=We(f,v),Me=le>>2&3,oe=(le>>4)-1,ze=new Int8Array([oe])[0],Ne=We(f,v);F.push({name:ce,index:ze,type:Ne,compression:Me}),b-=ce.length+3}let H=en.channels,G=new Array(o.inputChannels.length);for(let ce=0;ce<o.inputChannels.length;++ce){let le=G[ce]={},Me=H[ce];le.name=Me.name,le.compression=0,le.decoded=!1,le.type=Me.pixelType,le.pLinear=Me.pLinear,le.width=o.columns,le.height=o.lines}let W={idx:new Array(3)};for(let ce=0;ce<o.inputChannels.length;++ce){let le=G[ce],Me=le.name.lastIndexOf("."),oe=Me>=0?le.name.substring(Me+1):le.name;for(let ze=0;ze<F.length;++ze){let Ne=F[ze];oe===Ne.name&&le.type===Ne.type&&(le.compression=Ne.compression,Ne.index>=0&&(W.idx[Ne.index]=ce),le.offset=ce)}}let K,$,X;if(T.acCompressedSize>0)switch(T.acCompression){case 0:K=new Uint16Array(T.totalAcUncompressedCount),Mt(o.array,f,v,T.acCompressedSize,K,T.totalAcUncompressedCount);break;case 1:let ce=o.array.slice(v.value,v.value+T.totalAcUncompressedCount),le=Ps(ce);K=new Uint16Array(le.buffer),v.value+=T.totalAcUncompressedCount;break}if(T.dcCompressedSize>0){let ce={array:o.array,offset:v,size:T.dcCompressedSize};$=new Uint16Array(_(ce).buffer),v.value+=T.dcCompressedSize}if(T.rleRawSize>0){let ce=o.array.slice(v.value,v.value+T.rleCompressedSize),le=Ps(ce);X=rt(le.buffer),v.value+=T.rleCompressedSize}let ae=0,ge=new Array(G.length);for(let ce=0;ce<ge.length;++ce)ge[ce]=new Array;for(let ce=0;ce<o.lines;++ce)for(let le=0;le<G.length;++le)ge[le].push(ae),ae+=G[le].width*o.type*2;W.idx[0]!==void 0&&G[W.idx[0]]&&Yt(W,ge,G,K,$,S);for(let ce=0;ce<G.length;++ce){let le=G[ce];if(!le.decoded)switch(le.compression){case 2:let Me=0,oe=0;for(let ze=0;ze<o.lines;++ze){let Ne=ge[ce][Me];for(let Re=0;Re<le.width;++Re){for(let Te=0;Te<2*le.type;++Te)S[Ne++]=X[oe+Te*le.width*le.height];oe++}Me++}break;case 1:Lt(ce,ge,G,K,$,S);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(S.buffer)}function ye(o,f){let v=new Uint8Array(o),S=0;for(;v[f.value+S]!=0;)S+=1;let T=new TextDecoder().decode(v.slice(f.value,f.value+S));return f.value=f.value+S+1,T}function ee(o,f,v){let S=new TextDecoder().decode(new Uint8Array(o).slice(f.value,f.value+v));return f.value=f.value+v,S}function se(o,f){let v=Ae(o,f),S=me(o,f);return[v,S]}function Ce(o,f){let v=me(o,f),S=me(o,f);return[v,S]}function Ae(o,f){let v=o.getInt32(f.value,!0);return f.value=f.value+4,v}function me(o,f){let v=o.getUint32(f.value,!0);return f.value=f.value+4,v}function _e(o,f){let v=o[f.value];return f.value=f.value+1,v}function We(o,f){let v=o.getUint8(f.value);return f.value=f.value+1,v}let Fe=function(o,f){let v=Number(o.getBigInt64(f.value,!0));return f.value+=8,v};function Ke(o,f){let v=o.getFloat32(f.value,!0);return f.value+=4,v}function O(o,f){return li.toHalfFloat(Ke(o,f))}function Z(o){let f=(o&31744)>>10,v=o&1023;return(o>>15?-1:1)*(f?f===31?v?NaN:1/0:Math.pow(2,f-15)*(1+v/1024):6103515625e-14*(v/1024))}function ne(o,f){let v=o.getUint16(f.value,!0);return f.value+=2,v}function Pe(o,f){return Z(ne(o,f))}function Se(o,f,v,S){let T=v.value,F=[];for(;v.value<T+S-1;){let b=ye(f,v),H=Ae(o,v),G=We(o,v);v.value+=3;let W=Ae(o,v),K=Ae(o,v);F.push({name:b,pixelType:H,pLinear:G,xSampling:W,ySampling:K})}return v.value+=1,F}function he(o,f){let v=Ke(o,f),S=Ke(o,f),T=Ke(o,f),F=Ke(o,f),b=Ke(o,f),H=Ke(o,f),G=Ke(o,f),W=Ke(o,f);return{redX:v,redY:S,greenX:T,greenY:F,blueX:b,blueY:H,whiteX:G,whiteY:W}}function He(o,f){let v=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],S=We(o,f);return v[S]}function nt(o,f){let v=Ae(o,f),S=Ae(o,f),T=Ae(o,f),F=Ae(o,f);return{xMin:v,yMin:S,xMax:T,yMax:F}}function zt(o,f){let v=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],S=We(o,f);return v[S]}function At(o,f){let v=["ENVMAP_LATLONG","ENVMAP_CUBE"],S=We(o,f);return v[S]}function ti(o,f){let v=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],S=["ROUND_DOWN","ROUND_UP"],T=me(o,f),F=me(o,f),b=We(o,f);return{xSize:T,ySize:F,levelMode:v[b&15],roundingMode:S[b>>4]}}function Yn(o,f){let v=Ke(o,f),S=Ke(o,f);return[v,S]}function na(o,f){let v=Ke(o,f),S=Ke(o,f),T=Ke(o,f);return[v,S,T]}function Xl(o,f,v,S,T){if(S==="string"||S==="stringvector"||S==="iccProfile")return ee(f,v,T);if(S==="chlist")return Se(o,f,v,T);if(S==="chromaticities")return he(o,v);if(S==="compression")return He(o,v);if(S==="box2i")return nt(o,v);if(S==="envmap")return At(o,v);if(S==="tiledesc")return ti(o,v);if(S==="lineOrder")return zt(o,v);if(S==="float")return Ke(o,v);if(S==="v2f")return Yn(o,v);if(S==="v3f")return na(o,v);if(S==="int")return Ae(o,v);if(S==="rational")return se(o,v);if(S==="timecode")return Ce(o,v);if(S==="preview"||S==="deepImageState"||S==="idmanifest")return v.value+=T,"skipped";v.value+=T}function go(o,f){let v=Math.log2(o);return f=="ROUND_DOWN"?Math.floor(v):Math.ceil(v)}function vo(o,f,v){let S=0;switch(o.levelMode){case"ONE_LEVEL":S=1;break;case"MIPMAP_LEVELS":S=go(Math.max(f,v),o.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return S}function xi(o,f,v,S){let T=new Array(o);for(let F=0;F<o;F++){let b=1<<F,H=f/b|0;S=="ROUND_UP"&&H*b<f&&(H+=1);let G=Math.max(H,1);T[F]=(G+v-1)/v|0}return T}function ia(){let o=this,f=o.offset,v={value:0};for(let S=0;S<o.tileCount;S++){let T=Ae(o.viewer,f),F=Ae(o.viewer,f);f.value+=8,o.size=me(o.viewer,f);let b=T*o.blockWidth,H=F*o.blockHeight;o.columns=b+o.blockWidth>o.width?o.width-b:o.blockWidth,o.lines=H+o.blockHeight>o.height?o.height-H:o.blockHeight;let G=o.columns*o.totalBytes,K=o.size<o.lines*G?o.uncompress(o):Dt(o);f.value+=o.size;for(let $=0;$<o.lines;$++){let X=$*o.columns*o.totalBytes;for(let ae=0;ae<o.inputChannels.length;ae++){let ge=en.channels[ae].name,ce=o.channelByteOffsets[ge]*o.columns,le=o.decodeChannels[ge];if(le===void 0)continue;v.value=X+ce;let Me=(o.height-(1+H+$))*o.outLineWidth;for(let oe=0;oe<o.columns;oe++){let ze=Me+(oe+b)*o.outputChannels+le;o.byteArray[ze]=o.getter(K,v)}}}}}function xo(){let o=this,f=o.offset,v={value:0};for(let S=0;S<o.height/o.blockHeight;S++){let T=Ae(o.viewer,f)-en.dataWindow.yMin;o.size=me(o.viewer,f),o.lines=T+o.blockHeight>o.height?o.height-T:o.blockHeight;let F=o.columns*o.totalBytes,H=o.size<o.lines*F?o.uncompress(o):Dt(o);f.value+=o.size;for(let G=0;G<o.blockHeight;G++){let W=S*o.blockHeight,K=G+o.scanOrder(W);if(K>=o.height)continue;let $=G*F,X=(o.height-1-K)*o.outLineWidth;for(let ae=0;ae<o.inputChannels.length;ae++){let ge=en.channels[ae].name,ce=o.channelByteOffsets[ge]*o.columns,le=o.decodeChannels[ge];if(le!==void 0){v.value=$+ce;for(let Me=0;Me<o.columns;Me++){let oe=X+Me*o.outputChannels+le;o.byteArray[oe]=o.getter(H,v)}}}}}}function _o(){let o=this,f=o.chunkOffsets,v={value:0};for(let S=0;S<f.length;S++){let T={value:f[S]};T.value+=4;let F=Ae(o.viewer,T)-en.dataWindow.yMin;o.size=me(o.viewer,T),o.lines=F+o.blockHeight>o.height?o.height-F:o.blockHeight;let b=o.columns*o.totalBytes,H=o.size<o.lines*b,G=o.offset;o.offset=T;let W=H?o.uncompress(o):Dt(o);o.offset=G;for(let K=0;K<o.blockHeight;K++){let $=K+F;if($>=o.height)continue;let X=K*b,ae=(o.height-1-$)*o.outLineWidth;for(let ge=0;ge<o.inputChannels.length;ge++){let ce=en.channels[ge].name,le=o.channelByteOffsets[ce]*o.columns,Me=o.decodeChannels[ce];if(Me!==void 0){v.value=X+le;for(let oe=0;oe<o.columns;oe++){let ze=ae+oe*o.outputChannels+Me;o.byteArray[ze]=o.getter(W,v)}}}}}}function Er(o,f,v,S){if(v===0)return null;let T=o.slice(f,f+v);switch(S){case"NO_COMPRESSION":return new DataView(T.buffer,T.byteOffset,T.byteLength);case"RLE_COMPRESSION":{let F=new Uint8Array(rt(T.buffer.slice(T.byteOffset,T.byteOffset+T.byteLength))),b=new Uint8Array(F.length);return vt(F),St(F,b),new DataView(b.buffer)}case"ZIPS_COMPRESSION":{let F=Ps(T),b=new Uint8Array(F.length);return vt(F),St(F,b),new DataView(b.buffer)}default:throw new Error("EXRLoader.parse: "+S+" is unsupported for deep data")}}function yo(){let o=this,f=o.chunkOffsets,v=o.width,S=o.height,T=o.deepChannels,F=en.compression,b=o.multiPart,H=o.decodeChannels,G=o.outputChannels,W=o.byteArray instanceof Uint16Array,K=-1;for(let $=0;$<T.length;$++)if(T[$].name==="A"){K=$;break}for(let $=0;$<f.length;$++){let X={value:f[$]};b&&(X.value+=4);let ae=Ae(o.viewer,X)-en.dataWindow.yMin,ge=Fe(o.viewer,X),ce=Fe(o.viewer,X);Fe(o.viewer,X);let le=Er(o.array,X.value,ge,F);if(X.value+=ge,le===null)continue;let Me=new Uint32Array(v);for(let Le=0;Le<v;Le++)Me[Le]=le.getUint32(Le*4,!0);let oe=Me[v-1];if(oe===0){X.value+=ce;continue}let ze=Er(o.array,X.value,ce,F),Ne=[],Re=0;for(let Le=0;Le<T.length;Le++)Ne.push(Re),Re+=oe*T[Le].bytesPerSample;let Te=(S-1-ae)*o.outLineWidth;for(let Le=0;Le<v;Le++){let mt=Le===0?0:Me[Le-1],Ue=Me[Le]-mt;if(Ue===0)continue;let tt=new Float32Array(G),$e=0;for(let xt=0;xt<Ue;xt++){let Un=mt+xt,Kr=1-$e;if(Kr<=0)break;let ra=1;if(K>=0){let _i=T[K].bytesPerSample,Mr=Ne[K]+Un*_i;ra=_i===2?Z(ze.getUint16(Mr,!0)):ze.getFloat32(Mr,!0)}for(let _i=0;_i<T.length;_i++){let Mr=T[_i],Eo=H[Mr.name];if(Eo===void 0)continue;let wo=Mr.bytesPerSample,Mo=Ne[_i]+Un*wo,sa=wo===2?Z(ze.getUint16(Mo,!0)):ze.getFloat32(Mo,!0);tt[Eo]+=sa*Kr}$e+=ra*Kr}H.A!==void 0&&(tt[H.A]=$e);let Wt=Te+Le*G;for(let xt=0;xt<G;xt++)o.byteArray[Wt+xt]=W?li.toHalfFloat(tt[xt]):tt[xt]}}}function wr(o,f,v){let S={},T=!1;for(;;){let F=ye(f,v);if(F==="")break;T=!0;let b=ye(f,v),H=me(o,v),G=Xl(o,f,v,b,H);G===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${b}'.`):S[F]=G}return T?S:null}function So(o,f,v){if(o.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");let S=o.getUint8(4),T=o.getUint8(5),F={singleTile:!!(T&2),longName:!!(T&4),deepFormat:!!(T&8),multiPart:!!(T&16)};v.value=8;let b=[];if(F.multiPart){for(;;){let H=wr(o,f,v);if(H===null)break;H.version=S,H.spec=F,b.push(H)}if(b.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{let H=wr(o,f,v);H.version=S,H.spec=F,b.push(H)}return b}function Ao(o,f,v,S,T,F){let b={size:0,viewer:f,array:v,offset:S,width:o.dataWindow.xMax-o.dataWindow.xMin+1,height:o.dataWindow.yMax-o.dataWindow.yMin+1,inputChannels:o.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:ln};switch(o.compression){case"NO_COMPRESSION":b.blockHeight=1,b.uncompress=Dt;break;case"RLE_COMPRESSION":b.blockHeight=1,b.uncompress=M;break;case"ZIPS_COMPRESSION":b.blockHeight=1,b.uncompress=_;break;case"ZIP_COMPRESSION":b.blockHeight=16,b.uncompress=_;break;case"PIZ_COMPRESSION":b.blockHeight=32,b.uncompress=Y;break;case"PXR24_COMPRESSION":b.blockHeight=16,b.uncompress=ie;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":b.blockHeight=32,b.uncompress=pe;break;case"DWAA_COMPRESSION":b.blockHeight=32,b.uncompress=xe;break;case"DWAB_COMPRESSION":b.blockHeight=256,b.uncompress=xe;break;default:throw new Error("EXRLoader.parse: "+o.compression+" is unsupported")}let H={};for(let X of o.channels)switch(X.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":H[X.name]=!0,b.type=X.pixelType}let G=!1,W=!1;if(H.Y&&H.RY&&H.BY)b.outputChannels=4,b.yCbCr=!0;else if(H.R&&H.G&&H.B)b.outputChannels=4;else if(H.Y)b.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(b.outputChannels){case 4:F==kt?(G=!H.A,b.format=kt,b.colorSpace=ln,b.outputChannels=4,b.decodeChannels={R:0,G:1,B:2,A:3}):F==Rn?(b.format=Rn,b.colorSpace=ln,b.outputChannels=2,b.decodeChannels={R:0,G:1}):F==Tn?(b.format=Tn,b.colorSpace=ln,b.outputChannels=1,b.decodeChannels={R:0}):W=!0;break;case 1:F==kt?(G=!0,b.format=kt,b.colorSpace=ln,b.outputChannels=4,b.shouldExpand=!0,b.decodeChannels={Y:0}):F==Rn?(b.format=Rn,b.colorSpace=ln,b.outputChannels=2,b.shouldExpand=!0,b.decodeChannels={Y:0}):F==Tn?(b.format=Tn,b.colorSpace=ln,b.outputChannels=1,b.decodeChannels={Y:0}):W=!0;break;default:W=!0}if(W)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(b.yCbCr&&(b.format=kt,b.outputChannels=4,b.decodeChannels={Y:0,RY:1,BY:2},G=!0),b.type==1)switch(T){case Gt:b.getter=Pe;break;case Pt:b.getter=ne;break}else if(b.type==2)switch(T){case Gt:b.getter=Ke;break;case Pt:b.getter=O}else throw new Error("EXRLoader.parse: unsupported pixelType "+b.type+" for "+o.compression+".");b.columns=b.width;let K=b.width*b.height*b.outputChannels;switch(T){case Gt:b.byteArray=new Float32Array(K),G&&b.byteArray.fill(1,0,K);break;case Pt:b.byteArray=new Uint16Array(K),G&&b.byteArray.fill(15360,0,K);break;default:console.error("THREE.EXRLoader: unsupported type: ",T);break}let $=0;for(let X of o.channels)b.decodeChannels[X.name]!==void 0&&(b.channelByteOffsets[X.name]=$),$+=X.pixelType*2;if(b.totalBytes=$,b.outLineWidth=b.width*b.outputChannels,o.lineOrder==="INCREASING_Y"?b.scanOrder=X=>X:b.scanOrder=X=>b.height-1-X,o.spec.deepFormat){b.deepChannels=[];let X=0;for(let ae of o.channels){let ge=ae.pixelType===0?4:ae.pixelType*2;b.deepChannels.push({name:ae.name,pixelType:ae.pixelType,bytesPerSample:ge}),X+=ge}b.deepBytesPerSample=X,b.chunkOffsets=o._chunkOffsets,b.multiPart=o.spec.multiPart,b.decode=yo.bind(b)}else if(o.spec.singleTile){b.blockHeight=o.tiles.ySize,b.blockWidth=o.tiles.xSize;let X=vo(o.tiles,b.width,b.height),ae=xi(X,b.width,o.tiles.xSize,o.tiles.roundingMode),ge=xi(X,b.height,o.tiles.ySize,o.tiles.roundingMode);b.tileCount=ae[0]*ge[0];for(let ce=0;ce<X;ce++)for(let le=0;le<ge[ce];le++)for(let Me=0;Me<ae[ce];Me++)Fe(f,S);b.decode=ia.bind(b)}else if(o.spec.multiPart)b.blockWidth=b.width,b.chunkOffsets=o._chunkOffsets,b.decode=_o.bind(b);else{b.blockWidth=b.width;let X=Math.ceil(b.height/b.blockHeight);for(let ae=0;ae<X;ae++)Fe(f,S);b.decode=xo.bind(b)}return b}let Yr={value:0},qr=new DataView(e),Yl=new Uint8Array(e),Zr=So(qr,e,Yr),To=Math.max(0,Math.min(this.part,Zr.length-1)),en=Zr[To];if(en.spec.multiPart||en.spec.deepFormat)for(let o=0;o<Zr.length;o++){let f=Zr[o].chunkCount;if(o===To){en._chunkOffsets=[];for(let v=0;v<f;v++)en._chunkOffsets.push(Fe(qr,Yr))}else for(let v=0;v<f;v++)Fe(qr,Yr)}let Mn=Ao(en,qr,Yl,Yr,this.type,this.outputFormat);if(Mn.decode(),Mn.shouldExpand){let o=Mn.byteArray;if(this.outputFormat==kt)for(let f=0;f<o.length;f+=4)o[f+2]=o[f+1]=o[f];else if(this.outputFormat==Rn)for(let f=0;f<o.length;f+=2)o[f+1]=o[f]}if(Mn.yCbCr){let o=Mn.byteArray,f=Mn.width*Mn.height;if(this.type===Pt)for(let v=0;v<f;v++){let S=v*4,T=Z(o[S]),F=Z(o[S+1]),b=Z(o[S+2]),H=(1+F)*T,G=(1+b)*T,W=(T-H*.2126-G*.0722)/.7152;o[S]=li.toHalfFloat(Math.max(0,H)),o[S+1]=li.toHalfFloat(Math.max(0,W)),o[S+2]=li.toHalfFloat(Math.max(0,G))}else for(let v=0;v<f;v++){let S=v*4,T=o[S],F=o[S+1],b=o[S+2],H=(1+F)*T,G=(1+b)*T;o[S]=Math.max(0,H),o[S+1]=Math.max(0,(T-H*.2126-G*.0722)/.7152),o[S+2]=Math.max(0,G)}}return{header:en,width:Mn.width,height:Mn.height,data:Mn.byteArray,format:Mn.format,colorSpace:Mn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}load(e,t,i,r){function s(a,c){a.colorSpace=c.colorSpace,a.minFilter=et,a.magFilter=et,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,c)}return super.load(e,s,i,r)}};var Rh=class extends an{load(e,t,i,r){let s=new pr(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{Sr(a instanceof ArrayBuffer);try{t(a)}catch(c){r!=null?r(c):console.error(c),this.manager.itemError(e)}},i,r)}};function Gp(n){return n instanceof Cs?n.getContext().getExtension("OES_texture_float_linear")!=null:n.backend.hasFeature?.("float32-filterable")??!1}var sS="This is not an object",aS="This is not a Float16Array object",Tp="This constructor is not a subclass of Float16Array",kp="The constructor property value is not an object",oS="Species constructor didn't return TypedArray object",cS="Derived constructor created TypedArray object which was too small length",Za="Attempting to access detached ArrayBuffer",Ih="Cannot convert undefined or null to object",Dh="Cannot mix BigInt and other types, use explicit conversions",Ep="@@iterator property is not callable",wp="Reduce of empty array with no initial value",lS="The comparison function must be either a function or undefined",wh="Offset is out of bounds";function Nt(n){return(e,...t)=>Dn(n,e,t)}function Fs(n,e){return Nt(Ls(n,e).get)}var{apply:Dn,construct:Ya,defineProperty:uS,get:Mh,getOwnPropertyDescriptor:Ls,getPrototypeOf:Ja,has:Ph,ownKeys:Vp,set:Mp,setPrototypeOf:Wp}=Reflect,hS=Proxy,{EPSILON:dS,MAX_SAFE_INTEGER:bp,isFinite:Xp,isNaN:Us}=Number,{iterator:Ii,species:fS,toStringTag:Fh,for:pS}=Symbol,Os=Object,{create:Ml,defineProperty:$a,freeze:mS,is:Cp}=Os,Nh=Os.prototype,gS=Nh.__lookupGetter__?Nt(Nh.__lookupGetter__):(n,e)=>{if(n==null)throw Ht(Ih);let t=Os(n);do{let i=Ls(t,e);if(i!==void 0)return qi(i,"get")?i.get:void 0}while((t=Ja(t))!==null)},qi=Os.hasOwn||Nt(Nh.hasOwnProperty),Yp=Array,qp=Yp.isArray,bl=Yp.prototype,vS=Nt(bl.join),xS=Nt(bl.push),_S=Nt(bl.toLocaleString),Hh=bl[Ii],yS=Nt(Hh),{abs:SS,trunc:Zp}=Math,Cl=ArrayBuffer,AS=Cl.isView,Kp=Cl.prototype,TS=Nt(Kp.slice),ES=Fs(Kp,"byteLength"),Lh=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,wS=Lh&&Fs(Lh.prototype,"byteLength"),zh=Ja(Uint8Array),MS=zh.from,cn=zh.prototype,bS=cn[Ii],CS=Nt(cn.keys),RS=Nt(cn.values),IS=Nt(cn.entries),DS=Nt(cn.set),Rp=Nt(cn.reverse),PS=Nt(cn.fill),NS=Nt(cn.copyWithin),Ip=Nt(cn.sort),Xa=Nt(cn.slice),LS=Nt(cn.subarray),on=Fs(cn,"buffer"),Gr=Fs(cn,"byteOffset"),wt=Fs(cn,"length"),Qp=Fs(cn,Fh),US=Uint8Array,Wn=Uint16Array,Dp=(...n)=>Dn(MS,Wn,n),Gh=Uint32Array,OS=Float32Array,kr=Ja([][Ii]()),Rl=Nt(kr.next),BS=Nt((function*(){})().next),FS=Ja(kr),HS=DataView.prototype,zS=Nt(HS.getUint16),Ht=TypeError,bh=RangeError,jp=WeakSet,Jp=jp.prototype,GS=Nt(Jp.add),kS=Nt(Jp.has),Il=WeakMap,kh=Il.prototype,yl=Nt(kh.get),VS=Nt(kh.has),Vh=Nt(kh.set),$p=new Il,WS=Ml(null,{next:{value:function(){let n=yl($p,this);return Rl(n)}},[Ii]:{value:function(){return this}}});function qa(n){if(n[Ii]===Hh&&kr.next===Rl)return n;let e=Ml(WS);return Vh($p,e,yS(n)),e}var em=new Il,tm=Ml(FS,{next:{value:function(){let n=yl(em,this);return BS(n)},writable:!0,configurable:!0}});for(let n of Vp(kr))n!=="next"&&$a(tm,n,Ls(kr,n));function Pp(n){let e=Ml(tm);return Vh(em,e,n),e}function Sl(n){return n!==null&&typeof n=="object"||typeof n=="function"}function Np(n){return n!==null&&typeof n=="object"}function Al(n){return Qp(n)!==void 0}function Uh(n){let e=Qp(n);return e==="BigInt64Array"||e==="BigUint64Array"}function XS(n){try{return qp(n)?!1:(ES(n),!0)}catch{return!1}}function nm(n){if(Lh===null)return!1;try{return wS(n),!0}catch{return!1}}function YS(n){return XS(n)||nm(n)}function Lp(n){return qp(n)?n[Ii]===Hh&&kr.next===Rl:!1}function qS(n){return Al(n)?n[Ii]===bS&&kr.next===Rl:!1}function gl(n){if(typeof n!="string")return!1;let e=+n;return n!==e+""||!Xp(e)?!1:e===Zp(e)}var Tl=pS("__Float16Array__");function ZS(n){if(!Np(n))return!1;let e=Ja(n);if(!Np(e))return!1;let t=e.constructor;if(t===void 0)return!1;if(!Sl(t))throw Ht(kp);return Ph(t,Tl)}var Oh=1/dS;function KS(n){return n+Oh-Oh}var im=6103515625e-14,QS=65504,rm=.0009765625,Up=rm*im,jS=rm*Oh;function JS(n){let e=+n;if(!Xp(e)||e===0)return e;let t=e>0?1:-1,i=SS(e);if(i<im)return t*KS(i/Up)*Up;let r=(1+jS)*i,s=r-(r-i);return s>QS||Us(s)?t*(1/0):t*s}var sm=new Cl(4),am=new OS(sm),om=new Gh(sm),gi=new Wn(512),vi=new US(512);for(let n=0;n<256;++n){let e=n-127;e<-24?(gi[n]=0,gi[n|256]=32768,vi[n]=24,vi[n|256]=24):e<-14?(gi[n]=1024>>-e-14,gi[n|256]=1024>>-e-14|32768,vi[n]=-e-1,vi[n|256]=-e-1):e<=15?(gi[n]=e+15<<10,gi[n|256]=e+15<<10|32768,vi[n]=13,vi[n|256]=13):e<128?(gi[n]=31744,gi[n|256]=64512,vi[n]=24,vi[n|256]=24):(gi[n]=31744,gi[n|256]=64512,vi[n]=13,vi[n|256]=13)}function Ri(n){am[0]=JS(n);let e=om[0],t=e>>23&511;return gi[t]+((e&8388607)>>vi[t])}var Wh=new Gh(2048);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Wh[n]=e|t}for(let n=1024;n<2048;++n)Wh[n]=939524096+(n-1024<<13);var Hs=new Gh(64);for(let n=1;n<31;++n)Hs[n]=n<<23;Hs[31]=1199570944;Hs[32]=2147483648;for(let n=33;n<63;++n)Hs[n]=2147483648+(n-32<<23);Hs[63]=3347054592;var cm=new Wn(64);for(let n=1;n<64;++n)n!==32&&(cm[n]=1024);function Rt(n){let e=n>>10;return om[0]=Wh[cm[e]+(n&1023)]+Hs[e],am[0]}function Yi(n){let e=+n;return Us(e)||e===0?0:Zp(e)}function Ch(n){let e=Yi(n);return e<0?0:e<bp?e:bp}function vl(n,e){if(!Sl(n))throw Ht(sS);let t=n.constructor;if(t===void 0)return e;if(!Sl(t))throw Ht(kp);return t[fS]??e}function Ka(n){if(nm(n))return!1;try{return TS(n,0,0),!1}catch{}return!0}function Op(n,e){let t=Us(n),i=Us(e);if(t&&i)return 0;if(t)return 1;if(i||n<e)return-1;if(n>e)return 1;if(n===0&&e===0){let r=Cp(n,0),s=Cp(e,0);if(!r&&s)return-1;if(r&&!s)return 1}return 0}var Xh=2,El=new Il;function Ns(n){return VS(El,n)||!AS(n)&&ZS(n)}function Et(n){if(!Ns(n))throw Ht(aS)}function xl(n,e){let t=Ns(n),i=Al(n);if(!t&&!i)throw Ht(oS);if(typeof e=="number"){let r;if(t){let s=at(n);r=wt(s)}else r=wt(n);if(r<e)throw Ht(cS)}if(Uh(n))throw Ht(Dh)}function at(n){let e=yl(El,n);if(e!==void 0){let r=on(e);if(Ka(r))throw Ht(Za);return e}let t=n.buffer;if(Ka(t))throw Ht(Za);let i=Ya(Jn,[t,n.byteOffset,n.length],n.constructor);return yl(El,i)}function Bp(n){let e=wt(n),t=[];for(let i=0;i<e;++i)t[i]=Rt(n[i]);return t}var lm=new jp;for(let n of Vp(cn)){if(n===Fh)continue;let e=Ls(cn,n);qi(e,"get")&&typeof e.get=="function"&&GS(lm,e.get)}var $S=mS({get(n,e,t){return gl(e)&&qi(n,e)?Rt(Mh(n,e)):kS(lm,gS(n,e))?Mh(n,e):Mh(n,e,t)},set(n,e,t,i){return gl(e)&&qi(n,e)?Mp(n,e,Ri(t)):Mp(n,e,t,i)},getOwnPropertyDescriptor(n,e){if(gl(e)&&qi(n,e)){let t=Ls(n,e);return t.value=Rt(t.value),t}return Ls(n,e)},defineProperty(n,e,t){return gl(e)&&qi(n,e)&&qi(t,"value")&&(t.value=Ri(t.value)),uS(n,e,t)}}),Jn=class n{constructor(e,t,i){let r;if(Ns(e))r=Ya(Wn,[at(e)],new.target);else if(Sl(e)&&!YS(e)){let a,c;if(Al(e)){a=e,c=wt(e);let l=on(e);if(Ka(l))throw Ht(Za);if(Uh(e))throw Ht(Dh);let u=new Cl(c*Xh);r=Ya(Wn,[u],new.target)}else{let l=e[Ii];if(l!=null&&typeof l!="function")throw Ht(Ep);l!=null?Lp(e)?(a=e,c=e.length):(a=[...e],c=a.length):(a=e,c=Ch(a.length)),r=Ya(Wn,[c],new.target)}for(let l=0;l<c;++l)r[l]=Ri(a[l])}else r=Ya(Wn,arguments,new.target);let s=new hS(r,$S);return Vh(El,s,r),s}static from(e,...t){let i=this;if(!Ph(i,Tl))throw Ht(Tp);if(i===n){if(Ns(e)&&t.length===0){let h=at(e),p=new Wn(on(h),Gr(h),wt(h));return new n(on(Xa(p)))}if(t.length===0)return new n(on(Dp(e,Ri)));let l=t[0],u=t[1];return new n(on(Dp(e,function(h,...p){return Ri(Dn(l,this,[h,...qa(p)]))},u)))}let r,s,a=e[Ii];if(a!=null&&typeof a!="function")throw Ht(Ep);if(a!=null)Lp(e)?(r=e,s=e.length):qS(e)?(r=e,s=wt(e)):(r=[...e],s=r.length);else{if(e==null)throw Ht(Ih);r=Os(e),s=Ch(r.length)}let c=new i(s);if(t.length===0)for(let l=0;l<s;++l)c[l]=r[l];else{let l=t[0],u=t[1];for(let h=0;h<s;++h)c[h]=Dn(l,u,[r[h],h])}return c}static of(...e){let t=this;if(!Ph(t,Tl))throw Ht(Tp);let i=e.length;if(t===n){let s=new n(i),a=at(s);for(let c=0;c<i;++c)a[c]=Ri(e[c]);return s}let r=new t(i);for(let s=0;s<i;++s)r[s]=e[s];return r}keys(){Et(this);let e=at(this);return CS(e)}values(){Et(this);let e=at(this);return Pp((function*(){for(let t of RS(e))yield Rt(t)})())}entries(){Et(this);let e=at(this);return Pp((function*(){for(let[t,i]of IS(e))yield[t,Rt(i)]})())}at(e){Et(this);let t=at(this),i=wt(t),r=Yi(e),s=r>=0?r:i+r;if(!(s<0||s>=i))return Rt(t[s])}with(e,t){Et(this);let i=at(this),r=wt(i),s=Yi(e),a=s>=0?s:r+s,c=+t;if(a<0||a>=r)throw bh(wh);let l=new Wn(on(i),Gr(i),wt(i)),u=new n(on(Xa(l))),h=at(u);return h[a]=Ri(c),u}map(e,...t){Et(this);let i=at(this),r=wt(i),s=t[0],a=vl(i,n);if(a===n){let l=new n(r),u=at(l);for(let h=0;h<r;++h){let p=Rt(i[h]);u[h]=Ri(Dn(e,s,[p,h,this]))}return l}let c=new a(r);xl(c,r);for(let l=0;l<r;++l){let u=Rt(i[l]);c[l]=Dn(e,s,[u,l,this])}return c}filter(e,...t){Et(this);let i=at(this),r=wt(i),s=t[0],a=[];for(let u=0;u<r;++u){let h=Rt(i[u]);Dn(e,s,[h,u,this])&&xS(a,h)}let c=vl(i,n),l=new c(a);return xl(l),l}reduce(e,...t){Et(this);let i=at(this),r=wt(i);if(r===0&&t.length===0)throw Ht(wp);let s,a;t.length===0?(s=Rt(i[0]),a=1):(s=t[0],a=0);for(let c=a;c<r;++c)s=e(s,Rt(i[c]),c,this);return s}reduceRight(e,...t){Et(this);let i=at(this),r=wt(i);if(r===0&&t.length===0)throw Ht(wp);let s,a;t.length===0?(s=Rt(i[r-1]),a=r-2):(s=t[0],a=r-1);for(let c=a;c>=0;--c)s=e(s,Rt(i[c]),c,this);return s}forEach(e,...t){Et(this);let i=at(this),r=wt(i),s=t[0];for(let a=0;a<r;++a)Dn(e,s,[Rt(i[a]),a,this])}find(e,...t){Et(this);let i=at(this),r=wt(i),s=t[0];for(let a=0;a<r;++a){let c=Rt(i[a]);if(Dn(e,s,[c,a,this]))return c}}findIndex(e,...t){Et(this);let i=at(this),r=wt(i),s=t[0];for(let a=0;a<r;++a){let c=Rt(i[a]);if(Dn(e,s,[c,a,this]))return a}return-1}findLast(e,...t){Et(this);let i=at(this),r=wt(i),s=t[0];for(let a=r-1;a>=0;--a){let c=Rt(i[a]);if(Dn(e,s,[c,a,this]))return c}}findLastIndex(e,...t){Et(this);let i=at(this),r=wt(i),s=t[0];for(let a=r-1;a>=0;--a){let c=Rt(i[a]);if(Dn(e,s,[c,a,this]))return a}return-1}every(e,...t){Et(this);let i=at(this),r=wt(i),s=t[0];for(let a=0;a<r;++a)if(!Dn(e,s,[Rt(i[a]),a,this]))return!1;return!0}some(e,...t){Et(this);let i=at(this),r=wt(i),s=t[0];for(let a=0;a<r;++a)if(Dn(e,s,[Rt(i[a]),a,this]))return!0;return!1}set(e,...t){Et(this);let i=at(this),r=Yi(t[0]);if(r<0)throw bh(wh);if(e==null)throw Ht(Ih);if(Uh(e))throw Ht(Dh);if(Ns(e))return DS(at(this),at(e),r);if(Al(e)){let l=on(e);if(Ka(l))throw Ht(Za)}let s=wt(i),a=Os(e),c=Ch(a.length);if(r===1/0||c+r>s)throw bh(wh);for(let l=0;l<c;++l)i[l+r]=Ri(a[l])}reverse(){Et(this);let e=at(this);return Rp(e),this}toReversed(){Et(this);let e=at(this),t=new Wn(on(e),Gr(e),wt(e)),i=new n(on(Xa(t))),r=at(i);return Rp(r),i}fill(e,...t){Et(this);let i=at(this);return PS(i,Ri(e),...qa(t)),this}copyWithin(e,t,...i){Et(this);let r=at(this);return NS(r,e,t,...qa(i)),this}sort(e){Et(this);let t=at(this),i=e!==void 0?e:Op;return Ip(t,(r,s)=>i(Rt(r),Rt(s))),this}toSorted(e){Et(this);let t=at(this);if(e!==void 0&&typeof e!="function")throw new Ht(lS);let i=e!==void 0?e:Op,r=new Wn(on(t),Gr(t),wt(t)),s=new n(on(Xa(r))),a=at(s);return Ip(a,(c,l)=>i(Rt(c),Rt(l))),s}slice(e,t){Et(this);let i=at(this),r=vl(i,n);if(r===n){let y=new Wn(on(i),Gr(i),wt(i));return new n(on(Xa(y,e,t)))}let s=wt(i),a=Yi(e),c=t===void 0?s:Yi(t),l;a===-1/0?l=0:a<0?l=s+a>0?s+a:0:l=s<a?s:a;let u;c===-1/0?u=0:c<0?u=s+c>0?s+c:0:u=s<c?s:c;let h=u-l>0?u-l:0,p=new r(h);if(xl(p,h),h===0)return p;let d=on(i);if(Ka(d))throw Ht(Za);let m=0;for(;l<u;)p[m]=Rt(i[l]),++l,++m;return p}subarray(e,t){Et(this);let i=at(this),r=vl(i,n),s=new Wn(on(i),Gr(i),wt(i)),a=LS(s,e,t),c=new r(on(a),Gr(a),wt(a));return xl(c),c}indexOf(e,...t){Et(this);let i=at(this),r=wt(i),s=Yi(t[0]);if(s===1/0)return-1;s<0&&(s+=r,s<0&&(s=0));for(let a=s;a<r;++a)if(qi(i,a)&&Rt(i[a])===e)return a;return-1}lastIndexOf(e,...t){Et(this);let i=at(this),r=wt(i),s=t.length>=1?Yi(t[0]):r-1;if(s===-1/0)return-1;s>=0?s=s<r-1?s:r-1:s+=r;for(let a=s;a>=0;--a)if(qi(i,a)&&Rt(i[a])===e)return a;return-1}includes(e,...t){Et(this);let i=at(this),r=wt(i),s=Yi(t[0]);if(s===1/0)return!1;s<0&&(s+=r,s<0&&(s=0));let a=Us(e);for(let c=s;c<r;++c){let l=Rt(i[c]);if(a&&Us(l)||l===e)return!0}return!1}join(e){Et(this);let t=at(this),i=Bp(t);return vS(i,e)}toLocaleString(...e){Et(this);let t=at(this),i=Bp(t);return _S(i,...qa(e))}get[Fh](){if(Ns(this))return"Float16Array"}};$a(Jn,"BYTES_PER_ELEMENT",{value:Xh});$a(Jn,Tl,{});Wp(Jn,zh);var wl=Jn.prototype;$a(wl,"BYTES_PER_ELEMENT",{value:Xh});$a(wl,Ii,{value:wl.values,writable:!0,configurable:!0});Wp(wl,cn);function eA(n,e,...t){return Rt(zS(n,e,...qa(t)))}var Bh=class extends an{constructor(e,t){super(t),this.parser=e}load(e,t,i,r){let s=new Rh(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,a=>{try{t(this.parser(a))}catch(c){r!=null?r(c):console.error(c),this.manager.itemError(e)}},i,r)}};function tA(n){let e=n instanceof Int8Array?Ca:n instanceof Uint8Array?Ct:n instanceof Uint8ClampedArray?Ct:n instanceof Int16Array?Ra:n instanceof Uint16Array?gr:n instanceof Int32Array?Es:n instanceof Uint32Array?Cn:n instanceof Jn?Pt:n instanceof Float32Array?Gt:n instanceof Float64Array?Gt:null;return Sr(e!=null),e}var Di=class extends an{constructor(e,t,i={},r){super(r),this.textureClass=e,this.parser=t,this.options={format:kt,minFilter:et,magFilter:et,...i}}load(e,t,i,r){let s=new this.textureClass,a=new Bh(this.parser,this.manager);return a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,c=>{s.image.data=c instanceof Jn?new Uint16Array(c.buffer):c;let{width:l,height:u,depth:h,...p}=this.options;l!=null&&(s.image.width=l),u!=null&&(s.image.height=u),"depth"in s.image&&h!=null&&(s.image.depth=h),s.type=tA(c),Object.assign(s,p),s.needsUpdate=!0,t?.(s)},i,r),s}},Qa=Vn.clamp,X3=Vn.euclideanModulo,Y3=Vn.inverseLerp,Yh=Vn.lerp,Pi=Vn.degToRad,q3=Vn.radToDeg,Z3=Vn.isPowerOfTwo,K3=Vn.ceilPowerOfTwo,Q3=Vn.floorPowerOfTwo,j3=Vn.normalize;function um(n,e,t,i=0,r=1){return Vn.mapLinear(n,e,t,i,r)}function hm(n){return Math.min(Math.max(n,0),1)}function ft(n){return(e,t)=>{e instanceof vn?Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines?.[n]!=null},set(i){i!==this[t]&&(i?(this.defines??={},this.defines[n]="1"):delete this.defines?.[n],this.needsUpdate=!0)}}):Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines.has(n)},set(i){i!==this[t]&&(i?this.defines.set(n,"1"):this.defines.delete(n),this.setChanged())}})}}function Fp(n){return typeof n=="number"?Math.floor(n):typeof n=="string"?parseInt(n,10):typeof n=="boolean"?+n:0}function Zi(n,{min:e=Number.MIN_SAFE_INTEGER,max:t=Number.MAX_SAFE_INTEGER}={}){return(i,r)=>{i instanceof vn?Object.defineProperty(i,r,{enumerable:!0,get(){let s=this.defines?.[n];return s!=null?Fp(s):0},set(s){let a=this[r];s!==a&&(this.defines??={},this.defines[n]=Qa(s,e,t).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,r,{enumerable:!0,get(){let s=this.defines.get(n);return s!=null?Fp(s):0},set(s){let a=this[r];s!==a&&(this.defines.set(n,Qa(s,e,t).toFixed(0)),this.setChanged())}})}}function Hp(n){return typeof n=="number"?n:typeof n=="string"?parseFloat(n):typeof n=="boolean"?+n:0}function Dl(n,{min:e=-1/0,max:t=1/0,precision:i=7}={}){return(r,s)=>{r instanceof vn?Object.defineProperty(r,s,{enumerable:!0,get(){let a=this.defines?.[n];return a!=null?Hp(a):0},set(a){let c=this[s];a!==c&&(this.defines??={},this.defines[n]=Qa(a,e,t).toFixed(i),this.needsUpdate=!0)}}):Object.defineProperty(r,s,{enumerable:!0,get(){let a=this.defines.get(n);return a!=null?Hp(a):0},set(a){let c=this[s];a!==c&&(this.defines.set(n,Qa(a,e,t).toFixed(i)),this.setChanged())}})}}function qh(n,{validate:e}={}){return(t,i)=>{t instanceof vn?Object.defineProperty(t,i,{enumerable:!0,get(){return this.defines?.[n]},set(r){if(r!==this[i]){if(e?.(r)===!1){console.error(`Expression validation failed: ${r}`);return}this.defines??={},this.defines[n]=r,this.needsUpdate=!0}}}):Object.defineProperty(t,i,{enumerable:!0,get(){return this.defines.get(n)},set(r){if(r!==this[i]){if(e?.(r)===!1){console.error(`Expression validation failed: ${r}`);return}this.defines.set(n,r),this.setChanged()}}})}}function Zh(n,...e){let t={};for(let i=0;i<e.length;i+=2){let r=e[i],s=e[i+1];for(let a of s)t[a]={enumerable:!0,get:()=>r[a],set:c=>{r[a]=c}}}return Object.defineProperties(n,t),n}function Kh(n,e,t){let i={};for(let r of t)i[r]={enumerable:!0,get:()=>e.uniforms[r].value,set:s=>{e.uniforms[r].value=s}};return Object.defineProperties(n,i),n}var Bs=class extends an{constructor(e={},t){super(t),this.options=e}load(e,t,i,r){let{width:s,height:a,depth:c}=this.options,l=new un(null,s,a,c),u=new Wa(this.manager);return u.setRequestHeader(this.requestHeader),u.setPath(this.path),u.setWithCredentials(this.withCredentials),u.load(e,h=>{let{image:p}=h;l.image={data:p.data,width:s??p.width,height:a??p.height,depth:c??Math.sqrt(p.height)},l.type=h.type,l.format=h.format,l.colorSpace=h.colorSpace,l.needsUpdate=!0;try{t?.(l)}catch(d){r!=null?r(d):console.error(d),this.manager.itemError(e)}},i,r),l}},ja=class extends an{constructor(e={},t){super(t),this.options=e}load(e,t,i,r){let{width:s,height:a}=this.options,c=new Ti(null,s,a),l=new Wa(this.manager);return l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(this.withCredentials),l.load(e,u=>{let{image:h}=u;c.image={data:h.data,width:s??h.width,height:a??h.height},c.type=u.type,c.format=u.format,c.colorSpace=u.colorSpace,c.needsUpdate=!0;try{t?.(c)}catch(p){r!=null?r(p):console.error(p),this.manager.itemError(e)}},i,r),c}};var zp=class dm{constructor(e=0,t=0,i=0,r=0){this.west=e,this.south=t,this.east=i,this.north=r}get width(){let e=this.east;return e<this.west&&(e+=Math.PI*2),e-this.west}get height(){return this.north-this.south}set(e,t,i,r){return this.west=e,this.south=t,this.east=i,this.north=r,this}clone(){return new dm(this.west,this.south,this.east,this.north)}copy(e){return this.west=e.west,this.south=e.south,this.east=e.east,this.north=e.north,this}equals(e){return e.west===this.west&&e.south===this.south&&e.east===this.east&&e.north===this.north}at(e,t,i=new Qn){return i.set(this.west+(this.east-this.west)*e,this.north+(this.south-this.north)*t)}fromArray(e,t=0){return this.west=e[t],this.south=e[t+1],this.east=e[t+2],this.north=e[t+3],this}toArray(e=[],t=0){return e[t]=this.west,e[t+1]=this.south,e[t+2]=this.east,e[t+3]=this.north,e}*[Symbol.iterator](){yield this.west,yield this.south,yield this.east,yield this.north}};zp.MAX=new zp(Qn.MIN_LONGITUDE,Qn.MIN_LATITUDE,Qn.MAX_LONGITUDE,Qn.MAX_LATITUDE);var nA=/^[ \t]*#include +"([\w\d./]+)"/gm;function $n(n,e){return n.replace(nA,(t,i)=>{let r=i.split("/").reduce((s,a)=>typeof s!="string"&&s!=null?s[a]:void 0,e);if(typeof r!="string")throw new Error(`Could not find include for ${i}.`);return $n(r,e)})}var _l;function iA(){if(_l!=null)return _l;let n=new Uint32Array([268435456]);return _l=new Uint8Array(n.buffer,n.byteOffset,n.byteLength)[0]===0,_l}function rA(n,e,t,i=!0){if(i===iA())return new e(n);let r=Object.assign(new DataView(n),{getFloat16(a,c){return eA(this,a,c)}}),s=new e(r.byteLength/e.BYTES_PER_ELEMENT);for(let a=0,c=0;a<s.length;++a,c+=e.BYTES_PER_ELEMENT)s[a]=r[t](c,i);return s}var fm=n=>new Uint8Array(n);var zs=(n,e)=>rA(n,Jn,"getFloat16",e);var sA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aA(n,e,t,i){let r="";for(let s=parseInt(e,10);s<parseInt(t,10);++s)r+=i.replace(/\[\s*i\s*\]/g,`[${s}]`).replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return r}function Vr(n){return n.replace(sA,aA)}var oA=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

#ifndef SHADOW_CASCADE_COUNT
#error "SHADOW_CASCADE_COUNT macro must be defined."
#endif // SHADOW_CASCADE_COUNT

int getCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);
  vec2 interval;
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    if (depth >= interval.x && depth < interval.y) {
      return UNROLLED_LOOP_INDEX;
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end
  return SHADOW_CASCADE_COUNT - 1;
}

int getFadedCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far,
  const float jitter
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);

  vec2 interval;
  float intervalCenter;
  float closestEdge;
  float margin;
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha;

  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    intervalCenter = (interval.x + interval.y) * 0.5;
    closestEdge = depth < intervalCenter ? interval.x : interval.y;
    margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);

    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    if (depth >= interval.x && depth < interval.y) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate(min(depth - interval.x, interval.y - depth) / margin);
    }
    #else // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    // Don't fade out the last cascade.
    if (depth >= interval.x) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate((depth - interval.x) / margin);
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end

  return jitter <= alpha
    ? nextIndex
    : prevIndex;
}
`,cA=`// cSpell:words logdepthbuf

#ifdef DEPTH_PACKING
float readDepthValue(const sampler2D depthBuffer, const vec2 uv) {
  #if DEPTH_PACKING == 3201
  return unpackRGBAToDepth(texture(depthBuffer, uv));
  #else // DEPTH_PACKING == 3201
  return texture(depthBuffer, uv).r;
  #endif // DEPTH_PACKING == 3201
}
#endif // DEPTH_PACKING

float reverseLogDepth(const float depth, const float near, const float far) {
  #if defined(USE_LOGDEPTHBUF) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  return depth;
  #endif // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,lA=`float checker(const vec2 uv, const vec2 repeats) {
  vec2 c = floor(repeats * uv);
  float result = mod(c.x + c.y, 2.0);
  return sign(result);
}

float checker(const vec2 uv, const float repeats) {
  return checker(uv, vec2(repeats));
}
`,uA=`// Reference: https://advances.realtimerendering.com/s2014/index.html?v=release-20261027-feedback-batch-2#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,hA=`#if !defined(saturate)
#define saturate(a) clamp(a, 0.0, 1.0)
#endif // !defined(saturate)

float remap(const float x, const float min1, const float max1, const float min2, const float max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1, const vec2 min2, const vec2 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1, const vec3 min2, const vec3 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1, const vec4 min2, const vec4 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

float remapClamped(
  const float x,
  const float min1,
  const float max1,
  const float min2,
  const float max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec2 remapClamped(
  const vec2 x,
  const vec2 min1,
  const vec2 max1,
  const vec2 min2,
  const vec2 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec3 remapClamped(
  const vec3 x,
  const vec3 min1,
  const vec3 max1,
  const vec3 min2,
  const vec3 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec4 remapClamped(
  const vec4 x,
  const vec4 min1,
  const vec4 max1,
  const vec4 min2,
  const vec4 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

// Implicitly remap to 0 and 1
float remap(const float x, const float min1, const float max1) {
  return (x - min1) / (max1 - min1);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1) {
  return (x - min1) / (max1 - min1);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1) {
  return (x - min1) / (max1 - min1);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1) {
  return (x - min1) / (max1 - min1);
}

float remapClamped(const float x, const float min1, const float max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec2 remapClamped(const vec2 x, const vec2 min1, const vec2 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec3 remapClamped(const vec3 x, const vec3 min1, const vec3 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec4 remapClamped(const vec4 x, const vec4 min1, const vec4 max1) {
  return saturate((x - min1) / (max1 - min1));
}
`,dA=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

vec2 signNotZero(vec2 v) {
  return vec2(v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0);
}

vec2 packNormalToVec2(vec3 v) {
  vec2 p = v.xy * (1.0 / (abs(v.x) + abs(v.y) + abs(v.z)));
  return v.z <= 0.0
    ? (1.0 - abs(p.yx)) * signNotZero(p)
    : p;
}

vec3 unpackVec2ToNormal(vec2 e) {
  vec3 v = vec3(e.xy, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) {
    v.xy = (1.0 - abs(v.yx)) * signNotZero(v.xy);
  }
  return normalize(v);
}
`,fA=`float raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b - sqrt(discriminant)) * 0.5;
}

float raySphereFirstIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereFirstIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

float raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b + sqrt(discriminant)) * 0.5;
}

float raySphereSecondIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b + sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereSecondIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  if (discriminant < 0.0) {
    intersection1 = -1.0;
    intersection2 = -1.0;
    return;
  } else {
    float Q = sqrt(discriminant);
    intersection1 = (-b - Q) * 0.5;
    intersection2 = (-b + Q) * 0.5;
  }
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), discriminant));
  intersection1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  intersection2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}
`,pA=`vec3 screenToView(
  const vec2 uv,
  const float depth,
  const float viewZ,
  const mat4 projectionMatrix,
  const mat4 inverseProjectionMatrix
) {
  vec4 clip = vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  clip *= clipW;
  return (inverseProjectionMatrix * clip).xyz;
}
`,mA=`// A fifth-order polynomial approximation of Turbo color map.
// See: https://observablehq.com/@mbostock/turbo
// prettier-ignore
vec3 turbo(const float x) {
  float r = 0.1357 + x * (4.5974 - x * (42.3277 - x * (130.5887 - x * (150.5666 - x * 58.1375))));
  float g = 0.0914 + x * (2.1856 + x * (4.8052 - x * (14.0195 - x * (4.2109 + x * 2.7747))));
  float b = 0.1067 + x * (12.5925 - x * (60.1097 - x * (109.0745 - x * (88.5066 - x * 26.8183))));
  return vec3(r, g, b);
}
`,gA=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Pl=oA,Nl=cA,pm=lA,Ll=uA,Gs=hA,mm=dA,ks=fA,gm=pA,Qh=mA,Ul=gA;var vm="eac103980f20c0956f2d3215833e73514be08462",vA=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${vm}/packages/atmosphere/assets`,xA=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${vm}/packages/atmosphere/assets/stars.bin`,eo=64,to=16,no=32,io=128,ro=32,so=8,jh=so*ro,Jh=io,$h=no,ao=256,oo=64,Vs=1/1e3;var _A=new L;function Ws(n,e,t,i){let r=t.projectOnSurface(n,_A);return r!=null?t.getOsculatingSphereCenter(r,e,i).negate():i.setScalar(0)}var yA=typeof window<"u"&&window.requestIdleCallback!=null?window.requestIdleCallback:function(n,e={}){let t=e.timeout??1,i=performance.now();return setTimeout(()=>{n({get didTimeout(){return e.timeout!=null?!1:performance.now()-i-1>t},timeRemaining(){return Math.max(0,1+(performance.now()-i))}})},1)};var Xs=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number ClampCosine(const Number mu) {
  return clamp(mu, Number(-1.0), Number(1.0));
}

Length ClampDistance(const Length d) {
  return max(d, 0.0 * m);
}

Length ClampRadius(const AtmosphereParameters atmosphere, const Length r) {
  return clamp(r, atmosphere.bottom_radius, atmosphere.top_radius);
}

Length SafeSqrt(const Area a) {
  return sqrt(max(a, 0.0 * m2));
}

Length DistanceToTopAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.top_radius * atmosphere.top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

Length DistanceToBottomAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius;
  return ClampDistance(-r * mu - SafeSqrt(discriminant));
}

bool RayIntersectsGround(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  return mu < 0.0 && r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius >= 0.0 * m2;
}

Number GetTextureCoordFromUnitRange(const Number x, const int texture_size) {
  return 0.5 / Number(texture_size) + x * (1.0 - 1.0 / Number(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon).
  Length d = DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Number x_mu = (d - d_min) / (d_max - d_min);
  Number x_r = rho / H;
  return vec2(GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT));
}

DimensionlessSpectrum GetTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  vec2 uv = GetTransmittanceTextureUvFromRMu(atmosphere, r, mu);
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  // Manually interpolate the transmittance instead of the optical depth.
  const vec2 size = vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  const vec3 texel_size = vec3(1.0 / size, 0.0);
  vec2 coord = (uv * size) - 0.5;
  vec2 i = (floor(coord) + 0.5) * texel_size.xy;
  vec2 f = fract(coord);
  vec4 t1 = exp(-texture(transmittance_texture, i));
  vec4 t2 = exp(-texture(transmittance_texture, i + texel_size.xz));
  vec4 t3 = exp(-texture(transmittance_texture, i + texel_size.zy));
  vec4 t4 = exp(-texture(transmittance_texture, i + texel_size.xy));
  return DimensionlessSpectrum(mix(mix(t1, t2, f.x), mix(t3, t4, f.x), f.y));
  #else // TRANSMITTANCE_PRECISION_LOG
  return DimensionlessSpectrum(texture(transmittance_texture, uv));
  #endif // TRANSMITTANCE_PRECISION_LOG
}

DimensionlessSpectrum GetTransmittance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Length d,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(d >= 0.0 * m);

  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_d = ClampCosine((r * mu + d) / r_d);

  if (ray_r_mu_intersects_ground) {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, -mu),
        DimensionlessSpectrum(1.0));
  } else {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, mu_d),
        DimensionlessSpectrum(1.0));
  }
}

DimensionlessSpectrum GetTransmittanceToSun(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  Number sin_theta_h = atmosphere.bottom_radius / r;
  Number cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) *
      smoothstep(-sin_theta_h * atmosphere.sun_angular_radius / rad,
                 sin_theta_h * atmosphere.sun_angular_radius / rad,
                 mu_s - cos_theta_h);
}

InverseSolidAngle RayleighPhaseFunction(const Number nu) {
  InverseSolidAngle k = 3.0 / (16.0 * PI * sr);
  return k * (1.0 + nu * nu);
}

InverseSolidAngle MiePhaseFunction(const Number g, const Number nu) {
  InverseSolidAngle k = 3.0 / (8.0 * PI * sr) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  Number u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);

  // Discriminant of the quadratic equation for the intersections of the ray
  // (r,mu) with the ground (see RayIntersectsGround).
  Length r_mu = r * mu;
  Area discriminant =
      r_mu * r_mu - r * r + atmosphere.bottom_radius * atmosphere.bottom_radius;
  Number u_mu;
  if (ray_r_mu_intersects_ground) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon).
    Length d = -r_mu - SafeSqrt(discriminant);
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    u_mu = 0.5 - 0.5 * GetTextureCoordFromUnitRange(d_max == d_min ? 0.0 :
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon).
    Length d = -r_mu + SafeSqrt(discriminant + H * H);
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    u_mu = 0.5 + 0.5 * GetTextureCoordFromUnitRange(
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }

  Length d = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, mu_s);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Number a = (d - d_min) / (d_max - d_min);
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  // An ad-hoc function equal to 0 for mu_s = mu_s_min (because then d = D and
  // thus a = A), equal to 1 for mu_s = 1 (because then d = d_min and thus
  // a = 0), and with a large slope around mu_s = 0, to get more texture
  // samples near the horizon.
  Number u_mu_s = GetTextureCoordFromUnitRange(
      max(1.0 - a / A, 0.0) / (1.0 + a), SCATTERING_TEXTURE_MU_S_SIZE);

  Number u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(const AtmosphereParameters atmosphere,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  Number x_r = (r - atmosphere.bottom_radius) /
      (atmosphere.top_radius - atmosphere.bottom_radius);
  Number x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT));
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(atmosphere, r, mu_s);
  return IrradianceSpectrum(texture(irradiance_texture, uv));
}
`,Ys=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#define assert(x)

#define Length float
#define Wavelength float
#define Angle float
#define SolidAngle float
#define Power float
#define LuminousPower float

#define Number float
#define InverseLength float
#define Area float
#define Volume float
#define NumberDensity float
#define Irradiance float
#define Radiance float
#define SpectralPower float
#define SpectralIrradiance float
#define SpectralRadiance float
#define SpectralRadianceDensity float
#define ScatteringCoefficient float
#define InverseSolidAngle float
#define LuminousIntensity float
#define Luminance float
#define Illuminance float

// A generic function from Wavelength to some other type.
#define AbstractSpectrum vec3
// A function from Wavelength to Number.
#define DimensionlessSpectrum vec3
// A function from Wavelength to SpectralPower.
#define PowerSpectrum vec3
// A function from Wavelength to SpectralIrradiance.
#define IrradianceSpectrum vec3
// A function from Wavelength to SpectralRadiance.
#define RadianceSpectrum vec3
// A function from Wavelength to SpectralRadianceDensity.
#define RadianceDensitySpectrum vec3
// A function from Wavelength to ScatteringCoefficient.
#define ScatteringSpectrum vec3

// A position in 3D (3 length values).
#define Position vec3
// A unit direction vector in 3D (3 unit-less values).
#define Direction vec3
// A vector of 3 luminance values.
#define Luminance3 vec3
// A vector of 3 illuminance values.
#define Illuminance3 vec3

#define TransmittanceTexture sampler2D
#define AbstractScatteringTexture sampler3D
#define ReducedScatteringTexture sampler3D
#define ScatteringTexture sampler3D
#define ScatteringDensityTexture sampler3D
#define IrradianceTexture sampler2D

const Length m = 1.0;
const Wavelength nm = 1.0;
const Angle rad = 1.0;
const SolidAngle sr = 1.0;
const Power watt = 1.0;
const LuminousPower lm = 1.0;

#if !defined(PI)
const float PI = 3.14159265358979323846;
#endif // !defined(PI)

const Length km = 1000.0 * m;
const Area m2 = m * m;
const Volume m3 = m * m * m;
const Angle pi = PI * rad;
const Angle deg = pi / 180.0;
const Irradiance watt_per_square_meter = watt / m2;
const Radiance watt_per_square_meter_per_sr = watt / (m2 * sr);
const SpectralIrradiance watt_per_square_meter_per_nm = watt / (m2 * nm);
const SpectralRadiance watt_per_square_meter_per_sr_per_nm = watt / (m2 * sr * nm);
const SpectralRadianceDensity watt_per_cubic_meter_per_sr_per_nm = watt / (m3 * sr * nm);
const LuminousIntensity cd = lm / sr;
const LuminousIntensity kcd = 1000.0 * cd;
const Luminance cd_per_square_meter = cd / m2;
const Luminance kcd_per_square_meter = kcd / m2;

struct DensityProfileLayer {
  Length width;
  Number exp_term;
  InverseLength exp_scale;
  InverseLength linear_term;
  Number constant_term;
};

struct DensityProfile {
  DensityProfileLayer layers[2];
};

// See AtmosphereParameter.ts for further details.
struct AtmosphereParameters {
  IrradianceSpectrum solar_irradiance;
  Angle sun_angular_radius;
  Length bottom_radius;
  Length top_radius;
  DensityProfile rayleigh_density;
  ScatteringSpectrum rayleigh_scattering;
  DensityProfile mie_density;
  ScatteringSpectrum mie_scattering;
  ScatteringSpectrum mie_extinction;
  Number mie_phase_function_g;
  DensityProfile absorption_density;
  ScatteringSpectrum absorption_extinction;
  DimensionlessSpectrum ground_albedo;
  Number mu_s_min;
};
`,qs=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifdef COMBINED_SCATTERING_TEXTURES
vec3 GetExtrapolatedSingleMieScattering(
    const AtmosphereParameters atmosphere, const vec4 scattering) {
  // Algebraically this can never be negative, but rounding errors can produce
  // that effect for sufficiently short view rays.
  // @shotamatsuda: Avoid division by infinitesimal values.
  // See https://github.com/takram-design-engineering/three-geospatial/issues/47
  if (scattering.r < 1e-5) {
    return vec3(0.0);
  }
  return scattering.rgb * scattering.a / scattering.r *
	    (atmosphere.rayleigh_scattering.r / atmosphere.mie_scattering.r) *
	    (atmosphere.mie_scattering / atmosphere.rayleigh_scattering);
}
#endif // COMBINED_SCATTERING_TEXTURES

IrradianceSpectrum GetCombinedScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum single_mie_scattering) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
#ifdef COMBINED_SCATTERING_TEXTURES
  vec4 combined_scattering =
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp;
  IrradianceSpectrum scattering = IrradianceSpectrum(combined_scattering);
  single_mie_scattering =
      GetExtrapolatedSingleMieScattering(atmosphere, combined_scattering);
#else // COMBINED_SCATTERING_TEXTURES
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  single_mie_scattering = IrradianceSpectrum(
      texture(single_mie_scattering_texture, uvw0) * (1.0 - lerp) +
      texture(single_mie_scattering_texture, uvw1) * lerp);
#endif // COMBINED_SCATTERING_TEXTURES
  return scattering;
}

// @shotamatsuda: Added for reading higher-order scattering texture.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
IrradianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  return scattering;
}
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

RadianceSpectrum GetSkyRadiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, const Direction view_ray, const Length shadow_length,
    const Direction sun_direction,
    out DimensionlessSpectrum transmittance) {
  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > atmosphere.top_radius) {
    // If the view ray does not intersect the atmosphere, simply return 0.
    transmittance = DimensionlessSpectrum(1.0);
    return RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  }
  // Compute the r, mu, mu_s and nu parameters needed for the texture lookups.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);

  // @shotamatsuda: For rendering points below the bottom atmosphere.
  #ifdef GROUND
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);
  #else // GROUND
  bool ray_r_mu_intersects_ground = false;
  #endif // GROUND

  transmittance = ray_r_mu_intersects_ground ? DimensionlessSpectrum(0.0) :
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu);
  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering;
  if (shadow_length == 0.0 * m) {
    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r, mu, mu_s, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
  } else {
    // Case of light shafts (shadow_length is the total length noted l in our
    // paper): we omit the scattering between the camera and the point at
    // distance l, by implementing Eq. (18) of the paper (shadow_transmittance
    // is the T(x,x_s) term, scattering is the S|x_s=x+lv term).
    Length d = shadow_length;
    Length r_p =
        ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
    Number mu_p = (r * mu + d) / r_p;
    Number mu_s_p = (r * mu_s + d * nu) / r_p;

    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
    DimensionlessSpectrum shadow_transmittance =
        GetTransmittance(atmosphere, transmittance_texture,
            r, mu, shadow_length, ray_r_mu_intersects_ground);
    // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    IrradianceSpectrum higher_order_scattering = GetScattering(
        atmosphere, higher_order_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
    IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
    scattering = single_scattering * shadow_transmittance + higher_order_scattering;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    scattering = scattering * shadow_transmittance;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

// @shotamatsuda: Returns the point on the ray closest to the origin.
vec3 ClosestPointOnRay(const Position camera, const Position point) {
  Position ray = point - camera;
  Number t = clamp(-dot(camera, ray) / dot(ray, ray), 0.0, 1.0);
  return camera + t * ray;
}

vec2 RaySphereIntersections(
    const Position camera, const Direction direction, const Length radius) {
  float b = 2.0 * dot(direction, camera);
  float c = dot(camera, camera) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  float Q = sqrt(discriminant);
  return vec2(-b - Q, -b + Q) * 0.5;
}

// @shotamatsuda: Clip the view ray at the bottom atmosphere boundary.
bool ClipAtBottomAtmosphere(
    const AtmosphereParameters atmosphere,
    const Direction view_ray, inout Position camera, inout Position point) {
  const Length eps = 0.0;
  Length bottom_radius = atmosphere.bottom_radius + eps;
  Length r_camera = length(camera);
  Length r_point = length(point);
  bool camera_below = r_camera < bottom_radius;
  bool point_below = r_point < bottom_radius;

  vec2 t = RaySphereIntersections(camera, view_ray, bottom_radius);
  Position intersection = camera + view_ray * (camera_below ? t.y : t.x);
  camera = camera_below ? intersection : camera;
  point = point_below ? intersection : point;

  return camera_below && point_below;
}

RadianceSpectrum GetSkyRadianceToPoint(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  // @shotamatsuda: Avoid artifacts when the ray does not intersect the top
  // atmosphere boundary.
  if (length(ClosestPointOnRay(camera, point)) > atmosphere.top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  Direction view_ray = normalize(point - camera);
  if (ClipAtBottomAtmosphere(atmosphere, view_ray, camera, point)) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }

  // Compute the r, mu, mu_s and nu parameters for the first texture lookup.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);
  Length d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);

  // @shotamatsuda: Hack to avoid rendering artifacts near the horizon, due to
  // finite atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    Number mu_horizon = -SafeSqrt(1.0 -
        (atmosphere.bottom_radius * atmosphere.bottom_radius) / (r * r));
    const Number eps = 0.004;
    mu = max(mu, mu_horizon + eps);
  }

  transmittance = GetTransmittance(atmosphere, transmittance_texture,
      r, mu, d, ray_r_mu_intersects_ground);

  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground,
      single_mie_scattering);

  // Compute the r, mu, mu_s and nu parameters for the second texture lookup.
  // If shadow_length is not 0 (case of light shafts), we want to ignore the
  // scattering along the last shadow_length meters of the view ray, which we
  // do by subtracting shadow_length from d (this way scattering_p is equal to
  // the S|x_s=x_0-lv term in Eq. (17) of our paper).
  d = max(d - shadow_length, 0.0 * m);
  Length r_p = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_p = (r * mu + d) / r_p;
  Number mu_s_p = (r * mu_s + d * nu) / r_p;

  IrradianceSpectrum single_mie_scattering_p;
  IrradianceSpectrum scattering_p = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
      single_mie_scattering_p);

  // Combine the lookup results to get the scattering between camera and point.
  DimensionlessSpectrum shadow_transmittance = transmittance;
  if (shadow_length > 0.0 * m) {
    // This is the T(x,x_s) term in Eq. (17) of our paper, for light shafts.
    shadow_transmittance = GetTransmittance(atmosphere, transmittance_texture,
        r, mu, d, ray_r_mu_intersects_ground);
  }
  // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  IrradianceSpectrum higher_order_scattering = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
  IrradianceSpectrum higher_order_scattering_p = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering_p =
      scattering_p - higher_order_scattering_p;
  scattering =
      single_scattering - shadow_transmittance * single_scattering_p +
      higher_order_scattering - transmittance * higher_order_scattering_p;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  scattering = scattering - shadow_transmittance * scattering_p;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

  single_mie_scattering =
      single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
#ifdef COMBINED_SCATTERING_TEXTURES
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
      atmosphere, vec4(scattering, single_mie_scattering.r));
#endif // COMBINED_SCATTERING_TEXTURES

  // Hack to avoid rendering artifacts when the sun is below the horizon.
  single_mie_scattering = single_mie_scattering *
      smoothstep(Number(0.0), Number(0.01), mu_s);

  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

IrradianceSpectrum GetSunAndSkyIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance (approximated if the surface is not horizontal).
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      (1.0 + dot(normal, point) / r) * 0.5;

  // Direct irradiance.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r, mu_s) *
      max(dot(normal, sun_direction), 0.0);
}

// @shotamatsuda: Added for the clouds.
IrradianceSpectrum GetSunAndSkyScalarIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance. Integral over sphere yields 2\u03C0.
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      2.0 * PI;

  // Direct irradiance. Omit the cosine term.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(atmosphere, transmittance_texture, r, mu_s);
}

Luminance3 GetSolarLuminance() {
  return ATMOSPHERE.solar_irradiance /
      (PI * ATMOSPHERE.sun_angular_radius * ATMOSPHERE.sun_angular_radius) *
      SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminance(
    const Position camera, Direction view_ray, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadiance(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, view_ray, shadow_length, sun_direction,
      transmittance) * SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminanceToPoint(
    const Position camera, const Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadianceToPoint(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, point, shadow_length, sun_direction, transmittance) *
      SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Illuminance3 GetSunAndSkyIlluminance(
    const Position p, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p, normal,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

// @shotamatsuda: Added for the clouds.
Illuminance3 GetSunAndSkyScalarIlluminance(
    const Position p, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyScalarIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

#define GetSolarRadiance GetSolarLuminance
#define GetSkyRadiance GetSkyLuminance
#define GetSkyRadianceToPoint GetSkyLuminanceToPoint
#define GetSunAndSkyIrradiance GetSunAndSkyIlluminance
#define GetSunAndSkyScalarIrradiance GetSunAndSkyScalarIlluminance
`;var TA=new L(.2126,.7152,.0722),EA=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighDensity","rayleighScattering","mieDensity","mieScattering","mieExtinction","miePhaseFunctionG","absorptionDensity","absorptionExtinction","groundAlbedo","muSMin","skyRadianceToLuminance","sunRadianceToLuminance"];function wA(n,e){if(e!=null)for(let t of EA){let i=e[t];i!=null&&(n[t]instanceof L?n[t].copy(i):n[t]=i)}}var Ki=class{constructor(e,t,i,r,s){this.width=e,this.expTerm=t,this.expScale=i,this.linearTerm=r,this.constantTerm=s}toUniform(){return new P({width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm})}},ed=class{constructor(e){this.solarIrradiance=new L(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighDensity=[new Ki(0,0,0,0,0),new Ki(0,1,-.125,0,0)],this.rayleighScattering=new L(.005802,.013558,.0331),this.mieDensity=[new Ki(0,0,0,0,0),new Ki(0,1,-.833333,0,0)],this.mieScattering=new L(.003996,.003996,.003996),this.mieExtinction=new L(.00444,.00444,.00444),this.miePhaseFunctionG=.8,this.absorptionDensity=[new Ki(25,0,0,1/15,-2/3),new Ki(0,0,0,-1/15,8/3)],this.absorptionExtinction=new L(65e-5,.001881,85e-6),this.groundAlbedo=new dt().setScalar(.1),this.muSMin=Math.cos(Pi(120)),this.sunRadianceToLuminance=new L(98242.786222,69954.398112,66475.012354),this.skyRadianceToLuminance=new L(114974.916437,71305.954816,65310.548555),this.sunRadianceToRelativeLuminance=new L,this.skyRadianceToRelativeLuminance=new L,wA(this,e);let t=TA.dot(this.sunRadianceToLuminance);this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(t),this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(t)}toUniform(){return new P({solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:this.bottomRadius*Vs,top_radius:this.topRadius*Vs,rayleigh_density:{layers:this.rayleighDensity.map(e=>e.toUniform().value)},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(e=>e.toUniform().value)},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(e=>e.toUniform().value)},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin})}};ed.DEFAULT=new ed;var Qs=ed,MA=`precision highp sampler2DArray;

#include "core/depth"
#include "core/math"
#include "core/packing"
#include "core/transform"
#ifdef HAS_SHADOW
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#endif // HAS_SHADOW

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform float geometricErrorCorrectionAmount;
uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float albedoScale;

#include "sky"

#ifdef HAS_LIGHTING_MASK
uniform sampler2D lightingMaskBuffer;
#endif // HAS_LIGHTING_MASK

// prettier-ignore
#define LIGHTING_MASK_CHANNEL_ LIGHTING_MASK_CHANNEL

#ifdef HAS_OVERLAY
uniform sampler2D overlayBuffer;
#endif // HAS_OVERLAY

#ifdef HAS_SHADOW
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform mat4 inverseShadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float shadowTopHeight;
uniform float shadowRadius;
uniform sampler3D stbnTexture;
uniform int frame;
#endif // HAS_SHADOW

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv, out bool degenerate) {
  vec3 normal = texture(normalBuffer, uv).xyz;
  degenerate = normal == vec3(0.0);
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(normal.xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * normal - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = ATMOSPHERE.bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, geometricErrorCorrectionAmount);
  positionECEF = mix(positionECEF, spherePosition, geometricErrorCorrectionAmount);
}

#if defined(SUN_LIGHT) || defined(SKY_LIGHT)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_LIGHT and SKY_LIGHT are not defined,
  // regard the inputColor as radiance at the texel.
  vec3 diffuse = inputColor * albedoScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_LIGHT) && defined(SKY_LIGHT)
  return diffuse * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_LIGHT)
  return diffuse * sunIrradiance;
  #elif defined(SKY_LIGHT)
  return diffuse * skyIrradiance;
  #endif // defined(SUN_LIGHT) && defined(SKY_LIGHT)
}

#endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition,
    positionECEF,
    shadowLength,
    sunDirection,
    transmittance
  );
  #ifdef TRANSMITTANCE
  radiance = radiance * transmittance;
  #endif // TRANSMITTANCE
  #ifdef INSCATTER
  radiance = radiance + inscatter;
  #endif // INSCATTER
}

#endif // defined(TRANSMITTANCE) || defined(INSCATTER)

#ifdef HAS_SHADOW

float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 positionECEF) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    positionECEF / METER_TO_LENGTH_UNIT, // TODO: Make units consistent
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

float readShadowOpticalDepth(const vec2 uv, const float distanceToTop, const int cascadeIndex) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  // Omit adding maxOpticalDepthTail to avoid pronounced aliasing. Ground
  // shadow will be attenuated by inscatter anyways.
  return min(shadow.b, shadow.g * max(0.0, distanceToTop - shadow.r));
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }

  vec2 texelSize = vec2(1.0) / vec2(textureSize(shadowBuffer, 0).xy);
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy) * PI2
    );
    sum += readShadowOpticalDepth(uv + offset * radius * texelSize, distanceToTop, cascadeIndex);
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 worldPosition,
  const vec3 positionECEF,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(positionECEF);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(worldPosition, distanceToTop, radius, cascadeIndex)
    : 0.0;
}

float getShadowRadius(const vec3 worldPosition) {
  vec4 clip = shadowMatrices[0] * vec4(worldPosition, 1.0);
  clip /= clip.w;

  // Offset by 1px in each direction in shadow's clip coordinates.
  vec2 shadowSize = vec2(textureSize(shadowBuffer, 0));
  vec3 offset = vec3(2.0 / shadowSize, 0.0);
  vec4 clipX = clip + offset.xzzz;
  vec4 clipY = clip + offset.zyzz;

  // Convert back to world space.
  vec4 worldX = inverseShadowMatrices[0] * clipX;
  vec4 worldY = inverseShadowMatrices[0] * clipY;

  // Project into the main camera's clip space.
  mat4 viewProjectionMatrix = projectionMatrix * viewMatrix;
  vec4 projected = viewProjectionMatrix * vec4(worldPosition, 1.0);
  vec4 projectedX = viewProjectionMatrix * worldX;
  vec4 projectedY = viewProjectionMatrix * worldY;
  projected /= projected.w;
  projectedX /= projectedX.w;
  projectedY /= projectedY.w;

  // Take the mean of pixel sizes.
  vec2 center = (projected.xy * 0.5 + 0.5) * resolution;
  vec2 offsetX = (projectedX.xy * 0.5 + 0.5) * resolution;
  vec2 offsetY = (projectedY.xy * 0.5 + 0.5) * resolution;
  float size = max(length(offsetX - center), length(offsetY - center));

  return remapClamped(size, 10.0, 50.0, 0.0, shadowRadius);
}

#endif // HAS_SHADOW

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #if defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)
  outputColor.rgb = vec3(texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_);
  outputColor.a = 1.0;
  return;
  #endif // defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)

  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, uv).r;
  #endif // HAS_SHADOW_LENGTH

  #ifdef HAS_OVERLAY
  vec4 overlay = texture(overlayBuffer, uv);
  if (overlay.a == 1.0) {
    outputColor = overlay;
    return;
  }
  #endif // HAS_OVERLAY

  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  float depth = readDepthValue(depthBuffer, uv);
  if (depth >= 1.0 - 1e-8) {
    #ifdef SKY
    outputColor.rgb = getSkyRadiance(
      vCameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
    outputColor.a = 1.0;
    #else // SKY
    outputColor = inputColor;
    #endif // SKY

    #ifdef HAS_OVERLAY
    outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
    #endif // HAS_OVERLAY
    return;
  }
  depth = reverseLogDepth(depth, cameraNear, cameraFar);

  // Reconstruct position and normal in world space.
  vec3 viewPosition = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 positionECEF = (worldToECEFMatrix * vec4(worldPosition, 1.0)).xyz;
  positionECEF = positionECEF * METER_TO_LENGTH_UNIT + vGeometryAltitudeCorrection;

  vec3 viewNormal;
  bool degenerateNormal = false;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dVPdx = dFdx(viewPosition);
  vec3 dVPdy = dFdy(viewPosition);
  viewNormal = normalize(cross(dVPdx, dVPdy));
  #elif defined(HAS_NORMALS)
  viewNormal = readNormal(uv, degenerateNormal);
  #endif // defined(HAS_NORMALS)

  #if defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 worldNormal = (inverseViewMatrix * vec4(viewNormal, 0.0)).xyz;
  vec3 normalECEF = (worldToECEFMatrix * vec4(worldNormal, 0.0)).xyz;
  #else // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 normalECEF = normalize(positionECEF);
  #endif // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)

  #ifdef CORRECT_GEOMETRIC_ERROR
  correctGeometricError(positionECEF, normalECEF);
  #endif // CORRECT_GEOMETRIC_ERROR

  #ifdef HAS_SHADOW
  float stbn = getSTBN();
  float radius = getShadowRadius(worldPosition);
  float opticalDepth = sampleShadowOpticalDepth(worldPosition, positionECEF, radius, stbn);
  float sunTransmittance = exp(-opticalDepth);
  #else // HAS_SHADOW
  float sunTransmittance = 1.0;
  #endif // HAS_SHADOW

  vec3 radiance;
  #if defined(SUN_LIGHT) || defined(SKY_LIGHT)
  // WORKAROUND: When both post-process lighting and sky options are enabled,
  // stars have degenerate normals. We use this to disable irradiance, which is
  // irrelevant for them.
  if (!degenerateNormal) {
    radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  } else {
    radiance = inputColor.rgb;
  }
  #ifdef HAS_LIGHTING_MASK
  float lightingMask = texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_;
  radiance = mix(inputColor.rgb, radiance, lightingMask);
  #endif // HAS_LIGHTING_MASK
  #else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,bA=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float geometricErrorCorrectionAmount;
uniform vec3 ellipsoidRadii;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values.
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void mainSupport() {
  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  vGeometryAltitudeCorrection = altitudeCorrection * METER_TO_LENGTH_UNIT;
  // Gradually turn off the altitude correction on geometries as the geometric
  // error correction takes effect, because that on the ideal sphere will be
  // over corrected.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  #ifdef CORRECT_GEOMETRIC_ERROR
  vGeometryAltitudeCorrection *= 1.0 - geometricErrorCorrectionAmount;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,Em=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance =
    ATMOSPHERE.solar_irradiance *
    0.000002 /
    (PI * moonAngularRadius * moonAngularRadius) *
    SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return radiance;
}

float intersectSphere(const vec3 ray, const vec3 point, const float radius) {
  vec3 P = -point;
  float PoR = dot(P, ray);
  float D = dot(P, P) - radius * radius;
  return -PoR - sqrt(PoR * PoR - D);
}

float orenNayarDiffuse(const vec3 L, const vec3 V, const vec3 N) {
  float NoL = dot(N, L);
  float NoV = dot(N, V);
  float s = dot(L, V) - NoL * NoV;
  float t = mix(1.0, max(NoL, NoV), step(0.0, s));
  return max(0.0, NoL) * (0.62406015 + 0.41284404 * s / t);
}

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  const float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale,
  const float fragmentAngle
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cosSunAngularRadius) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(
      ATMOSPHERE.sun_angular_radius,
      ATMOSPHERE.sun_angular_radius - fragmentAngle,
      angle
    );
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #ifdef MOON
  float intersection = intersectSphere(rayDirection, moonDirection, moonAngularRadius);
  if (intersection > 0.0) {
    vec3 normal = normalize(moonDirection - rayDirection * intersection);
    float diffuse = orenNayarDiffuse(-sunDirection, rayDirection, normal);
    float viewDotMoon = dot(rayDirection, moonDirection);
    float angle = acos(clamp(viewDotMoon, -1.0, 1.0));
    float antialias = smoothstep(moonAngularRadius, moonAngularRadius - fragmentAngle, angle);
    radiance +=
      transmittance *
      getLunarRadiance(moonAngularRadius) *
      lunarRadianceScale *
      diffuse *
      antialias;
  }
  #endif // MOON

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}
`,CA=Object.defineProperty,wn=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&CA(e,t,r),r},RA=new L,IA=new L,DA=new Qn,wm={blendFunction:ct.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:fi.WGS84,correctAltitude:!0,correctGeometricError:!0,sunLight:!1,skyLight:!1,transmittance:!0,inscatter:!0,albedoScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0},Kt=class extends zr{constructor(e=new wi,t,i=Qs.DEFAULT){let{blendFunction:r,normalBuffer:s=null,octEncodedNormal:a,reconstructNormal:c,irradianceTexture:l=null,scatteringTexture:u=null,transmittanceTexture:h=null,singleMieScatteringTexture:p=null,higherOrderScatteringTexture:d=null,ellipsoid:m,correctAltitude:y,correctGeometricError:E,sunDirection:x,sunLight:g,skyLight:w,transmittance:C,inscatter:R,albedoScale:U,sky:I,sun:B,moon:A,moonDirection:D,moonAngularRadius:k,lunarRadianceScale:N,ground:q}={...wm,...t};super("AerialPerspectiveEffect",Vr($n(MA,{core:{depth:Nl,packing:mm,math:Gs,transform:gm,raySphereIntersection:ks,cascadedShadowMaps:Pl,interleavedGradientNoise:Ll,vogelDisk:Ul},bruneton:{common:Xs,definitions:Ys,runtime:qs},sky:Em})),{blendFunction:r,vertexShader:bA,attributes:di.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new P(s),projectionMatrix:new P(new ke),viewMatrix:new P(new ke),inverseProjectionMatrix:new P(new ke),inverseViewMatrix:new P(new ke),cameraPosition:new P(new L),bottomRadius:new P(i.bottomRadius),ellipsoidRadii:new P(new L),worldToECEFMatrix:new P(new ke),altitudeCorrection:new P(new L),geometricErrorCorrectionAmount:new P(0),sunDirection:new P(x?.clone()??new L),cosSunAngularRadius:new P(i.sunAngularRadius),albedoScale:new P(U),moonDirection:new P(D?.clone()??new L),moonAngularRadius:new P(k),lunarRadianceScale:new P(N),overlayBuffer:new P(null),shadowBuffer:new P(null),shadowMapSize:new P(new De),shadowIntervals:new P([]),shadowMatrices:new P([]),inverseShadowMatrices:new P([]),shadowFar:new P(0),shadowTopHeight:new P(0),shadowRadius:new P(3),stbnTexture:new P(null),frame:new P(0),shadowLengthBuffer:new P(null),lightingMaskBuffer:new P(null),ATMOSPHERE:i.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new P(i.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new P(i.skyRadianceToRelativeLuminance),irradiance_texture:new P(l),scattering_texture:new P(u),transmittance_texture:new P(h),single_mie_scattering_texture:new P(null),higher_order_scattering_texture:new P(null)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",ao.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",oo.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",no.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",io.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",ro.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",so.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",eo.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",to.toFixed(0)],["METER_TO_LENGTH_UNIT",Vs.toFixed(7)]])}),this.camera=e,this.atmosphere=i,this.overlay=null,this.shadow=null,this.shadowLength=null,this.lightingMask=null,this.hasNormals=!1,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.shadowSampleCount=8,this.octEncodedNormal=a,this.reconstructNormal=c,this.singleMieScatteringTexture=p,this.higherOrderScatteringTexture=d,this.ellipsoid=m,this.correctAltitude=y,this.correctGeometricError=E,this.sunLight=g,this.skyLight=w,this.transmittance=C,this.inscatter=R,this.sky=I,this.sun=B,this.moon=A,this.ground=q}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){let{projectionMatrix:t,matrixWorldInverse:i,projectionMatrixInverse:r,matrixWorld:s}=e,a=this.uniforms;a.get("projectionMatrix").value.copy(t),a.get("viewMatrix").value.copy(i),a.get("inverseProjectionMatrix").value.copy(r),a.get("inverseViewMatrix").value.copy(s);let c=e.getWorldPosition(a.get("cameraPosition").value),l=a.get("worldToECEFMatrix").value,u=RA.copy(c).applyMatrix4(l);try{let p=DA.setFromECEF(u).height,d=IA.set(0,this.ellipsoid.maximumRadius,-Math.max(0,p)).applyMatrix4(t);a.get("geometricErrorCorrectionAmount").value=hm(um(d.y,41.5,13.8,0,1))}catch{return}let h=a.get("altitudeCorrection");this.correctAltitude?Ws(u,this.atmosphere.bottomRadius,this.ellipsoid,h.value):h.value.setScalar(0)}updateOverlay(){let e=!1,{uniforms:t,defines:i,overlay:r}=this,s=i.has("HAS_OVERLAY"),a=r!=null;return a!==s&&(a?i.set("HAS_OVERLAY","1"):(i.delete("HAS_OVERLAY"),t.get("overlayBuffer").value=null),e=!0),a&&(t.get("overlayBuffer").value=r.map),e}updateShadow(){let e=!1,{uniforms:t,defines:i,shadow:r}=this,s=i.has("HAS_SHADOW"),a=r!=null;if(a!==s&&(a?i.set("HAS_SHADOW","1"):(i.delete("HAS_SHADOW"),t.get("shadowBuffer").value=null),e=!0),a){let c=i.get("SHADOW_CASCADE_COUNT"),l=`${r.cascadeCount}`;c!==l&&(i.set("SHADOW_CASCADE_COUNT",r.cascadeCount.toFixed(0)),e=!0),t.get("shadowBuffer").value=r.map,t.get("shadowMapSize").value=r.mapSize,t.get("shadowIntervals").value=r.intervals,t.get("shadowMatrices").value=r.matrices,t.get("inverseShadowMatrices").value=r.inverseMatrices,t.get("shadowFar").value=r.far,t.get("shadowTopHeight").value=r.topHeight}return e}updateShadowLength(){let e=!1,{uniforms:t,defines:i,shadowLength:r}=this,s=i.has("HAS_SHADOW_LENGTH"),a=r!=null;return a!==s&&(a?i.set("HAS_SHADOW_LENGTH","1"):(i.delete("HAS_SHADOW_LENGTH"),t.get("shadowLengthBuffer").value=null),e=!0),a&&(t.get("shadowLengthBuffer").value=r.map),e}updateLightingMask(){let e=!1,{uniforms:t,defines:i,lightingMask:r}=this,s=i.has("HAS_LIGHTING_MASK"),a=r!=null;if(a!==s&&(a?i.set("HAS_LIGHTING_MASK","1"):(i.delete("HAS_LIGHTING_MASK"),t.get("lightingMaskBuffer").value=null),e=!0),a){t.get("lightingMaskBuffer").value=r.map;let c=i.get("LIGHTING_MASK_CHANNEL"),l=r.channel;l!==c&&(/^[rgba]$/.test(l)?(i.set("LIGHTING_MASK_CHANNEL",l),e=!0):console.error(`Expression validation failed: ${l}`))}return e}update(e,t,i){this.copyCameraSettings(this.camera);let r=!1;r||=this.updateOverlay(),r||=this.updateShadow(),r||=this.updateShadowLength(),r||=this.updateLightingMask(),r&&this.setChanged(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e,this.hasNormals=e!=null}get irradianceTexture(){return this.uniforms.get("irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("scattering_texture").value}set scatteringTexture(e){this.uniforms.get("scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("transmittance_texture").value=e}get singleMieScatteringTexture(){return this.uniforms.get("single_mie_scattering_texture").value}set singleMieScatteringTexture(e){this.uniforms.get("single_mie_scattering_texture").value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.get("higher_order_scattering_texture").value}set higherOrderScatteringTexture(e){this.uniforms.get("higher_order_scattering_texture").value=e,this.hasHigherOrderScatteringTexture=e!=null}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get worldToECEFMatrix(){return this.uniforms.get("worldToECEFMatrix").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get sunAngularRadius(){return this.uniforms.get("ATMOSPHERE").value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.get("ATMOSPHERE").value.sun_angular_radius=e,this.uniforms.get("cosSunAngularRadius").value=Math.cos(e)}get albedoScale(){return this.uniforms.get("albedoScale").value}set albedoScale(e){this.uniforms.get("albedoScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}};wn([ft("OCT_ENCODED_NORMAL")],Kt.prototype,"octEncodedNormal");wn([ft("RECONSTRUCT_NORMAL")],Kt.prototype,"reconstructNormal");wn([ft("HAS_NORMALS")],Kt.prototype,"hasNormals");wn([ft("COMBINED_SCATTERING_TEXTURES")],Kt.prototype,"combinedScatteringTextures");wn([ft("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],Kt.prototype,"hasHigherOrderScatteringTexture");wn([ft("CORRECT_GEOMETRIC_ERROR")],Kt.prototype,"correctGeometricError");wn([ft("SUN_LIGHT")],Kt.prototype,"sunLight");wn([ft("SKY_LIGHT")],Kt.prototype,"skyLight");wn([ft("TRANSMITTANCE")],Kt.prototype,"transmittance");wn([ft("INSCATTER")],Kt.prototype,"inscatter");wn([ft("SKY")],Kt.prototype,"sky");wn([ft("SUN")],Kt.prototype,"sun");wn([ft("MOON")],Kt.prototype,"moon");wn([ft("GROUND")],Kt.prototype,"ground");wn([Zi("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Kt.prototype,"shadowSampleCount");var PA=Object.defineProperty,Mm=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&PA(e,t,r),r},NA=new L;function LA(n,e){let t="",i="";for(let r=1;r<e;++r)t+=`layout(location = ${r}) out float renderTarget${r};
`,i+=`renderTarget${r} = 0.0;
`;return n.replace("#include <mrt_layout>",t).replace("#include <mrt_output>",i)}var Ol={ellipsoid:fi.WGS84,correctAltitude:!0,renderTargetCount:1},Qi=class extends Ei{constructor(e,t=Qs.DEFAULT){let{irradianceTexture:i=null,scatteringTexture:r=null,transmittanceTexture:s=null,singleMieScatteringTexture:a=null,higherOrderScatteringTexture:c=null,ellipsoid:l,correctAltitude:u,sunDirection:h,sunAngularRadius:p,renderTargetCount:d,...m}={...Ol,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...m,uniforms:{cameraPosition:new P(new L),worldToECEFMatrix:new P(new ke),altitudeCorrection:new P(new L),sunDirection:new P(h?.clone()??new L),cosSunAngularRadius:new P(t.sunAngularRadius),ATMOSPHERE:t.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new P(t.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new P(t.skyRadianceToRelativeLuminance),irradiance_texture:new P(i),scattering_texture:new P(r),transmittance_texture:new P(s),single_mie_scattering_texture:new P(null),higher_order_scattering_texture:new P(null),...m.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:ao.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:oo.toFixed(0),SCATTERING_TEXTURE_R_SIZE:no.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:io.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:ro.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:so.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:eo.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:to.toFixed(0),METER_TO_LENGTH_UNIT:Vs.toFixed(7),...m.defines}}),this.atmosphere=t,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.singleMieScatteringTexture=a,this.higherOrderScatteringTexture=c,this.ellipsoid=l,this.correctAltitude=u,p!=null&&(this.sunAngularRadius=p),this.renderTargetCount=d}copyCameraSettings(e){let t=this.uniforms,i=e.getWorldPosition(t.cameraPosition.value),r=NA.copy(i).applyMatrix4(t.worldToECEFMatrix.value),s=t.altitudeCorrection.value;this.correctAltitude?Ws(r,this.atmosphere.bottomRadius,this.ellipsoid,s):s.setScalar(0)}onBeforeCompile(e,t){e.fragmentShader=LA(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,t,i,r,s,a){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.irradiance_texture.value}set irradianceTexture(e){this.uniforms.irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.scattering_texture.value}set scatteringTexture(e){this.uniforms.scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.transmittance_texture.value}set transmittanceTexture(e){this.uniforms.transmittance_texture.value=e}get singleMieScatteringTexture(){return this.uniforms.single_mie_scattering_texture.value}set singleMieScatteringTexture(e){this.uniforms.single_mie_scattering_texture.value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.higher_order_scattering_texture.value}set higherOrderScatteringTexture(e){this.uniforms.higher_order_scattering_texture.value=e,this.hasHigherOrderScatteringTexture=e!=null}get worldToECEFMatrix(){return this.uniforms.worldToECEFMatrix.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.ATMOSPHERE.value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.ATMOSPHERE.value.sun_angular_radius=e,this.uniforms.cosSunAngularRadius.value=Math.cos(e)}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}};Mm([ft("COMBINED_SCATTERING_TEXTURES")],Qi.prototype,"combinedScatteringTextures");Mm([ft("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],Qi.prototype,"hasHigherOrderScatteringTexture");var bm=14959787069098932e-8;var gb=2*Math.PI,vb=3600*(180/Math.PI);var UA=10800*60,xb=2*UA,OA=6378.1366,_b=OA/bm;var Ni;(function(n){n.Sun="Sun",n.Moon="Moon",n.Mercury="Mercury",n.Venus="Venus",n.Earth="Earth",n.Mars="Mars",n.Jupiter="Jupiter",n.Saturn="Saturn",n.Uranus="Uranus",n.Neptune="Neptune",n.Pluto="Pluto",n.SSB="SSB",n.EMB="EMB",n.Star1="Star1",n.Star2="Star2",n.Star3="Star3",n.Star4="Star4",n.Star5="Star5",n.Star6="Star6",n.Star7="Star7",n.Star8="Star8"})(Ni||(Ni={}));var yb=[Ni.Star1,Ni.Star2,Ni.Star3,Ni.Star4,Ni.Star5,Ni.Star6,Ni.Star7,Ni.Star8];var xm;(function(n){n[n.From2000=0]="From2000",n[n.Into2000=1]="Into2000"})(xm||(xm={}));var _m;(function(n){n[n.Pericenter=0]="Pericenter",n[n.Apocenter=1]="Apocenter"})(_m||(_m={}));var ym;(function(n){n.Penumbral="penumbral",n.Partial="partial",n.Annular="annular",n.Total="total"})(ym||(ym={}));var Sm;(function(n){n[n.Invalid=0]="Invalid",n[n.Ascending=1]="Ascending",n[n.Descending=-1]="Descending"})(Sm||(Sm={}));var Sb=.001/bm;function BA(n){var e=[];if(n.length===0)return"";if(typeof n[0]!="string")throw new TypeError("Url must be a string. Received "+n[0]);if(n[0].match(/^[^/:]+:\/*$/)&&n.length>1){var t=n.shift();n[0]=t+n[0]}n[0].match(/^file:\/\/\//)?n[0]=n[0].replace(/^([^/:]+):\/*/,"$1:///"):n[0]=n[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<n.length;i++){var r=n[i];if(typeof r!="string")throw new TypeError("Url must be a string. Received "+r);r!==""&&(i>0&&(r=r.replace(/^[\/]+/,"")),i<n.length-1?r=r.replace(/[\/]+$/,""):r=r.replace(/[\/]+$/,"/"),e.push(r))}var s=e.join("/");s=s.replace(/\/(\?|&|#[^!])/g,"$1");var a=s.split("?");return s=a.shift()+(a.length>0?"?":"")+a.join("&"),s}function FA(){var n;return typeof arguments[0]=="object"?n=arguments[0]:n=[].slice.call(arguments),BA(n)}var Am={width:ao,height:oo},Zs={width:jh,height:Jh,depth:$h},Tm={width:eo,height:to},co=class extends an{constructor({format:e="exr",type:t=Pt,combinedScattering:i=!0,higherOrderScattering:r=!0}={},s){super(s),this.format=e,this.type=t,this.combinedScattering=i,this.higherOrderScattering=r}setType(e){return this.type=Gp(e)?Gt:Pt,this}load(e,t,i,r){let s={},a=({key:c,loader:l,path:u})=>(l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(this.withCredentials),l.load(FA(e,u),h=>{h.type=this.type,this.type===Gt&&(h.image,h.image.data!=null&&(h.image.data=halfToFloat(new Uint16Array(h.image.data.buffer,h.image.data.byteOffset,h.image.data.length)))),h.minFilter=et,h.magFilter=et,s[`${c}Texture`]=h,s.irradianceTexture!=null&&s.scatteringTexture!=null&&s.transmittanceTexture!=null&&(this.combinedScattering||s.singleMieScatteringTexture!=null)&&(!this.higherOrderScattering||s.higherOrderScatteringTexture!=null)&&t?.(s)},i,r));return this.format==="exr"?{transmittanceTexture:a({key:"transmittance",loader:new ja(Am,this.manager),path:"transmittance.exr"}),scatteringTexture:a({key:"scattering",loader:new Bs(Zs,this.manager),path:"scattering.exr"}),irradianceTexture:a({key:"irradiance",loader:new ja(Tm,this.manager),path:"irradiance.exr"}),singleMieScatteringTexture:this.combinedScattering?void 0:a({key:"singleMieScattering",loader:new Bs(Zs,this.manager),path:"single_mie_scattering.exr"}),higherOrderScatteringTexture:this.higherOrderScattering?a({key:"higherOrderScattering",loader:new Bs(Zs,this.manager),path:"higher_order_scattering.exr"}):void 0}:{transmittanceTexture:a({key:"transmittance",loader:new Di(Ti,zs,Am,this.manager),path:"transmittance.bin"}),scatteringTexture:a({key:"scattering",loader:new Di(un,zs,Zs,this.manager),path:"scattering.bin"}),irradianceTexture:a({key:"irradiance",loader:new Di(Ti,zs,Tm,this.manager),path:"irradiance.bin"}),singleMieScatteringTexture:this.combinedScattering?void 0:a({key:"singleMieScattering",loader:new Di(un,zs,Zs,this.manager),path:"single_mie_scattering.bin"}),higherOrderScatteringTexture:this.higherOrderScattering?a({key:"higherOrderScattering",loader:new Di(un,zs,Zs,this.manager),path:"higher_order_scattering.bin"}):void 0}}};var Ab=1/Math.sqrt(Math.PI),Tb=Math.sqrt(3)/(2*Math.sqrt(Math.PI));var HA={ellipsoid:fi.WGS84,correctAltitude:!0};var zA=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI 0.3183098861837907

#include "core/raySphereIntersection"

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#include "sky"

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition;
  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  #ifdef GROUND_ALBEDO

  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  bool intersectsGround = RayIntersectsGround(ATMOSPHERE, r, mu);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      ATMOSPHERE.bottom_radius
    );
    vec3 groundPosition = rayDirection * distanceToGround + cameraPosition;
    vec3 surfaceNormal = normalize(groundPosition);
    vec3 skyIrradiance;
    vec3 sunIrradiance = GetSunAndSkyIrradiance(
      cameraPosition,
      surfaceNormal,
      sunDirection,
      skyIrradiance
    );
    vec3 transmittance;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      ATMOSPHERE.bottom_radius * surfaceNormal,
      shadowLength,
      sunDirection,
      transmittance
    );
    vec3 radiance = groundAlbedo * RECIPROCAL_PI * (sunIrradiance + skyIrradiance);
    outputColor.rgb = radiance * transmittance + inscatter;
  } else {
    outputColor.rgb = getSkyRadiance(
      cameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
  }

  #else // GROUND_ALBEDO

  outputColor.rgb = getSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    moonDirection,
    moonAngularRadius,
    lunarRadianceScale,
    fragmentAngle
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,GA=`precision highp float;
precision highp sampler3D;

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,kA=Object.defineProperty,td=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&kA(e,t,r),r},Cm={...Ol,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0,groundAlbedo:new dt(0)},Ks=class extends Qi{constructor(e){let{sun:t,moon:i,moonDirection:r,moonAngularRadius:s,lunarRadianceScale:a,ground:c,groundAlbedo:l,...u}={...Cm,...e};super({name:"SkyMaterial",glslVersion:hi,vertexShader:GA,fragmentShader:$n(zA,{core:{raySphereIntersection:ks},bruneton:{common:Xs,definitions:Ys,runtime:qs},sky:Em}),...u,uniforms:{inverseProjectionMatrix:new P(new ke),inverseViewMatrix:new P(new ke),moonDirection:new P(r?.clone()??new L),moonAngularRadius:new P(s),lunarRadianceScale:new P(a),groundAlbedo:new P(l.clone()),shadowLengthBuffer:new P(null),...u.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!1,depthTest:!0}),this.shadowLength=null,this.sun=t,this.moon=i,this.ground=c}onBeforeRender(e,t,i,r,s,a){super.onBeforeRender(e,t,i,r,s,a);let{uniforms:c,defines:l}=this;c.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),c.inverseViewMatrix.value.copy(i.matrixWorld);let u=l.PERSPECTIVE_CAMERA!=null,h=i.isPerspectiveCamera===!0;h!==u&&(h?l.PERSPECTIVE_CAMERA="1":delete l.PERSPECTIVE_CAMERA,this.needsUpdate=!0);let p=this.groundAlbedo,d=l.GROUND_ALBEDO!=null,m=p.r!==0||p.g!==0||p.b!==0;m!==d&&(m?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);let y=this.shadowLength,E=l.HAS_SHADOW_LENGTH!=null,x=y!=null;x!==E&&(x?l.HAS_SHADOW_LENGTH="1":(delete l.HAS_SHADOW_LENGTH,c.shadowLengthBuffer.value=null),this.needsUpdate=!0),x&&(c.shadowLengthBuffer.value=y.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}};td([ft("SUN")],Ks.prototype,"sun");td([ft("MOON")],Ks.prototype,"moon");td([ft("GROUND")],Ks.prototype,"ground");var VA=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(vCameraPosition);
  float mu = dot(vCameraPosition, rayDirection) / r;

  if (RayIntersectsGround(ATMOSPHERE, r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition,
    normalize(vRayDirection),
    0.0, // Shadow length
    sunDirection,
    transmittance
  );
  radiance += transmittance * vColor;
  outputColor = vec4(radiance, 1.0);
  #else // BACKGROUND
  outputColor = vec4(vColor, 1.0);
  #endif // BACKGROUND

  #include <mrt_output>
}
`,WA=`precision highp float;
precision highp sampler3D;

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float intensity;

layout(location = 0) in vec3 position;
layout(location = 1) in float magnitude;
layout(location = 2) in vec3 color;

out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;
out vec3 vColor;

void main() {
  // Magnitude is stored between 0 to 1 within the given range.
  float m = mix(magnitudeRange.x, magnitudeRange.y, magnitude);
  vec3 v = pow(vec3(10.0), -vec3(magnitudeRange, m) / 2.5);
  vColor = vec3(intensity * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`,XA=Object.defineProperty,Rm=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&XA(e,t,r),r},Im={...Ol,pointSize:1,intensity:1,background:!0,ground:!0},lo=class extends Qi{constructor(e){let{pointSize:t,intensity:i,background:r,ground:s,...a}={...Im,...e};super({name:"StarsMaterial",glslVersion:hi,vertexShader:WA,fragmentShader:$n(VA,{bruneton:{common:Xs,definitions:Ys,runtime:qs}}),...a,uniforms:{projectionMatrix:new P(new ke),modelViewMatrix:new P(new ke),viewMatrix:new P(new ke),matrixWorld:new P(new ke),cameraFar:new P(0),pointSize:new P(0),magnitudeRange:new P(new De(-2,8)),intensity:new P(i),...a.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!0,depthTest:!0}),this.pointSize=t,this.background=r,this.ground=s}onBeforeRender(e,t,i,r,s,a){super.onBeforeRender(e,t,i,r,s,a);let c=this.uniforms;c.projectionMatrix.value.copy(i.projectionMatrix),c.modelViewMatrix.value.copy(i.modelViewMatrix),c.viewMatrix.value.copy(i.matrixWorldInverse),c.matrixWorld.value.copy(s.matrixWorld),c.cameraFar.value=i.far,c.pointSize.value=this.pointSize*e.getPixelRatio();let l=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==l&&(l?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get intensity(){return this.uniforms.intensity.value}set intensity(e){this.uniforms.intensity.value=e}};Rm([ft("BACKGROUND")],lo.prototype,"background");Rm([ft("GROUND")],lo.prototype,"ground");var YA={ellipsoid:fi.WGS84,correctAltitude:!0,distance:1};var nd=qs,id=Xs,rd=Ys;var fo=class n{constructor(e=0,t=0,i=0,r=0){this.expTerm=e,this.exponent=t,this.linearTerm=i,this.constantTerm=r}set(e=0,t=0,i=0,r=0){return this.expTerm=e,this.exponent=t,this.linearTerm=i,this.constantTerm=r,this}clone(){return new n(this.expTerm,this.exponent,this.linearTerm,this.constantTerm)}copy(e){return this.expTerm=e.expTerm,this.exponent=e.exponent,this.linearTerm=e.linearTerm,this.constantTerm=e.constantTerm,this}},qA=["channel","altitude","height","densityScale","shapeAmount","shapeDetailAmount","weatherExponent","shapeAlteringBias","coverageFilterWidth","shadow","densityProfile"];function ZA(n,e){if(e!=null)for(let t of qA){let i=e[t];i!=null&&(n[t]instanceof fo?n[t].copy(i):n[t]=i)}}var cd=class Om{constructor(e){this.channel="r",this.altitude=0,this.height=0,this.densityScale=.2,this.shapeAmount=1,this.shapeDetailAmount=1,this.weatherExponent=1,this.shapeAlteringBias=.35,this.coverageFilterWidth=.6,this.densityProfile=new fo(0,0,.75,.25),this.shadow=!1,this.set(e)}set(e){return ZA(this,e),this}clone(){return new Om(this)}copy(e){return this.channel=e.channel,this.altitude=e.altitude,this.height=e.height,this.densityScale=e.densityScale,this.shapeAmount=e.shapeAmount,this.shapeDetailAmount=e.shapeDetailAmount,this.weatherExponent=e.weatherExponent,this.shapeAlteringBias=e.shapeAlteringBias,this.coverageFilterWidth=e.coverageFilterWidth,this.densityProfile.copy(e.densityProfile),this.shadow=e.shadow,this}};cd.DEFAULT=new cd;var Ji=cd,js=Array.from({length:8},()=>({value:0,flag:0})),uo=Array.from({length:3},()=>({min:0,max:0}));function KA(n,e){return n.value!==e.value?n.value-e.value:n.flag-e.flag}var ld=class Bm extends Array{constructor(e){super(new Ji(e?.[0]),new Ji(e?.[1]),new Ji(e?.[2]),new Ji(e?.[3]))}set(e){return this[0].set(e?.[0]),this[1].set(e?.[1]),this[2].set(e?.[2]),this[3].set(e?.[3]),this}reset(){return this[0].copy(Ji.DEFAULT),this[1].copy(Ji.DEFAULT),this[2].copy(Ji.DEFAULT),this[3].copy(Ji.DEFAULT),this}clone(){return new Bm(this)}copy(e){return this[0].copy(e[0]),this[1].copy(e[1]),this[2].copy(e[2]),this[3].copy(e[3]),this}get localWeatherChannels(){return this[0].channel+this[1].channel+this[2].channel+this[3].channel}packValues(e,t){return t.set(this[0][e],this[1][e],this[2][e],this[3][e])}packSums(e,t,i){return i.set(this[0][e]+this[0][t],this[1][e]+this[1][t],this[2][e]+this[2][t],this[3][e]+this[3][t])}packDensityProfiles(e,t){return t.set(this[0].densityProfile[e],this[1].densityProfile[e],this[2].densityProfile[e],this[3].densityProfile[e])}packIntervalHeights(e,t){for(let a=0;a<4;++a){let c=this[a],l=js[a];l.value=c.altitude,l.flag=0,l=js[a+4],l.value=c.altitude+c.height,l.flag=1}js.sort(KA);let i=0,r=0;for(let a=0;a<js.length;++a){let{value:c,flag:l}=js[a];if(r===0&&a>0){let u=uo[i++];u.min=js[a-1].value,u.max=c}r+=l===0?1:-1}for(;i<3;++i){let a=uo[i];a.min=0,a.max=0}let s=uo[0];e.x=s.min,t.x=s.max,s=uo[1],e.y=s.min,t.y=s.max,s=uo[2],e.z=s.min,t.z=s.max}};ld.DEFAULT=new ld([{channel:"r",altitude:750,height:650,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"g",altitude:1e3,height:1200,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"b",altitude:7500,height:500,densityScale:.003,shapeAmount:.4,shapeDetailAmount:0,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.5},{channel:"a"}]);var Fm=ld,QA=!0,Dm="Invariant failed";function Ar(n,e){if(!n){if(QA)throw new Error(Dm);var t=Dm;throw new Error(t)}}var Bl=class n{constructor(e,t){this.near=[new L,new L,new L,new L],this.far=[new L,new L,new L,new L],e!=null&&t!=null&&this.setFromCamera(e,t)}clone(){return new n().copy(this)}copy(e){for(let t=0;t<4;++t)this.near[t].copy(e.near[t]),this.far[t].copy(e.far[t]);return this}setFromCamera(e,t){let i=e.isOrthographicCamera===!0,r=e.projectionMatrixInverse;this.near[0].set(1,1,-1),this.near[1].set(1,-1,-1),this.near[2].set(-1,-1,-1),this.near[3].set(-1,1,-1);for(let s=0;s<4;++s)this.near[s].applyMatrix4(r);this.far[0].set(1,1,1),this.far[1].set(1,-1,1),this.far[2].set(-1,-1,1),this.far[3].set(-1,1,1);for(let s=0;s<4;++s){let a=this.far[s];a.applyMatrix4(r);let c=Math.abs(a.z);i?a.z*=Math.min(t/c,1):a.multiplyScalar(Math.min(t/c,1))}return this}split(e,t=[]){for(let i=0;i<e.length;++i){let r=t[i]??=new n;if(i===0)for(let s=0;s<4;++s)r.near[s].copy(this.near[s]);else for(let s=0;s<4;++s)r.near[s].lerpVectors(this.near[s],this.far[s],e[i-1]);if(i===e.length-1)for(let s=0;s<4;++s)r.far[s].copy(this.far[s]);else for(let s=0;s<4;++s)r.far[s].lerpVectors(this.near[s],this.far[s],e[i])}return t.length=e.length,t}applyMatrix4(e){for(let t=0;t<4;++t)this.near[t].applyMatrix4(e),this.far[t].applyMatrix4(e);return this}},jA={uniform:(n,e,t,i,r=[])=>{for(let s=0;s<n;++s)r[s]=(e+(t-e)*(s+1)/n)/t;return r.length=n,r},logarithmic:(n,e,t,i,r=[])=>{for(let s=0;s<n;++s)r[s]=e*(t/e)**((s+1)/n)/t;return r.length=n,r},practical:(n,e,t,i=.5,r=[])=>{for(let s=0;s<n;++s){let a=(e+(t-e)*(s+1)/n)/t,c=e*(t/e)**((s+1)/n)/t;r[s]=Yh(a,c,i)}return r.length=n,r}};function JA(n,e,t,i,r,s=[]){return jA[n](e,t,i,r,s)}var Pm=new L,Nm=new L,$A=new ke,Lm=new ke,e2=new Bl,t2=new ci,n2={maxFar:null,farScale:1,splitMode:"practical",splitLambda:.5,margin:0,fade:!0},ud=class{constructor(e){this.cascades=[],this.mapSize=new De,this.cameraFrustum=new Bl,this.frusta=[],this.splits=[],this._far=0;let{cascadeCount:t,mapSize:i,maxFar:r,farScale:s,splitMode:a,splitLambda:c,margin:l,fade:u}={...n2,...e};this.cascadeCount=t,this.mapSize.copy(i),this.maxFar=r,this.farScale=s,this.splitMode=a,this.splitLambda=c,this.margin=l,this.fade=u}get cascadeCount(){return this.cascades.length}set cascadeCount(e){if(e!==this.cascadeCount){for(let t=0;t<e;++t)this.cascades[t]??={interval:new De,matrix:new ke,inverseMatrix:new ke,projectionMatrix:new ke,inverseProjectionMatrix:new ke,viewMatrix:new ke,inverseViewMatrix:new ke};this.cascades.length=e}}get far(){return this._far}updateIntervals(e){let t=this.cascadeCount,i=this.splits,r=this.far;JA(this.splitMode,t,e.near,r,this.splitLambda,i),this.cameraFrustum.setFromCamera(e,r),this.cameraFrustum.split(i,this.frusta);let s=this.cascades;for(let a=0;a<t;++a)s[a].interval.set(i[a-1]??0,i[a]??0)}getFrustumRadius(e,t){let i=t.near,r=t.far,s=Math.max(r[0].distanceTo(r[2]),r[0].distanceTo(i[2]));if(this.fade){let a=e.near,c=this.far,l=r[0].z/(c-a);s+=.25*l**2*(c-a)}return s*.5}updateMatrices(e,t,i=1){let r=$A.lookAt(Pm.setScalar(0),Nm.copy(t).multiplyScalar(-1),Sn.DEFAULT_UP),s=Lm.multiplyMatrices(Lm.copy(r).invert(),e.matrixWorld),a=this.frusta,c=this.cascades;Ar(a.length===c.length);let l=this.margin,u=this.mapSize;for(let h=0;h<a.length;++h){let p=a[h],d=c[h],m=this.getFrustumRadius(e,a[h]),y=-m,E=m,x=m,g=-m;d.projectionMatrix.makeOrthographic(y,E,x,g,-this.margin,m*2+this.margin);let{near:w,far:C}=e2.copy(p).applyMatrix4(s),R=t2.makeEmpty();for(let D=0;D<4;D++)R.expandByPoint(w[D]),R.expandByPoint(C[D]);let U=R.getCenter(Pm);U.z=R.max.z+l;let I=(E-y)/u.width,B=(x-g)/u.height;U.x=Math.round(U.x/I)*I,U.y=Math.round(U.y/B)*B,U.applyMatrix4(r);let A=Nm.copy(t).multiplyScalar(i).add(U);d.inverseViewMatrix.lookAt(U,A,Sn.DEFAULT_UP).setPosition(A)}}update(e,t,i){this._far=this.maxFar!=null?Math.min(this.maxFar,e.far*this.farScale):e.far*this.farScale,this.updateIntervals(e),this.updateMatrices(e,t,i);let r=this.cascades,s=this.cascadeCount;for(let a=0;a<s;++a){let{matrix:c,inverseMatrix:l,projectionMatrix:u,inverseProjectionMatrix:h,viewMatrix:p,inverseViewMatrix:d}=r[a];h.copy(u).invert(),p.copy(d).invert(),c.copy(u).multiply(p),l.copy(d).multiply(h)}}},Um=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Hm=Um.reduce((n,e,t)=>{let i=new De;for(let r=0;r<16;++r)if(Um[r]===t){i.set((r%4+.5)/4,(Math.floor(r/4)+.5)/4);break}return[...n,i]},[]),i2={resolutionScale:1,lightShafts:!0,shapeDetail:!0,turbulence:!0,haze:!0,clouds:{multiScatteringOctaves:8,accurateSunSkyLight:!0,accuratePhaseFunction:!1,maxIterationCount:500,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minExtinction:1e-5,minTransmittance:.01,maxIterationCountToGround:3,maxIterationCountToSun:2,minSecondaryStepSize:100,secondaryStepScale:2,maxShadowLengthIterationCount:500,minShadowLengthStepSize:50,maxShadowLengthRayDistance:2e5},shadow:{cascadeCount:3,mapSize:new De(512,512),maxIterationCount:50,minStepSize:100,maxStepSize:1e3,minDensity:1e-5,minExtinction:1e-5,minTransmittance:1e-4}},je=i2,r2={low:{...je,lightShafts:!1,shapeDetail:!1,turbulence:!1,clouds:{...je.clouds,accurateSunSkyLight:!1,maxIterationCount:200,minStepSize:100,maxRayDistance:1e5,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.1,maxIterationCountToGround:0,maxIterationCountToSun:1},shadow:{...je.shadow,maxIterationCount:25,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.01,cascadeCount:2,mapSize:new De(256,256)}},medium:{...je,lightShafts:!1,turbulence:!1,clouds:{...je.clouds,minDensity:1e-4,minExtinction:1e-4,accurateSunSkyLight:!1,maxIterationCountToSun:2,maxIterationCountToGround:1},shadow:{...je.shadow,minDensity:1e-4,minExtinction:1e-4,mapSize:new De(256,256)}},high:je,ultra:{...je,clouds:{...je.clouds,minStepSize:10},shadow:{...je.shadow,mapSize:new De(1024,1024)}}},s2=`precision highp float;
precision highp sampler3D;
precision highp sampler2DArray;

#include <common>
#include <packing>

#include "core/depth"
#include "core/math"
#include "core/turbo"
#include "core/generators"
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"
#include "parameters"
#include "clouds"

#if !defined(RECIPROCAL_PI4)
#define RECIPROCAL_PI4 0.07957747154594767
#endif // !defined(RECIPROCAL_PI4)

uniform sampler2D depthBuffer;
uniform mat4 viewMatrix;
uniform mat4 reprojectionMatrix;
uniform mat4 viewReprojectionMatrix;
uniform float cameraNear;
uniform float cameraFar;
uniform float cameraHeight;
uniform vec2 temporalJitter;
uniform vec2 targetUvScale;
uniform float mipLevelScale;

// Scattering
const vec2 scatterAnisotropy = vec2(SCATTER_ANISOTROPY_1, SCATTER_ANISOTROPY_2);
const float scatterAnisotropyMix = SCATTER_ANISOTROPY_MIX;
uniform float skyLightScale;
uniform float groundBounceScale;
uniform float powderScale;
uniform float powderExponent;

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float maxRayDistance;
uniform float perspectiveStepScale;

// Secondary raymarch
uniform int maxIterationCountToSun;
uniform int maxIterationCountToGround;
uniform float minSecondaryStepSize;
uniform float secondaryStepScale;

// Beer shadow map
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowTexelSize;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float maxShadowFilterRadius;

// Shadow length
#ifdef SHADOW_LENGTH
uniform int maxShadowLengthIterationCount;
uniform float minShadowLengthStepSize;
uniform float maxShadowLengthRayDistance;
#endif // SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vCameraDirection; // Direction to the center of screen
in vec3 vRayDirection; // Direction to the texel
in vec3 vViewPosition;
in GroundIrradiance vGroundIrradiance;
in CloudsIrradiance vCloudsIrradiance;

layout(location = 0) out vec4 outputColor;
layout(location = 1) out vec3 outputDepthVelocity;
#ifdef SHADOW_LENGTH
layout(location = 2) out float outputShadowLength;
#endif // SHADOW_LENGTH

float getViewZ(const float depth) {
  #ifdef PERSPECTIVE_CAMERA
  return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
  #else // PERSPECTIVE_CAMERA
  return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
  #endif // PERSPECTIVE_CAMERA
}

vec3 ecefToWorld(const vec3 positionECEF) {
  return (ecefToWorldMatrix * vec4(positionECEF - altitudeCorrection, 1.0)).xyz;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 rayPosition) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    rayPosition,
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

#ifdef DEBUG_SHOW_CASCADES

const vec3 cascadeColors[4] = vec3[4](
  vec3(1.0, 0.0, 0.0),
  vec3(0.0, 1.0, 0.0),
  vec3(0.0, 0.0, 1.0),
  vec3(1.0, 1.0, 0.0)
);

vec3 getCascadeColor(const vec3 rayPosition) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar
  );
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return vec3(1.0);
  }
  return cascadeColors[cascadeIndex];
}

vec3 getFadedCascadeColor(const vec3 rayPosition, const float jitter) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? cascadeColors[cascadeIndex]
    : vec3(1.0);
}

#endif // DEBUG_SHOW_CASCADES

float readShadowOpticalDepth(
  const vec2 uv,
  const float distanceToTop,
  const float distanceOffset,
  const int cascadeIndex
) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  // Also see the discussion here: https://x.com/shotamatsuda/status/1885322308908442106
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  float distanceToFront = max(0.0, distanceToTop - distanceOffset - shadow.r);
  return min(shadow.b + shadow.a, shadow.g * distanceToFront);
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float distanceOffset,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }
  if (radius < 0.1) {
    return readShadowOpticalDepth(uv, distanceToTop, distanceOffset, cascadeIndex);
  }
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy + temporalJitter * resolution) * PI2
    );
    sum += readShadowOpticalDepth(
      uv + offset * radius * shadowTexelSize,
      distanceToTop,
      distanceOffset,
      cascadeIndex
    );
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 rayPosition,
  const float distanceOffset,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(rayPosition);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(
      worldPosition,
      distanceToTop,
      distanceOffset,
      radius,
      cascadeIndex
    )
    : 0.0;
}

#ifdef DEBUG_SHOW_SHADOW_MAP
vec4 getCascadedShadowMaps(vec2 uv) {
  vec4 coord = vec4(vUv, vUv - 0.5) * 2.0;
  vec4 shadow = vec4(0.0);
  if (uv.y > 0.5) {
    if (uv.x < 0.5) {
      shadow = texture(shadowBuffer, vec3(coord.xw, 0.0));
    } else {
      #if SHADOW_CASCADE_COUNT > 1
      shadow = texture(shadowBuffer, vec3(coord.zw, 1.0));
      #endif // SHADOW_CASCADE_COUNT > 1
    }
  } else {
    if (uv.x < 0.5) {
      #if SHADOW_CASCADE_COUNT > 2
      shadow = texture(shadowBuffer, vec3(coord.xy, 2.0));
      #endif // SHADOW_CASCADE_COUNT > 2
    } else {
      #if SHADOW_CASCADE_COUNT > 3
      shadow = texture(shadowBuffer, vec3(coord.zy, 3.0));
      #endif // SHADOW_CASCADE_COUNT > 3
    }
  }

  #if !defined(DEBUG_SHOW_SHADOW_MAP_TYPE)
  #define DEBUG_SHOW_SHADOW_MAP_TYPE 0
  #endif // !defined(DEBUG_SHOW_SHADOW_MAP_TYPE

  const float frontDepthScale = 1e-5;
  const float meanExtinctionScale = 10.0;
  const float maxOpticalDepthScale = 0.01;
  vec3 color;
  #if DEBUG_SHOW_SHADOW_MAP_TYPE == 1
  color = vec3(shadow.r * frontDepthScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 2
  color = vec3(shadow.g * meanExtinctionScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 3
  color = vec3((shadow.b + shadow.a) * maxOpticalDepthScale);
  #else // DEBUG_SHOW_SHADOW_MAP_TYPE
  color =
    (shadow.rgb + vec3(0.0, 0.0, shadow.a)) *
    vec3(frontDepthScale, meanExtinctionScale, maxOpticalDepthScale);
  #endif // DEBUG_SHOW_SHADOW_MAP_TYPE
  return vec4(color, 1.0);
}
#endif // DEBUG_SHOW_SHADOW_MAP

vec2 henyeyGreenstein(const vec2 g, const float cosTheta) {
  vec2 g2 = g * g;
  // prettier-ignore
  return RECIPROCAL_PI4 *
    ((1.0 - g2) / max(vec2(1e-7), pow(1.0 + g2 - 2.0 * g * cosTheta, vec2(1.5))));
}

#ifdef ACCURATE_PHASE_FUNCTION

float draine(float u, float g, float a) {
  float g2 = g * g;
  // prettier-ignore
  return (1.0 - g2) *
    (1.0 + a * u * u) /
    (4.0 * (1.0 + a * (1.0 + 2.0 * g2) / 3.0) * PI * pow(1.0 + g2 - 2.0 * g * u, 1.5));
}

// Numerically-fitted large particles (d=10) phase function It won't be
// plausible without a more precise multiple scattering.
// Reference: https://research.nvidia.com/labs/rtr/approximate-mie/
float phaseFunction(const float cosTheta, const float attenuation) {
  const float gHG = 0.988176691700256; // exp(-0.0990567/(d-1.67154))
  const float gD = 0.5556712547839497; // exp(-2.20679/(d+3.91029) - 0.428934)
  const float alpha = 21.995520856274638; // exp(3.62489 - 8.29288/(d+5.52825))
  const float weight = 0.4819554318404214; // exp(-0.599085/(d-0.641583)-0.665888)
  return mix(
    henyeyGreenstein(vec2(gHG) * attenuation, cosTheta).x,
    draine(cosTheta, gD * attenuation, alpha),
    weight
  );
}

#else // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta, const float attenuation) {
  const vec2 g = scatterAnisotropy;
  const vec2 weights = vec2(1.0 - scatterAnisotropyMix, scatterAnisotropyMix);
  // A similar approximation is described in the Frostbite's paper, where phase
  // angle is attenuated instead of anisotropy.
  return dot(henyeyGreenstein(g * attenuation, cosTheta), weights);
}

#endif // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta) {
  return phaseFunction(cosTheta, 1.0);
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter,
  out float rayDistance
) {
  int iterationCount = int(
    max(0.0, remap(mipLevel, 0.0, 1.0, float(maxIterationCount + 1), 1.0) - jitter)
  );
  if (iterationCount == 0) {
    // Fudge factor to approximate the mean optical depth.
    // TODO: Remove it.
    return 0.5;
  }
  float stepSize = minSecondaryStepSize / float(iterationCount);
  float nextDistance = stepSize * jitter;
  float opticalDepth = 0.0;
  for (int i = 0; i < iterationCount; ++i) {
    rayDistance = nextDistance;
    vec3 position = rayDistance * rayDirection + rayOrigin;
    vec2 uv = getGlobeUv(position);
    float height = length(position) - bottomRadius;
    WeatherSample weather = sampleWeather(uv, height, mipLevel);
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
    opticalDepth += media.extinction * stepSize;
    nextDistance += stepSize;
    stepSize *= secondaryStepScale;
  }
  return opticalDepth;
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter
) {
  float rayDistance;
  return marchOpticalDepth(
    rayOrigin,
    rayDirection,
    maxIterationCount,
    mipLevel,
    jitter,
    rayDistance
  );
}

float approximateMultipleScattering(const float opticalDepth, const float cosTheta) {
  // Multiple scattering approximation
  // See: https://fpsunflower.github.io/ckulla/data/oz_volumes.pdf
  // a: attenuation, b: contribution, c: phase attenuation
  vec3 coeffs = vec3(1.0); // [a, b, c]
  const vec3 attenuation = vec3(0.5, 0.5, 0.5); // Should satisfy a <= b
  float scattering = 0.0;
  float beerLambert;
  #pragma unroll_loop_start
  for (int i = 0; i < 12; ++i) {
    #if UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
    beerLambert = exp(-opticalDepth * coeffs.y);
    scattering += coeffs.x * beerLambert * phaseFunction(cosTheta, coeffs.z);
    coeffs *= attenuation;
    #endif // UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
  }
  #pragma unroll_loop_end
  return scattering;
}

// TODO: Construct spherical harmonics of degree 2 using 2 sample points
// positioned near the horizon occlusion points on the sun direction plane.
vec3 getGroundSunSkyIrradiance(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  out vec3 skyIrradiance
) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyIrradiance(
    (position - surfaceNormal * height) * METER_TO_LENGTH_UNIT,
    surfaceNormal,
    sunDirection,
    skyIrradiance
  );
  #else // ACCURATE_SUN_SKY_LIGHT
  skyIrradiance = vGroundIrradiance.sky;
  return vGroundIrradiance.sun;
  #endif // ACCURATE_SUN_SKY_LIGHT
}

vec3 getCloudsSunSkyIrradiance(const vec3 position, const float height, out vec3 skyIrradiance) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyScalarIrradiance(position * METER_TO_LENGTH_UNIT, sunDirection, skyIrradiance);
  #else // ACCURATE_SUN_SKY_LIGHT
  float alpha = remapClamped(height, minHeight, maxHeight);
  skyIrradiance = mix(vCloudsIrradiance.minSky, vCloudsIrradiance.maxSky, alpha);
  return mix(vCloudsIrradiance.minSun, vCloudsIrradiance.maxSun, alpha);
  #endif // ACCURATE_SUN_SKY_LIGHT
}

#ifdef GROUND_BOUNCE
vec3 approximateRadianceFromGround(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  const float mipLevel,
  const float jitter
) {
  float opticalDepthToGround = marchOpticalDepth(
    position,
    -surfaceNormal,
    maxIterationCountToGround,
    mipLevel,
    jitter
  );
  vec3 skyIrradiance;
  vec3 sunIrradiance = getGroundSunSkyIrradiance(position, surfaceNormal, height, skyIrradiance);
  const float groundAlbedo = 0.3;
  vec3 groundIrradiance = skyIrradiance + (1.0 - coverage) * sunIrradiance;
  vec3 bouncedRadiance = groundAlbedo * RECIPROCAL_PI * groundIrradiance;
  return bouncedRadiance * exp(-opticalDepthToGround);
}
#endif // GROUND_BOUNCE

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float cosTheta,
  const float jitter,
  const float rayStartTexelsPerPixel,
  out float frontDepth,
  out ivec3 sampleCount
) {
  vec3 radianceIntegral = vec3(0.0);
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minStepSize + (perspectiveStepScale - 1.0) * rayNearFar.x;
  // I don't understand why spatial aliasing remains unless doubling the jitter.
  float rayDistance = stepSize * jitter * 2.0;

  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;
    float mipLevel = log2(max(1.0, rayStartTexelsPerPixel + rayDistance * 1e-5));

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.x;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    if (!any(greaterThan(weather.density, vec4(minDensity)))) {
      // Step longer in empty space.
      // TODO: This produces banding artifacts.
      // Possible improvement: Binary search refinement
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }

    // Sample detailed participating media.
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);

    if (media.extinction > minExtinction) {
      vec3 skyIrradiance;
      vec3 sunIrradiance = getCloudsSunSkyIrradiance(position, height, skyIrradiance);
      vec3 surfaceNormal = normalize(position);

      // March optical depth to the sun for finer details, which BSM lacks.
      float sunRayDistance = 0.0;
      float opticalDepth = marchOpticalDepth(
        position,
        sunDirection,
        maxIterationCountToSun,
        mipLevel,
        jitter,
        sunRayDistance
      );

      if (height < shadowTopHeight) {
        // Obtain the optical depth from BSM at the ray position.
        opticalDepth += sampleShadowOpticalDepth(
          position,
          // Take account of only positions further than the marched ray
          // distance.
          sunRayDistance,
          // Apply PCF only when the sun is close to the horizon.
          maxShadowFilterRadius * remapClamped(dot(sunDirection, surfaceNormal), 0.1, 0.0),
          jitter
        );
      }

      vec3 radiance = sunIrradiance * approximateMultipleScattering(opticalDepth, cosTheta);

      #ifdef GROUND_BOUNCE
      // Fudge factor for the irradiance from ground.
      if (height < shadowTopHeight && mipLevel < 0.5) {
        vec3 groundRadiance = approximateRadianceFromGround(
          position,
          surfaceNormal,
          height,
          mipLevel,
          jitter
        );
        radiance += groundRadiance * RECIPROCAL_PI4 * groundBounceScale;
      }
      #endif // GROUND_BOUNCE

      // Crude approximation of sky gradient. Better than none in the shadows.
      float skyGradient = dot(weather.heightFraction * 0.5 + 0.5, media.weight);
      radiance += skyIrradiance * RECIPROCAL_PI4 * skyGradient * skyLightScale;

      // Finally multiply by scattering.
      radiance *= media.scattering;

      #ifdef POWDER
      radiance *= 1.0 - powderScale * exp(-media.extinction * powderExponent);
      #endif // POWDER

      #ifdef DEBUG_SHOW_CASCADES
      if (height < shadowTopHeight) {
        radiance = 1e-3 * getFadedCascadeColor(position, jitter);
      }
      #endif // DEBUG_SHOW_CASCADES

      // Energy-conserving analytical integration of scattered light
      // See 5.6.3 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      float transmittance = exp(-media.extinction * stepSize);
      float clampedExtinction = max(media.extinction, 1e-7);
      vec3 scatteringIntegral = (radiance - radiance * transmittance) / clampedExtinction;
      radianceIntegral += transmittanceIntegral * scatteringIntegral;
      transmittanceIntegral *= transmittance;

      // Aerial perspective affecting clouds
      // See 5.9.1 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      weightedDistanceSum += rayDistance * transmittanceIntegral;
      transmittanceSum += transmittanceIntegral;
    }

    if (transmittanceIntegral <= minTransmittance) {
      break; // Early termination
    }

    // Take a shorter step because we've already hit the clouds.
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }

  // The final product of 5.9.1 and we'll evaluate this in aerial perspective.
  frontDepth = transmittanceSum > 0.0 ? weightedDistanceSum / transmittanceSum : -1.0;

  return vec4(radianceIntegral, remapClamped(transmittanceIntegral, 1.0, minTransmittance));
}

#ifdef SHADOW_LENGTH

float marchShadowLength(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float jitter
) {
  float shadowLength = 0.0;
  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minShadowLengthStepSize;
  float rayDistance = stepSize * jitter;
  const float attenuationFactor = 1.0 - 5e-4;
  float attenuation = 1.0;

  // TODO: This march is closed, and sample resolution can be much lower.
  // Refining the termination by binary search will make it much more efficient.
  for (int i = 0; i < maxShadowLengthIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }
    vec3 position = rayDistance * rayDirection + rayOrigin;
    float opticalDepth = sampleShadowOpticalDepth(position, 0.0, 0.0, jitter);
    shadowLength += (1.0 - exp(-opticalDepth)) * stepSize * attenuation;
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }
  return shadowLength;
}

#endif // SHADOW_LENGTH

#ifdef HAZE

vec4 approximateHaze(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float cosTheta,
  const float shadowLength
) {
  float modulation = remapClamped(coverage, 0.2, 0.4);
  if (cameraHeight * modulation < 0.0) {
    return vec4(0.0);
  }
  float density = modulation * hazeDensityScale * exp(-cameraHeight * hazeExponent);
  if (density < 1e-7) {
    return vec4(0.0); // Prevent artifact in views from space
  }

  // Blend two normals by the difference in angle so that normal near the
  // ground becomes that of the origin, and in the sky that of the horizon.
  vec3 normalAtOrigin = normalize(rayOrigin);
  vec3 normalAtHorizon = (rayOrigin - dot(rayOrigin, rayDirection) * rayDirection) / bottomRadius;
  float alpha = remapClamped(dot(normalAtOrigin, normalAtHorizon), 0.9, 1.0);
  vec3 normal = mix(normalAtOrigin, normalAtHorizon, alpha);

  // Analytical optical depth where density exponentially decreases with height.
  // Based on: https://iquilezles.org/articles/fog/
  float angle = max(dot(normal, rayDirection), 1e-5);
  float exponent = angle * hazeExponent;
  float linearTerm = density / hazeExponent / angle;

  // Derive the optical depths separately for with and without shadow length.
  float expTerm = 1.0 - exp(-maxRayDistance * exponent);
  float shadowExpTerm = 1.0 - exp(-min(maxRayDistance, shadowLength) * exponent);
  float opticalDepth = expTerm * linearTerm;
  float shadowOpticalDepth = max((expTerm - shadowExpTerm) * linearTerm, 0.0);
  float transmittance = saturate(1.0 - exp(-opticalDepth));
  float shadowTransmittance = saturate(1.0 - exp(-shadowOpticalDepth));

  vec3 skyIrradiance = vGroundIrradiance.sky;
  vec3 sunIrradiance = vGroundIrradiance.sun;
  vec3 inscatter = sunIrradiance * phaseFunction(cosTheta) * shadowTransmittance;
  inscatter += skyIrradiance * RECIPROCAL_PI4 * skyLightScale * transmittance;
  inscatter *= hazeScatteringCoefficient / (hazeAbsorptionCoefficient + hazeScatteringCoefficient);
  return vec4(inscatter, transmittance);
}

#endif // HAZE

void applyAerialPerspective(
  const vec3 cameraPosition,
  const vec3 frontPosition,
  const float shadowLength,
  inout vec4 color
) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    cameraPosition * METER_TO_LENGTH_UNIT,
    frontPosition * METER_TO_LENGTH_UNIT,
    shadowLength * METER_TO_LENGTH_UNIT,
    sunDirection,
    transmittance
  );
  color.rgb = color.rgb * transmittance + inscatter * color.a;
}

bool rayIntersectsGround(const vec3 cameraPosition, const vec3 rayDirection) {
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + bottomRadius * bottomRadius >= 0.0;
}

struct IntersectionResult {
  bool ground;
  vec4 first;
  vec4 second;
};

IntersectionResult getIntersections(const vec3 cameraPosition, const vec3 rayDirection) {
  IntersectionResult intersections;
  intersections.ground = rayIntersectsGround(cameraPosition, rayDirection);
  raySphereIntersections(
    cameraPosition,
    rayDirection,
    bottomRadius + vec4(0.0, minHeight, maxHeight, shadowTopHeight),
    intersections.first,
    intersections.second
  );
  return intersections;
}

vec2 getRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < minHeight) {
    // View below the clouds
    if (intersections.ground) {
      nearFar = vec2(-1.0); // No clouds to the ground
    } else {
      nearFar = vec2(intersections.second.y, intersections.second.z);
      nearFar.y = min(nearFar.y, maxRayDistance);
    }
  } else if (cameraHeight < maxHeight) {
    // View inside the total cloud layer
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.y);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    // View above the clouds
    nearFar = vec2(intersections.first.z, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the min height.
      nearFar.y = intersections.first.y;
    }
  }
  return nearFar;
}

#ifdef SHADOW_LENGTH
vec2 getShadowRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < shadowTopHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.w);
    }
  } else {
    nearFar = vec2(intersections.first.w, intersections.second.w);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  nearFar.y = min(nearFar.y, maxShadowLengthRayDistance);
  return nearFar;
}
#endif // SHADOW_LENGTH

#ifdef HAZE
vec2 getHazeRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < maxHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    nearFar = vec2(cameraNear, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  return nearFar;
}
#endif // HAZE

float getRayDistanceToScene(const vec3 rayDirection, out float viewZ) {
  float depth = readDepthValue(depthBuffer, vUv * targetUvScale + temporalJitter);
  if (depth < 1.0 - 1e-7) {
    depth = reverseLogDepth(depth, cameraNear, cameraFar);
    viewZ = getViewZ(depth);
    return -viewZ / dot(rayDirection, vCameraDirection);
  }
  viewZ = 0.0;
  return 0.0;
}

void main() {
  #ifdef DEBUG_SHOW_SHADOW_MAP
  outputColor = getCascadedShadowMaps(vUv);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_SHADOW_MAP

  vec3 cameraPosition = vCameraPosition + altitudeCorrection;
  vec3 rayDirection = normalize(vRayDirection);
  float cosTheta = dot(sunDirection, rayDirection);

  IntersectionResult intersections = getIntersections(cameraPosition, rayDirection);
  vec2 rayNearFar = getRayNearFar(intersections);
  #ifdef SHADOW_LENGTH
  vec2 shadowRayNearFar = getShadowRayNearFar(intersections);
  #endif // SHADOW_LENGTH
  #ifdef HAZE
  vec2 hazeRayNearFar = getHazeRayNearFar(intersections);
  #endif // HAZE

  float sceneViewZ;
  float rayDistanceToScene = getRayDistanceToScene(rayDirection, sceneViewZ);
  if (rayDistanceToScene > 0.0) {
    rayNearFar.y = min(rayNearFar.y, rayDistanceToScene);
    #ifdef SHADOW_LENGTH
    shadowRayNearFar.y = min(shadowRayNearFar.y, rayDistanceToScene);
    #endif // SHADOW_LENGTH
    #ifdef HAZE
    hazeRayNearFar.y = min(hazeRayNearFar.y, rayDistanceToScene);
    #endif // HAZE
  }

  bool intersectsGround = any(lessThan(rayNearFar, vec2(0.0)));
  bool intersectsScene = rayNearFar.y < rayNearFar.x;

  float stbn = getSTBN();

  vec4 color = vec4(0.0);
  float frontDepth = rayNearFar.y;
  vec3 depthVelocity = vec3(0.0);
  float shadowLength = 0.0;
  bool hitClouds = false;

  if (!intersectsGround && !intersectsScene) {
    vec3 rayOrigin = rayNearFar.x * rayDirection + cameraPosition;

    vec2 globeUv = getGlobeUv(rayOrigin);
    #ifdef DEBUG_SHOW_UV
    outputColor = vec4(vec3(checker(globeUv, localWeatherRepeat + localWeatherOffset)), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_UV

    float mipLevel = getMipLevel(globeUv * localWeatherRepeat) * mipLevelScale;
    mipLevel = mix(0.0, mipLevel, min(1.0, 0.2 * cameraHeight / maxHeight));

    float marchedFrontDepth;
    ivec3 sampleCount = ivec3(0);
    color = marchClouds(
      rayOrigin,
      rayDirection,
      rayNearFar,
      cosTheta,
      stbn,
      pow(2.0, mipLevel),
      marchedFrontDepth,
      sampleCount
    );

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    outputColor = vec4(vec3(sampleCount) / vec3(500.0, 5.0, 5.0), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    // Front depth will be -1.0 when no samples are accumulated.
    hitClouds = marchedFrontDepth >= 0.0;
    if (hitClouds) {
      frontDepth = rayNearFar.x + marchedFrontDepth;

      #ifdef SHADOW_LENGTH
      // Clamp the shadow length ray at the clouds.
      shadowRayNearFar.y = mix(
        shadowRayNearFar.y,
        min(frontDepth, shadowRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );

      // Shadow length must be computed before applying aerial perspective.
      if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
        shadowLength = marchShadowLength(
          shadowRayNearFar.x * rayDirection + cameraPosition,
          rayDirection,
          shadowRayNearFar,
          stbn
        );
      }
      #endif // SHADOW_LENGTH

      #ifdef HAZE
      // Clamp the haze ray at the clouds.
      hazeRayNearFar.y = mix(
        hazeRayNearFar.y,
        min(frontDepth, hazeRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );
      #endif // HAZE

      // Apply aerial perspective.
      vec3 frontPosition = cameraPosition + frontDepth * rayDirection;
      applyAerialPerspective(cameraPosition, frontPosition, shadowLength, color);

      // Velocity for temporal resolution.
      vec3 frontPositionWorld = ecefToWorld(frontPosition);
      vec4 prevClip = reprojectionMatrix * vec4(frontPositionWorld, 1.0);
      prevClip /= prevClip.w;
      vec2 prevUv = prevClip.xy * 0.5 + 0.5;
      vec2 velocity = vUv - prevUv;
      depthVelocity = vec3(frontDepth, velocity);
    }
  }

  if (!hitClouds) {
    #ifdef SHADOW_LENGTH
    if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
      shadowLength = marchShadowLength(
        shadowRayNearFar.x * rayDirection + cameraPosition,
        rayDirection,
        shadowRayNearFar,
        stbn
      );
    }
    #endif // SHADOW_LENGTH

    // Velocity for temporal resolution. Here reproject in the view space for
    // greatly reducing the precision errors.
    frontDepth = sceneViewZ < 0.0 ? -sceneViewZ : cameraFar;
    vec3 frontView = vViewPosition * frontDepth;
    vec4 prevClip = viewReprojectionMatrix * vec4(frontView, 1.0);
    prevClip /= prevClip.w;
    vec2 prevUv = prevClip.xy * 0.5 + 0.5;
    vec2 velocity = vUv - prevUv;
    depthVelocity = vec3(frontDepth, velocity);
  }

  #ifdef DEBUG_SHOW_FRONT_DEPTH
  outputColor = vec4(turbo(frontDepth / maxRayDistance), 1.0);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_FRONT_DEPTH

  #ifdef HAZE
  vec4 haze = approximateHaze(
    cameraNear * rayDirection + cameraPosition,
    rayDirection,
    hazeRayNearFar.y - hazeRayNearFar.x,
    cosTheta,
    shadowLength
  );
  color.rgb = mix(color.rgb, haze.rgb, haze.a);
  color.a = color.a * (1.0 - haze.a) + haze.a;
  #endif // HAZE

  outputColor = color;
  outputDepthVelocity = depthVelocity;
  #ifdef SHADOW_LENGTH
  outputShadowLength = shadowLength * METER_TO_LENGTH_UNIT;
  #endif // SHADOW_LENGTH
}
`,zm=`float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

// Straightforward spherical mapping
vec2 getSphericalUv(const vec3 position) {
  vec2 st = normalize(position.yx);
  float phi = atan(st.x, st.y);
  float theta = asin(normalize(position).z);
  return vec2(phi * RECIPROCAL_PI2 + 0.5, theta * RECIPROCAL_PI + 0.5);
}

vec2 getCubeSphereUv(const vec3 position) {
  // Cube-sphere relaxation by: http://mathproofs.blogspot.com/2005/07/mapping-cube-to-sphere.html
  // TODO: Tile and fix seams.
  // Possible improvements:
  // https://iquilezles.org/articles/texturerepetition/
  // https://gamedev.stackexchange.com/questions/184388/fragment-shader-map-dot-texture-repeatedly-over-the-sphere
  // https://github.com/mmikk/hextile-demo

  vec3 n = normalize(position);
  vec3 f = abs(n);
  vec3 c = n / max(f.x, max(f.y, f.z));
  vec2 m;
  if (all(greaterThan(f.yy, f.xz))) {
    m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz;
  } else if (all(greaterThan(f.xx, f.yz))) {
    m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z);
  } else {
    m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y);
  }

  vec2 m2 = m * m;
  float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
  float q2 = q * q;
  vec2 uv;
  uv.x = sqrt(1.5 + m2.x - m2.y - 0.5 * sqrt(-24.0 * m2.x + q2)) * (m.x > 0.0 ? 1.0 : -1.0);
  uv.y = sqrt(6.0 / (3.0 - uv.x * uv.x)) * m.y;
  return uv * 0.5 + 0.5;
}

vec2 getGlobeUv(const vec3 position) {
  return getCubeSphereUv(position);
}

float getMipLevel(const vec2 uv) {
  const float mipLevelScale = 0.1;
  vec2 coord = uv * resolution;
  vec2 ddx = dFdx(coord);
  vec2 ddy = dFdy(coord);
  float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy)) * mipLevelScale;
  return max(0.0, 0.5 * log2(max(1.0, deltaMaxSqr)));
}

bool insideLayerIntervals(const float height) {
  bvec3 gt = greaterThan(vec3(height), minIntervalHeights);
  bvec3 lt = lessThan(vec3(height), maxIntervalHeights);
  return any(bvec3(gt.x && lt.x, gt.y && lt.y, gt.z && lt.z));
}

struct WeatherSample {
  vec4 heightFraction; // Normalized height of each layer
  vec4 density;
};

vec4 shapeAlteringFunction(const vec4 heightFraction, const vec4 bias) {
  // Apply a semi-circle transform to round the clouds towards the top.
  vec4 biased = pow(heightFraction, bias);
  vec4 x = clamp(biased * 2.0 - 1.0, -1.0, 1.0);
  return 1.0 - x * x;
}

WeatherSample sampleWeather(const vec2 uv, const float height, const float mipLevel) {
  WeatherSample weather;
  weather.heightFraction = remapClamped(vec4(height), minLayerHeights, maxLayerHeights);

  vec4 localWeather = pow(
    textureLod(
      localWeatherTexture,
      uv * localWeatherRepeat + localWeatherOffset,
      mipLevel
    ).LOCAL_WEATHER_CHANNELS,
    weatherExponents
  );
  #ifdef SHADOW
  localWeather *= shadowLayerMask;
  #endif // SHADOW

  vec4 heightScale = shapeAlteringFunction(weather.heightFraction, shapeAlteringBiases);

  // Modulation to control weather by coverage parameter.
  // Reference: https://github.com/Prograda/Skybolt/blob/master/Assets/Core/Shaders/Clouds.h#L63
  vec4 factor = 1.0 - coverage * heightScale;
  weather.density = remapClamped(
    mix(localWeather, vec4(1.0), coverageFilterWidths),
    factor,
    factor + coverageFilterWidths
  );

  return weather;
}

vec4 getLayerDensity(const vec4 heightFraction) {
  // prettier-ignore
  return densityProfile.expTerms * exp(densityProfile.exponents * heightFraction) +
    densityProfile.linearTerms * heightFraction +
    densityProfile.constantTerms;
}

struct MediaSample {
  float density;
  vec4 weight;
  float scattering;
  float extinction;
};

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter,
  out ivec3 sampleCount
) {
  vec4 density = weather.density;

  // TODO: Define in physical length.
  vec3 surfaceNormal = normalize(position);
  float localWeatherSpeed = length(localWeatherOffset);
  vec3 evolution = -surfaceNormal * localWeatherSpeed * 2e4;

  vec3 turbulence = vec3(0.0);
  #ifdef TURBULENCE
  vec2 turbulenceUv = uv * localWeatherRepeat * turbulenceRepeat;
  turbulence =
    turbulenceDisplacement *
    (texture(turbulenceTexture, turbulenceUv).rgb * 2.0 - 1.0) *
    dot(density, remapClamped(weather.heightFraction, vec4(0.3), vec4(0.0)));
  #endif // TURBULENCE

  vec3 shapePosition = (position + evolution + turbulence) * shapeRepeat + shapeOffset;
  float shape = texture(shapeTexture, shapePosition).r;
  density = remapClamped(density, vec4(1.0 - shape) * shapeAmounts, vec4(1.0));

  #ifdef DEBUG_SHOW_SAMPLE_COUNT
  ++sampleCount.y;
  #endif // DEBUG_SHOW_SAMPLE_COUNT

  #ifdef SHAPE_DETAIL
  if (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5) {
    vec3 detailPosition = (position + turbulence) * shapeDetailRepeat + shapeDetailOffset;
    float detail = texture(shapeDetailTexture, detailPosition).r;
    // Fluffy at the top and whippy at the bottom.
    vec4 modifier = mix(
      vec4(pow(detail, 6.0)),
      vec4(1.0 - detail),
      remapClamped(weather.heightFraction, vec4(0.2), vec4(0.4))
    );
    modifier = mix(vec4(0.0), modifier, shapeDetailAmounts);
    density = remapClamped(density * 2.0, vec4(modifier * 0.5), vec4(1.0));

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.z;
    #endif // DEBUG_SHOW_SAMPLE_COUNT
  }
  #endif // SHAPE_DETAIL

  // Apply the density profiles.
  density = saturate(density * densityScales * getLayerDensity(weather.heightFraction));

  MediaSample media;
  float densitySum = density.x + density.y + density.z + density.w;
  media.weight = density / densitySum;
  media.scattering = densitySum * scatteringCoefficient;
  media.extinction = densitySum * absorptionCoefficient + media.scattering;
  return media;
}

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter
) {
  ivec3 sampleCount;
  return sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);
}
`,a2=`precision highp float;
precision highp sampler3D;

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

// Atmosphere
uniform float bottomRadius;
uniform vec3 sunDirection;

// Cloud layers
uniform float minHeight;
uniform float maxHeight;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vCameraDirection; // Direction to the center of screen
out vec3 vRayDirection; // Direction to the texel
out vec3 vViewPosition;

out GroundIrradiance vGroundIrradiance;
out CloudsIrradiance vCloudsIrradiance;

void sampleSunSkyIrradiance(const vec3 positionECEF) {
  vGroundIrradiance.sun = GetSunAndSkyScalarIrradiance(
    positionECEF * METER_TO_LENGTH_UNIT,
    sunDirection,
    vGroundIrradiance.sky
  );

  vec3 surfaceNormal = normalize(positionECEF);
  vec2 radii = (bottomRadius + vec2(minHeight, maxHeight)) * METER_TO_LENGTH_UNIT;
  vCloudsIrradiance.minSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.x,
    sunDirection,
    vCloudsIrradiance.minSky
  );
  vCloudsIrradiance.maxSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.y,
    sunDirection,
    vCloudsIrradiance.maxSky
  );
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 viewPosition = (inverseProjectionMatrix * vec4(position, 1.0)).xyz;
  vec3 worldDirection = (inverseViewMatrix * vec4(viewPosition.xyz, 0.0)).xyz;
  vec3 cameraDirection = normalize((inverseViewMatrix * vec4(0.0, 0.0, -1.0, 0.0)).xyz);
  vCameraPosition = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraDirection = (worldToECEFMatrix * vec4(cameraDirection, 0.0)).xyz;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  vViewPosition = viewPosition;

  sampleSunSkyIrradiance(vCameraPosition + altitudeCorrection);

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Gm=`uniform vec2 resolution;
uniform int frame;
uniform sampler3D stbnTexture;

// Atmosphere
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform mat4 ecefToWorldMatrix;
uniform vec3 altitudeCorrection;
uniform vec3 sunDirection;

// Participating medium
uniform float scatteringCoefficient;
uniform float absorptionCoefficient;

// Primary raymarch
uniform float minDensity;
uniform float minExtinction;
uniform float minTransmittance;

// Shape and weather
uniform sampler2D localWeatherTexture;
uniform vec2 localWeatherRepeat;
uniform vec2 localWeatherOffset;
uniform float coverage;
uniform sampler3D shapeTexture;
uniform vec3 shapeRepeat;
uniform vec3 shapeOffset;

#ifdef SHAPE_DETAIL
uniform sampler3D shapeDetailTexture;
uniform vec3 shapeDetailRepeat;
uniform vec3 shapeDetailOffset;
#endif // SHAPE_DETAIL

#ifdef TURBULENCE
uniform sampler2D turbulenceTexture;
uniform vec2 turbulenceRepeat;
uniform float turbulenceDisplacement;
#endif // TURBULENCE

// Haze
#ifdef HAZE
uniform float hazeDensityScale;
uniform float hazeExponent;
uniform float hazeScatteringCoefficient;
uniform float hazeAbsorptionCoefficient;
#endif // HAZE

// Cloud layers
uniform vec4 minLayerHeights;
uniform vec4 maxLayerHeights;
uniform vec3 minIntervalHeights;
uniform vec3 maxIntervalHeights;
uniform vec4 densityScales;
uniform vec4 shapeAmounts;
uniform vec4 shapeDetailAmounts;
uniform vec4 weatherExponents;
uniform vec4 shapeAlteringBiases;
uniform vec4 coverageFilterWidths;
uniform float minHeight;
uniform float maxHeight;
uniform float shadowTopHeight;
uniform float shadowBottomHeight;
uniform vec4 shadowLayerMask;
uniform CloudDensityProfile densityProfile;
`,hd=`struct GroundIrradiance {
  vec3 sun;
  vec3 sky;
};

struct CloudsIrradiance {
  vec3 minSun;
  vec3 minSky;
  vec3 maxSun;
  vec3 maxSky;
};

struct CloudDensityProfile {
  vec4 expTerms;
  vec4 exponents;
  vec4 linearTerms;
  vec4 constantTerms;
};
`,o2=Object.defineProperty,Pn=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&o2(e,t,r),r},c2=new L,l2=new Qn,dn=class extends Qi{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i},r=Qs.DEFAULT){super({name:"CloudsMaterial",glslVersion:hi,vertexShader:$n(a2,{atmosphere:{bruneton:{common:id,definitions:rd,runtime:nd}},types:hd}),fragmentShader:Vr($n(s2,{core:{depth:Nl,math:Gs,turbo:Qh,generators:pm,raySphereIntersection:ks,cascadedShadowMaps:Pl,interleavedGradientNoise:Ll,vogelDisk:Ul},atmosphere:{bruneton:{common:id,definitions:rd,runtime:nd}},types:hd,parameters:Gm,clouds:zm})),uniforms:{...e,...t,...i,depthBuffer:new P(null),viewMatrix:new P(new ke),inverseProjectionMatrix:new P(new ke),inverseViewMatrix:new P(new ke),reprojectionMatrix:new P(new ke),viewReprojectionMatrix:new P(new ke),resolution:new P(new De),cameraNear:new P(0),cameraFar:new P(0),cameraHeight:new P(0),frame:new P(0),temporalJitter:new P(new De),targetUvScale:new P(new De),mipLevelScale:new P(1),stbnTexture:new P(null),skyLightScale:new P(1),groundBounceScale:new P(1),powderScale:new P(.8),powderExponent:new P(150),maxIterationCount:new P(je.clouds.maxIterationCount),minStepSize:new P(je.clouds.minStepSize),maxStepSize:new P(je.clouds.maxStepSize),maxRayDistance:new P(je.clouds.maxRayDistance),perspectiveStepScale:new P(je.clouds.perspectiveStepScale),minDensity:new P(je.clouds.minDensity),minExtinction:new P(je.clouds.minExtinction),minTransmittance:new P(je.clouds.minTransmittance),maxIterationCountToSun:new P(je.clouds.maxIterationCountToSun),maxIterationCountToGround:new P(je.clouds.maxIterationCountToGround),minSecondaryStepSize:new P(je.clouds.minSecondaryStepSize),secondaryStepScale:new P(je.clouds.secondaryStepScale),shadowBuffer:new P(null),shadowTexelSize:new P(new De),shadowIntervals:new P(Array.from({length:4},()=>new De)),shadowMatrices:new P(Array.from({length:4},()=>new ke)),shadowFar:new P(0),maxShadowFilterRadius:new P(6),shadowLayerMask:new P(new ut().setScalar(1)),maxShadowLengthIterationCount:new P(je.clouds.maxShadowLengthIterationCount),minShadowLengthStepSize:new P(je.clouds.minShadowLengthStepSize),maxShadowLengthRayDistance:new P(je.clouds.maxShadowLengthRayDistance),hazeDensityScale:new P(3e-5),hazeExponent:new P(.001),hazeScatteringCoefficient:new P(.9),hazeAbsorptionCoefficient:new P(.5)}},r),this.temporalUpscale=!0,this.depthPacking=0,this.localWeatherChannels="rgba",this.shapeDetail=je.shapeDetail,this.turbulence=je.turbulence,this.shadowLength=je.lightShafts,this.haze=je.haze,this.multiScatteringOctaves=je.clouds.multiScatteringOctaves,this.accurateSunSkyLight=je.clouds.accurateSunSkyLight,this.accuratePhaseFunction=je.clouds.accuratePhaseFunction,this.shadowCascadeCount=je.shadow.cascadeCount,this.shadowSampleCount=8,this.scatterAnisotropy1=.7,this.scatterAnisotropy2=-.2,this.scatterAnisotropyMix=.5}onBeforeRender(e,t,i,r,s,a){let c=this.defines.USE_LOGARITHMIC_DEPTH_BUFFER!=null,l=e.capabilities.logarithmicDepthBuffer;l!==c&&(l?this.defines.USE_LOGARITHMIC_DEPTH_BUFFER="1":delete this.defines.USE_LOGARITHMIC_DEPTH_BUFFER);let u=this.defines.POWDER!=null,h=this.uniforms.powderScale.value>0;h!==u&&(h?this.defines.POWDER="1":delete this.defines.POWDER,this.needsUpdate=!0);let p=this.defines.GROUND_BOUNCE!=null;(this.uniforms.groundBounceScale.value>0&&this.uniforms.maxIterationCountToGround.value>0)!==p&&(h?this.defines.GROUND_BOUNCE="1":delete this.defines.GROUND_BOUNCE,this.needsUpdate=!0)}copyCameraSettings(e){e.isPerspectiveCamera===!0?this.defines.PERSPECTIVE_CAMERA!=="1"&&(this.defines.PERSPECTIVE_CAMERA="1",this.needsUpdate=!0):this.defines.PERSPECTIVE_CAMERA!=null&&(delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0);let t=this.uniforms;t.viewMatrix.value.copy(e.matrixWorldInverse),t.inverseViewMatrix.value.copy(e.matrixWorld);let i=this.previousProjectionMatrix??e.projectionMatrix,r=this.previousViewMatrix??e.matrixWorldInverse,s=t.inverseProjectionMatrix.value,a=t.inverseViewMatrix.value,c=t.reprojectionMatrix.value,l=t.viewReprojectionMatrix.value;if(this.temporalUpscale){let p=t.frame.value%16,d=t.resolution.value,m=Hm[p],y=(m.x-.5)/d.x*4,E=(m.y-.5)/d.y*4;t.temporalJitter.value.set(y,E),t.mipLevelScale.value=.25,s.copy(e.projectionMatrix),s.elements[8]+=y*2,s.elements[9]+=E*2,s.invert(),c.copy(i),c.elements[8]+=y*2,c.elements[9]+=E*2,c.multiply(r),l.copy(c).multiply(a)}else t.temporalJitter.value.setScalar(0),t.mipLevelScale.value=1,s.copy(e.projectionMatrixInverse),c.copy(i).multiply(r),l.copy(c).multiply(a);t.cameraNear.value=e.near,t.cameraFar.value=e.far;let u=e.getWorldPosition(t.cameraPosition.value),h=c2.copy(u).applyMatrix4(t.worldToECEFMatrix.value);try{t.cameraHeight.value=l2.setFromECEF(h).height}catch{}}copyReprojectionMatrix(e){this.previousProjectionMatrix??=new ke,this.previousViewMatrix??=new ke,this.previousProjectionMatrix.copy(e.projectionMatrix),this.previousViewMatrix.copy(e.matrixWorldInverse)}setSize(e,t,i,r){this.uniforms.resolution.value.set(e,t),i!=null&&r!=null?this.uniforms.targetUvScale.value.set(e/i,t/r):this.uniforms.targetUvScale.value.setScalar(1),this.previousProjectionMatrix=void 0,this.previousViewMatrix=void 0}setShadowSize(e,t){this.uniforms.shadowTexelSize.value.set(1/e,1/t)}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}};Pn([Zi("DEPTH_PACKING")],dn.prototype,"depthPacking");Pn([qh("LOCAL_WEATHER_CHANNELS",{validate:n=>/^[rgba]{4}$/.test(n)})],dn.prototype,"localWeatherChannels");Pn([ft("SHAPE_DETAIL")],dn.prototype,"shapeDetail");Pn([ft("TURBULENCE")],dn.prototype,"turbulence");Pn([ft("SHADOW_LENGTH")],dn.prototype,"shadowLength");Pn([ft("HAZE")],dn.prototype,"haze");Pn([Zi("MULTI_SCATTERING_OCTAVES",{min:1,max:12})],dn.prototype,"multiScatteringOctaves");Pn([ft("ACCURATE_SUN_SKY_LIGHT")],dn.prototype,"accurateSunSkyLight");Pn([ft("ACCURATE_PHASE_FUNCTION")],dn.prototype,"accuratePhaseFunction");Pn([Zi("SHADOW_CASCADE_COUNT",{min:1,max:4})],dn.prototype,"shadowCascadeCount");Pn([Zi("SHADOW_SAMPLE_COUNT",{min:1,max:16})],dn.prototype,"shadowSampleCount");Pn([Dl("SCATTER_ANISOTROPY_1")],dn.prototype,"scatterAnisotropy1");Pn([Dl("SCATTER_ANISOTROPY_2")],dn.prototype,"scatterAnisotropy2");Pn([Dl("SCATTER_ANISOTROPY_MIX")],dn.prototype,"scatterAnisotropyMix");var u2=`// Taken from https://gist.github.com/TheRealMJP/c83b8c0f46b63f3a88a5986f4fa982b1
// TODO: Use 5-taps version: https://www.shadertoy.com/view/MtVGWz
// Or even 4 taps (requires preprocessing in the input buffer):
// https://www.shadertoy.com/view/4tyGDD

/**
 * MIT License
 *
 * Copyright (c) 2019 MJP
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

vec4 textureCatmullRom(sampler2D tex, vec2 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));

  // We're going to sample a a 4x4 grid of texels surrounding the target UV
  // coordinate. We'll do this by rounding down the sample location to get the
  // exact center of our "starting" texel. The starting texel will be at
  // location [1, 1] in the grid, where [0, 0] is the top left corner.
  vec2 samplePos = uv * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;

  // Compute the fractional offset from our starting texel to our original
  // sample location, which we'll feed into the Catmull-Rom spline function to
  // get our filter weights.
  vec2 f = samplePos - texPos1;

  // Compute the Catmull-Rom weights using the fractional offset that we
  // calculated earlier. These equations are pre-expanded based on our knowledge
  // of where the texels will be located, which lets us avoid having to evaluate
  // a piece-wise function.
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);

  // Work out weighting factors and sampling offsets that will let us use
  // bilinear filtering to simultaneously evaluate the middle 2 samples from the
  // 4x4 grid.
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);

  // Compute the final UV coordinates we'll use for sampling the texture
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;

  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;

  vec4 result = vec4(0.0);
  result += texture(tex, vec2(texPos0.x, texPos0.y)) * w0.x * w0.y;
  result += texture(tex, vec2(texPos12.x, texPos0.y)) * w12.x * w0.y;
  result += texture(tex, vec2(texPos3.x, texPos0.y)) * w3.x * w0.y;

  result += texture(tex, vec2(texPos0.x, texPos12.y)) * w0.x * w12.y;
  result += texture(tex, vec2(texPos12.x, texPos12.y)) * w12.x * w12.y;
  result += texture(tex, vec2(texPos3.x, texPos12.y)) * w3.x * w12.y;

  result += texture(tex, vec2(texPos0.x, texPos3.y)) * w0.x * w3.y;
  result += texture(tex, vec2(texPos12.x, texPos3.y)) * w12.x * w3.y;
  result += texture(tex, vec2(texPos3.x, texPos3.y)) * w3.x * w3.y;

  return result;
}

vec4 textureCatmullRom(sampler2DArray tex, vec3 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));
  vec2 samplePos = uv.xy * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;
  vec2 f = samplePos - texPos1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;
  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;
  vec4 result = vec4(0.0);
  result += texture(tex, vec3(texPos0.x, texPos0.y, uv.z)) * w0.x * w0.y;
  result += texture(tex, vec3(texPos12.x, texPos0.y, uv.z)) * w12.x * w0.y;
  result += texture(tex, vec3(texPos3.x, texPos0.y, uv.z)) * w3.x * w0.y;
  result += texture(tex, vec3(texPos0.x, texPos12.y, uv.z)) * w0.x * w12.y;
  result += texture(tex, vec3(texPos12.x, texPos12.y, uv.z)) * w12.x * w12.y;
  result += texture(tex, vec3(texPos3.x, texPos12.y, uv.z)) * w3.x * w12.y;
  result += texture(tex, vec3(texPos0.x, texPos3.y, uv.z)) * w0.x * w3.y;
  result += texture(tex, vec3(texPos12.x, texPos3.y, uv.z)) * w12.x * w3.y;
  result += texture(tex, vec3(texPos3.x, texPos3.y, uv.z)) * w3.x * w3.y;
  return result;
}
`,h2=`precision highp float;
precision highp sampler2DArray;

#include "core/turbo"
#include "catmullRomSampling"
#include "varianceClipping"

uniform sampler2D colorBuffer;
uniform sampler2D depthVelocityBuffer;
uniform sampler2D colorHistoryBuffer;

#ifdef SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
uniform sampler2D shadowLengthHistoryBuffer;
#endif // SHADOW_LENGTH

uniform vec2 texelSize;
uniform int frame;
uniform float varianceGamma;
uniform float temporalAlpha;
uniform vec2 jitterOffset;

in vec2 vUv;

layout(location = 0) out vec4 outputColor;
#ifdef SHADOW_LENGTH
layout(location = 1) out float outputShadowLength;
#endif // SHADOW_LENGTH

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

const ivec4[4] bayerIndices = ivec4[4](
  ivec4(0, 12, 3, 15),
  ivec4(8, 4, 11, 7),
  ivec4(2, 14, 1, 13),
  ivec4(10, 6, 9, 5)
);

vec4 getClosestFragment(const ivec2 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(depthVelocityBuffer, coord, 0, neighborOffsets[i]);
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void temporalUpscale(
  const ivec2 coord,
  const ivec2 lowResCoord,
  const bool currentFrame,
  out vec4 outputColor,
  out float outputShadowLength
) {
  vec4 currentColor = texelFetch(colorBuffer, lowResCoord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, lowResCoord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  if (currentFrame) {
    // Use the texel just rendered without any accumulation.
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return;
  }

  vec4 depthVelocity = getClosestFragment(lowResCoord);
  vec2 velocity = depthVelocity.gb;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  // Variance clipping with a large variance gamma seems to work fine for
  // upsampling. This increases ghosting, of course, but it's hard to notice on
  // clouds.
  // vec4 historyColor = textureCatmullRom(colorHistoryBuffer, prevUv);
  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, vUv, currentColor, historyColor, varianceGamma);
  outputColor = clippedColor;

  #ifdef SHADOW_LENGTH
  // Sampling the shadow length history using scene depth doesn't make much
  // sense, but it's too hard to derive it properly. At least this approach
  // resolves the edges of scene objects.
  // vec4 historyShadowLength = vec4(textureCatmullRom(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    vUv,
    currentShadowLength,
    historyShadowLength,
    varianceGamma
  );
  outputShadowLength = clippedShadowLength.r;
  #endif // SHADOW_LENGTH
}

void temporalAntialiasing(const ivec2 coord, out vec4 outputColor, out float outputShadowLength) {
  vec4 currentColor = texelFetch(colorBuffer, coord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, coord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb;

  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, coord, currentColor, historyColor);
  outputColor = mix(clippedColor, currentColor, temporalAlpha);

  #ifdef SHADOW_LENGTH
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    coord,
    currentShadowLength,
    historyShadowLength
  );
  outputShadowLength = mix(clippedShadowLength.r, currentShadowLength.r, temporalAlpha);
  #endif // SHADOW_LENGTH
}

void main() {
  ivec2 coord = ivec2(gl_FragCoord.xy);

  #if !defined(SHADOW_LENGTH)
  float outputShadowLength;
  #endif // !defined(SHADOW_LENGTH)

  #ifdef TEMPORAL_UPSCALE
  ivec2 lowResCoord = coord / 4;
  int bayerValue = bayerIndices[coord.x % 4][coord.y % 4];
  bool currentFrame = bayerValue == frame % 16;
  temporalUpscale(coord, lowResCoord, currentFrame, outputColor, outputShadowLength);
  #else // TEMPORAL_UPSCALE
  temporalAntialiasing(coord, outputColor, outputShadowLength);
  #endif // TEMPORAL_UPSCALE

  #if defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)
  outputColor = vec4(turbo(outputShadowLength * 0.05), 1.0);
  #endif // defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)

  #ifdef DEBUG_SHOW_VELOCITY
  outputColor.rgb = outputColor.rgb + vec3(abs(texture(depthVelocityBuffer, vUv).gb) * 10.0, 0.0);
  #endif // DEBUG_SHOW_VELOCITY
}
`,d2=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,km=`#ifdef VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 8
const ivec2 varianceOffsets[8] = ivec2[8](
  ivec2(-1, -1),
  ivec2(-1, 1),
  ivec2(1, -1),
  ivec2(1, 1),
  ivec2(1, 0),
  ivec2(0, -1),
  ivec2(0, 1),
  ivec2(-1, 0)
);
#else // VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 4
const ivec2 varianceOffsets[4] = ivec2[4](ivec2(1, 0), ivec2(0, -1), ivec2(0, 1), ivec2(-1, 0));
#endif // VARIANCE_9_SAMPLES

// Reference: https://github.com/playdeadgames/temporal
vec4 clipAABB(const vec4 current, const vec4 history, const vec4 minColor, const vec4 maxColor) {
  vec3 pClip = 0.5 * (maxColor.rgb + minColor.rgb);
  vec3 eClip = 0.5 * (maxColor.rgb - minColor.rgb) + 1e-7;
  vec4 vClip = history - vec4(pClip, current.a);
  vec3 vUnit = vClip.xyz / eClip;
  vec3 aUnit = abs(vUnit);
  float maUnit = max(aUnit.x, max(aUnit.y, aUnit.z));
  if (maUnit > 1.0) {
    return vec4(pClip, current.a) + vClip / maUnit;
  }
  return history;
}

#ifdef VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2DArray
#define VARIANCE_SAMPLER_COORD ivec3
#else // VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2D
#define VARIANCE_SAMPLER_COORD ivec2
#endif // VARIANCE_SAMPLER_ARRAY

// Variance clipping
// Reference: https://developer.download.nvidia.com/gameworks/events/GDC2016/msalvi_temporal_supersampling.pdf
vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = texelFetchOffset(inputBuffer, coord, 0, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = textureOffset(inputBuffer, coord, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}
`,f2=Object.defineProperty,Vm=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&f2(e,t,r),r},po=class extends Ei{constructor({colorBuffer:e=null,depthVelocityBuffer:t=null,shadowLengthBuffer:i=null,colorHistoryBuffer:r=null,shadowLengthHistoryBuffer:s=null}={}){super({name:"CloudsResolveMaterial",glslVersion:hi,vertexShader:d2,fragmentShader:Vr($n(h2,{core:{turbo:Qh},catmullRomSampling:u2,varianceClipping:km})),uniforms:{colorBuffer:new P(e),depthVelocityBuffer:new P(t),shadowLengthBuffer:new P(i),colorHistoryBuffer:new P(r),shadowLengthHistoryBuffer:new P(s),texelSize:new P(new De),frame:new P(0),jitterOffset:new P(new De),varianceGamma:new P(2),temporalAlpha:new P(.1)}}),this.temporalUpscale=!0,this.shadowLength=!0}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}onBeforeRender(e,t,i,r,s,a){let c=this.uniforms.frame.value%16,l=Hm[c],u=(l.x-.5)*4,h=(l.y-.5)*4;this.uniforms.jitterOffset.value.set(u,h)}};Vm([ft("TEMPORAL_UPSCALE")],po.prototype,"temporalUpscale");Vm([ft("SHADOW_LENGTH")],po.prototype,"shadowLength");var Fl=class extends In{constructor(e,t){super(e),this._mainCamera=new wi;let{shadow:i}=t;this.shadow=i}get mainCamera(){return this._mainCamera}set mainCamera(e){this._mainCamera=e}};function sd(n,{depthVelocity:e,shadowLength:t}){let i=new gt(1,1,{depthBuffer:!1,type:Pt});i.texture.minFilter=et,i.texture.magFilter=et,i.texture.name=n;let r;e&&(r=i.texture.clone(),r.isRenderTargetTexture=!0,i.depthVelocity=r,i.textures.push(r));let s;return t&&(s=i.texture.clone(),s.isRenderTargetTexture=!0,s.format=Tn,i.shadowLength=s,i.textures.push(s)),Object.assign(i,{depthVelocity:r??null,shadowLength:s??null})}var dd=class extends Fl{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i,...r},s){super("CloudsPass",r),this.atmosphere=s,this.width=0,this.height=0,this.currentMaterial=new dn({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i},s),this.currentPass=new Ha(this.currentMaterial),this.resolveMaterial=new po,this.resolvePass=new Ha(this.resolveMaterial),this.initRenderTargets({depthVelocity:!0,shadowLength:je.lightShafts})}copyCameraSettings(e){this.currentMaterial.copyCameraSettings(e)}initialize(e,t,i){this.currentPass.initialize(e,t,i),this.resolvePass.initialize(e,t,i)}initRenderTargets(e){this.currentRenderTarget?.dispose(),this.resolveRenderTarget?.dispose(),this.historyRenderTarget?.dispose();let t=sd("Clouds",e),i=sd("Clouds.A",{...e,depthVelocity:!1}),r=sd("Clouds.B",{...e,depthVelocity:!1});this.currentRenderTarget=t,this.resolveRenderTarget=i,this.historyRenderTarget=r;let s=this.resolveMaterial.uniforms;s.colorBuffer.value=t.texture,s.depthVelocityBuffer.value=t.depthVelocity,s.shadowLengthBuffer.value=t.shadowLength,s.colorHistoryBuffer.value=r.texture,s.shadowLengthHistoryBuffer.value=r.shadowLength}copyShadow(){let e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){let r=e.cascades[i];t.shadowIntervals.value[i].copy(r.interval),t.shadowMatrices.value[i].copy(r.matrix)}t.shadowFar.value=e.far}copyReprojection(){this.currentMaterial.copyReprojectionMatrix(this.mainCamera)}swapBuffers(){let e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t;let i=this.resolveMaterial.uniforms;i.colorHistoryBuffer.value=t.texture,i.shadowLengthHistoryBuffer.value=t.shadowLength}update(e,t,i){this.currentMaterial.uniforms.frame.value=t,this.resolveMaterial.uniforms.frame.value=t,this.copyCameraSettings(this.mainCamera),this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers()}setSize(e,t){if(this.width=e,this.height=t,this.temporalUpscale){let i=Math.ceil(e/4),r=Math.ceil(t/4);this.currentRenderTarget.setSize(i,r),this.currentMaterial.setSize(i*4,r*4,e,t)}else this.currentRenderTarget.setSize(e,t),this.currentMaterial.setSize(e,t);this.resolveRenderTarget.setSize(e,t),this.resolveMaterial.setSize(e,t),this.historyRenderTarget.setSize(e,t)}setShadowSize(e,t,i){this.currentMaterial.shadowCascadeCount=i,this.currentMaterial.setShadowSize(e,t)}setDepthTexture(e,t){this.currentMaterial.depthBuffer=e,this.currentMaterial.depthPacking=t??0}get outputBuffer(){return this.historyRenderTarget.texture}get shadowBuffer(){return this.currentMaterial.uniforms.shadowBuffer.value}set shadowBuffer(e){this.currentMaterial.uniforms.shadowBuffer.value=e}get shadowLengthBuffer(){return this.historyRenderTarget.shadowLength}get temporalUpscale(){return this.currentMaterial.temporalUpscale}set temporalUpscale(e){e!==this.temporalUpscale&&(this.currentMaterial.temporalUpscale=e,this.resolveMaterial.temporalUpscale=e,this.setSize(this.width,this.height))}get lightShafts(){return this.currentMaterial.shadowLength}set lightShafts(e){e!==this.lightShafts&&(this.currentMaterial.shadowLength=e,this.resolveMaterial.shadowLength=e,this.initRenderTargets({depthVelocity:!0,shadowLength:e}),this.setSize(this.width,this.height))}};function p2(n,e){let t=n.properties.get(e.texture).__webglTexture,i=n.getContext();Ar(i instanceof WebGL2RenderingContext),n.setRenderTarget(e);let r=[];if(t!=null)for(let s=0;s<e.depth;++s)i.framebufferTextureLayer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+s,t,0,s),r.push(i.COLOR_ATTACHMENT0+s);i.drawBuffers(r)}var Hl=class extends Ha{render(e,t,i,r,s){let a=this.fullscreenMaterial.uniforms;t!==null&&a?.[this.input]!=null&&(a[this.input].value=t.texture),p2(e,i),e.render(this.scene,this.camera)}},m2=`precision highp float;
precision highp sampler3D;

#include <common>

#include "core/math"
#include "core/raySphereIntersection"
#include "types"
#include "parameters"
#include "structuredSampling"
#include "clouds"

uniform mat4 inverseShadowMatrices[CASCADE_COUNT];
uniform mat4 reprojectionMatrices[CASCADE_COUNT];

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float opticalDepthTailScale;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

// Redundant notation for prettier.
#if CASCADE_COUNT == 1
layout(location = 1) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 2
layout(location = 2) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 3
layout(location = 3) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 4
layout(location = 4) out vec3 outputDepthVelocity[CASCADE_COUNT];
#endif // CASCADE_COUNT

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float jitter,
  const float mipLevel
) {
  // Setup structured volume sampling (SVS).
  // While SVS introduces spatial aliasing, it is indeed temporally stable,
  // which is important for lower-resolution shadow maps where a flickering
  // single pixel can be highly noticeable.
  vec3 normal = getStructureNormal(rayDirection, jitter);
  float rayDistance;
  float stepSize;
  intersectStructuredPlanes(
    normal,
    rayOrigin,
    rayDirection,
    clamp(maxRayDistance / float(maxIterationCount), minStepSize, maxStepSize),
    rayDistance,
    stepSize
  );

  #ifdef TEMPORAL_JITTER
  rayDistance -= stepSize * jitter;
  #endif // TEMPORAL_JITTER

  float extinctionSum = 0.0;
  float maxOpticalDepth = 0.0;
  float maxOpticalDepthTail = 0.0;
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  int sampleCount = 0;
  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      rayDistance += stepSize;
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    if (any(greaterThan(weather.density, vec4(minDensity)))) {
      // Sample detailed participating media.
      // Note this assumes an homogeneous medium.
      MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
      if (media.extinction > minExtinction) {
        extinctionSum += media.extinction;
        maxOpticalDepth += media.extinction * stepSize;
        transmittanceIntegral *= exp(-media.extinction * stepSize);
        weightedDistanceSum += rayDistance * transmittanceIntegral;
        transmittanceSum += transmittanceIntegral;
        ++sampleCount;
      }
    }

    if (transmittanceIntegral <= minTransmittance) {
      // A large amount of optical depth accumulates in the tail, beyond the
      // point of minimum transmittance. The expected optical depth seems to
      // decrease exponentially with the number of samples taken before reaching
      // the minimum transmittance.
      // See the discussion here: https://x.com/shotamatsuda/status/1886259549931520437
      maxOpticalDepthTail = min(
        opticalDepthTailScale * stepSize * exp(float(1 - sampleCount)),
        stepSize * 0.5 // Excessive optical depth only introduces aliasing.
      );
      break; // Early termination
    }
    rayDistance += stepSize;
  }

  if (sampleCount == 0) {
    return vec4(maxRayDistance, 0.0, 0.0, 0.0);
  }
  float frontDepth = min(weightedDistanceSum / transmittanceSum, maxRayDistance);
  float meanExtinction = extinctionSum / float(sampleCount);
  return vec4(frontDepth, meanExtinction, maxOpticalDepth, maxOpticalDepthTail);
}

void getRayNearFar(
  const vec3 sunPosition,
  const vec3 rayDirection,
  out float rayNear,
  out float rayFar
) {
  vec4 firstIntersections = raySphereFirstIntersection(
    sunPosition,
    rayDirection,
    vec3(0.0),
    bottomRadius + vec4(shadowTopHeight, shadowBottomHeight, 0.0, 0.0)
  );
  rayNear = max(0.0, firstIntersections.x);
  rayFar = firstIntersections.y;
  if (rayFar < 0.0) {
    rayFar = 1e6;
  }
}

void cascade(
  const int cascadeIndex,
  const float mipLevel,
  out vec4 outputColor,
  out vec3 outputDepthVelocity
) {
  vec2 clip = vUv * 2.0 - 1.0;
  vec4 point = inverseShadowMatrices[cascadeIndex] * vec4(clip.xy, -1.0, 1.0);
  point /= point.w;
  vec3 sunPosition = (worldToECEFMatrix * vec4(point.xyz, 1.0)).xyz + altitudeCorrection;

  vec3 rayDirection = normalize(-sunDirection);
  float rayNear;
  float rayFar;
  getRayNearFar(sunPosition, rayDirection, rayNear, rayFar);

  vec3 rayOrigin = rayNear * rayDirection + sunPosition;
  float stbn = getSTBN();
  vec4 color = marchClouds(rayOrigin, rayDirection, rayFar - rayNear, stbn, mipLevel);
  outputColor = color;

  // Velocity for temporal resolution.
  #ifdef TEMPORAL_PASS
  vec3 frontPosition = color.x * rayDirection + rayOrigin;
  vec3 frontPositionWorld = (ecefToWorldMatrix * vec4(frontPosition - altitudeCorrection, 1.0)).xyz;
  vec4 prevClip = reprojectionMatrices[cascadeIndex] * vec4(frontPositionWorld, 1.0);
  prevClip /= prevClip.w;
  vec2 prevUv = prevClip.xy * 0.5 + 0.5;
  vec2 velocity = (vUv - prevUv) * resolution;
  outputDepthVelocity = vec3(color.x, velocity);
  #else // TEMPORAL_PASS
  outputDepthVelocity = vec3(0.0);
  #endif // TEMPORAL_PASS
}

// TODO: Calculate from the main camera frustum perhaps?
const float mipLevels[4] = float[4](0.0, 0.5, 1.0, 2.0);

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, mipLevels[i], outputColor[i], outputDepthVelocity[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,g2=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,v2=`// Implements Structured Volume Sampling in fragment shader:
// https://github.com/huwb/volsample
// Implementation reference:
// https://www.shadertoy.com/view/ttVfDc

void getIcosahedralVertices(const vec3 direction, out vec3 v1, out vec3 v2, out vec3 v3) {
  // Normalization scalers to fit dodecahedron to unit sphere.
  const float a = 0.85065080835204; // phi / sqrt(2 + phi)
  const float b = 0.5257311121191336; // 1 / sqrt(2 + phi)

  // Derive the vertices of icosahedron where triangle intersects the direction.
  // See: https://www.ppsloan.org/publications/AmbientDice.pdf
  const float kT = 0.6180339887498948; // 1 / phi
  const float kT2 = 0.38196601125010515; // 1 / phi^2
  vec3 absD = abs(direction);
  float selector1 = dot(absD, vec3(1.0, kT2, -kT));
  float selector2 = dot(absD, vec3(-kT, 1.0, kT2));
  float selector3 = dot(absD, vec3(kT2, -kT, 1.0));
  v1 = selector1 > 0.0 ? vec3(a, b, 0.0) : vec3(-b, 0.0, a);
  v2 = selector2 > 0.0 ? vec3(0.0, a, b) : vec3(a, -b, 0.0);
  v3 = selector3 > 0.0 ? vec3(b, 0.0, a) : vec3(0.0, a, -b);
  vec3 octantSign = sign(direction);
  v1 *= octantSign;
  v2 *= octantSign;
  v3 *= octantSign;
}

void swapIfBigger(inout vec4 a, inout vec4 b) {
  if (a.w > b.w) {
    vec4 t = a;
    a = b;
    b = t;
  }
}

void sortVertices(inout vec3 a, inout vec3 b, inout vec3 c) {
  const vec3 base = vec3(0.5, 0.5, 1.0);
  vec4 aw = vec4(a, dot(a, base));
  vec4 bw = vec4(b, dot(b, base));
  vec4 cw = vec4(c, dot(c, base));
  swapIfBigger(aw, bw);
  swapIfBigger(bw, cw);
  swapIfBigger(aw, bw);
  a = aw.xyz;
  b = bw.xyz;
  c = cw.xyz;
}

vec3 getPentagonalWeights(const vec3 direction, const vec3 v1, const vec3 v2, const vec3 v3) {
  float d1 = dot(v1, direction);
  float d2 = dot(v2, direction);
  float d3 = dot(v3, direction);
  vec3 w = exp(vec3(d1, d2, d3) * 40.0);
  return w / (w.x + w.y + w.z);
}

vec3 getStructureNormal(
  const vec3 direction,
  const float jitter,
  out vec3 a,
  out vec3 b,
  out vec3 c,
  out vec3 weights
) {
  getIcosahedralVertices(direction, a, b, c);
  sortVertices(a, b, c);
  weights = getPentagonalWeights(direction, a, b, c);
  return jitter < weights.x
    ? a
    : jitter < weights.x + weights.y
      ? b
      : c;
}

vec3 getStructureNormal(const vec3 direction, const float jitter) {
  vec3 a, b, c, weights;
  return getStructureNormal(direction, jitter, a, b, c, weights);
}

// Reference: https://github.com/huwb/volsample/blob/master/src/unity/Assets/Shaders/RayMarchCore.cginc
void intersectStructuredPlanes(
  const vec3 normal,
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float samplePeriod,
  out float stepOffset,
  out float stepSize
) {
  float NoD = dot(rayDirection, normal);
  stepSize = samplePeriod / abs(NoD);

  // Skips leftover bit to get from rayOrigin to first strata plane.
  stepOffset = -mod(dot(rayOrigin, normal), samplePeriod) / NoD;

  // mod() gives different results depending on if the arg is negative or
  // positive. This line makes it consistent, and ensures the first sample is in
  // front of the viewer.
  if (stepOffset < 0.0) {
    stepOffset += stepSize;
  }
}
`,x2=Object.defineProperty,$s=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&x2(e,t,r),r},$i=class extends Ei{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i}){super({name:"ShadowMaterial",glslVersion:hi,vertexShader:g2,fragmentShader:Vr($n(m2,{core:{math:Gs,raySphereIntersection:ks},types:hd,parameters:Gm,structuredSampling:v2,clouds:zm})),uniforms:{...e,...t,...i,inverseShadowMatrices:new P(Array.from({length:4},()=>new ke)),reprojectionMatrices:new P(Array.from({length:4},()=>new ke)),resolution:new P(new De),frame:new P(0),stbnTexture:new P(null),maxIterationCount:new P(je.shadow.maxIterationCount),minStepSize:new P(je.shadow.minStepSize),maxStepSize:new P(je.shadow.maxStepSize),minDensity:new P(je.shadow.minDensity),minExtinction:new P(je.shadow.minExtinction),minTransmittance:new P(je.shadow.minTransmittance),opticalDepthTailScale:new P(2)},defines:{SHADOW:"1",TEMPORAL_PASS:"1",TEMPORAL_JITTER:"1"}}),this.localWeatherChannels="rgba",this.cascadeCount=je.shadow.cascadeCount,this.temporalPass=!0,this.temporalJitter=!0,this.shapeDetail=je.shapeDetail,this.turbulence=je.turbulence,this.cascadeCount=je.shadow.cascadeCount}setSize(e,t){this.uniforms.resolution.value.set(e,t)}};$s([qh("LOCAL_WEATHER_CHANNELS",{validate:n=>/^[rgba]{4}$/.test(n)})],$i.prototype,"localWeatherChannels");$s([Zi("CASCADE_COUNT",{min:1,max:4})],$i.prototype,"cascadeCount");$s([ft("TEMPORAL_PASS")],$i.prototype,"temporalPass");$s([ft("TEMPORAL_JITTER")],$i.prototype,"temporalJitter");$s([ft("SHAPE_DETAIL")],$i.prototype,"shapeDetail");$s([ft("TURBULENCE")],$i.prototype,"turbulence");var _2=`precision highp float;
precision highp sampler2DArray;

#define VARIANCE_9_SAMPLES 1
#define VARIANCE_SAMPLER_ARRAY 1

#include "varianceClipping"

uniform sampler2DArray inputBuffer;
uniform sampler2DArray historyBuffer;

uniform vec2 texelSize;
uniform float varianceGamma;
uniform float temporalAlpha;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

vec4 getClosestFragment(const ivec3 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(
      inputBuffer,
      coord + ivec3(0, 0, CASCADE_COUNT),
      0,
      neighborOffsets[i]
    );
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void cascade(const int cascadeIndex, out vec4 outputColor) {
  ivec3 coord = ivec3(gl_FragCoord.xy, cascadeIndex);
  vec4 current = texelFetch(inputBuffer, coord, 0);

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb * texelSize;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = current;
    return; // Rejection
  }

  vec4 history = texture(historyBuffer, vec3(prevUv, float(cascadeIndex)));
  vec4 clippedHistory = varianceClipping(inputBuffer, coord, current, history, varianceGamma);
  outputColor = mix(clippedHistory, current, temporalAlpha);
}

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, outputColor[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,y2=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,S2=Object.defineProperty,A2=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&S2(e,t,r),r},zl=class extends Ei{constructor({inputBuffer:e=null,historyBuffer:t=null}={}){super({name:"ShadowResolveMaterial",glslVersion:hi,vertexShader:y2,fragmentShader:Vr($n(_2,{varianceClipping:km})),uniforms:{inputBuffer:new P(e),historyBuffer:new P(t),texelSize:new P(new De),varianceGamma:new P(1),temporalAlpha:new P(.01)},defines:{}}),this.cascadeCount=je.shadow.cascadeCount}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}};A2([Zi("CASCADE_COUNT",{min:1,max:4})],zl.prototype,"cascadeCount");function ad(n){let e=new ma(1,1,1,{depthBuffer:!1});return e.texture.type=Pt,e.texture.minFilter=et,e.texture.magFilter=et,e.texture.name=n,e}var fd=class extends Fl{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i,...r}){super("ShadowPass",r),this.width=0,this.height=0,this.currentMaterial=new $i({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i}),this.currentPass=new Hl(this.currentMaterial),this.resolveMaterial=new zl,this.resolvePass=new Hl(this.resolveMaterial),this.initRenderTargets()}initialize(e,t,i){this.currentPass.initialize(e,t,i),this.resolvePass.initialize(e,t,i)}initRenderTargets(){this.currentRenderTarget?.dispose(),this.resolveRenderTarget?.dispose(),this.historyRenderTarget?.dispose();let e=ad("Shadow"),t=this.temporalPass?ad("Shadow.A"):null,i=this.temporalPass?ad("Shadow.B"):null;this.currentRenderTarget=e,this.resolveRenderTarget=t,this.historyRenderTarget=i;let r=this.resolveMaterial.uniforms;r.inputBuffer.value=e.texture,r.historyBuffer.value=i?.texture??null}copyShadow(){let e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){let r=e.cascades[i];t.inverseShadowMatrices.value[i].copy(r.inverseMatrix)}}copyReprojection(){let e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){let r=e.cascades[i];t.reprojectionMatrices.value[i].copy(r.matrix)}}swapBuffers(){Ar(this.historyRenderTarget!=null),Ar(this.resolveRenderTarget!=null);let e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t,this.resolveMaterial.uniforms.historyBuffer.value=t.texture}update(e,t,i){this.currentMaterial.uniforms.frame.value=t,this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.temporalPass&&(Ar(this.resolveRenderTarget!=null),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers())}setSize(e,t,i=this.shadow.cascadeCount){this.width=e,this.height=t,this.currentMaterial.cascadeCount=i,this.resolveMaterial.cascadeCount=i,this.currentMaterial.setSize(e,t),this.resolveMaterial.setSize(e,t),this.currentRenderTarget.setSize(e,t,this.temporalPass?i*2:i),this.resolveRenderTarget?.setSize(e,t,i),this.historyRenderTarget?.setSize(e,t,i)}get outputBuffer(){return this.temporalPass?(Ar(this.historyRenderTarget!=null),this.historyRenderTarget.texture):this.currentRenderTarget.texture}get temporalPass(){return this.currentMaterial.temporalPass}set temporalPass(e){e!==this.temporalPass&&(this.currentMaterial.temporalPass=e,this.initRenderTargets(),this.setSize(this.width,this.height))}};function T2(n){return{scatteringCoefficient:new P(1),absorptionCoefficient:new P(0),coverage:new P(.3),localWeatherTexture:new P(n.localWeatherTexture),localWeatherRepeat:new P(n.localWeatherRepeat),localWeatherOffset:new P(n.localWeatherOffset),shapeTexture:new P(n.shapeTexture),shapeRepeat:new P(n.shapeRepeat),shapeOffset:new P(n.shapeOffset),shapeDetailTexture:new P(n.shapeDetailTexture),shapeDetailRepeat:new P(n.shapeDetailRepeat),shapeDetailOffset:new P(n.shapeDetailOffset),turbulenceTexture:new P(n.turbulenceTexture),turbulenceRepeat:new P(n.turbulenceRepeat),turbulenceDisplacement:new P(350)}}function E2(){return{minLayerHeights:new P(new ut),maxLayerHeights:new P(new ut),minIntervalHeights:new P(new L),maxIntervalHeights:new P(new L),densityScales:new P(new ut),shapeAmounts:new P(new ut),shapeDetailAmounts:new P(new ut),weatherExponents:new P(new ut),shapeAlteringBiases:new P(new ut),coverageFilterWidths:new P(new ut),minHeight:new P(0),maxHeight:new P(0),shadowTopHeight:new P(0),shadowBottomHeight:new P(0),shadowLayerMask:new P(new ut),densityProfile:new P({expTerms:new ut,exponents:new ut,linearTerms:new ut,constantTerms:new ut})}}var od=[0,0,0,0];function w2(n,e){e.packValues("altitude",n.minLayerHeights.value),e.packSums("altitude","height",n.maxLayerHeights.value),e.packIntervalHeights(n.minIntervalHeights.value,n.maxIntervalHeights.value),e.packValues("densityScale",n.densityScales.value),e.packValues("shapeAmount",n.shapeAmounts.value),e.packValues("shapeDetailAmount",n.shapeDetailAmounts.value),e.packValues("weatherExponent",n.weatherExponents.value),e.packValues("shapeAlteringBias",n.shapeAlteringBiases.value),e.packValues("coverageFilterWidth",n.coverageFilterWidths.value);let t=n.densityProfile.value;e.packDensityProfiles("expTerm",t.expTerms),e.packDensityProfiles("exponent",t.exponents),e.packDensityProfiles("linearTerm",t.linearTerms),e.packDensityProfiles("constantTerm",t.constantTerms);let i=1/0,r=0,s=1/0,a=0;od.fill(0);for(let c=0;c<e.length;++c){let{altitude:l,height:u,shadow:h}=e[c],p=l+u;u>0&&(l<i&&(i=l),h&&l<s&&(s=l),p>r&&(r=p),h&&p>a&&(a=p)),od[c]=h?1:0}i!==1/0?(n.minHeight.value=i,n.maxHeight.value=r):(Ar(r===0),n.minHeight.value=0),s!==1/0?(n.shadowBottomHeight.value=s,n.shadowTopHeight.value=a):(Ar(a===0),n.shadowBottomHeight.value=0),n.shadowLayerMask.value.fromArray(od)}function M2(n,e){return{bottomRadius:new P(n.bottomRadius),topRadius:new P(n.topRadius),worldToECEFMatrix:new P(e.worldToECEFMatrix),ecefToWorldMatrix:new P(e.ecefToWorldMatrix),altitudeCorrection:new P(e.altitudeCorrection),sunDirection:new P(e.sunDirection)}}var b2=`uniform sampler2D cloudsBuffer;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #ifdef SKIP_RENDERING
  outputColor = inputColor;
  #else // SKIP_RENDERING
  vec4 clouds = texture(cloudsBuffer, uv);
  outputColor.rgb = inputColor.rgb * (1.0 - clouds.a) + clouds.rgb;
  outputColor.a = inputColor.a * (1.0 - clouds.a) + clouds.a;
  #endif // SKIP_RENDERING
}
`,C2=Object.defineProperty,R2=(n,e,t,i)=>{for(var r=void 0,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(e,t,r)||r);return r&&C2(e,t,r),r},ho=new L,I2=new De,D2=new Qe,P2=["maxIterationCount","minStepSize","maxStepSize","maxRayDistance","perspectiveStepScale","minDensity","minExtinction","minTransmittance","maxIterationCountToSun","maxIterationCountToGround","minSecondaryStepSize","secondaryStepScale","maxShadowFilterRadius","maxShadowLengthIterationCount","minShadowLengthStepSize","maxShadowLengthRayDistance","hazeDensityScale","hazeExponent","hazeScatteringCoefficient","hazeAbsorptionCoefficient"],N2=["multiScatteringOctaves","accurateSunSkyLight","accuratePhaseFunction"],L2=["maxIterationCount","minStepSize","maxStepSize","minDensity","minExtinction","minTransmittance","opticalDepthTailScale"],U2=["temporalJitter"],O2=["temporalPass"],B2=["cascadeCount","mapSize","maxFar","farScale","splitMode","splitLambda"],ji={type:"change"},Wm={resolutionScale:je.resolutionScale,width:Hr.AUTO_SIZE,height:Hr.AUTO_SIZE},Js=class extends zr{constructor(e=new wi,t,i=Qs.DEFAULT){super("CloudsEffect",b2,{attributes:di.DEPTH,uniforms:new Map([["cloudsBuffer",new P(null)]])}),this.camera=e,this.atmosphere=i,this.cloudLayers=Fm.DEFAULT.clone(),this.correctAltitude=!0,this.localWeatherRepeat=new De().setScalar(100),this.localWeatherOffset=new De,this.shapeRepeat=new L().setScalar(3e-4),this.shapeOffset=new L,this.shapeDetailRepeat=new L().setScalar(.006),this.shapeDetailOffset=new L,this.turbulenceRepeat=new De().setScalar(20),this.worldToECEFMatrix=new ke,this.ecefToWorldMatrix=new ke,this.altitudeCorrection=new L,this.sunDirection=new L,this.localWeatherVelocity=new De,this.shapeVelocity=new L,this.shapeDetailVelocity=new L,this._atmosphereOverlay=null,this._atmosphereShadow=null,this._atmosphereShadowLength=null,this.events=new sn,this.frame=0,this.shadowCascadeCount=0,this.shadowMapSize=new De,this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.skipRendering=!0;let{resolutionScale:r,width:s,height:a,resolutionX:c=s,resolutionY:l=a}={...Wm,...t};this.shadowMaps=new ud({cascadeCount:je.shadow.cascadeCount,mapSize:je.shadow.mapSize,splitLambda:.6}),this.parameterUniforms=T2({localWeatherTexture:this.proceduralLocalWeather?.texture??null,localWeatherRepeat:this.localWeatherRepeat,localWeatherOffset:this.localWeatherOffset,shapeTexture:this.proceduralShape?.texture??null,shapeRepeat:this.shapeRepeat,shapeOffset:this.shapeOffset,shapeDetailTexture:this.proceduralShapeDetail?.texture??null,shapeDetailRepeat:this.shapeDetailRepeat,shapeDetailOffset:this.shapeDetailOffset,turbulenceTexture:this.proceduralTurbulence?.texture??null,turbulenceRepeat:this.turbulenceRepeat}),this.layerUniforms=E2(),this.atmosphereUniforms=M2(i,{worldToECEFMatrix:this.worldToECEFMatrix,ecefToWorldMatrix:this.ecefToWorldMatrix,altitudeCorrection:this.altitudeCorrection,sunDirection:this.sunDirection});let u={shadow:this.shadowMaps,parameterUniforms:this.parameterUniforms,layerUniforms:this.layerUniforms,atmosphereUniforms:this.atmosphereUniforms};this.shadowPass=new fd(u),this.shadowPass.mainCamera=e,this.cloudsPass=new dd(u,i),this.cloudsPass.mainCamera=e,this.clouds=Zh(Kh({},this.cloudsPass.currentMaterial,P2),this.cloudsPass.currentMaterial,N2),this.shadow=Zh(Kh({},this.shadowPass.currentMaterial,L2),this.shadowPass.currentMaterial,U2,this.shadowPass,O2,this.shadowMaps,B2),this.resolution=new Hr(this,c,l,r),this.resolution.addEventListener("change",this.onResolutionChange)}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e,this.shadowPass.mainCamera=e,this.cloudsPass.mainCamera=e}initialize(e,t,i){this.shadowPass.initialize(e,t,i),this.cloudsPass.initialize(e,t,i)}updateSharedUniforms(e){w2(this.layerUniforms,this.cloudLayers);let{parameterUniforms:t}=this;t.localWeatherOffset.value.add(I2.copy(this.localWeatherVelocity).multiplyScalar(e)),t.shapeOffset.value.add(ho.copy(this.shapeVelocity).multiplyScalar(e)),t.shapeDetailOffset.value.add(ho.copy(this.shapeDetailVelocity).multiplyScalar(e));let i=this.worldToECEFMatrix;this.ecefToWorldMatrix.copy(i).invert();let r=this.camera.getWorldPosition(ho).applyMatrix4(this.worldToECEFMatrix),s=this.altitudeCorrection;this.correctAltitude?Ws(r,this.atmosphere.bottomRadius,this.ellipsoid,s):s.setScalar(0);let a=this.ellipsoid.getSurfaceNormal(r,ho),c=this.sunDirection.dot(a),l=Yh(1e6,1e3,c),u=D2.setFromMatrix4(i).transpose();this.shadowMaps.update(this.camera,ho.copy(this.sunDirection).applyMatrix3(u),l)}updateWeatherTextureChannels(){let e=this.cloudLayers.localWeatherChannels;this.cloudsPass.currentMaterial.localWeatherChannels=e,this.shadowPass.currentMaterial.localWeatherChannels=e}updateAtmosphereComposition(){let{shadowMaps:e,shadowPass:t,cloudsPass:i}=this,r=t.currentMaterial.uniforms,s=i.currentMaterial.uniforms,a=this._atmosphereOverlay,c=Object.assign(this._atmosphereOverlay??{},{map:i.outputBuffer});a!==c&&(this._atmosphereOverlay=c,ji.target=this,ji.property="atmosphereOverlay",this.events.dispatchEvent(ji));let l=this._atmosphereShadow,u=Object.assign(this._atmosphereShadow??{},{map:t.outputBuffer,mapSize:e.mapSize,cascadeCount:e.cascadeCount,intervals:s.shadowIntervals.value,matrices:s.shadowMatrices.value,inverseMatrices:r.inverseShadowMatrices.value,far:e.far,topHeight:s.shadowTopHeight.value});l!==u&&(this._atmosphereShadow=u,ji.target=this,ji.property="atmosphereShadow",this.events.dispatchEvent(ji));let h=this._atmosphereShadowLength,p=i.shadowLengthBuffer!=null?Object.assign(this._atmosphereShadowLength??{},{map:i.shadowLengthBuffer}):null;h!==p&&(this._atmosphereShadowLength=p,ji.target=this,ji.property="atmosphereShadowLength",this.events.dispatchEvent(ji))}update(e,t,i=0){let{shadowMaps:r,shadowPass:s,cloudsPass:a}=this;if(r.cascadeCount!==this.shadowCascadeCount||!r.mapSize.equals(this.shadowMapSize)){let{width:c,height:l}=r.mapSize,u=r.cascadeCount;this.shadowMapSize.set(c,l),this.shadowCascadeCount=u,s.setSize(c,l,u),a.setShadowSize(c,l,u)}this.proceduralLocalWeather?.render(e,i),this.proceduralShape?.render(e,i),this.proceduralShapeDetail?.render(e,i),this.proceduralTurbulence?.render(e,i),++this.frame,this.updateSharedUniforms(i),this.updateWeatherTextureChannels(),s.update(e,this.frame,i),a.shadowBuffer=s.outputBuffer,a.update(e,this.frame,i),this.updateAtmosphereComposition(),this.uniforms.get("cloudsBuffer").value=this.cloudsPass.outputBuffer}setSize(e,t){let{resolution:i}=this;i.setBaseSize(e,t);let{width:r,height:s}=i;this.cloudsPass.setSize(r,s)}setDepthTexture(e,t){this.shadowPass.setDepthTexture(e,t),this.cloudsPass.setDepthTexture(e,t)}set qualityPreset(e){let{clouds:t,shadow:i,...r}=r2[e];Object.assign(this,r),Object.assign(this.clouds,t),Object.assign(this.shadow,i)}get localWeatherTexture(){return this.proceduralLocalWeather??this.parameterUniforms.localWeatherTexture.value}set localWeatherTexture(e){e instanceof Xt||e==null?(this.proceduralLocalWeather=void 0,this.parameterUniforms.localWeatherTexture.value=e):(this.proceduralLocalWeather=e,this.parameterUniforms.localWeatherTexture.value=e.texture)}get shapeTexture(){return this.proceduralShape??this.parameterUniforms.shapeTexture.value}set shapeTexture(e){e instanceof un||e==null?(this.proceduralShape=void 0,this.parameterUniforms.shapeTexture.value=e):(this.proceduralShape=e,this.parameterUniforms.shapeTexture.value=e.texture)}get shapeDetailTexture(){return this.proceduralShapeDetail??this.parameterUniforms.shapeDetailTexture.value}set shapeDetailTexture(e){e instanceof un||e==null?(this.proceduralShapeDetail=void 0,this.parameterUniforms.shapeDetailTexture.value=e):(this.proceduralShapeDetail=e,this.parameterUniforms.shapeDetailTexture.value=e.texture)}get turbulenceTexture(){return this.proceduralTurbulence??this.parameterUniforms.turbulenceTexture.value}set turbulenceTexture(e){e instanceof Xt||e==null?(this.proceduralTurbulence=void 0,this.parameterUniforms.turbulenceTexture.value=e):(this.proceduralTurbulence=e,this.parameterUniforms.turbulenceTexture.value=e.texture)}get stbnTexture(){return this.cloudsPass.currentMaterial.uniforms.stbnTexture.value}set stbnTexture(e){this.cloudsPass.currentMaterial.uniforms.stbnTexture.value=e,this.shadowPass.currentMaterial.uniforms.stbnTexture.value=e}get resolutionScale(){return this.resolution.scale}set resolutionScale(e){this.resolution.scale=e}get temporalUpscale(){return this.cloudsPass.temporalUpscale}set temporalUpscale(e){this.cloudsPass.temporalUpscale=e}get lightShafts(){return this.cloudsPass.lightShafts}set lightShafts(e){this.cloudsPass.lightShafts=e}get shapeDetail(){return this.cloudsPass.currentMaterial.shapeDetail}set shapeDetail(e){this.cloudsPass.currentMaterial.shapeDetail=e,this.shadowPass.currentMaterial.shapeDetail=e}get turbulence(){return this.cloudsPass.currentMaterial.turbulence}set turbulence(e){this.cloudsPass.currentMaterial.turbulence=e,this.shadowPass.currentMaterial.turbulence=e}get haze(){return this.cloudsPass.currentMaterial.haze}set haze(e){this.cloudsPass.currentMaterial.haze=e}get scatteringCoefficient(){return this.parameterUniforms.scatteringCoefficient.value}set scatteringCoefficient(e){this.parameterUniforms.scatteringCoefficient.value=e}get absorptionCoefficient(){return this.parameterUniforms.absorptionCoefficient.value}set absorptionCoefficient(e){this.parameterUniforms.absorptionCoefficient.value=e}get coverage(){return this.parameterUniforms.coverage.value}set coverage(e){this.parameterUniforms.coverage.value=e}get turbulenceDisplacement(){return this.parameterUniforms.turbulenceDisplacement.value}set turbulenceDisplacement(e){this.parameterUniforms.turbulenceDisplacement.value=e}get scatterAnisotropy1(){return this.cloudsPass.currentMaterial.scatterAnisotropy1}set scatterAnisotropy1(e){this.cloudsPass.currentMaterial.scatterAnisotropy1=e}get scatterAnisotropy2(){return this.cloudsPass.currentMaterial.scatterAnisotropy2}set scatterAnisotropy2(e){this.cloudsPass.currentMaterial.scatterAnisotropy2=e}get scatterAnisotropyMix(){return this.cloudsPass.currentMaterial.scatterAnisotropyMix}set scatterAnisotropyMix(e){this.cloudsPass.currentMaterial.scatterAnisotropyMix=e}get skyLightScale(){return this.cloudsPass.currentMaterial.uniforms.skyLightScale.value}set skyLightScale(e){this.cloudsPass.currentMaterial.uniforms.skyLightScale.value=e}get groundBounceScale(){return this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value}set groundBounceScale(e){this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value=e}get powderScale(){return this.cloudsPass.currentMaterial.uniforms.powderScale.value}set powderScale(e){this.cloudsPass.currentMaterial.uniforms.powderScale.value=e}get powderExponent(){return this.cloudsPass.currentMaterial.uniforms.powderExponent.value}set powderExponent(e){this.cloudsPass.currentMaterial.uniforms.powderExponent.value=e}get atmosphereOverlay(){return this._atmosphereOverlay}get atmosphereShadow(){return this._atmosphereShadow}get atmosphereShadowLength(){return this._atmosphereShadowLength}get irradianceTexture(){return this.cloudsPass.currentMaterial.irradianceTexture}set irradianceTexture(e){this.cloudsPass.currentMaterial.irradianceTexture=e}get scatteringTexture(){return this.cloudsPass.currentMaterial.scatteringTexture}set scatteringTexture(e){this.cloudsPass.currentMaterial.scatteringTexture=e}get transmittanceTexture(){return this.cloudsPass.currentMaterial.transmittanceTexture}set transmittanceTexture(e){this.cloudsPass.currentMaterial.transmittanceTexture=e}get singleMieScatteringTexture(){return this.cloudsPass.currentMaterial.singleMieScatteringTexture}set singleMieScatteringTexture(e){this.cloudsPass.currentMaterial.singleMieScatteringTexture=e}get higherOrderScatteringTexture(){return this.cloudsPass.currentMaterial.higherOrderScatteringTexture}set higherOrderScatteringTexture(e){this.cloudsPass.currentMaterial.higherOrderScatteringTexture=e}get ellipsoid(){return this.cloudsPass.currentMaterial.ellipsoid}set ellipsoid(e){this.cloudsPass.currentMaterial.ellipsoid=e}get sunAngularRadius(){return this.cloudsPass.currentMaterial.sunAngularRadius}set sunAngularRadius(e){this.cloudsPass.currentMaterial.sunAngularRadius=e}};R2([ft("SKIP_RENDERING")],Js.prototype,"skipRendering");var pd=128,md=32,Gl="45a1c6c1bb9fd38b3680fd120795ff4c32df68ff",F2=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Gl}/packages/clouds/assets/local_weather.png`,H2=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Gl}/packages/clouds/assets/shape.bin`,z2=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Gl}/packages/clouds/assets/shape_detail.bin`,G2=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${Gl}/packages/clouds/assets/turbulence.png`;if(typeof document!=="undefined"){
var Ad=n=>document.getElementById(n),Ln=window.skyState,Wr=ip(Ln.target),Nn=0,kl=0,Tr,vd,ea=Ln.target,ta=matchMedia("(prefers-reduced-motion: reduce)"),fC=ta.matches,Td=!1,gd=0,Vl=0,xd=performance.now();var Wl=.19;var _d=38,mo=new Qn(Pi(46.6753),Pi(24.7136),300).toECEF(),Zm=fi.WGS84.getEastNorthUpFrame(mo),k2=new L().setFromMatrixColumn(Zm,0).normalize(),Km=new L().setFromMatrixColumn(Zm,1).normalize(),Ed=fi.WGS84.getSurfaceNormal(mo),Xn=new nn(65,innerWidth<=700?390/844:1440/900,10,1e7);Xn.position.copy(mo);Xn.up.copy(Ed);function V2(n){let e=Km.clone().multiplyScalar(Math.cos(Pi(n))).addScaledVector(Ed,Math.sin(Pi(n)));Xn.lookAt(mo.clone().addScaledVector(e,1e4)),Xn.updateMatrixWorld()}V2(18);var W2=new oi,ei,Xr,It,er;function Xm(n){return n.minFilter=kn,n.magFilter=et,n.wrapS=bn,n.wrapT=bn,n.colorSpace=jt,n.needsUpdate=!0,n}function Ym(n){return n.format=Tn,n.minFilter=et,n.magFilter=et,n.wrapS=n.wrapT=n.wrapR=bn,n.colorSpace=jt,n.needsUpdate=!0,n}function qm(n,e){return new Di(un,fm,{width:n,height:n,depth:n},e)}function yd(n){return Km.clone().multiplyScalar(Math.cos(Pi(n))*.9).addScaledVector(k2,Math.cos(Pi(n))*.435).addScaledVector(Ed,Math.sin(Pi(n))).normalize()}function Qm(){let n=yd(_d);er.sunDirection.copy(n),It.sunDirection.copy(n.lerp(yd(35),Math.max(0,Math.min(1,(Nn-.6)/.3))).normalize())}function jm(n){staticFrames=0;renderPolicy.invalidate();It.qualityPreset=n,It.lightShafts=!1,It.haze=!1,It.temporalUpscale=!1,It.resolutionScale=n==="high"?.65:n==="medium"?.5:.35,It.clouds.maxIterationCount=n==="high"?500:300}var Sd=class extends zr{constructor(e){super("PortfolioCelestial",`uniform sampler2D moonMap;uniform sampler2D cloudOverlay;uniform float night;uniform float clock;uniform float aspect;uniform vec2 sunPos;uniform float daylight;uniform float transitionPulse;
 float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+1.),f.x),f.y);}
 float wisps(vec2 p){float sum=0.,amp=.55;for(int i=0;i<4;i++){sum+=noise(p)*amp;p=p*2.03+3.7;amp*=.48;}return sum;}
 void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
 vec4 volume=texture2D(cloudOverlay,uv);
 // A soft, fading high-cloud bank gives the left sky its own quiet movement.
 float leftNoise=wisps(vec2(uv.x*7.5-clock*.009,uv.y*23.+clock*.0015));
 float leftBand=exp(-pow((uv.x-.19)*3.2,2.)-pow((uv.y-.76-.018*sin(uv.x*8.))*7.5,2.));
 float leftWisps=smoothstep(.4,.77,leftNoise)*leftBand*.42*(.75+.25*sin(clock*.3+.8))*night;
 float transmission=(1.-volume.a)*(1.-leftWisps);
 vec3 color=inputColor.rgb;
 float sd=length((uv-sunPos)*vec2(aspect,1.));color+=vec3(1.,.89,.66)*(.34*exp(-sd*25.)+.09*exp(-sd*7.)+.22*exp(-sd*70.))*daylight*transmission;
 // Subtle art-directed night fill makes a below-horizon atmosphere readable.
 color=mix(color,color*vec3(.12,.155,.22)+vec3(.002,.004,.012)+volume.a*vec3(.022,.032,.052),night);
 color=mix(color,vec3(.085,.11,.16),leftWisps*(1.-volume.a));
 // Thin high-altitude filaments and horizon aerosols leave most daylight sky clear.
 float high=pow(smoothstep(.54,.8,wisps(vec2(uv.x*5.+clock*.003,uv.y*48.))),2.);
 float band=exp(-pow((uv.y-.85)*6.5,2.));
 color+=mix(vec3(.012,.02,.035),vec3(.45,.55,.65),daylight)*high*band*.095*transmission;
 float horizon=exp(-pow((uv.y-.43)*5.5,2.));
 color+=vec3(.11,.045,.012)*horizon*transitionPulse*(1.-night)*transmission;
 color+=mix(vec3(.045,.025,.011),vec3(.009,.008,.014),night)*horizon*transmission;
 // Faint city glow at the horizon and a deep blue zenith, rather than a flat night fill.
 color+=vec3(.001,.003,.009)*smoothstep(.45,1.,uv.y)*night*transmission;
 float moonHeight=mix(.58,.79,night*night*(3.-2.*night));
 vec2 mp=(uv-vec2(.78,moonHeight))*vec2(aspect,1.)/.041;float r=length(mp);
 float moonBreath=1.+.15*sin(clock*.65)+.035*sin(clock*1.3+.8);
 // Moonlight picks out translucent cloud edges without lifting the black sky.
 float rim=volume.a*(1.-volume.a)*4.;
 color+=vec3(.035,.05,.085)*rim*exp(-r*.12)*night*moonBreath;
 color+=vec3(.56,.59,.64)*(.09*exp(-r*.52)+.12*exp(-r*1.45))*night*transmission*moonBreath;
 if(r<1.){
  vec3 n=vec3(mp,sqrt(max(0.,1.-dot(mp,mp))));vec2 st=vec2(.5+atan(n.x,n.z)/6.2831853,.5+asin(n.y)/3.14159265);
  // Decode the photographic map into linear light; the old brightening washed out the maria.
  vec3 terrain=pow(texture2D(moonMap,st).rgb,vec3(2.2));
  float gray=dot(terrain,vec3(.2126,.7152,.0722));terrain=mix(vec3(gray),terrain,.15);
  terrain=max(vec3(0.),(terrain-vec3(.24))*1.16+vec3(.24))*(.84+.16*n.z)*1.18;
  color=mix(color,terrain,night*transmission*(1.-smoothstep(.985,1.,r)));
 }
 // Sparse point sources, a broad brightness distribution, and independent low-amplitude glimmer.
 vec2 grid=uv*vec2(105.*aspect,105.);vec2 cell=floor(grid);float seed=h(cell);
 vec2 center=vec2(h(cell+7.1),h(cell+31.8));float magnitude=h(cell+23.);
 center+=vec2(sin(clock*(.4+seed*.3)+seed*10.),cos(clock*.37+seed*7.))*.012;
 float radius=mix(.05,.14,pow(magnitude,4.));float d=length(fract(grid)-center);
 float star=exp(-pow(d/radius,2.))*step(.88,seed);
 float brightness=.22+1.05*pow(magnitude,2.2);
 float breath=.5+.5*sin(clock*(.3+h(cell+3.)*.55)+seed*130.);
 float twinkle=.22+.72*pow(breath,.65)+.06*sin(clock*1.9+seed*75.);
 float moonWash=1.-.93*exp(-r*.16);
 color+=mix(vec3(.9,.94,1.),vec3(1.,.96,.9),h(cell+17.))*star*brightness*twinkle*night*transmission*smoothstep(.48,.9,uv.y)*moonWash*(1.-step(r,1.1));
 // A finer distant layer adds depth between the brighter glimmering points.
 vec2 farGrid=uv*vec2(220.*aspect,220.);vec2 farCell=floor(farGrid);float farSeed=h(farCell+84.);
 vec2 farCenter=vec2(h(farCell+61.),h(farCell+39.));
 float farStar=exp(-pow(length(fract(farGrid)-farCenter)/.07,2.))*step(.982,farSeed);
 float farGlimmer=.6+.4*sin(clock*(.28+farSeed*.3)+farSeed*190.);
 color+=vec3(.83,.9,1.)*farStar*(.085+.10*h(farCell+8.))*farGlimmer*night*transmission*smoothstep(.48,.9,uv.y)*moonWash*(1.-step(r,1.1));
 // One brief meteor every 28 seconds; the scene stays calm between sightings.
 float age=mod(clock,28.)-9.;float cycle=floor(clock/28.);
 if(age>0.&&age<.85&&night>.98){
  float p=age/.85;vec2 start=vec2(.12+h(vec2(cycle,7.))*.48,.9);
  vec2 direction=vec2(.19,-.095);vec2 head=start+direction*p;vec2 tail=head-direction*.28;
  vec2 delta=(head-tail)*vec2(aspect,1.);vec2 q=(uv-tail)*vec2(aspect,1.);
  float along=clamp(dot(q,delta)/dot(delta,delta),0.,1.);float distance=length(q-delta*along);
  float streak=exp(-pow(distance/.00065,2.))*along*sin(p*3.14159265);
  color+=vec3(.66,.75,.9)*streak*.65*transmission;
 }
 outputColor=vec4(color,1.);}`,{uniforms:new Map([["moonMap",new P(e)],["cloudOverlay",new P(null)],["night",new P(0)],["clock",new P(0)],["aspect",new P(innerWidth/innerHeight)],["sunPos",new P(new De(.8,.7))],["daylight",new P(1)],["transitionPulse",new P(0)]])})}update(){this.uniforms.get("cloudOverlay").value=It.atmosphereOverlay?.map}};async function X2(){ei=new Cs({antialias:!1,depth:!1,logarithmicDepthBuffer:!1,powerPreference:"high-performance"}),ei.setPixelRatio(Math.min(devicePixelRatio,1.25,1500/innerWidth)),ei.setSize(Ad("scene").clientWidth,Ad("scene").clientHeight,false),ei.toneMapping=Gn,ei.toneMappingExposure=10,Ad("scene").appendChild(ei.domElement),er=new Kt(Xn,{sky:!0,sun:!0,moon:!1,ground:!0}),It=new Js(Xn),jm("medium"),It.coverage=Ln.coverage,Wl=Ln.coverage,er.sunAngularRadius=.029,It.sunAngularRadius=.029,It.events.addEventListener("change",u=>{u.property==="atmosphereOverlay"?er.overlay=It.atmosphereOverlay:u.property==="atmosphereShadow"?er.shadow=It.atmosphereShadow:u.property==="atmosphereShadowLength"&&(er.shadowLength=It.atmosphereShadowLength)}),It.localWeatherOffset.set(.19,.34),Qm(),Xr=new lp(ei,{frameBufferType:Pt,multisampling:0}),Xr.addPass(new gh(W2,Xn)),Xr.addPass(new pl(Xn,It,er)),Xr.addPass(new pl(Xn,new up({mode:En.AGX})));let n=new As;n.onProgress=(u,h,p)=>Ln.status(`Loading atmosphere \xB7 ${h}/${p} files`),n.onError=u=>Ln.status("Could not load "+u.split("/").pop());let e="/assets/takram/",t=loadAtmosphere(ei,n),[i,r,s,a,c,l]=await Promise.all([t,new Lr(n).loadAsync(e+"clouds/local_weather.png"),qm(pd,n).loadAsync(e+"clouds/shape.bin"),qm(md,n).loadAsync(e+"clouds/shape_detail.bin"),new Lr(n).loadAsync(e+"clouds/turbulence.png"),new za(n).loadAsync(e+"stbn.bin")]);Object.assign(er,i),Object.assign(It,i),vd=new fl(ei,Xm(r)),It.localWeatherTexture=vd.texture,It.cloudLayers[2].densityScale=.005,It.shapeTexture=Ym(s),It.shapeDetailTexture=Ym(a),It.turbulenceTexture=Xm(c),It.stbnTexture=l,er.stbnTexture=l,Tr=new Sd(await new Lr().loadAsync("/assets/moon-lroc-nasa.jpg")),Xr.addPass(new pl(Xn,Tr)),Td=!0,xd=performance.now(),Ln.status("Live clouds and atmosphere ready"),ei.setAnimationLoop(Y2)}const renderPolicy=createRenderPolicy(60);let staticKey='',staticFrames=0;
document.addEventListener('visibilitychange',()=>{staticFrames=0;renderPolicy.invalidate();});
function Y2(n){if(!Td)return;const key=[Ln.target,Ln.coverage,Ln.paused,ta.matches,Ln.startupHold,Ln.speed].join(':');if(key!==staticKey){staticKey=key;staticFrames=0;}const active=!Ln.startupHold&&!Ln.paused&&!ta.matches;const settled=(Ln.startupFrames||0)>=12&&staticFrames>=12&&Wr.progress>=1&&Math.abs(Wl-Ln.coverage)<1e-4&&Math.abs(ea-Wr.phase)<1e-5;const delta=renderPolicy.frame(n,{blocked:document.hidden||!!Ln.freezeFrame,moving:active,settled,key,force:!!Ln.captureFrame,frameFPS:themeFrameRate({width:innerWidth,reduced:ta.matches,startup:Ln.startupHold,progress:Wr.progress,target:Ln.target,goal:Wr.goal})});if(delta===null)return;let e=Ln.startupHold?0:delta,t=Math.min(e,.05);xd=n;staticFrames++;Ln.startupHold&&(Wr=ip(Ln.target),ea=Ln.target,vd.update(ea));let i=ta.matches?1:Math.min(1,t*.65);rp(Wr,Ln.target,e,ta.matches),Nn=Wr.phase,Ln.update(Nn),_d=38-78.66*Nn+22.66*Nn*Nn,Wl+=(Ln.coverage-Wl)*i,It.coverage=Wl,Qm();let r=!Ln.startupHold&&!Ln.paused&&!ta.matches,s=Ln.speed;(r||ta.matches||Wr.progress<1||Math.abs(ea-Nn)>1e-5)&&(ea=ta.matches?Nn:ea+(Nn-ea)*Math.min(1,t*6),Math.abs(Nn-ea)<1e-5&&(ea=Nn),vd.update(ea));let a=(1-Nn*2.4)*s;It.localWeatherVelocity.set(r?a*18e-6:0,r?a*5e-6:0),It.shapeVelocity.set(r?s*.0018:0,r?s*5e-4:0,r?s*3e-4:0),It.shapeDetailVelocity.set(r?s*.0032:0,r?s*.0012:0,r?-s*8e-4:0),r&&(kl+=t),Ln.meteorPending&&Nn>.99&&(kl=Math.floor(kl/28)*28+9.02,Ln.meteorPending=!1),Tr.uniforms.get("transitionPulse").value=Wr.pulse,Wr.progress<1&&(Ad("phase").textContent=(Wr.direction>0?"Nightfall":"Sunrise")+" \xB7 "+Math.round(Wr.progress*100)+"%"),Tr.uniforms.get("night").value=Math.max(0,Math.min(1,(Nn-.56)/.36)),Tr.uniforms.get("clock").value=kl,Tr.uniforms.get("aspect").value=Xn.aspect;let c=mo.clone().addScaledVector(yd(_d),1e6).project(Xn);Tr.uniforms.get("sunPos").value.set(c.x*.5+.5,c.y*.5+.5),Tr.uniforms.get("daylight").value=Math.max(0,1-Nn*1.7),Xr.render(r?t:0),Ln.startupFrames=(Ln.startupFrames||0)+1,Ln.startupFrames===12&&(Ln.startFrameReady=!0,dispatchEvent(new Event("portfolio-start-frame-ready"))),Ln.firstFrameRendered||(Ln.firstFrameRendered=!0,document.documentElement.dataset.skyFrame="rendered",dispatchEvent(new Event("portfolio-frame-ready"))),Ln.captureFrame&&(Ln.captureFrame(ei.domElement),Ln.captureFrame=null),gd++,Vl+=e,Vl>2&&(Ln.status(`${Wr.progress<1?"Cloud layers rearranging":"Calm sky"} \xB7 ${Math.round(gd/Vl)} frames/s`),gd=0,Vl=0)}addEventListener("resize",()=>{staticFrames=0;renderPolicy.invalidate();ei&&(ei.setPixelRatio(Math.min(devicePixelRatio,1.25,1500/innerWidth)),Xn.aspect=innerWidth<=700?390/844:1440/900,Xn.updateProjectionMatrix(),ei.setSize(Ad("scene").clientWidth,Ad("scene").clientHeight,false),Xr.setSize(Ad("scene").clientWidth,Ad("scene").clientHeight))});Ad("quality").onchange=n=>{Td&&jm(n.target.value)};X2().catch(n=>{console.error(n),Ln.status("Sky unavailable: "+n.message)});
}

/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

postprocessing/build/index.js:
  (**
   * postprocessing v6.39.1 build Fri Apr 17 2026
   * https://github.com/pmndrs/postprocessing
   * Copyright 2015-2026 Raoul van Rüschen
   * @license Zlib
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)

@takram/three-atmosphere/build/shared.js:
  (**
      @preserve
  
      Astronomy library for JavaScript (browser and Node.js).
      https://github.com/cosinekitty/astronomy
  
      MIT License
  
      Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>
  
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
  
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
  
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
  *)
  (**
   * @fileoverview Astronomy calculation library for browser scripting and Node.js.
   * @author Don Cross <cosinekitty@gmail.com>
   * @license MIT
   *)
*/

// Pure decoder also runs in a dedicated worker; source precision is unchanged.
export async function decodeAtmosphereData(float32){
 return Promise.all([['transmittance',Am],['scattering',Zs],['irradiance',Tm]].map(async([name,size])=>{
  const response=await fetch(new URL('./takram/atmosphere/'+name+'.exr',import.meta.url));if(!response.ok)throw new Error('Atmosphere data unavailable');
  const parsed=new Wa().parse(await response.arrayBuffer());const data=float32?halfToFloat(parsed.data):parsed.data;
  return {key:name+'Texture',buffer:data.buffer,width:size.width,height:size.height,depth:size.depth,type:float32?Gt:Pt,format:parsed.format,colorSpace:parsed.colorSpace};
 }));
}
async function loadAtmosphere(renderer,manager){
 try{const textures=await decodeAtmosphereInWorker(Gp(renderer)),result={};for(const item of textures){const data=item.type===Gt?new Float32Array(item.buffer):new Uint16Array(item.buffer);const texture=item.depth?new un(data,item.width,item.height,item.depth):new Ti(data,item.width,item.height);texture.type=item.type;texture.format=item.format;texture.colorSpace=item.colorSpace;texture.minFilter=texture.magFilter=et;texture.needsUpdate=true;result[item.key]=texture;}return result;
 }catch{return new Promise((resolve,reject)=>new co({higherOrderScattering:false},manager).setType(renderer).load('/assets/takram/atmosphere',resolve,undefined,reject));}
}
