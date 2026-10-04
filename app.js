var cl="160";var zf=0,Ph=1,Bf=2;var xd=1,Hf=2,ei=3,zn=0,Be=1,on=2;var xi=0,Ls=1,Ds=2,Ih=3,Dh=4,Vf=5,Bi=100,Gf=101,Wf=102,Uh=103,Nh=104,Xf=200,qf=201,Yf=202,$f=203,Ac=204,Rc=205,Kf=206,Zf=207,Jf=208,jf=209,Qf=210,tp=211,ep=212,np=213,ip=214,sp=0,rp=1,op=2,Mo=3,ap=4,cp=5,lp=6,hp=7,vd=0,up=1,dp=2,kn=0,fp=1,pp=2,mp=3,gp=4,xp=5,vp=6,Fh="attached",_p="detached",_d=300,Us=301,Ns=302,Cc=303,Lc=304,Zo=306,Xi=1e3,an=1001,mr=1002,be=1003,bo=1004;var hr=1005;var ue=1006,ll=1007;var Bn=1008;var vi=1009,yp=1010,Mp=1011,hl=1012,yd=1013,xn=1014,ni=1015,Cn=1016,Md=1017,bd=1018,Vi=1020,bp=1021,ze=1023,Sp=1024,wp=1025,Gi=1026,Fs=1027,Ep=1028,Sd=1029,Tp=1030,wd=1031,Ed=1033,$a=33776,Ka=33777,Za=33778,Ja=33779,Oh=35840,kh=35841,zh=35842,Bh=35843,Td=36196,Hh=37492,Vh=37496,Gh=37808,Wh=37809,Xh=37810,qh=37811,Yh=37812,$h=37813,Kh=37814,Zh=37815,Jh=37816,jh=37817,Qh=37818,tu=37819,eu=37820,nu=37821,ja=36492,iu=36494,su=36495,Ap=36283,ru=36284,ou=36285,au=36286;var Os=2300,qi=2301,Qa=2302,cu=2400,lu=2401,hu=2402,Rp=2500;var Ad=0,Jo=1,Rr=2,Rd=3e3,Wi=3001,Cp=3200,Lp=3201,Cd=0,Pp=1,Je="",ae="srgb",Te="srgb-linear",ul="display-p3",jo="display-p3-linear",So="linear",oe="srgb",wo="rec709",Eo="p3";var hs=7680;var uu=519,Ip=512,Dp=513,Up=514,Qo=515,Np=516,Fp=517,Op=518,kp=519,Pc=35044,dl=35048;var du="300 es",Ic=1035,ii=2e3,To=2001,_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,ur=Math.PI/180,ks=180/Math.PI;function Rn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function ke(s,t,e){return Math.max(t,Math.min(e,s))}function fl(s,t){return(s%t+t)%t}function zp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Bp(s,t,e){return s!==t?(e-s)/(t-s):0}function dr(s,t,e){return(1-e)*s+e*t}function Hp(s,t,e,n){return dr(s,t,1-Math.exp(-e*n))}function Vp(s,t=1){return t-Math.abs(fl(s,t*2)-t)}function Gp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Wp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Xp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function qp(s,t){return s+Math.random()*(t-s)}function Yp(s){return s*(.5-Math.random())}function $p(s){s!==void 0&&(fu=s);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kp(s){return s*ur}function Zp(s){return s*ks}function Dc(s){return(s&s-1)===0&&s!==0}function Jp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ao(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function jp(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Et={DEG2RAD:ur,RAD2DEG:ks,generateUUID:Rn,clamp:ke,euclideanModulo:fl,mapLinear:zp,inverseLerp:Bp,lerp:dr,damp:Hp,pingpong:Vp,smoothstep:Gp,smootherstep:Wp,randInt:Xp,randFloat:qp,randFloatSpread:Yp,seededRandom:$p,degToRad:Kp,radToDeg:Zp,isPowerOfTwo:Dc,ceilPowerOfTwo:Jp,floorPowerOfTwo:Ao,setQuaternionFromProperEuler:jp,normalize:te,denormalize:On},dt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],p=i[3],m=i[6],_=i[1],v=i[4],S=i[7],C=i[2],R=i[5],T=i[8];return r[0]=o*x+a*_+c*C,r[3]=o*p+a*v+c*R,r[6]=o*m+a*S+c*T,r[1]=l*x+h*_+u*C,r[4]=l*p+h*v+u*R,r[7]=l*m+h*S+u*T,r[2]=d*x+f*_+g*C,r[5]=d*p+f*v+g*R,r[8]=d*m+f*S+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(tc.makeScale(t,e)),this}rotate(t){return this.premultiply(tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},tc=new Gt;function Ld(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qp(){let s=gr("canvas");return s.style.display="block",s}var pu={};function fr(s){s in pu||(pu[s]=!0,console.warn(s))}var mu=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gu=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qr={[Te]:{transfer:So,primaries:wo,toReference:s=>s,fromReference:s=>s},[ae]:{transfer:oe,primaries:wo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[jo]:{transfer:So,primaries:Eo,toReference:s=>s.applyMatrix3(gu),fromReference:s=>s.applyMatrix3(mu)},[ul]:{transfer:oe,primaries:Eo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(gu),fromReference:s=>s.applyMatrix3(mu).convertLinearToSRGB()}},tm=new Set([Te,jo]),Kt={enabled:!0,_workingColorSpace:Te,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!tm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=qr[t].toReference,i=qr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return qr[s].primaries},getTransfer:function(s){return s===Je?So:qr[s].transfer}};function Ps(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ec(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var us,Ro=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=gr("canvas")),us.width=t.width,us.height=t.height;let n=us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ps(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ps(e[n]/255)*255):e[n]=Ps(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},em=0,Co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Rn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nc(i[o].image)):r.push(nc(i[o]))}else r=nc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function nc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ro.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nm=0,He=class s extends _i{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=an,i=an,r=ue,o=Bn,a=ze,c=vi,l=s.DEFAULT_ANISOTROPY,h=Je){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Rn(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wi?ae:Je),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_d)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ae?Wi:Rd}set encoding(t){fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Wi?ae:Je}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=_d;He.DEFAULT_ANISOTROPY=1;var Bt=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,S=(f+1)/2,C=(m+1)/2,R=(h+d)/4,T=(u+x)/4,N=(g+p)/4;return v>S&&v>C?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=T/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=R/i,r=N/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=T/r,i=N/r),this.set(n,i,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Uc=class extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Bt(0,0,t,e),this.scissorTest=!1,this.viewport=new Bt(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wi?ae:Je),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ue,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ie=class extends Uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Lo=class extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nc=class extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var de=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let p=1-a,m=c*d+l*f+h*g+u*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let C=Math.sqrt(v),R=Math.atan2(C,m*_);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}let S=a*_;if(c=c*p+d*S,l=l*p+f*S,h=h*p+g*S,u=u*p+x*S,p===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new w,xu=new de,vn=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),$r.subVectors(this.max,ir),ds.subVectors(t.a,ir),fs.subVectors(t.b,ir),ps.subVectors(t.c,ir),ui.subVectors(fs,ds),di.subVectors(ps,fs),Ni.subVectors(ds,ps);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ni.z,Ni.y,ui.z,0,-ui.x,di.z,0,-di.x,Ni.z,0,-Ni.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ni.y,Ni.x,0];return!sc(e,ds,fs,ps,$r)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,ds,fs,ps,$r))?!1:(Kr.crossVectors(ui,di),e=[Kr.x,Kr.y,Kr.z],sc(e,ds,fs,ps,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Kn=[new w,new w,new w,new w,new w,new w,new w,new w],wn=new w,Yr=new vn,ds=new w,fs=new w,ps=new w,ui=new w,di=new w,Ni=new w,ir=new w,$r=new w,Kr=new w,Fi=new w;function sc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Fi.fromArray(s,r);let a=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var im=new vn,sr=new w,rc=new w,cn=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):im.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(sr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(rc)),this.expandByPoint(sr.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new w,oc=new w,Zr=new w,fi=new w,ac=new w,Jr=new w,cc=new w,Yi=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){oc.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),a=fi.dot(this.direction),c=-fi.dot(Zr),l=fi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(oc).addScaledVector(Zr,d),f}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,i,r){ac.subVectors(e,t),Jr.subVectors(n,t),cc.crossVectors(ac,Jr);let o=this.direction.dot(cc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,t);let c=a*this.direction.dot(Jr.crossVectors(fi,Jr));if(c<0)return null;let l=a*this.direction.dot(ac.cross(fi));if(l<0||c+l>o)return null;let h=-a*fi.dot(cc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,x,p)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sm,t,rm)}lookAt(t,e,n){let i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),pi.crossVectors(n,sn),pi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),pi.crossVectors(n,sn)),pi.normalize(),jr.crossVectors(sn,pi),i[0]=pi.x,i[4]=jr.x,i[8]=sn.x,i[1]=pi.y,i[5]=jr.y,i[9]=sn.y,i[2]=pi.z,i[6]=jr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],_=n[3],v=n[7],S=n[11],C=n[15],R=i[0],T=i[4],N=i[8],M=i[12],A=i[1],D=i[5],H=i[9],J=i[13],P=i[2],U=i[6],V=i[10],X=i[14],q=i[3],W=i[7],Y=i[11],j=i[15];return r[0]=o*R+a*A+c*P+l*q,r[4]=o*T+a*D+c*U+l*W,r[8]=o*N+a*H+c*V+l*Y,r[12]=o*M+a*J+c*X+l*j,r[1]=h*R+u*A+d*P+f*q,r[5]=h*T+u*D+d*U+f*W,r[9]=h*N+u*H+d*V+f*Y,r[13]=h*M+u*J+d*X+f*j,r[2]=g*R+x*A+p*P+m*q,r[6]=g*T+x*D+p*U+m*W,r[10]=g*N+x*H+p*V+m*Y,r[14]=g*M+x*J+p*X+m*j,r[3]=_*R+v*A+S*P+C*q,r[7]=_*T+v*D+S*U+C*W,r[11]=_*N+v*H+S*V+C*Y,r[15]=_*M+v*J+S*X+C*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+p*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=u*p*l-x*d*l+x*c*f-a*p*f-u*c*m+a*d*m,v=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,S=h*x*l-g*u*l+g*a*f-o*x*f-h*a*m+o*u*m,C=g*u*c-h*x*c-g*a*d+o*x*d+h*a*p-o*u*p,R=e*_+n*v+i*S+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=_*T,t[1]=(x*d*r-u*p*r-x*i*f+n*p*f+u*i*m-n*d*m)*T,t[2]=(a*p*r-x*c*r+x*i*l-n*p*l-a*i*m+n*c*m)*T,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*T,t[4]=v*T,t[5]=(h*p*r-g*d*r+g*i*f-e*p*f-h*i*m+e*d*m)*T,t[6]=(g*c*r-o*p*r-g*i*l+e*p*l+o*i*m-e*c*m)*T,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*T,t[8]=S*T,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*m-e*u*m)*T,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*m+e*a*m)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*T,t[12]=C*T,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*p+e*u*p)*T,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*p-e*a*p)*T,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,_=c*l,v=c*h,S=c*u,C=n.x,R=n.y,T=n.z;return i[0]=(1-(x+m))*C,i[1]=(f+S)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(f-S)*R,i[5]=(1-(d+m))*R,i[6]=(p+_)*R,i[7]=0,i[8]=(g+v)*T,i[9]=(p-_)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ms.set(i[0],i[1],i[2]).length(),o=ms.set(i[4],i[5],i[6]).length(),a=ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],En.copy(this);let l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ii){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===To)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ii){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,g,x;if(a===ii)g=(o+r)*u,x=-2*u;else if(a===To)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ms=new w,En=new vt,sm=new w(0,0,0),rm=new w(1,1,1),pi=new w,jr=new w,sn=new w,vu=new vt,_u=new de,zs=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zs.DEFAULT_ORDER="XYZ";var xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},om=0,yu=new w,gs=new de,Jn=new vt,Qr=new w,rr=new w,am=new w,cm=new de,Mu=new w(1,0,0),bu=new w(0,1,0),Su=new w(0,0,1),lm={type:"added"},hm={type:"removed"},fe=class s extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new w,e=new zs,n=new de,i=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new Gt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(bu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(bu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(rr,Qr,this.up):Jn.lookAt(Qr,rr,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(Jn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(lm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hm)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,am),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,cm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};fe.DEFAULT_UP=new w(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new w,jn=new w,lc=new w,Qn=new w,xs=new w,vs=new w,wu=new w,hc=new w,uc=new w,dc=new w,to=!1,As=class s{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Tn.subVectors(i,e),jn.subVectors(n,e),lc.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(jn),c=Tn.dot(lc),l=jn.dot(jn),h=jn.dot(lc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(t,e,n,i,r,o,a,c){return to===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),to=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c)}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),jn.subVectors(t,e),Tn.cross(jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Tn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return to===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),to=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;xs.subVectors(i,n),vs.subVectors(r,n),hc.subVectors(t,n);let c=xs.dot(hc),l=vs.dot(hc);if(c<=0&&l<=0)return e.copy(n);uc.subVectors(t,i);let h=xs.dot(uc),u=vs.dot(uc);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(xs,o);dc.subVectors(t,r);let f=xs.dot(dc),g=vs.dot(dc);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(vs,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return wu.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(wu,a);let m=1/(p+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(xs,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function fc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=fl(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fc(o,r,t+1/3),this.g=fc(o,r,t),this.b=fc(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){let n=Pd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}copyLinearToSRGB(t){return this.r=ec(t.r),this.g=ec(t.g),this.b=ec(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return Kt.fromWorkingColorSpace(Oe.copy(this),t),Math.round(ke(Oe.r*255,0,255))*65536+Math.round(ke(Oe.g*255,0,255))*256+Math.round(ke(Oe.b*255,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Oe.copy(this),e);let n=Oe.r,i=Oe.g,r=Oe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=ae){Kt.fromWorkingColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,i=Oe.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(eo);let n=dr(mi.h,eo.h,e),i=dr(mi.s,eo.s,e),r=dr(mi.l,eo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new xt;xt.NAMES=Pd;var um=0,ln=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Ls,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Rc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==Rc&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},je=class extends ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new w,no=new dt,Ee=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pc&&(t.usage=this.usage),t}};var Po=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Io=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}};var dm=0,gn=new vt,pc=new fe,_s=new w,rn=new vn,or=new vn,Pe=new w,xe=class s extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ld(t)?Io:Po)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return pc.lookAt(t),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(rn.min,or.min),rn.expandByPoint(Pe),Pe.addVectors(rn.max,or.max),rn.expandByPoint(Pe)):(rn.expandByPoint(or.min),rn.expandByPoint(or.max))}rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pe.fromBufferAttribute(a,l),c&&(_s.fromBufferAttribute(t,l),Pe.add(_s)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let A=0;A<a;A++)l[A]=new w,h[A]=new w;let u=new w,d=new w,f=new w,g=new dt,x=new dt,p=new dt,m=new w,_=new w;function v(A,D,H){u.fromArray(i,A*3),d.fromArray(i,D*3),f.fromArray(i,H*3),g.fromArray(o,A*2),x.fromArray(o,D*2),p.fromArray(o,H*2),d.sub(u),f.sub(u),x.sub(g),p.sub(g);let J=1/(x.x*p.y-p.x*x.y);isFinite(J)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(J),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(J),l[A].add(m),l[D].add(m),l[H].add(m),h[A].add(_),h[D].add(_),h[H].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let A=0,D=S.length;A<D;++A){let H=S[A],J=H.start,P=H.count;for(let U=J,V=J+P;U<V;U+=3)v(n[U+0],n[U+1],n[U+2])}let C=new w,R=new w,T=new w,N=new w;function M(A){T.fromArray(r,A*3),N.copy(T);let D=l[A];C.copy(D),C.sub(T.multiplyScalar(T.dot(D))).normalize(),R.crossVectors(N,D);let J=R.dot(h[A])<0?-1:1;c[A*4]=C.x,c[A*4+1]=C.y,c[A*4+2]=C.z,c[A*4+3]=J}for(let A=0,D=S.length;A<D;++A){let H=S[A],J=H.start,P=H.count;for(let U=J,V=J+P;U<V;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Ee(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eu=new vt,Oi=new Yi,io=new cn,Tu=new w,ys=new w,Ms=new w,bs=new w,mc=new w,so=new w,ro=new dt,oo=new dt,ao=new dt,Au=new w,Ru=new w,Cu=new w,co=new w,lo=new w,qt=class extends fe{constructor(t=new xe,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(mc.fromBufferAttribute(u,t),o?so.addScaledVector(mc,h):so.addScaledVector(mc.sub(e),h))}e.add(so)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(io.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(io,Tu)===null||Oi.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(Eu.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(Eu),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=_,C=v;S<C;S+=3){let R=a.getX(S),T=a.getX(S+1),N=a.getX(S+2);i=ho(this,m,t,n,l,h,u,R,T,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);i=ho(this,o,t,n,l,h,u,_,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=_,C=v;S<C;S+=3){let R=S,T=S+1,N=S+2;i=ho(this,m,t,n,l,h,u,R,T,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=p,v=p+1,S=p+2;i=ho(this,o,t,n,l,h,u,_,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function fm(s,t,e,n,i,r,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===zn,a),c===null)return null;lo.copy(a),lo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(lo);return l<e.near||l>e.far?null:{distance:l,point:lo.clone(),object:s}}function ho(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ys),s.getVertexPosition(c,Ms),s.getVertexPosition(l,bs);let h=fm(s,t,e,n,ys,Ms,bs,co);if(h){i&&(ro.fromBufferAttribute(i,a),oo.fromBufferAttribute(i,c),ao.fromBufferAttribute(i,l),h.uv=As.getInterpolation(co,ys,Ms,bs,ro,oo,ao,new dt)),r&&(ro.fromBufferAttribute(r,a),oo.fromBufferAttribute(r,c),ao.fromBufferAttribute(r,l),h.uv1=As.getInterpolation(co,ys,Ms,bs,ro,oo,ao,new dt),h.uv2=h.uv1),o&&(Au.fromBufferAttribute(o,a),Ru.fromBufferAttribute(o,c),Cu.fromBufferAttribute(o,l),h.normal=As.getInterpolation(co,ys,Ms,bs,Au,Ru,Cu,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new w,materialIndex:0};As.getNormal(ys,Ms,bs,u.normal),h.face=u}return h}var $i=class s extends xe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(x,p,m,_,v,S,C,R,T,N,M){let A=S/T,D=C/N,H=S/2,J=C/2,P=R/2,U=T+1,V=N+1,X=0,q=0,W=new w;for(let Y=0;Y<V;Y++){let j=Y*D-J;for(let at=0;at<U;at++){let G=at*A-H;W[x]=G*_,W[p]=j*v,W[m]=P,l.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[m]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(at/T),u.push(1-Y/N),X+=1}}for(let Y=0;Y<N;Y++)for(let j=0;j<T;j++){let at=d+j+U*Y,G=d+j+U*(Y+1),$=d+(j+1)+U*(Y+1),ot=d+(j+1)+U*Y;c.push(at,G,ot),c.push(G,$,ot),q+=6}a.addGroup(f,q,M),f+=q,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function $e(s){let t={};for(let e=0;e<s.length;e++){let n=Bs(s[e]);for(let i in n)t[i]=n[i]}return t}function pm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Id(s){return s.getRenderTarget()===null?s.outputColorSpace:Kt.workingColorSpace}var mm={clone:Bs,merge:$e},gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ce=class extends ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=pm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Do=class extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Se=class extends Do{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ur*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ss=-90,ws=1,Fc=class extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Se(Ss,ws,t,e);i.layers=this.layers,this.add(i);let r=new Se(Ss,ws,t,e);r.layers=this.layers,this.add(r);let o=new Se(Ss,ws,t,e);o.layers=this.layers,this.add(o);let a=new Se(Ss,ws,t,e);a.layers=this.layers,this.add(a);let c=new Se(Ss,ws,t,e);c.layers=this.layers,this.add(c);let l=new Se(Ss,ws,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Uo=class extends He{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oc=class extends Ie{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Wi?ae:Je),this.texture=new Uo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $i(5,5,5),r=new ce({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:xi});r.uniforms.tEquirect.value=e;let o=new qt(i,r),a=e.minFilter;return e.minFilter===Bn&&(e.minFilter=ue),new Fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},gc=new w,vm=new w,_m=new Gt,An=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=gc.subVectors(n,e).cross(vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(gc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_m.getNormalMatrix(t),i=this.coplanarPoint(gc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new cn,uo=new w,vr=class{constructor(t=new An,e=new An,n=new An,i=new An,r=new An,o=new An){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],p=i[11],m=i[12],_=i[13],v=i[14],S=i[15];if(n[0].setComponents(c-r,d-l,p-f,S-m).normalize(),n[1].setComponents(c+r,d+l,p+f,S+m).normalize(),n[2].setComponents(c+o,d+h,p+g,S+_).normalize(),n[3].setComponents(c-o,d-h,p-g,S-_).normalize(),n[4].setComponents(c-a,d-u,p-x,S-v).normalize(),e===ii)n[5].setComponents(c+a,d+u,p+x,S+v).normalize();else if(e===To)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(uo.x=i.normal.x>0?t.max.x:t.min.x,uo.y=i.normal.y>0?t.max.y:t.min.y,uo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ym(s,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let m=g[x];e?s.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Ln=class s extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*d-o;for(let v=0;v<l;v++){let S=v*u-r;g.push(S,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let v=_+l*m,S=_+l*(m+1),C=_+1+l*(m+1),R=_+1+l*m;f.push(v,S,R),f.push(S,C,R)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
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
#endif`,Sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
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
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Um=`#ifdef USE_IRIDESCENCE
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
#endif`,Nm=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wm=`#define PI 3.141592653589793
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
} // validated`,Xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qm=`vec3 transformedNormal = objectNormal;
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
#endif`,Ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",jm=`
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
}`,Qm=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
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
}`,l0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
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
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
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
#endif`,y0=`struct PhysicalMaterial {
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
}`,M0=`
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,R0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
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
#endif`,F0=`#ifdef USE_MORPHTARGETS
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
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`#include <common>
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
}`,Ag=`#if DEPTH_PACKING == 3200
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`#define DISTANCE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,Og=`#define LAMBERT
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
}`,kg=`#define MATCAP
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
}`,zg=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Gg=`#define PHONG
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define TOON
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
}`,Yg=`#define TOON
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
}`,$g=`uniform float size;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Mm,alphahash_pars_fragment:bm,alphamap_fragment:Sm,alphamap_pars_fragment:wm,alphatest_fragment:Em,alphatest_pars_fragment:Tm,aomap_fragment:Am,aomap_pars_fragment:Rm,batching_pars_vertex:Cm,batching_vertex:Lm,begin_vertex:Pm,beginnormal_vertex:Im,bsdfs:Dm,iridescence_fragment:Um,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Om,clipping_planes_pars_vertex:km,clipping_planes_vertex:zm,color_fragment:Bm,color_pars_fragment:Hm,color_pars_vertex:Vm,color_vertex:Gm,common:Wm,cube_uv_reflection_fragment:Xm,defaultnormal_vertex:qm,displacementmap_pars_vertex:Ym,displacementmap_vertex:$m,emissivemap_fragment:Km,emissivemap_pars_fragment:Zm,colorspace_fragment:Jm,colorspace_pars_fragment:jm,envmap_fragment:Qm,envmap_common_pars_fragment:t0,envmap_pars_fragment:e0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:p0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:o0,fog_pars_fragment:a0,gradientmap_pars_fragment:c0,lightmap_fragment:l0,lightmap_pars_fragment:h0,lights_lambert_fragment:u0,lights_lambert_pars_fragment:d0,lights_pars_begin:f0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:x0,lights_phong_pars_fragment:v0,lights_physical_fragment:_0,lights_physical_pars_fragment:y0,lights_fragment_begin:M0,lights_fragment_maps:b0,lights_fragment_end:S0,logdepthbuf_fragment:w0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:A0,map_fragment:R0,map_pars_fragment:C0,map_particle_fragment:L0,map_particle_pars_fragment:P0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:D0,morphcolor_vertex:U0,morphnormal_vertex:N0,morphtarget_pars_vertex:F0,morphtarget_vertex:O0,normal_fragment_begin:k0,normal_fragment_maps:z0,normal_pars_fragment:B0,normal_pars_vertex:H0,normal_vertex:V0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Y0,opaque_fragment:$0,packing:K0,premultiplied_alpha_fragment:Z0,project_vertex:J0,dithering_fragment:j0,dithering_pars_fragment:Q0,roughnessmap_fragment:tg,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:og,skinning_pars_vertex:ag,skinning_vertex:cg,skinnormal_vertex:lg,specularmap_fragment:hg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:xg,uv_vertex:vg,worldpos_vertex:_g,background_vert:yg,background_frag:Mg,backgroundCube_vert:bg,backgroundCube_frag:Sg,cube_vert:wg,cube_frag:Eg,depth_vert:Tg,depth_frag:Ag,distanceRGBA_vert:Rg,distanceRGBA_frag:Cg,equirect_vert:Lg,equirect_frag:Pg,linedashed_vert:Ig,linedashed_frag:Dg,meshbasic_vert:Ug,meshbasic_frag:Ng,meshlambert_vert:Fg,meshlambert_frag:Og,meshmatcap_vert:kg,meshmatcap_frag:zg,meshnormal_vert:Bg,meshnormal_frag:Hg,meshphong_vert:Vg,meshphong_frag:Gg,meshphysical_vert:Wg,meshphysical_frag:Xg,meshtoon_vert:qg,meshtoon_frag:Yg,points_vert:$g,points_frag:Kg,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:jg,sprite_frag:Qg},nt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Fn={basic:{uniforms:$e([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:$e([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:$e([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:$e([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:$e([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:$e([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:$e([nt.points,nt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:$e([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:$e([nt.common,nt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:$e([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:$e([nt.sprite,nt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:$e([nt.common,nt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:$e([nt.lights,nt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Fn.physical={uniforms:$e([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var fo={r:0,b:0,g:0};function tx(s,t,e,n,i,r,o){let a=new xt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(p,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),_=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zo)?(h===void 0&&(h=new qt(new $i(1,1,1),new ce({name:"BackgroundCubeMaterial",uniforms:Bs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Kt.getTransfer(v.colorSpace)!==oe,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new qt(new Ln(2,2),new ce({name:"BackgroundMaterial",uniforms:Bs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,m){p.getRGB(fo,Id(s)),n.buffers.color.setClear(fo.r,fo.g,fo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:g}}function ex(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function u(P,U,V,X,q){let W=!1;if(o){let Y=x(X,V,U);l!==Y&&(l=Y,f(l.object)),W=m(P,X,V,q),W&&_(P,X,V,q)}else{let Y=U.wireframe===!0;(l.geometry!==X.id||l.program!==V.id||l.wireframe!==Y)&&(l.geometry=X.id,l.program=V.id,l.wireframe=Y,W=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,N(P,U,V,X),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,U,V){let X=V.wireframe===!0,q=a[P.id];q===void 0&&(q={},a[P.id]=q);let W=q[U.id];W===void 0&&(W={},q[U.id]=W);let Y=W[X];return Y===void 0&&(Y=p(d()),W[X]=Y),Y}function p(P){let U=[],V=[],X=[];for(let q=0;q<i;q++)U[q]=0,V[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:X,object:P,attributes:{},index:null}}function m(P,U,V,X){let q=l.attributes,W=U.attributes,Y=0,j=V.getAttributes();for(let at in j)if(j[at].location>=0){let $=q[at],ot=W[at];if(ot===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor)),$===void 0||$.attribute!==ot||ot&&$.data!==ot.data)return!0;Y++}return l.attributesNum!==Y||l.index!==X}function _(P,U,V,X){let q={},W=U.attributes,Y=0,j=V.getAttributes();for(let at in j)if(j[at].location>=0){let $=W[at];$===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&($=P.instanceColor));let ot={};ot.attribute=$,$&&$.data&&(ot.data=$.data),q[at]=ot,Y++}l.attributes=q,l.attributesNum=Y,l.index=X}function v(){let P=l.newAttributes;for(let U=0,V=P.length;U<V;U++)P[U]=0}function S(P){C(P,0)}function C(P,U){let V=l.newAttributes,X=l.enabledAttributes,q=l.attributeDivisors;V[P]=1,X[P]===0&&(s.enableVertexAttribArray(P),X[P]=1),q[P]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),q[P]=U)}function R(){let P=l.newAttributes,U=l.enabledAttributes;for(let V=0,X=U.length;V<X;V++)U[V]!==P[V]&&(s.disableVertexAttribArray(V),U[V]=0)}function T(P,U,V,X,q,W,Y){Y===!0?s.vertexAttribIPointer(P,U,V,q,W):s.vertexAttribPointer(P,U,V,X,q,W)}function N(P,U,V,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let q=X.attributes,W=V.getAttributes(),Y=U.defaultAttributeValues;for(let j in W){let at=W[j];if(at.location>=0){let G=q[j];if(G===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let $=G.normalized,ot=G.itemSize,pt=e.get(G);if(pt===void 0)continue;let ut=pt.buffer,Ct=pt.type,Lt=pt.bytesPerElement,yt=n.isWebGL2===!0&&(Ct===s.INT||Ct===s.UNSIGNED_INT||G.gpuType===yd);if(G.isInterleavedBufferAttribute){let Yt=G.data,F=Yt.stride,We=G.offset;if(Yt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<at.locationSize;Mt++)C(at.location+Mt,Yt.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Yt.meshPerAttribute*Yt.count)}else for(let Mt=0;Mt<at.locationSize;Mt++)S(at.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let Mt=0;Mt<at.locationSize;Mt++)T(at.location+Mt,ot/at.locationSize,Ct,$,F*Lt,(We+ot/at.locationSize*Mt)*Lt,yt)}else{if(G.isInstancedBufferAttribute){for(let Yt=0;Yt<at.locationSize;Yt++)C(at.location+Yt,G.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Yt=0;Yt<at.locationSize;Yt++)S(at.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let Yt=0;Yt<at.locationSize;Yt++)T(at.location+Yt,ot/at.locationSize,Ct,$,ot*Lt,ot/at.locationSize*Yt*Lt,yt)}}else if(Y!==void 0){let $=Y[j];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(at.location,$);break;case 3:s.vertexAttrib3fv(at.location,$);break;case 4:s.vertexAttrib4fv(at.location,$);break;default:s.vertexAttrib1fv(at.location,$)}}}}R()}function M(){H();for(let P in a){let U=a[P];for(let V in U){let X=U[V];for(let q in X)g(X[q].object),delete X[q];delete U[V]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;let U=a[P.id];for(let V in U){let X=U[V];for(let q in X)g(X[q].object),delete X[q];delete U[V]}delete a[P.id]}function D(P){for(let U in a){let V=a[U];if(V[P.id]===void 0)continue;let X=V[P.id];for(let q in X)g(X[q].object),delete X[q];delete V[P.id]}}function H(){J(),h=!0,l!==c&&(l=c,f(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:H,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:S,disableUnusedAttributes:R}}function nx(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function ix(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||t.has("OES_texture_float"),C=v&&S,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:R}}function sx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new An,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{let _=r?0:n,v=_*4,S=m.clippingState||null;c.value=S,S=h(g,d,v,f);for(let C=0;C!==v;++C)S[C]=e[C];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=f;v!==x;++v,S+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function rx(s){let t=new WeakMap;function e(o,a){return a===Cc?o.mapping=Us:a===Lc&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Cc||a===Lc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Oc(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var hn=class extends Do{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rs=4,Lu=[.125,.215,.35,.446,.526,.582],Hi=20,xc=new hn,Pu=new xt,vc=null,_c=0,yc=0,zi=(1+Math.sqrt(5))/2,Es=1/zi,Iu=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,zi,Es),new w(0,zi,-Es),new w(Es,0,zi),new w(-Es,0,zi),new w(zi,Es,0),new w(-zi,Es,0)],Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,_c,yc),t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ue,minFilter:ue,generateMipmaps:!1,type:Cn,format:ze,colorSpace:Te,depthBuffer:!1},i=Du(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ox(r)),this._blurMaterial=ax(r,t,e)}return i}_compileMaterial(t){let e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,xc)}_sceneToCubeUV(t,e,n,i){let a=new Se(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pu),h.toneMapping=kn,h.autoClear=!1;let f=new je({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new qt(new $i,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Pu),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):_===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let v=this._cubeSize;po(i,_*v,m>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Us||t.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;po(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Iu[(i-1)%Iu.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new qt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Hi;p>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);let m=[],_=0;for(let T=0;T<Hi;++T){let N=T/x,M=Math.exp(-N*N/2);m.push(M),T===0?_+=M:T<p&&(_+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/_;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let S=this._sizeLods[i],C=3*S*(i>v-Rs?i-v+Rs:0),R=4*(this._cubeSize-S);po(e,C,R,3*S,2*S),c.setRenderTarget(e),c.render(u,xc)}};function ox(s){let t=[],e=[],n=[],i=s,r=s-Rs+1+Lu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Rs?c=Lu[o-s+Rs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,_=new Float32Array(x*g*f),v=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let R=0;R<f;R++){let T=R%3*2/3-1,N=R>2?0:-1,M=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];_.set(M,x*g*R),v.set(d,p*g*R);let A=[R,R,R,R,R,R];S.set(A,m*g*R)}let C=new xe;C.setAttribute("position",new Ee(_,x)),C.setAttribute("uv",new Ee(v,p)),C.setAttribute("faceIndex",new Ee(S,m)),t.push(C),i>Rs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Du(s,t,e){let n=new Ie(s,t,e);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ax(s,t,e){let n=new Float32Array(Hi),i=new w(0,1,0);return new ce({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Uu(){return new ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Nu(){return new ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function cx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Cc||c===Lc,h=c===Us||c===Ns;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Hs(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Hs(s));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hx(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,S=_.length;v<S;v+=3){let C=_[v+0],R=_[v+1],T=_[v+2];d.push(C,R,R,T,T,C)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,S=_.length/3-1;v<S;v+=3){let C=v+0,R=v+1,T=v+2;d.push(C,R,R,T,T,C)}}else return;let p=new(Ld(d)?Io:Po)(d,1);p.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ux(s,t,e,n){let i=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*c),e.update(g,r,1)}function u(f,g,x){if(x===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*c,x),e.update(g,r,x)}function d(f,g,x){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let m=0;for(let _=0;_<x;_++)m+=g[_];e.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function dx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function fx(s,t){return s[0]-t[0]}function px(s,t){return Math.abs(t[1])-Math.abs(s[1])}function mx(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new Bt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let P=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],N=0;_===!0&&(N=1),v===!0&&(N=2),S===!0&&(N=3);let M=h.attributes.position.count*N,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let D=new Float32Array(M*A*4*g),H=new Lo(D,M,A,g);H.type=ni,H.needsUpdate=!0;let J=N*4;for(let U=0;U<g;U++){let V=C[U],X=R[U],q=T[U],W=M*A*4*U;for(let Y=0;Y<V.count;Y++){let j=Y*J;_===!0&&(o.fromBufferAttribute(V,Y),D[W+j+0]=o.x,D[W+j+1]=o.y,D[W+j+2]=o.z,D[W+j+3]=0),v===!0&&(o.fromBufferAttribute(X,Y),D[W+j+4]=o.x,D[W+j+5]=o.y,D[W+j+6]=o.z,D[W+j+7]=0),S===!0&&(o.fromBufferAttribute(q,Y),D[W+j+8]=o.x,D[W+j+9]=o.y,D[W+j+10]=o.z,D[W+j+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:H,size:new dt(M,A)},r.set(h,x),h.addEventListener("dispose",P)}let p=0;for(let _=0;_<d.length;_++)p+=d[_];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",m),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<f;v++){let S=g[v];S[0]=v,S[1]=d[v]}g.sort(px);for(let v=0;v<8;v++)v<f&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(fx);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let S=a[v],C=S[0],R=S[1];C!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+v)!==x[C]&&h.setAttribute("morphTarget"+v,x[C]),p&&h.getAttribute("morphNormal"+v)!==p[C]&&h.setAttribute("morphNormal"+v,p[C]),i[v]=R,m+=R):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function gx(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var yi=class extends He{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Gi,h!==Gi&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=xn),n===void 0&&h===Fs&&(n=Vi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=c!==void 0?c:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ud=new He,Nd=new yi(1,1);Nd.compareFunction=Qo;var Fd=new Lo,Od=new Nc,kd=new Uo,Fu=[],Ou=[],ku=new Float32Array(16),zu=new Float32Array(9),Bu=new Float32Array(4);function Ys(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Fu[i];if(r===void 0&&(r=new Float32Array(i),Fu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ta(s,t){let e=Ou[t];e===void 0&&(e=new Int32Array(t),Ou[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function xx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function _x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function Mx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Bu.set(n),s.uniformMatrix2fv(this.addr,!1,Bu),Re(e,n)}}function bx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;zu.set(n),s.uniformMatrix3fv(this.addr,!1,zu),Re(e,n)}}function Sx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;ku.set(n),s.uniformMatrix4fv(this.addr,!1,ku),Re(e,n)}}function wx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function Tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function Ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function Rx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function Lx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function Px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function Ix(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Nd:Ud;e.setTexture2D(t||r,i)}function Dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Od,i)}function Ux(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||kd,i)}function Nx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Fd,i)}function Fx(s){switch(s){case 5126:return xx;case 35664:return vx;case 35665:return _x;case 35666:return yx;case 35674:return Mx;case 35675:return bx;case 35676:return Sx;case 5124:case 35670:return wx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Lx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Nx}}function Ox(s,t){s.uniform1fv(this.addr,t)}function kx(s,t){let e=Ys(t,this.size,2);s.uniform2fv(this.addr,e)}function zx(s,t){let e=Ys(t,this.size,3);s.uniform3fv(this.addr,e)}function Bx(s,t){let e=Ys(t,this.size,4);s.uniform4fv(this.addr,e)}function Hx(s,t){let e=Ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vx(s,t){let e=Ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gx(s,t){let e=Ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Wx(s,t){s.uniform1iv(this.addr,t)}function Xx(s,t){s.uniform2iv(this.addr,t)}function qx(s,t){s.uniform3iv(this.addr,t)}function Yx(s,t){s.uniform4iv(this.addr,t)}function $x(s,t){s.uniform1uiv(this.addr,t)}function Kx(s,t){s.uniform2uiv(this.addr,t)}function Zx(s,t){s.uniform3uiv(this.addr,t)}function Jx(s,t){s.uniform4uiv(this.addr,t)}function jx(s,t,e){let n=this.cache,i=t.length,r=ta(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ud,r[o])}function Qx(s,t,e){let n=this.cache,i=t.length,r=ta(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Od,r[o])}function tv(s,t,e){let n=this.cache,i=t.length,r=ta(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||kd,r[o])}function ev(s,t,e){let n=this.cache,i=t.length,r=ta(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Fd,r[o])}function nv(s){switch(s){case 5126:return Ox;case 35664:return kx;case 35665:return zx;case 35666:return Bx;case 35674:return Hx;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return $x;case 36294:return Kx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return ev}}var kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fx(e.type)}},zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nv(e.type)}},Bc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function Hu(s,t){s.seq.push(t),s.map[t.id]=t}function iv(s,t,e){let n=s.name,i=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),o=Mc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Hu(e,l===void 0?new kc(a,s,t):new zc(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Bc(a),Hu(e,u)),e=u}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);iv(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Vu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var sv=37297,rv=0;function ov(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function av(s){let t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(s),n;switch(t===e?n="":t===Eo&&e===wo?n="LinearDisplayP3ToLinearSRGB":t===wo&&e===Eo&&(n="LinearSRGBToLinearDisplayP3"),s){case Te:case jo:return[n,"LinearTransferOETF"];case ae:case ul:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Gu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ov(s.getShaderSource(t),o)}else return i}function cv(s,t){let e=av(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lv(s,t){let e;switch(t){case fp:e="Linear";break;case pp:e="Reinhard";break;case mp:e="OptimizedCineon";break;case gp:e="ACESFilmic";break;case vp:e="AgX";break;case xp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function hv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function uv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}function dv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Cs(s){return s!==""}function Wu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(s){return s.replace(pv,gv)}var mv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gv(s,t){let e=Ft[t];if(e===void 0){let n=mv.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hc(e)}var xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(s){return s.replace(xv,vv)}function vv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yu(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _v(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Hf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function yv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case Zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function bv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vd:t="ENVMAP_BLENDING_MULTIPLY";break;case up:t="ENVMAP_BLENDING_MIX";break;case dp:t="ENVMAP_BLENDING_ADD";break}return t}function Sv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wv(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=_v(e),l=yv(e),h=Mv(e),u=bv(e),d=Sv(e),f=e.isWebGL2?"":hv(e),g=uv(e),x=dv(r),p=i.createProgram(),m,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Cs).join(`
`),m.length>0&&(m+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Cs).join(`
`),_.length>0&&(_+=`
`)):(m=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),_=[f,Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==kn?lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,cv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),o=Hc(o),o=Wu(o,e),o=Xu(o,e),a=Hc(a),a=Wu(a,e),a=Xu(a,e),o=qu(o),a=qu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let S=v+m+o,C=v+_+a,R=Vu(i,i.VERTEX_SHADER,S),T=Vu(i,i.FRAGMENT_SHADER,C);i.attachShader(p,R),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function N(H){if(s.debug.checkShaderErrors){let J=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(R).trim(),U=i.getShaderInfoLog(T).trim(),V=!0,X=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,R,T);else{let q=Gu(i,R,"vertex"),W=Gu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+q+`
`+W)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||U==="")&&(X=!1);X&&(H.diagnostics={runnable:V,programLog:J,vertexShader:{log:P,prefix:m},fragmentShader:{log:U,prefix:_}})}i.deleteShader(R),i.deleteShader(T),M=new Is(i,p),A=fv(i,p)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(p,sv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=T,this}var Ev=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gc(t),e.set(t,n)),n}},Gc=class{constructor(t){this.id=Ev++,this.code=t,this.usedTimes=0}};function Tv(s,t,e,n,i,r,o){let a=new xr,c=new Vc,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,A,D,H,J){let P=H.fog,U=J.geometry,V=M.isMeshStandardMaterial?H.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),q=X&&X.mapping===Zo?X.image.height:null,W=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=Y!==void 0?Y.length:0,at=0;U.morphAttributes.position!==void 0&&(at=1),U.morphAttributes.normal!==void 0&&(at=2),U.morphAttributes.color!==void 0&&(at=3);let G,$,ot,pt;if(W){let Xe=Fn[W];G=Xe.vertexShader,$=Xe.fragmentShader}else G=M.vertexShader,$=M.fragmentShader,c.update(M),ot=c.getVertexShaderID(M),pt=c.getFragmentShaderID(M);let ut=s.getRenderTarget(),Ct=J.isInstancedMesh===!0,Lt=J.isBatchedMesh===!0,yt=!!M.map,Yt=!!M.matcap,F=!!X,We=!!M.aoMap,Mt=!!M.lightMap,It=!!M.bumpMap,ft=!!M.normalMap,le=!!M.displacementMap,Ot=!!M.emissiveMap,E=!!M.metalnessMap,y=!!M.roughnessMap,k=M.anisotropy>0,Q=M.clearcoat>0,Z=M.iridescence>0,tt=M.sheen>0,mt=M.transmission>0,rt=k&&!!M.anisotropyMap,lt=Q&&!!M.clearcoatMap,wt=Q&&!!M.clearcoatNormalMap,kt=Q&&!!M.clearcoatRoughnessMap,K=Z&&!!M.iridescenceMap,Qt=Z&&!!M.iridescenceThicknessMap,Wt=tt&&!!M.sheenColorMap,Pt=tt&&!!M.sheenRoughnessMap,_t=!!M.specularMap,ht=!!M.specularColorMap,Nt=!!M.specularIntensityMap,jt=mt&&!!M.transmissionMap,pe=mt&&!!M.thicknessMap,Ht=!!M.gradientMap,et=!!M.alphaMap,L=M.alphaTest>0,it=!!M.alphaHash,st=!!M.extensions,Tt=!!U.attributes.uv1,bt=!!U.attributes.uv2,ee=!!U.attributes.uv3,ne=kn;return M.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ne=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:$,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:pt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Lt,instancing:Ct,instancingColor:Ct&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Te,map:yt,matcap:Yt,envMap:F,envMapMode:F&&X.mapping,envMapCubeUVHeight:q,aoMap:We,lightMap:Mt,bumpMap:It,normalMap:ft,displacementMap:d&&le,emissiveMap:Ot,normalMapObjectSpace:ft&&M.normalMapType===Pp,normalMapTangentSpace:ft&&M.normalMapType===Cd,metalnessMap:E,roughnessMap:y,anisotropy:k,anisotropyMap:rt,clearcoat:Q,clearcoatMap:lt,clearcoatNormalMap:wt,clearcoatRoughnessMap:kt,iridescence:Z,iridescenceMap:K,iridescenceThicknessMap:Qt,sheen:tt,sheenColorMap:Wt,sheenRoughnessMap:Pt,specularMap:_t,specularColorMap:ht,specularIntensityMap:Nt,transmission:mt,transmissionMap:jt,thicknessMap:pe,gradientMap:Ht,opaque:M.transparent===!1&&M.blending===Ls,alphaMap:et,alphaTest:L,alphaHash:it,combine:M.combine,mapUv:yt&&x(M.map.channel),aoMapUv:We&&x(M.aoMap.channel),lightMapUv:Mt&&x(M.lightMap.channel),bumpMapUv:It&&x(M.bumpMap.channel),normalMapUv:ft&&x(M.normalMap.channel),displacementMapUv:le&&x(M.displacementMap.channel),emissiveMapUv:Ot&&x(M.emissiveMap.channel),metalnessMapUv:E&&x(M.metalnessMap.channel),roughnessMapUv:y&&x(M.roughnessMap.channel),anisotropyMapUv:rt&&x(M.anisotropyMap.channel),clearcoatMapUv:lt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(M.sheenRoughnessMap.channel),specularMapUv:_t&&x(M.specularMap.channel),specularColorMapUv:ht&&x(M.specularColorMap.channel),specularIntensityMapUv:Nt&&x(M.specularIntensityMap.channel),transmissionMapUv:jt&&x(M.transmissionMap.channel),thicknessMapUv:pe&&x(M.thicknessMap.channel),alphaMapUv:et&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ft||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Tt,vertexUv2s:bt,vertexUv3s:ee,pointsUvs:J.isPoints===!0&&!!U.attributes.uv&&(yt||et),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:at,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,useLegacyLights:s._useLegacyLights,decodeVideoTexture:yt&&M.map.isVideoTexture===!0&&Kt.getTransfer(M.map.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:st&&M.extensions.derivatives===!0,extensionFragDepth:st&&M.extensions.fragDepth===!0,extensionDrawBuffers:st&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:st&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:st&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)A.push(D),A.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(A,M),v(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){let A=g[M.type],D;if(A){let H=Fn[A];D=mm.clone(H.uniforms)}else D=M.uniforms;return D}function C(M,A){let D;for(let H=0,J=l.length;H<J;H++){let P=l[H];if(P.cacheKey===A){D=P,++D.usedTimes;break}}return D===void 0&&(D=new wv(s,A,M,r),l.push(D)),D}function R(M){if(--M.usedTimes===0){let A=l.indexOf(M);l[A]=l[l.length-1],l.pop(),M.destroy()}}function T(M){c.remove(M)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:N}}function Av(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Rv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function $u(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ku(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function c(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Rv),n.length>1&&n.sort(d||$u),i.length>1&&i.sort(d||$u)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Cv(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ku,s.set(n,[o])):i>=r.length?(o=new Ku,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new xt};break;case"SpotLight":e={position:new w,direction:new w,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new w,halfWidth:new w,halfHeight:new w};break}return s[t.id]=e,e}}}function Pv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Iv=0;function Dv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Uv(s,t){let e=new Lv,n=Pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new w);let r=new w,o=new vt,a=new vt;function c(h,u){let d=0,f=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let x=0,p=0,m=0,_=0,v=0,S=0,C=0,R=0,T=0,N=0,M=0;h.sort(Dv);let A=u===!0?Math.PI:1;for(let H=0,J=h.length;H<J;H++){let P=h[H],U=P.color,V=P.intensity,X=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*V*A,f+=U.g*V*A,g+=U.b*V*A;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],V);M++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let Y=P.shadow,j=n.get(P);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=q,i.directionalShadowMatrix[x]=P.shadow.matrix,S++}i.directional[x]=W,x++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(V*A),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[m]=W;let Y=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,Y.updateMatrices(P),P.castShadow&&N++),i.spotLightMatrix[m]=Y.matrix,P.castShadow){let j=n.get(P);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.spotShadow[m]=j,i.spotShadowMap[m]=q,R++}m++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(U).multiplyScalar(V),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=W,_++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*A),W.distance=P.distance,W.decay=P.decay,P.castShadow){let Y=P.shadow,j=n.get(P);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=P.shadow.matrix,C++}i.point[p]=W,p++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(V*A),W.groundColor.copy(P.groundColor).multiplyScalar(V*A),i.hemi[v]=W,v++}}_>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let D=i.hash;(D.directionalLength!==x||D.pointLength!==p||D.spotLength!==m||D.rectAreaLength!==_||D.hemiLength!==v||D.numDirectionalShadows!==S||D.numPointShadows!==C||D.numSpotShadows!==R||D.numSpotMaps!==T||D.numLightProbes!==M)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=_,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=R+T-N,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=M,D.directionalLength=x,D.pointLength=p,D.spotLength=m,D.rectAreaLength=_,D.hemiLength=v,D.numDirectionalShadows=S,D.numPointShadows=C,D.numSpotShadows=R,D.numSpotMaps=T,D.numLightProbes=M,i.version=Iv++)}function l(h,u){let d=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let S=h[_];if(S.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),d++}else if(S.isSpotLight){let C=i.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let C=i.rectArea[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let C=i.point[f];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let C=i.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:i}}function Zu(s,t){let e=new Uv(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Nv(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Zu(s,t),e.set(r,[c])):o>=a.length?(c=new Zu(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var _r=class extends ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wc=class extends ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
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
}`;function kv(s,t,e){let n=new vr,i=new dt,r=new dt,o=new Bt,a=new _r({depthPacking:Lp}),c=new Wc,l={},h=e.maxTextureSize,u={[zn]:Be,[Be]:zn,[on]:on},d=new ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Fv,fragmentShader:Ov}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new xe;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new qt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let m=this.type;this.render=function(R,T,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let M=s.getRenderTarget(),A=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),H=s.state;H.setBlending(xi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let J=m!==ei&&this.type===ei,P=m===ei&&this.type!==ei;for(let U=0,V=R.length;U<V;U++){let X=R[U],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let W=q.getFrameExtents();if(i.multiply(W),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,q.mapSize.y=r.y)),q.map===null||J===!0||P===!0){let j=this.type!==ei?{minFilter:be,magFilter:be}:{};q.map!==null&&q.map.dispose(),q.map=new Ie(i.x,i.y,j),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let Y=q.getViewportCount();for(let j=0;j<Y;j++){let at=q.getViewport(j);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),H.viewport(o),q.updateMatrices(X,j),n=q.getFrustum(),S(T,N,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===ei&&_(q,N),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(M,A,D)};function _(R,T){let N=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ie(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(T,null,N,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(T,null,N,f,x,null)}function v(R,T,N,M){let A=null,D=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)A=D;else if(A=N.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=A.uuid,J=T.uuid,P=l[H];P===void 0&&(P={},l[H]=P);let U=P[J];U===void 0&&(U=A.clone(),P[J]=U,T.addEventListener("dispose",C)),A=U}if(A.visible=T.visible,A.wireframe=T.wireframe,M===ei?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:u[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,N.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let H=s.properties.get(A);H.light=N}return A}function S(R,T,N,M,A){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===ei)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let J=t.update(R),P=R.material;if(Array.isArray(P)){let U=J.groups;for(let V=0,X=U.length;V<X;V++){let q=U[V],W=P[q.materialIndex];if(W&&W.visible){let Y=v(R,W,M,A);R.onBeforeShadow(s,R,T,N,J,Y,q),s.renderBufferDirect(N,null,J,Y,R,q),R.onAfterShadow(s,R,T,N,J,Y,q)}}}else if(P.visible){let U=v(R,P,M,A);R.onBeforeShadow(s,R,T,N,J,U,null),s.renderBufferDirect(N,null,J,U,R,null),R.onAfterShadow(s,R,T,N,J,U,null)}}let H=R.children;for(let J=0,P=H.length;J<P;J++)S(H[J],T,N,M,A)}function C(R){R.target.removeEventListener("dispose",C);for(let N in l){let M=l[N],A=R.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function zv(s,t,e){let n=e.isWebGL2;function i(){let L=!1,it=new Bt,st=null,Tt=new Bt(0,0,0,0);return{setMask:function(bt){st!==bt&&!L&&(s.colorMask(bt,bt,bt,bt),st=bt)},setLocked:function(bt){L=bt},setClear:function(bt,ee,ne,Ce,Xe){Xe===!0&&(bt*=Ce,ee*=Ce,ne*=Ce),it.set(bt,ee,ne,Ce),Tt.equals(it)===!1&&(s.clearColor(bt,ee,ne,Ce),Tt.copy(it))},reset:function(){L=!1,st=null,Tt.set(-1,0,0,0)}}}function r(){let L=!1,it=null,st=null,Tt=null;return{setTest:function(bt){bt?Lt(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(bt){it!==bt&&!L&&(s.depthMask(bt),it=bt)},setFunc:function(bt){if(st!==bt){switch(bt){case sp:s.depthFunc(s.NEVER);break;case rp:s.depthFunc(s.ALWAYS);break;case op:s.depthFunc(s.LESS);break;case Mo:s.depthFunc(s.LEQUAL);break;case ap:s.depthFunc(s.EQUAL);break;case cp:s.depthFunc(s.GEQUAL);break;case lp:s.depthFunc(s.GREATER);break;case hp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}st=bt}},setLocked:function(bt){L=bt},setClear:function(bt){Tt!==bt&&(s.clearDepth(bt),Tt=bt)},reset:function(){L=!1,it=null,st=null,Tt=null}}}function o(){let L=!1,it=null,st=null,Tt=null,bt=null,ee=null,ne=null,Ce=null,Xe=null;return{setTest:function(ie){L||(ie?Lt(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(ie){it!==ie&&!L&&(s.stencilMask(ie),it=ie)},setFunc:function(ie,qe,Nn){(st!==ie||Tt!==qe||bt!==Nn)&&(s.stencilFunc(ie,qe,Nn),st=ie,Tt=qe,bt=Nn)},setOp:function(ie,qe,Nn){(ee!==ie||ne!==qe||Ce!==Nn)&&(s.stencilOp(ie,qe,Nn),ee=ie,ne=qe,Ce=Nn)},setLocked:function(ie){L=ie},setClear:function(ie){Xe!==ie&&(s.clearStencil(ie),Xe=ie)},reset:function(){L=!1,it=null,st=null,Tt=null,bt=null,ee=null,ne=null,Ce=null,Xe=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],p=null,m=!1,_=null,v=null,S=null,C=null,R=null,T=null,N=null,M=new xt(0,0,0),A=0,D=!1,H=null,J=null,P=null,U=null,V=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=W>=2);let j=null,at={},G=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ot=new Bt().fromArray(G),pt=new Bt().fromArray($);function ut(L,it,st,Tt){let bt=new Uint8Array(4),ee=s.createTexture();s.bindTexture(L,ee),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<st;ne++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(it,0,s.RGBA,1,1,Tt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(it+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return ee}let Ct={};Ct[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),Ct[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ct[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ct[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Lt(s.DEPTH_TEST),c.setFunc(Mo),Ot(!1),E(Ph),Lt(s.CULL_FACE),ft(xi);function Lt(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function yt(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Yt(L,it){return f[L]!==it?(s.bindFramebuffer(L,it),f[L]=it,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=it),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=it)),!0):!1}function F(L,it){let st=x,Tt=!1;if(L)if(st=g.get(it),st===void 0&&(st=[],g.set(it,st)),L.isWebGLMultipleRenderTargets){let bt=L.texture;if(st.length!==bt.length||st[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,ne=bt.length;ee<ne;ee++)st[ee]=s.COLOR_ATTACHMENT0+ee;st.length=bt.length,Tt=!0}}else st[0]!==s.COLOR_ATTACHMENT0&&(st[0]=s.COLOR_ATTACHMENT0,Tt=!0);else st[0]!==s.BACK&&(st[0]=s.BACK,Tt=!0);Tt&&(e.isWebGL2?s.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function We(L){return p!==L?(s.useProgram(L),p=L,!0):!1}let Mt={[Bi]:s.FUNC_ADD,[Gf]:s.FUNC_SUBTRACT,[Wf]:s.FUNC_REVERSE_SUBTRACT};if(n)Mt[Uh]=s.MIN,Mt[Nh]=s.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(Mt[Uh]=L.MIN_EXT,Mt[Nh]=L.MAX_EXT)}let It={[Xf]:s.ZERO,[qf]:s.ONE,[Yf]:s.SRC_COLOR,[Ac]:s.SRC_ALPHA,[Qf]:s.SRC_ALPHA_SATURATE,[Jf]:s.DST_COLOR,[Kf]:s.DST_ALPHA,[$f]:s.ONE_MINUS_SRC_COLOR,[Rc]:s.ONE_MINUS_SRC_ALPHA,[jf]:s.ONE_MINUS_DST_COLOR,[Zf]:s.ONE_MINUS_DST_ALPHA,[tp]:s.CONSTANT_COLOR,[ep]:s.ONE_MINUS_CONSTANT_COLOR,[np]:s.CONSTANT_ALPHA,[ip]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(L,it,st,Tt,bt,ee,ne,Ce,Xe,ie){if(L===xi){m===!0&&(yt(s.BLEND),m=!1);return}if(m===!1&&(Lt(s.BLEND),m=!0),L!==Vf){if(L!==_||ie!==D){if((v!==Bi||R!==Bi)&&(s.blendEquation(s.FUNC_ADD),v=Bi,R=Bi),ie)switch(L){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ds:s.blendFunc(s.ONE,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ds:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,C=null,T=null,N=null,M.set(0,0,0),A=0,_=L,D=ie}return}bt=bt||it,ee=ee||st,ne=ne||Tt,(it!==v||bt!==R)&&(s.blendEquationSeparate(Mt[it],Mt[bt]),v=it,R=bt),(st!==S||Tt!==C||ee!==T||ne!==N)&&(s.blendFuncSeparate(It[st],It[Tt],It[ee],It[ne]),S=st,C=Tt,T=ee,N=ne),(Ce.equals(M)===!1||Xe!==A)&&(s.blendColor(Ce.r,Ce.g,Ce.b,Xe),M.copy(Ce),A=Xe),_=L,D=!1}function le(L,it){L.side===on?yt(s.CULL_FACE):Lt(s.CULL_FACE);let st=L.side===Be;it&&(st=!st),Ot(st),L.blending===Ls&&L.transparent===!1?ft(xi):ft(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let Tt=L.stencilWrite;l.setTest(Tt),Tt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),k(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Lt(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(L){H!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),H=L)}function E(L){L!==zf?(Lt(s.CULL_FACE),L!==J&&(L===Ph?s.cullFace(s.BACK):L===Bf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),J=L}function y(L){L!==P&&(q&&s.lineWidth(L),P=L)}function k(L,it,st){L?(Lt(s.POLYGON_OFFSET_FILL),(U!==it||V!==st)&&(s.polygonOffset(it,st),U=it,V=st)):yt(s.POLYGON_OFFSET_FILL)}function Q(L){L?Lt(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function Z(L){L===void 0&&(L=s.TEXTURE0+X-1),j!==L&&(s.activeTexture(L),j=L)}function tt(L,it,st){st===void 0&&(j===null?st=s.TEXTURE0+X-1:st=j);let Tt=at[st];Tt===void 0&&(Tt={type:void 0,texture:void 0},at[st]=Tt),(Tt.type!==L||Tt.texture!==it)&&(j!==st&&(s.activeTexture(st),j=st),s.bindTexture(L,it||Ct[L]),Tt.type=L,Tt.texture=it)}function mt(){let L=at[j];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function rt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){ot.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function jt(L){pt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),pt.copy(L))}function pe(L,it){let st=u.get(it);st===void 0&&(st=new WeakMap,u.set(it,st));let Tt=st.get(L);Tt===void 0&&(Tt=s.getUniformBlockIndex(it,L.name),st.set(L,Tt))}function Ht(L,it){let Tt=u.get(it).get(L);h.get(it)!==Tt&&(s.uniformBlockBinding(it,Tt,L.__bindingPointIndex),h.set(it,Tt))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},j=null,at={},f={},g=new WeakMap,x=[],p=null,m=!1,_=null,v=null,S=null,C=null,R=null,T=null,N=null,M=new xt(0,0,0),A=0,D=!1,H=null,J=null,P=null,U=null,V=null,ot.set(0,0,s.canvas.width,s.canvas.height),pt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Lt,disable:yt,bindFramebuffer:Yt,drawBuffers:F,useProgram:We,setBlending:ft,setMaterial:le,setFlipSided:Ot,setCullFace:E,setLineWidth:y,setPolygonOffset:k,setScissorTest:Q,activeTexture:Z,bindTexture:tt,unbindTexture:mt,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:_t,texImage3D:ht,updateUBOMapping:pe,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:Pt,texSubImage2D:wt,texSubImage3D:kt,compressedTexSubImage2D:K,compressedTexSubImage3D:Qt,scissor:Nt,viewport:jt,reset:et}}function Bv(s,t,e,n,i,r,o){let a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):gr("canvas")}function x(E,y,k,Q){let Z=1;if((E.width>Q||E.height>Q)&&(Z=Q/Math.max(E.width,E.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let tt=y?Ao:Math.floor,mt=tt(Z*E.width),rt=tt(Z*E.height);u===void 0&&(u=g(mt,rt));let lt=k?g(mt,rt):u;return lt.width=mt,lt.height=rt,lt.getContext("2d").drawImage(E,0,0,mt,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+mt+"x"+rt+")."),lt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return Dc(E.width)&&Dc(E.height)}function m(E){return a?!1:E.wrapS!==an||E.wrapT!==an||E.minFilter!==be&&E.minFilter!==ue}function _(E,y){return E.generateMipmaps&&y&&E.minFilter!==be&&E.minFilter!==ue}function v(E){s.generateMipmap(E)}function S(E,y,k,Q,Z=!1){if(a===!1)return y;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let tt=y;if(y===s.RED&&(k===s.FLOAT&&(tt=s.R32F),k===s.HALF_FLOAT&&(tt=s.R16F),k===s.UNSIGNED_BYTE&&(tt=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(tt=s.R8UI),k===s.UNSIGNED_SHORT&&(tt=s.R16UI),k===s.UNSIGNED_INT&&(tt=s.R32UI),k===s.BYTE&&(tt=s.R8I),k===s.SHORT&&(tt=s.R16I),k===s.INT&&(tt=s.R32I)),y===s.RG&&(k===s.FLOAT&&(tt=s.RG32F),k===s.HALF_FLOAT&&(tt=s.RG16F),k===s.UNSIGNED_BYTE&&(tt=s.RG8)),y===s.RGBA){let mt=Z?So:Kt.getTransfer(Q);k===s.FLOAT&&(tt=s.RGBA32F),k===s.HALF_FLOAT&&(tt=s.RGBA16F),k===s.UNSIGNED_BYTE&&(tt=mt===oe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function C(E,y,k){return _(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==be&&E.minFilter!==ue?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function R(E){return E===be||E===bo||E===hr?s.NEAREST:s.LINEAR}function T(E){let y=E.target;y.removeEventListener("dispose",T),M(y),y.isVideoTexture&&h.delete(y)}function N(E){let y=E.target;y.removeEventListener("dispose",N),D(y)}function M(E){let y=n.get(E);if(y.__webglInit===void 0)return;let k=E.source,Q=d.get(k);if(Q){let Z=Q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(E),Object.keys(Q).length===0&&d.delete(k)}n.remove(E)}function A(E){let y=n.get(E);s.deleteTexture(y.__webglTexture);let k=E.source,Q=d.get(k);delete Q[y.__cacheKey],o.memory.textures--}function D(E){let y=E.texture,k=n.get(E),Q=n.get(y);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(k.__webglFramebuffer[Z]))for(let tt=0;tt<k.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(k.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(k.__webglFramebuffer[Z]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[Z])}else{if(Array.isArray(k.__webglFramebuffer))for(let Z=0;Z<k.__webglFramebuffer.length;Z++)s.deleteFramebuffer(k.__webglFramebuffer[Z]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Z=0;Z<k.__webglColorRenderbuffer.length;Z++)k.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[Z]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Z=0,tt=y.length;Z<tt;Z++){let mt=n.get(y[Z]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(y[Z])}n.remove(y),n.remove(E)}let H=0;function J(){H=0}function P(){let E=H;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),H+=1,E}function U(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function V(E,y){let k=n.get(E);if(E.isVideoTexture&&le(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(k,E,y);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function X(E,y){let k=n.get(E);if(E.version>0&&k.__version!==E.version){ot(k,E,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function q(E,y){let k=n.get(E);if(E.version>0&&k.__version!==E.version){ot(k,E,y);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function W(E,y){let k=n.get(E);if(E.version>0&&k.__version!==E.version){pt(k,E,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}let Y={[Xi]:s.REPEAT,[an]:s.CLAMP_TO_EDGE,[mr]:s.MIRRORED_REPEAT},j={[be]:s.NEAREST,[bo]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[ue]:s.LINEAR,[ll]:s.LINEAR_MIPMAP_NEAREST,[Bn]:s.LINEAR_MIPMAP_LINEAR},at={[Ip]:s.NEVER,[kp]:s.ALWAYS,[Dp]:s.LESS,[Qo]:s.LEQUAL,[Up]:s.EQUAL,[Op]:s.GEQUAL,[Np]:s.GREATER,[Fp]:s.NOTEQUAL};function G(E,y,k){if(k?(s.texParameteri(E,s.TEXTURE_WRAP_S,Y[y.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Y[y.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Y[y.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,j[y.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,j[y.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==an||y.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,R(y.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==be&&y.minFilter!==ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,at[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===be||y.minFilter!==hr&&y.minFilter!==Bn||y.type===ni&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===Cn&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function $(E,y){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",T));let Q=y.source,Z=d.get(Q);Z===void 0&&(Z={},d.set(Q,Z));let tt=U(y);if(tt!==E.__cacheKey){Z[tt]===void 0&&(Z[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[tt].usedTimes++;let mt=Z[E.__cacheKey];mt!==void 0&&(Z[E.__cacheKey].usedTimes--,mt.usedTimes===0&&A(y)),E.__cacheKey=tt,E.__webglTexture=Z[tt].texture}return k}function ot(E,y,k){let Q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=s.TEXTURE_3D);let Z=$(E,y),tt=y.source;e.bindTexture(Q,E.__webglTexture,s.TEXTURE0+k);let mt=n.get(tt);if(tt.version!==mt.__version||Z===!0){e.activeTexture(s.TEXTURE0+k);let rt=Kt.getPrimaries(Kt.workingColorSpace),lt=y.colorSpace===Je?null:Kt.getPrimaries(y.colorSpace),wt=y.colorSpace===Je||rt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let kt=m(y)&&p(y.image)===!1,K=x(y.image,kt,!1,i.maxTextureSize);K=Ot(y,K);let Qt=p(K)||a,Wt=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type),_t=S(y.internalFormat,Wt,Pt,y.colorSpace,y.isVideoTexture);G(Q,y,Qt);let ht,Nt=y.mipmaps,jt=a&&y.isVideoTexture!==!0&&_t!==Td,pe=mt.__version===void 0||Z===!0,Ht=C(y,K,Qt);if(y.isDepthTexture)_t=s.DEPTH_COMPONENT,a?y.type===ni?_t=s.DEPTH_COMPONENT32F:y.type===xn?_t=s.DEPTH_COMPONENT24:y.type===Vi?_t=s.DEPTH24_STENCIL8:_t=s.DEPTH_COMPONENT16:y.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Gi&&_t===s.DEPTH_COMPONENT&&y.type!==hl&&y.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=xn,Pt=r.convert(y.type)),y.format===Fs&&_t===s.DEPTH_COMPONENT&&(_t=s.DEPTH_STENCIL,y.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Vi,Pt=r.convert(y.type))),pe&&(jt?e.texStorage2D(s.TEXTURE_2D,1,_t,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,_t,K.width,K.height,0,Wt,Pt,null));else if(y.isDataTexture)if(Nt.length>0&&Qt){jt&&pe&&e.texStorage2D(s.TEXTURE_2D,Ht,_t,Nt[0].width,Nt[0].height);for(let et=0,L=Nt.length;et<L;et++)ht=Nt[et],jt?e.texSubImage2D(s.TEXTURE_2D,et,0,0,ht.width,ht.height,Wt,Pt,ht.data):e.texImage2D(s.TEXTURE_2D,et,_t,ht.width,ht.height,0,Wt,Pt,ht.data);y.generateMipmaps=!1}else jt?(pe&&e.texStorage2D(s.TEXTURE_2D,Ht,_t,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,Wt,Pt,K.data)):e.texImage2D(s.TEXTURE_2D,0,_t,K.width,K.height,0,Wt,Pt,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){jt&&pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,_t,Nt[0].width,Nt[0].height,K.depth);for(let et=0,L=Nt.length;et<L;et++)ht=Nt[et],y.format!==ze?Wt!==null?jt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,K.depth,Wt,ht.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,_t,ht.width,ht.height,K.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,K.depth,Wt,Pt,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,_t,ht.width,ht.height,K.depth,0,Wt,Pt,ht.data)}else{jt&&pe&&e.texStorage2D(s.TEXTURE_2D,Ht,_t,Nt[0].width,Nt[0].height);for(let et=0,L=Nt.length;et<L;et++)ht=Nt[et],y.format!==ze?Wt!==null?jt?e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,ht.width,ht.height,Wt,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,et,_t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage2D(s.TEXTURE_2D,et,0,0,ht.width,ht.height,Wt,Pt,ht.data):e.texImage2D(s.TEXTURE_2D,et,_t,ht.width,ht.height,0,Wt,Pt,ht.data)}else if(y.isDataArrayTexture)jt?(pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,_t,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Wt,Pt,K.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,K.width,K.height,K.depth,0,Wt,Pt,K.data);else if(y.isData3DTexture)jt?(pe&&e.texStorage3D(s.TEXTURE_3D,Ht,_t,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Wt,Pt,K.data)):e.texImage3D(s.TEXTURE_3D,0,_t,K.width,K.height,K.depth,0,Wt,Pt,K.data);else if(y.isFramebufferTexture){if(pe)if(jt)e.texStorage2D(s.TEXTURE_2D,Ht,_t,K.width,K.height);else{let et=K.width,L=K.height;for(let it=0;it<Ht;it++)e.texImage2D(s.TEXTURE_2D,it,_t,et,L,0,Wt,Pt,null),et>>=1,L>>=1}}else if(Nt.length>0&&Qt){jt&&pe&&e.texStorage2D(s.TEXTURE_2D,Ht,_t,Nt[0].width,Nt[0].height);for(let et=0,L=Nt.length;et<L;et++)ht=Nt[et],jt?e.texSubImage2D(s.TEXTURE_2D,et,0,0,Wt,Pt,ht):e.texImage2D(s.TEXTURE_2D,et,_t,Wt,Pt,ht);y.generateMipmaps=!1}else jt?(pe&&e.texStorage2D(s.TEXTURE_2D,Ht,_t,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Wt,Pt,K)):e.texImage2D(s.TEXTURE_2D,0,_t,Wt,Pt,K);_(y,Qt)&&v(Q),mt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function pt(E,y,k){if(y.image.length!==6)return;let Q=$(E,y),Z=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+k);let tt=n.get(Z);if(Z.version!==tt.__version||Q===!0){e.activeTexture(s.TEXTURE0+k);let mt=Kt.getPrimaries(Kt.workingColorSpace),rt=y.colorSpace===Je?null:Kt.getPrimaries(y.colorSpace),lt=y.colorSpace===Je||mt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let wt=y.isCompressedTexture||y.image[0].isCompressedTexture,kt=y.image[0]&&y.image[0].isDataTexture,K=[];for(let et=0;et<6;et++)!wt&&!kt?K[et]=x(y.image[et],!1,!0,i.maxCubemapSize):K[et]=kt?y.image[et].image:y.image[et],K[et]=Ot(y,K[et]);let Qt=K[0],Wt=p(Qt)||a,Pt=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),ht=S(y.internalFormat,Pt,_t,y.colorSpace),Nt=a&&y.isVideoTexture!==!0,jt=tt.__version===void 0||Q===!0,pe=C(y,Qt,Wt);G(s.TEXTURE_CUBE_MAP,y,Wt);let Ht;if(wt){Nt&&jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pe,ht,Qt.width,Qt.height);for(let et=0;et<6;et++){Ht=K[et].mipmaps;for(let L=0;L<Ht.length;L++){let it=Ht[L];y.format!==ze?Pt!==null?Nt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,L,0,0,it.width,it.height,Pt,it.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,L,ht,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,L,0,0,it.width,it.height,Pt,_t,it.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,L,ht,it.width,it.height,0,Pt,_t,it.data)}}}else{Ht=y.mipmaps,Nt&&jt&&(Ht.length>0&&pe++,e.texStorage2D(s.TEXTURE_CUBE_MAP,pe,ht,K[0].width,K[0].height));for(let et=0;et<6;et++)if(kt){Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,K[et].width,K[et].height,Pt,_t,K[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ht,K[et].width,K[et].height,0,Pt,_t,K[et].data);for(let L=0;L<Ht.length;L++){let st=Ht[L].image[et].image;Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,L+1,0,0,st.width,st.height,Pt,_t,st.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,L+1,ht,st.width,st.height,0,Pt,_t,st.data)}}else{Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Pt,_t,K[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ht,Pt,_t,K[et]);for(let L=0;L<Ht.length;L++){let it=Ht[L];Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,L+1,0,0,Pt,_t,it.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,L+1,ht,Pt,_t,it.image[et])}}}_(y,Wt)&&v(s.TEXTURE_CUBE_MAP),tt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ut(E,y,k,Q,Z,tt){let mt=r.convert(k.format,k.colorSpace),rt=r.convert(k.type),lt=S(k.internalFormat,mt,rt,k.colorSpace);if(!n.get(y).__hasExternalTextures){let kt=Math.max(1,y.width>>tt),K=Math.max(1,y.height>>tt);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,tt,lt,kt,K,y.depth,0,mt,rt,null):e.texImage2D(Z,tt,lt,kt,K,0,mt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),ft(y)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,Z,n.get(k).__webglTexture,0,It(y)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,Z,n.get(k).__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(E,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let Q=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||ft(y)){let Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===ni?Q=s.DEPTH_COMPONENT32F:Z.type===xn&&(Q=s.DEPTH_COMPONENT24));let tt=It(y);ft(y)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,Q,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Q,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){let Q=It(y);k&&ft(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,y.width,y.height):ft(y)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{let Q=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<Q.length;Z++){let tt=Q[Z],mt=r.convert(tt.format,tt.colorSpace),rt=r.convert(tt.type),lt=S(tt.internalFormat,mt,rt,tt.colorSpace),wt=It(y);k&&ft(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,lt,y.width,y.height):ft(y)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,lt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,lt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);let Q=n.get(y.depthTexture).__webglTexture,Z=It(y);if(y.depthTexture.format===Gi)ft(y)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Fs)ft(y)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function yt(E){let y=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Lt(y.__webglFramebuffer,E)}else if(k){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=s.createRenderbuffer(),Ct(y.__webglDepthbuffer[Q],E,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Ct(y.__webglDepthbuffer,E,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(E,y,k){let Q=n.get(E);y!==void 0&&ut(Q.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&yt(E)}function F(E){let y=E.texture,k=n.get(E),Q=n.get(y);E.addEventListener("dispose",N),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=y.version,o.memory.textures++);let Z=E.isWebGLCubeRenderTarget===!0,tt=E.isWebGLMultipleRenderTargets===!0,mt=p(E)||a;if(Z){k.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[rt]=[];for(let lt=0;lt<y.mipmaps.length;lt++)k.__webglFramebuffer[rt][lt]=s.createFramebuffer()}else k.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)k.__webglFramebuffer[rt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(tt)if(i.drawBuffers){let rt=E.texture;for(let lt=0,wt=rt.length;lt<wt;lt++){let kt=n.get(rt[lt]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&ft(E)===!1){let rt=tt?y:[y];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<rt.length;lt++){let wt=rt[lt];k.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);let kt=r.convert(wt.format,wt.colorSpace),K=r.convert(wt.type),Qt=S(wt.internalFormat,kt,K,wt.colorSpace,E.isXRRenderTarget===!0),Wt=It(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,Qt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ct(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),G(s.TEXTURE_CUBE_MAP,y,mt);for(let rt=0;rt<6;rt++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let lt=0;lt<y.mipmaps.length;lt++)ut(k.__webglFramebuffer[rt][lt],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,lt);else ut(k.__webglFramebuffer[rt],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);_(y,mt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){let rt=E.texture;for(let lt=0,wt=rt.length;lt<wt;lt++){let kt=rt[lt],K=n.get(kt);e.bindTexture(s.TEXTURE_2D,K.__webglTexture),G(s.TEXTURE_2D,kt,mt),ut(k.__webglFramebuffer,E,kt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),_(kt,mt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?rt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,Q.__webglTexture),G(rt,y,mt),a&&y.mipmaps&&y.mipmaps.length>0)for(let lt=0;lt<y.mipmaps.length;lt++)ut(k.__webglFramebuffer[lt],E,y,s.COLOR_ATTACHMENT0,rt,lt);else ut(k.__webglFramebuffer,E,y,s.COLOR_ATTACHMENT0,rt,0);_(y,mt)&&v(rt),e.unbindTexture()}E.depthBuffer&&yt(E)}function We(E){let y=p(E)||a,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,Z=k.length;Q<Z;Q++){let tt=k[Q];if(_(tt,y)){let mt=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,rt=n.get(tt).__webglTexture;e.bindTexture(mt,rt),v(mt),e.unbindTexture()}}}function Mt(E){if(a&&E.samples>0&&ft(E)===!1){let y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,Q=E.height,Z=s.COLOR_BUFFER_BIT,tt=[],mt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=n.get(E),lt=E.isWebGLMultipleRenderTargets===!0;if(lt)for(let wt=0;wt<y.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){tt.push(s.COLOR_ATTACHMENT0+wt),E.depthBuffer&&tt.push(mt);let kt=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(kt===!1&&(E.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),lt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,rt.__webglColorRenderbuffer[wt]),kt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[mt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[mt])),lt){let K=n.get(y[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,k,Q,0,0,k,Q,Z,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let wt=0;wt<y.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,rt.__webglColorRenderbuffer[wt]);let kt=n.get(y[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function It(E){return Math.min(i.maxSamples,E.samples)}function ft(E){let y=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function le(E){let y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Ot(E,y){let k=E.colorSpace,Q=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ic||k!==Te&&k!==Je&&(Kt.getTransfer(k)===oe?a===!1?t.has("EXT_sRGB")===!0&&Q===ze?(E.format=Ic,E.minFilter=ue,E.generateMipmaps=!1):y=Ro.sRGBToLinear(y):(Q!==ze||Z!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ft}function Hv(s,t,e){let n=e.isWebGL2;function i(r,o=Je){let a,c=Kt.getTransfer(o);if(r===vi)return s.UNSIGNED_BYTE;if(r===Md)return s.UNSIGNED_SHORT_4_4_4_4;if(r===bd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===yp)return s.BYTE;if(r===Mp)return s.SHORT;if(r===hl)return s.UNSIGNED_SHORT;if(r===yd)return s.INT;if(r===xn)return s.UNSIGNED_INT;if(r===ni)return s.FLOAT;if(r===Cn)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===bp)return s.ALPHA;if(r===ze)return s.RGBA;if(r===Sp)return s.LUMINANCE;if(r===wp)return s.LUMINANCE_ALPHA;if(r===Gi)return s.DEPTH_COMPONENT;if(r===Fs)return s.DEPTH_STENCIL;if(r===Ic)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ep)return s.RED;if(r===Sd)return s.RED_INTEGER;if(r===Tp)return s.RG;if(r===wd)return s.RG_INTEGER;if(r===Ed)return s.RGBA_INTEGER;if(r===$a||r===Ka||r===Za||r===Ja)if(c===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===$a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===$a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Oh||r===kh||r===zh||r===Bh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Oh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Td)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Hh||r===Vh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Hh)return c===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Vh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gh||r===Wh||r===Xh||r===qh||r===Yh||r===$h||r===Kh||r===Zh||r===Jh||r===jh||r===Qh||r===tu||r===eu||r===nu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Gh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$h)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qh)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tu)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eu)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nu)return c===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ja||r===iu||r===su)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ja)return c===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===iu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===su)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ap||r===ru||r===ou||r===au)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ja)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ru)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ou)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===au)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vi?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Xc=class extends Se{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},we=class extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vv={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qc=class extends _i{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=e.getContextAttributes(),p=null,m=null,_=[],v=[],S=new dt,C=null,R=new Se;R.layers.enable(1),R.viewport=new Bt;let T=new Se;T.layers.enable(2),T.viewport=new Bt;let N=[R,T],M=new Xc;M.layers.enable(1),M.layers.enable(2);let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=_[G];return $===void 0&&($=new pr,_[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=_[G];return $===void 0&&($=new pr,_[G]=$),$.getGripSpace()},this.getHand=function(G){let $=_[G];return $===void 0&&($=new pr,_[G]=$),$.getHandSpace()};function H(G){let $=v.indexOf(G.inputSource);if($===-1)return;let ot=_[$];ot!==void 0&&(ot.update(G.inputSource,G.frame,l||o),ot.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",P);for(let G=0;G<_.length;G++){let $=v[G];$!==null&&(v[G]=null,_[G].disconnect($))}A=null,D=null,t.setRenderTarget(p),f=null,d=null,u=null,i=null,m=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",J),i.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Ie(f.framebufferWidth,f.framebufferHeight,{format:ze,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,ot=null,pt=null;x.depth&&(pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=x.stencil?Fs:Gi,ot=x.stencil?Vi:xn);let ut={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(ut),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),m=new Ie(d.textureWidth,d.textureHeight,{format:ze,type:vi,depthTexture:new yi(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Ct=t.properties.get(m);Ct.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(G){for(let $=0;$<G.removed.length;$++){let ot=G.removed[$],pt=v.indexOf(ot);pt>=0&&(v[pt]=null,_[pt].disconnect(ot))}for(let $=0;$<G.added.length;$++){let ot=G.added[$],pt=v.indexOf(ot);if(pt===-1){for(let Ct=0;Ct<_.length;Ct++)if(Ct>=v.length){v.push(ot),pt=Ct;break}else if(v[Ct]===null){v[Ct]=ot,pt=Ct;break}if(pt===-1)break}let ut=_[pt];ut&&ut.connect(ot)}}let U=new w,V=new w;function X(G,$,ot){U.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(ot.matrixWorld);let pt=U.distanceTo(V),ut=$.projectionMatrix.elements,Ct=ot.projectionMatrix.elements,Lt=ut[14]/(ut[10]-1),yt=ut[14]/(ut[10]+1),Yt=(ut[9]+1)/ut[5],F=(ut[9]-1)/ut[5],We=(ut[8]-1)/ut[0],Mt=(Ct[8]+1)/Ct[0],It=Lt*We,ft=Lt*Mt,le=pt/(-We+Mt),Ot=le*-We;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ot),G.translateZ(le),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let E=Lt+le,y=yt+le,k=It-Ot,Q=ft+(pt-Ot),Z=Yt*yt/y*E,tt=F*yt/y*E;G.projectionMatrix.makePerspective(k,Q,Z,tt,E,y),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;M.near=T.near=R.near=G.near,M.far=T.far=R.far=G.far,(A!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,D=M.far);let $=G.parent,ot=M.cameras;q(M,$);for(let pt=0;pt<ot.length;pt++)q(ot[pt],$);ot.length===2?X(M,R,T):M.projectionMatrix.copy(R.projectionMatrix),W(G,M,$)};function W(G,$,ot){ot===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(ot.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ks*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let Y=null;function j(G,$){if(h=$.getViewerPose(l||o),g=$,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let pt=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,pt=!0);for(let ut=0;ut<ot.length;ut++){let Ct=ot[ut],Lt=null;if(f!==null)Lt=f.getViewport(Ct);else{let Yt=u.getViewSubImage(d,Ct);Lt=Yt.viewport,ut===0&&(t.setRenderTargetTextures(m,Yt.colorTexture,d.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(m))}let yt=N[ut];yt===void 0&&(yt=new Se,yt.layers.enable(ut),yt.viewport=new Bt,N[ut]=yt),yt.matrix.fromArray(Ct.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(Ct.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ut===0&&(M.matrix.copy(yt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pt===!0&&M.cameras.push(yt)}}for(let ot=0;ot<_.length;ot++){let pt=v[ot],ut=_[ot];pt!==null&&ut!==void 0&&ut.update(pt,$,l||o)}Y&&Y(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let at=new Dd;at.setAnimationLoop(j),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}};function Gv(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Id(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,_,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,_,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Be&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Be&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wv(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,v){let S=v.program;n.uniformBlockBinding(_,S)}function l(_,v){let S=i[_.id];S===void 0&&(g(_),S=h(_),i[_.id]=S,_.addEventListener("dispose",p));let C=v.program;n.updateUBOMapping(_,C);let R=t.render.frame;r[_.id]!==R&&(d(_),r[_.id]=R)}function h(_){let v=u();_.__bindingPointIndex=v;let S=s.createBuffer(),C=_.__size,R=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=i[_.id],S=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,T=S.length;R<T;R++){let N=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,A=N.length;M<A;M++){let D=N[M];if(f(D,R,M,C)===!0){let H=D.__offset,J=Array.isArray(D.value)?D.value:[D.value],P=0;for(let U=0;U<J.length;U++){let V=J[U],X=x(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,H+P,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,v,S,C){let R=_.value,T=v+"_"+S;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{let N=C[T];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return C[T]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(_){let v=_.uniforms,S=0,C=16;for(let T=0,N=v.length;T<N;T++){let M=Array.isArray(v[T])?v[T]:[v[T]];for(let A=0,D=M.length;A<D;A++){let H=M[A],J=Array.isArray(H.value)?H.value:[H.value];for(let P=0,U=J.length;P<U;P++){let V=J[P],X=x(V),q=S%C;q!==0&&C-q<X.boundary&&(S+=C-q),H.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=X.storage}}}let R=S%C;return R>0&&(S+=C-R),_.__size=S,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){let v=_.target;v.removeEventListener("dispose",p);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}var yr=class{constructor(t={}){let{canvas:e=Qp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ae,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;let v=this,S=!1,C=0,R=0,T=null,N=-1,M=null,A=new Bt,D=new Bt,H=null,J=new xt(0),P=0,U=e.width,V=e.height,X=1,q=null,W=null,Y=new Bt(0,0,U,V),j=new Bt(0,0,U,V),at=!1,G=new vr,$=!1,ot=!1,pt=null,ut=new vt,Ct=new dt,Lt=new w,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Yt(){return T===null?X:1}let F=n;function We(b,I){for(let z=0;z<b.length;z++){let B=b[z],O=e.getContext(B,I);if(O!==null)return O}return null}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",it,!1),F===null){let I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),F=We(I,b),F===null)throw We(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Mt,It,ft,le,Ot,E,y,k,Q,Z,tt,mt,rt,lt,wt,kt,K,Qt,Wt,Pt,_t,ht,Nt,jt;function pe(){Mt=new lx(F),It=new ix(F,Mt,t),Mt.init(It),ht=new Hv(F,Mt,It),ft=new zv(F,Mt,It),le=new dx(F),Ot=new Av,E=new Bv(F,Mt,ft,Ot,It,ht,le),y=new rx(v),k=new cx(v),Q=new ym(F,It),Nt=new ex(F,Mt,Q,It),Z=new hx(F,Q,le,Nt),tt=new gx(F,Z,Q,le),Wt=new mx(F,It,E),kt=new sx(Ot),mt=new Tv(v,y,k,Mt,It,Nt,kt),rt=new Gv(v,Ot),lt=new Cv,wt=new Nv(Mt,It),Qt=new tx(v,y,k,ft,tt,d,c),K=new kv(v,tt,It),jt=new Wv(F,le,It,ft),Pt=new nx(F,Mt,le,It),_t=new ux(F,Mt,le,It),le.programs=mt.programs,v.capabilities=It,v.extensions=Mt,v.properties=Ot,v.renderLists=lt,v.shadowMap=K,v.state=ft,v.info=le}pe();let Ht=new qc(v,F);this.xr=Ht,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=Mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(U,V,!1))},this.getSize=function(b){return b.set(U,V)},this.setSize=function(b,I,z=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,V=I,e.width=Math.floor(b*X),e.height=Math.floor(I*X),z===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(U*X,V*X).floor()},this.setDrawingBufferSize=function(b,I,z){U=b,V=I,X=z,e.width=Math.floor(b*z),e.height=Math.floor(I*z),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(Y)},this.setViewport=function(b,I,z,B){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,I,z,B),ft.viewport(A.copy(Y).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,I,z,B){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,I,z,B),ft.scissor(D.copy(j).multiplyScalar(X).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(b){ft.setScissorTest(at=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(b=!0,I=!0,z=!0){let B=0;if(b){let O=!1;if(T!==null){let ct=T.texture.format;O=ct===Ed||ct===wd||ct===Sd}if(O){let ct=T.texture.type,gt=ct===vi||ct===xn||ct===hl||ct===Vi||ct===Md||ct===bd,St=Qt.getClearColor(),At=Qt.getClearAlpha(),zt=St.r,Dt=St.g,Ut=St.b;gt?(f[0]=zt,f[1]=Dt,f[2]=Ut,f[3]=At,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=zt,g[1]=Dt,g[2]=Ut,g[3]=At,F.clearBufferiv(F.COLOR,0,g))}else B|=F.COLOR_BUFFER_BIT}I&&(B|=F.DEPTH_BUFFER_BIT),z&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",it,!1),lt.dispose(),wt.dispose(),Ot.dispose(),y.dispose(),k.dispose(),tt.dispose(),Nt.dispose(),jt.dispose(),mt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Xe),Ht.removeEventListener("sessionend",ie),pt&&(pt.dispose(),pt=null),qe.stop()};function et(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let b=le.autoReset,I=K.enabled,z=K.autoUpdate,B=K.needsUpdate,O=K.type;pe(),le.autoReset=b,K.enabled=I,K.autoUpdate=z,K.needsUpdate=B,K.type=O}function it(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function st(b){let I=b.target;I.removeEventListener("dispose",st),Tt(I)}function Tt(b){bt(b),Ot.remove(b)}function bt(b){let I=Ot.get(b).programs;I!==void 0&&(I.forEach(function(z){mt.releaseProgram(z)}),b.isShaderMaterial&&mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,z,B,O,ct){I===null&&(I=yt);let gt=O.isMesh&&O.matrixWorld.determinant()<0,St=Nf(b,I,z,B,O);ft.setMaterial(B,gt);let At=z.index,zt=1;if(B.wireframe===!0){if(At=Z.getWireframeAttribute(z),At===void 0)return;zt=2}let Dt=z.drawRange,Ut=z.attributes.position,ge=Dt.start*zt,nn=(Dt.start+Dt.count)*zt;ct!==null&&(ge=Math.max(ge,ct.start*zt),nn=Math.min(nn,(ct.start+ct.count)*zt)),At!==null?(ge=Math.max(ge,0),nn=Math.min(nn,At.count)):Ut!=null&&(ge=Math.max(ge,0),nn=Math.min(nn,Ut.count));let Le=nn-ge;if(Le<0||Le===1/0)return;Nt.setup(O,B,St,z,At);let $n,he=Pt;if(At!==null&&($n=Q.get(At),he=_t,he.setIndex($n)),O.isMesh)B.wireframe===!0?(ft.setLineWidth(B.wireframeLinewidth*Yt()),he.setMode(F.LINES)):he.setMode(F.TRIANGLES);else if(O.isLine){let Vt=B.linewidth;Vt===void 0&&(Vt=1),ft.setLineWidth(Vt*Yt()),O.isLineSegments?he.setMode(F.LINES):O.isLineLoop?he.setMode(F.LINE_LOOP):he.setMode(F.LINE_STRIP)}else O.isPoints?he.setMode(F.POINTS):O.isSprite&&he.setMode(F.TRIANGLES);if(O.isBatchedMesh)he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)he.renderInstances(ge,Le,O.count);else if(z.isInstancedBufferGeometry){let Vt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Wa=Math.min(z.instanceCount,Vt);he.renderInstances(ge,Le,Wa)}else he.render(ge,Le)};function ee(b,I,z){b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=Be,b.needsUpdate=!0,Xr(b,I,z),b.side=zn,b.needsUpdate=!0,Xr(b,I,z),b.side=on):Xr(b,I,z)}this.compile=function(b,I,z=null){z===null&&(z=b),p=wt.get(z),p.init(),_.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==z&&b.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(v._useLegacyLights);let B=new Set;return b.traverse(function(O){let ct=O.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){let St=ct[gt];ee(St,z,O),B.add(St)}else ee(ct,z,O),B.add(ct)}),_.pop(),p=null,B},this.compileAsync=function(b,I,z=null){let B=this.compile(b,I,z);return new Promise(O=>{function ct(){if(B.forEach(function(gt){Ot.get(gt).currentProgram.isReady()&&B.delete(gt)}),B.size===0){O(b);return}setTimeout(ct,10)}Mt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ne=null;function Ce(b){ne&&ne(b)}function Xe(){qe.stop()}function ie(){qe.start()}let qe=new Dd;qe.setAnimationLoop(Ce),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(b){ne=b,Ht.setAnimationLoop(b),b===null?qe.stop():qe.start()},Ht.addEventListener("sessionstart",Xe),Ht.addEventListener("sessionend",ie),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(I),I=Ht.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,I,T),p=wt.get(b,_.length),p.init(),_.push(p),ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(ut),ot=this.localClippingEnabled,$=kt.init(this.clippingPlanes,ot),x=lt.get(b,m.length),x.init(),m.push(x),Nn(b,I,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(q,W),this.info.render.frame++,$===!0&&kt.beginShadows();let z=p.state.shadowsArray;if(K.render(z,b,I),$===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qt.render(x,b),p.setupLights(v._useLegacyLights),I.isArrayCamera){let B=I.cameras;for(let O=0,ct=B.length;O<ct;O++){let gt=B[O];Eh(x,b,gt,gt.viewport)}}else Eh(x,b,I);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,I),Nt.resetDefaultState(),N=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Nn(b,I,z,B){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){B&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);let gt=tt.update(b),St=b.material;St.visible&&x.push(b,gt,St,z,Lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){let gt=tt.update(b),St=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Lt.copy(gt.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(St)){let At=gt.groups;for(let zt=0,Dt=At.length;zt<Dt;zt++){let Ut=At[zt],ge=St[Ut.materialIndex];ge&&ge.visible&&x.push(b,gt,ge,z,Lt.z,Ut)}}else St.visible&&x.push(b,gt,St,z,Lt.z,null)}}let ct=b.children;for(let gt=0,St=ct.length;gt<St;gt++)Nn(ct[gt],I,z,B)}function Eh(b,I,z,B){let O=b.opaque,ct=b.transmissive,gt=b.transparent;p.setupLightsView(z),$===!0&&kt.setGlobalState(v.clippingPlanes,z),ct.length>0&&Uf(O,ct,I,z),B&&ft.viewport(A.copy(B)),O.length>0&&Wr(O,I,z),ct.length>0&&Wr(ct,I,z),gt.length>0&&Wr(gt,I,z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Uf(b,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let ct=It.isWebGL2;pt===null&&(pt=new Ie(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Cn:vi,minFilter:Bn,samples:ct?4:0})),v.getDrawingBufferSize(Ct),ct?pt.setSize(Ct.x,Ct.y):pt.setSize(Ao(Ct.x),Ao(Ct.y));let gt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(J),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let St=v.toneMapping;v.toneMapping=kn,Wr(b,z,B),E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt);let At=!1;for(let zt=0,Dt=I.length;zt<Dt;zt++){let Ut=I[zt],ge=Ut.object,nn=Ut.geometry,Le=Ut.material,$n=Ut.group;if(Le.side===on&&ge.layers.test(B.layers)){let he=Le.side;Le.side=Be,Le.needsUpdate=!0,Th(ge,z,B,nn,Le,$n),Le.side=he,Le.needsUpdate=!0,At=!0}}At===!0&&(E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt)),v.setRenderTarget(gt),v.setClearColor(J,P),v.toneMapping=St}function Wr(b,I,z){let B=I.isScene===!0?I.overrideMaterial:null;for(let O=0,ct=b.length;O<ct;O++){let gt=b[O],St=gt.object,At=gt.geometry,zt=B===null?gt.material:B,Dt=gt.group;St.layers.test(z.layers)&&Th(St,I,z,At,zt,Dt)}}function Th(b,I,z,B,O,ct){b.onBeforeRender(v,I,z,B,O,ct),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(v,I,z,B,b,ct),O.transparent===!0&&O.side===on&&O.forceSinglePass===!1?(O.side=Be,O.needsUpdate=!0,v.renderBufferDirect(z,I,B,O,b,ct),O.side=zn,O.needsUpdate=!0,v.renderBufferDirect(z,I,B,O,b,ct),O.side=on):v.renderBufferDirect(z,I,B,O,b,ct),b.onAfterRender(v,I,z,B,O,ct)}function Xr(b,I,z){I.isScene!==!0&&(I=yt);let B=Ot.get(b),O=p.state.lights,ct=p.state.shadowsArray,gt=O.state.version,St=mt.getParameters(b,O.state,ct,I,z),At=mt.getProgramCacheKey(St),zt=B.programs;B.environment=b.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(b.isMeshStandardMaterial?k:y).get(b.envMap||B.environment),zt===void 0&&(b.addEventListener("dispose",st),zt=new Map,B.programs=zt);let Dt=zt.get(At);if(Dt!==void 0){if(B.currentProgram===Dt&&B.lightsStateVersion===gt)return Rh(b,St),Dt}else St.uniforms=mt.getUniforms(b),b.onBuild(z,St,v),b.onBeforeCompile(St,v),Dt=mt.acquireProgram(St,At),zt.set(At,Dt),B.uniforms=St.uniforms;let Ut=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=kt.uniform),Rh(b,St),B.needsLights=Of(b),B.lightsStateVersion=gt,B.needsLights&&(Ut.ambientLightColor.value=O.state.ambient,Ut.lightProbe.value=O.state.probe,Ut.directionalLights.value=O.state.directional,Ut.directionalLightShadows.value=O.state.directionalShadow,Ut.spotLights.value=O.state.spot,Ut.spotLightShadows.value=O.state.spotShadow,Ut.rectAreaLights.value=O.state.rectArea,Ut.ltc_1.value=O.state.rectAreaLTC1,Ut.ltc_2.value=O.state.rectAreaLTC2,Ut.pointLights.value=O.state.point,Ut.pointLightShadows.value=O.state.pointShadow,Ut.hemisphereLights.value=O.state.hemi,Ut.directionalShadowMap.value=O.state.directionalShadowMap,Ut.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ut.spotShadowMap.value=O.state.spotShadowMap,Ut.spotLightMatrix.value=O.state.spotLightMatrix,Ut.spotLightMap.value=O.state.spotLightMap,Ut.pointShadowMap.value=O.state.pointShadowMap,Ut.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Dt,B.uniformsList=null,Dt}function Ah(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=Is.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Rh(b,I){let z=Ot.get(b);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Nf(b,I,z,B,O){I.isScene!==!0&&(I=yt),E.resetTextureUnits();let ct=I.fog,gt=B.isMeshStandardMaterial?I.environment:null,St=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Te,At=(B.isMeshStandardMaterial?k:y).get(B.envMap||gt),zt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ut=!!z.morphAttributes.position,ge=!!z.morphAttributes.normal,nn=!!z.morphAttributes.color,Le=kn;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Le=v.toneMapping);let $n=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=$n!==void 0?$n.length:0,Vt=Ot.get(B),Wa=p.state.lights;if($===!0&&(ot===!0||b!==M)){let mn=b===M&&B.id===N;kt.setState(B,b,mn)}let me=!1;B.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Wa.state.version||Vt.outputColorSpace!==St||O.isBatchedMesh&&Vt.batching===!1||!O.isBatchedMesh&&Vt.batching===!0||O.isInstancedMesh&&Vt.instancing===!1||!O.isInstancedMesh&&Vt.instancing===!0||O.isSkinnedMesh&&Vt.skinning===!1||!O.isSkinnedMesh&&Vt.skinning===!0||O.isInstancedMesh&&Vt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Vt.instancingColor===!1&&O.instanceColor!==null||Vt.envMap!==At||B.fog===!0&&Vt.fog!==ct||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==kt.numPlanes||Vt.numIntersection!==kt.numIntersection)||Vt.vertexAlphas!==zt||Vt.vertexTangents!==Dt||Vt.morphTargets!==Ut||Vt.morphNormals!==ge||Vt.morphColors!==nn||Vt.toneMapping!==Le||It.isWebGL2===!0&&Vt.morphTargetsCount!==he)&&(me=!0):(me=!0,Vt.__version=B.version);let Di=Vt.currentProgram;me===!0&&(Di=Xr(B,I,O));let Ch=!1,nr=!1,Xa=!1,Ne=Di.getUniforms(),Ui=Vt.uniforms;if(ft.useProgram(Di.program)&&(Ch=!0,nr=!0,Xa=!0),B.id!==N&&(N=B.id,nr=!0),Ch||M!==b){Ne.setValue(F,"projectionMatrix",b.projectionMatrix),Ne.setValue(F,"viewMatrix",b.matrixWorldInverse);let mn=Ne.map.cameraPosition;mn!==void 0&&mn.setValue(F,Lt.setFromMatrixPosition(b.matrixWorld)),It.logarithmicDepthBuffer&&Ne.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ne.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,nr=!0,Xa=!0)}if(O.isSkinnedMesh){Ne.setOptional(F,O,"bindMatrix"),Ne.setOptional(F,O,"bindMatrixInverse");let mn=O.skeleton;mn&&(It.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Ne.setValue(F,"boneTexture",mn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Ne.setOptional(F,O,"batchingTexture"),Ne.setValue(F,"batchingTexture",O._matricesTexture,E));let qa=z.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0&&It.isWebGL2===!0)&&Wt.update(O,z,Di),(nr||Vt.receiveShadow!==O.receiveShadow)&&(Vt.receiveShadow=O.receiveShadow,Ne.setValue(F,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ui.envMap.value=At,Ui.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),nr&&(Ne.setValue(F,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Ff(Ui,Xa),ct&&B.fog===!0&&rt.refreshFogUniforms(Ui,ct),rt.refreshMaterialUniforms(Ui,B,X,V,pt),Is.upload(F,Ah(Vt),Ui,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Is.upload(F,Ah(Vt),Ui,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ne.setValue(F,"center",O.center),Ne.setValue(F,"modelViewMatrix",O.modelViewMatrix),Ne.setValue(F,"normalMatrix",O.normalMatrix),Ne.setValue(F,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let mn=B.uniformsGroups;for(let Ya=0,kf=mn.length;Ya<kf;Ya++)if(It.isWebGL2){let Lh=mn[Ya];jt.update(Lh,Di),jt.bind(Lh,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function Ff(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Of(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,z){Ot.get(b.texture).__webglTexture=I,Ot.get(b.depthTexture).__webglTexture=z;let B=Ot.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){let z=Ot.get(b);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,z=0){T=b,C=I,R=z;let B=!0,O=null,ct=!1,gt=!1;if(b){let At=Ot.get(b);At.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(F.FRAMEBUFFER,null),B=!1):At.__webglFramebuffer===void 0?E.setupRenderTarget(b):At.__hasExternalTextures&&E.rebindTextures(b,Ot.get(b.texture).__webglTexture,Ot.get(b.depthTexture).__webglTexture);let zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(gt=!0);let Dt=Ot.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?O=Dt[I][z]:O=Dt[I],ct=!0):It.isWebGL2&&b.samples>0&&E.useMultisampledRTT(b)===!1?O=Ot.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[z]:O=Dt,A.copy(b.viewport),D.copy(b.scissor),H=b.scissorTest}else A.copy(Y).multiplyScalar(X).floor(),D.copy(j).multiplyScalar(X).floor(),H=at;if(ft.bindFramebuffer(F.FRAMEBUFFER,O)&&It.drawBuffers&&B&&ft.drawBuffers(b,O),ft.viewport(A),ft.scissor(D),ft.setScissorTest(H),ct){let At=Ot.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,At.__webglTexture,z)}else if(gt){let At=Ot.get(b.texture),zt=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,z||0,zt)}N=-1},this.readRenderTargetPixels=function(b,I,z,B,O,ct,gt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){ft.bindFramebuffer(F.FRAMEBUFFER,St);try{let At=b.texture,zt=At.format,Dt=At.type;if(zt!==ze&&ht.convert(zt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ut=Dt===Cn&&(Mt.has("EXT_color_buffer_half_float")||It.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Dt!==vi&&ht.convert(Dt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===ni&&(It.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-B&&z>=0&&z<=b.height-O&&F.readPixels(I,z,B,O,ht.convert(zt),ht.convert(Dt),ct)}finally{let At=T!==null?Ot.get(T).__webglFramebuffer:null;ft.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(b,I,z=0){let B=Math.pow(2,-z),O=Math.floor(I.image.width*B),ct=Math.floor(I.image.height*B);E.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,b.x,b.y,O,ct),ft.unbindTexture()},this.copyTextureToTexture=function(b,I,z,B=0){let O=I.image.width,ct=I.image.height,gt=ht.convert(z.format),St=ht.convert(z.type);E.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,b.x,b.y,O,ct,gt,St,I.image.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,gt,I.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,B,b.x,b.y,gt,St,I.image),B===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(b,I,z,B,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ct=b.max.x-b.min.x+1,gt=b.max.y-b.min.y+1,St=b.max.z-b.min.z+1,At=ht.convert(B.format),zt=ht.convert(B.type),Dt;if(B.isData3DTexture)E.setTexture3D(B,0),Dt=F.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)E.setTexture2DArray(B,0),Dt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let Ut=F.getParameter(F.UNPACK_ROW_LENGTH),ge=F.getParameter(F.UNPACK_IMAGE_HEIGHT),nn=F.getParameter(F.UNPACK_SKIP_PIXELS),Le=F.getParameter(F.UNPACK_SKIP_ROWS),$n=F.getParameter(F.UNPACK_SKIP_IMAGES),he=z.isCompressedTexture?z.mipmaps[O]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Dt,O,I.x,I.y,I.z,ct,gt,St,At,zt,he.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Dt,O,I.x,I.y,I.z,ct,gt,St,At,he.data)):F.texSubImage3D(Dt,O,I.x,I.y,I.z,ct,gt,St,At,zt,he),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge),F.pixelStorei(F.UNPACK_SKIP_PIXELS,nn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Le),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$n),O===0&&B.generateMipmaps&&F.generateMipmap(Dt),ft.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),ft.unbindTexture()},this.resetState=function(){C=0,R=0,T=null,ft.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ul?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===jo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ae?Wi:Rd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Wi?ae:Te}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Yc=class extends yr{};Yc.prototype.isWebGL1Renderer=!0;var un=class extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Mr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new w,br=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ju=new w,ju=new Bt,Qu=new Bt,Xv=new w,td=new vt,mo=new w,bc=new cn,ed=new vt,Sc=new Yi,No=class extends qt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new vt,this.bindMatrixInverse=new vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,mo),this.boundingBox.expandByPoint(mo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,mo),this.boundingSphere.expandByPoint(mo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bc.copy(this.boundingSphere),bc.applyMatrix4(i),t.ray.intersectsSphere(bc)!==!1&&(ed.copy(i).invert(),Sc.copy(t.ray).applyMatrix4(ed),!(this.boundingBox!==null&&Sc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Sc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Bt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_p?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;ju.fromBufferAttribute(i.attributes.skinIndex,t),Qu.fromBufferAttribute(i.attributes.skinWeight,t),Ju.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=Qu.getComponent(r);if(o!==0){let a=ju.getComponent(r);td.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Xv.copy(Ju).applyMatrix4(td),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},Sr=class extends fe{constructor(){super(),this.isBone=!0,this.type="Bone"}},$c=class extends He{constructor(t=null,e=1,n=1,i,r,o,a,c,l=be,h=be,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nd=new vt,qv=new vt,Fo=class s{constructor(t=[],e=[]){this.uuid=Rn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new vt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new vt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:qv;nd.multiplyMatrices(a,e[r]),nd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new $c(e,t,t,ze,ni);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Sr),this.bones.push(o),this.boneInverses.push(new vt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Qe=class extends Ee{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new vt,id=new vt,go=[],sd=new vn,Yv=new vt,ar=new qt,cr=new cn,_n=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qe(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),sd.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),cr.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ts),id.multiplyMatrices(n,Ts),ar.matrixWorld=id,ar.raycast(t,go);for(let o=0,a=go.length;o<a;o++){let c=go[o];c.instanceId=r,c.object=this,e.push(c)}go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qe(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends ln{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},rd=new w,od=new w,ad=new vt,wc=new Yi,xo=new cn,Vs=class extends fe{constructor(t=new xe,e=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)rd.fromBufferAttribute(e,i-1),od.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=rd.distanceTo(od);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;ad.copy(i).invert(),wc.copy(t.ray).applyMatrix4(ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,h=new w,u=new w,d=new w,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let m=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=m,S=_-1;v<S;v+=f){let C=g.getX(v),R=g.getX(v+1);if(l.fromBufferAttribute(p,C),h.fromBufferAttribute(p,R),wc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let N=t.ray.origin.distanceTo(d);N<t.near||N>t.far||e.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=m,S=_-1;v<S;v+=f){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),wc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},cd=new w,ld=new w,Oo=class extends Vs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)cd.fromBufferAttribute(e,i),ld.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cd.distanceTo(ld);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ko=class extends Vs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Er=class extends ln{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hd=new vt,Kc=new Yi,vo=new cn,_o=new w,zo=class extends fe{constructor(t=new xe,e=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;hd.copy(i).invert(),Kc.copy(t.ray).applyMatrix4(hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let p=l.getX(g);_o.fromBufferAttribute(u,p),ud(_o,p,c,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)_o.fromBufferAttribute(u,g),ud(_o,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ud(s,t,e,n,i,r,o){let a=Kc.distanceSqToPoint(s);if(a<e){let c=new w;Kc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var Bo=class s extends xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new w,h=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pn=class s extends xe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=n/2,m=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function _(){let S=new w,C=new w,R=0,T=(e-t)/n;for(let N=0;N<=r;N++){let M=[],A=N/r,D=A*(e-t)+t;for(let H=0;H<=i;H++){let J=H/i,P=J*c+a,U=Math.sin(P),V=Math.cos(P);C.x=D*U,C.y=-A*n+p,C.z=D*V,u.push(C.x,C.y,C.z),S.set(U,T,V).normalize(),d.push(S.x,S.y,S.z),f.push(J,1-A),M.push(g++)}x.push(M)}for(let N=0;N<i;N++)for(let M=0;M<r;M++){let A=x[M][N],D=x[M+1][N],H=x[M+1][N+1],J=x[M][N+1];h.push(A,D,J),h.push(D,H,J),R+=6}l.addGroup(m,R,0),m+=R}function v(S){let C=g,R=new dt,T=new w,N=0,M=S===!0?t:e,A=S===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,p*A,0),d.push(0,A,0),f.push(.5,.5),g++;let D=g;for(let H=0;H<=i;H++){let P=H/i*c+a,U=Math.cos(P),V=Math.sin(P);T.x=M*V,T.y=p*A,T.z=M*U,u.push(T.x,T.y,T.z),d.push(0,A,0),R.x=U*.5+.5,R.y=V*.5*A+.5,f.push(R.x,R.y),g++}for(let H=0;H<i;H++){let J=C+H,P=D+H;S===!0?h.push(P,P+1,J):h.push(P+1,P,J),N+=3}l.addGroup(m,N,S===!0?1:2),m+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ho=class s extends Pn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Vo=class s extends xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new w,d=new w,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let _=[],v=m/n,S=0;m===0&&o===0?S=.5/e:m===n&&c===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){let R=C/e;u.x=-t*Math.cos(i+R*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+R*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(R+S,1-v),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let v=h[m][_+1],S=h[m][_],C=h[m+1][_],R=h[m+1][_+1];(m!==0||o>0)&&f.push(v,S,R),(m!==n-1||c<Math.PI)&&f.push(S,C,R)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var In=class extends ln{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yn=class extends In{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function yo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function $v(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Kv(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function dd(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function zd(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}var Mi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zc=class extends Mi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cu,endingEnd:cu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lu:r=t,a=2*e-n;break;case hu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case lu:o=t,c=2*n-e;break;case hu:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,_=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*p+(1.5+f)*x+.5*g,S=f*p-f*x;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+_*o[l+C]+v*o[c+C]+S*o[u+C];return r}},Jc=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},jc=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yo(e,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yo(t.times,Array),values:yo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case qi:e=this.InterpolantFactoryMethodLinear;break;case Qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return qi;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&$v(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=qi;var bi=class extends Mn{};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Os;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Mn{};Go.prototype.ValueTypeName="color";var si=class extends Mn{};si.prototype.ValueTypeName="number";var Qc=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)de.slerpFlat(r,0,o,l-a,o,l,c);return r}},Hn=class extends Mn{InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}};Hn.prototype.ValueTypeName="quaternion";Hn.prototype.DefaultInterpolation=qi;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends Mn{};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Os;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends Mn{};ri.prototype.ValueTypeName="vector";var Wo=class{constructor(t,e=-1,n,i=Rp){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Jv(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Kv(c);c=dd(c,1,h),l=dd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new si(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let p=[],m=[];zd(f,p,m,g),p.length!==0&&x.push(new u(d,p,m))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let p=[],m=[];for(let _=0;_!==d[g].morphTargets.length;++_){let v=d[g];p.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new si(".morphTargetInfluence["+x+"]",p,m))}c=f.length*o}else{let f=".bones["+e[u].name+"]";n(ri,f+".position",d,"pos",i),n(Hn,f+".quaternion",d,"rot",i),n(ri,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Zv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return si;case"vector":case"vector2":case"vector3":case"vector4":return ri;case"color":return Go;case"quaternion":return Hn;case"bool":case"boolean":return bi;case"string":return Si}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Jv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Zv(s.type);if(s.times===void 0){let e=[],n=[];zd(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var gi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},tl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},jv=new tl,oi=class{constructor(t){this.manager=t!==void 0?t:jv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ti={},el=class extends Error{constructor(t,e){super(t),this.response=e}},Tr=class extends oi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=gi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:i});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ti[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,x=0,p=new ReadableStream({start(m){_();function _(){u.read().then(({done:v,value:S})=>{if(v)m.close();else{x+=S.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let R=0,T=h.length;R<T;R++){let N=h[R];N.onProgress&&N.onProgress(C)}m.enqueue(S),_()}})}}});return new Response(p)}else throw new el(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{gi.add(t,l);let h=ti[t];delete ti[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ti[t];if(h===void 0)throw this.manager.itemError(t),l;delete ti[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var nl=class extends oi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=gi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=gr("img");function c(){h(),gi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Gs=class extends oi{constructor(t){super(t)}load(t,e,n,i){let r=new He,o=new nl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Ws=class extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Xo=class extends Ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ec=new vt,fd=new w,pd=new w,Ar=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(fd),pd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pd),e.updateMatrixWorld(),Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},il=class extends Ar{constructor(){super(new Se(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ks*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},qo=class extends Ws{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new il}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},md=new vt,lr=new w,Tc=new w,sl=class extends Ar{constructor(){super(new Se(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Bt(2,1,1,1),new Bt(0,1,1,1),new Bt(3,1,1,1),new Bt(1,1,1,1),new Bt(3,0,1,1),new Bt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(lr),Tc.copy(n.position),Tc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tc),n.updateMatrixWorld(),i.makeTranslation(-lr.x,-lr.y,-lr.z),md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md)}},Xs=class extends Ws{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},rl=class extends Ar{constructor(){super(new hn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new rl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var wi=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Yo=class extends xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var $o=class extends oi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=gi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return gi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),gi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});gi.add(t,c),r.manager.itemStart(t)}};var ml="\\[\\]\\.:\\/",Qv=new RegExp("["+ml+"]","g"),gl="[^"+ml+"]",t_="[^"+ml.replace("\\.","")+"]",e_=/((?:WC+[\/:])*)/.source.replace("WC",gl),n_=/(WCOD+)?/.source.replace("WCOD",t_),i_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),s_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),r_=new RegExp("^"+e_+n_+i_+s_+"$"),o_=["material","materials","bones","map"],ol=class{constructor(t,e,n){let i=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qv,"")}static parseTrackName(t){let e=r_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);o_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=ol;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _y=new Float32Array(1);var Ko=class{constructor(t,e,n=0,i=1/0){this.ray=new Yi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return al(t,this,n,e),n.sort(gd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)al(t[i],this,n,e);return n.sort(gd),n}};function gd(s,t){return s.distance-t.distance}function al(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)al(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);var a_=`
#ifndef NOISE_GLSL
#define NOISE_GLSL
float fhash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float fnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(fhash(i), fhash(i + vec2(1, 0)), u.x), mix(fhash(i + vec2(0, 1)), fhash(i + vec2(1, 1)), u.x), u.y); }
float ffbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++){ s += a * fnoise(p); p = p * 2.03 + 11.7; a *= .5; } return s; }
#endif
`,xl=`
const float R_EFF = 7.323e6;
vec3 curveDrop(vec3 w){ vec2 d = w.xz - cameraPosition.xz; w.y -= dot(d, d) / (2.0 * R_EFF); return w; }
`,Ki=`
uniform vec3 uSunDirW; uniform vec3 uSunCol; uniform float uCloudT; uniform float uCover; uniform float uNight; uniform float uDusk;
uniform float uHazeB; uniform float uHazeH; uniform float uHazeTint;
${a_}
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
`;function Bd(s,t){return{uSunDirW:{value:s},uSunCol:{value:t},uCloudT:{value:0},uCover:{value:.28},uNight:{value:0},uDusk:{value:0},uHazeB:{value:11e-5},uHazeH:{value:650},uHazeTint:{value:1}}}function Hd(s){let t=new ce({side:Be,depthWrite:!1,depthTest:!1,uniforms:s,vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`${Ki}
varying vec3 vD; void main(){ gl_FragColor = vec4(skyCol(normalize(vD), true), 1.0); }`}),e=new qt(new Vo(9e3,64,32),t);return e.frustumCulled=!1,e.renderOrder=-1,e}function Vd(s,t,{curve:e=!1}={}){let n=s.onBeforeCompile;s.onBeforeCompile=(r,o)=>{n?.call(s,r,o),Object.assign(r.uniforms,t),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vHzW;
${e?xl:""}`).replace("#include <project_vertex>",e?`
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
${Ki}`).replace("#include <fog_fragment>","gl_FragColor.rgb = applyHaze(gl_FragColor.rgb, vHzW);")};let i=s.customProgramCacheKey?.bind(s);return s.customProgramCacheKey=()=>(i?i():"")+(e?"|hzc":"|hz"),s.fog=!0,s}function ea(s,t,e,n=new w){let i=Et.degToRad(s),r=Et.degToRad(-23.44)*Math.cos(2*Math.PI/365*(t+10)),o=Et.degToRad(15*(e-12)),a=Math.sin(i)*Math.sin(r)+Math.cos(i)*Math.cos(r)*Math.cos(o),c=Math.asin(a),l=(Math.sin(r)-Math.sin(c)*Math.sin(i))/(Math.cos(c)*Math.cos(i)),h=Math.acos(Et.clamp(l,-1,1));return o>0&&(h=2*Math.PI-h),n.set(Math.cos(c)*Math.sin(h),Math.sin(c),-Math.cos(c)*Math.cos(h))}var Gd=16,$s=9.81;function c_(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Wd({wind:s=6,windDir:t=.6,swellDir:e=1.4,swellH:n=.35,seed:i=11}={}){let r=c_(i),o=.877*$s/Math.max(s,.5),a=[];for(let g=0;g<2;g++){let x=[72,51][g],p=2*Math.PI/x,m=n/2*[.8,.55][g],_=e+[0,.18][g];a.push({dx:Math.cos(_),dz:Math.sin(_),k:p,w:Math.sqrt($s*p),a:m,ph:r()*6.283})}let c=Gd-2,l=o*.75,h=o*3.2;for(let g=0;g<c;g++){let x=(g+.5)/c,p=l*Math.pow(h/l,x),m=p*Math.log(h/l)/c,_=.0081*$s*$s/Math.pow(p,5)*Math.exp(-.74*Math.pow($s/(s*p),4)),v=Math.sqrt(2*_*m),S=0;for(let T=0;T<3;T++)S+=r()-.5;let C=t+S*(.9+.6*x),R=p*p/$s;a.push({dx:Math.cos(C),dz:Math.sin(C),k:R,w:p,a:v,ph:r()*6.283})}let u=a.reduce((g,x)=>g+x.k*x.a,0),d=Math.min(.8,.4/Math.max(u,1e-6));for(let g of a)g.q=d;let f=4*Math.sqrt(a.reduce((g,x)=>g+x.a*x.a/2,0));return{comps:a,wind:s,windDir:t,hs:f,wp:o}}function Xd(s){let t=s.comps.map(n=>new Bt(n.dx,n.dz,n.k,n.w)),e=s.comps.map(n=>new Bt(n.a,n.q,n.ph,0));return{uWA:{value:t},uWB:{value:e},uSeaK:{value:1}}}var Cr=`
#define NW ${Gd}
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
`;function na(s,t,e,n,i=1){let r=t,o=e;for(let c=0;c<3;c++){let l=0,h=0;for(let u of s.comps){let d=u.k*(u.dx*r+u.dz*o)-u.w*n+u.ph,f=u.a*i*u.q*Math.cos(d);l+=u.dx*f,h+=u.dz*f}r=t-l,o=e-h}let a=0;for(let c of s.comps)a+=c.a*i*Math.sin(c.k*(c.dx*r+c.dz*o)-c.w*n+c.ph);return a}var qd=`
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
`;function ia(s){return s-Math.floor(s)}function sa(s,t){let e=ia(s*.1031),n=ia(t*.1031),i=ia(s*.1031),r=e*(n+33.33)+n*(i+33.33)+i*(e+33.33);return e+=r,n+=r,i+=r,ia((e+n)*i)}function vl(s,t){let e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,o=i*i*(3-2*i),a=r*r*(3-2*r),c=sa(e,n),l=sa(e+1,n),h=sa(e,n+1),u=sa(e+1,n+1);return(c+(l-c)*o)*(1-a)+(h+(u-h)*o)*a}var l_=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)},ra=class{constructor({speed:t=6,dir:e=.6,gust:n=1}={}){this.uniforms={uWind:{value:new dt(Math.cos(e),Math.sin(e))},uWindS:{value:t},uGustK:{value:n}},this.speed=t,this.dir=e}set(t,e,n=this.uniforms.uGustK.value){this.speed=t,this.dir=e,this.uniforms.uWind.value.set(Math.cos(e),Math.sin(e)),this.uniforms.uWindS.value=t,this.uniforms.uGustK.value=n}gust(t,e,n){let i=this.uniforms.uWind.value,r=this.uniforms.uWindS.value,o=t*i.x+e*i.y-r*.8*n,a=-t*i.y+e*i.x,c=o*.0045,l=a*.0022,h=vl(c,l)*.55+vl(c*2.3+7.1,l*2.3+7.1)*.3+vl(c*5.1+3.3,l*5.1+3.3)*.15;return Math.min(1,Math.max(0,l_(.32,.72,h)*this.uniforms.uGustK.value+.12))}at(t,e,n,i=new dt){let r=this.gust(t,e,n),o=this.speed*(.7+.7*r);return i.copy(this.uniforms.uWind.value).multiplyScalar(o)}};var h_="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",ai=512,Zs=2.2,oa=ai*Zs,dn=32,Ks=8,u_=3,aa=12,Vn=4;function d_(){let s=r=>{let o=Math.abs(r);if(o<8){let d=r*r;return(57568490574+d*(-13362590354+d*(6516196407e-1+d*(-1121442418e-2+d*(77392.33017+d*-184.9052456)))))/(57568490411+d*(1029532985+d*(9494680718e-3+d*(59272.64853+d*(267.8532712+d)))))}let a=8/o,c=a*a,l=o-.785398164,h=1+c*(-.001098628627+c*(2734510407e-14+c*(-2073370639e-15+c*2093887211e-16))),u=-.01562499995+c*(.0001430488765+c*(-6911147651e-15+c*(7621095161e-16-c*934935152e-16)));return Math.sqrt(.636619772/o)*(Math.cos(l)*h-a*Math.sin(l)*u)},n=0;for(let r=1;r<=1e4;r++){let o=r*.001;n+=o*o*Math.exp(-1*o*o)}let i=[];for(let r=0;r<=Vn;r++)for(let o=0;o<=Vn;o++){let a=Math.hypot(o,r),c=0;for(let l=1;l<=1e4;l++){let h=l*.001;c+=h*h*Math.exp(-1*h*h)*s(h*a)}i.push(a>Vn+.5?0:c/n)}return i}var ca=class{constructor(t,e){this.r=t;let n={type:Cn,format:ze,minFilter:ue,magFilter:ue,depthBuffer:!1};this.rt=[new Ie(ai,ai,n),new Ie(ai,ai,n)],this.cur=0,this.origin=new dt(0,0),this.hull=[].concat(...e.map(o=>this.hullTable(o)));let i=()=>new dt,r=()=>new Bt;this.quad=new qt(new Ln(2,2)),this.scene=new un,this.scene.add(this.quad),this.cam=new hn(-1,1,1,-1,0,1),this.sim=new ce({vertexShader:h_,depthTest:!1,depthWrite:!1,uniforms:{uS:{value:null},uTexel:{value:1/ai},uOrigin:{value:this.origin},uSize:{value:oa},uDt:{value:1/60},uShipP:{value:Array.from({length:Ks},r)},uShipF:{value:Array.from({length:Ks},r)},uNS:{value:0},uHull:{value:this.hull},uShift:{value:new dt},uTime:{value:0},uK:{value:d_()},uGdt2:{value:0},uA:{value:0},uDrop:{value:Array.from({length:aa},r)},uND:{value:0}},fragmentShader:`
        uniform sampler2D uS; uniform float uTexel, uSize, uDt, uTime;
        uniform vec2 uOrigin, uShift;
        // per ship: P = (x, z, heave, sub), F = (fwd.x, fwd.z, speed, kind)
        uniform vec4 uShipP[${Ks}], uShipF[${Ks}]; uniform int uNS;
        uniform vec2 uHull[${dn*u_}];
        uniform vec4 uDrop[${aa}]; uniform int uND;
        uniform float uK[${(Vn+1)*(Vn+1)}]; uniform float uGdt2, uA;
        varying vec2 vUv;
        float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
        float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
          return mix(mix(h12(i), h12(i + vec2(1, 0)), u.x), mix(h12(i + vec2(0, 1)), h12(i + vec2(1, 1)), u.x), u.y); }
        // signed distance (m) from the waterline outline of the hull, in ship-local (f forward, x port)
        float hullSDF(vec2 q, int k){
          int o = k * ${dn};
          float f = q.x, x = abs(q.y);
          vec2 h0 = uHull[o], h1 = uHull[o + ${dn-1}];
          if (f < h0.x || f > h1.x) {
            float e = f < h0.x ? h0.x - f : f - h1.x;
            return max(e, x - (f < h0.x ? h0.y : h1.y));
          }
          float w = 0.0;
          for (int i = 0; i < ${dn-1}; i++){
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
          for (int j = -${Vn}; j <= ${Vn}; j++) for (int i = -${Vn}; i <= ${Vn}; i++) {
            float kk = uK[abs(j) * ${Vn+1} + abs(i)];
            if (kk != 0.0) vd += kk * texture2D(uS, uv + vec2(float(i), float(j)) * uTexel).r;
          }
          float hn = (s.r * (2.0 - uA) - s.g - uGdt2 * vd) / (1.0 + uA);
          // bleed off grid-scale ripple (the kernel does not resolve it and it shows as a saw edge on the hull)
          hn = mix(hn, (hl + hr + hd + hu) * 0.25, 0.12);
          hn = clamp(hn, -1.6, 1.6);
          vec2 w = uOrigin + (uv - 0.5) * uSize;           // world xz of this cell
          float make = 0.0, inside = 0.0;
          for (int si = 0; si < ${Ks}; si++){
            if (si >= uNS) break;
            vec4 P = uShipP[si], Fw = uShipF[si];
            vec2 d = w - P.xy;
            int kind = int(Fw.w + 0.5);
            float reach = uHull[kind * ${dn} + ${dn-1}].x + 6.0;
            if (dot(d, d) > reach * reach * 1.6) continue;
            vec2 fwd = Fw.xy, side = vec2(fwd.y, -fwd.x);   // side points to port in three.js axes (x left)
            vec2 q = vec2(dot(d, fwd), dot(d, side));
            float sdf = hullSDF(q, kind);
            float spd = Fw.z, sub = P.w, heave = P.z;
            float hb = uHull[kind * ${dn} + ${dn/2}].y;          // half-breadth amidships
            // inside the waterline the hull holds the surface down (deeper with speed: the bow wave and stern trough)
            float ins = smoothstep(2.0, -2.0, sdf) * sub;
            float press = -min(0.03 * spd, 0.5) - heave * 0.5;
            hn = mix(hn, press, ins * 0.25 * smoothstep(0.5, 3.0, spd + abs(heave) * 3.0));
            inside = max(inside, ins);
            // foam: a thin white edge along the sides, the bow wave, and the screws' wash astern
            float band = exp(-max(sdf, 0.0) / (0.35 * hb + 1.0)) * smoothstep(-0.5, 0.8, sdf);
            float bowF = uHull[kind * ${dn} + ${dn-1}].x, sternF = uHull[kind * ${dn}].x;
            float L = bowF - sternF;
            // the bow wave: a white roll along both sides of the forefoot, breaking outward (not ahead of the stem)
            float bow = smoothstep(L * 0.22, 0.0, bowF - q.x) * step(q.x, bowF - 1.0) * exp(-max(sdf, 0.0) / (0.5 * hb + 1.0)) * smoothstep(-0.5, 1.0, sdf);
            float stern = smoothstep(hb * 1.5, hb * 0.2, length((q - vec2(sternF - hb * 0.6, 0.0)) * vec2(0.6, 1.0))) * step(q.x, sternF + L * 0.06);
            float n = vn(w * 0.6 + uTime * 0.7) * vn(w * 0.17 - uTime * 0.3);
            float sp = smoothstep(1.0, 9.0, spd);
            make += (band * (0.3 + 0.7 * n) * 0.35 + bow * 1.2 + stern * n * n * 1.6) * sp * sub;
          }
          // balls landing: a pit that rings out, and foam
          for (int di = 0; di < ${aa}; di++){
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
        }`});for(let o of this.rt)t.setRenderTarget(o),t.clear();t.setRenderTarget(null),this.acc=0,this.t=0,this.uniforms={uWake:{value:this.rt[0].texture},uWakeO:{value:this.origin},uWakeS:{value:oa},uWakeTexel:{value:1/ai}}}reset(t,e){for(let n of this.rt)this.r.setRenderTarget(n),this.r.setClearColor(0,0),this.r.clear();this.r.setRenderTarget(null),this.origin.set(t,e)}hullTable(t){let e=[],n=i=>t[Math.round(i*(t.length-1)/(dn-1))];for(let i=0;i<dn;i++){let[r,o]=n(i),a=0;for(let c=0;c+1<o.length;c++){let[l,h]=o[c],[u,d]=o[c+1];h<=0&&d>=0&&(a=l+(u-l)*(0-h)/Math.max(d-h,1e-6))}o[0][1]>0&&(a=.05),e.push(new dt(r,a))}return e}step(t,e,n,i=[]){let r=this.sim.uniforms;this.pending?.length&&(i=this.pending.concat(i),this.pending=null);let o=e.x-this.origin.x,a=e.z-this.origin.y,c=0,l=0;Math.abs(o)>oa*.12&&(c=Math.round(o/Zs)),Math.abs(a)>oa*.12&&(l=Math.round(a/Zs)),this.acc=Math.min(this.acc+t,.1);let h=1/60;r.uGdt2.value=9.81/Zs*h*h,r.uA.value=.18*h,r.uDt.value=h;let u=Math.min(n.length,Ks);for(let g=0;g<u;g++){let x=n[g];r.uShipP.value[g].set(x.pos.x,x.pos.z,x.heave,x.sub??1),r.uShipF.value[g].set(x.fwd.x,x.fwd.y,x.speed,x.kind)}r.uNS.value=u;let d=Math.min(i.length,aa);for(let g=0;g<d;g++)r.uDrop.value[g].set(i[g].x,i[g].z,i[g].r,i[g].h);let f=!0;for(;this.acc>=h;)this.acc-=h,this.t+=h,r.uTime.value=this.t,f&&(c||l)?(r.uShift.value.set(c/ai,l/ai),this.origin.x+=c*Zs,this.origin.y+=l*Zs):r.uShift.value.set(0,0),r.uND.value=f?d:0,f=!1,r.uS.value=this.rt[this.cur].texture,this.quad.material=this.sim,this.r.setRenderTarget(this.rt[1-this.cur]),this.r.render(this.scene,this.cam),this.cur=1-this.cur;f&&(this.pending=i),this.r.setRenderTarget(null),this.uniforms.uWake.value=this.rt[this.cur].texture}},_l=`
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
`;var Yd=`
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
`;var f_=`
${Cr}
${_l}
${xl}
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
}`,p_=`
uniform float uTime;
${Ki}
${Cr}
${_l}
${qd}
${Yd}
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
}`;function m_(s,t,e,n){let i=[],r=[],o=[],a=[0],c=Math.pow(n/e,1/(s-1));for(let h=0;h<s;h++)a.push(e*Math.pow(c,h));for(let h=0;h<a.length;h++){let u=a[h],d=Math.max((a[h+1]??u*c)-u,2*Math.PI*Math.max(u,e)/t);for(let f=0;f<t;f++){let g=f/t*Math.PI*2;i.push(u*Math.cos(g),0,u*Math.sin(g)),r.push(d)}}for(let h=0;h<a.length-1;h++)for(let u=0;u<t;u++){let d=h*t+u,f=h*t+(u+1)%t,g=(h+1)*t+u,x=(h+1)*t+(u+1)%t;o.push(d,g,f,f,g,x)}let l=new xe;return l.setAttribute("position",new Jt(i,3)),l.setAttribute("aFw",new Jt(r,1)),l.setIndex(o),l}function la(s,t){let e=a=>a-Math.floor(a),n=e(s*.1031),i=e(t*.1031),r=e(s*.1031),o=n*(i+33.33)+i*(r+33.33)+r*(n+33.33);return n+=o,i+=o,r+=o,e((n+i)*r)}function g_(s,t=[],e=[]){let n=[];for(let o=0;o<40;o++){let a=6*Math.pow(.855,o)*(.8+.4*la(o,9.1)),c=s+(la(o,3.1)-.5)*2.8,l=2*Math.PI/a,h=Math.sqrt(9.81*l+.074/1e3*l*l*l),u=(f,g,x)=>{let p=Math.min(1,Math.max(0,(x-f)/(g-f)));return p*p*(3-2*p)},d=.11*(.5+la(o,7.7))*(.45+.55*u(1.2,.05,a));n.push({dx:Math.cos(c),dz:Math.sin(c),k:l,om:h,amp:d/l,ph:la(o,1.3)*6.2831,lam:a})}n.sort((o,a)=>a.lam-o.lam);let i=0,r=new Array(40);for(let o=39;o>=0;o--)i+=(n[o].amp*n[o].k)**2*.5,r[o]=i;return n.forEach((o,a)=>{(t[a]||=new Bt).set(o.dx,o.dz,o.k,o.om),(e[a]||=new Bt).set(o.amp,o.ph,r[a],o.lam)}),{A:t,B:e}}function $d({skyU:s,seaU:t,wakeU:e,windU:n,tideU:i,reflTarget:r,refrTarget:o,shipShadowU:a,timeU:c,quality:l}){let h=Object.assign({},s,t,e,n,i,a,{uTime:c,uCenter:{value:new w},uRefl:{value:r.texture},uRefr:{value:o.texture},uReflTexel:{value:new dt(1/r.width,1/r.height)},uSunIrr:{value:s.uSunCol.value},uRA:{value:[]},uRB:{value:[]},uLayers:{value:new Bt(1,1,1,0)}}),u=n.uWind.value;g_(Math.atan2(u.y,u.x),h.uRA.value,h.uRB.value);let d=m_(l.oceanRings,l.oceanSeg,.35,16e3),f=new ce({vertexShader:f_,fragmentShader:p_,uniforms:h,side:on}),g=new qt(d,f);g.frustumCulled=!1;function x(p){h.uCenter.value.set(Math.round(p.position.x),0,Math.round(p.position.z))}return{mesh:g,uniforms:h,update:x}}function Kd(s){let t=new Ie(s,s,{depthBuffer:!0,stencilBuffer:!1}),e=new yi(s,s,xn);return e.compareFunction=Qo,e.magFilter=e.minFilter=ue,t.depthTexture=e,t}var ha=class{constructor(t,e,{landSize:n=6e3,landRes:i=4096,shipSize:r=64,shipRes:o=2048}={}){this.r=t,this.sun=e,this.landRT=Kd(i),this.shipRT=Kd(o);let a=n/2,c=r/2;this.shipSize=r,this.shipRes=o,this.landCam=new hn(-a,a,a,-a,10,9e3),this.shipCam=new hn(-c,c,c,-c,1,400),this.landScene=new un,this.shipScene=new un,this.uniforms={uLandSM:{value:this.landRT.depthTexture},uLandVP:{value:new vt},uLandTexel:{value:1/i},uShipSM:{value:this.shipRT.depthTexture},uShipVP:{value:new vt},uShipTexel:{value:1/o},uShadowOn:{value:1},uMirror:{value:1}},this.depthMat=new _r}aim(t,e,n){t.position.copy(e).addScaledVector(this.sun,n),t.up.set(0,1,0),t.lookAt(e),t.updateMatrixWorld(),t.updateProjectionMatrix()}addCaster(t,{ship:e=!1}={}){let n=t.userData.depthMat??this.depthMat,i=t.isInstancedMesh?new _n(t.geometry,n,t.count):new qt(t.geometry,n);return t.isInstancedMesh&&(i.instanceMatrix=t.instanceMatrix,i.count=t.count),i.matrixAutoUpdate=!1,i.frustumCulled=!1,i.userData.src=t,(e?this.shipScene:this.landScene).add(i),i}sync(t){for(let e of t.children){let n=e.userData.src;n&&(e.matrix.copy(n.matrixWorld),e.matrixWorld.copy(n.matrixWorld),n.isInstancedMesh&&(e.count=n.count),e.visible=n.visible)}}renderLand(t){this.aim(this.landCam,t,4e3),this.sync(this.landScene),this._draw(this.landRT,this.landScene,this.landCam),this.uniforms.uLandVP.value.multiplyMatrices(this.landCam.projectionMatrix,this.landCam.matrixWorldInverse)}renderShip(t){this.aim(this.shipCam,t,200);let e=this.shipSize/this.shipRes,n=t.clone(),i=this.shipCam.matrixWorld.elements,r=new w(i[0],i[1],i[2]),o=new w(i[4],i[5],i[6]),a=r.dot(n),c=o.dot(n);n.addScaledVector(r,Math.round(a/e)*e-a).addScaledVector(o,Math.round(c/e)*e-c),this.aim(this.shipCam,n,200),this.sync(this.shipScene),this._draw(this.shipRT,this.shipScene,this.shipCam),this.uniforms.uShipVP.value.multiplyMatrices(this.shipCam.projectionMatrix,this.shipCam.matrixWorldInverse)}_draw(t,e,n){let i=this.r,r=i.getRenderTarget(),o=i.autoClear;i.setRenderTarget(t),i.autoClear=!0,i.clear(!0,!0,!1),i.render(e,n),i.setRenderTarget(r),i.autoClear=o}},x_=`
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
`;function Zd(s,t){let e=s.onBeforeCompile;s.onBeforeCompile=(i,r)=>{e?.call(s,i,r),Object.assign(i.uniforms,t.uniforms),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vShW; varying vec3 vShN; uniform float uMirror;`).replace("#include <project_vertex>",`#include <project_vertex>
        { vec4 swp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            swp = instanceMatrix * swp;
          #endif
          vShW = (modelMatrix * swp).xyz;
          vShN = normalize(inverseTransformDirection(transformedNormal, viewMatrix));
          vShW.y *= uMirror; vShN.y *= uMirror; }`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vShW; varying vec3 vShN;
${x_}`).replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
        float shadowF = sunShadowAt(vShW, normalize(vShN));
        reflectedLight.directDiffuse *= shadowF; reflectedLight.directSpecular *= shadowF;`)};let n=s.customProgramCacheKey?.bind(s);return s.customProgramCacheKey=()=>(n?n():"")+"|sh",s}var ua="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";function yl(s,t,e=0,n=!1){let i=new Ie(s,t,{type:Cn,format:ze,samples:e,minFilter:ue,magFilter:ue,depthBuffer:e>0||n});return n&&(i.depthTexture=new yi(s,t,xn)),i}var da=class{constructor(t,e,n,{samples:i=4,levels:r=6}={}){this.samples=i,this.r=t,this.levels=r,this.quad=new qt(new Ln(2,2)),this.quad.frustumCulled=!1,this.qs=new un,this.qs.add(this.quad),this.cam=new hn(-1,1,1,-1,0,1),this.down=new ce({vertexShader:ua,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uTexel:{value:new dt},uThresh:{value:0},uFirst:{value:0}},fragmentShader:`
        uniform sampler2D uTex; uniform vec2 uTexel; uniform float uThresh; uniform float uFirst; varying vec2 vUv;
        vec3 tap(vec2 o){ vec3 c = min(texture2D(uTex, vUv + o * uTexel).rgb, vec3(80.0));
          if (uFirst > 0.5) c = max(c - uThresh, 0.0); return c; }
        void main(){
          vec3 c = tap(vec2(0.0)) * 4.0 + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));
          gl_FragColor = vec4(c / 8.0, 1.0);
        }`}),this.up=new ce({vertexShader:ua,depthTest:!1,depthWrite:!1,blending:Ds,uniforms:{uTex:{value:null},uTexel:{value:new dt},uW:{value:1}},fragmentShader:`
        uniform sampler2D uTex; uniform vec2 uTexel; uniform float uW; varying vec2 vUv;
        void main(){
          vec3 c = vec3(0.0);
          c += texture2D(uTex, vUv + vec2(-2.0, 0.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(2.0, 0.0) * uTexel).rgb;
          c += texture2D(uTex, vUv + vec2(0.0, -2.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(0.0, 2.0) * uTexel).rgb;
          c += (texture2D(uTex, vUv + vec2(-1.0, -1.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(1.0, -1.0) * uTexel).rgb
              + texture2D(uTex, vUv + vec2(-1.0, 1.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(1.0, 1.0) * uTexel).rgb) * 2.0;
          gl_FragColor = vec4(c / 12.0 * uW, 1.0);
        }`}),this.copy=new ce({vertexShader:ua,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uDepth:{value:null},uNear:{value:.3},uFar:{value:9e3}},fragmentShader:`
        uniform sampler2D uTex, uDepth; uniform float uNear, uFar; varying vec2 vUv;
        void main(){
          float z = texture2D(uDepth, vUv).r;
          float ndc = z * 2.0 - 1.0;
          float lin = 2.0 * uNear * uFar / (uFar + uNear - ndc * (uFar - uNear));
          gl_FragColor = vec4(texture2D(uTex, vUv).rgb, lin);
        }`}),this.final=new ce({vertexShader:ua,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uBloom:{value:null},uExposure:{value:1},uBloomK:{value:.12},uT:{value:0},uVignette:{value:.45},uWarm:{value:new w(1.1,1,.84)},uCool:{value:new w(1,.99,.98)},uSat:{value:1.08},uContrast:{value:1.12},uUnder:{value:0}},fragmentShader:`
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
        }`}),this.setSize(e,n,i)}setSize(t,e,n=this.samples){this.w=t,this.h=e,this.scene?.dispose(),(this.chain||[]).forEach(o=>o.dispose()),this.scene=yl(t,e,n,!0),this.refr?.dispose(),this.refr=yl(t>>1,e>>1),this.chain=[];let i=t,r=e;for(let o=0;o<this.levels;o++)i=Math.max(2,i>>1),r=Math.max(2,r>>1),this.chain.push(yl(i,r))}pass(t,e,n){t.uniforms.uTex.value=e.texture??e,this.quad.material=t,this.r.setRenderTarget(n),this.r.render(this.qs,this.cam)}render(t,e,{exposure:n=1,t:i=0,thresh:r=1.2,overlay:o=null,under:a=0}={}){let c=this.r;if(c.setRenderTarget(this.scene),c.render(t,e),o){let d=this.copy.uniforms;d.uDepth.value=this.scene.depthTexture,d.uNear.value=e.near,d.uFar.value=e.far,this.pass(this.copy,this.scene,this.refr),c.setRenderTarget(this.scene);let f=c.autoClear;c.autoClear=!1,c.render(o,e),c.autoClear=f}let l=this.scene;for(let d=0;d<this.levels;d++){let f=this.chain[d];this.down.uniforms.uTexel.value.set(1/l.width,1/l.height),this.down.uniforms.uFirst.value=d===0?1:0,this.down.uniforms.uThresh.value=r,this.pass(this.down,l,f),l=f}let h=c.autoClear;c.autoClear=!1;for(let d=this.levels-1;d>0;d--){let f=this.chain[d],g=this.chain[d-1];this.up.uniforms.uTexel.value.set(1/f.width,1/f.height),this.up.uniforms.uW.value=1,this.pass(this.up,f,g)}c.autoClear=h;let u=this.final.uniforms;u.uBloom.value=this.chain[0].texture,u.uExposure.value=n,u.uT.value=i,u.uUnder.value=a,this.pass(this.final,this.scene,null)}};var Jd=new URLSearchParams(location.search).get("q"),v_=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,__=Math.min(screen.width,screen.height)<820,Lr=Jd?Jd==="low":v_&&__||/iPhone|Android.+Mobile/.test(navigator.userAgent);function Ml(s,t){if(t===Ad)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Rr||t===Jo){let e=s.getIndex();if(e===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=e.count-2,i=[];if(t===Rr)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}var fa=class extends oi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Rl(e)}),this.register(function(e){return new Ol(e)}),this.register(function(e){return new kl(e)}),this.register(function(e){return new zl(e)}),this.register(function(e){return new Ll(e)}),this.register(function(e){return new Pl(e)}),this.register(function(e){return new Il(e)}),this.register(function(e){return new Dl(e)}),this.register(function(e){return new Al(e)}),this.register(function(e){return new Ul(e)}),this.register(function(e){return new Cl(e)}),this.register(function(e){return new Fl(e)}),this.register(function(e){return new Nl(e)}),this.register(function(e){return new El(e)}),this.register(function(e){return new Bl(e)}),this.register(function(e){return new Hl(e)})}load(t,e,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=wi.extractUrlBase(t);o=wi.resolveURL(l,this.path)}else o=wi.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Tr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===nf){try{o[Xt.KHR_BINARY_GLTF]=new Vl(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Kl(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Xt.KHR_MATERIALS_UNLIT:o[u]=new Tl;break;case Xt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Gl(r,this.dracoLoader);break;case Xt.KHR_TEXTURE_TRANSFORM:o[u]=new Wl;break;case Xt.KHR_MESH_QUANTIZATION:o[u]=new Xl;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}};function y_(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}var Xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},El=class{constructor(t){this.parser=t,this.name=Xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new xt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Te);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new qs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Xs(h),l.distance=u;break;case"spot":l=new qo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ti(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},Tl=class{constructor(){this.name=Xt.KHR_MATERIALS_UNLIT}getMaterialType(){return je}extendParams(t,e,n){let i=[];t.color=new xt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Te),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,ae))}return Promise.all(i)}},Al=class{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},Rl=class{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new dt(a,a)}return Promise.all(r)}},Cl=class{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Ll=class{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new xt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Te)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,ae)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Pl=class{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Il=class{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new xt().setRGB(a[0],a[1],a[2],Te),Promise.all(r)}},Dl=class{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ul=class{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new xt().setRGB(a[0],a[1],a[2],Te),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,ae)),Promise.all(r)}},Nl=class{constructor(t){this.parser=t,this.name=Xt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},Fl=class{constructor(t){this.parser=t,this.name=Xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Ol=class{constructor(t){this.parser=t,this.name=Xt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},kl=class{constructor(t){this.parser=t,this.name=Xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},zl=class{constructor(t){this.parser=t,this.name=Xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Bl=class{constructor(t){this.name=Xt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Hl=class{constructor(t){this.name=Xt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==bn.TRIANGLES&&l.mode!==bn.TRIANGLE_STRIP&&l.mode!==bn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new vt,p=new w,m=new de,_=new w(1,1,1),v=new _n(g.geometry,g.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,S),c.SCALE&&_.fromBufferAttribute(c.SCALE,S),v.setMatrixAt(S,x.compose(p,m,_));for(let S in c)if(S==="_COLOR_0"){let C=c[S];v.instanceColor=new Qe(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);fe.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},nf="glTF",Pr=12,jd={JSON:1313821514,BIN:5130562},Vl=class{constructor(t){this.name=Xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==nf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Pr,r=new DataView(t,Pr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===jd.JSON){let l=new Uint8Array(t,Pr+o,a);this.content=n.decode(l)}else if(c===jd.BIN){let l=Pr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Gl=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Yl[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Yl[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[t.attributes[h]],f=Js[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}u(f)},a,l,Te,d)})})}},Wl=class{constructor(){this.name=Xt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Xl=class{constructor(){this.name=Xt.KHR_MESH_QUANTIZATION}},pa=class extends Mi{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*l,x=g-l,p=-2*f+3*d,m=f-d,_=1-p,v=m-d+u;for(let S=0;S!==a;S++){let C=o[x+S+a],R=o[x+S+c]*h,T=o[g+S+a],N=o[g+S]*h;r[S]=_*C+v*R+p*T+m*N}return r}},M_=new de,ql=class extends pa{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return M_.fromArray(r).normalize().toArray(r),r}},bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qd={9728:be,9729:ue,9984:bo,9985:ll,9986:hr,9987:Bn},tf={33071:an,33648:mr,10497:Xi},bl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},b_={CUBICSPLINE:void 0,LINEAR:qi,STEP:Os},Sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function S_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new In({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),s.DefaultMaterial}function Zi(s,t,e){for(let n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ti(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function w_(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function E_(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function T_(s){let t,e=s.extensions&&s.extensions[Xt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+wl(e.attributes):t=s.indices+":"+wl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+wl(s.targets[n]);return t}function wl(s){let t="",e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function $l(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function A_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var R_=new vt,Kl=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new y_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Gs(this.options.manager):this.textureLoader=new $o(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Zi(r,a,i),Ti(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Xt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(wi.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=bl[i.type],a=Js[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ee(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=bl[i.type],l=Js[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,p;if(f&&f!==u){let m=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=e.cache.get(_);v||(x=new l(a,m*f,i.count*f/h),v=new Mr(x,f/h),e.cache.add(_,v)),p=new br(v,c,d%f/h,g)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),p=new Ee(x,c,g);if(i.sparse!==void 0){let m=bl.SCALAR,_=Js[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,C=new _(o[1],v,i.sparse.count*m),R=new l(o[2],S,i.sparse.count*c);a!==null&&(p=new Ee(p.array.slice(),p.itemSize,p.normalized));for(let T=0,N=C.length;T<N;T++){let M=C[T];if(p.setX(M,R[T*c]),c>=2&&p.setY(M,R[T*c+1]),c>=3&&p.setZ(M,R[T*c+2]),c>=4&&p.setW(M,R[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Qd[d.magFilter]||ue,h.minFilter=Qd[d.minFilter]||Bn,h.wrapS=tf[d.wrapS]||Xi,h.wrapT=tf[d.wrapT]||Xi,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=i.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(x){let p=new He(x);p.needsUpdate=!0,d(p)}),e.load(wi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||A_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Xt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Er,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new wr,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return In}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[Xt.KHR_MATERIALS_UNLIT]){let u=i[Xt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new xt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Te),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,ae)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=on);let h=r.alphaMode||Sl.OPAQUE;if(h===Sl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Sl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==je&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new dt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==je&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==je){let u=r.emissiveFactor;a.emissive=new xt().setRGB(u[0],u[1],u[2],Te)}return r.emissiveTexture!==void 0&&o!==je&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,ae)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ti(u,r),e.associations.set(u,{materials:t}),r.extensions&&Zi(i,u,r),u})}createUniqueName(t){let e=se.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return ef(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=T_(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Xt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ef(new xe,l,e),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?S_(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],p=o[f],m,_=l[f];if(p.mode===bn.TRIANGLES||p.mode===bn.TRIANGLE_STRIP||p.mode===bn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new No(x,_):new qt(x,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===bn.TRIANGLE_STRIP?m.geometry=Ml(m.geometry,Jo):p.mode===bn.TRIANGLE_FAN&&(m.geometry=Ml(m.geometry,Rr));else if(p.mode===bn.LINES)m=new Oo(x,_);else if(p.mode===bn.LINE_STRIP)m=new Vs(x,_);else if(p.mode===bn.LINE_LOOP)m=new ko(x,_);else if(p.mode===bn.POINTS)m=new zo(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&E_(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),Ti(m,r),p.extensions&&Zi(i,m,p),e.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&Zi(i,u[0],r),u[0];let d=new we;r.extensions&&Zi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Se(Et.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new hn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ti(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new vt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Fo(a,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],x=f.target,p=x.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let _=0,v=d.length;_<v;_++){let S=d[_],C=f[_],R=g[_],T=x[_],N=p[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let M=n._createAnimationTracks(S,C,R,T,N);if(M)for(let A=0;A<M.length;A++)m.push(M[A])}return new Wo(r,void 0,m)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,R_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Sr:l.length>1?h=new we:l.length===1?h=l[0]:h=new fe,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ti(h,r),r.extensions&&Zi(n,h,r),r.matrix!==void 0){let u=new vt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new we;n.name&&(r.name=i.createUniqueName(n.name)),Ti(r,n),n.extensions&&Zi(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof ln||d instanceof He)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let o=[],a=t.name?t.name:t.uuid,c=[];Ei[r.path]===Ei.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ei[r.path]){case Ei.weights:l=si;break;case Ei.rotation:l=Hn;break;case Ei.position:case Ei.scale:l=ri;break;default:switch(n.itemSize){case 1:l=si;break;case 2:case 3:default:l=ri;break}break}let h=i.interpolation!==void 0?b_[i.interpolation]:qi,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Ei[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=$l(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Hn?ql:pa;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function C_(s,t,e){let n=t.attributes,i=new vn;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){let h=$l(Js[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new w,c=new w;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=$l(Js[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new cn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ef(s,t,e){let n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Yl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){let o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Kt.workingColorSpace!==Te&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Kt.workingColorSpace}" not supported.`),Ti(s,t),C_(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?w_(s,t.targets,e):s})}var Ji=["bb","ca","dd"],ma=["A","E"],L_=700;async function Zl(s,t,e,n){let i=await s.loadAsync(t);return i.flipY=!1,i.colorSpace=e?ae:Je,i.anisotropy=n,i}function ga(s,{patch:t,U:e,seaU:n,key:i}){let r=new In(Object.assign({roughness:1,metalness:1},s));return r.onBeforeCompile=o=>{Object.assign(o.uniforms,n,{uTime:e.uTime}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aBurn;
varying vec3 vWetW; varying vec4 vBurn; varying vec3 vLoc;`).replace("#include <project_vertex>",`#include <project_vertex>
        { vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp; vBurn = aBurn;
          #else
            vBurn = vec4(0.0, 0.0, 0.0, 200.0);
          #endif
          vWetW = (modelMatrix * wp).xyz; vLoc = transformed; }`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWetW; varying vec4 vBurn; varying vec3 vLoc; uniform float uTime;
${Cr}
        float bh(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
        float bn(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(bh(i), bh(i + vec3(1,0,0)), f.x), mix(bh(i + vec3(0,1,0)), bh(i + vec3(1,1,0)), f.x), f.y),
                     mix(mix(bh(i + vec3(0,0,1)), bh(i + vec3(1,0,1)), f.x), mix(bh(i + vec3(0,1,1)), bh(i + vec3(1,1,1)), f.x), f.y), f.z); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float seaH = gerstner(vWetW.xz, uTime, 2.0).y;
        float wetM = smoothstep(0.8, 0.0, vWetW.y - seaH);
        diffuseColor.rgb *= mix(1.0, 0.55, wetM);
        roughnessFactor = mix(roughnessFactor, 0.25, wetM);
        {
          float u = clamp(vLoc.z / vBurn.w + 0.5, 0.0, 1.0);
          float b = u < 0.5 ? mix(vBurn.z, vBurn.y, u * 2.0) : mix(vBurn.y, vBurn.x, u * 2.0 - 1.0);
          float n = bn(vLoc * 0.35) * 0.6 + bn(vLoc * 1.3) * 0.4;
          float c = smoothstep(0.2, 0.7, b * (0.6 + 0.8 * n));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.018, 0.016, 0.015), c);
          roughnessFactor = mix(roughnessFactor, 0.95, c);
        }`)},r.customProgramCacheKey=()=>"steel"+i,t?.(r),r}function P_(s,t){let e=null;return s.traverse(n=>{(n.name===t&&n.geometry||n.name===t&&!e)&&(e=n)}),e}function xa(s,t){let e=P_(s,t);if(!e)return null;if(e.geometry)return e.geometry;let n=null;return e.traverse(i=>{!n&&i.geometry&&(n=i.geometry)}),n}var I_={bb:{L:215,B:32,D:18,T:9.5},ca:{L:185,B:19,D:11,T:6},dd:{L:112,B:10.4,D:6.5,T:3.7}};function D_(s){let{L:t,B:e,D:n,T:i}=I_[s],r=n-i,o=[];for(let l=0;l<=24;l++){let h=-t/2+t*l/24,u=h/(t/2),d=e/2*Math.sqrt(Math.max(0,1-Math.pow(Math.max(u,0),2.2)))*(u<0?1-.25*Math.pow(-u,4):1),f=[];for(let g=0;g<=6;g++){let x=g/6;f.push([d*Math.sin(x*Math.PI/2)**.6,-i+(i+r)*x])}o.push([h,f])}let c={bb:[[.32,0],[.2,1],[-.24,1],[-.36,0]],ca:[[.36,0],[.27,1],[.18,2],[-.25,1],[-.34,0]],dd:[[.33,0],[-.22,1],[-.36,0]]}[s].map(([l,h])=>{let u=l*t,d=u>0;return{at:[0,r+h*e*.09,u],arc:d?[-2.3,2.3]:[Math.PI-2.3,Math.PI+2.3],guns:2,gap:e*.11,trunnion:[0,e*.06,e*.05],barrel_len:e*.6,rest:d?0:Math.PI}});return{kind:s,L:t,B:e,D:n,T:i,deck_top:r,stations:o,turrets:c,funnels:s==="bb"?[[0,r+22,-t*.02]]:s==="ca"?[[0,r+14,-t*.02]]:[[0,r+9,t*.02],[0,r+9,-t*.08]],boxes:[{min:[-e/2,-i,-t/2],max:[e/2,r,t/2],part:"hull"},{min:[-e*.3,r,-t*.14],max:[e*.3,r+e*.9,t*.1],part:"superstructure"}]}}function U_(s){let{L:t,B:e,deck_top:n}=s,i=[],r=s.stations,o=[],a=[],c=r[0][1].length;for(let[g,x]of r){for(let p=c-1;p>=0;p--)o.push(-x[p][0],x[p][1],g);for(let p=0;p<c;p++)o.push(x[p][0],x[p][1],g)}let l=c*2;for(let g=0;g+1<r.length;g++)for(let x=0;x+1<l;x++){let p=g*l+x,m=p+l;a.push(p,m,p+1,p+1,m,m+1)}let h=o.length/3;for(let[g,x]of r){let p=x[c-1][0];o.push(p,n,g,-p,n,g)}for(let g=0;g+1<r.length;g++){let x=h+g*2;a.push(x,x+2,x+1,x+1,x+2,x+3)}let u=new xe;u.setAttribute("position",new Jt(o,3)),u.setIndex(a),u.computeVertexNormals(),i.push(u);let d=(g,x,p,m,_,v)=>i.push(new $i(g,x,p).translate(m,_+x/2,v));d(e*.45,e*.5,t*.18,0,n,0),d(e*.25,e*.55,e*.3,0,n+e*.5,t*.05);for(let g of s.funnels)i.push(new Pn(e*.09,e*.11,g[1]-n,12).translate(g[0],(g[1]+n)/2,g[2]));return N_(i)}function N_(s){let t=[],e=[],n=[],i=0;for(let o of s){o=(o.index,o);let a=o.attributes.position.array,c=o.attributes.normal.array;for(let l=0;l<a.length;l++)t.push(a[l]),e.push(c[l]);if(o.index)for(let l of o.index.array)n.push(l+i);else for(let l=0;l<a.length/3;l++)n.push(l+i);i+=a.length/3}let r=new xe;return r.setAttribute("position",new Jt(t,3)),r.setAttribute("normal",new Jt(e,3)),r.setAttribute("uv",new Jt(new Float32Array(t.length/3*2),2)),r.setIndex(n),r}async function of(s,{aniso:t=8,patch:e,U:n,seaU:i}){let r=new Gs,o=new fa,a={kinds:{}};return await Promise.all(Ji.map(async c=>{let l=null;try{let h=await fetch(`${s}${c}.json`);h.ok&&(l=await h.json())}catch{}if(l){let[h,u,d,f]=await Promise.all([Zl(r,`${s}${c}_base.webp`,!0,t),Zl(r,`${s}${c}_base_e.webp`,!0,t),Zl(r,`${s}${c}_orm.webp`,!1,t),o.loadAsync(`${s}${c}.glb`)]);l.kind=c;let g={A:ga({map:h,aoMap:d,roughnessMap:d,metalnessMap:d},{patch:e,U:n,seaU:i,key:"A"}),E:ga({map:u,aoMap:d,roughnessMap:d,metalnessMap:d},{patch:e,U:n,seaU:i,key:"E"})},x=xa(f.scene,"hull");a.kinds[c]={meta:l,mats:g,geo:{lod:[x,xa(f.scene,"hull_lod1")??x],turret:xa(f.scene,"turret"),barrel:xa(f.scene,"barrel")},baked:!0}}else{l=D_(c);let h={A:ga({color:2763822,roughness:.6,metalness:.3},{patch:e,U:n,seaU:i,key:"Ai"}),E:ga({color:9146774,roughness:.6,metalness:.3},{patch:e,U:n,seaU:i,key:"Ei"})},u=l.B,d=new Pn(u*.16,u*.18,u*.12,16).translate(0,u*.06,0),f=new Pn(u*.018,u*.024,u*.6,8).rotateX(Math.PI/2).translate(0,0,u*.3);for(let x of[d,f])x.setAttribute("uv",new Jt(new Float32Array(x.attributes.position.count*2),2));let g=U_(l);a.kinds[c]={meta:l,mats:h,geo:{lod:[g,g],turret:d,barrel:f},baked:!1}}})),a}var Jl=new vt,jl=new vt,js=new vt,Ql=new de,sf=new w,rf=new w(1,1,1),F_=new w(0,1,0),O_=new w(1,0,0),va=class{constructor(t,e={bb:6,ca:14,dd:28}){this.art=t,this.group=new we,this.sets={};for(let n of Ji){let i=t.kinds[n],r=e[n],o=i.meta.turrets.length,a={hull:{},turret:{},barrel:{}};for(let c of ma){let l=(h,u)=>{let d=new _n(h.clone(),i.mats[c],u);d.count=0,d.frustumCulled=!1;let f=new Qe(new Float32Array(u*4),4);return d.geometry.setAttribute("aBurn",f),d.userData.burn=f,this.group.add(d),d};a.hull[c]=i.geo.lod.map(h=>l(h,r)),a.turret[c]=l(i.geo.turret,160),a.barrel[c]=l(i.geo.barrel,480)}this.sets[n]=a}}casters(){let t=[];for(let e of Ji)for(let n of ma){let i=this.sets[e];t.push(i.hull[n][0],i.turret[n],i.barrel[n])}return t}update(t,e){for(let n of Ji)for(let i of ma){let r=this.sets[n];for(let o of[...r.hull[i],r.turret[i],r.barrel[i]])o.count=0}for(let n of t){if(n.gone)continue;let i=this.art.kinds[n.kind],r=this.sets[n.kind],o=n.body,a=i.meta.L;Jl.compose(o.pos,o.quat,rf);let c=e.distanceTo(o.pos)<L_?0:1,l=(h,u)=>{let d=h.count++;h.setMatrixAt(d,u),h.userData.burn.setXYZW(d,n.burn[0],n.burn[1],n.burn[2],a)};l(r.hull[n.side][c],Jl);for(let h of n.turrets){let u=h.meta,d=this.sets[u.geo??n.kind],f=u.scale??1,g=u.wide??1,x=0;if(h.drop>0){let m=1-h.drop;x=m<.75?40*(1-(m/.75)**2):1.2*Math.sin((m-.75)/.25*Math.PI),h.drop=Math.max(0,h.drop-(this.dt??1/60)*2.2)}jl.compose(sf.set(u.at[0],u.at[1]+x,u.at[2]),Ql.setFromAxisAngle(F_,-h.yaw),rf).premultiply(Jl),js.copy(jl).multiply(new vt().makeScale(f*g,f,f)),l(d.turret[n.side],js);let p=u.guns??2;for(let m=0;m<p;m++){let _=(m-(p-1)/2)*u.gap,v=h.recoil[m]??0,S=v<=0?0:v<.15?v/.15:Math.max(0,1-(v-.15)/1.4);Ql.setFromAxisAngle(O_,-(h.gunElev?.[m]??h.elev)),js.compose(sf.set(u.trunnion[0]+_,u.trunnion[1],u.trunnion[2]),Ql,new w(f,f,f)),js.multiply(new vt().makeTranslation(0,0,-S*(u.barrel_len/f)*.08)),js.premultiply(jl),l(d.barrel[n.side],js)}}}for(let n of Ji)for(let i of ma){let r=this.sets[n];for(let o of[...r.hull[i],r.turret[i],r.barrel[i]])o.instanceMatrix.needsUpdate=!0,o.userData.burn.needsUpdate=!0}}};var lf=9.81,k_=1.2,ve={};function th(s){let t="g"+(+s).toFixed(1);if(ve[t])return t;let e=s/36,n={calCm:+s,cal:s/100,m:673*e**3,v0:500+140*Math.min(e,1.6),reload:12*e**.8,range:1800+145*s,dmg:18*e**2.3,charge:4*e**1.2,maxElev:.52+.25*(1-Math.min(e,1)),traverse:4.2/e**.9,elevRate:5/e**.6};return n.k=.5*k_*.3*Math.PI*(n.cal/2)**2/n.m,n.table=z_(n),ve[t]=n,t}function z_(s){let t=[];for(let e=-.01;e<=s.maxElev;e+=.002){let n=0,i=12,r=s.v0*Math.cos(e),o=s.v0*Math.sin(e),a=0,c=.01;for(;i>0&&a<120;){let l=Math.hypot(r,o);r-=s.k*l*r*c,o-=(lf+s.k*l*o)*c,n+=r*c,i+=o*c,a+=c}if(t.push({e,r:n,t:a,fall:Math.atan2(-o,r)}),t.length>2&&n<t[t.length-2].r)break}return t}for(let[s,t]of[["bb",36],["ca",20],["dd",12.7]])ve[s]=ve[th(t)];function Qs(s,t){let e=ve[s].table;if(t<e[0].r)return{e:e[0].e,t:e[0].t*t/Math.max(e[0].r,1)};for(let n=1;n<e.length;n++)if(e[n].r>=t){let i=e[n-1],r=e[n],o=(t-i.r)/(r.r-i.r);return{e:i.e+(r.e-i.e)*o,t:i.t+(r.t-i.t)*o,fall:i.fall+(r.fall-i.fall)*o}}return null}function B_(s,t,e,n){let i=0,r=1;for(let o of["x","y","z"]){let a=t[o]-s[o];if(Math.abs(a)<1e-9){if(s[o]<e[o]||s[o]>n[o])return-1;continue}let c=(e[o]-s[o])/a,l=(n[o]-s[o])/a;if(c>l&&([c,l]=[l,c]),i=Math.max(i,c),r=Math.min(r,l),i>r)return-1}return i}var H_=new w,Ir=new w,af=new w,Dr=new de,cf=new vt,_a=class{constructor(t,e){this.fx=t,this.sea=e,this.shells=[],this.events=[];let n=new Pn(.5,.5,1,6,1).rotateX(Math.PI/2);this.mesh=new _n(n,new je({color:new xt(3,1.6,.7),transparent:!0,opacity:.85,depthWrite:!1}),600),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=12;let i=new Pn(.5,.5,2.6,16).rotateX(Math.PI/2),r=new Ho(.5,1.6,16).rotateX(Math.PI/2).translate(0,0,2.1);this.one=new we;let o=new In({color:2762790,roughness:.45,metalness:.8});this.one.add(new qt(i,o),new qt(r,o));let a=new qt(new Pn(.52,.52,.25,16).rotateX(Math.PI/2).translate(0,0,-1),new In({color:10119722,roughness:.4,metalness:.9}));this.one.add(a),this.one.visible=!1,this.tracked=null}fire(t,e,n,i,r,o=null){let a=ve[t],c=i.clone().multiplyScalar(a.v0*(1+(Math.random()-.5)*.004));c.add(e.body.vel),this.shells.push({type:t,g:a,p:n.clone(),p0:n.clone(),v:c,from:e,t0:r,target:e.target}),this.fx.blast(n,i,a.charge,e.body.vel),e.body.impulse(i.clone().multiplyScalar(-a.m*a.v0*1.4),n),this.events.push({kind:"fire",type:t,at:n.clone(),from:e})}update(t,e,n){let i=[],r=Math.max(1,Math.ceil(t/.008333333333333333)),o=t/r;for(let h of this.shells){let u=!0;for(let d=0;d<r&&u;d++){let f=H_.copy(h.p),g=h.v.length();h.v.addScaledVector(h.v,-h.g.k*g*o),h.v.y-=lf*o,h.p.addScaledVector(h.v,o);for(let p of n){if(p===h.from||p.gone||p.body.sunk)continue;let m=p.body,_=p.meta.L*.55+20;if((m.pos.x-h.p.x)**2+(m.pos.z-h.p.z)**2>_*_)continue;Dr.copy(m.quat).invert();let v=Ir.copy(f).sub(m.pos).applyQuaternion(Dr),S=af.copy(h.p).sub(m.pos).applyQuaternion(Dr),C=2,R=null;for(let T of p.boxes){let N=B_(v,S,T.min,T.max);N>=0&&N<C&&(C=N,R=T)}if(R){let T=v.clone().lerp(S,C),N=f.clone().lerp(h.p,C);this.events.push({kind:"hit",type:h.type,ship:p,part:R,local:T,world:N,vel:h.v.clone(),from:h.from}),u=!1;break}}if(!u)break;let x=na(this.sea,h.p.x,h.p.z,e,1);h.p.y<x&&(this.events.push({kind:"splash",type:h.type,world:new w(h.p.x,x,h.p.z),from:h.from}),this.fx.column(new w(h.p.x,x,h.p.z),h.g.cal),u=!1),e-h.t0>40&&(u=!1)}u&&i.push(h)}this.shells=i;let a=0;for(let h of this.shells){let u=h.v.length(),d=Math.min(u*.035,30),f=Math.max(h.g.cal*2.2,.35);if(Ir.copy(h.v).normalize(),Dr.setFromUnitVectors(new w(0,0,1),Ir),cf.compose(af.copy(h.p).addScaledVector(Ir,-d/2),Dr,new w(f,f,d)),this.mesh.setMatrixAt(a++,cf),a>=600)break}this.mesh.count=a,this.mesh.instanceMatrix.needsUpdate=!0;let c=this.tracked;if(this.one.visible=!!c&&this.shells.includes(c),this.one.visible){let h=c.g.cal/.36*.36;this.one.position.copy(c.p),this.one.quaternion.setFromUnitVectors(new w(0,0,1),Ir.copy(c.v).normalize()),this.one.scale.setScalar(h*1)}let l=this.events;return this.events=[],l}};var Rt={SMOKE:0,SPRAY:1,SPLINTER:2,SOOT:3,FLASH:4,FLAME:5,EMBER:6,MIST:7},tn=2e4,hf=`
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
}`,uf=`
float fh(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float fn2(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(fh(i), fh(i + vec2(1, 0)), u.x), mix(fh(i + vec2(0, 1)), fh(i + vec2(1, 1)), u.x), u.y); }
float fbm2(vec2 p){ return fn2(p) * 0.5 + fn2(p * 2.1 + 3.7) * 0.3 + fn2(p * 4.3 + 9.1) * 0.2; }
`;function V_(s,t){return new ce({uniforms:Object.assign({},s,t),transparent:!0,depthWrite:!1,vertexShader:hf,fragmentShader:`
      ${Ki}
      ${uf}
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
      }`})}function G_(s){return new ce({uniforms:Object.assign({},s,{uCamR:{value:new w},uCamU:{value:new w}}),transparent:!0,depthWrite:!1,blending:Ds,vertexShader:hf,fragmentShader:`
      ${Ki}
      ${uf}
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
      }`})}var ya=class{constructor(t,e){this.wind=e,this.p=new Float32Array(tn*3),this.v=new Float32Array(tn*3),this.size=new Float32Array(tn),this.grow=new Float32Array(tn),this.life=new Float32Array(tn),this.age=new Float32Array(tn),this.type=new Uint8Array(tn),this.seed=new Float32Array(tn),this.drag=new Float32Array(tn),this.buoy=new Float32Array(tn),this.a0=new Float32Array(tn),this.free=[];for(let a=tn-1;a>=0;a--)this.free.push(a);this.live=[],this.U={uCamR:{value:new w},uCamU:{value:new w},uAmbUp:{value:new xt},uAmbDn:{value:new xt}};let n=new Ln(1,1),i=a=>{let c=new Yo;c.index=n.index,c.setAttribute("position",n.attributes.position);let l=new Qe(new Float32Array(tn*4),4).setUsage(dl),h=new Qe(new Float32Array(tn*4),4).setUsage(dl);c.setAttribute("aP",l),c.setAttribute("aD",h),c.instanceCount=0;let u=new qt(c,a);return u.frustumCulled=!1,{m:u,g:c,aP:l,aD:h}},r=V_(t,this.U),o=G_(t);o.uniforms.uCamR=this.U.uCamR,o.uniforms.uCamU=this.U.uCamU,this.blend=i(r),this.add=i(o),this.blend.m.renderOrder=10,this.add.m.renderOrder=11,this.group=new we,this.group.add(this.blend.m,this.add.m),this.lights=[],this.lightGroup=new we;for(let a=0;a<6;a++){let c=new Xs(16756848,0,900,2);this.lights.push({L:c,t:0,k:0}),this.lightGroup.add(c)}}spawn(t,e,n,i,r,o,a,c,l,{grow:h=0,drag:u=1,buoy:d=0,alpha:f=1}={}){let g=this.free.pop();return g===void 0?-1:(this.p[g*3]=e,this.p[g*3+1]=n,this.p[g*3+2]=i,this.v[g*3]=r,this.v[g*3+1]=o,this.v[g*3+2]=a,this.size[g]=c,this.grow[g]=h,this.life[g]=l,this.age[g]=0,this.type[g]=t,this.seed[g]=Math.random(),this.drag[g]=u,this.buoy[g]=d,this.a0[g]=f,this.live.push(g),g)}flashLight(t,e,n){let i=this.lights.reduce((r,o)=>r.k<o.k?r:o);i.L.position.copy(t),i.t=n,i.dur=n,i.k=e}muzzle(t,e,n=1,i=null){let r=Math.random,o=i?.x??0,a=i?.z??0;this.spawn(Rt.FLASH,t.x+e.x*.6*n,t.y+e.y*.6,t.z+e.z*.6*n,0,0,0,1.6*n+.3,.07),this.spawn(Rt.FLASH,t.x+e.x*1.8*n,t.y+e.y*1.8,t.z+e.z*1.8*n,0,0,0,1.1*n+.2,.05),this.flashLight(t,3e3*n,.09);let c=Math.round(10+26*n);for(let l=0;l<c;l++){let h=(4+r()*26)*Math.sqrt(n),u=.25+r()*.35;this.spawn(Rt.SMOKE,t.x,t.y,t.z,o+(e.x+(r()-.5)*u)*h,(e.y+(r()-.3)*u)*h,a+(e.z+(r()-.5)*u)*h,(.5+r()*.8)*(.4+n),18+r()*22,{grow:.22+r()*.25,drag:2.2,buoy:.08,alpha:.9})}n>.5&&this.spawn(Rt.SMOKE,t.x-e.x*2.2,t.y+.3,t.z-e.z*2.2,0,.8,0,.5,8,{grow:.2,drag:1.5,buoy:.1,alpha:.7});for(let l=0;l<8*n;l++)this.spawn(Rt.EMBER,t.x,t.y,t.z,e.x*30*r()+(r()-.5)*4,e.y*30*r()+r()*3,e.z*30*r()+(r()-.5)*4,.06,.6+r()*.8,{drag:.6})}splash(t,e=1){let n=Math.random,i=Math.round(60*e+20);for(let r=0;r<i;r++){let o=n()*Math.PI*2,a=n()*.6,c=(6+n()*12)*Math.sqrt(e);this.spawn(Rt.SPRAY,t.x+Math.cos(o)*a,.1,t.z+Math.sin(o)*a,Math.cos(o)*(.5+n()*2.2),c,Math.sin(o)*(.5+n()*2.2),.12+n()*.2,3.5,{drag:.08})}for(let r=0;r<14*e;r++){let o=n()*Math.PI*2;this.spawn(Rt.MIST,t.x+Math.cos(o)*.8,1+n()*6*e,t.z+Math.sin(o)*.8,Math.cos(o)*.8,1+n()*2,Math.sin(o)*.8,1.2+n(),6+n()*4,{grow:.35,drag:1.2,buoy:-.05,alpha:.7})}}splinters(t,e,n=1){let i=Math.random;for(let r=0;r<30*n;r++)this.spawn(Rt.SPLINTER,t.x,t.y,t.z,e.x*6*i()+(i()-.5)*9,i()*8,e.z*6*i()+(i()-.5)*9,.05+i()*.12,2.5,{drag:.2});for(let r=0;r<6;r++)this.spawn(Rt.SMOKE,t.x,t.y,t.z,(i()-.5)*3,i()*2,(i()-.5)*3,.6,6,{grow:.3,drag:2,alpha:.5})}burn(t,e,n){let i=Math.random;i()<n*30*e&&this.spawn(Rt.FLAME,t.x+(i()-.5)*1.5,t.y+i()*.5,t.z+(i()-.5)*1.5,i()-.5,2+i()*3,i()-.5,.8+i()*1.2*e,.6+i()*.5,{grow:.4,drag:1.2,buoy:.5}),i()<n*6*e&&this.spawn(Rt.SOOT,t.x+(i()-.5),t.y+1.5,t.z+(i()-.5),0,2+i()*2,0,1+i()*e,14+i()*10,{grow:.45,drag:.8,buoy:.35,alpha:.85}),i()<n*10*e&&this.spawn(Rt.EMBER,t.x,t.y+1,t.z,(i()-.5)*2,3+i()*4,(i()-.5)*2,.05,2+i()*2,{drag:.5,buoy:.3})}blast(t,e,n,i){let r=Math.random,o=i?.x??0,a=i?.z??0,c=Math.sqrt(n);for(let h=0;h<3;h++)this.spawn(Rt.FLASH,t.x+e.x*(2+h*4)*c,t.y+e.y*(2+h*4)*c,t.z+e.z*(2+h*4)*c,o,0,a,(3-h*.6)*c,.08+h*.015);for(let h=0;h<3*c;h++)this.spawn(Rt.FLAME,t.x+e.x*4*c,t.y,t.z+e.z*4*c,o+e.x*60*r()*c,e.y*60*r()+r()*4,a+e.z*60*r()*c,(1.5+r()*2)*c,.25+r()*.2,{grow:3*c,drag:4});this.flashLight(t,12e4*n,.1);let l=Math.round(10+10*c);for(let h=0;h<l;h++){let u=(10+r()*70)*c,d=.35;this.spawn(Rt.SMOKE,t.x,t.y,t.z,o+(e.x+(r()-.5)*d)*u,(e.y+(r()-.35)*d)*u,a+(e.z+(r()-.5)*d)*u,(1.5+r()*2.5)*c,5+r()*4,{grow:(1.4+r()*1.2)*c,drag:1.8,buoy:.15,alpha:.4})}if(n>1.5){let h=t.x+e.x*12*c,u=t.z+e.z*12*c;for(let d=0;d<40*c;d++){let f=r()*Math.PI*2,g=8+r()*18;this.spawn(Rt.SPRAY,h+Math.cos(f)*3,.3,u+Math.sin(f)*3,o+Math.cos(f)*g,2+r()*4,a+Math.sin(f)*g,.6+r()*.8,1.6,{drag:.5})}for(let d=0;d<8;d++){let f=r()*Math.PI*2;this.spawn(Rt.MIST,h+Math.cos(f)*6,2,u+Math.sin(f)*6,Math.cos(f)*10,1,Math.sin(f)*10,4+r()*3,4,{grow:2,drag:1.5,alpha:.5})}}}column(t,e){let n=Math.random,i=e/.36,r=85*i**1.3,o=Math.sqrt(2*9.81*r),a=22*i**1.1,c=Math.round(Math.min(Math.max(230*i**.8,40),460)),l=2*o/9.81;for(let h=0;h<c;h++){let u=n()*Math.PI*2,d=Math.sqrt(n())*a*.45,f=Math.pow(n(),.5),g=o*(.35+.65*f);this.spawn(Rt.MIST,t.x+Math.cos(u)*d,.5+n()*2,t.z+Math.sin(u)*d,Math.cos(u)*n()*a*.11,g,Math.sin(u)*n()*a*.11,a*(.26+n()*.2)*(1-.5*f),l*(.9+n()*.4)+1.5,{grow:a*.035,drag:.02,buoy:-9.81,alpha:1})}for(let h=0;h<c*1.2;h++){let u=n()*Math.PI*2,d=n()*a*.5;this.spawn(Rt.SPRAY,t.x+Math.cos(u)*d,.5,t.z+Math.sin(u)*d,Math.cos(u)*(1+n()*4)*a/6,o*(.3+.8*n()),Math.sin(u)*(1+n()*4)*a/6,.12+n()*.25*a/6,l+1,{drag:.03})}for(let h=0;h<c*.25;h++){let u=n()*Math.PI*2,d=n()*r*.8;this.spawn(Rt.MIST,t.x+Math.cos(u)*a*.3,d,t.z+Math.sin(u)*a*.3,Math.cos(u),.5,Math.sin(u),a*(.35+n()*.25),5+n()*4,{grow:a*.05,drag:.8,buoy:-1.2,alpha:.35})}for(let h=0;h<c*.5;h++){let u=n()*Math.PI*2;this.spawn(Rt.MIST,t.x+Math.cos(u)*a*.5,1,t.z+Math.sin(u)*a*.5,Math.cos(u)*(4+n()*6)*a/6,2+n()*3,Math.sin(u)*(4+n()*6)*a/6,a*.35,2.5,{grow:a*.2,drag:.8,buoy:-4,alpha:.8})}}hitBurst(t,e){let n=Math.random,i=e>.3?3:e>.15?1.8:1;this.spawn(Rt.FLASH,t.x,t.y,t.z,0,0,0,6*i,.12);for(let r=0;r<14*i;r++)this.spawn(Rt.FLAME,t.x+(n()-.5)*3*i,t.y+n()*2*i,t.z+(n()-.5)*3*i,(n()-.5)*18*i,n()*14*i,(n()-.5)*18*i,(2+n()*3)*i,.5+n()*.5,{grow:4*i,drag:3,buoy:2});for(let r=0;r<7*i;r++)this.spawn(Rt.SOOT,t.x,t.y+2,t.z,(n()-.5)*6*i,2+n()*5*i,(n()-.5)*6*i,(1.5+n()*1.5)*i,7+n()*6,{grow:.9*i,drag:1.2,buoy:.5,alpha:.75});for(let r=0;r<10*i;r++)this.spawn(Rt.SPLINTER,t.x,t.y,t.z,(n()-.5)*30*i,n()*22*i,(n()-.5)*30*i,.1+n()*.15*i,1.6,{drag:.05});for(let r=0;r<20*i;r++)this.spawn(Rt.EMBER,t.x,t.y,t.z,(n()-.5)*50,n()*40,(n()-.5)*50,.2*i,1+n(),{drag:.3});this.flashLight(t,3e4*i,.12)}magazine(t,e=1){let n=Math.random;for(let i=0;i<4;i++)this.spawn(Rt.FLASH,t.x,t.y+i*15,t.z,0,0,0,40*e,.3);for(let i=0;i<160*e;i++){let r=n()*6.283,o=30+n()*90;this.spawn(Rt.FLAME,t.x+Math.cos(r)*5,t.y+5,t.z+Math.sin(r)*5,Math.cos(r)*n()*30,o,Math.sin(r)*n()*30,8+n()*10,1+n()*1.5,{grow:10,drag:1.2,buoy:4})}for(let i=0;i<120*e;i++){let r=n()*6.283,o=20+n()*70;this.spawn(Rt.SOOT,t.x+Math.cos(r)*8,t.y+10+n()*40,t.z+Math.sin(r)*8,Math.cos(r)*n()*20,o,Math.sin(r)*n()*20,10+n()*12,30+n()*25,{grow:3.5,drag:.5,buoy:.6,alpha:.95})}for(let i=0;i<200*e;i++)this.spawn(Rt.SPLINTER,t.x,t.y+5,t.z,(n()-.5)*120,n()*110,(n()-.5)*120,.5+n()*1.5,6,{drag:.02});this.flashLight(t,4e6*e,.6)}funnel(t,e,n,i){let r=Math.random;r()<n*(4+6*e)&&this.spawn(Rt.SOOT,t.x+(r()-.5),t.y,t.z+(r()-.5),(i?.x??0)*.5,2+3*e,(i?.z??0)*.5,1.6+r()*.8,16+r()*10,{grow:.55,drag:.25,buoy:.05,alpha:.1+.14*e})}bigFire(t,e,n){let i=Math.random;i()<n*12*e&&this.spawn(Rt.FLAME,t.x+(i()-.5)*8,t.y+i()*2,t.z+(i()-.5)*8,(i()-.5)*2,4+i()*5,(i()-.5)*2,3+i()*4*e,.8+i()*.6,{grow:1.5,drag:1.2,buoy:1}),i()<n*7*e&&this.spawn(Rt.SOOT,t.x+(i()-.5)*4,t.y+4,t.z+(i()-.5)*4,0,5+i()*4,0,4+i()*3*e,25+i()*15,{grow:1.6,drag:.6,buoy:.3,alpha:.9})}update(t,e,n){let i=n.matrixWorld.elements;this.U.uCamR.value.set(i[0],i[1],i[2]),this.U.uCamU.value.set(i[4],i[5],i[6]);let r=this.wind.uniforms.uWind.value,o=this.blend,a=this.add,c=0,l=0,h=[];for(let u of this.live){this.age[u]+=t;let d=this.life[u];if(this.age[u]>=d){this.free.push(u);continue}h.push(u);let f=this.type[u],g=u*3,x=this.v,p=this.p,m=this.drag[u],_=f===Rt.SPRAY||f===Rt.SPLINTER||f===Rt.EMBER,v=1-Math.exp(-m*t);x[g]+=(r.x-x[g])*v,x[g+2]+=(r.y-x[g+2])*v,x[g+1]+=(_?-9.81*t:0)+this.buoy[u]*t-x[g+1]*(_?0:v),p[g]+=x[g]*t,p[g+1]+=x[g+1]*t,p[g+2]+=x[g+2]*t,(_||this.buoy[u]<-5)&&p[g+1]<0&&(this.age[u]=d),this.size[u]+=this.grow[u]*t*(f===Rt.SMOKE?Math.max(.2,1-this.age[u]/d)*2:1);let S=this.age[u]/d,C=this.a0[u];f===Rt.SMOKE||f===Rt.SOOT||f===Rt.MIST?C*=Math.min(S*12,1)*Math.pow(1-S,1.5):f===Rt.FLAME?C*=Math.sin(Math.PI*Math.min(S*1.3,1)):f===Rt.FLASH?C*=1-S:C*=1-S*S;let R=f>=Rt.FLASH&&f!==Rt.MIST?a:o,T=R===a?l++:c++;R.aP.array.set([p[g],p[g+1],p[g+2],this.size[u]],T*4),R.aD.array.set([f,S,this.seed[u],C],T*4)}this.live=h,o.g.instanceCount=c,a.g.instanceCount=l;for(let u of[o,a])u.aP.needsUpdate=!0,u.aD.needsUpdate=!0;for(let u of this.lights)u.t>0?(u.t-=t,u.L.intensity=u.k*Math.max(u.t/u.dur,0)):u.L.intensity=0}clear(){for(let t of this.live)this.free.push(t);this.live=[]}setAmbient(t,e){this.U.uAmbUp.value.copy(t),this.U.uAmbDn.value.copy(e)}};var eh=1025,Ma=9.81,Ai=()=>new w,W_=[-.35,0,.33,.66,1],Ur={bb:{kn:27,turnD:4.6,gm:2.4,pumps:2.5,armor:.75},ca:{kn:33,turnD:4.2,gm:1.6,pumps:1.4,armor:.45},dd:{kn:36,turnD:3.6,gm:.9,pumps:.6,armor:.1}},X_=.5144,ba=class{constructor(t,e){this.meta=t,this.sea=e,this.kind=t.kind,this.K=Ur[t.kind];let n=t.L,i=t.B,r=t.T;this.V0=n*i*r*.58,this.mass0=eh*this.V0,this.reserve=n*i*(t.D-r)*.62,this.vmax=this.K.kn*X_,this.cR=this.mass0*.0016/n,this.P=this.cR*this.vmax**3*1.08,this.pos=Ai(),this.vel=Ai(),this.yaw=0,this.yawRate=0,this.quat=new de,this.ctl={tele:3,rudder:0},this.power=0,this.rudder=0,this.heave=0,this.heaveV=0,this.roll=0,this.rollV=0,this.pitchA=0,this.pitchV=0,this.list=0,this.trim=0,this.sinkY=0,this.kickRoll=0,this.comp=[];for(let o=0;o<5;o++)for(let a of[1,-1])this.comp.push({f:(o-2)/5*n,x:a*i*.25,water:0,cap:this.V0*.11,holes:[]});this.water=0,this.sunk=!1,this.founder=0,this.capsize=0,this.gm=this.K.gm,this.sinkBase=0,this.tmp={v:Ai(),q:new de,e:new zs(0,0,0,"YXZ")},this.updateQuat()}applyFit(t){this.mass0+=t.dW*1e3,this.V0=this.mass0/eh,this.gm=t.gm,this.sinkBase=t.sink,this.vmax*=t.speedK,this.reserve=Math.max(this.reserve-t.sink*this.meta.L*this.meta.B*.62,this.reserve*.1),t.freeboard<=.3&&this.startFounder()}place(t,e,n,i=0){this.pos.set(t,0,e),this.yaw=n,this.yawRate=0,this.vel.set(Math.sin(n)*i,0,Math.cos(n)*i),this.power=i/this.vmax,this.updateQuat()}get heading(){return this.yaw}get speed(){return this.vel.x*Math.sin(this.yaw)+this.vel.z*Math.cos(this.yaw)}get heel(){return this.roll+this.list}get pitch(){return this.pitchA+this.trim}forward(t=Ai()){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}toWorld(t,e=Ai()){return e.copy(t).applyQuaternion(this.quat).add(this.pos)}toLocal(t,e=Ai()){return e.copy(t).sub(this.pos).applyQuaternion(this.tmp.q.copy(this.quat).invert())}pointVel(t,e=Ai()){let n=this.tmp.v.subVectors(t,this.pos);return e.set(this.vel.x+this.yawRate*n.z,0,this.vel.z-this.yawRate*n.x)}hole(t,e){let n=this.comp[0],i=1e9;for(let r of this.comp){let o=Math.abs(r.f-t.z)+(Math.sign(r.x)!==Math.sign(t.x||1)?1e4:0);o<i&&(i=o,n=r)}n.holes.push({p:t.clone(),a:e})}impulse(t,e){let n=this.toLocal(e,Ai()),i=new w(Math.cos(this.yaw),0,-Math.sin(this.yaw)),r=this.mass0*(.38*this.meta.B)**2;this.rollV+=t.dot(i)*Math.max(n.y+this.meta.T*.4,1)/r,this.vel.x+=t.x/this.mass0*.6,this.vel.z+=t.z/this.mass0*.6}updateQuat(){let t=this.tmp.e;t.set(-(this.pitchA+this.trim),this.yaw,-(this.roll+this.list)*1,"YXZ"),this.quat.setFromEuler(t)}step(t,e){let n=this.meta,i=this.K,r=this.ctl,o=!this.sunk&&this.founder<=0,a=o?(r.pow??W_[Et.clamp(r.tele,0,4)])*(1-Math.min(this.water/this.reserve,1)*.6):0;this.power+=Et.clamp(a-this.power,-t*.12,t*.08),this.rudder+=Et.clamp((o?r.rudder:.3)-this.rudder,-t*.35,t*.35);let c=Math.sin(this.yaw),l=Math.cos(this.yaw),h=this.vel.x*c+this.vel.z*l,u=this.vel.x*l-this.vel.z*c,d=this.mass0*1.08+this.water*eh,f=this.power>=0?this.P*this.power/Math.max(Math.abs(h),this.vmax*.18):this.P*this.power/Math.max(Math.abs(h),this.vmax*.18)*.7,g=Math.abs(h)/Math.sqrt(Ma*n.L),x=this.cR*h*Math.abs(h)*(1+6*Math.max(g-.3,0)**2)*(1+this.water/this.V0*3),p=Math.abs(this.yawRate)*Math.abs(h)*d*.35,m=(f-x-p*Math.sign(h))/d,_=-u*Math.abs(u)*this.cR*30/d-u*.15,v=i.turnD*n.L/2,S=h/v*(this.rudder/.6)*-1,C=6+n.L/18;this.yawRate+=(S-this.yawRate)*(1-Math.exp(-t/C)),o||(this.yawRate*=Math.exp(-t*.2)),this.yaw+=this.yawRate*t,_+=-this.yawRate*h*.25;let R=h+m*t,T=u+_*t,N=Math.sin(this.yaw),M=Math.cos(this.yaw);this.vel.set(R*N+T*M,0,R*M-T*N),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;let A=n.L*.38,D=n.B*.42,H=(Lt,yt)=>na(this.sea,this.pos.x+N*Lt+M*yt,this.pos.z+M*Lt-N*yt,e,1),J=H(A,0),P=H(-A,0),U=H(0,-D),V=H(0,D),X=(J+P+U+V)/4,q=Math.max(this.gm,.02),W=Math.sqrt(Ma/n.T)*.55,Y=2*Math.PI/(.8*n.B/Math.sqrt(q)),j=Math.sqrt(Ma/n.T)*.5,at=Et.clamp(.55+this.gm/n.B*9,.35,1.25),G=.35;this.heaveV+=(-(this.heave-X)*W*W-2*G*W*this.heaveV)*t,this.heave+=this.heaveV*t;let $=Math.atan2(V-U,2*D)*.6,ot=Math.atan2(J-P,2*A)*.8,pt=Et.clamp(-this.yawRate*h*.012*(2.5/i.gm),-.12,.12),ut=this.roll-$-pt,Ct=Math.sin(ut)*(1-Math.min((ut/at)**2,1.5))+(this.gm<.05?-.03*Math.sign(ut||1):0);this.rollV+=(-Ct*Y*Y-2*.06*Y*this.rollV)*t,this.roll+=this.rollV*t,Math.abs(this.roll+this.list)>at&&this.founder<=0&&(this.capsized=!0,this.startFounder("capsize"),this.fRoll=Math.sign(this.roll+this.list)),this.founder>0&&this.fRoll&&(this.roll+=(this.fRoll*Math.min(this.founder/6,1)*2.4-this.roll)*(1-Math.exp(-t*.6)),this.rollV=0),this.pitchV+=(-(this.pitchA-ot)*j*j-2*G*j*this.pitchV)*t,this.pitchA+=this.pitchV*t,this.floodStep(t,e),this.founder>0&&this.founderStep(t),this.pos.y=this.heave-this.sinkY-this.sinkBase,this.updateQuat()}floodStep(t){let e=0,n=0,i=0,r=this.K.pumps*(this.founder>0?0:1),o=this.meta.T;for(let h of this.comp){let u=0;for(let d of h.holes){let g=-(d.p.y-this.sinkY+Math.sin(this.list)*-d.p.x*.5-Math.sin(this.trim)*d.p.z);g>0&&(u+=.62*d.a*Math.sqrt(2*Ma*g))}h.water=Et.clamp(h.water+(u-(h.water>0?r/10:0))*t,0,h.cap*(this.founder>0?3:1)),e+=h.water,n+=h.water*h.x,i+=h.water*h.f}this.water=e;let a=Math.min(e/this.reserve,1),c=e>1?Et.clamp(-n/e/this.meta.B*.9*a*1.4,-.5,.5):0,l=e>1?Et.clamp(i/e/this.meta.L*.5*a,-.25,.25):0;return this.list+=(c-this.list)*(1-Math.exp(-t*.15)),this.founder<=0&&(this.trim+=(l-this.trim)*(1-Math.exp(-t*.15))),this.founder<=0&&(this.sinkY+=(e/(this.meta.L*this.meta.B*.7)-this.sinkY)*(1-Math.exp(-t*.3))),e>this.reserve*.92&&this.founder<=0&&this.startFounder(),o}startFounder(t){if(this.founder>0)return;this.founder=.001;let e=0,n=0,i=0;for(let r of this.comp)e+=r.water*r.f,n+=r.water*r.x,i+=r.water;this.fEnd=i>0?Math.sign(e||1):Math.random()<.5?1:-1,this.fRoll=Math.abs(this.list)>.18||t==="capsize"?Math.sign(this.list||n||1):0,this.fBreak=t==="magazine"}founderStep(t){this.founder+=t;let e=this.founder,n=this.meta.L,i=this.fBreak?40:{bb:120,ca:90,dd:60}[this.kind],r=Math.min(e/i,1);this.trim+=((this.fBreak?.05:.18+.3*r*r)*this.fEnd*Math.min(e/20,1)-this.trim)*(1-Math.exp(-t*.2)),this.fRoll&&!this.capsized&&(this.list+=(Math.min(e/i*2.2,1)**2*2.6*this.fRoll-this.list)*(1-Math.exp(-t*.3))),this.sinkY+=t*(.04+.5*r*r)*(n/150),this.sinkY>this.meta.D+Math.abs(Math.sin(this.trim))*n*.5+25&&(this.sunk=!0)}};var pf=[12.7,15.5,20,25,36,41,46,51,61,80],Sa={bb:36,ca:20,dd:12.7},q_={bb:2.4,ca:1.6,dd:.9},df=1.025;function nh(s,t){return 1e3*(s/36)**2.6*(.55+.45*t)/1.45}function ff(){return 60}function Y_(s,t){let e=s.stations,n=e[0],i=e[e.length-1];for(let c=0;c+1<e.length;c++)if(e[c][0]<=t&&e[c+1][0]>=t){n=e[c],i=e[c+1];break}let r=(t-n[0])/Math.max(i[0]-n[0],1e-6),o=n[1][n[1].length-1],a=i[1][i[1].length-1];return{y:o[1]+(a[1]-o[1])*r,hb:o[0]+(a[0]-o[0])*r}}function Ri(s){let t=s.turrets.map((i,r)=>({id:"s"+r,at:i.at.slice(),home:i.home??(i.at[2]>=0?0:Math.PI),arc:i.arc.slice(),stock:r,r:i.r})),e=s.L;return({bb:[[.43,0],[-.4,0],[.12,1],[-.16,1],[.12,-1],[-.16,-1]],ca:[[.42,0],[-.4,0],[0,1],[0,-1]],dd:[[0,1],[0,-1],[.18,0]]}[s.kind]??[]).forEach(([i,r],o)=>{let a=i*e,c=Y_(s,a),l=r?r*c.hb*.62:0,h=r?r>0?-Math.PI/2:Math.PI/2:a>=0?0:Math.PI,u=r?1.35:2.5;t.push({id:"x"+o,at:[l,c.y+.2,a],home:h,arc:[h-u,h+u],stock:-1,r:s.B*.18,wing:r})}),t}function Ci(s,t){let e=t.turrets.map((n,i)=>({slot:"s"+i,type:"gun",cal:Sa[s],n:n.guns??2,tier:1}));if(s==="dd")for(let n of Ri(t))n.wing&&e.push({slot:n.id,type:"torp"});return{kind:s,mounts:e}}function Li(s,t){let e=s.kind,n=t.kinds[e].meta,i=Ri(n),r=[],o=[],a=0,c=0,l=0;for(let R of n.turrets){let T=nh(Sa[e],R.guns??2);l+=T}let h=n.turrets.reduce((R,T)=>R+(T.at[1]+2)*nh(Sa[e],T.guns??2),0)/Math.max(l,1);for(let R of s.mounts){let T=i.find(U=>U.id===R.slot);if(!T||R.type==="none")continue;if(R.type==="torp"){o.push({slot:T,at:T.at,side:T.wing||1,home:T.home}),a+=ff(),c+=ff()*T.at[1];continue}let N=R.cal,M=Math.max(1,Math.min(3,R.n)),A=N>=28?"bb":N>=15?"ca":"dd",D=t.kinds[A].meta.turrets[0],H=N/Sa[A],J=M===1?.72:M===2?1:1.42,P=((D.top??D.at[1]+4)-D.at[1]+1.2)*H;for(let U=0;U<Math.max(1,Math.min(3,R.tier??1));U++){let V=[T.at[0],T.at[1]+U*P,T.at[2]];r.push({at:V,home:T.home,arc:T.arc,guns:M,gap:D.gap*H,trunnion:[0,D.trunnion[1]*H,D.trunnion[2]*H],barrel_len:D.barrel_len*H,gun:th(N),geo:A,scale:H,wide:J,slot:T.id,tier:U});let X=nh(N,M);a+=X,c+=X*(V[1]+2*H)}}let u=n.L*n.B*n.T*.58*df,d=a-l,f=u+d,g=.62*n.D-n.T,x=c-h*l,p=g+(x-d*g)/f,m=d/(n.L*n.B*.7*df),_=q_[e]-.5*(p-g)+.1*m,v=Math.max(.3,(u/f)**.33),S=r.reduce((R,T)=>R+ve[T.gun].m*T.guns,0)/1e3,C=n.D-n.T-m;return{kind:e,mounts:r,torps:o,disp:f,dW:d,gm:_,sink:m,speedK:v,broadside:S,freeboard:C,ok:_>.05&&C>.3}}var ji={speed:24.7,run:6e3,depth:3,dmg:70,hole:14},mf=320,$_=new de,gf=new w,K_=new w,xf=new vt,wa=class{constructor(t){this.fx=t,this.list=[],this.events=[];let e=new Ln(1,1).rotateX(-Math.PI/2).translate(0,0,-.5),n=new ce({transparent:!0,depthWrite:!1,uniforms:{uLen:{value:mf}},vertexShader:`
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
        }`});this.mesh=new _n(e,n,256),this.attr=new Qe(new Float32Array(256*2),2),this.mesh.geometry.setAttribute("aT",this.attr),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=5}launch(t,e,n,i){let r=new w(n.x,0,n.z).normalize();this.list.push({from:t,p:new w(e.x,-ji.depth,e.z),p0:new w(e.x,0,e.z),d:r,run:0,t0:i,alive:!0,fade:1,seed:Math.random()}),this.fx.spawn(7,e.x,1,e.z,r.x*4,2,r.z*4,3,2,{grow:2,drag:1,buoy:-2,alpha:.6}),this.events.push({kind:"launch",type:"torp",at:e.clone(),from:t})}update(t,e,n){for(let o of this.list){if(!o.alive){o.fade-=t/20;continue}let a=ji.speed*t,c=gf.copy(o.p);if(o.p.addScaledVector(o.d,a),o.run+=a,o.run>ji.run){o.alive=!1;continue}for(let l of n){if(l===o.from||l.gone||l.body.sunk||o.run<60)continue;let h=l.body,u=l.meta.L*.55;if((h.pos.x-o.p.x)**2+(h.pos.z-o.p.z)**2>u*u)continue;let d=K_.copy(o.p).sub(h.pos).applyQuaternion($_.copy(h.quat).invert()),f=l.meta.L,g=l.meta.B,x=Math.abs(d.z)/(f/2);if(x<1&&Math.abs(d.x)<g/2*Math.sqrt(Math.max(0,1-x**2.4))&&d.y>-l.meta.T-1){o.alive=!1;let p=new w(o.p.x,0,o.p.z);this.events.push({kind:"torphit",type:"torp",ship:l,local:d.clone(),world:p,from:o.from});break}}Math.random()<t*8&&this.fx.spawn(7,o.p.x,.3,o.p.z,Math.random()-.5,.6,Math.random()-.5,1.2,3,{grow:.8,drag:1.5,buoy:-.5,alpha:.5})}this.list=this.list.filter(o=>o.alive||o.fade>0);let i=0;for(let o of this.list){let a=Math.min(o.run,mf);if(a<1)continue;let c=Math.atan2(o.d.x,o.d.z);if(xf.makeRotationY(c).scale(gf.set(7,1,a)).setPosition(o.p.x,.15,o.p.z),this.mesh.setMatrixAt(i,xf),this.attr.setXY(i,Math.max(o.fade,0),o.seed),++i>=256)break}this.mesh.count=i,this.mesh.instanceMatrix.needsUpdate=!0,this.attr.needsUpdate=!0;let r=this.events;return this.events=[],r}};var ih=()=>new w,Z_={bb:260,ca:95,dd:30},J_={bb:64e3,ca:13e3,dd:2400},Ve=s=>Et.euclideanModulo(s+Math.PI,Math.PI*2)-Math.PI,Dn=()=>{let s=0;for(let t=0;t<4;t++)s+=Math.random();return(s-2)*1.73},j_=1,Ea=class{constructor({art:t,sea:e,artillery:n,fx:i,torpedoes:r}){this.art=t,this.sea=e,this.arty=n,this.fx=i,this.torp=r,this.ships=[],this.log=[],this.events=[],this.wave=0,this.waveT=0,this.score=0,this.sunkN=0,this.auto=!1,this.waves=!0}add(t,e,n,i,r,o=0,a={}){let c=this.art.kinds[t],l=c.meta,h=new ba(l,this.sea);h.place(n,i,r,o),h.ctl.tele=o>0?e==="A"?2:4:1;let u=(l.boxes??[]).map(p=>({min:new w(...p.min),max:new w(...p.max),part:p.part})),d=Li(a.design??Ci(t,l),this.art);a.design&&h.applyFit(d);let f=d.mounts.map(p=>{let m=p.home,_=Math.min((p.arc[1]-p.arc[0])/2,Math.PI*5/6);p=Object.assign({},p,{arc:[m-_,m+_]});let v=ve[p.gun];return{meta:p,g:v,yaw:m,rest:m,yawV:0,elev:0,elevV:0,reload:Math.random()*v.reload,recoil:new Array(p.guns??2).fill(0),broken:!1,ready:!1,onTarget:!1}});for(let p of d.mounts)if(p.slot[0]==="x"||p.tier>0){let m=4*p.scale*p.wide,_=5*p.scale;u.push({min:new w(p.at[0]-m,p.at[1],p.at[2]-m),max:new w(p.at[0]+m,p.at[1]+_,p.at[2]+m),part:"turret"})}let g=Z_[t]*(e==="A"?1.8:1),x={id:j_++,kind:t,side:e,meta:l,body:h,boxes:u,turrets:f,fit:d,torps:d.torps.map(p=>({meta:p,reload:Math.random()*20})),maxRange:Math.max(...f.map(p=>p.g.range),1e3),hp:g,hpMax:g,burn:[0,0,0],fires:[0,0,0],alive:!0,gone:!1,target:null,focus:null,order:null,slot:null,fc:new Map,player:e==="A",flagship:!!a.flagship,group:a.group??0,born:this.t??0,sel:!1};return this.ships.push(x),x}refit(t,e){let n=this.ships.indexOf(t);if(n<0)return t;this.ships.splice(n,1);let i=t.body,r=this.add(t.kind,t.side,i.pos.x,i.pos.z,i.yaw,Math.max(i.speed,0),{design:e,flagship:t.flagship,group:t.group});this.ships.pop(),this.ships.splice(n,0,r),r.station=t.station,r.sel=t.sel,r.order=t.order,r.design=e;let o=new Set(t.turrets.map(a=>`${a.meta.slot}/${a.meta.tier}/${a.meta.gun}/${a.meta.guns}`));return r.turrets.forEach((a,c)=>{o.has(`${a.meta.slot}/${a.meta.tier}/${a.meta.gun}/${a.meta.guns}`)||(a.drop=1+c*0)}),r.body.ctl.tele=i.ctl.tele,r}dockStep(t,e,n){for(let i of n)i.kind==="hit"&&this.hit(i);for(let i of this.ships)if(!i.gone){if(i.body.sunk){i.gone=!0;continue}i.alive&&i.body.founder>0&&(i.alive=!1,this.log.push({kind:"capsize",ship:i})),i.testAim&&this.turretStep(i,t,e),this.burnStep(i,t)}}enemiesOf(t){return this.ships.filter(e=>e.side!==t.side&&e.alive)}flagship(){return this.ships.find(t=>t.flagship&&t.side==="A")}update(t,e,n){this.t=e;for(let i of n)i.kind==="hit"?this.hit(i):i.kind==="torphit"&&this.torpHit(i);for(let i of this.ships)if(!i.gone){if(i.body.sunk){i.gone=!0;continue}if(i.alive&&i.body.founder>0&&(i.alive=!1,this.log.push({kind:"capsize",ship:i}),this.events.push({kind:"capsize",type:i.kind,world:i.body.pos.clone()})),!i.alive){this.burnStep(i,t);continue}this.torpStep(i,t,e),this.pickTarget(i),i.noSteer?i.body.ctl.rudder=0:(i.player&&!this.auto?this.steerPlayer(i,t):this.steerAI(i,t),this.avoid(i,t)),this.turretStep(i,t,e),this.burnStep(i,t)}this.waves&&this.waveStep(t)}pickTarget(t){let e={range:t.maxRange};if(t.focus&&!t.focus.alive&&(t.focus=null),t.focus){t.target=t.focus;return}let n=null,i=e.range*1.02;for(let r of this.ships){if(r.side===t.side||!r.alive)continue;let o=r.body.pos.distanceTo(t.body.pos),a=r===t.target?.8:1;o*a<i&&(i=o*a,n=r)}t.target=n}turretStep(t,e,n){let i=t.body,r=t.target,o=r?t.fc.get(r.id):null;r&&!o&&(o={err:1,r:Dn(),a:Dn(),turn:r.body.yawRate},t.fc.set(r.id,o)),o&&Math.abs(r.body.yawRate-o.turn)>.01&&(o.err=Math.min(o.err+.3,1),o.turn=r.body.yawRate);let a=ih(),c=ih();for(let l of t.turrets){let h=l.g,u=l.lockOn?.alive?l.lockOn:t.target,d=u?t.fc.get(u.id)??o:null;for(let C=0;C<l.recoil.length;C++)l.recoil[C]>0&&(l.recoil[C]+=e,l.recoil[C]>1.6&&(l.recoil[C]=0));if(l.broken){l.elev=Math.max(l.elev-e*.01,-.04),l.gunElev&&l.gunElev.fill(l.elev);continue}l.reload=Math.max(0,l.reload-e);let f=l.rest,g=0,x=null;if(i.toWorld(c.set(...l.meta.at),a),t.testAim){let C=Ve(t.testAim.brg-l.rest),R=Ve(l.meta.arc[0]-l.rest),T=Ve(l.meta.arc[1]-l.rest);C>=R&&C<=T&&(f=l.rest+C,g=t.testAim.elev,x={e:g})}else if(u){let C=u.body.pos,R=u.body.vel,T=Math.hypot(C.x-a.x,C.z-a.z),N=0,M=C.x,A=C.z;for(let D=0;D<3&&(x=Qs(l.meta.gun,T),!!x);D++)N=x.t,M=C.x+(R.x-i.vel.x)*N,A=C.z+(R.z-i.vel.z)*N,T=Math.hypot(M-a.x,A-a.z);if(x&&T<=h.range){let D=l.perfect?0:d.err,H=D*(.035*T+25)*d.r,J=D*.004*d.a,P=T+H;x=Qs(l.meta.gun,P)??x,i.toLocal(c.set(M,a.y,A),c);let U=l.meta.at,V=Math.atan2(-(c.x-U[0]),c.z-U[2])+J,X=Ve(V-l.rest),q=Ve(l.meta.arc[0]-l.rest),W=Ve(l.meta.arc[1]-l.rest);if(X>=q&&X<=W){f=l.rest+X;let Y=Math.asin(Et.clamp(new w(-Math.sin(l.rest+X),0,Math.cos(l.rest+X)).applyQuaternion(i.quat).y,-1,1));g=x.e-Y}else x=null}else x=null}let p=h.traverse*Math.PI/180,m=p*.8,_=Ve(f-l.yaw),v=Et.clamp(_*1.5,-p,p);l.yawV+=Et.clamp(v-l.yawV,-m*e,m*e),l.yaw+=l.yawV*e;let S=h.elevRate*Math.PI/180;l.elev+=Et.clamp((g-l.elev)*3,-S,S)*e,l.gunElev??=l.recoil.map(()=>0);for(let C=0;C<l.gunElev.length;C++){let R=l.reload>h.reload*.35?Math.min(l.elev,.087):l.elev;l.gunElev[C]+=Et.clamp(R-l.gunElev[C],-S*e*(1-C*.06),S*e*(1-C*.06))}l.onTarget=!!x&&Math.abs(Ve(f-l.yaw))<.006&&Math.abs(g-l.elev)<.003&&l.gunElev.every(C=>Math.abs(C-l.elev)<.004),l.onTarget&&l.reload<=0&&!t.holdFire&&(!t.testAim||t.testAim.fire&&!l.testFired)&&(this.fireTurret(t,l,n),t.testAim&&(l.testFired=!0))}}fireTurret(t,e,n){let i=t.body,r=e.g,o=e.meta,a=o.guns??2,c=new vt().compose(i.pos,i.quat,new w(1,1,1)),l=new de().setFromAxisAngle(new w(0,1,0),-e.yaw),h=new vt().compose(new w(...o.at),l,new w(1,1,1)).premultiply(c);for(let d=0;d<a;d++){let f=new de().setFromAxisAngle(new w(1,0,0),-(e.gunElev?.[d]??e.elev)),g=(d-(a-1)/2)*o.gap,x=new vt().compose(new w(o.trunnion[0]+g,o.trunnion[1],o.trunnion[2]),f,new w(1,1,1)).premultiply(h),p=new w(0,0,o.barrel_len).applyMatrix4(x),m=new w(0,0,1).transformDirection(x),_=e.perfect?0:.0012+r.cal*.001;m.x+=Dn()*_,m.y+=Dn()*_*.6,m.z+=Dn()*_,m.normalize(),this.arty.fire(o.gun,t,p,m,n),e.lastShell=this.arty.shells[this.arty.shells.length-1],e.recoil[d]=.001}e.reload=r.reload*(.95+Math.random()*.1);let u=t.target&&t.fc.get(t.target.id);u&&(u.err=Math.max(u.err*.72,t.side==="A"?.14:.3),u.r=Dn(),u.a=Dn())}snapAim(t,e,n=.3){let i=Array.isArray(e)?e:[e],r=i[0],o=t.body,a=new w,c=new w;t.turrets.forEach((h,u)=>{let d=i[u%i.length];o.toWorld(c.set(...h.meta.at),a);let f=d.body.pos,g=d.body.vel,x=Math.hypot(f.x-a.x,f.z-a.z),p=f.x,m=f.z,_=null;for(let M=0;M<3&&(_=Qs(h.meta.gun,x),!!_);M++)p=f.x+(g.x-o.vel.x)*_.t,m=f.z+(g.z-o.vel.z)*_.t,x=Math.hypot(p-a.x,m-a.z);if(!_)return;o.toLocal(c.set(p,a.y,m),c);let v=h.meta.at,S=Math.atan2(-(c.x-v[0]),c.z-v[2]),C=Ve(S-h.rest),R=Ve(h.meta.arc[0]-h.rest),T=Ve(h.meta.arc[1]-h.rest);if(C<R||C>T)return;let N=Math.asin(Et.clamp(new w(-Math.sin(h.rest+C),0,Math.cos(h.rest+C)).applyQuaternion(o.quat).y,-1,1));h.yaw=h.rest+C,h.yawV=0,h.elev=_.e-N,h.gunElev=h.recoil.map(()=>_.e-N),h.reload=n+Math.random()*.15,h.lockOn=d});let l=r;for(let h of i)t.fc.set(h.id,{err:.12,r:Dn()*.5,a:Dn()*.5,turn:h.body.yawRate});t.focus=l,t.fc.set(l.id,{err:.12,r:Dn()*.5,a:Dn()*.5,turn:l.body.yawRate})}torpStep(t,e,n){if(this.torp)for(let i of t.torps){if(i.reload-=e,i.reload>0)continue;let r=t.body.toWorld(new w(...i.meta.at),new w),o=t.body.yaw-i.meta.home,a=null,c=5500;for(let g of this.ships){if(g.side===t.side||!g.alive)continue;let x=g.body.pos.x-r.x,p=g.body.pos.z-r.z,m=Math.hypot(x,p);m>c||m<400||Math.abs(Ve(Math.atan2(x,p)-o))>1.2||(a=g,c=m)}if(!a)continue;let l=a.body.pos,h=a.body.vel,u=l.x,d=l.z;for(let g=0;g<4;g++){let x=Math.hypot(u-r.x,d-r.z)/ji.speed;u=l.x+h.x*x,d=l.z+h.z*x}let f=Math.atan2(u-r.x,d-r.z);for(let g of[-1.5,-.5,.5,1.5]){let x=f+g*.045;this.torp.launch(t,r,new w(Math.sin(x),0,Math.cos(x)),n)}i.reload=55+Math.random()*10}}torpHit(t){let e=t.ship;if(!e.alive&&e.body.founder>30)return;this.fx.column(t.world,1.1),this.fx.hitBurst(t.world.clone().setY(2),.4);let n=t.local,i=Math.sign(n.x||1);e.body.hole(new w(i*e.meta.B*.45,-e.meta.T*.6,n.z),ji.hole),e.body.rollV+=i*.02;let r=Ur[e.kind].armor;e.hp-=ji.dmg*(1-r*.4),this.log.push({kind:"torphit",ship:e}),this.events.push({kind:"torphit",type:"torp",world:t.world.clone()}),e.hp<=0&&e.alive&&this.sink(e,t.from,e.kind==="dd"?"magazine":void 0)}hit(t){let e=t.ship,n=ve[t.type];if(!e.alive&&e.body.founder>30)return;this.fx.hitBurst(t.world,n.cal);let i=Ur[e.kind].armor,r=Et.clamp(n.cal/.36*1.4-i*.9,.12,1),o=e.kind==="dd"&&n.cal>=.3?2.4:e.kind==="ca"&&n.cal>=.4?1.5:1,a=n.dmg*r*o*(.7+Math.random()*.6);e.hp-=a;let c=e.meta.L,l=e.meta.B,h=t.local;h.y<1.8&&t.part.part==="hull"&&e.body.hole(h.clone().setY(Math.min(h.y,-.3)),n.cal*n.cal*5*r);let u=h.z>c/6?0:h.z<-c/6?2:1;(t.part.part!=="hull"||Math.random()<.4)&&(e.fires[u]=Math.min(1,e.fires[u]+.2+n.cal*.9*r));let d=/^turret_(\d+)/.exec(t.part.part??"");d&&e.turrets[+d[1]]&&Math.random()<.6*r&&(e.turrets[+d[1]].broken=!0);for(let f of e.turrets){let g=f.meta.at;if(Math.hypot(h.x-g[0],h.z-g[2])<l*.28){!f.broken&&Math.random()<.35*r&&(f.broken=!0);let p={bb:.008,ca:.05,dd:.12}[e.kind]*r*(n.cal>.3?1.6:n.cal>.15?1:.3);if(e.alive&&Math.random()<p){this.magazine(e,Q_(e,g));return}}}e.hp<=0&&e.alive&&this.sink(e,t.from)}magazine(t,e){this.fx.magazine(e,t.kind==="bb"?1.6:t.kind==="ca"?1:.6),this.log.push({kind:"magazine",ship:t}),this.events.push({kind:"magazine",type:t.kind,world:e.clone()}),t.hp=0,this.sink(t,null,"magazine")}sink(t,e,n){t.alive=!1,t.body.startFounder(n??(Math.abs(t.body.list)>.15||t.kind==="dd"&&Math.random()<.5?"capsize":void 0));for(let i=0;i<3;i++)t.fires[i]=Math.max(t.fires[i],.5+Math.random()*.5);this.log.push({kind:"sunk",ship:t}),t.side!=="A"&&(this.score+=J_[t.kind],this.sunkN++)}burnStep(t,e){let n=t.meta.L;for(let i=0;i<3;i++){let r=t.fires[i];if(r<=0)continue;t.burn[i]=Math.min(1,t.burn[i]+r*e*.05),t.alive?(t.hp-=r*e*.25,t.fires[i]=Math.max(0,r-e*.012),t.hp<=0&&this.sink(t,null)):t.fires[i]=Math.max(0,r-e*.004);let o=(1-i)*n/3,a=t.body.toWorld(new w((Math.random()-.5)*t.meta.B*.4,t.meta.deck_top+1,o+(Math.random()-.5)*n/4),ih());a.y>-1&&this.fx.bigFire(a,r,e)}}steerTo(t,e,n){t.body.ctl.pow=void 0;let i=Ve(e-t.body.yaw);t.body.ctl.rudder=Et.clamp(-i*2.2,-.6,.6),t.body.ctl.tele=n}steerPlayer(t,e){let n=t.body,i=this.flagship();if(!t.order&&t.station&&i?.alive&&i!==t){let c=i.body,[l,h]=t.station,u=Math.cos(c.yaw),d=Math.sin(c.yaw),f=c.pos.x+l*u+h*d,g=c.pos.z-l*d+h*u,x=f-n.pos.x,p=g-n.pos.z,m=x*Math.sin(c.yaw)+p*Math.cos(c.yaw),v=Math.hypot(x,p)>120?Math.atan2(x+Math.sin(c.yaw)*300,p+Math.cos(c.yaw)*300):c.yaw;this.steerTo(t,v,4);let S=Math.max(c.speed+Et.clamp(m*.012,-3,4),.5);n.ctl.pow=Et.clamp((S/n.vmax)**3*1.05,.02,1);return}if(!t.order){t.body.ctl.rudder*=Math.exp(-e);return}let r=t.order.x-n.pos.x,o=t.order.z-n.pos.z,a=Math.hypot(r,o);if(a<t.meta.L*.8){t.order=null,n.ctl.tele=1,n.ctl.rudder=0;return}this.steerTo(t,Math.atan2(r,o),a>900?4:a>400?3:2)}steerAI(t,e){let n=t.body,i=this.ships.find(d=>d.side!==t.side&&d.alive&&(d.flagship||d.kind==="bb"))??t.target,r=t.target??i;if(!r){this.steerTo(t,n.yaw,3);return}let o=r.body.pos.x-n.pos.x,a=r.body.pos.z-n.pos.z,c=Math.hypot(o,a),l=Math.atan2(o,a),h=t.kind==="dd"?2600:t.maxRange*.7,u;if(c>h*1.15)u=l;else{let d=Ve(l+Math.PI/2-n.yaw),f=Ve(l-Math.PI/2-n.yaw);u=Math.abs(d)<Math.abs(f)?l+Math.PI/2:l-Math.PI/2,c<h*.7&&(u+=Math.sign(Ve(u-l))*.4)}this.steerTo(t,u,4)}avoid(t,e){let n=t.body;for(let i of this.ships){if(i===t||i.gone)continue;let r=n.pos.x-i.body.pos.x,o=n.pos.z-i.body.pos.z,a=Math.hypot(r,o),c=(t.meta.L+i.meta.L)*.42;if(a<c*1.6&&a>1&&(Math.sin(n.yaw)*-r+Math.cos(n.yaw)*-o)/a>.3&&t.alive&&(n.ctl.rudder=Et.clamp(n.ctl.rudder+Math.sign(Math.sin(n.yaw)*o-Math.cos(n.yaw)*r||1)*.6*(1-a/(c*1.6)),-.6,.6)),a<c&&a>1){let l=(c-a)*.6*e;n.pos.x+=r/a*l,n.pos.z+=o/a*l}}}orderMove(t,e,n){if(!t.length)return;let i=t.reduce((o,a)=>o+a.body.pos.x,0)/t.length,r=t.reduce((o,a)=>o+a.body.pos.z,0)/t.length;for(let o of t){let a=o.body.pos.x-i,c=o.body.pos.z-r,l=Math.hypot(a,c),h=260+120*t.length;l>h&&(a*=h/l,c*=h/l),o.order={x:e+a,z:n+c},o.station=null}}orderAttack(t,e){for(let n of t)n.focus=e}waveStep(t){this.waveT+=t;let e=this.ships.filter(i=>i.side==="E"&&i.alive),n=this.flagship();!n||!n.alive||(this.wave===0&&this.waveT>3||this.wave>0&&(e.length===0&&this.waveT>8||e.length<=1&&this.waveT>90))&&(this.wave++,this.waveT=0,this.spawnWave(this.wave))}spawnWave(t){let n=this.flagship().body.pos,i=t===1?["dd","dd","dd"]:t===2?["ca","ca","dd","dd","dd"]:t===3?["bb","ca","ca","dd","dd","dd","dd"]:["bb","ca","ca","ca","dd","dd","dd","dd","dd"].slice(0,6+Math.min(t-3,3)),r=t>=3?2:1,o=Math.random()*Math.PI*2;i.forEach((a,c)=>{let l=c%r,h=o+l*(Math.PI*(.6+Math.random()*.5)),u=6600+Math.random()*700,d=Math.floor(c/r),f=n.x+Math.sin(h)*u,g=n.z+Math.cos(h)*u,x=new dt(Math.cos(h),-Math.sin(h)),p=(d-2)*420;this.add(a,"E",f+x.x*p,g+x.y*p,h+Math.PI,Ur[a].kn*.5144*.9,{group:t})}),this.log.push({kind:"wave",n:t,count:i.length})}};function Q_(s,t){return s.body.toWorld(new w(t[0],t[1]+3,t[2]),new w)}var Ta=class{constructor(t,e){this.c=t,this.el=e,this.target=new w,this.yaw=.6,this.pitch=.62,this.dist=1400,this.keys={},this.follow=null,this.free=!1,addEventListener("keydown",o=>{this.keys[o.code]=!0,(o.code.startsWith("Arrow")||o.code==="Space")&&o.preventDefault()}),addEventListener("keyup",o=>{this.keys[o.code]=!1}),addEventListener("blur",()=>{this.keys={}}),e.addEventListener("wheel",o=>{this.dist=Et.clamp(this.dist*Math.exp(o.deltaY*.0012),90,7e3),o.preventDefault()},{passive:!1});let n=!1,i=0,r=0;e.addEventListener("pointerdown",o=>{(o.button===1||o.button===0&&o.altKey)&&(n=!0,i=o.clientX,r=o.clientY,o.preventDefault())}),addEventListener("pointerup",()=>{n=!1}),addEventListener("pointermove",o=>{n&&(this.yaw-=(o.clientX-i)*.005,this.pitch=Et.clamp(this.pitch+(o.clientY-r)*.004,.06,1.45),i=o.clientX,r=o.clientY)})}set(t){Object.assign(this,t)}update(t){let e=this.keys,n=this.dist*.9*t,i=0,r=0;if((e.KeyW||e.ArrowUp)&&(r+=1),(e.KeyS||e.ArrowDown)&&(r-=1),(e.KeyA||e.ArrowLeft)&&(i-=1),(e.KeyD||e.ArrowRight)&&(i+=1),i||r){this.follow=null;let c=-Math.sin(this.yaw),l=-Math.cos(this.yaw);this.target.x+=(c*r-l*i)*n*-1*-1,this.target.z+=(l*r+c*i)*n}if(this.follow?.body){let c=this.follow.body.pos;this.target.x+=(c.x-this.target.x)*(1-Math.exp(-t*3)),this.target.z+=(c.z-this.target.z)*(1-Math.exp(-t*3))}let o=Math.sin(this.pitch)*this.dist,a=Math.cos(this.pitch)*this.dist;this.c.position.set(this.target.x+Math.sin(this.yaw)*a,Math.max(o,4),this.target.z+Math.cos(this.yaw)*a),this.c.lookAt(this.target.x,0,this.target.z),this.c.updateMatrixWorld()}},sh=new Ko,vf=new dt,Nr=new w,Aa=class{constructor({battle:t,camera:e,rcam:n,el:i,overlay:r,W:o,H:a,sound:c}){this.b=t,this.camera=e,this.rcam=n,this.el=i,this.ov=r,this.W=o,this.H=a,this.sound=c,this.sel=[],this.box=document.createElement("div"),this.box.className="selbox",r.appendChild(this.box),this.bars=new Map,this.marks=[],this.enabled=!0;let l=null,h=u=>{let d=i.getBoundingClientRect();return[(u.clientX-d.left)/d.width*o,(u.clientY-d.top)/d.height*a]};i.addEventListener("contextmenu",u=>u.preventDefault()),i.addEventListener("pointerdown",u=>{this.enabled&&(u.button===0&&!u.altKey&&(l=h(u)),u.button===2&&this.command(h(u)))}),addEventListener("pointermove",u=>{if(!l)return;let[d,f]=h(u),g=Math.min(d,l[0]),x=Math.min(f,l[1]);Object.assign(this.box.style,{display:"block",left:g+"px",top:x+"px",width:Math.abs(d-l[0])+"px",height:Math.abs(f-l[1])+"px"})}),addEventListener("pointerup",u=>{if(!l||u.button!==0)return;let[d,f]=h(u);this.box.style.display="none",Math.hypot(d-l[0],f-l[1])<6?this.clickSelect(d,f,u.shiftKey):this.boxSelect(l,[d,f],u.shiftKey),l=null}),addEventListener("keydown",u=>{if(this.enabled&&(u.code==="KeyQ"&&this.select(this.b.ships.filter(d=>d.side==="A"&&d.alive)),u.code==="Space")){let d=this.b.flagship();d&&(this.rcam.follow=d)}})}project(t){return Nr.copy(t).project(this.camera),[(Nr.x*.5+.5)*this.W,(-Nr.y*.5+.5)*this.H,Nr.z]}ground(t,e){vf.set(t/this.W*2-1,-(e/this.H*2-1)),sh.setFromCamera(vf,this.camera);let n=sh.ray.direction,i=sh.ray.origin;if(n.y>=-1e-4)return null;let r=-i.y/n.y;return new w(i.x+n.x*r,0,i.z+n.z*r)}pick(t,e,n){let i=this.ground(t,e),r=null,o=1e9;for(let a of this.b.ships){if(!a.alive||n&&a.side!==n)continue;let[c,l,h]=this.project(a.body.pos);if(h>1)continue;let u=Math.hypot(c-t,l-e),d=Math.max(26,this.screenLen(a)*.5);u<d&&u<o&&(o=u,r=a)}if(!r&&i)for(let a of this.b.ships){if(!a.alive||n&&a.side!==n)continue;let c=a.body.pos.distanceTo(i);c<a.meta.L*.6&&c<o&&(o=c,r=a)}return r}screenLen(t){let e=t.body.forward(new w).multiplyScalar(t.meta.L/2),n=this.project(Nr.copy(t.body.pos).add(e)),i=this.project(new w().copy(t.body.pos).sub(e));return Math.hypot(n[0]-i[0],n[1]-i[1])}select(t,e=!1){if(!e)for(let n of this.sel)n.sel=!1;this.sel=e?[...new Set([...this.sel,...t])]:t;for(let n of this.sel)n.sel=!0;t.length&&this.sound?.click?.()}clickSelect(t,e,n){let i=this.pick(t,e,"A");this.select(i?[i]:[],n)}boxSelect(t,e,n){let i=Math.min(t[0],e[0]),r=Math.max(t[0],e[0]),o=Math.min(t[1],e[1]),a=Math.max(t[1],e[1]);this.select(this.b.ships.filter(c=>{if(c.side!=="A"||!c.alive)return!1;let[l,h,u]=this.project(c.body.pos);return u<1&&l>=i&&l<=r&&h>=o&&h<=a}),n)}command([t,e]){let n=this.sel.filter(o=>o.alive);if(!n.length)return;let i=this.pick(t,e,"E");if(i){this.b.orderAttack(n,i),this.flash(i.body.pos,"atk");return}let r=this.ground(t,e);r&&(this.b.orderMove(n,r.x,r.z),this.flash(r,"mv"))}flash(t,e){this.marks.push({p:t.clone(),t:0,kind:e})}update(t){let e=new Set;for(let n of this.b.ships){if(n.gone||!n.alive&&n.body.founder>6)continue;e.add(n);let i=this.bars.get(n);i||(i=document.createElement("div"),i.className="bar "+(n.side==="A"?"own":"foe")+(n.flagship?" flag":""),i.innerHTML="<i></i>",this.ov.appendChild(i),this.bars.set(n,i));let r=n.body.toWorld(new w(0,n.meta.deck_top+n.meta.B*1.2,0),new w),[o,a,c]=this.project(r);if(c>1||o<-50||o>this.W+50||a<-50||a>this.H+50){i.style.display="none";continue}let l=Et.clamp(this.screenLen(n)*.5,22,90);i.style.display="block",i.style.transform=`translate(${(o-l/2).toFixed(1)}px, ${(a-14).toFixed(1)}px)`,i.style.width=l+"px",i.firstChild.style.width=(Math.max(n.hp,0)/n.hpMax*100).toFixed(1)+"%",i.classList.toggle("sel",!!n.sel),i.classList.toggle("dead",!n.alive),i.classList.toggle("tgt",this.sel.some(h=>h.focus===n))}for(let[n,i]of this.bars)e.has(n)||(i.remove(),this.bars.delete(n));for(let n of this.marks){n.t+=t,n.el||(n.el=document.createElement("div"),n.el.className="mark "+n.kind,this.ov.appendChild(n.el));let[i,r]=this.project(n.p);n.el.style.transform=`translate(${i}px, ${r}px) scale(${1+n.t*1.5})`,n.el.style.opacity=Math.max(0,1-n.t/.9)}this.marks=this.marks.filter(n=>n.t>.9?(n.el?.remove(),!1):!0)}};var rh={en:{titleSub:"IRON FLEET",cardSub:"IRON FLEET",waveN:s=>`WAVE <b>${s}</b>`,sunk:"SUNK",goal:"You command a small iron fleet: one battleship, two heavy cruisers, three destroyers.<br>Enemy squadrons close in from every side. Break them all, and keep your flagship afloat.",start:"START",hint:"Left drag: select ships\u3000Right click: move / attack\u3000Q: whole fleet\u3000W A S D: pan\u3000Wheel: zoom\u3000Middle drag: rotate\u3000Space: flagship",keys:"<kbd>LMB</kbd> select\u3000<kbd>RMB</kbd> move / attack\u3000<kbd>Q</kbd> all ships\u3000<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> pan\u3000<kbd>Wheel</kbd> zoom\u3000<kbd>MMB</kbd> rotate\u3000<kbd>Space</kbd> flagship",kinds:{bb:"BATTLESHIP",ca:"CRUISER",dd:"DESTROYER"},short:{bb:"BB",ca:"CA",dd:"DD"},waveIn:(s,t)=>`WAVE ${s}
${t} ships inbound`,sunkThem:s=>`ENEMY ${s} SUNK`,sunkUs:s=>`OUR ${s} IS LOST`,magazine:s=>`MAGAZINE HIT \u2014 ${s} BLOWS UP`,tons:s=>`${s.toLocaleString("en")} t`,lost:"FLAGSHIP LOST",endSub:(s,t,e)=>`${s} waves held, ${t} ships sunk, ${e.toLocaleString("en")} tons`,again:"AGAIN",refitBtn:"REFIT",refit:"REFIT",calibre:"CALIBRE (cm)",barrels:"BARRELS",tiers:"STACKED",slotHint:"Click a ring on the ship to choose what goes there. Drag to look around, wheel to zoom.",testFire:"TEST FIRE",stock:"STOCK",copyAll:"SAME FOR SISTERS",sortie:"SORTIE",copied:"Copied to her sister ships",slotName:s=>s.stock>=0?`MOUNT ${"ABXY"[s.stock]??s.stock+1}`:s.wing?`${s.wing>0?"PORT":"STARBOARD"} WING`:"EXTRA CENTRELINE",empty:"EMPTY",gun:"GUN",torp:"TORPEDOES",single:"single",twin:"twin",triple:"triple",disp:"DISPLACEMENT",speed:"SPEED",broad:"BROADSIDE",range:"RANGE",stab:{ok:"STABLE",tender:"TENDER \u2014 she will roll hard when she fires",capsize:"TOP-HEAVY \u2014 she will not stay upright",sink:"OVERLOADED \u2014 she will not float"},wentOver:"SHE ROLLED OVER",sankDock:"SHE WENT DOWN",capsized:(s,t)=>t?`OUR ${s} CAPSIZED`:`ENEMY ${s} CAPSIZED`,lang:"\u65E5\u672C\u8A9E"},ja:{titleSub:"\u9244\u306E\u8266\u968A",cardSub:"\u9244\u306E\u8266\u968A",waveN:s=>`\u7B2C <b>${s}</b> \u6CE2`,sunk:"\u6483\u6C88",goal:"\u3042\u306A\u305F\u304C\u7387\u3044\u308B\u306E\u306F\u3001\u6226\u82661\u30FB\u91CD\u5DE12\u30FB\u99C6\u90103\u306E\u5C0F\u3055\u306A\u9244\u306E\u8266\u968A\u3002<br>\u56DB\u65B9\u304B\u3089\u6575\u306E\u8266\u968A\u304C\u62BC\u3057\u5BC4\u305B\u308B\u3002\u65D7\u8266\u3092\u6C88\u3081\u305A\u306B\u3001\u3059\u3079\u3066\u8E74\u6563\u3089\u305B\u3002",start:"\u51FA\u6483",hint:"\u5DE6\u30C9\u30E9\u30C3\u30B0\uFF1A\u8266\u3092\u9078\u3076\u3000\u53F3\u30AF\u30EA\u30C3\u30AF\uFF1A\u79FB\u52D5\u30FB\u653B\u6483\u3000Q\uFF1A\u5168\u8266\u3000W A S D\uFF1A\u8996\u70B9\u306E\u79FB\u52D5\u3000\u30DB\u30A4\u30FC\u30EB\uFF1A\u5BC4\u308B\u30FB\u5F15\u304F\u3000\u4E2D\u30C9\u30E9\u30C3\u30B0\uFF1A\u56DE\u3059\u3000Space\uFF1A\u65D7\u8266\u3078",keys:"<kbd>\u5DE6</kbd> \u9078\u629E\u3000<kbd>\u53F3</kbd> \u79FB\u52D5\u30FB\u653B\u6483\u3000<kbd>Q</kbd> \u5168\u8266\u3000<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> \u8996\u70B9\u3000<kbd>\u30DB\u30A4\u30FC\u30EB</kbd> \u5BC4\u308B\u3000<kbd>\u4E2D</kbd> \u56DE\u3059\u3000<kbd>Space</kbd> \u65D7\u8266",kinds:{bb:"\u6226\u8266",ca:"\u91CD\u5DE1",dd:"\u99C6\u9010\u8266"},short:{bb:"\u6226\u8266",ca:"\u91CD\u5DE1",dd:"\u99C6\u9010"},waveIn:(s,t)=>`\u7B2C${s}\u6CE2
\u6575 ${t}\u96BB \u63A5\u8FD1`,sunkThem:s=>`\u6575${s}\u3092\u6483\u6C88`,sunkUs:s=>`\u5473\u65B9\u306E${s}\u304C\u6C88\u6CA1`,magazine:s=>`\u5F3E\u85AC\u5EAB\u306B\u547D\u4E2D \u2014 ${s}\u304C\u7206\u6C88`,tons:s=>`${s.toLocaleString("ja")} \u30C8\u30F3`,lost:"\u65D7\u8266 \u6C88\u6CA1",endSub:(s,t,e)=>`${s}\u6CE2\u3092\u3057\u306E\u304E\u3001${t}\u96BB\u30FB${e.toLocaleString("ja")}\u30C8\u30F3\u3092\u6483\u6C88`,again:"\u3082\u3046\u4E00\u5EA6",refitBtn:"\u6539\u88C5",refit:"\u6539\u88C5",calibre:"\u53E3\u5F84\uFF08cm\uFF09",barrels:"\u9580\u6570",tiers:"\u6BB5\u6570",slotHint:"\u8266\u306E\u4E0A\u306E\u4E38\u3092\u62BC\u3057\u3066\u3001\u305D\u3053\u306B\u8F09\u305B\u308B\u3082\u306E\u3092\u9078\u3076\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u3059\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u5BC4\u308B\u3002",testFire:"\u8A66\u3057\u6483\u3061",stock:"\u5143\u306B\u623B\u3059",copyAll:"\u540C\u578B\u8266\u306B\u3082",sortie:"\u51FA\u6483",copied:"\u540C\u578B\u8266\u306B\u3082\u540C\u3058\u6539\u88C5\u3092\u3057\u307E\u3057\u305F",slotName:s=>s.stock>=0?`${"\u4E00\u4E8C\u4E09\u56DB\u4E94"[s.stock]??s.stock+1}\u756A\u7832\u5854`:s.wing?`${s.wing>0?"\u5DE6\u8237":"\u53F3\u8237"}\u306E\u8237\u5074`:"\u8FFD\u52A0\u306E\u7832\u5EA7",empty:"\u7A7A\u304D",gun:"\u4E3B\u7832",torp:"\u9B5A\u96F7",single:"\u5358\u88C5",twin:"\u9023\u88C5",triple:"\u4E09\u9023\u88C5",disp:"\u6392\u6C34\u91CF",speed:"\u901F\u529B",broad:"\u6589\u5C04\u306E\u91CD\u3055",range:"\u5C04\u7A0B",stab:{ok:"\u5B89\u5B9A",tender:"\u4E0D\u5B89\u5B9A\uFF1A\u6483\u3064\u3068\u5927\u304D\u304F\u50BE\u304F",capsize:"\u982D\u304C\u91CD\u3059\u304E\u308B\uFF1A\u307E\u3063\u3059\u3050\u7ACB\u3063\u3066\u3044\u3089\u308C\u306A\u3044",sink:"\u91CD\u3059\u304E\u308B\uFF1A\u6D6E\u304B\u3070\u306A\u3044"},wentOver:"\u8EE2\u8986\u3057\u305F",sankDock:"\u6C88\u3093\u3060",capsized:(s,t)=>t?`\u5473\u65B9\u306E${s}\u304C\u8EE2\u8986`:`\u6575${s}\u304C\u8EE2\u8986`,lang:"English"}},ty=new URLSearchParams(location.search),Qi=ty.get("lang")??(()=>{try{return localStorage.getItem("kurogane-lang")}catch{return null}})()??"en";rh[Qi]||(Qi="en");var ey=[],Zt=s=>rh[Qi][s]??rh.en[s];function Ra(){document.documentElement.lang=Qi;for(let t of document.querySelectorAll("[data-t]"))t.innerHTML=Zt(t.dataset.t);let s=document.getElementById("lang");s&&(s.textContent=Zt("lang"));for(let t of ey)t()}function _f(){Qi=Qi==="en"?"ja":"en";try{localStorage.setItem("kurogane-lang",Qi)}catch{}Ra()}var Ca=class{constructor(){this.ctx=null}start(){if(this.ctx)return;let t=this.ctx=new AudioContext,e=this.out=t.createGain();e.gain.value=.9;let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,e.connect(n).connect(t.destination);let i=t.createBuffer(2,t.sampleRate*3,t.sampleRate);for(let l=0;l<2;l++){let h=i.getChannelData(l);for(let u=0,d=0;u<h.length;u++)d=.985*d+.015*(Math.random()*2-1),h[u]=d*4+(Math.random()*2-1)*.25}this.nb=i;let r=(l=1)=>{let h=t.createBufferSource();return h.buffer=i,h.loop=!0,h.playbackRate.value=l,h.start(),h},o=(l,h,u,d,f)=>{let g=t.createBiquadFilter();g.type=h,g.frequency.value=u,g.Q.value=d;let x=t.createGain();return x.gain.value=f,l.connect(g).connect(x).connect(e),{f:g,g:x}};this.sea=o(r(1),"bandpass",600,.4,.05),this.sea2=o(r(.71),"highpass",2500,.5,.01),this.bow=o(r(1.3),"bandpass",1200,.7,0),this.wind=o(r(.9),"bandpass",400,1.2,.02),this.whistle=o(r(1.1),"bandpass",1800,18,0),this.flog=o(r(.6),"lowpass",300,.8,0);let a=t.createOscillator();a.frequency.value=5;let c=t.createGain();c.gain.value=0,a.connect(c).connect(this.flog.g.gain),a.start(),this.flogLfo=a,this.flogDepth=c,this.nextSlap=0,this.nextCreak=0,this.nextGull=4,this.lastRoll=0,this.nextBell=30}thump(t,e=90,n=.35,i=0){let r=this.ctx,o=r.currentTime,a=r.createBufferSource();a.buffer=this.nb,a.playbackRate.value=.5+Math.random()*.3;let c=r.createBiquadFilter();c.type="lowpass",c.frequency.value=e*6;let l=r.createGain();l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(t,o+.02),l.gain.exponentialRampToValueAtTime(5e-4,o+n);let h=r.createStereoPanner();h.pan.value=i,a.connect(c).connect(l).connect(h).connect(this.out),a.start(o,Math.random()*2),a.stop(o+n+.05)}creak(t){let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sawtooth";let r=140+Math.random()*180;i.frequency.setValueAtTime(r,n),i.frequency.linearRampToValueAtTime(r*(1.3+Math.random()*.4),n+.4);let o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=900+Math.random()*600,o.Q.value=6;let a=e.createGain();a.gain.value=0;let c=e.createOscillator();c.frequency.value=28+Math.random()*20;let l=e.createGain();l.gain.value=t,c.connect(l).connect(a.gain);let h=e.createGain();h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(1,n+.08),h.gain.linearRampToValueAtTime(0,n+.5);let u=e.createStereoPanner();u.pan.value=Math.random()*1.2-.6,i.connect(o).connect(a).connect(h).connect(u).connect(this.out),i.start(n),c.start(n),i.stop(n+.55),c.stop(n+.55)}gull(t){let e=this.ctx,n=e.currentTime;for(let i=0;i<2+Math.floor(Math.random()*3);i++){let r=n+i*(.28+Math.random()*.1),o=e.createOscillator();o.type="triangle";let a=1500+Math.random()*300;o.frequency.setValueAtTime(a*1.25,r),o.frequency.exponentialRampToValueAtTime(a*.7,r+.22);let c=e.createGain();c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(.012,r+.03),c.gain.linearRampToValueAtTime(0,r+.24);let l=e.createStereoPanner();l.pan.value=t,o.connect(c).connect(l).connect(this.out),o.start(r),o.stop(r+.26)}}bell(){let t=this.ctx,e=t.currentTime,n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=900,n.connect(this.out);for(let[i,r,o]of[[82,.05,14],[165.5,.03,10],[219,.02,7],[296,.012,5],[421,.006,3]]){let a=t.createOscillator();a.frequency.value=i;let c=t.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(r,e+.02),c.gain.exponentialRampToValueAtTime(1e-4,e+o),a.connect(c).connect(n),a.start(e),a.stop(e+o)}}place(t){return[this.ctx.currentTime+t/343,1/(1+t/80),300+11e3*Math.exp(-t/500)]}burst({d:t,pan:e,dur:n,f:i,q:r=.7,type:o="bandpass",gain:a,rate:c=1,attack:l=.004,delay:h=0}){let u=this.ctx,[d,f,g]=this.place(t),x=d+h,p=u.createBufferSource();p.buffer=this.nb,p.playbackRate.value=c;let m=u.createBiquadFilter();m.type=o,m.frequency.value=i,m.Q.value=r;let _=u.createBiquadFilter();_.type="lowpass",_.frequency.value=g;let v=u.createGain();v.gain.setValueAtTime(0,x),v.gain.linearRampToValueAtTime(a*f,x+l),v.gain.exponentialRampToValueAtTime(1e-4,x+n);let S=u.createStereoPanner();S.pan.value=e,p.connect(m).connect(_).connect(v).connect(S).connect(this.out),p.start(x,Math.random()*2),p.stop(x+n+.05)}gun(t,e,n){this.ctx&&(n>=3?(this.burst({d:t,pan:e,dur:.3,f:1800,q:.4,gain:1,attack:.001}),this.burst({d:t,pan:e,dur:1.8,f:90,q:.5,type:"lowpass",gain:2.4,rate:.35}),this.burst({d:t,pan:e,dur:7,f:55,q:.5,type:"lowpass",gain:1,rate:.22,attack:.12}),this.burst({d:t+1400,pan:-e*.4,dur:4,f:80,q:.5,type:"lowpass",gain:.3,rate:.25,attack:.4})):n>1.2?(this.burst({d:t,pan:e,dur:.22,f:2200,q:.5,gain:.8,attack:.001}),this.burst({d:t,pan:e,dur:1.2,f:140,q:.6,type:"lowpass",gain:1.5,rate:.45}),this.burst({d:t,pan:e,dur:4,f:70,q:.5,type:"lowpass",gain:.5,rate:.3,attack:.08})):n>.5?(this.burst({d:t,pan:e,dur:.25,f:2500,q:.5,gain:.9,attack:.002}),this.burst({d:t,pan:e,dur:1.4,f:160,q:.6,type:"lowpass",gain:1.6,rate:.5}),this.burst({d:t,pan:e,dur:4.5,f:70,q:.5,type:"lowpass",gain:.7,rate:.3,attack:.08}),this.burst({d:t+900,pan:-e*.5,dur:3,f:120,q:.5,type:"lowpass",gain:.25,rate:.35,attack:.3})):n>.2?(this.burst({d:t,pan:e,dur:.2,f:2e3,q:.6,gain:.5}),this.burst({d:t,pan:e,dur:.9,f:260,q:.6,type:"lowpass",gain:.8,rate:.6})):(this.burst({d:t,pan:e,dur:.09,f:3200,q:.8,gain:.35,attack:.001}),this.burst({d:t,pan:e,dur:.35,f:400,q:.6,type:"lowpass",gain:.25,rate:.8})))}horn(){if(!this.ctx)return;let t=this.ctx;for(let[e,n]of[[0,110],[1.1,92]]){let i=t.currentTime+e,r=t.createOscillator();r.type="sawtooth",r.frequency.value=n;let o=t.createOscillator();o.type="sawtooth",o.frequency.value=n*1.5;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=700;let c=t.createGain();c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.07,i+.1),c.gain.setValueAtTime(.07,i+.85),c.gain.linearRampToValueAtTime(0,i+1),r.connect(a),o.connect(a),a.connect(c).connect(this.out),r.start(i),o.start(i),r.stop(i+1.05),o.stop(i+1.05)}}click(){this.ctx&&this.burst({d:0,pan:0,dur:.04,f:3e3,q:2,gain:.05,attack:.001})}boom(t,e,n){this.ctx&&(this.burst({d:t,pan:e,dur:.5,f:900,q:.4,gain:1.2*n,attack:.002}),this.burst({d:t,pan:e,dur:3.5,f:60,q:.5,type:"lowpass",gain:2.6*n,rate:.2,attack:.02}),this.burst({d:t,pan:e,dur:9,f:40,q:.5,type:"lowpass",gain:1.2*n,rate:.15,attack:.3}))}splash(t,e,n){this.ctx&&this.burst({d:t,pan:e,dur:n?1.6:.5,f:900,q:.4,gain:n?.35:.08,attack:.02})}strike(t,e){this.ctx&&(this.burst({d:t,pan:e,dur:.18,f:1400,q:1.2,gain:.6,attack:.001}),this.burst({d:t,pan:e,dur:.6,f:300,q:.8,gain:.5,rate:.7,delay:.02}))}drumHit(t,e=0){let n=this.ctx,i=n.currentTime+e,r=n.createOscillator();r.frequency.setValueAtTime(95,i),r.frequency.exponentialRampToValueAtTime(52,i+.35);let o=n.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(t,i+.006),o.gain.exponentialRampToValueAtTime(1e-4,i+.9),r.connect(o).connect(this.out),r.start(i),r.stop(i+1);let a=n.createBufferSource();a.buffer=this.nb;let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=900;let l=n.createGain();l.gain.setValueAtTime(t*.5,i),l.gain.exponentialRampToValueAtTime(1e-4,i+.12),a.connect(c).connect(l).connect(this.out),a.start(i,Math.random()),a.stop(i+.15)}conch(){if(!this.ctx)return;let t=this.ctx;for(let[e,n,i]of[[0,233,2.4],[2.8,233,3.2]]){let r=t.currentTime+e,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(n*.94,r),o.frequency.linearRampToValueAtTime(n,r+.4),o.frequency.linearRampToValueAtTime(n*.97,r+i);let a=t.createOscillator();a.frequency.value=5.2;let c=t.createGain();c.gain.value=2.5,a.connect(c).connect(o.frequency);let l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=700,l.Q.value=1.4;let h=t.createGain();h.gain.setValueAtTime(0,r),h.gain.linearRampToValueAtTime(.09,r+.5),h.gain.setValueAtTime(.09,r+i-.6),h.gain.linearRampToValueAtTime(0,r+i),o.connect(l).connect(h).connect(this.out),o.start(r),a.start(r),o.stop(r+i+.1),a.stop(r+i+.1),this.burst({d:0,pan:0,dur:i,f:1500,q:.8,gain:.02,attack:.4,delay:e})}}update(t,{speed:e,aw:n,gust:i,roll:r,rollRate:o,heave:a,flog:c,force:l,landDir:h,evening:u}){if(!this.ctx)return;let d=this.ctx.currentTime,f=Math.min(n/12,1.2);this.sea.g.gain.setTargetAtTime(.04+f*.06,d,.5),this.sea2.g.gain.setTargetAtTime(.004+f*.012,d,.5),this.bow.g.gain.setTargetAtTime(Math.min(Math.max(e,0)/5,1)**1.5*.12,d,.3),this.bow.f.frequency.setTargetAtTime(700+e*220,d,.3),this.wind.g.gain.setTargetAtTime(.01+f*f*.05,d,.4),this.wind.f.frequency.setTargetAtTime(250+n*35,d,.4),this.whistle.g.gain.setTargetAtTime(Math.max(0,n-7)*.004*(.5+i),d,.6),this.whistle.f.frequency.setTargetAtTime(1400+n*60,d,.6),this.flog.g.gain.setTargetAtTime(c*.08,d,.15),this.flogDepth.gain.setTargetAtTime(c*.06,d,.15),this.flogLfo.frequency.setTargetAtTime(3+n*.5,d,.3),d>this.nextSlap&&(a<-.15||Math.abs(o)>.05)&&(this.thump(Math.min(.08+Math.abs(a)*.25+Math.abs(o)*1.2,.35),80+Math.random()*40,.3+Math.random()*.3,Math.sign(o)*.5),this.nextSlap=d+.6+Math.random()*1.2),d>this.nextCreak&&Math.abs(o)>.02+Math.random()*.03&&(this.creak(.5+Math.min(Math.abs(o)*8,1)*.5+l*1e-5),this.nextCreak=d+1.5+Math.random()*3),h!==null&&d>this.nextGull&&(this.gull(h),this.nextGull=d+6+Math.random()*14),u&&d>this.nextBell&&(this.bell(),this.nextBell=d+40+Math.random()*30),this.lastRoll=r}battle(t,{beat:e,stroke:n,fire:i,on:r}){if(!this.ctx)return;if(!this.fireN){let a=this.ctx,c=a.createBufferSource();c.buffer=this.nb,c.loop=!0,c.playbackRate.value=1.6,c.start();let l=a.createBiquadFilter();l.type="highpass",l.frequency.value=1500;let h=a.createGain();h.gain.value=0,c.connect(l).connect(h).connect(this.out),this.fireN=h,this.nextPop=0,this.lastStroke=n}let o=this.ctx.currentTime;if(this.fireN.gain.setTargetAtTime(i*.06,o,.5),i>.05&&o>this.nextPop&&(this.burst({d:20/i,pan:Math.random()-.5,dur:.05,f:2500,q:1,gain:.2*i,attack:.001}),this.nextPop=o+Math.random()*.15/i),r&&e>0){let a=Math.floor(this.lastStroke/(Math.PI*2));Math.floor(n/(Math.PI*2))>a&&(this.drumHit(.25+e*.05),e>=3&&this.drumHit(.18,.22))}this.lastStroke=n}};var fn=(s,t,e)=>s+(t-s)*e,oh=s=>s*s*(3-2*s),Un=s=>s.ships.find(t=>t.side==="A"&&t.flagship),ny=s=>Math.round(Math.abs(s)*57.3),yf=s=>Math.round(s).toLocaleString("en"),ah={f46:s=>s.filter(t=>!t.wing).map(t=>({slot:t.id,type:"gun",cal:46,n:3,tier:1})),f80:s=>s.filter(t=>t.stock>=0).map(t=>({slot:t.id,type:"gun",cal:80,n:2,tier:1}))},Mf=[{name:"line",dur:2.4,ts:1.5,setup:"fleet",fast:26,pick:"flag",flat:[{pos:[-170,6,260],look:[40,22,-500],fov:36},{pos:[-160,6,200],look:[40,22,-500],fov:36}]},{name:"enemy",dur:1.9,ts:1.5,pick:"ebb",flat:[{pos:[700,30,380],look:[0,15,-150],fov:34},{pos:[690,30,330],look:[0,15,-150],fov:34}]},{name:"incoming",dur:2.2,ts:1,setup:"charge",until:"incoming",pick:"hit",flat:[{pos:[-300,14,-160],look:[0,20,0],fov:30},{pos:[-285,14,-130],look:[0,20,0],fov:30}]},{name:"charge",dur:1.9,ts:1.4,pick:"dd",flat:[{pos:[-70,4,190],look:[30,8,-10],fov:36},{pos:[-60,4,150],look:[30,8,-10],fov:36}]},{name:"torps",dur:2.6,ts:4,until:"torps",top:!0},{name:"shell",dur:4.4,setup:"shell",shell:!0,cap:s=>s.shellCap},{name:"kill",dur:3,ts:1.6,until:"kill",pick:"victim",cam:[{yaw:1,pitch:.06,dist:420,lift:8,fov:32},{yaw:.85,pitch:.07,dist:380,lift:8,fov:32}]},{name:"torphit",dur:2.2,ts:1.2,until:"torphit",pick:"torped",cam:[{yaw:-1.2,pitch:.06,dist:380,lift:8,fov:32},{yaw:-1.1,pitch:.07,dist:350,lift:8,fov:32}]},{name:"stock",dur:3.2,ts:1,setup:"refit",fire:.5,pick:"flag",cap:s=>["Stock battleship",`8 \xD7 36 cm \xB7 GM ${s.gm0.toFixed(1)} m`],flat:[{pos:[-60,12,230],look:[0,12,0],fov:30},{pos:[-54,12,205],look:[0,12,0],fov:30}]},{name:"refit46",dur:3,ts:1,refit:"f46",pick:"flag",orbit:[2.6,.35,1,2.2,.3,.95],cap:s=>["Refit: six triple 46 cm turrets",`+${yf(s.fits.f46.dW)} t \xB7 GM ${s.gm0.toFixed(1)} \u2192 ${s.fits.f46.gm.toFixed(1)} m`]},{name:"b46",dur:3.6,ts:1.2,fire:.5,pick:"flag",cap:s=>["Fire",s.heel>1.5?`She heels ${s.heel}\xB0`:""],flat:[{pos:[-70,14,300],look:[0,12,0],fov:30},{pos:[-64,14,288],look:[0,12,0],fov:30}]},{name:"refit80",dur:2.7,ts:1,refit:"f80",pick:"flag",orbit:[-2.4,.3,1.05,-2,.26,1],cap:s=>["Refit: four twin 80 cm turrets",`+${yf(s.fits.f80.dW)} t \xB7 GM ${s.fits.f80.gm.toFixed(2)} m`]},{name:"b80",dur:2,ts:1,fire:.45,pick:"flag",cap:()=>["Fire",""],flat:[{pos:[120,30,-170],look:[-200,10,300],fov:34},{pos:[122,30,-165],look:[-200,10,300],fov:34}]},{name:"roll",dur:3.8,ts:1.8,pick:"flag",cap:s=>["Her own recoil rolls her over",`heel ${s.heelNow}\xB0`],flat:[{pos:[-80,14,320],look:[0,10,0],fov:30},{pos:[-74,15,300],look:[0,8,0],fov:30}]},{name:"impact",dur:3.4,ts:1.4,until:"landing",pick:"beam",cap:()=>["...as her 80 cm shells arrive",""],cam:[{yaw:2.55,pitch:.07,dist:1300,lift:40,fov:30},{yaw:2.48,pitch:.08,dist:1200,lift:40,fov:30}]},{name:"end",dur:4.4,ts:1,pick:"flag",title:[1.4,4.4],flat:[{pos:[-260,22,420],look:[0,4,0],fov:30},{pos:[-240,24,390],look:[0,4,0],fov:30}]}],ch=Mf.reduce((s,t)=>s+t.dur,0),La=class{constructor(t,e=Mf){this.c=t,this.b=t.battle,this.shots=e,this.cur=-1,this.title=document.getElementById("endcard"),this.tag=document.getElementById("tag"),this.cap=document.getElementById("cap"),this.b.waves=!1;let n=Un(this.b),i=Ri(n.meta);this.fits={f46:Li({kind:"bb",mounts:ah.f46(i)},this.b.art),f80:Li({kind:"bb",mounts:ah.f80(i)},this.b.art)},this.gm0=Li(Ci("bb",n.meta),this.b.art).gm,this.heel=0,this.heelNow=0}stageFleet(){let t=this.b,e=Un(t),n=e.body.pos.clone(),i=e.body.yaw+Math.PI/2;this.H0=e.body.yaw;let r=t.ships.filter(f=>f.side==="A"),o=r.filter(f=>f.kind==="dd"),a=r.filter(f=>f.kind==="ca"),c=[o[0],a[0],e,a[1],o[1],o[2]],l=Math.sin(i),h=Math.cos(i),u=Math.cos(i),d=-Math.sin(i);c.forEach((f,g)=>{let x=900-g*450;f.body.place(n.x+l*x,n.z+h*x,i,12),f.body.ctl.tele=3,f.noSteer=!0,f.station=null,f.order=null}),["dd","dd","ca","bb","ca","ca","dd","dd","dd"].forEach((f,g)=>{let x=2600-g*470,p=4800,m=t.add(f,"E",n.x+l*x+u*p,n.z+h*x+d*p,i+Math.PI,12);m.body.ctl.tele=3,m.noSteer=!0})}stageRefit(){let t=this.b;this.c.fx.clear(),this.c.torps.list.length=0,this.c.arty.shells.length=0;for(let o of t.ships)(o.side==="E"||o.side==="A"&&!o.flagship)&&(o.gone=!0,o.alive=!1);let e=Un(t);e.body.place(e.body.pos.x,e.body.pos.z,this.H0??e.body.yaw,6),e=t.refit(e,Ci("bb",e.meta)),e.noSteer=!0;let n=e.body.pos,i=e.body.yaw;e.body.ctl.tele=2;let r=i+Math.PI/2;["ca","dd","ca","dd","ca","dd"].forEach((o,a)=>{let c=(a-2.5)*420,l=5500+a%2*300,h=t.add(o,"E",n.x+Math.sin(r)*l+Math.sin(i)*c,n.z+Math.cos(r)*l+Math.cos(i)*c,i,5);h.holdFire=!0,h.torps=[],h.noSteer=!0})}beam(){let t=Un(this.b),e=this.b.ships.filter(n=>n.side==="E"&&n.alive);return e.filter(n=>n.kind==="ca").sort((n,i)=>n.body.pos.distanceTo(t.body.pos)-i.body.pos.distanceTo(t.body.pos))[0]??e[0]??t}shotAt(t){let e=0,n=this.shots;for(let i=0;i<n.length;i++){if(t<e+n[i].dur||i===n.length-1)return[i,t-e];e+=n[i].dur}return[n.length-1,0]}ts(t){let e=this.shots[this.shotAt(t)[0]];return e.shell?this.shellTs??2:e.ts??1}start(t){let e=this.shots[t],n=this.b,i=this.c;if(this.cur=t,this.heel=0,e.setup==="fleet"&&this.stageFleet(),e.setup==="refit"&&this.stageRefit(),e.setup==="charge"){let a=n.ships.find(c=>c.side==="A"&&c.kind==="dd"&&c.alive);if(a){let c=Un(n);a.noSteer=!1,a.order={x:c.body.pos.x+Math.cos(c.body.yaw)*6e3,z:c.body.pos.z-Math.sin(c.body.yaw)*6e3},a.body.ctl.tele=4,this.dd=a}}if(e.fast&&i.fast(e.fast),e.until==="incoming"&&i.fastUntil(()=>i.arty.shells.some(a=>a.from.side==="E"&&a.g.cal>.15&&a.v.y<0&&a.p.y<120&&n.ships.some(c=>c.side==="A"&&c.alive&&c.body.pos.distanceTo(a.p)<260&&(this.hitShip=c))),60),e.until==="torps"&&i.fastUntil(()=>i.torps.list.filter(a=>a.alive&&a.from.side==="A"&&a.run>300).length>=4,160),e.setup==="shell"&&this.startShell(),e.until==="kill"&&i.fastUntil(()=>!this.victim||!this.victim.alive,25),e.until==="torphit"){let a=n.log.length;i.fastUntil(()=>n.log.slice(a).some(c=>c.kind==="torphit"&&c.ship.side==="E"&&(this.torped=c.ship)),260),i.fast(.3)}let r=Un(n);(e.refit||e.fire!==void 0||e.until==="landing"||e.setup==="refit")&&(r.holdFire=!0),e.refit?(i.fx.clear(),this.queue=ah[e.refit](Ri(r.meta)),r=n.refit(r,{kind:"bb",mounts:[]}),r.holdFire=!0,r.noSteer=!0,this.added=0,this.refitDur=e.dur*.8):this.queue=null,e.fire!==void 0?(this.fireAt=e.fire,this.fired=!1):this.fireAt=void 0,e.until==="landing"&&i.fastUntil(()=>i.arty.shells.some(a=>a.from===r&&a.v.y<0&&a.p.y<160),30);let o={ebb:n.ships.find(a=>a.side==="E"&&a.kind==="bb"&&a.alive)??r,flag:r,hit:this.hitShip,dd:this.dd,victim:this.victim,torped:this.torped??this.beam(),beam:this.beam()};this.ship=o[e.pick]??r}startShell(){let t=this.b,e=Un(t),n=(l,h)=>{let u=e.body.toLocal(h.body.pos.clone(),new w),d=l.meta.at,f=Math.atan2(-(u.x-d[0]),u.z-d[2]),g=p=>Et.euclideanModulo(p+Math.PI,Math.PI*2)-Math.PI,x=g(f-l.rest);return x>g(l.meta.arc[0]-l.rest)+.1&&x<g(l.meta.arc[1]-l.rest)-.1&&h.body.pos.distanceTo(e.body.pos)<l.g.range*.85},i=t.ships.filter(l=>l.side==="E"&&l.alive).sort((l,h)=>l.hp-h.hp),r=null;this.victim=null;for(let l of i)if(r=e.turrets.filter(h=>!h.broken&&h.meta.at[2]>0).find(h=>n(h,l)),r){this.victim=l;break}if(!r){for(let l of i)if(r=e.turrets.find(h=>!h.broken&&n(h,l)),r){this.victim=l;break}}if(this.shellObj=null,this.shellEnd=null,this.shellTu=null,!this.victim)return;t.snapAim(e,[this.victim],.05),r.lastShell=null;for(let l of e.turrets)l.perfect=l===r,l.reload=l===r?.05:Math.max(l.reload,8);e.holdFire=!1;let o=this.victim.body.pos.distanceTo(e.body.pos),c=Qs(r.meta.gun,o)?.t??10;this.shellTs=(c+1.4)/(this.shots.find(l=>l.shell).dur-.6),this.shellTu=r,this.shellCap=[`One ${Math.round(ve[r.meta.gun].calCm)} cm shell`,`${(o/1e3).toFixed(1)} km \xB7 ${c.toFixed(1)} s in the air`]}apply(t){let[e,n]=this.shotAt(t);e!==this.cur&&this.start(e);let i=this.shots[e],r=this.b,o=Un(r);if(this.queue){let l=Math.min(this.queue.length,Math.floor(n/this.refitDur*this.queue.length)+1);l>this.added&&(this.added=l,this.c.event?.("drop",o.body.pos),o=r.refit(o,{kind:"bb",mounts:this.queue.slice(0,l)}),o.holdFire=!0,o.noSteer=!0,this.ship=o)}if(this.fireAt!==void 0&&!this.fired&&n>=this.fireAt-.3){this.fired=!0;let l=r.ships.filter(h=>h.side==="E"&&h.alive).sort((h,u)=>h.body.pos.distanceTo(o.body.pos)-u.body.pos.distanceTo(o.body.pos));l.length&&(r.snapAim(o,l,.25),o.holdFire=!1)}if(i.shell&&this.shellTu){let l=this.shellTu.lastShell;!this.shellObj&&l&&this.c.arty.shells.includes(l)&&(this.shellObj=l,this.c.arty.tracked=l),this.shellObj&&!this.c.arty.shells.includes(this.shellObj)&&!this.shellEnd&&(this.shellEnd=this.shellObj.p.clone(),this.endDir=this.shellObj.v.clone().setY(0).normalize(),this.pull=0),this.shellObj&&(o.holdFire=!0)}let a=ny(o.body.heel);this.heelNow=a,this.heel=Math.max(this.heel,a);let c=i.cap?i.cap(this,n):null;return this.tag&&(this.tag.textContent=c?.[0]??"",this.tag.style.opacity=c?1:0),this.cap&&(this.cap.textContent=c?.[1]??"",this.cap.style.opacity=c?.[1]?1:0),this.title&&(this.title.style.opacity=i.title?Et.clamp((n-i.title[0])/.8,0,1):0),{fade:Math.min(1,t/.4,(ch-t)/.35+1e-4)}}focus(){let t=this.shots[this.cur];return t?.shell?this.shellEnd??this.shellObj?.p??this.victim?.body.pos??this.c.rcam.target:t?.top?this.topAt??this.c.rcam.target:this.ship?this.ship.body.pos:this.c.rcam.target}camera(t){let[e,n]=this.shotAt(t),i=this.shots[e],r=this.c.camera,o=oh(Math.min(n/i.dur,1)),a=this.ship??Un(this.b),c=a.body;if(i.shell){r.fov=40,r.updateProjectionMatrix();let _=this.shellObj;if(_&&!this.shellEnd){let v=_.v.clone().normalize(),S=new w(-v.z,0,v.x).normalize();this.camPos=_.p.clone().addScaledVector(v,-9).add(new w(0,1.4,0)).addScaledVector(S,3.2),r.position.copy(this.camPos),r.lookAt(_.p.clone().addScaledVector(v,70).add(new w(0,-6,0)))}else if(this.shellEnd&&this.camPos){this.pull=Math.min((this.pull??0)+1/30/.7,1);let v=this.endDir??new w(0,0,1),S=this.shellEnd.clone().addScaledVector(v,-(40+220*oh(this.pull))).add(new w(0,8+22*oh(this.pull),0));r.position.copy(S),r.lookAt(this.victim?this.victim.body.pos.clone().setY(12):this.shellEnd)}else if(this.shellTu&&this.victim){let v=Un(this.b),S=this.shellTu;r.position.copy(v.body.toWorld(new w(S.meta.at[0],S.meta.at[1]+8,S.meta.at[2]-26),new w)),r.lookAt(this.victim.body.pos.clone().setY(30))}r.updateMatrixWorld();return}if(i.top){let _=this.c.torps.list.filter(C=>C.alive&&C.from.side==="A");if(_.length){if(!this.spread||!this.spread.some(C=>C.alive)){let C=Math.max(..._.map(R=>R.t0));this.spread=_.filter(R=>Math.abs(R.t0-C)<.5)}_=this.spread.filter(C=>C.alive)}_.length&&(this.topAt=_.reduce((C,R)=>C.add(R.p),new w).divideScalar(_.length).setY(0),this.topDir=_.reduce((C,R)=>C.add(R.d),new w).normalize());let v=this.topAt??Un(this.b).body.pos,S=this.topDir??new w(1,0,0);r.fov=38,r.updateProjectionMatrix(),r.position.copy(v).addScaledVector(S,-240+70*o).add(new w(0,48-6*o,0)),r.lookAt(v.clone().addScaledVector(S,900).setY(0)),r.updateMatrixWorld();return}if(i.orbit){let[_,v,S,C,R,T]=i.orbit,N=c.yaw+fn(_,C,o),M=fn(v,R,o),A=a.meta.L*1.1*fn(S,T,o),D=new w(c.pos.x,10,c.pos.z);r.fov=34,r.updateProjectionMatrix(),r.position.set(D.x+Math.sin(N)*Math.cos(M)*A,D.y+Math.sin(M)*A,D.z+Math.cos(N)*Math.cos(M)*A),r.lookAt(D),r.updateMatrixWorld();return}let l=(_,v)=>[fn(_[0],v[0],o),fn(_[1],v[1],o),fn(_[2],v[2],o)];if(i.flat){let[_,v]=i.flat;r.fov=fn(_.fov,v.fov,o),r.updateProjectionMatrix();let S=Math.cos(c.yaw),C=Math.sin(c.yaw),R=T=>new w(c.pos.x+T[0]*S+T[2]*C,T[1],c.pos.z-T[0]*C+T[2]*S);r.position.copy(R(l(_.pos,v.pos))),r.lookAt(R(l(_.look,v.look))),r.updateMatrixWorld();return}if(i.local){let[_,v]=i.local;r.fov=fn(_.fov,v.fov,o),r.updateProjectionMatrix(),r.position.copy(c.toWorld(new w(...l(_.pos,v.pos)),new w)),r.up.set(0,1,0).applyQuaternion(c.quat),r.lookAt(c.toWorld(new w(...l(_.look,v.look)),new w)),r.updateMatrixWorld(),r.up.set(0,1,0);return}let[h,u]=i.cam;r.fov=fn(h.fov,u.fov,o),r.updateProjectionMatrix();let d=fn(h.yaw,u.yaw,o),f=fn(h.pitch,u.pitch,o),g=fn(h.dist,u.dist,o),x=fn(h.lift,u.lift,o),p=new w(c.pos.x,x,c.pos.z),m=c.yaw+Math.PI+d;r.position.set(p.x+Math.sin(m)*Math.cos(f)*g,p.y+Math.sin(f)*g,p.z+Math.cos(m)*Math.cos(f)*g),r.lookAt(p),r.updateMatrixWorld()}};var bf="kurogane-designs";function iy(){try{return JSON.parse(localStorage.getItem(bf)??"null")}catch{return null}}function sy(s){try{localStorage.setItem(bf,JSON.stringify(s))}catch{}}var ts=new w,Pa=class{constructor(t){Object.assign(this,t),this.open=!1,this.ships=()=>this.battle.ships.filter(i=>i.side==="A"),this.designs=iy()??{},this.cur=0,this.slot=null;let e=this.el=document.createElement("div");e.id="dock",e.innerHTML=`
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
      <div class="dk-stats"></div>
      <div class="dk-btns">
        <button type="button" class="dk-test" data-t="testFire"></button>
        <button type="button" class="dk-stock" data-t="stock"></button>
        <button type="button" class="dk-all" data-t="copyAll"></button>
        <button type="button" class="dk-go" data-t="sortie"></button>
      </div>
      <div class="dk-msg"></div>`,this.root.appendChild(e);let n=i=>e.querySelector(i);this.$={tabs:n(".dk-tabs"),slots:n(".dk-slots"),panel:n(".dk-panel"),name:n(".dk-slotname"),type:n(".dk-type"),cal:n(".dk-cal"),n:n(".dk-n"),tier:n(".dk-tier"),stats:n(".dk-stats"),msg:n(".dk-msg")},n(".dk-go").addEventListener("click",()=>this.close(!0)),n(".dk-stock").addEventListener("click",()=>{let i=this.ship();this.setDesign(i,Ci(i.kind,i.meta))}),n(".dk-all").addEventListener("click",()=>this.copyAll()),n(".dk-test").addEventListener("click",()=>this.testFire());for(let i of e.querySelectorAll("button"))i.addEventListener("pointerdown",r=>r.stopPropagation());this.drag=null,this.yaw=2.3,this.pitch=.32,this.dist=1,t.canvas.addEventListener("pointerdown",i=>{this.open&&i.button===0&&(this.drag=[i.clientX,i.clientY])}),addEventListener("pointermove",i=>{this.drag&&(this.yaw-=(i.clientX-this.drag[0])*.006,this.pitch=Et.clamp(this.pitch+(i.clientY-this.drag[1])*.004,.04,1.2),this.drag=[i.clientX,i.clientY])}),addEventListener("pointerup",()=>{this.drag=null}),t.canvas.addEventListener("wheel",i=>{this.open&&(this.dist=Et.clamp(this.dist*Math.exp(i.deltaY*.001),.4,3))},{passive:!0})}ship(){return this.ships()[this.cur]}designOf(t){return this.designs[t.station?`${t.kind}@${t.station}`:t.kind+(t.flagship?"*":"")]??Ci(t.kind,t.meta)}keyOf(t){return t.station?`${t.kind}@${t.station}`:t.kind+(t.flagship?"*":"")}applyAll(){for(let t of this.ships()){let e=this.designs[this.keyOf(t)];e&&this.battle.refit(t,e)}}setDesign(t,e){this.designs[this.keyOf(t)]=e,sy(this.designs);let n=this.battle.refit(t,e);return this.render(),n}copyAll(){let t=this.ship(),e=this.designOf(t);for(let n of this.ships())n!==t&&n.kind===t.kind&&this.setDesign(n,JSON.parse(JSON.stringify(e)));this.flash(Zt("copied"))}show(){this.open=!0,this.el.classList.add("on"),this.render()}close(t){this.open=!1,this.el.classList.remove("on"),t&&this.onSortie?.()}flash(t){this.$.msg.textContent=t,this.$.msg.classList.add("on"),clearTimeout(this._mt),this._mt=setTimeout(()=>this.$.msg.classList.remove("on"),2600)}testFire(){let t=this.ship();if(!t?.alive)return;let e=t.turrets.filter(n=>n.rest+.01<0||n.meta.arc[0]<-Math.PI/2).length;t.testAim={brg:e>=t.turrets.length/2?-Math.PI/2:Math.PI/2,elev:.14,fire:!0,t:0};for(let n of t.turrets)n.testFired=!1,n.reload=Math.min(n.reload,.5);this.sound?.start()}render(){let t=this.ship();if(!t)return;let e=this.designOf(t);this.$.tabs.innerHTML="",this.ships().forEach((l,h)=>{let u=document.createElement("button");u.type="button",u.className=(h===this.cur?"on":"")+(l.alive?"":" dead"),u.textContent=`${Zt("short")[l.kind]}${l.flagship?" \u25C6":""}`,u.addEventListener("pointerdown",d=>d.stopPropagation()),u.addEventListener("click",()=>{this.cur=h,this.slot=null,this.render()}),this.$.tabs.appendChild(u)});let n=Ri(t.meta),i=this.slot&&n.find(l=>l.id===this.slot);if(this.$.panel.classList.toggle("on",!!i),i){let l=e.mounts.find(f=>f.slot===i.id)??{slot:i.id,type:"none",cal:36,n:2,tier:1};this.$.name.textContent=Zt("slotName")(i);let h=(f,g,x,p)=>{f.innerHTML="";for(let[m,_]of g){let v=document.createElement("button");v.type="button",v.textContent=_,m===x&&(v.className="on"),v.addEventListener("pointerdown",S=>S.stopPropagation()),v.addEventListener("click",()=>p(m)),f.appendChild(v)}},u=f=>{let g=JSON.parse(JSON.stringify(e)),x=g.mounts.find(p=>p.slot===i.id);x||(x={slot:i.id,type:"gun",cal:l.cal,n:l.n,tier:1},g.mounts.push(x)),Object.assign(x,f),x.type==="none"&&(g.mounts=g.mounts.filter(p=>p!==x)),this.setDesign(t,g)};h(this.$.type,[["none",Zt("empty")],["gun",Zt("gun")],...i.wing?[["torp",Zt("torp")]]:[]],l.type,f=>u({type:f}));let d=l.type==="gun";for(let f of["cal","n","tier"])this.$[f].classList.toggle("off",!d);h(this.$.cal,pf.map(f=>[f,String(f)]),l.cal,f=>u({type:"gun",cal:f})),h(this.$.n,[[1,Zt("single")],[2,Zt("twin")],[3,Zt("triple")]],l.n,f=>u({type:"gun",n:f})),h(this.$.tier,[[1,"\xD71"],[2,"\xD72"],[3,"\xD73"]],l.tier??1,f=>u({type:"gun",tier:f}))}let r=Li(e,this.art),o=r.freeboard<=.3?"sink":r.gm<.05?"capsize":r.gm<.6?"tender":"ok",a=Math.max(0,...r.mounts.map(l=>ve[l.gun].range)),c=Et.clamp(r.gm/3,0,1)*100;this.$.stats.innerHTML=`
      <div><i>${Zt("disp")}</i><b>${Math.round(r.disp).toLocaleString("en")}</b> t</div>
      <div><i>${Zt("speed")}</i><b>${(t.body.K.kn*r.speedK).toFixed(1)}</b> kn</div>
      <div><i>${Zt("broad")}</i><b>${r.broadside.toFixed(1)}</b> t</div>
      <div><i>${Zt("range")}</i><b>${(a/1e3).toFixed(1)}</b> km</div>
      <div><i>GM</i><b>${r.gm.toFixed(2)}</b> m<span class="gm"><em style="width:${c}%"></em></span></div>
      <div class="st ${o}">${Zt("stab")[o]}</div>`}update(t){if(!this.open)return;let e=this.ship();if(!e)return;let n=e.body,r=e.meta.L*1.15*this.dist,o=n.yaw+this.yaw,a=n.toWorld(ts.set(0,e.meta.deck_top+4,0),new w);this.camera.position.set(a.x+Math.sin(o)*Math.cos(this.pitch)*r,a.y+Math.sin(this.pitch)*r,a.z+Math.cos(o)*Math.cos(this.pitch)*r),this.camera.lookAt(a),this.camera.updateMatrixWorld(),this.rcam.target.set(n.pos.x,0,n.pos.z);let c=Ri(e.meta),l=this.designOf(e);if(this.$.slots.childElementCount!==c.length||this.$.slots.dataset.ship!==String(e.id)){this.$.slots.innerHTML="",this.$.slots.dataset.ship=String(e.id);for(let h of c){let u=document.createElement("button");u.type="button",u.className="dk-slot",u.dataset.id=h.id,u.addEventListener("pointerdown",d=>d.stopPropagation()),u.addEventListener("click",()=>{this.slot=h.id,this.render()}),this.$.slots.appendChild(u)}}for(let h of this.$.slots.children){let u=c.find(f=>f.id===h.dataset.id),d=l.mounts.filter(f=>f.slot===u.id)[0];ts.set(u.at[0],u.at[1]+2,u.at[2]),n.toWorld(ts,ts).project(this.camera),h.style.transform=`translate(${((ts.x*.5+.5)*this.W).toFixed(1)}px, ${((-ts.y*.5+.5)*this.H).toFixed(1)}px)`,h.style.display=ts.z<1?"block":"none",h.classList.toggle("on",this.slot===u.id),h.classList.toggle("used",!!d),h.textContent=d?d.type==="torp"?"T":`${d.cal}`:"+"}e.testAim&&(e.testAim.t+=t,e.turrets.every(h=>h.testFired||h.broken)&&e.testAim.t>2&&(e.testAim=null),e.testAim&&e.testAim.t>120&&(e.testAim=null)),!e.alive&&!this._lost&&(this._lost=!0,this.flash(Zt(e.body.capsized?"wentOver":"sankDock"))),e.alive&&(this._lost=!1)}};var Ze=new URLSearchParams(location.search),pn=Ze.has("render"),mh=Ze.has("manual");if(pn||mh||Ze.has("seed")){let s=parseInt(Ze.get("seed")??"20261004",10)>>>0;Math.random=()=>{s=s+1831565813>>>0;let t=s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var os=1600,as=900,is=pn?2:Math.min(devicePixelRatio||1,1.5),_e=1/60,es=parseFloat(Ze.get("ts")??"2"),Ha=document.getElementById("c"),Ke=new yr({canvas:Ha,antialias:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!1});Ke.setPixelRatio(is);Ke.setSize(os,as,!1);Ke.toneMapping=kn;Ke.localClippingEnabled=!0;var cs=new un,Pi=new we;cs.add(Pi);var Ge=new Se(38,os/as,2,6e4),gh=34.2,xh=280,ci=parseFloat(Ze.get("t")??(pn?"16.2":"15.6")),en=ea(gh,xh,ci),Fr=new xt,Wn=Bd(en,new w);Wn.uHazeB.value=parseFloat(Ze.get("haze")??(pn?"3.5e-5":"5.5e-5"));var Vr={uTime:{value:0}},dh=Hd(Wn);Pi.add(dh);var zr=new qs(16777215,1);cs.add(zr,zr.target);var tr=new Xo(16777215,16777215,1);cs.add(tr);function vh(){let s=Math.asin(en.y),t=1/Math.max(Math.sin(Math.max(s,.01))+.15*Math.pow(Math.max(s,0)*57.3+3.885,-1.253),.02),e=[Math.exp(-.035*t),Math.exp(-.075*t),Math.exp(-.16*t)],i=7*Et.smoothstep(s,-.06,.05);Fr.setRGB(e[0]*i,e[1]*i,e[2]*i),Wn.uSunCol.value.set(Fr.r,Fr.g,Fr.b),zr.color.copy(Fr),zr.intensity=1,zr.position.copy(en).multiplyScalar(100);let r=Et.clamp(1-(s-.02)/.3,0,1);Wn.uDusk.value=r*r,Wn.uNight.value=Et.clamp((-s-.02)/.12,0,1);let o=Et.clamp(.15+en.y*1.6,.02,1)*(1-Wn.uNight.value*.9);tr.color.setRGB(.62*o,.68*o,.78*o),tr.groundColor.setRGB(.1*o,.12*o,.12*o),tr.intensity=2.2}vh();var Hr=new ra({speed:parseFloat(Ze.get("wind")??"7"),dir:parseFloat(Ze.get("wdir")??"2.4")}),_h=Wd({wind:Hr.speed,windDir:Hr.dir,swellDir:1.35,swellH:.6}),Af=Xd(_h),Oa=new da(Ke,os*is,as*is,{samples:Lr?0:4,levels:6}),Br=new Ie(Math.round(os*is*.5),Math.round(as*is*.5),{type:Cn,depthBuffer:!0,generateMipmaps:!0,minFilter:Bn}),ss=new ha(Ke,en,{shipSize:900,shipRes:Lr?2048:4096}),ry=(s,t)=>Vd(Zd(s,ss),Wn,t),Va=await of("data/",{aniso:Ke.capabilities.getMaxAnisotropy(),patch:ry,U:Vr,seaU:Af}),ka=new va(Va);Pi.add(ka.group);for(let s of ka.casters())ss.addCaster(s,{ship:!0});ss.renderLand(new w);var Yn=new ya(Wn,Hr);cs.add(Yn.lightGroup);var li=new _a(Yn,_h),ls=new wa(Yn),$t=new Ea({art:Va,sea:_h,artillery:li,fx:Yn,torpedoes:ls}),Me=$t.ships,Or=parseFloat(Ze.get("hd")??(pn?String(Math.atan2(en.x,en.z)):"3.1")),oy=(s,t)=>[Math.cos(Or)*s+Math.sin(Or)*t,-Math.sin(Or)*s+Math.cos(Or)*t],ay=[["bb",0,0,!0],["ca",-420,-380],["ca",420,-380],["dd",-700,650],["dd",0,900],["dd",700,650]];for(let[s,t,e,n]of ay){let[i,r]=oy(t,e),o=$t.add(s,"A",i,r,Or,6,{flagship:!!n});n||(o.station=[t,e])}var er=$t.flagship();Ze.has("nowaves")&&($t.waves=!1);var cy={bb:0,ca:1,dd:2},yh=new ca(Ke,Ji.map(s=>Va.kinds[s].meta.stations)),Gr=new un,za=$d({skyU:Wn,seaU:Af,wakeU:yh.uniforms,windU:Hr.uniforms,tideU:{uTide:{value:0},uStrait:{value:new Bt(0,0,0,1)}},reflTarget:Br,refrTarget:Oa.refr,shipShadowU:ss.uniforms,timeU:Vr.uTime,quality:{oceanRings:+(Ze.get("orings")??(Lr?150:240)),oceanSeg:+(Ze.get("oseg")??(Lr?256:420))}});Gr.add(za.mesh);Gr.add(Yn.group);Gr.add(li.mesh);Gr.add(ls.mesh);Pi.add(li.one);li.mesh.visible=!pn;var ly=new Hs(Ke),Mh=new un,Rf=new qt(dh.geometry,dh.material);Rf.scale.setScalar(.005);Mh.add(Rf);Mh.add(new qt(new Bo(40,24).rotateX(-Math.PI/2).translate(0,-.5,0),new je({color:new xt(.02,.04,.045)})));var lh=null;function bh(){lh?.dispose(),lh=ly.fromScene(Mh,.02),cs.environment=lh.texture}bh();var Ue=new Ta(Ge,Ha);Ue.target.copy(er.body.pos);Ue.follow=er;var Sn=new Ca;for(let s of["pointerdown","keydown"])addEventListener(s,()=>Sn.start(),{once:!0});var rs=new Aa({battle:$t,camera:Ge,rcam:Ue,el:Ha,overlay:document.getElementById("ov"),W:os,H:as,sound:Sn});rs.select(Me.filter(s=>s.side==="A"));Ra();document.getElementById("lang")?.addEventListener("click",s=>{_f(),s.currentTarget.blur(),Sh()});var Xn=s=>document.getElementById(s),Na=0;function Ia(s,t=4){Xn("msg").textContent=s,Xn("msg").classList.add("on"),Na=t}var fh=[];function Sh(){let s=Xn("fleet");s.innerHTML="",fh.length=0;for(let t of Me.filter(e=>e.side==="A")){let e=document.createElement("button");e.type="button",e.innerHTML=`${Zt("short")[t.kind]}${t.flagship?" \u25C6":""}<em>${Zt("kinds")[t.kind]}</em><i></i>`,e.addEventListener("click",n=>{t.alive&&rs.select([t],n.shiftKey),e.blur()}),e.addEventListener("dblclick",()=>{Ue.follow=t}),s.appendChild(e),fh.push([t,e])}}Sh();var hi=pn||Ze.has("skip"),Ii=Xn("title");hi?(Ii.style.transition="none",Ii.classList.add("gone")):Ue.set({yaw:Math.atan2(en.x,en.z)+.5,pitch:.1,dist:1100});var Cf=Ii.querySelector(".go");Cf.disabled=!1;function Lf(){hi=!0,Ii.classList.add("gone"),Ue.follow=$t.flagship(),Ue.target.copy($t.flagship().body.pos),Ue.set({yaw:Math.atan2(en.x,en.z)+.3,pitch:.62,dist:1500}),Sn.start(),rs.enabled=!0,rs.select(Me.filter(s=>s.side==="A"&&s.alive)),Sh()}Cf.addEventListener("click",Lf);var ns=new Pa({battle:$t,art:Va,camera:Ge,rcam:Ue,root:document.getElementById("stage"),canvas:Ha,W:os,H:as,sound:Sn,onSortie:Lf});pn||ns.applyAll();Ra();Ii.querySelector(".refit")?.addEventListener("click",()=>{Ii.classList.add("gone"),Sn.start(),rs.enabled=!1,ns.show()});window.__dock=ns;var Sf=!1;function hy(s){Xn("wave").innerHTML=Zt("waveN")($t.wave),Xn("sunk").textContent=$t.sunkN,Xn("tons").textContent=$t.score?`\xB7 ${Zt("tons")($t.score)}`:"";for(let[t,e]of fh)e.style.setProperty("--hp",`${Math.max(t.hp,0)/t.hpMax*100}%`),e.classList.toggle("sel",!!t.sel),e.classList.toggle("dead",!t.alive);Na>0&&(Na-=s,Na<=0&&Xn("msg").classList.remove("on"))}var Fa=0;function uy(){for(;Fa<$t.log.length;Fa++){let s=$t.log[Fa];if(s.kind==="wave")Ia(Zt("waveIn")(s.n,s.count),4),Sn.horn?.();else if(s.kind==="sunk")Ia(Zt(s.ship.side==="A"?"sunkUs":"sunkThem")(Zt("kinds")[s.ship.kind]),3);else if(s.kind==="capsize")Ia(Zt("capsized")(Zt("kinds")[s.ship.kind],s.ship.side==="A"),4);else if(s.kind==="magazine"){Ia(Zt("magazine")(Zt("kinds")[s.ship.kind]),4);let[t,e]=wh(s.ship.body.pos);Sn.boom(Math.max(t*.35,30),e,s.ship.kind==="bb"?1.3:1)}}er=$t.flagship()??er,!Sf&&!er.alive&&(Sf=!0,setTimeout(()=>{Xn("endsub").textContent=Zt("endSub")(Math.max($t.wave-1,0),$t.sunkN,$t.score),Xn("end").classList.add("on")},6e3))}var hh=new w;function wh(s){hh.set(1,0,0).applyQuaternion(Ge.quaternion);let t=s.x-Ge.position.x,e=s.z-Ge.position.z,n=Math.hypot(t,s.y-Ge.position.y,e)||1;return[n,Et.clamp((t*hh.x+e*hh.z)/n,-1,1)*.8]}var Ga=[];function dy(s,t){for(let e of t){let n=e.at??e.world;if(!n)continue;let[i,r]=wh(n);if(i=Math.max(i*.35,30),(pn||mh)&&Ga.push([+Gn.toFixed(3),e.kind,e.type,Math.round(i),+r.toFixed(2)]),!(e.kind==="launch"||e.kind==="torphit"&&e.ship)){if(e.kind==="torphit"){Sn.boom(i,r,.7);continue}e.kind==="fire"?Sn.gun(i,r,ve[e.type].charge):e.kind==="splash"?Sn.splash(i,r,ve[e.type].cal>.15):e.kind==="hit"?Sn.strike(i,r):e.kind}}Sn.update(s,{speed:Math.max(er.body.speed,0)*.3,aw:Hr.speed,gust:0,roll:0,rollRate:0,heave:0,flog:0,force:0,landDir:null,evening:!1})}var fy=new An(new w(0,-1,0),0);function py(){Pi.scale.y=-1,Pi.updateMatrixWorld(!0),ss.uniforms.uMirror.value=-1,Ke.clippingPlanes=[fy],Ke.setRenderTarget(Br),Ke.render(cs,Ge),Ke.clippingPlanes=[],Pi.scale.y=1,Pi.updateMatrixWorld(!0),ss.uniforms.uMirror.value=1,Ke.setRenderTarget(null)}var re=0,Da=0,my=parseFloat(Ze.get("ev")??"0.9");function gy(s){Da+=s*es;let t=0;for(;Da>=_e&&t<8;){Da-=_e,re+=_e,t++;for(let n of Me)n.gone||n.body.step(_e,re);let e=li.update(_e,re,Me).concat(ls.update(_e,re,Me));hi?$t.update(_e,re,e):ns.open&&$t.dockStep(_e,re,e),dy(_e,e.concat($t.events.splice(0)));for(let n of e)n.kind==="splash"&&Pf.push({x:n.world.x,z:n.world.z,r:ve[n.type].cal*14,h:ve[n.type].cal*4})}t===8&&(Da=0),Vr.uTime.value=re}var Pf=[],ph=ci;function xy(s){window.__freezeClock||!hi||(ci+=s*es/3600,ea(gh,xh,ci,en),vh(),Math.abs(ci-ph)>.25&&(bh(),ph=ci))}var wf=new w;function Ba(s){xy(s),gy(s),Yn.setAmbient(tr.color,tr.groundColor);for(let i of Me)if(!(i.gone||i.body.sinkY>i.meta.D))for(let r of i.meta.funnels??[])Yn.funnel(i.body.toWorld(wf.set(r[0],r[1],r[2]),new w),Math.max(i.body.power,.15)*(i.alive?1:.3),s*es,i.body.vel);Yn.update(s*es,re,Ge),ka.dt=s,ka.update(Me,Ge.position);let t=qn?qn.focus():Ue.target,e=Me.filter(i=>!i.gone).sort((i,r)=>i.body.pos.distanceToSquared(t)-r.body.pos.distanceToSquared(t)).slice(0,8);yh.step(s*es,t,e.map(i=>{let r=i.body.forward(wf);return{pos:i.body.pos,fwd:new dt(r.x,r.z).normalize(),speed:Math.max(i.body.speed,0),heave:i.body.heaveV,sub:i.alive?1:.6,kind:cy[i.kind]}}),Pf.splice(0)),qn?qn.camera(Gn):ns.open?ns.update(s):Ue.update(s),hi&&!pn?(rs.update(s),hy(s),uy()):ns.open&&(Fa=$t.log.length),za.update(Ge),Wn.uCloudT.value=re,ss.renderShip(new w(Ue.target.x,4,Ue.target.z).lerp(Ge.position,.15).setY(4)),py();let n=1+3.2*Et.smoothstep(-en.y,-.04,.16);Oa.render(cs,Ge,{exposure:my*n*Df,t:re,overlay:Gr,thresh:1.6*n})}var kr=1,Ua=0,uh=0;function Ef(s){kr=s;let t=Math.round(os*is*s),e=Math.round(as*is*s);Oa.setSize(t,e),za.uniforms.uRefr.value=Oa.refr.texture,Br.setSize(Math.round(t*.5),Math.round(e*.5)),za.uniforms.uReflTexel.value.set(1/Br.width,1/Br.height)}var Tf=performance.now();function If(s){let t=Math.min((s-Tf)/1e3,.1);if(Tf=s,Ba(t),Ua+=t,uh++,Ua>2){let e=Ua/uh;window.__fps=1/e,e>.021&&kr>.61?Ef(Math.max(.6,kr-.1)):e<.0135&&kr<.99&&Ef(Math.min(1,kr+.1)),Ua=0,uh=0}requestAnimationFrame(If)}var qn=null,Gn=0,Df=1,vy=s=>({id:s.id,kind:s.kind,side:s.side,alive:s.alive,hp:+s.hp.toFixed(1),pos:s.body.pos.toArray().map(t=>+t.toFixed(1)),speed:+(s.body.speed*1.9438).toFixed(1),heading:+(s.body.yaw*57.3).toFixed(1),heel:+(s.body.heel*57.3).toFixed(1),water:Math.round(s.body.water),founder:+s.body.founder.toFixed(1),sunk:s.body.sunk,turrets:s.turrets.map(t=>[+(t.yaw*57.3).toFixed(1),+(t.elev*57.3).toFixed(2),+t.reload.toFixed(1),t.broken?"X":t.onTarget?"*":""])});window.__battle=$t;window.__torps=ls;window.__wake=yh;window.__ships=Me;window.__camera=Ge;window.__rcam=Ue;window.__fx=Yn;window.__renderer=Ke;window.__cmd=rs;window.__state=()=>({t:+re.toFixed(2),wave:$t.wave,sunk:$t.sunkN,ships:Me.filter(s=>!s.gone).map(vy)});window.__set=s=>{s.hour!==void 0&&(ci=s.hour,ea(gh,xh,ci,en),vh(),bh(),ph=ci),s.cam&&Ue.set(s.cam),s.target&&Ue.target.set(s.target[0],0,s.target[1]),s.follow!==void 0&&(Ue.follow=s.follow===null?null:Me[s.follow]),s.start&&(hi=!0,Ii.classList.add("gone"))};window.__fast=s=>{hi=!0,Ii.classList.add("gone");for(let e=0;e<s/_e;e++){re+=_e;for(let i of Me)i.gone||i.body.step(_e,re);let n=li.update(_e,re,Me).concat(ls.update(_e,re,Me));$t.update(_e,re,n),$t.events.length=0}Vr.uTime.value=re;let t=e=>{let n=Me.filter(i=>i.side===e);return{n:n.length,alive:n.filter(i=>i.alive).length,hp:Math.round(n.filter(i=>i.alive).reduce((i,r)=>i+r.hp,0))}};return{t:Math.round(re),wave:$t.wave,sunk:$t.sunkN,A:t("A"),E:t("E"),shells:li.shells.length}};window.__fastUntil=(s,t=120)=>{hi=!0;for(let e=0;e<t/_e;e++){if(s())return!0;re+=_e;for(let i of Me)i.gone||i.body.step(_e,re);let n=li.update(_e,re,Me).concat(ls.update(_e,re,Me));$t.update(_e,re,n),$t.events.length=0}return Vr.uTime.value=re,!1};pn&&(hi=!0,qn=new La({battle:$t,camera:Ge,fast:s=>window.__fast(s),fastUntil:(s,t)=>window.__fastUntil(s,t),rcam:Ue,fx:Yn,arty:li,torps:ls,event:(s,t)=>{let[e,n]=wh(t);Ga.push([+Gn.toFixed(3),s,"bb",Math.round(Math.max(e*.35,30)),+n.toFixed(2)])}}));window.__renderAt=(s,t)=>{let e=s/t;if(qn){for(;Gn<e-1e-6;){let o=Math.min(1/t,e-Gn);Gn+=o,Df=qn.apply(Gn).fade,Ba(o/es*(qn.ts?.(Gn)??es))}let n=$t.flagship(),i=n?Math.max(...n.turrets.map(o=>Math.abs(o.yawV)/(ve.bb.traverse*Math.PI/180))):0,r=0;for(let o of Me){let a=Math.max(...o.fires);a>0&&(r=Math.max(r,a*Math.min(1,250/Math.max(o.body.pos.distanceTo(Ge.position),1))))}return{t:+re.toFixed(2),shot:qn.shotAt(Gn)[0],ev:Ga.splice(0),trav:+Math.min(i,1).toFixed(3),fire:+r.toFixed(3)}}for(;re<e-1e-6;)Ba(1/t);return window.__state()};window.__filmLen=ch;window.__film=qn;window.__ready=!0;window.__step=(s=1,t=30)=>{for(let e=0;e<s;e++)Gn+=1/t,Ba(1/t);return Ga.splice(0)};if(!pn&&!mh)requestAnimationFrame(If);else{let s=()=>requestAnimationFrame(s);s()}
