var _h="160";var t0=0,td=1,e0=2;var Hf=1,n0=2,Ri=3,di=0,on=1,qe=2;var Wi=0,Qs=1,nr=2,ed=3,nd=4,i0=5,ms=100,s0=101,r0=102,id=103,sd=104,o0=200,a0=201,c0=202,l0=203,zl=204,Bl=205,h0=206,u0=207,d0=208,f0=209,p0=210,m0=211,g0=212,v0=213,x0=214,y0=0,_0=1,b0=2,ua=3,M0=4,w0=5,S0=6,E0=7,Vf=0,T0=1,A0=2,ui=0,R0=1,C0=2,L0=3,P0=4,I0=5,D0=6,rd="attached",N0="detached",Gf=300,ir=301,sr=302,Hl=303,Vl=304,Ba=306,_s=1e3,bn=1001,Gr=1002,Ie=1003,da=1004;var Fr=1005;var ye=1006,bh=1007;var fi=1008;var $i=1009,U0=1010,k0=1011,Mh=1012,Wf=1013,Un=1014,Ci=1015,Qn=1016,$f=1017,Xf=1018,vs=1020,O0=1021,rn=1023,F0=1024,z0=1025,xs=1026,rr=1027,B0=1028,Yf=1029,H0=1030,qf=1031,Kf=1033,ol=33776,al=33777,cl=33778,ll=33779,od=35840,ad=35841,cd=35842,ld=35843,jf=36196,hd=37492,ud=37496,dd=37808,fd=37809,pd=37810,md=37811,gd=37812,vd=37813,xd=37814,yd=37815,_d=37816,bd=37817,Md=37818,wd=37819,Sd=37820,Ed=37821,hl=36492,Td=36494,Ad=36495,V0=36283,Rd=36284,Cd=36285,Ld=36286;var or=2300,bs=2301,ul=2302,Pd=2400,Id=2401,Dd=2402,G0=2500;var Zf=0,Ha=1,no=2,Jf=3e3,ys=3001,W0=3200,$0=3201,Qf=0,X0=1,Ve="",ee="srgb",Ue="srgb-linear",wh="display-p3",Va="display-p3-linear",fa="linear",fe="srgb",pa="rec709",ma="p3";var Ds=7680;var Nd=519,Y0=512,q0=513,K0=514,Ga=515,j0=516,Z0=517,J0=518,Q0=519,Gl=35044,Sh=35048;var Ud="300 es",Wl=1035,Li=2e3,ga=2001,Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=1234567,zr=Math.PI/180,ar=180/Math.PI;function Jn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function sn(s,t,e){return Math.max(t,Math.min(e,s))}function Eh(s,t){return(s%t+t)%t}function tg(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function eg(s,t,e){return s!==t?(e-s)/(t-s):0}function Br(s,t,e){return(1-e)*s+e*t}function ng(s,t,e,n){return Br(s,t,1-Math.exp(-e*n))}function ig(s,t=1){return t-Math.abs(Eh(s,t*2)-t)}function sg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function rg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function og(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ag(s,t){return s+Math.random()*(t-s)}function cg(s){return s*(.5-Math.random())}function lg(s){s!==void 0&&(kd=s);let t=kd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hg(s){return s*zr}function ug(s){return s*ar}function $l(s){return(s&s-1)===0&&s!==0}function dg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function va(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fg(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ht={DEG2RAD:zr,RAD2DEG:ar,generateUUID:Jn,clamp:sn,euclideanModulo:Eh,mapLinear:tg,inverseLerp:eg,lerp:Br,damp:ng,pingpong:ig,smoothstep:sg,smootherstep:rg,randInt:og,randFloat:ag,randFloatSpread:cg,seededRandom:lg,degToRad:hg,radToDeg:ug,isPowerOfTwo:$l,ceilPowerOfTwo:dg,floorPowerOfTwo:va,setQuaternionFromProperEuler:fg,normalize:re,denormalize:hi},pt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],y=i[1],x=i[4],M=i[7],T=i[2],R=i[5],C=i[8];return r[0]=o*v+a*y+c*T,r[3]=o*g+a*x+c*R,r[6]=o*p+a*M+c*C,r[1]=l*v+h*y+u*T,r[4]=l*g+h*x+u*R,r[7]=l*p+h*M+u*C,r[2]=d*v+f*y+m*T,r[5]=d*g+f*x+m*R,r[8]=d*p+f*M+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(dl.makeScale(t,e)),this}rotate(t){return this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},dl=new Yt;function tp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pg(){let s=Wr("canvas");return s.style.display="block",s}var Od={};function Hr(s){s in Od||(Od[s]=!0,console.warn(s))}var Fd=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zd=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oo={[Ue]:{transfer:fa,primaries:pa,toReference:s=>s,fromReference:s=>s},[ee]:{transfer:fe,primaries:pa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Va]:{transfer:fa,primaries:ma,toReference:s=>s.applyMatrix3(zd),fromReference:s=>s.applyMatrix3(Fd)},[wh]:{transfer:fe,primaries:ma,toReference:s=>s.convertSRGBToLinear().applyMatrix3(zd),fromReference:s=>s.applyMatrix3(Fd).convertLinearToSRGB()}},mg=new Set([Ue,Va]),te={enabled:!0,_workingColorSpace:Ue,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!mg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Oo[t].toReference,i=Oo[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Oo[s].primaries},getTransfer:function(s){return s===Ve?fa:Oo[s].transfer}};function tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ns,xa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ns===void 0&&(Ns=Wr("canvas")),Ns.width=t.width,Ns.height=t.height;let n=Ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=tr(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(tr(e[n]/255)*255):e[n]=tr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gg=0,ya=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Jn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(pl(i[o].image)):r.push(pl(i[o]))}else r=pl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function pl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vg=0,Ke=class s extends Xi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=bn,i=bn,r=ye,o=fi,a=rn,c=$i,l=s.DEFAULT_ANISOTROPY,h=Ve){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Jn(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ys?ee:Ve),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ee?ys:Jf}set encoding(t){Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ys?ee:Ve}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Gf;Ke.DEFAULT_ANISOTROPY=1;var Wt=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(f+1)/2,T=(p+1)/2,R=(h+d)/4,C=(u+v)/4,D=(m+g)/4;return x>M&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=C/n):M>T?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=R/i,r=D/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=D/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends Xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Wt(0,0,t,e),this.scissorTest=!1,this.viewport=new Wt(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Hr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ys?ee:Ve),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ye,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ya(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends Xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_a=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yl=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let T=Math.sqrt(x),R=Math.atan2(T,p*y);g=Math.sin(g*R)/T,a=Math.sin(a*R)/T}let M=a*y;if(c=c*g+d*M,l=l*g+f*M,h=h*g+m*M,u=u*g+v*M,g===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ml.copy(this).projectOnVector(t),this.sub(ml)}reflect(t){return this.sub(ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new _,Bd=new pe,kn=class{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(t.matrixWorld),this.union(Fo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),zo.subVectors(this.max,Pr),Us.subVectors(t.a,Pr),ks.subVectors(t.b,Pr),Os.subVectors(t.c,Pr),Fi.subVectors(ks,Us),zi.subVectors(Os,ks),hs.subVectors(Us,Os);let e=[0,-Fi.z,Fi.y,0,-zi.z,zi.y,0,-hs.z,hs.y,Fi.z,0,-Fi.x,zi.z,0,-zi.x,hs.z,0,-hs.x,-Fi.y,Fi.x,0,-zi.y,zi.x,0,-hs.y,hs.x,0];return!gl(e,Us,ks,Os,zo)||(e=[1,0,0,0,1,0,0,0,1],!gl(e,Us,ks,Os,zo))?!1:(Bo.crossVectors(Fi,zi),e=[Bo.x,Bo.y,Bo.z],gl(e,Us,ks,Os,zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mi=[new _,new _,new _,new _,new _,new _,new _,new _],qn=new _,Fo=new kn,Us=new _,ks=new _,Os=new _,Fi=new _,zi=new _,hs=new _,Pr=new _,zo=new _,Bo=new _,us=new _;function gl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){us.fromArray(s,r);let a=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),c=t.dot(us),l=e.dot(us),h=n.dot(us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var xg=new kn,Ir=new _,vl=new _,Mn=class{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);let e=Ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ir,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(vl)),this.expandByPoint(Ir.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new _,xl=new _,Ho=new _,Bi=new _,yl=new _,Vo=new _,_l=new _,Ms=class{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xl.copy(t).add(e).multiplyScalar(.5),Ho.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(xl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ho),a=Bi.dot(this.direction),c=-Bi.dot(Ho),l=Bi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(xl).addScaledVector(Ho,d),f}intersectSphere(t,e){wi.subVectors(t.center,this.origin);let n=wi.dot(this.direction),i=wi.dot(wi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,i,r){yl.subVectors(e,t),Vo.subVectors(n,t),_l.crossVectors(yl,Vo);let o=this.direction.dot(_l),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,t);let c=a*this.direction.dot(Vo.crossVectors(Bi,Vo));if(c<0)return null;let l=a*this.direction.dot(yl.cross(Bi));if(l<0||c+l>o)return null;let h=-a*Bi.dot(_l);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,m,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,v,g)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d+v*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yg,t,_g)}lookAt(t,e,n){let i=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Hi.crossVectors(n,yn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Hi.crossVectors(n,yn)),Hi.normalize(),Go.crossVectors(yn,Hi),i[0]=Hi.x,i[4]=Go.x,i[8]=yn.x,i[1]=Hi.y,i[5]=Go.y,i[9]=yn.y,i[2]=Hi.z,i[6]=Go.z,i[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],x=n[7],M=n[11],T=n[15],R=i[0],C=i[4],D=i[8],b=i[12],E=i[1],U=i[5],W=i[9],j=i[13],P=i[2],N=i[6],H=i[10],Y=i[14],X=i[3],$=i[7],q=i[11],Z=i[15];return r[0]=o*R+a*E+c*P+l*X,r[4]=o*C+a*U+c*N+l*$,r[8]=o*D+a*W+c*H+l*q,r[12]=o*b+a*j+c*Y+l*Z,r[1]=h*R+u*E+d*P+f*X,r[5]=h*C+u*U+d*N+f*$,r[9]=h*D+u*W+d*H+f*q,r[13]=h*b+u*j+d*Y+f*Z,r[2]=m*R+v*E+g*P+p*X,r[6]=m*C+v*U+g*N+p*$,r[10]=m*D+v*W+g*H+p*q,r[14]=m*b+v*j+g*Y+p*Z,r[3]=y*R+x*E+M*P+T*X,r[7]=y*C+x*U+M*N+T*$,r[11]=y*D+x*W+M*H+T*q,r[15]=y*b+x*j+M*Y+T*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],y=u*g*l-v*d*l+v*c*f-a*g*f-u*c*p+a*d*p,x=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,M=h*v*l-m*u*l+m*a*f-o*v*f-h*a*p+o*u*p,T=m*u*c-h*v*c-m*a*d+o*v*d+h*a*g-o*u*g,R=e*y+n*x+i*M+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=y*C,t[1]=(v*d*r-u*g*r-v*i*f+n*g*f+u*i*p-n*d*p)*C,t[2]=(a*g*r-v*c*r+v*i*l-n*g*l-a*i*p+n*c*p)*C,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*C,t[4]=x*C,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*C,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*p-e*c*p)*C,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*C,t[8]=M*C,t[9]=(m*u*r-h*v*r-m*n*f+e*v*f+h*n*p-e*u*p)*C,t[10]=(o*v*r-m*a*r+m*n*l-e*v*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=T*C,t[13]=(h*v*i-m*u*i+m*n*d-e*v*d-h*n*g+e*u*g)*C,t[14]=(m*a*i-o*v*i-m*n*c+e*v*c+o*n*g-e*a*g)*C,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,v=o*h,g=o*u,p=a*u,y=c*l,x=c*h,M=c*u,T=n.x,R=n.y,C=n.z;return i[0]=(1-(v+p))*T,i[1]=(f+M)*T,i[2]=(m-x)*T,i[3]=0,i[4]=(f-M)*R,i[5]=(1-(d+p))*R,i[6]=(g+y)*R,i[7]=0,i[8]=(m+x)*C,i[9]=(g-y)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Fs.set(i[0],i[1],i[2]).length(),o=Fs.set(i[4],i[5],i[6]).length(),a=Fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Kn.copy(this);let l=1/r,h=1/o,u=1/a;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,e.setFromRotationMatrix(Kn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Li){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,m;if(a===Li)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ga)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Li){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,m,v;if(a===Li)m=(o+r)*u,v=-2*u;else if(a===ga)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fs=new _,Kn=new mt,yg=new _(0,0,0),_g=new _(1,1,1),Hi=new _,Go=new _,yn=new _,Hd=new mt,Vd=new pe,Yi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bg=0,Gd=new _,zs=new pe,Si=new mt,Wo=new _,Dr=new _,Mg=new _,wg=new pe,Wd=new _(1,0,0),$d=new _(0,1,0),Xd=new _(0,0,1),Sg={type:"added"},Eg={type:"removed"},_e=class s extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new _,e=new Yi,n=new pe,i=new _(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Yt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(Wd,t)}rotateY(t){return this.rotateOnAxis($d,t)}rotateZ(t){return this.rotateOnAxis(Xd,t)}translateOnAxis(t,e){return Gd.copy(t).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wd,t)}translateY(t){return this.translateOnAxis($d,t)}translateZ(t){return this.translateOnAxis(Xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Dr,Wo,this.up):Si.lookAt(Wo,Dr,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(Si),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eg)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,Mg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};_e.DEFAULT_UP=new _(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new _,Ei=new _,bl=new _,Ti=new _,Bs=new _,Hs=new _,Yd=new _,Ml=new _,wl=new _,Sl=new _,$o=!1,js=class s{constructor(t=new _,e=new _,n=new _){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),jn.subVectors(t,e),i.cross(jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){jn.subVectors(i,e),Ei.subVectors(n,e),bl.subVectors(t,e);let o=jn.dot(jn),a=jn.dot(Ei),c=jn.dot(bl),l=Ei.dot(Ei),h=Ei.dot(bl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(t,e,n,i,r,o,a,c){return $o===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$o=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static isFrontFacing(t,e,n,i){return jn.subVectors(n,e),Ei.subVectors(t,e),jn.cross(Ei).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),jn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return $o===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$o=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Bs.subVectors(i,n),Hs.subVectors(r,n),Ml.subVectors(t,n);let c=Bs.dot(Ml),l=Hs.dot(Ml);if(c<=0&&l<=0)return e.copy(n);wl.subVectors(t,i);let h=Bs.dot(wl),u=Hs.dot(wl);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Bs,o);Sl.subVectors(t,r);let f=Bs.dot(Sl),m=Hs.dot(Sl);if(m>=0&&f<=m)return e.copy(r);let v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Hs,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Yd.subVectors(r,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Yd,a);let p=1/(g+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Bs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function El(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var _t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Eh(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=El(o,r,t+1/3),this.g=El(o,r,t),this.b=El(o,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ee){let n=ep[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}copyLinearToSRGB(t){return this.r=fl(t.r),this.g=fl(t.g),this.b=fl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ee){return te.fromWorkingColorSpace(nn.copy(this),t),Math.round(sn(nn.r*255,0,255))*65536+Math.round(sn(nn.g*255,0,255))*256+Math.round(sn(nn.b*255,0,255))}getHexString(t=ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,i=nn.g,r=nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=ee){te.fromWorkingColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,i=nn.b;return t!==ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Xo);let n=Br(Vi.h,Xo.h,e),i=Br(Vi.s,Xo.s,e),r=Br(Vi.l,Xo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new _t;_t.NAMES=ep;var Tg=0,wn=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Qs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Bl,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Bl&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},We=class extends wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new _,Yo=new pt,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}};var ba=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ma=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Ag=0,Nn=new mt,Tl=new _e,Vs=new _,_n=new kn,Nr=new kn,He=new _,me=class s extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tp(t)?Ma:ba)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new _,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(_n.min,Nr.min),_n.expandByPoint(He),He.addVectors(_n.max,Nr.max),_n.expandByPoint(He)):(_n.expandByPoint(Nr.min),_n.expandByPoint(Nr.max))}_n.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)He.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(t,l),He.add(Vs)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new _,h[E]=new _;let u=new _,d=new _,f=new _,m=new pt,v=new pt,g=new pt,p=new _,y=new _;function x(E,U,W){u.fromArray(i,E*3),d.fromArray(i,U*3),f.fromArray(i,W*3),m.fromArray(o,E*2),v.fromArray(o,U*2),g.fromArray(o,W*2),d.sub(u),f.sub(u),v.sub(m),g.sub(m);let j=1/(v.x*g.y-g.x*v.y);isFinite(j)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-v.y).multiplyScalar(j),y.copy(f).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(j),l[E].add(p),l[U].add(p),l[W].add(p),h[E].add(y),h[U].add(y),h[W].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,U=M.length;E<U;++E){let W=M[E],j=W.start,P=W.count;for(let N=j,H=j+P;N<H;N+=3)x(n[N+0],n[N+1],n[N+2])}let T=new _,R=new _,C=new _,D=new _;function b(E){C.fromArray(r,E*3),D.copy(C);let U=l[E];T.copy(U),T.sub(C.multiplyScalar(C.dot(U))).normalize(),R.crossVectors(D,U);let j=R.dot(h[E])<0?-1:1;c[E*4]=T.x,c[E*4+1]=T.y,c[E*4+2]=T.z,c[E*4+3]=j}for(let E=0,U=M.length;E<U;++E){let W=M[E],j=W.start,P=W.count;for(let N=j,H=j+P;N<H;N+=3)b(n[N+0]),b(n[N+1]),b(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new _,r=new _,o=new _,a=new _,c=new _,l=new _,h=new _,u=new _;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qd=new mt,ds=new Ms,qo=new Mn,Kd=new _,Gs=new _,Ws=new _,$s=new _,Al=new _,Ko=new _,jo=new pt,Zo=new pt,Jo=new pt,jd=new _,Zd=new _,Jd=new _,Qo=new _,ta=new _,Bt=class extends _e{constructor(t=new me,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ko.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Al.fromBufferAttribute(u,t),o?Ko.addScaledVector(Al,h):Ko.addScaledVector(Al.sub(e),h))}e.add(Ko)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(r),ds.copy(t.ray).recast(t.near),!(qo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(qo,Kd)===null||ds.origin.distanceToSquared(Kd)>(t.far-t.near)**2))&&(qd.copy(r).invert(),ds.copy(t.ray).applyMatrix4(qd),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,T=x;M<T;M+=3){let R=a.getX(M),C=a.getX(M+1),D=a.getX(M+2);i=ea(this,p,t,n,l,h,u,R,C,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let y=a.getX(g),x=a.getX(g+1),M=a.getX(g+2);i=ea(this,o,t,n,l,h,u,y,x,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,T=x;M<T;M+=3){let R=M,C=M+1,D=M+2;i=ea(this,p,t,n,l,h,u,R,C,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let y=g,x=g+1,M=g+2;i=ea(this,o,t,n,l,h,u,y,x,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Rg(s,t,e,n,i,r,o,a){let c;if(t.side===on?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===di,a),c===null)return null;ta.copy(a),ta.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ta);return l<e.near||l>e.far?null:{distance:l,point:ta.clone(),object:s}}function ea(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Gs),s.getVertexPosition(c,Ws),s.getVertexPosition(l,$s);let h=Rg(s,t,e,n,Gs,Ws,$s,Qo);if(h){i&&(jo.fromBufferAttribute(i,a),Zo.fromBufferAttribute(i,c),Jo.fromBufferAttribute(i,l),h.uv=js.getInterpolation(Qo,Gs,Ws,$s,jo,Zo,Jo,new pt)),r&&(jo.fromBufferAttribute(r,a),Zo.fromBufferAttribute(r,c),Jo.fromBufferAttribute(r,l),h.uv1=js.getInterpolation(Qo,Gs,Ws,$s,jo,Zo,Jo,new pt),h.uv2=h.uv1),o&&(jd.fromBufferAttribute(o,a),Zd.fromBufferAttribute(o,c),Jd.fromBufferAttribute(o,l),h.normal=js.getInterpolation(Qo,Gs,Ws,$s,jd,Zd,Jd,new _),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new _,materialIndex:0};js.getNormal(Gs,Ws,$s,u.normal),h.face=u}return h}var ti=class s extends me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function m(v,g,p,y,x,M,T,R,C,D,b){let E=M/C,U=T/D,W=M/2,j=T/2,P=R/2,N=C+1,H=D+1,Y=0,X=0,$=new _;for(let q=0;q<H;q++){let Z=q*U-j;for(let ct=0;ct<N;ct++){let G=ct*E-W;$[v]=G*y,$[g]=Z*x,$[p]=P,l.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[p]=R>0?1:-1,h.push($.x,$.y,$.z),u.push(ct/C),u.push(1-q/D),Y+=1}}for(let q=0;q<D;q++)for(let Z=0;Z<C;Z++){let ct=d+Z+N*q,G=d+Z+N*(q+1),K=d+(Z+1)+N*(q+1),at=d+(Z+1)+N*q;c.push(ct,G,at),c.push(G,K,at),X+=6}a.addGroup(f,X,b),f+=X,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pn(s){let t={};for(let e=0;e<s.length;e++){let n=cr(s[e]);for(let i in n)t[i]=n[i]}return t}function Cg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function np(s){return s.getRenderTarget()===null?s.outputColorSpace:te.workingColorSpace}var Lg={clone:cr,merge:pn},Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ge=class extends wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=Cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wa=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},De=class extends wa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xs=-90,Ys=1,ql=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new De(Xs,Ys,t,e);i.layers=this.layers,this.add(i);let r=new De(Xs,Ys,t,e);r.layers=this.layers,this.add(r);let o=new De(Xs,Ys,t,e);o.layers=this.layers,this.add(o);let a=new De(Xs,Ys,t,e);a.layers=this.layers,this.add(a);let c=new De(Xs,Ys,t,e);c.layers=this.layers,this.add(c);let l=new De(Xs,Ys,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Sa=class extends Ke{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kl=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Hr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ys?ee:Ve),this.texture=new Sa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ti(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Wi});r.uniforms.tEquirect.value=e;let o=new Bt(i,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=ye),new ql(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Rl=new _,Dg=new _,Ng=new Yt,Zn=class{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Rl.subVectors(n,e).cross(Dg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ng.getNormalMatrix(t),i=this.coplanarPoint(Rl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new Mn,na=new _,Xr=class{constructor(t=new Zn,e=new Zn,n=new Zn,i=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-r,d-l,g-f,M-p).normalize(),n[1].setComponents(c+r,d+l,g+f,M+p).normalize(),n[2].setComponents(c+o,d+h,g+m,M+y).normalize(),n[3].setComponents(c-o,d-h,g-m,M-y).normalize(),n[4].setComponents(c-a,d-u,g-v,M-x).normalize(),e===Li)n[5].setComponents(c+a,d+u,g+v,M+x).normalize();else if(e===ga)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(na.x=i.normal.x>0?t.max.x:t.min.x,na.y=i.normal.y>0?t.max.y:t.min.y,na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ip(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ug(s,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,d=l.usage,f=u.byteLength,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,m=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&m.length===0&&s.bufferSubData(u,0,d),m.length!==0){for(let v=0,g=m.length;v<g;v++){let p=m[v];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Sn=class s extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let y=p*d-o;for(let x=0;x<l;x++){let M=x*u-r;m.push(M,-y,0),v.push(0,0,1),g.push(x/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,M=y+l*(p+1),T=y+1+l*(p+1),R=y+1+l*p;f.push(x,M,R),f.push(M,T,R)}this.setIndex(f),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Og=`#ifdef USE_ALPHAHASH
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
#endif`,Fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vg=`#ifdef USE_AOMAP
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
#endif`,Gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,$g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
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
#endif`,jg=`#ifdef USE_BUMPMAP
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rv=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,ov=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,av=`vec3 transformedNormal = objectNormal;
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
#endif`,cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",fv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wv=`#ifdef USE_GRADIENTMAP
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
}`,Sv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rv=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Cv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Uv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kv=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ov=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Fv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xv=`#if defined( USE_POINTS_UV )
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
#endif`,Yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Zv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sx=`#ifdef USE_NORMALMAP
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
#endif`,rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,_x=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,Ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kx=`uniform sampler2D t2D;
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`#include <common>
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
}`,Vx=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gx=`#define DISTANCE
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
}`,Wx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zx=`#define LAMBERT
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
}`,Jx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qx=`#define MATCAP
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
}`,ty=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ey=`#define NORMAL
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
}`,ny=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iy=`#define PHONG
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
}`,sy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ry=`#define STANDARD
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
}`,oy=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ay=`#define TOON
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
}`,cy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ly=`uniform float size;
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
}`,hy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,dy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,py=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zt={alphahash_fragment:kg,alphahash_pars_fragment:Og,alphamap_fragment:Fg,alphamap_pars_fragment:zg,alphatest_fragment:Bg,alphatest_pars_fragment:Hg,aomap_fragment:Vg,aomap_pars_fragment:Gg,batching_pars_vertex:Wg,batching_vertex:$g,begin_vertex:Xg,beginnormal_vertex:Yg,bsdfs:qg,iridescence_fragment:Kg,bumpmap_pars_fragment:jg,clipping_planes_fragment:Zg,clipping_planes_pars_fragment:Jg,clipping_planes_pars_vertex:Qg,clipping_planes_vertex:tv,color_fragment:ev,color_pars_fragment:nv,color_pars_vertex:iv,color_vertex:sv,common:rv,cube_uv_reflection_fragment:ov,defaultnormal_vertex:av,displacementmap_pars_vertex:cv,displacementmap_vertex:lv,emissivemap_fragment:hv,emissivemap_pars_fragment:uv,colorspace_fragment:dv,colorspace_pars_fragment:fv,envmap_fragment:pv,envmap_common_pars_fragment:mv,envmap_pars_fragment:gv,envmap_pars_vertex:vv,envmap_physical_pars_fragment:Cv,envmap_vertex:xv,fog_vertex:yv,fog_pars_vertex:_v,fog_fragment:bv,fog_pars_fragment:Mv,gradientmap_pars_fragment:wv,lightmap_fragment:Sv,lightmap_pars_fragment:Ev,lights_lambert_fragment:Tv,lights_lambert_pars_fragment:Av,lights_pars_begin:Rv,lights_toon_fragment:Lv,lights_toon_pars_fragment:Pv,lights_phong_fragment:Iv,lights_phong_pars_fragment:Dv,lights_physical_fragment:Nv,lights_physical_pars_fragment:Uv,lights_fragment_begin:kv,lights_fragment_maps:Ov,lights_fragment_end:Fv,logdepthbuf_fragment:zv,logdepthbuf_pars_fragment:Bv,logdepthbuf_pars_vertex:Hv,logdepthbuf_vertex:Vv,map_fragment:Gv,map_pars_fragment:Wv,map_particle_fragment:$v,map_particle_pars_fragment:Xv,metalnessmap_fragment:Yv,metalnessmap_pars_fragment:qv,morphcolor_vertex:Kv,morphnormal_vertex:jv,morphtarget_pars_vertex:Zv,morphtarget_vertex:Jv,normal_fragment_begin:Qv,normal_fragment_maps:tx,normal_pars_fragment:ex,normal_pars_vertex:nx,normal_vertex:ix,normalmap_pars_fragment:sx,clearcoat_normal_fragment_begin:rx,clearcoat_normal_fragment_maps:ox,clearcoat_pars_fragment:ax,iridescence_pars_fragment:cx,opaque_fragment:lx,packing:hx,premultiplied_alpha_fragment:ux,project_vertex:dx,dithering_fragment:fx,dithering_pars_fragment:px,roughnessmap_fragment:mx,roughnessmap_pars_fragment:gx,shadowmap_pars_fragment:vx,shadowmap_pars_vertex:xx,shadowmap_vertex:yx,shadowmask_pars_fragment:_x,skinbase_vertex:bx,skinning_pars_vertex:Mx,skinning_vertex:wx,skinnormal_vertex:Sx,specularmap_fragment:Ex,specularmap_pars_fragment:Tx,tonemapping_fragment:Ax,tonemapping_pars_fragment:Rx,transmission_fragment:Cx,transmission_pars_fragment:Lx,uv_pars_fragment:Px,uv_pars_vertex:Ix,uv_vertex:Dx,worldpos_vertex:Nx,background_vert:Ux,background_frag:kx,backgroundCube_vert:Ox,backgroundCube_frag:Fx,cube_vert:zx,cube_frag:Bx,depth_vert:Hx,depth_frag:Vx,distanceRGBA_vert:Gx,distanceRGBA_frag:Wx,equirect_vert:$x,equirect_frag:Xx,linedashed_vert:Yx,linedashed_frag:qx,meshbasic_vert:Kx,meshbasic_frag:jx,meshlambert_vert:Zx,meshlambert_frag:Jx,meshmatcap_vert:Qx,meshmatcap_frag:ty,meshnormal_vert:ey,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:sy,meshphysical_vert:ry,meshphysical_frag:oy,meshtoon_vert:ay,meshtoon_frag:cy,points_vert:ly,points_frag:hy,shadow_vert:uy,shadow_frag:dy,sprite_vert:fy,sprite_frag:py},it={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},li={basic:{uniforms:pn([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:pn([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new _t(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:pn([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:pn([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:pn([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new _t(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:pn([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:pn([it.points,it.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:pn([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:pn([it.common,it.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:pn([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:pn([it.sprite,it.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:pn([it.common,it.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:pn([it.lights,it.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};li.physical={uniforms:pn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var ia={r:0,b:0,g:0};function my(s,t,e,n,i,r,o){let a=new _t(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(g,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,c):x&&x.isColor&&(v(x,1),y=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ba)?(h===void 0&&(h=new Bt(new ti(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:cr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=te.getTransfer(x.colorSpace)!==fe,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Bt(new Sn(2,2),new ge({name:"BackgroundMaterial",uniforms:cr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=te.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function v(g,p){g.getRGB(ia,np(s)),n.buffers.color.setClear(ia.r,ia.g,ia.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(a,c)},render:m}}function gy(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,h=!1;function u(P,N,H,Y,X){let $=!1;if(o){let q=v(Y,H,N);l!==q&&(l=q,f(l.object)),$=p(P,Y,H,X),$&&y(P,Y,H,X)}else{let q=N.wireframe===!0;(l.geometry!==Y.id||l.program!==H.id||l.wireframe!==q)&&(l.geometry=Y.id,l.program=H.id,l.wireframe=q,$=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,D(P,N,H,Y),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function m(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,N,H){let Y=H.wireframe===!0,X=a[P.id];X===void 0&&(X={},a[P.id]=X);let $=X[N.id];$===void 0&&($={},X[N.id]=$);let q=$[Y];return q===void 0&&(q=g(d()),$[Y]=q),q}function g(P){let N=[],H=[],Y=[];for(let X=0;X<i;X++)N[X]=0,H[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,N,H,Y){let X=l.attributes,$=N.attributes,q=0,Z=H.getAttributes();for(let ct in Z)if(Z[ct].location>=0){let K=X[ct],at=$[ct];if(at===void 0&&(ct==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),ct==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),K===void 0||K.attribute!==at||at&&K.data!==at.data)return!0;q++}return l.attributesNum!==q||l.index!==Y}function y(P,N,H,Y){let X={},$=N.attributes,q=0,Z=H.getAttributes();for(let ct in Z)if(Z[ct].location>=0){let K=$[ct];K===void 0&&(ct==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),ct==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let at={};at.attribute=K,K&&K.data&&(at.data=K.data),X[ct]=at,q++}l.attributes=X,l.attributesNum=q,l.index=Y}function x(){let P=l.newAttributes;for(let N=0,H=P.length;N<H;N++)P[N]=0}function M(P){T(P,0)}function T(P,N){let H=l.newAttributes,Y=l.enabledAttributes,X=l.attributeDivisors;H[P]=1,Y[P]===0&&(s.enableVertexAttribArray(P),Y[P]=1),X[P]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),X[P]=N)}function R(){let P=l.newAttributes,N=l.enabledAttributes;for(let H=0,Y=N.length;H<Y;H++)N[H]!==P[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function C(P,N,H,Y,X,$,q){q===!0?s.vertexAttribIPointer(P,N,H,X,$):s.vertexAttribPointer(P,N,H,Y,X,$)}function D(P,N,H,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=Y.attributes,$=H.getAttributes(),q=N.defaultAttributeValues;for(let Z in $){let ct=$[Z];if(ct.location>=0){let G=X[Z];if(G===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let K=G.normalized,at=G.itemSize,vt=e.get(G);if(vt===void 0)continue;let ft=vt.buffer,It=vt.type,Dt=vt.bytesPerElement,Et=n.isWebGL2===!0&&(It===s.INT||It===s.UNSIGNED_INT||G.gpuType===Wf);if(G.isInterleavedBufferAttribute){let Qt=G.data,k=Qt.stride,hn=G.offset;if(Qt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<ct.locationSize;Tt++)T(ct.location+Tt,Qt.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Qt.meshPerAttribute*Qt.count)}else for(let Tt=0;Tt<ct.locationSize;Tt++)M(ct.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let Tt=0;Tt<ct.locationSize;Tt++)C(ct.location+Tt,at/ct.locationSize,It,K,k*Dt,(hn+at/ct.locationSize*Tt)*Dt,Et)}else{if(G.isInstancedBufferAttribute){for(let Qt=0;Qt<ct.locationSize;Qt++)T(ct.location+Qt,G.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Qt=0;Qt<ct.locationSize;Qt++)M(ct.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let Qt=0;Qt<ct.locationSize;Qt++)C(ct.location+Qt,at/ct.locationSize,It,K,at*Dt,at/ct.locationSize*Qt*Dt,Et)}}else if(q!==void 0){let K=q[Z];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ct.location,K);break;case 3:s.vertexAttrib3fv(ct.location,K);break;case 4:s.vertexAttrib4fv(ct.location,K);break;default:s.vertexAttrib1fv(ct.location,K)}}}}R()}function b(){W();for(let P in a){let N=a[P];for(let H in N){let Y=N[H];for(let X in Y)m(Y[X].object),delete Y[X];delete N[H]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;let N=a[P.id];for(let H in N){let Y=N[H];for(let X in Y)m(Y[X].object),delete Y[X];delete N[H]}delete a[P.id]}function U(P){for(let N in a){let H=a[N];if(H[P.id]===void 0)continue;let Y=H[P.id];for(let X in Y)m(Y[X].object),delete Y[X];delete H[P.id]}}function W(){j(),h=!0,l!==c&&(l=c,f(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:j,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:M,disableUnusedAttributes:R}}function vy(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(h[m],u[m]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];e.update(m,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function xy(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=o||t.has("OES_texture_float"),T=x&&M,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:R}}function yy(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Zn,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,x=y*4,M=p.clippingState||null;c.value=M,M=h(m,d,x,f);for(let T=0;T!==x;++T)M[T]=e[T];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,M=f;x!==v;++x,M+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function _y(s){let t=new WeakMap;function e(o,a){return a===Hl?o.mapping=ir:a===Vl&&(o.mapping=sr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Hl||a===Vl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Kl(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var En=class extends wa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zs=4,Qd=[.125,.215,.35,.446,.526,.582],gs=20,Cl=new En,tf=new _t,Ll=null,Pl=0,Il=0,ps=(1+Math.sqrt(5))/2,qs=1/ps,ef=[new _(1,1,1),new _(-1,1,1),new _(1,1,-1),new _(-1,1,-1),new _(0,ps,qs),new _(0,ps,-qs),new _(qs,0,ps),new _(-qs,0,ps),new _(ps,qs,0),new _(-ps,qs,0)],lr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ll=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ll,Pl,Il),t.scissorTest=!1,sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ll=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ye,minFilter:ye,generateMipmaps:!1,type:Qn,format:rn,colorSpace:Ue,depthBuffer:!1},i=nf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=by(r)),this._blurMaterial=My(r,t,e)}return i}_compileMaterial(t){let e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,n,i){let a=new De(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(tf),h.toneMapping=ui,h.autoClear=!1;let f=new We({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new Bt(new ti,f),v=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(tf),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;sa(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ir||t.mapping===sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;sa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Cl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ef[(i-1)%ef.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Bt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gs-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):gs;g>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gs}`);let p=[],y=0;for(let C=0;C<gs;++C){let D=C/v,b=Math.exp(-D*D/2);p.push(b),C===0?y+=b:C<g&&(y+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;let M=this._sizeLods[i],T=3*M*(i>x-Zs?i-x+Zs:0),R=4*(this._cubeSize-M);sa(e,T,R,3*M,2*M),c.setRenderTarget(e),c.render(u,Cl)}};function by(s){let t=[],e=[],n=[],i=s,r=s-Zs+1+Qd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Zs?c=Qd[o-s+Zs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*f),x=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let R=0;R<f;R++){let C=R%3*2/3-1,D=R>2?0:-1,b=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];y.set(b,v*m*R),x.set(d,g*m*R);let E=[R,R,R,R,R,R];M.set(E,p*m*R)}let T=new me;T.setAttribute("position",new Ne(y,v)),T.setAttribute("uv",new Ne(x,g)),T.setAttribute("faceIndex",new Ne(M,p)),t.push(T),i>Zs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nf(s,t,e){let n=new Ge(s,t,e);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function My(s,t,e){let n=new Float32Array(gs),i=new _(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function sf(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function rf(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function wy(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Hl||c===Vl,h=c===ir||c===sr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new lr(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new lr(s));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Sy(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ey(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let v=f[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let x=0,M=y.length;x<M;x+=3){let T=y[x+0],R=y[x+1],C=y[x+2];d.push(T,R,R,C,C,T)}}else if(m!==void 0){let y=m.array;v=m.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let T=x+0,R=x+1,C=x+2;d.push(T,R,R,C,C,T)}}else return;let g=new(tp(d)?Ma:ba)(d,1);g.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ty(s,t,e,n){let i=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,m){s.drawElements(r,m,a,f*c),e.update(m,r,1)}function u(f,m,v){if(v===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,a,f*c,v),e.update(m,r,v)}function d(f,m,v){if(v===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(f[p]/c,m[p]);else{g.multiDrawElementsWEBGL(r,m,0,a,f,0,v);let p=0;for(let y=0;y<v;y++)p+=m[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ay(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ry(s,t){return s[0]-t[0]}function Cy(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ly(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new Wt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0,v=r.get(h);if(v===void 0||v.count!==m){let P=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],D=0;y===!0&&(D=1),x===!0&&(D=2),M===!0&&(D=3);let b=h.attributes.position.count*D,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let U=new Float32Array(b*E*4*m),W=new _a(U,b,E,m);W.type=Ci,W.needsUpdate=!0;let j=D*4;for(let N=0;N<m;N++){let H=T[N],Y=R[N],X=C[N],$=b*E*4*N;for(let q=0;q<H.count;q++){let Z=q*j;y===!0&&(o.fromBufferAttribute(H,q),U[$+Z+0]=o.x,U[$+Z+1]=o.y,U[$+Z+2]=o.z,U[$+Z+3]=0),x===!0&&(o.fromBufferAttribute(Y,q),U[$+Z+4]=o.x,U[$+Z+5]=o.y,U[$+Z+6]=o.z,U[$+Z+7]=0),M===!0&&(o.fromBufferAttribute(X,q),U[$+Z+8]=o.x,U[$+Z+9]=o.y,U[$+Z+10]=o.z,U[$+Z+11]=X.itemSize===4?o.w:1)}}v={count:m,texture:W,size:new pt(b,E)},r.set(h,v),h.addEventListener("dispose",P)}let g=0;for(let y=0;y<d.length;y++)g+=d[y];let p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{let f=d===void 0?0:d.length,m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let x=0;x<f;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<f;x++){let M=m[x];M[0]=x,M[1]=d[x]}m.sort(Cy);for(let x=0;x<8;x++)x<f&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Ry);let v=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=a[x],T=M[0],R=M[1];T!==Number.MAX_SAFE_INTEGER&&R?(v&&h.getAttribute("morphTarget"+x)!==v[T]&&h.setAttribute("morphTarget"+x,v[T]),g&&h.getAttribute("morphNormal"+x)!==g[T]&&h.setAttribute("morphNormal"+x,g[T]),i[x]=R,p+=R):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),g&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Py(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var qi=class extends Ke{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:xs,h!==xs&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=Un),n===void 0&&h===rr&&(n=vs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=c!==void 0?c:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sp=new Ke,rp=new qi(1,1);rp.compareFunction=Ga;var op=new _a,ap=new Yl,cp=new Sa,of=[],af=[],cf=new Float32Array(16),lf=new Float32Array(9),hf=new Float32Array(4);function mr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=of[i];if(r===void 0&&(r=new Float32Array(i),of[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wa(s,t){let e=af[t];e===void 0&&(e=new Int32Array(t),af[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Iy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Dy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function Ny(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function Uy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function ky(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(ke(e,n))return;hf.set(n),s.uniformMatrix2fv(this.addr,!1,hf),Oe(e,n)}}function Oy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(ke(e,n))return;lf.set(n),s.uniformMatrix3fv(this.addr,!1,lf),Oe(e,n)}}function Fy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(ke(e,n))return;cf.set(n),s.uniformMatrix4fv(this.addr,!1,cf),Oe(e,n)}}function zy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function By(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function Hy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function Vy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function Gy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Wy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function $y(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function Xy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function Yy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?rp:sp;e.setTexture2D(t||r,i)}function qy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ap,i)}function Ky(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cp,i)}function jy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||op,i)}function Zy(s){switch(s){case 5126:return Iy;case 35664:return Dy;case 35665:return Ny;case 35666:return Uy;case 35674:return ky;case 35675:return Oy;case 35676:return Fy;case 5124:case 35670:return zy;case 35667:case 35671:return By;case 35668:case 35672:return Hy;case 35669:case 35673:return Vy;case 5125:return Gy;case 36294:return Wy;case 36295:return $y;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return jy}}function Jy(s,t){s.uniform1fv(this.addr,t)}function Qy(s,t){let e=mr(t,this.size,2);s.uniform2fv(this.addr,e)}function t_(s,t){let e=mr(t,this.size,3);s.uniform3fv(this.addr,e)}function e_(s,t){let e=mr(t,this.size,4);s.uniform4fv(this.addr,e)}function n_(s,t){let e=mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function i_(s,t){let e=mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function s_(s,t){let e=mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function r_(s,t){s.uniform1iv(this.addr,t)}function o_(s,t){s.uniform2iv(this.addr,t)}function a_(s,t){s.uniform3iv(this.addr,t)}function c_(s,t){s.uniform4iv(this.addr,t)}function l_(s,t){s.uniform1uiv(this.addr,t)}function h_(s,t){s.uniform2uiv(this.addr,t)}function u_(s,t){s.uniform3uiv(this.addr,t)}function d_(s,t){s.uniform4uiv(this.addr,t)}function f_(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||sp,r[o])}function p_(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ap,r[o])}function m_(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||cp,r[o])}function g_(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||op,r[o])}function v_(s){switch(s){case 5126:return Jy;case 35664:return Qy;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return c_;case 5125:return l_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}var jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zy(e.type)}},Zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v_(e.type)}},Jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Dl=/(\w+)(\])?(\[|\.)?/g;function uf(s,t){s.seq.push(t),s.map[t.id]=t}function x_(s,t,e){let n=s.name,i=n.length;for(Dl.lastIndex=0;;){let r=Dl.exec(n),o=Dl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){uf(e,l===void 0?new jl(a,s,t):new Zl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Jl(a),uf(e,u)),e=u}}}var er=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);x_(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function df(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var y_=37297,__=0;function b_(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function M_(s){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(s),n;switch(t===e?n="":t===ma&&e===pa?n="LinearDisplayP3ToLinearSRGB":t===pa&&e===ma&&(n="LinearSRGBToLinearDisplayP3"),s){case Ue:case Va:return[n,"LinearTransferOETF"];case ee:case wh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ff(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+b_(s.getShaderSource(t),o)}else return i}function w_(s,t){let e=M_(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function S_(s,t){let e;switch(t){case R0:e="Linear";break;case C0:e="Reinhard";break;case L0:e="OptimizedCineon";break;case P0:e="ACESFilmic";break;case D0:e="AgX";break;case I0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function E_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function T_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Js).join(`
`)}function A_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Js(s){return s!==""}function pf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(s){return s.replace(C_,P_)}var L_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function P_(s,t){let e=zt[t];if(e===void 0){let n=L_.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ql(e)}var I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(s){return s.replace(I_,D_)}function D_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vf(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===n0?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function U_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ir:case sr:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function k_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case sr:t="ENVMAP_MODE_REFRACTION";break}return t}function O_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vf:t="ENVMAP_BLENDING_MULTIPLY";break;case T0:t="ENVMAP_BLENDING_MIX";break;case A0:t="ENVMAP_BLENDING_ADD";break}return t}function F_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function z_(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=N_(e),l=U_(e),h=k_(e),u=O_(e),d=F_(e),f=e.isWebGL2?"":E_(e),m=T_(e),v=A_(r),g=i.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Js).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Js).join(`
`),y.length>0&&(y+=`
`)):(p=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),y=[f,vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?zt.tonemapping_pars_fragment:"",e.toneMapping!==ui?S_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,w_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),o=Ql(o),o=pf(o,e),o=mf(o,e),a=Ql(a),a=pf(a,e),a=mf(a,e),o=gf(o),a=gf(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+o,T=x+y+a,R=df(i,i.VERTEX_SHADER,M),C=df(i,i.FRAGMENT_SHADER,T);i.attachShader(g,R),i.attachShader(g,C),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function D(W){if(s.debug.checkShaderErrors){let j=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(R).trim(),N=i.getShaderInfoLog(C).trim(),H=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,R,C);else{let X=ff(i,R,"vertex"),$=ff(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+X+`
`+$)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||N==="")&&(Y=!1);Y&&(W.diagnostics={runnable:H,programLog:j,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:y}})}i.deleteShader(R),i.deleteShader(C),b=new er(i,g),E=R_(i,g)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(g,y_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=__++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=C,this}var B_=0,th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new eh(t),e.set(t,n)),n}},eh=class{constructor(t){this.id=B_++,this.code=t,this.usedTimes=0}};function H_(s,t,e,n,i,r,o){let a=new $r,c=new th,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function g(b,E,U,W,j){let P=W.fog,N=j.geometry,H=b.isMeshStandardMaterial?W.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),X=Y&&Y.mapping===Ba?Y.image.height:null,$=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Z=q!==void 0?q.length:0,ct=0;N.morphAttributes.position!==void 0&&(ct=1),N.morphAttributes.normal!==void 0&&(ct=2),N.morphAttributes.color!==void 0&&(ct=3);let G,K,at,vt;if($){let un=li[$];G=un.vertexShader,K=un.fragmentShader}else G=b.vertexShader,K=b.fragmentShader,c.update(b),at=c.getVertexShaderID(b),vt=c.getFragmentShaderID(b);let ft=s.getRenderTarget(),It=j.isInstancedMesh===!0,Dt=j.isBatchedMesh===!0,Et=!!b.map,Qt=!!b.matcap,k=!!Y,hn=!!b.aoMap,Tt=!!b.lightMap,Ut=!!b.bumpMap,gt=!!b.normalMap,ve=!!b.displacementMap,Ht=!!b.emissiveMap,A=!!b.metalnessMap,w=!!b.roughnessMap,F=b.anisotropy>0,tt=b.clearcoat>0,Q=b.iridescence>0,et=b.sheen>0,xt=b.transmission>0,ot=F&&!!b.anisotropyMap,ut=tt&&!!b.clearcoatMap,Ct=tt&&!!b.clearcoatNormalMap,Vt=tt&&!!b.clearcoatRoughnessMap,J=Q&&!!b.iridescenceMap,se=Q&&!!b.iridescenceThicknessMap,qt=et&&!!b.sheenColorMap,Nt=et&&!!b.sheenRoughnessMap,St=!!b.specularMap,dt=!!b.specularColorMap,Ft=!!b.specularIntensityMap,ne=xt&&!!b.transmissionMap,be=xt&&!!b.thicknessMap,$t=!!b.gradientMap,nt=!!b.alphaMap,L=b.alphaTest>0,st=!!b.alphaHash,rt=!!b.extensions,Lt=!!N.attributes.uv1,At=!!N.attributes.uv2,ce=!!N.attributes.uv3,le=ui;return b.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(le=s.toneMapping),{isWebGL2:h,shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:K,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:vt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Dt,instancing:It,instancingColor:It&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ue,map:Et,matcap:Qt,envMap:k,envMapMode:k&&Y.mapping,envMapCubeUVHeight:X,aoMap:hn,lightMap:Tt,bumpMap:Ut,normalMap:gt,displacementMap:d&&ve,emissiveMap:Ht,normalMapObjectSpace:gt&&b.normalMapType===X0,normalMapTangentSpace:gt&&b.normalMapType===Qf,metalnessMap:A,roughnessMap:w,anisotropy:F,anisotropyMap:ot,clearcoat:tt,clearcoatMap:ut,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Vt,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:se,sheen:et,sheenColorMap:qt,sheenRoughnessMap:Nt,specularMap:St,specularColorMap:dt,specularIntensityMap:Ft,transmission:xt,transmissionMap:ne,thicknessMap:be,gradientMap:$t,opaque:b.transparent===!1&&b.blending===Qs,alphaMap:nt,alphaTest:L,alphaHash:st,combine:b.combine,mapUv:Et&&v(b.map.channel),aoMapUv:hn&&v(b.aoMap.channel),lightMapUv:Tt&&v(b.lightMap.channel),bumpMapUv:Ut&&v(b.bumpMap.channel),normalMapUv:gt&&v(b.normalMap.channel),displacementMapUv:ve&&v(b.displacementMap.channel),emissiveMapUv:Ht&&v(b.emissiveMap.channel),metalnessMapUv:A&&v(b.metalnessMap.channel),roughnessMapUv:w&&v(b.roughnessMap.channel),anisotropyMapUv:ot&&v(b.anisotropyMap.channel),clearcoatMapUv:ut&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(b.sheenRoughnessMap.channel),specularMapUv:St&&v(b.specularMap.channel),specularColorMapUv:dt&&v(b.specularColorMap.channel),specularIntensityMapUv:Ft&&v(b.specularIntensityMap.channel),transmissionMapUv:ne&&v(b.transmissionMap.channel),thicknessMapUv:be&&v(b.thicknessMap.channel),alphaMapUv:nt&&v(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(gt||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:At,vertexUv3s:ce,pointsUvs:j.isPoints===!0&&!!N.attributes.uv&&(Et||nt),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ct,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Et&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qe,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:rt&&b.extensions.derivatives===!0,extensionFragDepth:rt&&b.extensions.fragDepth===!0,extensionDrawBuffers:rt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)E.push(U),E.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(y(E,b),x(E,b),E.push(s.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function y(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function M(b){let E=m[b.type],U;if(E){let W=li[E];U=Lg.clone(W.uniforms)}else U=b.uniforms;return U}function T(b,E){let U;for(let W=0,j=l.length;W<j;W++){let P=l[W];if(P.cacheKey===E){U=P,++U.usedTimes;break}}return U===void 0&&(U=new z_(s,E,b,r),l.push(U)),U}function R(b){if(--b.usedTimes===0){let E=l.indexOf(b);l[E]=l[l.length-1],l.pop(),b.destroy()}}function C(b){c.remove(b)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:T,releaseProgram:R,releaseShaderCache:C,programs:l,dispose:D}}function V_(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function G_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function xf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,v,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function a(u,d,f,m,v,g){let p=o(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,m,v,g){let p=o(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||G_),n.length>1&&n.sort(d||xf),i.length>1&&i.sort(d||xf)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function W_(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new yf,s.set(n,[o])):i>=r.length?(o=new yf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function $_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new _,color:new _t};break;case"SpotLight":e={position:new _,direction:new _,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new _,halfWidth:new _,halfHeight:new _};break}return s[t.id]=e,e}}}function X_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Y_=0;function q_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function K_(s,t){let e=new $_,n=X_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new _);let r=new _,o=new mt,a=new mt;function c(h,u){let d=0,f=0,m=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let v=0,g=0,p=0,y=0,x=0,M=0,T=0,R=0,C=0,D=0,b=0;h.sort(q_);let E=u===!0?Math.PI:1;for(let W=0,j=h.length;W<j;W++){let P=h[W],N=P.color,H=P.intensity,Y=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*H*E,f+=N.g*H*E,m+=N.b*H*E;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],H);b++}else if(P.isDirectionalLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){let q=P.shadow,Z=n.get(P);Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,i.directionalShadow[v]=Z,i.directionalShadowMap[v]=X,i.directionalShadowMatrix[v]=P.shadow.matrix,M++}i.directional[v]=$,v++}else if(P.isSpotLight){let $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(N).multiplyScalar(H*E),$.distance=Y,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[p]=$;let q=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,q.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[p]=q.matrix,P.castShadow){let Z=n.get(P);Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=X,R++}p++}else if(P.isRectAreaLight){let $=e.get(P);$.color.copy(N).multiplyScalar(H),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=$,y++}else if(P.isPointLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*E),$.distance=P.distance,$.decay=P.decay,P.castShadow){let q=P.shadow,Z=n.get(P);Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=P.shadow.matrix,T++}i.point[g]=$,g++}else if(P.isHemisphereLight){let $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(H*E),$.groundColor.copy(P.groundColor).multiplyScalar(H*E),i.hemi[x]=$,x++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;let U=i.hash;(U.directionalLength!==v||U.pointLength!==g||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==x||U.numDirectionalShadows!==M||U.numPointShadows!==T||U.numSpotShadows!==R||U.numSpotMaps!==C||U.numLightProbes!==b)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=y,i.point.length=g,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=R+C-D,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=b,U.directionalLength=v,U.pointLength=g,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=x,U.numDirectionalShadows=M,U.numPointShadows=T,U.numSpotShadows=R,U.numSpotMaps=C,U.numLightProbes=b,i.version=Y_++)}function l(h,u){let d=0,f=0,m=0,v=0,g=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let M=h[y];if(M.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(M.isSpotLight){let T=i.spot[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let T=i.rectArea[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function _f(s,t){let e=new K_(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function j_(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new _f(s,t),e.set(r,[c])):o>=a.length?(c=new _f(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var Yr=class extends wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nh=class extends wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q_(s,t,e){let n=new Xr,i=new pt,r=new pt,o=new Wt,a=new Yr({depthPacking:$0}),c=new nh,l={},h=e.maxTextureSize,u={[di]:on,[on]:di,[qe]:qe},d=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Z_,fragmentShader:J_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new me;m.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Bt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hf;let p=this.type;this.render=function(R,C,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let b=s.getRenderTarget(),E=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Wi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let j=p!==Ri&&this.type===Ri,P=p===Ri&&this.type!==Ri;for(let N=0,H=R.length;N<H;N++){let Y=R[N],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let $=X.getFrameExtents();if(i.multiply($),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,X.mapSize.y=r.y)),X.map===null||j===!0||P===!0){let Z=this.type!==Ri?{minFilter:Ie,magFilter:Ie}:{};X.map!==null&&X.map.dispose(),X.map=new Ge(i.x,i.y,Z),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let q=X.getViewportCount();for(let Z=0;Z<q;Z++){let ct=X.getViewport(Z);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),W.viewport(o),X.updateMatrices(Y,Z),n=X.getFrustum(),M(C,D,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Ri&&y(X,D),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,E,U)};function y(R,C){let D=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ge(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,D,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,D,f,v,null)}function x(R,C,D,b){let E=null,U=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)E=U;else if(E=D.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let W=E.uuid,j=C.uuid,P=l[W];P===void 0&&(P={},l[W]=P);let N=P[j];N===void 0&&(N=E.clone(),P[j]=N,C.addEventListener("dispose",T)),E=N}if(E.visible=C.visible,E.wireframe=C.wireframe,b===Ri?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let W=s.properties.get(E);W.light=D}return E}function M(R,C,D,b,E){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Ri)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let j=t.update(R),P=R.material;if(Array.isArray(P)){let N=j.groups;for(let H=0,Y=N.length;H<Y;H++){let X=N[H],$=P[X.materialIndex];if($&&$.visible){let q=x(R,$,b,E);R.onBeforeShadow(s,R,C,D,j,q,X),s.renderBufferDirect(D,null,j,q,R,X),R.onAfterShadow(s,R,C,D,j,q,X)}}}else if(P.visible){let N=x(R,P,b,E);R.onBeforeShadow(s,R,C,D,j,N,null),s.renderBufferDirect(D,null,j,N,R,null),R.onAfterShadow(s,R,C,D,j,N,null)}}let W=R.children;for(let j=0,P=W.length;j<P;j++)M(W[j],C,D,b,E)}function T(R){R.target.removeEventListener("dispose",T);for(let D in l){let b=l[D],E=R.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function tb(s,t,e){let n=e.isWebGL2;function i(){let L=!1,st=new Wt,rt=null,Lt=new Wt(0,0,0,0);return{setMask:function(At){rt!==At&&!L&&(s.colorMask(At,At,At,At),rt=At)},setLocked:function(At){L=At},setClear:function(At,ce,le,ze,un){un===!0&&(At*=ze,ce*=ze,le*=ze),st.set(At,ce,le,ze),Lt.equals(st)===!1&&(s.clearColor(At,ce,le,ze),Lt.copy(st))},reset:function(){L=!1,rt=null,Lt.set(-1,0,0,0)}}}function r(){let L=!1,st=null,rt=null,Lt=null;return{setTest:function(At){At?Dt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(At){st!==At&&!L&&(s.depthMask(At),st=At)},setFunc:function(At){if(rt!==At){switch(At){case y0:s.depthFunc(s.NEVER);break;case _0:s.depthFunc(s.ALWAYS);break;case b0:s.depthFunc(s.LESS);break;case ua:s.depthFunc(s.LEQUAL);break;case M0:s.depthFunc(s.EQUAL);break;case w0:s.depthFunc(s.GEQUAL);break;case S0:s.depthFunc(s.GREATER);break;case E0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=At}},setLocked:function(At){L=At},setClear:function(At){Lt!==At&&(s.clearDepth(At),Lt=At)},reset:function(){L=!1,st=null,rt=null,Lt=null}}}function o(){let L=!1,st=null,rt=null,Lt=null,At=null,ce=null,le=null,ze=null,un=null;return{setTest:function(he){L||(he?Dt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(he){st!==he&&!L&&(s.stencilMask(he),st=he)},setFunc:function(he,dn,ci){(rt!==he||Lt!==dn||At!==ci)&&(s.stencilFunc(he,dn,ci),rt=he,Lt=dn,At=ci)},setOp:function(he,dn,ci){(ce!==he||le!==dn||ze!==ci)&&(s.stencilOp(he,dn,ci),ce=he,le=dn,ze=ci)},setLocked:function(he){L=he},setClear:function(he){un!==he&&(s.clearStencil(he),un=he)},reset:function(){L=!1,st=null,rt=null,Lt=null,At=null,ce=null,le=null,ze=null,un=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},m=new WeakMap,v=[],g=null,p=!1,y=null,x=null,M=null,T=null,R=null,C=null,D=null,b=new _t(0,0,0),E=0,U=!1,W=null,j=null,P=null,N=null,H=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,$=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=$>=2);let Z=null,ct={},G=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),at=new Wt().fromArray(G),vt=new Wt().fromArray(K);function ft(L,st,rt,Lt){let At=new Uint8Array(4),ce=s.createTexture();s.bindTexture(L,ce),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let le=0;le<rt;le++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(st,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(st+le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return ce}let It={};It[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Dt(s.DEPTH_TEST),c.setFunc(ua),Ht(!1),A(td),Dt(s.CULL_FACE),gt(Wi);function Dt(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Et(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Qt(L,st){return f[L]!==st?(s.bindFramebuffer(L,st),f[L]=st,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=st),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=st)),!0):!1}function k(L,st){let rt=v,Lt=!1;if(L)if(rt=m.get(st),rt===void 0&&(rt=[],m.set(st,rt)),L.isWebGLMultipleRenderTargets){let At=L.texture;if(rt.length!==At.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,le=At.length;ce<le;ce++)rt[ce]=s.COLOR_ATTACHMENT0+ce;rt.length=At.length,Lt=!0}}else rt[0]!==s.COLOR_ATTACHMENT0&&(rt[0]=s.COLOR_ATTACHMENT0,Lt=!0);else rt[0]!==s.BACK&&(rt[0]=s.BACK,Lt=!0);Lt&&(e.isWebGL2?s.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function hn(L){return g!==L?(s.useProgram(L),g=L,!0):!1}let Tt={[ms]:s.FUNC_ADD,[s0]:s.FUNC_SUBTRACT,[r0]:s.FUNC_REVERSE_SUBTRACT};if(n)Tt[id]=s.MIN,Tt[sd]=s.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(Tt[id]=L.MIN_EXT,Tt[sd]=L.MAX_EXT)}let Ut={[o0]:s.ZERO,[a0]:s.ONE,[c0]:s.SRC_COLOR,[zl]:s.SRC_ALPHA,[p0]:s.SRC_ALPHA_SATURATE,[d0]:s.DST_COLOR,[h0]:s.DST_ALPHA,[l0]:s.ONE_MINUS_SRC_COLOR,[Bl]:s.ONE_MINUS_SRC_ALPHA,[f0]:s.ONE_MINUS_DST_COLOR,[u0]:s.ONE_MINUS_DST_ALPHA,[m0]:s.CONSTANT_COLOR,[g0]:s.ONE_MINUS_CONSTANT_COLOR,[v0]:s.CONSTANT_ALPHA,[x0]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(L,st,rt,Lt,At,ce,le,ze,un,he){if(L===Wi){p===!0&&(Et(s.BLEND),p=!1);return}if(p===!1&&(Dt(s.BLEND),p=!0),L!==i0){if(L!==y||he!==U){if((x!==ms||R!==ms)&&(s.blendEquation(s.FUNC_ADD),x=ms,R=ms),he)switch(L){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFunc(s.ONE,s.ONE);break;case ed:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ed:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,T=null,C=null,D=null,b.set(0,0,0),E=0,y=L,U=he}return}At=At||st,ce=ce||rt,le=le||Lt,(st!==x||At!==R)&&(s.blendEquationSeparate(Tt[st],Tt[At]),x=st,R=At),(rt!==M||Lt!==T||ce!==C||le!==D)&&(s.blendFuncSeparate(Ut[rt],Ut[Lt],Ut[ce],Ut[le]),M=rt,T=Lt,C=ce,D=le),(ze.equals(b)===!1||un!==E)&&(s.blendColor(ze.r,ze.g,ze.b,un),b.copy(ze),E=un),y=L,U=!1}function ve(L,st){L.side===qe?Et(s.CULL_FACE):Dt(s.CULL_FACE);let rt=L.side===on;st&&(rt=!rt),Ht(rt),L.blending===Qs&&L.transparent===!1?gt(Wi):gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let Lt=L.stencilWrite;l.setTest(Lt),Lt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Dt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){W!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),W=L)}function A(L){L!==t0?(Dt(s.CULL_FACE),L!==j&&(L===td?s.cullFace(s.BACK):L===e0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),j=L}function w(L){L!==P&&(X&&s.lineWidth(L),P=L)}function F(L,st,rt){L?(Dt(s.POLYGON_OFFSET_FILL),(N!==st||H!==rt)&&(s.polygonOffset(st,rt),N=st,H=rt)):Et(s.POLYGON_OFFSET_FILL)}function tt(L){L?Dt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Q(L){L===void 0&&(L=s.TEXTURE0+Y-1),Z!==L&&(s.activeTexture(L),Z=L)}function et(L,st,rt){rt===void 0&&(Z===null?rt=s.TEXTURE0+Y-1:rt=Z);let Lt=ct[rt];Lt===void 0&&(Lt={type:void 0,texture:void 0},ct[rt]=Lt),(Lt.type!==L||Lt.texture!==st)&&(Z!==rt&&(s.activeTexture(rt),Z=rt),s.bindTexture(L,st||It[L]),Lt.type=L,Lt.texture=st)}function xt(){let L=ct[Z];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ot(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(L){at.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),at.copy(L))}function ne(L){vt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),vt.copy(L))}function be(L,st){let rt=u.get(st);rt===void 0&&(rt=new WeakMap,u.set(st,rt));let Lt=rt.get(L);Lt===void 0&&(Lt=s.getUniformBlockIndex(st,L.name),rt.set(L,Lt))}function $t(L,st){let Lt=u.get(st).get(L);h.get(st)!==Lt&&(s.uniformBlockBinding(st,Lt,L.__bindingPointIndex),h.set(st,Lt))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Z=null,ct={},f={},m=new WeakMap,v=[],g=null,p=!1,y=null,x=null,M=null,T=null,R=null,C=null,D=null,b=new _t(0,0,0),E=0,U=!1,W=null,j=null,P=null,N=null,H=null,at.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Dt,disable:Et,bindFramebuffer:Qt,drawBuffers:k,useProgram:hn,setBlending:gt,setMaterial:ve,setFlipSided:Ht,setCullFace:A,setLineWidth:w,setPolygonOffset:F,setScissorTest:tt,activeTexture:Q,bindTexture:et,unbindTexture:xt,compressedTexImage2D:ot,compressedTexImage3D:ut,texImage2D:St,texImage3D:dt,updateUBOMapping:be,uniformBlockBinding:$t,texStorage2D:qt,texStorage3D:Nt,texSubImage2D:Ct,texSubImage3D:Vt,compressedTexSubImage2D:J,compressedTexSubImage3D:se,scissor:Ft,viewport:ne,reset:nt}}function eb(s,t,e,n,i,r,o){let a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,w){return f?new OffscreenCanvas(A,w):Wr("canvas")}function v(A,w,F,tt){let Q=1;if((A.width>tt||A.height>tt)&&(Q=tt/Math.max(A.width,A.height)),Q<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let et=w?va:Math.floor,xt=et(Q*A.width),ot=et(Q*A.height);u===void 0&&(u=m(xt,ot));let ut=F?m(xt,ot):u;return ut.width=xt,ut.height=ot,ut.getContext("2d").drawImage(A,0,0,xt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xt+"x"+ot+")."),ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return $l(A.width)&&$l(A.height)}function p(A){return a?!1:A.wrapS!==bn||A.wrapT!==bn||A.minFilter!==Ie&&A.minFilter!==ye}function y(A,w){return A.generateMipmaps&&w&&A.minFilter!==Ie&&A.minFilter!==ye}function x(A){s.generateMipmap(A)}function M(A,w,F,tt,Q=!1){if(a===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=w;if(w===s.RED&&(F===s.FLOAT&&(et=s.R32F),F===s.HALF_FLOAT&&(et=s.R16F),F===s.UNSIGNED_BYTE&&(et=s.R8)),w===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(et=s.R8UI),F===s.UNSIGNED_SHORT&&(et=s.R16UI),F===s.UNSIGNED_INT&&(et=s.R32UI),F===s.BYTE&&(et=s.R8I),F===s.SHORT&&(et=s.R16I),F===s.INT&&(et=s.R32I)),w===s.RG&&(F===s.FLOAT&&(et=s.RG32F),F===s.HALF_FLOAT&&(et=s.RG16F),F===s.UNSIGNED_BYTE&&(et=s.RG8)),w===s.RGBA){let xt=Q?fa:te.getTransfer(tt);F===s.FLOAT&&(et=s.RGBA32F),F===s.HALF_FLOAT&&(et=s.RGBA16F),F===s.UNSIGNED_BYTE&&(et=xt===fe?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function T(A,w,F){return y(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==Ie&&A.minFilter!==ye?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function R(A){return A===Ie||A===da||A===Fr?s.NEAREST:s.LINEAR}function C(A){let w=A.target;w.removeEventListener("dispose",C),b(w),w.isVideoTexture&&h.delete(w)}function D(A){let w=A.target;w.removeEventListener("dispose",D),U(w)}function b(A){let w=n.get(A);if(w.__webglInit===void 0)return;let F=A.source,tt=d.get(F);if(tt){let Q=tt[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(A),Object.keys(tt).length===0&&d.delete(F)}n.remove(A)}function E(A){let w=n.get(A);s.deleteTexture(w.__webglTexture);let F=A.source,tt=d.get(F);delete tt[w.__cacheKey],o.memory.textures--}function U(A){let w=A.texture,F=n.get(A),tt=n.get(w);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let et=0;et<F.__webglFramebuffer[Q].length;et++)s.deleteFramebuffer(F.__webglFramebuffer[Q][et]);else s.deleteFramebuffer(F.__webglFramebuffer[Q]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)s.deleteFramebuffer(F.__webglFramebuffer[Q]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,et=w.length;Q<et;Q++){let xt=n.get(w[Q]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(w[Q])}n.remove(w),n.remove(A)}let W=0;function j(){W=0}function P(){let A=W;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),W+=1,A}function N(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function H(A,w){let F=n.get(A);if(A.isVideoTexture&&ve(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(F,A,w);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+w)}function Y(A,w){let F=n.get(A);if(A.version>0&&F.__version!==A.version){at(F,A,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+w)}function X(A,w){let F=n.get(A);if(A.version>0&&F.__version!==A.version){at(F,A,w);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+w)}function $(A,w){let F=n.get(A);if(A.version>0&&F.__version!==A.version){vt(F,A,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+w)}let q={[_s]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[Gr]:s.MIRRORED_REPEAT},Z={[Ie]:s.NEAREST,[da]:s.NEAREST_MIPMAP_NEAREST,[Fr]:s.NEAREST_MIPMAP_LINEAR,[ye]:s.LINEAR,[bh]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},ct={[Y0]:s.NEVER,[Q0]:s.ALWAYS,[q0]:s.LESS,[Ga]:s.LEQUAL,[K0]:s.EQUAL,[J0]:s.GEQUAL,[j0]:s.GREATER,[Z0]:s.NOTEQUAL};function G(A,w,F){if(F?(s.texParameteri(A,s.TEXTURE_WRAP_S,q[w.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,q[w.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,q[w.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Z[w.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Z[w.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==bn||w.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,R(w.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,R(w.minFilter)),w.minFilter!==Ie&&w.minFilter!==ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ct[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ie||w.minFilter!==Fr&&w.minFilter!==fi||w.type===Ci&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Qn&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function K(A,w){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",C));let tt=w.source,Q=d.get(tt);Q===void 0&&(Q={},d.set(tt,Q));let et=N(w);if(et!==A.__cacheKey){Q[et]===void 0&&(Q[et]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[et].usedTimes++;let xt=Q[A.__cacheKey];xt!==void 0&&(Q[A.__cacheKey].usedTimes--,xt.usedTimes===0&&E(w)),A.__cacheKey=et,A.__webglTexture=Q[et].texture}return F}function at(A,w,F){let tt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(tt=s.TEXTURE_3D);let Q=K(A,w),et=w.source;e.bindTexture(tt,A.__webglTexture,s.TEXTURE0+F);let xt=n.get(et);if(et.version!==xt.__version||Q===!0){e.activeTexture(s.TEXTURE0+F);let ot=te.getPrimaries(te.workingColorSpace),ut=w.colorSpace===Ve?null:te.getPrimaries(w.colorSpace),Ct=w.colorSpace===Ve||ot===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Vt=p(w)&&g(w.image)===!1,J=v(w.image,Vt,!1,i.maxTextureSize);J=Ht(w,J);let se=g(J)||a,qt=r.convert(w.format,w.colorSpace),Nt=r.convert(w.type),St=M(w.internalFormat,qt,Nt,w.colorSpace,w.isVideoTexture);G(tt,w,se);let dt,Ft=w.mipmaps,ne=a&&w.isVideoTexture!==!0&&St!==jf,be=xt.__version===void 0||Q===!0,$t=T(w,J,se);if(w.isDepthTexture)St=s.DEPTH_COMPONENT,a?w.type===Ci?St=s.DEPTH_COMPONENT32F:w.type===Un?St=s.DEPTH_COMPONENT24:w.type===vs?St=s.DEPTH24_STENCIL8:St=s.DEPTH_COMPONENT16:w.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===xs&&St===s.DEPTH_COMPONENT&&w.type!==Mh&&w.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Un,Nt=r.convert(w.type)),w.format===rr&&St===s.DEPTH_COMPONENT&&(St=s.DEPTH_STENCIL,w.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=vs,Nt=r.convert(w.type))),be&&(ne?e.texStorage2D(s.TEXTURE_2D,1,St,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,St,J.width,J.height,0,qt,Nt,null));else if(w.isDataTexture)if(Ft.length>0&&se){ne&&be&&e.texStorage2D(s.TEXTURE_2D,$t,St,Ft[0].width,Ft[0].height);for(let nt=0,L=Ft.length;nt<L;nt++)dt=Ft[nt],ne?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,dt.width,dt.height,qt,Nt,dt.data):e.texImage2D(s.TEXTURE_2D,nt,St,dt.width,dt.height,0,qt,Nt,dt.data);w.generateMipmaps=!1}else ne?(be&&e.texStorage2D(s.TEXTURE_2D,$t,St,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,qt,Nt,J.data)):e.texImage2D(s.TEXTURE_2D,0,St,J.width,J.height,0,qt,Nt,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ne&&be&&e.texStorage3D(s.TEXTURE_2D_ARRAY,$t,St,Ft[0].width,Ft[0].height,J.depth);for(let nt=0,L=Ft.length;nt<L;nt++)dt=Ft[nt],w.format!==rn?qt!==null?ne?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,J.depth,qt,dt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,St,dt.width,dt.height,J.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,J.depth,qt,Nt,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,St,dt.width,dt.height,J.depth,0,qt,Nt,dt.data)}else{ne&&be&&e.texStorage2D(s.TEXTURE_2D,$t,St,Ft[0].width,Ft[0].height);for(let nt=0,L=Ft.length;nt<L;nt++)dt=Ft[nt],w.format!==rn?qt!==null?ne?e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,dt.width,dt.height,qt,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,St,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,dt.width,dt.height,qt,Nt,dt.data):e.texImage2D(s.TEXTURE_2D,nt,St,dt.width,dt.height,0,qt,Nt,dt.data)}else if(w.isDataArrayTexture)ne?(be&&e.texStorage3D(s.TEXTURE_2D_ARRAY,$t,St,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,qt,Nt,J.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,J.width,J.height,J.depth,0,qt,Nt,J.data);else if(w.isData3DTexture)ne?(be&&e.texStorage3D(s.TEXTURE_3D,$t,St,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,qt,Nt,J.data)):e.texImage3D(s.TEXTURE_3D,0,St,J.width,J.height,J.depth,0,qt,Nt,J.data);else if(w.isFramebufferTexture){if(be)if(ne)e.texStorage2D(s.TEXTURE_2D,$t,St,J.width,J.height);else{let nt=J.width,L=J.height;for(let st=0;st<$t;st++)e.texImage2D(s.TEXTURE_2D,st,St,nt,L,0,qt,Nt,null),nt>>=1,L>>=1}}else if(Ft.length>0&&se){ne&&be&&e.texStorage2D(s.TEXTURE_2D,$t,St,Ft[0].width,Ft[0].height);for(let nt=0,L=Ft.length;nt<L;nt++)dt=Ft[nt],ne?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,qt,Nt,dt):e.texImage2D(s.TEXTURE_2D,nt,St,qt,Nt,dt);w.generateMipmaps=!1}else ne?(be&&e.texStorage2D(s.TEXTURE_2D,$t,St,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,qt,Nt,J)):e.texImage2D(s.TEXTURE_2D,0,St,qt,Nt,J);y(w,se)&&x(tt),xt.__version=et.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function vt(A,w,F){if(w.image.length!==6)return;let tt=K(A,w),Q=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);let et=n.get(Q);if(Q.version!==et.__version||tt===!0){e.activeTexture(s.TEXTURE0+F);let xt=te.getPrimaries(te.workingColorSpace),ot=w.colorSpace===Ve?null:te.getPrimaries(w.colorSpace),ut=w.colorSpace===Ve||xt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Vt=w.image[0]&&w.image[0].isDataTexture,J=[];for(let nt=0;nt<6;nt++)!Ct&&!Vt?J[nt]=v(w.image[nt],!1,!0,i.maxCubemapSize):J[nt]=Vt?w.image[nt].image:w.image[nt],J[nt]=Ht(w,J[nt]);let se=J[0],qt=g(se)||a,Nt=r.convert(w.format,w.colorSpace),St=r.convert(w.type),dt=M(w.internalFormat,Nt,St,w.colorSpace),Ft=a&&w.isVideoTexture!==!0,ne=et.__version===void 0||tt===!0,be=T(w,se,qt);G(s.TEXTURE_CUBE_MAP,w,qt);let $t;if(Ct){Ft&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,be,dt,se.width,se.height);for(let nt=0;nt<6;nt++){$t=J[nt].mipmaps;for(let L=0;L<$t.length;L++){let st=$t[L];w.format!==rn?Nt!==null?Ft?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,0,0,st.width,st.height,Nt,st.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,dt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,0,0,st.width,st.height,Nt,St,st.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,dt,st.width,st.height,0,Nt,St,st.data)}}}else{$t=w.mipmaps,Ft&&ne&&($t.length>0&&be++,e.texStorage2D(s.TEXTURE_CUBE_MAP,be,dt,J[0].width,J[0].height));for(let nt=0;nt<6;nt++)if(Vt){Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,J[nt].width,J[nt].height,Nt,St,J[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,J[nt].width,J[nt].height,0,Nt,St,J[nt].data);for(let L=0;L<$t.length;L++){let rt=$t[L].image[nt].image;Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,0,0,rt.width,rt.height,Nt,St,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,dt,rt.width,rt.height,0,Nt,St,rt.data)}}else{Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt,St,J[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,Nt,St,J[nt]);for(let L=0;L<$t.length;L++){let st=$t[L];Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,0,0,Nt,St,st.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,dt,Nt,St,st.image[nt])}}}y(w,qt)&&x(s.TEXTURE_CUBE_MAP),et.__version=Q.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ft(A,w,F,tt,Q,et){let xt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ut=M(F.internalFormat,xt,ot,F.colorSpace);if(!n.get(w).__hasExternalTextures){let Vt=Math.max(1,w.width>>et),J=Math.max(1,w.height>>et);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,et,ut,Vt,J,w.depth,0,xt,ot,null):e.texImage2D(Q,et,ut,Vt,J,0,xt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),gt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Q,n.get(F).__webglTexture,0,Ut(w)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,Q,n.get(F).__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(A,w,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let tt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||gt(w)){let Q=w.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ci?tt=s.DEPTH_COMPONENT32F:Q.type===Un&&(tt=s.DEPTH_COMPONENT24));let et=Ut(w);gt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,tt,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,et,tt,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,tt,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let tt=Ut(w);F&&gt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,w.width,w.height):gt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{let tt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0;Q<tt.length;Q++){let et=tt[Q],xt=r.convert(et.format,et.colorSpace),ot=r.convert(et.type),ut=M(et.internalFormat,xt,ot,et.colorSpace),Ct=Ut(w);F&&gt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,ut,w.width,w.height):gt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,ut,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ut,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);let tt=n.get(w.depthTexture).__webglTexture,Q=Ut(w);if(w.depthTexture.format===xs)gt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(w.depthTexture.format===rr)gt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Et(A){let w=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Dt(w.__webglFramebuffer,A)}else if(F){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]=s.createRenderbuffer(),It(w.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),It(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(A,w,F){let tt=n.get(A);w!==void 0&&ft(tt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Et(A)}function k(A){let w=A.texture,F=n.get(A),tt=n.get(w);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=w.version,o.memory.textures++);let Q=A.isWebGLCubeRenderTarget===!0,et=A.isWebGLMultipleRenderTargets===!0,xt=g(A)||a;if(Q){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ut=0;ut<w.mipmaps.length;ut++)F.__webglFramebuffer[ot][ut]=s.createFramebuffer()}else F.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<w.mipmaps.length;ot++)F.__webglFramebuffer[ot]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(et)if(i.drawBuffers){let ot=A.texture;for(let ut=0,Ct=ot.length;ut<Ct;ut++){let Vt=n.get(ot[ut]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&gt(A)===!1){let ot=et?w:[w];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<ot.length;ut++){let Ct=ot[ut];F.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);let Vt=r.convert(Ct.format,Ct.colorSpace),J=r.convert(Ct.type),se=M(Ct.internalFormat,Vt,J,Ct.colorSpace,A.isXRRenderTarget===!0),qt=Ut(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,se,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),It(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),G(s.TEXTURE_CUBE_MAP,w,xt);for(let ot=0;ot<6;ot++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)ft(F.__webglFramebuffer[ot][ut],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else ft(F.__webglFramebuffer[ot],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);y(w,xt)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let ot=A.texture;for(let ut=0,Ct=ot.length;ut<Ct;ut++){let Vt=ot[ut],J=n.get(Vt);e.bindTexture(s.TEXTURE_2D,J.__webglTexture),G(s.TEXTURE_2D,Vt,xt),ft(F.__webglFramebuffer,A,Vt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),y(Vt,xt)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ot=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,tt.__webglTexture),G(ot,w,xt),a&&w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)ft(F.__webglFramebuffer[ut],A,w,s.COLOR_ATTACHMENT0,ot,ut);else ft(F.__webglFramebuffer,A,w,s.COLOR_ATTACHMENT0,ot,0);y(w,xt)&&x(ot),e.unbindTexture()}A.depthBuffer&&Et(A)}function hn(A){let w=g(A)||a,F=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,Q=F.length;tt<Q;tt++){let et=F[tt];if(y(et,w)){let xt=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ot=n.get(et).__webglTexture;e.bindTexture(xt,ot),x(xt),e.unbindTexture()}}}function Tt(A){if(a&&A.samples>0&&gt(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],F=A.width,tt=A.height,Q=s.COLOR_BUFFER_BIT,et=[],xt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=n.get(A),ut=A.isWebGLMultipleRenderTargets===!0;if(ut)for(let Ct=0;Ct<w.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let Ct=0;Ct<w.length;Ct++){et.push(s.COLOR_ATTACHMENT0+Ct),A.depthBuffer&&et.push(xt);let Vt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Vt===!1&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ut&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ot.__webglColorRenderbuffer[Ct]),Vt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xt])),ut){let J=n.get(w[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,F,tt,0,0,F,tt,Q,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let Ct=0;Ct<w.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,ot.__webglColorRenderbuffer[Ct]);let Vt=n.get(w[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Ut(A){return Math.min(i.maxSamples,A.samples)}function gt(A){let w=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ve(A){let w=o.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function Ht(A,w){let F=A.colorSpace,tt=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Wl||F!==Ue&&F!==Ve&&(te.getTransfer(F)===fe?a===!1?t.has("EXT_sRGB")===!0&&tt===rn?(A.format=Wl,A.minFilter=ye,A.generateMipmaps=!1):w=xa.sRGBToLinear(w):(tt!==rn||Q!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}this.allocateTextureUnit=P,this.resetTextureUnits=j,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=Qt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=hn,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=gt}function nb(s,t,e){let n=e.isWebGL2;function i(r,o=Ve){let a,c=te.getTransfer(o);if(r===$i)return s.UNSIGNED_BYTE;if(r===$f)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===U0)return s.BYTE;if(r===k0)return s.SHORT;if(r===Mh)return s.UNSIGNED_SHORT;if(r===Wf)return s.INT;if(r===Un)return s.UNSIGNED_INT;if(r===Ci)return s.FLOAT;if(r===Qn)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===O0)return s.ALPHA;if(r===rn)return s.RGBA;if(r===F0)return s.LUMINANCE;if(r===z0)return s.LUMINANCE_ALPHA;if(r===xs)return s.DEPTH_COMPONENT;if(r===rr)return s.DEPTH_STENCIL;if(r===Wl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===B0)return s.RED;if(r===Yf)return s.RED_INTEGER;if(r===H0)return s.RG;if(r===qf)return s.RG_INTEGER;if(r===Kf)return s.RGBA_INTEGER;if(r===ol||r===al||r===cl||r===ll)if(c===fe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ol)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ol)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===al)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ll)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===od||r===ad||r===cd||r===ld)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===od)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ad)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ld)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hd||r===ud)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===hd)return c===fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ud)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dd||r===fd||r===pd||r===md||r===gd||r===vd||r===xd||r===yd||r===_d||r===bd||r===Md||r===wd||r===Sd||r===Ed)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===dd)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fd)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pd)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===md)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gd)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vd)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xd)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yd)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_d)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bd)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Md)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wd)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sd)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ed)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hl||r===Td||r===Ad)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===hl)return c===fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Td)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ad)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===V0||r===Rd||r===Cd||r===Ld)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===hl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Rd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ld)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vs?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var ih=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},de=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},ib={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sh=class extends Xi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,v=e.getContextAttributes(),g=null,p=null,y=[],x=[],M=new pt,T=null,R=new De;R.layers.enable(1),R.viewport=new Wt;let C=new De;C.layers.enable(2),C.viewport=new Wt;let D=[R,C],b=new ih;b.layers.enable(1),b.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=y[G];return K===void 0&&(K=new Vr,y[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=y[G];return K===void 0&&(K=new Vr,y[G]=K),K.getGripSpace()},this.getHand=function(G){let K=y[G];return K===void 0&&(K=new Vr,y[G]=K),K.getHandSpace()};function W(G){let K=x.indexOf(G.inputSource);if(K===-1)return;let at=y[K];at!==void 0&&(at.update(G.inputSource,G.frame,l||o),at.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",P);for(let G=0;G<y.length;G++){let K=x[G];K!==null&&(x[G]=null,y[G].disconnect(K))}E=null,U=null,t.setRenderTarget(g),f=null,d=null,u=null,i=null,p=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",j),i.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Ge(f.framebufferWidth,f.framebufferHeight,{format:rn,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,at=null,vt=null;v.depth&&(vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=v.stencil?rr:xs,at=v.stencil?vs:Un);let ft={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(ft),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Ge(d.textureWidth,d.textureHeight,{format:rn,type:$i,depthTexture:new qi(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let It=t.properties.get(p);It.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(G){for(let K=0;K<G.removed.length;K++){let at=G.removed[K],vt=x.indexOf(at);vt>=0&&(x[vt]=null,y[vt].disconnect(at))}for(let K=0;K<G.added.length;K++){let at=G.added[K],vt=x.indexOf(at);if(vt===-1){for(let It=0;It<y.length;It++)if(It>=x.length){x.push(at),vt=It;break}else if(x[It]===null){x[It]=at,vt=It;break}if(vt===-1)break}let ft=y[vt];ft&&ft.connect(at)}}let N=new _,H=new _;function Y(G,K,at){N.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(at.matrixWorld);let vt=N.distanceTo(H),ft=K.projectionMatrix.elements,It=at.projectionMatrix.elements,Dt=ft[14]/(ft[10]-1),Et=ft[14]/(ft[10]+1),Qt=(ft[9]+1)/ft[5],k=(ft[9]-1)/ft[5],hn=(ft[8]-1)/ft[0],Tt=(It[8]+1)/It[0],Ut=Dt*hn,gt=Dt*Tt,ve=vt/(-hn+Tt),Ht=ve*-hn;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ht),G.translateZ(ve),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let A=Dt+ve,w=Et+ve,F=Ut-Ht,tt=gt+(vt-Ht),Q=Qt*Et/w*A,et=k*Et/w*A;G.projectionMatrix.makePerspective(F,tt,Q,et,A,w),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;b.near=C.near=R.near=G.near,b.far=C.far=R.far=G.far,(E!==b.near||U!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,U=b.far);let K=G.parent,at=b.cameras;X(b,K);for(let vt=0;vt<at.length;vt++)X(at[vt],K);at.length===2?Y(b,R,C):b.projectionMatrix.copy(R.projectionMatrix),$(G,b,K)};function $(G,K,at){at===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(at.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ar*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let q=null;function Z(G,K){if(h=K.getViewerPose(l||o),m=K,h!==null){let at=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let vt=!1;at.length!==b.cameras.length&&(b.cameras.length=0,vt=!0);for(let ft=0;ft<at.length;ft++){let It=at[ft],Dt=null;if(f!==null)Dt=f.getViewport(It);else{let Qt=u.getViewSubImage(d,It);Dt=Qt.viewport,ft===0&&(t.setRenderTargetTextures(p,Qt.colorTexture,d.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(p))}let Et=D[ft];Et===void 0&&(Et=new De,Et.layers.enable(ft),Et.viewport=new Wt,D[ft]=Et),Et.matrix.fromArray(It.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(It.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),ft===0&&(b.matrix.copy(Et.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),vt===!0&&b.cameras.push(Et)}}for(let at=0;at<y.length;at++){let vt=x[at],ft=y[at];vt!==null&&ft!==void 0&&ft.update(vt,K,l||o)}q&&q(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}let ct=new ip;ct.setAnimationLoop(Z),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}};function sb(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,np(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rb(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=i[y.id];M===void 0&&(m(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",g));let T=x.program;n.updateUBOMapping(y,T);let R=t.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){let x=u();y.__bindingPointIndex=x;let M=s.createBuffer(),T=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,T,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=i[y.id],M=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,C=M.length;R<C;R++){let D=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,E=D.length;b<E;b++){let U=D[b];if(f(U,R,b,T)===!0){let W=U.__offset,j=Array.isArray(U.value)?U.value:[U.value],P=0;for(let N=0;N<j.length;N++){let H=j[N],Y=v(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,W+P,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,M,T){let R=y.value,C=x+"_"+M;if(T[C]===void 0)return typeof R=="number"||typeof R=="boolean"?T[C]=R:T[C]=R.clone(),!0;{let D=T[C];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return T[C]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function m(y){let x=y.uniforms,M=0,T=16;for(let C=0,D=x.length;C<D;C++){let b=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,U=b.length;E<U;E++){let W=b[E],j=Array.isArray(W.value)?W.value:[W.value];for(let P=0,N=j.length;P<N;P++){let H=j[P],Y=v(H),X=M%T;X!==0&&T-X<Y.boundary&&(M+=T-X),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=Y.storage}}}let R=M%T;return R>0&&(M+=T-R),y.__size=M,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){let x=y.target;x.removeEventListener("dispose",g);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var qr=class{constructor(t={}){let{canvas:e=pg(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),m=new Int32Array(4),v=null,g=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ee,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;let x=this,M=!1,T=0,R=0,C=null,D=-1,b=null,E=new Wt,U=new Wt,W=null,j=new _t(0),P=0,N=e.width,H=e.height,Y=1,X=null,$=null,q=new Wt(0,0,N,H),Z=new Wt(0,0,N,H),ct=!1,G=new Xr,K=!1,at=!1,vt=null,ft=new mt,It=new pt,Dt=new _,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qt(){return C===null?Y:1}let k=n;function hn(S,I){for(let z=0;z<S.length;z++){let B=S[z],O=e.getContext(B,I);if(O!==null)return O}return null}try{let S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_h}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",st,!1),k===null){let I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),k=hn(I,S),k===null)throw hn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Tt,Ut,gt,ve,Ht,A,w,F,tt,Q,et,xt,ot,ut,Ct,Vt,J,se,qt,Nt,St,dt,Ft,ne;function be(){Tt=new Sy(k),Ut=new xy(k,Tt,t),Tt.init(Ut),dt=new nb(k,Tt,Ut),gt=new tb(k,Tt,Ut),ve=new Ay(k),Ht=new V_,A=new eb(k,Tt,gt,Ht,Ut,dt,ve),w=new _y(x),F=new wy(x),tt=new Ug(k,Ut),Ft=new gy(k,Tt,tt,Ut),Q=new Ey(k,tt,ve,Ft),et=new Py(k,Q,tt,ve),qt=new Ly(k,Ut,A),Vt=new yy(Ht),xt=new H_(x,w,F,Tt,Ut,Ft,Vt),ot=new sb(x,Ht),ut=new W_,Ct=new j_(Tt,Ut),se=new my(x,w,F,gt,et,d,c),J=new Q_(x,et,Ut),ne=new rb(k,ve,Ut,gt),Nt=new vy(k,Tt,ve,Ut),St=new Ty(k,Tt,ve,Ut),ve.programs=xt.programs,x.capabilities=Ut,x.extensions=Tt,x.properties=Ht,x.renderLists=ut,x.shadowMap=J,x.state=gt,x.info=ve}be();let $t=new sh(x,k);this.xr=$t,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=Tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(N,H,!1))},this.getSize=function(S){return S.set(N,H)},this.setSize=function(S,I,z=!0){if($t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,H=I,e.width=Math.floor(S*Y),e.height=Math.floor(I*Y),z===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(N*Y,H*Y).floor()},this.setDrawingBufferSize=function(S,I,z){N=S,H=I,Y=z,e.width=Math.floor(S*z),e.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(q)},this.setViewport=function(S,I,z,B){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,I,z,B),gt.viewport(E.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,I,z,B){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,I,z,B),gt.scissor(U.copy(Z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){gt.setScissorTest(ct=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(S=!0,I=!0,z=!0){let B=0;if(S){let O=!1;if(C!==null){let lt=C.texture.format;O=lt===Kf||lt===qf||lt===Yf}if(O){let lt=C.texture.type,yt=lt===$i||lt===Un||lt===Mh||lt===vs||lt===$f||lt===Xf,Rt=se.getClearColor(),Pt=se.getClearAlpha(),Gt=Rt.r,kt=Rt.g,Ot=Rt.b;yt?(f[0]=Gt,f[1]=kt,f[2]=Ot,f[3]=Pt,k.clearBufferuiv(k.COLOR,0,f)):(m[0]=Gt,m[1]=kt,m[2]=Ot,m[3]=Pt,k.clearBufferiv(k.COLOR,0,m))}else B|=k.COLOR_BUFFER_BIT}I&&(B|=k.DEPTH_BUFFER_BIT),z&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ut.dispose(),Ct.dispose(),Ht.dispose(),w.dispose(),F.dispose(),et.dispose(),Ft.dispose(),ne.dispose(),xt.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",un),$t.removeEventListener("sessionend",he),vt&&(vt.dispose(),vt=null),dn.stop()};function nt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let S=ve.autoReset,I=J.enabled,z=J.autoUpdate,B=J.needsUpdate,O=J.type;be(),ve.autoReset=S,J.enabled=I,J.autoUpdate=z,J.needsUpdate=B,J.type=O}function st(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function rt(S){let I=S.target;I.removeEventListener("dispose",rt),Lt(I)}function Lt(S){At(S),Ht.remove(S)}function At(S){let I=Ht.get(S).programs;I!==void 0&&(I.forEach(function(z){xt.releaseProgram(z)}),S.isShaderMaterial&&xt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,B,O,lt){I===null&&(I=Et);let yt=O.isMesh&&O.matrixWorld.determinant()<0,Rt=jm(S,I,z,B,O);gt.setMaterial(B,yt);let Pt=z.index,Gt=1;if(B.wireframe===!0){if(Pt=Q.getWireframeAttribute(z),Pt===void 0)return;Gt=2}let kt=z.drawRange,Ot=z.attributes.position,Se=kt.start*Gt,xn=(kt.start+kt.count)*Gt;lt!==null&&(Se=Math.max(Se,lt.start*Gt),xn=Math.min(xn,(lt.start+lt.count)*Gt)),Pt!==null?(Se=Math.max(Se,0),xn=Math.min(xn,Pt.count)):Ot!=null&&(Se=Math.max(Se,0),xn=Math.min(xn,Ot.count));let Be=xn-Se;if(Be<0||Be===1/0)return;Ft.setup(O,B,Rt,z,Pt);let bi,xe=Nt;if(Pt!==null&&(bi=tt.get(Pt),xe=St,xe.setIndex(bi)),O.isMesh)B.wireframe===!0?(gt.setLineWidth(B.wireframeLinewidth*Qt()),xe.setMode(k.LINES)):xe.setMode(k.TRIANGLES);else if(O.isLine){let Xt=B.linewidth;Xt===void 0&&(Xt=1),gt.setLineWidth(Xt*Qt()),O.isLineSegments?xe.setMode(k.LINES):O.isLineLoop?xe.setMode(k.LINE_LOOP):xe.setMode(k.LINE_STRIP)}else O.isPoints?xe.setMode(k.POINTS):O.isSprite&&xe.setMode(k.TRIANGLES);if(O.isBatchedMesh)xe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)xe.renderInstances(Se,Be,O.count);else if(z.isInstancedBufferGeometry){let Xt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,nl=Math.min(z.instanceCount,Xt);xe.renderInstances(Se,Be,nl)}else xe.render(Se,Be)};function ce(S,I,z){S.transparent===!0&&S.side===qe&&S.forceSinglePass===!1?(S.side=on,S.needsUpdate=!0,ko(S,I,z),S.side=di,S.needsUpdate=!0,ko(S,I,z),S.side=qe):ko(S,I,z)}this.compile=function(S,I,z=null){z===null&&(z=S),g=Ct.get(z),g.init(),y.push(g),z.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),S!==z&&S.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights(x._useLegacyLights);let B=new Set;return S.traverse(function(O){let lt=O.material;if(lt)if(Array.isArray(lt))for(let yt=0;yt<lt.length;yt++){let Rt=lt[yt];ce(Rt,z,O),B.add(Rt)}else ce(lt,z,O),B.add(lt)}),y.pop(),g=null,B},this.compileAsync=function(S,I,z=null){let B=this.compile(S,I,z);return new Promise(O=>{function lt(){if(B.forEach(function(yt){Ht.get(yt).currentProgram.isReady()&&B.delete(yt)}),B.size===0){O(S);return}setTimeout(lt,10)}Tt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let le=null;function ze(S){le&&le(S)}function un(){dn.stop()}function he(){dn.start()}let dn=new ip;dn.setAnimationLoop(ze),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(S){le=S,$t.setAnimationLoop(S),S===null?dn.stop():dn.start()},$t.addEventListener("sessionstart",un),$t.addEventListener("sessionend",he),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&($t.cameraAutoUpdate===!0&&$t.updateCamera(I),I=$t.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,C),g=Ct.get(S,y.length),g.init(),y.push(g),ft.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(ft),at=this.localClippingEnabled,K=Vt.init(this.clippingPlanes,at),v=ut.get(S,p.length),v.init(),p.push(v),ci(S,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(X,$),this.info.render.frame++,K===!0&&Vt.beginShadows();let z=g.state.shadowsArray;if(J.render(z,S,I),K===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(v,S),g.setupLights(x._useLegacyLights),I.isArrayCamera){let B=I.cameras;for(let O=0,lt=B.length;O<lt;O++){let yt=B[O];qu(v,S,yt,yt.viewport)}}else qu(v,S,I);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(x,S,I),Ft.resetDefaultState(),D=-1,b=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ci(S,I,z,B){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){B&&Dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ft);let yt=et.update(S),Rt=S.material;Rt.visible&&v.push(S,yt,Rt,z,Dt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||G.intersectsObject(S))){let yt=et.update(S),Rt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Dt.copy(S.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Dt.copy(yt.boundingSphere.center)),Dt.applyMatrix4(S.matrixWorld).applyMatrix4(ft)),Array.isArray(Rt)){let Pt=yt.groups;for(let Gt=0,kt=Pt.length;Gt<kt;Gt++){let Ot=Pt[Gt],Se=Rt[Ot.materialIndex];Se&&Se.visible&&v.push(S,yt,Se,z,Dt.z,Ot)}}else Rt.visible&&v.push(S,yt,Rt,z,Dt.z,null)}}let lt=S.children;for(let yt=0,Rt=lt.length;yt<Rt;yt++)ci(lt[yt],I,z,B)}function qu(S,I,z,B){let O=S.opaque,lt=S.transmissive,yt=S.transparent;g.setupLightsView(z),K===!0&&Vt.setGlobalState(x.clippingPlanes,z),lt.length>0&&Km(O,lt,I,z),B&&gt.viewport(E.copy(B)),O.length>0&&Uo(O,I,z),lt.length>0&&Uo(lt,I,z),yt.length>0&&Uo(yt,I,z),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Km(S,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let lt=Ut.isWebGL2;vt===null&&(vt=new Ge(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?Qn:$i,minFilter:fi,samples:lt?4:0})),x.getDrawingBufferSize(It),lt?vt.setSize(It.x,It.y):vt.setSize(va(It.x),va(It.y));let yt=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(j),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Rt=x.toneMapping;x.toneMapping=ui,Uo(S,z,B),A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt);let Pt=!1;for(let Gt=0,kt=I.length;Gt<kt;Gt++){let Ot=I[Gt],Se=Ot.object,xn=Ot.geometry,Be=Ot.material,bi=Ot.group;if(Be.side===qe&&Se.layers.test(B.layers)){let xe=Be.side;Be.side=on,Be.needsUpdate=!0,Ku(Se,z,B,xn,Be,bi),Be.side=xe,Be.needsUpdate=!0,Pt=!0}}Pt===!0&&(A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt)),x.setRenderTarget(yt),x.setClearColor(j,P),x.toneMapping=Rt}function Uo(S,I,z){let B=I.isScene===!0?I.overrideMaterial:null;for(let O=0,lt=S.length;O<lt;O++){let yt=S[O],Rt=yt.object,Pt=yt.geometry,Gt=B===null?yt.material:B,kt=yt.group;Rt.layers.test(z.layers)&&Ku(Rt,I,z,Pt,Gt,kt)}}function Ku(S,I,z,B,O,lt){S.onBeforeRender(x,I,z,B,O,lt),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(x,I,z,B,S,lt),O.transparent===!0&&O.side===qe&&O.forceSinglePass===!1?(O.side=on,O.needsUpdate=!0,x.renderBufferDirect(z,I,B,O,S,lt),O.side=di,O.needsUpdate=!0,x.renderBufferDirect(z,I,B,O,S,lt),O.side=qe):x.renderBufferDirect(z,I,B,O,S,lt),S.onAfterRender(x,I,z,B,O,lt)}function ko(S,I,z){I.isScene!==!0&&(I=Et);let B=Ht.get(S),O=g.state.lights,lt=g.state.shadowsArray,yt=O.state.version,Rt=xt.getParameters(S,O.state,lt,I,z),Pt=xt.getProgramCacheKey(Rt),Gt=B.programs;B.environment=S.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(S.isMeshStandardMaterial?F:w).get(S.envMap||B.environment),Gt===void 0&&(S.addEventListener("dispose",rt),Gt=new Map,B.programs=Gt);let kt=Gt.get(Pt);if(kt!==void 0){if(B.currentProgram===kt&&B.lightsStateVersion===yt)return Zu(S,Rt),kt}else Rt.uniforms=xt.getUniforms(S),S.onBuild(z,Rt,x),S.onBeforeCompile(Rt,x),kt=xt.acquireProgram(Rt,Pt),Gt.set(Pt,kt),B.uniforms=Rt.uniforms;let Ot=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ot.clippingPlanes=Vt.uniform),Zu(S,Rt),B.needsLights=Jm(S),B.lightsStateVersion=yt,B.needsLights&&(Ot.ambientLightColor.value=O.state.ambient,Ot.lightProbe.value=O.state.probe,Ot.directionalLights.value=O.state.directional,Ot.directionalLightShadows.value=O.state.directionalShadow,Ot.spotLights.value=O.state.spot,Ot.spotLightShadows.value=O.state.spotShadow,Ot.rectAreaLights.value=O.state.rectArea,Ot.ltc_1.value=O.state.rectAreaLTC1,Ot.ltc_2.value=O.state.rectAreaLTC2,Ot.pointLights.value=O.state.point,Ot.pointLightShadows.value=O.state.pointShadow,Ot.hemisphereLights.value=O.state.hemi,Ot.directionalShadowMap.value=O.state.directionalShadowMap,Ot.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ot.spotShadowMap.value=O.state.spotShadowMap,Ot.spotLightMatrix.value=O.state.spotLightMatrix,Ot.spotLightMap.value=O.state.spotLightMap,Ot.pointShadowMap.value=O.state.pointShadowMap,Ot.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=kt,B.uniformsList=null,kt}function ju(S){if(S.uniformsList===null){let I=S.currentProgram.getUniforms();S.uniformsList=er.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Zu(S,I){let z=Ht.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function jm(S,I,z,B,O){I.isScene!==!0&&(I=Et),A.resetTextureUnits();let lt=I.fog,yt=B.isMeshStandardMaterial?I.environment:null,Rt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ue,Pt=(B.isMeshStandardMaterial?F:w).get(B.envMap||yt),Gt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,kt=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ot=!!z.morphAttributes.position,Se=!!z.morphAttributes.normal,xn=!!z.morphAttributes.color,Be=ui;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Be=x.toneMapping);let bi=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xe=bi!==void 0?bi.length:0,Xt=Ht.get(B),nl=g.state.lights;if(K===!0&&(at===!0||S!==b)){let Dn=S===b&&B.id===D;Vt.setState(B,S,Dn)}let Me=!1;B.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==nl.state.version||Xt.outputColorSpace!==Rt||O.isBatchedMesh&&Xt.batching===!1||!O.isBatchedMesh&&Xt.batching===!0||O.isInstancedMesh&&Xt.instancing===!1||!O.isInstancedMesh&&Xt.instancing===!0||O.isSkinnedMesh&&Xt.skinning===!1||!O.isSkinnedMesh&&Xt.skinning===!0||O.isInstancedMesh&&Xt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Xt.instancingColor===!1&&O.instanceColor!==null||Xt.envMap!==Pt||B.fog===!0&&Xt.fog!==lt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Vt.numPlanes||Xt.numIntersection!==Vt.numIntersection)||Xt.vertexAlphas!==Gt||Xt.vertexTangents!==kt||Xt.morphTargets!==Ot||Xt.morphNormals!==Se||Xt.morphColors!==xn||Xt.toneMapping!==Be||Ut.isWebGL2===!0&&Xt.morphTargetsCount!==xe)&&(Me=!0):(Me=!0,Xt.__version=B.version);let cs=Xt.currentProgram;Me===!0&&(cs=ko(B,I,O));let Ju=!1,Lr=!1,il=!1,tn=cs.getUniforms(),ls=Xt.uniforms;if(gt.useProgram(cs.program)&&(Ju=!0,Lr=!0,il=!0),B.id!==D&&(D=B.id,Lr=!0),Ju||b!==S){tn.setValue(k,"projectionMatrix",S.projectionMatrix),tn.setValue(k,"viewMatrix",S.matrixWorldInverse);let Dn=tn.map.cameraPosition;Dn!==void 0&&Dn.setValue(k,Dt.setFromMatrixPosition(S.matrixWorld)),Ut.logarithmicDepthBuffer&&tn.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tn.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Lr=!0,il=!0)}if(O.isSkinnedMesh){tn.setOptional(k,O,"bindMatrix"),tn.setOptional(k,O,"bindMatrixInverse");let Dn=O.skeleton;Dn&&(Ut.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),tn.setValue(k,"boneTexture",Dn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(tn.setOptional(k,O,"batchingTexture"),tn.setValue(k,"batchingTexture",O._matricesTexture,A));let sl=z.morphAttributes;if((sl.position!==void 0||sl.normal!==void 0||sl.color!==void 0&&Ut.isWebGL2===!0)&&qt.update(O,z,cs),(Lr||Xt.receiveShadow!==O.receiveShadow)&&(Xt.receiveShadow=O.receiveShadow,tn.setValue(k,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ls.envMap.value=Pt,ls.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Lr&&(tn.setValue(k,"toneMappingExposure",x.toneMappingExposure),Xt.needsLights&&Zm(ls,il),lt&&B.fog===!0&&ot.refreshFogUniforms(ls,lt),ot.refreshMaterialUniforms(ls,B,Y,H,vt),er.upload(k,ju(Xt),ls,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(er.upload(k,ju(Xt),ls,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tn.setValue(k,"center",O.center),tn.setValue(k,"modelViewMatrix",O.modelViewMatrix),tn.setValue(k,"normalMatrix",O.normalMatrix),tn.setValue(k,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Dn=B.uniformsGroups;for(let rl=0,Qm=Dn.length;rl<Qm;rl++)if(Ut.isWebGL2){let Qu=Dn[rl];ne.update(Qu,cs),ne.bind(Qu,cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cs}function Zm(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Jm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,I,z){Ht.get(S.texture).__webglTexture=I,Ht.get(S.depthTexture).__webglTexture=z;let B=Ht.get(S);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){let z=Ht.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){C=S,T=I,R=z;let B=!0,O=null,lt=!1,yt=!1;if(S){let Pt=Ht.get(S);Pt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(k.FRAMEBUFFER,null),B=!1):Pt.__webglFramebuffer===void 0?A.setupRenderTarget(S):Pt.__hasExternalTextures&&A.rebindTextures(S,Ht.get(S.texture).__webglTexture,Ht.get(S.depthTexture).__webglTexture);let Gt=S.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(yt=!0);let kt=Ht.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(kt[I])?O=kt[I][z]:O=kt[I],lt=!0):Ut.isWebGL2&&S.samples>0&&A.useMultisampledRTT(S)===!1?O=Ht.get(S).__webglMultisampledFramebuffer:Array.isArray(kt)?O=kt[z]:O=kt,E.copy(S.viewport),U.copy(S.scissor),W=S.scissorTest}else E.copy(q).multiplyScalar(Y).floor(),U.copy(Z).multiplyScalar(Y).floor(),W=ct;if(gt.bindFramebuffer(k.FRAMEBUFFER,O)&&Ut.drawBuffers&&B&&gt.drawBuffers(S,O),gt.viewport(E),gt.scissor(U),gt.setScissorTest(W),lt){let Pt=Ht.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pt.__webglTexture,z)}else if(yt){let Pt=Ht.get(S.texture),Gt=I||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,z||0,Gt)}D=-1},this.readRenderTargetPixels=function(S,I,z,B,O,lt,yt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Ht.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){gt.bindFramebuffer(k.FRAMEBUFFER,Rt);try{let Pt=S.texture,Gt=Pt.format,kt=Pt.type;if(Gt!==rn&&dt.convert(Gt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ot=kt===Qn&&(Tt.has("EXT_color_buffer_half_float")||Ut.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(kt!==$i&&dt.convert(kt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===Ci&&(Ut.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-B&&z>=0&&z<=S.height-O&&k.readPixels(I,z,B,O,dt.convert(Gt),dt.convert(kt),lt)}finally{let Pt=C!==null?Ht.get(C).__webglFramebuffer:null;gt.bindFramebuffer(k.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(S,I,z=0){let B=Math.pow(2,-z),O=Math.floor(I.image.width*B),lt=Math.floor(I.image.height*B);A.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,z,0,0,S.x,S.y,O,lt),gt.unbindTexture()},this.copyTextureToTexture=function(S,I,z,B=0){let O=I.image.width,lt=I.image.height,yt=dt.convert(z.format),Rt=dt.convert(z.type);A.setTexture2D(z,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,B,S.x,S.y,O,lt,yt,Rt,I.image.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,B,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,yt,I.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,B,S.x,S.y,yt,Rt,I.image),B===0&&z.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,z,B,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let lt=S.max.x-S.min.x+1,yt=S.max.y-S.min.y+1,Rt=S.max.z-S.min.z+1,Pt=dt.convert(B.format),Gt=dt.convert(B.type),kt;if(B.isData3DTexture)A.setTexture3D(B,0),kt=k.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)A.setTexture2DArray(B,0),kt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let Ot=k.getParameter(k.UNPACK_ROW_LENGTH),Se=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xn=k.getParameter(k.UNPACK_SKIP_PIXELS),Be=k.getParameter(k.UNPACK_SKIP_ROWS),bi=k.getParameter(k.UNPACK_SKIP_IMAGES),xe=z.isCompressedTexture?z.mipmaps[O]:z.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,xe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,S.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,S.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,S.min.z),z.isDataTexture||z.isData3DTexture?k.texSubImage3D(kt,O,I.x,I.y,I.z,lt,yt,Rt,Pt,Gt,xe.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(kt,O,I.x,I.y,I.z,lt,yt,Rt,Pt,xe.data)):k.texSubImage3D(kt,O,I.x,I.y,I.z,lt,yt,Rt,Pt,Gt,xe),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Se),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Be),k.pixelStorei(k.UNPACK_SKIP_IMAGES,bi),O===0&&B.generateMipmaps&&k.generateMipmap(kt),gt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),gt.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,gt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===wh?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Va?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ee?ys:Jf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ys?ee:Ue}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},rh=class extends qr{};rh.prototype.isWebGL1Renderer=!0;var Tn=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Kr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fn=new _,jr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var bf=new _,Mf=new Wt,wf=new Wt,ob=new _,Sf=new mt,ra=new _,Nl=new Mn,Ef=new mt,Ul=new Ms,Ea=class extends Bt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rd,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new kn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ra),this.boundingBox.expandByPoint(ra)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ra),this.boundingSphere.expandByPoint(ra)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(i),t.ray.intersectsSphere(Nl)!==!1&&(Ef.copy(i).invert(),Ul.copy(t.ray).applyMatrix4(Ef),!(this.boundingBox!==null&&Ul.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ul)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Wt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===rd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===N0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Mf.fromBufferAttribute(i.attributes.skinIndex,t),wf.fromBufferAttribute(i.attributes.skinWeight,t),bf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=wf.getComponent(r);if(o!==0){let a=Mf.getComponent(r);Sf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(ob.copy(bf).applyMatrix4(Sf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},Zr=class extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}},oh=class extends Ke{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ie,h=Ie,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tf=new mt,ab=new mt,Ta=class s{constructor(t=[],e=[]){this.uuid=Jn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new mt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:ab;Tf.multiplyMatrices(a,e[r]),Tf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new oh(e,t,t,rn,Ci);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zr),this.bones.push(o),this.boneInverses.push(new mt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},mn=class extends Ne{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ks=new mt,Af=new mt,oa=[],Rf=new kn,cb=new mt,Ur=new Bt,kr=new Mn,an=class extends Bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cb)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),Rf.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Rf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),kr.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),t.ray.intersectsSphere(kr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ks),Af.multiplyMatrices(n,Ks),Ur.matrixWorld=Af,Ur.raycast(t,oa);for(let o=0,a=oa.length;o<a;o++){let c=oa[o];c.instanceId=r,c.object=this,e.push(c)}oa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mn(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Jr=class extends wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Cf=new _,Lf=new _,Pf=new mt,kl=new Ms,aa=new Mn,hr=class extends _e{constructor(t=new me,e=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Cf.fromBufferAttribute(e,i-1),Lf.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Cf.distanceTo(Lf);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(i),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;Pf.copy(i).invert(),kl.copy(t.ray).applyMatrix4(Pf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new _,h=new _,u=new _,d=new _,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=f){let T=m.getX(x),R=m.getX(x+1);if(l.fromBufferAttribute(g,T),h.fromBufferAttribute(g,R),kl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=f){if(l.fromBufferAttribute(g,x),h.fromBufferAttribute(g,x+1),kl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},If=new _,Df=new _,Aa=class extends hr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)If.fromBufferAttribute(e,i),Df.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+If.distanceTo(Df);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ra=class extends hr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Qr=class extends wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nf=new mt,ah=new Ms,ca=new Mn,la=new _,Ca=class extends _e{constructor(t=new me,e=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=r,t.ray.intersectsSphere(ca)===!1)return;Nf.copy(i).invert(),ah.copy(t.ray).applyMatrix4(Nf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,v=f;m<v;m++){let g=l.getX(m);la.fromBufferAttribute(u,g),Uf(la,g,c,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)la.fromBufferAttribute(u,m),Uf(la,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uf(s,t,e,n,i,r,o){let a=ah.distanceSqToPoint(s);if(a<e){let c=new _;ah.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var La=class extends Ke{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ur=class s extends me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new _,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},cn=class s extends me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],g=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function y(){let M=new _,T=new _,R=0,C=(e-t)/n;for(let D=0;D<=r;D++){let b=[],E=D/r,U=E*(e-t)+t;for(let W=0;W<=i;W++){let j=W/i,P=j*c+a,N=Math.sin(P),H=Math.cos(P);T.x=U*N,T.y=-E*n+g,T.z=U*H,u.push(T.x,T.y,T.z),M.set(N,C,H).normalize(),d.push(M.x,M.y,M.z),f.push(j,1-E),b.push(m++)}v.push(b)}for(let D=0;D<i;D++)for(let b=0;b<r;b++){let E=v[b][D],U=v[b+1][D],W=v[b+1][D+1],j=v[b][D+1];h.push(E,U,j),h.push(U,W,j),R+=6}l.addGroup(p,R,0),p+=R}function x(M){let T=m,R=new pt,C=new _,D=0,b=M===!0?t:e,E=M===!0?1:-1;for(let W=1;W<=i;W++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;let U=m;for(let W=0;W<=i;W++){let P=W/i*c+a,N=Math.cos(P),H=Math.sin(P);C.x=b*H,C.y=g*E,C.z=b*N,u.push(C.x,C.y,C.z),d.push(0,E,0),R.x=N*.5+.5,R.y=H*.5*E+.5,f.push(R.x,R.y),m++}for(let W=0;W<i;W++){let j=T+W,P=U+W;M===!0?h.push(P,P+1,j):h.push(P+1,P,j),D+=3}l.addGroup(p,D,M===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pa=class s extends cn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ia=class s extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new _,d=new _,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){let R=T/e;u.x=-t*Math.cos(i+R*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+R*r)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(R+M,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],M=h[p][y],T=h[p+1][y],R=h[p+1][y+1];(p!==0||o>0)&&f.push(x,M,R),(p!==n-1||c<Math.PI)&&f.push(M,T,R)}this.setIndex(f),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $e=class extends wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},On=class extends $e{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ha(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function lb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function hb(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function kf(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function lp(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}var Ki=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ch=class extends Ki{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pd,endingEnd:Pd}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Id:r=t,a=2*e-n;break;case Dd:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Id:o=t,c=2*n-e;break;case Dd:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*v+.5*m,M=f*g-f*v;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+y*o[l+T]+x*o[c+T]+M*o[u+T];return r}},lh=class extends Ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},hh=class extends Ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ha(e,this.TimeBufferType),this.values=ha(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ha(t.times,Array),values:ha(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new lh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ch(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case or:e=this.InterpolantFactoryMethodDiscrete;break;case bs:e=this.InterpolantFactoryMethodLinear;break;case ul:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return ul}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&lb(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ul,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[d+m]||v!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=bs;var ji=class extends Fn{};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=or;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends Fn{};Da.prototype.ValueTypeName="color";var Pi=class extends Fn{};Pi.prototype.ValueTypeName="number";var uh=class extends Ki{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)pe.slerpFlat(r,0,o,l-a,o,l,c);return r}},pi=class extends Fn{InterpolantFactoryMethodLinear(t){return new uh(this.times,this.values,this.getValueSize(),t)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.DefaultInterpolation=bs;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Fn{};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=or;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Fn{};Ii.prototype.ValueTypeName="vector";var Na=class{constructor(t,e=-1,n,i=G0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Jn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(db(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Fn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=hb(c);c=kf(c,1,h),l=kf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Pi(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,v){if(f.length!==0){let g=[],p=[];lp(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(let v in f){let g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){let x=d[m];g.push(x.time),p.push(x.morphTarget===v?1:0)}i.push(new Pi(".morphTargetInfluence["+v+"]",g,p))}c=f.length*o}else{let f=".bones["+e[u].name+"]";n(Ii,f+".position",d,"pos",i),n(pi,f+".quaternion",d,"rot",i),n(Ii,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ub(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pi;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return Da;case"quaternion":return pi;case"bool":case"boolean":return ji;case"string":return Zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function db(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=ub(s.type);if(s.times===void 0){let e=[],n=[];lp(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var Gi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},dh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},fb=new dh,Di=class{constructor(t){this.manager=t!==void 0?t:fb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},fh=class extends Error{constructor(t,e){super(t),this.response=e}},to=class extends Di{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Gi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Ai[t]!==void 0){Ai[t].push({onLoad:e,onProgress:n,onError:i});return}Ai[t]=[],Ai[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ai[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0,v=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:M})=>{if(x)p.close();else{v+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let R=0,C=h.length;R<C;R++){let D=h[R];D.onProgress&&D.onProgress(T)}p.enqueue(M),y()}})}}});return new Response(g)}else throw new fh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Gi.add(t,l);let h=Ai[t];delete Ai[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ai[t];if(h===void 0)throw this.manager.itemError(t),l;delete Ai[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var ph=class extends Di{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Gi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Wr("img");function c(){h(),Gi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var mi=class extends Di{constructor(t){super(t)}load(t,e,n,i){let r=new Ke,o=new ph(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},dr=class extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ua=class extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ol=new mt,Of=new _,Ff=new _,eo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Of.setFromMatrixPosition(t.matrixWorld),e.position.copy(Of),Ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ff),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},mh=class extends eo{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ar*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ka=class extends dr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},zf=new mt,Or=new _,Fl=new _,gh=class extends eo{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Or.setFromMatrixPosition(t.matrixWorld),n.position.copy(Or),Fl.copy(n.position),Fl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fl),n.updateMatrixWorld(),i.makeTranslation(-Or.x,-Or.y,-Or.z),zf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zf)}},fr=class extends dr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},vh=class extends eo{constructor(){super(new En(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new vh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ji=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Oa=class extends me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fa=class extends Di{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Gi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Gi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Gi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Gi.add(t,c),r.manager.itemStart(t)}};var Ah="\\[\\]\\.:\\/",pb=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",mb="[^"+Ah.replace("\\.","")+"]",gb=/((?:WC+[\/:])*)/.source.replace("WC",Rh),vb=/(WCOD+)?/.source.replace("WCOD",mb),xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),yb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),_b=new RegExp("^"+gb+vb+xb+yb+"$"),bb=["material","materials","bones","map"],xh=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pb,"")}static parseTrackName(t){let e=_b.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);bb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=xh;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lw=new Float32Array(1);var za=class{constructor(t,e,n=0,i=1/0){this.ray=new Ms(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return yh(t,this,n,e),n.sort(Bf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)yh(t[i],this,n,e);return n.sort(Bf),n}};function Bf(s,t){return s.distance-t.distance}function yh(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)yh(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);var Mb=`
#ifndef NOISE_GLSL
#define NOISE_GLSL
float fhash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float fnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(fhash(i), fhash(i + vec2(1, 0)), u.x), mix(fhash(i + vec2(0, 1)), fhash(i + vec2(1, 1)), u.x), u.y); }
float ffbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++){ s += a * fnoise(p); p = p * 2.03 + 11.7; a *= .5; } return s; }
#endif
`,Ch=`
const float R_EFF = 7.323e6;
vec3 curveDrop(vec3 w){ vec2 d = w.xz - cameraPosition.xz; w.y -= dot(d, d) / (2.0 * R_EFF); return w; }
`,ws=`
uniform vec3 uSunDirW; uniform vec3 uSunCol; uniform float uCloudT; uniform float uCover; uniform float uNight; uniform float uDusk;
uniform float uHazeB; uniform float uHazeH; uniform float uHazeTint;
${Mb}
float cfbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 6; i++){ v += a * fnoise(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.1; a *= 0.5; } return v; }
float hgPhase(float mu, float g){ float g2 = g * g; return (1.0 - g2) / (12.566 * pow(1.0 + g2 - 2.0 * g * mu, 1.5)); }
// Brightness of daylight relative to noon (the whole sky dims and warms as the sun sets)
float dayK(){ return smoothstep(-0.12, 0.25, uSunDirW.y) * 0.85 + 0.15 * smoothstep(-0.2, 0.0, uSunDirW.y); }
vec3 skyBase(vec3 d){
  float h = max(d.y, 0.0);
  vec2 hs = normalize(uSunDirW.xz + 1e-4), hd = normalize(d.xz + 1e-4);
  float toward = clamp(dot(hs, hd) * 0.5 + 0.5, 0.0, 1.0);
  // Hazy day: a pale blue-grey horizon band that is wide (the haze layer), a soft blue zenith
  vec3 zen = mix(vec3(0.13, 0.25, 0.5), vec3(0.05, 0.1, 0.27), uDusk);
  vec3 horDusk = mix(vec3(0.34, 0.3, 0.36), vec3(1.1, 0.56, 0.24), pow(toward, 2.4));
  vec3 hor = mix(vec3(0.44, 0.52, 0.64), horDusk, uDusk);
  hor = mix(hor, hor * vec3(1.05, 1.02, 0.98), toward);
  vec3 c = mix(hor, zen, pow(h, mix(0.55, 0.38, uDusk)));
  float mu = dot(d, uSunDirW);
  c += uSunCol * (hgPhase(mu, 0.76) * 0.09 * (1.0 + 2.0 * uDusk) + pow(max(mu, 0.0), 900.0) * 0.8);
  c = mix(c, hor * 0.92, smoothstep(0.0, -0.08, d.y));            // below the horizon: the haze band continues
  return c * dayK() * 1.42;
}
vec4 clouds(vec3 d){
  if (d.y < 0.01 || uCover < 0.01) return vec4(0.0);
  float t = 2200.0 / d.y;
  vec2 p = d.xz * t * 0.00028 + vec2(uCloudT * 0.003, uCloudT * 0.0011);
  vec2 w = vec2(cfbm(p * 0.7 + 5.0), cfbm(p * 0.7 + 9.0));
  float n = cfbm(p + w * 1.1);
  float cov = smoothstep(1.0 - uCover - 0.1, 1.0 - uCover + 0.3, n);
  float n2 = cfbm(p + w * 1.1 + uSunDirW.xz * 0.05);
  float shade = clamp(0.5 + (n - n2) * 5.0, 0.0, 1.0);
  float mu = max(dot(d, uSunDirW), 0.0);
  vec3 lit = mix(vec3(1.0, 0.97, 0.93), vec3(1.25, 0.6, 0.32), uDusk) * (1.0 + 1.4 * pow(mu, 8.0));
  vec3 dark = mix(vec3(0.46, 0.5, 0.56), vec3(0.24, 0.18, 0.24), uDusk);
  vec3 c = mix(dark, lit, shade * 0.7 + 0.3 * (1.0 - cov));
  float fade = smoothstep(0.03, 0.3, d.y);                          // clouds sink into the haze near the horizon
  return vec4(c * 1.35 * dayK(), cov * fade * 0.9);
}
vec3 skyCol(vec3 d, bool disc){
  vec3 c = skyBase(d);
  vec4 cl = clouds(d);
  vec3 nsky = mix(vec3(0.011, 0.015, 0.028), vec3(0.004, 0.006, 0.014), pow(max(d.y, 0.0), 0.5));
  vec2 sp = d.xz / max(d.y + 0.2, 0.05) * 170.0;
  float st = step(0.9982, fhash(floor(sp))) * smoothstep(0.05, 0.3, d.y) * (1.0 - cl.a);
  vec3 nightC = nsky + vec3(st) * 0.6 * (0.6 + 0.4 * sin(uCloudT * 3.0 + fhash(floor(sp) + 7.0) * 40.0)) + cl.a * vec3(0.012, 0.014, 0.02);
  if (disc) {
    float mu = dot(d, uSunDirW);
    // the disc is dimmed and reddened by the long path through the haze near the horizon
    float air = exp(-uHazeB * 9.0e4 * (1.0 - smoothstep(0.0, 0.25, uSunDirW.y)));
    c += uSunCol * smoothstep(0.99985, 0.99993, mu) * 60.0 * (1.0 - cl.a * 0.9) * mix(0.25, 1.0, air);
  }
  c = mix(c, cl.rgb, cl.a);
  c = mix(c, nightC, uNight);
  if (any(isnan(c)) || any(isinf(c))) c = vec3(0.0);
  return clamp(c, 0.0, 400.0);
}
// Color the haze scatters toward the eye, looking along v
vec3 hazeColor(vec3 v){
  vec3 hz = skyBase(normalize(vec3(v.x, 0.015, v.z)));
  float mu = dot(v, uSunDirW);
  hz += uSunCol * hgPhase(mu, 0.72) * 0.07 * uHazeTint * dayK();
  return mix(hz, vec3(0.008, 0.011, 0.02), uNight);
}
// Optical depth of haze from the camera to world point p (exponential height profile)
float hazeDepth(vec3 p){
  vec3 d = p - cameraPosition;
  float dist = length(d);
  // abs(): the mirrored world (water reflection) is drawn with y flipped; its haze must match the real one
  float hc = max(cameraPosition.y, 0.0), hp = abs(p.y), H = uHazeH;
  float dh = hp - hc;
  float k = abs(dh) > 0.5 ? H * (exp(-hc / H) - exp(-hp / H)) / dh : exp(-0.5 * (hc + hp) / H);
  return uHazeB * dist * k;
}
vec3 applyHaze(vec3 col, vec3 p){
  float T = exp(-hazeDepth(p));
  return col * T + hazeColor(normalize(p - cameraPosition)) * (1.0 - T);
}
`;function hp(s,t){return{uSunDirW:{value:s},uSunCol:{value:t},uCloudT:{value:0},uCover:{value:.28},uNight:{value:0},uDusk:{value:0},uHazeB:{value:11e-5},uHazeH:{value:650},uHazeTint:{value:1}}}function up(s){let t=new ge({side:on,depthWrite:!1,depthTest:!1,uniforms:s,vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`${ws}
varying vec3 vD; void main(){ gl_FragColor = vec4(skyCol(normalize(vD), true), 1.0); }`}),e=new Bt(new Ia(9e3,64,32),t);return e.frustumCulled=!1,e.renderOrder=-1,e}function dp(s,t,{curve:e=!1}={}){let n=s.onBeforeCompile;s.onBeforeCompile=(r,o)=>{n?.call(s,r,o),Object.assign(r.uniforms,t),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vHzW;
${e?Ch:""}`).replace("#include <project_vertex>",e?`
        vec4 hzw = modelMatrix * vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          hzw = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
        #endif
        hzw.xyz = curveDrop(hzw.xyz);
        vHzW = hzw.xyz;
        vec4 mvPosition = viewMatrix * hzw;
        gl_Position = projectionMatrix * mvPosition;`:`#include <project_vertex>
        { vec4 hzw = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            hzw = instanceMatrix * hzw;
          #endif
          vHzW = (modelMatrix * hzw).xyz; }`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vHzW;
${ws}`).replace("#include <fog_fragment>","gl_FragColor.rgb = applyHaze(gl_FragColor.rgb, vHzW);")};let i=s.customProgramCacheKey?.bind(s);return s.customProgramCacheKey=()=>(i?i():"")+(e?"|hzc":"|hz"),s.fog=!0,s}function io(s,t,e,n=new _){let i=ht.degToRad(s),r=ht.degToRad(-23.44)*Math.cos(2*Math.PI/365*(t+10)),o=ht.degToRad(15*(e-12)),a=Math.sin(i)*Math.sin(r)+Math.cos(i)*Math.cos(r)*Math.cos(o),c=Math.asin(a),l=(Math.sin(r)-Math.sin(c)*Math.sin(i))/(Math.cos(c)*Math.cos(i)),h=Math.acos(ht.clamp(l,-1,1));return o>0&&(h=2*Math.PI-h),n.set(Math.cos(c)*Math.sin(h),Math.sin(c),-Math.cos(c)*Math.cos(h))}var fp=16,gr=9.81;function wb(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Lh({wind:s=6,windDir:t=.6,swellDir:e=1.4,swellH:n=.35,seed:i=11}={}){let r=wb(i),o=.877*gr/Math.max(s,.5),a=[];for(let m=0;m<2;m++){let v=[72,51][m],g=2*Math.PI/v,p=n/2*[.8,.55][m],y=e+[0,.18][m];a.push({dx:Math.cos(y),dz:Math.sin(y),k:g,w:Math.sqrt(gr*g),a:p,ph:r()*6.283})}let c=fp-2,l=o*.75,h=o*3.2;for(let m=0;m<c;m++){let v=(m+.5)/c,g=l*Math.pow(h/l,v),p=g*Math.log(h/l)/c,y=.0081*gr*gr/Math.pow(g,5)*Math.exp(-.74*Math.pow(gr/(s*g),4)),x=Math.sqrt(2*y*p),M=0;for(let C=0;C<3;C++)M+=r()-.5;let T=t+M*(.9+.6*v),R=g*g/gr;a.push({dx:Math.cos(T),dz:Math.sin(T),k:R,w:g,a:x,ph:r()*6.283})}let u=a.reduce((m,v)=>m+v.k*v.a,0),d=Math.min(.8,.4/Math.max(u,1e-6));for(let m of a)m.q=d;let f=4*Math.sqrt(a.reduce((m,v)=>m+v.a*v.a/2,0));return{comps:a,wind:s,windDir:t,hs:f,wp:o}}function pp(s){let t=s.comps.map(n=>new Wt(n.dx,n.dz,n.k,n.w)),e=s.comps.map(n=>new Wt(n.a,n.q,n.ph,0));return{uWA:{value:t},uWB:{value:e},uSeaK:{value:1}}}function mp(s,t){t.comps.forEach((e,n)=>{s.uWA.value[n].set(e.dx,e.dz,e.k,e.w),s.uWB.value[n].set(e.a,e.q,e.ph,0)})}var so=`
#define NW ${fp}
uniform vec4 uWA[NW]; uniform vec4 uWB[NW]; uniform float uSeaK;
float waveFade(float k, float fw){ float lam = 6.2831853 / k; return smoothstep(fw * 2.0, fw * 6.0, lam); }
vec3 gerstner(vec2 p, float t, float fw){
  vec3 o = vec3(0.0);
  for (int i = 0; i < NW; i++){
    vec4 A = uWA[i], B = uWB[i];
    float th = A.z * dot(A.xy, p) - A.w * t + B.z;
    float a = B.x * uSeaK * waveFade(A.z, fw);
    float c = cos(th), s = sin(th);
    o.xz += A.xy * (B.y * a * c);
    o.y += a * s;
  }
  return o;
}
// returns (dh/dx, dh/dz) of the displaced surface, and the Jacobian determinant in w (below ~0.4 the crest is folding: foam).
// Only the long components (lambda > ~15 m) tilt the shading normal: the short ones have perfectly straight, endless crests
// that show as regular streaks and chevrons across the sea; the ripples (ocean.js), broken into groups, cover that scale
vec4 gerstnerSlope(vec2 p, float t, float fw){
  vec2 g = vec2(0.0); float jxx = 1.0, jzz = 1.0, jxz = 0.0, lift = 0.0;
  for (int i = 0; i < NW; i++){
    vec4 A = uWA[i], B = uWB[i];
    float th = A.z * dot(A.xy, p) - A.w * t + B.z;
    float a = B.x * uSeaK * waveFade(A.z, fw);
    float wa = A.z * a, c = cos(th), s = sin(th);
    g += A.xy * wa * c * smoothstep(0.42, 0.9, 6.2831853 / A.z / 16.0);
    lift += B.y * wa * s;
    jxx -= B.y * wa * A.x * A.x * s; jzz -= B.y * wa * A.y * A.y * s; jxz -= B.y * wa * A.x * A.y * s;
  }
  // divide by the vertical compression so crests get steeper than the plain sine sum
  float den = max(1.0 - lift, 0.6);
  return vec4(g / den, 0.0, jxx * jzz - jxz * jxz);
}
`;function $a(s,t,e,n,i=1){let r=t,o=e;for(let c=0;c<3;c++){let l=0,h=0;for(let u of s.comps){let d=u.k*(u.dx*r+u.dz*o)-u.w*n+u.ph,f=u.a*i*u.q*Math.cos(d);l+=u.dx*f,h+=u.dz*f}r=t-l,o=e-h}let a=0;for(let c of s.comps)a+=c.a*i*Math.sin(c.k*(c.dx*r+c.dz*o)-c.w*n+c.ph);return a}var gp=`
uniform vec2 uWind; uniform float uWindS; uniform float uGustK;
float gh(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float gn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(gh(i), gh(i + vec2(1, 0)), u.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), u.x), u.y); }
// 0 = lull, 1 = strong gust
float gustAt(vec2 p, float t){
  vec2 side = vec2(-uWind.y, uWind.x);
  // stretched along the wind (bands), carried downwind at 0.8 x the wind speed
  vec2 q = vec2(dot(p, uWind) - uWindS * 0.8 * t, dot(p, side));
  vec2 s = vec2(q.x * 0.0045, q.y * 0.0022);
  float n = gn(s) * 0.55 + gn(s * 2.3 + 7.1) * 0.3 + gn(s * 5.1 + 3.3) * 0.15;
  return clamp(smoothstep(0.32, 0.72, n) * uGustK + 0.12, 0.0, 1.0);
}
`;function Xa(s){return s-Math.floor(s)}function Ya(s,t){let e=Xa(s*.1031),n=Xa(t*.1031),i=Xa(s*.1031),r=e*(n+33.33)+n*(i+33.33)+i*(e+33.33);return e+=r,n+=r,i+=r,Xa((e+n)*i)}function Ph(s,t){let e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,o=i*i*(3-2*i),a=r*r*(3-2*r),c=Ya(e,n),l=Ya(e+1,n),h=Ya(e,n+1),u=Ya(e+1,n+1);return(c+(l-c)*o)*(1-a)+(h+(u-h)*o)*a}var Sb=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)},qa=class{constructor({speed:t=6,dir:e=.6,gust:n=1}={}){this.uniforms={uWind:{value:new pt(Math.cos(e),Math.sin(e))},uWindS:{value:t},uGustK:{value:n}},this.speed=t,this.dir=e}set(t,e,n=this.uniforms.uGustK.value){this.speed=t,this.dir=e,this.uniforms.uWind.value.set(Math.cos(e),Math.sin(e)),this.uniforms.uWindS.value=t,this.uniforms.uGustK.value=n}gust(t,e,n){let i=this.uniforms.uWind.value,r=this.uniforms.uWindS.value,o=t*i.x+e*i.y-r*.8*n,a=-t*i.y+e*i.x,c=o*.0045,l=a*.0022,h=Ph(c,l)*.55+Ph(c*2.3+7.1,l*2.3+7.1)*.3+Ph(c*5.1+3.3,l*5.1+3.3)*.15;return Math.min(1,Math.max(0,Sb(.32,.72,h)*this.uniforms.uGustK.value+.12))}at(t,e,n,i=new pt){let r=this.gust(t,e,n),o=this.speed*(.7+.7*r);return i.copy(this.uniforms.uWind.value).multiplyScalar(o)}};var Eb="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Ni=512,xr=2.2,Ka=Ni*xr,An=32,vr=8,Tb=9,ja=12,gi=4;function Ab(){let s=r=>{let o=Math.abs(r);if(o<8){let d=r*r;return(57568490574+d*(-13362590354+d*(6516196407e-1+d*(-1121442418e-2+d*(77392.33017+d*-184.9052456)))))/(57568490411+d*(1029532985+d*(9494680718e-3+d*(59272.64853+d*(267.8532712+d)))))}let a=8/o,c=a*a,l=o-.785398164,h=1+c*(-.001098628627+c*(2734510407e-14+c*(-2073370639e-15+c*2093887211e-16))),u=-.01562499995+c*(.0001430488765+c*(-6911147651e-15+c*(7621095161e-16-c*934935152e-16)));return Math.sqrt(.636619772/o)*(Math.cos(l)*h-a*Math.sin(l)*u)},n=0;for(let r=1;r<=1e4;r++){let o=r*.001;n+=o*o*Math.exp(-1*o*o)}let i=[];for(let r=0;r<=gi;r++)for(let o=0;o<=gi;o++){let a=Math.hypot(o,r),c=0;for(let l=1;l<=1e4;l++){let h=l*.001;c+=h*h*Math.exp(-1*h*h)*s(h*a)}i.push(a>gi+.5?0:c/n)}return i}var Za=class{constructor(t,e){this.r=t;let n={type:Qn,format:rn,minFilter:ye,magFilter:ye,depthBuffer:!1};this.rt=[new Ge(Ni,Ni,n),new Ge(Ni,Ni,n)],this.cur=0,this.origin=new pt(0,0),this.hull=[].concat(...e.map(o=>this.hullTable(o)));let i=()=>new pt,r=()=>new Wt;this.quad=new Bt(new Sn(2,2)),this.scene=new Tn,this.scene.add(this.quad),this.cam=new En(-1,1,1,-1,0,1),this.sim=new ge({vertexShader:Eb,depthTest:!1,depthWrite:!1,uniforms:{uS:{value:null},uTexel:{value:1/Ni},uOrigin:{value:this.origin},uSize:{value:Ka},uDt:{value:1/60},uShipP:{value:Array.from({length:vr},r)},uShipF:{value:Array.from({length:vr},r)},uNS:{value:0},uHull:{value:this.hull},uShift:{value:new pt},uTime:{value:0},uK:{value:Ab()},uGdt2:{value:0},uA:{value:0},uDrop:{value:Array.from({length:ja},r)},uND:{value:0}},fragmentShader:`
        uniform sampler2D uS; uniform float uTexel, uSize, uDt, uTime;
        uniform vec2 uOrigin, uShift;
        // per ship: P = (x, z, heave, sub), F = (fwd.x, fwd.z, speed, kind)
        uniform vec4 uShipP[${vr}], uShipF[${vr}]; uniform int uNS;
        uniform vec2 uHull[${An*Tb}];
        uniform vec4 uDrop[${ja}]; uniform int uND;
        uniform float uK[${(gi+1)*(gi+1)}]; uniform float uGdt2, uA;
        varying vec2 vUv;
        float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
        float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
          return mix(mix(h12(i), h12(i + vec2(1, 0)), u.x), mix(h12(i + vec2(0, 1)), h12(i + vec2(1, 1)), u.x), u.y); }
        // signed distance (m) from the waterline outline of the hull, in ship-local (f forward, x port)
        float hullSDF(vec2 q, int k){
          int o = k * ${An};
          float f = q.x, x = abs(q.y);
          vec2 h0 = uHull[o], h1 = uHull[o + ${An-1}];
          if (f < h0.x || f > h1.x) {
            float e = f < h0.x ? h0.x - f : f - h1.x;
            return max(e, x - (f < h0.x ? h0.y : h1.y));
          }
          float w = 0.0;
          for (int i = 0; i < ${An-1}; i++){
            vec2 a = uHull[o + i], b = uHull[o + i + 1];
            if (f >= a.x && f <= b.x) w = mix(a.y, b.y, (f - a.x) / max(b.x - a.x, 1e-3));
          }
          return x - w;
        }
        void main(){
          vec2 uv = vUv + uShift;                        // re-centring shifts the whole field by whole cells
          vec4 s = texture2D(uS, uv);
          if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) s = vec4(0.0);
          float hl = texture2D(uS, uv - vec2(uTexel, 0.0)).r, hr = texture2D(uS, uv + vec2(uTexel, 0.0)).r;
          float hd = texture2D(uS, uv - vec2(0.0, uTexel)).r, hu = texture2D(uS, uv + vec2(0.0, uTexel)).r;
          // vertical derivative by convolution (the kernel is symmetric: store one quadrant)
          float vd = 0.0;
          for (int j = -${gi}; j <= ${gi}; j++) for (int i = -${gi}; i <= ${gi}; i++) {
            float kk = uK[abs(j) * ${gi+1} + abs(i)];
            if (kk != 0.0) vd += kk * texture2D(uS, uv + vec2(float(i), float(j)) * uTexel).r;
          }
          float hn = (s.r * (2.0 - uA) - s.g - uGdt2 * vd) / (1.0 + uA);
          // bleed off grid-scale ripple (the kernel does not resolve it and it shows as a saw edge on the hull)
          hn = mix(hn, (hl + hr + hd + hu) * 0.25, 0.12);
          hn = clamp(hn, -1.6, 1.6);
          vec2 w = uOrigin + (uv - 0.5) * uSize;           // world xz of this cell
          float make = 0.0, inside = 0.0;
          for (int si = 0; si < ${vr}; si++){
            if (si >= uNS) break;
            vec4 P = uShipP[si], Fw = uShipF[si];
            vec2 d = w - P.xy;
            int kind = int(Fw.w + 0.5);
            float reach = uHull[kind * ${An} + ${An-1}].x + 6.0;
            if (dot(d, d) > reach * reach * 1.6) continue;
            vec2 fwd = Fw.xy, side = vec2(fwd.y, -fwd.x);   // side points to port in three.js axes (x left)
            vec2 q = vec2(dot(d, fwd), dot(d, side));
            float sdf = hullSDF(q, kind);
            float spd = Fw.z, sub = P.w, heave = P.z;
            float hb = uHull[kind * ${An} + ${An/2}].y;          // half-breadth amidships
            // inside the waterline the hull holds the surface down (deeper with speed: the bow wave and stern trough)
            float ins = smoothstep(2.0, -2.0, sdf) * sub;
            float press = -min(0.03 * spd, 0.5) - heave * 0.5;
            hn = mix(hn, press, ins * 0.25 * smoothstep(0.5, 3.0, spd + abs(heave) * 3.0));
            inside = max(inside, ins);
            // foam: a thin white edge along the sides, the bow wave, and the screws' wash astern
            float band = exp(-max(sdf, 0.0) / (0.35 * hb + 1.0)) * smoothstep(-0.5, 0.8, sdf);
            float bowF = uHull[kind * ${An} + ${An-1}].x, sternF = uHull[kind * ${An}].x;
            float L = bowF - sternF;
            // the bow wave: a white roll along both sides of the forefoot, breaking outward (not ahead of the stem)
            float bow = smoothstep(L * 0.22, 0.0, bowF - q.x) * step(q.x, bowF - 1.0) * exp(-max(sdf, 0.0) / (0.5 * hb + 1.0)) * smoothstep(-0.5, 1.0, sdf);
            float stern = smoothstep(hb * 1.5, hb * 0.2, length((q - vec2(sternF - hb * 0.6, 0.0)) * vec2(0.6, 1.0))) * step(q.x, sternF + L * 0.06);
            float n = vn(w * 0.6 + uTime * 0.7) * vn(w * 0.17 - uTime * 0.3);
            float sp = smoothstep(1.0, 9.0, spd);
            make += (band * (0.3 + 0.7 * n) * 0.35 + bow * 1.2 + stern * n * n * 1.6) * sp * sub;
          }
          // balls landing: a pit that rings out, and foam
          for (int di = 0; di < ${ja}; di++){
            if (di >= uND) break;
            vec4 D = uDrop[di];
            float r = length(w - D.xy);
            float k = exp(-r * r / (D.z * D.z));
            hn -= D.w * k;
            make += k * D.w * 30.0;
          }
          float slope = length(vec2(hr - hl, hu - hd)) / (2.0 * uSize * uTexel);
          make += smoothstep(0.25, 0.5, slope) * 0.8;    // only really steep water breaks white (the bow wave crest)
          // foam spreads a little and decays (half-life ~ 12 s)
          float fb = (texture2D(uS, uv - vec2(uTexel, 0.0)).b + texture2D(uS, uv + vec2(uTexel, 0.0)).b
                    + texture2D(uS, uv - vec2(0.0, uTexel)).b + texture2D(uS, uv + vec2(0.0, uTexel)).b) * 0.25;
          float foam = mix(s.b, fb, 0.05) * exp(-uDt / 22.0) + make * uDt * 1.6;
          foam *= 1.0 - inside;
          // fade everything toward the patch border so the edge never shows
          vec2 e = min(uv, 1.0 - uv);
          float edge = smoothstep(0.0, 0.06, min(e.x, e.y));
          gl_FragColor = vec4(hn * edge, s.r * edge, clamp(foam, 0.0, 3.0) * edge, 1.0);
        }`});for(let o of this.rt)t.setRenderTarget(o),t.clear();t.setRenderTarget(null),this.acc=0,this.t=0,this.uniforms={uWake:{value:this.rt[0].texture},uWakeO:{value:this.origin},uWakeS:{value:Ka},uWakeTexel:{value:1/Ni}}}reset(t,e){for(let n of this.rt)this.r.setRenderTarget(n),this.r.setClearColor(0,0),this.r.clear();this.r.setRenderTarget(null),this.origin.set(t,e)}hullTable(t){let e=[],n=i=>t[Math.round(i*(t.length-1)/(An-1))];for(let i=0;i<An;i++){let[r,o]=n(i),a=0;for(let c=0;c+1<o.length;c++){let[l,h]=o[c],[u,d]=o[c+1];h<=0&&d>=0&&(a=l+(u-l)*(0-h)/Math.max(d-h,1e-6))}o[0][1]>0&&(a=.05),e.push(new pt(r,a))}return e}step(t,e,n,i=[]){let r=this.sim.uniforms;this.pending?.length&&(i=this.pending.concat(i),this.pending=null);let o=e.x-this.origin.x,a=e.z-this.origin.y,c=0,l=0;Math.abs(o)>Ka*.12&&(c=Math.round(o/xr)),Math.abs(a)>Ka*.12&&(l=Math.round(a/xr)),this.acc=Math.min(this.acc+t,.1);let h=1/60;r.uGdt2.value=9.81/xr*h*h,r.uA.value=.18*h,r.uDt.value=h;let u=Math.min(n.length,vr);for(let m=0;m<u;m++){let v=n[m];r.uShipP.value[m].set(v.pos.x,v.pos.z,v.heave,v.sub??1),r.uShipF.value[m].set(v.fwd.x,v.fwd.y,v.speed,v.kind)}r.uNS.value=u;let d=Math.min(i.length,ja);for(let m=0;m<d;m++)r.uDrop.value[m].set(i[m].x,i[m].z,i[m].r,i[m].h);let f=!0;for(;this.acc>=h;)this.acc-=h,this.t+=h,r.uTime.value=this.t,f&&(c||l)?(r.uShift.value.set(c/Ni,l/Ni),this.origin.x+=c*xr,this.origin.y+=l*xr):r.uShift.value.set(0,0),r.uND.value=f?d:0,f=!1,r.uS.value=this.rt[this.cur].texture,this.quad.material=this.sim,this.r.setRenderTarget(this.rt[1-this.cur]),this.r.render(this.scene,this.cam),this.cur=1-this.cur;f&&(this.pending=i),this.r.setRenderTarget(null),this.uniforms.uWake.value=this.rt[this.cur].texture}},Ih=`
uniform sampler2D uWake; uniform vec2 uWakeO; uniform float uWakeS, uWakeTexel;
vec4 wakeAt(vec2 w){
  vec2 uv = (w - uWakeO) / uWakeS + 0.5;
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return vec4(0.0);
  float h = texture2D(uWake, uv).r;
  float hx = texture2D(uWake, uv + vec2(uWakeTexel, 0.0)).r - texture2D(uWake, uv - vec2(uWakeTexel, 0.0)).r;
  float hz = texture2D(uWake, uv + vec2(0.0, uWakeTexel)).r - texture2D(uWake, uv - vec2(0.0, uWakeTexel)).r;
  float cell = uWakeS * uWakeTexel;
  return vec4(h, hx / (2.0 * cell), hz / (2.0 * cell), texture2D(uWake, uv).b);
}
`;var vp=`
uniform float uTide;          // signed strength: +1 = full flood (running east), -1 = full ebb
uniform vec4 uStrait;         // x, z, direction (rad), half-width
vec2 tideAt(vec2 p){
  vec2 base = vec2(0.3 * uTide, 0.0);
  vec2 d = vec2(cos(uStrait.z), sin(uStrait.z)), a = vec2(-d.y, d.x);
  vec2 q = p - uStrait.xy;
  float along = dot(q, d), across = dot(q, a);
  float k = exp(-pow(across / uStrait.w, 2.0)) * exp(-pow(along / 1100.0, 2.0));
  float sgn = sign(dot(d, vec2(1.0, 0.0)) + 1e-4);       // the flood runs east through the strait too
  return base * (1.0 - k) + d * sgn * uTide * 4.2 * k;
}
// how sharply the stream changes across here (0 = uniform): the tide line
float tideShear(vec2 p){
  float e = 12.0;
  vec2 a = tideAt(p + vec2(e, 0.0)) - tideAt(p - vec2(e, 0.0));
  vec2 b = tideAt(p + vec2(0.0, e)) - tideAt(p - vec2(0.0, e));
  return (length(a) + length(b)) / (2.0 * e);
}
`;var Rb=`
${so}
${Ih}
${Ch}
uniform float uTime; uniform vec3 uCenter;
attribute float aFw;
varying vec3 vW; varying vec2 vRest; varying vec4 vClip; varying float vDepth; varying float vWakeFoam; varying float vH;
void main(){
  vec2 p = position.xz + uCenter.xz;
  vec3 d = gerstner(p, uTime, aFw);
  vec4 wk = wakeAt(p);
  vec3 w = vec3(p.x + d.x, d.y + wk.x, p.y + d.z);
  vH = w.y;
  w = curveDrop(w);
  vW = w; vRest = p; vWakeFoam = wk.w;
  vec4 mv = viewMatrix * vec4(w, 1.0);
  vDepth = -mv.z;
  vClip = projectionMatrix * mv;
  gl_Position = vClip;
}`,Cb=`
uniform float uTime;
${ws}
${so}
${Ih}
${gp}
${vp}
uniform sampler2D uRefl; uniform vec2 uReflTexel; uniform sampler2D uRefr;
uniform vec3 uSunIrr;
// layers for the making-of film: x = ripples, y = glints, z = swell in the shading, w = relief view of the wake (1 = on)
uniform vec4 uLayers;
uniform highp sampler2DShadow uShipSM; uniform mat4 uShipVP; uniform float uShipTexel;
varying vec3 vW; varying vec2 vRest; varying vec4 vClip; varying float vDepth; varying float vWakeFoam; varying float vH;
float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 h32(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xxy + p3.yzz) * p3.zyx); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(h12(i), h12(i + vec2(1, 0)), u.x), mix(h12(i + vec2(0, 1)), h12(i + vec2(1, 1)), u.x), u.y); }
// Ripples: 40 short waves (6 m down to a few cm) leaning to the wind (normals only), longest first. Their constants come from JS
// (makeRipples): uRA = (dir.x, dir.z, k, omega), uRB = (amplitude at full gust, phase, variance of this and all shorter ones, lambda).
// Once a ripple is too short for the pixel, it and every shorter one only add slope variance (for the glitter).
// g = local gust strength
uniform vec4 uRA[40]; uniform vec4 uRB[40];
vec3 rippleSlope(vec2 p0, float fw, float g){
  vec2 s = vec2(0.); float unres = 0.;
  float gk = mix(0.5, 1.1, g);
  // bend the crests: a slow warp of the coordinates (a few metres), so no crest runs straight for long
  vec2 p = p0 + vec2(vn(p0 * 0.045 + 3.7) - 0.5, vn(p0 * 0.045 + 11.3) - 0.5) * 5.0;
  for (int i = 0; i < 40; i++){
    vec4 A = uRA[i], B = uRB[i];
    if (B.w < fw * 3.0) { unres = B.z * gk * gk; break; }
    float filt = smoothstep(fw * 3., fw * 8., B.w);
    float ph = A.z * dot(A.xy, p) - A.w * uTime + B.y;
    // wave groups: the amplitude swells and fades along and across the crest (short-crested sea)
    vec2 q = vec2(dot(A.xy, p), dot(vec2(-A.y, A.x), p)) * A.z;
    float grp = sin(q.x * 0.13 + B.y * 3.0 - A.w * uTime * 0.5) * sin(q.y * 0.21 + B.y * 5.0);
    float env = 0.25 + 1.5 * grp * grp;
    float ak = B.x * A.z * gk * env;
    s += A.xy * ak * cos(ph) * filt;
    unres += ak * ak * 0.5 * (1. - filt);
  }
  return vec3(s, unres);
}
float glints(vec2 p, vec2 need, float fw, float sigma, float rate){
  float acc = 0.;
  for (int l = 0; l < 2; l++){
    float cs = max(l == 0 ? 0.035 : 0.09, fw * 1.2);
    vec2 q = p / cs + float(l) * 17.3;
    vec2 id = floor(q), f = fract(q);
    vec3 h0 = h32(id);
    float tt = uTime * rate + h0.z * 7.;
    vec3 hr = h32(id + floor(tt) * 1.618);
    float r = sqrt(-2. * log(max(hr.x, 1e-4)));
    vec2 sl = r * vec2(cos(6.2831 * hr.y), sin(6.2831 * hr.y)) * sigma;
    float hit = exp(-dot(sl - need, sl - need) / (0.06 * 0.06));
    vec2 c = h0.xy * 0.6 + 0.2;
    float r2 = max(0.012, pow(0.5 * fw / cs, 2.));
    acc += hit * exp(-dot(f - c, f - c) / r2) * 0.012 / r2 * sin(3.14159 * fract(tt)) * 2.2;
  }
  return acc;
}
float shipShadow(vec3 wp){
  vec4 p = uShipVP * vec4(wp, 1.0);
  vec3 c = p.xyz / p.w * 0.5 + 0.5;
  if (c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0 || c.z > 1.0) return 1.0;
  float s = 0.0;
  for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) s += texture(uShipSM, vec3(c.xy + vec2(i, j) * uShipTexel * 1.5, c.z - 0.0006));
  return s / 9.0;
}
void main(){
  vec2 p = vRest;
  vec3 V = normalize(cameraPosition - vW);
  float dist = length(cameraPosition - vW);
  float fw = max(length(fwidth(p)), 1e-4);
  float g = gustAt(p, uTime);
  // the tidal stream: fast water is choppy (it runs against the waves), and a seam of foam marks the tide line
  vec2 cur = tideAt(p);
  float cs = length(cur);
  float shear = tideShear(p);
  g = max(g, smoothstep(0.5, 1.8, cs) * 0.9);
  vec4 gs = gerstnerSlope(p, uTime, fw);
  vec3 rp = rippleSlope(p, fw, g) * vec3(uLayers.x, uLayers.x, uLayers.x * uLayers.x);
  vec4 wk = wakeAt(p);
  vec2 grad = gs.xy * uLayers.z + rp.xy + wk.yz * 0.7;
  vec3 N = normalize(vec3(-grad.x, 1.0, -grad.y));
  vec2 suv = vClip.xy / vClip.w * 0.5 + 0.5;
  float shd = shipShadow(vW);
  float sunK = clamp(length(uSunIrr) / 5.0, 0.02, 1.2);
  // Below the surface: the hull and anything else under water, fading fast in the turbid green water
  vec2 ro = vec2(grad.x, grad.y) * 0.05 / max(dist * 0.02, 0.3);
  vec4 refr = texture2D(uRefr, suv + ro);
  if (refr.a < vDepth) refr = texture2D(uRefr, suv);
  float thick = refr.a > 0.0 ? max(refr.a - vDepth, 0.0) : 1e4;
  vec3 ext = exp(-thick * vec3(0.95, 0.42, 0.4));
  // deep-water colour: light scattered back up by suspended matter, brighter where the sun reaches in
  vec3 deep = vec3(0.0065, 0.022, 0.024) * (0.35 + 0.9 * max(uSunDirW.y, 0.0)) * sunK * (0.7 + 0.3 * shd);
  vec3 below = refr.rgb * ext + deep * (1.0 - exp(-thick * 0.35));
  // light through the back of wave crests (seen against the sun): a green glow on the faces that face us
  vec3 L = uSunDirW;
  float sss = pow(max(dot(-V, L) * 0.5 + 0.5, 0.0), 5.0) * max(vH + 0.25, 0.0) * max(dot(N, V), 0.0);
  below += vec3(0.02, 0.08, 0.07) * sss * sunK * 1.4 * shd;
  // Reflection
  float NV = max(dot(N, V), 1e-3);
  float F = 0.02 + 0.98 * pow(1. - NV, 5.);
  // mirror distortion: the slope shifts the reflected image. The shift is limited (a few % of the screen): close to the
  // camera an unlimited shift reads the mirror image at scattered places and draws a lattice of bright lines
  vec2 off = vec2(grad.x, -grad.y) * 70. / max(dist, 12.);
  float offL = length(off);
  off *= min(1.0, 0.3 / max(offL, 1e-4));          // at most ~18 texels of the half-resolution mirror (~2 % of the screen)
  // the rougher the water, the blurrier the mirror: pick a mip level from the unresolved slope spread (sig, below)
  // and the resolved slope, so only the large shapes of sail, hull and islands survive in a breeze
  vec2 ro2 = off * uReflTexel * 60.;
  // resolved ripples break a mirror image into blotches too: fine, high-contrast detail (lattice, nails) must not survive
  float blurL = clamp(log2(1.0 + sqrt(rp.z) * 130.0 + length(grad) * 70.0), 0.0, 5.0);
  vec3 refl = textureLod(uRefl, suv + ro2, blurL).rgb;
  // The mirrored render already holds the sky (clouds included) and everything standing on the water. It is used for
  // every facet, steep or not: switching steep facets to the sky colour draws bright lines along every ripple crest
  // wherever the mirror shows something dark (the hull). Only far out, where the mirror is off screen, the sky fills in
  vec3 R = reflect(-V, N); R.y = abs(R.y);
  vec2 su2 = suv + ro2;
  float outside = max(max(-su2.x, su2.x - 1.0), max(-su2.y, su2.y - 1.0));
  refl = mix(refl, skyBase(R), smoothstep(0.0, 0.05, outside));
  vec3 col = below * (1. - F) + refl * F;
  // Sun glints and the glitter path
  vec3 Hh = normalize(L + V);
  vec2 need = vec2(-Hh.x / Hh.y, -Hh.z / Hh.y) - grad;
  // slope spread that the pixel cannot resolve: the ripples finer than a pixel, plus (far away) the whole Cox-Munk
  // distribution for this wind (sigma^2 = 0.003 + 0.00512 U), which is what makes the glitter path wide
  float cm = 0.003 + 0.00512 * uWindS * (0.6 + 0.8 * g);
  // near the camera the capillary roughness (sub-millimetre) still spreads the highlight: without this floor the sun
  // shows as thin contour lines along the ripples
  float sig = sqrt(0.0055 + rp.z + cm * smoothstep(0.0, 400.0, dist));
  float gl = glints(p + vec2(0., uTime * 0.12), need, fw, sig, 1.7);
  float Fs = 0.02 + 0.98 * pow(1. - max(dot(V, Hh), 0.), 5.);
  col += uLayers.y * uSunIrr * 40.0 * Fs * gl * 0.3 * smoothstep(0.02, 0.2, g + 0.1) * shd;
  float pdf = exp(-dot(need, need) / (2. * sig * sig)) / (6.2831 * sig * sig);
  float mask = NV / (NV + 0.06);
  col += uLayers.y * uSunIrr * Fs * pdf / (4. * NV * pow(Hh.y, 4.)) * mask * smoothstep(8., 90., dist) * shd;
  // Foam: wake patch and folding crests. Lacy (holes open as it thins), white in sun, blue-white in shade
  float crest = smoothstep(0.55, 0.15, gs.w) * smoothstep(0.3, 0.9, g + 0.2);
  // (steel ships: the wash is hundreds of metres long, so the lace has large holes and streaks as well as fine ones)
  float lace = vn(p * 0.05 + vec2(uTime * 0.01, 0.0)) * 0.3 + vn(p * 0.21 - uTime * 0.03) * 0.3 + vn(p * 0.9 + uTime * 0.1) * 0.25 + vn(p * 3.3) * 0.15;
  float fo = clamp(max(wk.w, vWakeFoam) * 0.9, 0.0, 2.0);
  float foam = smoothstep(0.35, 0.95, fo * (0.3 + 1.2 * lace)) * min(fo * 1.2, 1.0);
  foam = max(foam, crest * smoothstep(0.45, 0.8, lace) * 0.8);
  // tide line: only at the edges of the fast jet, where the stream shears against slack water; broken patches of scum
  float edgeK = smoothstep(0.004, 0.012, shear) * smoothstep(0.5, 1.2, abs(uTide) * 2.0);
  if (edgeK > 0.001) {
    vec2 fd = cs > 0.01 ? cur / cs : vec2(1.0, 0.0);
    vec2 sq = vec2(dot(p, fd), dot(p, vec2(-fd.y, fd.x)));
    float streak = vn(vec2(sq.x * 0.05 - uTime * cs * 0.05, sq.y * 0.22)) * 0.6 + vn(p * 0.6 + uTime * 0.1) * 0.4;
    foam = max(foam, smoothstep(0.52, 0.72, streak) * edgeK * 0.8);
  }
  vec3 foamCol = vec3(0.62, 0.64, 0.63) * (mix(uSunIrr, vec3(dot(uSunIrr, vec3(0.333))), 0.6) * max(dot(N, L), 0.0) * 0.18 * shd + skyBase(vec3(0.0, 1.0, 0.0)) * 0.35);
  col = mix(col, foamCol, clamp(foam, 0.0, 1.0) * 0.92);
  col = applyHaze(col, vW);
  if (uLayers.w > 0.0) {
    // relief view: the wake field lit from one side, like a plaster cast of the water
    vec3 Nw = normalize(vec3(-wk.y * 30.0, 1.0, -wk.z * 30.0));
    float lum = clamp(dot(Nw, normalize(vec3(-0.6, 0.55, 0.45))), 0.0, 1.0);
    vec3 relief = mix(vec3(0.003, 0.01, 0.015), vec3(0.22, 0.27, 0.3), pow(lum, 1.8)) + vec3(0.25, 0.27, 0.27) * clamp(wk.w, 0.0, 1.0) * 0.6;
    col = mix(col, relief, uLayers.w);
  }
  gl_FragColor = vec4(col, 1.0);
}`;function Lb(s,t,e,n){let i=[],r=[],o=[],a=[0],c=Math.pow(n/e,1/(s-1));for(let h=0;h<s;h++)a.push(e*Math.pow(c,h));for(let h=0;h<a.length;h++){let u=a[h],d=Math.max((a[h+1]??u*c)-u,2*Math.PI*Math.max(u,e)/t);for(let f=0;f<t;f++){let m=f/t*Math.PI*2;i.push(u*Math.cos(m),0,u*Math.sin(m)),r.push(d)}}for(let h=0;h<a.length-1;h++)for(let u=0;u<t;u++){let d=h*t+u,f=h*t+(u+1)%t,m=(h+1)*t+u,v=(h+1)*t+(u+1)%t;o.push(d,m,f,f,m,v)}let l=new me;return l.setAttribute("position",new jt(i,3)),l.setAttribute("aFw",new jt(r,1)),l.setIndex(o),l}function Ja(s,t){let e=a=>a-Math.floor(a),n=e(s*.1031),i=e(t*.1031),r=e(s*.1031),o=n*(i+33.33)+i*(r+33.33)+r*(n+33.33);return n+=o,i+=o,r+=o,e((n+i)*r)}function Pb(s,t=[],e=[]){let n=[];for(let o=0;o<40;o++){let a=6*Math.pow(.855,o)*(.8+.4*Ja(o,9.1)),c=s+(Ja(o,3.1)-.5)*2.8,l=2*Math.PI/a,h=Math.sqrt(9.81*l+.074/1e3*l*l*l),u=(f,m,v)=>{let g=Math.min(1,Math.max(0,(v-f)/(m-f)));return g*g*(3-2*g)},d=.11*(.5+Ja(o,7.7))*(.45+.55*u(1.2,.05,a));n.push({dx:Math.cos(c),dz:Math.sin(c),k:l,om:h,amp:d/l,ph:Ja(o,1.3)*6.2831,lam:a})}n.sort((o,a)=>a.lam-o.lam);let i=0,r=new Array(40);for(let o=39;o>=0;o--)i+=(n[o].amp*n[o].k)**2*.5,r[o]=i;return n.forEach((o,a)=>{(t[a]||=new Wt).set(o.dx,o.dz,o.k,o.om),(e[a]||=new Wt).set(o.amp,o.ph,r[a],o.lam)}),{A:t,B:e}}function xp({skyU:s,seaU:t,wakeU:e,windU:n,tideU:i,reflTarget:r,refrTarget:o,shipShadowU:a,timeU:c,quality:l}){let h=Object.assign({},s,t,e,n,i,a,{uTime:c,uCenter:{value:new _},uRefl:{value:r.texture},uRefr:{value:o.texture},uReflTexel:{value:new pt(1/r.width,1/r.height)},uSunIrr:{value:s.uSunCol.value},uRA:{value:[]},uRB:{value:[]},uLayers:{value:new Wt(1,1,1,0)}}),u=n.uWind.value;Pb(Math.atan2(u.y,u.x),h.uRA.value,h.uRB.value);let d=Lb(l.oceanRings,l.oceanSeg,.35,16e3),f=new ge({vertexShader:Rb,fragmentShader:Cb,uniforms:h,side:qe}),m=new Bt(d,f);m.frustumCulled=!1;function v(g){h.uCenter.value.set(Math.round(g.position.x),0,Math.round(g.position.z))}return{mesh:m,uniforms:h,update:v}}function yp(s){let t=new Ge(s,s,{depthBuffer:!0,stencilBuffer:!1}),e=new qi(s,s,Un);return e.compareFunction=Ga,e.magFilter=e.minFilter=ye,t.depthTexture=e,t}var Qa=class{constructor(t,e,{landSize:n=6e3,landRes:i=4096,shipSize:r=64,shipRes:o=2048}={}){this.r=t,this.sun=e,this.landRT=yp(i),this.shipRT=yp(o);let a=n/2,c=r/2;this.shipSize=r,this.shipRes=o,this.landCam=new En(-a,a,a,-a,10,9e3),this.shipCam=new En(-c,c,c,-c,1,400),this.landScene=new Tn,this.shipScene=new Tn,this.uniforms={uLandSM:{value:this.landRT.depthTexture},uLandVP:{value:new mt},uLandTexel:{value:1/i},uShipSM:{value:this.shipRT.depthTexture},uShipVP:{value:new mt},uShipTexel:{value:1/o},uShadowOn:{value:1},uMirror:{value:1}},this.depthMat=new Yr}aim(t,e,n){t.position.copy(e).addScaledVector(this.sun,n),t.up.set(0,1,0),t.lookAt(e),t.updateMatrixWorld(),t.updateProjectionMatrix()}addCaster(t,{ship:e=!1}={}){let n=t.userData.depthMat??this.depthMat,i=t.isInstancedMesh?new an(t.geometry,n,t.count):new Bt(t.geometry,n);return t.isInstancedMesh&&(i.instanceMatrix=t.instanceMatrix,i.count=t.count),i.matrixAutoUpdate=!1,i.frustumCulled=!1,i.userData.src=t,(e?this.shipScene:this.landScene).add(i),i}sync(t){for(let e of t.children){let n=e.userData.src;n&&(e.matrix.copy(n.matrixWorld),e.matrixWorld.copy(n.matrixWorld),n.isInstancedMesh&&(e.count=n.count),e.visible=n.visible)}}renderLand(t){this.aim(this.landCam,t,4e3),this.sync(this.landScene),this._draw(this.landRT,this.landScene,this.landCam),this.uniforms.uLandVP.value.multiplyMatrices(this.landCam.projectionMatrix,this.landCam.matrixWorldInverse)}renderShip(t){this.aim(this.shipCam,t,200);let e=this.shipSize/this.shipRes,n=t.clone(),i=this.shipCam.matrixWorld.elements,r=new _(i[0],i[1],i[2]),o=new _(i[4],i[5],i[6]),a=r.dot(n),c=o.dot(n);n.addScaledVector(r,Math.round(a/e)*e-a).addScaledVector(o,Math.round(c/e)*e-c),this.aim(this.shipCam,n,200),this.sync(this.shipScene),this._draw(this.shipRT,this.shipScene,this.shipCam),this.uniforms.uShipVP.value.multiplyMatrices(this.shipCam.projectionMatrix,this.shipCam.matrixWorldInverse)}_draw(t,e,n){let i=this.r,r=i.getRenderTarget(),o=i.autoClear;i.setRenderTarget(t),i.autoClear=!0,i.clear(!0,!0,!1),i.render(e,n),i.setRenderTarget(r),i.autoClear=o}},Ib=`
uniform highp sampler2DShadow uLandSM; uniform mat4 uLandVP; uniform float uLandTexel;
uniform highp sampler2DShadow uShipSM; uniform mat4 uShipVP; uniform float uShipTexel;
uniform float uShadowOn;
float smLookup(highp sampler2DShadow m, mat4 vp, vec3 wp, float texel, float bias){
  vec4 p = vp * vec4(wp, 1.0);
  vec3 c = p.xyz / p.w * 0.5 + 0.5;
  if (c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0 || c.z > 1.0) return 1.0;
  float z = c.z - bias, s = 0.0;
  for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) s += texture(m, vec3(c.xy + vec2(i, j) * texel * 1.2, z));
  return s / 9.0;
}
float sunShadowAt(vec3 wp, vec3 wn){
  if (uShadowOn < 0.5) return 1.0;
  float a = smLookup(uLandSM, uLandVP, wp + wn * 1.5, uLandTexel, 0.0001);
  float b = smLookup(uShipSM, uShipVP, wp + wn * 0.03, uShipTexel, 0.0003);
  return min(a, b);
}
`;function _p(s,t){let e=s.onBeforeCompile;s.onBeforeCompile=(i,r)=>{e?.call(s,i,r),Object.assign(i.uniforms,t.uniforms),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vShW; varying vec3 vShN; uniform float uMirror;`).replace("#include <project_vertex>",`#include <project_vertex>
        { vec4 swp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            swp = instanceMatrix * swp;
          #endif
          vShW = (modelMatrix * swp).xyz;
          vShN = normalize(inverseTransformDirection(transformedNormal, viewMatrix));
          vShW.y *= uMirror; vShN.y *= uMirror; }`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vShW; varying vec3 vShN;
${Ib}`).replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
        float shadowF = sunShadowAt(vShW, normalize(vShN));
        reflectedLight.directDiffuse *= shadowF; reflectedLight.directSpecular *= shadowF;`)};let n=s.customProgramCacheKey?.bind(s);return s.customProgramCacheKey=()=>(n?n():"")+"|sh",s}var tc="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";function Dh(s,t,e=0,n=!1){let i=new Ge(s,t,{type:Qn,format:rn,samples:e,minFilter:ye,magFilter:ye,depthBuffer:e>0||n});return n&&(i.depthTexture=new qi(s,t,Un)),i}var ec=class{constructor(t,e,n,{samples:i=4,levels:r=6}={}){this.samples=i,this.r=t,this.levels=r,this.quad=new Bt(new Sn(2,2)),this.quad.frustumCulled=!1,this.qs=new Tn,this.qs.add(this.quad),this.cam=new En(-1,1,1,-1,0,1),this.down=new ge({vertexShader:tc,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uTexel:{value:new pt},uThresh:{value:0},uFirst:{value:0}},fragmentShader:`
        uniform sampler2D uTex; uniform vec2 uTexel; uniform float uThresh; uniform float uFirst; varying vec2 vUv;
        vec3 tap(vec2 o){ vec3 c = min(texture2D(uTex, vUv + o * uTexel).rgb, vec3(80.0));
          if (uFirst > 0.5) c = max(c - uThresh, 0.0); return c; }
        void main(){
          vec3 c = tap(vec2(0.0)) * 4.0 + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));
          gl_FragColor = vec4(c / 8.0, 1.0);
        }`}),this.up=new ge({vertexShader:tc,depthTest:!1,depthWrite:!1,blending:nr,uniforms:{uTex:{value:null},uTexel:{value:new pt},uW:{value:1}},fragmentShader:`
        uniform sampler2D uTex; uniform vec2 uTexel; uniform float uW; varying vec2 vUv;
        void main(){
          vec3 c = vec3(0.0);
          c += texture2D(uTex, vUv + vec2(-2.0, 0.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(2.0, 0.0) * uTexel).rgb;
          c += texture2D(uTex, vUv + vec2(0.0, -2.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(0.0, 2.0) * uTexel).rgb;
          c += (texture2D(uTex, vUv + vec2(-1.0, -1.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(1.0, -1.0) * uTexel).rgb
              + texture2D(uTex, vUv + vec2(-1.0, 1.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(1.0, 1.0) * uTexel).rgb) * 2.0;
          gl_FragColor = vec4(c / 12.0 * uW, 1.0);
        }`}),this.copy=new ge({vertexShader:tc,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uDepth:{value:null},uNear:{value:.3},uFar:{value:9e3}},fragmentShader:`
        uniform sampler2D uTex, uDepth; uniform float uNear, uFar; varying vec2 vUv;
        void main(){
          float z = texture2D(uDepth, vUv).r;
          float ndc = z * 2.0 - 1.0;
          float lin = 2.0 * uNear * uFar / (uFar + uNear - ndc * (uFar - uNear));
          gl_FragColor = vec4(texture2D(uTex, vUv).rgb, lin);
        }`}),this.final=new ge({vertexShader:tc,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uBloom:{value:null},uExposure:{value:1},uBloomK:{value:.12},uT:{value:0},uVignette:{value:.45},uWarm:{value:new _(1.1,1,.84)},uCool:{value:new _(1,.99,.98)},uSat:{value:1.08},uContrast:{value:1.12},uUnder:{value:0}},fragmentShader:`
        uniform sampler2D uTex, uBloom; uniform float uExposure, uBloomK, uT, uVignette, uSat, uContrast;
        uniform vec3 uWarm, uCool; uniform float uUnder; varying vec2 vUv;
        float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
        vec3 film(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
        void main(){
          // Underwater: the image wobbles and blurs slightly
          vec2 uv = vUv;
          if (uUnder > 0.0) uv += vec2(sin(vUv.y * 38.0 + uT * 2.1), cos(vUv.x * 31.0 + uT * 1.7)) * 0.0022 * uUnder;
          vec3 c = texture2D(uTex, uv).rgb * uExposure;
          if (uUnder > 0.0) c = mix(c, (texture2D(uTex, uv + vec2(0.003, 0.0)).rgb + texture2D(uTex, uv - vec2(0.003, 0.0)).rgb
            + texture2D(uTex, uv + vec2(0.0, 0.003)).rgb + texture2D(uTex, uv - vec2(0.0, 0.003)).rgb) * 0.25 * uExposure, 0.6 * uUnder);
          c += texture2D(uBloom, vUv).rgb * uExposure * uBloomK;
          vec2 q = vUv - 0.5;
          c *= 1.0 - uVignette * dot(q, q) * 1.6;
          float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
          c *= mix(uCool, uWarm, smoothstep(0.05, 0.6, l));        // slightly blue shadows, slightly warm highlights
          c = film(c);
          c = pow(c, vec3(1.0 / 2.2));
          c = (c - 0.5) * uContrast + 0.5;
          float g = dot(c, vec3(0.2126, 0.7152, 0.0722));
          c = mix(vec3(g), c, uSat);
          c += (h12(gl_FragCoord.xy + fract(uT) * 91.0) - 0.5) / 255.0 * 2.0;
          gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
        }`}),this.setSize(e,n,i)}setSize(t,e,n=this.samples){this.w=t,this.h=e,this.scene?.dispose(),(this.chain||[]).forEach(o=>o.dispose()),this.scene=Dh(t,e,n,!0),this.refr?.dispose(),this.refr=Dh(t>>1,e>>1),this.chain=[];let i=t,r=e;for(let o=0;o<this.levels;o++)i=Math.max(2,i>>1),r=Math.max(2,r>>1),this.chain.push(Dh(i,r))}pass(t,e,n){t.uniforms.uTex.value=e.texture??e,this.quad.material=t,this.r.setRenderTarget(n),this.r.render(this.qs,this.cam)}render(t,e,{exposure:n=1,t:i=0,thresh:r=1.2,overlay:o=null,under:a=0}={}){let c=this.r;if(c.setRenderTarget(this.scene),c.render(t,e),o){let d=this.copy.uniforms;d.uDepth.value=this.scene.depthTexture,d.uNear.value=e.near,d.uFar.value=e.far,this.pass(this.copy,this.scene,this.refr),c.setRenderTarget(this.scene);let f=c.autoClear;c.autoClear=!1,c.render(o,e),c.autoClear=f}let l=this.scene;for(let d=0;d<this.levels;d++){let f=this.chain[d];this.down.uniforms.uTexel.value.set(1/l.width,1/l.height),this.down.uniforms.uFirst.value=d===0?1:0,this.down.uniforms.uThresh.value=r,this.pass(this.down,l,f),l=f}let h=c.autoClear;c.autoClear=!1;for(let d=this.levels-1;d>0;d--){let f=this.chain[d],m=this.chain[d-1];this.up.uniforms.uTexel.value.set(1/f.width,1/f.height),this.up.uniforms.uW.value=1,this.pass(this.up,f,m)}c.autoClear=h;let u=this.final.uniforms;u.uBloom.value=this.chain[0].texture,u.uExposure.value=n,u.uT.value=i,u.uUnder.value=a,this.pass(this.final,this.scene,null)}};var bp=new URLSearchParams(location.search).get("q"),Mp=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,Db=Math.min(screen.width,screen.height)<820,ro=bp?bp==="low":Mp&&Db||/iPhone|Android.+Mobile/.test(navigator.userAgent),nc=Mp;function Nh(s,t){if(t===Zf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===no||t===Ha){let e=s.getIndex();if(e===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=e.count-2,i=[];if(t===no)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}var es=class extends Di{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Hh(e)}),this.register(function(e){return new jh(e)}),this.register(function(e){return new Zh(e)}),this.register(function(e){return new Jh(e)}),this.register(function(e){return new Gh(e)}),this.register(function(e){return new Wh(e)}),this.register(function(e){return new $h(e)}),this.register(function(e){return new Xh(e)}),this.register(function(e){return new Bh(e)}),this.register(function(e){return new Yh(e)}),this.register(function(e){return new Vh(e)}),this.register(function(e){return new Kh(e)}),this.register(function(e){return new qh(e)}),this.register(function(e){return new Fh(e)}),this.register(function(e){return new Qh(e)}),this.register(function(e){return new tu(e)})}load(t,e,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ji.extractUrlBase(t);o=Ji.resolveURL(l,this.path)}else o=Ji.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new to(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Ap){try{o[Kt.KHR_BINARY_GLTF]=new eu(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Kt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new cu(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Kt.KHR_MATERIALS_UNLIT:o[u]=new zh;break;case Kt.KHR_DRACO_MESH_COMPRESSION:o[u]=new nu(r,this.dracoLoader);break;case Kt.KHR_TEXTURE_TRANSFORM:o[u]=new iu;break;case Kt.KHR_MESH_QUANTIZATION:o[u]=new su;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}};function Nb(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}var Kt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Fh=class{constructor(t){this.parser=t,this.name=Kt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new _t(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ue);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new fr(h),l.distance=u;break;case"spot":l=new ka(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ts(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},zh=class{constructor(){this.name=Kt.KHR_MATERIALS_UNLIT}getMaterialType(){return We}extendParams(t,e,n){let i=[];t.color=new _t(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Ue),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,ee))}return Promise.all(i)}},Bh=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},Hh=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new pt(a,a)}return Promise.all(r)}},Vh=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Gh=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new _t(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Ue)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,ee)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Wh=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},$h=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new _t().setRGB(a[0],a[1],a[2],Ue),Promise.all(r)}},Xh=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Yh=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new _t().setRGB(a[0],a[1],a[2],Ue),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,ee)),Promise.all(r)}},qh=class{constructor(t){this.parser=t,this.name=Kt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},Kh=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},jh=class{constructor(t){this.parser=t,this.name=Kt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Zh=class{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Jh=class{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Qh=class{constructor(t){this.name=Kt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},tu=class{constructor(t){this.name=Kt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==zn.TRIANGLES&&l.mode!==zn.TRIANGLE_STRIP&&l.mode!==zn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let v=new mt,g=new _,p=new pe,y=new _(1,1,1),x=new an(m.geometry,m.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,v.compose(g,p,y));for(let M in c)if(M==="_COLOR_0"){let T=c[M];x.instanceColor=new mn(T.array,T.itemSize,T.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,c[M]);_e.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Ap="glTF",oo=12,wp={JSON:1313821514,BIN:5130562},eu=class{constructor(t){this.name=Kt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,oo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-oo,r=new DataView(t,oo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===wp.JSON){let l=new Uint8Array(t,oo+o,a);this.content=n.decode(l)}else if(c===wp.BIN){let l=oo+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},nu=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Kt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=ou[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=ou[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[t.attributes[h]],f=yr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let v=f.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}u(f)},a,l,Ue,d)})})}},iu=class{constructor(){this.name=Kt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},su=class{constructor(){this.name=Kt.KHR_MESH_QUANTIZATION}},ic=class extends Ki{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*l,v=m-l,g=-2*f+3*d,p=f-d,y=1-g,x=p-d+u;for(let M=0;M!==a;M++){let T=o[v+M+a],R=o[v+M+c]*h,C=o[m+M+a],D=o[m+M]*h;r[M]=y*T+x*R+g*C+p*D}return r}},Ub=new pe,ru=class extends ic{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return Ub.fromArray(r).normalize().toArray(r),r}},zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},yr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sp={9728:Ie,9729:ye,9984:da,9985:bh,9986:Fr,9987:fi},Ep={33071:bn,33648:Gr,10497:_s},Uh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ou={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kb={CUBICSPLINE:void 0,LINEAR:bs,STEP:or},kh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ob(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new $e({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),s.DefaultMaterial}function Ss(s,t,e){for(let n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ts(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Fb(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function zb(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bb(s){let t,e=s.extensions&&s.extensions[Kt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Oh(e.attributes):t=s.indices+":"+Oh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Oh(s.targets[n]);return t}function Oh(s){let t="",e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function au(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Vb=new mt,cu=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Nb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new mi(this.options.manager):this.textureLoader=new Fa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new to(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ss(r,a,i),ts(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Kt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ji.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=Uh[i.type],a=yr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ne(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Uh[i.type],l=yr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,v,g;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=e.cache.get(y);x||(v=new l(a,p*f,i.count*f/h),x=new Kr(v,f/h),e.cache.add(y,x)),g=new jr(x,c,d%f/h,m)}else a===null?v=new l(i.count*c):v=new l(a,d,i.count*c),g=new Ne(v,c,m);if(i.sparse!==void 0){let p=Uh.SCALAR,y=yr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,T=new y(o[1],x,i.sparse.count*p),R=new l(o[2],M,i.sparse.count*c);a!==null&&(g=new Ne(g.array.slice(),g.itemSize,g.normalized));for(let C=0,D=T.length;C<D;C++){let b=T[C];if(g.setX(b,R[C*c]),c>=2&&g.setY(b,R[C*c+1]),c>=3&&g.setZ(b,R[C*c+2]),c>=4&&g.setW(b,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Sp[d.magFilter]||ye,h.minFilter=Sp[d.minFilter]||fi,h.wrapS=Ep[d.wrapS]||_s,h.wrapT=Ep[d.wrapT]||_s,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=i.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(v){let g=new Ke(v);g.needsUpdate=!0,d(g)}),e.load(Ji.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||Hb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Kt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Kt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Kt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Qr,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Jr,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return $e}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[Kt.KHR_MATERIALS_UNLIT]){let u=i[Kt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new _t(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ue),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,ee)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=qe);let h=r.alphaMode||kh.OPAQUE;if(h===kh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===kh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==We&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==We&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==We){let u=r.emissiveFactor;a.emissive=new _t().setRGB(u[0],u[1],u[2],Ue)}return r.emissiveTexture!==void 0&&o!==We&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,ee)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ts(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ss(i,u,r),u})}createUniqueName(t){let e=ue.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Kt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Tp(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=Bb(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Kt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Tp(new me,l,e),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Ob(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let v=h[f],g=o[f],p,y=l[f];if(g.mode===zn.TRIANGLES||g.mode===zn.TRIANGLE_STRIP||g.mode===zn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Ea(v,y):new Bt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===zn.TRIANGLE_STRIP?p.geometry=Nh(p.geometry,Ha):g.mode===zn.TRIANGLE_FAN&&(p.geometry=Nh(p.geometry,no));else if(g.mode===zn.LINES)p=new Aa(v,y);else if(g.mode===zn.LINE_STRIP)p=new hr(v,y);else if(g.mode===zn.LINE_LOOP)p=new Ra(v,y);else if(g.mode===zn.POINTS)p=new Ca(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&zb(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),ts(p,r),g.extensions&&Ss(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&Ss(i,u[0],r),u[0];let d=new de;r.extensions&&Ss(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new De(ht.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new En(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ts(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new mt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Ta(a,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],v=f.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let y=0,x=d.length;y<x;y++){let M=d[y],T=f[y],R=m[y],C=v[y],D=g[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let b=n._createAnimationTracks(M,T,R,C,D);if(b)for(let E=0;E<b.length;E++)p.push(b[E])}return new Na(r,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Vb)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Zr:l.length>1?h=new de:l.length===1?h=l[0]:h=new _e,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ts(h,r),r.extensions&&Ss(n,h,r),r.matrix!==void 0){let u=new mt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new de;n.name&&(r.name=i.createUniqueName(n.name)),ts(r,n),n.extensions&&Ss(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof wn||d instanceof Ke)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let o=[],a=t.name?t.name:t.uuid,c=[];Qi[r.path]===Qi.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Qi[r.path]){case Qi.weights:l=Pi;break;case Qi.rotation:l=pi;break;case Qi.position:case Qi.scale:l=Ii;break;default:switch(n.itemSize){case 1:l=Pi;break;case 2:case 3:default:l=Ii;break}break}let h=i.interpolation!==void 0?kb[i.interpolation]:bs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+Qi[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=au(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof pi?ru:ic;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Gb(s,t,e){let n=t.attributes,i=new kn;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new _(c[0],c[1],c[2]),new _(l[0],l[1],l[2])),a.normalized){let h=au(yr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new _,c=new _;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let v=au(yr[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Tp(s,t,e){let n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=ou[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){let o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return te.workingColorSpace!==Ue&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${te.workingColorSpace}" not supported.`),ts(s,t),Gb(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Fb(s,t.targets,e):s})}var Es=["bb","ca","dd","cl","bc","tr","cv","wh","sp"],sc=["A","E"],Wb=700,$b=s=>new mn(new Float32Array(s*4),4);async function lu(s,t,e,n){let i=await s.loadAsync(t);return i.flipY=!1,i.colorSpace=e?ee:Ve,i.anisotropy=n,i}function rc(s,{patch:t,U:e,seaU:n,key:i}){let r=new $e(Object.assign({roughness:1,metalness:1},s));return r.onBeforeCompile=o=>{Object.assign(o.uniforms,n,{uTime:e.uTime}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aBurn; attribute vec4 aMark;
varying vec3 vWetW; varying vec4 vBurn; varying vec3 vLoc; varying vec4 vMark;`).replace("#include <project_vertex>",`#include <project_vertex>
        { vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp; vBurn = aBurn; vMark = aMark;
          #else
            vBurn = vec4(0.0, 0.0, 0.0, 200.0); vMark = vec4(0.0);
          #endif
          vWetW = (modelMatrix * wp).xyz; vLoc = transformed; }`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWetW; varying vec4 vBurn; varying vec3 vLoc; varying vec4 vMark; uniform float uTime;
${so}
        float bh(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
        float bn(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(bh(i), bh(i + vec3(1,0,0)), f.x), mix(bh(i + vec3(0,1,0)), bh(i + vec3(1,1,0)), f.x), f.y),
                     mix(mix(bh(i + vec3(0,0,1)), bh(i + vec3(1,0,1)), f.x), mix(bh(i + vec3(0,1,1)), bh(i + vec3(1,1,1)), f.x), f.y), f.z); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float seaH = gerstner(vWetW.xz, uTime, 2.0).y;
        float wetM = smoothstep(0.8, 0.0, vWetW.y - seaH);
        diffuseColor.rgb *= mix(1.0, 0.55, wetM);
        roughnessFactor = mix(roughnessFactor, 0.25, wetM);
        {
          // a flagship of the Grey Fleet: a dark band along her side (aMark = flag, band bottom, band top)
          if (vMark.x > 0.5 && vLoc.y > vMark.y && vLoc.y < vMark.z) diffuseColor.rgb *= 0.28;
          float u = clamp(vLoc.z / vBurn.w + 0.5, 0.0, 1.0);
          float b = u < 0.5 ? mix(vBurn.z, vBurn.y, u * 2.0) : mix(vBurn.y, vBurn.x, u * 2.0 - 1.0);
          float n = bn(vLoc * 0.35) * 0.6 + bn(vLoc * 1.3) * 0.4;
          float c = smoothstep(0.2, 0.7, b * (0.6 + 0.8 * n));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.018, 0.016, 0.015), c);
          roughnessFactor = mix(roughnessFactor, 0.95, c);
        }`)},r.customProgramCacheKey=()=>"steel"+i,t?.(r),r}function Xb(s,t){let e=null;return s.traverse(n=>{(n.name===t&&n.geometry||n.name===t&&!e)&&(e=n)}),e}function oc(s,t){let e=Xb(s,t);if(!e)return null;if(e.geometry)return e.geometry;let n=null;return e.traverse(i=>{!n&&i.geometry&&(n=i.geometry)}),n}var Yb={bb:{L:215,B:32,D:18,T:9.5},bc:{L:240,B:29,D:17,T:9},ca:{L:185,B:19,D:11,T:6},cl:{L:165,B:16.4,D:10,T:5.5},dd:{L:112,B:10.4,D:6.5,T:3.7},tr:{L:140,B:19,D:13.2,T:8},cv:{L:250,B:31,D:18,T:8.5},wh:{L:300,B:40,D:20.6,T:11},sp:{L:300,B:40,D:20.6,T:11}};function qb(s){let{L:t,B:e,D:n,T:i}=Yb[s],r=n-i,o=[];for(let l=0;l<=24;l++){let h=-t/2+t*l/24,u=h/(t/2),d=e/2*Math.sqrt(Math.max(0,1-Math.pow(Math.max(u,0),2.2)))*(u<0?1-.25*Math.pow(-u,4):1),f=[];for(let m=0;m<=6;m++){let v=m/6;f.push([d*Math.sin(v*Math.PI/2)**.6,-i+(i+r)*v])}o.push([h,f])}let c={bb:[[.32,0],[.2,1],[-.24,1],[-.36,0]],ca:[[.36,0],[.27,1],[.18,2],[-.25,1],[-.34,0]],dd:[[.33,0],[-.22,1],[-.36,0]],cl:[[.31,0],[.25,1],[-.27,1],[-.33,0]],bc:[[.35,0],[.28,1],[-.26,1],[-.32,0]],tr:[],cv:[],wh:[[.35,0],[.27,1],[-.31,0]],sp:[[.35,0],[.28,1],[-.27,1],[-.33,0]]}[s].map(([l,h])=>{let u=l*t,d=u>0;return{at:[0,r+h*e*.09,u],arc:d?[-2.3,2.3]:[Math.PI-2.3,Math.PI+2.3],guns:2,gap:e*.11,trunnion:[0,e*.06,e*.05],barrel_len:e*.6,rest:d?0:Math.PI}});return{kind:s,L:t,B:e,D:n,T:i,deck_top:r,stations:o,turrets:c,funnels:s==="bb"?[[0,r+22,-t*.02]]:s==="ca"?[[0,r+14,-t*.02]]:[[0,r+9,t*.02],[0,r+9,-t*.08]],boxes:[{min:[-e/2,-i,-t/2],max:[e/2,r,t/2],part:"hull"},{min:[-e*.3,r,-t*.14],max:[e*.3,r+e*.9,t*.1],part:"superstructure"}]}}function Kb(s){let{L:t,B:e,deck_top:n}=s,i=[],r=s.stations,o=[],a=[],c=r[0][1].length;for(let[m,v]of r){for(let g=c-1;g>=0;g--)o.push(-v[g][0],v[g][1],m);for(let g=0;g<c;g++)o.push(v[g][0],v[g][1],m)}let l=c*2;for(let m=0;m+1<r.length;m++)for(let v=0;v+1<l;v++){let g=m*l+v,p=g+l;a.push(g,p,g+1,g+1,p,p+1)}let h=o.length/3;for(let[m,v]of r){let g=v[c-1][0];o.push(g,n,m,-g,n,m)}for(let m=0;m+1<r.length;m++){let v=h+m*2;a.push(v,v+2,v+1,v+1,v+2,v+3)}let u=new me;u.setAttribute("position",new jt(o,3)),u.setIndex(a),u.computeVertexNormals(),i.push(u);let d=(m,v,g,p,y,x)=>i.push(new ti(m,v,g).translate(p,y+v/2,x));d(e*.45,e*.5,t*.18,0,n,0),d(e*.25,e*.55,e*.3,0,n+e*.5,t*.05);for(let m of s.funnels)i.push(new cn(e*.09,e*.11,m[1]-n,12).translate(m[0],(m[1]+n)/2,m[2]));return jb(i)}function jb(s){let t=[],e=[],n=[],i=0;for(let o of s){o=(o.index,o);let a=o.attributes.position.array,c=o.attributes.normal.array;for(let l=0;l<a.length;l++)t.push(a[l]),e.push(c[l]);if(o.index)for(let l of o.index.array)n.push(l+i);else for(let l=0;l<a.length/3;l++)n.push(l+i);i+=a.length/3}let r=new me;return r.setAttribute("position",new jt(t,3)),r.setAttribute("normal",new jt(e,3)),r.setAttribute("uv",new jt(new Float32Array(t.length/3*2),2)),r.setIndex(n),r}async function Lp(s,{aniso:t=8,patch:e,U:n,seaU:i}){let r=new mi,o=new es,a={kinds:{}};return await Promise.all(Es.map(async c=>{let l=null;try{let h=await fetch(`${s}${c}.json`);h.ok&&(l=await h.json())}catch{}if(l){let[h,u,d,f]=await Promise.all([lu(r,`${s}${c}_base.webp`,!0,t),lu(r,`${s}${c}_base_e.webp`,!0,t),lu(r,`${s}${c}_orm.webp`,!1,t),o.loadAsync(`${s}${c}.glb`)]);l.kind=c;let m={A:rc({map:h,aoMap:d,roughnessMap:d,metalnessMap:d},{patch:e,U:n,seaU:i,key:"A"}),E:rc({map:u,aoMap:d,roughnessMap:d,metalnessMap:d},{patch:e,U:n,seaU:i,key:"E"})},v=oc(f.scene,"hull");a.kinds[c]={meta:l,mats:m,geo:{lod:[v,oc(f.scene,"hull_lod1")??v],turret:oc(f.scene,"turret"),barrel:oc(f.scene,"barrel")},baked:!0}}else{l=qb(c);let h={A:rc({color:2763822,roughness:.6,metalness:.3},{patch:e,U:n,seaU:i,key:"Ai"}),E:rc({color:9146774,roughness:.6,metalness:.3},{patch:e,U:n,seaU:i,key:"Ei"})},u=l.B,d=new cn(u*.16,u*.18,u*.12,16).translate(0,u*.06,0),f=new cn(u*.018,u*.024,u*.6,8).rotateX(Math.PI/2).translate(0,0,u*.3);for(let v of[d,f])v.setAttribute("uv",new jt(new Float32Array(v.attributes.position.count*2),2));let m=Kb(l);a.kinds[c]={meta:l,mats:h,geo:{lod:[m,m],turret:d,barrel:f},baked:!1}}})),a}var hu=new mt,uu=new mt,_r=new mt,du=new pe,Rp=new _,Cp=new _(1,1,1),Zb=new _(0,1,0),Jb=new _(1,0,0),ac=class{constructor(t,e={bb:6,bc:6,ca:14,cl:12,dd:28,tr:6,cv:5,wh:2,sp:2}){this.art=t,this.group=new de,this.sets={};for(let n of Es){let i=t.kinds[n],r=e[n],o=i.meta.turrets.length,a={hull:{},turret:{},barrel:{}};for(let c of sc){let l=(h,u)=>{let d=new an(h.clone(),i.mats[c],u);d.count=0,d.frustumCulled=!1;let f=new mn(new Float32Array(u*4),4);d.geometry.setAttribute("aBurn",f),d.userData.burn=f;let m=$b(u);return d.geometry.setAttribute("aMark",m),d.userData.mark=m,this.group.add(d),d};a.hull[c]=i.geo.lod.map(h=>l(h,r)),a.turret[c]=l(i.geo.turret,160),a.barrel[c]=l(i.geo.barrel,480)}this.sets[n]=a}}casters(){let t=[];for(let e of Es)for(let n of sc){let i=this.sets[e];t.push(i.hull[n][0],i.turret[n],i.barrel[n])}return t}update(t,e){for(let n of Es)for(let i of sc){let r=this.sets[n];for(let o of[...r.hull[i],r.turret[i],r.barrel[i]])o.count=0}for(let n of t){if(n.gone)continue;let i=this.art.kinds[n.kind],r=this.sets[n.kind],o=n.body,a=i.meta.L;hu.compose(o.pos,o.quat,Cp);let c=e.distanceTo(o.pos)<Wb?0:1,l=(h,u,d=!1)=>{let f=h.count++;h.setMatrixAt(f,u),h.userData.burn.setXYZW(f,n.burn[0],n.burn[1],n.burn[2],a);let m=i.meta.D-i.meta.T;h.userData.mark.setXYZW(f,d&&n.boss&&n.side==="E"&&n.kind!=="wh"?1:0,m*.32,m*.6,0)};l(r.hull[n.side][c],hu,!0);for(let h of n.turrets){let u=h.meta,d=this.sets[u.geo??n.kind],f=u.scale??1,m=u.wide??1,v=0;if(h.drop>0){let p=1-h.drop;v=p<.75?40*(1-(p/.75)**2):1.2*Math.sin((p-.75)/.25*Math.PI),h.drop=Math.max(0,h.drop-(this.dt??1/60)*2.2)}uu.compose(Rp.set(u.at[0],u.at[1]+v,u.at[2]),du.setFromAxisAngle(Zb,-h.yaw),Cp).premultiply(hu),_r.copy(uu).multiply(new mt().makeScale(f*m,f,f)),l(d.turret[n.side],_r);let g=u.guns??2;for(let p=0;p<g;p++){let y=(p-(g-1)/2)*u.gap,x=h.recoil[p]??0,M=x<=0?0:x<.15?x/.15:Math.max(0,1-(x-.15)/1.4);du.setFromAxisAngle(Jb,-(h.gunElev?.[p]??h.elev)),_r.compose(Rp.set(u.trunnion[0]+y,u.trunnion[1],u.trunnion[2]),du,new _(f,f,f)),_r.multiply(new mt().makeTranslation(0,0,-M*(u.barrel_len/f)*.08)),_r.premultiply(uu),l(d.barrel[n.side],_r)}}}for(let n of Es)for(let i of sc){let r=this.sets[n];for(let o of[...r.hull[i],r.turret[i],r.barrel[i]])o.instanceMatrix.needsUpdate=!0,o.userData.burn.needsUpdate=!0,o.userData.mark.needsUpdate=!0}}};var Dp=9.81,Qb=1.2,Ee={};function fu(s){let t="g"+(+s).toFixed(1);if(Ee[t])return t;let e=s/36,n={calCm:+s,cal:s/100,m:673*e**3,v0:500+140*Math.min(e,1.6),reload:12*e**.8,range:1800+145*s,dmg:18*e**2.3,charge:4*e**1.2,maxElev:.52+.25*(1-Math.min(e,1)),traverse:4.2/e**.9,elevRate:5/e**.6};return n.k=.5*Qb*.3*Math.PI*(n.cal/2)**2/n.m,n.table=tM(n),Ee[t]=n,t}function tM(s){let t=[];for(let e=-.01;e<=s.maxElev;e+=.002){let n=0,i=12,r=s.v0*Math.cos(e),o=s.v0*Math.sin(e),a=0,c=.01;for(;i>0&&a<120;){let l=Math.hypot(r,o);r-=s.k*l*r*c,o-=(Dp+s.k*l*o)*c,n+=r*c,i+=o*c,a+=c}if(t.push({e,r:n,t:a,fall:Math.atan2(-o,r)}),t.length>2&&n<t[t.length-2].r)break}return t}for(let[s,t]of[["bb",36],["bc",36],["ca",20],["cl",15.5],["dd",12.7]])Ee[s]=Ee[fu(t)];function br(s,t){let e=Ee[s].table;if(t<e[0].r)return{e:e[0].e,t:e[0].t*t/Math.max(e[0].r,1)};for(let n=1;n<e.length;n++)if(e[n].r>=t){let i=e[n-1],r=e[n],o=(t-i.r)/(r.r-i.r);return{e:i.e+(r.e-i.e)*o,t:i.t+(r.t-i.t)*o,fall:i.fall+(r.fall-i.fall)*o}}return null}function eM(s,t,e,n){let i=0,r=1;for(let o of["x","y","z"]){let a=t[o]-s[o];if(Math.abs(a)<1e-9){if(s[o]<e[o]||s[o]>n[o])return-1;continue}let c=(e[o]-s[o])/a,l=(n[o]-s[o])/a;if(c>l&&([c,l]=[l,c]),i=Math.max(i,c),r=Math.min(r,l),i>r)return-1}return i}var nM=new _,ao=new _,Pp=new _,co=new pe,Ip=new mt,cc=class{constructor(t,e){this.fx=t,this.sea=e,this.shells=[],this.events=[];let n=new cn(.5,.5,1,6,1).rotateX(Math.PI/2);this.mesh=new an(n,new We({color:new _t(3,1.6,.7),transparent:!0,opacity:.85,depthWrite:!1}),600),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=12;let i=new cn(.5,.5,2.6,16).rotateX(Math.PI/2),r=new Pa(.5,1.6,16).rotateX(Math.PI/2).translate(0,0,2.1);this.one=new de;let o=new $e({color:2762790,roughness:.45,metalness:.8});this.one.add(new Bt(i,o),new Bt(r,o));let a=new Bt(new cn(.52,.52,.25,16).rotateX(Math.PI/2).translate(0,0,-1),new $e({color:10119722,roughness:.4,metalness:.9}));this.one.add(a),this.one.visible=!1,this.tracked=null}fire(t,e,n,i,r,o=null){let a=Ee[t],c=i.clone().multiplyScalar(a.v0*(1+(Math.random()-.5)*.004));c.add(e.body.vel),this.shells.push({type:t,g:a,p:n.clone(),p0:n.clone(),v:c,from:e,t0:r,target:e.target}),this.fx.blast(n,i,a.charge,e.body.vel),e.body.impulse(i.clone().multiplyScalar(-a.m*a.v0*1.4),n),this.events.push({kind:"fire",type:t,at:n.clone(),from:e})}update(t,e,n){let i=[],r=Math.max(1,Math.ceil(t/.008333333333333333)),o=t/r;for(let h of this.shells){let u=!0;for(let d=0;d<r&&u;d++){let f=nM.copy(h.p),m=h.v.length();h.v.addScaledVector(h.v,-h.g.k*m*o),h.v.y-=Dp*o,h.p.addScaledVector(h.v,o);for(let g of n){if(g===h.from||g.gone||g.body.sunk)continue;let p=g.body,y=g.meta.L*.55+20;if((p.pos.x-h.p.x)**2+(p.pos.z-h.p.z)**2>y*y)continue;co.copy(p.quat).invert();let x=ao.copy(f).sub(p.pos).applyQuaternion(co),M=Pp.copy(h.p).sub(p.pos).applyQuaternion(co),T=2,R=null;for(let C of g.boxes){let D=eM(x,M,C.min,C.max);D>=0&&D<T&&(T=D,R=C)}if(R){let C=x.clone().lerp(M,T),D=f.clone().lerp(h.p,T);this.events.push({kind:"hit",type:h.type,ship:g,part:R,local:C,world:D,vel:h.v.clone(),from:h.from}),u=!1;break}}if(!u)break;let v=$a(this.sea,h.p.x,h.p.z,e,1);h.p.y<v&&(this.events.push({kind:"splash",type:h.type,world:new _(h.p.x,v,h.p.z),from:h.from}),this.fx.column(new _(h.p.x,v,h.p.z),h.g.cal),u=!1),e-h.t0>40&&(u=!1)}u&&i.push(h)}this.shells=i;let a=0;for(let h of this.shells){let u=h.v.length(),d=Math.min(u*.035,30),f=Math.max(h.g.cal*2.2,.35);if(ao.copy(h.v).normalize(),co.setFromUnitVectors(new _(0,0,1),ao),Ip.compose(Pp.copy(h.p).addScaledVector(ao,-d/2),co,new _(f,f,d)),this.mesh.setMatrixAt(a++,Ip),a>=600)break}this.mesh.count=a,this.mesh.instanceMatrix.needsUpdate=!0;let c=this.tracked;if(this.one.visible=!!c&&this.shells.includes(c),this.one.visible){let h=c.g.cal/.36*.36;this.one.position.copy(c.p),this.one.quaternion.setFromUnitVectors(new _(0,0,1),ao.copy(c.v).normalize()),this.one.scale.setScalar(h*1)}let l=this.events;return this.events=[],l}};var wt={SMOKE:0,SPRAY:1,SPLINTER:2,SOOT:3,FLASH:4,FLAME:5,EMBER:6,MIST:7},gn=2e4,Np=`
attribute vec4 aP;       // xyz, size (m)
attribute vec4 aD;       // type, age/life (0..1), seed, alpha
uniform vec3 uCamR, uCamU;
varying vec2 vQ; varying vec4 vD; varying vec3 vW; varying float vSize;
void main(){
  vQ = position.xy * 2.0;
  float ang = aD.z * 6.283 + aD.y * (aD.z - 0.5) * 2.0;
  vec2 r = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * position.xy;
  vec3 w = aP.xyz + (uCamR * r.x + uCamU * r.y) * aP.w;
  vW = w; vD = aD; vSize = aP.w;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}`,Up=`
float fh(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float fn2(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(fh(i), fh(i + vec2(1, 0)), u.x), mix(fh(i + vec2(0, 1)), fh(i + vec2(1, 1)), u.x), u.y); }
float fbm2(vec2 p){ return fn2(p) * 0.5 + fn2(p * 2.1 + 3.7) * 0.3 + fn2(p * 4.3 + 9.1) * 0.2; }
`;function iM(s,t){return new ge({uniforms:Object.assign({},s,t),transparent:!0,depthWrite:!1,vertexShader:Np,fragmentShader:`
      ${ws}
      ${Up}
      uniform vec3 uAmbUp, uAmbDn; uniform vec3 uCamR, uCamU;
      varying vec2 vQ; varying vec4 vD; varying vec3 vW; varying float vSize;
      void main(){
        float type = vD.x, age = vD.y, seed = vD.z, alpha = vD.w;
        float r2 = dot(vQ, vQ);
        if (r2 > 1.0) discard;
        vec3 V = normalize(vW - cameraPosition);
        vec3 col; float a;
        if (type < 0.5 || (type > 2.5 && type < 3.5) || type > 6.5) {
          // a smoke puff: ragged edge from noise that drifts as it ages; density falls off to the rim
          float n = fbm2(vQ * 1.7 + seed * 19.0 + age * 1.3);
          float dens = clamp((1.0 - r2) * 1.4 - (n - 0.45) * 1.1, 0.0, 1.0);
          dens = dens * dens * (3.0 - 2.0 * dens);
          // sphere normal of the puff (toward the camera), for how much of the puff lies between this point and the sun
          vec3 nrm = normalize(uCamR * vQ.x + uCamU * vQ.y - V * sqrt(max(1.0 - r2, 0.0)));
          float toSun = dot(nrm, uSunDirW) * 0.5 + 0.5;
          bool soot = type > 2.5 && type < 3.5;
          bool mist = type > 6.5;
          float albedo = soot ? 0.18 : (mist ? 0.95 : 0.85);
          float od = (soot ? 3.0 : 1.6) * (0.5 + 0.5 * (1.0 - age));    // optical depth across the puff: thins as it spreads
          float trans = exp(-od * (1.0 - toSun));
          float ph = hgPhase(dot(V, uSunDirW), 0.6) * 12.566;           // 1 = isotropic
          float ms = 0.35;                                               // light scattered more than once: softens the dark side
          vec3 sun = uSunCol * albedo * (trans * mix(ph, 1.0, 0.25) + ms * (1.0 - trans) * 0.5) * 0.12;
          vec3 amb = mix(uAmbDn, uAmbUp, nrm.y * 0.5 + 0.5) * albedo;
          col = sun + amb;
          if (soot) col *= vec3(1.0, 0.9, 0.8);
          a = dens * alpha * (soot ? 0.9 : (mist ? 0.85 : 0.8));
          if (mist) col *= 1.7;           // white water: much brighter than smoke (more droplets, less absorption)
        } else if (type < 1.5) {
          // spray: a droplet (small bright disc), catching the sun
          a = smoothstep(1.0, 0.4, r2) * alpha;
          col = uAmbUp * 1.4 + uSunCol * 0.06 * (1.0 + 3.0 * pow(max(dot(-V, uSunDirW) * -1.0, 0.0), 8.0));
        } else {
          // splinter: a small dark chip
          a = smoothstep(1.0, 0.6, r2) * alpha;
          col = vec3(0.05, 0.035, 0.02) * (uAmbUp * 2.0 + uSunCol * 0.1);
        }
        col = applyHaze(col, vW);
        gl_FragColor = vec4(col, a);
      }`})}function sM(s){return new ge({uniforms:Object.assign({},s,{uCamR:{value:new _},uCamU:{value:new _}}),transparent:!0,depthWrite:!1,blending:nr,vertexShader:Np,fragmentShader:`
      ${ws}
      ${Up}
      varying vec2 vQ; varying vec4 vD; varying vec3 vW; varying float vSize;
      void main(){
        float type = vD.x, age = vD.y, seed = vD.z, alpha = vD.w;
        float r2 = dot(vQ, vQ);
        if (r2 > 1.0) discard;
        vec3 col;
        if (type < 4.5) {
          // muzzle flash: white-hot core, orange fringe, gone in a few frames
          float k = pow(1.0 - r2, 3.0);
          col = mix(vec3(9.0, 3.2, 0.9), vec3(30.0, 22.0, 12.0), pow(1.0 - r2, 8.0)) * k * alpha;
        } else if (type < 5.5) {
          // flame tongue: flickering noise, yellow at the base, dull red at the tips
          float n = fbm2(vec2(vQ.x * 2.0 + seed * 7.0, vQ.y * 1.2 - age * 6.0 - seed * 3.0));
          float f = clamp((1.0 - r2) * 1.6 - n * 1.1 + (1.0 - age) * 0.3, 0.0, 1.0);
          vec3 c = mix(vec3(2.4, 0.35, 0.05), vec3(6.0, 2.6, 0.6), smoothstep(0.3, 0.9, f));
          col = c * f * alpha;
        } else {
          col = vec3(5.0, 1.6, 0.3) * pow(1.0 - r2, 2.0) * alpha;    // ember
        }
        // haze swallows light with distance (no in-scatter for glowing things)
        col *= exp(-hazeDepth(vW));
        gl_FragColor = vec4(col, 1.0);
      }`})}var lc=class{constructor(t,e){this.wind=e,this.p=new Float32Array(gn*3),this.v=new Float32Array(gn*3),this.size=new Float32Array(gn),this.grow=new Float32Array(gn),this.life=new Float32Array(gn),this.age=new Float32Array(gn),this.type=new Uint8Array(gn),this.seed=new Float32Array(gn),this.drag=new Float32Array(gn),this.buoy=new Float32Array(gn),this.a0=new Float32Array(gn),this.free=[];for(let a=gn-1;a>=0;a--)this.free.push(a);this.live=[],this.U={uCamR:{value:new _},uCamU:{value:new _},uAmbUp:{value:new _t},uAmbDn:{value:new _t}};let n=new Sn(1,1),i=a=>{let c=new Oa;c.index=n.index,c.setAttribute("position",n.attributes.position);let l=new mn(new Float32Array(gn*4),4).setUsage(Sh),h=new mn(new Float32Array(gn*4),4).setUsage(Sh);c.setAttribute("aP",l),c.setAttribute("aD",h),c.instanceCount=0;let u=new Bt(c,a);return u.frustumCulled=!1,{m:u,g:c,aP:l,aD:h}},r=iM(t,this.U),o=sM(t);o.uniforms.uCamR=this.U.uCamR,o.uniforms.uCamU=this.U.uCamU,this.blend=i(r),this.add=i(o),this.blend.m.renderOrder=10,this.add.m.renderOrder=11,this.group=new de,this.group.add(this.blend.m,this.add.m),this.lights=[],this.lightGroup=new de;for(let a=0;a<6;a++){let c=new fr(16756848,0,900,2);this.lights.push({L:c,t:0,k:0}),this.lightGroup.add(c)}}spawn(t,e,n,i,r,o,a,c,l,{grow:h=0,drag:u=1,buoy:d=0,alpha:f=1}={}){let m=this.free.pop();return m===void 0?-1:(this.p[m*3]=e,this.p[m*3+1]=n,this.p[m*3+2]=i,this.v[m*3]=r,this.v[m*3+1]=o,this.v[m*3+2]=a,this.size[m]=c,this.grow[m]=h,this.life[m]=l,this.age[m]=0,this.type[m]=t,this.seed[m]=Math.random(),this.drag[m]=u,this.buoy[m]=d,this.a0[m]=f,this.live.push(m),m)}flashLight(t,e,n){let i=this.lights.reduce((r,o)=>r.k<o.k?r:o);i.L.position.copy(t),i.t=n,i.dur=n,i.k=e}muzzle(t,e,n=1,i=null){let r=Math.random,o=i?.x??0,a=i?.z??0;this.spawn(wt.FLASH,t.x+e.x*.6*n,t.y+e.y*.6,t.z+e.z*.6*n,0,0,0,1.6*n+.3,.07),this.spawn(wt.FLASH,t.x+e.x*1.8*n,t.y+e.y*1.8,t.z+e.z*1.8*n,0,0,0,1.1*n+.2,.05),this.flashLight(t,3e3*n,.09);let c=Math.round(10+26*n);for(let l=0;l<c;l++){let h=(4+r()*26)*Math.sqrt(n),u=.25+r()*.35;this.spawn(wt.SMOKE,t.x,t.y,t.z,o+(e.x+(r()-.5)*u)*h,(e.y+(r()-.3)*u)*h,a+(e.z+(r()-.5)*u)*h,(.5+r()*.8)*(.4+n),18+r()*22,{grow:.22+r()*.25,drag:2.2,buoy:.08,alpha:.9})}n>.5&&this.spawn(wt.SMOKE,t.x-e.x*2.2,t.y+.3,t.z-e.z*2.2,0,.8,0,.5,8,{grow:.2,drag:1.5,buoy:.1,alpha:.7});for(let l=0;l<8*n;l++)this.spawn(wt.EMBER,t.x,t.y,t.z,e.x*30*r()+(r()-.5)*4,e.y*30*r()+r()*3,e.z*30*r()+(r()-.5)*4,.06,.6+r()*.8,{drag:.6})}splash(t,e=1){let n=Math.random,i=Math.round(60*e+20);for(let r=0;r<i;r++){let o=n()*Math.PI*2,a=n()*.6,c=(6+n()*12)*Math.sqrt(e);this.spawn(wt.SPRAY,t.x+Math.cos(o)*a,.1,t.z+Math.sin(o)*a,Math.cos(o)*(.5+n()*2.2),c,Math.sin(o)*(.5+n()*2.2),.12+n()*.2,3.5,{drag:.08})}for(let r=0;r<14*e;r++){let o=n()*Math.PI*2;this.spawn(wt.MIST,t.x+Math.cos(o)*.8,1+n()*6*e,t.z+Math.sin(o)*.8,Math.cos(o)*.8,1+n()*2,Math.sin(o)*.8,1.2+n(),6+n()*4,{grow:.35,drag:1.2,buoy:-.05,alpha:.7})}}splinters(t,e,n=1){let i=Math.random;for(let r=0;r<30*n;r++)this.spawn(wt.SPLINTER,t.x,t.y,t.z,e.x*6*i()+(i()-.5)*9,i()*8,e.z*6*i()+(i()-.5)*9,.05+i()*.12,2.5,{drag:.2});for(let r=0;r<6;r++)this.spawn(wt.SMOKE,t.x,t.y,t.z,(i()-.5)*3,i()*2,(i()-.5)*3,.6,6,{grow:.3,drag:2,alpha:.5})}burn(t,e,n){let i=Math.random;i()<n*30*e&&this.spawn(wt.FLAME,t.x+(i()-.5)*1.5,t.y+i()*.5,t.z+(i()-.5)*1.5,i()-.5,2+i()*3,i()-.5,.8+i()*1.2*e,.6+i()*.5,{grow:.4,drag:1.2,buoy:.5}),i()<n*6*e&&this.spawn(wt.SOOT,t.x+(i()-.5),t.y+1.5,t.z+(i()-.5),0,2+i()*2,0,1+i()*e,14+i()*10,{grow:.45,drag:.8,buoy:.35,alpha:.85}),i()<n*10*e&&this.spawn(wt.EMBER,t.x,t.y+1,t.z,(i()-.5)*2,3+i()*4,(i()-.5)*2,.05,2+i()*2,{drag:.5,buoy:.3})}blast(t,e,n,i){let r=Math.random,o=i?.x??0,a=i?.z??0,c=Math.sqrt(n);for(let h=0;h<3;h++)this.spawn(wt.FLASH,t.x+e.x*(2+h*4)*c,t.y+e.y*(2+h*4)*c,t.z+e.z*(2+h*4)*c,o,0,a,(3-h*.6)*c,.08+h*.015);for(let h=0;h<3*c;h++)this.spawn(wt.FLAME,t.x+e.x*4*c,t.y,t.z+e.z*4*c,o+e.x*60*r()*c,e.y*60*r()+r()*4,a+e.z*60*r()*c,(1.5+r()*2)*c,.25+r()*.2,{grow:3*c,drag:4});this.flashLight(t,12e4*n,.1);let l=Math.round(10+10*c);for(let h=0;h<l;h++){let u=(10+r()*70)*c,d=.35;this.spawn(wt.SMOKE,t.x,t.y,t.z,o+(e.x+(r()-.5)*d)*u,(e.y+(r()-.35)*d)*u,a+(e.z+(r()-.5)*d)*u,(1.5+r()*2.5)*c,5+r()*4,{grow:(1.4+r()*1.2)*c,drag:1.8,buoy:.15,alpha:.4})}if(n>1.5){let h=t.x+e.x*12*c,u=t.z+e.z*12*c;for(let d=0;d<40*c;d++){let f=r()*Math.PI*2,m=8+r()*18;this.spawn(wt.SPRAY,h+Math.cos(f)*3,.3,u+Math.sin(f)*3,o+Math.cos(f)*m,2+r()*4,a+Math.sin(f)*m,.6+r()*.8,1.6,{drag:.5})}for(let d=0;d<8;d++){let f=r()*Math.PI*2;this.spawn(wt.MIST,h+Math.cos(f)*6,2,u+Math.sin(f)*6,Math.cos(f)*10,1,Math.sin(f)*10,4+r()*3,4,{grow:2,drag:1.5,alpha:.5})}}}column(t,e){let n=Math.random,i=e/.36,r=85*i**1.3,o=Math.sqrt(2*9.81*r),a=22*i**1.1,c=Math.round(Math.min(Math.max(230*i**.8,40),460)),l=2*o/9.81;for(let h=0;h<c;h++){let u=n()*Math.PI*2,d=Math.sqrt(n())*a*.45,f=Math.pow(n(),.5),m=o*(.35+.65*f);this.spawn(wt.MIST,t.x+Math.cos(u)*d,.5+n()*2,t.z+Math.sin(u)*d,Math.cos(u)*n()*a*.11,m,Math.sin(u)*n()*a*.11,a*(.26+n()*.2)*(1-.5*f),l*(.9+n()*.4)+1.5,{grow:a*.035,drag:.02,buoy:-9.81,alpha:1})}for(let h=0;h<c*1.2;h++){let u=n()*Math.PI*2,d=n()*a*.5;this.spawn(wt.SPRAY,t.x+Math.cos(u)*d,.5,t.z+Math.sin(u)*d,Math.cos(u)*(1+n()*4)*a/6,o*(.3+.8*n()),Math.sin(u)*(1+n()*4)*a/6,.12+n()*.25*a/6,l+1,{drag:.03})}for(let h=0;h<c*.25;h++){let u=n()*Math.PI*2,d=n()*r*.8;this.spawn(wt.MIST,t.x+Math.cos(u)*a*.3,d,t.z+Math.sin(u)*a*.3,Math.cos(u),.5,Math.sin(u),a*(.35+n()*.25),5+n()*4,{grow:a*.05,drag:.8,buoy:-1.2,alpha:.35})}for(let h=0;h<c*.5;h++){let u=n()*Math.PI*2;this.spawn(wt.MIST,t.x+Math.cos(u)*a*.5,1,t.z+Math.sin(u)*a*.5,Math.cos(u)*(4+n()*6)*a/6,2+n()*3,Math.sin(u)*(4+n()*6)*a/6,a*.35,2.5,{grow:a*.2,drag:.8,buoy:-4,alpha:.8})}}hitBurst(t,e){let n=Math.random,i=e>.3?3:e>.15?1.8:1;this.spawn(wt.FLASH,t.x,t.y,t.z,0,0,0,6*i,.12);for(let r=0;r<14*i;r++)this.spawn(wt.FLAME,t.x+(n()-.5)*3*i,t.y+n()*2*i,t.z+(n()-.5)*3*i,(n()-.5)*18*i,n()*14*i,(n()-.5)*18*i,(2+n()*3)*i,.5+n()*.5,{grow:4*i,drag:3,buoy:2});for(let r=0;r<7*i;r++)this.spawn(wt.SOOT,t.x,t.y+2,t.z,(n()-.5)*6*i,2+n()*5*i,(n()-.5)*6*i,(1.5+n()*1.5)*i,7+n()*6,{grow:.9*i,drag:1.2,buoy:.5,alpha:.75});for(let r=0;r<10*i;r++)this.spawn(wt.SPLINTER,t.x,t.y,t.z,(n()-.5)*30*i,n()*22*i,(n()-.5)*30*i,.1+n()*.15*i,1.6,{drag:.05});for(let r=0;r<20*i;r++)this.spawn(wt.EMBER,t.x,t.y,t.z,(n()-.5)*50,n()*40,(n()-.5)*50,.2*i,1+n(),{drag:.3});this.flashLight(t,3e4*i,.12)}magazine(t,e=1){let n=Math.random;for(let i=0;i<4;i++)this.spawn(wt.FLASH,t.x,t.y+i*15,t.z,0,0,0,40*e,.3);for(let i=0;i<160*e;i++){let r=n()*6.283,o=30+n()*90;this.spawn(wt.FLAME,t.x+Math.cos(r)*5,t.y+5,t.z+Math.sin(r)*5,Math.cos(r)*n()*30,o,Math.sin(r)*n()*30,8+n()*10,1+n()*1.5,{grow:10,drag:1.2,buoy:4})}for(let i=0;i<120*e;i++){let r=n()*6.283,o=20+n()*70;this.spawn(wt.SOOT,t.x+Math.cos(r)*8,t.y+10+n()*40,t.z+Math.sin(r)*8,Math.cos(r)*n()*20,o,Math.sin(r)*n()*20,10+n()*12,30+n()*25,{grow:3.5,drag:.5,buoy:.6,alpha:.95})}for(let i=0;i<200*e;i++)this.spawn(wt.SPLINTER,t.x,t.y+5,t.z,(n()-.5)*120,n()*110,(n()-.5)*120,.5+n()*1.5,6,{drag:.02});this.flashLight(t,4e6*e,.6)}funnel(t,e,n,i){let r=Math.random;r()<n*(4+6*e)&&this.spawn(wt.SOOT,t.x+(r()-.5),t.y,t.z+(r()-.5),(i?.x??0)*.5,2+3*e,(i?.z??0)*.5,1.6+r()*.8,16+r()*10,{grow:.55,drag:.25,buoy:.05,alpha:.1+.14*e})}bigFire(t,e,n){let i=Math.random;i()<n*12*e&&this.spawn(wt.FLAME,t.x+(i()-.5)*8,t.y+i()*2,t.z+(i()-.5)*8,(i()-.5)*2,4+i()*5,(i()-.5)*2,3+i()*4*e,.8+i()*.6,{grow:1.5,drag:1.2,buoy:1}),i()<n*7*e&&this.spawn(wt.SOOT,t.x+(i()-.5)*4,t.y+4,t.z+(i()-.5)*4,0,5+i()*4,0,4+i()*3*e,25+i()*15,{grow:1.6,drag:.6,buoy:.3,alpha:.9})}update(t,e,n){let i=n.matrixWorld.elements;this.U.uCamR.value.set(i[0],i[1],i[2]),this.U.uCamU.value.set(i[4],i[5],i[6]);let r=this.wind.uniforms.uWind.value,o=this.blend,a=this.add,c=0,l=0,h=[];for(let u of this.live){this.age[u]+=t;let d=this.life[u];if(this.age[u]>=d){this.free.push(u);continue}h.push(u);let f=this.type[u],m=u*3,v=this.v,g=this.p,p=this.drag[u],y=f===wt.SPRAY||f===wt.SPLINTER||f===wt.EMBER,x=1-Math.exp(-p*t);v[m]+=(r.x-v[m])*x,v[m+2]+=(r.y-v[m+2])*x,v[m+1]+=(y?-9.81*t:0)+this.buoy[u]*t-v[m+1]*(y?0:x),g[m]+=v[m]*t,g[m+1]+=v[m+1]*t,g[m+2]+=v[m+2]*t,(y||this.buoy[u]<-5)&&g[m+1]<0&&(this.age[u]=d),this.size[u]+=this.grow[u]*t*(f===wt.SMOKE?Math.max(.2,1-this.age[u]/d)*2:1);let M=this.age[u]/d,T=this.a0[u];f===wt.SMOKE||f===wt.SOOT||f===wt.MIST?T*=Math.min(M*12,1)*Math.pow(1-M,1.5):f===wt.FLAME?T*=Math.sin(Math.PI*Math.min(M*1.3,1)):f===wt.FLASH?T*=1-M:T*=1-M*M;let R=f>=wt.FLASH&&f!==wt.MIST?a:o,C=R===a?l++:c++;R.aP.array.set([g[m],g[m+1],g[m+2],this.size[u]],C*4),R.aD.array.set([f,M,this.seed[u],T],C*4)}this.live=h,o.g.instanceCount=c,a.g.instanceCount=l;for(let u of[o,a])u.aP.needsUpdate=!0,u.aD.needsUpdate=!0;for(let u of this.lights)u.t>0?(u.t-=t,u.L.intensity=u.k*Math.max(u.t/u.dur,0)):u.L.intensity=0}clear(){for(let t of this.live)this.free.push(t);this.live=[]}setAmbient(t,e){this.U.uAmbUp.value.copy(t),this.U.uAmbDn.value.copy(e)}};var pu=1025,hc=9.81,ns=()=>new _,rM=[-.35,0,.33,.66,1],lo={bb:{kn:27,turnD:4.6,gm:2.4,pumps:2.5,armor:.75},bc:{kn:31,turnD:5,gm:2,pumps:2.2,armor:.5},cl:{kn:35,turnD:3.9,gm:1.3,pumps:1,armor:.3},ca:{kn:33,turnD:4.2,gm:1.6,pumps:1.4,armor:.45},dd:{kn:36,turnD:3.6,gm:.9,pumps:.6,armor:.1},tr:{kn:14,turnD:4,gm:1.4,pumps:1.2,armor:0},cv:{kn:32,turnD:4.6,gm:2,pumps:2,armor:.35},wh:{kn:26,turnD:5.2,gm:2.8,pumps:3.5,armor:.85},sp:{kn:26,turnD:5.2,gm:2.8,pumps:3.5,armor:.85}},oM=.5144,uc=class{constructor(t,e){this.meta=t,this.sea=e,this.kind=t.kind,this.K=lo[t.kind];let n=t.L,i=t.B,r=t.T;this.V0=n*i*r*.58,this.mass0=pu*this.V0,this.reserve=n*i*(t.D-r)*.62,this.vmax=this.K.kn*oM,this.cR=this.mass0*.0016/n,this.P=this.cR*this.vmax**3*1.08,this.pos=ns(),this.vel=ns(),this.yaw=0,this.yawRate=0,this.quat=new pe,this.ctl={tele:3,rudder:0},this.power=0,this.rudder=0,this.heave=0,this.heaveV=0,this.roll=0,this.rollV=0,this.pitchA=0,this.pitchV=0,this.list=0,this.trim=0,this.sinkY=0,this.kickRoll=0,this.comp=[];for(let o=0;o<5;o++)for(let a of[1,-1])this.comp.push({f:(o-2)/5*n,x:a*i*.25,water:0,cap:this.V0*.11,holes:[]});this.water=0,this.sunk=!1,this.founder=0,this.capsize=0,this.gm=this.K.gm,this.sinkBase=0,this.tmp={v:ns(),q:new pe,e:new Yi(0,0,0,"YXZ")},this.updateQuat()}applyFit(t){this.mass0+=t.dW*1e3,this.V0=this.mass0/pu,this.gm=t.gm,this.sinkBase=t.sink,this.vmax*=t.speedK,this.reserve=Math.max(this.reserve-t.sink*this.meta.L*this.meta.B*.62,this.reserve*.1),t.freeboard<=.3&&this.startFounder()}place(t,e,n,i=0){this.pos.set(t,0,e),this.yaw=n,this.yawRate=0,this.vel.set(Math.sin(n)*i,0,Math.cos(n)*i),this.power=i/this.vmax,this.updateQuat()}get heading(){return this.yaw}get speed(){return this.vel.x*Math.sin(this.yaw)+this.vel.z*Math.cos(this.yaw)}get heel(){return this.roll+this.list}get pitch(){return this.pitchA+this.trim}forward(t=ns()){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}toWorld(t,e=ns()){return e.copy(t).applyQuaternion(this.quat).add(this.pos)}toLocal(t,e=ns()){return e.copy(t).sub(this.pos).applyQuaternion(this.tmp.q.copy(this.quat).invert())}pointVel(t,e=ns()){let n=this.tmp.v.subVectors(t,this.pos);return e.set(this.vel.x+this.yawRate*n.z,0,this.vel.z-this.yawRate*n.x)}hole(t,e){let n=this.comp[0],i=1e9;for(let r of this.comp){let o=Math.abs(r.f-t.z)+(Math.sign(r.x)!==Math.sign(t.x||1)?1e4:0);o<i&&(i=o,n=r)}n.holes.push({p:t.clone(),a:e})}impulse(t,e){let n=this.toLocal(e,ns()),i=new _(Math.cos(this.yaw),0,-Math.sin(this.yaw)),r=this.mass0*(.38*this.meta.B)**2;this.rollV+=t.dot(i)*Math.max(n.y+this.meta.T*.4,1)/r,this.vel.x+=t.x/this.mass0*.6,this.vel.z+=t.z/this.mass0*.6}updateQuat(){let t=this.tmp.e;t.set(-(this.pitchA+this.trim),this.yaw,-(this.roll+this.list)*1,"YXZ"),this.quat.setFromEuler(t)}step(t,e){let n=this.meta,i=this.K,r=this.ctl,o=!this.sunk&&this.founder<=0,a=o?(r.pow??rM[ht.clamp(r.tele,0,4)])*(1-Math.min(this.water/this.reserve,1)*.6):0;this.power+=ht.clamp(a-this.power,-t*.12,t*.08),this.rudder+=ht.clamp((o?r.rudder:.3)-this.rudder,-t*.35,t*.35);let c=Math.sin(this.yaw),l=Math.cos(this.yaw),h=this.vel.x*c+this.vel.z*l,u=this.vel.x*l-this.vel.z*c,d=this.mass0*1.08+this.water*pu,f=this.power>=0?this.P*this.power/Math.max(Math.abs(h),this.vmax*.18):this.P*this.power/Math.max(Math.abs(h),this.vmax*.18)*.7,m=Math.abs(h)/Math.sqrt(hc*n.L),v=this.cR*h*Math.abs(h)*(1+6*Math.max(m-.3,0)**2)*(1+this.water/this.V0*3),g=Math.abs(this.yawRate)*Math.abs(h)*d*.35,p=(f-v-g*Math.sign(h))/d,y=-u*Math.abs(u)*this.cR*30/d-u*.15,x=i.turnD*n.L/2,M=h/x*(this.rudder/.6)*-1,T=6+n.L/18;this.yawRate+=(M-this.yawRate)*(1-Math.exp(-t/T)),o||(this.yawRate*=Math.exp(-t*.2)),this.yaw+=this.yawRate*t,y+=-this.yawRate*h*.25;let R=h+p*t,C=u+y*t,D=Math.sin(this.yaw),b=Math.cos(this.yaw);this.vel.set(R*D+C*b,0,R*b-C*D),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;let E=n.L*.38,U=n.B*.42,W=(Dt,Et)=>$a(this.sea,this.pos.x+D*Dt+b*Et,this.pos.z+b*Dt-D*Et,e,1),j=W(E,0),P=W(-E,0),N=W(0,-U),H=W(0,U),Y=(j+P+N+H)/4,X=Math.max(this.gm,.02),$=Math.sqrt(hc/n.T)*.55,q=2*Math.PI/(.8*n.B/Math.sqrt(X)),Z=Math.sqrt(hc/n.T)*.5,ct=ht.clamp(.55+this.gm/n.B*9,.35,1.25),G=.35;this.heaveV+=(-(this.heave-Y)*$*$-2*G*$*this.heaveV)*t,this.heave+=this.heaveV*t;let K=Math.atan2(H-N,2*U)*.6,at=Math.atan2(j-P,2*E)*.8,vt=ht.clamp(-this.yawRate*h*.012*(2.5/i.gm),-.12,.12),ft=this.roll-K-vt,It=Math.sin(ft)*(1-Math.min((ft/ct)**2,1.5))+(this.gm<.05?-.03*Math.sign(ft||1):0);this.rollV+=(-It*q*q-2*.06*q*this.rollV)*t,this.roll+=this.rollV*t,Math.abs(this.roll+this.list)>ct&&this.founder<=0&&(this.capsized=!0,this.startFounder("capsize"),this.fRoll=Math.sign(this.roll+this.list)),this.founder>0&&this.fRoll&&(this.roll+=(this.fRoll*Math.min(this.founder/6,1)*2.4-this.roll)*(1-Math.exp(-t*.6)),this.rollV=0),this.pitchV+=(-(this.pitchA-at)*Z*Z-2*G*Z*this.pitchV)*t,this.pitchA+=this.pitchV*t,this.floodStep(t,e),this.founder>0&&this.founderStep(t),this.pos.y=this.heave-this.sinkY-this.sinkBase,this.updateQuat()}floodStep(t){let e=0,n=0,i=0,r=this.K.pumps*(this.founder>0?0:1),o=this.meta.T;for(let h of this.comp){let u=0;for(let d of h.holes){let m=-(d.p.y-this.sinkY+Math.sin(this.list)*-d.p.x*.5-Math.sin(this.trim)*d.p.z);m>0&&(u+=.62*d.a*Math.sqrt(2*hc*m)*(this.floodK??1))}h.water=ht.clamp(h.water+(u-(h.water>0?r/10:0))*t,0,h.cap*(this.founder>0?3:1)),e+=h.water,n+=h.water*h.x,i+=h.water*h.f}this.water=e;let a=Math.min(e/this.reserve,1),c=e>1?ht.clamp(-n/e/this.meta.B*.9*a*1.4,-.5,.5):0,l=e>1?ht.clamp(i/e/this.meta.L*.5*a,-.25,.25):0;return this.list+=(c-this.list)*(1-Math.exp(-t*.15)),this.founder<=0&&(this.trim+=(l-this.trim)*(1-Math.exp(-t*.15))),this.founder<=0&&(this.sinkY+=(e/(this.meta.L*this.meta.B*.7)-this.sinkY)*(1-Math.exp(-t*.3))),e>this.reserve*.92&&this.founder<=0&&this.startFounder(),o}startFounder(t){if(this.founder>0)return;this.founder=.001;let e=0,n=0,i=0;for(let r of this.comp)e+=r.water*r.f,n+=r.water*r.x,i+=r.water;this.fEnd=i>0?Math.sign(e||1):Math.random()<.5?1:-1,this.fRoll=Math.abs(this.list)>.18||t==="capsize"?Math.sign(this.list||n||1):0,this.fBreak=t==="magazine"}founderStep(t){this.founder+=t;let e=this.founder,n=this.meta.L,i=this.fBreak?40:{bb:120,bc:110,ca:90,cl:80,dd:60}[this.kind],r=Math.min(e/i,1);this.trim+=((this.fBreak?.05:.18+.3*r*r)*this.fEnd*Math.min(e/20,1)-this.trim)*(1-Math.exp(-t*.2)),this.fRoll&&!this.capsized&&(this.list+=(Math.min(e/i*2.2,1)**2*2.6*this.fRoll-this.list)*(1-Math.exp(-t*.3))),this.sinkY+=t*(.04+.5*r*r)*(n/150),this.sinkY>this.meta.D+Math.abs(Math.sin(this.trim))*n*.5+25&&(this.sunk=!0)}};var Fp=[12.7,15.5,20,25,36,41,46,51,61,80],ho={bb:36,bc:36,ca:20,cl:15.5,dd:12.7,tr:12.7,cv:12.7,wh:51,sp:51},aM={bb:2.4,bc:2,ca:1.6,cl:1.3,dd:.9,tr:1.4,cv:2,wh:2.8,sp:2.8},kp=1.025;function Mr(s,t){return 1e3*(s/36)**2.6*(.55+.45*t)/1.45}function Op(){return 60}function cM(s,t){let e=s.stations,n=e[0],i=e[e.length-1];for(let c=0;c+1<e.length;c++)if(e[c][0]<=t&&e[c+1][0]>=t){n=e[c],i=e[c+1];break}let r=(t-n[0])/Math.max(i[0]-n[0],1e-6),o=n[1][n[1].length-1],a=i[1][i[1].length-1];return{y:o[1]+(a[1]-o[1])*r,hb:o[0]+(a[0]-o[0])*r}}function is(s){let t=s.turrets.map((i,r)=>({id:"s"+r,at:i.at.slice(),home:i.home??(i.at[2]>=0?0:Math.PI),arc:i.arc.slice(),stock:r,r:i.r})),e=s.L;return({bb:[[.43,0],[-.4,0],[.12,1],[-.16,1],[.12,-1],[-.16,-1]],ca:[[.42,0],[-.4,0],[0,1],[0,-1]],dd:[[0,1],[0,-1],[.18,0]],cl:[[.42,0],[-.42,0],[-.12,1],[-.12,-1]],bc:[[.43,0],[-.41,0],[.15,1],[-.2,1],[.15,-1],[-.2,-1]],sp:[[.44,0],[-.42,0],[.16,1],[-.22,1],[.16,-1],[-.22,-1]]}[s.kind]??[]).forEach(([i,r],o)=>{let a=i*e,c=cM(s,a),l=r?r*c.hb*.62:0,h=r?r>0?-Math.PI/2:Math.PI/2:a>=0?0:Math.PI,u=r?1.35:2.5;t.push({id:"x"+o,at:[l,c.y+.2,a],home:h,arc:[h-u,h+u],stock:-1,r:s.B*.18,wing:r})}),t}function Bn(s,t){let e=t.turrets.map((i,r)=>({slot:"s"+r,type:"gun",cal:ho[s],n:i.guns??2,tier:1}));if(s==="dd"||s==="cl")for(let i of is(t))i.wing&&e.push({slot:i.id,type:"torp"});let n={kind:s,mounts:e,aa:{ha:0,mg:0}};return s==="cv"&&(n.air={f:3,t:4,b:3}),n}function ei(s,t){let e=s.kind,n=t.kinds[e].meta,i=is(n),r=[],o=[],a=0,c=0,l=0;for(let b of n.turrets){let E=Mr(ho[e],b.guns??2);l+=E}let h=n.turrets.reduce((b,E)=>b+(E.at[1]+2)*Mr(ho[e],E.guns??2),0)/Math.max(l,1);for(let b of s.mounts){let E=i.find($=>$.id===b.slot);if(!E||b.type==="none")continue;if(b.type==="torp"){o.push({slot:E,at:E.at,side:E.wing||1,home:E.home}),a+=Op(),c+=Op()*E.at[1];continue}let U=E.stock>=0&&b.cal===ho[e]&&(n.turrets[E.stock].guns??2)===b.n,W=b.cal,j=Math.max(1,Math.min(U?4:3,b.n)),P=U?e:W>=28?"bb":W>=15?"ca":"dd",N=U?n.turrets[E.stock]:t.kinds[P].meta.turrets[0],H=U?1:W/ho[P],Y=U?1:j===1?.72:j===2?1:1.42,X=((N.top??N.at[1]+4)-N.at[1]+1.2)*H;for(let $=0;$<Math.max(1,Math.min(3,b.tier??1));$++){let q=[E.at[0],E.at[1]+$*X,E.at[2]];r.push({at:q,home:E.home,arc:E.arc,guns:j,gap:N.gap*H,trunnion:[0,N.trunnion[1]*H,N.trunnion[2]*H],barrel_len:N.barrel_len*H,gun:fu(W),geo:P,scale:H,wide:Y,slot:E.id,tier:$});let Z=Mr(W,j);a+=Z,c+=Z*(q[1]+2*H)}}let u={ha:s.aa?.ha??0,mg:s.aa?.mg??0},d=u.ha*30+u.mg*6;a+=d,c+=u.ha*30*(n.deck_top+5)+u.mg*6*(n.deck_top+3);let f=n.L*n.B*n.T*.58*kp,m=a-l,v=f+m,g=.62*n.D-n.T,p=c-h*l,y=g+(p-m*g)/v,x=m/(n.L*n.B*.7*kp),M=e==="cv"?{f:3,t:4,b:3,...s.air??{}}:null,T=aM[e]-.5*(y-g)+.1*x-(M?.04*(M.f+M.t+M.b):0),R=Math.max(.3,(f/v)**.33),C=r.reduce((b,E)=>b+Ee[E.gun].m*E.guns,0)/1e3,D=n.D-n.T-x;return{kind:e,mounts:r,torps:o,disp:v,dW:m,gm:T,sink:x,speedK:R,broadside:C,freeboard:D,aa:u,air:M,ok:T>.05&&D>.3}}var vi={speed:24.7,run:6e3,depth:3,dmg:70,hole:14},zp=320,lM=new pe,Bp=new _,hM=new _,Hp=new mt,dc=class{constructor(t){this.fx=t,this.list=[],this.events=[];let e=new Sn(1,1).rotateX(-Math.PI/2).translate(0,0,-.5),n=new ge({transparent:!0,depthWrite:!1,uniforms:{uLen:{value:zp}},vertexShader:`
        attribute vec2 aT; varying vec2 vUv; varying vec2 vT;
        void main(){ vUv = uv; vT = aT; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,fragmentShader:`
        varying vec2 vUv; varying vec2 vT;
        float h(float x){ return fract(sin(x * 91.7) * 4375.5); }
        void main(){
          float along = 1.0 - vUv.y;                 // 1 at the head, 0 at the tail
          float across = abs(vUv.x - 0.5) * 2.0;
          float lace = 0.6 + 0.4 * h(floor(along * 140.0) + vT.y * 13.0);
          float a = smoothstep(1.0, 0.2, across) * pow(along, 1.6) * lace * vT.x;
          gl_FragColor = vec4(vec3(0.85, 0.9, 0.9), a * 0.75);
        }`});this.mesh=new an(e,n,256),this.attr=new mn(new Float32Array(256*2),2),this.mesh.geometry.setAttribute("aT",this.attr),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=5}launch(t,e,n,i){let r=new _(n.x,0,n.z).normalize();this.list.push({from:t,p:new _(e.x,-vi.depth,e.z),p0:new _(e.x,0,e.z),d:r,run:0,max:t.oxy?vi.run*2:vi.run,t0:i,alive:!0,fade:1,seed:Math.random()}),this.fx.spawn(7,e.x,1,e.z,r.x*4,2,r.z*4,3,2,{grow:2,drag:1,buoy:-2,alpha:.6}),this.events.push({kind:"launch",type:"torp",at:e.clone(),from:t})}update(t,e,n){for(let o of this.list){if(!o.alive){o.fade-=t/20;continue}let a=vi.speed*t,c=Bp.copy(o.p);if(o.p.addScaledVector(o.d,a),o.run+=a,o.run>o.max){o.alive=!1;continue}for(let l of n){if(l===o.from||l.gone||l.body.sunk||o.run<60)continue;let h=l.body,u=l.meta.L*.55;if((h.pos.x-o.p.x)**2+(h.pos.z-o.p.z)**2>u*u)continue;let d=hM.copy(o.p).sub(h.pos).applyQuaternion(lM.copy(h.quat).invert()),f=l.meta.L,m=l.meta.B,v=Math.abs(d.z)/(f/2);if(v<1&&Math.abs(d.x)<m/2*Math.sqrt(Math.max(0,1-v**2.4))&&d.y>-l.meta.T-1){o.alive=!1;let g=new _(o.p.x,0,o.p.z);this.events.push({kind:"torphit",type:"torp",ship:l,local:d.clone(),world:g,from:o.from});break}}Math.random()<t*8&&this.fx.spawn(7,o.p.x,.3,o.p.z,Math.random()-.5,.6,Math.random()-.5,1.2,3,{grow:.8,drag:1.5,buoy:-.5,alpha:.5})}this.list=this.list.filter(o=>o.alive||o.fade>0);let i=0;for(let o of this.list){let a=Math.min(o.run,zp);if(a<1)continue;let c=Math.atan2(o.d.x,o.d.z);if(Hp.makeRotationY(c).scale(Bp.set(7,1,a)).setPosition(o.p.x,.15,o.p.z),this.mesh.setMatrixAt(i,Hp),this.attr.setXY(i,Math.max(o.fade,0),o.seed),++i>=256)break}this.mesh.count=i,this.mesh.instanceMatrix.needsUpdate=!0,this.attr.needsUpdate=!0;let r=this.events;return this.events=[],r}};var fo=5,Vp=8,Gp={f:{speed:125,alt:450},t:{speed:85,alt:160},b:{speed:95,alt:800}},po={dd:[0,2],cl:[2,4],ca:[4,6],bc:[6,8],bb:[8,10],cv:[8,12],wh:[16,24],sp:[16,24],tr:[0,2]},jp={dd:4,cl:8,ca:10,bc:14,bb:18,cv:18,sp:24,wh:0,tr:0},vu=10,uM=6e3,dM=1500,Wp=.0055,fM=.011,pM=16e3,uo=3,$p=13,Xp=1.6,Yp=40,qp=2.4,Ui=new _,mu=new _,fc=new mt,pc=new pe,Kp=new Yi,gu=new _,oe=()=>Math.random();function mM(){let s=[new cn(.55,.35,9,8).rotateX(Math.PI/2),new ti(12,.22,2.2).translate(0,-.2,.8),new ti(4.2,.16,1.2).translate(0,.1,-3.8),new ti(.16,1.7,1.3).translate(0,.85,-3.9),new cn(.62,.62,.5,10).rotateX(Math.PI/2).translate(0,0,4.6)],t=[],e=[],n=[],i=0;for(let o of s){let a=o.toNonIndexed();a.computeVertexNormals();let c=a.attributes.position.array,l=a.attributes.normal.array;for(let h=0;h<c.length;h++)t.push(c[h]*2),e.push(l[h]);for(let h=0;h<c.length/3;h++)n.push(i+h);i+=c.length/3}let r=new me;return r.setAttribute("position",new jt(t,3)),r.setAttribute("normal",new jt(e,3)),r.setIndex(n),r}var mc=class{constructor({battle:t,fx:e,torps:n,patch:i}){this.b=t,this.fx=e,this.torps=n,this.sq=[],this.falling=[],this.group=new de,this.patch=i;let r=mM();this.mesh={};for(let[o,a]of[["A",2369579],["E",10199718]]){let c=new $e({color:a,roughness:.55,metalness:.35});i?.(c);for(let l of["f","t","b"]){let h=new an(r,c,120);h.count=0,h.frustumCulled=!1,this.mesh[o+l]=h,this.group.add(h)}}this.scale=1,this.prop=null,this.labels=new Map,this.events=[]}async load(t,e=8){let n;try{let v=await fetch(`${t}planes.json`);if(!v.ok)return;n=await v.json()}catch{return}let i=new mi,r=async(v,g)=>{let p=await i.loadAsync(t+v);return p.flipY=!1,p.colorSpace=g?ee:Ve,p.anisotropy=e,p},[o,a,c,l]=await Promise.all([r("planes_base.webp",!0),r("planes_base_e.webp",!0),r("planes_orm.webp",!1),new es().loadAsync(t+"planes.glb")]),h=v=>{let g=null;return l.scene.traverse(p=>{!g&&p.name===v&&p.geometry&&(g=p.geometry)}),g||l.scene.traverse(p=>{!g&&p.geometry&&p.parent?.name===v&&(g=p.geometry)}),g},u={f:"fighter",t:"attack",b:"bomber"},d=1.8;for(let[v,g]of[["A",o],["E",a]]){let p=new $e({map:g,aoMap:c,roughnessMap:c,metalnessMap:c,roughness:1,metalness:1,envMapIntensity:.7});this.patch?.(p);for(let y of["f","t","b"]){let x=h(u[y]);if(!x)continue;let M=this.mesh[v+y],T=new an(x.clone().scale(d,d,d),p,120);T.count=0,T.frustumCulled=!1,this.group.remove(M),this.group.add(T),this.mesh[v+y]=T}}let f=new ur(1,24),m=new We({color:2763306,transparent:!0,opacity:.14,depthWrite:!1,side:qe});return this.prop=new an(f,m,260),this.prop.count=0,this.prop.frustumCulled=!1,this.group.add(this.prop),this.meta={f:n.fighter,t:n.attack,b:n.bomber},this.S=d,this.meshes()}meshes(){return Object.values(this.mesh)}reset(){this.sq.length=0,this.falling.length=0;for(let t of this.labels.values())t.remove();this.labels.clear()}airborne(t){return this.sq.filter(e=>e.n>0&&(!t||e.side===t)).length}launchStep(t,e){let n=t.wing;if(!n||!t.alive||(n.cool-=e,n.deck=Math.max(0,n.deck-e),n.cool>0||n.deck>0||t.body.founder>0)||this.airborne()>=Vp||this.airborne(t.side)>=Vp/2)return;let i=this.b.ships.filter(c=>c.side!==t.side&&c.alive);if(this.sq.some(c=>c.side!==t.side&&c.n>0&&c.kind!=="f")&&n.planes.f>=2&&!this.sq.some(c=>c.side===t.side&&c.kind==="f"&&c.job==="cap"))return this.launch(t,"f",{job:"cap"});let o=t.focus?.alive?t.focus:null;if(!o){let c=-1;for(let l of i){let h=l.body.pos.distanceTo(t.body.pos);if(h>pM)continue;let u=({wh:9,sp:9,cv:8,bb:7,bc:6,tr:3.5,ca:4,cl:3,dd:2}[l.kind]??3)-h/8e3;u>c&&(c=u,o=l)}}if(!o)return;n.turn=(n.turn??0)+1;let a=n.turn%3===0?["f","t","b"]:n.turn%2?["t","b","f"]:["b","t","f"];for(let c of a)if(!(n.planes[c]<2)){if(c==="f"){let l=this.sq.filter(h=>h.side===t.side&&h.kind!=="f"&&h.job==="strike"&&h.n>0).pop();if(!l)continue;return this.launch(t,"f",{job:"escort",escort:l,target:o})}return this.launch(t,c,{job:"strike",target:o})}}launch(t,e,n){let i=t.wing,r=Math.min(fo,i.planes[e]);i.planes[e]-=r,i.cool=9+oe()*3;let o={y:t.meta.deck_top+8.7+1.7,z0:-t.meta.L*.3},a=t.body.toWorld(Ui.set(0,o.y,o.z0),new _),c={side:t.side,kind:e,n:r,n0:r,home:t,pos:a,yaw:t.body.yaw,pitch:0,alt:a.y,speed:t.body.speed,job:n.job,target:n.target??null,escort:n.escort??null,state:"up",t:0,dmg:0,id:Math.random(),deck:o,trail:[]};this.sq.push(c),this.events.push({kind:"launch",side:t.side,plane:e})}update(t,e){this.events.length>200&&this.events.splice(0,this.events.length-100);for(let n of this.b.ships)n.wing&&this.launchStep(n,t);for(let n of this.sq)this.fly(n,t,e);this.aaStep(t),this.dogfights(t);for(let n of this.sq)if(n.n>0&&n.dmg>=1)for(;n.dmg>=1&&n.n>0;)n.dmg-=1,n.n--,this.shotDown(n);this.sq=this.sq.filter(n=>n.n>0&&n.state!=="landed");for(let n of this.falling)n.t+=t,n.vel.y-=9.81*t,n.pos.addScaledVector(n.vel,t),n.rot+=t*2.5,oe()<t*25&&this.fx.spawn(wt.SOOT,n.pos.x,n.pos.y,n.pos.z,0,1,0,3+oe()*2,5,{grow:1.5,drag:1,buoy:.2,alpha:.6});for(let n of this.falling)n.pos.y<=0&&!n.splashed&&(n.splashed=!0,this.fx.column(new _(n.pos.x,0,n.pos.z),.1));this.falling=this.falling.filter(n=>n.pos.y>-5)}shotDown(t){let e=this.placeOf(t,t.n,new _),n=e.yaw+(oe()-.5)*.25,i=e.pos.clone().add(Ui.set((oe()-.5)*.4,(oe()-.5)*.4,(oe()-.5)*.4)),r=t.speed*.85;this.falling.push({side:t.side,kind:t.kind,pos:i,vel:new _(Math.sin(n)*Math.cos(e.pitch)*r,Math.sin(e.pitch)*r-4,Math.cos(n)*Math.cos(e.pitch)*r),yaw:n,pitch0:e.pitch,bank0:e.bank,rot:0,t:0}),this.fx.spawn(wt.FLASH,i.x,i.y,i.z,0,0,0,10,.1),this.events.push({kind:"downed",side:t.side,plane:t.kind,at:i.clone()})}rollPos(t,e,n){let i=t.home.body,r=t.home.meta.L,o=ht.clamp(e,0,45/18);return i.toWorld(Ui.set(0,t.home.meta.deck_top+8.7+1.7,-r*.3+45*o-9*o*o),n)}placeOf(t,e,n){if(t.ltrail){let v=t.lt-e*qp,g=t.home.body;if(t.td!==void 0&&v>=t.td)return this.rollPos(t,v-t.td,n),{pos:n,yaw:g.yaw,pitch:0,bank:0,parked:v-t.td>2.6,gone:v-t.td>3.4};let p=Math.ceil(e/2),y=e%2?1:-1,x=Math.cos(t.yaw),M=Math.sin(t.yaw),T=e?y*p*34:0,R=-p*30;if(n.set(t.pos.x+T*x+R*M,t.pos.y-p*4,t.pos.z-T*M+R*x),v<=0)return{pos:n,yaw:t.yaw,pitch:t.pitch,bank:t.bank??0};let C=t.ltrail[Math.min(t.ltrail.length-1,Math.round(v*60))],D=ht.smoothstep(v,0,6);return n.lerp(C.p,D),{pos:n,yaw:t.yaw+(C.yaw-t.yaw)*D,pitch:t.pitch+(C.pitch-t.pitch)*D,bank:(t.bank??0)*(1-D)+C.bank*D}}let i=Math.ceil(e/2),r=e%2?1:-1,o=e?r*i*34:0,a=-i*30,c=Math.cos(t.yaw),l=Math.sin(t.yaw);n.set(t.pos.x+o*c+a*l,t.pos.y-i*4+Math.sin(t.t*1.3+e)*2,t.pos.z-o*l+a*c);let h=t.t-e*Xp,u=t.trail?ht.smoothstep(h,uo+6,uo+14):1,d=t.yaw,f=t.pitch,m=t.bank??0;if(u<1){let v=new _,g=t.yaw,p=t.pitch,y=t.bank??0;if(h<uo)this.deckPos(t,h,v),g=t.home.body.yaw,p=0,y=0;else{let x=t.trail[Math.min(t.trail.length-1,Math.max(0,Math.round(h*60)))];x?(v.copy(x.p),g=x.yaw,p=x.pitch,y=x.bank):v.copy(n)}n.copy(v.lerp(n,u)),d=g+(d-g)*u,f=p+(f-p)*u,m=y*(1-u)+m*u}return{pos:n,yaw:d,pitch:f,bank:m,parked:h<0}}steer(t,e,n,i,r,o=Gp[t.kind].speed*(t.side==="A"&&t.kind==="t"&&this.b.airTech?.t2?1.18:1)){let a=Math.atan2(e-t.pos.x,n-t.pos.z),c=ht.euclideanModulo(a-t.yaw+Math.PI,Math.PI*2)-Math.PI;t.yaw+=ht.clamp(c,-.35*r,.35*r),t.speed+=(o-t.speed)*Math.min(r*.5,1);let l=ht.clamp(i-t.pos.y,-t.speed*.35,t.speed*.25);return t.pitch=Math.atan2(l,t.speed),t.pos.x+=Math.sin(t.yaw)*t.speed*r,t.pos.z+=Math.cos(t.yaw)*t.speed*r,t.pos.y+=l*r,t.bank=ht.clamp(-c*1.2,-.7,.7),Math.hypot(e-t.pos.x,n-t.pos.z)}fly(t,e,n){t.t+=e;let i=Gp[t.kind],r=t.home;if(t.trail&&t.t<Yp&&t.trail.push({p:t.pos.clone(),yaw:t.yaw,pitch:t.pitch,bank:t.bank??0}),t.state==="up"){if(t.t<uo){this.deckPos(t,t.t,t.pos),t.yaw=r.body.yaw,t.pitch=0,t.speed=r.body.speed+$p*t.t;return}t.speed=Math.min(t.speed+e*6,i.speed),t.pitch=Math.min(t.pitch+e*.12,.16),t.pos.x+=Math.sin(t.yaw)*Math.cos(t.pitch)*t.speed*e,t.pos.z+=Math.cos(t.yaw)*Math.cos(t.pitch)*t.speed*e,t.pos.y+=Math.sin(t.pitch)*t.speed*e,t.t>uo+6&&(t.state=t.job==="cap"?"cap":"out",t.pitch=.05);return}if(t.state==="home"){if(!r.alive||r.body.founder>0){t.ditch=(t.ditch??0)+e,t.ditch>60&&(t.n=0),this.steer(t,r.body.pos.x,r.body.pos.z,120,e);return}this.steer(t,r.body.pos.x,r.body.pos.z,120,e)<2600&&(t.state="approach",t.lt=0,t.ltrail=[]);return}if(t.state==="approach"||t.state==="final"||t.state==="deck"){if(!r.alive||r.body.founder>0){t.state="home",t.ltrail=null;return}t.lt+=e,t.ltrail.length<4e3&&t.ltrail.push({p:t.pos.clone(),yaw:t.yaw,pitch:t.pitch,bank:t.bank??0});let h=r.body,u=r.meta.L,d=r.meta.deck_top+8.7+1.7;if(t.state==="approach"){let f=h.toWorld(Ui.set(0,0,-u/2-750),new _);this.steer(t,f.x,f.z,90,e,75)<160&&(t.state="final");return}if(t.state==="final"){let f=h.toWorld(Ui.set(0,d,-u*.3),new _),m=h.toLocal(t.pos.clone(),new _),v=h.toWorld(Ui.set(0,d,Math.min(m.z+260,-u*.3)),new _),g=Math.atan2(v.x-t.pos.x,v.z-t.pos.z),p=ht.euclideanModulo(g-t.yaw+Math.PI,Math.PI*2)-Math.PI;t.yaw+=ht.clamp(p,-.4*e,.4*e),t.bank=ht.clamp(-p*1.2,-.5,.5),t.speed+=(Math.max(h.speed,0)+40-t.speed)*Math.min(e,1);let y=Math.max(-u*.3-m.z,0),x=d+Math.min(y/700,1)*80,M=ht.clamp(x-t.pos.y,-12,6);t.pitch=Math.atan2(M,t.speed)+.06,t.pos.x+=Math.sin(t.yaw)*t.speed*e,t.pos.z+=Math.cos(t.yaw)*t.speed*e,t.pos.y+=M*e,m.z>=-u*.3-4&&Math.abs(m.x)<14?(t.state="deck",t.td=t.lt,this.events.push({kind:"touchdown",side:t.side,at:f})):m.z>-u*.3+30&&(t.state="approach");return}this.rollPos(t,t.lt-t.td,t.pos),t.yaw=h.yaw,t.pitch=0,t.bank=0,t.lt>t.td+(t.n-1)*qp+3.5&&(r.wing.planes[t.kind]+=t.n,t.state="landed",this.events.push({kind:"landed",side:t.side}));return}if(t.state==="cap"){let h=(this.b.ships.find(d=>d.side===t.side&&d.flagship&&d.alive)??r).body.pos,u=this.nearestFoe(t,8e3,h);if(u)t.chase=u,this.steer(t,u.pos.x,u.pos.z,u.pos.y,e,i.speed*1.15);else{let d=n*.08+t.id*6;this.steer(t,h.x+Math.sin(d)*1500,h.z+Math.cos(d)*1500,i.alt,e)}t.t>240&&(t.state="home");return}if(t.job==="escort"){let h=t.escort,u=this.nearestFoe(t,3500,t.pos);if(u){this.steer(t,u.pos.x,u.pos.z,u.pos.y,e,i.speed*1.15);return}if(!h||h.n<=0||h.state==="home"||h.state==="landed"){t.state="home";return}this.steer(t,h.pos.x-Math.sin(h.yaw)*200+150,h.pos.z-Math.cos(h.yaw)*200,h.pos.y+150,e,Math.max(h.speed,80));return}let o=t.target;if(!o?.alive){let h=this.b.ships.filter(u=>u.side!==t.side&&u.alive).sort((u,d)=>u.body.pos.distanceTo(t.pos)-d.body.pos.distanceTo(t.pos))[0];if(h&&h.body.pos.distanceTo(t.pos)<9e3)t.target=h;else{t.state="home";return}return}let a=o.body.pos,c=o.body.vel,l=Math.hypot(a.x-t.pos.x,a.z-t.pos.z);if(t.kind==="t"){let h=Math.min(l/i.speed,40)+40.48582995951417,u=a.x+c.x*h*.6,d=a.z+c.z*h*.6,f=l<5e3?30:i.alt;this.steer(t,u,d,f,e),l<1100&&t.pos.y<60&&this.dropTorpedoes(t,o,n)}else if(t.state!=="dive"&&l<1300&&(t.state="dive"),t.state==="dive"){let u=a.x+c.x*4,d=a.z+c.z*4;t.yaw+=ht.clamp(ht.euclideanModulo(Math.atan2(u-t.pos.x,d-t.pos.z)-t.yaw+Math.PI,Math.PI*2)-Math.PI,-e,e),t.speed=Math.min(t.speed+e*25,150);let f=Math.hypot(u-t.pos.x,d-t.pos.z),m=Math.atan2(t.pos.y-250,Math.max(f,1));t.pitch=-Math.min(m,1.25),t.pos.x+=Math.sin(t.yaw)*Math.cos(t.pitch)*t.speed*e,t.pos.z+=Math.cos(t.yaw)*Math.cos(t.pitch)*t.speed*e,t.pos.y+=Math.sin(t.pitch)*t.speed*e,(t.pos.y<=260||f<60)&&this.dropBombs(t,o)}else this.steer(t,a.x,a.z,i.alt,e)}deckPos(t,e,n){let i=t.home.body,r=t.deck,o=e<0?r.z0-13*Math.ceil(-e/Xp):r.z0+.5*$p*e*e;return i.toWorld(Ui.set(0,r.y,o),n)}nearestFoe(t,e,n){let i=null,r=e;for(let o of this.sq){if(o.side===t.side||o.n<=0||o.state==="up")continue;let a=o.pos.distanceTo(n);a<r&&(r=a,i=o)}return i}dropTorpedoes(t,e,n){let i=e.body.pos,r=e.body.vel,o=i.x,a=i.z;for(let l=0;l<4;l++){let h=Math.hypot(o-t.pos.x,a-t.pos.z)/24.7;o=i.x+r.x*h,a=i.z+r.z*h}let c=Math.atan2(o-t.pos.x,a-t.pos.z);for(let l=0;l<t.n;l++){let h=(l-(t.n-1)/2)*40,u=new _(t.pos.x+Math.cos(t.yaw)*h,0,t.pos.z-Math.sin(t.yaw)*h),d=c+(l-(t.n-1)/2)*.03;this.torps.launch(t.home,u,new _(Math.sin(d),0,Math.cos(d)),n),this.fx.spawn(wt.SPRAY,u.x,1,u.z,0,6,0,2,1.2)}this.events.push({kind:"drop",side:t.side,plane:"t",at:t.pos.clone()}),t.state="home"}dropBombs(t,e){let n=Math.min(Math.max(e.body.speed,0)/18,1)*.35+Math.min(Math.abs(e.body.yawRate)*12,.2),i=(t.side==="A"&&this.b.airTech?.b2?.48:.36)*(1-n),r=0;for(let o=0;o<t.n;o++)if(oe()<i)r++;else{let a=oe()*6.283,c=25+oe()*60;this.fx.column(new _(e.body.pos.x+Math.sin(a)*(e.meta.B/2+c),0,e.body.pos.z+Math.cos(a)*(e.meta.B/2+c)),.14)}for(let o=0;o<r;o++)this.b.bombHit(e,t.home);this.events.push({kind:"drop",side:t.side,plane:"b",at:t.pos.clone(),hits:r}),t.state="home",t.pitch=.5}aaStep(t){for(let e of this.b.ships){if(!e.alive||!e.aa)continue;let n=e.aa.k*(.5+.5*Math.max(e.hp,0)/e.hpMax),i=e.body.pos;for(let r of this.sq){if(r.side===e.side||r.n<=0||r.state==="up"||r.state==="deck")continue;let o=Math.hypot(r.pos.x-i.x,r.pos.z-i.z);if(o>uM)continue;let a=r.pos.y,c=a>200?e.aa.ha*Wp:e.aa.ha*Wp*.4,l=o<dM&&a<1e3?e.aa.mg*fM*(r.state==="dive"||r.kind==="t"?1.3:1):0;if(r.dmg+=(c+l)*n*(r.side==="A"&&r.kind==="t"&&this.b.airTech?.t2?.75:1)*t,e.aa.ha&&oe()<Math.min(e.aa.ha*.35,5)*Math.min(n*1.6,1)*t&&this.fx.spawn(wt.SOOT,r.pos.x+(oe()-.5)*220,r.pos.y+(oe()-.3)*120,r.pos.z+(oe()-.5)*220,0,.5,0,9+oe()*6,7+oe()*4,{grow:1.6,drag:1,buoy:0,alpha:.85})>=0&&this.flak(r),l&&oe()<Math.min(e.aa.mg*.8,10)*t){let h=e.body.toWorld(Ui.set((oe()-.5)*e.meta.B*.7,e.meta.deck_top+4,(oe()-.5)*e.meta.L*.5),mu),u=gu.copy(r.pos).add(Ui.set((oe()-.5)*60,(oe()-.5)*40,(oe()-.5)*60)).sub(h),d=u.length();u.multiplyScalar(800/d),this.fx.spawn(wt.EMBER,h.x,h.y,h.z,u.x,u.y,u.z,.9,d/800,{drag:0}),oe()<.3&&this.events.push({kind:"aa",at:h.clone()})}}}}flak(t){oe()<.5&&this.fx.spawn(wt.FLASH,t.pos.x+(oe()-.5)*200,t.pos.y+(oe()-.3)*100,t.pos.z+(oe()-.5)*200,0,0,0,7,.07),this.events.push({kind:"flak",at:t.pos.clone()})}dogfights(t){for(let e of this.sq)if(!(e.kind!=="f"||e.n<=0||e.state==="up"))for(let n of this.sq){if(n.side===e.side||n.n<=0||n.state==="up"||e.pos.distanceTo(n.pos)>1200)continue;let i=e.side==="A"&&this.b.airTech?.f2?1.4:1,r=n.side==="A"&&this.b.airTech?.f2?1.4:1;n.dmg+=e.n*(n.kind==="f"?.045:.1)*i*t;for(let o of[e,n]){let a=Math.sin(o.t*1.7+o.id*9)*.5;o.yaw+=a*t,o.bank=ht.clamp(-a*1.6,-.9,.9)}if(e.dmg+=n.n*(n.kind==="f"?.045:.008)*r*t,oe()<t*6){let o=n.pos;this.fx.spawn(wt.EMBER,e.pos.x,e.pos.y,e.pos.z,(o.x-e.pos.x)*2,(o.y-e.pos.y)*2,(o.z-e.pos.z)*2,.8,.5,{drag:0}),this.events.push({kind:"mg",at:e.pos.clone()})}}}draw(){let t={},e=0,n=(r,o,a,c,l,h,u=!0)=>{let d=r+o,f=this.mesh[d];if(t[d]??=0,!(t[d]>=120)&&(Kp.set(-l,c,h,"YXZ"),pc.setFromEuler(Kp),fc.compose(a,pc,gu.set(1,1,1)),f.setMatrixAt(t[d]++,fc),this.prop&&u&&e<260)){let m=this.meta[o],v=m.propR*this.S;mu.set(m.prop[0],m.prop[1],m.prop[2]).multiplyScalar(this.S).applyQuaternion(pc).add(a),fc.compose(mu,pc,gu.set(v,v,v)),this.prop.setMatrixAt(e++,fc)}},i=new _;for(let r of this.sq){for(let o=0;o<r.n;o++){let a=this.placeOf(r,o,i);a.gone||n(r.side,r.kind,a.pos,a.yaw,a.pitch,a.bank,!a.parked)}r.trail&&r.t>Yp&&(r.trail=null)}for(let r of this.falling)n(r.side,r.kind??"f",r.pos,r.yaw,(r.pitch0??0)+((r.pitch0??0)-.7-(r.pitch0??0))*Math.min(r.t/2.5,1),(r.bank0??0)+r.rot,!1);for(let[r,o]of Object.entries(this.mesh))o.count=t[r]??0,o.instanceMatrix.needsUpdate=!0;this.prop&&(this.prop.count=e,this.prop.instanceMatrix.needsUpdate=!0)}overlay(t,e,n){let i=new Set;for(let r of this.sq){i.add(r);let o=this.labels.get(r);o||(o=document.createElement("div"),o.className="sqd "+(r.side==="A"?"own":"foe"),e.appendChild(o),this.labels.set(r,o));let[a,c,l]=t(r.pos);if(l>1){o.style.display="none";continue}o.style.display="block",o.style.transform=`translate(${(a+14).toFixed(0)}px, ${(c-22).toFixed(0)}px)`,o.textContent=`${n[r.kind]} ${r.n}`}for(let[r,o]of this.labels)i.has(r)||(o.remove(),this.labels.delete(r))}};var xu=()=>new _,gM={bb:260,bc:200,ca:95,cl:70,dd:30,tr:90,cv:170,sp:520,wh:700},vM={bb:64e3,bc:42e3,ca:13e3,cl:8500,dd:2400,tr:1e4,cv:38e3,sp:12e4,wh:12e4},xM={ca:2,bc:1.6,cv:1.5,wh:1},je=s=>ht.euclideanModulo(s+Math.PI,Math.PI*2)-Math.PI,ni=()=>{let s=0;for(let t=0;t<4;t++)s+=Math.random();return(s-2)*1.73},yM=1,gc=class{constructor({art:t,sea:e,artillery:n,fx:i,torpedoes:r}){this.art=t,this.sea=e,this.arty=n,this.fx=i,this.torp=r,this.ships=[],this.log=[],this.events=[],this.wave=0,this.waveT=0,this.score=0,this.sunkN=0,this.auto=!1,this.waves=!0,this.fog=0,this.stage=null,this.sunkList=[]}reset(){this.ships.length=0,this.log.length=0,this.events.length=0,this.sunkList.length=0,this.wave=0,this.waveT=0,this.score=0,this.sunkN=0,this.stage=null,this.fog=0,this.arty.shells.length=0,this.torp&&(this.torp.list.length=0),this.fx.clear?.(),this.air?.reset()}add(t,e,n,i,r,o=0,a={}){let c=this.art.kinds[t],l=c.meta,h=new uc(l,this.sea);h.place(n,i,r,o),h.ctl.tele=o>0?e==="A"?2:4:1;let u=(l.boxes??[]).map(p=>({min:new _(...p.min),max:new _(...p.max),part:p.part})),d=ei(a.design??Bn(t,l),this.art);a.design&&h.applyFit(d);let f=a.mods??{};f.speedK&&(h.vmax*=f.speedK),f.gm&&(h.gm+=f.gm),f.flood&&(h.floodK=f.flood);let m=d.mounts.map(p=>{let y=p.home,x=Math.min((p.arc[1]-p.arc[0])/2,Math.PI*5/6);p=Object.assign({},p,{arc:[y-x,y+x]});let M=Ee[p.gun];return{meta:p,g:M,yaw:y,rest:y,yawV:0,elev:0,elevV:0,reload:Math.random()*M.reload,recoil:new Array(p.guns??2).fill(0),broken:!1,ready:!1,onTarget:!1}});for(let p of d.mounts)if(p.slot[0]==="x"||p.tier>0){let y=4*p.scale*p.wide,x=5*p.scale;u.push({min:new _(p.at[0]-y,p.at[1],p.at[2]-y),max:new _(p.at[0]+y,p.at[1]+x,p.at[2]+y),part:"turret"})}let v=gM[t]*(e==="A"&&!a.escort?1.8:1)*(f.hpK??1)*(a.boss?xM[t]??1.5:1),g={id:yM++,kind:t,side:e,meta:l,body:h,boxes:u,turrets:m,fit:d,torps:d.torps.map(p=>({meta:p,reload:Math.random()*20})),maxRange:Math.max(...m.map(p=>p.g.range),1e3),hp:v*(a.hpFrac??1),hpMax:v,burn:[0,0,0],fires:[0,0,0],alive:!0,gone:!1,target:null,focus:null,order:null,slot:null,fc:new Map,player:e==="A"&&!a.escort,flagship:!!a.flagship,group:a.group??0,born:this.t??0,sel:!1,opts:a,uid:a.uid??0,name:a.name??"",boss:!!a.boss,escort:!!a.escort,kills:0,aa:{ha:(f.aaStock?.[0]??po[t]?.[0]??0)+(d.aa?.ha??0),mg:(f.aaStock?.[1]??po[t]?.[1]??0)+(d.aa?.mg??0),k:f.aa??1},wing:t==="cv"?{planes:a.planes?{...a.planes}:{f:(d.air?.f??3)*fo,t:(d.air?.t??4)*fo,b:(d.air?.b??3)*fo},cool:15+Math.random()*10,deck:0,turn:0,hits:0}:null,reloadK:f.reloadK??1,level:f.level??0,armor:(lo[t]?.armor??0)+(f.armor??0),fcStart:f.fcStart??1,fcMin:f.fcMin??(e==="A"?.14:.3),torpK:f.torpK??1,oxy:!!f.oxy};return this.ships.push(g),g}refit(t,e){let n=this.ships.indexOf(t);if(n<0)return t;this.ships.splice(n,1);let i=t.body,r=this.add(t.kind,t.side,i.pos.x,i.pos.z,i.yaw,Math.max(i.speed,0),{...t.opts,design:e,flagship:t.flagship,group:t.group,hpFrac:Math.max(t.hp,0)/t.hpMax});this.ships.pop(),this.ships.splice(n,0,r),r.station=t.station,r.sel=t.sel,r.order=t.order,r.design=e,r.label=t.label;let o=new Set(t.turrets.map(a=>`${a.meta.slot}/${a.meta.tier}/${a.meta.gun}/${a.meta.guns}`));return r.turrets.forEach((a,c)=>{o.has(`${a.meta.slot}/${a.meta.tier}/${a.meta.gun}/${a.meta.guns}`)||(a.drop=1+c*0)}),r.body.ctl.tele=i.ctl.tele,r}dockStep(t,e,n){for(let i of n)i.kind==="hit"&&this.hit(i);for(let i of this.ships)if(!i.gone){if(i.body.sunk){i.gone=!0;continue}i.alive&&i.body.founder>0&&(i.alive=!1,this.log.push({kind:"capsize",ship:i})),i.testAim&&this.turretStep(i,t,e),this.burnStep(i,t)}}enemiesOf(t){return this.ships.filter(e=>e.side!==t.side&&e.alive)}flagship(){return this.ships.find(t=>t.flagship&&t.side==="A")}update(t,e,n){this.t=e;for(let i of n)i.kind==="hit"?this.hit(i):i.kind==="torphit"&&this.torpHit(i);for(let i of this.ships)if(!i.gone){if(i.body.sunk){i.gone=!0;continue}if(i.alive&&i.body.founder>0&&(i.alive=!1,this.log.push({kind:"capsize",ship:i}),this.events.push({kind:"capsize",type:i.kind,world:i.body.pos.clone()})),!i.alive){this.burnStep(i,t);continue}if(this.torpStep(i,t,e),this.evadeStep(i,e),this.pickTarget(i),i.noSteer)i.body.ctl.rudder=0;else if(i.escort){let r=this.flagship();i.evade?this.steerTo(i,i.evade.hd,4):i.station&&r?.alive?this.keepStation(i,r):this.steerTo(i,i.course??i.body.yaw,3),this.avoid(i,t)}else i.player&&!this.auto?this.steerPlayer(i,t):this.steerAI(i,t),this.avoid(i,t);this.turretStep(i,t,e),this.burnStep(i,t)}this.air?.update(t,e),this.stage?this.stageStep(t):this.waves&&this.waveStep(t)}pickTarget(t){let e={range:this.fog?Math.min(t.maxRange,this.fog):t.maxRange};if(t.focus&&!t.focus.alive&&(t.focus=null),t.focus){t.target=t.focus;return}let n=null,i=e.range*1.02;for(let r of this.ships){if(r.side===t.side||!r.alive)continue;let o=r.body.pos.distanceTo(t.body.pos),a=(r===t.target?.8:1)*(r.escort?.88:1);o*a<i&&(i=o*a,n=r)}t.target=n}turretStep(t,e,n){let i=t.body,r=t.target,o=r?t.fc.get(r.id):null;r&&!o&&(o={err:t.fcStart,r:ni(),a:ni(),turn:r.body.yawRate},t.fc.set(r.id,o)),o&&Math.abs(r.body.yawRate-o.turn)>.01&&(o.err=Math.min(o.err+.3,1),o.turn=r.body.yawRate);let a=xu(),c=xu();for(let l of t.turrets){let h=l.g,u=l.lockOn?.alive?l.lockOn:t.target,d=u?t.fc.get(u.id)??o:null;for(let T=0;T<l.recoil.length;T++)l.recoil[T]>0&&(l.recoil[T]+=e,l.recoil[T]>1.6&&(l.recoil[T]=0));if(l.broken){l.elev=Math.max(l.elev-e*.01,-.04),l.gunElev&&l.gunElev.fill(l.elev);continue}l.reload=Math.max(0,l.reload-e);let f=l.rest,m=0,v=null;if(i.toWorld(c.set(...l.meta.at),a),t.testAim){let T=je(t.testAim.brg-l.rest),R=je(l.meta.arc[0]-l.rest),C=je(l.meta.arc[1]-l.rest);T>=R&&T<=C&&(f=l.rest+T,m=t.testAim.elev,v={e:m})}else if(u){let T=u.body.pos,R=u.body.vel,C=Math.hypot(T.x-a.x,T.z-a.z),D=0,b=T.x,E=T.z;for(let U=0;U<3&&(v=br(l.meta.gun,C),!!v);U++)D=v.t,b=T.x+(R.x-i.vel.x)*D,E=T.z+(R.z-i.vel.z)*D,C=Math.hypot(b-a.x,E-a.z);if(v&&C<=h.range){let U=l.perfect?0:d.err,W=U*(.035*C+25)*d.r,j=U*.004*d.a,P=C+W;v=br(l.meta.gun,P)??v,i.toLocal(c.set(b,a.y,E),c);let N=l.meta.at,H=Math.atan2(-(c.x-N[0]),c.z-N[2])+j,Y=je(H-l.rest),X=je(l.meta.arc[0]-l.rest),$=je(l.meta.arc[1]-l.rest);if(Y>=X&&Y<=$){f=l.rest+Y;let q=Math.asin(ht.clamp(new _(-Math.sin(l.rest+Y),0,Math.cos(l.rest+Y)).applyQuaternion(i.quat).y,-1,1));m=v.e-q}else v=null}else v=null}let g=h.traverse*Math.PI/180,p=g*.8,y=je(f-l.yaw),x=ht.clamp(y*1.5,-g,g);l.yawV+=ht.clamp(x-l.yawV,-p*e,p*e),l.yaw+=l.yawV*e;let M=h.elevRate*Math.PI/180;l.elev+=ht.clamp((m-l.elev)*3,-M,M)*e,l.gunElev??=l.recoil.map(()=>0);for(let T=0;T<l.gunElev.length;T++){let R=l.reload>h.reload*.35?Math.min(l.elev,.087):l.elev;l.gunElev[T]+=ht.clamp(R-l.gunElev[T],-M*e*(1-T*.06),M*e*(1-T*.06))}l.onTarget=!!v&&Math.abs(je(f-l.yaw))<.006&&Math.abs(m-l.elev)<.003&&l.gunElev.every(T=>Math.abs(T-l.elev)<.004),l.onTarget&&l.reload<=0&&!t.holdFire&&(!t.testAim||t.testAim.fire&&!l.testFired)&&(this.fireTurret(t,l,n),t.testAim&&(l.testFired=!0))}}fireTurret(t,e,n){let i=t.body,r=e.g,o=e.meta,a=o.guns??2,c=new mt().compose(i.pos,i.quat,new _(1,1,1)),l=new pe().setFromAxisAngle(new _(0,1,0),-e.yaw),h=new mt().compose(new _(...o.at),l,new _(1,1,1)).premultiply(c);for(let d=0;d<a;d++){let f=new pe().setFromAxisAngle(new _(1,0,0),-(e.gunElev?.[d]??e.elev)),m=(d-(a-1)/2)*o.gap,v=new mt().compose(new _(o.trunnion[0]+m,o.trunnion[1],o.trunnion[2]),f,new _(1,1,1)).premultiply(h),g=new _(0,0,o.barrel_len).applyMatrix4(v),p=new _(0,0,1).transformDirection(v),y=e.perfect?0:.0012+r.cal*.001;p.x+=ni()*y,p.y+=ni()*y*.6,p.z+=ni()*y,p.normalize(),this.arty.fire(o.gun,t,g,p,n),e.lastShell=this.arty.shells[this.arty.shells.length-1],e.recoil[d]=.001}e.reload=r.reload*(.95+Math.random()*.1)*(t.reloadK??1);let u=t.target&&t.fc.get(t.target.id);u&&(u.err=Math.max(u.err*.72,t.fcMin),u.r=ni(),u.a=ni())}snapAim(t,e,n=.3){let i=Array.isArray(e)?e:[e],r=i[0],o=t.body,a=new _,c=new _;t.turrets.forEach((h,u)=>{let d=i[u%i.length];o.toWorld(c.set(...h.meta.at),a);let f=d.body.pos,m=d.body.vel,v=Math.hypot(f.x-a.x,f.z-a.z),g=f.x,p=f.z,y=null;for(let b=0;b<3&&(y=br(h.meta.gun,v),!!y);b++)g=f.x+(m.x-o.vel.x)*y.t,p=f.z+(m.z-o.vel.z)*y.t,v=Math.hypot(g-a.x,p-a.z);if(!y)return;o.toLocal(c.set(g,a.y,p),c);let x=h.meta.at,M=Math.atan2(-(c.x-x[0]),c.z-x[2]),T=je(M-h.rest),R=je(h.meta.arc[0]-h.rest),C=je(h.meta.arc[1]-h.rest);if(T<R||T>C)return;let D=Math.asin(ht.clamp(new _(-Math.sin(h.rest+T),0,Math.cos(h.rest+T)).applyQuaternion(o.quat).y,-1,1));h.yaw=h.rest+T,h.yawV=0,h.elev=y.e-D,h.gunElev=h.recoil.map(()=>y.e-D),h.reload=n+Math.random()*.15,h.lockOn=d});let l=r;for(let h of i)t.fc.set(h.id,{err:.12,r:ni()*.5,a:ni()*.5,turn:h.body.yawRate});t.focus=l,t.fc.set(l.id,{err:.12,r:ni()*.5,a:ni()*.5,turn:l.body.yawRate})}torpStep(t,e,n){if(this.torp)for(let i of t.torps){if(i.reload-=e,i.reload>0)continue;let r=t.body.toWorld(new _(...i.meta.at),new _),o=t.body.yaw-i.meta.home,a=null,c=t.oxy?9e3:5500;for(let m of this.ships){if(m.side===t.side||!m.alive)continue;let v=m.body.pos.x-r.x,g=m.body.pos.z-r.z,p=Math.hypot(v,g);p>c||p<400||Math.abs(je(Math.atan2(v,g)-o))>1.2||(a=m,c=p)}if(!a)continue;let l=a.body.pos,h=a.body.vel,u=l.x,d=l.z;for(let m=0;m<4;m++){let v=Math.hypot(u-r.x,d-r.z)/vi.speed;u=l.x+h.x*v,d=l.z+h.z*v}let f=Math.atan2(u-r.x,d-r.z);for(let m of[-1.5,-.5,.5,1.5]){let v=f+m*.045;this.torp.launch(t,r,new _(Math.sin(v),0,Math.cos(v)),n)}i.reload=55+Math.random()*10}}torpHit(t){let e=t.ship;if(!e.alive&&e.body.founder>30)return;this.fx.column(t.world,1.1),this.fx.hitBurst(t.world.clone().setY(2),.4);let n=t.local,i=Math.sign(n.x||1);e.body.hole(new _(i*e.meta.B*.45,-e.meta.T*.6,n.z),vi.hole),e.body.rollV+=i*.02,e.hp-=vi.dmg*(1-e.armor*.4)*e.torpK*(t.from?.oxy?1.3:1),this.log.push({kind:"torphit",ship:e}),this.events.push({kind:"torphit",type:"torp",world:t.world.clone()}),e.hp<=0&&e.alive&&this.sink(e,t.from,e.kind==="dd"?"magazine":void 0)}bombHit(t,e){if(!t.alive)return;let n=new _((Math.random()-.5)*t.meta.B*.6,t.meta.deck_top+.5,(Math.random()-.5)*t.meta.L*.7),i=t.body.toWorld(n,new _);this.fx.hitBurst(i,.25),t.hp-=22*(1-t.armor*.5);let r=n.z>t.meta.L/6?0:n.z<-t.meta.L/6?2:1;t.fires[r]=Math.min(1,t.fires[r]+.45);for(let o of t.turrets)!o.broken&&Math.hypot(n.x-o.meta.at[0],n.z-o.meta.at[2])<t.meta.B*.3&&Math.random()<.3&&(o.broken=!0);t.wing&&(t.wing.hits++,t.wing.deck=t.wing.hits>=3?1e9:Math.max(t.wing.deck,45)),t.aa.ha=Math.max(0,t.aa.ha-(Math.random()<.3?1:0)),t.aa.mg=Math.max(0,t.aa.mg-(Math.random()<.4?1:0)),this.events.push({kind:"hit",type:"bomb",world:i}),this.log.push({kind:"bombhit",ship:t}),t.hp<=0&&this.sink(t,e)}hit(t){let e=t.ship,n=Ee[t.type];if(!e.alive&&e.body.founder>30)return;this.fx.hitBurst(t.world,n.cal);let i=e.armor,r=ht.clamp(n.cal/.36*1.4-i*.9,.12,1),o=e.kind==="dd"&&n.cal>=.3?2.4:e.kind==="cl"&&n.cal>=.3?1.8:e.kind==="ca"&&n.cal>=.4?1.5:1,a=n.dmg*r*o*(.7+Math.random()*.6);e.hp-=a;let c=e.meta.L,l=e.meta.B,h=t.local;h.y<1.8&&t.part.part==="hull"&&e.body.hole(h.clone().setY(Math.min(h.y,-.3)),n.cal*n.cal*5*r);let u=h.z>c/6?0:h.z<-c/6?2:1;(t.part.part!=="hull"||Math.random()<.4)&&(e.fires[u]=Math.min(1,e.fires[u]+.2+n.cal*.9*r));let d=/^turret_(\d+)/.exec(t.part.part??"");d&&e.turrets[+d[1]]&&Math.random()<.6*r&&(e.turrets[+d[1]].broken=!0);for(let f of e.turrets){let m=f.meta.at;if(Math.hypot(h.x-m[0],h.z-m[2])<l*.28){!f.broken&&Math.random()<.35*r&&(f.broken=!0);let g=({bb:.008,bc:.03,ca:.05,cl:.07,dd:.12,tr:.02,cv:.04,sp:.004,wh:.002}[e.kind]??.03)*r*(n.cal>.3?1.6:n.cal>.15?1:.3);if(e.alive&&Math.random()<g){this.magazine(e,_M(e,m),t.from);return}}}e.hp<=0&&e.alive&&this.sink(e,t.from)}magazine(t,e,n=null){this.fx.magazine(e,{bb:1.6,bc:1.5,ca:1,cl:.85,dd:.6,tr:.9,cv:1.4,sp:1.9,wh:1.9}[t.kind]??1),this.log.push({kind:"magazine",ship:t}),this.events.push({kind:"magazine",type:t.kind,world:e.clone()}),t.hp=0,this.sink(t,n,"magazine")}sink(t,e,n){t.alive=!1,t.body.startFounder(n??(Math.abs(t.body.list)>.15||t.kind==="dd"&&Math.random()<.5?"capsize":void 0));for(let i=0;i<3;i++)t.fires[i]=Math.max(t.fires[i],.5+Math.random()*.5);this.log.push({kind:"sunk",ship:t}),t.side!=="A"&&(this.score+=vM[t.kind],this.sunkN++,this.sunkList.push({kind:t.kind,boss:t.boss}),e&&e.side==="A"&&e.kills++)}burnStep(t,e){let n=t.meta.L;for(let i=0;i<3;i++){let r=t.fires[i];if(r<=0)continue;t.burn[i]=Math.min(1,t.burn[i]+r*e*.05),t.alive?(t.hp-=r*e*.25,t.fires[i]=Math.max(0,r-e*.012),t.hp<=0&&this.sink(t,null)):t.fires[i]=Math.max(0,r-e*.004);let o=(1-i)*n/3,a=t.body.toWorld(new _((Math.random()-.5)*t.meta.B*.4,t.meta.deck_top+1,o+(Math.random()-.5)*n/4),xu());a.y>-1&&this.fx.bigFire(a,r,e)}}steerTo(t,e,n){t.body.ctl.pow=void 0;let i=je(e-t.body.yaw);t.body.ctl.rudder=ht.clamp(-i*2.2,-.6,.6),t.body.ctl.tele=n}evadeStep(t,e){if(!this.torp||t.evade&&e<t.evade.t)return;t.evade=null;let n=t.body.pos,i=t.body.vel,r=t.meta.L/2+25;for(let o of this.torp.list){if(!o.alive||o.from?.side===t.side)continue;let a=o.p.x-n.x,c=o.p.z-n.z;if(Math.hypot(a,c)>(o.from?.oxy?800:2500))continue;let h=o.d.x*vi.speed-i.x,u=o.d.z*vi.speed-i.z,d=h*h+u*u,f=-(a*h+c*u)/d;if(f<0||f>90||Math.hypot(a+h*f,c+u*f)>r)continue;let m=Math.atan2(o.d.x,o.d.z),v=Math.abs(je(m-t.body.yaw))<Math.PI/2?m:m+Math.PI;t.evade={t:e+Math.min(f+6,30),hd:v};return}}steerPlayer(t,e){let n=t.body;if(t.evade){this.steerTo(t,t.evade.hd,4);return}let i=this.flagship();if(!t.order&&t.station&&i?.alive&&i!==t)return this.keepStation(t,i);if(!t.order){t.body.ctl.rudder*=Math.exp(-e);return}let r=t.order.x-n.pos.x,o=t.order.z-n.pos.z,a=Math.hypot(r,o);if(a<t.meta.L*.8){t.order=null,n.ctl.tele=1,n.ctl.rudder=0;return}this.steerTo(t,Math.atan2(r,o),a>900?4:a>400?3:2)}keepStation(t,e){let n=t.body;{let i=e.body,[r,o]=t.station,a=Math.cos(i.yaw),c=Math.sin(i.yaw),l=i.pos.x+r*a+o*c,h=i.pos.z-r*c+o*a,u=l-n.pos.x,d=h-n.pos.z,f=u*Math.sin(i.yaw)+d*Math.cos(i.yaw),v=Math.hypot(u,d)>120?Math.atan2(u+Math.sin(i.yaw)*300,d+Math.cos(i.yaw)*300):i.yaw;this.steerTo(t,v,4);let g=Math.max(i.speed+ht.clamp(f*.012,-3,4),.5);n.ctl.pow=ht.clamp((g/n.vmax)**3*1.05,.02,1)}}steerAI(t,e){let n=t.body;if(t.evade){this.steerTo(t,t.evade.hd,4);return}let i=t.side==="E"&&this.ships.find(d=>d.escort&&d.alive)||this.ships.find(d=>d.side!==t.side&&d.alive&&(d.flagship||d.kind==="bb"||d.kind==="bc"))||t.target,r=t.target??i;if(!r){this.steerTo(t,n.yaw,3);return}let o=r.body.pos.x-n.pos.x,a=r.body.pos.z-n.pos.z,c=Math.hypot(o,a),l=Math.atan2(o,a);if(t.kind==="cv"){let d=c<9500;this.steerTo(t,d?l+Math.PI:c>14e3?l:l+Math.PI/2,2);return}let h=t.kind==="dd"?2600:t.maxRange*.7,u;if(c>h*1.15)u=l;else{let d=je(l+Math.PI/2-n.yaw),f=je(l-Math.PI/2-n.yaw);u=Math.abs(d)<Math.abs(f)?l+Math.PI/2:l-Math.PI/2,c<h*.7&&(u+=Math.sign(je(u-l))*.4)}this.steerTo(t,u,4)}avoid(t,e){let n=t.body;for(let i of this.ships){if(i===t||i.gone)continue;let r=n.pos.x-i.body.pos.x,o=n.pos.z-i.body.pos.z,a=Math.hypot(r,o),c=(t.meta.L+i.meta.L)*.42;if(a<c*1.6&&a>1&&(Math.sin(n.yaw)*-r+Math.cos(n.yaw)*-o)/a>.3&&t.alive&&(n.ctl.rudder=ht.clamp(n.ctl.rudder+Math.sign(Math.sin(n.yaw)*o-Math.cos(n.yaw)*r||1)*.6*(1-a/(c*1.6)),-.6,.6)),a<c&&a>1){let l=(c-a)*.6*e;n.pos.x+=r/a*l,n.pos.z+=o/a*l}}}orderMove(t,e,n){if(!t.length)return;let i=t.reduce((o,a)=>o+a.body.pos.x,0)/t.length,r=t.reduce((o,a)=>o+a.body.pos.z,0)/t.length;for(let o of t){let a=o.body.pos.x-i,c=o.body.pos.z-r,l=Math.hypot(a,c),h=260+120*t.length;l>h&&(a*=h/l,c*=h/l),o.order={x:e+a,z:n+c},o.station=null}}orderAttack(t,e){for(let n of t)n.focus=e}waveStep(t){this.waveT+=t;let e=this.ships.filter(i=>i.side==="E"&&i.alive),n=this.flagship();!n||!n.alive||(this.wave===0&&this.waveT>3||this.wave>0&&(e.length===0&&this.waveT>8||e.length<=1&&this.waveT>90))&&(this.wave++,this.waveT=0,this.spawnWave(this.wave))}spawnWave(t){let n=this.flagship().body.pos,i=t===1?["cl","dd","dd","dd"]:t===2?["ca","ca","cl","dd","dd","dd"]:t===3?["bc","ca","ca","cl","dd","dd","dd"]:["bb","bc","ca","ca","cl","dd","dd","dd","dd"].slice(0,6+Math.min(t-3,3)),r=t>=3?2:1,o=Math.random()*Math.PI*2;i.forEach((a,c)=>{let l=c%r,h=o+l*(Math.PI*(.6+Math.random()*.5)),u=6600+Math.random()*700,d=Math.floor(c/r),f=n.x+Math.sin(h)*u,m=n.z+Math.cos(h)*u,v=new pt(Math.cos(h),-Math.sin(h)),g=(d-2)*420;this.add(a,"E",f+v.x*g,m+v.y*g,h+Math.PI,lo[a].kn*.5144*.9,{group:t})}),this.log.push({kind:"wave",n:t,count:i.length})}startStage(t,e={}){this.stage={def:t,copies:e.copies??[],wave:0,t:0,waveT:0,over:null,base:e.base??Math.random()*Math.PI*2},this.waves=!1}stageStep(t){let e=this.stage,n=e.def;if(e.over)return;if(e.t+=t,e.waveT+=t,!this.flagship()?.alive)return this.finish(!1,"flag");let r=this.ships.filter(c=>c.side==="E"&&c.alive);if(n.goal==="escort"&&this.ships.filter(l=>l.escort).filter(l=>l.alive).length<n.escort[1])return this.finish(!1,"escort");if(n.goal==="hold"&&e.t>=n.time)return this.finish(!0);if(n.goal==="boss"&&e.bossUp&&!this.ships.some(c=>c.boss&&c.alive))return this.finish(!0);let o=e.wave<n.waves.length,a=r.length===0;if(e.wave===0&&e.waveT>4||e.wave>0&&a&&e.waveT>6)if(o)this.spawnStageWave(n.waves[e.wave]);else if(n.goal==="hold")this.spawnStageWave(n.waves[e.wave%n.waves.length]);else return this.finish(!0);else n.goal==="hold"&&e.wave>0&&e.waveT>110&&r.length<=3&&this.spawnStageWave(n.waves[e.wave%n.waves.length])}finish(t,e=""){let n=this.stage;n.over={won:t,why:e,t:n.t},this.log.push({kind:"over",won:t,why:e})}spawnStageWave(t){let e=this.stage,n=e.def;e.wave++,e.waveT=0,this.wave=e.wave;let i=this.flagship(),r=this.ships.find(d=>d.escort&&d.alive),o=(r??i).body.pos,a=r?r.body.yaw:null,c=t.length>=6?2:1,l=a!==null?a+(Math.random()-.5)*1.6:e.base+e.wave*1.9,h=n.near?3900:this.fog?5600:6800,u=0;t.forEach((d,f)=>{let m=d.replace("!",""),v=null,g=d.endsWith("!");m==="copy"&&(v=e.copies[u++%Math.max(e.copies.length,1)]??null,m=v?.kind??"ca"),this.art.kinds[m]||(m={cv:"bc",wh:"bb",sp:"bb",tr:"cl"}[m]??"ca"),v&&v.kind!==m&&(v=null);let p=f%c,y=Math.floor(f/c),x=l+p*(Math.PI*(.6+Math.random()*.4)),M=h+Math.random()*600+(g?900:0),T=o.x+Math.sin(x)*M,R=o.z+Math.cos(x)*M,C=new pt(Math.cos(x),-Math.sin(x)),D=(y-2)*420,b=this.add(m,"E",T+C.x*D,R+C.y*D,x+Math.PI,(lo[m]?.kn??30)*.5144*.9,{group:e.wave,boss:g,design:v});return g&&(e.bossUp=!0,e.bossN=(e.bossN??0)+1,b.mark=m==="wh"?"":`G-${n.id.replace("-","")}${e.bossN>1?String.fromCharCode(64+e.bossN):""}`),b}),this.log.push({kind:"wave",n:e.wave,count:t.length,boss:t.some(d=>d.endsWith("!"))})}};function _M(s,t){return s.body.toWorld(new _(t[0],t[1]+3,t[2]),new _)}var vc=class{constructor(t,e){this.c=t,this.el=e,this.target=new _,this.yaw=.6,this.pitch=.62,this.dist=1400,this.keys={},this.follow=null,this.free=!1,addEventListener("keydown",o=>{this.keys[o.code]=!0,(o.code.startsWith("Arrow")||o.code==="Space")&&o.preventDefault()}),addEventListener("keyup",o=>{this.keys[o.code]=!1}),addEventListener("blur",()=>{this.keys={}}),e.addEventListener("wheel",o=>{this.dist=ht.clamp(this.dist*Math.exp(o.deltaY*.0012),90,7e3),o.preventDefault()},{passive:!1});let n=!1,i=0,r=0;e.addEventListener("pointerdown",o=>{(o.button===1||o.button===0&&o.altKey)&&(n=!0,i=o.clientX,r=o.clientY,o.preventDefault())}),addEventListener("pointerup",()=>{n=!1}),addEventListener("pointermove",o=>{n&&(this.yaw-=(o.clientX-i)*.005,this.pitch=ht.clamp(this.pitch+(o.clientY-r)*.004,.06,1.45),i=o.clientX,r=o.clientY)})}set(t){Object.assign(this,t)}update(t){let e=this.keys,n=this.dist*.9*t,i=0,r=0;if((e.KeyW||e.ArrowUp)&&(r+=1),(e.KeyS||e.ArrowDown)&&(r-=1),(e.KeyA||e.ArrowLeft)&&(i-=1),(e.KeyD||e.ArrowRight)&&(i+=1),i||r){this.follow=null;let c=-Math.sin(this.yaw),l=-Math.cos(this.yaw);this.target.x+=(c*r-l*i)*n*-1*-1,this.target.z+=(l*r+c*i)*n}if(this.follow?.body){let c=this.follow.body.pos;this.target.x+=(c.x-this.target.x)*(1-Math.exp(-t*3)),this.target.z+=(c.z-this.target.z)*(1-Math.exp(-t*3))}let o=Math.sin(this.pitch)*this.dist,a=Math.cos(this.pitch)*this.dist;this.c.position.set(this.target.x+Math.sin(this.yaw)*a,Math.max(o,4),this.target.z+Math.cos(this.yaw)*a),this.c.lookAt(this.target.x,0,this.target.z),this.c.updateMatrixWorld()}},yu=new za,Zp=new pt,mo=new _,xc=class{constructor({battle:t,camera:e,rcam:n,el:i,overlay:r,W:o,H:a,sound:c}){this.b=t,this.camera=e,this.rcam=n,this.el=i,this.ov=r,this.W=o,this.H=a,this.sound=c,this.sel=[],this.box=document.createElement("div"),this.box.className="selbox",r.appendChild(this.box),this.bars=new Map,this.marks=[],this.enabled=!0;let l=null,h=u=>{let d=i.getBoundingClientRect();return[(u.clientX-d.left)/d.width*o,(u.clientY-d.top)/d.height*a]};i.addEventListener("contextmenu",u=>u.preventDefault()),i.addEventListener("pointerdown",u=>{!this.enabled||u.pointerType==="touch"||(u.button===0&&!u.altKey&&(l=h(u)),u.button===2&&this.command(h(u)))}),addEventListener("pointermove",u=>{if(!l)return;let[d,f]=h(u),m=Math.min(d,l[0]),v=Math.min(f,l[1]);Object.assign(this.box.style,{display:"block",left:m+"px",top:v+"px",width:Math.abs(d-l[0])+"px",height:Math.abs(f-l[1])+"px"})}),addEventListener("pointerup",u=>{if(!l||u.button!==0)return;let[d,f]=h(u);this.box.style.display="none",Math.hypot(d-l[0],f-l[1])<6?this.clickSelect(d,f,u.shiftKey):this.boxSelect(l,[d,f],u.shiftKey),l=null}),this.touch(i,h),addEventListener("keydown",u=>{if(this.enabled&&(u.code==="KeyQ"&&this.select(this.b.ships.filter(d=>d.player&&d.alive)),u.code==="Space")){let d=this.b.flagship();d&&(this.rcam.follow=d)}})}touch(t,e){let n=new Map,i=null,r=null,o=null,a=null,c=()=>{i=null,clearTimeout(r),this.box.style.display="none"};t.addEventListener("pointerdown",h=>{if(h.pointerType!=="touch")return;t.setPointerCapture?.(h.pointerId);let u=e(h);if(n.set(h.pointerId,u),n.size===1)o={p:u,t:performance.now()},i="tap",clearTimeout(r),r=setTimeout(()=>{i==="tap"&&this.enabled&&(i="box",this.sound?.click?.())},450);else if(n.size===2){clearTimeout(r),i="two";let[d,f]=[...n.values()];a={d:Math.hypot(d[0]-f[0],d[1]-f[1]),ang:Math.atan2(f[1]-d[1],f[0]-d[0]),dist:this.rcam.dist,yaw:this.rcam.yaw}}}),t.addEventListener("pointermove",h=>{if(h.pointerType!=="touch"||!n.has(h.pointerId))return;let u=n.get(h.pointerId),d=e(h);if(n.set(h.pointerId,d),i==="two"&&n.size>=2){let[f,m]=[...n.values()],v=Math.hypot(f[0]-m[0],f[1]-m[1]),g=Math.atan2(m[1]-f[1],m[0]-f[0]);this.rcam.dist=ht.clamp(a.dist*a.d/Math.max(v,1),90,7e3),this.rcam.yaw=a.yaw-(g-a.ang);return}if(i==="tap"&&Math.hypot(d[0]-o.p[0],d[1]-o.p[1])>12&&(i="pan",clearTimeout(r)),i==="pan"){let f=this.ground(...u),m=this.ground(...d);f&&m&&(this.rcam.follow=null,this.rcam.target.x+=f.x-m.x,this.rcam.target.z+=f.z-m.z)}if(i==="box"){let f=Math.min(d[0],o.p[0]),m=Math.min(d[1],o.p[1]);Object.assign(this.box.style,{display:"block",left:f+"px",top:m+"px",width:Math.abs(d[0]-o.p[0])+"px",height:Math.abs(d[1]-o.p[1])+"px"})}});let l=h=>{if(h.pointerType!=="touch"||!n.has(h.pointerId))return;let u=n.get(h.pointerId);if(n.delete(h.pointerId),i==="two"){n.size===0&&c();return}this.enabled&&i==="tap"&&performance.now()-o.t<450&&this.tap(u[0],u[1]),this.enabled&&i==="box"&&(Math.hypot(u[0]-o.p[0],u[1]-o.p[1])>12?this.boxSelect(o.p,u,!1):this.tap(u[0],u[1])),c()};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",h=>{n.delete(h.pointerId),c()})}tap(t,e){let n=this.sel.filter(r=>r.alive),i=this.pick(t,e,"A");if(i?.player)return this.select([i]);if(n.length)return this.command([t,e])}project(t){return mo.copy(t).project(this.camera),[(mo.x*.5+.5)*this.W,(-mo.y*.5+.5)*this.H,mo.z]}ground(t,e){Zp.set(t/this.W*2-1,-(e/this.H*2-1)),yu.setFromCamera(Zp,this.camera);let n=yu.ray.direction,i=yu.ray.origin;if(n.y>=-1e-4)return null;let r=-i.y/n.y;return new _(i.x+n.x*r,0,i.z+n.z*r)}pick(t,e,n){let i=this.ground(t,e),r=null,o=1e9;for(let a of this.b.ships){if(!a.alive||n&&a.side!==n)continue;let[c,l,h]=this.project(a.body.pos);if(h>1)continue;let u=Math.hypot(c-t,l-e),d=Math.max(26,this.screenLen(a)*.5);u<d&&u<o&&(o=u,r=a)}if(!r&&i)for(let a of this.b.ships){if(!a.alive||n&&a.side!==n)continue;let c=a.body.pos.distanceTo(i);c<a.meta.L*.6&&c<o&&(o=c,r=a)}return r}screenLen(t){let e=t.body.forward(new _).multiplyScalar(t.meta.L/2),n=this.project(mo.copy(t.body.pos).add(e)),i=this.project(new _().copy(t.body.pos).sub(e));return Math.hypot(n[0]-i[0],n[1]-i[1])}select(t,e=!1){if(!e)for(let n of this.sel)n.sel=!1;this.sel=e?[...new Set([...this.sel,...t])]:t;for(let n of this.sel)n.sel=!0;t.length&&this.sound?.click?.()}clickSelect(t,e,n){let i=this.pick(t,e,"A");this.select(i?.player?[i]:[],n)}boxSelect(t,e,n){let i=Math.min(t[0],e[0]),r=Math.max(t[0],e[0]),o=Math.min(t[1],e[1]),a=Math.max(t[1],e[1]);this.select(this.b.ships.filter(c=>{if(!c.player||!c.alive)return!1;let[l,h,u]=this.project(c.body.pos);return u<1&&l>=i&&l<=r&&h>=o&&h<=a}),n)}command([t,e]){let n=this.sel.filter(o=>o.alive);if(!n.length)return;let i=this.pick(t,e,"E");if(i){this.b.orderAttack(n,i),this.flash(i.body.pos,"atk");return}let r=this.ground(t,e);r&&(this.b.orderMove(n,r.x,r.z),this.flash(r,"mv"))}flash(t,e){this.marks.push({p:t.clone(),t:0,kind:e})}update(t){let e=new Set;for(let n of this.b.ships){if(n.gone||!n.alive&&n.body.founder>6)continue;e.add(n);let i=this.bars.get(n);i||(i=document.createElement("div"),i.className="bar "+(n.escort?"esc":n.side==="A"?"own":"foe")+(n.flagship?" flag":"")+(n.boss?" boss":""),i.innerHTML="<i></i>"+(n.boss&&this.bossName?`<b>${this.bossName(n)}</b>`:""),this.ov.appendChild(i),this.bars.set(n,i));let r=n.body.toWorld(new _(0,n.meta.deck_top+n.meta.B*1.2,0),new _),[o,a,c]=this.project(r);if(c>1||o<-50||o>this.W+50||a<-50||a>this.H+50){i.style.display="none";continue}let l=ht.clamp(this.screenLen(n)*.5,22,90);i.style.display="block",i.style.transform=`translate(${(o-l/2).toFixed(1)}px, ${(a-14).toFixed(1)}px)`,i.style.width=l+"px",i.firstChild.style.width=(Math.max(n.hp,0)/n.hpMax*100).toFixed(1)+"%",i.classList.toggle("sel",!!n.sel),i.classList.toggle("dead",!n.alive),i.classList.toggle("tgt",this.sel.some(h=>h.focus===n))}for(let[n,i]of this.bars)e.has(n)||(i.remove(),this.bars.delete(n));for(let n of this.marks){n.t+=t,n.el||(n.el=document.createElement("div"),n.el.className="mark "+n.kind,this.ov.appendChild(n.el));let[i,r]=this.project(n.p);n.el.style.transform=`translate(${i}px, ${r}px) scale(${1+n.t*1.5})`,n.el.style.opacity=Math.max(0,1-n.t/.9)}this.marks=this.marks.filter(n=>n.t>.9?(n.el?.remove(),!1):!0)}};var _u={en:{titleSub:"IRON FLEET",cardSub:"IRON FLEET",waveN:s=>`WAVE <b>${s}</b>`,sunk:"SUNK",goal:"You command a small iron fleet: one battleship, two heavy cruisers, three destroyers.<br>Enemy squadrons close in from every side. Break them all, and keep your flagship afloat.",touchBtns:{all:"ALL SHIPS",flag:"FLAGSHIP",none:"CLEAR"},hintTouch:"Tap a ship: choose it\u3000Tap the sea / an enemy: move / attack\u3000One finger: pan\u3000Pinch: zoom\u3000Twist: turn\u3000Hold and drag: box-select",goalC:"You have inherited a small shipyard, an old battleship and two destroyers.<br>The Grey Fleet builds bigger every month. Build, refit, sail. Overload her, and the sea settles the argument.",start:"START",hint:"Left drag: select ships\u3000Right click: move / attack\u3000Q: whole fleet\u3000W A S D: pan\u3000Wheel: zoom\u3000Middle drag: rotate\u3000Space: flagship",keys:"<kbd>LMB</kbd> select\u3000<kbd>RMB</kbd> move / attack\u3000<kbd>Q</kbd> all ships\u3000<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> pan\u3000<kbd>Wheel</kbd> zoom\u3000<kbd>MMB</kbd> rotate\u3000<kbd>Space</kbd> flagship",kinds:{bb:"BATTLESHIP",bc:"BATTLECRUISER",ca:"HEAVY CRUISER",cl:"LIGHT CRUISER",dd:"DESTROYER",cv:"CARRIER",sp:"SUPER-BATTLESHIP",wh:"GREY WHALE",tr:"MERCHANTMAN"},short:{bb:"BB",bc:"BC",ca:"CA",cl:"CL",dd:"DD",cv:"CV",sp:"SBB",wh:"WHALE",tr:"AK"},waveIn:(s,t)=>`WAVE ${s}
${t} ships inbound`,sunkThem:s=>`ENEMY ${s} SUNK`,sunkUs:s=>`OUR ${s} IS LOST`,magazine:s=>`MAGAZINE HIT \u2014 ${s} BLOWS UP`,tons:s=>`${s.toLocaleString("en")} t`,lost:"FLAGSHIP LOST",endSub:(s,t,e)=>`${s} waves held, ${t} ships sunk, ${e.toLocaleString("en")} tons`,again:"AGAIN",refitBtn:"REFIT",refit:"REFIT",calibre:"CALIBRE (cm)",barrels:"BARRELS",tiers:"STACKED",slotHint:"Click a ring on the ship to choose what goes there. Drag to look around, wheel to zoom.",backYard:"BACK TO THE YARD",aaHead:(s,t)=>`ANTI-AIRCRAFT \xB7 added ${s} / ${t}`,haGun:"HIGH-ANGLE GUNS",mgGun:"AA GUNS (25 mm)",airHead:(s,t)=>`AIR GROUP \xB7 ${s} / ${t} squadrons`,planeKinds:{f:"FIGHTERS",t:"ATTACK (torpedo)",b:"BOMBERS (dive)"},planeShort:{f:"F",t:"T",b:"B"},bill:"YARD BILL",rivetsU:"rivets",steelU:"steel",cantPay:s=>`The yard wants ${s.rivets.toLocaleString("en")} rivets and ${s.steel.toLocaleString("en")} steel for this. Undo something.`,testFire:"TEST FIRE",stock:"STOCK",copyAll:"SAME FOR SISTERS",sortie:"SORTIE",copied:"Copied to her sister ships",slotName:s=>s.stock>=0?`MOUNT ${"ABXY"[s.stock]??s.stock+1}`:s.wing?`${s.wing>0?"PORT":"STARBOARD"} WING`:"EXTRA CENTRELINE",empty:"EMPTY",gun:"GUN",torp:"TORPEDOES",single:"single",twin:"twin",triple:"triple",disp:"DISPLACEMENT",speed:"SPEED",broad:"BROADSIDE",range:"RANGE",stab:{ok:"STABLE",tender:"TENDER \u2014 she will roll hard when she fires",capsize:"TOP-HEAVY \u2014 she will not stay upright",sink:"OVERLOADED \u2014 she will not float"},wentOver:"SHE ROLLED OVER",sankDock:"SHE WENT DOWN",capsized:(s,t)=>t?`OUR ${s} CAPSIZED`:`ENEMY ${s} CAPSIZED`,lang:"\u65E5\u672C\u8A9E"},ja:{titleSub:"\u9244\u306E\u8266\u968A",cardSub:"\u9244\u306E\u8266\u968A",waveN:s=>`\u7B2C <b>${s}</b> \u6CE2`,sunk:"\u6483\u6C88",goal:"\u3042\u306A\u305F\u304C\u7387\u3044\u308B\u306E\u306F\u3001\u6226\u82661\u30FB\u91CD\u5DE12\u30FB\u99C6\u90103\u306E\u5C0F\u3055\u306A\u9244\u306E\u8266\u968A\u3002<br>\u56DB\u65B9\u304B\u3089\u6575\u306E\u8266\u968A\u304C\u62BC\u3057\u5BC4\u305B\u308B\u3002\u65D7\u8266\u3092\u6C88\u3081\u305A\u306B\u3001\u3059\u3079\u3066\u8E74\u6563\u3089\u305B\u3002",touchBtns:{all:"\u5168\u8266",flag:"\u65D7\u8266\u3078",none:"\u9078\u629E\u89E3\u9664"},hintTouch:"\u8266\u3092\u30BF\u30C3\u30D7\uFF1A\u9078\u3076\u3000\u6D77\u30FB\u6575\u3092\u30BF\u30C3\u30D7\uFF1A\u79FB\u52D5\u30FB\u653B\u6483\u30001\u672C\u6307\uFF1A\u8996\u70B9\u306E\u79FB\u52D5\u3000\u3064\u307E\u3080\uFF1A\u5BC4\u308B\u30FB\u5F15\u304F\u3000\u3072\u306D\u308B\uFF1A\u56DE\u3059\u3000\u9577\u62BC\u3057\u30C9\u30E9\u30C3\u30B0\uFF1A\u7BC4\u56F2\u9078\u629E",goalC:"\u5C0F\u3055\u306A\u9020\u8239\u6240\u3068\u3001\u53E4\u3044\u6226\u82661\u96BB\u30FB\u99C6\u9010\u82662\u96BB\u3092\u7D99\u3044\u3060\u3002<br>\u7070\u8272\u8266\u968A\u306F\u6708\u3054\u3068\u306B\u5927\u304D\u306A\u8266\u3092\u9020\u3063\u3066\u304F\u308B\u3002\u9020\u308A\u3001\u8F09\u305B\u66FF\u3048\u3001\u51FA\u6483\u305B\u3088\u3002\u7A4D\u307F\u3059\u304E\u305F\u8266\u306F\u3001\u6D77\u304C\u6C88\u3081\u308B\u3002",start:"\u51FA\u6483",hint:"\u5DE6\u30C9\u30E9\u30C3\u30B0\uFF1A\u8266\u3092\u9078\u3076\u3000\u53F3\u30AF\u30EA\u30C3\u30AF\uFF1A\u79FB\u52D5\u30FB\u653B\u6483\u3000Q\uFF1A\u5168\u8266\u3000W A S D\uFF1A\u8996\u70B9\u306E\u79FB\u52D5\u3000\u30DB\u30A4\u30FC\u30EB\uFF1A\u5BC4\u308B\u30FB\u5F15\u304F\u3000\u4E2D\u30C9\u30E9\u30C3\u30B0\uFF1A\u56DE\u3059\u3000Space\uFF1A\u65D7\u8266\u3078",keys:"<kbd>\u5DE6</kbd> \u9078\u629E\u3000<kbd>\u53F3</kbd> \u79FB\u52D5\u30FB\u653B\u6483\u3000<kbd>Q</kbd> \u5168\u8266\u3000<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> \u8996\u70B9\u3000<kbd>\u30DB\u30A4\u30FC\u30EB</kbd> \u5BC4\u308B\u3000<kbd>\u4E2D</kbd> \u56DE\u3059\u3000<kbd>Space</kbd> \u65D7\u8266",kinds:{bb:"\u6226\u8266",bc:"\u5DE1\u6D0B\u6226\u8266",ca:"\u91CD\u5DE1",cl:"\u8EFD\u5DE1",dd:"\u99C6\u9010\u8266",cv:"\u7A7A\u6BCD",sp:"\u8D85\u5927\u578B\u8266",wh:"\u7070\u9BE8",tr:"\u5546\u8239"},short:{bb:"\u6226\u8266",bc:"\u5DE1\u6226",ca:"\u91CD\u5DE1",cl:"\u8EFD\u5DE1",dd:"\u99C6\u9010",cv:"\u7A7A\u6BCD",sp:"\u8D85\u5927\u578B",wh:"\u7070\u9BE8",tr:"\u5546\u8239"},waveIn:(s,t)=>`\u7B2C${s}\u6CE2
\u6575 ${t}\u96BB \u63A5\u8FD1`,sunkThem:s=>`\u6575${s}\u3092\u6483\u6C88`,sunkUs:s=>`\u5473\u65B9\u306E${s}\u304C\u6C88\u6CA1`,magazine:s=>`\u5F3E\u85AC\u5EAB\u306B\u547D\u4E2D \u2014 ${s}\u304C\u7206\u6C88`,tons:s=>`${s.toLocaleString("ja")} \u30C8\u30F3`,lost:"\u65D7\u8266 \u6C88\u6CA1",endSub:(s,t,e)=>`${s}\u6CE2\u3092\u3057\u306E\u304E\u3001${t}\u96BB\u30FB${e.toLocaleString("ja")}\u30C8\u30F3\u3092\u6483\u6C88`,again:"\u3082\u3046\u4E00\u5EA6",refitBtn:"\u6539\u88C5",refit:"\u6539\u88C5",calibre:"\u53E3\u5F84\uFF08cm\uFF09",barrels:"\u9580\u6570",tiers:"\u6BB5\u6570",slotHint:"\u8266\u306E\u4E0A\u306E\u4E38\u3092\u62BC\u3057\u3066\u3001\u305D\u3053\u306B\u8F09\u305B\u308B\u3082\u306E\u3092\u9078\u3076\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u3059\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u5BC4\u308B\u3002",backYard:"\u9020\u8239\u6240\u3078",aaHead:(s,t)=>`\u5BFE\u7A7A\u5175\u88C5\u30FB\u8FFD\u52A0 ${s} / ${t}`,haGun:"\u9AD8\u89D2\u7832",mgGun:"\u6A5F\u9283\uFF0825mm\uFF09",airHead:(s,t)=>`\u642D\u8F09\u6A5F\u30FB${s} / ${t} \u7DE8\u968A`,planeKinds:{f:"\u6226\u95D8\u6A5F",t:"\u653B\u6483\u6A5F\uFF08\u96F7\u6483\uFF09",b:"\u7206\u6483\u6A5F\uFF08\u6025\u964D\u4E0B\uFF09"},planeShort:{f:"\u6226",t:"\u653B",b:"\u7206"},bill:"\u5DE5\u8CC3",rivetsU:"\u92F2",steelU:"\u92FC\u6750",cantPay:s=>`\u3053\u306E\u6539\u88C5\u306B\u306F\u92F2 ${s.rivets.toLocaleString("ja")}\u30FB\u92FC\u6750 ${s.steel.toLocaleString("ja")} \u304C\u8981\u308B\u3002\u3069\u3053\u304B\u3092\u5143\u306B\u623B\u3057\u3066\u3002`,testFire:"\u8A66\u3057\u6483\u3061",stock:"\u5143\u306B\u623B\u3059",copyAll:"\u540C\u578B\u8266\u306B\u3082",sortie:"\u51FA\u6483",copied:"\u540C\u578B\u8266\u306B\u3082\u540C\u3058\u6539\u88C5\u3092\u3057\u307E\u3057\u305F",slotName:s=>s.stock>=0?`${"\u4E00\u4E8C\u4E09\u56DB\u4E94"[s.stock]??s.stock+1}\u756A\u7832\u5854`:s.wing?`${s.wing>0?"\u5DE6\u8237":"\u53F3\u8237"}\u306E\u8237\u5074`:"\u8FFD\u52A0\u306E\u7832\u5EA7",empty:"\u7A7A\u304D",gun:"\u4E3B\u7832",torp:"\u9B5A\u96F7",single:"\u5358\u88C5",twin:"\u9023\u88C5",triple:"\u4E09\u9023\u88C5",disp:"\u6392\u6C34\u91CF",speed:"\u901F\u529B",broad:"\u6589\u5C04\u306E\u91CD\u3055",range:"\u5C04\u7A0B",stab:{ok:"\u5B89\u5B9A",tender:"\u4E0D\u5B89\u5B9A\uFF1A\u6483\u3064\u3068\u5927\u304D\u304F\u50BE\u304F",capsize:"\u982D\u304C\u91CD\u3059\u304E\u308B\uFF1A\u307E\u3063\u3059\u3050\u7ACB\u3063\u3066\u3044\u3089\u308C\u306A\u3044",sink:"\u91CD\u3059\u304E\u308B\uFF1A\u6D6E\u304B\u3070\u306A\u3044"},wentOver:"\u8EE2\u8986\u3057\u305F",sankDock:"\u6C88\u3093\u3060",capsized:(s,t)=>t?`\u5473\u65B9\u306E${s}\u304C\u8EE2\u8986`:`\u6575${s}\u304C\u8EE2\u8986`,lang:"English"}},bM=new URLSearchParams(location.search),ss=bM.get("lang")??(()=>{try{return localStorage.getItem("kurogane-lang")}catch{return null}})()??"en";_u[ss]||(ss="en");var Jp=[],bt=s=>_u[ss][s]??_u.en[s];function go(){document.documentElement.lang=ss;for(let t of document.querySelectorAll("[data-t]"))t.innerHTML=bt(t.dataset.t);let s=document.getElementById("lang");s&&(s.textContent=bt("lang"));for(let t of Jp)t()}function yc(s){Jp.push(s)}var Hn=()=>ss;function Qp(){ss=ss==="en"?"ja":"en";try{localStorage.setItem("kurogane-lang",ss)}catch{}go()}var _c=class{constructor(){this.ctx=null}start(){if(this.ctx)return;let t=this.ctx=new AudioContext,e=this.out=t.createGain();e.gain.value=.9;let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,e.connect(n).connect(t.destination);let i=t.createBuffer(2,t.sampleRate*3,t.sampleRate);for(let l=0;l<2;l++){let h=i.getChannelData(l);for(let u=0,d=0;u<h.length;u++)d=.985*d+.015*(Math.random()*2-1),h[u]=d*4+(Math.random()*2-1)*.25}this.nb=i;let r=(l=1)=>{let h=t.createBufferSource();return h.buffer=i,h.loop=!0,h.playbackRate.value=l,h.start(),h},o=(l,h,u,d,f)=>{let m=t.createBiquadFilter();m.type=h,m.frequency.value=u,m.Q.value=d;let v=t.createGain();return v.gain.value=f,l.connect(m).connect(v).connect(e),{f:m,g:v}};this.sea=o(r(1),"bandpass",600,.4,.05),this.sea2=o(r(.71),"highpass",2500,.5,.01),this.bow=o(r(1.3),"bandpass",1200,.7,0),this.wind=o(r(.9),"bandpass",400,1.2,.02),this.whistle=o(r(1.1),"bandpass",1800,18,0),this.flog=o(r(.6),"lowpass",300,.8,0);let a=t.createOscillator();a.frequency.value=5;let c=t.createGain();c.gain.value=0,a.connect(c).connect(this.flog.g.gain),a.start(),this.flogLfo=a,this.flogDepth=c,this.nextSlap=0,this.nextCreak=0,this.nextGull=4,this.lastRoll=0,this.nextBell=30}thump(t,e=90,n=.35,i=0){let r=this.ctx,o=r.currentTime,a=r.createBufferSource();a.buffer=this.nb,a.playbackRate.value=.5+Math.random()*.3;let c=r.createBiquadFilter();c.type="lowpass",c.frequency.value=e*6;let l=r.createGain();l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(t,o+.02),l.gain.exponentialRampToValueAtTime(5e-4,o+n);let h=r.createStereoPanner();h.pan.value=i,a.connect(c).connect(l).connect(h).connect(this.out),a.start(o,Math.random()*2),a.stop(o+n+.05)}creak(t){let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sawtooth";let r=140+Math.random()*180;i.frequency.setValueAtTime(r,n),i.frequency.linearRampToValueAtTime(r*(1.3+Math.random()*.4),n+.4);let o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=900+Math.random()*600,o.Q.value=6;let a=e.createGain();a.gain.value=0;let c=e.createOscillator();c.frequency.value=28+Math.random()*20;let l=e.createGain();l.gain.value=t,c.connect(l).connect(a.gain);let h=e.createGain();h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(1,n+.08),h.gain.linearRampToValueAtTime(0,n+.5);let u=e.createStereoPanner();u.pan.value=Math.random()*1.2-.6,i.connect(o).connect(a).connect(h).connect(u).connect(this.out),i.start(n),c.start(n),i.stop(n+.55),c.stop(n+.55)}gull(t){let e=this.ctx,n=e.currentTime;for(let i=0;i<2+Math.floor(Math.random()*3);i++){let r=n+i*(.28+Math.random()*.1),o=e.createOscillator();o.type="triangle";let a=1500+Math.random()*300;o.frequency.setValueAtTime(a*1.25,r),o.frequency.exponentialRampToValueAtTime(a*.7,r+.22);let c=e.createGain();c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(.012,r+.03),c.gain.linearRampToValueAtTime(0,r+.24);let l=e.createStereoPanner();l.pan.value=t,o.connect(c).connect(l).connect(this.out),o.start(r),o.stop(r+.26)}}bell(){let t=this.ctx,e=t.currentTime,n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=900,n.connect(this.out);for(let[i,r,o]of[[82,.05,14],[165.5,.03,10],[219,.02,7],[296,.012,5],[421,.006,3]]){let a=t.createOscillator();a.frequency.value=i;let c=t.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(r,e+.02),c.gain.exponentialRampToValueAtTime(1e-4,e+o),a.connect(c).connect(n),a.start(e),a.stop(e+o)}}place(t){return[this.ctx.currentTime+t/343,1/(1+t/80),300+11e3*Math.exp(-t/500)]}burst({d:t,pan:e,dur:n,f:i,q:r=.7,type:o="bandpass",gain:a,rate:c=1,attack:l=.004,delay:h=0}){let u=this.ctx,[d,f,m]=this.place(t),v=d+h,g=u.createBufferSource();g.buffer=this.nb,g.playbackRate.value=c;let p=u.createBiquadFilter();p.type=o,p.frequency.value=i,p.Q.value=r;let y=u.createBiquadFilter();y.type="lowpass",y.frequency.value=m;let x=u.createGain();x.gain.setValueAtTime(0,v),x.gain.linearRampToValueAtTime(a*f,v+l),x.gain.exponentialRampToValueAtTime(1e-4,v+n);let M=u.createStereoPanner();M.pan.value=e,g.connect(p).connect(y).connect(x).connect(M).connect(this.out),g.start(v,Math.random()*2),g.stop(v+n+.05)}gun(t,e,n){this.ctx&&(n>=3?(this.burst({d:t,pan:e,dur:.3,f:1800,q:.4,gain:1,attack:.001}),this.burst({d:t,pan:e,dur:1.8,f:90,q:.5,type:"lowpass",gain:2.4,rate:.35}),this.burst({d:t,pan:e,dur:7,f:55,q:.5,type:"lowpass",gain:1,rate:.22,attack:.12}),this.burst({d:t+1400,pan:-e*.4,dur:4,f:80,q:.5,type:"lowpass",gain:.3,rate:.25,attack:.4})):n>1.2?(this.burst({d:t,pan:e,dur:.22,f:2200,q:.5,gain:.8,attack:.001}),this.burst({d:t,pan:e,dur:1.2,f:140,q:.6,type:"lowpass",gain:1.5,rate:.45}),this.burst({d:t,pan:e,dur:4,f:70,q:.5,type:"lowpass",gain:.5,rate:.3,attack:.08})):n>.5?(this.burst({d:t,pan:e,dur:.25,f:2500,q:.5,gain:.9,attack:.002}),this.burst({d:t,pan:e,dur:1.4,f:160,q:.6,type:"lowpass",gain:1.6,rate:.5}),this.burst({d:t,pan:e,dur:4.5,f:70,q:.5,type:"lowpass",gain:.7,rate:.3,attack:.08}),this.burst({d:t+900,pan:-e*.5,dur:3,f:120,q:.5,type:"lowpass",gain:.25,rate:.35,attack:.3})):n>.2?(this.burst({d:t,pan:e,dur:.2,f:2e3,q:.6,gain:.5}),this.burst({d:t,pan:e,dur:.9,f:260,q:.6,type:"lowpass",gain:.8,rate:.6})):(this.burst({d:t,pan:e,dur:.09,f:3200,q:.8,gain:.35,attack:.001}),this.burst({d:t,pan:e,dur:.35,f:400,q:.6,type:"lowpass",gain:.25,rate:.8})))}horn(){if(!this.ctx)return;let t=this.ctx;for(let[e,n]of[[0,110],[1.1,92]]){let i=t.currentTime+e,r=t.createOscillator();r.type="sawtooth",r.frequency.value=n;let o=t.createOscillator();o.type="sawtooth",o.frequency.value=n*1.5;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=700;let c=t.createGain();c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.07,i+.1),c.gain.setValueAtTime(.07,i+.85),c.gain.linearRampToValueAtTime(0,i+1),r.connect(a),o.connect(a),a.connect(c).connect(this.out),r.start(i),o.start(i),r.stop(i+1.05),o.stop(i+1.05)}}click(){this.ctx&&this.burst({d:0,pan:0,dur:.04,f:3e3,q:2,gain:.05,attack:.001})}boom(t,e,n){this.ctx&&(this.burst({d:t,pan:e,dur:.5,f:900,q:.4,gain:1.2*n,attack:.002}),this.burst({d:t,pan:e,dur:3.5,f:60,q:.5,type:"lowpass",gain:2.6*n,rate:.2,attack:.02}),this.burst({d:t,pan:e,dur:9,f:40,q:.5,type:"lowpass",gain:1.2*n,rate:.15,attack:.3}))}splash(t,e,n){this.ctx&&this.burst({d:t,pan:e,dur:n?1.6:.5,f:900,q:.4,gain:n?.35:.08,attack:.02})}strike(t,e){this.ctx&&(this.burst({d:t,pan:e,dur:.18,f:1400,q:1.2,gain:.6,attack:.001}),this.burst({d:t,pan:e,dur:.6,f:300,q:.8,gain:.5,rate:.7,delay:.02}))}flak(t,e){this.ctx&&(this.burst({d:t,pan:e,dur:.25,f:2600,q:.6,gain:.55,attack:.001}),this.burst({d:t,pan:e,dur:.9,f:180,q:.6,type:"lowpass",gain:.6,rate:.5}))}rattle(t,e,n=4,i=8,r=1500,o=.25){if(this.ctx)for(let a=0;a<n;a++)this.burst({d:t,pan:e,dur:.07,f:r,q:.8,gain:o*(.8+.4*Math.random()),attack:.001,delay:a/i})}engines(t,e=1,n=0){if(!this.ctx)return;let i=this.ctx;if(!this.eng){let c=i.createGain();c.gain.value=0;let l=i.createStereoPanner(),h=i.createBiquadFilter();h.type="lowpass",h.frequency.value=900;let u=[[92,"sawtooth",.5],[184,"square",.18],[276,"sawtooth",.12]].map(([p,y,x])=>{let M=i.createOscillator();M.type=y,M.frequency.value=p;let T=i.createGain();return T.gain.value=x,M.connect(T).connect(h),M.start(),M}),d=i.createOscillator();d.frequency.value=3.2;let f=i.createGain();f.gain.value=0,d.connect(f).connect(c.gain),d.start();let m=i.createBufferSource();m.buffer=this.nb,m.loop=!0,m.playbackRate.value=1.6,m.start();let v=i.createBiquadFilter();v.type="bandpass",v.frequency.value=900,v.Q.value=.7;let g=i.createGain();g.gain.value=.35,m.connect(v).connect(g).connect(h),h.connect(c).connect(l).connect(this.out),this.eng={g:c,p:l,lp:h,oscs:u,lg:f}}let r=this.eng,o=i.currentTime,a=Math.min(t,1)*.12;r.g.gain.setTargetAtTime(a,o,.25),r.lg.gain.setTargetAtTime(a*.35,o,.25),r.p.pan.setTargetAtTime(n,o,.3),r.lp.frequency.setTargetAtTime(400+1400*Math.min(t,1),o,.3),r.oscs.forEach((c,l)=>c.frequency.setTargetAtTime([92,184,276][l]*e,o,.3))}drumHit(t,e=0){let n=this.ctx,i=n.currentTime+e,r=n.createOscillator();r.frequency.setValueAtTime(95,i),r.frequency.exponentialRampToValueAtTime(52,i+.35);let o=n.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(t,i+.006),o.gain.exponentialRampToValueAtTime(1e-4,i+.9),r.connect(o).connect(this.out),r.start(i),r.stop(i+1);let a=n.createBufferSource();a.buffer=this.nb;let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=900;let l=n.createGain();l.gain.setValueAtTime(t*.5,i),l.gain.exponentialRampToValueAtTime(1e-4,i+.12),a.connect(c).connect(l).connect(this.out),a.start(i,Math.random()),a.stop(i+.15)}conch(){if(!this.ctx)return;let t=this.ctx;for(let[e,n,i]of[[0,233,2.4],[2.8,233,3.2]]){let r=t.currentTime+e,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(n*.94,r),o.frequency.linearRampToValueAtTime(n,r+.4),o.frequency.linearRampToValueAtTime(n*.97,r+i);let a=t.createOscillator();a.frequency.value=5.2;let c=t.createGain();c.gain.value=2.5,a.connect(c).connect(o.frequency);let l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=700,l.Q.value=1.4;let h=t.createGain();h.gain.setValueAtTime(0,r),h.gain.linearRampToValueAtTime(.09,r+.5),h.gain.setValueAtTime(.09,r+i-.6),h.gain.linearRampToValueAtTime(0,r+i),o.connect(l).connect(h).connect(this.out),o.start(r),a.start(r),o.stop(r+i+.1),a.stop(r+i+.1),this.burst({d:0,pan:0,dur:i,f:1500,q:.8,gain:.02,attack:.4,delay:e})}}update(t,{speed:e,aw:n,gust:i,roll:r,rollRate:o,heave:a,flog:c,force:l,landDir:h,evening:u}){if(!this.ctx)return;let d=this.ctx.currentTime,f=Math.min(n/12,1.2);this.sea.g.gain.setTargetAtTime(.04+f*.06,d,.5),this.sea2.g.gain.setTargetAtTime(.004+f*.012,d,.5),this.bow.g.gain.setTargetAtTime(Math.min(Math.max(e,0)/5,1)**1.5*.12,d,.3),this.bow.f.frequency.setTargetAtTime(700+e*220,d,.3),this.wind.g.gain.setTargetAtTime(.01+f*f*.05,d,.4),this.wind.f.frequency.setTargetAtTime(250+n*35,d,.4),this.whistle.g.gain.setTargetAtTime(Math.max(0,n-7)*.004*(.5+i),d,.6),this.whistle.f.frequency.setTargetAtTime(1400+n*60,d,.6),this.flog.g.gain.setTargetAtTime(c*.08,d,.15),this.flogDepth.gain.setTargetAtTime(c*.06,d,.15),this.flogLfo.frequency.setTargetAtTime(3+n*.5,d,.3),d>this.nextSlap&&(a<-.15||Math.abs(o)>.05)&&(this.thump(Math.min(.08+Math.abs(a)*.25+Math.abs(o)*1.2,.35),80+Math.random()*40,.3+Math.random()*.3,Math.sign(o)*.5),this.nextSlap=d+.6+Math.random()*1.2),d>this.nextCreak&&Math.abs(o)>.02+Math.random()*.03&&(this.creak(.5+Math.min(Math.abs(o)*8,1)*.5+l*1e-5),this.nextCreak=d+1.5+Math.random()*3),h!==null&&d>this.nextGull&&(this.gull(h),this.nextGull=d+6+Math.random()*14),u&&d>this.nextBell&&(this.bell(),this.nextBell=d+40+Math.random()*30),this.lastRoll=r}battle(t,{beat:e,stroke:n,fire:i,on:r}){if(!this.ctx)return;if(!this.fireN){let a=this.ctx,c=a.createBufferSource();c.buffer=this.nb,c.loop=!0,c.playbackRate.value=1.6,c.start();let l=a.createBiquadFilter();l.type="highpass",l.frequency.value=1500;let h=a.createGain();h.gain.value=0,c.connect(l).connect(h).connect(this.out),this.fireN=h,this.nextPop=0,this.lastStroke=n}let o=this.ctx.currentTime;if(this.fireN.gain.setTargetAtTime(i*.06,o,.5),i>.05&&o>this.nextPop&&(this.burst({d:20/i,pan:Math.random()-.5,dur:.05,f:2500,q:1,gain:.2*i,attack:.001}),this.nextPop=o+Math.random()*.15/i),r&&e>0){let a=Math.floor(this.lastStroke/(Math.PI*2));Math.floor(n/(Math.PI*2))>a&&(this.drumHit(.25+e*.05),e>=3&&this.drumHit(.18,.22))}this.lastStroke=n}};var Rn=(s,t,e)=>s+(t-s)*e,bu=s=>s*s*(3-2*s),ii=s=>s.ships.find(t=>t.side==="A"&&t.flagship),MM=s=>Math.round(Math.abs(s)*57.3),tm=s=>Math.round(s).toLocaleString("en"),Mu={f46:s=>s.filter(t=>!t.wing).map(t=>({slot:t.id,type:"gun",cal:46,n:3,tier:1})),f80:s=>s.filter(t=>t.stock>=0).map(t=>({slot:t.id,type:"gun",cal:80,n:2,tier:1}))},em=[{name:"line",dur:2.4,ts:1.5,setup:"fleet",fast:26,pick:"flag",flat:[{pos:[-170,6,260],look:[40,22,-500],fov:36},{pos:[-160,6,200],look:[40,22,-500],fov:36}]},{name:"enemy",dur:1.9,ts:1.5,pick:"ebb",flat:[{pos:[700,30,380],look:[0,15,-150],fov:34},{pos:[690,30,330],look:[0,15,-150],fov:34}]},{name:"incoming",dur:2.2,ts:1,setup:"charge",until:"incoming",pick:"hit",flat:[{pos:[-300,14,-160],look:[0,20,0],fov:30},{pos:[-285,14,-130],look:[0,20,0],fov:30}]},{name:"charge",dur:1.9,ts:1.4,pick:"dd",flat:[{pos:[-70,4,190],look:[30,8,-10],fov:36},{pos:[-60,4,150],look:[30,8,-10],fov:36}]},{name:"torps",dur:2.6,ts:4,until:"torps",top:!0},{name:"shell",dur:4.4,setup:"shell",shell:!0,cap:s=>s.shellCap},{name:"kill",dur:3,ts:1.6,until:"kill",pick:"victim",cam:[{yaw:1,pitch:.06,dist:420,lift:8,fov:32},{yaw:.85,pitch:.07,dist:380,lift:8,fov:32}]},{name:"torphit",dur:2.2,ts:1.2,until:"torphit",pick:"torped",cam:[{yaw:-1.2,pitch:.06,dist:380,lift:8,fov:32},{yaw:-1.1,pitch:.07,dist:350,lift:8,fov:32}]},{name:"stock",dur:3.2,ts:1,setup:"refit",fire:.5,pick:"flag",cap:s=>["Stock battleship",`8 \xD7 36 cm \xB7 GM ${s.gm0.toFixed(1)} m`],flat:[{pos:[-60,12,230],look:[0,12,0],fov:30},{pos:[-54,12,205],look:[0,12,0],fov:30}]},{name:"refit46",dur:3,ts:1,refit:"f46",pick:"flag",orbit:[2.6,.35,1,2.2,.3,.95],cap:s=>["Refit: six triple 46 cm turrets",`+${tm(s.fits.f46.dW)} t \xB7 GM ${s.gm0.toFixed(1)} \u2192 ${s.fits.f46.gm.toFixed(1)} m`]},{name:"b46",dur:3.6,ts:1.2,fire:.5,pick:"flag",cap:s=>["Fire",s.heel>1.5?`She heels ${s.heel}\xB0`:""],flat:[{pos:[-70,14,300],look:[0,12,0],fov:30},{pos:[-64,14,288],look:[0,12,0],fov:30}]},{name:"refit80",dur:2.7,ts:1,refit:"f80",pick:"flag",orbit:[-2.4,.3,1.05,-2,.26,1],cap:s=>["Refit: four twin 80 cm turrets",`+${tm(s.fits.f80.dW)} t \xB7 GM ${s.fits.f80.gm.toFixed(2)} m`]},{name:"b80",dur:2,ts:1,fire:.45,pick:"flag",cap:()=>["Fire",""],flat:[{pos:[120,30,-170],look:[-200,10,300],fov:34},{pos:[122,30,-165],look:[-200,10,300],fov:34}]},{name:"roll",dur:3.8,ts:1.8,pick:"flag",cap:s=>["Her own recoil rolls her over",`heel ${s.heelNow}\xB0`],flat:[{pos:[-80,14,320],look:[0,10,0],fov:30},{pos:[-74,15,300],look:[0,8,0],fov:30}]},{name:"impact",dur:3.4,ts:1.4,until:"landing",pick:"beam",cap:()=>["...as her 80 cm shells arrive",""],cam:[{yaw:2.55,pitch:.07,dist:1300,lift:40,fov:30},{yaw:2.48,pitch:.08,dist:1200,lift:40,fov:30}]},{name:"end",dur:4.4,ts:1,pick:"flag",title:[1.4,4.4],flat:[{pos:[-260,22,420],look:[0,4,0],fov:30},{pos:[-240,24,390],look:[0,4,0],fov:30}]}],wu=em.reduce((s,t)=>s+t.dur,0),bc=class{constructor(t,e=em){this.c=t,this.b=t.battle,this.shots=e,this.cur=-1,this.title=document.getElementById("endcard"),this.tag=document.getElementById("tag"),this.cap=document.getElementById("cap"),this.b.waves=!1;let n=ii(this.b),i=is(n.meta);this.fits={f46:ei({kind:"bb",mounts:Mu.f46(i)},this.b.art),f80:ei({kind:"bb",mounts:Mu.f80(i)},this.b.art)},this.gm0=ei(Bn("bb",n.meta),this.b.art).gm,this.heel=0,this.heelNow=0}stageFleet(){let t=this.b,e=ii(t),n=e.body.pos.clone(),i=e.body.yaw+Math.PI/2;this.H0=e.body.yaw;let r=t.ships.filter(f=>f.side==="A"),o=r.filter(f=>f.kind==="dd"),a=r.filter(f=>f.kind==="ca"),c=[o[0],r.find(f=>f.kind==="cl"),a[0],e,r.find(f=>f.kind==="bc"),a[1],o[1],o[2]].filter(Boolean),l=Math.sin(i),h=Math.cos(i),u=Math.cos(i),d=-Math.sin(i);c.forEach((f,m)=>{let v=900-m*450;f.body.place(n.x+l*v,n.z+h*v,i,12),f.body.ctl.tele=3,f.noSteer=!0,f.station=null,f.order=null}),["dd","dd","ca","bb","ca","ca","dd","dd","dd"].forEach((f,m)=>{let v=2600-m*470,g=4800,p=t.add(f,"E",n.x+l*v+u*g,n.z+h*v+d*g,i+Math.PI,12);p.body.ctl.tele=3,p.noSteer=!0})}stageRefit(){let t=this.b;this.c.fx.clear(),this.c.torps.list.length=0,this.c.arty.shells.length=0;for(let o of t.ships)(o.side==="E"||o.side==="A"&&!o.flagship)&&(o.gone=!0,o.alive=!1);let e=ii(t);e.body.place(e.body.pos.x,e.body.pos.z,this.H0??e.body.yaw,6),e=t.refit(e,Bn("bb",e.meta)),e.noSteer=!0;let n=e.body.pos,i=e.body.yaw;e.body.ctl.tele=2;let r=i+Math.PI/2;["ca","dd","ca","dd","ca","dd"].forEach((o,a)=>{let c=(a-2.5)*420,l=5500+a%2*300,h=t.add(o,"E",n.x+Math.sin(r)*l+Math.sin(i)*c,n.z+Math.cos(r)*l+Math.cos(i)*c,i,5);h.holdFire=!0,h.torps=[],h.noSteer=!0})}beam(){let t=ii(this.b),e=this.b.ships.filter(n=>n.side==="E"&&n.alive);return e.filter(n=>n.kind==="ca").sort((n,i)=>n.body.pos.distanceTo(t.body.pos)-i.body.pos.distanceTo(t.body.pos))[0]??e[0]??t}shotAt(t){let e=0,n=this.shots;for(let i=0;i<n.length;i++){if(t<e+n[i].dur||i===n.length-1)return[i,t-e];e+=n[i].dur}return[n.length-1,0]}ts(t){let e=this.shots[this.shotAt(t)[0]];return e.shell?this.shellTs??2:e.ts??1}start(t){let e=this.shots[t],n=this.b,i=this.c;if(this.cur=t,this.heel=0,e.setup==="fleet"&&this.stageFleet(),e.setup==="refit"&&this.stageRefit(),e.setup==="charge"){let a=n.ships.find(c=>c.side==="A"&&c.kind==="dd"&&c.alive);if(a){let c=ii(n);a.noSteer=!1,a.order={x:c.body.pos.x+Math.cos(c.body.yaw)*6e3,z:c.body.pos.z-Math.sin(c.body.yaw)*6e3},a.body.ctl.tele=4,this.dd=a}}if(e.fast&&i.fast(e.fast),e.until==="incoming"&&i.fastUntil(()=>i.arty.shells.some(a=>a.from.side==="E"&&a.g.cal>.15&&a.v.y<0&&a.p.y<120&&n.ships.some(c=>c.side==="A"&&c.alive&&c.body.pos.distanceTo(a.p)<260&&(this.hitShip=c))),60),e.until==="torps"&&i.fastUntil(()=>i.torps.list.filter(a=>a.alive&&a.from.side==="A"&&a.run>300).length>=4,160),e.setup==="shell"&&this.startShell(),e.until==="kill"&&i.fastUntil(()=>!this.victim||!this.victim.alive,25),e.until==="torphit"){let a=n.log.length;i.fastUntil(()=>n.log.slice(a).some(c=>c.kind==="torphit"&&c.ship.side==="E"&&(this.torped=c.ship)),260),i.fast(.3)}let r=ii(n);(e.refit||e.fire!==void 0||e.until==="landing"||e.setup==="refit")&&(r.holdFire=!0),e.refit?(i.fx.clear(),this.queue=Mu[e.refit](is(r.meta)),r=n.refit(r,{kind:"bb",mounts:[]}),r.holdFire=!0,r.noSteer=!0,this.added=0,this.refitDur=e.dur*.8):this.queue=null,e.fire!==void 0?(this.fireAt=e.fire,this.fired=!1):this.fireAt=void 0,e.until==="landing"&&i.fastUntil(()=>i.arty.shells.some(a=>a.from===r&&a.v.y<0&&a.p.y<160),30);let o={ebb:n.ships.find(a=>a.side==="E"&&a.kind==="bb"&&a.alive)??r,flag:r,hit:this.hitShip,dd:this.dd,victim:this.victim,torped:this.torped??this.beam(),beam:this.beam()};this.ship=o[e.pick]??r}startShell(){let t=this.b,e=ii(t),n=(l,h)=>{let u=e.body.toLocal(h.body.pos.clone(),new _),d=l.meta.at,f=Math.atan2(-(u.x-d[0]),u.z-d[2]),m=g=>ht.euclideanModulo(g+Math.PI,Math.PI*2)-Math.PI,v=m(f-l.rest);return v>m(l.meta.arc[0]-l.rest)+.1&&v<m(l.meta.arc[1]-l.rest)-.1&&h.body.pos.distanceTo(e.body.pos)<l.g.range*.85},i=t.ships.filter(l=>l.side==="E"&&l.alive).sort((l,h)=>l.hp-h.hp),r=null;this.victim=null;for(let l of i)if(r=e.turrets.filter(h=>!h.broken&&h.meta.at[2]>0).find(h=>n(h,l)),r){this.victim=l;break}if(!r){for(let l of i)if(r=e.turrets.find(h=>!h.broken&&n(h,l)),r){this.victim=l;break}}if(this.shellObj=null,this.shellEnd=null,this.shellTu=null,!this.victim)return;t.snapAim(e,[this.victim],.05),r.lastShell=null;for(let l of e.turrets)l.perfect=l===r,l.reload=l===r?.05:Math.max(l.reload,8);e.holdFire=!1;let o=this.victim.body.pos.distanceTo(e.body.pos),c=br(r.meta.gun,o)?.t??10;this.shellTs=(c+1.4)/(this.shots.find(l=>l.shell).dur-.6),this.shellTu=r,this.shellCap=[`One ${Math.round(Ee[r.meta.gun].calCm)} cm shell`,`${(o/1e3).toFixed(1)} km \xB7 ${c.toFixed(1)} s in the air`]}apply(t){let[e,n]=this.shotAt(t);e!==this.cur&&this.start(e);let i=this.shots[e],r=this.b,o=ii(r);if(this.queue){let l=Math.min(this.queue.length,Math.floor(n/this.refitDur*this.queue.length)+1);l>this.added&&(this.added=l,this.c.event?.("drop",o.body.pos),o=r.refit(o,{kind:"bb",mounts:this.queue.slice(0,l)}),o.holdFire=!0,o.noSteer=!0,this.ship=o)}if(this.fireAt!==void 0&&!this.fired&&n>=this.fireAt-.3){this.fired=!0;let l=r.ships.filter(h=>h.side==="E"&&h.alive).sort((h,u)=>h.body.pos.distanceTo(o.body.pos)-u.body.pos.distanceTo(o.body.pos));l.length&&(r.snapAim(o,l,.25),o.holdFire=!1)}if(i.shell&&this.shellTu){let l=this.shellTu.lastShell;!this.shellObj&&l&&this.c.arty.shells.includes(l)&&(this.shellObj=l,this.c.arty.tracked=l),this.shellObj&&!this.c.arty.shells.includes(this.shellObj)&&!this.shellEnd&&(this.shellEnd=this.shellObj.p.clone(),this.endDir=this.shellObj.v.clone().setY(0).normalize(),this.pull=0),this.shellObj&&(o.holdFire=!0)}let a=MM(o.body.heel);this.heelNow=a,this.heel=Math.max(this.heel,a);let c=i.cap?i.cap(this,n):null;return this.tag&&(this.tag.textContent=c?.[0]??"",this.tag.style.opacity=c?1:0),this.cap&&(this.cap.textContent=c?.[1]??"",this.cap.style.opacity=c?.[1]?1:0),this.title&&(this.title.style.opacity=i.title?ht.clamp((n-i.title[0])/.8,0,1):0),{fade:Math.min(1,t/.4,(wu-t)/.35+1e-4)}}focus(){let t=this.shots[this.cur];return t?.shell?this.shellEnd??this.shellObj?.p??this.victim?.body.pos??this.c.rcam.target:t?.top?this.topAt??this.c.rcam.target:this.ship?this.ship.body.pos:this.c.rcam.target}camera(t){let[e,n]=this.shotAt(t),i=this.shots[e],r=this.c.camera,o=bu(Math.min(n/i.dur,1)),a=this.ship??ii(this.b),c=a.body;if(i.shell){r.fov=40,r.updateProjectionMatrix();let y=this.shellObj;if(y&&!this.shellEnd){let x=y.v.clone().normalize(),M=new _(-x.z,0,x.x).normalize();this.camPos=y.p.clone().addScaledVector(x,-9).add(new _(0,1.4,0)).addScaledVector(M,3.2),r.position.copy(this.camPos),r.lookAt(y.p.clone().addScaledVector(x,70).add(new _(0,-6,0)))}else if(this.shellEnd&&this.camPos){this.pull=Math.min((this.pull??0)+1/30/.7,1);let x=this.endDir??new _(0,0,1),M=this.shellEnd.clone().addScaledVector(x,-(40+220*bu(this.pull))).add(new _(0,8+22*bu(this.pull),0));r.position.copy(M),r.lookAt(this.victim?this.victim.body.pos.clone().setY(12):this.shellEnd)}else if(this.shellTu&&this.victim){let x=ii(this.b),M=this.shellTu;r.position.copy(x.body.toWorld(new _(M.meta.at[0],M.meta.at[1]+8,M.meta.at[2]-26),new _)),r.lookAt(this.victim.body.pos.clone().setY(30))}r.updateMatrixWorld();return}if(i.top){let y=this.c.torps.list.filter(T=>T.alive&&T.from.side==="A");if(y.length){if(!this.spread||!this.spread.some(T=>T.alive)){let T=Math.max(...y.map(R=>R.t0));this.spread=y.filter(R=>Math.abs(R.t0-T)<.5)}y=this.spread.filter(T=>T.alive)}y.length&&(this.topAt=y.reduce((T,R)=>T.add(R.p),new _).divideScalar(y.length).setY(0),this.topDir=y.reduce((T,R)=>T.add(R.d),new _).normalize());let x=this.topAt??ii(this.b).body.pos,M=this.topDir??new _(1,0,0);r.fov=38,r.updateProjectionMatrix(),r.position.copy(x).addScaledVector(M,-240+70*o).add(new _(0,48-6*o,0)),r.lookAt(x.clone().addScaledVector(M,900).setY(0)),r.updateMatrixWorld();return}if(i.orbit){let[y,x,M,T,R,C]=i.orbit,D=c.yaw+Rn(y,T,o),b=Rn(x,R,o),E=a.meta.L*1.1*Rn(M,C,o),U=new _(c.pos.x,10,c.pos.z);r.fov=34,r.updateProjectionMatrix(),r.position.set(U.x+Math.sin(D)*Math.cos(b)*E,U.y+Math.sin(b)*E,U.z+Math.cos(D)*Math.cos(b)*E),r.lookAt(U),r.updateMatrixWorld();return}let l=(y,x)=>[Rn(y[0],x[0],o),Rn(y[1],x[1],o),Rn(y[2],x[2],o)];if(i.flat){let[y,x]=i.flat;r.fov=Rn(y.fov,x.fov,o),r.updateProjectionMatrix();let M=Math.cos(c.yaw),T=Math.sin(c.yaw),R=C=>new _(c.pos.x+C[0]*M+C[2]*T,C[1],c.pos.z-C[0]*T+C[2]*M);r.position.copy(R(l(y.pos,x.pos))),r.lookAt(R(l(y.look,x.look))),r.updateMatrixWorld();return}if(i.local){let[y,x]=i.local;r.fov=Rn(y.fov,x.fov,o),r.updateProjectionMatrix(),r.position.copy(c.toWorld(new _(...l(y.pos,x.pos)),new _)),r.up.set(0,1,0).applyQuaternion(c.quat),r.lookAt(c.toWorld(new _(...l(y.look,x.look)),new _)),r.updateMatrixWorld(),r.up.set(0,1,0);return}let[h,u]=i.cam;r.fov=Rn(h.fov,u.fov,o),r.updateProjectionMatrix();let d=Rn(h.yaw,u.yaw,o),f=Rn(h.pitch,u.pitch,o),m=Rn(h.dist,u.dist,o),v=Rn(h.lift,u.lift,o),g=new _(c.pos.x,v,c.pos.z),p=c.yaw+Math.PI+d;r.position.set(g.x+Math.sin(p)*Math.cos(f)*m,g.y+Math.sin(f)*m,g.z+Math.cos(p)*Math.cos(f)*m),r.lookAt(g),r.updateMatrixWorld()}};var wM=s=>s*s*(3-2*s),SM=(s,t,e)=>s+(t-s)*e,nm=[{name:"deck",dur:4.6,ts:1,cap:()=>["Carrier strike","fighters \xB7 torpedo bombers \xB7 dive bombers"]},{name:"climb",dur:3,ts:1.4},{name:"torpedo",dur:3,ts:1,cap:()=>["Torpedo bombers","one torpedo each"]},{name:"dogfight",dur:3.6,ts:.9,cap:()=>["Their fighters come up",""]},{name:"flak",dur:3.2,ts:1,cap:()=>["Anti-aircraft fire",""]},{name:"run",dur:4,ts:1,cap:()=>["30 m above the sea","drop at 1 km"]},{name:"tracks",dur:2.8,ts:4},{name:"torphit",dur:2.8,ts:1},{name:"dive",dur:3.4,ts:1,cap:()=>["Dive bombers","250 kg"]},{name:"bombs",dur:3,ts:.8},{name:"end",dur:4.6,ts:1,title:[1.6,4.6]}],EM=nm.reduce((s,t)=>s+t.dur,0),Mc=class{constructor(t,e=nm){this.c=t,this.b=t.battle,this.air=t.air,this.shots=e,this.cur=-1,this.title=document.getElementById("endcard"),this.tag=document.getElementById("tag"),this.cap=document.getElementById("cap"),this.len=EM,this.stage()}stage(){let t=this.b,e=t.flagship()?.body.yaw??0,n=t.flagship()?.body.pos.clone()??new _;t.reset(),t.waves=!1;let i=Math.sin(e),r=Math.cos(e),o=Math.cos(e),a=-Math.sin(e),c=(g,p)=>[n.x+i*g+o*p,n.z+r*g+a*p],l=t.add("cv","A",...c(0,0),e,14,{flagship:!0});l.body.ctl.tele=3,l.noSteer=!0;for(let[g,p,y]of[["ca",900,700],["ca",-700,700],["cl",1200,-500],["dd",1500,300],["dd",-400,-800]]){let x=t.add(g,"A",...c(p,y),e,14);x.body.ctl.tele=3,x.noSteer=!0,x.holdFire=!0}let h=c(6500,6200),u=e-Math.PI/2-.4,d=Math.sin(u),f=Math.cos(u),m=t.add("bb","E",h[0],h[1],u,10);this.ebb=m;for(let[g,p,y]of[["ca",700,600],["ca",-800,500],["dd",1300,-400],["dd",-300,-900],["cl",400,1300]]){let x=t.add(g,"E",h[0]+d*p+f*y,h[1]+f*p-d*y,u,10);x.body.ctl.tele=3,x.noSteer=!0,x.holdFire=!0,x.torps=[]}m.body.ctl.tele=3,m.noSteer=!0,m.holdFire=!0;let v=t.add("cv","E",h[0]-f*4500,h[1]+d*4500,u,10,{planes:{f:3,t:0,b:0}});v.body.ctl.tele=3,v.noSteer=!0;for(let g of t.ships)g.side==="E"&&(g.aa.k=.3);l.focus=m,l.wing.cool=1e9,this.cv=l,this.ecv=v}shotAt(t){let e=0,n=this.shots;for(let i=0;i<n.length;i++){if(t<e+n[i].dur||i===n.length-1)return[i,t-e];e+=n[i].dur}return[n.length-1,0]}ts(t){return this.shots[this.shotAt(t)[0]].ts??1}sq(t,e){let n=this.air.sq.filter(i=>i.side===t&&i.kind===e&&i.n>0);return n.find(i=>i.state!=="home")??n[0]}launch(t,e){this.air.launch(this.cv,t,e),this.cv.wing.cool=1e9}start(t){let e=this.shots[t],n=this.b,i=this.c,r=this.air,o=this.cv;if(this.cur=t,this.q=null,this.ship=null,e.name==="deck"&&(i.fast(2),this.launch("t",{job:"strike",target:this.ebb}),this.q=this.sq("A","t")),e.name==="climb"&&(this.q=this.sq("A","t")),e.name==="torpedo"&&(i.fast(12),this.launch("f",{job:"escort",escort:this.sq("A","t"),target:this.ebb}),i.fast(26),this.q=this.sq("A","t")),e.name==="dogfight"&&(i.fastUntil(()=>r.sq.some(a=>a.side==="E"&&a.kind==="f"&&a.state!=="up"&&r.sq.some(c=>c.side==="A"&&c.kind==="f"&&c.pos.distanceTo(a.pos)<1100)),160),i.fastUntil(()=>r.sq.some(a=>a.side==="E"&&a.kind==="f"&&a.dmg>.55),20),this.q=r.sq.find(a=>a.side==="E"&&a.kind==="f"&&a.dmg>.55)??r.sq.find(a=>a.side==="E"&&a.kind==="f")??this.sq("A","f"),this.q2=this.sq("A","f"),this.fall0=r.falling.length,this.down=null),e.name==="flak"&&(i.fastUntil(()=>{let a=this.sq("A","t");return!a||a.pos.distanceTo(this.ebb.body.pos)<5200},120),this.launch("b",{job:"strike",target:this.ebb}),this.q=this.sq("A","t")),e.name==="run"&&(i.fastUntil(()=>{let a=this.sq("A","t");return!a||Math.hypot(a.pos.x-this.ebb.body.pos.x,a.pos.z-this.ebb.body.pos.z)<2200},120),this.q=this.sq("A","t")),e.name==="dive"&&(i.fastUntil(()=>r.sq.some(a=>a.side==="A"&&a.kind==="b"&&Math.hypot(a.pos.x-this.ebb.body.pos.x,a.pos.z-this.ebb.body.pos.z)<1700),200),this.q=this.sq("A","b")),e.name==="bombs"&&(i.fastUntil(()=>{let a=this.sq("A","b");return!a||a.state!=="dive"||a.pos.y<420},30),this.ship=this.ebb),e.name==="tracks"&&i.fast(4),e.name==="torphit"){let a=n.log.length;i.fastUntil(()=>n.log.slice(a).some(c=>c.kind==="torphit"&&c.ship.side==="E"),40),this.ship=this.ebb}e.name==="end"&&(i.fast(25),this.ship=this.ebb),this.qPos=this.q?this.q.pos.clone():null}apply(t){let[e,n]=this.shotAt(t);e!==this.cur&&this.start(e);let i=this.shots[e],r=i.cap?i.cap(this,n):null;return this.tag&&(this.tag.textContent=r?.[0]??"",this.tag.style.opacity=r?1:0),this.cap&&(this.cap.textContent=r?.[1]??"",this.cap.style.opacity=r?.[1]?1:0),this.title&&(this.title.style.opacity=i.title?ht.clamp((n-i.title[0])/.8,0,1):0),{fade:Math.min(1,t/.4,(this.len-t)/.35+1e-4)}}focus(){return this.q?.pos??this.ship?.body.pos??this.cv.body.pos}lead(){return this.q&&this.q.n>0&&(this.qPos=this.q.pos.clone()),this.qPos??this.cv.body.pos}camera(t){let[e,n]=this.shotAt(t),i=this.shots[e],r=this.c.camera,o=wM(Math.min(n/i.dur,1)),a=(p,y,x)=>{r.fov=x,r.updateProjectionMatrix(),r.position.copy(p),r.lookAt(y),r.updateMatrixWorld()},c=this.cv.body,l=this.q,h=p=>new _(Math.sin(p),0,Math.cos(p)),u=p=>new _(Math.cos(p),0,-Math.sin(p));if(i.name==="deck"){let p=this.cv.meta.deck_top+8.7,y=c.toWorld(new _(5,p+2.4,108),new _),x=l?l.pos.clone().lerp(c.toWorld(new _(2,p+2,-40),new _),.5*(1-o)):c.pos;return a(y,x,40)}if(i.name==="climb"){let p=c.toWorld(new _(140,70+o*20,520),new _);return a(p,l?this.lead().clone().lerp(c.pos,.3):c.pos,36)}if(i.name==="torpedo"){let p=this.lead(),y=l?.yaw??0,x=p.clone().addScaledVector(u(y),-26+4*o).addScaledVector(h(y),14-10*o).add(new _(0,-3,0));return a(x,p.clone().addScaledVector(h(y),6),40)}if(i.name==="dogfight"){let p=this.air;!this.down&&this.camE&&p.falling.length>this.fall0&&(this.down=p.falling.slice(this.fall0).find(R=>R.side==="E"&&R.t<.2&&R.pos.distanceTo(this.camE)<80)??null);let y,x;if(this.down)y=this.down.pos,x=this.down.yaw,this.camE=this.camE?this.camE.lerp(y,.25):y.clone();else if(this.q?.n>0){let R=p.placeOf(this.q,this.q.n-1,new _);y=R.pos.clone(),x=R.yaw,this.camE=y.clone(),this.camY=x}else y=this.lead(),x=this.q?.yaw??0;let M=this.camE??y;this.down&&(x=this.camY??x);let T=M.clone().addScaledVector(u(x),38).addScaledVector(h(x),-26).add(new _(0,6,0));return this.down?(this.camP=this.camP?this.camP.lerp(T,.08):T,a(this.camP,y,42)):(this.camP=T,a(T,M.clone().addScaledVector(h(x),16),42))}if(i.name==="flak"){let p=this.lead(),y=l?.yaw??0,x=p.clone().addScaledVector(h(y),-48+8*o).addScaledVector(u(y),14).add(new _(0,9,0));return a(x,p.clone().addScaledVector(h(y),700).setY(p.y*.4),42)}if(i.name==="run"){let p=this.lead(),y=l?.yaw??0,x=p.clone().addScaledVector(u(y),16).addScaledVector(h(y),-42+8*o);return x.y=Math.max(p.y+5,7),a(x,p.clone().addScaledVector(h(y),500).setY(Math.max(p.y-25,2)),42)}if(i.name==="dive"){let p=this.lead(),y=l?.yaw??0,x=p.clone().addScaledVector(h(y),-42).add(new _(0,16,0)).addScaledVector(u(y),8),M=this.ebb.body.pos.clone().setY(0);return a(x,p.clone().lerp(M,.18),44)}if(i.name==="tracks"){let p=this.c.torps.list.filter(M=>M.alive&&M.from===this.cv);p.length&&(this.topAt=p.reduce((M,T)=>M.add(T.p),new _).divideScalar(p.length).setY(0),this.topDir=p[0].d.clone());let y=this.topAt??this.ebb.body.pos,x=this.topDir??h(0);return a(y.clone().addScaledVector(x,-200+40*o).add(new _(0,46,0)),y.clone().addScaledVector(x,700).setY(0),38)}let d=this.ebb.body,f=d.yaw+(i.name==="end"?2.4-.2*o:i.name==="bombs"?2:-1.2),m=i.name==="end"?SM(520,640,o):i.name==="bombs"?270:380,v=new _(d.pos.x,14,d.pos.z),g=new _(v.x+Math.sin(f)*m,i.name==="end"?60+30*o:34,v.z+Math.cos(f)*m);return a(g,v,i.name==="end"?34:32)}};var im="kurogane-designs";function TM(){try{return JSON.parse(localStorage.getItem(im)??"null")}catch{return null}}function AM(s){try{localStorage.setItem(im,JSON.stringify(s))}catch{}}var Ts=new _,wc=class{constructor(t){Object.assign(this,t),this.open=!1,this.ships=()=>this.battle.ships.filter(a=>a.player),this.designs=TM()??{},this.cur=0,this.slot=null;let e=this.el=document.createElement("div");e.id="dock",e.innerHTML=`
      <div class="dk-top"><b data-t="refit"></b><span class="dk-tabs"></span></div>
      <div class="dk-slots"></div>
      <div class="dk-panel">
        <div class="dk-slotname"></div>
        <div class="dk-row dk-type"></div>
        <div class="dk-lab" data-t="calibre"></div><div class="dk-row dk-cal"></div>
        <div class="dk-lab" data-t="barrels"></div><div class="dk-row dk-n"></div>
        <div class="dk-lab" data-t="tiers"></div><div class="dk-row dk-tier"></div>
        <div class="dk-hint" data-t="slotHint"></div>
      </div>
      <div class="dk-aa"></div>
      <div class="dk-stats"></div>
      <div class="dk-btns">
        <button type="button" class="dk-test" data-t="testFire"></button>
        <button type="button" class="dk-stock" data-t="stock"></button>
        <button type="button" class="dk-all" data-t="copyAll"></button>
        <button type="button" class="dk-go" data-t="sortie"></button>
      </div>
      <div class="dk-msg"></div>`,this.root.appendChild(e);let n=a=>e.querySelector(a);this.$={tabs:n(".dk-tabs"),slots:n(".dk-slots"),panel:n(".dk-panel"),name:n(".dk-slotname"),type:n(".dk-type"),cal:n(".dk-cal"),n:n(".dk-n"),tier:n(".dk-tier"),stats:n(".dk-stats"),msg:n(".dk-msg")},n(".dk-go").addEventListener("click",()=>this.close(!0)),n(".dk-stock").addEventListener("click",()=>{let a=this.ship();this.setDesign(a,Bn(a.kind,a.meta))}),n(".dk-all").addEventListener("click",()=>this.copyAll()),n(".dk-test").addEventListener("click",()=>this.testFire());for(let a of e.querySelectorAll("button"))a.addEventListener("pointerdown",c=>c.stopPropagation());this.drag=null,this.yaw=2.3,this.pitch=.32,this.dist=1,t.canvas.addEventListener("pointerdown",a=>{this.open&&a.button===0&&(this.drag=[a.clientX,a.clientY])}),addEventListener("pointermove",a=>{this.drag&&(this.yaw-=(a.clientX-this.drag[0])*.006,this.pitch=ht.clamp(this.pitch+(a.clientY-this.drag[1])*.004,.04,1.2),this.drag=[a.clientX,a.clientY])}),addEventListener("pointerup",()=>{this.drag=null}),t.canvas.addEventListener("wheel",a=>{this.open&&(this.dist=ht.clamp(this.dist*Math.exp(a.deltaY*.001),.4,3))},{passive:!0});let i=new Map,r=null;t.canvas.addEventListener("pointerdown",a=>{if(!(!this.open||a.pointerType!=="touch")&&(i.set(a.pointerId,[a.clientX,a.clientY]),i.size===2)){let[c,l]=[...i.values()];r={d:Math.hypot(c[0]-l[0],c[1]-l[1]),dist:this.dist},this.drag=null}}),addEventListener("pointermove",a=>{if(i.has(a.pointerId)&&(i.set(a.pointerId,[a.clientX,a.clientY]),r&&i.size===2)){let[c,l]=[...i.values()];this.dist=ht.clamp(r.dist*r.d/Math.max(Math.hypot(c[0]-l[0],c[1]-l[1]),1),.4,3),this.drag=null}});let o=a=>{i.delete(a.pointerId),i.size<2&&(r=null)};addEventListener("pointerup",o),addEventListener("pointercancel",o)}ship(){return this.ships()[this.cur]}designOf(t){return this.store?this.store.get(t)??Bn(t.kind,t.meta):this.designs[t.station?`${t.kind}@${t.station}`:t.kind+(t.flagship?"*":"")]??Bn(t.kind,t.meta)}keyOf(t){return t.station?`${t.kind}@${t.station}`:t.kind+(t.flagship?"*":"")}applyAll(){for(let t of this.ships()){let e=this.designs[this.keyOf(t)];e&&this.battle.refit(t,e)}}setDesign(t,e){let n=this.check?.(t,e);if(n)return this.flash(n),t;this.store?this.store.put(t,e):(this.designs[this.keyOf(t)]=e,AM(this.designs));let i=this.battle.refit(t,e);return this.render(),i}copyAll(){let t=this.ship(),e=this.designOf(t);for(let n of this.ships())n!==t&&n.kind===t.kind&&this.setDesign(n,JSON.parse(JSON.stringify(e)));this.flash(bt("copied"))}show(t){t!==void 0&&(this.cur=t,this.slot=null),this.entry=new Map(this.ships().map(e=>[e.uid,JSON.parse(JSON.stringify(this.designOf(e)))])),this.open=!0,this.el.classList.add("on"),this.el.querySelector(".dk-go").textContent=bt(this.store?"backYard":"sortie"),this.render()}bill(t){let e=this.entry?.get(t.uid);return e&&this.billFor?this.billFor(e,this.designOf(t)):null}close(t){if(this.store&&this.pay){let e={rivets:0,steel:0};for(let n of this.ships()){let i=this.bill(n);i&&(e.rivets+=i.rivets,e.steel+=i.steel)}if(!this.pay(e)){this.flash(bt("cantPay")(e));return}}this.open=!1,this.el.classList.remove("on"),t&&this.onSortie?.()}flash(t){this.$.msg.textContent=t,this.$.msg.classList.add("on"),clearTimeout(this._mt),this._mt=setTimeout(()=>this.$.msg.classList.remove("on"),2600)}testFire(){let t=this.ship();if(!t?.alive)return;let e=t.turrets.filter(n=>n.rest+.01<0||n.meta.arc[0]<-Math.PI/2).length;t.testAim={brg:e>=t.turrets.length/2?-Math.PI/2:Math.PI/2,elev:.14,fire:!0,t:0};for(let n of t.turrets)n.testFired=!1,n.reload=Math.min(n.reload,.5);this.sound?.start()}render(){let t=this.ship();if(!t)return;let e=this.designOf(t);this.$.tabs.innerHTML="",this.ships().forEach((l,h)=>{let u=document.createElement("button");u.type="button",u.className=(h===this.cur?"on":"")+(l.alive?"":" dead"),u.textContent=`${l.label??bt("short")[l.kind]}${l.flagship?" \u25C6":""}`,u.addEventListener("pointerdown",d=>d.stopPropagation()),u.addEventListener("click",()=>{this.cur=h,this.slot=null,this.render()}),this.$.tabs.appendChild(u)});let n=is(t.meta),i=this.slot&&n.find(l=>l.id===this.slot);if(this.$.panel.classList.toggle("on",!!i),i){let l=e.mounts.find(f=>f.slot===i.id)??{slot:i.id,type:"none",cal:36,n:2,tier:1};this.$.name.textContent=bt("slotName")(i);let h=(f,m,v,g)=>{f.innerHTML="";for(let[p,y]of m){let x=document.createElement("button");x.type="button",x.textContent=y,p===v&&(x.className="on"),x.addEventListener("pointerdown",M=>M.stopPropagation()),x.addEventListener("click",()=>g(p)),f.appendChild(x)}},u=f=>{let m=JSON.parse(JSON.stringify(e)),v=m.mounts.find(g=>g.slot===i.id);v||(v={slot:i.id,type:"gun",cal:l.cal,n:l.n,tier:1},m.mounts.push(v)),Object.assign(v,f),v.type==="none"&&(m.mounts=m.mounts.filter(g=>g!==v)),this.setDesign(t,m)};h(this.$.type,[["none",bt("empty")],["gun",bt("gun")],...i.wing?[["torp",bt("torp")]]:[]],l.type,f=>u({type:f}));let d=l.type==="gun";for(let f of["cal","n","tier"])this.$[f].classList.toggle("off",!d);h(this.$.cal,(this.cals?.()??Fp).map(f=>[f,String(f)]),l.cal,f=>u({type:"gun",cal:f})),h(this.$.n,[[1,bt("single")],[2,bt("twin")],[3,bt("triple")]],l.n,f=>u({type:"gun",n:f})),h(this.$.tier,[[1,"\xD71"],[2,"\xD72"],[3,"\xD73"]],l.tier??1,f=>u({type:"gun",tier:f}))}this.aaPanel(t,e);let r=ei(e,this.art),o=r.freeboard<=.3?"sink":r.gm<.05?"capsize":r.gm<.6?"tender":"ok",a=Math.max(0,...r.mounts.map(l=>Ee[l.gun].range)),c=ht.clamp(r.gm/3,0,1)*100;this.$.stats.innerHTML=`
      <div><i>${bt("disp")}</i><b>${Math.round(r.disp).toLocaleString("en")}</b> t</div>
      <div><i>${bt("speed")}</i><b>${(t.body.K.kn*r.speedK).toFixed(1)}</b> kn</div>
      <div><i>${bt("broad")}</i><b>${r.broadside.toFixed(1)}</b> t</div>
      <div><i>${bt("range")}</i><b>${(a/1e3).toFixed(1)}</b> km</div>
      <div><i>GM</i><b>${r.gm.toFixed(2)}</b> m<span class="gm"><em style="width:${c}%"></em></span></div>
      <div class="st ${o}">${bt("stab")[o]}</div>${this.store?(()=>{let l=this.bill(t);return l&&(l.rivets||l.steel)?`<div><i>${bt("bill")}</i><b>${l.rivets.toLocaleString("en")}</b> <small>${bt("rivetsU")}</small> <b>${l.steel.toLocaleString("en")}</b> <small>${bt("steelU")}</small></div>`:""})():""}`}aaPanel(t,e){let n=this.el.querySelector(".dk-aa"),i=jp[t.kind]??0,r=t.opts?.mods?.aaStock??po[t.kind]??[0,0],o={ha:0,mg:0,...e.aa??{}},a=[],c=(h,u,d,f,m)=>`<div class="dk-aarow"><span>${h}</span><b>${u}</b><em>${f}</em><button type="button" data-k="${d}" data-d="-1">\u2212</button><button type="button" data-k="${d}" data-d="1" ${m?"":"disabled"}>\uFF0B</button></div>`,l=o.ha+o.mg;if(i&&(a.push(`<div class="dk-lab">${bt("aaHead")(l,i)}</div>`),a.push(c(bt("haGun"),r[0]+o.ha,"ha",o.ha?`+${o.ha}`:"",l<i)),a.push(c(bt("mgGun"),r[1]+o.mg,"mg",o.mg?`+${o.mg}`:"",l<i))),t.kind==="cv"){let h={f:3,t:4,b:3,...e.air??{}},u=h.f+h.t+h.b;a.push(`<div class="dk-lab">${bt("airHead")(u,vu)}</div>`);for(let d of["f","t","b"])a.push(c(bt("planeKinds")[d],h[d],"air."+d,"",u<vu))}n.innerHTML=a.join(""),n.style.display=a.length?"block":"none";for(let h of n.querySelectorAll("button"))h.addEventListener("pointerdown",u=>u.stopPropagation()),h.onclick=()=>{let u=JSON.parse(JSON.stringify(e)),d=+h.dataset.d,f=h.dataset.k;if(f.startsWith("air.")){u.air={f:3,t:4,b:3,...u.air??{}};let m=f.slice(4);u.air[m]=Math.max(0,u.air[m]+d)}else u.aa={ha:0,mg:0,...u.aa??{}},u.aa[f]=Math.max(0,u.aa[f]+d);this.setDesign(t,u)}}update(t){if(!this.open)return;let e=this.ship();if(!e)return;let n=e.body,r=e.meta.L*1.15*this.dist,o=n.yaw+this.yaw,a=n.toWorld(Ts.set(0,e.meta.deck_top+4,0),new _);this.camera.position.set(a.x+Math.sin(o)*Math.cos(this.pitch)*r,a.y+Math.sin(this.pitch)*r,a.z+Math.cos(o)*Math.cos(this.pitch)*r),this.camera.lookAt(a),this.camera.updateMatrixWorld(),this.rcam.target.set(n.pos.x,0,n.pos.z);let c=is(e.meta),l=this.designOf(e);if(this.$.slots.childElementCount!==c.length||this.$.slots.dataset.ship!==String(e.id)){this.$.slots.innerHTML="",this.$.slots.dataset.ship=String(e.id);for(let h of c){let u=document.createElement("button");u.type="button",u.className="dk-slot",u.dataset.id=h.id,u.addEventListener("pointerdown",d=>d.stopPropagation()),u.addEventListener("click",()=>{this.slot=h.id,this.render()}),this.$.slots.appendChild(u)}}for(let h of this.$.slots.children){let u=c.find(f=>f.id===h.dataset.id),d=l.mounts.filter(f=>f.slot===u.id)[0];Ts.set(u.at[0],u.at[1]+2,u.at[2]),n.toWorld(Ts,Ts).project(this.camera),h.style.transform=`translate(${((Ts.x*.5+.5)*this.W).toFixed(1)}px, ${((-Ts.y*.5+.5)*this.H).toFixed(1)}px)`,h.style.display=Ts.z<1?"block":"none",h.classList.toggle("on",this.slot===u.id),h.classList.toggle("used",!!d),h.textContent=d?d.type==="torp"?"T":`${d.cal}`:"+"}e.testAim&&(e.testAim.t+=t,e.turrets.every(h=>h.testFired||h.broken)&&e.testAim.t>2&&(e.testAim=null),e.testAim&&e.testAim.t>120&&(e.testAim=null)),!e.alive&&!this._lost&&(this._lost=!0,this.flash(bt(e.body.capsized?"wentOver":"sankDock"))),e.alive&&(this._lost=!1)}};function RM(s){let t=document.createElement("canvas");t.width=512,t.height=160;let e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),e.font='600 128px Oswald, "Arial Narrow", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle="rgba(232, 234, 230, 0.92)",e.fillText(s,t.width/2,t.height/2+6);let n=new La(t);return n.colorSpace=ee,n.anisotropy=4,n}function sm(s,t,e){let n=s.stations,i=n[0];for(let o of n)Math.abs(o[0]-t)<Math.abs(i[0]-t)&&(i=o);let r=i[1];for(let o=0;o+1<r.length;o++){let[a,c]=r[o],[l,h]=r[o+1];if(e>=c&&e<=h)return a+(l-a)*(e-c)/Math.max(h-c,1e-6)}return r[r.length-1][0]}var Sc=class{constructor(t){this.group=new de,this.marks=new Map,this.patch=t;let e=12,n=14,i=1.6,r=[],o=[];for(let a=0;a<=e;a++){let c=a/e;r.push(-c*n,i*(1-c)*.5,0,-c*n,-i*(1-c)*.5,0)}for(let a=0;a<e;a++){let c=a*2;o.push(c,c+1,c+2,c+1,c+3,c+2)}this.penGeo=new me,this.penGeo.setAttribute("position",new jt(r,3)),this.penGeo.setIndex(o),this.penN=e,this.penMat=new We({color:855568,side:qe})}make(t){let e=new de,n=t.meta,i=n.L*.3,r=n.D-n.T,o=r*.46,a=r*.5,c=a*3.2,l=Math.max(sm(n,i,o-a/2),sm(n,i,o+a/2))+.15,h=RM(t.mark??""),u=new $e({map:h,transparent:!0,roughness:.8,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});this.patch?.(u);for(let p of[1,-1]){let y=new Bt(new Sn(c,a),u);y.position.set(p*l,o,i),y.rotation.y=p>0?Math.PI/2:-Math.PI/2,e.add(y)}let d=null;for(let p of n.boxes??[])p.part==="superstructure"&&(!d||p.max[1]>d.max[1])&&(d=p);let f=new _(d?(d.min[0]+d.max[0])/2:0,(d?d.max[1]:r+20)+9,d?(d.min[2]+d.max[2])/2:0),m=this.penGeo.clone(),v=new Bt(m,this.penMat);v.position.copy(f),e.add(v);let g=new Bt(new cn(.12,.12,9,6),this.penMat);return g.position.copy(f).add(new _(0,-4.5,0)),e.add(g),this.group.add(e),{g:e,pen:v,pg:m}}update(t,e){let n=new Set;for(let i of t){if(!i.boss||i.side!=="E"||i.kind==="wh"||i.gone)continue;n.add(i);let r=this.marks.get(i);r||(r=this.make(i),this.marks.set(i,r)),r.g.position.copy(i.body.pos),r.g.quaternion.copy(i.body.quat);let o=r.pg.attributes.position;for(let a=0;a<=this.penN;a++){let c=a/this.penN,l=Math.sin(e*6-c*7)*c*1.4;o.setXYZ(a*2,l,(1-c)*.8,-c*14),o.setXYZ(a*2+1,l,-(1-c)*.8,-c*14)}o.needsUpdate=!0}for(let[i,r]of this.marks)n.has(i)||(this.group.remove(r.g),this.marks.delete(i))}};var Ec=class{constructor(t){this.patch=t,this.group=new de,this.group.visible=!1,this.parts={}}async load(t,e=8){try{if(!(await fetch(`${t}port.json`)).ok)return!1}catch{return!1}let n=new mi,i=async(l,h)=>{let u=await n.loadAsync(t+l);return u.flipY=!1,u.colorSpace=h?ee:Ve,u.anisotropy=e,u},[r,o,a]=await Promise.all([i("port_base.webp",!0),i("port_orm.webp",!1),new es().loadAsync(t+"port.glb")]),c=new $e({map:r,aoMap:o,roughnessMap:o,metalnessMap:o,roughness:1,metalness:1});return this.patch?.(c),a.scene.traverse(l=>{if(!l.isMesh)return;let h=l.name||l.parent?.name,u=new Bt(l.geometry,c);u.frustumCulled=!0;let d=(h??"").replace(/\.\d+$/,"").replace(/_\d+$/,"");this.parts[d]=u,this.group.add(u)}),!0}show(t,e=0,n=new _){this.group.visible=t,this.group.position.copy(n),this.group.rotation.set(0,e,0)}setYard({slips:t=1,crane:e=0,building:n=!1}){for(let i=0;i<3;i++)this.parts[`slip${i}`]&&(this.parts[`slip${i}`].visible=i<t);for(let i=0;i<4;i++)this.parts[`crane${i}`]&&(this.parts[`crane${i}`].visible=i===e);this.parts.frame&&(this.parts.frame.visible=n)}};var CM=[{id:1,wind:6,swell:.6,haze:55e-6,hour:15.6},{id:2,wind:5,swell:.5,haze:32e-5,hour:15,fog:5200},{id:3,wind:10,swell:2.2,haze:7e-5,hour:14.4,cover:.5},{id:4,wind:17,swell:3.4,haze:19e-5,hour:15.2,storm:!0,cover:.8,dim:.35}],rs=[{id:"1-1",goal:"all",fee:600,par:360,waves:[["dd","dd"],["dd","dd","dd"]]},{id:"1-2",goal:"escort",fee:800,par:480,escort:[3,2],waves:[["dd","dd"],["dd","dd","dd"]]},{id:"1-3",goal:"all",fee:900,par:420,waves:[["cl","dd","dd"],["dd","dd","dd","dd"]]},{id:"1-4",goal:"hold",fee:1e3,par:0,time:420,waves:[["dd","dd","dd"],["cl","dd","dd"],["cl","cl","dd","dd"]]},{id:"1-5",goal:"boss",fee:1500,par:540,waves:[["cl","dd","dd"],["ca!","cl","dd","dd"]]},{id:"2-1",goal:"all",fee:1600,par:480,near:!0,waves:[["ca","cl","dd","dd"],["cl","dd","dd","dd"]]},{id:"2-2",goal:"all",fee:1800,par:480,hour:17.55,waves:[["cl","dd","dd","dd","dd"],["cl","cl","dd","dd","dd"]]},{id:"2-3",goal:"escort",fee:2e3,par:600,escort:[4,3],waves:[["ca","dd","dd"],["cl","cl","dd","dd"],["ca","dd","dd"]]},{id:"2-4",goal:"hold",fee:2200,par:0,time:480,waves:[["ca","cl","dd","dd"],["ca","ca","dd","dd"],["ca","cl","cl","dd","dd"]]},{id:"2-5",goal:"boss",fee:3e3,par:600,waves:[["ca","cl","dd","dd"],["bc!","ca","ca","dd","dd"]]},{id:"3-1",goal:"all",fee:3500,par:600,waves:[["ca","ca","cl","dd","dd"],["bc","ca","dd","dd"]]},{id:"3-2",goal:"all",fee:3800,par:600,waves:[["bc","ca","dd","dd"],["bc","ca","ca","dd","dd"]]},{id:"3-3",goal:"all",fee:4200,par:660,air:!0,waves:[["cv","ca","cl","dd","dd"],["bc","ca","dd","dd"]]},{id:"3-4",goal:"escort",fee:4500,par:720,escort:[4,2],air:!0,waves:[["cv","ca","dd","dd"],["bc","ca","cl","dd","dd"],["cv","cl","dd","dd"]]},{id:"3-5",goal:"boss",fee:6e3,par:780,air:!0,waves:[["bc","ca","ca","dd","dd"],["cv!","cv!","bc","ca","dd","dd"]]},{id:"4-1",goal:"all",fee:7e3,par:720,waves:[["bb","bc","ca","dd","dd"],["bb","ca","ca","cl","dd","dd"]]},{id:"4-2",goal:"all",fee:7500,par:720,waves:[["copy","copy","ca","dd","dd"],["copy","copy","copy","dd","dd"]]},{id:"4-3",goal:"hold",fee:8e3,par:0,time:540,air:!0,waves:[["bb","ca","dd","dd"],["cv","bc","ca","dd","dd"],["bb","bc","ca","cl","dd"]]},{id:"4-4",goal:"escort",fee:9e3,par:780,escort:[4,2],air:!0,waves:[["bc","ca","dd","dd"],["cv","bb","ca","dd","dd"],["bc","bc","cl","dd","dd"]]},{id:"4-5",goal:"boss",fee:15e3,par:900,air:!0,waves:[["bb","bc","ca","dd","dd"],["wh!","bc","ca","dd","dd"]]}].map(s=>({...s,fee:Math.round(s.fee*1.3/50)*50})),wr=s=>rs.find(t=>t.id===s),rm=s=>CM[+s.id[0]-1],om=s=>rs[rs.findIndex(t=>t.id===s)+1]?.id??null;var Vn={dd:{rivets:800,steel:300,slip:1,tons:2400},cl:{rivets:1800,steel:900,slip:2,tons:8500},ca:{rivets:3e3,steel:1800,slip:3,tons:13e3},bc:{rivets:6e3,steel:5e3,slip:4,tons:42e3},cv:{rivets:7e3,steel:5e3,slip:4,tons:38e3},bb:{rivets:8e3,steel:7e3,slip:4,tons:64e3},sp:{rivets:2e4,steel:18e3,slip:6,tons:12e4}},cm=["dd","cl","ca","bc","cv","bb","sp"],Er={dd:null,cl:"1-3",ca:"1-5",bc:"2-5",cv:"3-3",bb:"3-5",sp:"4-5"},LM=[12.7,15.5,20,25,36],PM={dd:60,cl:210,ca:325,bc:1050,bb:1600,cv:950,wh:4e3,tr:0},IM={dd:.08,cl:.12,ca:.18,bc:.25,cv:.25,bb:.3,wh:.6},DM=.6,NM={1:[65,25,9,1],2:[58,29,11,2],3:[50,32,15,3],4:[42,35,19,4]},Ze={steelS:{tier:0,steel:300},bulkhead:{tier:0,part:!0},boiler:{tier:0,part:!0},rangefinder:{tier:1,part:!0},bulge:{tier:1,part:!0},armour:{tier:1,part:!0},steelL:{tier:1,steel:1200},oxy:{tier:1,bp:!0},cal41:{tier:1,bp:!0,cal:41},cal46:{tier:2,bp:!0,cal:46},aadir:{tier:2,part:!0},cal51:{tier:2,bp:!0,cal:51,from:3},cal61:{tier:3,bp:!0,cal:61,from:3},cal80:{tier:9,bp:!0,cal:80},f2:{tier:1,bp:!0,from:3},t2:{tier:2,bp:!0,from:3},b2:{tier:2,bp:!0,from:3}},am={dd:["Hayate","Asanagi","Shiokaze","Tsumuji","Oboro","Nowaki","Hatsunami","Y\u016Bnagi","Kogarashi","Sazanami","Hayase","Shiranami"],cl:["Kawasemi","Misago","Tsubame","Kamome","Hibari","Isohiyo"],ca:["Kurodake","Shiramine","Aodake","Akaishi","Hiuchi","Kasumidake"],bc:["Narukami","Jinrai","Todoroki","Inazuma"],cv:["\u014Ctori","Amakake","Unkai","Kumoi"],bb:["Hagane","Genbu","Iwao","Banjaku"],sp:["Tetsuhama"]},UM={Hayate:"\u75BE\u98A8",Asanagi:"\u671D\u51EA",Shiokaze:"\u6F6E\u98A8",Tsumuji:"\u65CB\u98A8",Oboro:"\u6727",Nowaki:"\u91CE\u5206",Hatsunami:"\u521D\u6CE2",Y\u016Bnagi:"\u5915\u51EA",Kogarashi:"\u6728\u67AF",Sazanami:"\u7D30\u6CE2",Hayase:"\u65E9\u702C",Shiranami:"\u767D\u6CE2",Kawasemi:"\u7FE1\u7FE0",Misago:"\u9D9A",Tsubame:"\u71D5",Kamome:"\u9D0E",Hibari:"\u96F2\u96C0",Isohiyo:"\u78EF\u9D6F",Kurodake:"\u9ED2\u5CB3",Shiramine:"\u767D\u5DBA",Aodake:"\u9752\u5CB3",Akaishi:"\u8D64\u77F3",Hiuchi:"\u71E7",Kasumidake:"\u971E\u5CB3",Narukami:"\u9CF4\u795E",Jinrai:"\u8FC5\u96F7",Todoroki:"\u8F5F",Inazuma:"\u7A32\u59BB",\u014Ctori:"\u9CF3",Amakake:"\u5929\u7FD4",Unkai:"\u96F2\u6D77",Kumoi:"\u96F2\u5C45",Hagane:"\u92FC",Genbu:"\u7384\u6B66",Iwao:"\u5DCC",Banjaku:"\u78D0\u77F3",Tetsuhama:"\u9244\u6D5C",Kurogane:"\u9ED2\u9244"},xi=(s,t)=>t?UM[s]??s:s;function xo(){let s={v:1,created:Date.now(),played:0,rivets:1200,steel:400,nextUid:1,ships:[],sortie:[],flag:0,stages:{},items:{},bps:[],pity:0,rng:Math.random()*4294967296>>>0,copies:[],last:"1-1",log:[]},t=Sr(s,"bb",{name:"Kurogane",old:!0});return Sr(s,"dd"),Sr(s,"dd"),s.flag=t.uid,s}function Sr(s,t,e={}){let n=new Set(s.ships.map(o=>o.name)),i=e.name??(am[t]??[t]).find(o=>!n.has(o))??`${(am[t]??[t])[0]} ${s.nextUid}`;e.building&&(s.built=(s.built??0)+1);let r={uid:s.nextUid++,kind:t,name:i,design:null,hp:1,parts:[null,null],kills:0,sorties:0,building:e.building??0,old:!!e.old};return s.ships.push(r),!r.building&&s.sortie.length<8&&s.sortie.push(r.uid),r}var Cn=(s,t)=>s.ships.find(e=>e.uid===t),yo=s=>Object.values(s.stages).reduce((t,e)=>t+(e.stars??0),0),Su=(s,t)=>!!s.stages[t]?.clears;function Tc(s,t){if(t==="1-1")return!0;let e=rs.findIndex(n=>n.id===t);return e>0&&Su(s,rs[e-1].id)}var vo=(s,t)=>!Er[t]||Su(s,Er[t]);function _o(s){return[...LM,...s.bps.map(t=>Ze[t]?.cal).filter(Boolean)].sort((t,e)=>t-e)}function Eu(s){let t=yo(s);return t>=35?24e4:t>=20?18e4:t>=8?12e4:8e4}function Ac(s){if(Su(s,"4-5"))return 1/0;let t=yo(s);return t>=30?12e4:t>=15?9e4:7e4}var Tu=[null,{rivets:3e3,steel:500},{rivets:8e3,steel:2e3}],Ar=[{tons:15e3,turret:1100},{tons:45e3,turret:2700,rivets:4e3,steel:2e3},{tons:7e4,turret:5500,rivets:9e3,steel:5e3},{tons:13e4,turret:12e3,rivets:18e3,steel:12e3}],As=s=>s.slips??1,Au=s=>Ar[s.crane??0],Ru=s=>s.ships.filter(t=>t.building>0).length;function lm(s){let t=Tu[As(s)];return!t||s.rivets<t.rivets||s.steel<t.steel?!1:(s.rivets-=t.rivets,s.steel-=t.steel,s.slips=As(s)+1,!0)}function hm(s){let t=Ar[(s.crane??0)+1];return!t||s.rivets<t.rivets||s.steel<t.steel?!1:(s.rivets-=t.rivets,s.steel-=t.steel,s.crane=(s.crane??0)+1,!0)}function Cu(s,t){let e=Vn[t];return vo(s,t)?e.tons>Au(s).tons?"crane":Ru(s)>=As(s)?"slip":s.rivets<e.rivets||s.steel<e.steel?"money":"":"locked"}var kM=[0,3,8,16,28],Tr=s=>kM.filter(t=>(s.xp??0)>=t).length-1;function OM(s,t){return Cu(s,t)===""}function um(s,t){if(!OM(s,t))return null;let e=Vn[t];return s.rivets-=e.rivets,s.steel-=e.steel,Sr(s,t,{building:e.slip})}var Rc=3;function dm(s,t){let e=t*Rc;return s.rivets<e?!1:(s.rivets-=e,s.steel+=t,!0)}var Lu=s=>Math.round((1-s.hp)*Vn[s.kind].rivets*.3);function fm(s,t){let e=Lu(t);return e<=0||s.rivets<e?!1:(s.rivets-=e,t.hp=1,!0)}function pm(s,t){if(t.uid===s.flag||t.old)return!1;s.steel+=Math.round(Vn[t.kind].steel/3);for(let e of t.parts)e&&(s.items[e]=(s.items[e]??0)+1);return s.ships=s.ships.filter(e=>e!==t),s.sortie=s.sortie.filter(e=>e!==t.uid),!0}function FM(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function zM(s,t){let e=NM[t],n=s()*100,i=n<e[0]?0:n<e[0]+e[1]?1:n<e[0]+e[1]+e[2]?2:3,r=Object.keys(Ze).filter(o=>Ze[o].tier===i&&(Ze[o].from??0)<=t);return r.length||(r=Object.keys(Ze).filter(o=>Ze[o].tier===Math.min(i,2)&&(Ze[o].from??0)<=t)),r[Math.floor(s()*r.length)]}function mm(s,t){let e=wr(t.stage),n=+e.id[0],i=FM(s.rng);s.rng=i()*2**32>>>0;let r=s.stages[e.id]??{stars:0,clears:0,best:0},o=t.won&&!r.clears,a={stage:e.id,won:t.won,first:o,stars:0,rivets:0,steel:0,items:[],lost:[],unlocked:[],opened:null};t.won?(a.stars=1+(t.lost.length===0?1:0)+(e.goal==="hold"?t.lostHp<.25?1:0:t.time<=e.par?1:0),a.rivets=Math.round(e.fee*(.6+.2*a.stars)+(o?e.fee*.5:0))):a.rivets=Math.round(e.fee*.1*t.sunk.length/Math.max(e.waves.flat().length,1));for(let c of t.sunk)a.steel+=PM[c.kind]??0;for(let c of t.sunk){let l=(c.boss?DM:IM[c.kind]??.1)+s.pity*.02;i()<l?(a.items.push(zM(i,n)),s.pity=0):s.pity++}t.won&&e.id==="4-5"&&o&&(a.items.push("cal80"),a.ending=!0),s.rivets+=a.rivets,s.steel+=a.steel;for(let c of a.items){let l=Ze[c];l.steel?s.steel+=l.steel:l.bp?s.bps.includes(c)?s.rivets+=500:s.bps.push(c):s.items[c]=(s.items[c]??0)+1}a.insurance=0;for(let c of t.lost){let l=Cn(s,c);if(l){a.lost.push({kind:l.kind,name:l.name}),s.lostN=(s.lostN??0)+1,l.lent||(a.insurance+=Math.round(Vn[l.kind].rivets*.35/10)*10),l.design&&s.copies.push(l.design);for(let h of l.parts);s.ships=s.ships.filter(h=>h!==l),s.sortie=s.sortie.filter(h=>h!==c)}}s.rivets+=a.insurance,s.copies.length>12&&s.copies.splice(0,s.copies.length-12);for(let[c,l]of Object.entries(t.hp)){let h=Cn(s,+c);if(h){h.hp=Math.max(.05,Math.min(1,l)),h.sorties++;let u=Tr(h);h.xp=(h.xp??0)+1+(t.won?1:0)+(t.kills?.[c]??0),Tr(h)>u&&(a.promoted??=[]).push(h.name)}}for(let[c,l]of Object.entries(t.kills??{})){let h=Cn(s,+c);h&&(h.kills+=l)}a.planesLost=0,a.planesCost=0;for(let[c,l]of Object.entries(t.planes??{})){let h=Cn(s,+c);if(!h)continue;let u={f:(h.design?.air?.f??3)*5,t:(h.design?.air?.t??4)*5,b:(h.design?.air?.b??3)*5};h.planes={};for(let d of["f","t","b"]){let f=Math.max(0,u[d]-(l[d]??0)),m=Math.min(f,Math.floor(s.rivets/40));s.rivets-=m*40,a.planesLost+=f,a.planesCost+=m*40,h.planes[d]=u[d]-f+m}}for(let c of s.ships)c.building>0&&(c.building--,!c.building&&s.sortie.length<8&&s.sortie.push(c.uid));if(t.won){let c=Object.keys(Er).filter(h=>vo(s,h));r.clears++,r.stars=Math.max(r.stars,a.stars),s.stages[e.id]=r,a.unlocked=Object.keys(Er).filter(h=>vo(s,h)&&!c.includes(h));let l=om(e.id);o&&l&&(a.opened=l,s.last=l)}if(Cn(s,s.flag)||(s.flag=[...s.ships].filter(c=>!c.building).sort((c,l)=>Vn[l.kind].tons-Vn[c.kind].tons)[0]?.uid??0),!s.ships.some(c=>!c.building)){let c=Sr(s,"dd");c.lent=!0,s.flag=c.uid,Sr(s,"dd").lent=!0,a.lent=!0}return s.log.unshift({at:Date.now(),stage:e.id,won:t.won,stars:a.stars}),s.log.length=Math.min(s.log.length,30),a}function gm(s,t){let e=JSON.parse(JSON.stringify(s));for(let n of e.mounts)if(n.type==="gun"){let i=t.indexOf(n.cal);n.cal=t[Math.max(0,i-1)]??n.cal}return e}function vm(s,t){let e={speedK:1,armor:0,hpK:1,fcStart:1,fcMin:.14,flood:1,gm:0,torpK:1,oxy:s.bps.includes("oxy"),aa:1};t.old&&(e.speedK*=24/27,e.armor-=.1,e.hpK*=240/260,e.fcMin=.2,e.fcStart=1.1,e.aaStock=[4,4]);for(let i of t.parts)i==="bulkhead"?e.flood*=.6:i==="boiler"?e.speedK*=1.06:i==="rangefinder"?(e.fcStart*=.6,e.fcMin*=.7):i==="bulge"?(e.gm+=.4,e.speedK*=.96,e.torpK*=.65):i==="armour"?(e.armor+=.1,e.speedK*=.97):i==="aadir"&&(e.aa*=1.5);let n=Tr(t);return e.fcMin*=1-.06*n,e.fcStart*=1-.05*n,e.reloadK=1-.03*n,e.aa*=1+.06*n,e.level=n,e}function xm(s,t,e,n){let i=t.parts[e];return n&&!(s.items[n]>0)?!1:(i&&(s.items[i]=(s.items[i]??0)+1),n&&s.items[n]--,t.parts[e]=n,!0)}function Pu(s,t){return s.sortie.map(e=>Cn(s,e)).filter(Boolean).reduce((e,n)=>e+t(n),0)}var ym=s=>Math.ceil(s*.5/10)*10;function _m(s,t,e){let n=c=>c?`${c.type}/${c.cal}/${c.n}/${c.tier??1}`:"none",i=new Set([...s.mounts,...t.mounts].map(c=>c.slot)),r=0,o=0;for(let c of i){let l=s.mounts.find(d=>d.slot===c),h=t.mounts.find(d=>d.slot===c);if(n(l)===n(h))continue;if(!h||h.type==="none"){r+=60;continue}let u=h.type==="torp"?60:e(h.cal,h.n)*(h.tier??1);r+=150+.25*u,o+=.5*u}let a=c=>(t.aa?.[c]??0)-(s.aa?.[c]??0);r+=Math.max(a("ha"),0)*40+Math.max(a("mg"),0)*15+(Math.abs(a("ha"))+Math.abs(a("mg")))*5,o+=Math.max(a("ha"),0)*15+Math.max(a("mg"),0)*3;for(let c of["f","t","b"])r+=Math.max((t.air?.[c]??0)-(s.air?.[c]??0),0)*5*40;return{rivets:Math.round(r/10)*10,steel:Math.round(o/10)*10}}var Sm=[75,71,83,49],Iu=1,BM=[58,145,14,92,210,119,24,164,107,240,35,158,65,200,5,125,179,47,134,233,18,90,204,48,151,78,251,97,8,213,170,115],HM=[156,20,231,43,88,182,15,209,131,62,106,197,39,153,244,64,29,174,98,7,187,53,143,226,76,112,22,217,161,94,44,243],Mm="kurogane/yard/rivets";function VM(){let s=new Uint8Array(32);for(let t=0;t<32;t++)s[t]=(BM[t]^HM[t*7%32]^Mm.charCodeAt(t%Mm.length)*31)&255;return s}var Em=new TextEncoder,GM=new TextDecoder;async function Tm(s,t){let e=await crypto.subtle.importKey("raw",VM(),"HKDF",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:s,info:Em.encode("KGS1 save")},e,{name:"AES-GCM",length:256},!1,[t])}async function Am(s,t){return new Uint8Array(await new Response(new Blob([s]).stream().pipeThrough(t)).arrayBuffer())}async function Du(s){let t=await Am(Em.encode(JSON.stringify(s)),new CompressionStream("deflate-raw")),e=crypto.getRandomValues(new Uint8Array(16)),n=crypto.getRandomValues(new Uint8Array(12)),i=new Uint8Array([...Sm,Iu]),r=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:n,additionalData:i},await Tm(e,"encrypt"),t)),o=new Uint8Array(i.length+28+r.length);return o.set(i,0),o.set(e,5),o.set(n,21),o.set(r,33),o}async function Nu(s){if(s=new Uint8Array(s),s.length<49||Sm.some((i,r)=>s[r]!==i))throw new Error("bad");let t=s[4];if(t>Iu)throw new Error("future");let e;try{e=await crypto.subtle.decrypt({name:"AES-GCM",iv:s.slice(21,33),additionalData:s.slice(0,5)},await Tm(s.slice(5,21),"decrypt"),s.slice(33))}catch{throw new Error("bad")}let n=JSON.parse(GM.decode(await Am(new Uint8Array(e),new DecompressionStream("deflate-raw"))));return $M(n,t)}var WM={};function $M(s,t){for(let e=t;e<Iu;e++)s=WM[e](s);return s}var wm=null;function XM(){return wm??=new Promise((s,t)=>{let e=indexedDB.open("kurogane",1);e.onupgradeneeded=()=>e.result.createObjectStore("saves"),e.onsuccess=()=>s(e.result),e.onerror=()=>t(e.error)}),wm}async function Uu(s,t){let e=await XM();return new Promise((n,i)=>{let r=e.transaction("saves",s),o=t(r.objectStore("saves"));r.oncomplete=()=>n(o?.result),r.onerror=()=>i(r.error)})}async function bo(s,t){let e=await Du(t);return await Uu("readwrite",n=>n.put({bytes:e,at:Date.now(),info:YM(t)},s)),e}async function Cc(s){let t=await Uu("readonly",e=>e.get(s));return t?{state:await Nu(t.bytes),at:t.at,bytes:t.bytes}:null}async function Rm(s){let t=await Uu("readonly",e=>e.get(s));return t?{at:t.at,...t.info}:null}function YM(s){return{stage:s.last??"1-1",stars:Object.values(s.stages??{}).reduce((t,e)=>t+(e.stars??0),0),ships:(s.ships??[]).length}}function Cm(s){let t=new Date,e=i=>String(i).padStart(2,"0"),n=document.createElement("a");n.href=URL.createObjectURL(new Blob([s],{type:"application/octet-stream"})),n.download=`kurogane-${t.getFullYear()}${e(t.getMonth()+1)}${e(t.getDate())}.kgs`,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}function Lm(){return new Promise(s=>{let t=document.createElement("input");t.type="file",t.accept=".kgs",t.onchange=async()=>s(t.files[0]?new Uint8Array(await t.files[0].arrayBuffer()):null),t.click()})}var Im={en:{yard:"KUROGANE YARD",rivets:"RIVETS",steel:"STEEL",fame:"NAME",treaty:"TREATY",tabs:{fleet:"FLEET",build:"SLIPS",store:"STORES",book:"LEDGER"},seaNames:["Inner Sea","Fog Narrows","Open Ocean","Typhoon Sea"],goals:{all:"Sink them all",escort:(s,t)=>`Bring ${t} of ${s} merchantmen through`,hold:s=>`Hold for ${Math.round(s/60)} minutes`,boss:"Sink the flagship"},stages:{"1-1":["Clearing the Lane","Grey destroyers are sitting on the ferry lane. The ferry company would like them elsewhere. Anywhere."],"1-2":["Three Freighters","Bring at least two of the three through. The third is insured."],"1-3":["Grey Scouts","A light cruiser leads them. Sink her and our slip can build one of our own."],"1-4":["Until Dawn","Hold the strait for seven minutes. The harbour master is counting."],"1-5":["The Grey Cruiser","Twice the plating of anything we have met. Her captain has read the same books as you."],"2-1":["Ambush in the Fog","Visibility five kilometres. Their guns reach further. Their eyes do not."],"2-2":["Torpedo Night","The sun goes down and the destroyers come out. Mind the bubbles."],"2-3":["Through the Narrows","Four merchantmen, three needed. The fourth carries the harbour master's piano."],"2-4":["Hold the Narrows","Eight minutes. The relief fleet is on its way, it says."],"2-5":["The Grey Battlecruiser","Fast, heavy, thin-skinned. You and her designer would get on."],"3-1":["Fleet Action","Open sea and a long swell. Top-heavy ships find out today."],"3-2":["The Chase","Two battlecruisers are running. Faster than us, on paper."],"3-3":["First Air Raid","Something is coming over the horizon. It is not a ship."],"3-4":["The Ocean Convoy","Four merchantmen across open water, under an open sky."],"3-5":["The Carrier Group","Two carriers. Hole their decks and their aircraft have nowhere to come home to."],"4-1":["Pursuit in the Storm","Three-metre seas. Every broadside rolls you. It rolls them too."],"4-2":["Your Own Designs","The Grey Fleet has studied your work. It has made it slightly worse."],"4-3":["Hold in the Typhoon","Nine minutes in a typhoon. Nobody asked for this, least of all the cook."],"4-4":["The Last Convoy","Everything the islands have left, in four hulls."],"4-5":["The Grey Whale","Three hundred metres, twelve 51 cm guns. Treaty: not applicable."]},locked:"Clear the stage before",fee:"FEE",enemy:"ENEMY",sortie:"SORTIE",sea:"SEA",seaNote:["Calm","Fog: nothing seen past 5 km","Long swell","Storm"],inSortie:"SAILS",moored:"MOORED",flag:"FLAGSHIP",makeFlag:"Make flagship",refit:"REFIT",repair:s=>`REPAIR ${s.toLocaleString("en")}`,repaired:"SOUND",scrap:"SCRAP",building:s=>`on the slip \xB7 ${s} sortie${s>1?"s":""}`,parts:"PARTS",none:"\u2014",old:"old",build:"BUILD",unlockAt:s=>`opens with ${s}`,slip:s=>`${s} sortie${s>1?"s":""} on the slip`,cost:"COST",blueprints:"BLUEPRINTS",calibres:"CALIBRES",noParts:"No parts in the stores. The sea gives them up, now and then.",save:"SAVE",load:"LOAD",empty:"empty",exportF:"WRITE SAVE FILE",importF:"READ SAVE FILE",newGame:"NEW GAME (twice)",saved:"Saved",loaded:"Loaded",badFile:"That file is not a save of this game, or it has been changed.",record:"RECENT SORTIES",full:"Eight ships already sail.",noFlag:"Choose a flagship that sails.",notReady:"She is still on the slip.",overTreaty:(s,t)=>`${s.toLocaleString("en")} t over the treaty. The inspector will be taken to lunch (${t.toLocaleString("en")} rivets).`,poor:"Not enough rivets.",built:s=>`${s} is laid down`,scrapped:s=>`${s} is broken up`,win:"VICTORY",lose:"DEFEAT",toYard:"BACK TO THE YARD",spoils:"SPOILS",nothing:"Nothing this time.",salvage:"salvage",lostShips:"LOST",opened:s=>`Stage ${s} is open`,unlockedK:s=>`The slip can now build: ${s}`,lent:"The islands lend you two old destroyers. They would like them back.",yardH:"THE YARD",slipsN:(s,t)=>`SLIPS \xB7 ${s} of ${t} in use`,slipsNote:"One hull on each slip at a time",addSlip:"ADD A SLIP",slipBuilt:"A new slip is laid. The neighbours complain.",craneN:s=>`CRANE \xB7 No. ${s}`,craneNote:(s,t)=>`Hulls up to ${s.toLocaleString("en")} t \xB7 turrets up to ${t.toLocaleString("en")} t`,upCrane:"BIGGER CRANE",craneBuilt:"The new crane is up. The old one is now a monument.",maxed:"as big as it gets",whyNot:{crane:"the crane is too small",slip:"no free slip",locked:"",money:""},perShip:"PER SHIP",crew:"CREW",killsN:s=>`${s} sunk`,promoted:s=>`${s}'s crew is getting good at this`,craneLift:(s,t)=>`That turret weighs ${Math.round(s).toLocaleString("en")} t. The crane lifts ${t.toLocaleString("en")} t. Buy a bigger crane first.`,buySteel:"STEEL FROM THE ISLAND FOUNDRIES",insurance:"INSURANCE",planes:"NEW AIRCRAFT",retreat:"RETREAT",goalHud:{all:(s,t)=>`WAVE ${s} / ${t}`,escort:(s,t)=>`MERCHANTMEN ${s} \xB7 need ${t}`,hold:s=>`HOLD ${s}`,boss:(s,t)=>`WAVE ${s} / ${t}`},why:{flag:"The flagship is lost. The rest come home with the news.",escort:"The cargo is now on the seabed. The customer is unhappy.",retreat:"A tactical withdrawal. Nobody is fooled."},wins:["Enemy squadron gone. Insurance premiums fall.","Firepower was more than adequate. For once, so was stability.","The Grey Fleet will remember this. It will also copy it.","The harbour master stopped counting."],ending:["Past the place where the Grey Whale went down, beyond the fog, there was an island.","On it, a shipyard. Grey slips, grey cranes, and nobody at all.","The drawing office was full of plans. You knew every one of them: the ships you sank, and the ships you lost.","At the bottom of the pile lay one sheet gone yellow. The signature was your predecessor's.",'In the margin, in the same hand: "Too heavy. She will probably roll over."',"The Grey Whale was a ship your predecessor drew, and threw away.","The building treaty went down with her."],endLast:"The Kurogane Yard is open as usual.",endStats:(s,t,e,n)=>`${s} sorties \xB7 ${t} ships built \xB7 ${e} lost \xB7 \u2605 ${n}`,endBtn:"BACK TO THE YARD",tips:{yard:"This is your yard. On the right, the chart: pick 1-1 and press SORTIE. On the left, your ships: REFIT changes their guns, the diamond makes one the flagship.",battle:{mouse:"Left drag to choose ships, right click on the sea to send them, right click on an enemy to fire on it. Left alone, every ship fires at the nearest enemy by itself. Lose the flagship and you lose the battle.",touch:"Tap a ship to choose it, then tap the sea to send it or an enemy to fire on it. Left alone, every ship fires at the nearest enemy by itself. Lose the flagship and you lose the battle."},dock:"Press a ring on the ship to choose what goes there. Heavy guns up high make her tender: watch GM. TEST FIRE shows how far she rolls. The yard bills you when you go back.",result:"Rivets build and repair, steel comes from what you sink. Parts go to the stores: fit them in the fleet list. A stage you have cleared can be fought again.",slips:"One hull per slip. A bigger crane builds bigger hulls and lifts heavier turrets.",carrier:"Carriers send their aircraft on their own. Right click (tap) an enemy with the carrier chosen to pick the target. Keep her well back: she cannot fight ships."},tipOk:"GOT IT",cont:"CONTINUE",fresh:"NEW GAME",bossIn:"THE FLAGSHIP IS HERE",item:{f2:["New fighter","Blueprint \xB7 better in a dogfight (all carriers)"],t2:["New torpedo bomber","Blueprint \xB7 faster and harder to hit (all carriers)"],b2:["New dive bomber","Blueprint \xB7 hits more often (all carriers)"],steelS:["Bundle of steel","+300 steel"],steelL:["Stack of steel","+1,200 steel"],bulkhead:["Watertight bulkheads","The sea comes in 40% slower"],boiler:["High-pressure boilers","+6% speed"],rangefinder:["Long rangefinder","The first salvos fall much closer"],bulge:["Torpedo bulges","Steadier (GM +0.4 m), torpedoes do 35% less, 4% slower"],armour:["Extra plating","Hits do less; 3% slower"],aadir:["AA director","Her anti-aircraft fire hits more"],oxy:["Oxygen torpedoes","Twice the run, a heavier warhead (all ships)"],cal41:["41 cm gun","Blueprint"],cal46:["46 cm gun","Blueprint"],cal51:["51 cm gun","Blueprint"],cal61:["61 cm gun","Blueprint"],cal80:["80 cm gun","Blueprint. You know what you did."]},tier:["common","good","rare","phantom","","","","","","phantom"]},ja:{yard:"\u9ED2\u9244\u9020\u8239\u6240",rivets:"\u92F2",steel:"\u92FC\u6750",fame:"\u8A55\u5224",treaty:"\u6761\u7D04",tabs:{fleet:"\u8266\u968A",build:"\u8239\u53F0",store:"\u5009\u5EAB",book:"\u5E33\u7C3F"},seaNames:["\u5185\u6D77","\u9727\u306E\u702C\u6238","\u5916\u6D0B","\u53F0\u98A8\u306E\u6D77"],goals:{all:"\u5168\u8266\u6483\u6C88",escort:(s,t)=>`\u5546\u8239${s}\u96BB\u306E\u3046\u3061${t}\u96BB\u3092\u901A\u3059`,hold:s=>`${Math.round(s/60)}\u5206\u3057\u306E\u3050`,boss:"\u65D7\u8266\u3092\u6C88\u3081\u308B"},stages:{"1-1":["\u822A\u8DEF\u306E\u6383\u9664","\u7070\u8272\u306E\u99C6\u9010\u8266\u304C\u9023\u7D61\u8239\u306E\u822A\u8DEF\u306B\u5C45\u5EA7\u3063\u3066\u3044\u308B\u3002\u9023\u7D61\u8239\u4F1A\u793E\u306F\u3001\u3069\u3053\u304B\u5225\u306E\u5834\u6240\u306B\u884C\u3063\u3066\u307B\u3057\u3044\u305D\u3046\u3060\u3002\u3069\u3053\u3067\u3082\u3044\u3044\u3002"],"1-2":["\u4E09\u96BB\u306E\u8CA8\u7269\u8239","\u4E09\u96BB\u306E\u3046\u3061\u4E8C\u96BB\u3092\u901A\u3057\u3066\u304F\u308C\u3002\u4E09\u96BB\u76EE\u306B\u306F\u4FDD\u967A\u304C\u304B\u3051\u3066\u3042\u308B\u3002"],"1-3":["\u7070\u8272\u306E\u65A5\u5019","\u8EFD\u5DE1\u304C\u7387\u3044\u3066\u3044\u308B\u3002\u6C88\u3081\u308C\u3070\u3001\u3046\u3061\u306E\u8239\u53F0\u3067\u3082\u540C\u3058\u3082\u306E\u304C\u9020\u308C\u308B\u3002"],"1-4":["\u591C\u660E\u3051\u307E\u3067","\u4E03\u5206\u9593\u3001\u702C\u6238\u3092\u5B88\u308C\u3002\u6E2F\u9577\u304C\u6570\u3048\u3066\u3044\u308B\u3002"],"1-5":["\u7070\u8272\u306E\u91CD\u5DE1","\u3053\u308C\u307E\u3067\u306E\u500D\u306E\u88C5\u7532\u3002\u8266\u9577\u306F\u3042\u306A\u305F\u3068\u540C\u3058\u672C\u3092\u8AAD\u3093\u3067\u3044\u308B\u3002"],"2-1":["\u9727\u306E\u4E2D\u306E\u5F85\u3061\u4F0F\u305B","\u8996\u754C5\u30AD\u30ED\u3002\u5411\u3053\u3046\u306E\u7832\u306F\u3082\u3063\u3068\u5C4A\u304F\u3002\u76EE\u306F\u5C4A\u304B\u306A\u3044\u3002"],"2-2":["\u591C\u306E\u6C34\u96F7\u6226","\u65E5\u304C\u6C88\u3080\u3068\u3001\u99C6\u9010\u8266\u304C\u51FA\u3066\u304F\u308B\u3002\u6CE1\u306B\u6C17\u3092\u3064\u3051\u3066\u3002"],"2-3":["\u702C\u6238\u3092\u629C\u3051\u308D","\u5546\u8239\u56DB\u96BB\u3001\u4E09\u96BB\u306F\u8981\u308B\u3002\u56DB\u96BB\u76EE\u306F\u6E2F\u9577\u306E\u30D4\u30A2\u30CE\u3092\u904B\u3093\u3067\u3044\u308B\u3002"],"2-4":["\u702C\u6238\u3092\u3057\u306E\u3052","\u516B\u5206\u3002\u6551\u63F4\u306E\u8266\u968A\u304C\u5411\u304B\u3063\u3066\u3044\u308B\u3001\u3068\u672C\u4EBA\u305F\u3061\u306F\u8A00\u3063\u3066\u3044\u308B\u3002"],"2-5":["\u7070\u8272\u306E\u5DE1\u6D0B\u6226\u8266","\u901F\u304F\u3066\u3001\u91CD\u304F\u3066\u3001\u88C5\u7532\u304C\u8584\u3044\u3002\u8A2D\u8A08\u8005\u3068\u306F\u8A71\u304C\u5408\u3044\u305D\u3046\u3060\u3002"],"3-1":["\u8266\u968A\u6C7A\u6226","\u5916\u6D0B\u306E\u9577\u3044\u3046\u306D\u308A\u3002\u982D\u306E\u91CD\u3044\u8266\u306F\u3001\u4ECA\u65E5\u305D\u308C\u3092\u77E5\u308B\u3002"],"3-2":["\u8FFD\u6483","\u5DE1\u6D0B\u6226\u8266\u304C\u4E8C\u96BB\u3001\u9003\u3052\u3066\u3044\u308B\u3002\u66F8\u985E\u306E\u4E0A\u3067\u306F\u3001\u3053\u3061\u3089\u3088\u308A\u901F\u3044\u3002"],"3-3":["\u521D\u3081\u3066\u306E\u7A7A\u8972","\u6C34\u5E73\u7DDA\u306E\u5411\u3053\u3046\u304B\u3089\u4F55\u304B\u6765\u308B\u3002\u8239\u3067\u306F\u306A\u3044\u3002"],"3-4":["\u5916\u6D0B\u306E\u8239\u56E3","\u958B\u3051\u305F\u6D77\u3092\u3001\u958B\u3051\u305F\u7A7A\u306E\u4E0B\u3067\u3001\u5546\u8239\u56DB\u96BB\u3002"],"3-5":["\u7A7A\u6BCD\u6A5F\u52D5\u90E8\u968A","\u7A7A\u6BCD\u304C\u4E8C\u96BB\u3002\u7532\u677F\u306B\u7A74\u3092\u958B\u3051\u308C\u3070\u3001\u98DB\u884C\u6A5F\u306F\u5E30\u308B\u5834\u6240\u3092\u5931\u3046\u3002"],"4-1":["\u5D50\u306E\u4E2D\u306E\u8FFD\u6483","\u6CE2\u9AD83\u30E1\u30FC\u30C8\u30EB\u3002\u6589\u5C04\u306E\u305F\u3073\u306B\u63FA\u308C\u308B\u3002\u5411\u3053\u3046\u3082\u63FA\u308C\u308B\u3002"],"4-2":["\u5199\u3055\u308C\u305F\u8A2D\u8A08","\u7070\u8272\u8266\u968A\u306F\u3042\u306A\u305F\u306E\u4ED5\u4E8B\u3092\u7814\u7A76\u3057\u305F\u3002\u5C11\u3057\u3060\u3051\u60AA\u304F\u3057\u3066\u3042\u308B\u3002"],"4-3":["\u53F0\u98A8\u3092\u3057\u306E\u3052","\u53F0\u98A8\u306E\u4E2D\u3067\u4E5D\u5206\u3002\u8AB0\u3082\u983C\u3093\u3067\u3044\u306A\u3044\u3002\u7279\u306B\u4E3B\u8A08\u9577\u306F\u3002"],"4-4":["\u6700\u5F8C\u306E\u8239\u56E3","\u7FA4\u5CF6\u306B\u6B8B\u3063\u305F\u3082\u306E\u3059\u3079\u3066\u3092\u3001\u56DB\u96BB\u306B\u7A4D\u3093\u3067\u3002"],"4-5":["\u7070\u9BE8","\u5168\u9577300\u30E1\u30FC\u30C8\u30EB\u300151\u30BB\u30F3\u30C1\u783212\u9580\u3002\u6761\u7D04\uFF1A\u9069\u7528\u5916\u3002"]},locked:"\u524D\u306E\u30B9\u30C6\u30FC\u30B8\u3092\u30AF\u30EA\u30A2\u3059\u308B\u3068\u958B\u304F",fee:"\u5831\u916C",enemy:"\u6575",sortie:"\u51FA\u6483",sea:"\u6D77",seaNote:["\u51EA","\u9727\uFF1A5\u30AD\u30ED\u3088\u308A\u5148\u306F\u898B\u3048\u306A\u3044","\u9577\u3044\u3046\u306D\u308A","\u5D50"],inSortie:"\u51FA\u6483",moored:"\u4FC2\u7559",flag:"\u65D7\u8266",makeFlag:"\u65D7\u8266\u306B\u3059\u308B",refit:"\u6539\u88C5",repair:s=>`\u4FEE\u7406 ${s.toLocaleString("ja")}`,repaired:"\u7121\u50B7",scrap:"\u89E3\u4F53",building:s=>`\u5EFA\u9020\u4E2D\u30FB\u3042\u3068\u51FA\u6483${s}\u56DE`,parts:"\u90E8\u54C1",none:"\u2014",old:"\u65E7\u5F0F",build:"\u5EFA\u9020",unlockAt:s=>`${s} \u3092\u30AF\u30EA\u30A2\u3067\u89E3\u653E`,slip:s=>`\u51FA\u6483${s}\u56DE\u3067\u5B8C\u6210`,cost:"\u8CBB\u7528",blueprints:"\u8A2D\u8A08\u56F3",calibres:"\u4F7F\u3048\u308B\u53E3\u5F84",noParts:"\u5009\u5EAB\u306B\u90E8\u54C1\u306F\u306A\u3044\u3002\u6D77\u304C\u3068\u304D\u3069\u304D\u8FD4\u3057\u3066\u304F\u308C\u308B\u3002",save:"\u4FDD\u5B58",load:"\u8AAD\u8FBC",empty:"\u7A7A\u304D",exportF:"\u30BB\u30FC\u30D6\u3092\u66F8\u304D\u51FA\u3059",importF:"\u30BB\u30FC\u30D6\u3092\u8AAD\u307F\u8FBC\u3080",newGame:"\u306F\u3058\u3081\u304B\u3089\uFF082\u56DE\u62BC\u3059\uFF09",saved:"\u4FDD\u5B58\u3057\u307E\u3057\u305F",loaded:"\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F",badFile:"\u3053\u306E\u30B2\u30FC\u30E0\u306E\u30BB\u30FC\u30D6\u3067\u306F\u306A\u3044\u304B\u3001\u66F8\u304D\u63DB\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002",record:"\u6700\u8FD1\u306E\u51FA\u6483",full:"\u3059\u3067\u306B8\u96BB\u304C\u51FA\u6483\u306B\u5165\u3063\u3066\u3044\u308B\u3002",noFlag:"\u51FA\u6483\u3059\u308B\u8266\u304B\u3089\u65D7\u8266\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002",notReady:"\u307E\u3060\u8239\u53F0\u306E\u4E0A\u3067\u3059\u3002",overTreaty:(s,t)=>`\u6761\u7D04\u8D85\u904E ${s.toLocaleString("ja")} \u30C8\u30F3\u3002\u76E3\u67FB\u5B98\u3092\u663C\u98DF\u306B\u62DB\u5F85\u3057\u307E\u3059\uFF08${t.toLocaleString("ja")} \u92F2\uFF09\u3002`,poor:"\u92F2\u304C\u8DB3\u308A\u306A\u3044\u3002",built:s=>`${s} \u3092\u8D77\u5DE5\u3057\u307E\u3057\u305F`,scrapped:s=>`${s} \u3092\u89E3\u4F53\u3057\u307E\u3057\u305F`,win:"\u52DD\u5229",lose:"\u6557\u5317",toYard:"\u9020\u8239\u6240\u3078",spoils:"\u6226\u5229\u54C1",nothing:"\u4ECA\u56DE\u306F\u4F55\u3082\u306A\u304B\u3063\u305F\u3002",salvage:"\u5F15\u304D\u63DA\u3052",lostShips:"\u5931\u3063\u305F\u8266",opened:s=>`\u30B9\u30C6\u30FC\u30B8 ${s} \u304C\u958B\u3044\u305F`,unlockedK:s=>`\u8239\u53F0\u3067 ${s} \u304C\u9020\u308C\u308B\u3088\u3046\u306B\u306A\u3063\u305F`,lent:"\u5CF6\u304B\u3089\u53E4\u3044\u99C6\u9010\u8266\u30922\u96BB\u8CB8\u3057\u3066\u3082\u3089\u3063\u305F\u3002\u8FD4\u3057\u3066\u307B\u3057\u3044\u305D\u3046\u3060\u3002",yardH:"\u9020\u8239\u6240",slipsN:(s,t)=>`\u8239\u53F0\u30FB${t}\u57FA\u4E2D ${s}\u57FA \u4F7F\u7528\u4E2D`,slipsNote:"1\u57FA\u30671\u96BB\u305A\u3064\u9020\u308B",addSlip:"\u8239\u53F0\u3092\u5897\u3084\u3059",slipBuilt:"\u65B0\u3057\u3044\u8239\u53F0\u304C\u3067\u304D\u305F\u3002\u8FD1\u6240\u304B\u3089\u82E6\u60C5\u304C\u6765\u3066\u3044\u308B\u3002",craneN:s=>`\u30AF\u30EC\u30FC\u30F3\u30FB${s}\u53F7`,craneNote:(s,t)=>`\u8239\u4F53 ${s.toLocaleString("ja")} t \u307E\u3067\u30FB\u7832\u5854 ${t.toLocaleString("ja")} t \u307E\u3067`,upCrane:"\u5927\u304D\u3044\u30AF\u30EC\u30FC\u30F3\u306B\u3059\u308B",craneBuilt:"\u65B0\u3057\u3044\u30AF\u30EC\u30FC\u30F3\u304C\u7ACB\u3063\u305F\u3002\u53E4\u3044\u307B\u3046\u306F\u8A18\u5FF5\u7891\u306B\u306A\u3063\u305F\u3002",maxed:"\u3053\u308C\u4EE5\u4E0A\u306F\u306A\u3044",whyNot:{crane:"\u30AF\u30EC\u30FC\u30F3\u304C\u5C0F\u3055\u3044",slip:"\u7A7A\u3044\u305F\u8239\u53F0\u304C\u306A\u3044",locked:"",money:""},perShip:"1\u96BB",crew:"\u7DF4\u5EA6",killsN:s=>`\u6483\u6C88 ${s}`,promoted:s=>`${s} \u306E\u4E57\u54E1\u304C\u8155\u3092\u4E0A\u3052\u305F`,craneLift:(s,t)=>`\u305D\u306E\u7832\u5854\u306F ${Math.round(s).toLocaleString("ja")} t\u3002\u30AF\u30EC\u30FC\u30F3\u306F ${t.toLocaleString("ja")} t \u307E\u3067\u3057\u304B\u540A\u308C\u306A\u3044\u3002\u5148\u306B\u5927\u304D\u3044\u30AF\u30EC\u30FC\u30F3\u3092\u3002`,buySteel:"\u5CF6\u306E\u88FD\u9244\u6240\u304B\u3089\u92FC\u6750\u3092\u8CB7\u3046",insurance:"\u4FDD\u967A\u91D1",planes:"\u8266\u4E0A\u6A5F\u306E\u88DC\u5145",retreat:"\u64A4\u9000",goalHud:{all:(s,t)=>`\u7B2C${s}\u6CE2 / ${t}`,escort:(s,t)=>`\u5546\u8239 ${s}\u96BB \u5065\u5728\u30FB\u5FC5\u8981 ${t}`,hold:s=>`\u6B8B\u308A ${s}`,boss:(s,t)=>`\u7B2C${s}\u6CE2 / ${t}`},why:{flag:"\u65D7\u8266\u3092\u5931\u3063\u305F\u3002\u6B8B\u308A\u306E\u8266\u304C\u77E5\u3089\u305B\u3092\u6301\u3061\u5E30\u308B\u3002",escort:"\u7A4D\u307F\u8377\u306F\u6D77\u306E\u5E95\u3002\u4F9D\u983C\u4E3B\u306F\u3054\u7ACB\u8179\u3060\u3002",retreat:"\u6226\u8853\u7684\u64A4\u9000\u3002\u8AB0\u3082\u3060\u307E\u3055\u308C\u3066\u3044\u306A\u3044\u3002"},wins:["\u6575\u8266\u968A\u3001\u6D88\u6EC5\u3002\u4FDD\u967A\u6599\u304C\u4E0B\u304C\u308B\u3002","\u706B\u529B\u306F\u7533\u3057\u5206\u306A\u304B\u3063\u305F\u3002\u4ECA\u56DE\u306F\u5B89\u5B9A\u6027\u3082\u3002","\u7070\u8272\u8266\u968A\u306F\u3053\u308C\u3092\u899A\u3048\u308B\u3060\u308D\u3046\u3002\u305D\u3057\u3066\u5199\u3059\u3060\u308D\u3046\u3002","\u6E2F\u9577\u306F\u6570\u3048\u308B\u306E\u3092\u3084\u3081\u305F\u3002"],ending:["\u7070\u9BE8\u304C\u6C88\u3093\u3060\u6D77\u57DF\u306E\u5148\u3001\u9727\u306E\u5411\u3053\u3046\u306B\u3001\u5CF6\u304C\u4E00\u3064\u3042\u3063\u305F\u3002","\u7070\u8272\u306E\u8239\u53F0\u3068\u3001\u7070\u8272\u306E\u30AF\u30EC\u30FC\u30F3\u304C\u4E26\u3076\u9020\u8239\u6240\u3002\u4EBA\u306F\u4E00\u4EBA\u3082\u3044\u306A\u304B\u3063\u305F\u3002","\u8A2D\u8A08\u5BA4\u306B\u306F\u56F3\u9762\u304C\u5C71\u306E\u3088\u3046\u306B\u7A4D\u307E\u308C\u3066\u3044\u305F\u3002\u3069\u308C\u3082\u898B\u899A\u3048\u304C\u3042\u308B\u3002\u3042\u306A\u305F\u304C\u6C88\u3081\u305F\u8266\u3068\u3001\u3042\u306A\u305F\u304C\u5931\u3063\u305F\u8266\u3002","\u3044\u3061\u3070\u3093\u4E0B\u306B\u3001\u9EC4\u3070\u3093\u3060\u4E00\u679A\u304C\u3042\u3063\u305F\u3002\u7F72\u540D\u306F\u5148\u4EE3\u306E\u3082\u306E\u3060\u3063\u305F\u3002","\u4F59\u767D\u306B\u3001\u540C\u3058\u5B57\u3067\u300C\u7A4D\u307F\u3059\u304E\u3002\u305F\u3076\u3093\u8EE2\u3076\u3002\u300D\u3068\u3042\u3063\u305F\u3002","\u7070\u9BE8\u306F\u3001\u5148\u4EE3\u304C\u63CF\u3044\u3066\u3001\u6368\u3066\u305F\u8266\u3060\u3063\u305F\u3002","\u5EFA\u8266\u6761\u7D04\u306F\u3001\u7070\u9BE8\u3068\u4E00\u7DD2\u306B\u6C88\u3093\u3060\u3002"],endLast:"\u9ED2\u9244\u9020\u8239\u6240\u306F\u3001\u4ECA\u65E5\u3082\u55B6\u696D\u3057\u3066\u3044\u307E\u3059\u3002",endStats:(s,t,e,n)=>`\u51FA\u6483 ${s} \u56DE\u30FB\u5EFA\u9020 ${t} \u96BB\u30FB\u55AA\u5931 ${e} \u96BB\u30FB\u2605 ${n}`,endBtn:"\u9020\u8239\u6240\u3078",tips:{yard:"\u3053\u3053\u304C\u9020\u8239\u6240\u3002\u53F3\u306F\u6D77\u56F3\uFF1A1-1 \u3092\u9078\u3093\u3067\u300C\u51FA\u6483\u300D\u3002\u5DE6\u306F\u8266\u968A\uFF1A\u300C\u6539\u88C5\u300D\u3067\u7832\u3092\u8F09\u305B\u66FF\u3048\u3001\u25C6\u3067\u65D7\u8266\u3092\u6C7A\u3081\u308B\u3002",battle:{mouse:"\u5DE6\u30C9\u30E9\u30C3\u30B0\u3067\u8266\u3092\u9078\u3073\u3001\u6D77\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u79FB\u52D5\u3001\u6575\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u653B\u6483\u3002\u4F55\u3082\u3057\u306A\u304F\u3066\u3082\u3001\u5404\u8266\u306F\u8FD1\u3044\u6575\u3092\u81EA\u5206\u3067\u6483\u3064\u3002\u65D7\u8266\u304C\u6C88\u3080\u3068\u8CA0\u3051\u3002",touch:"\u8266\u3092\u30BF\u30C3\u30D7\u3067\u9078\u3073\u3001\u6D77\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5\u3001\u6575\u3092\u30BF\u30C3\u30D7\u3067\u653B\u6483\u3002\u4F55\u3082\u3057\u306A\u304F\u3066\u3082\u3001\u5404\u8266\u306F\u8FD1\u3044\u6575\u3092\u81EA\u5206\u3067\u6483\u3064\u3002\u65D7\u8266\u304C\u6C88\u3080\u3068\u8CA0\u3051\u3002"},dock:"\u8266\u306E\u4E0A\u306E\u4E38\u3092\u62BC\u3057\u3066\u3001\u305D\u3053\u306B\u8F09\u305B\u308B\u3082\u306E\u3092\u9078\u3076\u3002\u9AD8\u3044\u6240\u306E\u91CD\u3044\u7832\u307B\u3069\u4E0D\u5B89\u5B9A\u306B\u306A\u308B\uFF08GM \u3092\u898B\u308B\uFF09\u3002\u300C\u8A66\u3057\u6483\u3061\u300D\u3067\u3069\u308C\u3060\u3051\u50BE\u304F\u304B\u5206\u304B\u308B\u3002\u5DE5\u8CC3\u306F\u9020\u8239\u6240\u306B\u623B\u308B\u3068\u304D\u306B\u6255\u3046\u3002",result:"\u92F2\u306F\u5EFA\u9020\u3068\u4FEE\u7406\u306B\u3001\u92FC\u6750\u306F\u6C88\u3081\u305F\u6575\u304B\u3089\u3002\u90E8\u54C1\u306F\u5009\u5EAB\u3078\u5165\u308B\u306E\u3067\u3001\u8266\u968A\u306E\u753B\u9762\u3067\u4ED8\u3051\u308B\u3002\u30AF\u30EA\u30A2\u3057\u305F\u30B9\u30C6\u30FC\u30B8\u306F\u4F55\u5EA6\u3067\u3082\u6226\u3048\u308B\u3002",slips:"\u8239\u53F01\u57FA\u30671\u96BB\u305A\u3064\u3002\u30AF\u30EC\u30FC\u30F3\u304C\u5927\u304D\u3044\u307B\u3069\u5927\u304D\u306A\u8239\u4F53\u3092\u9020\u308C\u3001\u91CD\u3044\u7832\u5854\u3092\u540A\u308C\u308B\u3002",carrier:"\u7A7A\u6BCD\u306F\u81EA\u5206\u3067\u653B\u6483\u968A\u3092\u51FA\u3059\u3002\u7A7A\u6BCD\u3092\u9078\u3093\u3067\u6575\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\uFF08\u30BF\u30C3\u30D7\uFF09\u3059\u308B\u3068\u76EE\u6A19\u3092\u6C7A\u3081\u3089\u308C\u308B\u3002\u7A7A\u6BCD\u306F\u7832\u3067\u6226\u3048\u306A\u3044\u306E\u3067\u3001\u5F8C\u308D\u306B\u4E0B\u3052\u3066\u304A\u304F\u3002"},tipOk:"\u308F\u304B\u3063\u305F",cont:"\u7D9A\u304D\u304B\u3089",fresh:"\u306F\u3058\u3081\u304B\u3089",bossIn:"\u6575\u65D7\u8266 \u51FA\u73FE",item:{f2:["\u65B0\u578B\u6226\u95D8\u6A5F","\u8A2D\u8A08\u56F3\u30FB\u7A7A\u6226\u306B\u5F37\u3044\uFF08\u5168\u7A7A\u6BCD\uFF09"],t2:["\u65B0\u578B\u653B\u6483\u6A5F","\u8A2D\u8A08\u56F3\u30FB\u901F\u304F\u3001\u6483\u305F\u308C\u306B\u304F\u3044\uFF08\u5168\u7A7A\u6BCD\uFF09"],b2:["\u65B0\u578B\u7206\u6483\u6A5F","\u8A2D\u8A08\u56F3\u30FB\u3088\u304F\u5F53\u305F\u308B\uFF08\u5168\u7A7A\u6BCD\uFF09"],steelS:["\u92FC\u6750\u306E\u675F","\u92FC\u6750 +300"],steelL:["\u92FC\u6750\u306E\u5C71","\u92FC\u6750 +1,200"],bulkhead:["\u9632\u6C34\u533A\u753B","\u6D78\u6C34\u304C40%\u9045\u3044"],boiler:["\u9AD8\u5727\u7F36","\u901F\u529B +6%"],rangefinder:["\u65B0\u578B\u6E2C\u8DDD\u5100","\u521D\u5F3E\u304C\u305A\u3063\u3068\u8FD1\u304F\u306B\u843D\u3061\u308B"],bulge:["\u30D0\u30EB\u30B8","\u5B89\u5B9A\uFF08GM +0.4 m\uFF09\u3001\u9B5A\u96F7\u306E\u88AB\u5BB3 \u221235%\u3001\u901F\u529B \u22124%"],armour:["\u88C5\u7532\u677F","\u88AB\u5BB3\u304C\u6E1B\u308B\u3001\u901F\u529B \u22123%"],aadir:["\u5BFE\u7A7A\u5C04\u6483\u6307\u63EE\u88C5\u7F6E","\u5BFE\u7A7A\u5C04\u6483\u304C\u3088\u304F\u5F53\u305F\u308B"],oxy:["\u9178\u7D20\u9B5A\u96F7","\u5C04\u7A0B2\u500D\u3001\u5F3E\u982D\u304C\u91CD\u3044\uFF08\u5168\u8266\uFF09"],cal41:["41cm\u7832","\u8A2D\u8A08\u56F3"],cal46:["46cm\u7832","\u8A2D\u8A08\u56F3"],cal51:["51cm\u7832","\u8A2D\u8A08\u56F3"],cal61:["61cm\u7832","\u8A2D\u8A08\u56F3"],cal80:["80cm\u7832","\u8A2D\u8A08\u56F3\u3002\u81EA\u5206\u304C\u4F55\u3092\u3057\u305F\u304B\u3001\u308F\u304B\u3063\u3066\u3044\u308B\u306F\u305A\u3060\u3002"]},tier:["\u3075\u3064\u3046","\u826F\u3044","\u73CD\u3057\u3044","\u5E7B","","","","","","\u5E7B"]}},V=s=>Im[Hn()]?.[s]??Im.en[s];var Re=s=>Math.round(s).toLocaleString(Hn()==="ja"?"ja":"en"),Ce=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Lc=class{constructor(t){Object.assign(this,t),this.tab="fleet",this.sea=1,this.sel=null,this.open=!1;let e=this.el=document.createElement("div");e.id="yard",e.innerHTML=`
      <div class="yd-top"><b class="yd-name"></b><span class="yd-res"></span></div>
      <div class="yd-left"><div class="yd-tabs"></div><div class="yd-body"></div></div>
      <div class="yd-right"><div class="yd-seas"></div><div class="yd-stages"></div><div class="yd-brief"></div></div>
      <div class="yd-msg"></div>`,this.root.appendChild(e);let n=r=>e.querySelector(r);this.$={name:n(".yd-name"),res:n(".yd-res"),tabs:n(".yd-tabs"),body:n(".yd-body"),seas:n(".yd-seas"),stages:n(".yd-stages"),brief:n(".yd-brief"),msg:n(".yd-msg")},e.addEventListener("pointerdown",r=>{r.target.closest("button,select,.yd-card")&&r.stopPropagation()});let i=this.resEl=document.createElement("div");i.id="result",this.root.appendChild(i)}get s(){return this.state}tip(t){let e=this.s;if(e.tips??={},e.tips[t])return;e.tips[t]=1;let n=V("tips")[t];if(n&&typeof n=="object"&&(n=n[this.touch?"touch":"mouse"]),!n)return;let i=this.tipEl??=Object.assign(document.createElement("div"),{id:"tip"});this.root.appendChild(i),i.innerHTML=`<p>${Ce(n)}</p><button type="button">${V("tipOk")}</button>`,i.classList.add("on"),i.querySelector("button").onclick=r=>{r.stopPropagation(),i.classList.remove("on")},i.addEventListener("pointerdown",r=>r.stopPropagation())}show(){this.open=!0,this.el.classList.add("on"),setTimeout(()=>this.tip("yard"),600),this.sea=+(this.s.last??"1-1")[0],this.sel??=this.s.last??"1-1",this.render()}hide(){this.open=!1,this.el.classList.remove("on")}flash(t,e=3.2){this.$.msg.textContent=t,this.$.msg.classList.add("on"),clearTimeout(this._mt),this._mt=setTimeout(()=>this.$.msg.classList.remove("on"),e*1e3)}changed(t=!0){this.onChange?.(t),this.render()}render(){if(!this.open)return;let t=this.s;this.$.name.textContent=V("yard");let e=Pu(t,this.dispOf),n=Eu(t);this.$.res.innerHTML=`<span><i>${V("rivets")}</i><b>${Re(t.rivets)}</b></span><span><i>${V("steel")}</i><b>${Re(t.steel)}</b></span>
      <span><i>${V("fame")}</i><b>\u2605 ${yo(t)}</b></span><span class="${e>n?"over":""}"><i>${V("treaty")}</i><b>${Re(e)}</b> / ${Re(n)} t</span><span><i>${V("perShip")}</i><b>${Number.isFinite(Ac(t))?Re(Ac(t)):"\u221E"}</b> t</span>`;let i=V("tabs");this.$.tabs.innerHTML=Object.keys(i).map(r=>`<button type="button" data-tab="${r}" class="${r===this.tab?"on":""}">${i[r]}</button>`).join("");for(let r of this.$.tabs.children)r.onclick=()=>{this.tab=r.dataset.tab,this.render(),this.tab==="build"&&this.tip("slips")};this[`tab_${this.tab}`](),this.chart()}tab_fleet(){let t=this.s,e=Hn()==="ja",n=r=>{let o=Object.keys(Ze).filter(a=>Ze[a].part&&(t.items[a]>0||a===r));return`<option value="">${V("none")}</option>`+o.map(a=>`<option value="${a}" ${a===r?"selected":""}>${Ce(V("item")[a][0])}${a!==r?` \xD7${t.items[a]}`:""}</option>`).join("")},i=t.ships.map(r=>{let o=t.sortie.includes(r.uid),a=t.flag===r.uid,c=Lu(r),l=xi(r.name,e);return r.building?`<div class="yd-ship building"><div class="nm"><b>${Ce(l)}</b><em>${bt("kinds")[r.kind]}</em></div><div class="st">${V("building")(r.building)}</div></div>`:`<div class="yd-ship ${o?"in":""}" data-uid="${r.uid}">
        <button type="button" class="tg ${o?"on":""}" data-a="toggle">${o?V("inSortie"):V("moored")}</button>
        <button type="button" class="fl ${a?"on":""}" data-a="flag" title="${V("makeFlag")}">\u25C6</button>
        <div class="nm"><b>${Ce(l)}</b><em>${bt("kinds")[r.kind]}${r.old?` \xB7 ${V("old")}`:""} \xB7 ${Ce(this.armOf(r))}</em><em class="crew">${V("crew")} ${"\u2605".repeat(Tr(r))}${"\u2606".repeat(4-Tr(r))}${r.kills?` \xB7 ${V("killsN")(r.kills)}`:""}</em><i class="hp"><u style="width:${r.hp*100}%"></u></i></div>
        <div class="pt"><select data-a="p0">${n(r.parts[0])}</select><select data-a="p1">${n(r.parts[1])}</select></div>
        <div class="bt"><button type="button" data-a="refit">${V("refit")}</button>${c>0?`<button type="button" data-a="repair">${V("repair")(c)}</button>`:""}${!a&&!r.old?`<button type="button" class="dim" data-a="scrap">${V("scrap")}</button>`:""}</div>
      </div>`}).join("");this.$.body.innerHTML=`<div class="yd-list">${i}</div>`;for(let r of this.$.body.querySelectorAll(".yd-ship[data-uid]")){let o=Cn(t,+r.dataset.uid);for(let a of r.querySelectorAll("[data-a]")){let c=a.dataset.a;if(a.tagName==="SELECT"){a.onchange=()=>{xm(t,o,c==="p0"?0:1,a.value||null),this.changed(!0)};continue}a.onclick=()=>{if(c==="toggle")if(t.sortie.includes(o.uid)){if(t.flag===o.uid)return this.flash(V("noFlag"));t.sortie=t.sortie.filter(l=>l!==o.uid)}else{if(t.sortie.length>=8)return this.flash(V("full"));t.sortie.push(o.uid)}else if(c==="flag"){if(!t.sortie.includes(o.uid)){if(t.sortie.length>=8)return this.flash(V("full"));t.sortie.push(o.uid)}t.flag=o.uid}else if(c==="refit"){if(!t.sortie.includes(o.uid)){if(t.sortie.length>=8)return this.flash(V("full"));t.sortie.push(o.uid),this.changed(!0)}return this.onRefit(o.uid)}else if(c==="repair"){if(!fm(t,o))return this.flash(V("poor"))}else if(c==="scrap")if(a.dataset.armed){let l=xi(o.name,Hn()==="ja");pm(t,o),this.flash(V("scrapped")(l))}else{a.dataset.armed=1,a.textContent="?";return}this.changed(c!=="repair")}}}}tab_build(){let t=this.s,e=V("whyNot"),n=cm.map(d=>{let f=Vn[d],m=vo(t,d),v=Cu(t,d);return`<div class="yd-build ${m?"":"locked"}"><div class="nm"><b>${bt("kinds")[d]}</b><em>${Re(f.tons)} t \xB7 ${V("slip")(f.slip)}</em></div>
        <div class="cost">${Re(f.rivets)} <i>${V("rivets")}</i> \xB7 ${Re(f.steel)} <i>${V("steel")}</i></div>
        ${m?v&&v!=="money"?`<span class="lk">${e[v]}</span>`:`<button type="button" data-k="${d}" ${v?"disabled":""}>${V("build")}</button>`:`<span class="lk">${V("unlockAt")(Er[d])}</span>`}</div>`}).join(""),i=As(t),r=Tu[i],o=t.crane??0,a=Ar[o+1],c=`<div class="yd-h">${V("yardH")}</div>
      <div class="yd-build"><div class="nm"><b>${V("slipsN")(Ru(t),i)}</b><em>${V("slipsNote")}</em></div>${r?`<div class="cost">${Re(r.rivets)} <i>${V("rivets")}</i> \xB7 ${Re(r.steel)} <i>${V("steel")}</i></div><button type="button" class="buy-slip" ${t.rivets>=r.rivets&&t.steel>=r.steel?"":"disabled"}>${V("addSlip")}</button>`:`<span class="lk">${V("maxed")}</span>`}</div>
      <div class="yd-build"><div class="nm"><b>${V("craneN")(o+1)}</b><em>${V("craneNote")(Ar[o].tons,Ar[o].turret)}</em></div>${a?`<div class="cost">${Re(a.rivets)} <i>${V("rivets")}</i> \xB7 ${Re(a.steel)} <i>${V("steel")}</i></div><button type="button" class="buy-crane" ${t.rivets>=a.rivets&&t.steel>=a.steel?"":"disabled"}>${V("upCrane")}</button>`:`<span class="lk">${V("maxed")}</span>`}</div>`,l=Hn()==="ja",h=t.ships.filter(d=>d.building).map(d=>`<div class="yd-slip">${Ce(xi(d.name,l))} <em>${bt("kinds")[d.kind]} \xB7 ${V("building")(d.building)}</em></div>`).join(""),u=[500,2e3].map(d=>`<button type="button" data-buy="${d}" ${t.rivets>=d*Rc?"":"disabled"}>+${Re(d)} <i>${V("steel")}</i> \xB7 ${Re(d*Rc)} <i>${V("rivets")}</i></button>`).join("");this.$.body.innerHTML=`<div class="yd-list">${n}${h?`<div class="yd-sub">${h}</div>`:""}${c}<div class="yd-h">${V("buySteel")}</div><div class="yd-files">${u}</div></div>`,this.$.body.querySelector(".buy-slip")?.addEventListener("click",()=>{lm(t)&&(this.flash(V("slipBuilt")),this.changed(!1))}),this.$.body.querySelector(".buy-crane")?.addEventListener("click",()=>{hm(t)&&(this.flash(V("craneBuilt")),this.changed(!1))});for(let d of this.$.body.querySelectorAll("button[data-buy]"))d.onclick=()=>{dm(t,+d.dataset.buy)?this.changed(!1):this.flash(V("poor"))};for(let d of this.$.body.querySelectorAll("button[data-k]"))d.onclick=()=>{let f=um(t,d.dataset.k);if(!f)return this.flash(V("poor"));this.flash(V("built")(xi(f.name,l))),this.changed(!1)}}tab_store(){let t=this.s,e=V("item"),n=Object.keys(Ze).filter(r=>Ze[r].part&&t.items[r]>0).map(r=>`<div class="yd-item t${Ze[r].tier}"><b>${Ce(e[r][0])} \xD7${t.items[r]}</b><em>${Ce(e[r][1])}</em></div>`).join(""),i=t.bps.map(r=>`<div class="yd-item t${Ze[r].tier}"><b>${Ce(e[r][0])}</b><em>${Ce(e[r][1])}</em></div>`).join("");this.$.body.innerHTML=`<div class="yd-list"><div class="yd-h">${V("parts")}</div>${n||`<p class="yd-note">${V("noParts")}</p>`}
      <div class="yd-h">${V("blueprints")}</div>${i||`<p class="yd-note">${V("none")}</p>`}
      <div class="yd-h">${V("calibres")}</div><p class="yd-cals">${_o(t).map(r=>`${r}`).join(" \xB7 ")} cm</p></div>`}async tab_book(){let t=this.s,e=["m1","m2","m3"],n=await Promise.all(e.map(l=>Rm(l).catch(()=>null)));if(this.tab!=="book")return;let i=l=>new Date(l).toLocaleString(Hn()==="ja"?"ja":"en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),r=e.map((l,h)=>{let u=n[h];return`<div class="yd-save"><b>${h+1}</b><span>${u?`${i(u.at)} \xB7 ${u.stage} \xB7 \u2605${u.stars} \xB7 ${u.ships}`:V("empty")}</span>
      <button type="button" data-save="${l}">${V("save")}</button><button type="button" data-load="${l}" ${u?"":"disabled"}>${V("load")}</button></div>`}).join(""),o=t.log.slice(0,8).map(l=>`<div class="yd-log">${l.stage} ${V("stages")[l.stage][0]} \xB7 ${l.won?"\u2605".repeat(l.stars):V("lose")}</div>`).join("");this.$.body.innerHTML=`<div class="yd-list">${r}
      <div class="yd-files"><button type="button" class="ex">${V("exportF")}</button><button type="button" class="im">${V("importF")}</button></div>
      <div class="yd-h">${V("record")}</div>${o||`<p class="yd-note">${V("none")}</p>`}
      <div class="yd-files"><button type="button" class="dim nw">${V("newGame")}</button></div></div>`;let a=this.$.body;for(let l of a.querySelectorAll("[data-save]"))l.onclick=async()=>{await bo(l.dataset.save,t),this.flash(V("saved")),this.render()};for(let l of a.querySelectorAll("[data-load]"))l.onclick=async()=>{try{let h=await Cc(l.dataset.load);this.onReplace(h.state),this.flash(V("loaded"))}catch{this.flash(V("badFile"))}};a.querySelector(".ex").onclick=async()=>Cm(await Du(t)),a.querySelector(".im").onclick=async()=>{let l=await Lm();if(l)try{this.onReplace(await Nu(l)),this.flash(V("loaded"))}catch{this.flash(V("badFile"),5)}};let c=a.querySelector(".nw");c.onclick=()=>{c.dataset.armed?this.onReplace(xo()):(c.dataset.armed=1,c.textContent+=" ?")}}chart(){let t=this.s,e=V("seaNames");this.$.seas.innerHTML=e.map((l,h)=>`<button type="button" class="${this.sea===h+1?"on":""} ${Tc(t,`${h+1}-1`)?"":"dead"}" data-sea="${h+1}">${h+1} \xB7 ${l}</button>`).join("");for(let l of this.$.seas.children)l.onclick=()=>{this.sea=+l.dataset.sea,this.render()};let n=rs.filter(l=>+l.id[0]===this.sea),i=V("goals"),r=V("stages");this.$.stages.innerHTML=n.map(l=>{let h=Tc(t,l.id),u=t.stages[l.id],d=u?.stars??0,f=l.goal==="escort"?i.escort(...l.escort):l.goal==="hold"?i.hold(l.time):i[l.goal];return`<div class="yd-card ${h?"":"locked"} ${this.sel===l.id?"on":""} ${l.goal==="boss"?"boss":""}" data-id="${l.id}">
        <span class="id">${l.id}</span><b>${h?r[l.id][0]:"\xB7 \xB7 \xB7"}</b><em>${h?f:V("locked")}</em><span class="stars">${h?"\u2605".repeat(d)+"\u2606".repeat(3-d):""}</span></div>`}).join("");for(let l of this.$.stages.children)l.onclick=()=>{l.classList.contains("locked")||(this.sel=l.dataset.id,this.render())};let o=wr(this.sel);if(!o||+o.id[0]!==this.sea||!Tc(t,o.id)){this.$.brief.innerHTML="";return}let a={};for(let l of o.waves.flat()){let h=l==="copy"?"copy":l.replace("!","");a[h]=(a[h]??0)+1}let c=Object.entries(a).map(([l,h])=>`${l==="copy"?Hn()==="ja"?"\u5199\u3057":"copies":bt("kinds")[l]} \xD7${h}`).join(" \xB7 ");this.$.brief.innerHTML=`<p class="txt">${Ce(r[o.id][1])}</p>
      <div class="kv"><span><i>${V("enemy")}</i>${c}</span><span><i>${V("sea")}</i>${V("seaNote")[this.sea-1]}</span><span><i>${V("fee")}</i>${Re(o.fee)} ${V("rivets")}</span></div>
      <button type="button" class="go">${V("sortie")}</button>`,this.$.brief.querySelector(".go").onclick=()=>this.trySortie(o.id)}trySortie(t){let e=this.s,n=e.sortie.map(c=>Cn(e,c)).filter(c=>c&&!c.building);if(!n.length||!n.some(c=>c.uid===e.flag))return this.flash(V("noFlag"));let i=Ac(e),r=n.reduce((c,l)=>c+Math.max(0,this.dispOf(l)-i),0),o=Math.max(0,Pu(e,this.dispOf)-Eu(e))+r,a=0;if(o>0){if(a=ym(o),e.rivets<a)return this.flash(V("poor"));this.flash(V("overTreaty")(o,a),4)}this.onSortie(t,a)}results(t,e){let n=Hn()==="ja",i=V("item"),r=t.won?V("wins")[Math.floor(Math.random()*V("wins").length)]:V("why")[t.why]??V("why").flag,o=t.items.length?t.items.map(c=>`<div class="yd-item t${Ze[c].tier}"><b>${Ce(i[c][0])}</b><em>${V("tier")[Ze[c].tier]} \xB7 ${Ce(i[c][1])}</em></div>`).join(""):`<p class="yd-note">${V("nothing")}</p>`,a=[];t.opened&&a.push(V("opened")(t.opened));for(let c of t.unlocked)a.push(V("unlockedK")(bt("kinds")[c]));t.lent&&a.push(V("lent"));for(let c of t.promoted??[])a.push(V("promoted")(xi(c,n)));this.resEl.innerHTML=`<div class="rs-box">
      <b class="rs-head ${t.won?"won":"lost"}">${t.won?V("win"):V("lose")}</b>
      <div class="rs-stage">${t.stage} \xB7 ${Ce(V("stages")[t.stage][0])}${t.won?` <span class="stars">${"\u2605".repeat(t.stars)}${"\u2606".repeat(3-t.stars)}</span>`:""}</div>
      <p class="rs-why">${Ce(r)}</p>
      <div class="kv"><span><i>${V("rivets")}</i>+${Re(t.rivets)}</span><span><i>${V("steel")} (${V("salvage")})</i>+${Re(t.steel)}</span>${t.fine?`<span><i>${V("treaty")}</i>\u2212${Re(t.fine)}</span>`:""}${t.insurance?`<span><i>${V("insurance")}</i>+${Re(t.insurance)}</span>`:""}${t.planesCost?`<span><i>${V("planes")}</i>\u2212${Re(t.planesCost)}</span>`:""}</div>
      <div class="yd-h">${V("spoils")}</div><div class="rs-items">${o}</div>
      ${t.lost.length?`<div class="yd-h">${V("lostShips")}</div><p class="rs-lost">${t.lost.map(c=>`${Ce(xi(c.name,n))} <em>${bt("kinds")[c.kind]}</em>`).join("\u3000")}</p>`:""}
      ${a.map(c=>`<p class="rs-note">${Ce(c)}</p>`).join("")}
      <button type="button" class="go">${V("toYard")}</button></div>`,this.resEl.classList.add("on"),this.tip("result"),this.resEl.querySelector(".go").onclick=()=>{this.resEl.classList.remove("on"),t.ending&&this.onEnding?this.onEnding(e):e()}}ending(t){let e=this.s,n=V("ending"),i=this.endEl??=Object.assign(document.createElement("div"),{id:"ending"});this.root.appendChild(i),i.innerHTML=`<div class="en-box">${n.map(o=>`<p>${Ce(o)}</p>`).join("")}<p class="last">${Ce(V("endLast"))}</p>
      <div class="en-title"><b>KUROGANE</b><i>${Ce(V("endStats")(e.log.length,e.built??0,e.lostN??0,yo(e)))}</i></div>
      <button type="button" class="go">${V("endBtn")}</button></div>`,i.classList.add("on"),[...i.querySelectorAll("p"),i.querySelector(".en-title"),i.querySelector(".go")].forEach((o,a)=>{o.style.transitionDelay=`${1.2+a*3.2}s`}),requestAnimationFrame(()=>requestAnimationFrame(()=>i.classList.add("show"))),i.querySelector(".go").onclick=()=>{i.classList.remove("on","show"),t()}}};var Ye=new URLSearchParams(location.search),ln=Ye.has("render"),Xc=Ye.has("manual"),Pn=!ln&&!Xc&&!Ye.has("skirmish");if(ln||Xc||Ye.has("seed")){let s=parseInt(Ye.get("seed")??"20261004",10)>>>0;Math.random=()=>{s=s+1831565813>>>0;let t=s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Ls=1600,Ps=900,Cs=ln?2:Math.min(devicePixelRatio||1,1.5),Te=1/60,Rs=parseFloat(Ye.get("ts")??"2"),Yc=document.getElementById("c"),Je=new qr({canvas:Yc,antialias:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!1});Je.setPixelRatio(Cs);Je.setSize(Ls,Ps,!1);Je.toneMapping=ui;Je.localClippingEnabled=!0;var Is=new Tn,si=new de;Is.add(si);var Fe=new De(38,Ls/Ps,2,6e4),qc=34.2,Kc=280,Bm=ln&&Ye.has("air"),Gn=parseFloat(Ye.get("t")??(Bm?"12.9":ln?"16.2":"15.6")),Pe=io(qc,Kc,Gn),Mo=new _t,Wn=hp(Pe,new _);Wn.uHazeB.value=parseFloat(Ye.get("haze")??(ln?"3.5e-5":"5.5e-5"));var Do={uTime:{value:0}},Bu=up(Wn);si.add(Bu);var Ao=new pr(16777215,1);Is.add(Ao,Ao.target);var Cr=new Ua(16777215,16777215,1);Is.add(Cr);var Uc={dim:1};function jc(){let s=Math.asin(Pe.y),t=1/Math.max(Math.sin(Math.max(s,.01))+.15*Math.pow(Math.max(s,0)*57.3+3.885,-1.253),.02),e=[Math.exp(-.035*t),Math.exp(-.075*t),Math.exp(-.16*t)],i=7*ht.smoothstep(s,-.06,.05)*Uc.dim;Mo.setRGB(e[0]*i,e[1]*i,e[2]*i),Wn.uSunCol.value.set(Mo.r,Mo.g,Mo.b),Ao.color.copy(Mo),Ao.intensity=1,Ao.position.copy(Pe).multiplyScalar(100);let r=ht.clamp(1-(s-.02)/.3,0,1);Wn.uDusk.value=r*r,Wn.uNight.value=ht.clamp((-s-.02)/.12,0,1);let o=ht.clamp(.15+Pe.y*1.6,.02,1)*(1-Wn.uNight.value*.9);Cr.color.setRGB(.62*o,.68*o,.78*o),Cr.groundColor.setRGB(.1*o,.12*o,.12*o),Cr.intensity=2.2*(.55+.45*Uc.dim)}jc();var os=new qa({speed:parseFloat(Ye.get("wind")??"7"),dir:parseFloat(Ye.get("wdir")??"2.4")}),Io=Lh({wind:os.speed,windDir:os.dir,swellDir:1.35,swellH:.6}),Gu=pp(Io),kc=new ec(Je,Ls*Cs,Ps*Cs,{samples:ro?0:4,levels:6}),Ro=new Ge(Math.round(Ls*Cs*.5),Math.round(Ps*Cs*.5),{type:Qn,depthBuffer:!0,generateMipmaps:!0,minFilter:fi}),as=new Qa(Je,Pe,{shipSize:900,shipRes:ro?2048:4096}),Zc=(s,t)=>dp(_p(s,as),Wn,t),ri=await Lp("data/",{aniso:Je.capabilities.getMaxAnisotropy(),patch:Zc,U:Do,seaU:Gu}),Oc=new ac(ri);si.add(Oc.group);for(let s of Oc.casters())as.addCaster(s,{ship:!0});as.renderLand(new _);var Yn=new lc(Wn,os);Is.add(Yn.lightGroup);var _i=new cc(Yn,Io),Oi=new dc(Yn),Mt=new gc({art:ri,sea:Io,artillery:_i,fx:Yn,torpedoes:Oi}),oi=new mc({battle:Mt,fx:Yn,torps:Oi,patch:Zc});Mt.air=oi;si.add(oi.group);var Wu=new Sc(Zc);si.add(Wu.group);window.__bossMarks=Wu;var Fc=new Ec(Zc);Pn&&(await Fc.load("data/",Je.capabilities.getMaxAnisotropy()),si.add(Fc.group));await oi.load("data/",Je.capabilities.getMaxAnisotropy());for(let s of oi.meshes())as.addCaster(s,{ship:!0});var Jt=Mt.ships,In=parseFloat(Ye.get("hd")??(Bm?String(Math.atan2(Pe.x,Pe.z)+2.5):ln?String(Math.atan2(Pe.x,Pe.z)):"3.1")),zc=(s,t)=>[Math.cos(In)*s+Math.sin(In)*t,-Math.sin(In)*s+Math.cos(In)*t],qM=[["bb",0,0,!0],["bc",0,-520],["ca",-460,-260],["ca",460,-260],["cl",0,620],["dd",-680,880],["dd",0,1080],["dd",680,880]];if(!Pn)for(let[s,t,e,n]of qM){let[i,r]=zc(t,e),o=Mt.add(s,"A",i,r,In,6,{flagship:!!n});n||(o.station=[t,e])}var ki=Mt.flagship()??{body:{pos:new _,speed:0},alive:!0};Ye.has("nowaves")&&(Mt.waves=!1);var KM={bb:0,ca:1,dd:2,cl:3,bc:4,tr:5,cv:6,wh:7,sp:8},$u=new Za(Je,Es.map(s=>ri.kinds[s].meta.stations)),No=new Tn,Bc=xp({skyU:Wn,seaU:Gu,wakeU:$u.uniforms,windU:os.uniforms,tideU:{uTide:{value:0},uStrait:{value:new Wt(0,0,0,1)}},reflTarget:Ro,refrTarget:kc.refr,shipShadowU:as.uniforms,timeU:Do.uTime,quality:{oceanRings:+(Ye.get("orings")??(ro?150:240)),oceanSeg:+(Ye.get("oseg")??(ro?256:420))}});No.add(Bc.mesh);No.add(Yn.group);No.add(_i.mesh);No.add(Oi.mesh);si.add(_i.one);_i.mesh.visible=!ln;var jM=new lr(Je),Xu=new Tn,Hm=new Bt(Bu.geometry,Bu.material);Hm.scale.setScalar(.005);Xu.add(Hm);Xu.add(new Bt(new ur(40,24).rotateX(-Math.PI/2).translate(0,-.5,0),new We({color:new _t(.02,.04,.045)})));var ku=null;function Jc(){ku?.dispose(),ku=jM.fromScene(Xu,.02),Is.environment=ku.texture}Jc();var ie=new vc(Fe,Yc);ie.target.copy(ki.body.pos);ie.follow=ki;var Le=new _c;for(let s of["pointerdown","keydown"])addEventListener(s,()=>Le.start(),{once:!0});var Qe=new xc({battle:Mt,camera:Fe,rcam:ie,el:Yc,overlay:document.getElementById("ov"),W:Ls,H:Ps,sound:Le});Qe.select(Jt.filter(s=>s.side==="A"));go();document.getElementById("lang")?.addEventListener("click",s=>{Qp(),s.currentTarget.blur(),Qc()});var Xe=s=>document.getElementById(s),Nc=0;function wo(s,t=4){Xe("msg").textContent=s,Xe("msg").classList.add("on"),Nc=t}var Hu=[];function Qc(){let s=Xe("fleet");s.innerHTML="",Hu.length=0;for(let t of Jt.filter(e=>e.player)){let e=document.createElement("button");e.type="button",e.innerHTML=`${t.label??bt("short")[t.kind]}${t.flagship?" \u25C6":""}<em>${bt("kinds")[t.kind]}</em><i></i>`,e.addEventListener("click",n=>{t.alive&&Qe.select([t],n.shiftKey),e.blur()}),e.addEventListener("dblclick",()=>{ie.follow=t}),s.appendChild(e),Hu.push([t,e])}}Qc();var ai=ln||Ye.has("skip"),Ln=Xe("title");ai?(Ln.style.transition="none",Ln.classList.add("gone")):ie.set(Pn?{yaw:In+.6,pitch:.09,dist:1200}:{yaw:Math.atan2(Pe.x,Pe.z)+.5,pitch:.1,dist:1100});var So=Ln.querySelector(".go");So.disabled=Pn;function Vm(){ai=!0,Ln.classList.add("gone"),ie.follow=Mt.flagship(),ie.target.copy(Mt.flagship().body.pos),ie.set({yaw:Math.atan2(Pe.x,Pe.z)+.3,pitch:.62,dist:1500}),Le.start(),Qe.enabled=!0,Qe.select(Jt.filter(s=>s.player&&s.alive)),Qc()}var $n=new wc({battle:Mt,art:ri,camera:Fe,rcam:ie,root:document.getElementById("stage"),canvas:Yc,W:Ls,H:Ps,sound:Le,onSortie:()=>Pn?Rr(!1):Vm(),store:Pn?{get:s=>Cn(Zt,s.uid)?.design,put:(s,t)=>{let e=Cn(Zt,s.uid);e&&(e.design=t,e.planes=null)}}:null,cals:Pn?()=>_o(Zt):null,billFor:(s,t)=>_m(s,t,Mr),check:Pn?(s,t)=>{let e=$n.entry?.get(s.uid),n=r=>`${r.type}/${r.cal}/${r.n}/${r.tier??1}`,i=Au(Zt).turret;for(let r of t.mounts){if(r.type!=="gun")continue;let o=e?.mounts.find(c=>c.slot===r.slot);if(o&&n(o)===n(r))continue;let a=Mr(r.cal,r.n);if(a>i)return V("craneLift")(a,i)}return""}:null,pay:Pn?s=>Zt.rivets<s.rivets||Zt.steel<s.steel?!1:(Zt.rivets-=s.rivets,Zt.steel-=s.steel,Co(),!0):null});!ln&&!Pn&&$n.applyAll();go();window.__dock=$n;var Zt=null,vn=null,tl=!1,Gm=0,Eo=0,Yu=()=>Hn()==="ja",ZM=s=>{let t=ri.kinds[s.kind]?.meta;if(!t)return Vn[s.kind].tons;let e=ei(Bn(s.kind,t),ri),n=s.design?ei(s.design,ri):e;return Vn[s.kind==="sp"?"sp":s.kind].tons*n.disp/e.disp};function JM(s){let t=ri.kinds[s.kind]?.meta;if(!t)return"";let e=s.design??Bn(s.kind,t),n={},i=0;if(s.kind==="cv"){let r={f:3,t:4,b:3,...e.air??{}},o=bt("planeShort");return`${o.f}${r.f} \xB7 ${o.t}${r.t} \xB7 ${o.b}${r.b}`}for(let r of e.mounts)r.type==="torp"?i++:r.type==="gun"&&(n[r.cal]=(n[r.cal]??0)+r.n*(r.tier??1));return Object.keys(n).sort((r,o)=>o-r).map(r=>`${r}cm\xD7${n[r]}`).concat(i?[`T\xD7${i}`]:[]).join(" \xB7 ")}var Wm=s=>s.kind==="wh"?bt("kinds").wh:`${Yu()?"\u7070\u8272\u306E":"GREY "}${bt("kinds")[s.kind]} ${s.mark??""}`;Qe.bossName=Wm;var Dm=null;function Co(){clearTimeout(Dm),Dm=setTimeout(()=>bo("auto",Zt).catch(s=>console.warn("save",s)),300)}var Ou={big:[[0,-520],[0,-1040],[0,-1560],[0,520]],mid:[[-460,-260],[460,-260],[-460,260],[460,260],[0,620],[-900,-260],[900,-260]],dd:[[-680,880],[680,880],[0,1080],[-1100,600],[1100,600],[-1100,0],[1100,0],[0,-1900]]},QM={bb:"big",bc:"big",cv:"big",sp:"big",ca:"mid",cl:"mid",dd:"dd"};function Lo(s){Mt.reset();let t=!s,e=0,n=Zt.sortie.map(r=>Cn(Zt,r)).filter(r=>r&&!r.building);n.sort((r,o)=>(o.uid===Zt.flag)-(r.uid===Zt.flag));let i={big:Ou.big.slice(),mid:Ou.mid.slice(),dd:Ou.dd.slice()};for(let r of n){let o=r.uid===Zt.flag,a=o?[0,0]:i[QM[r.kind]].shift()??i.mid.shift()??i.dd.shift()??[0,-2400],c=ri.kinds[r.kind].meta.B,l=ri.kinds[r.kind].meta.L/2,[h,u]=t?zc(e+c/2,l):zc(...a);t&&(e+=c+34);let d=Mt.add(r.kind,"A",h,u,In,s,{flagship:o,design:r.design,mods:vm(Zt,r),hpFrac:r.hp,uid:r.uid,name:r.name,planes:r.planes??null});d.label=xi(r.name,Yu()),o||(d.station=a),s||(d.body.ctl.tele=1)}ki=Mt.flagship()??ki}function Hc(s,t){os.set(s.wind,os.dir);let e=Lh({wind:s.wind,windDir:os.dir,swellDir:1.35,swellH:s.swell});Object.assign(Io,e),mp(Gu,Io),Wn.uHazeB.value=s.haze,Wn.uCover.value=s.cover??.28,Uc.dim=s.dim??1,Gn=t,io(qc,Kc,Gn,Pe),jc(),Jc(),Wc=Gn}var Vu={wind:5,swell:.5,haze:55e-6};function Rr(s=!0){tl=!1,ai=!1,Qe.enabled=!1,Qe.select([]),Xe("hud").classList.remove("campaign"),s&&(Hc(Vu,15.6),Lo(0)),Vc(!0),$n.open&&$n.close(),ie.follow=null;let t=new _;for(let n of Jt)t.add(n.body.pos);Jt.length&&t.divideScalar(Jt.length);let e=Jt.length?Jt.reduce((n,i)=>n+i.meta.B+34,0):100;ie.target.copy(t),ie.set({yaw:In+.75,pitch:.17,dist:330+e*1.1+180}),vn.show()}function Vc(s){Fc.show(s,In,new _(0,0,0)),Zt&&Fc.setYard({slips:As(Zt),crane:Zt.crane??0,building:Zt.ships.some(t=>t.building>0)})}function Nm(s,t){let e=wr(s),n=rm(e);if(Zt.rivets-=t,Gm=t,Zt.last=s,Co(),vn.hide(),Hc(n,e.hour??n.hour),Vc(!1),Lo(6),e.goal==="escort")for(let i=0;i<e.escort[0];i++){let r=ri.kinds.tr?"tr":"cl",[o,a]=zc((i%2?1:-1)*230,200-Math.floor(i/2)*380),c=Mt.add(r,"A",o,a,In,6,{escort:!0});r!=="tr"&&(c.turrets.length=0,c.torps.length=0),c.course=In,c.body.ctl.tele=3,c.station=[(i%2?1:-1)*230,200-Math.floor(i/2)*380]}Mt.fog=n.fog??0,Mt.airTech={f2:Zt.bps.includes("f2"),t2:Zt.bps.includes("t2"),b2:Zt.bps.includes("b2")},Mt.startStage(e,{copies:Zt.copies.map(i=>gm(i,_o(Zt)))}),tl=!0,ai=!0,Eo=0,Po=0,Xe("hud").classList.add("campaign"),Xe("retreat").textContent=V("retreat"),ie.follow=Mt.flagship(),ie.target.copy(Mt.flagship().body.pos),ie.set({yaw:Math.atan2(Pe.x,Pe.z)+.3,pitch:.62,dist:1600}),Le.start(),Qe.enabled=!0,Qe.select(Jt.filter(i=>i.player&&i.alive)),Qc(),setTimeout(()=>{vn.tip("battle"),Jt.some(i=>i.player&&i.kind==="cv")&&setTimeout(()=>vn.tip("carrier"),200)},1500)}function $m(){let s=Mt.stage,t=s.def,e=Jt.filter(h=>h.player),n={},i={},r=0,o=0;for(let h of e)i[h.uid]=h.kills,o+=h.hpMax,h.alive&&(n[h.uid]=h.hp/h.hpMax,r+=h.hp);let a={};for(let h of e)if(h.wing&&h.alive){let u={...h.wing.planes};for(let d of oi.sq)d.home===h&&(u[d.kind]+=d.n);a[h.uid]=u}let c={stage:t.id,won:s.over.won,time:s.over.t,sunk:Mt.sunkList.slice(),lost:e.filter(h=>!h.alive).map(h=>h.uid),hp:n,kills:i,lostHp:1-r/Math.max(o,1),planes:a},l=mm(Zt,c);l.why=s.over.why,l.fine=Gm,bo("auto",Zt).catch(()=>{}),tl=!1,Qe.enabled=!1,vn.results(l,()=>Rr(!0))}if(nc){document.getElementById("stage").classList.add("touch");let s=document.createElement("div");s.id="touchbar",s.innerHTML='<button type="button" data-a="all"></button><button type="button" data-a="flag"></button><button type="button" data-a="none"></button>',Xe("hud").appendChild(s);let t=()=>{let e=bt("touchBtns");for(let n of s.children)n.textContent=e[n.dataset.a]};t(),yc(t),s.addEventListener("click",e=>{let n=e.target.dataset.a;if(n==="all"&&Qe.select(Jt.filter(i=>i.player&&i.alive)),n==="flag"){let i=Mt.flagship();i&&(ie.follow=i)}n==="none"&&Qe.select([]),e.target.blur()})}Xe("retreat").addEventListener("click",s=>{s.currentTarget.blur(),Mt.stage&&!Mt.stage.over&&Mt.finish(!1,"retreat")});var Um=!1;function tw(s){if(Xe("wave").innerHTML=bt("waveN")(Mt.wave),Mt.stage){let t=Mt.stage,e=t.def,n=V("goalHud"),i=Jt.filter(a=>a.escort&&a.alive).length,r=Math.max(0,(e.time??0)-t.t),o=e.goal==="escort"?n.escort(i,e.escort[1]):e.goal==="hold"?n.hold(`${Math.floor(r/60)}:${String(Math.floor(r%60)).padStart(2,"0")}`):n[e.goal](t.wave,e.waves.length);Xe("goalhud").innerHTML=`<em>${e.id} \xB7 ${V("stages")[e.id][0]}</em>${o}`}Xe("sunk").textContent=Mt.sunkN,Xe("tons").textContent=Mt.score?`\xB7 ${bt("tons")(Mt.score)}`:"";for(let[t,e]of Hu)e.style.setProperty("--hp",`${Math.max(t.hp,0)/t.hpMax*100}%`),e.classList.toggle("sel",!!t.sel),e.classList.toggle("dead",!t.alive);Nc>0&&(Nc-=s,Nc<=0&&Xe("msg").classList.remove("on"))}var Po=0;function ew(){for(;Po<Mt.log.length;Po++){let s=Mt.log[Po];if(s.kind==="wave"){let t=Jt.find(e=>e.boss&&e.alive);wo(s.boss?`${V("bossIn")}
${t?Wm(t):""}`:bt("waveIn")(s.n,s.count),4),Le.horn?.()}else if(s.kind==="over")wo(s.won?V("win"):V("lose"),5),Eo=performance.now();else if(s.kind==="sunk")wo(bt(s.ship.side==="A"?"sunkUs":"sunkThem")(bt("kinds")[s.ship.kind]),3);else if(s.kind==="capsize")wo(bt("capsized")(bt("kinds")[s.ship.kind],s.ship.side==="A"),4);else if(s.kind==="magazine"){wo(bt("magazine")(bt("kinds")[s.ship.kind]),4);let[t,e]=Gc(s.ship.body.pos);Le.boom(Math.max(t*.35,30),e,s.ship.kind==="bb"||s.ship.kind==="bc"?1.3:1)}}ki=Mt.flagship()??ki,tl&&Eo&&performance.now()-Eo>5500&&(Eo=0,$m()),!Pn&&!Um&&!ki.alive&&(Um=!0,setTimeout(()=>{Xe("endsub").textContent=bt("endSub")(Math.max(Mt.wave-1,0),Mt.sunkN,Mt.score),Xe("end").classList.add("on")},6e3))}var Fu=new _;function Gc(s){Fu.set(1,0,0).applyQuaternion(Fe.quaternion);let t=s.x-Fe.position.x,e=s.z-Fe.position.z,n=Math.hypot(t,s.y-Fe.position.y,e)||1;return[n,ht.clamp((t*Fu.x+e*Fu.z)/n,-1,1)*.8]}var el=[],km=0,Pc=0;function nw(s,t){let e=performance.now();if(!ln){let n=1e9,i=null,r=0;for(let a of oi.sq){let c=a.pos.distanceTo(Fe.position);c<n&&(n=c,i=a.pos),c<900&&(r+=a.n)}let[,o]=i?Gc(i):[0,0];Le.engines(i?Math.min(1,(r+2)/7)/(1+n/260):0,1,o)}for(let n of t){let i=n.at??n.world;if(!i)continue;let[r,o]=Gc(i);if(r=Math.max(r*.35,30),(ln||Xc)&&el.push([+yi.toFixed(3),n.kind,n.type,Math.round(r),+o.toFixed(2)]),!(n.kind==="launch"||n.kind==="torphit"&&n.ship)){if(n.kind==="torphit"){Le.boom(r,o,.7);continue}if(n.kind==="downed"){Le.strike(r,o);continue}if(n.kind==="flak"){r<2500&&e-km>140&&(km=e,Le.flak(r,o));continue}if(n.kind==="aa"){r<1500&&e-Pc>300&&(Pc=e,Le.rattle(r,o,4,7.5,900,.22));continue}if(n.kind==="mg"){r<1200&&e-Pc>300&&(Pc=e,Le.rattle(r,o,6,16,2200,.14));continue}n.kind==="drop"||n.kind==="landed"||n.kind==="touchdown"||(n.kind==="fire"?Le.gun(r,o,Ee[n.type].charge):n.kind==="splash"?Le.splash(r,o,Ee[n.type].cal>.15):n.kind==="hit"?Le.strike(r,o):n.kind)}}Le.update(s,{speed:Math.max(ki.body.speed,0)*.3,aw:os.speed,gust:0,roll:0,rollRate:0,heave:0,flog:0,force:0,landDir:null,evening:!1})}var iw=new Zn(new _(0,-1,0),0);function sw(){si.scale.y=-1,si.updateMatrixWorld(!0),as.uniforms.uMirror.value=-1,Je.clippingPlanes=[iw],Je.setRenderTarget(Ro),Je.render(Is,Fe),Je.clippingPlanes=[],si.scale.y=1,si.updateMatrixWorld(!0),as.uniforms.uMirror.value=1,Je.setRenderTarget(null)}var ae=0,Ic=0,rw=parseFloat(Ye.get("ev")??"0.9");function ow(s){Ic+=s*Rs;let t=0;for(;Ic>=Te&&t<8;){Ic-=Te,ae+=Te,t++;for(let n of Jt)n.gone||n.body.step(Te,ae);let e=_i.update(Te,ae,Jt).concat(Oi.update(Te,ae,Jt));ai?Mt.update(Te,ae,e):$n.open&&Mt.dockStep(Te,ae,e),nw(Te,e.concat(Mt.events.splice(0),oi.events.splice(0)));for(let n of e)n.kind==="splash"&&Xm.push({x:n.world.x,z:n.world.z,r:Ee[n.type].cal*14,h:Ee[n.type].cal*4})}t===8&&(Ic=0),Do.uTime.value=ae}var Xm=[],Wc=Gn;function aw(s){window.__freezeClock||!ai||(Gn+=s*Rs/3600,io(qc,Kc,Gn,Pe),jc(),Math.abs(Gn-Wc)>.25&&(Jc(),Wc=Gn))}var Om=new _;function $c(s){aw(s),ow(s),Yn.setAmbient(Cr.color,Cr.groundColor);for(let i of Jt)if(!(i.gone||i.body.sinkY>i.meta.D))for(let r of i.meta.funnels??[])Yn.funnel(i.body.toWorld(Om.set(r[0],r[1],r[2]),new _),Math.max(i.body.power,.15)*(i.alive?1:.3),s*Rs,i.body.vel);Yn.update(s*Rs,ae,Fe),Oc.dt=s,Oc.update(Jt,Fe.position),oi.draw(),Wu.update(Jt,ae);let t=Xn?Xn.focus():ie.target,e=Jt.filter(i=>!i.gone).sort((i,r)=>i.body.pos.distanceToSquared(t)-r.body.pos.distanceToSquared(t)).slice(0,8);$u.step(s*Rs,t,e.map(i=>{let r=i.body.forward(Om);return{pos:i.body.pos,fwd:new pt(r.x,r.z).normalize(),speed:Math.max(i.body.speed,0),heave:i.body.heaveV,sub:i.alive?1:.6,kind:KM[i.kind]}}),Xm.splice(0)),Xn?Xn.camera(yi):$n.open?$n.update(s):(vn?.open&&(ie.yaw=In+.75+.12*Math.sin(ae*.04)),ie.update(s)),ai&&!ln?(Qe.update(s),tw(s),ew(),oi.overlay(i=>Qe.project(i),Xe("ov"),bt("planeShort"))):Pn&&!$n.open?Qe.update(s):$n.open&&(Po=Mt.log.length),Bc.update(Fe),Wn.uCloudT.value=ae,as.renderShip(new _(ie.target.x,4,ie.target.z).lerp(Fe.position,.15).setY(4)),sw();let n=1+3.2*ht.smoothstep(-Pe.y,-.04,.16);kc.render(Is,Fe,{exposure:rw*n*qm*(.5+.5*Uc.dim),t:ae,overlay:No,thresh:1.6*n})}var To=1,Dc=0,zu=0;function Fm(s){To=s;let t=Math.round(Ls*Cs*s),e=Math.round(Ps*Cs*s);kc.setSize(t,e),Bc.uniforms.uRefr.value=kc.refr.texture,Ro.setSize(Math.round(t*.5),Math.round(e*.5)),Bc.uniforms.uReflTexel.value.set(1/Ro.width,1/Ro.height)}var zm=performance.now();function Ym(s){let t=Math.min((s-zm)/1e3,.1);if(zm=s,$c(t),Dc+=t,zu++,Dc>2){let e=Dc/zu;window.__fps=1/e,e>.021&&To>.61?Fm(Math.max(.6,To-.1)):e<.0135&&To<.99&&Fm(Math.min(1,To+.1)),Dc=0,zu=0}requestAnimationFrame(Ym)}var Xn=null,yi=0,qm=1,cw=s=>({id:s.id,kind:s.kind,side:s.side,alive:s.alive,hp:+s.hp.toFixed(1),pos:s.body.pos.toArray().map(t=>+t.toFixed(1)),speed:+(s.body.speed*1.9438).toFixed(1),heading:+(s.body.yaw*57.3).toFixed(1),heel:+(s.body.heel*57.3).toFixed(1),water:Math.round(s.body.water),founder:+s.body.founder.toFixed(1),sunk:s.body.sunk,turrets:s.turrets.map(t=>[+(t.yaw*57.3).toFixed(1),+(t.elev*57.3).toFixed(2),+t.reload.toFixed(1),t.broken?"X":t.onTarget?"*":""])});window.__battle=Mt;window.__sun=Pe;window.__torps=Oi;window.__wake=$u;window.__ships=Jt;window.__camera=Fe;window.__rcam=ie;window.__fx=Yn;window.__renderer=Je;window.__cmd=Qe;window.__state=()=>({t:+ae.toFixed(2),wave:Mt.wave,sunk:Mt.sunkN,ships:Jt.filter(s=>!s.gone).map(cw)});window.__set=s=>{s.hour!==void 0&&(Gn=s.hour,io(qc,Kc,Gn,Pe),jc(),Jc(),Wc=Gn),s.cam&&ie.set(s.cam),s.target&&ie.target.set(s.target[0],0,s.target[1]),s.follow!==void 0&&(ie.follow=s.follow===null?null:Jt[s.follow]),s.start&&(ai=!0,Ln.classList.add("gone"))};window.__fast=s=>{ai=!0,Ln.classList.add("gone");for(let e=0;e<s/Te;e++){ae+=Te;for(let i of Jt)i.gone||i.body.step(Te,ae);let n=_i.update(Te,ae,Jt).concat(Oi.update(Te,ae,Jt));Mt.update(Te,ae,n),Mt.events.length=0}Do.uTime.value=ae;let t=e=>{let n=Jt.filter(i=>i.side===e);return{n:n.length,alive:n.filter(i=>i.alive).length,hp:Math.round(n.filter(i=>i.alive).reduce((i,r)=>i+r.hp,0))}};return{t:Math.round(ae),wave:Mt.wave,sunk:Mt.sunkN,A:t("A"),E:t("E"),shells:_i.shells.length}};window.__fastUntil=(s,t=120)=>{ai=!0;for(let e=0;e<t/Te;e++){if(s())return!0;ae+=Te;for(let i of Jt)i.gone||i.body.step(Te,ae);let n=_i.update(Te,ae,Jt).concat(Oi.update(Te,ae,Jt));Mt.update(Te,ae,n),Mt.events.length=0}return Do.uTime.value=ae,!1};ln&&(ai=!0,Ye.has("air")?Xn=new Mc({battle:Mt,air:oi,camera:Fe,fast:s=>window.__fast(s),fastUntil:(s,t)=>window.__fastUntil(s,t),rcam:ie,fx:Yn,arty:_i,torps:Oi}):Xn=new bc({battle:Mt,camera:Fe,fast:s=>window.__fast(s),fastUntil:(s,t)=>window.__fastUntil(s,t),rcam:ie,fx:Yn,arty:_i,torps:Oi,event:(s,t)=>{let[e,n]=Gc(t);el.push([+yi.toFixed(3),s,"bb",Math.round(Math.max(e*.35,30)),+n.toFixed(2)])}}));window.__renderAt=(s,t)=>{let e=s/t;if(Xn){for(;yi<e-1e-6;){let c=Math.min(1/t,e-yi);yi+=c,qm=Xn.apply(yi).fade,$c(c/Rs*(Xn.ts?.(yi)??Rs))}let n=Mt.flagship(),i=n?.turrets.length?Math.max(...n.turrets.map(c=>Math.abs(c.yawV)/(Ee.bb.traverse*Math.PI/180))):0,r=1e9,o=0;for(let c of oi.sq){let l=c.pos.distanceTo(Fe.position);r=Math.min(r,l),l<600&&(o+=c.n)}let a=0;for(let c of Jt){let l=Math.max(...c.fires);l>0&&(a=Math.max(a,l*Math.min(1,250/Math.max(c.body.pos.distanceTo(Fe.position),1))))}return{t:+ae.toFixed(2),shot:Xn.shotAt(yi)[0],ev:el.splice(0),trav:+Math.min(i,1).toFixed(3),fire:+a.toFixed(3),plane:Math.round(Math.min(r,99999)),planes:o}}for(;ae<e-1e-6;)$c(1/t);return window.__state()};window.__filmLen=Xn?.len??wu;window.__film=Xn;window.__ready=!0;window.__step=(s=1,t=30)=>{for(let e=0;e<s;e++)yi+=1/t,$c(1/t);return el.splice(0)};if(Pn){let s=null;try{s=(await Cc("auto"))?.state??null}catch(n){console.warn("save unreadable",n)}Zt=s??xo(),vn=new Lc({root:Xe("stage"),state:Zt,dispOf:ZM,armOf:JM,onRefit:n=>{let i=Jt.filter(r=>r.player).findIndex(r=>r.uid===n);vn.hide(),$n.show(Math.max(i,0)),setTimeout(()=>vn.tip("dock"),500)},touch:nc,onSortie:Nm,onEnding:n=>{Hc(Vu,17.3),Lo(0),ie.set({yaw:In+2.6,pitch:.08,dist:900}),vn.ending(()=>n())},onChange:n=>{Co(),n&&Lo(0),Vc(!0)},onReplace:n=>{Zt=n,vn.state=n,Co(),Rr(!0)}}),Hc(Vu,15.6),Lo(0),Vc(!0),ie.target.copy(ki.body.pos);let t=Ln.querySelector(".refit");Ln.querySelector(".goal").dataset.t="goalC",nc&&(Ln.querySelector(".hint").dataset.t="hintTouch"),yc(()=>{So.textContent=s?V("cont"):V("fresh"),t.textContent=V("fresh"),t.style.display=s?"":"none"}),go(),So.addEventListener("click",()=>{Ln.classList.add("gone"),Le.start(),Rr(!1)}),So.disabled=!1,t.addEventListener("click",()=>{if(!t.dataset.armed){t.dataset.armed=1,t.textContent=V("fresh")+" ?";return}Zt=xo(),vn.state=Zt,Co(),Ln.classList.add("gone"),Le.start(),Rr(!0)}),yc(()=>{vn.render();for(let n of Jt)n.uid&&(n.label=xi(n.name,Yu()))}),window.__camp={get state(){return Zt},sortie:Nm,toYard:Rr,endBattle:$m,yard:vn}}else So.addEventListener("click",Vm),Ln.querySelector(".refit")?.addEventListener("click",()=>{Ln.classList.add("gone"),Le.start(),Qe.enabled=!1,$n.show()});if(!ln&&!Xc)requestAnimationFrame(Ym);else{let s=()=>requestAnimationFrame(s);s()}
