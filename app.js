var wh="160";var o0=0,nd=1,c0=2;var Gf=1,l0=2,Ci=3,di=0,on=1,Yt=2;var Xi=0,Qs=1,nr=2,id=3,sd=4,h0=5,ms=100,u0=101,d0=102,rd=103,ad=104,f0=200,p0=201,m0=202,g0=203,Vl=204,Gl=205,b0=206,v0=207,x0=208,y0=209,_0=210,M0=211,w0=212,S0=213,E0=214,T0=0,A0=1,R0=2,go=3,C0=4,L0=5,P0=6,k0=7,Wf=0,I0=1,D0=2,ui=0,N0=1,U0=2,F0=3,O0=4,z0=5,B0=6,od="attached",H0="detached",Xf=300,ir=301,sr=302,Wl=303,Xl=304,Xo=306,ys=1e3,En=1001,$r=1002,kt=1003,bo=1004;var Hr=1005;var xt=1006,Sh=1007;var fi=1008;var $i=1009,V0=1010,G0=1011,Eh=1012,$f=1013,Fn=1014,Li=1015,ti=1016,qf=1017,jf=1018,bs=1020,W0=1021,an=1023,X0=1024,$0=1025,vs=1026,rr=1027,q0=1028,Yf=1029,j0=1030,Kf=1031,Jf=1033,ll=33776,hl=33777,ul=33778,dl=33779,cd=35840,ld=35841,hd=35842,ud=35843,Zf=36196,dd=37492,fd=37496,pd=37808,md=37809,gd=37810,bd=37811,vd=37812,xd=37813,yd=37814,_d=37815,Md=37816,wd=37817,Sd=37818,Ed=37819,Td=37820,Ad=37821,fl=36492,Rd=36494,Cd=36495,Y0=36283,Ld=36284,Pd=36285,kd=36286;var ar=2300,_s=2301,pl=2302,Id=2400,Dd=2401,Nd=2402,K0=2500;var Qf=0,$o=1,ra=2,ep=3e3,xs=3001,J0=3200,Z0=3201,tp=0,Q0=1,Vt="",tt="srgb",Nt="srgb-linear",Th="display-p3",qo="display-p3-linear",vo="linear",ft="srgb",xo="rec709",yo="p3";var Is=7680;var Ud=519,eg=512,tg=513,ng=514,jo=515,ig=516,sg=517,rg=518,ag=519,$l=35044,Ah=35048;var Fd="300 es",ql=1035,Pi=2e3,_o=2001,qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=1234567,Vr=Math.PI/180,or=180/Math.PI;function ei(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function rn(s,e,t){return Math.max(e,Math.min(t,s))}function Rh(s,e){return(s%e+e)%e}function og(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function cg(s,e,t){return s!==e?(t-s)/(e-s):0}function Gr(s,e,t){return(1-t)*s+t*e}function lg(s,e,t,n){return Gr(s,e,1-Math.exp(-t*n))}function hg(s,e=1){return e-Math.abs(Rh(s,e*2)-e)}function ug(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function dg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function fg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function pg(s,e){return s+Math.random()*(e-s)}function mg(s){return s*(.5-Math.random())}function gg(s){s!==void 0&&(Od=s);let e=Od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bg(s){return s*Vr}function vg(s){return s*or}function jl(s){return(s&s-1)===0&&s!==0}function xg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yg(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var he={DEG2RAD:Vr,RAD2DEG:or,generateUUID:ei,clamp:rn,euclideanModulo:Rh,mapLinear:og,inverseLerp:cg,lerp:Gr,damp:lg,pingpong:hg,smoothstep:ug,smootherstep:dg,randInt:fg,randFloat:pg,randFloatSpread:mg,seededRandom:gg,degToRad:bg,radToDeg:vg,isPowerOfTwo:jl,ceilPowerOfTwo:xg,floorPowerOfTwo:Mo,setQuaternionFromProperEuler:yg,normalize:rt,denormalize:hi},pe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=i[0],g=i[3],p=i[6],x=i[1],v=i[4],y=i[7],S=i[2],A=i[5],C=i[8];return r[0]=a*b+o*x+c*S,r[3]=a*g+o*v+c*A,r[6]=a*p+o*y+c*C,r[1]=l*b+h*x+u*S,r[4]=l*g+h*v+u*A,r[7]=l*p+h*y+u*C,r[2]=d*b+f*x+m*S,r[5]=d*g+f*v+m*A,r[8]=d*p+f*y+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ml.makeScale(e,t)),this}rotate(e){return this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ml=new qe;function np(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _g(){let s=qr("canvas");return s.style.display="block",s}var zd={};function Wr(s){s in zd||(zd[s]=!0,console.warn(s))}var Bd=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hd=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ha={[Nt]:{transfer:vo,primaries:xo,toReference:s=>s,fromReference:s=>s},[tt]:{transfer:ft,primaries:xo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[qo]:{transfer:vo,primaries:yo,toReference:s=>s.applyMatrix3(Hd),fromReference:s=>s.applyMatrix3(Bd)},[Th]:{transfer:ft,primaries:yo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hd),fromReference:s=>s.applyMatrix3(Bd).convertLinearToSRGB()}},Mg=new Set([Nt,qo]),et={enabled:!0,_workingColorSpace:Nt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Ha[e].toReference,i=Ha[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ha[s].primaries},getTransfer:function(s){return s===Vt?vo:Ha[s].transfer}};function er(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ds,wo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=qr("canvas")),Ds.width=e.width,Ds.height=e.height;let n=Ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=er(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wg=0,So=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(bl(i[a].image)):r.push(bl(i[a]))}else r=bl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function bl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sg=0,Kt=class s extends qi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=En,i=En,r=xt,a=fi,o=an,c=$i,l=s.DEFAULT_ANISOTROPY,h=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=ei(),this.name="",this.source=new So(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===xs?tt:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?xs:ep}set encoding(e){Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xs?tt:Vt}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Xf;Kt.DEFAULT_ANISOTROPY=1;var We=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,y=(f+1)/2,S=(p+1)/2,A=(h+d)/4,C=(u+b)/4,I=(m+g)/4;return v>y&&v>S?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=C/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=I/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=C/r,i=I/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yl=class extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Wr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xs?tt:Vt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new So(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends Yl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Eo=class extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kl=class extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let S=Math.sqrt(v),A=Math.atan2(S,p*x);g=Math.sin(g*A)/S,o=Math.sin(o*A)/S}let y=o*x;if(c=c*g+d*y,l=l*g+f*y,h=h*g+m*y,u=u*g+b*y,g===1-o){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vl=new M,Vd=new pt,On=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Ga.subVectors(this.max,Dr),Ns.subVectors(e.a,Dr),Us.subVectors(e.b,Dr),Fs.subVectors(e.c,Dr),zi.subVectors(Us,Ns),Bi.subVectors(Fs,Us),hs.subVectors(Ns,Fs);let t=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-hs.z,hs.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,hs.z,0,-hs.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-hs.y,hs.x,0];return!xl(t,Ns,Us,Fs,Ga)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Ns,Us,Fs,Ga))?!1:(Wa.crossVectors(zi,Bi),t=[Wa.x,Wa.y,Wa.z],xl(t,Ns,Us,Fs,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new M,new M,new M,new M,new M,new M,new M,new M],Kn=new M,Va=new On,Ns=new M,Us=new M,Fs=new M,zi=new M,Bi=new M,hs=new M,Dr=new M,Ga=new M,Wa=new M,us=new M;function xl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){us.fromArray(s,r);let o=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),h=n.dot(us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Eg=new On,Nr=new M,yl=new M,Tn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Eg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);let t=Nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Nr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(yl)),this.expandByPoint(Nr.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new M,_l=new M,Xa=new M,Hi=new M,Ml=new M,$a=new M,wl=new M,Ms=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_l.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(_l);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xa),o=Hi.dot(this.direction),c=-Hi.dot(Xa),l=Hi.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_l).addScaledVector(Xa,d),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){Ml.subVectors(t,e),$a.subVectors(n,e),wl.crossVectors(Ml,$a);let a=this.direction.dot(wl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);let c=o*this.direction.dot($a.crossVectors(Hi,$a));if(c<0)return null;let l=o*this.direction.dot(Ml.cross(Hi));if(l<0||c+l>a)return null;let h=-o*Hi.dot(wl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,g)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,Ag)}lookAt(e,t,n){let i=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Vi.crossVectors(n,wn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Vi.crossVectors(n,wn)),Vi.normalize(),qa.crossVectors(wn,Vi),i[0]=Vi.x,i[4]=qa.x,i[8]=wn.x,i[1]=Vi.y,i[5]=qa.y,i[9]=wn.y,i[2]=Vi.z,i[6]=qa.z,i[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],v=n[7],y=n[11],S=n[15],A=i[0],C=i[4],I=i[8],_=i[12],E=i[1],D=i[5],G=i[9],K=i[13],P=i[2],N=i[6],H=i[10],q=i[14],$=i[3],X=i[7],j=i[11],J=i[15];return r[0]=a*A+o*E+c*P+l*$,r[4]=a*C+o*D+c*N+l*X,r[8]=a*I+o*G+c*H+l*j,r[12]=a*_+o*K+c*q+l*J,r[1]=h*A+u*E+d*P+f*$,r[5]=h*C+u*D+d*N+f*X,r[9]=h*I+u*G+d*H+f*j,r[13]=h*_+u*K+d*q+f*J,r[2]=m*A+b*E+g*P+p*$,r[6]=m*C+b*D+g*N+p*X,r[10]=m*I+b*G+g*H+p*j,r[14]=m*_+b*K+g*q+p*J,r[3]=x*A+v*E+y*P+S*$,r[7]=x*C+v*D+y*N+S*X,r[11]=x*I+v*G+y*H+S*j,r[15]=x*_+v*K+y*q+S*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15];return m*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],x=u*g*l-b*d*l+b*c*f-o*g*f-u*c*p+o*d*p,v=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,y=h*b*l-m*u*l+m*o*f-a*b*f-h*o*p+a*u*p,S=m*u*c-h*b*c-m*o*d+a*b*d+h*o*g-a*u*g,A=t*x+n*v+i*y+r*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=x*C,e[1]=(b*d*r-u*g*r-b*i*f+n*g*f+u*i*p-n*d*p)*C,e[2]=(o*g*r-b*c*r+b*i*l-n*g*l-o*i*p+n*c*p)*C,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*C,e[4]=v*C,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*C,e[6]=(m*c*r-a*g*r-m*i*l+t*g*l+a*i*p-t*c*p)*C,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*C,e[8]=y*C,e[9]=(m*u*r-h*b*r-m*n*f+t*b*f+h*n*p-t*u*p)*C,e[10]=(a*b*r-m*o*r+m*n*l-t*b*l-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*C,e[12]=S*C,e[13]=(h*b*i-m*u*i+m*n*d-t*b*d-h*n*g+t*u*g)*C,e[14]=(m*o*i-a*b*i-m*n*c+t*b*c+a*n*g-t*o*g)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,b=a*h,g=a*u,p=o*u,x=c*l,v=c*h,y=c*u,S=n.x,A=n.y,C=n.z;return i[0]=(1-(b+p))*S,i[1]=(f+y)*S,i[2]=(m-v)*S,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+p))*A,i[6]=(g+x)*A,i[7]=0,i[8]=(m+v)*C,i[9]=(g-x)*C,i[10]=(1-(d+b))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Os.set(i[0],i[1],i[2]).length(),a=Os.set(i[4],i[5],i[6]).length(),o=Os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Jn.copy(this);let l=1/r,h=1/a,u=1/o;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Pi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,m;if(o===Pi)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===_o)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Pi){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*h,m,b;if(o===Pi)m=(a+r)*u,b=-2*u;else if(o===_o)m=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Os=new M,Jn=new me,Tg=new M(0,0,0),Ag=new M(1,1,1),Vi=new M,qa=new M,wn=new M,Gd=new me,Wd=new pt,ji=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ji.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rg=0,Xd=new M,zs=new pt,Ei=new me,ja=new M,Ur=new M,Cg=new M,Lg=new pt,$d=new M(1,0,0),qd=new M(0,1,0),jd=new M(0,0,1),Pg={type:"added"},kg={type:"removed"},yt=class s extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new M,t=new ji,n=new pt,i=new M(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new qe}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ja.copy(e):ja.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ur,ja,this.up):Ei.lookAt(ja,Ur,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(Ei),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,Cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yt.DEFAULT_UP=new M(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new M,Ti=new M,Sl=new M,Ai=new M,Bs=new M,Hs=new M,Yd=new M,El=new M,Tl=new M,Al=new M,Ya=!1,Ks=class s{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zn.subVectors(e,t),i.cross(Zn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Zn.subVectors(i,t),Ti.subVectors(n,t),Sl.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Ti),c=Zn.dot(Sl),l=Ti.dot(Ti),h=Ti.dot(Sl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,i,r,a,o,c){return Ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ya=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(a,Ai.y),c.addScaledVector(o,Ai.z),c)}static isFrontFacing(e,t,n,i){return Zn.subVectors(n,t),Ti.subVectors(e,t),Zn.cross(Ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Zn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ya=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Bs.subVectors(i,n),Hs.subVectors(r,n),El.subVectors(e,n);let c=Bs.dot(El),l=Hs.dot(El);if(c<=0&&l<=0)return t.copy(n);Tl.subVectors(e,i);let h=Bs.dot(Tl),u=Hs.dot(Tl);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Bs,a);Al.subVectors(e,r);let f=Bs.dot(Al),m=Hs.dot(Al);if(m>=0&&f<=m)return t.copy(r);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Hs,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Yd.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Yd,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Bs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Rl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Rh(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Rl(a,r,e+1/3),this.g=Rl(a,r,e),this.b=Rl(a,r,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=gl(e.r),this.g=gl(e.g),this.b=gl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return et.fromWorkingColorSpace(sn.copy(this),e),Math.round(rn(sn.r*255,0,255))*65536+Math.round(rn(sn.g*255,0,255))*256+Math.round(rn(sn.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(sn.copy(this),t);let n=sn.r,i=sn.g,r=sn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=tt){et.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,i=sn.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Ka);let n=Gr(Gi.h,Ka.h,t),i=Gr(Gi.s,Ka.s,t),r=Gr(Gi.l,Ka.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new ye;ye.NAMES=ip;var Ig=0,An=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Qs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vl&&(n.blendSrc=this.blendSrc),this.blendDst!==Gl&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ud&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Wt=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new M,Ja=new pe,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$l,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),e}};var To=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ao=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Dg=0,Un=new me,Cl=new yt,Vs=new M,Sn=new On,Fr=new On,Ht=new M,mt=class s extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(np(e)?Ao:To)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Sn.min,Fr.min),Sn.expandByPoint(Ht),Ht.addVectors(Sn.max,Fr.max),Sn.expandByPoint(Ht)):(Sn.expandByPoint(Fr.min),Sn.expandByPoint(Fr.max))}Sn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ht.fromBufferAttribute(o,l),c&&(Vs.fromBufferAttribute(e,l),Ht.add(Vs)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new M,h[E]=new M;let u=new M,d=new M,f=new M,m=new pe,b=new pe,g=new pe,p=new M,x=new M;function v(E,D,G){u.fromArray(i,E*3),d.fromArray(i,D*3),f.fromArray(i,G*3),m.fromArray(a,E*2),b.fromArray(a,D*2),g.fromArray(a,G*2),d.sub(u),f.sub(u),b.sub(m),g.sub(m);let K=1/(b.x*g.y-g.x*b.y);isFinite(K)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-b.y).multiplyScalar(K),x.copy(f).multiplyScalar(b.x).addScaledVector(d,-g.x).multiplyScalar(K),l[E].add(p),l[D].add(p),l[G].add(p),h[E].add(x),h[D].add(x),h[G].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let E=0,D=y.length;E<D;++E){let G=y[E],K=G.start,P=G.count;for(let N=K,H=K+P;N<H;N+=3)v(n[N+0],n[N+1],n[N+2])}let S=new M,A=new M,C=new M,I=new M;function _(E){C.fromArray(r,E*3),I.copy(C);let D=l[E];S.copy(D),S.sub(C.multiplyScalar(C.dot(D))).normalize(),A.crossVectors(I,D);let K=A.dot(h[E])<0?-1:1;c[E*4]=S.x,c[E*4+1]=S.y,c[E*4+2]=S.z,c[E*4+3]=K}for(let E=0,D=y.length;E<D;++E){let G=y[E],K=G.start,P=G.count;for(let N=K,H=K+P;N<H;N+=3)_(n[N+0]),_(n[N+1]),_(n[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new M,r=new M,a=new M,o=new M,c=new M,l=new M,h=new M,u=new M;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kd=new me,ds=new Ms,Za=new Tn,Jd=new M,Gs=new M,Ws=new M,Xs=new M,Ll=new M,Qa=new M,eo=new pe,to=new pe,no=new pe,Zd=new M,Qd=new M,ef=new M,io=new M,so=new M,Be=class extends yt{constructor(e=new mt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Ll.fromBufferAttribute(u,e),a?Qa.addScaledVector(Ll,h):Qa.addScaledVector(Ll.sub(t),h))}t.add(Qa)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(Za.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Za,Jd)===null||ds.origin.distanceToSquared(Jd)>(e.far-e.near)**2))&&(Kd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Kd),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,S=v;y<S;y+=3){let A=o.getX(y),C=o.getX(y+1),I=o.getX(y+2);i=ro(this,p,e,n,l,h,u,A,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);i=ro(this,a,e,n,l,h,u,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,S=v;y<S;y+=3){let A=y,C=y+1,I=y+2;i=ro(this,p,e,n,l,h,u,A,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=g,v=g+1,y=g+2;i=ro(this,a,e,n,l,h,u,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Ng(s,e,t,n,i,r,a,o){let c;if(e.side===on?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===di,o),c===null)return null;so.copy(o),so.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(so);return l<t.near||l>t.far?null:{distance:l,point:so.clone(),object:s}}function ro(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Gs),s.getVertexPosition(c,Ws),s.getVertexPosition(l,Xs);let h=Ng(s,e,t,n,Gs,Ws,Xs,io);if(h){i&&(eo.fromBufferAttribute(i,o),to.fromBufferAttribute(i,c),no.fromBufferAttribute(i,l),h.uv=Ks.getInterpolation(io,Gs,Ws,Xs,eo,to,no,new pe)),r&&(eo.fromBufferAttribute(r,o),to.fromBufferAttribute(r,c),no.fromBufferAttribute(r,l),h.uv1=Ks.getInterpolation(io,Gs,Ws,Xs,eo,to,no,new pe),h.uv2=h.uv1),a&&(Zd.fromBufferAttribute(a,o),Qd.fromBufferAttribute(a,c),ef.fromBufferAttribute(a,l),h.normal=Ks.getInterpolation(io,Gs,Ws,Xs,Zd,Qd,ef,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new M,materialIndex:0};Ks.getNormal(Gs,Ws,Xs,u.normal),h.face=u}return h}var ni=class s extends mt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function m(b,g,p,x,v,y,S,A,C,I,_){let E=y/C,D=S/I,G=y/2,K=S/2,P=A/2,N=C+1,H=I+1,q=0,$=0,X=new M;for(let j=0;j<H;j++){let J=j*D-K;for(let ce=0;ce<N;ce++){let W=ce*E-G;X[b]=W*x,X[g]=J*v,X[p]=P,l.push(X.x,X.y,X.z),X[b]=0,X[g]=0,X[p]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(ce/C),u.push(1-j/I),q+=1}}for(let j=0;j<I;j++)for(let J=0;J<C;J++){let ce=d+J+N*j,W=d+J+N*(j+1),Y=d+(J+1)+N*(j+1),oe=d+(J+1)+N*j;c.push(ce,W,oe),c.push(W,Y,oe),$+=6}o.addGroup(f,$,_),f+=$,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(s){let e={};for(let t=0;t<s.length;t++){let n=cr(s[t]);for(let i in n)e[i]=n[i]}return e}function Ug(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sp(s){return s.getRenderTarget()===null?s.outputColorSpace:et.workingColorSpace}var Fg={clone:cr,merge:bn},Og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gt=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Og,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Ug(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ro=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},It=class extends Ro{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$s=-90,qs=1,Jl=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new It($s,qs,e,t);i.layers=this.layers,this.add(i);let r=new It($s,qs,e,t);r.layers=this.layers,this.add(r);let a=new It($s,qs,e,t);a.layers=this.layers,this.add(a);let o=new It($s,qs,e,t);o.layers=this.layers,this.add(o);let c=new It($s,qs,e,t);c.layers=this.layers,this.add(c);let l=new It($s,qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Co=class extends Kt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zl=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Wr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===xs?tt:Vt),this.texture=new Co(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ni(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Xi});r.uniforms.tEquirect.value=t;let a=new Be(i,r),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=xt),new Jl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Pl=new M,Bg=new M,Hg=new qe,Qn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Pl.subVectors(n,t).cross(Bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Pl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hg.getNormalMatrix(e),i=this.coplanarPoint(Pl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new Tn,ao=new M,Yr=class{constructor(e=new Qn,t=new Qn,n=new Qn,i=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pi){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],b=i[10],g=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-r,d-l,g-f,y-p).normalize(),n[1].setComponents(c+r,d+l,g+f,y+p).normalize(),n[2].setComponents(c+a,d+h,g+m,y+x).normalize(),n[3].setComponents(c-a,d-h,g-m,y-x).normalize(),n[4].setComponents(c-o,d-u,g-b,y-v).normalize(),t===Pi)n[5].setComponents(c+o,d+u,g+b,y+v).normalize();else if(t===_o)n[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ao.x=i.normal.x>0?e.max.x:e.min.x,ao.y=i.normal.y>0?e.max.y:e.min.y,ao.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vg(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,d=l.usage,f=u.byteLength,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,d),l.onUploadCallback();let b;if(u instanceof Float32Array)b=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=s.SHORT;else if(u instanceof Uint32Array)b=s.UNSIGNED_INT;else if(u instanceof Int32Array)b=s.INT;else if(u instanceof Int8Array)b=s.BYTE;else if(u instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,m=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&m.length===0&&s.bufferSubData(u,0,d),m.length!==0){for(let b=0,g=m.length;b<g;b++){let p=m[b];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Rn=class s extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*d-a;for(let v=0;v<l;v++){let y=v*u-r;m.push(y,-x,0),b.push(0,0,1),g.push(v/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let v=x+l*p,y=x+l*(p+1),S=x+1+l*(p+1),A=x+1+l*p;f.push(v,y,A),f.push(y,S,A)}this.setIndex(f),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
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
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yg=`#ifdef USE_AOMAP
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
#endif`,Kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nb=`#ifdef USE_IRIDESCENCE
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
#endif`,ib=`#ifdef USE_BUMPMAP
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
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,db=`#define PI 3.141592653589793
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
} // validated`,fb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pb=`vec3 transformedNormal = objectNormal;
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
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",yb=`
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
}`,_b=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lb=`#ifdef USE_GRADIENTMAP
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
}`,Pb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ib=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nb=`uniform bool receiveShadow;
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
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Fb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hb=`PhysicalMaterial material;
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
#endif`,Vb=`struct PhysicalMaterial {
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
}`,Gb=`
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
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$b=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qb=`#if defined( USE_POINTS_UV )
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
#endif`,ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iv=`#ifdef USE_MORPHNORMALS
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
#endif`,sv=`#ifdef USE_MORPHTARGETS
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
#endif`,rv=`#ifdef USE_MORPHTARGETS
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
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uv=`#ifdef USE_NORMALMAP
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
#endif`,dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Av=`float getShadowMask() {
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
}`,Rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
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
#endif`,Lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pv=`#ifdef USE_SKINNING
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
#endif`,kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uv=`#ifdef USE_TRANSMISSION
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
#endif`,Fv=`#ifdef USE_TRANSMISSION
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
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gv=`uniform sampler2D t2D;
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`#include <common>
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
}`,Yv=`#if DEPTH_PACKING == 3200
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
}`,Kv=`#define DISTANCE
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
}`,Jv=`#define DISTANCE
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#define LAMBERT
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
}`,rx=`#define LAMBERT
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
}`,ax=`#define MATCAP
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
}`,ox=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,lx=`#define NORMAL
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
}`,hx=`#define PHONG
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
}`,ux=`#define PHONG
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
}`,dx=`#define STANDARD
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
}`,fx=`#define STANDARD
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
}`,px=`#define TOON
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
}`,mx=`#define TOON
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
}`,gx=`uniform float size;
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
}`,bx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,xx=`uniform vec3 color;
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
}`,yx=`uniform float rotation;
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
}`,_x=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Gg,alphahash_pars_fragment:Wg,alphamap_fragment:Xg,alphamap_pars_fragment:$g,alphatest_fragment:qg,alphatest_pars_fragment:jg,aomap_fragment:Yg,aomap_pars_fragment:Kg,batching_pars_vertex:Jg,batching_vertex:Zg,begin_vertex:Qg,beginnormal_vertex:eb,bsdfs:tb,iridescence_fragment:nb,bumpmap_pars_fragment:ib,clipping_planes_fragment:sb,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:ab,clipping_planes_vertex:ob,color_fragment:cb,color_pars_fragment:lb,color_pars_vertex:hb,color_vertex:ub,common:db,cube_uv_reflection_fragment:fb,defaultnormal_vertex:pb,displacementmap_pars_vertex:mb,displacementmap_vertex:gb,emissivemap_fragment:bb,emissivemap_pars_fragment:vb,colorspace_fragment:xb,colorspace_pars_fragment:yb,envmap_fragment:_b,envmap_common_pars_fragment:Mb,envmap_pars_fragment:wb,envmap_pars_vertex:Sb,envmap_physical_pars_fragment:Ub,envmap_vertex:Eb,fog_vertex:Tb,fog_pars_vertex:Ab,fog_fragment:Rb,fog_pars_fragment:Cb,gradientmap_pars_fragment:Lb,lightmap_fragment:Pb,lightmap_pars_fragment:kb,lights_lambert_fragment:Ib,lights_lambert_pars_fragment:Db,lights_pars_begin:Nb,lights_toon_fragment:Fb,lights_toon_pars_fragment:Ob,lights_phong_fragment:zb,lights_phong_pars_fragment:Bb,lights_physical_fragment:Hb,lights_physical_pars_fragment:Vb,lights_fragment_begin:Gb,lights_fragment_maps:Wb,lights_fragment_end:Xb,logdepthbuf_fragment:$b,logdepthbuf_pars_fragment:qb,logdepthbuf_pars_vertex:jb,logdepthbuf_vertex:Yb,map_fragment:Kb,map_pars_fragment:Jb,map_particle_fragment:Zb,map_particle_pars_fragment:Qb,metalnessmap_fragment:ev,metalnessmap_pars_fragment:tv,morphcolor_vertex:nv,morphnormal_vertex:iv,morphtarget_pars_vertex:sv,morphtarget_vertex:rv,normal_fragment_begin:av,normal_fragment_maps:ov,normal_pars_fragment:cv,normal_pars_vertex:lv,normal_vertex:hv,normalmap_pars_fragment:uv,clearcoat_normal_fragment_begin:dv,clearcoat_normal_fragment_maps:fv,clearcoat_pars_fragment:pv,iridescence_pars_fragment:mv,opaque_fragment:gv,packing:bv,premultiplied_alpha_fragment:vv,project_vertex:xv,dithering_fragment:yv,dithering_pars_fragment:_v,roughnessmap_fragment:Mv,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:Sv,shadowmap_pars_vertex:Ev,shadowmap_vertex:Tv,shadowmask_pars_fragment:Av,skinbase_vertex:Rv,skinning_pars_vertex:Cv,skinning_vertex:Lv,skinnormal_vertex:Pv,specularmap_fragment:kv,specularmap_pars_fragment:Iv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Nv,transmission_fragment:Uv,transmission_pars_fragment:Fv,uv_pars_fragment:Ov,uv_pars_vertex:zv,uv_vertex:Bv,worldpos_vertex:Hv,background_vert:Vv,background_frag:Gv,backgroundCube_vert:Wv,backgroundCube_frag:Xv,cube_vert:$v,cube_frag:qv,depth_vert:jv,depth_frag:Yv,distanceRGBA_vert:Kv,distanceRGBA_frag:Jv,equirect_vert:Zv,equirect_frag:Qv,linedashed_vert:ex,linedashed_frag:tx,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:sx,meshlambert_frag:rx,meshmatcap_vert:ax,meshmatcap_frag:ox,meshnormal_vert:cx,meshnormal_frag:lx,meshphong_vert:hx,meshphong_frag:ux,meshphysical_vert:dx,meshphysical_frag:fx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:gx,points_frag:bx,shadow_vert:vx,shadow_frag:xx,sprite_vert:yx,sprite_frag:_x},ie={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},li={basic:{uniforms:bn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:bn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:bn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:bn([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:bn([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:bn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:bn([ie.points,ie.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:bn([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:bn([ie.common,ie.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:bn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:bn([ie.sprite,ie.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:bn([ie.common,ie.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:bn([ie.lights,ie.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};li.physical={uniforms:bn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var oo={r:0,b:0,g:0};function Mx(s,e,t,n,i,r,a){let o=new ye(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(g,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?b(o,c):v&&v.isColor&&(b(v,1),x=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Xo)?(h===void 0&&(h=new Be(new ni(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:cr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=et.getTransfer(v.colorSpace)!==ft,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Be(new Rn(2,2),new gt({name:"BackgroundMaterial",uniforms:cr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=et.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function b(g,p){g.getRGB(oo,sp(s)),n.buffers.color.setClear(oo.r,oo.g,oo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,b(o,c)},render:m}}function wx(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null),l=c,h=!1;function u(P,N,H,q,$){let X=!1;if(a){let j=b(q,H,N);l!==j&&(l=j,f(l.object)),X=p(P,q,H,$),X&&x(P,q,H,$)}else{let j=N.wireframe===!0;(l.geometry!==q.id||l.program!==H.id||l.wireframe!==j)&&(l.geometry=q.id,l.program=H.id,l.wireframe=j,X=!0)}$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,I(P,N,H,q),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function m(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function b(P,N,H){let q=H.wireframe===!0,$=o[P.id];$===void 0&&($={},o[P.id]=$);let X=$[N.id];X===void 0&&(X={},$[N.id]=X);let j=X[q];return j===void 0&&(j=g(d()),X[q]=j),j}function g(P){let N=[],H=[],q=[];for(let $=0;$<i;$++)N[$]=0,H[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,N,H,q){let $=l.attributes,X=N.attributes,j=0,J=H.getAttributes();for(let ce in J)if(J[ce].location>=0){let Y=$[ce],oe=X[ce];if(oe===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;j++}return l.attributesNum!==j||l.index!==q}function x(P,N,H,q){let $={},X=N.attributes,j=0,J=H.getAttributes();for(let ce in J)if(J[ce].location>=0){let Y=X[ce];Y===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));let oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),$[ce]=oe,j++}l.attributes=$,l.attributesNum=j,l.index=q}function v(){let P=l.newAttributes;for(let N=0,H=P.length;N<H;N++)P[N]=0}function y(P){S(P,0)}function S(P,N){let H=l.newAttributes,q=l.enabledAttributes,$=l.attributeDivisors;H[P]=1,q[P]===0&&(s.enableVertexAttribArray(P),q[P]=1),$[P]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),$[P]=N)}function A(){let P=l.newAttributes,N=l.enabledAttributes;for(let H=0,q=N.length;H<q;H++)N[H]!==P[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function C(P,N,H,q,$,X,j){j===!0?s.vertexAttribIPointer(P,N,H,$,X):s.vertexAttribPointer(P,N,H,q,$,X)}function I(P,N,H,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let $=q.attributes,X=H.getAttributes(),j=N.defaultAttributeValues;for(let J in X){let ce=X[J];if(ce.location>=0){let W=$[J];if(W===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let Y=W.normalized,oe=W.itemSize,be=t.get(W);if(be===void 0)continue;let fe=be.buffer,ke=be.type,Ie=be.bytesPerElement,Ee=n.isWebGL2===!0&&(ke===s.INT||ke===s.UNSIGNED_INT||W.gpuType===$f);if(W.isInterleavedBufferAttribute){let Qe=W.data,U=Qe.stride,fn=W.offset;if(Qe.isInstancedInterleavedBuffer){for(let Te=0;Te<ce.locationSize;Te++)S(ce.location+Te,Qe.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Te=0;Te<ce.locationSize;Te++)y(ce.location+Te);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let Te=0;Te<ce.locationSize;Te++)C(ce.location+Te,oe/ce.locationSize,ke,Y,U*Ie,(fn+oe/ce.locationSize*Te)*Ie,Ee)}else{if(W.isInstancedBufferAttribute){for(let Qe=0;Qe<ce.locationSize;Qe++)S(ce.location+Qe,W.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Qe=0;Qe<ce.locationSize;Qe++)y(ce.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let Qe=0;Qe<ce.locationSize;Qe++)C(ce.location+Qe,oe/ce.locationSize,ke,Y,oe*Ie,oe/ce.locationSize*Qe*Ie,Ee)}}else if(j!==void 0){let Y=j[J];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(ce.location,Y);break;case 3:s.vertexAttrib3fv(ce.location,Y);break;case 4:s.vertexAttrib4fv(ce.location,Y);break;default:s.vertexAttrib1fv(ce.location,Y)}}}}A()}function _(){G();for(let P in o){let N=o[P];for(let H in N){let q=N[H];for(let $ in q)m(q[$].object),delete q[$];delete N[H]}delete o[P]}}function E(P){if(o[P.id]===void 0)return;let N=o[P.id];for(let H in N){let q=N[H];for(let $ in q)m(q[$].object),delete q[$];delete N[H]}delete o[P.id]}function D(P){for(let N in o){let H=o[N];if(H[P.id]===void 0)continue;let q=H[P.id];for(let $ in q)m(q[$].object),delete q[$];delete H[P.id]}}function G(){K(),h=!0,l!==c&&(l=c,f(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:G,resetDefaultState:K,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function Sx(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(h[m],u[m]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let m=0;for(let b=0;b<d;b++)m+=u[b];t.update(m,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Ex(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=a||e.has("OES_texture_float"),S=v&&y,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:b,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:A}}function Tx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Qn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,v=x*4,y=p.clippingState||null;c.value=y,y=h(m,d,v,f);for(let S=0;S!==v;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=f;v!==b;++v,y+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function Ax(s){let e=new WeakMap;function t(a,o){return o===Wl?a.mapping=ir:o===Xl&&(a.mapping=sr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wl||o===Xl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Zl(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Cn=class extends Ro{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Js=4,tf=[.125,.215,.35,.446,.526,.582],gs=20,kl=new Cn,nf=new ye,Il=null,Dl=0,Nl=0,ps=(1+Math.sqrt(5))/2,js=1/ps,sf=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,ps,js),new M(0,ps,-js),new M(js,0,ps),new M(-js,0,ps),new M(ps,js,0),new M(-ps,js,0)],lr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Il=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Dl,Nl),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:ti,format:an,colorSpace:Nt,depthBuffer:!1},i=rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rx(r)),this._blurMaterial=Cx(r,e,t)}return i}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,kl)}_sceneToCubeUV(e,t,n,i){let o=new It(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nf),h.toneMapping=ui,h.autoClear=!1;let f=new Wt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new Be(new ni,f),b=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,b=!0):(f.color.copy(nf),b=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let v=this._cubeSize;co(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ir||e.mapping===sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;co(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,kl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=sf[(i-1)%sf.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Be(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gs-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):gs;g>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gs}`);let p=[],x=0;for(let C=0;C<gs;++C){let I=C/b,_=Math.exp(-I*I/2);p.push(_),C===0?x+=_:C<g&&(x+=2*_)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let y=this._sizeLods[i],S=3*y*(i>v-Js?i-v+Js:0),A=4*(this._cubeSize-y);co(t,S,A,3*y,2*y),c.setRenderTarget(t),c.render(u,kl)}};function Rx(s){let e=[],t=[],n=[],i=s,r=s-Js+1+tf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Js?c=tf[a-s+Js-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,b=3,g=2,p=1,x=new Float32Array(b*m*f),v=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,I=A>2?0:-1,_=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];x.set(_,b*m*A),v.set(d,g*m*A);let E=[A,A,A,A,A,A];y.set(E,p*m*A)}let S=new mt;S.setAttribute("position",new Dt(x,b)),S.setAttribute("uv",new Dt(v,g)),S.setAttribute("faceIndex",new Dt(y,p)),e.push(S),i>Js&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rf(s,e,t){let n=new Gt(s,e,t);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Cx(s,e,t){let n=new Float32Array(gs),i=new M(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function af(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function of(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}function Lx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Wl||c===Xl,h=c===ir||c===sr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new lr(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new lr(s));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Px(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kx(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let b=d.morphAttributes[m];for(let g=0,p=b.length;g<p;g++)e.remove(b[g])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let b=f[m];for(let g=0,p=b.length;g<p;g++)e.update(b[g],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(f!==null){let x=f.array;b=f.version;for(let v=0,y=x.length;v<y;v+=3){let S=x[v+0],A=x[v+1],C=x[v+2];d.push(S,A,A,C,C,S)}}else if(m!==void 0){let x=m.array;b=m.version;for(let v=0,y=x.length/3-1;v<y;v+=3){let S=v+0,A=v+1,C=v+2;d.push(S,A,A,C,C,S)}}else return;let g=new(np(d)?Ao:To)(d,1);g.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Ix(s,e,t,n){let i=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,m){s.drawElements(r,m,o,f*c),t.update(m,r,1)}function u(f,m,b){if(b===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,o,f*c,b),t.update(m,r,b)}function d(f,m,b){if(b===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<b;p++)this.render(f[p]/c,m[p]);else{g.multiDrawElementsWEBGL(r,m,0,o,f,0,b);let p=0;for(let x=0;x<b;x++)p+=m[x];t.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Dx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Nx(s,e){return s[0]-e[0]}function Ux(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Fx(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new We,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0,b=r.get(h);if(b===void 0||b.count!==m){let P=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",P)};b!==void 0&&b.texture.dispose();let x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],I=0;x===!0&&(I=1),v===!0&&(I=2),y===!0&&(I=3);let _=h.attributes.position.count*I,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let D=new Float32Array(_*E*4*m),G=new Eo(D,_,E,m);G.type=Li,G.needsUpdate=!0;let K=I*4;for(let N=0;N<m;N++){let H=S[N],q=A[N],$=C[N],X=_*E*4*N;for(let j=0;j<H.count;j++){let J=j*K;x===!0&&(a.fromBufferAttribute(H,j),D[X+J+0]=a.x,D[X+J+1]=a.y,D[X+J+2]=a.z,D[X+J+3]=0),v===!0&&(a.fromBufferAttribute(q,j),D[X+J+4]=a.x,D[X+J+5]=a.y,D[X+J+6]=a.z,D[X+J+7]=0),y===!0&&(a.fromBufferAttribute($,j),D[X+J+8]=a.x,D[X+J+9]=a.y,D[X+J+10]=a.z,D[X+J+11]=$.itemSize===4?a.w:1)}}b={count:m,texture:G,size:new pe(_,E)},r.set(h,b),h.addEventListener("dispose",P)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];let p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];n[h.id]=m}for(let v=0;v<f;v++){let y=m[v];y[0]=v,y[1]=d[v]}m.sort(Ux);for(let v=0;v<8;v++)v<f&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Nx);let b=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let y=o[v],S=y[0],A=y[1];S!==Number.MAX_SAFE_INTEGER&&A?(b&&h.getAttribute("morphTarget"+v)!==b[S]&&h.setAttribute("morphTarget"+v,b[S]),g&&h.getAttribute("morphNormal"+v)!==g[S]&&h.setAttribute("morphNormal"+v,g[S]),i[v]=A,p+=A):(b&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Ox(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Yi=class extends Kt{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:vs,h!==vs&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Fn),n===void 0&&h===rr&&(n=bs),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ap=new Kt,op=new Yi(1,1);op.compareFunction=jo;var cp=new Eo,lp=new Kl,hp=new Co,cf=[],lf=[],hf=new Float32Array(16),uf=new Float32Array(9),df=new Float32Array(4);function mr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=cf[i];if(r===void 0&&(r=new Float32Array(i),cf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Yo(s,e){let t=lf[e];t===void 0&&(t=new Int32Array(e),lf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function zx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function Hx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function Vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function Gx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;df.set(n),s.uniformMatrix2fv(this.addr,!1,df),Ft(t,n)}}function Wx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;uf.set(n),s.uniformMatrix3fv(this.addr,!1,uf),Ft(t,n)}}function Xx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;hf.set(n),s.uniformMatrix4fv(this.addr,!1,hf),Ft(t,n)}}function $x(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Ft(t,e)}}function jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Ft(t,e)}}function Yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Ft(t,e)}}function Kx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Ft(t,e)}}function Zx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Ft(t,e)}}function Qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Ft(t,e)}}function ey(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?op:ap;t.setTexture2D(e||r,i)}function ty(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lp,i)}function ny(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hp,i)}function iy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cp,i)}function sy(s){switch(s){case 5126:return zx;case 35664:return Bx;case 35665:return Hx;case 35666:return Vx;case 35674:return Gx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return $x;case 35667:case 35671:return qx;case 35668:case 35672:return jx;case 35669:case 35673:return Yx;case 5125:return Kx;case 36294:return Jx;case 36295:return Zx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}function ry(s,e){s.uniform1fv(this.addr,e)}function ay(s,e){let t=mr(e,this.size,2);s.uniform2fv(this.addr,t)}function oy(s,e){let t=mr(e,this.size,3);s.uniform3fv(this.addr,t)}function cy(s,e){let t=mr(e,this.size,4);s.uniform4fv(this.addr,t)}function ly(s,e){let t=mr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hy(s,e){let t=mr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function uy(s,e){let t=mr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dy(s,e){s.uniform1iv(this.addr,e)}function fy(s,e){s.uniform2iv(this.addr,e)}function py(s,e){s.uniform3iv(this.addr,e)}function my(s,e){s.uniform4iv(this.addr,e)}function gy(s,e){s.uniform1uiv(this.addr,e)}function by(s,e){s.uniform2uiv(this.addr,e)}function vy(s,e){s.uniform3uiv(this.addr,e)}function xy(s,e){s.uniform4uiv(this.addr,e)}function yy(s,e,t){let n=this.cache,i=e.length,r=Yo(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ap,r[a])}function _y(s,e,t){let n=this.cache,i=e.length,r=Yo(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||lp,r[a])}function My(s,e,t){let n=this.cache,i=e.length,r=Yo(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||hp,r[a])}function wy(s,e,t){let n=this.cache,i=e.length,r=Yo(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||cp,r[a])}function Sy(s){switch(s){case 5126:return ry;case 35664:return ay;case 35665:return oy;case 35666:return cy;case 35674:return ly;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return fy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return by;case 36295:return vy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return wy}}var Ql=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sy(t.type)}},eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sy(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ul=/(\w+)(\])?(\[|\.)?/g;function ff(s,e){s.seq.push(e),s.map[e.id]=e}function Ey(s,e,t){let n=s.name,i=n.length;for(Ul.lastIndex=0;;){let r=Ul.exec(n),a=Ul.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ff(t,l===void 0?new Ql(o,s,e):new eh(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new th(o),ff(t,u)),t=u}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Ey(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function pf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Ty=37297,Ay=0;function Ry(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Cy(s){let e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(s),n;switch(e===t?n="":e===yo&&t===xo?n="LinearDisplayP3ToLinearSRGB":e===xo&&t===yo&&(n="LinearSRGBToLinearDisplayP3"),s){case Nt:case qo:return[n,"LinearTransferOETF"];case tt:case Th:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function mf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ry(s.getShaderSource(e),a)}else return i}function Ly(s,e){let t=Cy(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Py(s,e){let t;switch(e){case N0:t="Linear";break;case U0:t="Reinhard";break;case F0:t="OptimizedCineon";break;case O0:t="ACESFilmic";break;case B0:t="AgX";break;case z0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ky(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zs).join(`
`)}function Iy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zs).join(`
`)}function Dy(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ny(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Zs(s){return s!==""}function gf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(s){return s.replace(Uy,Oy)}var Fy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Oy(s,e){let t=ze[e];if(t===void 0){let n=Fy.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}var zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(s){return s.replace(zy,By)}function By(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Vy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ir:case sr:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Wy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wf:e="ENVMAP_BLENDING_MULTIPLY";break;case I0:e="ENVMAP_BLENDING_MIX";break;case D0:e="ENVMAP_BLENDING_ADD";break}return e}function Xy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $y(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Hy(t),l=Vy(t),h=Gy(t),u=Wy(t),d=Xy(t),f=t.isWebGL2?"":ky(t),m=Iy(t),b=Dy(r),g=i.createProgram(),p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Zs).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Zs).join(`
`),x.length>0&&(x+=`
`)):(p=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),x=[f,xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?ze.tonemapping_pars_fragment:"",t.toneMapping!==ui?Py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=nh(a),a=gf(a,t),a=bf(a,t),o=nh(o),o=gf(o,t),o=bf(o,t),a=vf(a),o=vf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=v+p+a,S=v+x+o,A=pf(i,i.VERTEX_SHADER,y),C=pf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,A),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function I(G){if(s.debug.checkShaderErrors){let K=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(C).trim(),H=!0,q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,C);else{let $=mf(i,A,"vertex"),X=mf(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+$+`
`+X)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||N==="")&&(q=!1);q&&(G.diagnostics={runnable:H,programLog:K,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:x}})}i.deleteShader(A),i.deleteShader(C),_=new tr(i,g),E=Ny(i,g)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,Ty)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ay++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}var qy=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sh(e),t.set(e,n)),n}},sh=class{constructor(e){this.id=qy++,this.code=e,this.usedTimes=0}};function jy(s,e,t,n,i,r,a){let o=new jr,c=new ih,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(_){return _===0?"uv":`uv${_}`}function g(_,E,D,G,K){let P=G.fog,N=K.geometry,H=_.isMeshStandardMaterial?G.environment:null,q=(_.isMeshStandardMaterial?t:e).get(_.envMap||H),$=q&&q.mapping===Xo?q.image.height:null,X=m[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=j!==void 0?j.length:0,ce=0;N.morphAttributes.position!==void 0&&(ce=1),N.morphAttributes.normal!==void 0&&(ce=2),N.morphAttributes.color!==void 0&&(ce=3);let W,Y,oe,be;if(X){let pn=li[X];W=pn.vertexShader,Y=pn.fragmentShader}else W=_.vertexShader,Y=_.fragmentShader,c.update(_),oe=c.getVertexShaderID(_),be=c.getFragmentShaderID(_);let fe=s.getRenderTarget(),ke=K.isInstancedMesh===!0,Ie=K.isBatchedMesh===!0,Ee=!!_.map,Qe=!!_.matcap,U=!!q,fn=!!_.aoMap,Te=!!_.lightMap,Ne=!!_.bumpMap,ge=!!_.normalMap,bt=!!_.displacementMap,He=!!_.emissiveMap,R=!!_.metalnessMap,w=!!_.roughnessMap,O=_.anisotropy>0,ee=_.clearcoat>0,Q=_.iridescence>0,te=_.sheen>0,ve=_.transmission>0,ae=O&&!!_.anisotropyMap,ue=ee&&!!_.clearcoatMap,Ce=ee&&!!_.clearcoatNormalMap,Ve=ee&&!!_.clearcoatRoughnessMap,Z=Q&&!!_.iridescenceMap,st=Q&&!!_.iridescenceThicknessMap,je=te&&!!_.sheenColorMap,De=te&&!!_.sheenRoughnessMap,Se=!!_.specularMap,de=!!_.specularColorMap,Oe=!!_.specularIntensityMap,nt=ve&&!!_.transmissionMap,_t=ve&&!!_.thicknessMap,Xe=!!_.gradientMap,ne=!!_.alphaMap,L=_.alphaTest>0,se=!!_.alphaHash,re=!!_.extensions,Le=!!N.attributes.uv1,Ae=!!N.attributes.uv2,ct=!!N.attributes.uv3,lt=ui;return _.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(lt=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:Y,defines:_.defines,customVertexShaderID:oe,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ie,instancing:ke,instancingColor:ke&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Nt,map:Ee,matcap:Qe,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:$,aoMap:fn,lightMap:Te,bumpMap:Ne,normalMap:ge,displacementMap:d&&bt,emissiveMap:He,normalMapObjectSpace:ge&&_.normalMapType===Q0,normalMapTangentSpace:ge&&_.normalMapType===tp,metalnessMap:R,roughnessMap:w,anisotropy:O,anisotropyMap:ae,clearcoat:ee,clearcoatMap:ue,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ve,iridescence:Q,iridescenceMap:Z,iridescenceThicknessMap:st,sheen:te,sheenColorMap:je,sheenRoughnessMap:De,specularMap:Se,specularColorMap:de,specularIntensityMap:Oe,transmission:ve,transmissionMap:nt,thicknessMap:_t,gradientMap:Xe,opaque:_.transparent===!1&&_.blending===Qs,alphaMap:ne,alphaTest:L,alphaHash:se,combine:_.combine,mapUv:Ee&&b(_.map.channel),aoMapUv:fn&&b(_.aoMap.channel),lightMapUv:Te&&b(_.lightMap.channel),bumpMapUv:Ne&&b(_.bumpMap.channel),normalMapUv:ge&&b(_.normalMap.channel),displacementMapUv:bt&&b(_.displacementMap.channel),emissiveMapUv:He&&b(_.emissiveMap.channel),metalnessMapUv:R&&b(_.metalnessMap.channel),roughnessMapUv:w&&b(_.roughnessMap.channel),anisotropyMapUv:ae&&b(_.anisotropyMap.channel),clearcoatMapUv:ue&&b(_.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&b(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&b(_.iridescenceMap.channel),iridescenceThicknessMapUv:st&&b(_.iridescenceThicknessMap.channel),sheenColorMapUv:je&&b(_.sheenColorMap.channel),sheenRoughnessMapUv:De&&b(_.sheenRoughnessMap.channel),specularMapUv:Se&&b(_.specularMap.channel),specularColorMapUv:de&&b(_.specularColorMap.channel),specularIntensityMapUv:Oe&&b(_.specularIntensityMap.channel),transmissionMapUv:nt&&b(_.transmissionMap.channel),thicknessMapUv:_t&&b(_.thicknessMap.channel),alphaMapUv:ne&&b(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ge||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ae,vertexUv3s:ct,pointsUvs:K.isPoints===!0&&!!N.attributes.uv&&(Ee||ne),fog:!!P,useFog:_.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Yt,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:re&&_.extensions.derivatives===!0,extensionFragDepth:re&&_.extensions.fragDepth===!0,extensionDrawBuffers:re&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)E.push(D),E.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(x(E,_),v(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function x(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function v(_,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function y(_){let E=m[_.type],D;if(E){let G=li[E];D=Fg.clone(G.uniforms)}else D=_.uniforms;return D}function S(_,E){let D;for(let G=0,K=l.length;G<K;G++){let P=l[G];if(P.cacheKey===E){D=P,++D.usedTimes;break}}return D===void 0&&(D=new $y(s,E,_,r),l.push(D)),D}function A(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),_.destroy()}}function C(_){c.remove(_)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:A,releaseShaderCache:C,programs:l,dispose:I}}function Yy(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ky(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _f(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,b,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),e++,p}function o(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Ky),n.length>1&&n.sort(d||yf),i.length>1&&i.sort(d||yf)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Jy(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new _f,s.set(n,[a])):i>=r.length?(a=new _f,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Zy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new ye};break;case"SpotLight":t={position:new M,direction:new M,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new M,halfWidth:new M,halfHeight:new M};break}return s[e.id]=t,t}}}function Qy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var e_=0;function t_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function n_(s,e){let t=new Zy,n=Qy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new M);let r=new M,a=new me,o=new me;function c(h,u){let d=0,f=0,m=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let b=0,g=0,p=0,x=0,v=0,y=0,S=0,A=0,C=0,I=0,_=0;h.sort(t_);let E=u===!0?Math.PI:1;for(let G=0,K=h.length;G<K;G++){let P=h[G],N=P.color,H=P.intensity,q=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*H*E,f+=N.g*H*E,m+=N.b*H*E;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],H);_++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){let j=P.shadow,J=n.get(P);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.directionalShadow[b]=J,i.directionalShadowMap[b]=$,i.directionalShadowMatrix[b]=P.shadow.matrix,y++}i.directional[b]=X,b++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(N).multiplyScalar(H*E),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[p]=X;let j=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,j.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[p]=j.matrix,P.castShadow){let J=n.get(P);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=$,A++}p++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(N).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=X,x++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*E),X.distance=P.distance,X.decay=P.decay,P.castShadow){let j=P.shadow,J=n.get(P);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=X,g++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(H*E),X.groundColor.copy(P.groundColor).multiplyScalar(H*E),i.hemi[v]=X,v++}}x>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;let D=i.hash;(D.directionalLength!==b||D.pointLength!==g||D.spotLength!==p||D.rectAreaLength!==x||D.hemiLength!==v||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==C||D.numLightProbes!==_)&&(i.directional.length=b,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+C-I,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=_,D.directionalLength=b,D.pointLength=g,D.spotLength=p,D.rectAreaLength=x,D.hemiLength=v,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=C,D.numLightProbes=_,i.version=e_++)}function l(h,u){let d=0,f=0,m=0,b=0,g=0,p=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){let y=h[x];if(y.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(y.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let S=i.rectArea[b];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),b++}else if(y.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function Mf(s,e){let t=new n_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function i_(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Mf(s,e),t.set(r,[c])):a>=o.length?(c=new Mf(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Kr=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rh=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
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
}`;function a_(s,e,t){let n=new Yr,i=new pe,r=new pe,a=new We,o=new Kr({depthPacking:Z0}),c=new rh,l={},h=t.maxTextureSize,u={[di]:on,[on]:di,[Yt]:Yt},d=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:s_,fragmentShader:r_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new mt;m.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Be(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gf;let p=this.type;this.render=function(A,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let _=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Xi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let K=p!==Ci&&this.type===Ci,P=p===Ci&&this.type!==Ci;for(let N=0,H=A.length;N<H;N++){let q=A[N],$=q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let X=$.getFrameExtents();if(i.multiply(X),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,$.mapSize.y=r.y)),$.map===null||K===!0||P===!0){let J=this.type!==Ci?{minFilter:kt,magFilter:kt}:{};$.map!==null&&$.map.dispose(),$.map=new Gt(i.x,i.y,J),$.map.texture.name=q.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();let j=$.getViewportCount();for(let J=0;J<j;J++){let ce=$.getViewport(J);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),G.viewport(a),$.updateMatrices(q,J),n=$.getFrustum(),y(C,I,$.camera,q,this.type)}$.isPointLightShadow!==!0&&this.type===Ci&&x($,I),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(_,E,D)};function x(A,C){let I=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gt(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,I,d,b,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,I,f,b,null)}function v(A,C,I,_){let E=null,D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)E=D;else if(E=I.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let G=E.uuid,K=C.uuid,P=l[G];P===void 0&&(P={},l[G]=P);let N=P[K];N===void 0&&(N=E.clone(),P[K]=N,C.addEventListener("dispose",S)),E=N}if(E.visible=C.visible,E.wireframe=C.wireframe,_===Ci?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=s.properties.get(E);G.light=I}return E}function y(A,C,I,_,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Ci)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let K=e.update(A),P=A.material;if(Array.isArray(P)){let N=K.groups;for(let H=0,q=N.length;H<q;H++){let $=N[H],X=P[$.materialIndex];if(X&&X.visible){let j=v(A,X,_,E);A.onBeforeShadow(s,A,C,I,K,j,$),s.renderBufferDirect(I,null,K,j,A,$),A.onAfterShadow(s,A,C,I,K,j,$)}}}else if(P.visible){let N=v(A,P,_,E);A.onBeforeShadow(s,A,C,I,K,N,null),s.renderBufferDirect(I,null,K,N,A,null),A.onAfterShadow(s,A,C,I,K,N,null)}}let G=A.children;for(let K=0,P=G.length;K<P;K++)y(G[K],C,I,_,E)}function S(A){A.target.removeEventListener("dispose",S);for(let I in l){let _=l[I],E=A.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}function o_(s,e,t){let n=t.isWebGL2;function i(){let L=!1,se=new We,re=null,Le=new We(0,0,0,0);return{setMask:function(Ae){re!==Ae&&!L&&(s.colorMask(Ae,Ae,Ae,Ae),re=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,ct,lt,zt,pn){pn===!0&&(Ae*=zt,ct*=zt,lt*=zt),se.set(Ae,ct,lt,zt),Le.equals(se)===!1&&(s.clearColor(Ae,ct,lt,zt),Le.copy(se))},reset:function(){L=!1,re=null,Le.set(-1,0,0,0)}}}function r(){let L=!1,se=null,re=null,Le=null;return{setTest:function(Ae){Ae?Ie(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Ae){se!==Ae&&!L&&(s.depthMask(Ae),se=Ae)},setFunc:function(Ae){if(re!==Ae){switch(Ae){case T0:s.depthFunc(s.NEVER);break;case A0:s.depthFunc(s.ALWAYS);break;case R0:s.depthFunc(s.LESS);break;case go:s.depthFunc(s.LEQUAL);break;case C0:s.depthFunc(s.EQUAL);break;case L0:s.depthFunc(s.GEQUAL);break;case P0:s.depthFunc(s.GREATER);break;case k0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}re=Ae}},setLocked:function(Ae){L=Ae},setClear:function(Ae){Le!==Ae&&(s.clearDepth(Ae),Le=Ae)},reset:function(){L=!1,se=null,re=null,Le=null}}}function a(){let L=!1,se=null,re=null,Le=null,Ae=null,ct=null,lt=null,zt=null,pn=null;return{setTest:function(ht){L||(ht?Ie(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(ht){se!==ht&&!L&&(s.stencilMask(ht),se=ht)},setFunc:function(ht,mn,ci){(re!==ht||Le!==mn||Ae!==ci)&&(s.stencilFunc(ht,mn,ci),re=ht,Le=mn,Ae=ci)},setOp:function(ht,mn,ci){(ct!==ht||lt!==mn||zt!==ci)&&(s.stencilOp(ht,mn,ci),ct=ht,lt=mn,zt=ci)},setLocked:function(ht){L=ht},setClear:function(ht){pn!==ht&&(s.clearStencil(ht),pn=ht)},reset:function(){L=!1,se=null,re=null,Le=null,Ae=null,ct=null,lt=null,zt=null,pn=null}}}let o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},m=new WeakMap,b=[],g=null,p=!1,x=null,v=null,y=null,S=null,A=null,C=null,I=null,_=new ye(0,0,0),E=0,D=!1,G=null,K=null,P=null,N=null,H=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,X=0,j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=X>=2);let J=null,ce={},W=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),oe=new We().fromArray(W),be=new We().fromArray(Y);function fe(L,se,re,Le){let Ae=new Uint8Array(4),ct=s.createTexture();s.bindTexture(L,ct),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<re;lt++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(se+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return ct}let ke={};ke[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ke[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ke[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ke[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ie(s.DEPTH_TEST),c.setFunc(go),He(!1),R(nd),Ie(s.CULL_FACE),ge(Xi);function Ie(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Ee(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Qe(L,se){return f[L]!==se?(s.bindFramebuffer(L,se),f[L]=se,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=se),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function U(L,se){let re=b,Le=!1;if(L)if(re=m.get(se),re===void 0&&(re=[],m.set(se,re)),L.isWebGLMultipleRenderTargets){let Ae=L.texture;if(re.length!==Ae.length||re[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,lt=Ae.length;ct<lt;ct++)re[ct]=s.COLOR_ATTACHMENT0+ct;re.length=Ae.length,Le=!0}}else re[0]!==s.COLOR_ATTACHMENT0&&(re[0]=s.COLOR_ATTACHMENT0,Le=!0);else re[0]!==s.BACK&&(re[0]=s.BACK,Le=!0);Le&&(t.isWebGL2?s.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function fn(L){return g!==L?(s.useProgram(L),g=L,!0):!1}let Te={[ms]:s.FUNC_ADD,[u0]:s.FUNC_SUBTRACT,[d0]:s.FUNC_REVERSE_SUBTRACT};if(n)Te[rd]=s.MIN,Te[ad]=s.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(Te[rd]=L.MIN_EXT,Te[ad]=L.MAX_EXT)}let Ne={[f0]:s.ZERO,[p0]:s.ONE,[m0]:s.SRC_COLOR,[Vl]:s.SRC_ALPHA,[_0]:s.SRC_ALPHA_SATURATE,[x0]:s.DST_COLOR,[b0]:s.DST_ALPHA,[g0]:s.ONE_MINUS_SRC_COLOR,[Gl]:s.ONE_MINUS_SRC_ALPHA,[y0]:s.ONE_MINUS_DST_COLOR,[v0]:s.ONE_MINUS_DST_ALPHA,[M0]:s.CONSTANT_COLOR,[w0]:s.ONE_MINUS_CONSTANT_COLOR,[S0]:s.CONSTANT_ALPHA,[E0]:s.ONE_MINUS_CONSTANT_ALPHA};function ge(L,se,re,Le,Ae,ct,lt,zt,pn,ht){if(L===Xi){p===!0&&(Ee(s.BLEND),p=!1);return}if(p===!1&&(Ie(s.BLEND),p=!0),L!==h0){if(L!==x||ht!==D){if((v!==ms||A!==ms)&&(s.blendEquation(s.FUNC_ADD),v=ms,A=ms),ht)switch(L){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFunc(s.ONE,s.ONE);break;case id:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case id:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,S=null,C=null,I=null,_.set(0,0,0),E=0,x=L,D=ht}return}Ae=Ae||se,ct=ct||re,lt=lt||Le,(se!==v||Ae!==A)&&(s.blendEquationSeparate(Te[se],Te[Ae]),v=se,A=Ae),(re!==y||Le!==S||ct!==C||lt!==I)&&(s.blendFuncSeparate(Ne[re],Ne[Le],Ne[ct],Ne[lt]),y=re,S=Le,C=ct,I=lt),(zt.equals(_)===!1||pn!==E)&&(s.blendColor(zt.r,zt.g,zt.b,pn),_.copy(zt),E=pn),x=L,D=!1}function bt(L,se){L.side===Yt?Ee(s.CULL_FACE):Ie(s.CULL_FACE);let re=L.side===on;se&&(re=!re),He(re),L.blending===Qs&&L.transparent===!1?ge(Xi):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);let Le=L.stencilWrite;l.setTest(Le),Le&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ie(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){G!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),G=L)}function R(L){L!==o0?(Ie(s.CULL_FACE),L!==K&&(L===nd?s.cullFace(s.BACK):L===c0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),K=L}function w(L){L!==P&&($&&s.lineWidth(L),P=L)}function O(L,se,re){L?(Ie(s.POLYGON_OFFSET_FILL),(N!==se||H!==re)&&(s.polygonOffset(se,re),N=se,H=re)):Ee(s.POLYGON_OFFSET_FILL)}function ee(L){L?Ie(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function Q(L){L===void 0&&(L=s.TEXTURE0+q-1),J!==L&&(s.activeTexture(L),J=L)}function te(L,se,re){re===void 0&&(J===null?re=s.TEXTURE0+q-1:re=J);let Le=ce[re];Le===void 0&&(Le={type:void 0,texture:void 0},ce[re]=Le),(Le.type!==L||Le.texture!==se)&&(J!==re&&(s.activeTexture(re),J=re),s.bindTexture(L,se||ke[L]),Le.type=L,Le.texture=se)}function ve(){let L=ce[J];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ae(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(L){oe.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function nt(L){be.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),be.copy(L))}function _t(L,se){let re=u.get(se);re===void 0&&(re=new WeakMap,u.set(se,re));let Le=re.get(L);Le===void 0&&(Le=s.getUniformBlockIndex(se,L.name),re.set(L,Le))}function Xe(L,se){let Le=u.get(se).get(L);h.get(se)!==Le&&(s.uniformBlockBinding(se,Le,L.__bindingPointIndex),h.set(se,Le))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,ce={},f={},m=new WeakMap,b=[],g=null,p=!1,x=null,v=null,y=null,S=null,A=null,C=null,I=null,_=new ye(0,0,0),E=0,D=!1,G=null,K=null,P=null,N=null,H=null,oe.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ie,disable:Ee,bindFramebuffer:Qe,drawBuffers:U,useProgram:fn,setBlending:ge,setMaterial:bt,setFlipSided:He,setCullFace:R,setLineWidth:w,setPolygonOffset:O,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:ve,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:Se,texImage3D:de,updateUBOMapping:_t,uniformBlockBinding:Xe,texStorage2D:je,texStorage3D:De,texSubImage2D:Ce,texSubImage3D:Ve,compressedTexSubImage2D:Z,compressedTexSubImage3D:st,scissor:Oe,viewport:nt,reset:ne}}function c_(s,e,t,n,i,r,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,w){return f?new OffscreenCanvas(R,w):qr("canvas")}function b(R,w,O,ee){let Q=1;if((R.width>ee||R.height>ee)&&(Q=ee/Math.max(R.width,R.height)),Q<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let te=w?Mo:Math.floor,ve=te(Q*R.width),ae=te(Q*R.height);u===void 0&&(u=m(ve,ae));let ue=O?m(ve,ae):u;return ue.width=ve,ue.height=ae,ue.getContext("2d").drawImage(R,0,0,ve,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ve+"x"+ae+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return jl(R.width)&&jl(R.height)}function p(R){return o?!1:R.wrapS!==En||R.wrapT!==En||R.minFilter!==kt&&R.minFilter!==xt}function x(R,w){return R.generateMipmaps&&w&&R.minFilter!==kt&&R.minFilter!==xt}function v(R){s.generateMipmap(R)}function y(R,w,O,ee,Q=!1){if(o===!1)return w;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=w;if(w===s.RED&&(O===s.FLOAT&&(te=s.R32F),O===s.HALF_FLOAT&&(te=s.R16F),O===s.UNSIGNED_BYTE&&(te=s.R8)),w===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(te=s.R8UI),O===s.UNSIGNED_SHORT&&(te=s.R16UI),O===s.UNSIGNED_INT&&(te=s.R32UI),O===s.BYTE&&(te=s.R8I),O===s.SHORT&&(te=s.R16I),O===s.INT&&(te=s.R32I)),w===s.RG&&(O===s.FLOAT&&(te=s.RG32F),O===s.HALF_FLOAT&&(te=s.RG16F),O===s.UNSIGNED_BYTE&&(te=s.RG8)),w===s.RGBA){let ve=Q?vo:et.getTransfer(ee);O===s.FLOAT&&(te=s.RGBA32F),O===s.HALF_FLOAT&&(te=s.RGBA16F),O===s.UNSIGNED_BYTE&&(te=ve===ft?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(R,w,O){return x(R,O)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==xt?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function A(R){return R===kt||R===bo||R===Hr?s.NEAREST:s.LINEAR}function C(R){let w=R.target;w.removeEventListener("dispose",C),_(w),w.isVideoTexture&&h.delete(w)}function I(R){let w=R.target;w.removeEventListener("dispose",I),D(w)}function _(R){let w=n.get(R);if(w.__webglInit===void 0)return;let O=R.source,ee=d.get(O);if(ee){let Q=ee[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(R),Object.keys(ee).length===0&&d.delete(O)}n.remove(R)}function E(R){let w=n.get(R);s.deleteTexture(w.__webglTexture);let O=R.source,ee=d.get(O);delete ee[w.__cacheKey],a.memory.textures--}function D(R){let w=R.texture,O=n.get(R),ee=n.get(w);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(O.__webglFramebuffer[Q]))for(let te=0;te<O.__webglFramebuffer[Q].length;te++)s.deleteFramebuffer(O.__webglFramebuffer[Q][te]);else s.deleteFramebuffer(O.__webglFramebuffer[Q]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[Q])}else{if(Array.isArray(O.__webglFramebuffer))for(let Q=0;Q<O.__webglFramebuffer.length;Q++)s.deleteFramebuffer(O.__webglFramebuffer[Q]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Q=0,te=w.length;Q<te;Q++){let ve=n.get(w[Q]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(w[Q])}n.remove(w),n.remove(R)}let G=0;function K(){G=0}function P(){let R=G;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),G+=1,R}function N(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function H(R,w){let O=n.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){let ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(O,R,w);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+w)}function q(R,w){let O=n.get(R);if(R.version>0&&O.__version!==R.version){oe(O,R,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+w)}function $(R,w){let O=n.get(R);if(R.version>0&&O.__version!==R.version){oe(O,R,w);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+w)}function X(R,w){let O=n.get(R);if(R.version>0&&O.__version!==R.version){be(O,R,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+w)}let j={[ys]:s.REPEAT,[En]:s.CLAMP_TO_EDGE,[$r]:s.MIRRORED_REPEAT},J={[kt]:s.NEAREST,[bo]:s.NEAREST_MIPMAP_NEAREST,[Hr]:s.NEAREST_MIPMAP_LINEAR,[xt]:s.LINEAR,[Sh]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},ce={[eg]:s.NEVER,[ag]:s.ALWAYS,[tg]:s.LESS,[jo]:s.LEQUAL,[ng]:s.EQUAL,[rg]:s.GEQUAL,[ig]:s.GREATER,[sg]:s.NOTEQUAL};function W(R,w,O){if(O?(s.texParameteri(R,s.TEXTURE_WRAP_S,j[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,j[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,j[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,J[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,J[w.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==En||w.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,A(w.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,A(w.minFilter)),w.minFilter!==kt&&w.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===kt||w.minFilter!==Hr&&w.minFilter!==fi||w.type===Li&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===ti&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Y(R,w){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));let ee=w.source,Q=d.get(ee);Q===void 0&&(Q={},d.set(ee,Q));let te=N(w);if(te!==R.__cacheKey){Q[te]===void 0&&(Q[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[te].usedTimes++;let ve=Q[R.__cacheKey];ve!==void 0&&(Q[R.__cacheKey].usedTimes--,ve.usedTimes===0&&E(w)),R.__cacheKey=te,R.__webglTexture=Q[te].texture}return O}function oe(R,w,O){let ee=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=s.TEXTURE_3D);let Q=Y(R,w),te=w.source;t.bindTexture(ee,R.__webglTexture,s.TEXTURE0+O);let ve=n.get(te);if(te.version!==ve.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);let ae=et.getPrimaries(et.workingColorSpace),ue=w.colorSpace===Vt?null:et.getPrimaries(w.colorSpace),Ce=w.colorSpace===Vt||ae===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Ve=p(w)&&g(w.image)===!1,Z=b(w.image,Ve,!1,i.maxTextureSize);Z=He(w,Z);let st=g(Z)||o,je=r.convert(w.format,w.colorSpace),De=r.convert(w.type),Se=y(w.internalFormat,je,De,w.colorSpace,w.isVideoTexture);W(ee,w,st);let de,Oe=w.mipmaps,nt=o&&w.isVideoTexture!==!0&&Se!==Zf,_t=ve.__version===void 0||Q===!0,Xe=S(w,Z,st);if(w.isDepthTexture)Se=s.DEPTH_COMPONENT,o?w.type===Li?Se=s.DEPTH_COMPONENT32F:w.type===Fn?Se=s.DEPTH_COMPONENT24:w.type===bs?Se=s.DEPTH24_STENCIL8:Se=s.DEPTH_COMPONENT16:w.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===vs&&Se===s.DEPTH_COMPONENT&&w.type!==Eh&&w.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Fn,De=r.convert(w.type)),w.format===rr&&Se===s.DEPTH_COMPONENT&&(Se=s.DEPTH_STENCIL,w.type!==bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=bs,De=r.convert(w.type))),_t&&(nt?t.texStorage2D(s.TEXTURE_2D,1,Se,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,Se,Z.width,Z.height,0,je,De,null));else if(w.isDataTexture)if(Oe.length>0&&st){nt&&_t&&t.texStorage2D(s.TEXTURE_2D,Xe,Se,Oe[0].width,Oe[0].height);for(let ne=0,L=Oe.length;ne<L;ne++)de=Oe[ne],nt?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,de.width,de.height,je,De,de.data):t.texImage2D(s.TEXTURE_2D,ne,Se,de.width,de.height,0,je,De,de.data);w.generateMipmaps=!1}else nt?(_t&&t.texStorage2D(s.TEXTURE_2D,Xe,Se,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,je,De,Z.data)):t.texImage2D(s.TEXTURE_2D,0,Se,Z.width,Z.height,0,je,De,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Se,Oe[0].width,Oe[0].height,Z.depth);for(let ne=0,L=Oe.length;ne<L;ne++)de=Oe[ne],w.format!==an?je!==null?nt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,Z.depth,je,de.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Se,de.width,de.height,Z.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,Z.depth,je,De,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Se,de.width,de.height,Z.depth,0,je,De,de.data)}else{nt&&_t&&t.texStorage2D(s.TEXTURE_2D,Xe,Se,Oe[0].width,Oe[0].height);for(let ne=0,L=Oe.length;ne<L;ne++)de=Oe[ne],w.format!==an?je!==null?nt?t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,de.width,de.height,je,de.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,de.width,de.height,je,De,de.data):t.texImage2D(s.TEXTURE_2D,ne,Se,de.width,de.height,0,je,De,de.data)}else if(w.isDataArrayTexture)nt?(_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,je,De,Z.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,je,De,Z.data);else if(w.isData3DTexture)nt?(_t&&t.texStorage3D(s.TEXTURE_3D,Xe,Se,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,je,De,Z.data)):t.texImage3D(s.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,je,De,Z.data);else if(w.isFramebufferTexture){if(_t)if(nt)t.texStorage2D(s.TEXTURE_2D,Xe,Se,Z.width,Z.height);else{let ne=Z.width,L=Z.height;for(let se=0;se<Xe;se++)t.texImage2D(s.TEXTURE_2D,se,Se,ne,L,0,je,De,null),ne>>=1,L>>=1}}else if(Oe.length>0&&st){nt&&_t&&t.texStorage2D(s.TEXTURE_2D,Xe,Se,Oe[0].width,Oe[0].height);for(let ne=0,L=Oe.length;ne<L;ne++)de=Oe[ne],nt?t.texSubImage2D(s.TEXTURE_2D,ne,0,0,je,De,de):t.texImage2D(s.TEXTURE_2D,ne,Se,je,De,de);w.generateMipmaps=!1}else nt?(_t&&t.texStorage2D(s.TEXTURE_2D,Xe,Se,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,De,Z)):t.texImage2D(s.TEXTURE_2D,0,Se,je,De,Z);x(w,st)&&v(ee),ve.__version=te.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function be(R,w,O){if(w.image.length!==6)return;let ee=Y(R,w),Q=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+O);let te=n.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(s.TEXTURE0+O);let ve=et.getPrimaries(et.workingColorSpace),ae=w.colorSpace===Vt?null:et.getPrimaries(w.colorSpace),ue=w.colorSpace===Vt||ve===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ce=w.isCompressedTexture||w.image[0].isCompressedTexture,Ve=w.image[0]&&w.image[0].isDataTexture,Z=[];for(let ne=0;ne<6;ne++)!Ce&&!Ve?Z[ne]=b(w.image[ne],!1,!0,i.maxCubemapSize):Z[ne]=Ve?w.image[ne].image:w.image[ne],Z[ne]=He(w,Z[ne]);let st=Z[0],je=g(st)||o,De=r.convert(w.format,w.colorSpace),Se=r.convert(w.type),de=y(w.internalFormat,De,Se,w.colorSpace),Oe=o&&w.isVideoTexture!==!0,nt=te.__version===void 0||ee===!0,_t=S(w,st,je);W(s.TEXTURE_CUBE_MAP,w,je);let Xe;if(Ce){Oe&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_t,de,st.width,st.height);for(let ne=0;ne<6;ne++){Xe=Z[ne].mipmaps;for(let L=0;L<Xe.length;L++){let se=Xe[L];w.format!==an?De!==null?Oe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,se.width,se.height,De,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,de,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,se.width,se.height,De,Se,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,de,se.width,se.height,0,De,Se,se.data)}}}else{Xe=w.mipmaps,Oe&&nt&&(Xe.length>0&&_t++,t.texStorage2D(s.TEXTURE_CUBE_MAP,_t,de,Z[0].width,Z[0].height));for(let ne=0;ne<6;ne++)if(Ve){Oe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Z[ne].width,Z[ne].height,De,Se,Z[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,Z[ne].width,Z[ne].height,0,De,Se,Z[ne].data);for(let L=0;L<Xe.length;L++){let re=Xe[L].image[ne].image;Oe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,re.width,re.height,De,Se,re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,de,re.width,re.height,0,De,Se,re.data)}}else{Oe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De,Se,Z[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,De,Se,Z[ne]);for(let L=0;L<Xe.length;L++){let se=Xe[L];Oe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,De,Se,se.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,de,De,Se,se.image[ne])}}}x(w,je)&&v(s.TEXTURE_CUBE_MAP),te.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function fe(R,w,O,ee,Q,te){let ve=r.convert(O.format,O.colorSpace),ae=r.convert(O.type),ue=y(O.internalFormat,ve,ae,O.colorSpace);if(!n.get(w).__hasExternalTextures){let Ve=Math.max(1,w.width>>te),Z=Math.max(1,w.height>>te);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,ue,Ve,Z,w.depth,0,ve,ae,null):t.texImage2D(Q,te,ue,Ve,Z,0,ve,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ge(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Q,n.get(O).__webglTexture,0,Ne(w)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,Q,n.get(O).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(R,w,O){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let ee=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||ge(w)){let Q=w.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Li?ee=s.DEPTH_COMPONENT32F:Q.type===Fn&&(ee=s.DEPTH_COMPONENT24));let te=Ne(w);ge(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,ee,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,ee,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){let ee=Ne(w);O&&ge(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,w.width,w.height):ge(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{let ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0;Q<ee.length;Q++){let te=ee[Q],ve=r.convert(te.format,te.colorSpace),ae=r.convert(te.type),ue=y(te.internalFormat,ve,ae,te.colorSpace),Ce=Ne(w);O&&ge(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,ue,w.width,w.height):ge(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,ue,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ue,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);let ee=n.get(w.depthTexture).__webglTexture,Q=Ne(w);if(w.depthTexture.format===vs)ge(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(w.depthTexture.format===rr)ge(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ee(R){let w=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ie(w.__webglFramebuffer,R)}else if(O){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=s.createRenderbuffer(),ke(w.__webglDepthbuffer[ee],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),ke(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(R,w,O){let ee=n.get(R);w!==void 0&&fe(ee.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ee(R)}function U(R){let w=R.texture,O=n.get(R),ee=n.get(w);R.addEventListener("dispose",I),R.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=w.version,a.memory.textures++);let Q=R.isWebGLCubeRenderTarget===!0,te=R.isWebGLMultipleRenderTargets===!0,ve=g(R)||o;if(Q){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let ue=0;ue<w.mipmaps.length;ue++)O.__webglFramebuffer[ae][ue]=s.createFramebuffer()}else O.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<w.mipmaps.length;ae++)O.__webglFramebuffer[ae]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){let ae=R.texture;for(let ue=0,Ce=ae.length;ue<Ce;ue++){let Ve=n.get(ae[ue]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&ge(R)===!1){let ae=te?w:[w];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){let Ce=ae[ue];O.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);let Ve=r.convert(Ce.format,Ce.colorSpace),Z=r.convert(Ce.type),st=y(Ce.internalFormat,Ve,Z,Ce.colorSpace,R.isXRRenderTarget===!0),je=Ne(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,st,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),W(s.TEXTURE_CUBE_MAP,w,ve);for(let ae=0;ae<6;ae++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)fe(O.__webglFramebuffer[ae][ue],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else fe(O.__webglFramebuffer[ae],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);x(w,ve)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){let ae=R.texture;for(let ue=0,Ce=ae.length;ue<Ce;ue++){let Ve=ae[ue],Z=n.get(Ve);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture),W(s.TEXTURE_2D,Ve,ve),fe(O.__webglFramebuffer,R,Ve,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),x(Ve,ve)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ae=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ee.__webglTexture),W(ae,w,ve),o&&w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)fe(O.__webglFramebuffer[ue],R,w,s.COLOR_ATTACHMENT0,ae,ue);else fe(O.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,ae,0);x(w,ve)&&v(ae),t.unbindTexture()}R.depthBuffer&&Ee(R)}function fn(R){let w=g(R)||o,O=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ee=0,Q=O.length;ee<Q;ee++){let te=O[ee];if(x(te,w)){let ve=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ae=n.get(te).__webglTexture;t.bindTexture(ve,ae),v(ve),t.unbindTexture()}}}function Te(R){if(o&&R.samples>0&&ge(R)===!1){let w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],O=R.width,ee=R.height,Q=s.COLOR_BUFFER_BIT,te=[],ve=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(R),ue=R.isWebGLMultipleRenderTargets===!0;if(ue)for(let Ce=0;Ce<w.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ce=0;Ce<w.length;Ce++){te.push(s.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&te.push(ve);let Ve=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ve===!1&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce]),Ve===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ve]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ve])),ue){let Z=n.get(w[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,O,ee,0,0,O,ee,Q,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<w.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce]);let Ve=n.get(w[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ne(R){return Math.min(i.maxSamples,R.samples)}function ge(R){let w=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function bt(R){let w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function He(R,w){let O=R.colorSpace,ee=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ql||O!==Nt&&O!==Vt&&(et.getTransfer(O)===ft?o===!1?e.has("EXT_sRGB")===!0&&ee===an?(R.format=ql,R.minFilter=xt,R.generateMipmaps=!1):w=wo.sRGBToLinear(w):(ee!==an||Q!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),w}this.allocateTextureUnit=P,this.resetTextureUnits=K,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=Qe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=fn,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge}function l_(s,e,t){let n=t.isWebGL2;function i(r,a=Vt){let o,c=et.getTransfer(a);if(r===$i)return s.UNSIGNED_BYTE;if(r===qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===jf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===V0)return s.BYTE;if(r===G0)return s.SHORT;if(r===Eh)return s.UNSIGNED_SHORT;if(r===$f)return s.INT;if(r===Fn)return s.UNSIGNED_INT;if(r===Li)return s.FLOAT;if(r===ti)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===W0)return s.ALPHA;if(r===an)return s.RGBA;if(r===X0)return s.LUMINANCE;if(r===$0)return s.LUMINANCE_ALPHA;if(r===vs)return s.DEPTH_COMPONENT;if(r===rr)return s.DEPTH_STENCIL;if(r===ql)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===q0)return s.RED;if(r===Yf)return s.RED_INTEGER;if(r===j0)return s.RG;if(r===Kf)return s.RG_INTEGER;if(r===Jf)return s.RGBA_INTEGER;if(r===ll||r===hl||r===ul||r===dl)if(c===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ll)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ll)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ul)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===dl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cd||r===ld||r===hd||r===ud)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===cd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ld)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ud)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dd||r===fd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===dd)return c===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===fd)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pd||r===md||r===gd||r===bd||r===vd||r===xd||r===yd||r===_d||r===Md||r===wd||r===Sd||r===Ed||r===Td||r===Ad)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===pd)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===md)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gd)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bd)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vd)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yd)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_d)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wd)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sd)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ed)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Td)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ad)return c===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fl||r===Rd||r===Cd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===fl)return c===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Y0||r===Ld||r===Pd||r===kd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===fl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ld)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bs?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var ah=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},dt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},h_={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},oh=class extends qi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,b=t.getContextAttributes(),g=null,p=null,x=[],v=[],y=new pe,S=null,A=new It;A.layers.enable(1),A.viewport=new We;let C=new It;C.layers.enable(2),C.viewport=new We;let I=[A,C],_=new ah;_.layers.enable(1),_.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=x[W];return Y===void 0&&(Y=new Xr,x[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=x[W];return Y===void 0&&(Y=new Xr,x[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=x[W];return Y===void 0&&(Y=new Xr,x[W]=Y),Y.getHandSpace()};function G(W){let Y=v.indexOf(W.inputSource);if(Y===-1)return;let oe=x[Y];oe!==void 0&&(oe.update(W.inputSource,W.frame,l||a),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",P);for(let W=0;W<x.length;W++){let Y=v[W];Y!==null&&(v[W]=null,x[W].disconnect(Y))}E=null,D=null,e.setRenderTarget(g),f=null,d=null,u=null,i=null,p=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",K),i.addEventListener("inputsourceschange",P),b.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:i.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Gt(f.framebufferWidth,f.framebufferHeight,{format:an,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let Y=null,oe=null,be=null;b.depth&&(be=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=b.stencil?rr:vs,oe=b.stencil?bs:Fn);let fe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Gt(d.textureWidth,d.textureHeight,{format:an,type:$i,depthTexture:new Yi(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let ke=e.properties.get(p);ke.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(W){for(let Y=0;Y<W.removed.length;Y++){let oe=W.removed[Y],be=v.indexOf(oe);be>=0&&(v[be]=null,x[be].disconnect(oe))}for(let Y=0;Y<W.added.length;Y++){let oe=W.added[Y],be=v.indexOf(oe);if(be===-1){for(let ke=0;ke<x.length;ke++)if(ke>=v.length){v.push(oe),be=ke;break}else if(v[ke]===null){v[ke]=oe,be=ke;break}if(be===-1)break}let fe=x[be];fe&&fe.connect(oe)}}let N=new M,H=new M;function q(W,Y,oe){N.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);let be=N.distanceTo(H),fe=Y.projectionMatrix.elements,ke=oe.projectionMatrix.elements,Ie=fe[14]/(fe[10]-1),Ee=fe[14]/(fe[10]+1),Qe=(fe[9]+1)/fe[5],U=(fe[9]-1)/fe[5],fn=(fe[8]-1)/fe[0],Te=(ke[8]+1)/ke[0],Ne=Ie*fn,ge=Ie*Te,bt=be/(-fn+Te),He=bt*-fn;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(He),W.translateZ(bt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let R=Ie+bt,w=Ee+bt,O=Ne-He,ee=ge+(be-He),Q=Qe*Ee/w*R,te=U*Ee/w*R;W.projectionMatrix.makePerspective(O,ee,Q,te,R,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function $(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;_.near=C.near=A.near=W.near,_.far=C.far=A.far=W.far,(E!==_.near||D!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,D=_.far);let Y=W.parent,oe=_.cameras;$(_,Y);for(let be=0;be<oe.length;be++)$(oe[be],Y);oe.length===2?q(_,A,C):_.projectionMatrix.copy(A.projectionMatrix),X(W,_,Y)};function X(W,Y,oe){oe===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=or*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let j=null;function J(W,Y){if(h=Y.getViewerPose(l||a),m=Y,h!==null){let oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let be=!1;oe.length!==_.cameras.length&&(_.cameras.length=0,be=!0);for(let fe=0;fe<oe.length;fe++){let ke=oe[fe],Ie=null;if(f!==null)Ie=f.getViewport(ke);else{let Qe=u.getViewSubImage(d,ke);Ie=Qe.viewport,fe===0&&(e.setRenderTargetTextures(p,Qe.colorTexture,d.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(p))}let Ee=I[fe];Ee===void 0&&(Ee=new It,Ee.layers.enable(fe),Ee.viewport=new We,I[fe]=Ee),Ee.matrix.fromArray(ke.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(ke.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),fe===0&&(_.matrix.copy(Ee.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),be===!0&&_.cameras.push(Ee)}}for(let oe=0;oe<x.length;oe++){let be=v[oe],fe=x[oe];be!==null&&fe!==void 0&&fe.update(be,Y,l||a)}j&&j(W,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let ce=new rp;ce.setAnimationLoop(J),this.setAnimationLoop=function(W){j=W},this.dispose=function(){}}};function u_(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,sp(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function d_(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){let y=v.program;n.uniformBlockBinding(x,y)}function l(x,v){let y=i[x.id];y===void 0&&(m(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",g));let S=v.program;n.updateUBOMapping(x,S);let A=e.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){let v=u();x.__bindingPointIndex=v;let y=s.createBuffer(),S=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,S,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=i[x.id],y=x.uniforms,S=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,C=y.length;A<C;A++){let I=Array.isArray(y[A])?y[A]:[y[A]];for(let _=0,E=I.length;_<E;_++){let D=I[_];if(f(D,A,_,S)===!0){let G=D.__offset,K=Array.isArray(D.value)?D.value:[D.value],P=0;for(let N=0;N<K.length;N++){let H=K[N],q=b(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+P,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,y,S){let A=x.value,C=v+"_"+y;if(S[C]===void 0)return typeof A=="number"||typeof A=="boolean"?S[C]=A:S[C]=A.clone(),!0;{let I=S[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return S[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function m(x){let v=x.uniforms,y=0,S=16;for(let C=0,I=v.length;C<I;C++){let _=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,D=_.length;E<D;E++){let G=_[E],K=Array.isArray(G.value)?G.value:[G.value];for(let P=0,N=K.length;P<N;P++){let H=K[P],q=b(H),$=y%S;$!==0&&S-$<q.boundary&&(y+=S-$),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=q.storage}}}let A=y%S;return A>0&&(y+=S-A),x.__size=y,x.__cache={},this}function b(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){let v=x.target;v.removeEventListener("dispose",g);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Jr=class{constructor(e={}){let{canvas:t=_g(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),m=new Int32Array(4),b=null,g=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;let v=this,y=!1,S=0,A=0,C=null,I=-1,_=null,E=new We,D=new We,G=null,K=new ye(0),P=0,N=t.width,H=t.height,q=1,$=null,X=null,j=new We(0,0,N,H),J=new We(0,0,N,H),ce=!1,W=new Yr,Y=!1,oe=!1,be=null,fe=new me,ke=new pe,Ie=new M,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return C===null?q:1}let U=n;function fn(T,k){for(let z=0;z<T.length;z++){let B=T[z],F=t.getContext(B,k);if(F!==null)return F}return null}try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wh}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",se,!1),U===null){let k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),U=fn(k,T),U===null)throw fn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Te,Ne,ge,bt,He,R,w,O,ee,Q,te,ve,ae,ue,Ce,Ve,Z,st,je,De,Se,de,Oe,nt;function _t(){Te=new Px(U),Ne=new Ex(U,Te,e),Te.init(Ne),de=new l_(U,Te,Ne),ge=new o_(U,Te,Ne),bt=new Dx(U),He=new Yy,R=new c_(U,Te,ge,He,Ne,de,bt),w=new Ax(v),O=new Lx(v),ee=new Vg(U,Ne),Oe=new wx(U,Te,ee,Ne),Q=new kx(U,ee,bt,Oe),te=new Ox(U,Q,ee,bt),je=new Fx(U,Ne,R),Ve=new Tx(He),ve=new jy(v,w,O,Te,Ne,Oe,Ve),ae=new u_(v,He),ue=new Jy,Ce=new i_(Te,Ne),st=new Mx(v,w,O,ge,te,d,c),Z=new a_(v,te,Ne),nt=new d_(U,bt,Ne,ge),De=new Sx(U,Te,bt,Ne),Se=new Ix(U,Te,bt,Ne),bt.programs=ve.programs,v.capabilities=Ne,v.extensions=Te,v.properties=He,v.renderLists=ue,v.shadowMap=Z,v.state=ge,v.info=bt}_t();let Xe=new oh(v,U);this.xr=Xe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(N,H,!1))},this.getSize=function(T){return T.set(N,H)},this.setSize=function(T,k,z=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,H=k,t.width=Math.floor(T*q),t.height=Math.floor(k*q),z===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(N*q,H*q).floor()},this.setDrawingBufferSize=function(T,k,z){N=T,H=k,q=z,t.width=Math.floor(T*z),t.height=Math.floor(k*z),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,k,z,B){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,k,z,B),ge.viewport(E.copy(j).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,k,z,B){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,k,z,B),ge.scissor(D.copy(J).multiplyScalar(q).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(T){ge.setScissorTest(ce=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(T=!0,k=!0,z=!0){let B=0;if(T){let F=!1;if(C!==null){let le=C.texture.format;F=le===Jf||le===Kf||le===Yf}if(F){let le=C.texture.type,xe=le===$i||le===Fn||le===Eh||le===bs||le===qf||le===jf,Re=st.getClearColor(),Pe=st.getClearAlpha(),Ge=Re.r,Ue=Re.g,Fe=Re.b;xe?(f[0]=Ge,f[1]=Ue,f[2]=Fe,f[3]=Pe,U.clearBufferuiv(U.COLOR,0,f)):(m[0]=Ge,m[1]=Ue,m[2]=Fe,m[3]=Pe,U.clearBufferiv(U.COLOR,0,m))}else B|=U.COLOR_BUFFER_BIT}k&&(B|=U.DEPTH_BUFFER_BIT),z&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),Ce.dispose(),He.dispose(),w.dispose(),O.dispose(),te.dispose(),Oe.dispose(),nt.dispose(),ve.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",pn),Xe.removeEventListener("sessionend",ht),be&&(be.dispose(),be=null),mn.stop()};function ne(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=bt.autoReset,k=Z.enabled,z=Z.autoUpdate,B=Z.needsUpdate,F=Z.type;_t(),bt.autoReset=T,Z.enabled=k,Z.autoUpdate=z,Z.needsUpdate=B,Z.type=F}function se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){let k=T.target;k.removeEventListener("dispose",re),Le(k)}function Le(T){Ae(T),He.remove(T)}function Ae(T){let k=He.get(T).programs;k!==void 0&&(k.forEach(function(z){ve.releaseProgram(z)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,z,B,F,le){k===null&&(k=Ee);let xe=F.isMesh&&F.matrixWorld.determinant()<0,Re=i0(T,k,z,B,F);ge.setMaterial(B,xe);let Pe=z.index,Ge=1;if(B.wireframe===!0){if(Pe=Q.getWireframeAttribute(z),Pe===void 0)return;Ge=2}let Ue=z.drawRange,Fe=z.attributes.position,St=Ue.start*Ge,Mn=(Ue.start+Ue.count)*Ge;le!==null&&(St=Math.max(St,le.start*Ge),Mn=Math.min(Mn,(le.start+le.count)*Ge)),Pe!==null?(St=Math.max(St,0),Mn=Math.min(Mn,Pe.count)):Fe!=null&&(St=Math.max(St,0),Mn=Math.min(Mn,Fe.count));let Bt=Mn-St;if(Bt<0||Bt===1/0)return;Oe.setup(F,B,Re,z,Pe);let Mi,vt=De;if(Pe!==null&&(Mi=ee.get(Pe),vt=Se,vt.setIndex(Mi)),F.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*Qe()),vt.setMode(U.LINES)):vt.setMode(U.TRIANGLES);else if(F.isLine){let $e=B.linewidth;$e===void 0&&($e=1),ge.setLineWidth($e*Qe()),F.isLineSegments?vt.setMode(U.LINES):F.isLineLoop?vt.setMode(U.LINE_LOOP):vt.setMode(U.LINE_STRIP)}else F.isPoints?vt.setMode(U.POINTS):F.isSprite&&vt.setMode(U.TRIANGLES);if(F.isBatchedMesh)vt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)vt.renderInstances(St,Bt,F.count);else if(z.isInstancedBufferGeometry){let $e=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,rl=Math.min(z.instanceCount,$e);vt.renderInstances(St,Bt,rl)}else vt.render(St,Bt)};function ct(T,k,z){T.transparent===!0&&T.side===Yt&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,Ba(T,k,z),T.side=di,T.needsUpdate=!0,Ba(T,k,z),T.side=Yt):Ba(T,k,z)}this.compile=function(T,k,z=null){z===null&&(z=T),g=Ce.get(z),g.init(),x.push(g),z.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights(v._useLegacyLights);let B=new Set;return T.traverse(function(F){let le=F.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){let Re=le[xe];ct(Re,z,F),B.add(Re)}else ct(le,z,F),B.add(le)}),x.pop(),g=null,B},this.compileAsync=function(T,k,z=null){let B=this.compile(T,k,z);return new Promise(F=>{function le(){if(B.forEach(function(xe){He.get(xe).currentProgram.isReady()&&B.delete(xe)}),B.size===0){F(T);return}setTimeout(le,10)}Te.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let lt=null;function zt(T){lt&&lt(T)}function pn(){mn.stop()}function ht(){mn.start()}let mn=new rp;mn.setAnimationLoop(zt),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(T){lt=T,Xe.setAnimationLoop(T),T===null?mn.stop():mn.start()},Xe.addEventListener("sessionstart",pn),Xe.addEventListener("sessionend",ht),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(k),k=Xe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,C),g=Ce.get(T,x.length),g.init(),x.push(g),fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),W.setFromProjectionMatrix(fe),oe=this.localClippingEnabled,Y=Ve.init(this.clippingPlanes,oe),b=ue.get(T,p.length),b.init(),p.push(b),ci(T,k,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort($,X),this.info.render.frame++,Y===!0&&Ve.beginShadows();let z=g.state.shadowsArray;if(Z.render(z,T,k),Y===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(b,T),g.setupLights(v._useLegacyLights),k.isArrayCamera){let B=k.cameras;for(let F=0,le=B.length;F<le;F++){let xe=B[F];Ku(b,T,xe,xe.viewport)}}else Ku(b,T,k);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,k),Oe.resetDefaultState(),I=-1,_=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function ci(T,k,z,B){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){B&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);let xe=te.update(T),Re=T.material;Re.visible&&b.push(T,xe,Re,z,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){let xe=te.update(T),Re=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ie.copy(xe.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(Re)){let Pe=xe.groups;for(let Ge=0,Ue=Pe.length;Ge<Ue;Ge++){let Fe=Pe[Ge],St=Re[Fe.materialIndex];St&&St.visible&&b.push(T,xe,St,z,Ie.z,Fe)}}else Re.visible&&b.push(T,xe,Re,z,Ie.z,null)}}let le=T.children;for(let xe=0,Re=le.length;xe<Re;xe++)ci(le[xe],k,z,B)}function Ku(T,k,z,B){let F=T.opaque,le=T.transmissive,xe=T.transparent;g.setupLightsView(z),Y===!0&&Ve.setGlobalState(v.clippingPlanes,z),le.length>0&&n0(F,le,k,z),B&&ge.viewport(E.copy(B)),F.length>0&&za(F,k,z),le.length>0&&za(le,k,z),xe.length>0&&za(xe,k,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function n0(T,k,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let le=Ne.isWebGL2;be===null&&(be=new Gt(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?ti:$i,minFilter:fi,samples:le?4:0})),v.getDrawingBufferSize(ke),le?be.setSize(ke.x,ke.y):be.setSize(Mo(ke.x),Mo(ke.y));let xe=v.getRenderTarget();v.setRenderTarget(be),v.getClearColor(K),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let Re=v.toneMapping;v.toneMapping=ui,za(T,z,B),R.updateMultisampleRenderTarget(be),R.updateRenderTargetMipmap(be);let Pe=!1;for(let Ge=0,Ue=k.length;Ge<Ue;Ge++){let Fe=k[Ge],St=Fe.object,Mn=Fe.geometry,Bt=Fe.material,Mi=Fe.group;if(Bt.side===Yt&&St.layers.test(B.layers)){let vt=Bt.side;Bt.side=on,Bt.needsUpdate=!0,Ju(St,z,B,Mn,Bt,Mi),Bt.side=vt,Bt.needsUpdate=!0,Pe=!0}}Pe===!0&&(R.updateMultisampleRenderTarget(be),R.updateRenderTargetMipmap(be)),v.setRenderTarget(xe),v.setClearColor(K,P),v.toneMapping=Re}function za(T,k,z){let B=k.isScene===!0?k.overrideMaterial:null;for(let F=0,le=T.length;F<le;F++){let xe=T[F],Re=xe.object,Pe=xe.geometry,Ge=B===null?xe.material:B,Ue=xe.group;Re.layers.test(z.layers)&&Ju(Re,k,z,Pe,Ge,Ue)}}function Ju(T,k,z,B,F,le){T.onBeforeRender(v,k,z,B,F,le),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(v,k,z,B,T,le),F.transparent===!0&&F.side===Yt&&F.forceSinglePass===!1?(F.side=on,F.needsUpdate=!0,v.renderBufferDirect(z,k,B,F,T,le),F.side=di,F.needsUpdate=!0,v.renderBufferDirect(z,k,B,F,T,le),F.side=Yt):v.renderBufferDirect(z,k,B,F,T,le),T.onAfterRender(v,k,z,B,F,le)}function Ba(T,k,z){k.isScene!==!0&&(k=Ee);let B=He.get(T),F=g.state.lights,le=g.state.shadowsArray,xe=F.state.version,Re=ve.getParameters(T,F.state,le,k,z),Pe=ve.getProgramCacheKey(Re),Ge=B.programs;B.environment=T.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(T.isMeshStandardMaterial?O:w).get(T.envMap||B.environment),Ge===void 0&&(T.addEventListener("dispose",re),Ge=new Map,B.programs=Ge);let Ue=Ge.get(Pe);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===xe)return Qu(T,Re),Ue}else Re.uniforms=ve.getUniforms(T),T.onBuild(z,Re,v),T.onBeforeCompile(Re,v),Ue=ve.acquireProgram(Re,Pe),Ge.set(Pe,Ue),B.uniforms=Re.uniforms;let Fe=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=Ve.uniform),Qu(T,Re),B.needsLights=r0(T),B.lightsStateVersion=xe,B.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function Zu(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=tr.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Qu(T,k){let z=He.get(T);z.outputColorSpace=k.outputColorSpace,z.batching=k.batching,z.instancing=k.instancing,z.instancingColor=k.instancingColor,z.skinning=k.skinning,z.morphTargets=k.morphTargets,z.morphNormals=k.morphNormals,z.morphColors=k.morphColors,z.morphTargetsCount=k.morphTargetsCount,z.numClippingPlanes=k.numClippingPlanes,z.numIntersection=k.numClipIntersection,z.vertexAlphas=k.vertexAlphas,z.vertexTangents=k.vertexTangents,z.toneMapping=k.toneMapping}function i0(T,k,z,B,F){k.isScene!==!0&&(k=Ee),R.resetTextureUnits();let le=k.fog,xe=B.isMeshStandardMaterial?k.environment:null,Re=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Nt,Pe=(B.isMeshStandardMaterial?O:w).get(B.envMap||xe),Ge=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Fe=!!z.morphAttributes.position,St=!!z.morphAttributes.normal,Mn=!!z.morphAttributes.color,Bt=ui;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Bt=v.toneMapping);let Mi=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,vt=Mi!==void 0?Mi.length:0,$e=He.get(B),rl=g.state.lights;if(Y===!0&&(oe===!0||T!==_)){let Nn=T===_&&B.id===I;Ve.setState(B,T,Nn)}let Mt=!1;B.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==rl.state.version||$e.outputColorSpace!==Re||F.isBatchedMesh&&$e.batching===!1||!F.isBatchedMesh&&$e.batching===!0||F.isInstancedMesh&&$e.instancing===!1||!F.isInstancedMesh&&$e.instancing===!0||F.isSkinnedMesh&&$e.skinning===!1||!F.isSkinnedMesh&&$e.skinning===!0||F.isInstancedMesh&&$e.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&$e.instancingColor===!1&&F.instanceColor!==null||$e.envMap!==Pe||B.fog===!0&&$e.fog!==le||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ve.numPlanes||$e.numIntersection!==Ve.numIntersection)||$e.vertexAlphas!==Ge||$e.vertexTangents!==Ue||$e.morphTargets!==Fe||$e.morphNormals!==St||$e.morphColors!==Mn||$e.toneMapping!==Bt||Ne.isWebGL2===!0&&$e.morphTargetsCount!==vt)&&(Mt=!0):(Mt=!0,$e.__version=B.version);let cs=$e.currentProgram;Mt===!0&&(cs=Ba(B,k,F));let ed=!1,Ir=!1,al=!1,tn=cs.getUniforms(),ls=$e.uniforms;if(ge.useProgram(cs.program)&&(ed=!0,Ir=!0,al=!0),B.id!==I&&(I=B.id,Ir=!0),ed||_!==T){tn.setValue(U,"projectionMatrix",T.projectionMatrix),tn.setValue(U,"viewMatrix",T.matrixWorldInverse);let Nn=tn.map.cameraPosition;Nn!==void 0&&Nn.setValue(U,Ie.setFromMatrixPosition(T.matrixWorld)),Ne.logarithmicDepthBuffer&&tn.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tn.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,Ir=!0,al=!0)}if(F.isSkinnedMesh){tn.setOptional(U,F,"bindMatrix"),tn.setOptional(U,F,"bindMatrixInverse");let Nn=F.skeleton;Nn&&(Ne.floatVertexTextures?(Nn.boneTexture===null&&Nn.computeBoneTexture(),tn.setValue(U,"boneTexture",Nn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(tn.setOptional(U,F,"batchingTexture"),tn.setValue(U,"batchingTexture",F._matricesTexture,R));let ol=z.morphAttributes;if((ol.position!==void 0||ol.normal!==void 0||ol.color!==void 0&&Ne.isWebGL2===!0)&&je.update(F,z,cs),(Ir||$e.receiveShadow!==F.receiveShadow)&&($e.receiveShadow=F.receiveShadow,tn.setValue(U,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ls.envMap.value=Pe,ls.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Ir&&(tn.setValue(U,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&s0(ls,al),le&&B.fog===!0&&ae.refreshFogUniforms(ls,le),ae.refreshMaterialUniforms(ls,B,q,H,be),tr.upload(U,Zu($e),ls,R)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(tr.upload(U,Zu($e),ls,R),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tn.setValue(U,"center",F.center),tn.setValue(U,"modelViewMatrix",F.modelViewMatrix),tn.setValue(U,"normalMatrix",F.normalMatrix),tn.setValue(U,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Nn=B.uniformsGroups;for(let cl=0,a0=Nn.length;cl<a0;cl++)if(Ne.isWebGL2){let td=Nn[cl];nt.update(td,cs),nt.bind(td,cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cs}function s0(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function r0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,k,z){He.get(T.texture).__webglTexture=k,He.get(T.depthTexture).__webglTexture=z;let B=He.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){let z=He.get(T);z.__webglFramebuffer=k,z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,z=0){C=T,S=k,A=z;let B=!0,F=null,le=!1,xe=!1;if(T){let Pe=He.get(T);Pe.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Pe.__webglFramebuffer===void 0?R.setupRenderTarget(T):Pe.__hasExternalTextures&&R.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);let Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(xe=!0);let Ue=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?F=Ue[k][z]:F=Ue[k],le=!0):Ne.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?F=He.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?F=Ue[z]:F=Ue,E.copy(T.viewport),D.copy(T.scissor),G=T.scissorTest}else E.copy(j).multiplyScalar(q).floor(),D.copy(J).multiplyScalar(q).floor(),G=ce;if(ge.bindFramebuffer(U.FRAMEBUFFER,F)&&Ne.drawBuffers&&B&&ge.drawBuffers(T,F),ge.viewport(E),ge.scissor(D),ge.setScissorTest(G),le){let Pe=He.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,z)}else if(xe){let Pe=He.get(T.texture),Ge=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.__webglTexture,z||0,Ge)}I=-1},this.readRenderTargetPixels=function(T,k,z,B,F,le,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Re=Re[xe]),Re){ge.bindFramebuffer(U.FRAMEBUFFER,Re);try{let Pe=T.texture,Ge=Pe.format,Ue=Pe.type;if(Ge!==an&&de.convert(Ge)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Fe=Ue===ti&&(Te.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ue!==$i&&de.convert(Ue)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Li&&(Ne.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-B&&z>=0&&z<=T.height-F&&U.readPixels(k,z,B,F,de.convert(Ge),de.convert(Ue),le)}finally{let Pe=C!==null?He.get(C).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(T,k,z=0){let B=Math.pow(2,-z),F=Math.floor(k.image.width*B),le=Math.floor(k.image.height*B);R.setTexture2D(k,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,T.x,T.y,F,le),ge.unbindTexture()},this.copyTextureToTexture=function(T,k,z,B=0){let F=k.image.width,le=k.image.height,xe=de.convert(z.format),Re=de.convert(z.type);R.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment),k.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,T.x,T.y,F,le,xe,Re,k.image.data):k.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,xe,k.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,T.x,T.y,xe,Re,k.image),B===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,k,z,B,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let le=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,Pe=de.convert(B.format),Ge=de.convert(B.type),Ue;if(B.isData3DTexture)R.setTexture3D(B,0),Ue=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)R.setTexture2DArray(B,0),Ue=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let Fe=U.getParameter(U.UNPACK_ROW_LENGTH),St=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mn=U.getParameter(U.UNPACK_SKIP_PIXELS),Bt=U.getParameter(U.UNPACK_SKIP_ROWS),Mi=U.getParameter(U.UNPACK_SKIP_IMAGES),vt=z.isCompressedTexture?z.mipmaps[F]:z.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,T.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,T.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?U.texSubImage3D(Ue,F,k.x,k.y,k.z,le,xe,Re,Pe,Ge,vt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ue,F,k.x,k.y,k.z,le,xe,Re,Pe,vt.data)):U.texSubImage3D(Ue,F,k.x,k.y,k.z,le,xe,Re,Pe,Ge,vt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Mi),F===0&&B.generateMipmaps&&U.generateMipmap(Ue),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){S=0,A=0,C=null,ge.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Th?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===qo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?xs:ep}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xs?tt:Nt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ch=class extends Jr{};ch.prototype.isWebGL1Renderer=!0;var Ln=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$l,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new M,Qr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var wf=new M,Sf=new We,Ef=new We,f_=new M,Tf=new me,lo=new M,Fl=new Tn,Af=new me,Ol=new Ms,Lo=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=od,this.bindMatrix=new me,this.bindMatrixInverse=new me,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingBox.expandByPoint(lo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingSphere.expandByPoint(lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(i),e.ray.intersectsSphere(Fl)!==!1&&(Af.copy(i).invert(),Ol.copy(e.ray).applyMatrix4(Af),!(this.boundingBox!==null&&Ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===od?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===H0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Sf.fromBufferAttribute(i.attributes.skinIndex,e),Ef.fromBufferAttribute(i.attributes.skinWeight,e),wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Ef.getComponent(r);if(a!==0){let o=Sf.getComponent(r);Tf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(f_.copy(wf).applyMatrix4(Tf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ea=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},lh=class extends Kt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=kt,h=kt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rf=new me,p_=new me,Po=class s{constructor(e=[],t=[]){this.uuid=ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new me;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:p_;Rf.multiplyMatrices(o,t[r]),Rf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new lh(t,e,e,an,Li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ea),this.bones.push(a),this.boneInverses.push(new me().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},vn=class extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new me,Cf=new me,ho=[],Lf=new On,m_=new me,Or=new Be,zr=new Tn,cn=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),Lf.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Lf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),zr.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),e.ray.intersectsSphere(zr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ys),Cf.multiplyMatrices(n,Ys),Or.matrixWorld=Cf,Or.raycast(e,ho);for(let a=0,o=ho.length;a<o;a++){let c=ho[a];c.instanceId=r,c.object=this,t.push(c)}ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ta=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pf=new M,kf=new M,If=new me,zl=new Ms,uo=new Tn,hr=class extends yt{constructor(e=new mt,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Pf.fromBufferAttribute(t,i-1),kf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pf.distanceTo(kf);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;If.copy(i).invert(),zl.copy(e.ray).applyMatrix4(If);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new M,h=new M,u=new M,d=new M,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=p,y=x-1;v<y;v+=f){let S=m.getX(v),A=m.getX(v+1);if(l.fromBufferAttribute(g,S),h.fromBufferAttribute(g,A),zl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=p,y=x-1;v<y;v+=f){if(l.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),zl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Df=new M,Nf=new M,ko=class extends hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Df.fromBufferAttribute(t,i),Nf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Df.distanceTo(Nf);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Io=class extends hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},na=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Uf=new me,hh=new Ms,fo=new Tn,po=new M,Do=class extends yt{constructor(e=new mt,t=new na){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;Uf.copy(i).invert(),hh.copy(e.ray).applyMatrix4(Uf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=l.getX(m);po.fromBufferAttribute(u,g),Ff(po,g,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)po.fromBufferAttribute(u,m),Ff(po,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ff(s,e,t,n,i,r,a){let o=hh.distanceSqToPoint(s);if(o<t){let c=new M;hh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var No=class extends Kt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ur=class s extends mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new M,h=new pe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ln=class s extends mt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function x(){let y=new M,S=new M,A=0,C=(t-e)/n;for(let I=0;I<=r;I++){let _=[],E=I/r,D=E*(t-e)+e;for(let G=0;G<=i;G++){let K=G/i,P=K*c+o,N=Math.sin(P),H=Math.cos(P);S.x=D*N,S.y=-E*n+g,S.z=D*H,u.push(S.x,S.y,S.z),y.set(N,C,H).normalize(),d.push(y.x,y.y,y.z),f.push(K,1-E),_.push(m++)}b.push(_)}for(let I=0;I<i;I++)for(let _=0;_<r;_++){let E=b[_][I],D=b[_+1][I],G=b[_+1][I+1],K=b[_][I+1];h.push(E,D,K),h.push(D,G,K),A+=6}l.addGroup(p,A,0),p+=A}function v(y){let S=m,A=new pe,C=new M,I=0,_=y===!0?e:t,E=y===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;let D=m;for(let G=0;G<=i;G++){let P=G/i*c+o,N=Math.cos(P),H=Math.sin(P);C.x=_*H,C.y=g*E,C.z=_*N,u.push(C.x,C.y,C.z),d.push(0,E,0),A.x=N*.5+.5,A.y=H*.5*E+.5,f.push(A.x,A.y),m++}for(let G=0;G<i;G++){let K=S+G,P=D+G;y===!0?h.push(P,P+1,K):h.push(P+1,P,K),I+=3}l.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Uo=class s extends ln{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Fo=class s extends mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new M,d=new M,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let x=[],v=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let A=S/t;u.x=-e*Math.cos(i+A*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+A*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(A+y,1-v),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let v=h[p][x+1],y=h[p][x],S=h[p+1][x],A=h[p+1][x+1];(p!==0||a>0)&&f.push(v,y,A),(p!==n-1||c<Math.PI)&&f.push(y,S,A)}this.setIndex(f),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xt=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tp,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zn=class extends Xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function mo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function g_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function b_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Of(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function up(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Ki=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uh=class extends Ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Id,endingEnd:Id}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dd:r=e,o=2*t-n;break;case Nd:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dd:a=e,c=2*n-t;break;case Nd:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*b+.5*m,y=f*g-f*b;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+x*a[l+S]+v*a[c+S]+y*a[u+S];return r}},dh=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},fh=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case _s:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return _s;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&g_(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=_s;var Ji=class extends Bn{};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ar;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Bn{};Oo.prototype.ValueTypeName="color";var ki=class extends Bn{};ki.prototype.ValueTypeName="number";var ph=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)pt.slerpFlat(r,0,a,l-o,a,l,c);return r}},pi=class extends Bn{InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.DefaultInterpolation=_s;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Bn{};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ar;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Bn{};Ii.prototype.ValueTypeName="vector";var zo=class{constructor(e,t=-1,n,i=K0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ei(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(x_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=b_(c);c=Of(c,1,h),l=Of(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ki(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,b){if(f.length!==0){let g=[],p=[];up(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(let b in f){let g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){let v=d[m];g.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new ki(".morphTargetInfluence["+b+"]",g,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Ii,f+".position",d,"pos",i),n(pi,f+".quaternion",d,"rot",i),n(Ii,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function v_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return Oo;case"quaternion":return pi;case"bool":case"boolean":return Ji;case"string":return Zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function x_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=v_(s.type);if(s.times===void 0){let t=[],n=[];up(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Wi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},mh=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},y_=new mh,Di=class{constructor(e){this.manager=e!==void 0?e:y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},gh=class extends Error{constructor(e,t){super(e),this.response=t}},ia=class extends Di{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:i});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ri[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:v,value:y})=>{if(v)p.close();else{b+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let A=0,C=h.length;A<C;A++){let I=h[A];I.onProgress&&I.onProgress(S)}p.enqueue(y),x()}})}}});return new Response(g)}else throw new gh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Wi.add(e,l);let h=Ri[e];delete Ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ri[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var bh=class extends Di{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=qr("img");function c(){h(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var mi=class extends Di{constructor(e){super(e)}load(e,t,n,i){let r=new Kt,a=new bh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},dr=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Bo=class extends dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Bl=new me,zf=new M,Bf=new M,sa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(zf),Bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bf),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vh=class extends sa{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=or*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ho=class extends dr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Hf=new me,Br=new M,Hl=new M,xh=class extends sa{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),n.position.copy(Br),Hl.copy(n.position),Hl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hl),n.updateMatrixWorld(),i.makeTranslation(-Br.x,-Br.y,-Br.z),Hf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hf)}},fr=class extends dr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},yh=class extends sa{constructor(){super(new Cn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Qi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Vo=class extends mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Go=class extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,c),r.manager.itemStart(e)}};var Lh="\\[\\]\\.:\\/",__=new RegExp("["+Lh+"]","g"),Ph="[^"+Lh+"]",M_="[^"+Lh.replace("\\.","")+"]",w_=/((?:WC+[\/:])*)/.source.replace("WC",Ph),S_=/(WCOD+)?/.source.replace("WCOD",M_),E_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),T_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),A_=new RegExp("^"+w_+S_+E_+T_+"$"),R_=["material","materials","bones","map"],_h=class{constructor(e,t,n){let i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(__,"")}static parseTrackName(e){let t=A_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);R_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=_h;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yw=new Float32Array(1);var Wo=class{constructor(e,t,n=0,i=1/0){this.ray=new Ms(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Mh(e,this,n,t),n.sort(Vf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Mh(e[i],this,n,t);return n.sort(Vf),n}};function Vf(s,e){return s.distance-e.distance}function Mh(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)Mh(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);var C_=`
#ifndef NOISE_GLSL
#define NOISE_GLSL
float fhash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float fnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(fhash(i), fhash(i + vec2(1, 0)), u.x), mix(fhash(i + vec2(0, 1)), fhash(i + vec2(1, 1)), u.x), u.y); }
float ffbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++){ s += a * fnoise(p); p = p * 2.03 + 11.7; a *= .5; } return s; }
#endif
`,kh=`
const float R_EFF = 7.323e6;
vec3 curveDrop(vec3 w){ vec2 d = w.xz - cameraPosition.xz; w.y -= dot(d, d) / (2.0 * R_EFF); return w; }
`,ws=`
uniform vec3 uSunDirW; uniform vec3 uSunCol; uniform float uCloudT; uniform float uCover; uniform float uNight; uniform float uDusk;
uniform float uHazeB; uniform float uHazeH; uniform float uHazeTint;
${C_}
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
`;function dp(s,e){return{uSunDirW:{value:s},uSunCol:{value:e},uCloudT:{value:0},uCover:{value:.28},uNight:{value:0},uDusk:{value:0},uHazeB:{value:11e-5},uHazeH:{value:650},uHazeTint:{value:1}}}function fp(s){let e=new gt({side:on,depthWrite:!1,depthTest:!1,uniforms:s,vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`${ws}
varying vec3 vD; void main(){ gl_FragColor = vec4(skyCol(normalize(vD), true), 1.0); }`}),t=new Be(new Fo(9e3,64,32),e);return t.frustumCulled=!1,t.renderOrder=-1,t}function pp(s,e,{curve:t=!1}={}){let n=s.onBeforeCompile;s.onBeforeCompile=(r,a)=>{n?.call(s,r,a),Object.assign(r.uniforms,e),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vHzW;
${t?kh:""}`).replace("#include <project_vertex>",t?`
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
${ws}`).replace("#include <fog_fragment>","gl_FragColor.rgb = applyHaze(gl_FragColor.rgb, vHzW);")};let i=s.customProgramCacheKey?.bind(s);return s.customProgramCacheKey=()=>(i?i():"")+(t?"|hzc":"|hz"),s.fog=!0,s}function aa(s,e,t,n=new M){let i=he.degToRad(s),r=he.degToRad(-23.44)*Math.cos(2*Math.PI/365*(e+10)),a=he.degToRad(15*(t-12)),o=Math.sin(i)*Math.sin(r)+Math.cos(i)*Math.cos(r)*Math.cos(a),c=Math.asin(o),l=(Math.sin(r)-Math.sin(c)*Math.sin(i))/(Math.cos(c)*Math.cos(i)),h=Math.acos(he.clamp(l,-1,1));return a>0&&(h=2*Math.PI-h),n.set(Math.cos(c)*Math.sin(h),Math.sin(c),-Math.cos(c)*Math.cos(h))}var mp=16,gr=9.81;function L_(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ih({wind:s=6,windDir:e=.6,swellDir:t=1.4,swellH:n=.35,seed:i=11}={}){let r=L_(i),a=.877*gr/Math.max(s,.5),o=[];for(let m=0;m<2;m++){let b=[72,51][m],g=2*Math.PI/b,p=n/2*[.8,.55][m],x=t+[0,.18][m];o.push({dx:Math.cos(x),dz:Math.sin(x),k:g,w:Math.sqrt(gr*g),a:p,ph:r()*6.283})}let c=mp-2,l=a*.75,h=a*3.2;for(let m=0;m<c;m++){let b=(m+.5)/c,g=l*Math.pow(h/l,b),p=g*Math.log(h/l)/c,x=.0081*gr*gr/Math.pow(g,5)*Math.exp(-.74*Math.pow(gr/(s*g),4)),v=Math.sqrt(2*x*p),y=0;for(let C=0;C<3;C++)y+=r()-.5;let S=e+y*(.9+.6*b),A=g*g/gr;o.push({dx:Math.cos(S),dz:Math.sin(S),k:A,w:g,a:v,ph:r()*6.283})}let u=o.reduce((m,b)=>m+b.k*b.a,0),d=Math.min(.8,.4/Math.max(u,1e-6));for(let m of o)m.q=d;let f=4*Math.sqrt(o.reduce((m,b)=>m+b.a*b.a/2,0));return{comps:o,wind:s,windDir:e,hs:f,wp:a}}function gp(s){let e=s.comps.map(n=>new We(n.dx,n.dz,n.k,n.w)),t=s.comps.map(n=>new We(n.a,n.q,n.ph,0));return{uWA:{value:e},uWB:{value:t},uSeaK:{value:1}}}function bp(s,e){e.comps.forEach((t,n)=>{s.uWA.value[n].set(t.dx,t.dz,t.k,t.w),s.uWB.value[n].set(t.a,t.q,t.ph,0)})}var oa=`
#define NW ${mp}
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
`;function Ko(s,e,t,n,i=1){let r=e,a=t;for(let c=0;c<3;c++){let l=0,h=0;for(let u of s.comps){let d=u.k*(u.dx*r+u.dz*a)-u.w*n+u.ph,f=u.a*i*u.q*Math.cos(d);l+=u.dx*f,h+=u.dz*f}r=e-l,a=t-h}let o=0;for(let c of s.comps)o+=c.a*i*Math.sin(c.k*(c.dx*r+c.dz*a)-c.w*n+c.ph);return o}var vp=`
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
`;function Jo(s){return s-Math.floor(s)}function Zo(s,e){let t=Jo(s*.1031),n=Jo(e*.1031),i=Jo(s*.1031),r=t*(n+33.33)+n*(i+33.33)+i*(t+33.33);return t+=r,n+=r,i+=r,Jo((t+n)*i)}function Dh(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r),c=Zo(t,n),l=Zo(t+1,n),h=Zo(t,n+1),u=Zo(t+1,n+1);return(c+(l-c)*a)*(1-o)+(h+(u-h)*a)*o}var P_=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},Qo=class{constructor({speed:e=6,dir:t=.6,gust:n=1}={}){this.uniforms={uWind:{value:new pe(Math.cos(t),Math.sin(t))},uWindS:{value:e},uGustK:{value:n}},this.speed=e,this.dir=t}set(e,t,n=this.uniforms.uGustK.value){this.speed=e,this.dir=t,this.uniforms.uWind.value.set(Math.cos(t),Math.sin(t)),this.uniforms.uWindS.value=e,this.uniforms.uGustK.value=n}gust(e,t,n){let i=this.uniforms.uWind.value,r=this.uniforms.uWindS.value,a=e*i.x+t*i.y-r*.8*n,o=-e*i.y+t*i.x,c=a*.0045,l=o*.0022,h=Dh(c,l)*.55+Dh(c*2.3+7.1,l*2.3+7.1)*.3+Dh(c*5.1+3.3,l*5.1+3.3)*.15;return Math.min(1,Math.max(0,P_(.32,.72,h)*this.uniforms.uGustK.value+.12))}at(e,t,n,i=new pe){let r=this.gust(e,t,n),a=this.speed*(.7+.7*r);return i.copy(this.uniforms.uWind.value).multiplyScalar(a)}};var k_="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Ni=512,vr=2.2,ec=Ni*vr,Pn=32,br=8,I_=9,tc=12,gi=4;function D_(){let s=r=>{let a=Math.abs(r);if(a<8){let d=r*r;return(57568490574+d*(-13362590354+d*(6516196407e-1+d*(-1121442418e-2+d*(77392.33017+d*-184.9052456)))))/(57568490411+d*(1029532985+d*(9494680718e-3+d*(59272.64853+d*(267.8532712+d)))))}let o=8/a,c=o*o,l=a-.785398164,h=1+c*(-.001098628627+c*(2734510407e-14+c*(-2073370639e-15+c*2093887211e-16))),u=-.01562499995+c*(.0001430488765+c*(-6911147651e-15+c*(7621095161e-16-c*934935152e-16)));return Math.sqrt(.636619772/a)*(Math.cos(l)*h-o*Math.sin(l)*u)},n=0;for(let r=1;r<=1e4;r++){let a=r*.001;n+=a*a*Math.exp(-1*a*a)}let i=[];for(let r=0;r<=gi;r++)for(let a=0;a<=gi;a++){let o=Math.hypot(a,r),c=0;for(let l=1;l<=1e4;l++){let h=l*.001;c+=h*h*Math.exp(-1*h*h)*s(h*o)}i.push(o>gi+.5?0:c/n)}return i}var nc=class{constructor(e,t){this.r=e;let n={type:ti,format:an,minFilter:xt,magFilter:xt,depthBuffer:!1};this.rt=[new Gt(Ni,Ni,n),new Gt(Ni,Ni,n)],this.cur=0,this.origin=new pe(0,0),this.hull=[].concat(...t.map(a=>this.hullTable(a)));let i=()=>new pe,r=()=>new We;this.quad=new Be(new Rn(2,2)),this.scene=new Ln,this.scene.add(this.quad),this.cam=new Cn(-1,1,1,-1,0,1),this.sim=new gt({vertexShader:k_,depthTest:!1,depthWrite:!1,uniforms:{uS:{value:null},uTexel:{value:1/Ni},uOrigin:{value:this.origin},uSize:{value:ec},uDt:{value:1/60},uShipP:{value:Array.from({length:br},r)},uShipF:{value:Array.from({length:br},r)},uNS:{value:0},uHull:{value:this.hull},uShift:{value:new pe},uTime:{value:0},uK:{value:D_()},uGdt2:{value:0},uA:{value:0},uDrop:{value:Array.from({length:tc},r)},uND:{value:0}},fragmentShader:`
        uniform sampler2D uS; uniform float uTexel, uSize, uDt, uTime;
        uniform vec2 uOrigin, uShift;
        // per ship: P = (x, z, heave, sub), F = (fwd.x, fwd.z, speed, kind)
        uniform vec4 uShipP[${br}], uShipF[${br}]; uniform int uNS;
        uniform vec2 uHull[${Pn*I_}];
        uniform vec4 uDrop[${tc}]; uniform int uND;
        uniform float uK[${(gi+1)*(gi+1)}]; uniform float uGdt2, uA;
        varying vec2 vUv;
        float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
        float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
          return mix(mix(h12(i), h12(i + vec2(1, 0)), u.x), mix(h12(i + vec2(0, 1)), h12(i + vec2(1, 1)), u.x), u.y); }
        // signed distance (m) from the waterline outline of the hull, in ship-local (f forward, x port)
        float hullSDF(vec2 q, int k){
          int o = k * ${Pn};
          float f = q.x, x = abs(q.y);
          vec2 h0 = uHull[o], h1 = uHull[o + ${Pn-1}];
          if (f < h0.x || f > h1.x) {
            float e = f < h0.x ? h0.x - f : f - h1.x;
            return max(e, x - (f < h0.x ? h0.y : h1.y));
          }
          float w = 0.0;
          for (int i = 0; i < ${Pn-1}; i++){
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
          for (int si = 0; si < ${br}; si++){
            if (si >= uNS) break;
            vec4 P = uShipP[si], Fw = uShipF[si];
            vec2 d = w - P.xy;
            int kind = int(Fw.w + 0.5);
            float reach = uHull[kind * ${Pn} + ${Pn-1}].x + 6.0;
            if (dot(d, d) > reach * reach * 1.6) continue;
            vec2 fwd = Fw.xy, side = vec2(fwd.y, -fwd.x);   // side points to port in three.js axes (x left)
            vec2 q = vec2(dot(d, fwd), dot(d, side));
            float sdf = hullSDF(q, kind);
            float spd = Fw.z, sub = P.w, heave = P.z;
            float hb = uHull[kind * ${Pn} + ${Pn/2}].y;          // half-breadth amidships
            // inside the waterline the hull holds the surface down (deeper with speed: the bow wave and stern trough)
            float ins = smoothstep(2.0, -2.0, sdf) * sub;
            float press = -min(0.03 * spd, 0.5) - heave * 0.5;
            hn = mix(hn, press, ins * 0.25 * smoothstep(0.5, 3.0, spd + abs(heave) * 3.0));
            inside = max(inside, ins);
            // foam: a thin white edge along the sides, the bow wave, and the screws' wash astern
            float band = exp(-max(sdf, 0.0) / (0.35 * hb + 1.0)) * smoothstep(-0.5, 0.8, sdf);
            float bowF = uHull[kind * ${Pn} + ${Pn-1}].x, sternF = uHull[kind * ${Pn}].x;
            float L = bowF - sternF;
            // the bow wave: a white roll along both sides of the forefoot, breaking outward (not ahead of the stem)
            float bow = smoothstep(L * 0.22, 0.0, bowF - q.x) * step(q.x, bowF - 1.0) * exp(-max(sdf, 0.0) / (0.5 * hb + 1.0)) * smoothstep(-0.5, 1.0, sdf);
            float stern = smoothstep(hb * 1.5, hb * 0.2, length((q - vec2(sternF - hb * 0.6, 0.0)) * vec2(0.6, 1.0))) * step(q.x, sternF + L * 0.06);
            float n = vn(w * 0.6 + uTime * 0.7) * vn(w * 0.17 - uTime * 0.3);
            float sp = smoothstep(1.0, 9.0, spd);
            make += (band * (0.3 + 0.7 * n) * 0.35 + bow * 1.2 + stern * n * n * 1.6) * sp * sub;
          }
          // balls landing: a pit that rings out, and foam
          for (int di = 0; di < ${tc}; di++){
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
        }`});for(let a of this.rt)e.setRenderTarget(a),e.clear();e.setRenderTarget(null),this.acc=0,this.t=0,this.uniforms={uWake:{value:this.rt[0].texture},uWakeO:{value:this.origin},uWakeS:{value:ec},uWakeTexel:{value:1/Ni}}}reset(e,t){for(let n of this.rt)this.r.setRenderTarget(n),this.r.setClearColor(0,0),this.r.clear();this.r.setRenderTarget(null),this.origin.set(e,t)}hullTable(e){let t=[],n=i=>e[Math.round(i*(e.length-1)/(Pn-1))];for(let i=0;i<Pn;i++){let[r,a]=n(i),o=0;for(let c=0;c+1<a.length;c++){let[l,h]=a[c],[u,d]=a[c+1];h<=0&&d>=0&&(o=l+(u-l)*(0-h)/Math.max(d-h,1e-6))}a[0][1]>0&&(o=.05),t.push(new pe(r,o))}return t}step(e,t,n,i=[]){let r=this.sim.uniforms;this.pending?.length&&(i=this.pending.concat(i),this.pending=null);let a=t.x-this.origin.x,o=t.z-this.origin.y,c=0,l=0;Math.abs(a)>ec*.12&&(c=Math.round(a/vr)),Math.abs(o)>ec*.12&&(l=Math.round(o/vr)),this.acc=Math.min(this.acc+e,.1);let h=1/60;r.uGdt2.value=9.81/vr*h*h,r.uA.value=.18*h,r.uDt.value=h;let u=Math.min(n.length,br);for(let m=0;m<u;m++){let b=n[m];r.uShipP.value[m].set(b.pos.x,b.pos.z,b.heave,b.sub??1),r.uShipF.value[m].set(b.fwd.x,b.fwd.y,b.speed,b.kind)}r.uNS.value=u;let d=Math.min(i.length,tc);for(let m=0;m<d;m++)r.uDrop.value[m].set(i[m].x,i[m].z,i[m].r,i[m].h);let f=!0;for(;this.acc>=h;)this.acc-=h,this.t+=h,r.uTime.value=this.t,f&&(c||l)?(r.uShift.value.set(c/Ni,l/Ni),this.origin.x+=c*vr,this.origin.y+=l*vr):r.uShift.value.set(0,0),r.uND.value=f?d:0,f=!1,r.uS.value=this.rt[this.cur].texture,this.quad.material=this.sim,this.r.setRenderTarget(this.rt[1-this.cur]),this.r.render(this.scene,this.cam),this.cur=1-this.cur;f&&(this.pending=i),this.r.setRenderTarget(null),this.uniforms.uWake.value=this.rt[this.cur].texture}},Nh=`
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
`;var xp=`
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
`;var N_=`
${oa}
${Nh}
${kh}
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
}`,U_=`
uniform float uTime;
${ws}
${oa}
${Nh}
${vp}
${xp}
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
}`;function F_(s,e,t,n){let i=[],r=[],a=[],o=[0],c=Math.pow(n/t,1/(s-1));for(let h=0;h<s;h++)o.push(t*Math.pow(c,h));for(let h=0;h<o.length;h++){let u=o[h],d=Math.max((o[h+1]??u*c)-u,2*Math.PI*Math.max(u,t)/e);for(let f=0;f<e;f++){let m=f/e*Math.PI*2;i.push(u*Math.cos(m),0,u*Math.sin(m)),r.push(d)}}for(let h=0;h<o.length-1;h++)for(let u=0;u<e;u++){let d=h*e+u,f=h*e+(u+1)%e,m=(h+1)*e+u,b=(h+1)*e+(u+1)%e;a.push(d,m,f,f,m,b)}let l=new mt;return l.setAttribute("position",new Je(i,3)),l.setAttribute("aFw",new Je(r,1)),l.setIndex(a),l}function ic(s,e){let t=o=>o-Math.floor(o),n=t(s*.1031),i=t(e*.1031),r=t(s*.1031),a=n*(i+33.33)+i*(r+33.33)+r*(n+33.33);return n+=a,i+=a,r+=a,t((n+i)*r)}function O_(s,e=[],t=[]){let n=[];for(let a=0;a<40;a++){let o=6*Math.pow(.855,a)*(.8+.4*ic(a,9.1)),c=s+(ic(a,3.1)-.5)*2.8,l=2*Math.PI/o,h=Math.sqrt(9.81*l+.074/1e3*l*l*l),u=(f,m,b)=>{let g=Math.min(1,Math.max(0,(b-f)/(m-f)));return g*g*(3-2*g)},d=.11*(.5+ic(a,7.7))*(.45+.55*u(1.2,.05,o));n.push({dx:Math.cos(c),dz:Math.sin(c),k:l,om:h,amp:d/l,ph:ic(a,1.3)*6.2831,lam:o})}n.sort((a,o)=>o.lam-a.lam);let i=0,r=new Array(40);for(let a=39;a>=0;a--)i+=(n[a].amp*n[a].k)**2*.5,r[a]=i;return n.forEach((a,o)=>{(e[o]||=new We).set(a.dx,a.dz,a.k,a.om),(t[o]||=new We).set(a.amp,a.ph,r[o],a.lam)}),{A:e,B:t}}function yp({skyU:s,seaU:e,wakeU:t,windU:n,tideU:i,reflTarget:r,refrTarget:a,shipShadowU:o,timeU:c,quality:l}){let h=Object.assign({},s,e,t,n,i,o,{uTime:c,uCenter:{value:new M},uRefl:{value:r.texture},uRefr:{value:a.texture},uReflTexel:{value:new pe(1/r.width,1/r.height)},uSunIrr:{value:s.uSunCol.value},uRA:{value:[]},uRB:{value:[]},uLayers:{value:new We(1,1,1,0)}}),u=n.uWind.value;O_(Math.atan2(u.y,u.x),h.uRA.value,h.uRB.value);let d=F_(l.oceanRings,l.oceanSeg,.35,16e3),f=new gt({vertexShader:N_,fragmentShader:U_,uniforms:h,side:Yt}),m=new Be(d,f);m.frustumCulled=!1;function b(g){h.uCenter.value.set(Math.round(g.position.x),0,Math.round(g.position.z))}return{mesh:m,uniforms:h,update:b}}function _p(s){let e=new Gt(s,s,{depthBuffer:!0,stencilBuffer:!1}),t=new Yi(s,s,Fn);return t.compareFunction=jo,t.magFilter=t.minFilter=xt,e.depthTexture=t,e}var sc=class{constructor(e,t,{landSize:n=6e3,landRes:i=4096,shipSize:r=64,shipRes:a=2048}={}){this.r=e,this.sun=t,this.landRT=_p(i),this.shipRT=_p(a);let o=n/2,c=r/2;this.shipSize=r,this.shipRes=a,this.landCam=new Cn(-o,o,o,-o,10,9e3),this.shipCam=new Cn(-c,c,c,-c,1,400),this.landScene=new Ln,this.shipScene=new Ln,this.uniforms={uLandSM:{value:this.landRT.depthTexture},uLandVP:{value:new me},uLandTexel:{value:1/i},uShipSM:{value:this.shipRT.depthTexture},uShipVP:{value:new me},uShipTexel:{value:1/a},uShadowOn:{value:1},uMirror:{value:1}},this.depthMat=new Kr}aim(e,t,n){e.position.copy(t).addScaledVector(this.sun,n),e.up.set(0,1,0),e.lookAt(t),e.updateMatrixWorld(),e.updateProjectionMatrix()}addCaster(e,{ship:t=!1}={}){let n=e.userData.depthMat??this.depthMat,i=e.isInstancedMesh?new cn(e.geometry,n,e.count):new Be(e.geometry,n);return e.isInstancedMesh&&(i.instanceMatrix=e.instanceMatrix,i.count=e.count),i.matrixAutoUpdate=!1,i.frustumCulled=!1,i.userData.src=e,(t?this.shipScene:this.landScene).add(i),i}sync(e){for(let t of e.children){let n=t.userData.src;n&&(t.matrix.copy(n.matrixWorld),t.matrixWorld.copy(n.matrixWorld),n.isInstancedMesh&&(t.count=n.count),t.visible=n.visible)}}renderLand(e){this.aim(this.landCam,e,4e3),this.sync(this.landScene),this._draw(this.landRT,this.landScene,this.landCam),this.uniforms.uLandVP.value.multiplyMatrices(this.landCam.projectionMatrix,this.landCam.matrixWorldInverse)}renderShip(e){this.aim(this.shipCam,e,200);let t=this.shipSize/this.shipRes,n=e.clone(),i=this.shipCam.matrixWorld.elements,r=new M(i[0],i[1],i[2]),a=new M(i[4],i[5],i[6]),o=r.dot(n),c=a.dot(n);n.addScaledVector(r,Math.round(o/t)*t-o).addScaledVector(a,Math.round(c/t)*t-c),this.aim(this.shipCam,n,200),this.sync(this.shipScene),this._draw(this.shipRT,this.shipScene,this.shipCam),this.uniforms.uShipVP.value.multiplyMatrices(this.shipCam.projectionMatrix,this.shipCam.matrixWorldInverse)}_draw(e,t,n){let i=this.r,r=i.getRenderTarget(),a=i.autoClear;i.setRenderTarget(e),i.autoClear=!0,i.clear(!0,!0,!1),i.render(t,n),i.setRenderTarget(r),i.autoClear=a}},z_=`
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
`;function Mp(s,e){let t=s.onBeforeCompile;s.onBeforeCompile=(i,r)=>{t?.call(s,i,r),Object.assign(i.uniforms,e.uniforms),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vShW; varying vec3 vShN; uniform float uMirror;`).replace("#include <project_vertex>",`#include <project_vertex>
        { vec4 swp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            swp = instanceMatrix * swp;
          #endif
          vShW = (modelMatrix * swp).xyz;
          vShN = normalize(inverseTransformDirection(transformedNormal, viewMatrix));
          vShW.y *= uMirror; vShN.y *= uMirror; }`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vShW; varying vec3 vShN;
${z_}`).replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
        float shadowF = sunShadowAt(vShW, normalize(vShN));
        reflectedLight.directDiffuse *= shadowF; reflectedLight.directSpecular *= shadowF;`)};let n=s.customProgramCacheKey?.bind(s);return s.customProgramCacheKey=()=>(n?n():"")+"|sh",s}var rc="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";function Uh(s,e,t=0,n=!1){let i=new Gt(s,e,{type:ti,format:an,samples:t,minFilter:xt,magFilter:xt,depthBuffer:t>0||n});return n&&(i.depthTexture=new Yi(s,e,Fn)),i}var ac=class{constructor(e,t,n,{samples:i=4,levels:r=6}={}){this.samples=i,this.r=e,this.levels=r,this.quad=new Be(new Rn(2,2)),this.quad.frustumCulled=!1,this.qs=new Ln,this.qs.add(this.quad),this.cam=new Cn(-1,1,1,-1,0,1),this.down=new gt({vertexShader:rc,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uTexel:{value:new pe},uThresh:{value:0},uFirst:{value:0}},fragmentShader:`
        uniform sampler2D uTex; uniform vec2 uTexel; uniform float uThresh; uniform float uFirst; varying vec2 vUv;
        vec3 tap(vec2 o){ vec3 c = min(texture2D(uTex, vUv + o * uTexel).rgb, vec3(80.0));
          if (uFirst > 0.5) c = max(c - uThresh, 0.0); return c; }
        void main(){
          vec3 c = tap(vec2(0.0)) * 4.0 + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));
          gl_FragColor = vec4(c / 8.0, 1.0);
        }`}),this.up=new gt({vertexShader:rc,depthTest:!1,depthWrite:!1,blending:nr,uniforms:{uTex:{value:null},uTexel:{value:new pe},uW:{value:1}},fragmentShader:`
        uniform sampler2D uTex; uniform vec2 uTexel; uniform float uW; varying vec2 vUv;
        void main(){
          vec3 c = vec3(0.0);
          c += texture2D(uTex, vUv + vec2(-2.0, 0.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(2.0, 0.0) * uTexel).rgb;
          c += texture2D(uTex, vUv + vec2(0.0, -2.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(0.0, 2.0) * uTexel).rgb;
          c += (texture2D(uTex, vUv + vec2(-1.0, -1.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(1.0, -1.0) * uTexel).rgb
              + texture2D(uTex, vUv + vec2(-1.0, 1.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(1.0, 1.0) * uTexel).rgb) * 2.0;
          gl_FragColor = vec4(c / 12.0 * uW, 1.0);
        }`}),this.copy=new gt({vertexShader:rc,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uDepth:{value:null},uNear:{value:.3},uFar:{value:9e3}},fragmentShader:`
        uniform sampler2D uTex, uDepth; uniform float uNear, uFar; varying vec2 vUv;
        void main(){
          float z = texture2D(uDepth, vUv).r;
          float ndc = z * 2.0 - 1.0;
          float lin = 2.0 * uNear * uFar / (uFar + uNear - ndc * (uFar - uNear));
          gl_FragColor = vec4(texture2D(uTex, vUv).rgb, lin);
        }`}),this.final=new gt({vertexShader:rc,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uBloom:{value:null},uExposure:{value:1},uBloomK:{value:.12},uT:{value:0},uVignette:{value:.45},uWarm:{value:new M(1.1,1,.84)},uCool:{value:new M(1,.99,.98)},uSat:{value:1.08},uContrast:{value:1.12},uUnder:{value:0}},fragmentShader:`
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
        }`}),this.setSize(t,n,i)}setSize(e,t,n=this.samples){this.w=e,this.h=t,this.scene?.dispose(),(this.chain||[]).forEach(a=>a.dispose()),this.scene=Uh(e,t,n,!0),this.refr?.dispose(),this.refr=Uh(e>>1,t>>1),this.chain=[];let i=e,r=t;for(let a=0;a<this.levels;a++)i=Math.max(2,i>>1),r=Math.max(2,r>>1),this.chain.push(Uh(i,r))}pass(e,t,n){e.uniforms.uTex.value=t.texture??t,this.quad.material=e,this.r.setRenderTarget(n),this.r.render(this.qs,this.cam)}render(e,t,{exposure:n=1,t:i=0,thresh:r=1.2,overlay:a=null,under:o=0}={}){let c=this.r;if(c.setRenderTarget(this.scene),c.render(e,t),a){let d=this.copy.uniforms;d.uDepth.value=this.scene.depthTexture,d.uNear.value=t.near,d.uFar.value=t.far,this.pass(this.copy,this.scene,this.refr),c.setRenderTarget(this.scene);let f=c.autoClear;c.autoClear=!1,c.render(a,t),c.autoClear=f}let l=this.scene;for(let d=0;d<this.levels;d++){let f=this.chain[d];this.down.uniforms.uTexel.value.set(1/l.width,1/l.height),this.down.uniforms.uFirst.value=d===0?1:0,this.down.uniforms.uThresh.value=r,this.pass(this.down,l,f),l=f}let h=c.autoClear;c.autoClear=!1;for(let d=this.levels-1;d>0;d--){let f=this.chain[d],m=this.chain[d-1];this.up.uniforms.uTexel.value.set(1/f.width,1/f.height),this.up.uniforms.uW.value=1,this.pass(this.up,f,m)}c.autoClear=h;let u=this.final.uniforms;u.uBloom.value=this.chain[0].texture,u.uExposure.value=n,u.uT.value=i,u.uUnder.value=o,this.pass(this.final,this.scene,null)}};var wp=new URLSearchParams(location.search).get("q"),Sp=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,B_=Math.min(screen.width,screen.height)<820,xr=wp?wp==="low":Sp&&B_||/iPhone|Android.+Mobile/.test(navigator.userAgent),oc=Sp;function Fh(s,e){if(e===Qf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ra||e===$o){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ra)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ns=class extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Qi.extractUrlBase(e);a=Qi.resolveURL(l,this.path)}else a=Qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ia(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Cp){try{a[Ke.KHR_BINARY_GLTF]=new su(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new uu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new Vh;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new ru(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new au;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new ou;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function H_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hh=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ye(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new fr(h),l.distance=u;break;case"spot":l=new Ho(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ts(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Vh=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){let i=[];e.color=new ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(i)}},Gh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(o,o)}return Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Nt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(o[0],o[1],o[2],Nt),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Kh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(o[0],o[1],o[2],Nt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,tt)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},eu=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},tu=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},nu=class{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},iu=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let b=new me,g=new M,p=new pt,x=new M(1,1,1),v=new cn(m.geometry,m.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,b.compose(g,p,x));for(let y in c)if(y==="_COLOR_0"){let S=c[y];v.instanceColor=new vn(S.array,S.itemSize,S.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,c[y]);yt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Cp="glTF",ca=12,Ep={JSON:1313821514,BIN:5130562},su=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ca),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ca,r=new DataView(e,ca),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Ep.JSON){let l=new Uint8Array(e,ca+a,o);this.content=n.decode(l)}else if(c===Ep.BIN){let l=ca+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ru=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=lu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=lu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=yr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(f)},o,l,Nt,d)})})}},au=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ou=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},cc=class extends Ki{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,g=-2*f+3*d,p=f-d,x=1-g,v=p-d+u;for(let y=0;y!==o;y++){let S=a[b+y+o],A=a[b+y+c]*h,C=a[m+y+o],I=a[m+y]*h;r[y]=x*S+v*A+g*C+p*I}return r}},V_=new pt,cu=class extends cc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return V_.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},yr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tp={9728:kt,9729:xt,9984:bo,9985:Sh,9986:Hr,9987:fi},Ap={33071:En,33648:$r,10497:ys},Oh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},G_={CUBICSPLINE:void 0,LINEAR:_s,STEP:ar},zh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function W_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),s.DefaultMaterial}function Ss(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ts(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function X_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function $_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function q_(s){let e,t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bh(t.attributes):e=s.indices+":"+Bh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Bh(s.targets[n]);return e}function Bh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function hu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function j_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Y_=new me,uu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new H_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new mi(this.options.manager):this.textureLoader=new Go(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ia(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ss(r,o,i),ts(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Qi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Oh[i.type],o=yr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Dt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Oh[i.type],l=yr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,v=t.cache.get(x);v||(b=new l(o,p*f,i.count*f/h),v=new Zr(b,f/h),t.cache.add(x,v)),g=new Qr(v,c,d%f/h,m)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),g=new Dt(b,c,m);if(i.sparse!==void 0){let p=Oh.SCALAR,x=yr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new x(a[1],v,i.sparse.count*p),A=new l(a[2],y,i.sparse.count*c);o!==null&&(g=new Dt(g.array.slice(),g.itemSize,g.normalized));for(let C=0,I=S.length;C<I;C++){let _=S[C];if(g.setX(_,A[C*c]),c>=2&&g.setY(_,A[C*c+1]),c>=3&&g.setZ(_,A[C*c+2]),c>=4&&g.setW(_,A[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Tp[d.magFilter]||xt,h.minFilter=Tp[d.minFilter]||fi,h.wrapS=Ap[d.wrapS]||ys,h.wrapT=Ap[d.wrapT]||ys,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new Kt(b);g.needsUpdate=!0,d(g)}),t.load(Qi.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||j_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new na,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ta,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){let u=i[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ye(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Nt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Yt);let h=r.alphaMode||zh.OPAQUE;if(h===zh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Wt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wt){let u=r.emissiveFactor;o.emissive=new ye().setRGB(u[0],u[1],u[2],Nt)}return r.emissiveTexture!==void 0&&a!==Wt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,tt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ts(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ss(i,u,r),u})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Rp(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=q_(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Rp(new mt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?W_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,x=l[f];if(g.mode===Hn.TRIANGLES||g.mode===Hn.TRIANGLE_STRIP||g.mode===Hn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Lo(b,x):new Be(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Hn.TRIANGLE_STRIP?p.geometry=Fh(p.geometry,$o):g.mode===Hn.TRIANGLE_FAN&&(p.geometry=Fh(p.geometry,ra));else if(g.mode===Hn.LINES)p=new ko(b,x);else if(g.mode===Hn.LINE_STRIP)p=new hr(b,x);else if(g.mode===Hn.LINE_LOOP)p=new Io(b,x);else if(g.mode===Hn.POINTS)p=new Do(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&$_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ts(p,r),g.extensions&&Ss(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ss(i,u[0],r),u[0];let d=new dt;r.extensions&&Ss(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new It(he.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Cn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ts(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new me;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Po(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],b=f.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let x=0,v=d.length;x<v;x++){let y=d[x],S=f[x],A=m[x],C=b[x],I=g[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let _=n._createAnimationTracks(y,S,A,C,I);if(_)for(let E=0;E<_.length;E++)p.push(_[E])}return new zo(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Y_)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ea:l.length>1?h=new dt:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ts(h,r),r.extensions&&Ss(n,h,r),r.matrix!==void 0){let u=new me;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new dt;n.name&&(r.name=i.createUniqueName(n.name)),ts(r,n),n.extensions&&Ss(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof An||d instanceof Kt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];es[r.path]===es.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(es[r.path]){case es.weights:l=ki;break;case es.rotation:l=pi;break;case es.position:case es.scale:l=Ii;break;default:switch(n.itemSize){case 1:l=ki;break;case 2:case 3:default:l=Ii;break}break}let h=i.interpolation!==void 0?G_[i.interpolation]:_s,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+es[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=hu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof pi?cu:cc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function K_(s,e,t){let n=e.attributes,i=new On;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new M(c[0],c[1],c[2]),new M(l[0],l[1],l[2])),o.normalized){let h=hu(yr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new M,c=new M;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=hu(yr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Tn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Rp(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=lu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return et.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),ts(s,e),K_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?X_(s,e.targets,t):s})}var _r=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var y=p.charCodeAt(v);x[v]=y>96?y-97:y>64?y-39:y+4}for(var S=0,v=0;v<p.length;++v)x[S++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,S)}function c(p,x,v,y,S,A){var C=r.exports.sbrk,I=v+3&-4,_=C(I*y),E=C(S.length),D=new Uint8Array(r.exports.memory.buffer);D.set(S,E);var G=p(_,v,y,E,S.length);if(G==0&&A&&A(_,I,y),x.set(D.subarray(_,_+v*y)),C(_-C(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var y=v.data;x.pending-=y.count,x.requests[y.id][y.action](y.value),delete x.requests[y.id]},x}function m(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),v=new Blob([x],{type:"text/javascript"}),y=URL.createObjectURL(v),S=0;S<p;++S)u[S]=f(y);URL.revokeObjectURL(y)}function b(p,x,v,y,S){for(var A=u[0],C=1;C<u.length;++C)u[C].pending<A.pending&&(A=u[C]);return new Promise(function(I,_){var E=new Uint8Array(v),D=d++;A.pending+=p,A.requests[D]={resolve:I,reject:_},A.object.postMessage({id:D,count:p,size:x,source:E,mode:y,filter:S},[E.buffer])})}function g(p){a.then(function(){var x=p.data;try{var v=new Uint8Array(x.count*x.size);c(r.exports[x.mode],v,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(y){self.postMessage({id:x.id,count:x.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,v,y,S){c(r.exports.meshopt_decodeVertexBuffer,p,x,v,y,r.exports[l[S]])},decodeIndexBuffer:function(p,x,v,y){c(r.exports.meshopt_decodeIndexBuffer,p,x,v,y)},decodeIndexSequence:function(p,x,v,y){c(r.exports.meshopt_decodeIndexSequence,p,x,v,y)},decodeGltfBuffer:function(p,x,v,y,S,A){c(r.exports[h[S]],p,x,v,y,r.exports[l[A]])},decodeGltfBufferAsync:function(p,x,v,y,S){return u.length>0?b(p,x,v,h[y],l[S]):a.then(function(){var A=new Uint8Array(p*x);return c(r.exports[h[y]],A,p,x,v,r.exports[l[S]]),A})}}}();var Es=["bb","ca","dd","cl","bc","tr","cv","wh","sp"],lc=["A","E"],J_=700,Z_=s=>new vn(new Float32Array(s*4),4);async function Mr(s,e,t,n){let i=await s.loadAsync(e);return i.flipY=!1,i.colorSpace=t?tt:Vt,i.anisotropy=n,i}function hc(s,{patch:e,U:t,seaU:n,key:i}){let r=new Xt(Object.assign({roughness:1,metalness:1},s));return r.onBeforeCompile=a=>{Object.assign(a.uniforms,n,{uTime:t.uTime}),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aBurn; attribute vec4 aMark;
varying vec3 vWetW; varying vec4 vBurn; varying vec3 vLoc; varying vec4 vMark;`).replace("#include <project_vertex>",`#include <project_vertex>
        { vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp; vBurn = aBurn; vMark = aMark;
          #else
            vBurn = vec4(0.0, 0.0, 0.0, 200.0); vMark = vec4(0.0);
          #endif
          vWetW = (modelMatrix * wp).xyz; vLoc = transformed; }`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWetW; varying vec4 vBurn; varying vec3 vLoc; varying vec4 vMark; uniform float uTime;
${oa}
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
        }`)},r.customProgramCacheKey=()=>"steel"+i,e?.(r),r}function Q_(s,e){let t=null;return s.traverse(n=>{(n.name===e&&n.geometry||n.name===e&&!t)&&(t=n)}),t}function uc(s,e){let t=Q_(s,e);if(!t)return null;if(t.geometry)return t.geometry;let n=null;return t.traverse(i=>{!n&&i.geometry&&(n=i.geometry)}),n}var eM={bb:{L:215,B:32,D:18,T:9.5},bc:{L:240,B:29,D:17,T:9},ca:{L:185,B:19,D:11,T:6},cl:{L:165,B:16.4,D:10,T:5.5},dd:{L:112,B:10.4,D:6.5,T:3.7},tr:{L:140,B:19,D:13.2,T:8},cv:{L:250,B:31,D:18,T:8.5},wh:{L:300,B:40,D:20.6,T:11},sp:{L:300,B:40,D:20.6,T:11}};function tM(s){let{L:e,B:t,D:n,T:i}=eM[s],r=n-i,a=[];for(let l=0;l<=24;l++){let h=-e/2+e*l/24,u=h/(e/2),d=t/2*Math.sqrt(Math.max(0,1-Math.pow(Math.max(u,0),2.2)))*(u<0?1-.25*Math.pow(-u,4):1),f=[];for(let m=0;m<=6;m++){let b=m/6;f.push([d*Math.sin(b*Math.PI/2)**.6,-i+(i+r)*b])}a.push([h,f])}let c={bb:[[.32,0],[.2,1],[-.24,1],[-.36,0]],ca:[[.36,0],[.27,1],[.18,2],[-.25,1],[-.34,0]],dd:[[.33,0],[-.22,1],[-.36,0]],cl:[[.31,0],[.25,1],[-.27,1],[-.33,0]],bc:[[.35,0],[.28,1],[-.26,1],[-.32,0]],tr:[],cv:[],wh:[[.35,0],[.27,1],[-.31,0]],sp:[[.35,0],[.28,1],[-.27,1],[-.33,0]]}[s].map(([l,h])=>{let u=l*e,d=u>0;return{at:[0,r+h*t*.09,u],arc:d?[-2.3,2.3]:[Math.PI-2.3,Math.PI+2.3],guns:2,gap:t*.11,trunnion:[0,t*.06,t*.05],barrel_len:t*.6,rest:d?0:Math.PI}});return{kind:s,L:e,B:t,D:n,T:i,deck_top:r,stations:a,turrets:c,funnels:s==="bb"?[[0,r+22,-e*.02]]:s==="ca"?[[0,r+14,-e*.02]]:[[0,r+9,e*.02],[0,r+9,-e*.08]],boxes:[{min:[-t/2,-i,-e/2],max:[t/2,r,e/2],part:"hull"},{min:[-t*.3,r,-e*.14],max:[t*.3,r+t*.9,e*.1],part:"superstructure"}]}}function nM(s){let{L:e,B:t,deck_top:n}=s,i=[],r=s.stations,a=[],o=[],c=r[0][1].length;for(let[m,b]of r){for(let g=c-1;g>=0;g--)a.push(-b[g][0],b[g][1],m);for(let g=0;g<c;g++)a.push(b[g][0],b[g][1],m)}let l=c*2;for(let m=0;m+1<r.length;m++)for(let b=0;b+1<l;b++){let g=m*l+b,p=g+l;o.push(g,p,g+1,g+1,p,p+1)}let h=a.length/3;for(let[m,b]of r){let g=b[c-1][0];a.push(g,n,m,-g,n,m)}for(let m=0;m+1<r.length;m++){let b=h+m*2;o.push(b,b+2,b+1,b+1,b+2,b+3)}let u=new mt;u.setAttribute("position",new Je(a,3)),u.setIndex(o),u.computeVertexNormals(),i.push(u);let d=(m,b,g,p,x,v)=>i.push(new ni(m,b,g).translate(p,x+b/2,v));d(t*.45,t*.5,e*.18,0,n,0),d(t*.25,t*.55,t*.3,0,n+t*.5,e*.05);for(let m of s.funnels)i.push(new ln(t*.09,t*.11,m[1]-n,12).translate(m[0],(m[1]+n)/2,m[2]));return iM(i)}function iM(s){let e=[],t=[],n=[],i=0;for(let a of s){a=(a.index,a);let o=a.attributes.position.array,c=a.attributes.normal.array;for(let l=0;l<o.length;l++)e.push(o[l]),t.push(c[l]);if(a.index)for(let l of a.index.array)n.push(l+i);else for(let l=0;l<o.length/3;l++)n.push(l+i);i+=o.length/3}let r=new mt;return r.setAttribute("position",new Je(e,3)),r.setAttribute("normal",new Je(t,3)),r.setAttribute("uv",new Je(new Float32Array(e.length/3*2),2)),r.setIndex(n),r}async function kp(s,{aniso:e=8,patch:t,U:n,seaU:i,first:r=Es,onProgress:a}={}){let o=new mi,c=new ns().setMeshoptDecoder(_r),l={kinds:{},pending:{},onLoad:null};return await Promise.all(Es.map(async h=>{let u=null;try{let p=await fetch(`${s}${h}.json`);p.ok&&(u=await p.json())}catch{}if(u){u.kind=h,l.kinds[h]={meta:u,ready:!1,baked:!0};return}u=tM(h);let d={A:hc({color:2763822,roughness:.6,metalness:.3},{patch:t,U:n,seaU:i,key:"Ai"}),E:hc({color:9146774,roughness:.6,metalness:.3},{patch:t,U:n,seaU:i,key:"Ei"})},f=u.B,m=new ln(f*.16,f*.18,f*.12,16).translate(0,f*.06,0),b=new ln(f*.018,f*.024,f*.6,8).rotateX(Math.PI/2).translate(0,0,f*.3);for(let p of[m,b])p.setAttribute("uv",new Je(new Float32Array(p.attributes.position.count*2),2));let g=nM(u);l.kinds[h]={meta:u,mats:d,geo:{lod:[g,g],turret:m,barrel:b},baked:!1,ready:!0}})),l.load=h=>{let u=l.kinds[h];return!u||u.ready?Promise.resolve(u):l.pending[h]??=(async()=>{let[d,f,m,b]=await Promise.all([Mr(o,`${s}${h}_base_2k.webp`,!0,e),Mr(o,`${s}${h}_base_e_2k.webp`,!0,e),Mr(o,`${s}${h}_orm_2k.webp`,!1,e),c.loadAsync(`${s}${h}.glb`)]);u.mats={A:hc({map:d,aoMap:m,roughnessMap:m,metalnessMap:m},{patch:t,U:n,seaU:i,key:"A"}),E:hc({map:f,aoMap:m,roughnessMap:m,metalnessMap:m},{patch:t,U:n,seaU:i,key:"E"})};let g=uc(b.scene,"hull");return u.geo={lod:[g,uc(b.scene,"hull_lod1")??g],turret:uc(b.scene,"turret"),barrel:uc(b.scene,"barrel")},u.ready=!0,a?.(h),l.onLoad?.(h),u})()},l.sharpen=async h=>{let u=l.kinds[h];if(!u?.ready||!u.baked||u.sharp)return;u.sharp=!0;let[d,f,m]=await Promise.all([Mr(o,`${s}${h}_base.webp`,!0,e),Mr(o,`${s}${h}_base_e.webp`,!0,e),Mr(o,`${s}${h}_orm.webp`,!1,e)]);for(let[b,g]of[[u.mats.A,d],[u.mats.E,f]]){let p=[b.map,b.aoMap];b.map=g,b.aoMap=m,b.roughnessMap=m,b.metalnessMap=m;for(let x of p)x?.dispose()}},l.ready=h=>!!l.kinds[h]?.ready,await Promise.all(r.filter(h=>l.kinds[h]).map(h=>l.load(h))),l}var du=new me,fu=new me,wr=new me,pu=new pt,Lp=new M,Pp=new M(1,1,1),sM=new M(0,1,0),rM=new M(1,0,0),dc=class{constructor(e,t={bb:6,bc:6,ca:14,cl:12,dd:28,tr:6,cv:5,wh:2,sp:2}){this.art=e,this.max=t,this.group=new dt,this.sets={};for(let n of Es)e.ready(n)&&this.addKind(n)}addKind(e){if(this.sets[e])return[];let t=this.art.kinds[e],n=this.max[e],i={hull:{},turret:{},barrel:{}},r=[];for(let a of lc){let o=(c,l)=>{let h=new cn(c.clone(),t.mats[a],l);h.count=0,h.frustumCulled=!1;let u=new vn(new Float32Array(l*4),4);h.geometry.setAttribute("aBurn",u),h.userData.burn=u;let d=Z_(l);return h.geometry.setAttribute("aMark",d),h.userData.mark=d,this.group.add(h),h};i.hull[a]=t.geo.lod.map(c=>o(c,n)),i.turret[a]=o(t.geo.turret,160),i.barrel[a]=o(t.geo.barrel,480),r.push(i.hull[a][0],i.turret[a],i.barrel[a])}return this.sets[e]=i,r}casters(){let e=[];for(let t of Object.keys(this.sets))for(let n of lc){let i=this.sets[t];e.push(i.hull[n][0],i.turret[n],i.barrel[n])}return e}update(e,t){for(let n of Object.keys(this.sets))for(let i of lc){let r=this.sets[n];for(let a of[...r.hull[i],r.turret[i],r.barrel[i]])a.count=0}for(let n of e){if(n.gone||!this.sets[n.kind])continue;let i=this.art.kinds[n.kind],r=this.sets[n.kind],a=n.body,o=i.meta.L;du.compose(a.pos,a.quat,Pp);let c=t.distanceTo(a.pos)<J_?0:1,l=(h,u,d=!1)=>{let f=h.count++;h.setMatrixAt(f,u),h.userData.burn.setXYZW(f,n.burn[0],n.burn[1],n.burn[2],o);let m=i.meta.D-i.meta.T;h.userData.mark.setXYZW(f,d&&n.boss&&n.side==="E"&&n.kind!=="wh"?1:0,m*.32,m*.6,0)};l(r.hull[n.side][c],du,!0);for(let h of n.turrets){let u=h.meta,d=this.sets[u.geo??n.kind],f=u.scale??1,m=u.wide??1;if(!d)continue;let b=0;if(h.drop>0){let p=1-h.drop;b=p<.75?40*(1-(p/.75)**2):1.2*Math.sin((p-.75)/.25*Math.PI),h.drop=Math.max(0,h.drop-(this.dt??1/60)*2.2)}fu.compose(Lp.set(u.at[0],u.at[1]+b,u.at[2]),pu.setFromAxisAngle(sM,-h.yaw),Pp).premultiply(du),wr.copy(fu).multiply(new me().makeScale(f*m,f,f)),l(d.turret[n.side],wr);let g=u.guns??2;for(let p=0;p<g;p++){let x=(p-(g-1)/2)*u.gap,v=h.recoil[p]??0,y=v<=0?0:v<.15?v/.15:Math.max(0,1-(v-.15)/1.4);pu.setFromAxisAngle(rM,-(h.gunElev?.[p]??h.elev)),wr.compose(Lp.set(u.trunnion[0]+x,u.trunnion[1],u.trunnion[2]),pu,new M(f,f,f)),wr.multiply(new me().makeTranslation(0,0,-y*(u.barrel_len/f)*.08)),wr.premultiply(fu),l(d.barrel[n.side],wr)}}}for(let n of Object.keys(this.sets))for(let i of lc){let r=this.sets[n];for(let a of[...r.hull[i],r.turret[i],r.barrel[i]])a.instanceMatrix.needsUpdate=!0,a.userData.burn.needsUpdate=!0,a.userData.mark.needsUpdate=!0}}};var Np=9.81,aM=1.2,Et={};function mu(s){let e="g"+(+s).toFixed(1);if(Et[e])return e;let t=s/36,n={calCm:+s,cal:s/100,m:673*t**3,v0:500+140*Math.min(t,1.6),reload:12*t**.8,range:1800+145*s,dmg:18*t**2.3,charge:4*t**1.2,maxElev:.52+.25*(1-Math.min(t,1)),traverse:4.2/t**.9,elevRate:5/t**.6};return n.k=.5*aM*.3*Math.PI*(n.cal/2)**2/n.m,n.table=oM(n),Et[e]=n,e}function oM(s){let e=[];for(let t=-.01;t<=s.maxElev;t+=.002){let n=0,i=12,r=s.v0*Math.cos(t),a=s.v0*Math.sin(t),o=0,c=.01;for(;i>0&&o<120;){let l=Math.hypot(r,a);r-=s.k*l*r*c,a-=(Np+s.k*l*a)*c,n+=r*c,i+=a*c,o+=c}if(e.push({e:t,r:n,t:o,fall:Math.atan2(-a,r)}),e.length>2&&n<e[e.length-2].r)break}return e}for(let[s,e]of[["bb",36],["bc",36],["ca",20],["cl",15.5],["dd",12.7]])Et[s]=Et[mu(e)];function Sr(s,e){let t=Et[s].table;if(e<t[0].r)return{e:t[0].e,t:t[0].t*e/Math.max(t[0].r,1)};for(let n=1;n<t.length;n++)if(t[n].r>=e){let i=t[n-1],r=t[n],a=(e-i.r)/(r.r-i.r);return{e:i.e+(r.e-i.e)*a,t:i.t+(r.t-i.t)*a,fall:i.fall+(r.fall-i.fall)*a}}return null}function cM(s,e,t,n){let i=0,r=1;for(let a of["x","y","z"]){let o=e[a]-s[a];if(Math.abs(o)<1e-9){if(s[a]<t[a]||s[a]>n[a])return-1;continue}let c=(t[a]-s[a])/o,l=(n[a]-s[a])/o;if(c>l&&([c,l]=[l,c]),i=Math.max(i,c),r=Math.min(r,l),i>r)return-1}return i}var lM=new M,la=new M,Ip=new M,ha=new pt,Dp=new me,fc=class{constructor(e,t){this.fx=e,this.sea=t,this.shells=[],this.events=[];let n=new ln(.5,.5,1,6,1).rotateX(Math.PI/2);this.mesh=new cn(n,new Wt({color:new ye(3,1.6,.7),transparent:!0,opacity:.85,depthWrite:!1}),600),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=12;let i=new ln(.5,.5,2.6,16).rotateX(Math.PI/2),r=new Uo(.5,1.6,16).rotateX(Math.PI/2).translate(0,0,2.1);this.one=new dt;let a=new Xt({color:2762790,roughness:.45,metalness:.8});this.one.add(new Be(i,a),new Be(r,a));let o=new Be(new ln(.52,.52,.25,16).rotateX(Math.PI/2).translate(0,0,-1),new Xt({color:10119722,roughness:.4,metalness:.9}));this.one.add(o),this.one.visible=!1,this.tracked=null}fire(e,t,n,i,r,a=null){let o=Et[e],c=i.clone().multiplyScalar(o.v0*(1+(Math.random()-.5)*.004));c.add(t.body.vel),this.shells.push({type:e,g:o,p:n.clone(),p0:n.clone(),v:c,from:t,t0:r,target:t.target}),this.fx.blast(n,i,o.charge,t.body.vel),t.body.impulse(i.clone().multiplyScalar(-o.m*o.v0*1.4),n),this.events.push({kind:"fire",type:e,at:n.clone(),from:t})}update(e,t,n){let i=[],r=Math.max(1,Math.ceil(e/.008333333333333333)),a=e/r;for(let h of this.shells){let u=!0;for(let d=0;d<r&&u;d++){let f=lM.copy(h.p),m=h.v.length();h.v.addScaledVector(h.v,-h.g.k*m*a),h.v.y-=Np*a,h.p.addScaledVector(h.v,a);for(let g of n){if(g===h.from||g.gone||g.body.sunk)continue;let p=g.body,x=g.meta.L*.55+20;if((p.pos.x-h.p.x)**2+(p.pos.z-h.p.z)**2>x*x)continue;ha.copy(p.quat).invert();let v=la.copy(f).sub(p.pos).applyQuaternion(ha),y=Ip.copy(h.p).sub(p.pos).applyQuaternion(ha),S=2,A=null;for(let C of g.boxes){let I=cM(v,y,C.min,C.max);I>=0&&I<S&&(S=I,A=C)}if(A){let C=v.clone().lerp(y,S),I=f.clone().lerp(h.p,S);this.events.push({kind:"hit",type:h.type,ship:g,part:A,local:C,world:I,vel:h.v.clone(),from:h.from}),u=!1;break}}if(!u)break;let b=Ko(this.sea,h.p.x,h.p.z,t,1);h.p.y<b&&(this.events.push({kind:"splash",type:h.type,world:new M(h.p.x,b,h.p.z),from:h.from}),this.fx.column(new M(h.p.x,b,h.p.z),h.g.cal),u=!1),t-h.t0>40&&(u=!1)}u&&i.push(h)}this.shells=i;let o=0;for(let h of this.shells){let u=h.v.length(),d=Math.min(u*.035,30),f=Math.max(h.g.cal*2.2,.35);if(la.copy(h.v).normalize(),ha.setFromUnitVectors(new M(0,0,1),la),Dp.compose(Ip.copy(h.p).addScaledVector(la,-d/2),ha,new M(f,f,d)),this.mesh.setMatrixAt(o++,Dp),o>=600)break}this.mesh.count=o,this.mesh.instanceMatrix.needsUpdate=!0;let c=this.tracked;if(this.one.visible=!!c&&this.shells.includes(c),this.one.visible){let h=c.g.cal/.36*.36;this.one.position.copy(c.p),this.one.quaternion.setFromUnitVectors(new M(0,0,1),la.copy(c.v).normalize()),this.one.scale.setScalar(h*1)}let l=this.events;return this.events=[],l}};var we={SMOKE:0,SPRAY:1,SPLINTER:2,SOOT:3,FLASH:4,FLAME:5,EMBER:6,MIST:7},yn=2e4,Up=`
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
}`,Fp=`
float fh(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float fn2(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(fh(i), fh(i + vec2(1, 0)), u.x), mix(fh(i + vec2(0, 1)), fh(i + vec2(1, 1)), u.x), u.y); }
float fbm2(vec2 p){ return fn2(p) * 0.5 + fn2(p * 2.1 + 3.7) * 0.3 + fn2(p * 4.3 + 9.1) * 0.2; }
`;function hM(s,e){return new gt({uniforms:Object.assign({},s,e),transparent:!0,depthWrite:!1,vertexShader:Up,fragmentShader:`
      ${ws}
      ${Fp}
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
      }`})}function uM(s){return new gt({uniforms:Object.assign({},s,{uCamR:{value:new M},uCamU:{value:new M}}),transparent:!0,depthWrite:!1,blending:nr,vertexShader:Up,fragmentShader:`
      ${ws}
      ${Fp}
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
      }`})}var pc=class{constructor(e,t){this.wind=t,this.p=new Float32Array(yn*3),this.v=new Float32Array(yn*3),this.size=new Float32Array(yn),this.grow=new Float32Array(yn),this.life=new Float32Array(yn),this.age=new Float32Array(yn),this.type=new Uint8Array(yn),this.seed=new Float32Array(yn),this.drag=new Float32Array(yn),this.buoy=new Float32Array(yn),this.a0=new Float32Array(yn),this.free=[];for(let o=yn-1;o>=0;o--)this.free.push(o);this.live=[],this.U={uCamR:{value:new M},uCamU:{value:new M},uAmbUp:{value:new ye},uAmbDn:{value:new ye}};let n=new Rn(1,1),i=o=>{let c=new Vo;c.index=n.index,c.setAttribute("position",n.attributes.position);let l=new vn(new Float32Array(yn*4),4).setUsage(Ah),h=new vn(new Float32Array(yn*4),4).setUsage(Ah);c.setAttribute("aP",l),c.setAttribute("aD",h),c.instanceCount=0;let u=new Be(c,o);return u.frustumCulled=!1,{m:u,g:c,aP:l,aD:h}},r=hM(e,this.U),a=uM(e);a.uniforms.uCamR=this.U.uCamR,a.uniforms.uCamU=this.U.uCamU,this.blend=i(r),this.add=i(a),this.blend.m.renderOrder=10,this.add.m.renderOrder=11,this.group=new dt,this.group.add(this.blend.m,this.add.m),this.lights=[],this.lightGroup=new dt;for(let o=0;o<6;o++){let c=new fr(16756848,0,900,2);this.lights.push({L:c,t:0,k:0}),this.lightGroup.add(c)}}spawn(e,t,n,i,r,a,o,c,l,{grow:h=0,drag:u=1,buoy:d=0,alpha:f=1}={}){let m=this.free.pop();return m===void 0?-1:(this.p[m*3]=t,this.p[m*3+1]=n,this.p[m*3+2]=i,this.v[m*3]=r,this.v[m*3+1]=a,this.v[m*3+2]=o,this.size[m]=c,this.grow[m]=h,this.life[m]=l,this.age[m]=0,this.type[m]=e,this.seed[m]=Math.random(),this.drag[m]=u,this.buoy[m]=d,this.a0[m]=f,this.live.push(m),m)}flashLight(e,t,n){let i=this.lights.reduce((r,a)=>r.k<a.k?r:a);i.L.position.copy(e),i.t=n,i.dur=n,i.k=t}muzzle(e,t,n=1,i=null){let r=Math.random,a=i?.x??0,o=i?.z??0;this.spawn(we.FLASH,e.x+t.x*.6*n,e.y+t.y*.6,e.z+t.z*.6*n,0,0,0,1.6*n+.3,.07),this.spawn(we.FLASH,e.x+t.x*1.8*n,e.y+t.y*1.8,e.z+t.z*1.8*n,0,0,0,1.1*n+.2,.05),this.flashLight(e,3e3*n,.09);let c=Math.round(10+26*n);for(let l=0;l<c;l++){let h=(4+r()*26)*Math.sqrt(n),u=.25+r()*.35;this.spawn(we.SMOKE,e.x,e.y,e.z,a+(t.x+(r()-.5)*u)*h,(t.y+(r()-.3)*u)*h,o+(t.z+(r()-.5)*u)*h,(.5+r()*.8)*(.4+n),18+r()*22,{grow:.22+r()*.25,drag:2.2,buoy:.08,alpha:.9})}n>.5&&this.spawn(we.SMOKE,e.x-t.x*2.2,e.y+.3,e.z-t.z*2.2,0,.8,0,.5,8,{grow:.2,drag:1.5,buoy:.1,alpha:.7});for(let l=0;l<8*n;l++)this.spawn(we.EMBER,e.x,e.y,e.z,t.x*30*r()+(r()-.5)*4,t.y*30*r()+r()*3,t.z*30*r()+(r()-.5)*4,.06,.6+r()*.8,{drag:.6})}splash(e,t=1){let n=Math.random,i=Math.round(60*t+20);for(let r=0;r<i;r++){let a=n()*Math.PI*2,o=n()*.6,c=(6+n()*12)*Math.sqrt(t);this.spawn(we.SPRAY,e.x+Math.cos(a)*o,.1,e.z+Math.sin(a)*o,Math.cos(a)*(.5+n()*2.2),c,Math.sin(a)*(.5+n()*2.2),.12+n()*.2,3.5,{drag:.08})}for(let r=0;r<14*t;r++){let a=n()*Math.PI*2;this.spawn(we.MIST,e.x+Math.cos(a)*.8,1+n()*6*t,e.z+Math.sin(a)*.8,Math.cos(a)*.8,1+n()*2,Math.sin(a)*.8,1.2+n(),6+n()*4,{grow:.35,drag:1.2,buoy:-.05,alpha:.7})}}splinters(e,t,n=1){let i=Math.random;for(let r=0;r<30*n;r++)this.spawn(we.SPLINTER,e.x,e.y,e.z,t.x*6*i()+(i()-.5)*9,i()*8,t.z*6*i()+(i()-.5)*9,.05+i()*.12,2.5,{drag:.2});for(let r=0;r<6;r++)this.spawn(we.SMOKE,e.x,e.y,e.z,(i()-.5)*3,i()*2,(i()-.5)*3,.6,6,{grow:.3,drag:2,alpha:.5})}burn(e,t,n){let i=Math.random;i()<n*30*t&&this.spawn(we.FLAME,e.x+(i()-.5)*1.5,e.y+i()*.5,e.z+(i()-.5)*1.5,i()-.5,2+i()*3,i()-.5,.8+i()*1.2*t,.6+i()*.5,{grow:.4,drag:1.2,buoy:.5}),i()<n*6*t&&this.spawn(we.SOOT,e.x+(i()-.5),e.y+1.5,e.z+(i()-.5),0,2+i()*2,0,1+i()*t,14+i()*10,{grow:.45,drag:.8,buoy:.35,alpha:.85}),i()<n*10*t&&this.spawn(we.EMBER,e.x,e.y+1,e.z,(i()-.5)*2,3+i()*4,(i()-.5)*2,.05,2+i()*2,{drag:.5,buoy:.3})}blast(e,t,n,i){let r=Math.random,a=i?.x??0,o=i?.z??0,c=Math.sqrt(n);for(let h=0;h<3;h++)this.spawn(we.FLASH,e.x+t.x*(2+h*4)*c,e.y+t.y*(2+h*4)*c,e.z+t.z*(2+h*4)*c,a,0,o,(3-h*.6)*c,.08+h*.015);for(let h=0;h<3*c;h++)this.spawn(we.FLAME,e.x+t.x*4*c,e.y,e.z+t.z*4*c,a+t.x*60*r()*c,t.y*60*r()+r()*4,o+t.z*60*r()*c,(1.5+r()*2)*c,.25+r()*.2,{grow:3*c,drag:4});this.flashLight(e,12e4*n,.1);let l=Math.round(10+10*c);for(let h=0;h<l;h++){let u=(10+r()*70)*c,d=.35;this.spawn(we.SMOKE,e.x,e.y,e.z,a+(t.x+(r()-.5)*d)*u,(t.y+(r()-.35)*d)*u,o+(t.z+(r()-.5)*d)*u,(1.5+r()*2.5)*c,5+r()*4,{grow:(1.4+r()*1.2)*c,drag:1.8,buoy:.15,alpha:.4})}if(n>1.5){let h=e.x+t.x*12*c,u=e.z+t.z*12*c;for(let d=0;d<40*c;d++){let f=r()*Math.PI*2,m=8+r()*18;this.spawn(we.SPRAY,h+Math.cos(f)*3,.3,u+Math.sin(f)*3,a+Math.cos(f)*m,2+r()*4,o+Math.sin(f)*m,.6+r()*.8,1.6,{drag:.5})}for(let d=0;d<8;d++){let f=r()*Math.PI*2;this.spawn(we.MIST,h+Math.cos(f)*6,2,u+Math.sin(f)*6,Math.cos(f)*10,1,Math.sin(f)*10,4+r()*3,4,{grow:2,drag:1.5,alpha:.5})}}}column(e,t){let n=Math.random,i=t/.36,r=85*i**1.3,a=Math.sqrt(2*9.81*r),o=22*i**1.1,c=Math.round(Math.min(Math.max(230*i**.8,40),460)),l=2*a/9.81;for(let h=0;h<c;h++){let u=n()*Math.PI*2,d=Math.sqrt(n())*o*.45,f=Math.pow(n(),.5),m=a*(.35+.65*f);this.spawn(we.MIST,e.x+Math.cos(u)*d,.5+n()*2,e.z+Math.sin(u)*d,Math.cos(u)*n()*o*.11,m,Math.sin(u)*n()*o*.11,o*(.26+n()*.2)*(1-.5*f),l*(.9+n()*.4)+1.5,{grow:o*.035,drag:.02,buoy:-9.81,alpha:1})}for(let h=0;h<c*1.2;h++){let u=n()*Math.PI*2,d=n()*o*.5;this.spawn(we.SPRAY,e.x+Math.cos(u)*d,.5,e.z+Math.sin(u)*d,Math.cos(u)*(1+n()*4)*o/6,a*(.3+.8*n()),Math.sin(u)*(1+n()*4)*o/6,.12+n()*.25*o/6,l+1,{drag:.03})}for(let h=0;h<c*.25;h++){let u=n()*Math.PI*2,d=n()*r*.8;this.spawn(we.MIST,e.x+Math.cos(u)*o*.3,d,e.z+Math.sin(u)*o*.3,Math.cos(u),.5,Math.sin(u),o*(.35+n()*.25),5+n()*4,{grow:o*.05,drag:.8,buoy:-1.2,alpha:.35})}for(let h=0;h<c*.5;h++){let u=n()*Math.PI*2;this.spawn(we.MIST,e.x+Math.cos(u)*o*.5,1,e.z+Math.sin(u)*o*.5,Math.cos(u)*(4+n()*6)*o/6,2+n()*3,Math.sin(u)*(4+n()*6)*o/6,o*.35,2.5,{grow:o*.2,drag:.8,buoy:-4,alpha:.8})}}hitBurst(e,t){let n=Math.random,i=t>.3?3:t>.15?1.8:1;this.spawn(we.FLASH,e.x,e.y,e.z,0,0,0,6*i,.12);for(let r=0;r<14*i;r++)this.spawn(we.FLAME,e.x+(n()-.5)*3*i,e.y+n()*2*i,e.z+(n()-.5)*3*i,(n()-.5)*18*i,n()*14*i,(n()-.5)*18*i,(2+n()*3)*i,.5+n()*.5,{grow:4*i,drag:3,buoy:2});for(let r=0;r<7*i;r++)this.spawn(we.SOOT,e.x,e.y+2,e.z,(n()-.5)*6*i,2+n()*5*i,(n()-.5)*6*i,(1.5+n()*1.5)*i,7+n()*6,{grow:.9*i,drag:1.2,buoy:.5,alpha:.75});for(let r=0;r<10*i;r++)this.spawn(we.SPLINTER,e.x,e.y,e.z,(n()-.5)*30*i,n()*22*i,(n()-.5)*30*i,.1+n()*.15*i,1.6,{drag:.05});for(let r=0;r<20*i;r++)this.spawn(we.EMBER,e.x,e.y,e.z,(n()-.5)*50,n()*40,(n()-.5)*50,.2*i,1+n(),{drag:.3});this.flashLight(e,3e4*i,.12)}magazine(e,t=1){let n=Math.random;for(let i=0;i<4;i++)this.spawn(we.FLASH,e.x,e.y+i*15,e.z,0,0,0,40*t,.3);for(let i=0;i<160*t;i++){let r=n()*6.283,a=30+n()*90;this.spawn(we.FLAME,e.x+Math.cos(r)*5,e.y+5,e.z+Math.sin(r)*5,Math.cos(r)*n()*30,a,Math.sin(r)*n()*30,8+n()*10,1+n()*1.5,{grow:10,drag:1.2,buoy:4})}for(let i=0;i<120*t;i++){let r=n()*6.283,a=20+n()*70;this.spawn(we.SOOT,e.x+Math.cos(r)*8,e.y+10+n()*40,e.z+Math.sin(r)*8,Math.cos(r)*n()*20,a,Math.sin(r)*n()*20,10+n()*12,30+n()*25,{grow:3.5,drag:.5,buoy:.6,alpha:.95})}for(let i=0;i<200*t;i++)this.spawn(we.SPLINTER,e.x,e.y+5,e.z,(n()-.5)*120,n()*110,(n()-.5)*120,.5+n()*1.5,6,{drag:.02});this.flashLight(e,4e6*t,.6)}funnel(e,t,n,i){let r=Math.random;r()<n*(4+6*t)&&this.spawn(we.SOOT,e.x+(r()-.5),e.y,e.z+(r()-.5),(i?.x??0)*.5,2+3*t,(i?.z??0)*.5,1.6+r()*.8,16+r()*10,{grow:.55,drag:.25,buoy:.05,alpha:.1+.14*t})}bigFire(e,t,n){let i=Math.random;i()<n*12*t&&this.spawn(we.FLAME,e.x+(i()-.5)*8,e.y+i()*2,e.z+(i()-.5)*8,(i()-.5)*2,4+i()*5,(i()-.5)*2,3+i()*4*t,.8+i()*.6,{grow:1.5,drag:1.2,buoy:1}),i()<n*7*t&&this.spawn(we.SOOT,e.x+(i()-.5)*4,e.y+4,e.z+(i()-.5)*4,0,5+i()*4,0,4+i()*3*t,25+i()*15,{grow:1.6,drag:.6,buoy:.3,alpha:.9})}update(e,t,n){let i=n.matrixWorld.elements;this.U.uCamR.value.set(i[0],i[1],i[2]),this.U.uCamU.value.set(i[4],i[5],i[6]);let r=this.wind.uniforms.uWind.value,a=this.blend,o=this.add,c=0,l=0,h=[];for(let u of this.live){this.age[u]+=e;let d=this.life[u];if(this.age[u]>=d){this.free.push(u);continue}h.push(u);let f=this.type[u],m=u*3,b=this.v,g=this.p,p=this.drag[u],x=f===we.SPRAY||f===we.SPLINTER||f===we.EMBER,v=1-Math.exp(-p*e);b[m]+=(r.x-b[m])*v,b[m+2]+=(r.y-b[m+2])*v,b[m+1]+=(x?-9.81*e:0)+this.buoy[u]*e-b[m+1]*(x?0:v),g[m]+=b[m]*e,g[m+1]+=b[m+1]*e,g[m+2]+=b[m+2]*e,(x||this.buoy[u]<-5)&&g[m+1]<0&&(this.age[u]=d),this.size[u]+=this.grow[u]*e*(f===we.SMOKE?Math.max(.2,1-this.age[u]/d)*2:1);let y=this.age[u]/d,S=this.a0[u];f===we.SMOKE||f===we.SOOT||f===we.MIST?S*=Math.min(y*12,1)*Math.pow(1-y,1.5):f===we.FLAME?S*=Math.sin(Math.PI*Math.min(y*1.3,1)):f===we.FLASH?S*=1-y:S*=1-y*y;let A=f>=we.FLASH&&f!==we.MIST?o:a,C=A===o?l++:c++;A.aP.array.set([g[m],g[m+1],g[m+2],this.size[u]],C*4),A.aD.array.set([f,y,this.seed[u],S],C*4)}this.live=h,a.g.instanceCount=c,o.g.instanceCount=l;for(let u of[a,o])u.aP.needsUpdate=!0,u.aD.needsUpdate=!0;for(let u of this.lights)u.t>0?(u.t-=e,u.L.intensity=u.k*Math.max(u.t/u.dur,0)):u.L.intensity=0}clear(){for(let e of this.live)this.free.push(e);this.live=[]}setAmbient(e,t){this.U.uAmbUp.value.copy(e),this.U.uAmbDn.value.copy(t)}};var gu=1025,mc=9.81,is=()=>new M,dM=[-.35,0,.33,.66,1],ua={bb:{kn:27,turnD:4.6,gm:2.4,pumps:2.5,armor:.75},bc:{kn:31,turnD:5,gm:2,pumps:2.2,armor:.5},cl:{kn:35,turnD:3.9,gm:1.3,pumps:1,armor:.3},ca:{kn:33,turnD:4.2,gm:1.6,pumps:1.4,armor:.45},dd:{kn:36,turnD:3.6,gm:.9,pumps:.6,armor:.1},tr:{kn:14,turnD:4,gm:1.4,pumps:1.2,armor:0},cv:{kn:32,turnD:4.6,gm:2,pumps:2,armor:.35},wh:{kn:26,turnD:5.2,gm:2.8,pumps:3.5,armor:.85},sp:{kn:26,turnD:5.2,gm:2.8,pumps:3.5,armor:.85}},fM=.5144,gc=class{constructor(e,t){this.meta=e,this.sea=t,this.kind=e.kind,this.K=ua[e.kind];let n=e.L,i=e.B,r=e.T;this.V0=n*i*r*.58,this.mass0=gu*this.V0,this.reserve=n*i*(e.D-r)*.62,this.vmax=this.K.kn*fM,this.cR=this.mass0*.0016/n,this.P=this.cR*this.vmax**3*1.08,this.pos=is(),this.vel=is(),this.yaw=0,this.yawRate=0,this.quat=new pt,this.ctl={tele:3,rudder:0},this.power=0,this.rudder=0,this.heave=0,this.heaveV=0,this.roll=0,this.rollV=0,this.pitchA=0,this.pitchV=0,this.list=0,this.trim=0,this.sinkY=0,this.kickRoll=0,this.comp=[];for(let a=0;a<5;a++)for(let o of[1,-1])this.comp.push({f:(a-2)/5*n,x:o*i*.25,water:0,cap:this.V0*.11,holes:[]});this.water=0,this.sunk=!1,this.founder=0,this.capsize=0,this.gm=this.K.gm,this.sinkBase=0,this.tmp={v:is(),q:new pt,e:new ji(0,0,0,"YXZ")},this.updateQuat()}applyFit(e){this.mass0+=e.dW*1e3,this.V0=this.mass0/gu,this.gm=e.gm,this.sinkBase=e.sink,this.vmax*=e.speedK,this.reserve=Math.max(this.reserve-e.sink*this.meta.L*this.meta.B*.62,this.reserve*.1),e.freeboard<=.3&&this.startFounder()}place(e,t,n,i=0){this.pos.set(e,0,t),this.yaw=n,this.yawRate=0,this.vel.set(Math.sin(n)*i,0,Math.cos(n)*i),this.power=i/this.vmax,this.updateQuat()}get heading(){return this.yaw}get speed(){return this.vel.x*Math.sin(this.yaw)+this.vel.z*Math.cos(this.yaw)}get heel(){return this.roll+this.list}get pitch(){return this.pitchA+this.trim}forward(e=is()){return e.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}toWorld(e,t=is()){return t.copy(e).applyQuaternion(this.quat).add(this.pos)}toLocal(e,t=is()){return t.copy(e).sub(this.pos).applyQuaternion(this.tmp.q.copy(this.quat).invert())}pointVel(e,t=is()){let n=this.tmp.v.subVectors(e,this.pos);return t.set(this.vel.x+this.yawRate*n.z,0,this.vel.z-this.yawRate*n.x)}hole(e,t){let n=this.comp[0],i=1e9;for(let r of this.comp){let a=Math.abs(r.f-e.z)+(Math.sign(r.x)!==Math.sign(e.x||1)?1e4:0);a<i&&(i=a,n=r)}n.holes.push({p:e.clone(),a:t})}impulse(e,t){let n=this.toLocal(t,is()),i=new M(Math.cos(this.yaw),0,-Math.sin(this.yaw)),r=this.mass0*(.38*this.meta.B)**2;this.rollV+=e.dot(i)*Math.max(n.y+this.meta.T*.4,1)/r,this.vel.x+=e.x/this.mass0*.6,this.vel.z+=e.z/this.mass0*.6}updateQuat(){let e=this.tmp.e;e.set(-(this.pitchA+this.trim),this.yaw,-(this.roll+this.list)*1,"YXZ"),this.quat.setFromEuler(e)}step(e,t){let n=this.meta,i=this.K,r=this.ctl,a=!this.sunk&&this.founder<=0,o=a?(r.pow??dM[he.clamp(r.tele,0,4)])*(1-Math.min(this.water/this.reserve,1)*.6):0;this.power+=he.clamp(o-this.power,-e*.12,e*.08),this.rudder+=he.clamp((a?r.rudder:.3)-this.rudder,-e*.35,e*.35);let c=Math.sin(this.yaw),l=Math.cos(this.yaw),h=this.vel.x*c+this.vel.z*l,u=this.vel.x*l-this.vel.z*c,d=this.mass0*1.08+this.water*gu,f=this.power>=0?this.P*this.power/Math.max(Math.abs(h),this.vmax*.18):this.P*this.power/Math.max(Math.abs(h),this.vmax*.18)*.7,m=Math.abs(h)/Math.sqrt(mc*n.L),b=this.cR*h*Math.abs(h)*(1+6*Math.max(m-.3,0)**2)*(1+this.water/this.V0*3),g=Math.abs(this.yawRate)*Math.abs(h)*d*.35,p=(f-b-g*Math.sign(h))/d,x=-u*Math.abs(u)*this.cR*30/d-u*.15,v=i.turnD*n.L/2,y=h/v*(this.rudder/.6)*-1,S=6+n.L/18;this.yawRate+=(y-this.yawRate)*(1-Math.exp(-e/S)),a||(this.yawRate*=Math.exp(-e*.2)),this.yaw+=this.yawRate*e,x+=-this.yawRate*h*.25;let A=h+p*e,C=u+x*e,I=Math.sin(this.yaw),_=Math.cos(this.yaw);this.vel.set(A*I+C*_,0,A*_-C*I),this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e;let E=n.L*.38,D=n.B*.42,G=(Ie,Ee)=>Ko(this.sea,this.pos.x+I*Ie+_*Ee,this.pos.z+_*Ie-I*Ee,t,1),K=G(E,0),P=G(-E,0),N=G(0,-D),H=G(0,D),q=(K+P+N+H)/4,$=Math.max(this.gm,.02),X=Math.sqrt(mc/n.T)*.55,j=2*Math.PI/(.8*n.B/Math.sqrt($)),J=Math.sqrt(mc/n.T)*.5,ce=he.clamp(.55+this.gm/n.B*9,.35,1.25),W=.35;this.heaveV+=(-(this.heave-q)*X*X-2*W*X*this.heaveV)*e,this.heave+=this.heaveV*e;let Y=Math.atan2(H-N,2*D)*.6,oe=Math.atan2(K-P,2*E)*.8,be=he.clamp(-this.yawRate*h*.012*(2.5/i.gm),-.12,.12),fe=this.roll-Y-be,ke=Math.sin(fe)*(1-Math.min((fe/ce)**2,1.5))+(this.gm<.05?-.03*Math.sign(fe||1):0);this.rollV+=(-ke*j*j-2*.06*j*this.rollV)*e,this.roll+=this.rollV*e,Math.abs(this.roll+this.list)>ce&&this.founder<=0&&(this.capsized=!0,this.startFounder("capsize"),this.fRoll=Math.sign(this.roll+this.list)),this.founder>0&&this.fRoll&&(this.roll+=(this.fRoll*Math.min(this.founder/6,1)*2.4-this.roll)*(1-Math.exp(-e*.6)),this.rollV=0),this.pitchV+=(-(this.pitchA-oe)*J*J-2*W*J*this.pitchV)*e,this.pitchA+=this.pitchV*e,this.floodStep(e,t),this.founder>0&&this.founderStep(e),this.pos.y=this.heave-this.sinkY-this.sinkBase,this.updateQuat()}floodStep(e){let t=0,n=0,i=0,r=this.K.pumps*(this.founder>0?0:1),a=this.meta.T;for(let h of this.comp){let u=0;for(let d of h.holes){let m=-(d.p.y-this.sinkY+Math.sin(this.list)*-d.p.x*.5-Math.sin(this.trim)*d.p.z);m>0&&(u+=.62*d.a*Math.sqrt(2*mc*m)*(this.floodK??1))}h.water=he.clamp(h.water+(u-(h.water>0?r/10:0))*e,0,h.cap*(this.founder>0?3:1)),t+=h.water,n+=h.water*h.x,i+=h.water*h.f}this.water=t;let o=Math.min(t/this.reserve,1),c=t>1?he.clamp(-n/t/this.meta.B*.9*o*1.4,-.5,.5):0,l=t>1?he.clamp(i/t/this.meta.L*.5*o,-.25,.25):0;return this.list+=(c-this.list)*(1-Math.exp(-e*.15)),this.founder<=0&&(this.trim+=(l-this.trim)*(1-Math.exp(-e*.15))),this.founder<=0&&(this.sinkY+=(t/(this.meta.L*this.meta.B*.7)-this.sinkY)*(1-Math.exp(-e*.3))),t>this.reserve*.92&&this.founder<=0&&this.startFounder(),a}startFounder(e){if(this.founder>0)return;this.founder=.001;let t=0,n=0,i=0;for(let r of this.comp)t+=r.water*r.f,n+=r.water*r.x,i+=r.water;this.fEnd=i>0?Math.sign(t||1):Math.random()<.5?1:-1,this.fRoll=Math.abs(this.list)>.18||e==="capsize"?Math.sign(this.list||n||1):0,this.fBreak=e==="magazine"}founderStep(e){this.founder+=e;let t=this.founder,n=this.meta.L,i=this.fBreak?40:{bb:120,bc:110,ca:90,cl:80,dd:60}[this.kind],r=Math.min(t/i,1);this.trim+=((this.fBreak?.05:.18+.3*r*r)*this.fEnd*Math.min(t/20,1)-this.trim)*(1-Math.exp(-e*.2)),this.fRoll&&!this.capsized&&(this.list+=(Math.min(t/i*2.2,1)**2*2.6*this.fRoll-this.list)*(1-Math.exp(-e*.3))),this.sinkY+=e*(.04+.5*r*r)*(n/150),this.sinkY>this.meta.D+Math.abs(Math.sin(this.trim))*n*.5+25&&(this.sunk=!0)}};var Bp=[12.7,15.5,20,25,36,41,46,51,61,80],da={bb:36,bc:36,ca:20,cl:15.5,dd:12.7,tr:12.7,cv:12.7,wh:51,sp:51},pM={bb:2.4,bc:2,ca:1.6,cl:1.3,dd:.9,tr:1.4,cv:2,wh:2.8,sp:2.8},Op=1.025;function Er(s,e){return 1e3*(s/36)**2.6*(.55+.45*e)/1.45}function zp(){return 60}function mM(s,e){let t=s.stations,n=t[0],i=t[t.length-1];for(let c=0;c+1<t.length;c++)if(t[c][0]<=e&&t[c+1][0]>=e){n=t[c],i=t[c+1];break}let r=(e-n[0])/Math.max(i[0]-n[0],1e-6),a=n[1][n[1].length-1],o=i[1][i[1].length-1];return{y:a[1]+(o[1]-a[1])*r,hb:a[0]+(o[0]-a[0])*r}}function ss(s){let e=s.turrets.map((i,r)=>({id:"s"+r,at:i.at.slice(),home:i.home??(i.at[2]>=0?0:Math.PI),arc:i.arc.slice(),stock:r,r:i.r})),t=s.L;return({bb:[[.43,0],[-.4,0],[.12,1],[-.16,1],[.12,-1],[-.16,-1]],ca:[[.42,0],[-.4,0],[0,1],[0,-1]],dd:[[0,1],[0,-1],[.18,0]],cl:[[.42,0],[-.42,0],[-.12,1],[-.12,-1]],bc:[[.43,0],[-.41,0],[.15,1],[-.2,1],[.15,-1],[-.2,-1]],sp:[[.44,0],[-.42,0],[.16,1],[-.22,1],[.16,-1],[-.22,-1]]}[s.kind]??[]).forEach(([i,r],a)=>{let o=i*t,c=mM(s,o),l=r?r*c.hb*.62:0,h=r?r>0?-Math.PI/2:Math.PI/2:o>=0?0:Math.PI,u=r?1.35:2.5;e.push({id:"x"+a,at:[l,c.y+.2,o],home:h,arc:[h-u,h+u],stock:-1,r:s.B*.18,wing:r})}),e}function Vn(s,e){let t=e.turrets.map((i,r)=>({slot:"s"+r,type:"gun",cal:da[s],n:i.guns??2,tier:1}));if(s==="dd"||s==="cl")for(let i of ss(e))i.wing&&t.push({slot:i.id,type:"torp"});let n={kind:s,mounts:t,aa:{ha:0,mg:0}};return s==="cv"&&(n.air={f:3,t:4,b:3}),n}function ii(s,e){let t=s.kind,n=e.kinds[t].meta,i=ss(n),r=[],a=[],o=0,c=0,l=0;for(let _ of n.turrets){let E=Er(da[t],_.guns??2);l+=E}let h=n.turrets.reduce((_,E)=>_+(E.at[1]+2)*Er(da[t],E.guns??2),0)/Math.max(l,1);for(let _ of s.mounts){let E=i.find(X=>X.id===_.slot);if(!E||_.type==="none")continue;if(_.type==="torp"){a.push({slot:E,at:E.at,side:E.wing||1,home:E.home}),o+=zp(),c+=zp()*E.at[1];continue}let D=E.stock>=0&&_.cal===da[t]&&(n.turrets[E.stock].guns??2)===_.n,G=_.cal,K=Math.max(1,Math.min(D?4:3,_.n)),P=D?t:G>=28?"bb":G>=15?"ca":"dd",N=D?n.turrets[E.stock]:e.kinds[P].meta.turrets[0],H=D?1:G/da[P],q=D?1:K===1?.72:K===2?1:1.42,$=((N.top??N.at[1]+4)-N.at[1]+1.2)*H;for(let X=0;X<Math.max(1,Math.min(3,_.tier??1));X++){let j=[E.at[0],E.at[1]+X*$,E.at[2]];r.push({at:j,home:E.home,arc:E.arc,guns:K,gap:N.gap*H,trunnion:[0,N.trunnion[1]*H,N.trunnion[2]*H],barrel_len:N.barrel_len*H,gun:mu(G),geo:P,scale:H,wide:q,slot:E.id,tier:X});let J=Er(G,K);o+=J,c+=J*(j[1]+2*H)}}let u={ha:s.aa?.ha??0,mg:s.aa?.mg??0},d=u.ha*30+u.mg*6;o+=d,c+=u.ha*30*(n.deck_top+5)+u.mg*6*(n.deck_top+3);let f=n.L*n.B*n.T*.58*Op,m=o-l,b=f+m,g=.62*n.D-n.T,p=c-h*l,x=g+(p-m*g)/b,v=m/(n.L*n.B*.7*Op),y=t==="cv"?{f:3,t:4,b:3,...s.air??{}}:null,S=pM[t]-.5*(x-g)+.1*v-(y?.04*(y.f+y.t+y.b):0),A=Math.max(.3,(f/b)**.33),C=r.reduce((_,E)=>_+Et[E.gun].m*E.guns,0)/1e3,I=n.D-n.T-v;return{kind:t,mounts:r,torps:a,disp:b,dW:m,gm:S,sink:v,speedK:A,broadside:C,freeboard:I,aa:u,air:y,ok:S>.05&&I>.3}}var bi={speed:24.7,run:6e3,depth:3,dmg:70,hole:14},Hp=320,gM=new pt,Vp=new M,bM=new M,Gp=new me,bc=class{constructor(e){this.fx=e,this.list=[],this.events=[];let t=new Rn(1,1).rotateX(-Math.PI/2).translate(0,0,-.5),n=new gt({transparent:!0,depthWrite:!1,uniforms:{uLen:{value:Hp}},vertexShader:`
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
        }`});this.mesh=new cn(t,n,256),this.attr=new vn(new Float32Array(256*2),2),this.mesh.geometry.setAttribute("aT",this.attr),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=5}launch(e,t,n,i){let r=new M(n.x,0,n.z).normalize();this.list.push({from:e,p:new M(t.x,-bi.depth,t.z),p0:new M(t.x,0,t.z),d:r,run:0,max:e.oxy?bi.run*2:bi.run,t0:i,alive:!0,fade:1,seed:Math.random()}),this.fx.spawn(7,t.x,1,t.z,r.x*4,2,r.z*4,3,2,{grow:2,drag:1,buoy:-2,alpha:.6}),this.events.push({kind:"launch",type:"torp",at:t.clone(),from:e})}update(e,t,n){for(let a of this.list){if(!a.alive){a.fade-=e/20;continue}let o=bi.speed*e,c=Vp.copy(a.p);if(a.p.addScaledVector(a.d,o),a.run+=o,a.run>a.max){a.alive=!1;continue}for(let l of n){if(l===a.from||l.gone||l.body.sunk||a.run<60)continue;let h=l.body,u=l.meta.L*.55;if((h.pos.x-a.p.x)**2+(h.pos.z-a.p.z)**2>u*u)continue;let d=bM.copy(a.p).sub(h.pos).applyQuaternion(gM.copy(h.quat).invert()),f=l.meta.L,m=l.meta.B,b=Math.abs(d.z)/(f/2);if(b<1&&Math.abs(d.x)<m/2*Math.sqrt(Math.max(0,1-b**2.4))&&d.y>-l.meta.T-1){a.alive=!1;let g=new M(a.p.x,0,a.p.z);this.events.push({kind:"torphit",type:"torp",ship:l,local:d.clone(),world:g,from:a.from});break}}Math.random()<e*8&&this.fx.spawn(7,a.p.x,.3,a.p.z,Math.random()-.5,.6,Math.random()-.5,1.2,3,{grow:.8,drag:1.5,buoy:-.5,alpha:.5})}this.list=this.list.filter(a=>a.alive||a.fade>0);let i=0;for(let a of this.list){let o=Math.min(a.run,Hp);if(o<1)continue;let c=Math.atan2(a.d.x,a.d.z);if(Gp.makeRotationY(c).scale(Vp.set(7,1,o)).setPosition(a.p.x,.15,a.p.z),this.mesh.setMatrixAt(i,Gp),this.attr.setXY(i,Math.max(a.fade,0),a.seed),++i>=256)break}this.mesh.count=i,this.mesh.instanceMatrix.needsUpdate=!0,this.attr.needsUpdate=!0;let r=this.events;return this.events=[],r}};var pa=5,Wp=8,Xp={f:{speed:125,alt:450},t:{speed:85,alt:160},b:{speed:95,alt:800}},ma={dd:[0,2],cl:[2,4],ca:[4,6],bc:[6,8],bb:[8,10],cv:[8,12],wh:[16,24],sp:[16,24],tr:[0,2]},Zp={dd:4,cl:8,ca:10,bc:14,bb:18,cv:18,sp:24,wh:0,tr:0},xu=10,vM=6e3,xM=1500,$p=.0055,yM=.011,_M=16e3,fa=3,qp=13,jp=1.6,Yp=40,Kp=2.4,Ui=new M,bu=new M,vc=new me,xc=new pt,Jp=new ji,vu=new M,at=()=>Math.random();function MM(){let s=[new ln(.55,.35,9,8).rotateX(Math.PI/2),new ni(12,.22,2.2).translate(0,-.2,.8),new ni(4.2,.16,1.2).translate(0,.1,-3.8),new ni(.16,1.7,1.3).translate(0,.85,-3.9),new ln(.62,.62,.5,10).rotateX(Math.PI/2).translate(0,0,4.6)],e=[],t=[],n=[],i=0;for(let a of s){let o=a.toNonIndexed();o.computeVertexNormals();let c=o.attributes.position.array,l=o.attributes.normal.array;for(let h=0;h<c.length;h++)e.push(c[h]*2),t.push(l[h]);for(let h=0;h<c.length/3;h++)n.push(i+h);i+=c.length/3}let r=new mt;return r.setAttribute("position",new Je(e,3)),r.setAttribute("normal",new Je(t,3)),r.setIndex(n),r}var yc=class{constructor({battle:e,fx:t,torps:n,patch:i}){this.b=e,this.fx=t,this.torps=n,this.sq=[],this.falling=[],this.group=new dt,this.patch=i;let r=MM();this.mesh={};for(let[a,o]of[["A",2369579],["E",10199718]]){let c=new Xt({color:o,roughness:.55,metalness:.35});i?.(c);for(let l of["f","t","b"]){let h=new cn(r,c,120);h.count=0,h.frustumCulled=!1,this.mesh[a+l]=h,this.group.add(h)}}this.scale=1,this.prop=null,this.labels=new Map,this.events=[]}async load(e,t=8){let n;try{let b=await fetch(`${e}planes.json`);if(!b.ok)return;n=await b.json()}catch{return}let i=new mi,r=async(b,g)=>{let p=await i.loadAsync(e+b);return p.flipY=!1,p.colorSpace=g?tt:Vt,p.anisotropy=t,p},[a,o,c,l]=await Promise.all([r("planes_base.webp",!0),r("planes_base_e.webp",!0),r("planes_orm.webp",!1),new ns().setMeshoptDecoder(_r).loadAsync(e+"planes.glb")]),h=b=>{let g=null;return l.scene.traverse(p=>{!g&&p.name===b&&p.geometry&&(g=p.geometry)}),g||l.scene.traverse(p=>{!g&&p.geometry&&p.parent?.name===b&&(g=p.geometry)}),g},u={f:"fighter",t:"attack",b:"bomber"},d=1.8;for(let[b,g]of[["A",a],["E",o]]){let p=new Xt({map:g,aoMap:c,roughnessMap:c,metalnessMap:c,roughness:1,metalness:1,envMapIntensity:.7});this.patch?.(p);for(let x of["f","t","b"]){let v=h(u[x]);if(!v)continue;let y=this.mesh[b+x],S=new cn(v.clone().scale(d,d,d),p,120);S.count=0,S.frustumCulled=!1,this.group.remove(y),this.group.add(S),this.mesh[b+x]=S}}let f=new ur(1,24),m=new Wt({color:2763306,transparent:!0,opacity:.14,depthWrite:!1,side:Yt});return this.prop=new cn(f,m,260),this.prop.count=0,this.prop.frustumCulled=!1,this.group.add(this.prop),this.meta={f:n.fighter,t:n.attack,b:n.bomber},this.S=d,this.meshes()}meshes(){return Object.values(this.mesh)}reset(){this.sq.length=0,this.falling.length=0;for(let e of this.labels.values())e.remove();this.labels.clear()}airborne(e){return this.sq.filter(t=>t.n>0&&(!e||t.side===e)).length}launchStep(e,t){let n=e.wing;if(!n||!e.alive||(n.cool-=t,n.deck=Math.max(0,n.deck-t),n.cool>0||n.deck>0||e.body.founder>0)||this.airborne()>=Wp||this.airborne(e.side)>=Wp/2)return;let i=this.b.ships.filter(c=>c.side!==e.side&&c.alive);if(this.sq.some(c=>c.side!==e.side&&c.n>0&&c.kind!=="f")&&n.planes.f>=2&&!this.sq.some(c=>c.side===e.side&&c.kind==="f"&&c.job==="cap"))return this.launch(e,"f",{job:"cap"});let a=e.focus?.alive?e.focus:null;if(!a){let c=-1;for(let l of i){let h=l.body.pos.distanceTo(e.body.pos);if(h>_M)continue;let u=({wh:9,sp:9,cv:8,bb:7,bc:6,tr:3.5,ca:4,cl:3,dd:2}[l.kind]??3)-h/8e3;u>c&&(c=u,a=l)}}if(!a)return;n.turn=(n.turn??0)+1;let o=n.turn%3===0?["f","t","b"]:n.turn%2?["t","b","f"]:["b","t","f"];for(let c of o)if(!(n.planes[c]<2)){if(c==="f"){let l=this.sq.filter(h=>h.side===e.side&&h.kind!=="f"&&h.job==="strike"&&h.n>0).pop();if(!l)continue;return this.launch(e,"f",{job:"escort",escort:l,target:a})}return this.launch(e,c,{job:"strike",target:a})}}launch(e,t,n){let i=e.wing,r=Math.min(pa,i.planes[t]);i.planes[t]-=r,i.cool=9+at()*3;let a={y:e.meta.deck_top+8.7+1.7,z0:-e.meta.L*.3},o=e.body.toWorld(Ui.set(0,a.y,a.z0),new M),c={side:e.side,kind:t,n:r,n0:r,home:e,pos:o,yaw:e.body.yaw,pitch:0,alt:o.y,speed:e.body.speed,job:n.job,target:n.target??null,escort:n.escort??null,state:"up",t:0,dmg:0,id:Math.random(),deck:a,trail:[]};this.sq.push(c),this.events.push({kind:"launch",side:e.side,plane:t})}update(e,t){this.events.length>200&&this.events.splice(0,this.events.length-100);for(let n of this.b.ships)n.wing&&this.launchStep(n,e);for(let n of this.sq)this.fly(n,e,t);this.aaStep(e),this.dogfights(e);for(let n of this.sq)if(n.n>0&&n.dmg>=1)for(;n.dmg>=1&&n.n>0;)n.dmg-=1,n.n--,this.shotDown(n);this.sq=this.sq.filter(n=>n.n>0&&n.state!=="landed");for(let n of this.falling)n.t+=e,n.vel.y-=9.81*e,n.pos.addScaledVector(n.vel,e),n.rot+=e*2.5,at()<e*25&&this.fx.spawn(we.SOOT,n.pos.x,n.pos.y,n.pos.z,0,1,0,3+at()*2,5,{grow:1.5,drag:1,buoy:.2,alpha:.6});for(let n of this.falling)n.pos.y<=0&&!n.splashed&&(n.splashed=!0,this.fx.column(new M(n.pos.x,0,n.pos.z),.1));this.falling=this.falling.filter(n=>n.pos.y>-5)}shotDown(e){let t=this.placeOf(e,e.n,new M),n=t.yaw+(at()-.5)*.25,i=t.pos.clone().add(Ui.set((at()-.5)*.4,(at()-.5)*.4,(at()-.5)*.4)),r=e.speed*.85;this.falling.push({side:e.side,kind:e.kind,pos:i,vel:new M(Math.sin(n)*Math.cos(t.pitch)*r,Math.sin(t.pitch)*r-4,Math.cos(n)*Math.cos(t.pitch)*r),yaw:n,pitch0:t.pitch,bank0:t.bank,rot:0,t:0}),this.fx.spawn(we.FLASH,i.x,i.y,i.z,0,0,0,10,.1),this.events.push({kind:"downed",side:e.side,plane:e.kind,at:i.clone()})}rollPos(e,t,n){let i=e.home.body,r=e.home.meta.L,a=he.clamp(t,0,45/18);return i.toWorld(Ui.set(0,e.home.meta.deck_top+8.7+1.7,-r*.3+45*a-9*a*a),n)}placeOf(e,t,n){if(e.ltrail){let b=e.lt-t*Kp,g=e.home.body;if(e.td!==void 0&&b>=e.td)return this.rollPos(e,b-e.td,n),{pos:n,yaw:g.yaw,pitch:0,bank:0,parked:b-e.td>2.6,gone:b-e.td>3.4};let p=Math.ceil(t/2),x=t%2?1:-1,v=Math.cos(e.yaw),y=Math.sin(e.yaw),S=t?x*p*34:0,A=-p*30;if(n.set(e.pos.x+S*v+A*y,e.pos.y-p*4,e.pos.z-S*y+A*v),b<=0)return{pos:n,yaw:e.yaw,pitch:e.pitch,bank:e.bank??0};let C=e.ltrail[Math.min(e.ltrail.length-1,Math.round(b*60))],I=he.smoothstep(b,0,6);return n.lerp(C.p,I),{pos:n,yaw:e.yaw+(C.yaw-e.yaw)*I,pitch:e.pitch+(C.pitch-e.pitch)*I,bank:(e.bank??0)*(1-I)+C.bank*I}}let i=Math.ceil(t/2),r=t%2?1:-1,a=t?r*i*34:0,o=-i*30,c=Math.cos(e.yaw),l=Math.sin(e.yaw);n.set(e.pos.x+a*c+o*l,e.pos.y-i*4+Math.sin(e.t*1.3+t)*2,e.pos.z-a*l+o*c);let h=e.t-t*jp,u=e.trail?he.smoothstep(h,fa+6,fa+14):1,d=e.yaw,f=e.pitch,m=e.bank??0;if(u<1){let b=new M,g=e.yaw,p=e.pitch,x=e.bank??0;if(h<fa)this.deckPos(e,h,b),g=e.home.body.yaw,p=0,x=0;else{let v=e.trail[Math.min(e.trail.length-1,Math.max(0,Math.round(h*60)))];v?(b.copy(v.p),g=v.yaw,p=v.pitch,x=v.bank):b.copy(n)}n.copy(b.lerp(n,u)),d=g+(d-g)*u,f=p+(f-p)*u,m=x*(1-u)+m*u}return{pos:n,yaw:d,pitch:f,bank:m,parked:h<0}}steer(e,t,n,i,r,a=Xp[e.kind].speed*(e.side==="A"&&e.kind==="t"&&this.b.airTech?.t2?1.18:1)){let o=Math.atan2(t-e.pos.x,n-e.pos.z),c=he.euclideanModulo(o-e.yaw+Math.PI,Math.PI*2)-Math.PI;e.yaw+=he.clamp(c,-.35*r,.35*r),e.speed+=(a-e.speed)*Math.min(r*.5,1);let l=he.clamp(i-e.pos.y,-e.speed*.35,e.speed*.25);return e.pitch=Math.atan2(l,e.speed),e.pos.x+=Math.sin(e.yaw)*e.speed*r,e.pos.z+=Math.cos(e.yaw)*e.speed*r,e.pos.y+=l*r,e.bank=he.clamp(-c*1.2,-.7,.7),Math.hypot(t-e.pos.x,n-e.pos.z)}fly(e,t,n){e.t+=t;let i=Xp[e.kind],r=e.home;if(e.trail&&e.t<Yp&&e.trail.push({p:e.pos.clone(),yaw:e.yaw,pitch:e.pitch,bank:e.bank??0}),e.state==="up"){if(e.t<fa){this.deckPos(e,e.t,e.pos),e.yaw=r.body.yaw,e.pitch=0,e.speed=r.body.speed+qp*e.t;return}e.speed=Math.min(e.speed+t*6,i.speed),e.pitch=Math.min(e.pitch+t*.12,.16),e.pos.x+=Math.sin(e.yaw)*Math.cos(e.pitch)*e.speed*t,e.pos.z+=Math.cos(e.yaw)*Math.cos(e.pitch)*e.speed*t,e.pos.y+=Math.sin(e.pitch)*e.speed*t,e.t>fa+6&&(e.state=e.job==="cap"?"cap":"out",e.pitch=.05);return}if(e.state==="home"){if(!r.alive||r.body.founder>0){e.ditch=(e.ditch??0)+t,e.ditch>60&&(e.n=0),this.steer(e,r.body.pos.x,r.body.pos.z,120,t);return}this.steer(e,r.body.pos.x,r.body.pos.z,120,t)<2600&&(e.state="approach",e.lt=0,e.ltrail=[]);return}if(e.state==="approach"||e.state==="final"||e.state==="deck"){if(!r.alive||r.body.founder>0){e.state="home",e.ltrail=null;return}e.lt+=t,e.ltrail.length<4e3&&e.ltrail.push({p:e.pos.clone(),yaw:e.yaw,pitch:e.pitch,bank:e.bank??0});let h=r.body,u=r.meta.L,d=r.meta.deck_top+8.7+1.7;if(e.state==="approach"){let f=h.toWorld(Ui.set(0,0,-u/2-750),new M);this.steer(e,f.x,f.z,90,t,75)<160&&(e.state="final");return}if(e.state==="final"){let f=h.toWorld(Ui.set(0,d,-u*.3),new M),m=h.toLocal(e.pos.clone(),new M),b=h.toWorld(Ui.set(0,d,Math.min(m.z+260,-u*.3)),new M),g=Math.atan2(b.x-e.pos.x,b.z-e.pos.z),p=he.euclideanModulo(g-e.yaw+Math.PI,Math.PI*2)-Math.PI;e.yaw+=he.clamp(p,-.4*t,.4*t),e.bank=he.clamp(-p*1.2,-.5,.5),e.speed+=(Math.max(h.speed,0)+40-e.speed)*Math.min(t,1);let x=Math.max(-u*.3-m.z,0),v=d+Math.min(x/700,1)*80,y=he.clamp(v-e.pos.y,-12,6);e.pitch=Math.atan2(y,e.speed)+.06,e.pos.x+=Math.sin(e.yaw)*e.speed*t,e.pos.z+=Math.cos(e.yaw)*e.speed*t,e.pos.y+=y*t,m.z>=-u*.3-4&&Math.abs(m.x)<14?(e.state="deck",e.td=e.lt,this.events.push({kind:"touchdown",side:e.side,at:f})):m.z>-u*.3+30&&(e.state="approach");return}this.rollPos(e,e.lt-e.td,e.pos),e.yaw=h.yaw,e.pitch=0,e.bank=0,e.lt>e.td+(e.n-1)*Kp+3.5&&(r.wing.planes[e.kind]+=e.n,e.state="landed",this.events.push({kind:"landed",side:e.side}));return}if(e.state==="cap"){let h=(this.b.ships.find(d=>d.side===e.side&&d.flagship&&d.alive)??r).body.pos,u=this.nearestFoe(e,8e3,h);if(u)e.chase=u,this.steer(e,u.pos.x,u.pos.z,u.pos.y,t,i.speed*1.15);else{let d=n*.08+e.id*6;this.steer(e,h.x+Math.sin(d)*1500,h.z+Math.cos(d)*1500,i.alt,t)}e.t>240&&(e.state="home");return}if(e.job==="escort"){let h=e.escort,u=this.nearestFoe(e,3500,e.pos);if(u){this.steer(e,u.pos.x,u.pos.z,u.pos.y,t,i.speed*1.15);return}if(!h||h.n<=0||h.state==="home"||h.state==="landed"){e.state="home";return}this.steer(e,h.pos.x-Math.sin(h.yaw)*200+150,h.pos.z-Math.cos(h.yaw)*200,h.pos.y+150,t,Math.max(h.speed,80));return}let a=e.target;if(!a?.alive){let h=this.b.ships.filter(u=>u.side!==e.side&&u.alive).sort((u,d)=>u.body.pos.distanceTo(e.pos)-d.body.pos.distanceTo(e.pos))[0];if(h&&h.body.pos.distanceTo(e.pos)<9e3)e.target=h;else{e.state="home";return}return}let o=a.body.pos,c=a.body.vel,l=Math.hypot(o.x-e.pos.x,o.z-e.pos.z);if(e.kind==="t"){let h=Math.min(l/i.speed,40)+40.48582995951417,u=o.x+c.x*h*.6,d=o.z+c.z*h*.6,f=l<5e3?30:i.alt;this.steer(e,u,d,f,t),l<1100&&e.pos.y<60&&this.dropTorpedoes(e,a,n)}else if(e.state!=="dive"&&l<1300&&(e.state="dive"),e.state==="dive"){let u=o.x+c.x*4,d=o.z+c.z*4;e.yaw+=he.clamp(he.euclideanModulo(Math.atan2(u-e.pos.x,d-e.pos.z)-e.yaw+Math.PI,Math.PI*2)-Math.PI,-t,t),e.speed=Math.min(e.speed+t*25,150);let f=Math.hypot(u-e.pos.x,d-e.pos.z),m=Math.atan2(e.pos.y-250,Math.max(f,1));e.pitch=-Math.min(m,1.25),e.pos.x+=Math.sin(e.yaw)*Math.cos(e.pitch)*e.speed*t,e.pos.z+=Math.cos(e.yaw)*Math.cos(e.pitch)*e.speed*t,e.pos.y+=Math.sin(e.pitch)*e.speed*t,(e.pos.y<=260||f<60)&&this.dropBombs(e,a)}else this.steer(e,o.x,o.z,i.alt,t)}deckPos(e,t,n){let i=e.home.body,r=e.deck,a=t<0?r.z0-13*Math.ceil(-t/jp):r.z0+.5*qp*t*t;return i.toWorld(Ui.set(0,r.y,a),n)}nearestFoe(e,t,n){let i=null,r=t;for(let a of this.sq){if(a.side===e.side||a.n<=0||a.state==="up")continue;let o=a.pos.distanceTo(n);o<r&&(r=o,i=a)}return i}dropTorpedoes(e,t,n){let i=t.body.pos,r=t.body.vel,a=i.x,o=i.z;for(let l=0;l<4;l++){let h=Math.hypot(a-e.pos.x,o-e.pos.z)/24.7;a=i.x+r.x*h,o=i.z+r.z*h}let c=Math.atan2(a-e.pos.x,o-e.pos.z);for(let l=0;l<e.n;l++){let h=(l-(e.n-1)/2)*40,u=new M(e.pos.x+Math.cos(e.yaw)*h,0,e.pos.z-Math.sin(e.yaw)*h),d=c+(l-(e.n-1)/2)*.03;this.torps.launch(e.home,u,new M(Math.sin(d),0,Math.cos(d)),n),this.fx.spawn(we.SPRAY,u.x,1,u.z,0,6,0,2,1.2)}this.events.push({kind:"drop",side:e.side,plane:"t",at:e.pos.clone()}),e.state="home"}dropBombs(e,t){let n=Math.min(Math.max(t.body.speed,0)/18,1)*.35+Math.min(Math.abs(t.body.yawRate)*12,.2),i=(e.side==="A"&&this.b.airTech?.b2?.48:.36)*(1-n),r=0;for(let a=0;a<e.n;a++)if(at()<i)r++;else{let o=at()*6.283,c=25+at()*60;this.fx.column(new M(t.body.pos.x+Math.sin(o)*(t.meta.B/2+c),0,t.body.pos.z+Math.cos(o)*(t.meta.B/2+c)),.14)}for(let a=0;a<r;a++)this.b.bombHit(t,e.home);this.events.push({kind:"drop",side:e.side,plane:"b",at:e.pos.clone(),hits:r}),e.state="home",e.pitch=.5}aaStep(e){for(let t of this.b.ships){if(!t.alive||!t.aa)continue;let n=t.aa.k*(.5+.5*Math.max(t.hp,0)/t.hpMax),i=t.body.pos;for(let r of this.sq){if(r.side===t.side||r.n<=0||r.state==="up"||r.state==="deck")continue;let a=Math.hypot(r.pos.x-i.x,r.pos.z-i.z);if(a>vM)continue;let o=r.pos.y,c=o>200?t.aa.ha*$p:t.aa.ha*$p*.4,l=a<xM&&o<1e3?t.aa.mg*yM*(r.state==="dive"||r.kind==="t"?1.3:1):0;if(r.dmg+=(c+l)*n*(r.side==="A"&&r.kind==="t"&&this.b.airTech?.t2?.75:1)*e,t.aa.ha&&at()<Math.min(t.aa.ha*.35,5)*Math.min(n*1.6,1)*e&&this.fx.spawn(we.SOOT,r.pos.x+(at()-.5)*220,r.pos.y+(at()-.3)*120,r.pos.z+(at()-.5)*220,0,.5,0,9+at()*6,7+at()*4,{grow:1.6,drag:1,buoy:0,alpha:.85})>=0&&this.flak(r),l&&at()<Math.min(t.aa.mg*.8,10)*e){let h=t.body.toWorld(Ui.set((at()-.5)*t.meta.B*.7,t.meta.deck_top+4,(at()-.5)*t.meta.L*.5),bu),u=vu.copy(r.pos).add(Ui.set((at()-.5)*60,(at()-.5)*40,(at()-.5)*60)).sub(h),d=u.length();u.multiplyScalar(800/d),this.fx.spawn(we.EMBER,h.x,h.y,h.z,u.x,u.y,u.z,.9,d/800,{drag:0}),at()<.3&&this.events.push({kind:"aa",at:h.clone()})}}}}flak(e){at()<.5&&this.fx.spawn(we.FLASH,e.pos.x+(at()-.5)*200,e.pos.y+(at()-.3)*100,e.pos.z+(at()-.5)*200,0,0,0,7,.07),this.events.push({kind:"flak",at:e.pos.clone()})}dogfights(e){for(let t of this.sq)if(!(t.kind!=="f"||t.n<=0||t.state==="up"))for(let n of this.sq){if(n.side===t.side||n.n<=0||n.state==="up"||t.pos.distanceTo(n.pos)>1200)continue;let i=t.side==="A"&&this.b.airTech?.f2?1.4:1,r=n.side==="A"&&this.b.airTech?.f2?1.4:1;n.dmg+=t.n*(n.kind==="f"?.045:.1)*i*e;for(let a of[t,n]){let o=Math.sin(a.t*1.7+a.id*9)*.5;a.yaw+=o*e,a.bank=he.clamp(-o*1.6,-.9,.9)}if(t.dmg+=n.n*(n.kind==="f"?.045:.008)*r*e,at()<e*6){let a=n.pos;this.fx.spawn(we.EMBER,t.pos.x,t.pos.y,t.pos.z,(a.x-t.pos.x)*2,(a.y-t.pos.y)*2,(a.z-t.pos.z)*2,.8,.5,{drag:0}),this.events.push({kind:"mg",at:t.pos.clone()})}}}draw(){let e={},t=0,n=(r,a,o,c,l,h,u=!0)=>{let d=r+a,f=this.mesh[d];if(e[d]??=0,!(e[d]>=120)&&(Jp.set(-l,c,h,"YXZ"),xc.setFromEuler(Jp),vc.compose(o,xc,vu.set(1,1,1)),f.setMatrixAt(e[d]++,vc),this.prop&&u&&t<260)){let m=this.meta[a],b=m.propR*this.S;bu.set(m.prop[0],m.prop[1],m.prop[2]).multiplyScalar(this.S).applyQuaternion(xc).add(o),vc.compose(bu,xc,vu.set(b,b,b)),this.prop.setMatrixAt(t++,vc)}},i=new M;for(let r of this.sq){for(let a=0;a<r.n;a++){let o=this.placeOf(r,a,i);o.gone||n(r.side,r.kind,o.pos,o.yaw,o.pitch,o.bank,!o.parked)}r.trail&&r.t>Yp&&(r.trail=null)}for(let r of this.falling)n(r.side,r.kind??"f",r.pos,r.yaw,(r.pitch0??0)+((r.pitch0??0)-.7-(r.pitch0??0))*Math.min(r.t/2.5,1),(r.bank0??0)+r.rot,!1);for(let[r,a]of Object.entries(this.mesh))a.count=e[r]??0,a.instanceMatrix.needsUpdate=!0;this.prop&&(this.prop.count=t,this.prop.instanceMatrix.needsUpdate=!0)}overlay(e,t,n){let i=new Set;for(let r of this.sq){i.add(r);let a=this.labels.get(r);a||(a=document.createElement("div"),a.className="sqd "+(r.side==="A"?"own":"foe"),t.appendChild(a),this.labels.set(r,a));let[o,c,l]=e(r.pos);if(l>1){a.style.display="none";continue}a.style.display="block",a.style.transform=`translate(${(o+14).toFixed(0)}px, ${(c-22).toFixed(0)}px)`,a.textContent=`${n[r.kind]} ${r.n}`}for(let[r,a]of this.labels)i.has(r)||(a.remove(),this.labels.delete(r))}};var yu=()=>new M,wM={bb:260,bc:200,ca:95,cl:70,dd:30,tr:90,cv:170,sp:520,wh:700},SM={bb:64e3,bc:42e3,ca:13e3,cl:8500,dd:2400,tr:1e4,cv:38e3,sp:12e4,wh:12e4},EM={ca:2,bc:1.6,cv:1.5,wh:1},Jt=s=>he.euclideanModulo(s+Math.PI,Math.PI*2)-Math.PI,si=()=>{let s=0;for(let e=0;e<4;e++)s+=Math.random();return(s-2)*1.73},TM=1,_c=class{constructor({art:e,sea:t,artillery:n,fx:i,torpedoes:r}){this.art=e,this.sea=t,this.arty=n,this.fx=i,this.torp=r,this.ships=[],this.log=[],this.events=[],this.wave=0,this.waveT=0,this.score=0,this.sunkN=0,this.auto=!1,this.waves=!0,this.fog=0,this.stage=null,this.sunkList=[]}reset(){this.ships.length=0,this.log.length=0,this.events.length=0,this.sunkList.length=0,this.wave=0,this.waveT=0,this.score=0,this.sunkN=0,this.stage=null,this.fog=0,this.arty.shells.length=0,this.torp&&(this.torp.list.length=0),this.fx.clear?.(),this.air?.reset()}add(e,t,n,i,r,a=0,o={}){let c=this.art.kinds[e],l=c.meta,h=new gc(l,this.sea);h.place(n,i,r,a),h.ctl.tele=a>0?t==="A"?2:4:1;let u=(l.boxes??[]).map(p=>({min:new M(...p.min),max:new M(...p.max),part:p.part})),d=ii(o.design??Vn(e,l),this.art);o.design&&h.applyFit(d);let f=o.mods??{};f.speedK&&(h.vmax*=f.speedK),f.gm&&(h.gm+=f.gm),f.flood&&(h.floodK=f.flood);let m=d.mounts.map(p=>{let x=p.home,v=Math.min((p.arc[1]-p.arc[0])/2,Math.PI*5/6);p=Object.assign({},p,{arc:[x-v,x+v]});let y=Et[p.gun];return{meta:p,g:y,yaw:x,rest:x,yawV:0,elev:0,elevV:0,reload:Math.random()*y.reload,recoil:new Array(p.guns??2).fill(0),broken:!1,ready:!1,onTarget:!1}});for(let p of d.mounts)if(p.slot[0]==="x"||p.tier>0){let x=4*p.scale*p.wide,v=5*p.scale;u.push({min:new M(p.at[0]-x,p.at[1],p.at[2]-x),max:new M(p.at[0]+x,p.at[1]+v,p.at[2]+x),part:"turret"})}let b=wM[e]*(t==="A"&&!o.escort?1.8:1)*(f.hpK??1)*(o.boss?EM[e]??1.5:1),g={id:TM++,kind:e,side:t,meta:l,body:h,boxes:u,turrets:m,fit:d,torps:d.torps.map(p=>({meta:p,reload:Math.random()*20})),maxRange:Math.max(...m.map(p=>p.g.range),1e3),hp:b*(o.hpFrac??1),hpMax:b,burn:[0,0,0],fires:[0,0,0],alive:!0,gone:!1,target:null,focus:null,order:null,slot:null,fc:new Map,player:t==="A"&&!o.escort,flagship:!!o.flagship,group:o.group??0,born:this.t??0,sel:!1,opts:o,uid:o.uid??0,name:o.name??"",boss:!!o.boss,escort:!!o.escort,kills:0,aa:{ha:(f.aaStock?.[0]??ma[e]?.[0]??0)+(d.aa?.ha??0),mg:(f.aaStock?.[1]??ma[e]?.[1]??0)+(d.aa?.mg??0),k:f.aa??1},wing:e==="cv"?{planes:o.planes?{...o.planes}:{f:(d.air?.f??3)*pa,t:(d.air?.t??4)*pa,b:(d.air?.b??3)*pa},cool:15+Math.random()*10,deck:0,turn:0,hits:0}:null,reloadK:f.reloadK??1,level:f.level??0,armor:(ua[e]?.armor??0)+(f.armor??0),fcStart:f.fcStart??1,fcMin:f.fcMin??(t==="A"?.14:.3),torpK:f.torpK??1,oxy:!!f.oxy};return this.ships.push(g),g}refit(e,t){let n=this.ships.indexOf(e);if(n<0)return e;this.ships.splice(n,1);let i=e.body,r=this.add(e.kind,e.side,i.pos.x,i.pos.z,i.yaw,Math.max(i.speed,0),{...e.opts,design:t,flagship:e.flagship,group:e.group,hpFrac:Math.max(e.hp,0)/e.hpMax});this.ships.pop(),this.ships.splice(n,0,r),r.station=e.station,r.sel=e.sel,r.order=e.order,r.design=t,r.label=e.label;let a=new Set(e.turrets.map(o=>`${o.meta.slot}/${o.meta.tier}/${o.meta.gun}/${o.meta.guns}`));return r.turrets.forEach((o,c)=>{a.has(`${o.meta.slot}/${o.meta.tier}/${o.meta.gun}/${o.meta.guns}`)||(o.drop=1+c*0)}),r.body.ctl.tele=i.ctl.tele,r}dockStep(e,t,n){for(let i of n)i.kind==="hit"&&this.hit(i);for(let i of this.ships)if(!i.gone){if(i.body.sunk){i.gone=!0;continue}i.alive&&i.body.founder>0&&(i.alive=!1,this.log.push({kind:"capsize",ship:i})),i.testAim&&this.turretStep(i,e,t),this.burnStep(i,e)}}enemiesOf(e){return this.ships.filter(t=>t.side!==e.side&&t.alive)}flagship(){return this.ships.find(e=>e.flagship&&e.side==="A")}update(e,t,n){this.t=t;for(let i of n)i.kind==="hit"?this.hit(i):i.kind==="torphit"&&this.torpHit(i);for(let i of this.ships)if(!i.gone){if(i.body.sunk){i.gone=!0;continue}if(i.alive&&i.body.founder>0&&(i.alive=!1,this.log.push({kind:"capsize",ship:i}),this.events.push({kind:"capsize",type:i.kind,world:i.body.pos.clone()})),!i.alive){this.burnStep(i,e);continue}if(this.torpStep(i,e,t),this.evadeStep(i,t),this.pickTarget(i),i.noSteer)i.body.ctl.rudder=0;else if(i.escort){let r=this.flagship();i.evade?this.steerTo(i,i.evade.hd,4):i.station&&r?.alive?this.keepStation(i,r):this.steerTo(i,i.course??i.body.yaw,3),this.avoid(i,e)}else i.player&&!this.auto?this.steerPlayer(i,e):this.steerAI(i,e),this.avoid(i,e);this.turretStep(i,e,t),this.burnStep(i,e)}this.air?.update(e,t),this.stage?this.stageStep(e):this.waves&&this.waveStep(e)}pickTarget(e){let t={range:this.fog?Math.min(e.maxRange,this.fog):e.maxRange};if(e.focus&&!e.focus.alive&&(e.focus=null),e.focus){e.target=e.focus;return}let n=null,i=t.range*1.02;for(let r of this.ships){if(r.side===e.side||!r.alive)continue;let a=r.body.pos.distanceTo(e.body.pos),o=(r===e.target?.8:1)*(r.escort?.88:1);a*o<i&&(i=a*o,n=r)}e.target=n}turretStep(e,t,n){let i=e.body,r=e.target,a=r?e.fc.get(r.id):null;r&&!a&&(a={err:e.fcStart,r:si(),a:si(),turn:r.body.yawRate},e.fc.set(r.id,a)),a&&Math.abs(r.body.yawRate-a.turn)>.01&&(a.err=Math.min(a.err+.3,1),a.turn=r.body.yawRate);let o=yu(),c=yu();for(let l of e.turrets){let h=l.g,u=l.lockOn?.alive?l.lockOn:e.target,d=u?e.fc.get(u.id)??a:null;for(let S=0;S<l.recoil.length;S++)l.recoil[S]>0&&(l.recoil[S]+=t,l.recoil[S]>1.6&&(l.recoil[S]=0));if(l.broken){l.elev=Math.max(l.elev-t*.01,-.04),l.gunElev&&l.gunElev.fill(l.elev);continue}l.reload=Math.max(0,l.reload-t);let f=l.rest,m=0,b=null;if(i.toWorld(c.set(...l.meta.at),o),e.testAim){let S=Jt(e.testAim.brg-l.rest),A=Jt(l.meta.arc[0]-l.rest),C=Jt(l.meta.arc[1]-l.rest);S>=A&&S<=C&&(f=l.rest+S,m=e.testAim.elev,b={e:m})}else if(u){let S=u.body.pos,A=u.body.vel,C=Math.hypot(S.x-o.x,S.z-o.z),I=0,_=S.x,E=S.z;for(let D=0;D<3&&(b=Sr(l.meta.gun,C),!!b);D++)I=b.t,_=S.x+(A.x-i.vel.x)*I,E=S.z+(A.z-i.vel.z)*I,C=Math.hypot(_-o.x,E-o.z);if(b&&C<=h.range){let D=l.perfect?0:d.err,G=D*(.035*C+25)*d.r,K=D*.004*d.a,P=C+G;b=Sr(l.meta.gun,P)??b,i.toLocal(c.set(_,o.y,E),c);let N=l.meta.at,H=Math.atan2(-(c.x-N[0]),c.z-N[2])+K,q=Jt(H-l.rest),$=Jt(l.meta.arc[0]-l.rest),X=Jt(l.meta.arc[1]-l.rest);if(q>=$&&q<=X){f=l.rest+q;let j=Math.asin(he.clamp(new M(-Math.sin(l.rest+q),0,Math.cos(l.rest+q)).applyQuaternion(i.quat).y,-1,1));m=b.e-j}else b=null}else b=null}let g=h.traverse*Math.PI/180,p=g*.8,x=Jt(f-l.yaw),v=he.clamp(x*1.5,-g,g);l.yawV+=he.clamp(v-l.yawV,-p*t,p*t),l.yaw+=l.yawV*t;let y=h.elevRate*Math.PI/180;l.elev+=he.clamp((m-l.elev)*3,-y,y)*t,l.gunElev??=l.recoil.map(()=>0);for(let S=0;S<l.gunElev.length;S++){let A=l.reload>h.reload*.35?Math.min(l.elev,.087):l.elev;l.gunElev[S]+=he.clamp(A-l.gunElev[S],-y*t*(1-S*.06),y*t*(1-S*.06))}l.onTarget=!!b&&Math.abs(Jt(f-l.yaw))<.006&&Math.abs(m-l.elev)<.003&&l.gunElev.every(S=>Math.abs(S-l.elev)<.004),l.onTarget&&l.reload<=0&&!e.holdFire&&(!e.testAim||e.testAim.fire&&!l.testFired)&&(this.fireTurret(e,l,n),e.testAim&&(l.testFired=!0))}}fireTurret(e,t,n){let i=e.body,r=t.g,a=t.meta,o=a.guns??2,c=new me().compose(i.pos,i.quat,new M(1,1,1)),l=new pt().setFromAxisAngle(new M(0,1,0),-t.yaw),h=new me().compose(new M(...a.at),l,new M(1,1,1)).premultiply(c);for(let d=0;d<o;d++){let f=new pt().setFromAxisAngle(new M(1,0,0),-(t.gunElev?.[d]??t.elev)),m=(d-(o-1)/2)*a.gap,b=new me().compose(new M(a.trunnion[0]+m,a.trunnion[1],a.trunnion[2]),f,new M(1,1,1)).premultiply(h),g=new M(0,0,a.barrel_len).applyMatrix4(b),p=new M(0,0,1).transformDirection(b),x=t.perfect?0:.0012+r.cal*.001;p.x+=si()*x,p.y+=si()*x*.6,p.z+=si()*x,p.normalize(),this.arty.fire(a.gun,e,g,p,n),t.lastShell=this.arty.shells[this.arty.shells.length-1],t.recoil[d]=.001}t.reload=r.reload*(.95+Math.random()*.1)*(e.reloadK??1);let u=e.target&&e.fc.get(e.target.id);u&&(u.err=Math.max(u.err*.72,e.fcMin),u.r=si(),u.a=si())}snapAim(e,t,n=.3){let i=Array.isArray(t)?t:[t],r=i[0],a=e.body,o=new M,c=new M;e.turrets.forEach((h,u)=>{let d=i[u%i.length];a.toWorld(c.set(...h.meta.at),o);let f=d.body.pos,m=d.body.vel,b=Math.hypot(f.x-o.x,f.z-o.z),g=f.x,p=f.z,x=null;for(let _=0;_<3&&(x=Sr(h.meta.gun,b),!!x);_++)g=f.x+(m.x-a.vel.x)*x.t,p=f.z+(m.z-a.vel.z)*x.t,b=Math.hypot(g-o.x,p-o.z);if(!x)return;a.toLocal(c.set(g,o.y,p),c);let v=h.meta.at,y=Math.atan2(-(c.x-v[0]),c.z-v[2]),S=Jt(y-h.rest),A=Jt(h.meta.arc[0]-h.rest),C=Jt(h.meta.arc[1]-h.rest);if(S<A||S>C)return;let I=Math.asin(he.clamp(new M(-Math.sin(h.rest+S),0,Math.cos(h.rest+S)).applyQuaternion(a.quat).y,-1,1));h.yaw=h.rest+S,h.yawV=0,h.elev=x.e-I,h.gunElev=h.recoil.map(()=>x.e-I),h.reload=n+Math.random()*.15,h.lockOn=d});let l=r;for(let h of i)e.fc.set(h.id,{err:.12,r:si()*.5,a:si()*.5,turn:h.body.yawRate});e.focus=l,e.fc.set(l.id,{err:.12,r:si()*.5,a:si()*.5,turn:l.body.yawRate})}torpStep(e,t,n){if(this.torp)for(let i of e.torps){if(i.reload-=t,i.reload>0)continue;let r=e.body.toWorld(new M(...i.meta.at),new M),a=e.body.yaw-i.meta.home,o=null,c=e.oxy?9e3:5500;for(let m of this.ships){if(m.side===e.side||!m.alive)continue;let b=m.body.pos.x-r.x,g=m.body.pos.z-r.z,p=Math.hypot(b,g);p>c||p<400||Math.abs(Jt(Math.atan2(b,g)-a))>1.2||(o=m,c=p)}if(!o)continue;let l=o.body.pos,h=o.body.vel,u=l.x,d=l.z;for(let m=0;m<4;m++){let b=Math.hypot(u-r.x,d-r.z)/bi.speed;u=l.x+h.x*b,d=l.z+h.z*b}let f=Math.atan2(u-r.x,d-r.z);for(let m of[-1.5,-.5,.5,1.5]){let b=f+m*.045;this.torp.launch(e,r,new M(Math.sin(b),0,Math.cos(b)),n)}i.reload=55+Math.random()*10}}torpHit(e){let t=e.ship;if(!t.alive&&t.body.founder>30)return;this.fx.column(e.world,1.1),this.fx.hitBurst(e.world.clone().setY(2),.4);let n=e.local,i=Math.sign(n.x||1);t.body.hole(new M(i*t.meta.B*.45,-t.meta.T*.6,n.z),bi.hole),t.body.rollV+=i*.02,t.hp-=bi.dmg*(1-t.armor*.4)*t.torpK*(e.from?.oxy?1.3:1),this.log.push({kind:"torphit",ship:t}),this.events.push({kind:"torphit",type:"torp",world:e.world.clone()}),t.hp<=0&&t.alive&&this.sink(t,e.from,t.kind==="dd"?"magazine":void 0)}bombHit(e,t){if(!e.alive)return;let n=new M((Math.random()-.5)*e.meta.B*.6,e.meta.deck_top+.5,(Math.random()-.5)*e.meta.L*.7),i=e.body.toWorld(n,new M);this.fx.hitBurst(i,.25),e.hp-=22*(1-e.armor*.5);let r=n.z>e.meta.L/6?0:n.z<-e.meta.L/6?2:1;e.fires[r]=Math.min(1,e.fires[r]+.45);for(let a of e.turrets)!a.broken&&Math.hypot(n.x-a.meta.at[0],n.z-a.meta.at[2])<e.meta.B*.3&&Math.random()<.3&&(a.broken=!0);e.wing&&(e.wing.hits++,e.wing.deck=e.wing.hits>=3?1e9:Math.max(e.wing.deck,45)),e.aa.ha=Math.max(0,e.aa.ha-(Math.random()<.3?1:0)),e.aa.mg=Math.max(0,e.aa.mg-(Math.random()<.4?1:0)),this.events.push({kind:"hit",type:"bomb",world:i}),this.log.push({kind:"bombhit",ship:e}),e.hp<=0&&this.sink(e,t)}hit(e){let t=e.ship,n=Et[e.type];if(!t.alive&&t.body.founder>30)return;this.fx.hitBurst(e.world,n.cal);let i=t.armor,r=he.clamp(n.cal/.36*1.4-i*.9,.12,1),a=t.kind==="dd"&&n.cal>=.3?2.4:t.kind==="cl"&&n.cal>=.3?1.8:t.kind==="ca"&&n.cal>=.4?1.5:1,o=n.dmg*r*a*(.7+Math.random()*.6);t.hp-=o;let c=t.meta.L,l=t.meta.B,h=e.local;h.y<1.8&&e.part.part==="hull"&&t.body.hole(h.clone().setY(Math.min(h.y,-.3)),n.cal*n.cal*5*r);let u=h.z>c/6?0:h.z<-c/6?2:1;(e.part.part!=="hull"||Math.random()<.4)&&(t.fires[u]=Math.min(1,t.fires[u]+.2+n.cal*.9*r));let d=/^turret_(\d+)/.exec(e.part.part??"");d&&t.turrets[+d[1]]&&Math.random()<.6*r&&(t.turrets[+d[1]].broken=!0);for(let f of t.turrets){let m=f.meta.at;if(Math.hypot(h.x-m[0],h.z-m[2])<l*.28){!f.broken&&Math.random()<.35*r&&(f.broken=!0);let g=({bb:.008,bc:.03,ca:.05,cl:.07,dd:.12,tr:.02,cv:.04,sp:.004,wh:.002}[t.kind]??.03)*r*(n.cal>.3?1.6:n.cal>.15?1:.3);if(t.alive&&Math.random()<g){this.magazine(t,AM(t,m),e.from);return}}}t.hp<=0&&t.alive&&this.sink(t,e.from)}magazine(e,t,n=null){this.fx.magazine(t,{bb:1.6,bc:1.5,ca:1,cl:.85,dd:.6,tr:.9,cv:1.4,sp:1.9,wh:1.9}[e.kind]??1),this.log.push({kind:"magazine",ship:e}),this.events.push({kind:"magazine",type:e.kind,world:t.clone()}),e.hp=0,this.sink(e,n,"magazine")}sink(e,t,n){e.alive=!1,e.body.startFounder(n??(Math.abs(e.body.list)>.15||e.kind==="dd"&&Math.random()<.5?"capsize":void 0));for(let i=0;i<3;i++)e.fires[i]=Math.max(e.fires[i],.5+Math.random()*.5);this.log.push({kind:"sunk",ship:e}),e.side!=="A"&&(this.score+=SM[e.kind],this.sunkN++,this.sunkList.push({kind:e.kind,boss:e.boss}),t&&t.side==="A"&&t.kills++)}burnStep(e,t){let n=e.meta.L;for(let i=0;i<3;i++){let r=e.fires[i];if(r<=0)continue;e.burn[i]=Math.min(1,e.burn[i]+r*t*.05),e.alive?(e.hp-=r*t*.25,e.fires[i]=Math.max(0,r-t*.012),e.hp<=0&&this.sink(e,null)):e.fires[i]=Math.max(0,r-t*.004);let a=(1-i)*n/3,o=e.body.toWorld(new M((Math.random()-.5)*e.meta.B*.4,e.meta.deck_top+1,a+(Math.random()-.5)*n/4),yu());o.y>-1&&this.fx.bigFire(o,r,t)}}steerTo(e,t,n){e.body.ctl.pow=void 0;let i=Jt(t-e.body.yaw);e.body.ctl.rudder=he.clamp(-i*2.2,-.6,.6),e.body.ctl.tele=n}evadeStep(e,t){if(!this.torp||e.evade&&t<e.evade.t)return;e.evade=null;let n=e.body.pos,i=e.body.vel,r=e.meta.L/2+25;for(let a of this.torp.list){if(!a.alive||a.from?.side===e.side)continue;let o=a.p.x-n.x,c=a.p.z-n.z;if(Math.hypot(o,c)>(a.from?.oxy?800:2500))continue;let h=a.d.x*bi.speed-i.x,u=a.d.z*bi.speed-i.z,d=h*h+u*u,f=-(o*h+c*u)/d;if(f<0||f>90||Math.hypot(o+h*f,c+u*f)>r)continue;let m=Math.atan2(a.d.x,a.d.z),b=Math.abs(Jt(m-e.body.yaw))<Math.PI/2?m:m+Math.PI;e.evade={t:t+Math.min(f+6,30),hd:b};return}}steerPlayer(e,t){let n=e.body;if(e.evade){this.steerTo(e,e.evade.hd,4);return}let i=this.flagship();if(!e.order&&e.station&&i?.alive&&i!==e)return this.keepStation(e,i);if(!e.order){e.body.ctl.rudder*=Math.exp(-t);return}let r=e.order.x-n.pos.x,a=e.order.z-n.pos.z,o=Math.hypot(r,a);if(o<e.meta.L*.8){e.order=null,n.ctl.tele=1,n.ctl.rudder=0;return}this.steerTo(e,Math.atan2(r,a),o>900?4:o>400?3:2)}keepStation(e,t){let n=e.body;{let i=t.body,[r,a]=e.station,o=Math.cos(i.yaw),c=Math.sin(i.yaw),l=i.pos.x+r*o+a*c,h=i.pos.z-r*c+a*o,u=l-n.pos.x,d=h-n.pos.z,f=u*Math.sin(i.yaw)+d*Math.cos(i.yaw),b=Math.hypot(u,d)>120?Math.atan2(u+Math.sin(i.yaw)*300,d+Math.cos(i.yaw)*300):i.yaw;this.steerTo(e,b,4);let g=Math.max(i.speed+he.clamp(f*.012,-3,4),.5);n.ctl.pow=he.clamp((g/n.vmax)**3*1.05,.02,1)}}steerAI(e,t){let n=e.body;if(e.evade){this.steerTo(e,e.evade.hd,4);return}let i=e.side==="E"&&this.ships.find(d=>d.escort&&d.alive)||this.ships.find(d=>d.side!==e.side&&d.alive&&(d.flagship||d.kind==="bb"||d.kind==="bc"))||e.target,r=e.target??i;if(!r){this.steerTo(e,n.yaw,3);return}let a=r.body.pos.x-n.pos.x,o=r.body.pos.z-n.pos.z,c=Math.hypot(a,o),l=Math.atan2(a,o);if(e.kind==="cv"){let d=c<9500;this.steerTo(e,d?l+Math.PI:c>14e3?l:l+Math.PI/2,2);return}let h=e.kind==="dd"?2600:e.maxRange*.7,u;if(c>h*1.15)u=l;else{let d=Jt(l+Math.PI/2-n.yaw),f=Jt(l-Math.PI/2-n.yaw);u=Math.abs(d)<Math.abs(f)?l+Math.PI/2:l-Math.PI/2,c<h*.7&&(u+=Math.sign(Jt(u-l))*.4)}this.steerTo(e,u,4)}avoid(e,t){let n=e.body;for(let i of this.ships){if(i===e||i.gone)continue;let r=n.pos.x-i.body.pos.x,a=n.pos.z-i.body.pos.z,o=Math.hypot(r,a),c=(e.meta.L+i.meta.L)*.42;if(o<c*1.6&&o>1&&(Math.sin(n.yaw)*-r+Math.cos(n.yaw)*-a)/o>.3&&e.alive&&(n.ctl.rudder=he.clamp(n.ctl.rudder+Math.sign(Math.sin(n.yaw)*a-Math.cos(n.yaw)*r||1)*.6*(1-o/(c*1.6)),-.6,.6)),o<c&&o>1){let l=(c-o)*.6*t;n.pos.x+=r/o*l,n.pos.z+=a/o*l}}}orderMove(e,t,n){if(!e.length)return;let i=e.reduce((a,o)=>a+o.body.pos.x,0)/e.length,r=e.reduce((a,o)=>a+o.body.pos.z,0)/e.length;for(let a of e){let o=a.body.pos.x-i,c=a.body.pos.z-r,l=Math.hypot(o,c),h=260+120*e.length;l>h&&(o*=h/l,c*=h/l),a.order={x:t+o,z:n+c},a.station=null}}orderAttack(e,t){for(let n of e)n.focus=t}waveStep(e){this.waveT+=e;let t=this.ships.filter(i=>i.side==="E"&&i.alive),n=this.flagship();!n||!n.alive||(this.wave===0&&this.waveT>3||this.wave>0&&(t.length===0&&this.waveT>8||t.length<=1&&this.waveT>90))&&(this.wave++,this.waveT=0,this.spawnWave(this.wave))}spawnWave(e){let n=this.flagship().body.pos,i=e===1?["cl","dd","dd","dd"]:e===2?["ca","ca","cl","dd","dd","dd"]:e===3?["bc","ca","ca","cl","dd","dd","dd"]:["bb","bc","ca","ca","cl","dd","dd","dd","dd"].slice(0,6+Math.min(e-3,3)),r=e>=3?2:1,a=Math.random()*Math.PI*2;i.forEach((o,c)=>{let l=c%r,h=a+l*(Math.PI*(.6+Math.random()*.5)),u=6600+Math.random()*700,d=Math.floor(c/r),f=n.x+Math.sin(h)*u,m=n.z+Math.cos(h)*u,b=new pe(Math.cos(h),-Math.sin(h)),g=(d-2)*420;this.add(o,"E",f+b.x*g,m+b.y*g,h+Math.PI,ua[o].kn*.5144*.9,{group:e})}),this.log.push({kind:"wave",n:e,count:i.length})}startStage(e,t={}){this.stage={def:e,copies:t.copies??[],wave:0,t:0,waveT:0,over:null,base:t.base??Math.random()*Math.PI*2},this.waves=!1}stageStep(e){let t=this.stage,n=t.def;if(t.over)return;if(t.t+=e,t.waveT+=e,!this.flagship()?.alive)return this.finish(!1,"flag");let r=this.ships.filter(c=>c.side==="E"&&c.alive);if(n.goal==="escort"&&this.ships.filter(l=>l.escort).filter(l=>l.alive).length<n.escort[1])return this.finish(!1,"escort");if(n.goal==="hold"&&t.t>=n.time)return this.finish(!0);if(n.goal==="boss"&&t.bossUp&&!this.ships.some(c=>c.boss&&c.alive))return this.finish(!0);let a=t.wave<n.waves.length,o=r.length===0;if(t.wave===0&&t.waveT>4||t.wave>0&&o&&t.waveT>6)if(a)this.spawnStageWave(n.waves[t.wave]);else if(n.goal==="hold")this.spawnStageWave(n.waves[t.wave%n.waves.length]);else return this.finish(!0);else n.goal==="hold"&&t.wave>0&&t.waveT>110&&r.length<=3&&this.spawnStageWave(n.waves[t.wave%n.waves.length])}finish(e,t=""){let n=this.stage;n.over={won:e,why:t,t:n.t},this.log.push({kind:"over",won:e,why:t})}spawnStageWave(e){let t=this.stage,n=t.def;t.wave++,t.waveT=0,this.wave=t.wave;let i=this.flagship(),r=this.ships.find(d=>d.escort&&d.alive),a=(r??i).body.pos,o=r?r.body.yaw:null,c=e.length>=6?2:1,l=o!==null?o+(Math.random()-.5)*1.6:t.base+t.wave*1.9,h=n.near?3900:this.fog?5600:6800,u=0;e.forEach((d,f)=>{let m=d.replace("!",""),b=null,g=d.endsWith("!");m==="copy"&&(b=t.copies[u++%Math.max(t.copies.length,1)]??null,m=b?.kind??"ca"),this.art.kinds[m]||(m={cv:"bc",wh:"bb",sp:"bb",tr:"cl"}[m]??"ca"),b&&b.kind!==m&&(b=null);let p=f%c,x=Math.floor(f/c),v=l+p*(Math.PI*(.6+Math.random()*.4)),y=h+Math.random()*600+(g?900:0),S=a.x+Math.sin(v)*y,A=a.z+Math.cos(v)*y,C=new pe(Math.cos(v),-Math.sin(v)),I=(x-2)*420,_=this.add(m,"E",S+C.x*I,A+C.y*I,v+Math.PI,(ua[m]?.kn??30)*.5144*.9,{group:t.wave,boss:g,design:b});return g&&(t.bossUp=!0,t.bossN=(t.bossN??0)+1,_.mark=m==="wh"?"":`G-${n.id.replace("-","")}${t.bossN>1?String.fromCharCode(64+t.bossN):""}`),_}),this.log.push({kind:"wave",n:t.wave,count:e.length,boss:e.some(d=>d.endsWith("!"))})}};function AM(s,e){return s.body.toWorld(new M(e[0],e[1]+3,e[2]),new M)}var Mc=class{constructor(e,t){this.c=e,this.el=t,this.target=new M,this.yaw=.6,this.pitch=.62,this.dist=1400,this.keys={},this.follow=null,this.free=!1,addEventListener("keydown",a=>{this.keys[a.code]=!0,(a.code.startsWith("Arrow")||a.code==="Space")&&a.preventDefault()}),addEventListener("keyup",a=>{this.keys[a.code]=!1}),addEventListener("blur",()=>{this.keys={}}),t.addEventListener("wheel",a=>{this.dist=he.clamp(this.dist*Math.exp(a.deltaY*.0012),90,7e3),a.preventDefault()},{passive:!1});let n=!1,i=0,r=0;t.addEventListener("pointerdown",a=>{(a.button===1||a.button===0&&a.altKey)&&(n=!0,i=a.clientX,r=a.clientY,a.preventDefault())}),addEventListener("pointerup",()=>{n=!1}),addEventListener("pointermove",a=>{n&&(this.yaw-=(a.clientX-i)*.005,this.pitch=he.clamp(this.pitch+(a.clientY-r)*.004,.06,1.45),i=a.clientX,r=a.clientY)})}set(e){Object.assign(this,e)}update(e){let t=this.keys,n=this.dist*.9*e,i=0,r=0;if((t.KeyW||t.ArrowUp)&&(r+=1),(t.KeyS||t.ArrowDown)&&(r-=1),(t.KeyA||t.ArrowLeft)&&(i-=1),(t.KeyD||t.ArrowRight)&&(i+=1),i||r){this.follow=null;let c=-Math.sin(this.yaw),l=-Math.cos(this.yaw);this.target.x+=(c*r-l*i)*n*-1*-1,this.target.z+=(l*r+c*i)*n}if(this.follow?.body){let c=this.follow.body.pos;this.target.x+=(c.x-this.target.x)*(1-Math.exp(-e*3)),this.target.z+=(c.z-this.target.z)*(1-Math.exp(-e*3))}let a=Math.sin(this.pitch)*this.dist,o=Math.cos(this.pitch)*this.dist;this.c.position.set(this.target.x+Math.sin(this.yaw)*o,Math.max(a,4),this.target.z+Math.cos(this.yaw)*o),this.c.lookAt(this.target.x,0,this.target.z),this.c.updateMatrixWorld()}},_u=new Wo,Qp=new pe,ga=new M,wc=class{constructor({battle:e,camera:t,rcam:n,el:i,overlay:r,W:a,H:o,sound:c}){this.b=e,this.camera=t,this.rcam=n,this.el=i,this.ov=r,this.W=a,this.H=o,this.sound=c,this.sel=[],this.box=document.createElement("div"),this.box.className="selbox",r.appendChild(this.box),this.bars=new Map,this.marks=[],this.enabled=!0;let l=null,h=u=>{let d=i.getBoundingClientRect();return[(u.clientX-d.left)/d.width*a,(u.clientY-d.top)/d.height*o]};i.addEventListener("contextmenu",u=>u.preventDefault()),i.addEventListener("pointerdown",u=>{!this.enabled||u.pointerType==="touch"||(u.button===0&&!u.altKey&&(l=h(u)),u.button===2&&this.command(h(u)))}),addEventListener("pointermove",u=>{if(!l)return;let[d,f]=h(u),m=Math.min(d,l[0]),b=Math.min(f,l[1]);Object.assign(this.box.style,{display:"block",left:m+"px",top:b+"px",width:Math.abs(d-l[0])+"px",height:Math.abs(f-l[1])+"px"})}),addEventListener("pointerup",u=>{if(!l||u.button!==0)return;let[d,f]=h(u);this.box.style.display="none",Math.hypot(d-l[0],f-l[1])<6?this.clickSelect(d,f,u.shiftKey):this.boxSelect(l,[d,f],u.shiftKey),l=null}),this.touch(i,h),addEventListener("keydown",u=>{if(this.enabled&&(u.code==="KeyQ"&&this.select(this.b.ships.filter(d=>d.player&&d.alive)),u.code==="Space")){let d=this.b.flagship();d&&(this.rcam.follow=d)}})}touch(e,t){let n=new Map,i=null,r=null,a=null,o=null,c=()=>{i=null,clearTimeout(r),this.box.style.display="none"};e.addEventListener("pointerdown",h=>{if(h.pointerType!=="touch")return;e.setPointerCapture?.(h.pointerId);let u=t(h);if(n.set(h.pointerId,u),n.size===1)a={p:u,t:performance.now()},i="tap",clearTimeout(r),r=setTimeout(()=>{i==="tap"&&this.enabled&&(i="box",this.sound?.click?.())},450);else if(n.size===2){clearTimeout(r),i="two";let[d,f]=[...n.values()];o={d:Math.hypot(d[0]-f[0],d[1]-f[1]),ang:Math.atan2(f[1]-d[1],f[0]-d[0]),dist:this.rcam.dist,yaw:this.rcam.yaw}}}),e.addEventListener("pointermove",h=>{if(h.pointerType!=="touch"||!n.has(h.pointerId))return;let u=n.get(h.pointerId),d=t(h);if(n.set(h.pointerId,d),i==="two"&&n.size>=2){let[f,m]=[...n.values()],b=Math.hypot(f[0]-m[0],f[1]-m[1]),g=Math.atan2(m[1]-f[1],m[0]-f[0]);this.rcam.dist=he.clamp(o.dist*o.d/Math.max(b,1),90,7e3),this.rcam.yaw=o.yaw-(g-o.ang);return}if(i==="tap"&&Math.hypot(d[0]-a.p[0],d[1]-a.p[1])>12&&(i="pan",clearTimeout(r)),i==="pan"){let f=this.ground(...u),m=this.ground(...d);f&&m&&(this.rcam.follow=null,this.rcam.target.x+=f.x-m.x,this.rcam.target.z+=f.z-m.z)}if(i==="box"){let f=Math.min(d[0],a.p[0]),m=Math.min(d[1],a.p[1]);Object.assign(this.box.style,{display:"block",left:f+"px",top:m+"px",width:Math.abs(d[0]-a.p[0])+"px",height:Math.abs(d[1]-a.p[1])+"px"})}});let l=h=>{if(h.pointerType!=="touch"||!n.has(h.pointerId))return;let u=n.get(h.pointerId);if(n.delete(h.pointerId),i==="two"){n.size===0&&c();return}this.enabled&&i==="tap"&&performance.now()-a.t<450&&this.tap(u[0],u[1]),this.enabled&&i==="box"&&(Math.hypot(u[0]-a.p[0],u[1]-a.p[1])>12?this.boxSelect(a.p,u,!1):this.tap(u[0],u[1])),c()};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",h=>{n.delete(h.pointerId),c()})}tap(e,t){let n=this.sel.filter(r=>r.alive),i=this.pick(e,t,"A");if(i?.player)return this.select([i]);if(n.length)return this.command([e,t])}project(e){return ga.copy(e).project(this.camera),[(ga.x*.5+.5)*this.W,(-ga.y*.5+.5)*this.H,ga.z]}ground(e,t){Qp.set(e/this.W*2-1,-(t/this.H*2-1)),_u.setFromCamera(Qp,this.camera);let n=_u.ray.direction,i=_u.ray.origin;if(n.y>=-1e-4)return null;let r=-i.y/n.y;return new M(i.x+n.x*r,0,i.z+n.z*r)}pick(e,t,n){let i=this.ground(e,t),r=null,a=1e9;for(let o of this.b.ships){if(!o.alive||n&&o.side!==n)continue;let[c,l,h]=this.project(o.body.pos);if(h>1)continue;let u=Math.hypot(c-e,l-t),d=Math.max(26,this.screenLen(o)*.5);u<d&&u<a&&(a=u,r=o)}if(!r&&i)for(let o of this.b.ships){if(!o.alive||n&&o.side!==n)continue;let c=o.body.pos.distanceTo(i);c<o.meta.L*.6&&c<a&&(a=c,r=o)}return r}screenLen(e){let t=e.body.forward(new M).multiplyScalar(e.meta.L/2),n=this.project(ga.copy(e.body.pos).add(t)),i=this.project(new M().copy(e.body.pos).sub(t));return Math.hypot(n[0]-i[0],n[1]-i[1])}select(e,t=!1){if(!t)for(let n of this.sel)n.sel=!1;this.sel=t?[...new Set([...this.sel,...e])]:e;for(let n of this.sel)n.sel=!0;e.length&&this.sound?.click?.()}clickSelect(e,t,n){let i=this.pick(e,t,"A");this.select(i?.player?[i]:[],n)}boxSelect(e,t,n){let i=Math.min(e[0],t[0]),r=Math.max(e[0],t[0]),a=Math.min(e[1],t[1]),o=Math.max(e[1],t[1]);this.select(this.b.ships.filter(c=>{if(!c.player||!c.alive)return!1;let[l,h,u]=this.project(c.body.pos);return u<1&&l>=i&&l<=r&&h>=a&&h<=o}),n)}command([e,t]){let n=this.sel.filter(a=>a.alive);if(!n.length)return;let i=this.pick(e,t,"E");if(i){this.b.orderAttack(n,i),this.flash(i.body.pos,"atk");return}let r=this.ground(e,t);r&&(this.b.orderMove(n,r.x,r.z),this.flash(r,"mv"))}flash(e,t){this.marks.push({p:e.clone(),t:0,kind:t})}update(e){let t=new Set;for(let n of this.b.ships){if(n.gone||!n.alive&&n.body.founder>6)continue;t.add(n);let i=this.bars.get(n);i||(i=document.createElement("div"),i.className="bar "+(n.escort?"esc":n.side==="A"?"own":"foe")+(n.flagship?" flag":"")+(n.boss?" boss":""),i.innerHTML="<i></i>"+(n.boss&&this.bossName?`<b>${this.bossName(n)}</b>`:""),this.ov.appendChild(i),this.bars.set(n,i));let r=n.body.toWorld(new M(0,n.meta.deck_top+n.meta.B*1.2,0),new M),[a,o,c]=this.project(r);if(c>1||a<-50||a>this.W+50||o<-50||o>this.H+50){i.style.display="none";continue}let l=he.clamp(this.screenLen(n)*.5,22,90);i.style.display="block",i.style.transform=`translate(${(a-l/2).toFixed(1)}px, ${(o-14).toFixed(1)}px)`,i.style.width=l+"px",i.firstChild.style.width=(Math.max(n.hp,0)/n.hpMax*100).toFixed(1)+"%",i.classList.toggle("sel",!!n.sel),i.classList.toggle("dead",!n.alive),i.classList.toggle("tgt",this.sel.some(h=>h.focus===n))}for(let[n,i]of this.bars)t.has(n)||(i.remove(),this.bars.delete(n));for(let n of this.marks){n.t+=e,n.el||(n.el=document.createElement("div"),n.el.className="mark "+n.kind,this.ov.appendChild(n.el));let[i,r]=this.project(n.p);n.el.style.transform=`translate(${i}px, ${r}px) scale(${1+n.t*1.5})`,n.el.style.opacity=Math.max(0,1-n.t/.9)}this.marks=this.marks.filter(n=>n.t>.9?(n.el?.remove(),!1):!0)}};var Mu={en:{titleSub:"IRON FLEET",cardSub:"IRON FLEET",waveN:s=>`WAVE <b>${s}</b>`,sunk:"SUNK",goal:"You command a small iron fleet: one battleship, two heavy cruisers, three destroyers.<br>Enemy squadrons close in from every side. Break them all, and keep your flagship afloat.",touchBtns:{all:"ALL SHIPS",flag:"FLAGSHIP",none:"CLEAR"},hintTouch:"Tap a ship: choose it\u3000Tap the sea / an enemy: move / attack\u3000One finger: pan\u3000Pinch: zoom\u3000Twist: turn\u3000Hold and drag: box-select",goalC:"You have inherited a small shipyard, an old battleship and two destroyers.<br>The Grey Fleet builds bigger every month. Build, refit, sail. Overload her, and the sea settles the argument.",start:"START",hint:"Left drag: select ships\u3000Right click: move / attack\u3000Q: whole fleet\u3000W A S D: pan\u3000Wheel: zoom\u3000Middle drag: rotate\u3000Space: flagship",keys:"<kbd>LMB</kbd> select\u3000<kbd>RMB</kbd> move / attack\u3000<kbd>Q</kbd> all ships\u3000<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> pan\u3000<kbd>Wheel</kbd> zoom\u3000<kbd>MMB</kbd> rotate\u3000<kbd>Space</kbd> flagship",kinds:{bb:"BATTLESHIP",bc:"BATTLECRUISER",ca:"HEAVY CRUISER",cl:"LIGHT CRUISER",dd:"DESTROYER",cv:"CARRIER",sp:"SUPER-BATTLESHIP",wh:"GREY WHALE",tr:"MERCHANTMAN"},short:{bb:"BB",bc:"BC",ca:"CA",cl:"CL",dd:"DD",cv:"CV",sp:"SBB",wh:"WHALE",tr:"AK"},waveIn:(s,e)=>`WAVE ${s}
${e} ships inbound`,sunkThem:s=>`ENEMY ${s} SUNK`,sunkUs:s=>`OUR ${s} IS LOST`,magazine:s=>`MAGAZINE HIT \u2014 ${s} BLOWS UP`,tons:s=>`${s.toLocaleString("en")} t`,lost:"FLAGSHIP LOST",endSub:(s,e,t)=>`${s} waves held, ${e} ships sunk, ${t.toLocaleString("en")} tons`,again:"AGAIN",refitBtn:"REFIT",refit:"REFIT",calibre:"CALIBRE (cm)",barrels:"BARRELS",tiers:"STACKED",slotHint:"Click a ring on the ship to choose what goes there. Drag to look around, wheel to zoom.",backYard:"BACK TO THE YARD",aaHead:(s,e)=>`ANTI-AIRCRAFT \xB7 added ${s} / ${e}`,haGun:"HIGH-ANGLE GUNS",mgGun:"AA GUNS (25 mm)",airHead:(s,e)=>`AIR GROUP \xB7 ${s} / ${e} squadrons`,planeKinds:{f:"FIGHTERS",t:"ATTACK (torpedo)",b:"BOMBERS (dive)"},planeShort:{f:"F",t:"T",b:"B"},bill:"YARD BILL",rivetsU:"rivets",steelU:"steel",cantPay:s=>`The yard wants ${s.rivets.toLocaleString("en")} rivets and ${s.steel.toLocaleString("en")} steel for this. Undo something.`,testFire:"TEST FIRE",stock:"STOCK",copyAll:"SAME FOR SISTERS",sortie:"SORTIE",copied:"Copied to her sister ships",slotName:s=>s.stock>=0?`MOUNT ${"ABXY"[s.stock]??s.stock+1}`:s.wing?`${s.wing>0?"PORT":"STARBOARD"} WING`:"EXTRA CENTRELINE",empty:"EMPTY",gun:"GUN",torp:"TORPEDOES",single:"single",twin:"twin",triple:"triple",disp:"DISPLACEMENT",speed:"SPEED",broad:"BROADSIDE",range:"RANGE",stab:{ok:"STABLE",tender:"TENDER \u2014 she will roll hard when she fires",capsize:"TOP-HEAVY \u2014 she will not stay upright",sink:"OVERLOADED \u2014 she will not float"},wentOver:"SHE ROLLED OVER",sankDock:"SHE WENT DOWN",capsized:(s,e)=>e?`OUR ${s} CAPSIZED`:`ENEMY ${s} CAPSIZED`,lang:"\u65E5\u672C\u8A9E"},ja:{titleSub:"\u9244\u306E\u8266\u968A",cardSub:"\u9244\u306E\u8266\u968A",waveN:s=>`\u7B2C <b>${s}</b> \u6CE2`,sunk:"\u6483\u6C88",goal:"\u3042\u306A\u305F\u304C\u7387\u3044\u308B\u306E\u306F\u3001\u6226\u82661\u30FB\u91CD\u5DE12\u30FB\u99C6\u90103\u306E\u5C0F\u3055\u306A\u9244\u306E\u8266\u968A\u3002<br>\u56DB\u65B9\u304B\u3089\u6575\u306E\u8266\u968A\u304C\u62BC\u3057\u5BC4\u305B\u308B\u3002\u65D7\u8266\u3092\u6C88\u3081\u305A\u306B\u3001\u3059\u3079\u3066\u8E74\u6563\u3089\u305B\u3002",touchBtns:{all:"\u5168\u8266",flag:"\u65D7\u8266\u3078",none:"\u9078\u629E\u89E3\u9664"},hintTouch:"\u8266\u3092\u30BF\u30C3\u30D7\uFF1A\u9078\u3076\u3000\u6D77\u30FB\u6575\u3092\u30BF\u30C3\u30D7\uFF1A\u79FB\u52D5\u30FB\u653B\u6483\u30001\u672C\u6307\uFF1A\u8996\u70B9\u306E\u79FB\u52D5\u3000\u3064\u307E\u3080\uFF1A\u5BC4\u308B\u30FB\u5F15\u304F\u3000\u3072\u306D\u308B\uFF1A\u56DE\u3059\u3000\u9577\u62BC\u3057\u30C9\u30E9\u30C3\u30B0\uFF1A\u7BC4\u56F2\u9078\u629E",goalC:"\u5C0F\u3055\u306A\u9020\u8239\u6240\u3068\u3001\u53E4\u3044\u6226\u82661\u96BB\u30FB\u99C6\u9010\u82662\u96BB\u3092\u7D99\u3044\u3060\u3002<br>\u7070\u8272\u8266\u968A\u306F\u6708\u3054\u3068\u306B\u5927\u304D\u306A\u8266\u3092\u9020\u3063\u3066\u304F\u308B\u3002\u9020\u308A\u3001\u8F09\u305B\u66FF\u3048\u3001\u51FA\u6483\u305B\u3088\u3002\u7A4D\u307F\u3059\u304E\u305F\u8266\u306F\u3001\u6D77\u304C\u6C88\u3081\u308B\u3002",start:"\u51FA\u6483",hint:"\u5DE6\u30C9\u30E9\u30C3\u30B0\uFF1A\u8266\u3092\u9078\u3076\u3000\u53F3\u30AF\u30EA\u30C3\u30AF\uFF1A\u79FB\u52D5\u30FB\u653B\u6483\u3000Q\uFF1A\u5168\u8266\u3000W A S D\uFF1A\u8996\u70B9\u306E\u79FB\u52D5\u3000\u30DB\u30A4\u30FC\u30EB\uFF1A\u5BC4\u308B\u30FB\u5F15\u304F\u3000\u4E2D\u30C9\u30E9\u30C3\u30B0\uFF1A\u56DE\u3059\u3000Space\uFF1A\u65D7\u8266\u3078",keys:"<kbd>\u5DE6</kbd> \u9078\u629E\u3000<kbd>\u53F3</kbd> \u79FB\u52D5\u30FB\u653B\u6483\u3000<kbd>Q</kbd> \u5168\u8266\u3000<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> \u8996\u70B9\u3000<kbd>\u30DB\u30A4\u30FC\u30EB</kbd> \u5BC4\u308B\u3000<kbd>\u4E2D</kbd> \u56DE\u3059\u3000<kbd>Space</kbd> \u65D7\u8266",kinds:{bb:"\u6226\u8266",bc:"\u5DE1\u6D0B\u6226\u8266",ca:"\u91CD\u5DE1",cl:"\u8EFD\u5DE1",dd:"\u99C6\u9010\u8266",cv:"\u7A7A\u6BCD",sp:"\u8D85\u5927\u578B\u8266",wh:"\u7070\u9BE8",tr:"\u5546\u8239"},short:{bb:"\u6226\u8266",bc:"\u5DE1\u6226",ca:"\u91CD\u5DE1",cl:"\u8EFD\u5DE1",dd:"\u99C6\u9010",cv:"\u7A7A\u6BCD",sp:"\u8D85\u5927\u578B",wh:"\u7070\u9BE8",tr:"\u5546\u8239"},waveIn:(s,e)=>`\u7B2C${s}\u6CE2
\u6575 ${e}\u96BB \u63A5\u8FD1`,sunkThem:s=>`\u6575${s}\u3092\u6483\u6C88`,sunkUs:s=>`\u5473\u65B9\u306E${s}\u304C\u6C88\u6CA1`,magazine:s=>`\u5F3E\u85AC\u5EAB\u306B\u547D\u4E2D \u2014 ${s}\u304C\u7206\u6C88`,tons:s=>`${s.toLocaleString("ja")} \u30C8\u30F3`,lost:"\u65D7\u8266 \u6C88\u6CA1",endSub:(s,e,t)=>`${s}\u6CE2\u3092\u3057\u306E\u304E\u3001${e}\u96BB\u30FB${t.toLocaleString("ja")}\u30C8\u30F3\u3092\u6483\u6C88`,again:"\u3082\u3046\u4E00\u5EA6",refitBtn:"\u6539\u88C5",refit:"\u6539\u88C5",calibre:"\u53E3\u5F84\uFF08cm\uFF09",barrels:"\u9580\u6570",tiers:"\u6BB5\u6570",slotHint:"\u8266\u306E\u4E0A\u306E\u4E38\u3092\u62BC\u3057\u3066\u3001\u305D\u3053\u306B\u8F09\u305B\u308B\u3082\u306E\u3092\u9078\u3076\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u3059\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u5BC4\u308B\u3002",backYard:"\u9020\u8239\u6240\u3078",aaHead:(s,e)=>`\u5BFE\u7A7A\u5175\u88C5\u30FB\u8FFD\u52A0 ${s} / ${e}`,haGun:"\u9AD8\u89D2\u7832",mgGun:"\u6A5F\u9283\uFF0825mm\uFF09",airHead:(s,e)=>`\u642D\u8F09\u6A5F\u30FB${s} / ${e} \u7DE8\u968A`,planeKinds:{f:"\u6226\u95D8\u6A5F",t:"\u653B\u6483\u6A5F\uFF08\u96F7\u6483\uFF09",b:"\u7206\u6483\u6A5F\uFF08\u6025\u964D\u4E0B\uFF09"},planeShort:{f:"\u6226",t:"\u653B",b:"\u7206"},bill:"\u5DE5\u8CC3",rivetsU:"\u92F2",steelU:"\u92FC\u6750",cantPay:s=>`\u3053\u306E\u6539\u88C5\u306B\u306F\u92F2 ${s.rivets.toLocaleString("ja")}\u30FB\u92FC\u6750 ${s.steel.toLocaleString("ja")} \u304C\u8981\u308B\u3002\u3069\u3053\u304B\u3092\u5143\u306B\u623B\u3057\u3066\u3002`,testFire:"\u8A66\u3057\u6483\u3061",stock:"\u5143\u306B\u623B\u3059",copyAll:"\u540C\u578B\u8266\u306B\u3082",sortie:"\u51FA\u6483",copied:"\u540C\u578B\u8266\u306B\u3082\u540C\u3058\u6539\u88C5\u3092\u3057\u307E\u3057\u305F",slotName:s=>s.stock>=0?`${"\u4E00\u4E8C\u4E09\u56DB\u4E94"[s.stock]??s.stock+1}\u756A\u7832\u5854`:s.wing?`${s.wing>0?"\u5DE6\u8237":"\u53F3\u8237"}\u306E\u8237\u5074`:"\u8FFD\u52A0\u306E\u7832\u5EA7",empty:"\u7A7A\u304D",gun:"\u4E3B\u7832",torp:"\u9B5A\u96F7",single:"\u5358\u88C5",twin:"\u9023\u88C5",triple:"\u4E09\u9023\u88C5",disp:"\u6392\u6C34\u91CF",speed:"\u901F\u529B",broad:"\u6589\u5C04\u306E\u91CD\u3055",range:"\u5C04\u7A0B",stab:{ok:"\u5B89\u5B9A",tender:"\u4E0D\u5B89\u5B9A\uFF1A\u6483\u3064\u3068\u5927\u304D\u304F\u50BE\u304F",capsize:"\u982D\u304C\u91CD\u3059\u304E\u308B\uFF1A\u307E\u3063\u3059\u3050\u7ACB\u3063\u3066\u3044\u3089\u308C\u306A\u3044",sink:"\u91CD\u3059\u304E\u308B\uFF1A\u6D6E\u304B\u3070\u306A\u3044"},wentOver:"\u8EE2\u8986\u3057\u305F",sankDock:"\u6C88\u3093\u3060",capsized:(s,e)=>e?`\u5473\u65B9\u306E${s}\u304C\u8EE2\u8986`:`\u6575${s}\u304C\u8EE2\u8986`,lang:"English"}},RM=new URLSearchParams(location.search),rs=RM.get("lang")??(()=>{try{return localStorage.getItem("kurogane-lang")}catch{return null}})()??"en";Mu[rs]||(rs="en");var em=[],_e=s=>Mu[rs][s]??Mu.en[s];function ba(){document.documentElement.lang=rs;for(let e of document.querySelectorAll("[data-t]"))e.innerHTML=_e(e.dataset.t);let s=document.getElementById("lang");s&&(s.textContent=_e("lang"));for(let e of em)e()}function Sc(s){em.push(s)}var Gn=()=>rs;function tm(){rs=rs==="en"?"ja":"en";try{localStorage.setItem("kurogane-lang",rs)}catch{}ba()}var Ec=class{constructor(){this.ctx=null}start(){if(this.ctx)return;let e=this.ctx=new AudioContext,t=this.out=e.createGain();t.gain.value=.9;let n=e.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,t.connect(n).connect(e.destination);let i=e.createBuffer(2,e.sampleRate*3,e.sampleRate);for(let l=0;l<2;l++){let h=i.getChannelData(l);for(let u=0,d=0;u<h.length;u++)d=.985*d+.015*(Math.random()*2-1),h[u]=d*4+(Math.random()*2-1)*.25}this.nb=i;let r=(l=1)=>{let h=e.createBufferSource();return h.buffer=i,h.loop=!0,h.playbackRate.value=l,h.start(),h},a=(l,h,u,d,f)=>{let m=e.createBiquadFilter();m.type=h,m.frequency.value=u,m.Q.value=d;let b=e.createGain();return b.gain.value=f,l.connect(m).connect(b).connect(t),{f:m,g:b}};this.sea=a(r(1),"bandpass",600,.4,.05),this.sea2=a(r(.71),"highpass",2500,.5,.01),this.bow=a(r(1.3),"bandpass",1200,.7,0),this.wind=a(r(.9),"bandpass",400,1.2,.02),this.whistle=a(r(1.1),"bandpass",1800,18,0),this.flog=a(r(.6),"lowpass",300,.8,0);let o=e.createOscillator();o.frequency.value=5;let c=e.createGain();c.gain.value=0,o.connect(c).connect(this.flog.g.gain),o.start(),this.flogLfo=o,this.flogDepth=c,this.nextSlap=0,this.nextCreak=0,this.nextGull=4,this.lastRoll=0,this.nextBell=30}thump(e,t=90,n=.35,i=0){let r=this.ctx,a=r.currentTime,o=r.createBufferSource();o.buffer=this.nb,o.playbackRate.value=.5+Math.random()*.3;let c=r.createBiquadFilter();c.type="lowpass",c.frequency.value=t*6;let l=r.createGain();l.gain.setValueAtTime(0,a),l.gain.linearRampToValueAtTime(e,a+.02),l.gain.exponentialRampToValueAtTime(5e-4,a+n);let h=r.createStereoPanner();h.pan.value=i,o.connect(c).connect(l).connect(h).connect(this.out),o.start(a,Math.random()*2),o.stop(a+n+.05)}creak(e){let t=this.ctx,n=t.currentTime,i=t.createOscillator();i.type="sawtooth";let r=140+Math.random()*180;i.frequency.setValueAtTime(r,n),i.frequency.linearRampToValueAtTime(r*(1.3+Math.random()*.4),n+.4);let a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=900+Math.random()*600,a.Q.value=6;let o=t.createGain();o.gain.value=0;let c=t.createOscillator();c.frequency.value=28+Math.random()*20;let l=t.createGain();l.gain.value=e,c.connect(l).connect(o.gain);let h=t.createGain();h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(1,n+.08),h.gain.linearRampToValueAtTime(0,n+.5);let u=t.createStereoPanner();u.pan.value=Math.random()*1.2-.6,i.connect(a).connect(o).connect(h).connect(u).connect(this.out),i.start(n),c.start(n),i.stop(n+.55),c.stop(n+.55)}gull(e){let t=this.ctx,n=t.currentTime;for(let i=0;i<2+Math.floor(Math.random()*3);i++){let r=n+i*(.28+Math.random()*.1),a=t.createOscillator();a.type="triangle";let o=1500+Math.random()*300;a.frequency.setValueAtTime(o*1.25,r),a.frequency.exponentialRampToValueAtTime(o*.7,r+.22);let c=t.createGain();c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(.012,r+.03),c.gain.linearRampToValueAtTime(0,r+.24);let l=t.createStereoPanner();l.pan.value=e,a.connect(c).connect(l).connect(this.out),a.start(r),a.stop(r+.26)}}bell(){let e=this.ctx,t=e.currentTime,n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=900,n.connect(this.out);for(let[i,r,a]of[[82,.05,14],[165.5,.03,10],[219,.02,7],[296,.012,5],[421,.006,3]]){let o=e.createOscillator();o.frequency.value=i;let c=e.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(r,t+.02),c.gain.exponentialRampToValueAtTime(1e-4,t+a),o.connect(c).connect(n),o.start(t),o.stop(t+a)}}place(e){return[this.ctx.currentTime+e/343,1/(1+e/80),300+11e3*Math.exp(-e/500)]}burst({d:e,pan:t,dur:n,f:i,q:r=.7,type:a="bandpass",gain:o,rate:c=1,attack:l=.004,delay:h=0}){let u=this.ctx,[d,f,m]=this.place(e),b=d+h,g=u.createBufferSource();g.buffer=this.nb,g.playbackRate.value=c;let p=u.createBiquadFilter();p.type=a,p.frequency.value=i,p.Q.value=r;let x=u.createBiquadFilter();x.type="lowpass",x.frequency.value=m;let v=u.createGain();v.gain.setValueAtTime(0,b),v.gain.linearRampToValueAtTime(o*f,b+l),v.gain.exponentialRampToValueAtTime(1e-4,b+n);let y=u.createStereoPanner();y.pan.value=t,g.connect(p).connect(x).connect(v).connect(y).connect(this.out),g.start(b,Math.random()*2),g.stop(b+n+.05)}gun(e,t,n){this.ctx&&(n>=3?(this.burst({d:e,pan:t,dur:.3,f:1800,q:.4,gain:1,attack:.001}),this.burst({d:e,pan:t,dur:1.8,f:90,q:.5,type:"lowpass",gain:2.4,rate:.35}),this.burst({d:e,pan:t,dur:7,f:55,q:.5,type:"lowpass",gain:1,rate:.22,attack:.12}),this.burst({d:e+1400,pan:-t*.4,dur:4,f:80,q:.5,type:"lowpass",gain:.3,rate:.25,attack:.4})):n>1.2?(this.burst({d:e,pan:t,dur:.22,f:2200,q:.5,gain:.8,attack:.001}),this.burst({d:e,pan:t,dur:1.2,f:140,q:.6,type:"lowpass",gain:1.5,rate:.45}),this.burst({d:e,pan:t,dur:4,f:70,q:.5,type:"lowpass",gain:.5,rate:.3,attack:.08})):n>.5?(this.burst({d:e,pan:t,dur:.25,f:2500,q:.5,gain:.9,attack:.002}),this.burst({d:e,pan:t,dur:1.4,f:160,q:.6,type:"lowpass",gain:1.6,rate:.5}),this.burst({d:e,pan:t,dur:4.5,f:70,q:.5,type:"lowpass",gain:.7,rate:.3,attack:.08}),this.burst({d:e+900,pan:-t*.5,dur:3,f:120,q:.5,type:"lowpass",gain:.25,rate:.35,attack:.3})):n>.2?(this.burst({d:e,pan:t,dur:.2,f:2e3,q:.6,gain:.5}),this.burst({d:e,pan:t,dur:.9,f:260,q:.6,type:"lowpass",gain:.8,rate:.6})):(this.burst({d:e,pan:t,dur:.09,f:3200,q:.8,gain:.35,attack:.001}),this.burst({d:e,pan:t,dur:.35,f:400,q:.6,type:"lowpass",gain:.25,rate:.8})))}horn(){if(!this.ctx)return;let e=this.ctx;for(let[t,n]of[[0,110],[1.1,92]]){let i=e.currentTime+t,r=e.createOscillator();r.type="sawtooth",r.frequency.value=n;let a=e.createOscillator();a.type="sawtooth",a.frequency.value=n*1.5;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=700;let c=e.createGain();c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.07,i+.1),c.gain.setValueAtTime(.07,i+.85),c.gain.linearRampToValueAtTime(0,i+1),r.connect(o),a.connect(o),o.connect(c).connect(this.out),r.start(i),a.start(i),r.stop(i+1.05),a.stop(i+1.05)}}click(){this.ctx&&this.burst({d:0,pan:0,dur:.04,f:3e3,q:2,gain:.05,attack:.001})}boom(e,t,n){this.ctx&&(this.burst({d:e,pan:t,dur:.5,f:900,q:.4,gain:1.2*n,attack:.002}),this.burst({d:e,pan:t,dur:3.5,f:60,q:.5,type:"lowpass",gain:2.6*n,rate:.2,attack:.02}),this.burst({d:e,pan:t,dur:9,f:40,q:.5,type:"lowpass",gain:1.2*n,rate:.15,attack:.3}))}splash(e,t,n){this.ctx&&this.burst({d:e,pan:t,dur:n?1.6:.5,f:900,q:.4,gain:n?.35:.08,attack:.02})}strike(e,t){this.ctx&&(this.burst({d:e,pan:t,dur:.18,f:1400,q:1.2,gain:.6,attack:.001}),this.burst({d:e,pan:t,dur:.6,f:300,q:.8,gain:.5,rate:.7,delay:.02}))}flak(e,t){this.ctx&&(this.burst({d:e,pan:t,dur:.25,f:2600,q:.6,gain:.55,attack:.001}),this.burst({d:e,pan:t,dur:.9,f:180,q:.6,type:"lowpass",gain:.6,rate:.5}))}rattle(e,t,n=4,i=8,r=1500,a=.25){if(this.ctx)for(let o=0;o<n;o++)this.burst({d:e,pan:t,dur:.07,f:r,q:.8,gain:a*(.8+.4*Math.random()),attack:.001,delay:o/i})}engines(e,t=1,n=0){if(!this.ctx)return;let i=this.ctx;if(!this.eng){let c=i.createGain();c.gain.value=0;let l=i.createStereoPanner(),h=i.createBiquadFilter();h.type="lowpass",h.frequency.value=900;let u=[[92,"sawtooth",.5],[184,"square",.18],[276,"sawtooth",.12]].map(([p,x,v])=>{let y=i.createOscillator();y.type=x,y.frequency.value=p;let S=i.createGain();return S.gain.value=v,y.connect(S).connect(h),y.start(),y}),d=i.createOscillator();d.frequency.value=3.2;let f=i.createGain();f.gain.value=0,d.connect(f).connect(c.gain),d.start();let m=i.createBufferSource();m.buffer=this.nb,m.loop=!0,m.playbackRate.value=1.6,m.start();let b=i.createBiquadFilter();b.type="bandpass",b.frequency.value=900,b.Q.value=.7;let g=i.createGain();g.gain.value=.35,m.connect(b).connect(g).connect(h),h.connect(c).connect(l).connect(this.out),this.eng={g:c,p:l,lp:h,oscs:u,lg:f}}let r=this.eng,a=i.currentTime,o=Math.min(e,1)*.12;r.g.gain.setTargetAtTime(o,a,.25),r.lg.gain.setTargetAtTime(o*.35,a,.25),r.p.pan.setTargetAtTime(n,a,.3),r.lp.frequency.setTargetAtTime(400+1400*Math.min(e,1),a,.3),r.oscs.forEach((c,l)=>c.frequency.setTargetAtTime([92,184,276][l]*t,a,.3))}drumHit(e,t=0){let n=this.ctx,i=n.currentTime+t,r=n.createOscillator();r.frequency.setValueAtTime(95,i),r.frequency.exponentialRampToValueAtTime(52,i+.35);let a=n.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(e,i+.006),a.gain.exponentialRampToValueAtTime(1e-4,i+.9),r.connect(a).connect(this.out),r.start(i),r.stop(i+1);let o=n.createBufferSource();o.buffer=this.nb;let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=900;let l=n.createGain();l.gain.setValueAtTime(e*.5,i),l.gain.exponentialRampToValueAtTime(1e-4,i+.12),o.connect(c).connect(l).connect(this.out),o.start(i,Math.random()),o.stop(i+.15)}conch(){if(!this.ctx)return;let e=this.ctx;for(let[t,n,i]of[[0,233,2.4],[2.8,233,3.2]]){let r=e.currentTime+t,a=e.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(n*.94,r),a.frequency.linearRampToValueAtTime(n,r+.4),a.frequency.linearRampToValueAtTime(n*.97,r+i);let o=e.createOscillator();o.frequency.value=5.2;let c=e.createGain();c.gain.value=2.5,o.connect(c).connect(a.frequency);let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=700,l.Q.value=1.4;let h=e.createGain();h.gain.setValueAtTime(0,r),h.gain.linearRampToValueAtTime(.09,r+.5),h.gain.setValueAtTime(.09,r+i-.6),h.gain.linearRampToValueAtTime(0,r+i),a.connect(l).connect(h).connect(this.out),a.start(r),o.start(r),a.stop(r+i+.1),o.stop(r+i+.1),this.burst({d:0,pan:0,dur:i,f:1500,q:.8,gain:.02,attack:.4,delay:t})}}update(e,{speed:t,aw:n,gust:i,roll:r,rollRate:a,heave:o,flog:c,force:l,landDir:h,evening:u}){if(!this.ctx)return;let d=this.ctx.currentTime,f=Math.min(n/12,1.2);this.sea.g.gain.setTargetAtTime(.04+f*.06,d,.5),this.sea2.g.gain.setTargetAtTime(.004+f*.012,d,.5),this.bow.g.gain.setTargetAtTime(Math.min(Math.max(t,0)/5,1)**1.5*.12,d,.3),this.bow.f.frequency.setTargetAtTime(700+t*220,d,.3),this.wind.g.gain.setTargetAtTime(.01+f*f*.05,d,.4),this.wind.f.frequency.setTargetAtTime(250+n*35,d,.4),this.whistle.g.gain.setTargetAtTime(Math.max(0,n-7)*.004*(.5+i),d,.6),this.whistle.f.frequency.setTargetAtTime(1400+n*60,d,.6),this.flog.g.gain.setTargetAtTime(c*.08,d,.15),this.flogDepth.gain.setTargetAtTime(c*.06,d,.15),this.flogLfo.frequency.setTargetAtTime(3+n*.5,d,.3),d>this.nextSlap&&(o<-.15||Math.abs(a)>.05)&&(this.thump(Math.min(.08+Math.abs(o)*.25+Math.abs(a)*1.2,.35),80+Math.random()*40,.3+Math.random()*.3,Math.sign(a)*.5),this.nextSlap=d+.6+Math.random()*1.2),d>this.nextCreak&&Math.abs(a)>.02+Math.random()*.03&&(this.creak(.5+Math.min(Math.abs(a)*8,1)*.5+l*1e-5),this.nextCreak=d+1.5+Math.random()*3),h!==null&&d>this.nextGull&&(this.gull(h),this.nextGull=d+6+Math.random()*14),u&&d>this.nextBell&&(this.bell(),this.nextBell=d+40+Math.random()*30),this.lastRoll=r}battle(e,{beat:t,stroke:n,fire:i,on:r}){if(!this.ctx)return;if(!this.fireN){let o=this.ctx,c=o.createBufferSource();c.buffer=this.nb,c.loop=!0,c.playbackRate.value=1.6,c.start();let l=o.createBiquadFilter();l.type="highpass",l.frequency.value=1500;let h=o.createGain();h.gain.value=0,c.connect(l).connect(h).connect(this.out),this.fireN=h,this.nextPop=0,this.lastStroke=n}let a=this.ctx.currentTime;if(this.fireN.gain.setTargetAtTime(i*.06,a,.5),i>.05&&a>this.nextPop&&(this.burst({d:20/i,pan:Math.random()-.5,dur:.05,f:2500,q:1,gain:.2*i,attack:.001}),this.nextPop=a+Math.random()*.15/i),r&&t>0){let o=Math.floor(this.lastStroke/(Math.PI*2));Math.floor(n/(Math.PI*2))>o&&(this.drumHit(.25+t*.05),t>=3&&this.drumHit(.18,.22))}this.lastStroke=n}};var kn=(s,e,t)=>s+(e-s)*t,wu=s=>s*s*(3-2*s),ri=s=>s.ships.find(e=>e.side==="A"&&e.flagship),CM=s=>Math.round(Math.abs(s)*57.3),nm=s=>Math.round(s).toLocaleString("en"),Su={f46:s=>s.filter(e=>!e.wing).map(e=>({slot:e.id,type:"gun",cal:46,n:3,tier:1})),f80:s=>s.filter(e=>e.stock>=0).map(e=>({slot:e.id,type:"gun",cal:80,n:2,tier:1}))},im=[{name:"line",dur:2.4,ts:1.5,setup:"fleet",fast:26,pick:"flag",flat:[{pos:[-170,6,260],look:[40,22,-500],fov:36},{pos:[-160,6,200],look:[40,22,-500],fov:36}]},{name:"enemy",dur:1.9,ts:1.5,pick:"ebb",flat:[{pos:[700,30,380],look:[0,15,-150],fov:34},{pos:[690,30,330],look:[0,15,-150],fov:34}]},{name:"incoming",dur:2.2,ts:1,setup:"charge",until:"incoming",pick:"hit",flat:[{pos:[-300,14,-160],look:[0,20,0],fov:30},{pos:[-285,14,-130],look:[0,20,0],fov:30}]},{name:"charge",dur:1.9,ts:1.4,pick:"dd",flat:[{pos:[-70,4,190],look:[30,8,-10],fov:36},{pos:[-60,4,150],look:[30,8,-10],fov:36}]},{name:"torps",dur:2.6,ts:4,until:"torps",top:!0},{name:"shell",dur:4.4,setup:"shell",shell:!0,cap:s=>s.shellCap},{name:"kill",dur:3,ts:1.6,until:"kill",pick:"victim",cam:[{yaw:1,pitch:.06,dist:420,lift:8,fov:32},{yaw:.85,pitch:.07,dist:380,lift:8,fov:32}]},{name:"torphit",dur:2.2,ts:1.2,until:"torphit",pick:"torped",cam:[{yaw:-1.2,pitch:.06,dist:380,lift:8,fov:32},{yaw:-1.1,pitch:.07,dist:350,lift:8,fov:32}]},{name:"stock",dur:3.2,ts:1,setup:"refit",fire:.5,pick:"flag",cap:s=>["Stock battleship",`8 \xD7 36 cm \xB7 GM ${s.gm0.toFixed(1)} m`],flat:[{pos:[-60,12,230],look:[0,12,0],fov:30},{pos:[-54,12,205],look:[0,12,0],fov:30}]},{name:"refit46",dur:3,ts:1,refit:"f46",pick:"flag",orbit:[2.6,.35,1,2.2,.3,.95],cap:s=>["Refit: six triple 46 cm turrets",`+${nm(s.fits.f46.dW)} t \xB7 GM ${s.gm0.toFixed(1)} \u2192 ${s.fits.f46.gm.toFixed(1)} m`]},{name:"b46",dur:3.6,ts:1.2,fire:.5,pick:"flag",cap:s=>["Fire",s.heel>1.5?`She heels ${s.heel}\xB0`:""],flat:[{pos:[-70,14,300],look:[0,12,0],fov:30},{pos:[-64,14,288],look:[0,12,0],fov:30}]},{name:"refit80",dur:2.7,ts:1,refit:"f80",pick:"flag",orbit:[-2.4,.3,1.05,-2,.26,1],cap:s=>["Refit: four twin 80 cm turrets",`+${nm(s.fits.f80.dW)} t \xB7 GM ${s.fits.f80.gm.toFixed(2)} m`]},{name:"b80",dur:2,ts:1,fire:.45,pick:"flag",cap:()=>["Fire",""],flat:[{pos:[120,30,-170],look:[-200,10,300],fov:34},{pos:[122,30,-165],look:[-200,10,300],fov:34}]},{name:"roll",dur:3.8,ts:1.8,pick:"flag",cap:s=>["Her own recoil rolls her over",`heel ${s.heelNow}\xB0`],flat:[{pos:[-80,14,320],look:[0,10,0],fov:30},{pos:[-74,15,300],look:[0,8,0],fov:30}]},{name:"impact",dur:3.4,ts:1.4,until:"landing",pick:"beam",cap:()=>["...as her 80 cm shells arrive",""],cam:[{yaw:2.55,pitch:.07,dist:1300,lift:40,fov:30},{yaw:2.48,pitch:.08,dist:1200,lift:40,fov:30}]},{name:"end",dur:4.4,ts:1,pick:"flag",title:[1.4,4.4],flat:[{pos:[-260,22,420],look:[0,4,0],fov:30},{pos:[-240,24,390],look:[0,4,0],fov:30}]}],Eu=im.reduce((s,e)=>s+e.dur,0),Tc=class{constructor(e,t=im){this.c=e,this.b=e.battle,this.shots=t,this.cur=-1,this.title=document.getElementById("endcard"),this.tag=document.getElementById("tag"),this.cap=document.getElementById("cap"),this.b.waves=!1;let n=ri(this.b),i=ss(n.meta);this.fits={f46:ii({kind:"bb",mounts:Su.f46(i)},this.b.art),f80:ii({kind:"bb",mounts:Su.f80(i)},this.b.art)},this.gm0=ii(Vn("bb",n.meta),this.b.art).gm,this.heel=0,this.heelNow=0}stageFleet(){let e=this.b,t=ri(e),n=t.body.pos.clone(),i=t.body.yaw+Math.PI/2;this.H0=t.body.yaw;let r=e.ships.filter(f=>f.side==="A"),a=r.filter(f=>f.kind==="dd"),o=r.filter(f=>f.kind==="ca"),c=[a[0],r.find(f=>f.kind==="cl"),o[0],t,r.find(f=>f.kind==="bc"),o[1],a[1],a[2]].filter(Boolean),l=Math.sin(i),h=Math.cos(i),u=Math.cos(i),d=-Math.sin(i);c.forEach((f,m)=>{let b=900-m*450;f.body.place(n.x+l*b,n.z+h*b,i,12),f.body.ctl.tele=3,f.noSteer=!0,f.station=null,f.order=null}),["dd","dd","ca","bb","ca","ca","dd","dd","dd"].forEach((f,m)=>{let b=2600-m*470,g=4800,p=e.add(f,"E",n.x+l*b+u*g,n.z+h*b+d*g,i+Math.PI,12);p.body.ctl.tele=3,p.noSteer=!0})}stageRefit(){let e=this.b;this.c.fx.clear(),this.c.torps.list.length=0,this.c.arty.shells.length=0;for(let a of e.ships)(a.side==="E"||a.side==="A"&&!a.flagship)&&(a.gone=!0,a.alive=!1);let t=ri(e);t.body.place(t.body.pos.x,t.body.pos.z,this.H0??t.body.yaw,6),t=e.refit(t,Vn("bb",t.meta)),t.noSteer=!0;let n=t.body.pos,i=t.body.yaw;t.body.ctl.tele=2;let r=i+Math.PI/2;["ca","dd","ca","dd","ca","dd"].forEach((a,o)=>{let c=(o-2.5)*420,l=5500+o%2*300,h=e.add(a,"E",n.x+Math.sin(r)*l+Math.sin(i)*c,n.z+Math.cos(r)*l+Math.cos(i)*c,i,5);h.holdFire=!0,h.torps=[],h.noSteer=!0})}beam(){let e=ri(this.b),t=this.b.ships.filter(n=>n.side==="E"&&n.alive);return t.filter(n=>n.kind==="ca").sort((n,i)=>n.body.pos.distanceTo(e.body.pos)-i.body.pos.distanceTo(e.body.pos))[0]??t[0]??e}shotAt(e){let t=0,n=this.shots;for(let i=0;i<n.length;i++){if(e<t+n[i].dur||i===n.length-1)return[i,e-t];t+=n[i].dur}return[n.length-1,0]}ts(e){let t=this.shots[this.shotAt(e)[0]];return t.shell?this.shellTs??2:t.ts??1}start(e){let t=this.shots[e],n=this.b,i=this.c;if(this.cur=e,this.heel=0,t.setup==="fleet"&&this.stageFleet(),t.setup==="refit"&&this.stageRefit(),t.setup==="charge"){let o=n.ships.find(c=>c.side==="A"&&c.kind==="dd"&&c.alive);if(o){let c=ri(n);o.noSteer=!1,o.order={x:c.body.pos.x+Math.cos(c.body.yaw)*6e3,z:c.body.pos.z-Math.sin(c.body.yaw)*6e3},o.body.ctl.tele=4,this.dd=o}}if(t.fast&&i.fast(t.fast),t.until==="incoming"&&i.fastUntil(()=>i.arty.shells.some(o=>o.from.side==="E"&&o.g.cal>.15&&o.v.y<0&&o.p.y<120&&n.ships.some(c=>c.side==="A"&&c.alive&&c.body.pos.distanceTo(o.p)<260&&(this.hitShip=c))),60),t.until==="torps"&&i.fastUntil(()=>i.torps.list.filter(o=>o.alive&&o.from.side==="A"&&o.run>300).length>=4,160),t.setup==="shell"&&this.startShell(),t.until==="kill"&&i.fastUntil(()=>!this.victim||!this.victim.alive,25),t.until==="torphit"){let o=n.log.length;i.fastUntil(()=>n.log.slice(o).some(c=>c.kind==="torphit"&&c.ship.side==="E"&&(this.torped=c.ship)),260),i.fast(.3)}let r=ri(n);(t.refit||t.fire!==void 0||t.until==="landing"||t.setup==="refit")&&(r.holdFire=!0),t.refit?(i.fx.clear(),this.queue=Su[t.refit](ss(r.meta)),r=n.refit(r,{kind:"bb",mounts:[]}),r.holdFire=!0,r.noSteer=!0,this.added=0,this.refitDur=t.dur*.8):this.queue=null,t.fire!==void 0?(this.fireAt=t.fire,this.fired=!1):this.fireAt=void 0,t.until==="landing"&&i.fastUntil(()=>i.arty.shells.some(o=>o.from===r&&o.v.y<0&&o.p.y<160),30);let a={ebb:n.ships.find(o=>o.side==="E"&&o.kind==="bb"&&o.alive)??r,flag:r,hit:this.hitShip,dd:this.dd,victim:this.victim,torped:this.torped??this.beam(),beam:this.beam()};this.ship=a[t.pick]??r}startShell(){let e=this.b,t=ri(e),n=(l,h)=>{let u=t.body.toLocal(h.body.pos.clone(),new M),d=l.meta.at,f=Math.atan2(-(u.x-d[0]),u.z-d[2]),m=g=>he.euclideanModulo(g+Math.PI,Math.PI*2)-Math.PI,b=m(f-l.rest);return b>m(l.meta.arc[0]-l.rest)+.1&&b<m(l.meta.arc[1]-l.rest)-.1&&h.body.pos.distanceTo(t.body.pos)<l.g.range*.85},i=e.ships.filter(l=>l.side==="E"&&l.alive).sort((l,h)=>l.hp-h.hp),r=null;this.victim=null;for(let l of i)if(r=t.turrets.filter(h=>!h.broken&&h.meta.at[2]>0).find(h=>n(h,l)),r){this.victim=l;break}if(!r){for(let l of i)if(r=t.turrets.find(h=>!h.broken&&n(h,l)),r){this.victim=l;break}}if(this.shellObj=null,this.shellEnd=null,this.shellTu=null,!this.victim)return;e.snapAim(t,[this.victim],.05),r.lastShell=null;for(let l of t.turrets)l.perfect=l===r,l.reload=l===r?.05:Math.max(l.reload,8);t.holdFire=!1;let a=this.victim.body.pos.distanceTo(t.body.pos),c=Sr(r.meta.gun,a)?.t??10;this.shellTs=(c+1.4)/(this.shots.find(l=>l.shell).dur-.6),this.shellTu=r,this.shellCap=[`One ${Math.round(Et[r.meta.gun].calCm)} cm shell`,`${(a/1e3).toFixed(1)} km \xB7 ${c.toFixed(1)} s in the air`]}apply(e){let[t,n]=this.shotAt(e);t!==this.cur&&this.start(t);let i=this.shots[t],r=this.b,a=ri(r);if(this.queue){let l=Math.min(this.queue.length,Math.floor(n/this.refitDur*this.queue.length)+1);l>this.added&&(this.added=l,this.c.event?.("drop",a.body.pos),a=r.refit(a,{kind:"bb",mounts:this.queue.slice(0,l)}),a.holdFire=!0,a.noSteer=!0,this.ship=a)}if(this.fireAt!==void 0&&!this.fired&&n>=this.fireAt-.3){this.fired=!0;let l=r.ships.filter(h=>h.side==="E"&&h.alive).sort((h,u)=>h.body.pos.distanceTo(a.body.pos)-u.body.pos.distanceTo(a.body.pos));l.length&&(r.snapAim(a,l,.25),a.holdFire=!1)}if(i.shell&&this.shellTu){let l=this.shellTu.lastShell;!this.shellObj&&l&&this.c.arty.shells.includes(l)&&(this.shellObj=l,this.c.arty.tracked=l),this.shellObj&&!this.c.arty.shells.includes(this.shellObj)&&!this.shellEnd&&(this.shellEnd=this.shellObj.p.clone(),this.endDir=this.shellObj.v.clone().setY(0).normalize(),this.pull=0),this.shellObj&&(a.holdFire=!0)}let o=CM(a.body.heel);this.heelNow=o,this.heel=Math.max(this.heel,o);let c=i.cap?i.cap(this,n):null;return this.tag&&(this.tag.textContent=c?.[0]??"",this.tag.style.opacity=c?1:0),this.cap&&(this.cap.textContent=c?.[1]??"",this.cap.style.opacity=c?.[1]?1:0),this.title&&(this.title.style.opacity=i.title?he.clamp((n-i.title[0])/.8,0,1):0),{fade:Math.min(1,e/.4,(Eu-e)/.35+1e-4)}}focus(){let e=this.shots[this.cur];return e?.shell?this.shellEnd??this.shellObj?.p??this.victim?.body.pos??this.c.rcam.target:e?.top?this.topAt??this.c.rcam.target:this.ship?this.ship.body.pos:this.c.rcam.target}camera(e){let[t,n]=this.shotAt(e),i=this.shots[t],r=this.c.camera,a=wu(Math.min(n/i.dur,1)),o=this.ship??ri(this.b),c=o.body;if(i.shell){r.fov=40,r.updateProjectionMatrix();let x=this.shellObj;if(x&&!this.shellEnd){let v=x.v.clone().normalize(),y=new M(-v.z,0,v.x).normalize();this.camPos=x.p.clone().addScaledVector(v,-9).add(new M(0,1.4,0)).addScaledVector(y,3.2),r.position.copy(this.camPos),r.lookAt(x.p.clone().addScaledVector(v,70).add(new M(0,-6,0)))}else if(this.shellEnd&&this.camPos){this.pull=Math.min((this.pull??0)+1/30/.7,1);let v=this.endDir??new M(0,0,1),y=this.shellEnd.clone().addScaledVector(v,-(40+220*wu(this.pull))).add(new M(0,8+22*wu(this.pull),0));r.position.copy(y),r.lookAt(this.victim?this.victim.body.pos.clone().setY(12):this.shellEnd)}else if(this.shellTu&&this.victim){let v=ri(this.b),y=this.shellTu;r.position.copy(v.body.toWorld(new M(y.meta.at[0],y.meta.at[1]+8,y.meta.at[2]-26),new M)),r.lookAt(this.victim.body.pos.clone().setY(30))}r.updateMatrixWorld();return}if(i.top){let x=this.c.torps.list.filter(S=>S.alive&&S.from.side==="A");if(x.length){if(!this.spread||!this.spread.some(S=>S.alive)){let S=Math.max(...x.map(A=>A.t0));this.spread=x.filter(A=>Math.abs(A.t0-S)<.5)}x=this.spread.filter(S=>S.alive)}x.length&&(this.topAt=x.reduce((S,A)=>S.add(A.p),new M).divideScalar(x.length).setY(0),this.topDir=x.reduce((S,A)=>S.add(A.d),new M).normalize());let v=this.topAt??ri(this.b).body.pos,y=this.topDir??new M(1,0,0);r.fov=38,r.updateProjectionMatrix(),r.position.copy(v).addScaledVector(y,-240+70*a).add(new M(0,48-6*a,0)),r.lookAt(v.clone().addScaledVector(y,900).setY(0)),r.updateMatrixWorld();return}if(i.orbit){let[x,v,y,S,A,C]=i.orbit,I=c.yaw+kn(x,S,a),_=kn(v,A,a),E=o.meta.L*1.1*kn(y,C,a),D=new M(c.pos.x,10,c.pos.z);r.fov=34,r.updateProjectionMatrix(),r.position.set(D.x+Math.sin(I)*Math.cos(_)*E,D.y+Math.sin(_)*E,D.z+Math.cos(I)*Math.cos(_)*E),r.lookAt(D),r.updateMatrixWorld();return}let l=(x,v)=>[kn(x[0],v[0],a),kn(x[1],v[1],a),kn(x[2],v[2],a)];if(i.flat){let[x,v]=i.flat;r.fov=kn(x.fov,v.fov,a),r.updateProjectionMatrix();let y=Math.cos(c.yaw),S=Math.sin(c.yaw),A=C=>new M(c.pos.x+C[0]*y+C[2]*S,C[1],c.pos.z-C[0]*S+C[2]*y);r.position.copy(A(l(x.pos,v.pos))),r.lookAt(A(l(x.look,v.look))),r.updateMatrixWorld();return}if(i.local){let[x,v]=i.local;r.fov=kn(x.fov,v.fov,a),r.updateProjectionMatrix(),r.position.copy(c.toWorld(new M(...l(x.pos,v.pos)),new M)),r.up.set(0,1,0).applyQuaternion(c.quat),r.lookAt(c.toWorld(new M(...l(x.look,v.look)),new M)),r.updateMatrixWorld(),r.up.set(0,1,0);return}let[h,u]=i.cam;r.fov=kn(h.fov,u.fov,a),r.updateProjectionMatrix();let d=kn(h.yaw,u.yaw,a),f=kn(h.pitch,u.pitch,a),m=kn(h.dist,u.dist,a),b=kn(h.lift,u.lift,a),g=new M(c.pos.x,b,c.pos.z),p=c.yaw+Math.PI+d;r.position.set(g.x+Math.sin(p)*Math.cos(f)*m,g.y+Math.sin(f)*m,g.z+Math.cos(p)*Math.cos(f)*m),r.lookAt(g),r.updateMatrixWorld()}};var LM=s=>s*s*(3-2*s),PM=(s,e,t)=>s+(e-s)*t,sm=[{name:"deck",dur:4.6,ts:1,cap:()=>["Carrier strike","fighters \xB7 torpedo bombers \xB7 dive bombers"]},{name:"climb",dur:3,ts:1.4},{name:"torpedo",dur:3,ts:1,cap:()=>["Torpedo bombers","one torpedo each"]},{name:"dogfight",dur:3.6,ts:.9,cap:()=>["Their fighters come up",""]},{name:"flak",dur:3.2,ts:1,cap:()=>["Anti-aircraft fire",""]},{name:"run",dur:4,ts:1,cap:()=>["30 m above the sea","drop at 1 km"]},{name:"tracks",dur:2.8,ts:4},{name:"torphit",dur:2.8,ts:1},{name:"dive",dur:3.4,ts:1,cap:()=>["Dive bombers","250 kg"]},{name:"bombs",dur:3,ts:.8},{name:"end",dur:4.6,ts:1,title:[1.6,4.6]}],kM=sm.reduce((s,e)=>s+e.dur,0),Ac=class{constructor(e,t=sm){this.c=e,this.b=e.battle,this.air=e.air,this.shots=t,this.cur=-1,this.title=document.getElementById("endcard"),this.tag=document.getElementById("tag"),this.cap=document.getElementById("cap"),this.len=kM,this.stage()}stage(){let e=this.b,t=e.flagship()?.body.yaw??0,n=e.flagship()?.body.pos.clone()??new M;e.reset(),e.waves=!1;let i=Math.sin(t),r=Math.cos(t),a=Math.cos(t),o=-Math.sin(t),c=(g,p)=>[n.x+i*g+a*p,n.z+r*g+o*p],l=e.add("cv","A",...c(0,0),t,14,{flagship:!0});l.body.ctl.tele=3,l.noSteer=!0;for(let[g,p,x]of[["ca",900,700],["ca",-700,700],["cl",1200,-500],["dd",1500,300],["dd",-400,-800]]){let v=e.add(g,"A",...c(p,x),t,14);v.body.ctl.tele=3,v.noSteer=!0,v.holdFire=!0}let h=c(6500,6200),u=t-Math.PI/2-.4,d=Math.sin(u),f=Math.cos(u),m=e.add("bb","E",h[0],h[1],u,10);this.ebb=m;for(let[g,p,x]of[["ca",700,600],["ca",-800,500],["dd",1300,-400],["dd",-300,-900],["cl",400,1300]]){let v=e.add(g,"E",h[0]+d*p+f*x,h[1]+f*p-d*x,u,10);v.body.ctl.tele=3,v.noSteer=!0,v.holdFire=!0,v.torps=[]}m.body.ctl.tele=3,m.noSteer=!0,m.holdFire=!0;let b=e.add("cv","E",h[0]-f*4500,h[1]+d*4500,u,10,{planes:{f:3,t:0,b:0}});b.body.ctl.tele=3,b.noSteer=!0;for(let g of e.ships)g.side==="E"&&(g.aa.k=.3);l.focus=m,l.wing.cool=1e9,this.cv=l,this.ecv=b}shotAt(e){let t=0,n=this.shots;for(let i=0;i<n.length;i++){if(e<t+n[i].dur||i===n.length-1)return[i,e-t];t+=n[i].dur}return[n.length-1,0]}ts(e){return this.shots[this.shotAt(e)[0]].ts??1}sq(e,t){let n=this.air.sq.filter(i=>i.side===e&&i.kind===t&&i.n>0);return n.find(i=>i.state!=="home")??n[0]}launch(e,t){this.air.launch(this.cv,e,t),this.cv.wing.cool=1e9}start(e){let t=this.shots[e],n=this.b,i=this.c,r=this.air,a=this.cv;if(this.cur=e,this.q=null,this.ship=null,t.name==="deck"&&(i.fast(2),this.launch("t",{job:"strike",target:this.ebb}),this.q=this.sq("A","t")),t.name==="climb"&&(this.q=this.sq("A","t")),t.name==="torpedo"&&(i.fast(12),this.launch("f",{job:"escort",escort:this.sq("A","t"),target:this.ebb}),i.fast(26),this.q=this.sq("A","t")),t.name==="dogfight"&&(i.fastUntil(()=>r.sq.some(o=>o.side==="E"&&o.kind==="f"&&o.state!=="up"&&r.sq.some(c=>c.side==="A"&&c.kind==="f"&&c.pos.distanceTo(o.pos)<1100)),160),i.fastUntil(()=>r.sq.some(o=>o.side==="E"&&o.kind==="f"&&o.dmg>.55),20),this.q=r.sq.find(o=>o.side==="E"&&o.kind==="f"&&o.dmg>.55)??r.sq.find(o=>o.side==="E"&&o.kind==="f")??this.sq("A","f"),this.q2=this.sq("A","f"),this.fall0=r.falling.length,this.down=null),t.name==="flak"&&(i.fastUntil(()=>{let o=this.sq("A","t");return!o||o.pos.distanceTo(this.ebb.body.pos)<5200},120),this.launch("b",{job:"strike",target:this.ebb}),this.q=this.sq("A","t")),t.name==="run"&&(i.fastUntil(()=>{let o=this.sq("A","t");return!o||Math.hypot(o.pos.x-this.ebb.body.pos.x,o.pos.z-this.ebb.body.pos.z)<2200},120),this.q=this.sq("A","t")),t.name==="dive"&&(i.fastUntil(()=>r.sq.some(o=>o.side==="A"&&o.kind==="b"&&Math.hypot(o.pos.x-this.ebb.body.pos.x,o.pos.z-this.ebb.body.pos.z)<1700),200),this.q=this.sq("A","b")),t.name==="bombs"&&(i.fastUntil(()=>{let o=this.sq("A","b");return!o||o.state!=="dive"||o.pos.y<420},30),this.ship=this.ebb),t.name==="tracks"&&i.fast(4),t.name==="torphit"){let o=n.log.length;i.fastUntil(()=>n.log.slice(o).some(c=>c.kind==="torphit"&&c.ship.side==="E"),40),this.ship=this.ebb}t.name==="end"&&(i.fast(25),this.ship=this.ebb),this.qPos=this.q?this.q.pos.clone():null}apply(e){let[t,n]=this.shotAt(e);t!==this.cur&&this.start(t);let i=this.shots[t],r=i.cap?i.cap(this,n):null;return this.tag&&(this.tag.textContent=r?.[0]??"",this.tag.style.opacity=r?1:0),this.cap&&(this.cap.textContent=r?.[1]??"",this.cap.style.opacity=r?.[1]?1:0),this.title&&(this.title.style.opacity=i.title?he.clamp((n-i.title[0])/.8,0,1):0),{fade:Math.min(1,e/.4,(this.len-e)/.35+1e-4)}}focus(){return this.q?.pos??this.ship?.body.pos??this.cv.body.pos}lead(){return this.q&&this.q.n>0&&(this.qPos=this.q.pos.clone()),this.qPos??this.cv.body.pos}camera(e){let[t,n]=this.shotAt(e),i=this.shots[t],r=this.c.camera,a=LM(Math.min(n/i.dur,1)),o=(p,x,v)=>{r.fov=v,r.updateProjectionMatrix(),r.position.copy(p),r.lookAt(x),r.updateMatrixWorld()},c=this.cv.body,l=this.q,h=p=>new M(Math.sin(p),0,Math.cos(p)),u=p=>new M(Math.cos(p),0,-Math.sin(p));if(i.name==="deck"){let p=this.cv.meta.deck_top+8.7,x=c.toWorld(new M(5,p+2.4,108),new M),v=l?l.pos.clone().lerp(c.toWorld(new M(2,p+2,-40),new M),.5*(1-a)):c.pos;return o(x,v,40)}if(i.name==="climb"){let p=c.toWorld(new M(140,70+a*20,520),new M);return o(p,l?this.lead().clone().lerp(c.pos,.3):c.pos,36)}if(i.name==="torpedo"){let p=this.lead(),x=l?.yaw??0,v=p.clone().addScaledVector(u(x),-26+4*a).addScaledVector(h(x),14-10*a).add(new M(0,-3,0));return o(v,p.clone().addScaledVector(h(x),6),40)}if(i.name==="dogfight"){let p=this.air;!this.down&&this.camE&&p.falling.length>this.fall0&&(this.down=p.falling.slice(this.fall0).find(A=>A.side==="E"&&A.t<.2&&A.pos.distanceTo(this.camE)<80)??null);let x,v;if(this.down)x=this.down.pos,v=this.down.yaw,this.camE=this.camE?this.camE.lerp(x,.25):x.clone();else if(this.q?.n>0){let A=p.placeOf(this.q,this.q.n-1,new M);x=A.pos.clone(),v=A.yaw,this.camE=x.clone(),this.camY=v}else x=this.lead(),v=this.q?.yaw??0;let y=this.camE??x;this.down&&(v=this.camY??v);let S=y.clone().addScaledVector(u(v),38).addScaledVector(h(v),-26).add(new M(0,6,0));return this.down?(this.camP=this.camP?this.camP.lerp(S,.08):S,o(this.camP,x,42)):(this.camP=S,o(S,y.clone().addScaledVector(h(v),16),42))}if(i.name==="flak"){let p=this.lead(),x=l?.yaw??0,v=p.clone().addScaledVector(h(x),-48+8*a).addScaledVector(u(x),14).add(new M(0,9,0));return o(v,p.clone().addScaledVector(h(x),700).setY(p.y*.4),42)}if(i.name==="run"){let p=this.lead(),x=l?.yaw??0,v=p.clone().addScaledVector(u(x),16).addScaledVector(h(x),-42+8*a);return v.y=Math.max(p.y+5,7),o(v,p.clone().addScaledVector(h(x),500).setY(Math.max(p.y-25,2)),42)}if(i.name==="dive"){let p=this.lead(),x=l?.yaw??0,v=p.clone().addScaledVector(h(x),-42).add(new M(0,16,0)).addScaledVector(u(x),8),y=this.ebb.body.pos.clone().setY(0);return o(v,p.clone().lerp(y,.18),44)}if(i.name==="tracks"){let p=this.c.torps.list.filter(y=>y.alive&&y.from===this.cv);p.length&&(this.topAt=p.reduce((y,S)=>y.add(S.p),new M).divideScalar(p.length).setY(0),this.topDir=p[0].d.clone());let x=this.topAt??this.ebb.body.pos,v=this.topDir??h(0);return o(x.clone().addScaledVector(v,-200+40*a).add(new M(0,46,0)),x.clone().addScaledVector(v,700).setY(0),38)}let d=this.ebb.body,f=d.yaw+(i.name==="end"?2.4-.2*a:i.name==="bombs"?2:-1.2),m=i.name==="end"?PM(520,640,a):i.name==="bombs"?270:380,b=new M(d.pos.x,14,d.pos.z),g=new M(b.x+Math.sin(f)*m,i.name==="end"?60+30*a:34,b.z+Math.cos(f)*m);return o(g,b,i.name==="end"?34:32)}};var rm="kurogane-designs";function IM(){try{return JSON.parse(localStorage.getItem(rm)??"null")}catch{return null}}function DM(s){try{localStorage.setItem(rm,JSON.stringify(s))}catch{}}var Ts=new M,Rc=class{constructor(e){Object.assign(this,e),this.open=!1,this.ships=()=>this.battle.ships.filter(o=>o.player),this.designs=IM()??{},this.cur=0,this.slot=null;let t=this.el=document.createElement("div");t.id="dock",t.innerHTML=`
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
      <div class="dk-msg"></div>`,this.root.appendChild(t);let n=o=>t.querySelector(o);this.$={tabs:n(".dk-tabs"),slots:n(".dk-slots"),panel:n(".dk-panel"),name:n(".dk-slotname"),type:n(".dk-type"),cal:n(".dk-cal"),n:n(".dk-n"),tier:n(".dk-tier"),stats:n(".dk-stats"),msg:n(".dk-msg")},n(".dk-go").addEventListener("click",()=>this.close(!0)),n(".dk-stock").addEventListener("click",()=>{let o=this.ship();this.setDesign(o,Vn(o.kind,o.meta))}),n(".dk-all").addEventListener("click",()=>this.copyAll()),n(".dk-test").addEventListener("click",()=>this.testFire());for(let o of t.querySelectorAll("button"))o.addEventListener("pointerdown",c=>c.stopPropagation());this.drag=null,this.yaw=2.3,this.pitch=.32,this.dist=1,e.canvas.addEventListener("pointerdown",o=>{this.open&&o.button===0&&(this.drag=[o.clientX,o.clientY])}),addEventListener("pointermove",o=>{this.drag&&(this.yaw-=(o.clientX-this.drag[0])*.006,this.pitch=he.clamp(this.pitch+(o.clientY-this.drag[1])*.004,.04,1.2),this.drag=[o.clientX,o.clientY])}),addEventListener("pointerup",()=>{this.drag=null}),e.canvas.addEventListener("wheel",o=>{this.open&&(this.dist=he.clamp(this.dist*Math.exp(o.deltaY*.001),.4,3))},{passive:!0});let i=new Map,r=null;e.canvas.addEventListener("pointerdown",o=>{if(!(!this.open||o.pointerType!=="touch")&&(i.set(o.pointerId,[o.clientX,o.clientY]),i.size===2)){let[c,l]=[...i.values()];r={d:Math.hypot(c[0]-l[0],c[1]-l[1]),dist:this.dist},this.drag=null}}),addEventListener("pointermove",o=>{if(i.has(o.pointerId)&&(i.set(o.pointerId,[o.clientX,o.clientY]),r&&i.size===2)){let[c,l]=[...i.values()];this.dist=he.clamp(r.dist*r.d/Math.max(Math.hypot(c[0]-l[0],c[1]-l[1]),1),.4,3),this.drag=null}});let a=o=>{i.delete(o.pointerId),i.size<2&&(r=null)};addEventListener("pointerup",a),addEventListener("pointercancel",a)}ship(){return this.ships()[this.cur]}designOf(e){return this.store?this.store.get(e)??Vn(e.kind,e.meta):this.designs[e.station?`${e.kind}@${e.station}`:e.kind+(e.flagship?"*":"")]??Vn(e.kind,e.meta)}keyOf(e){return e.station?`${e.kind}@${e.station}`:e.kind+(e.flagship?"*":"")}applyAll(){for(let e of this.ships()){let t=this.designs[this.keyOf(e)];t&&this.battle.refit(e,t)}}setDesign(e,t){let n=this.check?.(e,t);if(n)return this.flash(n),e;this.store?this.store.put(e,t):(this.designs[this.keyOf(e)]=t,DM(this.designs));let i=this.battle.refit(e,t);return this.render(),i}copyAll(){let e=this.ship(),t=this.designOf(e);for(let n of this.ships())n!==e&&n.kind===e.kind&&this.setDesign(n,JSON.parse(JSON.stringify(t)));this.flash(_e("copied"))}show(e){e!==void 0&&(this.cur=e,this.slot=null),this.entry=new Map(this.ships().map(t=>[t.uid,JSON.parse(JSON.stringify(this.designOf(t)))])),this.open=!0,this.el.classList.add("on"),this.el.querySelector(".dk-go").textContent=_e(this.store?"backYard":"sortie"),this.render()}bill(e){let t=this.entry?.get(e.uid);return t&&this.billFor?this.billFor(t,this.designOf(e)):null}close(e){if(this.store&&this.pay){let t={rivets:0,steel:0};for(let n of this.ships()){let i=this.bill(n);i&&(t.rivets+=i.rivets,t.steel+=i.steel)}if(!this.pay(t)){this.flash(_e("cantPay")(t));return}}this.open=!1,this.el.classList.remove("on"),e&&this.onSortie?.()}flash(e){this.$.msg.textContent=e,this.$.msg.classList.add("on"),clearTimeout(this._mt),this._mt=setTimeout(()=>this.$.msg.classList.remove("on"),2600)}testFire(){let e=this.ship();if(!e?.alive)return;let t=e.turrets.filter(n=>n.rest+.01<0||n.meta.arc[0]<-Math.PI/2).length;e.testAim={brg:t>=e.turrets.length/2?-Math.PI/2:Math.PI/2,elev:.14,fire:!0,t:0};for(let n of e.turrets)n.testFired=!1,n.reload=Math.min(n.reload,.5);this.sound?.start()}render(){let e=this.ship();if(!e)return;let t=this.designOf(e);this.$.tabs.innerHTML="",this.ships().forEach((l,h)=>{let u=document.createElement("button");u.type="button",u.className=(h===this.cur?"on":"")+(l.alive?"":" dead"),u.textContent=`${l.label??_e("short")[l.kind]}${l.flagship?" \u25C6":""}`,u.addEventListener("pointerdown",d=>d.stopPropagation()),u.addEventListener("click",()=>{this.cur=h,this.slot=null,this.render()}),this.$.tabs.appendChild(u)});let n=ss(e.meta),i=this.slot&&n.find(l=>l.id===this.slot);if(this.$.panel.classList.toggle("on",!!i),i){let l=t.mounts.find(f=>f.slot===i.id)??{slot:i.id,type:"none",cal:36,n:2,tier:1};this.$.name.textContent=_e("slotName")(i);let h=(f,m,b,g)=>{f.innerHTML="";for(let[p,x]of m){let v=document.createElement("button");v.type="button",v.textContent=x,p===b&&(v.className="on"),v.addEventListener("pointerdown",y=>y.stopPropagation()),v.addEventListener("click",()=>g(p)),f.appendChild(v)}},u=f=>{let m=JSON.parse(JSON.stringify(t)),b=m.mounts.find(g=>g.slot===i.id);b||(b={slot:i.id,type:"gun",cal:l.cal,n:l.n,tier:1},m.mounts.push(b)),Object.assign(b,f),b.type==="none"&&(m.mounts=m.mounts.filter(g=>g!==b)),this.setDesign(e,m)};h(this.$.type,[["none",_e("empty")],["gun",_e("gun")],...i.wing?[["torp",_e("torp")]]:[]],l.type,f=>u({type:f}));let d=l.type==="gun";for(let f of["cal","n","tier"])this.$[f].classList.toggle("off",!d);h(this.$.cal,(this.cals?.()??Bp).map(f=>[f,String(f)]),l.cal,f=>u({type:"gun",cal:f})),h(this.$.n,[[1,_e("single")],[2,_e("twin")],[3,_e("triple")]],l.n,f=>u({type:"gun",n:f})),h(this.$.tier,[[1,"\xD71"],[2,"\xD72"],[3,"\xD73"]],l.tier??1,f=>u({type:"gun",tier:f}))}this.aaPanel(e,t);let r=ii(t,this.art),a=r.freeboard<=.3?"sink":r.gm<.05?"capsize":r.gm<.6?"tender":"ok",o=Math.max(0,...r.mounts.map(l=>Et[l.gun].range)),c=he.clamp(r.gm/3,0,1)*100;this.$.stats.innerHTML=`
      <div><i>${_e("disp")}</i><b>${Math.round(r.disp).toLocaleString("en")}</b> t</div>
      <div><i>${_e("speed")}</i><b>${(e.body.K.kn*r.speedK).toFixed(1)}</b> kn</div>
      <div><i>${_e("broad")}</i><b>${r.broadside.toFixed(1)}</b> t</div>
      <div><i>${_e("range")}</i><b>${(o/1e3).toFixed(1)}</b> km</div>
      <div><i>GM</i><b>${r.gm.toFixed(2)}</b> m<span class="gm"><em style="width:${c}%"></em></span></div>
      <div class="st ${a}">${_e("stab")[a]}</div>${this.store?(()=>{let l=this.bill(e);return l&&(l.rivets||l.steel)?`<div><i>${_e("bill")}</i><b>${l.rivets.toLocaleString("en")}</b> <small>${_e("rivetsU")}</small> <b>${l.steel.toLocaleString("en")}</b> <small>${_e("steelU")}</small></div>`:""})():""}`}aaPanel(e,t){let n=this.el.querySelector(".dk-aa"),i=Zp[e.kind]??0,r=e.opts?.mods?.aaStock??ma[e.kind]??[0,0],a={ha:0,mg:0,...t.aa??{}},o=[],c=(h,u,d,f,m)=>`<div class="dk-aarow"><span>${h}</span><b>${u}</b><em>${f}</em><button type="button" data-k="${d}" data-d="-1">\u2212</button><button type="button" data-k="${d}" data-d="1" ${m?"":"disabled"}>\uFF0B</button></div>`,l=a.ha+a.mg;if(i&&(o.push(`<div class="dk-lab">${_e("aaHead")(l,i)}</div>`),o.push(c(_e("haGun"),r[0]+a.ha,"ha",a.ha?`+${a.ha}`:"",l<i)),o.push(c(_e("mgGun"),r[1]+a.mg,"mg",a.mg?`+${a.mg}`:"",l<i))),e.kind==="cv"){let h={f:3,t:4,b:3,...t.air??{}},u=h.f+h.t+h.b;o.push(`<div class="dk-lab">${_e("airHead")(u,xu)}</div>`);for(let d of["f","t","b"])o.push(c(_e("planeKinds")[d],h[d],"air."+d,"",u<xu))}n.innerHTML=o.join(""),n.style.display=o.length?"block":"none";for(let h of n.querySelectorAll("button"))h.addEventListener("pointerdown",u=>u.stopPropagation()),h.onclick=()=>{let u=JSON.parse(JSON.stringify(t)),d=+h.dataset.d,f=h.dataset.k;if(f.startsWith("air.")){u.air={f:3,t:4,b:3,...u.air??{}};let m=f.slice(4);u.air[m]=Math.max(0,u.air[m]+d)}else u.aa={ha:0,mg:0,...u.aa??{}},u.aa[f]=Math.max(0,u.aa[f]+d);this.setDesign(e,u)}}update(e){if(!this.open)return;let t=this.ship();if(!t)return;let n=t.body,r=t.meta.L*1.15*this.dist,a=n.yaw+this.yaw,o=n.toWorld(Ts.set(0,t.meta.deck_top+4,0),new M);this.camera.position.set(o.x+Math.sin(a)*Math.cos(this.pitch)*r,o.y+Math.sin(this.pitch)*r,o.z+Math.cos(a)*Math.cos(this.pitch)*r),this.camera.lookAt(o),this.camera.updateMatrixWorld(),this.rcam.target.set(n.pos.x,0,n.pos.z);let c=ss(t.meta),l=this.designOf(t);if(this.$.slots.childElementCount!==c.length||this.$.slots.dataset.ship!==String(t.id)){this.$.slots.innerHTML="",this.$.slots.dataset.ship=String(t.id);for(let h of c){let u=document.createElement("button");u.type="button",u.className="dk-slot",u.dataset.id=h.id,u.addEventListener("pointerdown",d=>d.stopPropagation()),u.addEventListener("click",()=>{this.slot=h.id,this.render()}),this.$.slots.appendChild(u)}}for(let h of this.$.slots.children){let u=c.find(f=>f.id===h.dataset.id),d=l.mounts.filter(f=>f.slot===u.id)[0];Ts.set(u.at[0],u.at[1]+2,u.at[2]),n.toWorld(Ts,Ts).project(this.camera),h.style.transform=`translate(${((Ts.x*.5+.5)*this.W).toFixed(1)}px, ${((-Ts.y*.5+.5)*this.H).toFixed(1)}px)`,h.style.display=Ts.z<1?"block":"none",h.classList.toggle("on",this.slot===u.id),h.classList.toggle("used",!!d),h.textContent=d?d.type==="torp"?"T":`${d.cal}`:"+"}t.testAim&&(t.testAim.t+=e,t.turrets.every(h=>h.testFired||h.broken)&&t.testAim.t>2&&(t.testAim=null),t.testAim&&t.testAim.t>120&&(t.testAim=null)),!t.alive&&!this._lost&&(this._lost=!0,this.flash(_e(t.body.capsized?"wentOver":"sankDock"))),t.alive&&(this._lost=!1)}};function NM(s){let e=document.createElement("canvas");e.width=512,e.height=160;let t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.font='600 128px Oswald, "Arial Narrow", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(232, 234, 230, 0.92)",t.fillText(s,e.width/2,e.height/2+6);let n=new No(e);return n.colorSpace=tt,n.anisotropy=4,n}function am(s,e,t){let n=s.stations,i=n[0];for(let a of n)Math.abs(a[0]-e)<Math.abs(i[0]-e)&&(i=a);let r=i[1];for(let a=0;a+1<r.length;a++){let[o,c]=r[a],[l,h]=r[a+1];if(t>=c&&t<=h)return o+(l-o)*(t-c)/Math.max(h-c,1e-6)}return r[r.length-1][0]}var Cc=class{constructor(e){this.group=new dt,this.marks=new Map,this.patch=e;let t=12,n=14,i=1.6,r=[],a=[];for(let o=0;o<=t;o++){let c=o/t;r.push(-c*n,i*(1-c)*.5,0,-c*n,-i*(1-c)*.5,0)}for(let o=0;o<t;o++){let c=o*2;a.push(c,c+1,c+2,c+1,c+3,c+2)}this.penGeo=new mt,this.penGeo.setAttribute("position",new Je(r,3)),this.penGeo.setIndex(a),this.penN=t,this.penMat=new Wt({color:855568,side:Yt})}make(e){let t=new dt,n=e.meta,i=n.L*.3,r=n.D-n.T,a=r*.46,o=r*.5,c=o*3.2,l=Math.max(am(n,i,a-o/2),am(n,i,a+o/2))+.15,h=NM(e.mark??""),u=new Xt({map:h,transparent:!0,roughness:.8,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});this.patch?.(u);for(let p of[1,-1]){let x=new Be(new Rn(c,o),u);x.position.set(p*l,a,i),x.rotation.y=p>0?Math.PI/2:-Math.PI/2,t.add(x)}let d=null;for(let p of n.boxes??[])p.part==="superstructure"&&(!d||p.max[1]>d.max[1])&&(d=p);let f=new M(d?(d.min[0]+d.max[0])/2:0,(d?d.max[1]:r+20)+9,d?(d.min[2]+d.max[2])/2:0),m=this.penGeo.clone(),b=new Be(m,this.penMat);b.position.copy(f),t.add(b);let g=new Be(new ln(.12,.12,9,6),this.penMat);return g.position.copy(f).add(new M(0,-4.5,0)),t.add(g),this.group.add(t),{g:t,pen:b,pg:m}}update(e,t){let n=new Set;for(let i of e){if(!i.boss||i.side!=="E"||i.kind==="wh"||i.gone)continue;n.add(i);let r=this.marks.get(i);r||(r=this.make(i),this.marks.set(i,r)),r.g.position.copy(i.body.pos),r.g.quaternion.copy(i.body.quat);let a=r.pg.attributes.position;for(let o=0;o<=this.penN;o++){let c=o/this.penN,l=Math.sin(t*6-c*7)*c*1.4;a.setXYZ(o*2,l,(1-c)*.8,-c*14),a.setXYZ(o*2+1,l,-(1-c)*.8,-c*14)}a.needsUpdate=!0}for(let[i,r]of this.marks)n.has(i)||(this.group.remove(r.g),this.marks.delete(i))}};var Lc=class{constructor(e){this.patch=e,this.group=new dt,this.group.visible=!1,this.parts={}}async load(e,t=8){try{if(!(await fetch(`${e}port.json`)).ok)return!1}catch{return!1}let n=new mi,i=async(l,h)=>{let u=await n.loadAsync(e+l);return u.flipY=!1,u.colorSpace=h?tt:Vt,u.anisotropy=t,u};this.tex=i;let[r,a,o]=await Promise.all([i("port_base_2k.webp",!0),i("port_orm_2k.webp",!1),new ns().setMeshoptDecoder(_r).loadAsync(e+"port.glb")]),c=this.mat=new Xt({map:r,aoMap:a,roughnessMap:a,metalnessMap:a,roughness:1,metalness:1});return this.patch?.(c),o.scene.traverse(l=>{if(!l.isMesh)return;let h=l.name||l.parent?.name,u=new Be(l.geometry,c);u.frustumCulled=!0;let d=(h??"").replace(/\.\d+$/,"").replace(/_\d+$/,"");this.parts[d]=u,this.group.add(u)}),!0}async sharpen(){if(!this.mat||this.sharp)return;this.sharp=!0;let[e,t]=await Promise.all([this.tex("port_base.webp",!0),this.tex("port_orm.webp",!1)]),n=[this.mat.map,this.mat.aoMap];Object.assign(this.mat,{map:e,aoMap:t,roughnessMap:t,metalnessMap:t});for(let i of n)i?.dispose()}show(e,t=0,n=new M){this.group.visible=e,this.group.position.copy(n),this.group.rotation.set(0,t,0)}setYard({slips:e=1,crane:t=0,building:n=!1}){for(let i=0;i<3;i++)this.parts[`slip${i}`]&&(this.parts[`slip${i}`].visible=i<e);for(let i=0;i<4;i++)this.parts[`crane${i}`]&&(this.parts[`crane${i}`].visible=i===t);this.parts.frame&&(this.parts.frame.visible=n)}};var UM=[{id:1,wind:6,swell:.6,haze:55e-6,hour:15.6},{id:2,wind:5,swell:.5,haze:32e-5,hour:15,fog:5200},{id:3,wind:10,swell:2.2,haze:7e-5,hour:14.4,cover:.5},{id:4,wind:17,swell:3.4,haze:19e-5,hour:15.2,storm:!0,cover:.8,dim:.35}],as=[{id:"1-1",goal:"all",fee:600,par:360,waves:[["dd","dd"],["dd","dd","dd"]]},{id:"1-2",goal:"escort",fee:800,par:480,escort:[3,2],waves:[["dd","dd"],["dd","dd","dd"]]},{id:"1-3",goal:"all",fee:900,par:420,waves:[["cl","dd","dd"],["dd","dd","dd","dd"]]},{id:"1-4",goal:"hold",fee:1e3,par:0,time:420,waves:[["dd","dd","dd"],["cl","dd","dd"],["cl","cl","dd","dd"]]},{id:"1-5",goal:"boss",fee:1500,par:540,waves:[["cl","dd","dd"],["ca!","cl","dd","dd"]]},{id:"2-1",goal:"all",fee:1600,par:480,near:!0,waves:[["ca","cl","dd","dd"],["cl","dd","dd","dd"]]},{id:"2-2",goal:"all",fee:1800,par:480,hour:17.55,waves:[["cl","dd","dd","dd","dd"],["cl","cl","dd","dd","dd"]]},{id:"2-3",goal:"escort",fee:2e3,par:600,escort:[4,3],waves:[["ca","dd","dd"],["cl","cl","dd","dd"],["ca","dd","dd"]]},{id:"2-4",goal:"hold",fee:2200,par:0,time:480,waves:[["ca","cl","dd","dd"],["ca","ca","dd","dd"],["ca","cl","cl","dd","dd"]]},{id:"2-5",goal:"boss",fee:3e3,par:600,waves:[["ca","cl","dd","dd"],["bc!","ca","ca","dd","dd"]]},{id:"3-1",goal:"all",fee:3500,par:600,waves:[["ca","ca","cl","dd","dd"],["bc","ca","dd","dd"]]},{id:"3-2",goal:"all",fee:3800,par:600,waves:[["bc","ca","dd","dd"],["bc","ca","ca","dd","dd"]]},{id:"3-3",goal:"all",fee:4200,par:660,air:!0,waves:[["cv","ca","cl","dd","dd"],["bc","ca","dd","dd"]]},{id:"3-4",goal:"escort",fee:4500,par:720,escort:[4,2],air:!0,waves:[["cv","ca","dd","dd"],["bc","ca","cl","dd","dd"],["cv","cl","dd","dd"]]},{id:"3-5",goal:"boss",fee:6e3,par:780,air:!0,waves:[["bc","ca","ca","dd","dd"],["cv!","cv!","bc","ca","dd","dd"]]},{id:"4-1",goal:"all",fee:7e3,par:720,waves:[["bb","bc","ca","dd","dd"],["bb","ca","ca","cl","dd","dd"]]},{id:"4-2",goal:"all",fee:7500,par:720,waves:[["copy","copy","ca","dd","dd"],["copy","copy","copy","dd","dd"]]},{id:"4-3",goal:"hold",fee:8e3,par:0,time:540,air:!0,waves:[["bb","ca","dd","dd"],["cv","bc","ca","dd","dd"],["bb","bc","ca","cl","dd"]]},{id:"4-4",goal:"escort",fee:9e3,par:780,escort:[4,2],air:!0,waves:[["bc","ca","dd","dd"],["cv","bb","ca","dd","dd"],["bc","bc","cl","dd","dd"]]},{id:"4-5",goal:"boss",fee:15e3,par:900,air:!0,waves:[["bb","bc","ca","dd","dd"],["wh!","bc","ca","dd","dd"]]}].map(s=>({...s,fee:Math.round(s.fee*1.3/50)*50})),Tr=s=>as.find(e=>e.id===s),om=s=>UM[+s.id[0]-1],cm=s=>as[as.findIndex(e=>e.id===s)+1]?.id??null;var Wn={dd:{rivets:800,steel:300,slip:1,tons:2400},cl:{rivets:1800,steel:900,slip:2,tons:8500},ca:{rivets:3e3,steel:1800,slip:3,tons:13e3},bc:{rivets:6e3,steel:5e3,slip:4,tons:42e3},cv:{rivets:7e3,steel:5e3,slip:4,tons:38e3},bb:{rivets:8e3,steel:7e3,slip:4,tons:64e3},sp:{rivets:2e4,steel:18e3,slip:6,tons:12e4}},hm=["dd","cl","ca","bc","cv","bb","sp"],Rr={dd:null,cl:"1-3",ca:"1-5",bc:"2-5",cv:"3-3",bb:"3-5",sp:"4-5"},FM=[12.7,15.5,20,25,36],OM={dd:60,cl:210,ca:325,bc:1050,bb:1600,cv:950,wh:4e3,tr:0},zM={dd:.08,cl:.12,ca:.18,bc:.25,cv:.25,bb:.3,wh:.6},BM=.6,HM={1:[65,25,9,1],2:[58,29,11,2],3:[50,32,15,3],4:[42,35,19,4]},Zt={steelS:{tier:0,steel:300},bulkhead:{tier:0,part:!0},boiler:{tier:0,part:!0},rangefinder:{tier:1,part:!0},bulge:{tier:1,part:!0},armour:{tier:1,part:!0},steelL:{tier:1,steel:1200},oxy:{tier:1,bp:!0},cal41:{tier:1,bp:!0,cal:41},cal46:{tier:2,bp:!0,cal:46},aadir:{tier:2,part:!0},cal51:{tier:2,bp:!0,cal:51,from:3},cal61:{tier:3,bp:!0,cal:61,from:3},cal80:{tier:9,bp:!0,cal:80},f2:{tier:1,bp:!0,from:3},t2:{tier:2,bp:!0,from:3},b2:{tier:2,bp:!0,from:3}},lm={dd:["Hayate","Asanagi","Shiokaze","Tsumuji","Oboro","Nowaki","Hatsunami","Y\u016Bnagi","Kogarashi","Sazanami","Hayase","Shiranami"],cl:["Kawasemi","Misago","Tsubame","Kamome","Hibari","Isohiyo"],ca:["Kurodake","Shiramine","Aodake","Akaishi","Hiuchi","Kasumidake"],bc:["Narukami","Jinrai","Todoroki","Inazuma"],cv:["\u014Ctori","Amakake","Unkai","Kumoi"],bb:["Hagane","Genbu","Iwao","Banjaku"],sp:["Tetsuhama"]},VM={Hayate:"\u75BE\u98A8",Asanagi:"\u671D\u51EA",Shiokaze:"\u6F6E\u98A8",Tsumuji:"\u65CB\u98A8",Oboro:"\u6727",Nowaki:"\u91CE\u5206",Hatsunami:"\u521D\u6CE2",Y\u016Bnagi:"\u5915\u51EA",Kogarashi:"\u6728\u67AF",Sazanami:"\u7D30\u6CE2",Hayase:"\u65E9\u702C",Shiranami:"\u767D\u6CE2",Kawasemi:"\u7FE1\u7FE0",Misago:"\u9D9A",Tsubame:"\u71D5",Kamome:"\u9D0E",Hibari:"\u96F2\u96C0",Isohiyo:"\u78EF\u9D6F",Kurodake:"\u9ED2\u5CB3",Shiramine:"\u767D\u5DBA",Aodake:"\u9752\u5CB3",Akaishi:"\u8D64\u77F3",Hiuchi:"\u71E7",Kasumidake:"\u971E\u5CB3",Narukami:"\u9CF4\u795E",Jinrai:"\u8FC5\u96F7",Todoroki:"\u8F5F",Inazuma:"\u7A32\u59BB",\u014Ctori:"\u9CF3",Amakake:"\u5929\u7FD4",Unkai:"\u96F2\u6D77",Kumoi:"\u96F2\u5C45",Hagane:"\u92FC",Genbu:"\u7384\u6B66",Iwao:"\u5DCC",Banjaku:"\u78D0\u77F3",Tetsuhama:"\u9244\u6D5C",Kurogane:"\u9ED2\u9244"},vi=(s,e)=>e?VM[s]??s:s;function xa(){let s={v:1,created:Date.now(),played:0,rivets:1200,steel:400,nextUid:1,ships:[],sortie:[],flag:0,stages:{},items:{},bps:[],pity:0,rng:Math.random()*4294967296>>>0,copies:[],last:"1-1",log:[]},e=Ar(s,"bb",{name:"Kurogane",old:!0});return Ar(s,"dd"),Ar(s,"dd"),s.flag=e.uid,s}function Ar(s,e,t={}){let n=new Set(s.ships.map(a=>a.name)),i=t.name??(lm[e]??[e]).find(a=>!n.has(a))??`${(lm[e]??[e])[0]} ${s.nextUid}`;t.building&&(s.built=(s.built??0)+1);let r={uid:s.nextUid++,kind:e,name:i,design:null,hp:1,parts:[null,null],kills:0,sorties:0,building:t.building??0,old:!!t.old};return s.ships.push(r),!r.building&&s.sortie.length<8&&s.sortie.push(r.uid),r}var _n=(s,e)=>s.ships.find(t=>t.uid===e),ya=s=>Object.values(s.stages).reduce((e,t)=>e+(t.stars??0),0),Tu=(s,e)=>!!s.stages[e]?.clears;function Pc(s,e){if(e==="1-1")return!0;let t=as.findIndex(n=>n.id===e);return t>0&&Tu(s,as[t-1].id)}var va=(s,e)=>!Rr[e]||Tu(s,Rr[e]);function _a(s){return[...FM,...s.bps.map(e=>Zt[e]?.cal).filter(Boolean)].sort((e,t)=>e-t)}function Au(s){let e=ya(s);return e>=35?24e4:e>=20?18e4:e>=8?12e4:8e4}function kc(s){if(Tu(s,"4-5"))return 1/0;let e=ya(s);return e>=30?12e4:e>=15?9e4:7e4}var Ru=[null,{rivets:3e3,steel:500},{rivets:8e3,steel:2e3}],Lr=[{tons:15e3,turret:1100},{tons:45e3,turret:2700,rivets:4e3,steel:2e3},{tons:7e4,turret:5500,rivets:9e3,steel:5e3},{tons:13e4,turret:12e3,rivets:18e3,steel:12e3}],As=s=>s.slips??1,Cu=s=>Lr[s.crane??0],Lu=s=>s.ships.filter(e=>e.building>0).length;function um(s){let e=Ru[As(s)];return!e||s.rivets<e.rivets||s.steel<e.steel?!1:(s.rivets-=e.rivets,s.steel-=e.steel,s.slips=As(s)+1,!0)}function dm(s){let e=Lr[(s.crane??0)+1];return!e||s.rivets<e.rivets||s.steel<e.steel?!1:(s.rivets-=e.rivets,s.steel-=e.steel,s.crane=(s.crane??0)+1,!0)}function Pu(s,e){let t=Wn[e];return va(s,e)?t.tons>Cu(s).tons?"crane":Lu(s)>=As(s)?"slip":s.rivets<t.rivets||s.steel<t.steel?"money":"":"locked"}var GM=[0,3,8,16,28],Cr=s=>GM.filter(e=>(s.xp??0)>=e).length-1;function WM(s,e){return Pu(s,e)===""}function fm(s,e){if(!WM(s,e))return null;let t=Wn[e];return s.rivets-=t.rivets,s.steel-=t.steel,Ar(s,e,{building:t.slip})}var Ic=3;function pm(s,e){let t=e*Ic;return s.rivets<t?!1:(s.rivets-=t,s.steel+=e,!0)}var ku=s=>Math.round((1-s.hp)*Wn[s.kind].rivets*.3);function mm(s,e){let t=ku(e);return t<=0||s.rivets<t?!1:(s.rivets-=t,e.hp=1,!0)}function gm(s,e){if(e.uid===s.flag||e.old)return!1;s.steel+=Math.round(Wn[e.kind].steel/3);for(let t of e.parts)t&&(s.items[t]=(s.items[t]??0)+1);return s.ships=s.ships.filter(t=>t!==e),s.sortie=s.sortie.filter(t=>t!==e.uid),!0}function XM(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function $M(s,e){let t=HM[e],n=s()*100,i=n<t[0]?0:n<t[0]+t[1]?1:n<t[0]+t[1]+t[2]?2:3,r=Object.keys(Zt).filter(a=>Zt[a].tier===i&&(Zt[a].from??0)<=e);return r.length||(r=Object.keys(Zt).filter(a=>Zt[a].tier===Math.min(i,2)&&(Zt[a].from??0)<=e)),r[Math.floor(s()*r.length)]}function bm(s,e){let t=Tr(e.stage),n=+t.id[0],i=XM(s.rng);s.rng=i()*2**32>>>0;let r=s.stages[t.id]??{stars:0,clears:0,best:0},a=e.won&&!r.clears,o={stage:t.id,won:e.won,first:a,stars:0,rivets:0,steel:0,items:[],lost:[],unlocked:[],opened:null};e.won?(o.stars=1+(e.lost.length===0?1:0)+(t.goal==="hold"?e.lostHp<.25?1:0:e.time<=t.par?1:0),o.rivets=Math.round(t.fee*(.6+.2*o.stars)+(a?t.fee*.5:0))):o.rivets=Math.round(t.fee*.1*e.sunk.length/Math.max(t.waves.flat().length,1));for(let c of e.sunk)o.steel+=OM[c.kind]??0;for(let c of e.sunk){let l=(c.boss?BM:zM[c.kind]??.1)+s.pity*.02;i()<l?(o.items.push($M(i,n)),s.pity=0):s.pity++}e.won&&t.id==="4-5"&&a&&(o.items.push("cal80"),o.ending=!0),s.rivets+=o.rivets,s.steel+=o.steel;for(let c of o.items){let l=Zt[c];l.steel?s.steel+=l.steel:l.bp?s.bps.includes(c)?s.rivets+=500:s.bps.push(c):s.items[c]=(s.items[c]??0)+1}o.insurance=0;for(let c of e.lost){let l=_n(s,c);if(l){o.lost.push({kind:l.kind,name:l.name}),s.lostN=(s.lostN??0)+1,l.lent||(o.insurance+=Math.round(Wn[l.kind].rivets*.35/10)*10),l.design&&s.copies.push(l.design);for(let h of l.parts);s.ships=s.ships.filter(h=>h!==l),s.sortie=s.sortie.filter(h=>h!==c)}}s.rivets+=o.insurance,s.copies.length>12&&s.copies.splice(0,s.copies.length-12);for(let[c,l]of Object.entries(e.hp)){let h=_n(s,+c);if(h){h.hp=Math.max(.05,Math.min(1,l)),h.sorties++;let u=Cr(h);h.xp=(h.xp??0)+1+(e.won?1:0)+(e.kills?.[c]??0),Cr(h)>u&&(o.promoted??=[]).push(h.name)}}for(let[c,l]of Object.entries(e.kills??{})){let h=_n(s,+c);h&&(h.kills+=l)}o.planesLost=0,o.planesCost=0;for(let[c,l]of Object.entries(e.planes??{})){let h=_n(s,+c);if(!h)continue;let u={f:(h.design?.air?.f??3)*5,t:(h.design?.air?.t??4)*5,b:(h.design?.air?.b??3)*5};h.planes={};for(let d of["f","t","b"]){let f=Math.max(0,u[d]-(l[d]??0)),m=Math.min(f,Math.floor(s.rivets/40));s.rivets-=m*40,o.planesLost+=f,o.planesCost+=m*40,h.planes[d]=u[d]-f+m}}for(let c of s.ships)c.building>0&&(c.building--,!c.building&&s.sortie.length<8&&s.sortie.push(c.uid));if(e.won){let c=Object.keys(Rr).filter(h=>va(s,h));r.clears++,r.stars=Math.max(r.stars,o.stars),s.stages[t.id]=r,o.unlocked=Object.keys(Rr).filter(h=>va(s,h)&&!c.includes(h));let l=cm(t.id);a&&l&&(o.opened=l,s.last=l)}if(_n(s,s.flag)||(s.flag=[...s.ships].filter(c=>!c.building).sort((c,l)=>Wn[l.kind].tons-Wn[c.kind].tons)[0]?.uid??0),!s.ships.some(c=>!c.building)){let c=Ar(s,"dd");c.lent=!0,s.flag=c.uid,Ar(s,"dd").lent=!0,o.lent=!0}return s.log.unshift({at:Date.now(),stage:t.id,won:e.won,stars:o.stars}),s.log.length=Math.min(s.log.length,30),o}function vm(s,e){let t=JSON.parse(JSON.stringify(s));for(let n of t.mounts)if(n.type==="gun"){let i=e.indexOf(n.cal);n.cal=e[Math.max(0,i-1)]??n.cal}return t}function xm(s,e){let t={speedK:1,armor:0,hpK:1,fcStart:1,fcMin:.14,flood:1,gm:0,torpK:1,oxy:s.bps.includes("oxy"),aa:1};e.old&&(t.speedK*=24/27,t.armor-=.1,t.hpK*=240/260,t.fcMin=.2,t.fcStart=1.1,t.aaStock=[4,4]);for(let i of e.parts)i==="bulkhead"?t.flood*=.6:i==="boiler"?t.speedK*=1.06:i==="rangefinder"?(t.fcStart*=.6,t.fcMin*=.7):i==="bulge"?(t.gm+=.4,t.speedK*=.96,t.torpK*=.65):i==="armour"?(t.armor+=.1,t.speedK*=.97):i==="aadir"&&(t.aa*=1.5);let n=Cr(e);return t.fcMin*=1-.06*n,t.fcStart*=1-.05*n,t.reloadK=1-.03*n,t.aa*=1+.06*n,t.level=n,t}function ym(s,e,t,n){let i=e.parts[t];return n&&!(s.items[n]>0)?!1:(i&&(s.items[i]=(s.items[i]??0)+1),n&&s.items[n]--,e.parts[t]=n,!0)}function Iu(s,e){return s.sortie.map(t=>_n(s,t)).filter(Boolean).reduce((t,n)=>t+e(n),0)}var _m=s=>Math.ceil(s*.5/10)*10;function Mm(s,e,t){let n=c=>c?`${c.type}/${c.cal}/${c.n}/${c.tier??1}`:"none",i=new Set([...s.mounts,...e.mounts].map(c=>c.slot)),r=0,a=0;for(let c of i){let l=s.mounts.find(d=>d.slot===c),h=e.mounts.find(d=>d.slot===c);if(n(l)===n(h))continue;if(!h||h.type==="none"){r+=60;continue}let u=h.type==="torp"?60:t(h.cal,h.n)*(h.tier??1);r+=150+.25*u,a+=.5*u}let o=c=>(e.aa?.[c]??0)-(s.aa?.[c]??0);r+=Math.max(o("ha"),0)*40+Math.max(o("mg"),0)*15+(Math.abs(o("ha"))+Math.abs(o("mg")))*5,a+=Math.max(o("ha"),0)*15+Math.max(o("mg"),0)*3;for(let c of["f","t","b"])r+=Math.max((e.air?.[c]??0)-(s.air?.[c]??0),0)*5*40;return{rivets:Math.round(r/10)*10,steel:Math.round(a/10)*10}}var Tm=[75,71,83,49],Du=1,qM=[58,145,14,92,210,119,24,164,107,240,35,158,65,200,5,125,179,47,134,233,18,90,204,48,151,78,251,97,8,213,170,115],jM=[156,20,231,43,88,182,15,209,131,62,106,197,39,153,244,64,29,174,98,7,187,53,143,226,76,112,22,217,161,94,44,243],Sm="kurogane/yard/rivets";function YM(){let s=new Uint8Array(32);for(let e=0;e<32;e++)s[e]=(qM[e]^jM[e*7%32]^Sm.charCodeAt(e%Sm.length)*31)&255;return s}var Am=new TextEncoder,KM=new TextDecoder;async function Rm(s,e){let t=await crypto.subtle.importKey("raw",YM(),"HKDF",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:s,info:Am.encode("KGS1 save")},t,{name:"AES-GCM",length:256},!1,[e])}async function Cm(s,e){return new Uint8Array(await new Response(new Blob([s]).stream().pipeThrough(e)).arrayBuffer())}async function Nu(s){let e=await Cm(Am.encode(JSON.stringify(s)),new CompressionStream("deflate-raw")),t=crypto.getRandomValues(new Uint8Array(16)),n=crypto.getRandomValues(new Uint8Array(12)),i=new Uint8Array([...Tm,Du]),r=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:n,additionalData:i},await Rm(t,"encrypt"),e)),a=new Uint8Array(i.length+28+r.length);return a.set(i,0),a.set(t,5),a.set(n,21),a.set(r,33),a}async function Uu(s){if(s=new Uint8Array(s),s.length<49||Tm.some((i,r)=>s[r]!==i))throw new Error("bad");let e=s[4];if(e>Du)throw new Error("future");let t;try{t=await crypto.subtle.decrypt({name:"AES-GCM",iv:s.slice(21,33),additionalData:s.slice(0,5)},await Rm(s.slice(5,21),"decrypt"),s.slice(33))}catch{throw new Error("bad")}let n=JSON.parse(KM.decode(await Cm(new Uint8Array(t),new DecompressionStream("deflate-raw"))));return ZM(n,e)}var JM={};function ZM(s,e){for(let t=e;t<Du;t++)s=JM[t](s);return s}var Em=null;function QM(){return Em??=new Promise((s,e)=>{let t=indexedDB.open("kurogane",1);t.onupgradeneeded=()=>t.result.createObjectStore("saves"),t.onsuccess=()=>s(t.result),t.onerror=()=>e(t.error)}),Em}async function Fu(s,e){let t=await QM();return new Promise((n,i)=>{let r=t.transaction("saves",s),a=e(r.objectStore("saves"));r.oncomplete=()=>n(a?.result),r.onerror=()=>i(r.error)})}async function Ma(s,e){let t=await Nu(e);return await Fu("readwrite",n=>n.put({bytes:t,at:Date.now(),info:ew(e)},s)),t}async function Dc(s){let e=await Fu("readonly",t=>t.get(s));return e?{state:await Uu(e.bytes),at:e.at,bytes:e.bytes}:null}async function Lm(s){let e=await Fu("readonly",t=>t.get(s));return e?{at:e.at,...e.info}:null}function ew(s){return{stage:s.last??"1-1",stars:Object.values(s.stages??{}).reduce((e,t)=>e+(t.stars??0),0),ships:(s.ships??[]).length}}function Pm(s){let e=new Date,t=i=>String(i).padStart(2,"0"),n=document.createElement("a");n.href=URL.createObjectURL(new Blob([s],{type:"application/octet-stream"})),n.download=`kurogane-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}.kgs`,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}function km(){return new Promise(s=>{let e=document.createElement("input");e.type="file",e.accept=".kgs",e.onchange=async()=>s(e.files[0]?new Uint8Array(await e.files[0].arrayBuffer()):null),e.click()})}var Dm={en:{yard:"KUROGANE YARD",rivets:"RIVETS",steel:"STEEL",fame:"NAME",treaty:"TREATY",tabs:{fleet:"FLEET",build:"SLIPS",store:"STORES",book:"LEDGER"},seaNames:["Inner Sea","Fog Narrows","Open Ocean","Typhoon Sea"],goals:{all:"Sink them all",escort:(s,e)=>`Bring ${e} of ${s} merchantmen through`,hold:s=>`Hold for ${Math.round(s/60)} minutes`,boss:"Sink the flagship"},stages:{"1-1":["Clearing the Lane","Grey destroyers are sitting on the ferry lane. The ferry company would like them elsewhere. Anywhere."],"1-2":["Three Freighters","Bring at least two of the three through. The third is insured."],"1-3":["Grey Scouts","A light cruiser leads them. Sink her and our slip can build one of our own."],"1-4":["Until Dawn","Hold the strait for seven minutes. The harbour master is counting."],"1-5":["The Grey Cruiser","Twice the plating of anything we have met. Her captain has read the same books as you."],"2-1":["Ambush in the Fog","Visibility five kilometres. Their guns reach further. Their eyes do not."],"2-2":["Torpedo Night","The sun goes down and the destroyers come out. Mind the bubbles."],"2-3":["Through the Narrows","Four merchantmen, three needed. The fourth carries the harbour master's piano."],"2-4":["Hold the Narrows","Eight minutes. The relief fleet is on its way, it says."],"2-5":["The Grey Battlecruiser","Fast, heavy, thin-skinned. You and her designer would get on."],"3-1":["Fleet Action","Open sea and a long swell. Top-heavy ships find out today."],"3-2":["The Chase","Two battlecruisers are running. Faster than us, on paper."],"3-3":["First Air Raid","Something is coming over the horizon. It is not a ship."],"3-4":["The Ocean Convoy","Four merchantmen across open water, under an open sky."],"3-5":["The Carrier Group","Two carriers. Hole their decks and their aircraft have nowhere to come home to."],"4-1":["Pursuit in the Storm","Three-metre seas. Every broadside rolls you. It rolls them too."],"4-2":["Your Own Designs","The Grey Fleet has studied your work. It has made it slightly worse."],"4-3":["Hold in the Typhoon","Nine minutes in a typhoon. Nobody asked for this, least of all the cook."],"4-4":["The Last Convoy","Everything the islands have left, in four hulls."],"4-5":["The Grey Whale","Three hundred metres, twelve 51 cm guns. Treaty: not applicable."]},locked:"Clear the stage before",fee:"FEE",enemy:"ENEMY",sortie:"SORTIE",sea:"SEA",seaNote:["Calm","Fog: nothing seen past 5 km","Long swell","Storm"],inSortie:"SAILS",moored:"MOORED",flag:"FLAGSHIP",makeFlag:"Make flagship",refit:"REFIT",repair:s=>`REPAIR ${s.toLocaleString("en")}`,repaired:"SOUND",scrap:"SCRAP",building:s=>`on the slip \xB7 ${s} sortie${s>1?"s":""}`,parts:"PARTS",none:"\u2014",old:"old",build:"BUILD",unlockAt:s=>`opens with ${s}`,slip:s=>`${s} sortie${s>1?"s":""} on the slip`,cost:"COST",blueprints:"BLUEPRINTS",calibres:"CALIBRES",noParts:"No parts in the stores. The sea gives them up, now and then.",save:"SAVE",load:"LOAD",empty:"empty",exportF:"WRITE SAVE FILE",importF:"READ SAVE FILE",newGame:"NEW GAME (twice)",saved:"Saved",loaded:"Loaded",badFile:"That file is not a save of this game, or it has been changed.",record:"RECENT SORTIES",full:"Eight ships already sail.",noFlag:"Choose a flagship that sails.",notReady:"She is still on the slip.",overTreaty:(s,e)=>`${s.toLocaleString("en")} t over the treaty. The inspector will be taken to lunch (${e.toLocaleString("en")} rivets).`,poor:"Not enough rivets.",built:s=>`${s} is laid down`,scrapped:s=>`${s} is broken up`,win:"VICTORY",lose:"DEFEAT",toYard:"BACK TO THE YARD",spoils:"SPOILS",nothing:"Nothing this time.",salvage:"salvage",lostShips:"LOST",opened:s=>`Stage ${s} is open`,unlockedK:s=>`The slip can now build: ${s}`,lent:"The islands lend you two old destroyers. They would like them back.",yardH:"THE YARD",slipsN:(s,e)=>`SLIPS \xB7 ${s} of ${e} in use`,slipsNote:"One hull on each slip at a time",addSlip:"ADD A SLIP",slipBuilt:"A new slip is laid. The neighbours complain.",craneN:s=>`CRANE \xB7 No. ${s}`,craneNote:(s,e)=>`Hulls up to ${s.toLocaleString("en")} t \xB7 turrets up to ${e.toLocaleString("en")} t`,upCrane:"BIGGER CRANE",craneBuilt:"The new crane is up. The old one is now a monument.",maxed:"as big as it gets",whyNot:{crane:"the crane is too small",slip:"no free slip",locked:"",money:""},perShip:"PER SHIP",crew:"CREW",killsN:s=>`${s} sunk`,promoted:s=>`${s}'s crew is getting good at this`,craneLift:(s,e)=>`That turret weighs ${Math.round(s).toLocaleString("en")} t. The crane lifts ${e.toLocaleString("en")} t. Buy a bigger crane first.`,buySteel:"STEEL FROM THE ISLAND FOUNDRIES",insurance:"INSURANCE",planes:"NEW AIRCRAFT",retreat:"RETREAT",goalHud:{all:(s,e)=>`WAVE ${s} / ${e}`,escort:(s,e)=>`MERCHANTMEN ${s} \xB7 need ${e}`,hold:s=>`HOLD ${s}`,boss:(s,e)=>`WAVE ${s} / ${e}`},why:{flag:"The flagship is lost. The rest come home with the news.",escort:"The cargo is now on the seabed. The customer is unhappy.",retreat:"A tactical withdrawal. Nobody is fooled."},wins:["Enemy squadron gone. Insurance premiums fall.","Firepower was more than adequate. For once, so was stability.","The Grey Fleet will remember this. It will also copy it.","The harbour master stopped counting."],ending:["Past the place where the Grey Whale went down, beyond the fog, there was an island.","On it, a shipyard. Grey slips, grey cranes, and nobody at all.","The drawing office was full of plans. You knew every one of them: the ships you sank, and the ships you lost.","At the bottom of the pile lay one sheet gone yellow. The signature was your predecessor's.",'In the margin, in the same hand: "Too heavy. She will probably roll over."',"The Grey Whale was a ship your predecessor drew, and threw away.","The building treaty went down with her."],endLast:"The Kurogane Yard is open as usual.",endStats:(s,e,t,n)=>`${s} sorties \xB7 ${e} ships built \xB7 ${t} lost \xB7 \u2605 ${n}`,endBtn:"BACK TO THE YARD",tips:{yard:"This is your yard. On the right, the chart: pick 1-1 and press SORTIE. On the left, your ships: REFIT changes their guns, the diamond makes one the flagship.",battle:{mouse:"Left drag to choose ships, right click on the sea to send them, right click on an enemy to fire on it. Left alone, every ship fires at the nearest enemy by itself. Lose the flagship and you lose the battle.",touch:"Tap a ship to choose it, then tap the sea to send it or an enemy to fire on it. Left alone, every ship fires at the nearest enemy by itself. Lose the flagship and you lose the battle."},dock:"Press a ring on the ship to choose what goes there. Heavy guns up high make her tender: watch GM. TEST FIRE shows how far she rolls. The yard bills you when you go back.",result:"Rivets build and repair, steel comes from what you sink. Parts go to the stores: fit them in the fleet list. A stage you have cleared can be fought again.",slips:"One hull per slip. A bigger crane builds bigger hulls and lifts heavier turrets.",carrier:"Carriers send their aircraft on their own. Right click (tap) an enemy with the carrier chosen to pick the target. Keep her well back: she cannot fight ships."},tipOk:"GOT IT",loading:"Bringing the ships round from the other harbour\u2026",loaded2:"Ready",cont:"CONTINUE",fresh:"NEW GAME",bossIn:"THE FLAGSHIP IS HERE",item:{f2:["New fighter","Blueprint \xB7 better in a dogfight (all carriers)"],t2:["New torpedo bomber","Blueprint \xB7 faster and harder to hit (all carriers)"],b2:["New dive bomber","Blueprint \xB7 hits more often (all carriers)"],steelS:["Bundle of steel","+300 steel"],steelL:["Stack of steel","+1,200 steel"],bulkhead:["Watertight bulkheads","The sea comes in 40% slower"],boiler:["High-pressure boilers","+6% speed"],rangefinder:["Long rangefinder","The first salvos fall much closer"],bulge:["Torpedo bulges","Steadier (GM +0.4 m), torpedoes do 35% less, 4% slower"],armour:["Extra plating","Hits do less; 3% slower"],aadir:["AA director","Her anti-aircraft fire hits more"],oxy:["Oxygen torpedoes","Twice the run, a heavier warhead (all ships)"],cal41:["41 cm gun","Blueprint"],cal46:["46 cm gun","Blueprint"],cal51:["51 cm gun","Blueprint"],cal61:["61 cm gun","Blueprint"],cal80:["80 cm gun","Blueprint. You know what you did."]},tier:["common","good","rare","phantom","","","","","","phantom"]},ja:{yard:"\u9ED2\u9244\u9020\u8239\u6240",rivets:"\u92F2",steel:"\u92FC\u6750",fame:"\u8A55\u5224",treaty:"\u6761\u7D04",tabs:{fleet:"\u8266\u968A",build:"\u8239\u53F0",store:"\u5009\u5EAB",book:"\u5E33\u7C3F"},seaNames:["\u5185\u6D77","\u9727\u306E\u702C\u6238","\u5916\u6D0B","\u53F0\u98A8\u306E\u6D77"],goals:{all:"\u5168\u8266\u6483\u6C88",escort:(s,e)=>`\u5546\u8239${s}\u96BB\u306E\u3046\u3061${e}\u96BB\u3092\u901A\u3059`,hold:s=>`${Math.round(s/60)}\u5206\u3057\u306E\u3050`,boss:"\u65D7\u8266\u3092\u6C88\u3081\u308B"},stages:{"1-1":["\u822A\u8DEF\u306E\u6383\u9664","\u7070\u8272\u306E\u99C6\u9010\u8266\u304C\u9023\u7D61\u8239\u306E\u822A\u8DEF\u306B\u5C45\u5EA7\u3063\u3066\u3044\u308B\u3002\u9023\u7D61\u8239\u4F1A\u793E\u306F\u3001\u3069\u3053\u304B\u5225\u306E\u5834\u6240\u306B\u884C\u3063\u3066\u307B\u3057\u3044\u305D\u3046\u3060\u3002\u3069\u3053\u3067\u3082\u3044\u3044\u3002"],"1-2":["\u4E09\u96BB\u306E\u8CA8\u7269\u8239","\u4E09\u96BB\u306E\u3046\u3061\u4E8C\u96BB\u3092\u901A\u3057\u3066\u304F\u308C\u3002\u4E09\u96BB\u76EE\u306B\u306F\u4FDD\u967A\u304C\u304B\u3051\u3066\u3042\u308B\u3002"],"1-3":["\u7070\u8272\u306E\u65A5\u5019","\u8EFD\u5DE1\u304C\u7387\u3044\u3066\u3044\u308B\u3002\u6C88\u3081\u308C\u3070\u3001\u3046\u3061\u306E\u8239\u53F0\u3067\u3082\u540C\u3058\u3082\u306E\u304C\u9020\u308C\u308B\u3002"],"1-4":["\u591C\u660E\u3051\u307E\u3067","\u4E03\u5206\u9593\u3001\u702C\u6238\u3092\u5B88\u308C\u3002\u6E2F\u9577\u304C\u6570\u3048\u3066\u3044\u308B\u3002"],"1-5":["\u7070\u8272\u306E\u91CD\u5DE1","\u3053\u308C\u307E\u3067\u306E\u500D\u306E\u88C5\u7532\u3002\u8266\u9577\u306F\u3042\u306A\u305F\u3068\u540C\u3058\u672C\u3092\u8AAD\u3093\u3067\u3044\u308B\u3002"],"2-1":["\u9727\u306E\u4E2D\u306E\u5F85\u3061\u4F0F\u305B","\u8996\u754C5\u30AD\u30ED\u3002\u5411\u3053\u3046\u306E\u7832\u306F\u3082\u3063\u3068\u5C4A\u304F\u3002\u76EE\u306F\u5C4A\u304B\u306A\u3044\u3002"],"2-2":["\u591C\u306E\u6C34\u96F7\u6226","\u65E5\u304C\u6C88\u3080\u3068\u3001\u99C6\u9010\u8266\u304C\u51FA\u3066\u304F\u308B\u3002\u6CE1\u306B\u6C17\u3092\u3064\u3051\u3066\u3002"],"2-3":["\u702C\u6238\u3092\u629C\u3051\u308D","\u5546\u8239\u56DB\u96BB\u3001\u4E09\u96BB\u306F\u8981\u308B\u3002\u56DB\u96BB\u76EE\u306F\u6E2F\u9577\u306E\u30D4\u30A2\u30CE\u3092\u904B\u3093\u3067\u3044\u308B\u3002"],"2-4":["\u702C\u6238\u3092\u3057\u306E\u3052","\u516B\u5206\u3002\u6551\u63F4\u306E\u8266\u968A\u304C\u5411\u304B\u3063\u3066\u3044\u308B\u3001\u3068\u672C\u4EBA\u305F\u3061\u306F\u8A00\u3063\u3066\u3044\u308B\u3002"],"2-5":["\u7070\u8272\u306E\u5DE1\u6D0B\u6226\u8266","\u901F\u304F\u3066\u3001\u91CD\u304F\u3066\u3001\u88C5\u7532\u304C\u8584\u3044\u3002\u8A2D\u8A08\u8005\u3068\u306F\u8A71\u304C\u5408\u3044\u305D\u3046\u3060\u3002"],"3-1":["\u8266\u968A\u6C7A\u6226","\u5916\u6D0B\u306E\u9577\u3044\u3046\u306D\u308A\u3002\u982D\u306E\u91CD\u3044\u8266\u306F\u3001\u4ECA\u65E5\u305D\u308C\u3092\u77E5\u308B\u3002"],"3-2":["\u8FFD\u6483","\u5DE1\u6D0B\u6226\u8266\u304C\u4E8C\u96BB\u3001\u9003\u3052\u3066\u3044\u308B\u3002\u66F8\u985E\u306E\u4E0A\u3067\u306F\u3001\u3053\u3061\u3089\u3088\u308A\u901F\u3044\u3002"],"3-3":["\u521D\u3081\u3066\u306E\u7A7A\u8972","\u6C34\u5E73\u7DDA\u306E\u5411\u3053\u3046\u304B\u3089\u4F55\u304B\u6765\u308B\u3002\u8239\u3067\u306F\u306A\u3044\u3002"],"3-4":["\u5916\u6D0B\u306E\u8239\u56E3","\u958B\u3051\u305F\u6D77\u3092\u3001\u958B\u3051\u305F\u7A7A\u306E\u4E0B\u3067\u3001\u5546\u8239\u56DB\u96BB\u3002"],"3-5":["\u7A7A\u6BCD\u6A5F\u52D5\u90E8\u968A","\u7A7A\u6BCD\u304C\u4E8C\u96BB\u3002\u7532\u677F\u306B\u7A74\u3092\u958B\u3051\u308C\u3070\u3001\u98DB\u884C\u6A5F\u306F\u5E30\u308B\u5834\u6240\u3092\u5931\u3046\u3002"],"4-1":["\u5D50\u306E\u4E2D\u306E\u8FFD\u6483","\u6CE2\u9AD83\u30E1\u30FC\u30C8\u30EB\u3002\u6589\u5C04\u306E\u305F\u3073\u306B\u63FA\u308C\u308B\u3002\u5411\u3053\u3046\u3082\u63FA\u308C\u308B\u3002"],"4-2":["\u5199\u3055\u308C\u305F\u8A2D\u8A08","\u7070\u8272\u8266\u968A\u306F\u3042\u306A\u305F\u306E\u4ED5\u4E8B\u3092\u7814\u7A76\u3057\u305F\u3002\u5C11\u3057\u3060\u3051\u60AA\u304F\u3057\u3066\u3042\u308B\u3002"],"4-3":["\u53F0\u98A8\u3092\u3057\u306E\u3052","\u53F0\u98A8\u306E\u4E2D\u3067\u4E5D\u5206\u3002\u8AB0\u3082\u983C\u3093\u3067\u3044\u306A\u3044\u3002\u7279\u306B\u4E3B\u8A08\u9577\u306F\u3002"],"4-4":["\u6700\u5F8C\u306E\u8239\u56E3","\u7FA4\u5CF6\u306B\u6B8B\u3063\u305F\u3082\u306E\u3059\u3079\u3066\u3092\u3001\u56DB\u96BB\u306B\u7A4D\u3093\u3067\u3002"],"4-5":["\u7070\u9BE8","\u5168\u9577300\u30E1\u30FC\u30C8\u30EB\u300151\u30BB\u30F3\u30C1\u783212\u9580\u3002\u6761\u7D04\uFF1A\u9069\u7528\u5916\u3002"]},locked:"\u524D\u306E\u30B9\u30C6\u30FC\u30B8\u3092\u30AF\u30EA\u30A2\u3059\u308B\u3068\u958B\u304F",fee:"\u5831\u916C",enemy:"\u6575",sortie:"\u51FA\u6483",sea:"\u6D77",seaNote:["\u51EA","\u9727\uFF1A5\u30AD\u30ED\u3088\u308A\u5148\u306F\u898B\u3048\u306A\u3044","\u9577\u3044\u3046\u306D\u308A","\u5D50"],inSortie:"\u51FA\u6483",moored:"\u4FC2\u7559",flag:"\u65D7\u8266",makeFlag:"\u65D7\u8266\u306B\u3059\u308B",refit:"\u6539\u88C5",repair:s=>`\u4FEE\u7406 ${s.toLocaleString("ja")}`,repaired:"\u7121\u50B7",scrap:"\u89E3\u4F53",building:s=>`\u5EFA\u9020\u4E2D\u30FB\u3042\u3068\u51FA\u6483${s}\u56DE`,parts:"\u90E8\u54C1",none:"\u2014",old:"\u65E7\u5F0F",build:"\u5EFA\u9020",unlockAt:s=>`${s} \u3092\u30AF\u30EA\u30A2\u3067\u89E3\u653E`,slip:s=>`\u51FA\u6483${s}\u56DE\u3067\u5B8C\u6210`,cost:"\u8CBB\u7528",blueprints:"\u8A2D\u8A08\u56F3",calibres:"\u4F7F\u3048\u308B\u53E3\u5F84",noParts:"\u5009\u5EAB\u306B\u90E8\u54C1\u306F\u306A\u3044\u3002\u6D77\u304C\u3068\u304D\u3069\u304D\u8FD4\u3057\u3066\u304F\u308C\u308B\u3002",save:"\u4FDD\u5B58",load:"\u8AAD\u8FBC",empty:"\u7A7A\u304D",exportF:"\u30BB\u30FC\u30D6\u3092\u66F8\u304D\u51FA\u3059",importF:"\u30BB\u30FC\u30D6\u3092\u8AAD\u307F\u8FBC\u3080",newGame:"\u306F\u3058\u3081\u304B\u3089\uFF082\u56DE\u62BC\u3059\uFF09",saved:"\u4FDD\u5B58\u3057\u307E\u3057\u305F",loaded:"\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F",badFile:"\u3053\u306E\u30B2\u30FC\u30E0\u306E\u30BB\u30FC\u30D6\u3067\u306F\u306A\u3044\u304B\u3001\u66F8\u304D\u63DB\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002",record:"\u6700\u8FD1\u306E\u51FA\u6483",full:"\u3059\u3067\u306B8\u96BB\u304C\u51FA\u6483\u306B\u5165\u3063\u3066\u3044\u308B\u3002",noFlag:"\u51FA\u6483\u3059\u308B\u8266\u304B\u3089\u65D7\u8266\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002",notReady:"\u307E\u3060\u8239\u53F0\u306E\u4E0A\u3067\u3059\u3002",overTreaty:(s,e)=>`\u6761\u7D04\u8D85\u904E ${s.toLocaleString("ja")} \u30C8\u30F3\u3002\u76E3\u67FB\u5B98\u3092\u663C\u98DF\u306B\u62DB\u5F85\u3057\u307E\u3059\uFF08${e.toLocaleString("ja")} \u92F2\uFF09\u3002`,poor:"\u92F2\u304C\u8DB3\u308A\u306A\u3044\u3002",built:s=>`${s} \u3092\u8D77\u5DE5\u3057\u307E\u3057\u305F`,scrapped:s=>`${s} \u3092\u89E3\u4F53\u3057\u307E\u3057\u305F`,win:"\u52DD\u5229",lose:"\u6557\u5317",toYard:"\u9020\u8239\u6240\u3078",spoils:"\u6226\u5229\u54C1",nothing:"\u4ECA\u56DE\u306F\u4F55\u3082\u306A\u304B\u3063\u305F\u3002",salvage:"\u5F15\u304D\u63DA\u3052",lostShips:"\u5931\u3063\u305F\u8266",opened:s=>`\u30B9\u30C6\u30FC\u30B8 ${s} \u304C\u958B\u3044\u305F`,unlockedK:s=>`\u8239\u53F0\u3067 ${s} \u304C\u9020\u308C\u308B\u3088\u3046\u306B\u306A\u3063\u305F`,lent:"\u5CF6\u304B\u3089\u53E4\u3044\u99C6\u9010\u8266\u30922\u96BB\u8CB8\u3057\u3066\u3082\u3089\u3063\u305F\u3002\u8FD4\u3057\u3066\u307B\u3057\u3044\u305D\u3046\u3060\u3002",yardH:"\u9020\u8239\u6240",slipsN:(s,e)=>`\u8239\u53F0\u30FB${e}\u57FA\u4E2D ${s}\u57FA \u4F7F\u7528\u4E2D`,slipsNote:"1\u57FA\u30671\u96BB\u305A\u3064\u9020\u308B",addSlip:"\u8239\u53F0\u3092\u5897\u3084\u3059",slipBuilt:"\u65B0\u3057\u3044\u8239\u53F0\u304C\u3067\u304D\u305F\u3002\u8FD1\u6240\u304B\u3089\u82E6\u60C5\u304C\u6765\u3066\u3044\u308B\u3002",craneN:s=>`\u30AF\u30EC\u30FC\u30F3\u30FB${s}\u53F7`,craneNote:(s,e)=>`\u8239\u4F53 ${s.toLocaleString("ja")} t \u307E\u3067\u30FB\u7832\u5854 ${e.toLocaleString("ja")} t \u307E\u3067`,upCrane:"\u5927\u304D\u3044\u30AF\u30EC\u30FC\u30F3\u306B\u3059\u308B",craneBuilt:"\u65B0\u3057\u3044\u30AF\u30EC\u30FC\u30F3\u304C\u7ACB\u3063\u305F\u3002\u53E4\u3044\u307B\u3046\u306F\u8A18\u5FF5\u7891\u306B\u306A\u3063\u305F\u3002",maxed:"\u3053\u308C\u4EE5\u4E0A\u306F\u306A\u3044",whyNot:{crane:"\u30AF\u30EC\u30FC\u30F3\u304C\u5C0F\u3055\u3044",slip:"\u7A7A\u3044\u305F\u8239\u53F0\u304C\u306A\u3044",locked:"",money:""},perShip:"1\u96BB",crew:"\u7DF4\u5EA6",killsN:s=>`\u6483\u6C88 ${s}`,promoted:s=>`${s} \u306E\u4E57\u54E1\u304C\u8155\u3092\u4E0A\u3052\u305F`,craneLift:(s,e)=>`\u305D\u306E\u7832\u5854\u306F ${Math.round(s).toLocaleString("ja")} t\u3002\u30AF\u30EC\u30FC\u30F3\u306F ${e.toLocaleString("ja")} t \u307E\u3067\u3057\u304B\u540A\u308C\u306A\u3044\u3002\u5148\u306B\u5927\u304D\u3044\u30AF\u30EC\u30FC\u30F3\u3092\u3002`,buySteel:"\u5CF6\u306E\u88FD\u9244\u6240\u304B\u3089\u92FC\u6750\u3092\u8CB7\u3046",insurance:"\u4FDD\u967A\u91D1",planes:"\u8266\u4E0A\u6A5F\u306E\u88DC\u5145",retreat:"\u64A4\u9000",goalHud:{all:(s,e)=>`\u7B2C${s}\u6CE2 / ${e}`,escort:(s,e)=>`\u5546\u8239 ${s}\u96BB \u5065\u5728\u30FB\u5FC5\u8981 ${e}`,hold:s=>`\u6B8B\u308A ${s}`,boss:(s,e)=>`\u7B2C${s}\u6CE2 / ${e}`},why:{flag:"\u65D7\u8266\u3092\u5931\u3063\u305F\u3002\u6B8B\u308A\u306E\u8266\u304C\u77E5\u3089\u305B\u3092\u6301\u3061\u5E30\u308B\u3002",escort:"\u7A4D\u307F\u8377\u306F\u6D77\u306E\u5E95\u3002\u4F9D\u983C\u4E3B\u306F\u3054\u7ACB\u8179\u3060\u3002",retreat:"\u6226\u8853\u7684\u64A4\u9000\u3002\u8AB0\u3082\u3060\u307E\u3055\u308C\u3066\u3044\u306A\u3044\u3002"},wins:["\u6575\u8266\u968A\u3001\u6D88\u6EC5\u3002\u4FDD\u967A\u6599\u304C\u4E0B\u304C\u308B\u3002","\u706B\u529B\u306F\u7533\u3057\u5206\u306A\u304B\u3063\u305F\u3002\u4ECA\u56DE\u306F\u5B89\u5B9A\u6027\u3082\u3002","\u7070\u8272\u8266\u968A\u306F\u3053\u308C\u3092\u899A\u3048\u308B\u3060\u308D\u3046\u3002\u305D\u3057\u3066\u5199\u3059\u3060\u308D\u3046\u3002","\u6E2F\u9577\u306F\u6570\u3048\u308B\u306E\u3092\u3084\u3081\u305F\u3002"],ending:["\u7070\u9BE8\u304C\u6C88\u3093\u3060\u6D77\u57DF\u306E\u5148\u3001\u9727\u306E\u5411\u3053\u3046\u306B\u3001\u5CF6\u304C\u4E00\u3064\u3042\u3063\u305F\u3002","\u7070\u8272\u306E\u8239\u53F0\u3068\u3001\u7070\u8272\u306E\u30AF\u30EC\u30FC\u30F3\u304C\u4E26\u3076\u9020\u8239\u6240\u3002\u4EBA\u306F\u4E00\u4EBA\u3082\u3044\u306A\u304B\u3063\u305F\u3002","\u8A2D\u8A08\u5BA4\u306B\u306F\u56F3\u9762\u304C\u5C71\u306E\u3088\u3046\u306B\u7A4D\u307E\u308C\u3066\u3044\u305F\u3002\u3069\u308C\u3082\u898B\u899A\u3048\u304C\u3042\u308B\u3002\u3042\u306A\u305F\u304C\u6C88\u3081\u305F\u8266\u3068\u3001\u3042\u306A\u305F\u304C\u5931\u3063\u305F\u8266\u3002","\u3044\u3061\u3070\u3093\u4E0B\u306B\u3001\u9EC4\u3070\u3093\u3060\u4E00\u679A\u304C\u3042\u3063\u305F\u3002\u7F72\u540D\u306F\u5148\u4EE3\u306E\u3082\u306E\u3060\u3063\u305F\u3002","\u4F59\u767D\u306B\u3001\u540C\u3058\u5B57\u3067\u300C\u7A4D\u307F\u3059\u304E\u3002\u305F\u3076\u3093\u8EE2\u3076\u3002\u300D\u3068\u3042\u3063\u305F\u3002","\u7070\u9BE8\u306F\u3001\u5148\u4EE3\u304C\u63CF\u3044\u3066\u3001\u6368\u3066\u305F\u8266\u3060\u3063\u305F\u3002","\u5EFA\u8266\u6761\u7D04\u306F\u3001\u7070\u9BE8\u3068\u4E00\u7DD2\u306B\u6C88\u3093\u3060\u3002"],endLast:"\u9ED2\u9244\u9020\u8239\u6240\u306F\u3001\u4ECA\u65E5\u3082\u55B6\u696D\u3057\u3066\u3044\u307E\u3059\u3002",endStats:(s,e,t,n)=>`\u51FA\u6483 ${s} \u56DE\u30FB\u5EFA\u9020 ${e} \u96BB\u30FB\u55AA\u5931 ${t} \u96BB\u30FB\u2605 ${n}`,endBtn:"\u9020\u8239\u6240\u3078",tips:{yard:"\u3053\u3053\u304C\u9020\u8239\u6240\u3002\u53F3\u306F\u6D77\u56F3\uFF1A1-1 \u3092\u9078\u3093\u3067\u300C\u51FA\u6483\u300D\u3002\u5DE6\u306F\u8266\u968A\uFF1A\u300C\u6539\u88C5\u300D\u3067\u7832\u3092\u8F09\u305B\u66FF\u3048\u3001\u25C6\u3067\u65D7\u8266\u3092\u6C7A\u3081\u308B\u3002",battle:{mouse:"\u5DE6\u30C9\u30E9\u30C3\u30B0\u3067\u8266\u3092\u9078\u3073\u3001\u6D77\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u79FB\u52D5\u3001\u6575\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u653B\u6483\u3002\u4F55\u3082\u3057\u306A\u304F\u3066\u3082\u3001\u5404\u8266\u306F\u8FD1\u3044\u6575\u3092\u81EA\u5206\u3067\u6483\u3064\u3002\u65D7\u8266\u304C\u6C88\u3080\u3068\u8CA0\u3051\u3002",touch:"\u8266\u3092\u30BF\u30C3\u30D7\u3067\u9078\u3073\u3001\u6D77\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5\u3001\u6575\u3092\u30BF\u30C3\u30D7\u3067\u653B\u6483\u3002\u4F55\u3082\u3057\u306A\u304F\u3066\u3082\u3001\u5404\u8266\u306F\u8FD1\u3044\u6575\u3092\u81EA\u5206\u3067\u6483\u3064\u3002\u65D7\u8266\u304C\u6C88\u3080\u3068\u8CA0\u3051\u3002"},dock:"\u8266\u306E\u4E0A\u306E\u4E38\u3092\u62BC\u3057\u3066\u3001\u305D\u3053\u306B\u8F09\u305B\u308B\u3082\u306E\u3092\u9078\u3076\u3002\u9AD8\u3044\u6240\u306E\u91CD\u3044\u7832\u307B\u3069\u4E0D\u5B89\u5B9A\u306B\u306A\u308B\uFF08GM \u3092\u898B\u308B\uFF09\u3002\u300C\u8A66\u3057\u6483\u3061\u300D\u3067\u3069\u308C\u3060\u3051\u50BE\u304F\u304B\u5206\u304B\u308B\u3002\u5DE5\u8CC3\u306F\u9020\u8239\u6240\u306B\u623B\u308B\u3068\u304D\u306B\u6255\u3046\u3002",result:"\u92F2\u306F\u5EFA\u9020\u3068\u4FEE\u7406\u306B\u3001\u92FC\u6750\u306F\u6C88\u3081\u305F\u6575\u304B\u3089\u3002\u90E8\u54C1\u306F\u5009\u5EAB\u3078\u5165\u308B\u306E\u3067\u3001\u8266\u968A\u306E\u753B\u9762\u3067\u4ED8\u3051\u308B\u3002\u30AF\u30EA\u30A2\u3057\u305F\u30B9\u30C6\u30FC\u30B8\u306F\u4F55\u5EA6\u3067\u3082\u6226\u3048\u308B\u3002",slips:"\u8239\u53F01\u57FA\u30671\u96BB\u305A\u3064\u3002\u30AF\u30EC\u30FC\u30F3\u304C\u5927\u304D\u3044\u307B\u3069\u5927\u304D\u306A\u8239\u4F53\u3092\u9020\u308C\u3001\u91CD\u3044\u7832\u5854\u3092\u540A\u308C\u308B\u3002",carrier:"\u7A7A\u6BCD\u306F\u81EA\u5206\u3067\u653B\u6483\u968A\u3092\u51FA\u3059\u3002\u7A7A\u6BCD\u3092\u9078\u3093\u3067\u6575\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\uFF08\u30BF\u30C3\u30D7\uFF09\u3059\u308B\u3068\u76EE\u6A19\u3092\u6C7A\u3081\u3089\u308C\u308B\u3002\u7A7A\u6BCD\u306F\u7832\u3067\u6226\u3048\u306A\u3044\u306E\u3067\u3001\u5F8C\u308D\u306B\u4E0B\u3052\u3066\u304A\u304F\u3002"},tipOk:"\u308F\u304B\u3063\u305F",loading:"\u5225\u306E\u6E2F\u304B\u3089\u8266\u3092\u56DE\u822A\u4E2D\u2026",loaded2:"\u6E96\u5099\u3088\u3057",cont:"\u7D9A\u304D\u304B\u3089",fresh:"\u306F\u3058\u3081\u304B\u3089",bossIn:"\u6575\u65D7\u8266 \u51FA\u73FE",item:{f2:["\u65B0\u578B\u6226\u95D8\u6A5F","\u8A2D\u8A08\u56F3\u30FB\u7A7A\u6226\u306B\u5F37\u3044\uFF08\u5168\u7A7A\u6BCD\uFF09"],t2:["\u65B0\u578B\u653B\u6483\u6A5F","\u8A2D\u8A08\u56F3\u30FB\u901F\u304F\u3001\u6483\u305F\u308C\u306B\u304F\u3044\uFF08\u5168\u7A7A\u6BCD\uFF09"],b2:["\u65B0\u578B\u7206\u6483\u6A5F","\u8A2D\u8A08\u56F3\u30FB\u3088\u304F\u5F53\u305F\u308B\uFF08\u5168\u7A7A\u6BCD\uFF09"],steelS:["\u92FC\u6750\u306E\u675F","\u92FC\u6750 +300"],steelL:["\u92FC\u6750\u306E\u5C71","\u92FC\u6750 +1,200"],bulkhead:["\u9632\u6C34\u533A\u753B","\u6D78\u6C34\u304C40%\u9045\u3044"],boiler:["\u9AD8\u5727\u7F36","\u901F\u529B +6%"],rangefinder:["\u65B0\u578B\u6E2C\u8DDD\u5100","\u521D\u5F3E\u304C\u305A\u3063\u3068\u8FD1\u304F\u306B\u843D\u3061\u308B"],bulge:["\u30D0\u30EB\u30B8","\u5B89\u5B9A\uFF08GM +0.4 m\uFF09\u3001\u9B5A\u96F7\u306E\u88AB\u5BB3 \u221235%\u3001\u901F\u529B \u22124%"],armour:["\u88C5\u7532\u677F","\u88AB\u5BB3\u304C\u6E1B\u308B\u3001\u901F\u529B \u22123%"],aadir:["\u5BFE\u7A7A\u5C04\u6483\u6307\u63EE\u88C5\u7F6E","\u5BFE\u7A7A\u5C04\u6483\u304C\u3088\u304F\u5F53\u305F\u308B"],oxy:["\u9178\u7D20\u9B5A\u96F7","\u5C04\u7A0B2\u500D\u3001\u5F3E\u982D\u304C\u91CD\u3044\uFF08\u5168\u8266\uFF09"],cal41:["41cm\u7832","\u8A2D\u8A08\u56F3"],cal46:["46cm\u7832","\u8A2D\u8A08\u56F3"],cal51:["51cm\u7832","\u8A2D\u8A08\u56F3"],cal61:["61cm\u7832","\u8A2D\u8A08\u56F3"],cal80:["80cm\u7832","\u8A2D\u8A08\u56F3\u3002\u81EA\u5206\u304C\u4F55\u3092\u3057\u305F\u304B\u3001\u308F\u304B\u3063\u3066\u3044\u308B\u306F\u305A\u3060\u3002"]},tier:["\u3075\u3064\u3046","\u826F\u3044","\u73CD\u3057\u3044","\u5E7B","","","","","","\u5E7B"]}},V=s=>Dm[Gn()]?.[s]??Dm.en[s];var Rt=s=>Math.round(s).toLocaleString(Gn()==="ja"?"ja":"en"),Ct=s=>String(s).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Nc=class{constructor(e){Object.assign(this,e),this.tab="fleet",this.sea=1,this.sel=null,this.open=!1;let t=this.el=document.createElement("div");t.id="yard",t.innerHTML=`
      <div class="yd-top"><b class="yd-name"></b><span class="yd-res"></span></div>
      <div class="yd-left"><div class="yd-tabs"></div><div class="yd-body"></div></div>
      <div class="yd-right"><div class="yd-seas"></div><div class="yd-stages"></div><div class="yd-brief"></div></div>
      <div class="yd-msg"></div>`,this.root.appendChild(t);let n=r=>t.querySelector(r);this.$={name:n(".yd-name"),res:n(".yd-res"),tabs:n(".yd-tabs"),body:n(".yd-body"),seas:n(".yd-seas"),stages:n(".yd-stages"),brief:n(".yd-brief"),msg:n(".yd-msg")},t.addEventListener("pointerdown",r=>{r.target.closest("button,select,.yd-card")&&r.stopPropagation()});let i=this.resEl=document.createElement("div");i.id="result",this.root.appendChild(i)}get s(){return this.state}tip(e){let t=this.s;if(t.tips??={},t.tips[e])return;t.tips[e]=1;let n=V("tips")[e];if(n&&typeof n=="object"&&(n=n[this.touch?"touch":"mouse"]),!n)return;let i=this.tipEl??=Object.assign(document.createElement("div"),{id:"tip"});this.root.appendChild(i),i.innerHTML=`<p>${Ct(n)}</p><button type="button">${V("tipOk")}</button>`,i.classList.add("on"),i.querySelector("button").onclick=r=>{r.stopPropagation(),i.classList.remove("on")},i.addEventListener("pointerdown",r=>r.stopPropagation())}show(){this.open=!0,this.el.classList.add("on"),setTimeout(()=>this.tip("yard"),600),this.sea=+(this.s.last??"1-1")[0],this.sel??=this.s.last??"1-1",this.render()}hide(){this.open=!1,this.el.classList.remove("on")}flash(e,t=3.2){this.$.msg.textContent=e,this.$.msg.classList.add("on"),clearTimeout(this._mt),this._mt=setTimeout(()=>this.$.msg.classList.remove("on"),t*1e3)}changed(e=!0){this.onChange?.(e),this.render()}render(){if(!this.open)return;let e=this.s;this.$.name.textContent=V("yard");let t=Iu(e,this.dispOf),n=Au(e);this.$.res.innerHTML=`<span><i>${V("rivets")}</i><b>${Rt(e.rivets)}</b></span><span><i>${V("steel")}</i><b>${Rt(e.steel)}</b></span>
      <span><i>${V("fame")}</i><b>\u2605 ${ya(e)}</b></span><span class="${t>n?"over":""}"><i>${V("treaty")}</i><b>${Rt(t)}</b> / ${Rt(n)} t</span><span><i>${V("perShip")}</i><b>${Number.isFinite(kc(e))?Rt(kc(e)):"\u221E"}</b> t</span>`;let i=V("tabs");this.$.tabs.innerHTML=Object.keys(i).map(r=>`<button type="button" data-tab="${r}" class="${r===this.tab?"on":""}">${i[r]}</button>`).join("");for(let r of this.$.tabs.children)r.onclick=()=>{this.tab=r.dataset.tab,this.render(),this.tab==="build"&&this.tip("slips")};this[`tab_${this.tab}`](),this.chart()}tab_fleet(){let e=this.s,t=Gn()==="ja",n=r=>{let a=Object.keys(Zt).filter(o=>Zt[o].part&&(e.items[o]>0||o===r));return`<option value="">${V("none")}</option>`+a.map(o=>`<option value="${o}" ${o===r?"selected":""}>${Ct(V("item")[o][0])}${o!==r?` \xD7${e.items[o]}`:""}</option>`).join("")},i=e.ships.map(r=>{let a=e.sortie.includes(r.uid),o=e.flag===r.uid,c=ku(r),l=vi(r.name,t);return r.building?`<div class="yd-ship building"><div class="nm"><b>${Ct(l)}</b><em>${_e("kinds")[r.kind]}</em></div><div class="st">${V("building")(r.building)}</div></div>`:`<div class="yd-ship ${a?"in":""}" data-uid="${r.uid}">
        <button type="button" class="tg ${a?"on":""}" data-a="toggle">${a?V("inSortie"):V("moored")}</button>
        <button type="button" class="fl ${o?"on":""}" data-a="flag" title="${V("makeFlag")}">\u25C6</button>
        <div class="nm"><b>${Ct(l)}</b><em>${_e("kinds")[r.kind]}${r.old?` \xB7 ${V("old")}`:""} \xB7 ${Ct(this.armOf(r))}</em><em class="crew">${V("crew")} ${"\u2605".repeat(Cr(r))}${"\u2606".repeat(4-Cr(r))}${r.kills?` \xB7 ${V("killsN")(r.kills)}`:""}</em><i class="hp"><u style="width:${r.hp*100}%"></u></i></div>
        <div class="pt"><select data-a="p0">${n(r.parts[0])}</select><select data-a="p1">${n(r.parts[1])}</select></div>
        <div class="bt"><button type="button" data-a="refit">${V("refit")}</button>${c>0?`<button type="button" data-a="repair">${V("repair")(c)}</button>`:""}${!o&&!r.old?`<button type="button" class="dim" data-a="scrap">${V("scrap")}</button>`:""}</div>
      </div>`}).join("");this.$.body.innerHTML=`<div class="yd-list">${i}</div>`;for(let r of this.$.body.querySelectorAll(".yd-ship[data-uid]")){let a=_n(e,+r.dataset.uid);for(let o of r.querySelectorAll("[data-a]")){let c=o.dataset.a;if(o.tagName==="SELECT"){o.onchange=()=>{ym(e,a,c==="p0"?0:1,o.value||null),this.changed(!0)};continue}o.onclick=()=>{if(c==="toggle")if(e.sortie.includes(a.uid)){if(e.flag===a.uid)return this.flash(V("noFlag"));e.sortie=e.sortie.filter(l=>l!==a.uid)}else{if(e.sortie.length>=8)return this.flash(V("full"));e.sortie.push(a.uid)}else if(c==="flag"){if(!e.sortie.includes(a.uid)){if(e.sortie.length>=8)return this.flash(V("full"));e.sortie.push(a.uid)}e.flag=a.uid}else if(c==="refit"){if(!e.sortie.includes(a.uid)){if(e.sortie.length>=8)return this.flash(V("full"));e.sortie.push(a.uid),this.changed(!0)}return this.onRefit(a.uid)}else if(c==="repair"){if(!mm(e,a))return this.flash(V("poor"))}else if(c==="scrap")if(o.dataset.armed){let l=vi(a.name,Gn()==="ja");gm(e,a),this.flash(V("scrapped")(l))}else{o.dataset.armed=1,o.textContent="?";return}this.changed(c!=="repair")}}}}tab_build(){let e=this.s,t=V("whyNot"),n=hm.map(d=>{let f=Wn[d],m=va(e,d),b=Pu(e,d);return`<div class="yd-build ${m?"":"locked"}"><div class="nm"><b>${_e("kinds")[d]}</b><em>${Rt(f.tons)} t \xB7 ${V("slip")(f.slip)}</em></div>
        <div class="cost">${Rt(f.rivets)} <i>${V("rivets")}</i> \xB7 ${Rt(f.steel)} <i>${V("steel")}</i></div>
        ${m?b&&b!=="money"?`<span class="lk">${t[b]}</span>`:`<button type="button" data-k="${d}" ${b?"disabled":""}>${V("build")}</button>`:`<span class="lk">${V("unlockAt")(Rr[d])}</span>`}</div>`}).join(""),i=As(e),r=Ru[i],a=e.crane??0,o=Lr[a+1],c=`<div class="yd-h">${V("yardH")}</div>
      <div class="yd-build"><div class="nm"><b>${V("slipsN")(Lu(e),i)}</b><em>${V("slipsNote")}</em></div>${r?`<div class="cost">${Rt(r.rivets)} <i>${V("rivets")}</i> \xB7 ${Rt(r.steel)} <i>${V("steel")}</i></div><button type="button" class="buy-slip" ${e.rivets>=r.rivets&&e.steel>=r.steel?"":"disabled"}>${V("addSlip")}</button>`:`<span class="lk">${V("maxed")}</span>`}</div>
      <div class="yd-build"><div class="nm"><b>${V("craneN")(a+1)}</b><em>${V("craneNote")(Lr[a].tons,Lr[a].turret)}</em></div>${o?`<div class="cost">${Rt(o.rivets)} <i>${V("rivets")}</i> \xB7 ${Rt(o.steel)} <i>${V("steel")}</i></div><button type="button" class="buy-crane" ${e.rivets>=o.rivets&&e.steel>=o.steel?"":"disabled"}>${V("upCrane")}</button>`:`<span class="lk">${V("maxed")}</span>`}</div>`,l=Gn()==="ja",h=e.ships.filter(d=>d.building).map(d=>`<div class="yd-slip">${Ct(vi(d.name,l))} <em>${_e("kinds")[d.kind]} \xB7 ${V("building")(d.building)}</em></div>`).join(""),u=[500,2e3].map(d=>`<button type="button" data-buy="${d}" ${e.rivets>=d*Ic?"":"disabled"}>+${Rt(d)} <i>${V("steel")}</i> \xB7 ${Rt(d*Ic)} <i>${V("rivets")}</i></button>`).join("");this.$.body.innerHTML=`<div class="yd-list">${n}${h?`<div class="yd-sub">${h}</div>`:""}${c}<div class="yd-h">${V("buySteel")}</div><div class="yd-files">${u}</div></div>`,this.$.body.querySelector(".buy-slip")?.addEventListener("click",()=>{um(e)&&(this.flash(V("slipBuilt")),this.changed(!1))}),this.$.body.querySelector(".buy-crane")?.addEventListener("click",()=>{dm(e)&&(this.flash(V("craneBuilt")),this.changed(!1))});for(let d of this.$.body.querySelectorAll("button[data-buy]"))d.onclick=()=>{pm(e,+d.dataset.buy)?this.changed(!1):this.flash(V("poor"))};for(let d of this.$.body.querySelectorAll("button[data-k]"))d.onclick=()=>{let f=fm(e,d.dataset.k);if(!f)return this.flash(V("poor"));this.flash(V("built")(vi(f.name,l))),this.changed(!1)}}tab_store(){let e=this.s,t=V("item"),n=Object.keys(Zt).filter(r=>Zt[r].part&&e.items[r]>0).map(r=>`<div class="yd-item t${Zt[r].tier}"><b>${Ct(t[r][0])} \xD7${e.items[r]}</b><em>${Ct(t[r][1])}</em></div>`).join(""),i=e.bps.map(r=>`<div class="yd-item t${Zt[r].tier}"><b>${Ct(t[r][0])}</b><em>${Ct(t[r][1])}</em></div>`).join("");this.$.body.innerHTML=`<div class="yd-list"><div class="yd-h">${V("parts")}</div>${n||`<p class="yd-note">${V("noParts")}</p>`}
      <div class="yd-h">${V("blueprints")}</div>${i||`<p class="yd-note">${V("none")}</p>`}
      <div class="yd-h">${V("calibres")}</div><p class="yd-cals">${_a(e).map(r=>`${r}`).join(" \xB7 ")} cm</p></div>`}async tab_book(){let e=this.s,t=["m1","m2","m3"],n=await Promise.all(t.map(l=>Lm(l).catch(()=>null)));if(this.tab!=="book")return;let i=l=>new Date(l).toLocaleString(Gn()==="ja"?"ja":"en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),r=t.map((l,h)=>{let u=n[h];return`<div class="yd-save"><b>${h+1}</b><span>${u?`${i(u.at)} \xB7 ${u.stage} \xB7 \u2605${u.stars} \xB7 ${u.ships}`:V("empty")}</span>
      <button type="button" data-save="${l}">${V("save")}</button><button type="button" data-load="${l}" ${u?"":"disabled"}>${V("load")}</button></div>`}).join(""),a=e.log.slice(0,8).map(l=>`<div class="yd-log">${l.stage} ${V("stages")[l.stage][0]} \xB7 ${l.won?"\u2605".repeat(l.stars):V("lose")}</div>`).join("");this.$.body.innerHTML=`<div class="yd-list">${r}
      <div class="yd-files"><button type="button" class="ex">${V("exportF")}</button><button type="button" class="im">${V("importF")}</button></div>
      <div class="yd-h">${V("record")}</div>${a||`<p class="yd-note">${V("none")}</p>`}
      <div class="yd-files"><button type="button" class="dim nw">${V("newGame")}</button></div></div>`;let o=this.$.body;for(let l of o.querySelectorAll("[data-save]"))l.onclick=async()=>{await Ma(l.dataset.save,e),this.flash(V("saved")),this.render()};for(let l of o.querySelectorAll("[data-load]"))l.onclick=async()=>{try{let h=await Dc(l.dataset.load);this.onReplace(h.state),this.flash(V("loaded"))}catch{this.flash(V("badFile"))}};o.querySelector(".ex").onclick=async()=>Pm(await Nu(e)),o.querySelector(".im").onclick=async()=>{let l=await km();if(l)try{this.onReplace(await Uu(l)),this.flash(V("loaded"))}catch{this.flash(V("badFile"),5)}};let c=o.querySelector(".nw");c.onclick=()=>{c.dataset.armed?this.onReplace(xa()):(c.dataset.armed=1,c.textContent+=" ?")}}chart(){let e=this.s,t=V("seaNames");this.$.seas.innerHTML=t.map((l,h)=>`<button type="button" class="${this.sea===h+1?"on":""} ${Pc(e,`${h+1}-1`)?"":"dead"}" data-sea="${h+1}">${h+1} \xB7 ${l}</button>`).join("");for(let l of this.$.seas.children)l.onclick=()=>{this.sea=+l.dataset.sea,this.render()};let n=as.filter(l=>+l.id[0]===this.sea),i=V("goals"),r=V("stages");this.$.stages.innerHTML=n.map(l=>{let h=Pc(e,l.id),u=e.stages[l.id],d=u?.stars??0,f=l.goal==="escort"?i.escort(...l.escort):l.goal==="hold"?i.hold(l.time):i[l.goal];return`<div class="yd-card ${h?"":"locked"} ${this.sel===l.id?"on":""} ${l.goal==="boss"?"boss":""}" data-id="${l.id}">
        <span class="id">${l.id}</span><b>${h?r[l.id][0]:"\xB7 \xB7 \xB7"}</b><em>${h?f:V("locked")}</em><span class="stars">${h?"\u2605".repeat(d)+"\u2606".repeat(3-d):""}</span></div>`}).join("");for(let l of this.$.stages.children)l.onclick=()=>{l.classList.contains("locked")||(this.sel=l.dataset.id,this.render())};let a=Tr(this.sel);if(!a||+a.id[0]!==this.sea||!Pc(e,a.id)){this.$.brief.innerHTML="";return}let o={};for(let l of a.waves.flat()){let h=l==="copy"?"copy":l.replace("!","");o[h]=(o[h]??0)+1}let c=Object.entries(o).map(([l,h])=>`${l==="copy"?Gn()==="ja"?"\u5199\u3057":"copies":_e("kinds")[l]} \xD7${h}`).join(" \xB7 ");this.$.brief.innerHTML=`<p class="txt">${Ct(r[a.id][1])}</p>
      <div class="kv"><span><i>${V("enemy")}</i>${c}</span><span><i>${V("sea")}</i>${V("seaNote")[this.sea-1]}</span><span><i>${V("fee")}</i>${Rt(a.fee)} ${V("rivets")}</span></div>
      <button type="button" class="go">${V("sortie")}</button>`,this.$.brief.querySelector(".go").onclick=()=>this.trySortie(a.id)}trySortie(e){let t=this.s,n=t.sortie.map(c=>_n(t,c)).filter(c=>c&&!c.building);if(!n.length||!n.some(c=>c.uid===t.flag))return this.flash(V("noFlag"));let i=kc(t),r=n.reduce((c,l)=>c+Math.max(0,this.dispOf(l)-i),0),a=Math.max(0,Iu(t,this.dispOf)-Au(t))+r,o=0;if(a>0){if(o=_m(a),t.rivets<o)return this.flash(V("poor"));this.flash(V("overTreaty")(a,o),4)}this.onSortie(e,o)}results(e,t){let n=Gn()==="ja",i=V("item"),r=e.won?V("wins")[Math.floor(Math.random()*V("wins").length)]:V("why")[e.why]??V("why").flag,a=e.items.length?e.items.map(c=>`<div class="yd-item t${Zt[c].tier}"><b>${Ct(i[c][0])}</b><em>${V("tier")[Zt[c].tier]} \xB7 ${Ct(i[c][1])}</em></div>`).join(""):`<p class="yd-note">${V("nothing")}</p>`,o=[];e.opened&&o.push(V("opened")(e.opened));for(let c of e.unlocked)o.push(V("unlockedK")(_e("kinds")[c]));e.lent&&o.push(V("lent"));for(let c of e.promoted??[])o.push(V("promoted")(vi(c,n)));this.resEl.innerHTML=`<div class="rs-box">
      <b class="rs-head ${e.won?"won":"lost"}">${e.won?V("win"):V("lose")}</b>
      <div class="rs-stage">${e.stage} \xB7 ${Ct(V("stages")[e.stage][0])}${e.won?` <span class="stars">${"\u2605".repeat(e.stars)}${"\u2606".repeat(3-e.stars)}</span>`:""}</div>
      <p class="rs-why">${Ct(r)}</p>
      <div class="kv"><span><i>${V("rivets")}</i>+${Rt(e.rivets)}</span><span><i>${V("steel")} (${V("salvage")})</i>+${Rt(e.steel)}</span>${e.fine?`<span><i>${V("treaty")}</i>\u2212${Rt(e.fine)}</span>`:""}${e.insurance?`<span><i>${V("insurance")}</i>+${Rt(e.insurance)}</span>`:""}${e.planesCost?`<span><i>${V("planes")}</i>\u2212${Rt(e.planesCost)}</span>`:""}</div>
      <div class="yd-h">${V("spoils")}</div><div class="rs-items">${a}</div>
      ${e.lost.length?`<div class="yd-h">${V("lostShips")}</div><p class="rs-lost">${e.lost.map(c=>`${Ct(vi(c.name,n))} <em>${_e("kinds")[c.kind]}</em>`).join("\u3000")}</p>`:""}
      ${o.map(c=>`<p class="rs-note">${Ct(c)}</p>`).join("")}
      <button type="button" class="go">${V("toYard")}</button></div>`,this.resEl.classList.add("on"),this.tip("result"),this.resEl.querySelector(".go").onclick=()=>{this.resEl.classList.remove("on"),e.ending&&this.onEnding?this.onEnding(t):t()}}ending(e){let t=this.s,n=V("ending"),i=this.endEl??=Object.assign(document.createElement("div"),{id:"ending"});this.root.appendChild(i),i.innerHTML=`<div class="en-box">${n.map(a=>`<p>${Ct(a)}</p>`).join("")}<p class="last">${Ct(V("endLast"))}</p>
      <div class="en-title"><b>KUROGANE</b><i>${Ct(V("endStats")(t.log.length,t.built??0,t.lostN??0,ya(t)))}</i></div>
      <button type="button" class="go">${V("endBtn")}</button></div>`,i.classList.add("on"),[...i.querySelectorAll("p"),i.querySelector(".en-title"),i.querySelector(".go")].forEach((a,o)=>{a.style.transitionDelay=`${1.2+o*3.2}s`}),requestAnimationFrame(()=>requestAnimationFrame(()=>i.classList.add("show"))),i.querySelector(".go").onclick=()=>{i.classList.remove("on","show"),e()}}};var jt=new URLSearchParams(location.search),Qt=jt.has("render"),Ua=jt.has("manual"),un=!Qt&&!Ua&&!jt.has("skirmish");if(Qt||Ua||jt.has("seed")){let s=parseInt(jt.get("seed")??"20261004",10)>>>0;Math.random=()=>{s=s+1831565813>>>0;let e=s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ls=1600,Ps=900,Cs=Qt?2:Math.min(devicePixelRatio||1,1.5),Tt=1/60,Rs=parseFloat(jt.get("ts")??"2"),Kc=document.getElementById("c"),$t=new Jr({canvas:Kc,antialias:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!1});$t.setPixelRatio(Cs);$t.setSize(Ls,Ps,!1);$t.toneMapping=ui;$t.localClippingEnabled=!0;var ks=new Ln,ai=new dt;ks.add(ai);var Ot=new It(38,Ls/Ps,2,6e4),Jc=34.2,Zc=280,Wm=Qt&&jt.has("air"),Xn=parseFloat(jt.get("t")??(Wm?"12.9":Qt?"16.2":"15.6")),Pt=aa(Jc,Zc,Xn),wa=new ye,$n=dp(Pt,new M);$n.uHazeB.value=parseFloat(jt.get("haze")??(Qt?"3.5e-5":"5.5e-5"));var Fa={uTime:{value:0}},Vu=fp($n);ai.add(Vu);var Ra=new pr(16777215,1);ks.add(Ra,Ra.target);var kr=new Bo(16777215,16777215,1);ks.add(kr);var Bc={dim:1};function Qc(){let s=Math.asin(Pt.y),e=1/Math.max(Math.sin(Math.max(s,.01))+.15*Math.pow(Math.max(s,0)*57.3+3.885,-1.253),.02),t=[Math.exp(-.035*e),Math.exp(-.075*e),Math.exp(-.16*e)],i=7*he.smoothstep(s,-.06,.05)*Bc.dim;wa.setRGB(t[0]*i,t[1]*i,t[2]*i),$n.uSunCol.value.set(wa.r,wa.g,wa.b),Ra.color.copy(wa),Ra.intensity=1,Ra.position.copy(Pt).multiplyScalar(100);let r=he.clamp(1-(s-.02)/.3,0,1);$n.uDusk.value=r*r,$n.uNight.value=he.clamp((-s-.02)/.12,0,1);let a=he.clamp(.15+Pt.y*1.6,.02,1)*(1-$n.uNight.value*.9);kr.color.setRGB(.62*a,.68*a,.78*a),kr.groundColor.setRGB(.1*a,.12*a,.12*a),kr.intensity=2.2*(.55+.45*Bc.dim)}Qc();var os=new Qo({speed:parseFloat(jt.get("wind")??"7"),dir:parseFloat(jt.get("wdir")??"2.4")}),Ia=Ih({wind:os.speed,windDir:os.dir,swellDir:1.35,swellH:.6}),Xu=gp(Ia),Hc=new ac($t,Ls*Cs,Ps*Cs,{samples:xr?0:4,levels:6}),Ca=new Gt(Math.round(Ls*Cs*.5),Math.round(Ps*Cs*.5),{type:ti,depthBuffer:!0,generateMipmaps:!0,minFilter:fi}),yi=new sc($t,Pt,{shipSize:900,shipRes:xr?2048:4096}),el=(s,e)=>pp(Mp(s,yi),$n,e),Vc=null;if(un)try{Vc=(await Dc("auto"))?.state??null}catch(s){console.warn("save unreadable",s)}var Xm=un?[...new Set(["bb","ca","dd",...(Vc?.ships??[]).filter(s=>Vc.sortie.includes(s.uid)).map(s=>s.kind)])]:Es,Nm=document.getElementById("loadbar"),Um=0,tw=Xm.length+(un?1:0),$m=()=>{Um++,Nm&&Nm.style.setProperty("--p",`${Math.min(Um/tw,1)*100}%`)},dn=await kp("data/",{aniso:$t.capabilities.getMaxAnisotropy(),patch:el,U:Fa,seaU:Xu,first:Xm,onProgress:$m}),Da=new dc(dn);ai.add(Da.group);for(let s of Da.casters())yi.addCaster(s,{ship:!0});dn.onLoad=s=>{for(let e of Da.addKind(s))yi.addCaster(e,{ship:!0})};yi.renderLand(new M);var Yn=new pc($n,os);ks.add(Yn.lightGroup);var _i=new fc(Yn,Ia),Oi=new bc(Yn),Me=new _c({art:dn,sea:Ia,artillery:_i,fx:Yn,torpedoes:Oi}),xn=new yc({battle:Me,fx:Yn,torps:Oi,patch:el});Me.air=xn;ai.add(xn.group);var $u=new Cc(el);ai.add($u.group);window.__bossMarks=$u;var Na=new Lc(el);un&&(await Na.load("data/",$t.capabilities.getMaxAnisotropy()),$m(),ai.add(Na.group));(Qt||Ua)&&(await xn.load("data/",$t.capabilities.getMaxAnisotropy()),xn.loaded=!0);for(let s of xn.meshes())yi.addCaster(s,{ship:!0});var Ze=Me.ships,Dn=parseFloat(jt.get("hd")??(Wm?String(Math.atan2(Pt.x,Pt.z)+2.5):Qt?String(Math.atan2(Pt.x,Pt.z)):"3.1")),Gc=(s,e)=>[Math.cos(Dn)*s+Math.sin(Dn)*e,-Math.sin(Dn)*s+Math.cos(Dn)*e],nw=[["bb",0,0,!0],["bc",0,-520],["ca",-460,-260],["ca",460,-260],["cl",0,620],["dd",-680,880],["dd",0,1080],["dd",680,880]];if(!un)for(let[s,e,t,n]of nw){let[i,r]=Gc(e,t),a=Me.add(s,"A",i,r,Dn,6,{flagship:!!n});n||(a.station=[e,t])}var Fi=Me.flagship()??{body:{pos:new M,speed:0},alive:!0};jt.has("nowaves")&&(Me.waves=!1);var iw={bb:0,ca:1,dd:2,cl:3,bc:4,tr:5,cv:6,wh:7,sp:8},qu=new nc($t,Es.map(s=>dn.kinds[s].meta.stations)),Oa=new Ln,Wc=yp({skyU:$n,seaU:Xu,wakeU:qu.uniforms,windU:os.uniforms,tideU:{uTide:{value:0},uStrait:{value:new We(0,0,0,1)}},reflTarget:Ca,refrTarget:Hc.refr,shipShadowU:yi.uniforms,timeU:Fa.uTime,quality:{oceanRings:+(jt.get("orings")??(xr?150:240)),oceanSeg:+(jt.get("oseg")??(xr?256:420))}});Oa.add(Wc.mesh);Oa.add(Yn.group);Oa.add(_i.mesh);Oa.add(Oi.mesh);ai.add(_i.one);_i.mesh.visible=!Qt;var sw=new lr($t),ju=new Ln,qm=new Be(Vu.geometry,Vu.material);qm.scale.setScalar(.005);ju.add(qm);ju.add(new Be(new ur(40,24).rotateX(-Math.PI/2).translate(0,-.5,0),new Wt({color:new ye(.02,.04,.045)})));var Ou=null;function tl(){Ou?.dispose(),Ou=sw.fromScene(ju,.02),ks.environment=Ou.texture}tl();var it=new Mc(Ot,Kc);it.target.copy(Fi.body.pos);it.follow=Fi;var Lt=new Ec;for(let s of["pointerdown","keydown"])addEventListener(s,()=>Lt.start(),{once:!0});var en=new wc({battle:Me,camera:Ot,rcam:it,el:Kc,overlay:document.getElementById("ov"),W:Ls,H:Ps,sound:Lt});en.select(Ze.filter(s=>s.side==="A"));ba();document.getElementById("lang")?.addEventListener("click",s=>{tm(),s.currentTarget.blur(),nl()});var qt=s=>document.getElementById(s),zc=0;function Sa(s,e=4){qt("msg").textContent=s,qt("msg").classList.add("on"),zc=e}var Gu=[];function nl(){let s=qt("fleet");s.innerHTML="",Gu.length=0;for(let e of Ze.filter(t=>t.player)){let t=document.createElement("button");t.type="button",t.innerHTML=`${e.label??_e("short")[e.kind]}${e.flagship?" \u25C6":""}<em>${_e("kinds")[e.kind]}</em><i></i>`,t.addEventListener("click",n=>{e.alive&&en.select([e],n.shiftKey),t.blur()}),t.addEventListener("dblclick",()=>{it.follow=e}),s.appendChild(t),Gu.push([e,t])}}nl();var oi=Qt||jt.has("skip"),In=qt("title");oi?(In.style.transition="none",In.classList.add("gone")):it.set(un?{yaw:Dn+.6,pitch:.09,dist:1200}:{yaw:Math.atan2(Pt.x,Pt.z)+.5,pitch:.1,dist:1100});var Ea=In.querySelector(".go");Ea.disabled=un;function jm(){oi=!0,In.classList.add("gone"),it.follow=Me.flagship(),it.target.copy(Me.flagship().body.pos),it.set({yaw:Math.atan2(Pt.x,Pt.z)+.3,pitch:.62,dist:1500}),Lt.start(),en.enabled=!0,en.select(Ze.filter(s=>s.player&&s.alive)),nl()}var qn=new Rc({battle:Me,art:dn,camera:Ot,rcam:it,root:document.getElementById("stage"),canvas:Kc,W:Ls,H:Ps,sound:Lt,onSortie:()=>un?Pr(!1):jm(),store:un?{get:s=>_n(Ye,s.uid)?.design,put:(s,e)=>{let t=_n(Ye,s.uid);t&&(t.design=e,t.planes=null)}}:null,cals:un?()=>_a(Ye):null,billFor:(s,e)=>Mm(s,e,Er),check:un?(s,e)=>{let t=qn.entry?.get(s.uid),n=r=>`${r.type}/${r.cal}/${r.n}/${r.tier??1}`,i=Cu(Ye).turret;for(let r of e.mounts){if(r.type!=="gun")continue;let a=t?.mounts.find(c=>c.slot===r.slot);if(a&&n(a)===n(r))continue;let o=Er(r.cal,r.n);if(o>i)return V("craneLift")(o,i)}return""}:null,pay:un?s=>Ye.rivets<s.rivets||Ye.steel<s.steel?!1:(Ye.rivets-=s.rivets,Ye.steel-=s.steel,La(),!0):null});!Qt&&!un&&qn.applyAll();ba();window.__dock=qn;var Ye=null,hn=null,il=!1,Ym=0,Ta=0,Yu=()=>Gn()==="ja",rw=s=>{let e=dn.kinds[s.kind]?.meta;if(!e)return Wn[s.kind].tons;let t=ii(Vn(s.kind,e),dn),n=s.design?ii(s.design,dn):t;return Wn[s.kind==="sp"?"sp":s.kind].tons*n.disp/t.disp};function aw(s){let e=dn.kinds[s.kind]?.meta;if(!e)return"";let t=s.design??Vn(s.kind,e),n={},i=0;if(s.kind==="cv"){let r={f:3,t:4,b:3,...t.air??{}},a=_e("planeShort");return`${a.f}${r.f} \xB7 ${a.t}${r.t} \xB7 ${a.b}${r.b}`}for(let r of t.mounts)r.type==="torp"?i++:r.type==="gun"&&(n[r.cal]=(n[r.cal]??0)+r.n*(r.tier??1));return Object.keys(n).sort((r,a)=>a-r).map(r=>`${r}cm\xD7${n[r]}`).concat(i?[`T\xD7${i}`]:[]).join(" \xB7 ")}var Km=s=>s.kind==="wh"?_e("kinds").wh:`${Yu()?"\u7070\u8272\u306E":"GREY "}${_e("kinds")[s.kind]} ${s.mark??""}`;en.bossName=Km;var Fm=null;function La(){clearTimeout(Fm),Fm=setTimeout(()=>Ma("auto",Ye).catch(s=>console.warn("save",s)),300)}var zu={big:[[0,-520],[0,-1040],[0,-1560],[0,520]],mid:[[-460,-260],[460,-260],[-460,260],[460,260],[0,620],[-900,-260],[900,-260]],dd:[[-680,880],[680,880],[0,1080],[-1100,600],[1100,600],[-1100,0],[1100,0],[0,-1900]]},ow={bb:"big",bc:"big",cv:"big",sp:"big",ca:"mid",cl:"mid",dd:"dd"};function Pa(s){Me.reset();let e=!s,t=0,n=Ye.sortie.map(r=>_n(Ye,r)).filter(r=>r&&!r.building);n.sort((r,a)=>(a.uid===Ye.flag)-(r.uid===Ye.flag));let i={big:zu.big.slice(),mid:zu.mid.slice(),dd:zu.dd.slice()};for(let r of n){let a=r.uid===Ye.flag,o=a?[0,0]:i[ow[r.kind]].shift()??i.mid.shift()??i.dd.shift()??[0,-2400],c=dn.kinds[r.kind].meta.B,l=dn.kinds[r.kind].meta.L/2,[h,u]=e?Gc(t+c/2,l):Gc(...o);e&&(t+=c+34);let d=Me.add(r.kind,"A",h,u,Dn,s,{flagship:a,design:r.design,mods:xm(Ye,r),hpFrac:r.hp,uid:r.uid,name:r.name,planes:r.planes??null});d.label=vi(r.name,Yu()),a||(d.station=o),s||(d.body.ctl.tele=1)}Fi=Me.flagship()??Fi}function Xc(s,e){os.set(s.wind,os.dir);let t=Ih({wind:s.wind,windDir:os.dir,swellDir:1.35,swellH:s.swell});Object.assign(Ia,t),bp(Xu,Ia),$n.uHazeB.value=s.haze,$n.uCover.value=s.cover??.28,Bc.dim=s.dim??1,Xn=e,aa(Jc,Zc,Xn,Pt),Qc(),tl(),jc=Xn}var Wu={wind:5,swell:.5,haze:55e-6};function Pr(s=!0){il=!1,oi=!1,en.enabled=!1,en.select([]),qt("hud").classList.remove("campaign"),s&&(Xc(Wu,15.6),Pa(0)),$c(!0),qn.open&&qn.close(),it.follow=null;let e=new M;for(let n of Ze)e.add(n.body.pos);Ze.length&&e.divideScalar(Ze.length);let t=Ze.length?Ze.reduce((n,i)=>n+i.meta.B+34,0):100;it.target.copy(e),it.set({yaw:Dn+.75,pitch:.17,dist:330+t*1.1+180}),hn.show()}function $c(s){Na.show(s,Dn,new M(0,0,0)),Ye&&Na.setYard({slips:As(Ye),crane:Ye.crane??0,building:Ye.ships.some(e=>e.building>0)})}async function cw(s){let e=new Set(Ye.sortie.map(n=>_n(Ye,n)?.kind).filter(Boolean));for(let n of s.waves.flat()){let i=n.replace("!","");if(i==="copy")for(let r of Ye.copies)e.add(r.kind);else e.add(i)}s.goal==="escort"&&e.add("tr");let t=[...e].filter(n=>!dn.ready(n));!t.length&&(xn.loaded||!e.has("cv"))||(hn.flash(V("loading"),30),await Promise.all([...t.map(n=>dn.load(n)),e.has("cv")?t0():null]),hn.flash(V("loaded2"),.8))}async function Om(s,e){let t=Tr(s),n=om(t);if(await cw(t),Ye.rivets-=e,Ym=e,Ye.last=s,La(),hn.hide(),Xc(n,t.hour??n.hour),$c(!1),Pa(6),t.goal==="escort")for(let i=0;i<t.escort[0];i++){let r=dn.kinds.tr?"tr":"cl",[a,o]=Gc((i%2?1:-1)*230,200-Math.floor(i/2)*380),c=Me.add(r,"A",a,o,Dn,6,{escort:!0});r!=="tr"&&(c.turrets.length=0,c.torps.length=0),c.course=Dn,c.body.ctl.tele=3,c.station=[(i%2?1:-1)*230,200-Math.floor(i/2)*380]}Me.fog=n.fog??0,Me.airTech={f2:Ye.bps.includes("f2"),t2:Ye.bps.includes("t2"),b2:Ye.bps.includes("b2")},Me.startStage(t,{copies:Ye.copies.map(i=>vm(i,_a(Ye)))}),il=!0,oi=!0,Ta=0,ka=0,qt("hud").classList.add("campaign"),qt("retreat").textContent=V("retreat"),it.follow=Me.flagship(),it.target.copy(Me.flagship().body.pos),it.set({yaw:Math.atan2(Pt.x,Pt.z)+.3,pitch:.62,dist:1600}),Lt.start(),en.enabled=!0,en.select(Ze.filter(i=>i.player&&i.alive)),nl(),setTimeout(()=>{hn.tip("battle"),Ze.some(i=>i.player&&i.kind==="cv")&&setTimeout(()=>hn.tip("carrier"),200)},1500)}function Jm(){let s=Me.stage,e=s.def,t=Ze.filter(h=>h.player),n={},i={},r=0,a=0;for(let h of t)i[h.uid]=h.kills,a+=h.hpMax,h.alive&&(n[h.uid]=h.hp/h.hpMax,r+=h.hp);let o={};for(let h of t)if(h.wing&&h.alive){let u={...h.wing.planes};for(let d of xn.sq)d.home===h&&(u[d.kind]+=d.n);o[h.uid]=u}let c={stage:e.id,won:s.over.won,time:s.over.t,sunk:Me.sunkList.slice(),lost:t.filter(h=>!h.alive).map(h=>h.uid),hp:n,kills:i,lostHp:1-r/Math.max(a,1),planes:o},l=bm(Ye,c);l.why=s.over.why,l.fine=Ym,Ma("auto",Ye).catch(()=>{}),il=!1,en.enabled=!1,hn.results(l,()=>Pr(!0))}if(oc){document.getElementById("stage").classList.add("touch");let s=document.createElement("div");s.id="touchbar",s.innerHTML='<button type="button" data-a="all"></button><button type="button" data-a="flag"></button><button type="button" data-a="none"></button>',qt("hud").appendChild(s);let e=()=>{let t=_e("touchBtns");for(let n of s.children)n.textContent=t[n.dataset.a]};e(),Sc(e),s.addEventListener("click",t=>{let n=t.target.dataset.a;if(n==="all"&&en.select(Ze.filter(i=>i.player&&i.alive)),n==="flag"){let i=Me.flagship();i&&(it.follow=i)}n==="none"&&en.select([]),t.target.blur()})}qt("retreat").addEventListener("click",s=>{s.currentTarget.blur(),Me.stage&&!Me.stage.over&&Me.finish(!1,"retreat")});var zm=!1;function lw(s){if(qt("wave").innerHTML=_e("waveN")(Me.wave),Me.stage){let e=Me.stage,t=e.def,n=V("goalHud"),i=Ze.filter(o=>o.escort&&o.alive).length,r=Math.max(0,(t.time??0)-e.t),a=t.goal==="escort"?n.escort(i,t.escort[1]):t.goal==="hold"?n.hold(`${Math.floor(r/60)}:${String(Math.floor(r%60)).padStart(2,"0")}`):n[t.goal](e.wave,t.waves.length);qt("goalhud").innerHTML=`<em>${t.id} \xB7 ${V("stages")[t.id][0]}</em>${a}`}qt("sunk").textContent=Me.sunkN,qt("tons").textContent=Me.score?`\xB7 ${_e("tons")(Me.score)}`:"";for(let[e,t]of Gu)t.style.setProperty("--hp",`${Math.max(e.hp,0)/e.hpMax*100}%`),t.classList.toggle("sel",!!e.sel),t.classList.toggle("dead",!e.alive);zc>0&&(zc-=s,zc<=0&&qt("msg").classList.remove("on"))}var ka=0;function hw(){for(;ka<Me.log.length;ka++){let s=Me.log[ka];if(s.kind==="wave"){let e=Ze.find(t=>t.boss&&t.alive);Sa(s.boss?`${V("bossIn")}
${e?Km(e):""}`:_e("waveIn")(s.n,s.count),4),Lt.horn?.()}else if(s.kind==="over")Sa(s.won?V("win"):V("lose"),5),Ta=performance.now();else if(s.kind==="sunk")Sa(_e(s.ship.side==="A"?"sunkUs":"sunkThem")(_e("kinds")[s.ship.kind]),3);else if(s.kind==="capsize")Sa(_e("capsized")(_e("kinds")[s.ship.kind],s.ship.side==="A"),4);else if(s.kind==="magazine"){Sa(_e("magazine")(_e("kinds")[s.ship.kind]),4);let[e,t]=qc(s.ship.body.pos);Lt.boom(Math.max(e*.35,30),t,s.ship.kind==="bb"||s.ship.kind==="bc"?1.3:1)}}Fi=Me.flagship()??Fi,il&&Ta&&performance.now()-Ta>5500&&(Ta=0,Jm()),!un&&!zm&&!Fi.alive&&(zm=!0,setTimeout(()=>{qt("endsub").textContent=_e("endSub")(Math.max(Me.wave-1,0),Me.sunkN,Me.score),qt("end").classList.add("on")},6e3))}var Bu=new M;function qc(s){Bu.set(1,0,0).applyQuaternion(Ot.quaternion);let e=s.x-Ot.position.x,t=s.z-Ot.position.z,n=Math.hypot(e,s.y-Ot.position.y,t)||1;return[n,he.clamp((e*Bu.x+t*Bu.z)/n,-1,1)*.8]}var sl=[],Bm=0,Uc=0;function uw(s,e){let t=performance.now();if(!Qt){let n=1e9,i=null,r=0;for(let o of xn.sq){let c=o.pos.distanceTo(Ot.position);c<n&&(n=c,i=o.pos),c<900&&(r+=o.n)}let[,a]=i?qc(i):[0,0];Lt.engines(i?Math.min(1,(r+2)/7)/(1+n/260):0,1,a)}for(let n of e){let i=n.at??n.world;if(!i)continue;let[r,a]=qc(i);if(r=Math.max(r*.35,30),(Qt||Ua)&&sl.push([+xi.toFixed(3),n.kind,n.type,Math.round(r),+a.toFixed(2)]),!(n.kind==="launch"||n.kind==="torphit"&&n.ship)){if(n.kind==="torphit"){Lt.boom(r,a,.7);continue}if(n.kind==="downed"){Lt.strike(r,a);continue}if(n.kind==="flak"){r<2500&&t-Bm>140&&(Bm=t,Lt.flak(r,a));continue}if(n.kind==="aa"){r<1500&&t-Uc>300&&(Uc=t,Lt.rattle(r,a,4,7.5,900,.22));continue}if(n.kind==="mg"){r<1200&&t-Uc>300&&(Uc=t,Lt.rattle(r,a,6,16,2200,.14));continue}n.kind==="drop"||n.kind==="landed"||n.kind==="touchdown"||(n.kind==="fire"?Lt.gun(r,a,Et[n.type].charge):n.kind==="splash"?Lt.splash(r,a,Et[n.type].cal>.15):n.kind==="hit"?Lt.strike(r,a):n.kind)}}Lt.update(s,{speed:Math.max(Fi.body.speed,0)*.3,aw:os.speed,gust:0,roll:0,rollRate:0,heave:0,flog:0,force:0,landDir:null,evening:!1})}var dw=new Qn(new M(0,-1,0),0);function fw(){ai.scale.y=-1,ai.updateMatrixWorld(!0),yi.uniforms.uMirror.value=-1,$t.clippingPlanes=[dw],$t.setRenderTarget(Ca),$t.render(ks,Ot),$t.clippingPlanes=[],ai.scale.y=1,ai.updateMatrixWorld(!0),yi.uniforms.uMirror.value=1,$t.setRenderTarget(null)}var ot=0,Fc=0,pw=parseFloat(jt.get("ev")??"0.9");function mw(s){Fc+=s*Rs;let e=0;for(;Fc>=Tt&&e<8;){Fc-=Tt,ot+=Tt,e++;for(let n of Ze)n.gone||n.body.step(Tt,ot);let t=_i.update(Tt,ot,Ze).concat(Oi.update(Tt,ot,Ze));oi?Me.update(Tt,ot,t):qn.open&&Me.dockStep(Tt,ot,t),uw(Tt,t.concat(Me.events.splice(0),xn.events.splice(0)));for(let n of t)n.kind==="splash"&&Zm.push({x:n.world.x,z:n.world.z,r:Et[n.type].cal*14,h:Et[n.type].cal*4})}e===8&&(Fc=0),Fa.uTime.value=ot}var Zm=[],jc=Xn;function gw(s){window.__freezeClock||!oi||(Xn+=s*Rs/3600,aa(Jc,Zc,Xn,Pt),Qc(),Math.abs(Xn-jc)>.25&&(tl(),jc=Xn))}var Hm=new M;function Yc(s){gw(s),mw(s),Yn.setAmbient(kr.color,kr.groundColor);for(let i of Ze)if(!(i.gone||i.body.sinkY>i.meta.D))for(let r of i.meta.funnels??[])Yn.funnel(i.body.toWorld(Hm.set(r[0],r[1],r[2]),new M),Math.max(i.body.power,.15)*(i.alive?1:.3),s*Rs,i.body.vel);Yn.update(s*Rs,ot,Ot),Da.dt=s,Da.update(Ze,Ot.position),xn.draw(),$u.update(Ze,ot);let e=jn?jn.focus():it.target,t=Ze.filter(i=>!i.gone).sort((i,r)=>i.body.pos.distanceToSquared(e)-r.body.pos.distanceToSquared(e)).slice(0,8);qu.step(s*Rs,e,t.map(i=>{let r=i.body.forward(Hm);return{pos:i.body.pos,fwd:new pe(r.x,r.z).normalize(),speed:Math.max(i.body.speed,0),heave:i.body.heaveV,sub:i.alive?1:.6,kind:iw[i.kind]}}),Zm.splice(0)),jn?jn.camera(xi):qn.open?qn.update(s):(hn?.open&&(it.yaw=Dn+.75+.12*Math.sin(ot*.04)),it.update(s)),oi&&!Qt?(en.update(s),lw(s),hw(),xn.overlay(i=>en.project(i),qt("ov"),_e("planeShort"))):un&&!qn.open?en.update(s):qn.open&&(ka=Me.log.length),Wc.update(Ot),$n.uCloudT.value=ot,yi.renderShip(new M(it.target.x,4,it.target.z).lerp(Ot.position,.15).setY(4)),fw();let n=1+3.2*he.smoothstep(-Pt.y,-.04,.16);Hc.render(ks,Ot,{exposure:pw*n*e0*(.5+.5*Bc.dim),t:ot,overlay:Oa,thresh:1.6*n})}var Aa=1,Oc=0,Hu=0;function Vm(s){Aa=s;let e=Math.round(Ls*Cs*s),t=Math.round(Ps*Cs*s);Hc.setSize(e,t),Wc.uniforms.uRefr.value=Hc.refr.texture,Ca.setSize(Math.round(e*.5),Math.round(t*.5)),Wc.uniforms.uReflTexel.value.set(1/Ca.width,1/Ca.height)}var Gm=performance.now();function Qm(s){let e=Math.min((s-Gm)/1e3,.1);if(Gm=s,Yc(e),Oc+=e,Hu++,Oc>2){let t=Oc/Hu;window.__fps=1/t,t>.021&&Aa>.61?Vm(Math.max(.6,Aa-.1)):t<.0135&&Aa<.99&&Vm(Math.min(1,Aa+.1)),Oc=0,Hu=0}requestAnimationFrame(Qm)}var jn=null,xi=0,e0=1,bw=s=>({id:s.id,kind:s.kind,side:s.side,alive:s.alive,hp:+s.hp.toFixed(1),pos:s.body.pos.toArray().map(e=>+e.toFixed(1)),speed:+(s.body.speed*1.9438).toFixed(1),heading:+(s.body.yaw*57.3).toFixed(1),heel:+(s.body.heel*57.3).toFixed(1),water:Math.round(s.body.water),founder:+s.body.founder.toFixed(1),sunk:s.body.sunk,turrets:s.turrets.map(e=>[+(e.yaw*57.3).toFixed(1),+(e.elev*57.3).toFixed(2),+e.reload.toFixed(1),e.broken?"X":e.onTarget?"*":""])});window.__battle=Me;window.__sun=Pt;window.__torps=Oi;window.__wake=qu;window.__ships=Ze;window.__camera=Ot;window.__rcam=it;window.__fx=Yn;window.__renderer=$t;window.__cmd=en;window.__state=()=>({t:+ot.toFixed(2),wave:Me.wave,sunk:Me.sunkN,ships:Ze.filter(s=>!s.gone).map(bw)});window.__set=s=>{s.hour!==void 0&&(Xn=s.hour,aa(Jc,Zc,Xn,Pt),Qc(),tl(),jc=Xn),s.cam&&it.set(s.cam),s.target&&it.target.set(s.target[0],0,s.target[1]),s.follow!==void 0&&(it.follow=s.follow===null?null:Ze[s.follow]),s.start&&(oi=!0,In.classList.add("gone"))};window.__fast=s=>{oi=!0,In.classList.add("gone");for(let t=0;t<s/Tt;t++){ot+=Tt;for(let i of Ze)i.gone||i.body.step(Tt,ot);let n=_i.update(Tt,ot,Ze).concat(Oi.update(Tt,ot,Ze));Me.update(Tt,ot,n),Me.events.length=0}Fa.uTime.value=ot;let e=t=>{let n=Ze.filter(i=>i.side===t);return{n:n.length,alive:n.filter(i=>i.alive).length,hp:Math.round(n.filter(i=>i.alive).reduce((i,r)=>i+r.hp,0))}};return{t:Math.round(ot),wave:Me.wave,sunk:Me.sunkN,A:e("A"),E:e("E"),shells:_i.shells.length}};window.__fastUntil=(s,e=120)=>{oi=!0;for(let t=0;t<e/Tt;t++){if(s())return!0;ot+=Tt;for(let i of Ze)i.gone||i.body.step(Tt,ot);let n=_i.update(Tt,ot,Ze).concat(Oi.update(Tt,ot,Ze));Me.update(Tt,ot,n),Me.events.length=0}return Fa.uTime.value=ot,!1};Qt&&(oi=!0,jt.has("air")?jn=new Ac({battle:Me,air:xn,camera:Ot,fast:s=>window.__fast(s),fastUntil:(s,e)=>window.__fastUntil(s,e),rcam:it,fx:Yn,arty:_i,torps:Oi}):jn=new Tc({battle:Me,camera:Ot,fast:s=>window.__fast(s),fastUntil:(s,e)=>window.__fastUntil(s,e),rcam:it,fx:Yn,arty:_i,torps:Oi,event:(s,e)=>{let[t,n]=qc(e);sl.push([+xi.toFixed(3),s,"bb",Math.round(Math.max(t*.35,30)),+n.toFixed(2)])}}));window.__renderAt=(s,e)=>{let t=s/e;if(jn){for(;xi<t-1e-6;){let c=Math.min(1/e,t-xi);xi+=c,e0=jn.apply(xi).fade,Yc(c/Rs*(jn.ts?.(xi)??Rs))}let n=Me.flagship(),i=n?.turrets.length?Math.max(...n.turrets.map(c=>Math.abs(c.yawV)/(Et.bb.traverse*Math.PI/180))):0,r=1e9,a=0;for(let c of xn.sq){let l=c.pos.distanceTo(Ot.position);r=Math.min(r,l),l<600&&(a+=c.n)}let o=0;for(let c of Ze){let l=Math.max(...c.fires);l>0&&(o=Math.max(o,l*Math.min(1,250/Math.max(c.body.pos.distanceTo(Ot.position),1))))}return{t:+ot.toFixed(2),shot:jn.shotAt(xi)[0],ev:sl.splice(0),trav:+Math.min(i,1).toFixed(3),fire:+o.toFixed(3),plane:Math.round(Math.min(r,99999)),planes:a}}for(;ot<t-1e-6;)Yc(1/e);return window.__state()};window.__filmLen=jn?.len??Eu;window.__film=jn;window.__ready=!0;window.__step=(s=1,e=30)=>{for(let t=0;t<s;t++)xi+=1/e,Yc(1/e);return sl.splice(0)};var vw=null;function t0(){return vw??=xn.load("data/",$t.capabilities.getMaxAnisotropy()).then(s=>{xn.loaded=!0;for(let e of s??[])yi.addCaster(e,{ship:!0})})}async function xw(){for(let s of["cl","tr","bc","cv","bb","ca","dd","wh","sp"])await dn.load(s);if(await t0(),!xr){for(let s of Es)await dn.sharpen(s);await Na.sharpen?.()}}if(un){let s=null;s=Vc,Ye=s??xa(),hn=new Nc({root:qt("stage"),state:Ye,dispOf:rw,armOf:aw,onRefit:n=>{let i=Ze.filter(r=>r.player).findIndex(r=>r.uid===n);hn.hide(),qn.show(Math.max(i,0)),setTimeout(()=>hn.tip("dock"),500)},touch:oc,onSortie:Om,onEnding:n=>{Xc(Wu,17.3),Pa(0),it.set({yaw:Dn+2.6,pitch:.08,dist:900}),hn.ending(()=>n())},onChange:n=>{La(),n&&Pa(0),$c(!0)},onReplace:n=>{Ye=n,hn.state=n,La(),Pr(!0)}}),Xc(Wu,15.6),Pa(0),$c(!0),it.target.copy(Fi.body.pos);let e=In.querySelector(".refit");In.querySelector(".goal").dataset.t="goalC",oc&&(In.querySelector(".hint").dataset.t="hintTouch"),Sc(()=>{Ea.textContent=s?V("cont"):V("fresh"),e.textContent=V("fresh"),e.style.display=s?"":"none"}),ba(),Ea.addEventListener("click",()=>{In.classList.add("gone"),Lt.start(),Pr(!1)}),Ea.disabled=!1,e.addEventListener("click",()=>{if(!e.dataset.armed){e.dataset.armed=1,e.textContent=V("fresh")+" ?";return}Ye=xa(),hn.state=Ye,La(),In.classList.add("gone"),Lt.start(),Pr(!0)}),Sc(()=>{hn.render();for(let n of Ze)n.uid&&(n.label=vi(n.name,Yu()))}),window.__camp={get state(){return Ye},sortie:Om,toYard:Pr,endBattle:Jm,yard:hn}}else Ea.addEventListener("click",jm),In.querySelector(".refit")?.addEventListener("click",()=>{In.classList.add("gone"),Lt.start(),en.enabled=!1,qn.show()});if(!Qt&&!Ua)requestAnimationFrame(Qm),setTimeout(()=>xw().catch(s=>console.warn("load",s)),300);else{let s=()=>requestAnimationFrame(s);s()}
