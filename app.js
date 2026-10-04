var sh="160";var Im=0,Uu=1,Dm=2;var Mf=1,Nm=2,Si=3,ai=0,je=1,ln=2;var Vi=0,js=1,Qs=2,ku=3,Ou=4,Um=5,fs=100,km=101,Om=102,Fu=103,zu=104,Fm=200,zm=201,Bm=202,Hm=203,wl=204,Sl=205,Vm=206,Gm=207,Wm=208,Xm=209,$m=210,qm=211,Ym=212,Km=213,jm=214,Zm=0,Jm=1,Qm=2,ra=3,t0=4,e0=5,n0=6,i0=7,wf=0,s0=1,r0=2,oi=0,o0=1,a0=2,c0=3,l0=4,h0=5,u0=6,Bu="attached",d0="detached",Sf=300,tr=301,er=302,El=303,Tl=304,Da=306,xs=1e3,_n=1001,Fr=1002,Ce=1003,oa=1004;var Dr=1005;var ve=1006,rh=1007;var ci=1008;var Gi=1009,f0=1010,p0=1011,oh=1012,Ef=1013,Ln=1014,Ei=1015,Yn=1016,Tf=1017,Af=1018,ms=1020,m0=1021,Ye=1023,g0=1024,v0=1025,gs=1026,nr=1027,x0=1028,Rf=1029,y0=1030,Cf=1031,Lf=1033,Wc=33776,Xc=33777,$c=33778,qc=33779,Hu=35840,Vu=35841,Gu=35842,Wu=35843,Pf=36196,Xu=37492,$u=37496,qu=37808,Yu=37809,Ku=37810,ju=37811,Zu=37812,Ju=37813,Qu=37814,td=37815,ed=37816,nd=37817,id=37818,sd=37819,rd=37820,od=37821,Yc=36492,ad=36494,cd=36495,_0=36283,ld=36284,hd=36285,ud=36286;var ir=2300,ys=2301,Kc=2302,dd=2400,fd=2401,pd=2402,b0=2500;var If=0,Na=1,Zr=2,Df=3e3,vs=3001,M0=3200,w0=3201,Nf=0,S0=1,Ke="",se="srgb",Ie="srgb-linear",ah="display-p3",Ua="display-p3-linear",aa="linear",de="srgb",ca="rec709",la="p3";var Ls=7680;var md=519,E0=512,T0=513,A0=514,ka=515,R0=516,C0=517,L0=518,P0=519,Al=35044,ch=35048;var gd="300 es",Rl=1035,Ti=2e3,ha=2001,Wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=1234567,Nr=Math.PI/180,sr=180/Math.PI;function qn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function qe(s,t,e){return Math.max(t,Math.min(e,s))}function lh(s,t){return(s%t+t)%t}function I0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function D0(s,t,e){return s!==t?(e-s)/(t-s):0}function Ur(s,t,e){return(1-e)*s+e*t}function N0(s,t,e,n){return Ur(s,t,1-Math.exp(-e*n))}function U0(s,t=1){return t-Math.abs(lh(s,t*2)-t)}function k0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function O0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function F0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function z0(s,t){return s+Math.random()*(t-s)}function B0(s){return s*(.5-Math.random())}function H0(s){s!==void 0&&(vd=s);let t=vd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function V0(s){return s*Nr}function G0(s){return s*sr}function Cl(s){return(s&s-1)===0&&s!==0}function W0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ua(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function X0(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var pt={DEG2RAD:Nr,RAD2DEG:sr,generateUUID:qn,clamp:qe,euclideanModulo:lh,mapLinear:I0,inverseLerp:D0,lerp:Ur,damp:N0,pingpong:U0,smoothstep:k0,smootherstep:O0,randInt:F0,randFloat:z0,randFloatSpread:B0,seededRandom:H0,degToRad:V0,radToDeg:G0,isPowerOfTwo:Cl,ceilPowerOfTwo:W0,floorPowerOfTwo:ua,setQuaternionFromProperEuler:X0,normalize:ne,denormalize:ri},ft=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],y=i[1],x=i[4],w=i[7],A=i[2],R=i[5],C=i[8];return r[0]=o*v+a*y+c*A,r[3]=o*m+a*x+c*R,r[6]=o*p+a*w+c*C,r[1]=l*v+h*y+u*A,r[4]=l*m+h*x+u*R,r[7]=l*p+h*w+u*C,r[2]=d*v+f*y+g*A,r[5]=d*m+f*x+g*R,r[8]=d*p+f*w+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jc.makeScale(t,e)),this}rotate(t){return this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jc=new $t;function Uf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $0(){let s=zr("canvas");return s.style.display="block",s}var xd={};function kr(s){s in xd||(xd[s]=!0,console.warn(s))}var yd=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_d=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[Ie]:{transfer:aa,primaries:ca,toReference:s=>s,fromReference:s=>s},[se]:{transfer:de,primaries:ca,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ua]:{transfer:aa,primaries:la,toReference:s=>s.applyMatrix3(_d),fromReference:s=>s.applyMatrix3(yd)},[ah]:{transfer:de,primaries:la,toReference:s=>s.convertSRGBToLinear().applyMatrix3(_d),fromReference:s=>s.applyMatrix3(yd).convertLinearToSRGB()}},q0=new Set([Ie,Ua]),Jt={enabled:!0,_workingColorSpace:Ie,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!q0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Po[t].toReference,i=Po[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Po[s].primaries},getTransfer:function(s){return s===Ke?aa:Po[s].transfer}};function Zs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ps,da=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ps===void 0&&(Ps=zr("canvas")),Ps.width=t.width,Ps.height=t.height;let n=Ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zs(e[n]/255)*255):e[n]=Zs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Y0=0,fa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=qn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Jc(i[o].image)):r.push(Jc(i[o]))}else r=Jc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?da.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var K0=0,Ze=class s extends Wi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=_n,i=_n,r=ve,o=ci,a=Ye,c=Gi,l=s.DEFAULT_ANISOTROPY,h=Ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=qn(),this.name="",this.source=new fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===vs?se:Ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xs:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xs:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===se?vs:Df}set encoding(t){kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===vs?se:Ke}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Sf;Ze.DEFAULT_ANISOTROPY=1;var Gt=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,w=(f+1)/2,A=(p+1)/2,R=(h+d)/4,C=(u+v)/4,U=(g+m)/4;return x>w&&x>A?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=C/n):w>A?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=R/i,r=U/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=U/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ll=class extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Gt(0,0,t,e),this.scissorTest=!1,this.viewport=new Gt(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vs?se:Ke),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ve,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ze(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fe=class extends Ll{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},pa=class extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pl=class extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let A=Math.sqrt(x),R=Math.atan2(A,p*y);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}let w=a*y;if(c=c*m+d*w,l=l*m+f*w,h=h*m+g*w,u=u*m+v*w,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qc.copy(this).projectOnVector(t),this.sub(Qc)}reflect(t){return this.sub(Qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qc=new b,bd=new fe,Pn=class{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(t.matrixWorld),this.union(Io)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),Do.subVectors(this.max,Tr),Is.subVectors(t.a,Tr),Ds.subVectors(t.b,Tr),Ns.subVectors(t.c,Tr),ki.subVectors(Ds,Is),Oi.subVectors(Ns,Ds),cs.subVectors(Is,Ns);let e=[0,-ki.z,ki.y,0,-Oi.z,Oi.y,0,-cs.z,cs.y,ki.z,0,-ki.x,Oi.z,0,-Oi.x,cs.z,0,-cs.x,-ki.y,ki.x,0,-Oi.y,Oi.x,0,-cs.y,cs.x,0];return!tl(e,Is,Ds,Ns,Do)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,Is,Ds,Ns,Do))?!1:(No.crossVectors(ki,Oi),e=[No.x,No.y,No.z],tl(e,Is,Ds,Ns,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xi=[new b,new b,new b,new b,new b,new b,new b,new b],Gn=new b,Io=new Pn,Is=new b,Ds=new b,Ns=new b,ki=new b,Oi=new b,cs=new b,Tr=new b,Do=new b,No=new b,ls=new b;function tl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ls.fromArray(s,r);let a=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),c=t.dot(ls),l=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var j0=new Pn,Ar=new b,el=new b,bn=class{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):j0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);let e=Ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(el)),this.expandByPoint(Ar.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new b,nl=new b,Uo=new b,Fi=new b,il=new b,ko=new b,sl=new b,_s=class{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nl.copy(t).add(e).multiplyScalar(.5),Uo.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(nl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Uo),a=Fi.dot(this.direction),c=-Fi.dot(Uo),l=Fi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(nl).addScaledVector(Uo,d),f}intersectSphere(t,e){yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),i=yi.dot(yi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,i,r){il.subVectors(e,t),ko.subVectors(n,t),sl.crossVectors(il,ko);let o=this.direction.dot(sl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,t);let c=a*this.direction.dot(ko.crossVectors(Fi,ko));if(c<0)return null;let l=a*this.direction.dot(il.cross(Fi));if(l<0||c+l>o)return null;let h=-a*Fi.dot(sl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z0,t,J0)}lookAt(t,e,n){let i=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),zi.crossVectors(n,xn),zi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),zi.crossVectors(n,xn)),zi.normalize(),Oo.crossVectors(xn,zi),i[0]=zi.x,i[4]=Oo.x,i[8]=xn.x,i[1]=zi.y,i[5]=Oo.y,i[9]=xn.y,i[2]=zi.z,i[6]=Oo.z,i[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],x=n[7],w=n[11],A=n[15],R=i[0],C=i[4],U=i[8],_=i[12],E=i[1],N=i[5],G=i[9],j=i[13],P=i[2],D=i[6],H=i[10],$=i[14],X=i[3],W=i[7],Y=i[11],Z=i[15];return r[0]=o*R+a*E+c*P+l*X,r[4]=o*C+a*N+c*D+l*W,r[8]=o*U+a*G+c*H+l*Y,r[12]=o*_+a*j+c*$+l*Z,r[1]=h*R+u*E+d*P+f*X,r[5]=h*C+u*N+d*D+f*W,r[9]=h*U+u*G+d*H+f*Y,r[13]=h*_+u*j+d*$+f*Z,r[2]=g*R+v*E+m*P+p*X,r[6]=g*C+v*N+m*D+p*W,r[10]=g*U+v*G+m*H+p*Y,r[14]=g*_+v*j+m*$+p*Z,r[3]=y*R+x*E+w*P+A*X,r[7]=y*C+x*N+w*D+A*W,r[11]=y*U+x*G+w*H+A*Y,r[15]=y*_+x*j+w*$+A*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,w=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,A=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,R=e*y+n*x+i*w+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=y*C,t[1]=(v*d*r-u*m*r-v*i*f+n*m*f+u*i*p-n*d*p)*C,t[2]=(a*m*r-v*c*r+v*i*l-n*m*l-a*i*p+n*c*p)*C,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*C,t[4]=x*C,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*C,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*C,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*C,t[8]=w*C,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*C,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=A*C,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,y=c*l,x=c*h,w=c*u,A=n.x,R=n.y,C=n.z;return i[0]=(1-(v+p))*A,i[1]=(f+w)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(f-w)*R,i[5]=(1-(d+p))*R,i[6]=(m+y)*R,i[7]=0,i[8]=(g+x)*C,i[9]=(m-y)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Us.set(i[0],i[1],i[2]).length(),o=Us.set(i[4],i[5],i[6]).length(),a=Us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Wn.copy(this);let l=1/r,h=1/o,u=1/a;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,e.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Ti){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===Ti)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ha)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ti){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,g,v;if(a===Ti)g=(o+r)*u,v=-2*u;else if(a===ha)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Us=new b,Wn=new mt,Z0=new b(0,0,0),J0=new b(1,1,1),zi=new b,Oo=new b,xn=new b,Md=new mt,wd=new fe,Xi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Md.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Md,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wd.setFromEuler(this),this.setFromQuaternion(wd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Q0=0,Sd=new b,ks=new fe,_i=new mt,Fo=new b,Rr=new b,tg=new b,eg=new fe,Ed=new b(1,0,0),Td=new b(0,1,0),Ad=new b(0,0,1),ng={type:"added"},ig={type:"removed"},xe=class s extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new b,e=new Xi,n=new fe,i=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new $t}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Ed,t)}rotateY(t){return this.rotateOnAxis(Td,t)}rotateZ(t){return this.rotateOnAxis(Ad,t)}translateOnAxis(t,e){return Sd.copy(t).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ed,t)}translateY(t){return this.translateOnAxis(Td,t)}translateZ(t){return this.translateOnAxis(Ad,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fo.copy(t):Fo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Rr,Fo,this.up):_i.lookAt(Fo,Rr,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(_i),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ng)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ig)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,tg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};xe.DEFAULT_UP=new b(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new b,bi=new b,rl=new b,Mi=new b,Os=new b,Fs=new b,Rd=new b,ol=new b,al=new b,cl=new b,zo=!1,qs=class s{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Xn.subVectors(t,e),i.cross(Xn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Xn.subVectors(i,e),bi.subVectors(n,e),rl.subVectors(t,e);let o=Xn.dot(Xn),a=Xn.dot(bi),c=Xn.dot(rl),l=bi.dot(bi),h=bi.dot(rl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(t,e,n,i,r,o,a,c){return zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zo=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static isFrontFacing(t,e,n,i){return Xn.subVectors(n,e),bi.subVectors(t,e),Xn.cross(bi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Xn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zo=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Os.subVectors(i,n),Fs.subVectors(r,n),ol.subVectors(t,n);let c=Os.dot(ol),l=Fs.dot(ol);if(c<=0&&l<=0)return e.copy(n);al.subVectors(t,i);let h=Os.dot(al),u=Fs.dot(al);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Os,o);cl.subVectors(t,r);let f=Os.dot(cl),g=Fs.dot(cl);if(g>=0&&f<=g)return e.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Fs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Rd.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Rd,a);let p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function ll(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var _t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=lh(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ll(o,r,t+1/3),this.g=ll(o,r,t),this.b=ll(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=se){let n=kf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}copyLinearToSRGB(t){return this.r=Zc(t.r),this.g=Zc(t.g),this.b=Zc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=se){return Jt.fromWorkingColorSpace($e.copy(this),t),Math.round(qe($e.r*255,0,255))*65536+Math.round(qe($e.g*255,0,255))*256+Math.round(qe($e.b*255,0,255))}getHexString(t=se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,i=$e.g,r=$e.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=se){Jt.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,i=$e.b;return t!==se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Bo);let n=Ur(Bi.h,Bo.h,e),i=Ur(Bi.s,Bo.s,e),r=Ur(Bi.l,Bo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new _t;_t.NAMES=kf;var sg=0,Mn=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=js,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Sl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==md&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Je=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new b,Ho=new ft,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ho.fromBufferAttribute(this,e),Ho.applyMatrix3(t),this.setXY(e,Ho.x,Ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Al&&(t.usage=this.usage),t}};var ma=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ga=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var rg=0,Cn=new mt,hl=new xe,zs=new b,yn=new Pn,Cr=new Pn,Oe=new b,ye=class s extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uf(t)?ga:ma)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return hl.lookAt(t),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(yn.min,Cr.min),yn.expandByPoint(Oe),Oe.addVectors(yn.max,Cr.max),yn.expandByPoint(Oe)):(yn.expandByPoint(Cr.min),yn.expandByPoint(Cr.max))}yn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(t,l),Oe.add(zs)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new b,h[E]=new b;let u=new b,d=new b,f=new b,g=new ft,v=new ft,m=new ft,p=new b,y=new b;function x(E,N,G){u.fromArray(i,E*3),d.fromArray(i,N*3),f.fromArray(i,G*3),g.fromArray(o,E*2),v.fromArray(o,N*2),m.fromArray(o,G*2),d.sub(u),f.sub(u),v.sub(g),m.sub(g);let j=1/(v.x*m.y-m.x*v.y);isFinite(j)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(j),y.copy(f).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(j),l[E].add(p),l[N].add(p),l[G].add(p),h[E].add(y),h[N].add(y),h[G].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,N=w.length;E<N;++E){let G=w[E],j=G.start,P=G.count;for(let D=j,H=j+P;D<H;D+=3)x(n[D+0],n[D+1],n[D+2])}let A=new b,R=new b,C=new b,U=new b;function _(E){C.fromArray(r,E*3),U.copy(C);let N=l[E];A.copy(N),A.sub(C.multiplyScalar(C.dot(N))).normalize(),R.crossVectors(U,N);let j=R.dot(h[E])<0?-1:1;c[E*4]=A.x,c[E*4+1]=A.y,c[E*4+2]=A.z,c[E*4+3]=j}for(let E=0,N=w.length;E<N;++E){let G=w[E],j=G.start,P=G.count;for(let D=j,H=j+P;D<H;D+=3)_(n[D+0]),_(n[D+1]),_(n[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new b,r=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cd=new mt,hs=new _s,Vo=new bn,Ld=new b,Bs=new b,Hs=new b,Vs=new b,ul=new b,Go=new b,Wo=new ft,Xo=new ft,$o=new ft,Pd=new b,Id=new b,Dd=new b,qo=new b,Yo=new b,Kt=class extends xe{constructor(t=new ye,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ul.fromBufferAttribute(u,t),o?Go.addScaledVector(ul,h):Go.addScaledVector(ul.sub(e),h))}e.add(Go)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(Vo.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Vo,Ld)===null||hs.origin.distanceToSquared(Ld)>(t.far-t.near)**2))&&(Cd.copy(r).invert(),hs.copy(t.ray).applyMatrix4(Cd),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=y,A=x;w<A;w+=3){let R=a.getX(w),C=a.getX(w+1),U=a.getX(w+2);i=Ko(this,p,t,n,l,h,u,R,C,U),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=a.getX(m),x=a.getX(m+1),w=a.getX(m+2);i=Ko(this,o,t,n,l,h,u,y,x,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let w=y,A=x;w<A;w+=3){let R=w,C=w+1,U=w+2;i=Ko(this,p,t,n,l,h,u,R,C,U),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=m,x=m+1,w=m+2;i=Ko(this,o,t,n,l,h,u,y,x,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function og(s,t,e,n,i,r,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===ai,a),c===null)return null;Yo.copy(a),Yo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Yo);return l<e.near||l>e.far?null:{distance:l,point:Yo.clone(),object:s}}function Ko(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Bs),s.getVertexPosition(c,Hs),s.getVertexPosition(l,Vs);let h=og(s,t,e,n,Bs,Hs,Vs,qo);if(h){i&&(Wo.fromBufferAttribute(i,a),Xo.fromBufferAttribute(i,c),$o.fromBufferAttribute(i,l),h.uv=qs.getInterpolation(qo,Bs,Hs,Vs,Wo,Xo,$o,new ft)),r&&(Wo.fromBufferAttribute(r,a),Xo.fromBufferAttribute(r,c),$o.fromBufferAttribute(r,l),h.uv1=qs.getInterpolation(qo,Bs,Hs,Vs,Wo,Xo,$o,new ft),h.uv2=h.uv1),o&&(Pd.fromBufferAttribute(o,a),Id.fromBufferAttribute(o,c),Dd.fromBufferAttribute(o,l),h.normal=qs.getInterpolation(qo,Bs,Hs,Vs,Pd,Id,Dd,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new b,materialIndex:0};qs.getNormal(Bs,Hs,Vs,u.normal),h.face=u}return h}var Kn=class s extends ye{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(v,m,p,y,x,w,A,R,C,U,_){let E=w/C,N=A/U,G=w/2,j=A/2,P=R/2,D=C+1,H=U+1,$=0,X=0,W=new b;for(let Y=0;Y<H;Y++){let Z=Y*N-j;for(let ct=0;ct<D;ct++){let V=ct*E-G;W[v]=V*y,W[m]=Z*x,W[p]=P,l.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(ct/C),u.push(1-Y/U),$+=1}}for(let Y=0;Y<U;Y++)for(let Z=0;Z<C;Z++){let ct=d+Z+D*Y,V=d+Z+D*(Y+1),K=d+(Z+1)+D*(Y+1),at=d+(Z+1)+D*Y;c.push(ct,V,at),c.push(V,K,at),X+=6}a.addGroup(f,X,_),f+=X,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function rr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function cn(s){let t={};for(let e=0;e<s.length;e++){let n=rr(s[e]);for(let i in n)t[i]=n[i]}return t}function ag(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Of(s){return s.getRenderTarget()===null?s.outputColorSpace:Jt.workingColorSpace}var cg={clone:rr,merge:cn},lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pe=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},va=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Le=class extends va{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gs=-90,Ws=1,Il=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Le(Gs,Ws,t,e);i.layers=this.layers,this.add(i);let r=new Le(Gs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new Le(Gs,Ws,t,e);o.layers=this.layers,this.add(o);let a=new Le(Gs,Ws,t,e);a.layers=this.layers,this.add(a);let c=new Le(Gs,Ws,t,e);c.layers=this.layers,this.add(c);let l=new Le(Gs,Ws,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xa=class extends Ze{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dl=class extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===vs?se:Ke),this.texture=new xa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kn(5,5,5),r=new pe({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Vi});r.uniforms.tEquirect.value=e;let o=new Kt(i,r),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=ve),new Il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},dl=new b,ug=new b,dg=new $t,$n=class{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=dl.subVectors(n,e).cross(ug.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||dg.getNormalMatrix(t),i=this.coplanarPoint(dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new bn,jo=new b,Hr=class{constructor(t=new $n,e=new $n,n=new $n,i=new $n,r=new $n,o=new $n){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ti){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],y=i[13],x=i[14],w=i[15];if(n[0].setComponents(c-r,d-l,m-f,w-p).normalize(),n[1].setComponents(c+r,d+l,m+f,w+p).normalize(),n[2].setComponents(c+o,d+h,m+g,w+y).normalize(),n[3].setComponents(c-o,d-h,m-g,w-y).normalize(),n[4].setComponents(c-a,d-u,m-v,w-x).normalize(),e===Ti)n[5].setComponents(c+a,d+u,m+v,w+x).normalize();else if(e===ha)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(jo.x=i.normal.x>0?t.max.x:t.min.x,jo.y=i.normal.y>0?t.max.y:t.min.y,jo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ff(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function fg(s,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var jn=class s extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let x=0;x<l;x++){let w=x*u-r;g.push(w,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,w=y+l*(p+1),A=y+1+l*(p+1),R=y+1+l*p;f.push(x,w,R),f.push(w,A,R)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
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
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_g=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`#ifdef USE_BATCHING
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
#endif`,wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
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
#endif`,Rg=`#ifdef USE_BUMPMAP
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Og=`#define PI 3.141592653589793
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
} // validated`,Fg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xg=`
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
}`,$g=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ev=`#ifdef USE_GRADIENTMAP
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
}`,nv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ov=`uniform bool receiveShadow;
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
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dv=`PhysicalMaterial material;
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
#endif`,fv=`struct PhysicalMaterial {
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
}`,pv=`
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_v=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sv=`#if defined( USE_POINTS_UV )
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
#endif`,Ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Av=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rv=`#ifdef USE_MORPHNORMALS
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
#endif`,Cv=`#ifdef USE_MORPHTARGETS
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
#endif`,Lv=`#ifdef USE_MORPHTARGETS
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
#endif`,Pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kv=`#ifdef USE_NORMALMAP
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
#endif`,Ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jv=`float getShadowMask() {
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
}`,Qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
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
}`,_x=`#if DEPTH_PACKING == 3200
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
}`,bx=`#define DISTANCE
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
}`,Mx=`#define DISTANCE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#define LAMBERT
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
}`,Lx=`#define LAMBERT
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
}`,Px=`#define MATCAP
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
}`,Ix=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,Nx=`#define NORMAL
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
}`,Ux=`#define PHONG
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
}`,kx=`#define PHONG
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
}`,Ox=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
}`,zx=`#define TOON
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
}`,Bx=`#define TOON
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
}`,Hx=`uniform float size;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Gx=`#include <common>
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
}`,Wx=`uniform vec3 color;
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
}`,Xx=`uniform float rotation;
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
}`,$x=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:gg,alphamap_pars_fragment:vg,alphatest_fragment:xg,alphatest_pars_fragment:yg,aomap_fragment:_g,aomap_pars_fragment:bg,batching_pars_vertex:Mg,batching_vertex:wg,begin_vertex:Sg,beginnormal_vertex:Eg,bsdfs:Tg,iridescence_fragment:Ag,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Lg,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Ig,color_fragment:Dg,color_pars_fragment:Ng,color_pars_vertex:Ug,color_vertex:kg,common:Og,cube_uv_reflection_fragment:Fg,defaultnormal_vertex:zg,displacementmap_pars_vertex:Bg,displacementmap_vertex:Hg,emissivemap_fragment:Vg,emissivemap_pars_fragment:Gg,colorspace_fragment:Wg,colorspace_pars_fragment:Xg,envmap_fragment:$g,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:Kg,envmap_physical_pars_fragment:av,envmap_vertex:jg,fog_vertex:Zg,fog_pars_vertex:Jg,fog_fragment:Qg,fog_pars_fragment:tv,gradientmap_pars_fragment:ev,lightmap_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:sv,lights_lambert_pars_fragment:rv,lights_pars_begin:ov,lights_toon_fragment:cv,lights_toon_pars_fragment:lv,lights_phong_fragment:hv,lights_phong_pars_fragment:uv,lights_physical_fragment:dv,lights_physical_pars_fragment:fv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:xv,logdepthbuf_pars_vertex:yv,logdepthbuf_vertex:_v,map_fragment:bv,map_pars_fragment:Mv,map_particle_fragment:wv,map_particle_pars_fragment:Sv,metalnessmap_fragment:Ev,metalnessmap_pars_fragment:Tv,morphcolor_vertex:Av,morphnormal_vertex:Rv,morphtarget_pars_vertex:Cv,morphtarget_vertex:Lv,normal_fragment_begin:Pv,normal_fragment_maps:Iv,normal_pars_fragment:Dv,normal_pars_vertex:Nv,normal_vertex:Uv,normalmap_pars_fragment:kv,clearcoat_normal_fragment_begin:Ov,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:zv,iridescence_pars_fragment:Bv,opaque_fragment:Hv,packing:Vv,premultiplied_alpha_fragment:Gv,project_vertex:Wv,dithering_fragment:Xv,dithering_pars_fragment:$v,roughnessmap_fragment:qv,roughnessmap_pars_fragment:Yv,shadowmap_pars_fragment:Kv,shadowmap_pars_vertex:jv,shadowmap_vertex:Zv,shadowmask_pars_fragment:Jv,skinbase_vertex:Qv,skinning_pars_vertex:tx,skinning_vertex:ex,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:sx,tonemapping_fragment:rx,tonemapping_pars_fragment:ox,transmission_fragment:ax,transmission_pars_fragment:cx,uv_pars_fragment:lx,uv_pars_vertex:hx,uv_vertex:ux,worldpos_vertex:dx,background_vert:fx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:vx,cube_frag:xx,depth_vert:yx,depth_frag:_x,distanceRGBA_vert:bx,distanceRGBA_frag:Mx,equirect_vert:wx,equirect_frag:Sx,linedashed_vert:Ex,linedashed_frag:Tx,meshbasic_vert:Ax,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Lx,meshmatcap_vert:Px,meshmatcap_frag:Ix,meshnormal_vert:Dx,meshnormal_frag:Nx,meshphong_vert:Ux,meshphong_frag:kx,meshphysical_vert:Ox,meshphysical_frag:Fx,meshtoon_vert:zx,meshtoon_frag:Bx,points_vert:Hx,points_frag:Vx,shadow_vert:Gx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:$x},it={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},si={basic:{uniforms:cn([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:cn([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new _t(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:cn([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:cn([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:cn([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new _t(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:cn([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:cn([it.points,it.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:cn([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:cn([it.common,it.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:cn([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:cn([it.sprite,it.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:cn([it.common,it.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:cn([it.lights,it.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};si.physical={uniforms:cn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Zo={r:0,b:0,g:0};function qx(s,t,e,n,i,r,o){let a=new _t(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,c):x&&x.isColor&&(v(x,1),y=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Da)?(h===void 0&&(h=new Kt(new Kn(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:rr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==de,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Kt(new jn(2,2),new pe({name:"BackgroundMaterial",uniforms:rr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(Zo,Of(s)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function Yx(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(P,D,H,$,X){let W=!1;if(o){let Y=v($,H,D);l!==Y&&(l=Y,f(l.object)),W=p(P,$,H,X),W&&y(P,$,H,X)}else{let Y=D.wireframe===!0;(l.geometry!==$.id||l.program!==H.id||l.wireframe!==Y)&&(l.geometry=$.id,l.program=H.id,l.wireframe=Y,W=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,U(P,D,H,$),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,D,H){let $=H.wireframe===!0,X=a[P.id];X===void 0&&(X={},a[P.id]=X);let W=X[D.id];W===void 0&&(W={},X[D.id]=W);let Y=W[$];return Y===void 0&&(Y=m(d()),W[$]=Y),Y}function m(P){let D=[],H=[],$=[];for(let X=0;X<i;X++)D[X]=0,H[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:$,object:P,attributes:{},index:null}}function p(P,D,H,$){let X=l.attributes,W=D.attributes,Y=0,Z=H.getAttributes();for(let ct in Z)if(Z[ct].location>=0){let K=X[ct],at=W[ct];if(at===void 0&&(ct==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),ct==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),K===void 0||K.attribute!==at||at&&K.data!==at.data)return!0;Y++}return l.attributesNum!==Y||l.index!==$}function y(P,D,H,$){let X={},W=D.attributes,Y=0,Z=H.getAttributes();for(let ct in Z)if(Z[ct].location>=0){let K=W[ct];K===void 0&&(ct==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),ct==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let at={};at.attribute=K,K&&K.data&&(at.data=K.data),X[ct]=at,Y++}l.attributes=X,l.attributesNum=Y,l.index=$}function x(){let P=l.newAttributes;for(let D=0,H=P.length;D<H;D++)P[D]=0}function w(P){A(P,0)}function A(P,D){let H=l.newAttributes,$=l.enabledAttributes,X=l.attributeDivisors;H[P]=1,$[P]===0&&(s.enableVertexAttribArray(P),$[P]=1),X[P]!==D&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),X[P]=D)}function R(){let P=l.newAttributes,D=l.enabledAttributes;for(let H=0,$=D.length;H<$;H++)D[H]!==P[H]&&(s.disableVertexAttribArray(H),D[H]=0)}function C(P,D,H,$,X,W,Y){Y===!0?s.vertexAttribIPointer(P,D,H,X,W):s.vertexAttribPointer(P,D,H,$,X,W)}function U(P,D,H,$){if(n.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=$.attributes,W=H.getAttributes(),Y=D.defaultAttributeValues;for(let Z in W){let ct=W[Z];if(ct.location>=0){let V=X[Z];if(V===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let K=V.normalized,at=V.itemSize,vt=e.get(V);if(vt===void 0)continue;let dt=vt.buffer,It=vt.type,Dt=vt.bytesPerElement,Et=n.isWebGL2===!0&&(It===s.INT||It===s.UNSIGNED_INT||V.gpuType===Ef);if(V.isInterleavedBufferAttribute){let jt=V.data,k=jt.stride,sn=V.offset;if(jt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<ct.locationSize;Tt++)A(ct.location+Tt,jt.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=jt.meshPerAttribute*jt.count)}else for(let Tt=0;Tt<ct.locationSize;Tt++)w(ct.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let Tt=0;Tt<ct.locationSize;Tt++)C(ct.location+Tt,at/ct.locationSize,It,K,k*Dt,(sn+at/ct.locationSize*Tt)*Dt,Et)}else{if(V.isInstancedBufferAttribute){for(let jt=0;jt<ct.locationSize;jt++)A(ct.location+jt,V.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let jt=0;jt<ct.locationSize;jt++)w(ct.location+jt);s.bindBuffer(s.ARRAY_BUFFER,dt);for(let jt=0;jt<ct.locationSize;jt++)C(ct.location+jt,at/ct.locationSize,It,K,at*Dt,at/ct.locationSize*jt*Dt,Et)}}else if(Y!==void 0){let K=Y[Z];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ct.location,K);break;case 3:s.vertexAttrib3fv(ct.location,K);break;case 4:s.vertexAttrib4fv(ct.location,K);break;default:s.vertexAttrib1fv(ct.location,K)}}}}R()}function _(){G();for(let P in a){let D=a[P];for(let H in D){let $=D[H];for(let X in $)g($[X].object),delete $[X];delete D[H]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;let D=a[P.id];for(let H in D){let $=D[H];for(let X in $)g($[X].object),delete $[X];delete D[H]}delete a[P.id]}function N(P){for(let D in a){let H=a[D];if(H[P.id]===void 0)continue;let $=H[P.id];for(let X in $)g($[X].object),delete $[X];delete H[P.id]}}function G(){j(),h=!0,l!==c&&(l=c,f(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:G,resetDefaultState:j,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:w,disableUnusedAttributes:R}}function Kx(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function jx(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,w=o||t.has("OES_texture_float"),A=x&&w,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:A,maxSamples:R}}function Zx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new $n,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,x=y*4,w=p.clippingState||null;c.value=w,w=h(g,d,x,f);for(let A=0;A!==x;++A)w[A]=e[A];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,w=f;x!==v;++x,w+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Jx(s){let t=new WeakMap;function e(o,a){return a===El?o.mapping=tr:a===Tl&&(o.mapping=er),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===El||a===Tl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Dl(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var wn=class extends va{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ys=4,Nd=[.125,.215,.35,.446,.526,.582],ps=20,fl=new wn,Ud=new _t,pl=null,ml=0,gl=0,ds=(1+Math.sqrt(5))/2,Xs=1/ds,kd=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,ds,Xs),new b(0,ds,-Xs),new b(Xs,0,ds),new b(-Xs,0,ds),new b(ds,Xs,0),new b(-ds,Xs,0)],or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pl,ml,gl),t.scissorTest=!1,Jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ve,minFilter:ve,generateMipmaps:!1,type:Yn,format:Ye,colorSpace:Ie,depthBuffer:!1},i=Od(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qx(r)),this._blurMaterial=ty(r,t,e)}return i}_compileMaterial(t){let e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,fl)}_sceneToCubeUV(t,e,n,i){let a=new Le(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ud),h.toneMapping=oi,h.autoClear=!1;let f=new Je({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Kt(new Kn,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Ud),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Jo(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===tr||t.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Jo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,fl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=kd[(i-1)%kd.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Kt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ps-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ps;m>ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);let p=[],y=0;for(let C=0;C<ps;++C){let U=C/v,_=Math.exp(-U*U/2);p.push(_),C===0?y+=_:C<m&&(y+=2*_)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let w=this._sizeLods[i],A=3*w*(i>x-Ys?i-x+Ys:0),R=4*(this._cubeSize-w);Jo(e,A,R,3*w,2*w),c.setRenderTarget(e),c.render(u,fl)}};function Qx(s){let t=[],e=[],n=[],i=s,r=s-Ys+1+Nd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ys?c=Nd[o-s+Ys-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),x=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let R=0;R<f;R++){let C=R%3*2/3-1,U=R>2?0:-1,_=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];y.set(_,v*g*R),x.set(d,m*g*R);let E=[R,R,R,R,R,R];w.set(E,p*g*R)}let A=new ye;A.setAttribute("position",new Pe(y,v)),A.setAttribute("uv",new Pe(x,m)),A.setAttribute("faceIndex",new Pe(w,p)),t.push(A),i>Ys&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Od(s,t,e){let n=new Fe(s,t,e);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ty(s,t,e){let n=new Float32Array(ps),i=new b(0,1,0);return new pe({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Fd(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function zd(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function hh(){return`

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
	`}function ey(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===El||c===Tl,h=c===tr||c===er;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new or(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new or(s));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ny(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function iy(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let x=0,w=y.length;x<w;x+=3){let A=y[x+0],R=y[x+1],C=y[x+2];d.push(A,R,R,C,C,A)}}else if(g!==void 0){let y=g.array;v=g.version;for(let x=0,w=y.length/3-1;x<w;x+=3){let A=x+0,R=x+1,C=x+2;d.push(A,R,R,C,C,A)}}else return;let m=new(Uf(d)?ga:ma)(d,1);m.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function sy(s,t,e,n){let i=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*c),e.update(g,r,1)}function u(f,g,v){if(v===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,v),e.update(g,r,v)}function d(f,g,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,v);let p=0;for(let y=0;y<v;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ry(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function oy(s,t){return s[0]-t[0]}function ay(s,t){return Math.abs(t[1])-Math.abs(s[1])}function cy(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new Gt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,v=r.get(h);if(v===void 0||v.count!==g){let P=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],U=0;y===!0&&(U=1),x===!0&&(U=2),w===!0&&(U=3);let _=h.attributes.position.count*U,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let N=new Float32Array(_*E*4*g),G=new pa(N,_,E,g);G.type=Ei,G.needsUpdate=!0;let j=U*4;for(let D=0;D<g;D++){let H=A[D],$=R[D],X=C[D],W=_*E*4*D;for(let Y=0;Y<H.count;Y++){let Z=Y*j;y===!0&&(o.fromBufferAttribute(H,Y),N[W+Z+0]=o.x,N[W+Z+1]=o.y,N[W+Z+2]=o.z,N[W+Z+3]=0),x===!0&&(o.fromBufferAttribute($,Y),N[W+Z+4]=o.x,N[W+Z+5]=o.y,N[W+Z+6]=o.z,N[W+Z+7]=0),w===!0&&(o.fromBufferAttribute(X,Y),N[W+Z+8]=o.x,N[W+Z+9]=o.y,N[W+Z+10]=o.z,N[W+Z+11]=X.itemSize===4?o.w:1)}}v={count:g,texture:G,size:new ft(_,E)},r.set(h,v),h.addEventListener("dispose",P)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let w=g[x];w[0]=x,w[1]=d[x]}g.sort(ay);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(oy);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let w=a[x],A=w[0],R=w[1];A!==Number.MAX_SAFE_INTEGER&&R?(v&&h.getAttribute("morphTarget"+x)!==v[A]&&h.setAttribute("morphTarget"+x,v[A]),m&&h.getAttribute("morphNormal"+x)!==m[A]&&h.setAttribute("morphNormal"+x,m[A]),i[x]=R,p+=R):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function ly(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var $i=class extends Ze{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:gs,h!==gs&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gs&&(n=Ln),n===void 0&&h===nr&&(n=ms),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ce,this.minFilter=c!==void 0?c:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zf=new Ze,Bf=new $i(1,1);Bf.compareFunction=ka;var Hf=new pa,Vf=new Pl,Gf=new xa,Bd=[],Hd=[],Vd=new Float32Array(16),Gd=new Float32Array(9),Wd=new Float32Array(4);function dr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Bd[i];if(r===void 0&&(r=new Float32Array(i),Bd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Oa(s,t){let e=Hd[t];e===void 0&&(e=new Int32Array(t),Hd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function hy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function uy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function dy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function fy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function py(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Wd.set(n),s.uniformMatrix2fv(this.addr,!1,Wd),Ne(e,n)}}function my(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Gd.set(n),s.uniformMatrix3fv(this.addr,!1,Gd),Ne(e,n)}}function gy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Vd.set(n),s.uniformMatrix4fv(this.addr,!1,Vd),Ne(e,n)}}function vy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function xy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function yy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function _y(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function by(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function My(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function wy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function Sy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function Ey(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Bf:zf;e.setTexture2D(t||r,i)}function Ty(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vf,i)}function Ay(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gf,i)}function Ry(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hf,i)}function Cy(s){switch(s){case 5126:return hy;case 35664:return uy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return vy;case 35667:case 35671:return xy;case 35668:case 35672:return yy;case 35669:case 35673:return _y;case 5125:return by;case 36294:return My;case 36295:return wy;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ry}}function Ly(s,t){s.uniform1fv(this.addr,t)}function Py(s,t){let e=dr(t,this.size,2);s.uniform2fv(this.addr,e)}function Iy(s,t){let e=dr(t,this.size,3);s.uniform3fv(this.addr,e)}function Dy(s,t){let e=dr(t,this.size,4);s.uniform4fv(this.addr,e)}function Ny(s,t){let e=dr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Uy(s,t){let e=dr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ky(s,t){let e=dr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Oy(s,t){s.uniform1iv(this.addr,t)}function Fy(s,t){s.uniform2iv(this.addr,t)}function zy(s,t){s.uniform3iv(this.addr,t)}function By(s,t){s.uniform4iv(this.addr,t)}function Hy(s,t){s.uniform1uiv(this.addr,t)}function Vy(s,t){s.uniform2uiv(this.addr,t)}function Gy(s,t){s.uniform3uiv(this.addr,t)}function Wy(s,t){s.uniform4uiv(this.addr,t)}function Xy(s,t,e){let n=this.cache,i=t.length,r=Oa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||zf,r[o])}function $y(s,t,e){let n=this.cache,i=t.length,r=Oa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Vf,r[o])}function qy(s,t,e){let n=this.cache,i=t.length,r=Oa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Gf,r[o])}function Yy(s,t,e){let n=this.cache,i=t.length,r=Oa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Hf,r[o])}function Ky(s){switch(s){case 5126:return Ly;case 35664:return Py;case 35665:return Iy;case 35666:return Dy;case 35674:return Ny;case 35675:return Uy;case 35676:return ky;case 5124:case 35670:return Oy;case 35667:case 35671:return Fy;case 35668:case 35672:return zy;case 35669:case 35673:return By;case 5125:return Hy;case 36294:return Vy;case 36295:return Gy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}var Nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cy(e.type)}},Ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ky(e.type)}},kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function Xd(s,t){s.seq.push(t),s.map[t.id]=t}function jy(s,t,e){let n=s.name,i=n.length;for(vl.lastIndex=0;;){let r=vl.exec(n),o=vl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Xd(e,l===void 0?new Nl(a,s,t):new Ul(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new kl(a),Xd(e,u)),e=u}}}var Js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);jy(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function $d(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Zy=37297,Jy=0;function Qy(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function t_(s){let t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s),n;switch(t===e?n="":t===la&&e===ca?n="LinearDisplayP3ToLinearSRGB":t===ca&&e===la&&(n="LinearSRGBToLinearDisplayP3"),s){case Ie:case Ua:return[n,"LinearTransferOETF"];case se:case ah:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function qd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Qy(s.getShaderSource(t),o)}else return i}function e_(s,t){let e=t_(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function n_(s,t){let e;switch(t){case o0:e="Linear";break;case a0:e="Reinhard";break;case c0:e="OptimizedCineon";break;case l0:e="ACESFilmic";break;case u0:e="AgX";break;case h0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function i_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function s_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ks).join(`
`)}function r_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ks(s){return s!==""}function Yd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(s){return s.replace(a_,l_)}var c_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function l_(s,t){let e=zt[t];if(e===void 0){let n=c_.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}var h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(s){return s.replace(h_,u_)}function u_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zd(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function d_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nm?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function f_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function m_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wf:t="ENVMAP_BLENDING_MULTIPLY";break;case s0:t="ENVMAP_BLENDING_MIX";break;case r0:t="ENVMAP_BLENDING_ADD";break}return t}function g_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function v_(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=d_(e),l=f_(e),h=p_(e),u=m_(e),d=g_(e),f=e.isWebGL2?"":i_(e),g=s_(e),v=r_(r),m=i.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ks).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ks).join(`
`),y.length>0&&(y+=`
`)):(p=[Zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),y=[f,Zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?zt.tonemapping_pars_fragment:"",e.toneMapping!==oi?n_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,e_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Ol(o),o=Yd(o,e),o=Kd(o,e),a=Ol(a),a=Yd(a,e),a=Kd(a,e),o=jd(o),a=jd(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let w=x+p+o,A=x+y+a,R=$d(i,i.VERTEX_SHADER,w),C=$d(i,i.FRAGMENT_SHADER,A);i.attachShader(m,R),i.attachShader(m,C),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function U(G){if(s.debug.checkShaderErrors){let j=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(R).trim(),D=i.getShaderInfoLog(C).trim(),H=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,R,C);else{let X=qd(i,R,"vertex"),W=qd(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+X+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||D==="")&&($=!1);$&&(G.diagnostics={runnable:H,programLog:j,vertexShader:{log:P,prefix:p},fragmentShader:{log:D,prefix:y}})}i.deleteShader(R),i.deleteShader(C),_=new Js(i,m),E=o_(i,m)}let _;this.getUniforms=function(){return _===void 0&&U(this),_};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,Zy)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jy++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=C,this}var x_=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zl(t),e.set(t,n)),n}},zl=class{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}};function y_(s,t,e,n,i,r,o){let a=new Br,c=new Fl,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return _===0?"uv":`uv${_}`}function m(_,E,N,G,j){let P=G.fog,D=j.geometry,H=_.isMeshStandardMaterial?G.environment:null,$=(_.isMeshStandardMaterial?e:t).get(_.envMap||H),X=$&&$.mapping===Da?$.image.height:null,W=g[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Z=Y!==void 0?Y.length:0,ct=0;D.morphAttributes.position!==void 0&&(ct=1),D.morphAttributes.normal!==void 0&&(ct=2),D.morphAttributes.color!==void 0&&(ct=3);let V,K,at,vt;if(W){let rn=si[W];V=rn.vertexShader,K=rn.fragmentShader}else V=_.vertexShader,K=_.fragmentShader,c.update(_),at=c.getVertexShaderID(_),vt=c.getFragmentShaderID(_);let dt=s.getRenderTarget(),It=j.isInstancedMesh===!0,Dt=j.isBatchedMesh===!0,Et=!!_.map,jt=!!_.matcap,k=!!$,sn=!!_.aoMap,Tt=!!_.lightMap,Ut=!!_.bumpMap,gt=!!_.normalMap,me=!!_.displacementMap,Bt=!!_.emissiveMap,T=!!_.metalnessMap,M=!!_.roughnessMap,F=_.anisotropy>0,tt=_.clearcoat>0,Q=_.iridescence>0,et=_.sheen>0,xt=_.transmission>0,ot=F&&!!_.anisotropyMap,ht=tt&&!!_.clearcoatMap,Ct=tt&&!!_.clearcoatNormalMap,Ht=tt&&!!_.clearcoatRoughnessMap,J=Q&&!!_.iridescenceMap,ee=Q&&!!_.iridescenceThicknessMap,qt=et&&!!_.sheenColorMap,Nt=et&&!!_.sheenRoughnessMap,wt=!!_.specularMap,ut=!!_.specularColorMap,Ft=!!_.specularIntensityMap,te=xt&&!!_.transmissionMap,_e=xt&&!!_.thicknessMap,Wt=!!_.gradientMap,nt=!!_.alphaMap,L=_.alphaTest>0,st=!!_.alphaHash,rt=!!_.extensions,Lt=!!D.attributes.uv1,At=!!D.attributes.uv2,ae=!!D.attributes.uv3,ce=oi;return _.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ce=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:V,fragmentShader:K,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Dt,instancing:It,instancingColor:It&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ie,map:Et,matcap:jt,envMap:k,envMapMode:k&&$.mapping,envMapCubeUVHeight:X,aoMap:sn,lightMap:Tt,bumpMap:Ut,normalMap:gt,displacementMap:d&&me,emissiveMap:Bt,normalMapObjectSpace:gt&&_.normalMapType===S0,normalMapTangentSpace:gt&&_.normalMapType===Nf,metalnessMap:T,roughnessMap:M,anisotropy:F,anisotropyMap:ot,clearcoat:tt,clearcoatMap:ht,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Ht,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:ee,sheen:et,sheenColorMap:qt,sheenRoughnessMap:Nt,specularMap:wt,specularColorMap:ut,specularIntensityMap:Ft,transmission:xt,transmissionMap:te,thicknessMap:_e,gradientMap:Wt,opaque:_.transparent===!1&&_.blending===js,alphaMap:nt,alphaTest:L,alphaHash:st,combine:_.combine,mapUv:Et&&v(_.map.channel),aoMapUv:sn&&v(_.aoMap.channel),lightMapUv:Tt&&v(_.lightMap.channel),bumpMapUv:Ut&&v(_.bumpMap.channel),normalMapUv:gt&&v(_.normalMap.channel),displacementMapUv:me&&v(_.displacementMap.channel),emissiveMapUv:Bt&&v(_.emissiveMap.channel),metalnessMapUv:T&&v(_.metalnessMap.channel),roughnessMapUv:M&&v(_.roughnessMap.channel),anisotropyMapUv:ot&&v(_.anisotropyMap.channel),clearcoatMapUv:ht&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(_.sheenRoughnessMap.channel),specularMapUv:wt&&v(_.specularMap.channel),specularColorMapUv:ut&&v(_.specularColorMap.channel),specularIntensityMapUv:Ft&&v(_.specularIntensityMap.channel),transmissionMapUv:te&&v(_.transmissionMap.channel),thicknessMapUv:_e&&v(_.thicknessMap.channel),alphaMapUv:nt&&v(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(gt||F),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:At,vertexUv3s:ae,pointsUvs:j.isPoints===!0&&!!D.attributes.uv&&(Et||nt),fog:!!P,useFog:_.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ct,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Et&&_.map.isVideoTexture===!0&&Jt.getTransfer(_.map.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ln,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:rt&&_.extensions.derivatives===!0,extensionFragDepth:rt&&_.extensions.fragDepth===!0,extensionDrawBuffers:rt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)E.push(N),E.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(y(E,_),x(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function y(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function x(_,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function w(_){let E=g[_.type],N;if(E){let G=si[E];N=cg.clone(G.uniforms)}else N=_.uniforms;return N}function A(_,E){let N;for(let G=0,j=l.length;G<j;G++){let P=l[G];if(P.cacheKey===E){N=P,++N.usedTimes;break}}return N===void 0&&(N=new v_(s,E,_,r),l.push(N)),N}function R(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),_.destroy()}}function C(_){c.remove(_)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:l,dispose:U}}function __(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function b_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Jd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){let p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,v,m){let p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||b_),n.length>1&&n.sort(d||Jd),i.length>1&&i.sort(d||Jd)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function M_(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Qd,s.set(n,[o])):i>=r.length?(o=new Qd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function w_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new _t};break;case"SpotLight":e={position:new b,direction:new b,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new b,halfWidth:new b,halfHeight:new b};break}return s[t.id]=e,e}}}function S_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var E_=0;function T_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function A_(s,t){let e=new w_,n=S_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new b);let r=new b,o=new mt,a=new mt;function c(h,u){let d=0,f=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let v=0,m=0,p=0,y=0,x=0,w=0,A=0,R=0,C=0,U=0,_=0;h.sort(T_);let E=u===!0?Math.PI:1;for(let G=0,j=h.length;G<j;G++){let P=h[G],D=P.color,H=P.intensity,$=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=D.r*H*E,f+=D.g*H*E,g+=D.b*H*E;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],H);_++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){let Y=P.shadow,Z=n.get(P);Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,i.directionalShadow[v]=Z,i.directionalShadowMap[v]=X,i.directionalShadowMatrix[v]=P.shadow.matrix,w++}i.directional[v]=W,v++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(D).multiplyScalar(H*E),W.distance=$,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[p]=W;let Y=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Y.updateMatrices(P),P.castShadow&&U++),i.spotLightMatrix[p]=Y.matrix,P.castShadow){let Z=n.get(P);Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=X,R++}p++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(D).multiplyScalar(H),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=W,y++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*E),W.distance=P.distance,W.decay=P.decay,P.castShadow){let Y=P.shadow,Z=n.get(P);Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=P.shadow.matrix,A++}i.point[m]=W,m++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(H*E),W.groundColor.copy(P.groundColor).multiplyScalar(H*E),i.hemi[x]=W,x++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let N=i.hash;(N.directionalLength!==v||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==x||N.numDirectionalShadows!==w||N.numPointShadows!==A||N.numSpotShadows!==R||N.numSpotMaps!==C||N.numLightProbes!==_)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=R+C-U,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=_,N.directionalLength=v,N.pointLength=m,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=x,N.numDirectionalShadows=w,N.numPointShadows=A,N.numSpotShadows=R,N.numSpotMaps=C,N.numLightProbes=_,i.version=E_++)}function l(h,u){let d=0,f=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let w=h[y];if(w.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(w.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(w.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function tf(s,t){let e=new A_(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function R_(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new tf(s,t),e.set(r,[c])):o>=a.length?(c=new tf(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var Vr=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bl=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
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
}`;function P_(s,t,e){let n=new Hr,i=new ft,r=new ft,o=new Gt,a=new Vr({depthPacking:w0}),c=new Bl,l={},h=e.maxTextureSize,u={[ai]:je,[je]:ai,[ln]:ln},d=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:C_,fragmentShader:L_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ye;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mf;let p=this.type;this.render=function(R,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let _=s.getRenderTarget(),E=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Vi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let j=p!==Si&&this.type===Si,P=p===Si&&this.type!==Si;for(let D=0,H=R.length;D<H;D++){let $=R[D],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let W=X.getFrameExtents();if(i.multiply(W),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||j===!0||P===!0){let Z=this.type!==Si?{minFilter:Ce,magFilter:Ce}:{};X.map!==null&&X.map.dispose(),X.map=new Fe(i.x,i.y,Z),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let Y=X.getViewportCount();for(let Z=0;Z<Y;Z++){let ct=X.getViewport(Z);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),G.viewport(o),X.updateMatrices($,Z),n=X.getFrustum(),w(C,U,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===Si&&y(X,U),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(_,E,N)};function y(R,C){let U=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fe(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,U,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,U,f,v,null)}function x(R,C,U,_){let E=null,N=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)E=N;else if(E=U.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let G=E.uuid,j=C.uuid,P=l[G];P===void 0&&(P={},l[G]=P);let D=P[j];D===void 0&&(D=E.clone(),P[j]=D,C.addEventListener("dispose",A)),E=D}if(E.visible=C.visible,E.wireframe=C.wireframe,_===Si?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=s.properties.get(E);G.light=U}return E}function w(R,C,U,_,E){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Si)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let j=t.update(R),P=R.material;if(Array.isArray(P)){let D=j.groups;for(let H=0,$=D.length;H<$;H++){let X=D[H],W=P[X.materialIndex];if(W&&W.visible){let Y=x(R,W,_,E);R.onBeforeShadow(s,R,C,U,j,Y,X),s.renderBufferDirect(U,null,j,Y,R,X),R.onAfterShadow(s,R,C,U,j,Y,X)}}}else if(P.visible){let D=x(R,P,_,E);R.onBeforeShadow(s,R,C,U,j,D,null),s.renderBufferDirect(U,null,j,D,R,null),R.onAfterShadow(s,R,C,U,j,D,null)}}let G=R.children;for(let j=0,P=G.length;j<P;j++)w(G[j],C,U,_,E)}function A(R){R.target.removeEventListener("dispose",A);for(let U in l){let _=l[U],E=R.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}function I_(s,t,e){let n=e.isWebGL2;function i(){let L=!1,st=new Gt,rt=null,Lt=new Gt(0,0,0,0);return{setMask:function(At){rt!==At&&!L&&(s.colorMask(At,At,At,At),rt=At)},setLocked:function(At){L=At},setClear:function(At,ae,ce,Ue,rn){rn===!0&&(At*=Ue,ae*=Ue,ce*=Ue),st.set(At,ae,ce,Ue),Lt.equals(st)===!1&&(s.clearColor(At,ae,ce,Ue),Lt.copy(st))},reset:function(){L=!1,rt=null,Lt.set(-1,0,0,0)}}}function r(){let L=!1,st=null,rt=null,Lt=null;return{setTest:function(At){At?Dt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(At){st!==At&&!L&&(s.depthMask(At),st=At)},setFunc:function(At){if(rt!==At){switch(At){case Zm:s.depthFunc(s.NEVER);break;case Jm:s.depthFunc(s.ALWAYS);break;case Qm:s.depthFunc(s.LESS);break;case ra:s.depthFunc(s.LEQUAL);break;case t0:s.depthFunc(s.EQUAL);break;case e0:s.depthFunc(s.GEQUAL);break;case n0:s.depthFunc(s.GREATER);break;case i0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=At}},setLocked:function(At){L=At},setClear:function(At){Lt!==At&&(s.clearDepth(At),Lt=At)},reset:function(){L=!1,st=null,rt=null,Lt=null}}}function o(){let L=!1,st=null,rt=null,Lt=null,At=null,ae=null,ce=null,Ue=null,rn=null;return{setTest:function(le){L||(le?Dt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(le){st!==le&&!L&&(s.stencilMask(le),st=le)},setFunc:function(le,on,ii){(rt!==le||Lt!==on||At!==ii)&&(s.stencilFunc(le,on,ii),rt=le,Lt=on,At=ii)},setOp:function(le,on,ii){(ae!==le||ce!==on||Ue!==ii)&&(s.stencilOp(le,on,ii),ae=le,ce=on,Ue=ii)},setLocked:function(le){L=le},setClear:function(le){rn!==le&&(s.clearStencil(le),rn=le)},reset:function(){L=!1,st=null,rt=null,Lt=null,At=null,ae=null,ce=null,Ue=null,rn=null}}}let a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,x=null,w=null,A=null,R=null,C=null,U=null,_=new _t(0,0,0),E=0,N=!1,G=null,j=null,P=null,D=null,H=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=W>=2);let Z=null,ct={},V=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),at=new Gt().fromArray(V),vt=new Gt().fromArray(K);function dt(L,st,rt,Lt){let At=new Uint8Array(4),ae=s.createTexture();s.bindTexture(L,ae),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ce=0;ce<rt;ce++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(st,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(st+ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return ae}let It={};It[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Dt(s.DEPTH_TEST),c.setFunc(ra),Bt(!1),T(Uu),Dt(s.CULL_FACE),gt(Vi);function Dt(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Et(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function jt(L,st){return f[L]!==st?(s.bindFramebuffer(L,st),f[L]=st,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=st),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=st)),!0):!1}function k(L,st){let rt=v,Lt=!1;if(L)if(rt=g.get(st),rt===void 0&&(rt=[],g.set(st,rt)),L.isWebGLMultipleRenderTargets){let At=L.texture;if(rt.length!==At.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,ce=At.length;ae<ce;ae++)rt[ae]=s.COLOR_ATTACHMENT0+ae;rt.length=At.length,Lt=!0}}else rt[0]!==s.COLOR_ATTACHMENT0&&(rt[0]=s.COLOR_ATTACHMENT0,Lt=!0);else rt[0]!==s.BACK&&(rt[0]=s.BACK,Lt=!0);Lt&&(e.isWebGL2?s.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function sn(L){return m!==L?(s.useProgram(L),m=L,!0):!1}let Tt={[fs]:s.FUNC_ADD,[km]:s.FUNC_SUBTRACT,[Om]:s.FUNC_REVERSE_SUBTRACT};if(n)Tt[Fu]=s.MIN,Tt[zu]=s.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(Tt[Fu]=L.MIN_EXT,Tt[zu]=L.MAX_EXT)}let Ut={[Fm]:s.ZERO,[zm]:s.ONE,[Bm]:s.SRC_COLOR,[wl]:s.SRC_ALPHA,[$m]:s.SRC_ALPHA_SATURATE,[Wm]:s.DST_COLOR,[Vm]:s.DST_ALPHA,[Hm]:s.ONE_MINUS_SRC_COLOR,[Sl]:s.ONE_MINUS_SRC_ALPHA,[Xm]:s.ONE_MINUS_DST_COLOR,[Gm]:s.ONE_MINUS_DST_ALPHA,[qm]:s.CONSTANT_COLOR,[Ym]:s.ONE_MINUS_CONSTANT_COLOR,[Km]:s.CONSTANT_ALPHA,[jm]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(L,st,rt,Lt,At,ae,ce,Ue,rn,le){if(L===Vi){p===!0&&(Et(s.BLEND),p=!1);return}if(p===!1&&(Dt(s.BLEND),p=!0),L!==Um){if(L!==y||le!==N){if((x!==fs||R!==fs)&&(s.blendEquation(s.FUNC_ADD),x=fs,R=fs),le)switch(L){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qs:s.blendFunc(s.ONE,s.ONE);break;case ku:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ou:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ku:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ou:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,A=null,C=null,U=null,_.set(0,0,0),E=0,y=L,N=le}return}At=At||st,ae=ae||rt,ce=ce||Lt,(st!==x||At!==R)&&(s.blendEquationSeparate(Tt[st],Tt[At]),x=st,R=At),(rt!==w||Lt!==A||ae!==C||ce!==U)&&(s.blendFuncSeparate(Ut[rt],Ut[Lt],Ut[ae],Ut[ce]),w=rt,A=Lt,C=ae,U=ce),(Ue.equals(_)===!1||rn!==E)&&(s.blendColor(Ue.r,Ue.g,Ue.b,rn),_.copy(Ue),E=rn),y=L,N=!1}function me(L,st){L.side===ln?Et(s.CULL_FACE):Dt(s.CULL_FACE);let rt=L.side===je;st&&(rt=!rt),Bt(rt),L.blending===js&&L.transparent===!1?gt(Vi):gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let Lt=L.stencilWrite;l.setTest(Lt),Lt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Dt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){G!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),G=L)}function T(L){L!==Im?(Dt(s.CULL_FACE),L!==j&&(L===Uu?s.cullFace(s.BACK):L===Dm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),j=L}function M(L){L!==P&&(X&&s.lineWidth(L),P=L)}function F(L,st,rt){L?(Dt(s.POLYGON_OFFSET_FILL),(D!==st||H!==rt)&&(s.polygonOffset(st,rt),D=st,H=rt)):Et(s.POLYGON_OFFSET_FILL)}function tt(L){L?Dt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Q(L){L===void 0&&(L=s.TEXTURE0+$-1),Z!==L&&(s.activeTexture(L),Z=L)}function et(L,st,rt){rt===void 0&&(Z===null?rt=s.TEXTURE0+$-1:rt=Z);let Lt=ct[rt];Lt===void 0&&(Lt={type:void 0,texture:void 0},ct[rt]=Lt),(Lt.type!==L||Lt.texture!==st)&&(Z!==rt&&(s.activeTexture(rt),Z=rt),s.bindTexture(L,st||It[L]),Lt.type=L,Lt.texture=st)}function xt(){let L=ct[Z];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ot(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(L){at.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),at.copy(L))}function te(L){vt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),vt.copy(L))}function _e(L,st){let rt=u.get(st);rt===void 0&&(rt=new WeakMap,u.set(st,rt));let Lt=rt.get(L);Lt===void 0&&(Lt=s.getUniformBlockIndex(st,L.name),rt.set(L,Lt))}function Wt(L,st){let Lt=u.get(st).get(L);h.get(st)!==Lt&&(s.uniformBlockBinding(st,Lt,L.__bindingPointIndex),h.set(st,Lt))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Z=null,ct={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,x=null,w=null,A=null,R=null,C=null,U=null,_=new _t(0,0,0),E=0,N=!1,G=null,j=null,P=null,D=null,H=null,at.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Dt,disable:Et,bindFramebuffer:jt,drawBuffers:k,useProgram:sn,setBlending:gt,setMaterial:me,setFlipSided:Bt,setCullFace:T,setLineWidth:M,setPolygonOffset:F,setScissorTest:tt,activeTexture:Q,bindTexture:et,unbindTexture:xt,compressedTexImage2D:ot,compressedTexImage3D:ht,texImage2D:wt,texImage3D:ut,updateUBOMapping:_e,uniformBlockBinding:Wt,texStorage2D:qt,texStorage3D:Nt,texSubImage2D:Ct,texSubImage3D:Ht,compressedTexSubImage2D:J,compressedTexSubImage3D:ee,scissor:Ft,viewport:te,reset:nt}}function D_(s,t,e,n,i,r,o){let a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):zr("canvas")}function v(T,M,F,tt){let Q=1;if((T.width>tt||T.height>tt)&&(Q=tt/Math.max(T.width,T.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let et=M?ua:Math.floor,xt=et(Q*T.width),ot=et(Q*T.height);u===void 0&&(u=g(xt,ot));let ht=F?g(xt,ot):u;return ht.width=xt,ht.height=ot,ht.getContext("2d").drawImage(T,0,0,xt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xt+"x"+ot+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Cl(T.width)&&Cl(T.height)}function p(T){return a?!1:T.wrapS!==_n||T.wrapT!==_n||T.minFilter!==Ce&&T.minFilter!==ve}function y(T,M){return T.generateMipmaps&&M&&T.minFilter!==Ce&&T.minFilter!==ve}function x(T){s.generateMipmap(T)}function w(T,M,F,tt,Q=!1){if(a===!1)return M;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=M;if(M===s.RED&&(F===s.FLOAT&&(et=s.R32F),F===s.HALF_FLOAT&&(et=s.R16F),F===s.UNSIGNED_BYTE&&(et=s.R8)),M===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(et=s.R8UI),F===s.UNSIGNED_SHORT&&(et=s.R16UI),F===s.UNSIGNED_INT&&(et=s.R32UI),F===s.BYTE&&(et=s.R8I),F===s.SHORT&&(et=s.R16I),F===s.INT&&(et=s.R32I)),M===s.RG&&(F===s.FLOAT&&(et=s.RG32F),F===s.HALF_FLOAT&&(et=s.RG16F),F===s.UNSIGNED_BYTE&&(et=s.RG8)),M===s.RGBA){let xt=Q?aa:Jt.getTransfer(tt);F===s.FLOAT&&(et=s.RGBA32F),F===s.HALF_FLOAT&&(et=s.RGBA16F),F===s.UNSIGNED_BYTE&&(et=xt===de?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function A(T,M,F){return y(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Ce&&T.minFilter!==ve?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){return T===Ce||T===oa||T===Dr?s.NEAREST:s.LINEAR}function C(T){let M=T.target;M.removeEventListener("dispose",C),_(M),M.isVideoTexture&&h.delete(M)}function U(T){let M=T.target;M.removeEventListener("dispose",U),N(M)}function _(T){let M=n.get(T);if(M.__webglInit===void 0)return;let F=T.source,tt=d.get(F);if(tt){let Q=tt[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(T),Object.keys(tt).length===0&&d.delete(F)}n.remove(T)}function E(T){let M=n.get(T);s.deleteTexture(M.__webglTexture);let F=T.source,tt=d.get(F);delete tt[M.__cacheKey],o.memory.textures--}function N(T){let M=T.texture,F=n.get(T),tt=n.get(M);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let et=0;et<F.__webglFramebuffer[Q].length;et++)s.deleteFramebuffer(F.__webglFramebuffer[Q][et]);else s.deleteFramebuffer(F.__webglFramebuffer[Q]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)s.deleteFramebuffer(F.__webglFramebuffer[Q]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Q=0,et=M.length;Q<et;Q++){let xt=n.get(M[Q]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(T)}let G=0;function j(){G=0}function P(){let T=G;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),G+=1,T}function D(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function H(T,M){let F=n.get(T);if(T.isVideoTexture&&me(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){let tt=T.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(F,T,M);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+M)}function $(T,M){let F=n.get(T);if(T.version>0&&F.__version!==T.version){at(F,T,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+M)}function X(T,M){let F=n.get(T);if(T.version>0&&F.__version!==T.version){at(F,T,M);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+M)}function W(T,M){let F=n.get(T);if(T.version>0&&F.__version!==T.version){vt(F,T,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+M)}let Y={[xs]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[Fr]:s.MIRRORED_REPEAT},Z={[Ce]:s.NEAREST,[oa]:s.NEAREST_MIPMAP_NEAREST,[Dr]:s.NEAREST_MIPMAP_LINEAR,[ve]:s.LINEAR,[rh]:s.LINEAR_MIPMAP_NEAREST,[ci]:s.LINEAR_MIPMAP_LINEAR},ct={[E0]:s.NEVER,[P0]:s.ALWAYS,[T0]:s.LESS,[ka]:s.LEQUAL,[A0]:s.EQUAL,[L0]:s.GEQUAL,[R0]:s.GREATER,[C0]:s.NOTEQUAL};function V(T,M,F){if(F?(s.texParameteri(T,s.TEXTURE_WRAP_S,Y[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Y[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Y[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,Z[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,Z[M.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==_n||M.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,R(M.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==Ce&&M.minFilter!==ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ct[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ce||M.minFilter!==Dr&&M.minFilter!==ci||M.type===Ei&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===Yn&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(T,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function K(T,M){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));let tt=M.source,Q=d.get(tt);Q===void 0&&(Q={},d.set(tt,Q));let et=D(M);if(et!==T.__cacheKey){Q[et]===void 0&&(Q[et]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[et].usedTimes++;let xt=Q[T.__cacheKey];xt!==void 0&&(Q[T.__cacheKey].usedTimes--,xt.usedTimes===0&&E(M)),T.__cacheKey=et,T.__webglTexture=Q[et].texture}return F}function at(T,M,F){let tt=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=s.TEXTURE_3D);let Q=K(T,M),et=M.source;e.bindTexture(tt,T.__webglTexture,s.TEXTURE0+F);let xt=n.get(et);if(et.version!==xt.__version||Q===!0){e.activeTexture(s.TEXTURE0+F);let ot=Jt.getPrimaries(Jt.workingColorSpace),ht=M.colorSpace===Ke?null:Jt.getPrimaries(M.colorSpace),Ct=M.colorSpace===Ke||ot===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Ht=p(M)&&m(M.image)===!1,J=v(M.image,Ht,!1,i.maxTextureSize);J=Bt(M,J);let ee=m(J)||a,qt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),wt=w(M.internalFormat,qt,Nt,M.colorSpace,M.isVideoTexture);V(tt,M,ee);let ut,Ft=M.mipmaps,te=a&&M.isVideoTexture!==!0&&wt!==Pf,_e=xt.__version===void 0||Q===!0,Wt=A(M,J,ee);if(M.isDepthTexture)wt=s.DEPTH_COMPONENT,a?M.type===Ei?wt=s.DEPTH_COMPONENT32F:M.type===Ln?wt=s.DEPTH_COMPONENT24:M.type===ms?wt=s.DEPTH24_STENCIL8:wt=s.DEPTH_COMPONENT16:M.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===gs&&wt===s.DEPTH_COMPONENT&&M.type!==oh&&M.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ln,Nt=r.convert(M.type)),M.format===nr&&wt===s.DEPTH_COMPONENT&&(wt=s.DEPTH_STENCIL,M.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ms,Nt=r.convert(M.type))),_e&&(te?e.texStorage2D(s.TEXTURE_2D,1,wt,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,wt,J.width,J.height,0,qt,Nt,null));else if(M.isDataTexture)if(Ft.length>0&&ee){te&&_e&&e.texStorage2D(s.TEXTURE_2D,Wt,wt,Ft[0].width,Ft[0].height);for(let nt=0,L=Ft.length;nt<L;nt++)ut=Ft[nt],te?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ut.width,ut.height,qt,Nt,ut.data):e.texImage2D(s.TEXTURE_2D,nt,wt,ut.width,ut.height,0,qt,Nt,ut.data);M.generateMipmaps=!1}else te?(_e&&e.texStorage2D(s.TEXTURE_2D,Wt,wt,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,qt,Nt,J.data)):e.texImage2D(s.TEXTURE_2D,0,wt,J.width,J.height,0,qt,Nt,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){te&&_e&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Wt,wt,Ft[0].width,Ft[0].height,J.depth);for(let nt=0,L=Ft.length;nt<L;nt++)ut=Ft[nt],M.format!==Ye?qt!==null?te?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,J.depth,qt,ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,wt,ut.width,ut.height,J.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,J.depth,qt,Nt,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,wt,ut.width,ut.height,J.depth,0,qt,Nt,ut.data)}else{te&&_e&&e.texStorage2D(s.TEXTURE_2D,Wt,wt,Ft[0].width,Ft[0].height);for(let nt=0,L=Ft.length;nt<L;nt++)ut=Ft[nt],M.format!==Ye?qt!==null?te?e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,ut.width,ut.height,qt,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,wt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ut.width,ut.height,qt,Nt,ut.data):e.texImage2D(s.TEXTURE_2D,nt,wt,ut.width,ut.height,0,qt,Nt,ut.data)}else if(M.isDataArrayTexture)te?(_e&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Wt,wt,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,qt,Nt,J.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,J.width,J.height,J.depth,0,qt,Nt,J.data);else if(M.isData3DTexture)te?(_e&&e.texStorage3D(s.TEXTURE_3D,Wt,wt,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,qt,Nt,J.data)):e.texImage3D(s.TEXTURE_3D,0,wt,J.width,J.height,J.depth,0,qt,Nt,J.data);else if(M.isFramebufferTexture){if(_e)if(te)e.texStorage2D(s.TEXTURE_2D,Wt,wt,J.width,J.height);else{let nt=J.width,L=J.height;for(let st=0;st<Wt;st++)e.texImage2D(s.TEXTURE_2D,st,wt,nt,L,0,qt,Nt,null),nt>>=1,L>>=1}}else if(Ft.length>0&&ee){te&&_e&&e.texStorage2D(s.TEXTURE_2D,Wt,wt,Ft[0].width,Ft[0].height);for(let nt=0,L=Ft.length;nt<L;nt++)ut=Ft[nt],te?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,qt,Nt,ut):e.texImage2D(s.TEXTURE_2D,nt,wt,qt,Nt,ut);M.generateMipmaps=!1}else te?(_e&&e.texStorage2D(s.TEXTURE_2D,Wt,wt,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,qt,Nt,J)):e.texImage2D(s.TEXTURE_2D,0,wt,qt,Nt,J);y(M,ee)&&x(tt),xt.__version=et.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function vt(T,M,F){if(M.image.length!==6)return;let tt=K(T,M),Q=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+F);let et=n.get(Q);if(Q.version!==et.__version||tt===!0){e.activeTexture(s.TEXTURE0+F);let xt=Jt.getPrimaries(Jt.workingColorSpace),ot=M.colorSpace===Ke?null:Jt.getPrimaries(M.colorSpace),ht=M.colorSpace===Ke||xt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ct=M.isCompressedTexture||M.image[0].isCompressedTexture,Ht=M.image[0]&&M.image[0].isDataTexture,J=[];for(let nt=0;nt<6;nt++)!Ct&&!Ht?J[nt]=v(M.image[nt],!1,!0,i.maxCubemapSize):J[nt]=Ht?M.image[nt].image:M.image[nt],J[nt]=Bt(M,J[nt]);let ee=J[0],qt=m(ee)||a,Nt=r.convert(M.format,M.colorSpace),wt=r.convert(M.type),ut=w(M.internalFormat,Nt,wt,M.colorSpace),Ft=a&&M.isVideoTexture!==!0,te=et.__version===void 0||tt===!0,_e=A(M,ee,qt);V(s.TEXTURE_CUBE_MAP,M,qt);let Wt;if(Ct){Ft&&te&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_e,ut,ee.width,ee.height);for(let nt=0;nt<6;nt++){Wt=J[nt].mipmaps;for(let L=0;L<Wt.length;L++){let st=Wt[L];M.format!==Ye?Nt!==null?Ft?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,0,0,st.width,st.height,Nt,st.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,ut,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,0,0,st.width,st.height,Nt,wt,st.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,ut,st.width,st.height,0,Nt,wt,st.data)}}}else{Wt=M.mipmaps,Ft&&te&&(Wt.length>0&&_e++,e.texStorage2D(s.TEXTURE_CUBE_MAP,_e,ut,J[0].width,J[0].height));for(let nt=0;nt<6;nt++)if(Ht){Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,J[nt].width,J[nt].height,Nt,wt,J[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ut,J[nt].width,J[nt].height,0,Nt,wt,J[nt].data);for(let L=0;L<Wt.length;L++){let rt=Wt[L].image[nt].image;Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,0,0,rt.width,rt.height,Nt,wt,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,ut,rt.width,rt.height,0,Nt,wt,rt.data)}}else{Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt,wt,J[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ut,Nt,wt,J[nt]);for(let L=0;L<Wt.length;L++){let st=Wt[L];Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,0,0,Nt,wt,st.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,ut,Nt,wt,st.image[nt])}}}y(M,qt)&&x(s.TEXTURE_CUBE_MAP),et.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function dt(T,M,F,tt,Q,et){let xt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ht=w(F.internalFormat,xt,ot,F.colorSpace);if(!n.get(M).__hasExternalTextures){let Ht=Math.max(1,M.width>>et),J=Math.max(1,M.height>>et);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,et,ht,Ht,J,M.depth,0,xt,ot,null):e.texImage2D(Q,et,ht,Ht,J,0,xt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),gt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Q,n.get(F).__webglTexture,0,Ut(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,Q,n.get(F).__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(T,M,F){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let tt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||gt(M)){let Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ei?tt=s.DEPTH_COMPONENT32F:Q.type===Ln&&(tt=s.DEPTH_COMPONENT24));let et=Ut(M);gt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,tt,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,et,tt,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,tt,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){let tt=Ut(M);F&&gt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,M.width,M.height):gt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{let tt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<tt.length;Q++){let et=tt[Q],xt=r.convert(et.format,et.colorSpace),ot=r.convert(et.type),ht=w(et.internalFormat,xt,ot,et.colorSpace),Ct=Ut(M);F&&gt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,ht,M.width,M.height):gt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,ht,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ht,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);let tt=n.get(M.depthTexture).__webglTexture,Q=Ut(M);if(M.depthTexture.format===gs)gt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(M.depthTexture.format===nr)gt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Et(T){let M=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Dt(M.__webglFramebuffer,T)}else if(F){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]=s.createRenderbuffer(),It(M.__webglDepthbuffer[tt],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),It(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(T,M,F){let tt=n.get(T);M!==void 0&&dt(tt.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Et(T)}function k(T){let M=T.texture,F=n.get(T),tt=n.get(M);T.addEventListener("dispose",U),T.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=M.version,o.memory.textures++);let Q=T.isWebGLCubeRenderTarget===!0,et=T.isWebGLMultipleRenderTargets===!0,xt=m(T)||a;if(Q){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ht=0;ht<M.mipmaps.length;ht++)F.__webglFramebuffer[ot][ht]=s.createFramebuffer()}else F.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)F.__webglFramebuffer[ot]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(et)if(i.drawBuffers){let ot=T.texture;for(let ht=0,Ct=ot.length;ht<Ct;ht++){let Ht=n.get(ot[ht]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&gt(T)===!1){let ot=et?M:[M];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ht=0;ht<ot.length;ht++){let Ct=ot[ht];F.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ht]);let Ht=r.convert(Ct.format,Ct.colorSpace),J=r.convert(Ct.type),ee=w(Ct.internalFormat,Ht,J,Ct.colorSpace,T.isXRRenderTarget===!0),qt=Ut(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,ee,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,F.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),It(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),V(s.TEXTURE_CUBE_MAP,M,xt);for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)dt(F.__webglFramebuffer[ot][ht],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else dt(F.__webglFramebuffer[ot],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);y(M,xt)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let ot=T.texture;for(let ht=0,Ct=ot.length;ht<Ct;ht++){let Ht=ot[ht],J=n.get(Ht);e.bindTexture(s.TEXTURE_2D,J.__webglTexture),V(s.TEXTURE_2D,Ht,xt),dt(F.__webglFramebuffer,T,Ht,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),y(Ht,xt)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ot=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,tt.__webglTexture),V(ot,M,xt),a&&M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)dt(F.__webglFramebuffer[ht],T,M,s.COLOR_ATTACHMENT0,ot,ht);else dt(F.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,ot,0);y(M,xt)&&x(ot),e.unbindTexture()}T.depthBuffer&&Et(T)}function sn(T){let M=m(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let tt=0,Q=F.length;tt<Q;tt++){let et=F[tt];if(y(et,M)){let xt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ot=n.get(et).__webglTexture;e.bindTexture(xt,ot),x(xt),e.unbindTexture()}}}function Tt(T){if(a&&T.samples>0&&gt(T)===!1){let M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,tt=T.height,Q=s.COLOR_BUFFER_BIT,et=[],xt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=n.get(T),ht=T.isWebGLMultipleRenderTargets===!0;if(ht)for(let Ct=0;Ct<M.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let Ct=0;Ct<M.length;Ct++){et.push(s.COLOR_ATTACHMENT0+Ct),T.depthBuffer&&et.push(xt);let Ht=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Ht===!1&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ht&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ot.__webglColorRenderbuffer[Ct]),Ht===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xt])),ht){let J=n.get(M[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,F,tt,0,0,F,tt,Q,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let Ct=0;Ct<M.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,ot.__webglColorRenderbuffer[Ct]);let Ht=n.get(M[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Ut(T){return Math.min(i.maxSamples,T.samples)}function gt(T){let M=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(T){let M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Bt(T,M){let F=T.colorSpace,tt=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Rl||F!==Ie&&F!==Ke&&(Jt.getTransfer(F)===de?a===!1?t.has("EXT_sRGB")===!0&&tt===Ye?(T.format=Rl,T.minFilter=ve,T.generateMipmaps=!1):M=da.sRGBToLinear(M):(tt!==Ye||Q!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}this.allocateTextureUnit=P,this.resetTextureUnits=j,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=jt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=sn,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=gt}function N_(s,t,e){let n=e.isWebGL2;function i(r,o=Ke){let a,c=Jt.getTransfer(o);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Tf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Af)return s.UNSIGNED_SHORT_5_5_5_1;if(r===f0)return s.BYTE;if(r===p0)return s.SHORT;if(r===oh)return s.UNSIGNED_SHORT;if(r===Ef)return s.INT;if(r===Ln)return s.UNSIGNED_INT;if(r===Ei)return s.FLOAT;if(r===Yn)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===m0)return s.ALPHA;if(r===Ye)return s.RGBA;if(r===g0)return s.LUMINANCE;if(r===v0)return s.LUMINANCE_ALPHA;if(r===gs)return s.DEPTH_COMPONENT;if(r===nr)return s.DEPTH_STENCIL;if(r===Rl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===x0)return s.RED;if(r===Rf)return s.RED_INTEGER;if(r===y0)return s.RG;if(r===Cf)return s.RG_INTEGER;if(r===Lf)return s.RGBA_INTEGER;if(r===Wc||r===Xc||r===$c||r===qc)if(c===de)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Wc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Wc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hu||r===Vu||r===Gu||r===Wu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Hu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xu||r===$u)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Xu)return c===de?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$u)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qu||r===Yu||r===Ku||r===ju||r===Zu||r===Ju||r===Qu||r===td||r===ed||r===nd||r===id||r===sd||r===rd||r===od)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===qu)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yu)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ku)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ju)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zu)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ju)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qu)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===td)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ed)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nd)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===id)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sd)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rd)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===od)return c===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yc||r===ad||r===cd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Yc)return c===de?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ad)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_0||r===ld||r===hd||r===ud)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Yc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ld)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ud)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ms?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Hl=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},we=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},U_={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Vl=class extends Wi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,v=e.getContextAttributes(),m=null,p=null,y=[],x=[],w=new ft,A=null,R=new Le;R.layers.enable(1),R.viewport=new Gt;let C=new Le;C.layers.enable(2),C.viewport=new Gt;let U=[R,C],_=new Hl;_.layers.enable(1),_.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=y[V];return K===void 0&&(K=new Or,y[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=y[V];return K===void 0&&(K=new Or,y[V]=K),K.getGripSpace()},this.getHand=function(V){let K=y[V];return K===void 0&&(K=new Or,y[V]=K),K.getHandSpace()};function G(V){let K=x.indexOf(V.inputSource);if(K===-1)return;let at=y[K];at!==void 0&&(at.update(V.inputSource,V.frame,l||o),at.dispatchEvent({type:V.type,data:V.inputSource}))}function j(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",P);for(let V=0;V<y.length;V++){let K=x[V];K!==null&&(x[V]=null,y[V].disconnect(K))}E=null,N=null,t.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",j),i.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Fe(f.framebufferWidth,f.framebufferHeight,{format:Ye,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,at=null,vt=null;v.depth&&(vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=v.stencil?nr:gs,at=v.stencil?ms:Ln);let dt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(dt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Fe(d.textureWidth,d.textureHeight,{format:Ye,type:Gi,depthTexture:new $i(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let It=t.properties.get(p);It.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(V){for(let K=0;K<V.removed.length;K++){let at=V.removed[K],vt=x.indexOf(at);vt>=0&&(x[vt]=null,y[vt].disconnect(at))}for(let K=0;K<V.added.length;K++){let at=V.added[K],vt=x.indexOf(at);if(vt===-1){for(let It=0;It<y.length;It++)if(It>=x.length){x.push(at),vt=It;break}else if(x[It]===null){x[It]=at,vt=It;break}if(vt===-1)break}let dt=y[vt];dt&&dt.connect(at)}}let D=new b,H=new b;function $(V,K,at){D.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(at.matrixWorld);let vt=D.distanceTo(H),dt=K.projectionMatrix.elements,It=at.projectionMatrix.elements,Dt=dt[14]/(dt[10]-1),Et=dt[14]/(dt[10]+1),jt=(dt[9]+1)/dt[5],k=(dt[9]-1)/dt[5],sn=(dt[8]-1)/dt[0],Tt=(It[8]+1)/It[0],Ut=Dt*sn,gt=Dt*Tt,me=vt/(-sn+Tt),Bt=me*-sn;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Bt),V.translateZ(me),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let T=Dt+me,M=Et+me,F=Ut-Bt,tt=gt+(vt-Bt),Q=jt*Et/M*T,et=k*Et/M*T;V.projectionMatrix.makePerspective(F,tt,Q,et,T,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;_.near=C.near=R.near=V.near,_.far=C.far=R.far=V.far,(E!==_.near||N!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,N=_.far);let K=V.parent,at=_.cameras;X(_,K);for(let vt=0;vt<at.length;vt++)X(at[vt],K);at.length===2?$(_,R,C):_.projectionMatrix.copy(R.projectionMatrix),W(V,_,K)};function W(V,K,at){at===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(at.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=sr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let Y=null;function Z(V,K){if(h=K.getViewerPose(l||o),g=K,h!==null){let at=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let vt=!1;at.length!==_.cameras.length&&(_.cameras.length=0,vt=!0);for(let dt=0;dt<at.length;dt++){let It=at[dt],Dt=null;if(f!==null)Dt=f.getViewport(It);else{let jt=u.getViewSubImage(d,It);Dt=jt.viewport,dt===0&&(t.setRenderTargetTextures(p,jt.colorTexture,d.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(p))}let Et=U[dt];Et===void 0&&(Et=new Le,Et.layers.enable(dt),Et.viewport=new Gt,U[dt]=Et),Et.matrix.fromArray(It.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(It.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),dt===0&&(_.matrix.copy(Et.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),vt===!0&&_.cameras.push(Et)}}for(let at=0;at<y.length;at++){let vt=x[at],dt=y[at];vt!==null&&dt!==void 0&&dt.update(vt,K,l||o)}Y&&Y(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ct=new Ff;ct.setAnimationLoop(Z),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}};function k_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Of(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function O_(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let w=x.program;n.uniformBlockBinding(y,w)}function l(y,x){let w=i[y.id];w===void 0&&(g(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",m));let A=x.program;n.updateUBOMapping(y,A);let R=t.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){let x=u();y.__bindingPointIndex=x;let w=s.createBuffer(),A=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,A,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,w),w}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=i[y.id],w=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,C=w.length;R<C;R++){let U=Array.isArray(w[R])?w[R]:[w[R]];for(let _=0,E=U.length;_<E;_++){let N=U[_];if(f(N,R,_,A)===!0){let G=N.__offset,j=Array.isArray(N.value)?N.value:[N.value],P=0;for(let D=0;D<j.length;D++){let H=j[D],$=v(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+P,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,w,A){let R=y.value,C=x+"_"+w;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{let U=A[C];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return A[C]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(y){let x=y.uniforms,w=0,A=16;for(let C=0,U=x.length;C<U;C++){let _=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,N=_.length;E<N;E++){let G=_[E],j=Array.isArray(G.value)?G.value:[G.value];for(let P=0,D=j.length;P<D;P++){let H=j[P],$=v(H),X=w%A;X!==0&&A-X<$.boundary&&(w+=A-X),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=$.storage}}}let R=w%A;return R>0&&(w+=A-R),y.__size=w,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Gr=class{constructor(t={}){let{canvas:e=$0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=se,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;let x=this,w=!1,A=0,R=0,C=null,U=-1,_=null,E=new Gt,N=new Gt,G=null,j=new _t(0),P=0,D=e.width,H=e.height,$=1,X=null,W=null,Y=new Gt(0,0,D,H),Z=new Gt(0,0,D,H),ct=!1,V=new Hr,K=!1,at=!1,vt=null,dt=new mt,It=new ft,Dt=new b,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function jt(){return C===null?$:1}let k=n;function sn(S,I){for(let z=0;z<S.length;z++){let B=S[z],O=e.getContext(B,I);if(O!==null)return O}return null}try{let S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sh}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",st,!1),k===null){let I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),k=sn(I,S),k===null)throw sn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Tt,Ut,gt,me,Bt,T,M,F,tt,Q,et,xt,ot,ht,Ct,Ht,J,ee,qt,Nt,wt,ut,Ft,te;function _e(){Tt=new ny(k),Ut=new jx(k,Tt,t),Tt.init(Ut),ut=new N_(k,Tt,Ut),gt=new I_(k,Tt,Ut),me=new ry(k),Bt=new __,T=new D_(k,Tt,gt,Bt,Ut,ut,me),M=new Jx(x),F=new ey(x),tt=new fg(k,Ut),Ft=new Yx(k,Tt,tt,Ut),Q=new iy(k,tt,me,Ft),et=new ly(k,Q,tt,me),qt=new cy(k,Ut,T),Ht=new Zx(Bt),xt=new y_(x,M,F,Tt,Ut,Ft,Ht),ot=new k_(x,Bt),ht=new M_,Ct=new R_(Tt,Ut),ee=new qx(x,M,F,gt,et,d,c),J=new P_(x,et,Ut),te=new O_(k,me,Ut,gt),Nt=new Kx(k,Tt,me,Ut),wt=new sy(k,Tt,me,Ut),me.programs=xt.programs,x.capabilities=Ut,x.extensions=Tt,x.properties=Bt,x.renderLists=ht,x.shadowMap=J,x.state=gt,x.info=me}_e();let Wt=new Vl(x,k);this.xr=Wt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=Tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(D,H,!1))},this.getSize=function(S){return S.set(D,H)},this.setSize=function(S,I,z=!0){if(Wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=S,H=I,e.width=Math.floor(S*$),e.height=Math.floor(I*$),z===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(D*$,H*$).floor()},this.setDrawingBufferSize=function(S,I,z){D=S,H=I,$=z,e.width=Math.floor(S*z),e.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,I,z,B){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,I,z,B),gt.viewport(E.copy(Y).multiplyScalar($).floor())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,I,z,B){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,I,z,B),gt.scissor(N.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){gt.setScissorTest(ct=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(S=!0,I=!0,z=!0){let B=0;if(S){let O=!1;if(C!==null){let lt=C.texture.format;O=lt===Lf||lt===Cf||lt===Rf}if(O){let lt=C.texture.type,yt=lt===Gi||lt===Ln||lt===oh||lt===ms||lt===Tf||lt===Af,Rt=ee.getClearColor(),Pt=ee.getClearAlpha(),Vt=Rt.r,kt=Rt.g,Ot=Rt.b;yt?(f[0]=Vt,f[1]=kt,f[2]=Ot,f[3]=Pt,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=Vt,g[1]=kt,g[2]=Ot,g[3]=Pt,k.clearBufferiv(k.COLOR,0,g))}else B|=k.COLOR_BUFFER_BIT}I&&(B|=k.DEPTH_BUFFER_BIT),z&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ht.dispose(),Ct.dispose(),Bt.dispose(),M.dispose(),F.dispose(),et.dispose(),Ft.dispose(),te.dispose(),xt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",rn),Wt.removeEventListener("sessionend",le),vt&&(vt.dispose(),vt=null),on.stop()};function nt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let S=me.autoReset,I=J.enabled,z=J.autoUpdate,B=J.needsUpdate,O=J.type;_e(),me.autoReset=S,J.enabled=I,J.autoUpdate=z,J.needsUpdate=B,J.type=O}function st(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function rt(S){let I=S.target;I.removeEventListener("dispose",rt),Lt(I)}function Lt(S){At(S),Bt.remove(S)}function At(S){let I=Bt.get(S).programs;I!==void 0&&(I.forEach(function(z){xt.releaseProgram(z)}),S.isShaderMaterial&&xt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,B,O,lt){I===null&&(I=Et);let yt=O.isMesh&&O.matrixWorld.determinant()<0,Rt=Rm(S,I,z,B,O);gt.setMaterial(B,yt);let Pt=z.index,Vt=1;if(B.wireframe===!0){if(Pt=Q.getWireframeAttribute(z),Pt===void 0)return;Vt=2}let kt=z.drawRange,Ot=z.attributes.position,Me=kt.start*Vt,vn=(kt.start+kt.count)*Vt;lt!==null&&(Me=Math.max(Me,lt.start*Vt),vn=Math.min(vn,(lt.start+lt.count)*Vt)),Pt!==null?(Me=Math.max(Me,0),vn=Math.min(vn,Pt.count)):Ot!=null&&(Me=Math.max(Me,0),vn=Math.min(vn,Ot.count));let ke=vn-Me;if(ke<0||ke===1/0)return;Ft.setup(O,B,Rt,z,Pt);let vi,ge=Nt;if(Pt!==null&&(vi=tt.get(Pt),ge=wt,ge.setIndex(vi)),O.isMesh)B.wireframe===!0?(gt.setLineWidth(B.wireframeLinewidth*jt()),ge.setMode(k.LINES)):ge.setMode(k.TRIANGLES);else if(O.isLine){let Xt=B.linewidth;Xt===void 0&&(Xt=1),gt.setLineWidth(Xt*jt()),O.isLineSegments?ge.setMode(k.LINES):O.isLineLoop?ge.setMode(k.LINE_LOOP):ge.setMode(k.LINE_STRIP)}else O.isPoints?ge.setMode(k.POINTS):O.isSprite&&ge.setMode(k.TRIANGLES);if(O.isBatchedMesh)ge.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ge.renderInstances(Me,ke,O.count);else if(z.isInstancedBufferGeometry){let Xt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Bc=Math.min(z.instanceCount,Xt);ge.renderInstances(Me,ke,Bc)}else ge.render(Me,ke)};function ae(S,I,z){S.transparent===!0&&S.side===ln&&S.forceSinglePass===!1?(S.side=je,S.needsUpdate=!0,Lo(S,I,z),S.side=ai,S.needsUpdate=!0,Lo(S,I,z),S.side=ln):Lo(S,I,z)}this.compile=function(S,I,z=null){z===null&&(z=S),m=Ct.get(z),m.init(),y.push(m),z.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),S!==z&&S.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(x._useLegacyLights);let B=new Set;return S.traverse(function(O){let lt=O.material;if(lt)if(Array.isArray(lt))for(let yt=0;yt<lt.length;yt++){let Rt=lt[yt];ae(Rt,z,O),B.add(Rt)}else ae(lt,z,O),B.add(lt)}),y.pop(),m=null,B},this.compileAsync=function(S,I,z=null){let B=this.compile(S,I,z);return new Promise(O=>{function lt(){if(B.forEach(function(yt){Bt.get(yt).currentProgram.isReady()&&B.delete(yt)}),B.size===0){O(S);return}setTimeout(lt,10)}Tt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ce=null;function Ue(S){ce&&ce(S)}function rn(){on.stop()}function le(){on.start()}let on=new Ff;on.setAnimationLoop(Ue),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(S){ce=S,Wt.setAnimationLoop(S),S===null?on.stop():on.start()},Wt.addEventListener("sessionstart",rn),Wt.addEventListener("sessionend",le),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(I),I=Wt.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,C),m=Ct.get(S,y.length),m.init(),y.push(m),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(dt),at=this.localClippingEnabled,K=Ht.init(this.clippingPlanes,at),v=ht.get(S,p.length),v.init(),p.push(v),ii(S,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(X,W),this.info.render.frame++,K===!0&&Ht.beginShadows();let z=m.state.shadowsArray;if(J.render(z,S,I),K===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(v,S),m.setupLights(x._useLegacyLights),I.isArrayCamera){let B=I.cameras;for(let O=0,lt=B.length;O<lt;O++){let yt=B[O];Cu(v,S,yt,yt.viewport)}}else Cu(v,S,I);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(x,S,I),Ft.resetDefaultState(),U=-1,_=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ii(S,I,z,B){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){B&&Dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);let yt=et.update(S),Rt=S.material;Rt.visible&&v.push(S,yt,Rt,z,Dt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){let yt=et.update(S),Rt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Dt.copy(S.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Dt.copy(yt.boundingSphere.center)),Dt.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(Rt)){let Pt=yt.groups;for(let Vt=0,kt=Pt.length;Vt<kt;Vt++){let Ot=Pt[Vt],Me=Rt[Ot.materialIndex];Me&&Me.visible&&v.push(S,yt,Me,z,Dt.z,Ot)}}else Rt.visible&&v.push(S,yt,Rt,z,Dt.z,null)}}let lt=S.children;for(let yt=0,Rt=lt.length;yt<Rt;yt++)ii(lt[yt],I,z,B)}function Cu(S,I,z,B){let O=S.opaque,lt=S.transmissive,yt=S.transparent;m.setupLightsView(z),K===!0&&Ht.setGlobalState(x.clippingPlanes,z),lt.length>0&&Am(O,lt,I,z),B&&gt.viewport(E.copy(B)),O.length>0&&Co(O,I,z),lt.length>0&&Co(lt,I,z),yt.length>0&&Co(yt,I,z),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Am(S,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let lt=Ut.isWebGL2;vt===null&&(vt=new Fe(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?Yn:Gi,minFilter:ci,samples:lt?4:0})),x.getDrawingBufferSize(It),lt?vt.setSize(It.x,It.y):vt.setSize(ua(It.x),ua(It.y));let yt=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(j),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Rt=x.toneMapping;x.toneMapping=oi,Co(S,z,B),T.updateMultisampleRenderTarget(vt),T.updateRenderTargetMipmap(vt);let Pt=!1;for(let Vt=0,kt=I.length;Vt<kt;Vt++){let Ot=I[Vt],Me=Ot.object,vn=Ot.geometry,ke=Ot.material,vi=Ot.group;if(ke.side===ln&&Me.layers.test(B.layers)){let ge=ke.side;ke.side=je,ke.needsUpdate=!0,Lu(Me,z,B,vn,ke,vi),ke.side=ge,ke.needsUpdate=!0,Pt=!0}}Pt===!0&&(T.updateMultisampleRenderTarget(vt),T.updateRenderTargetMipmap(vt)),x.setRenderTarget(yt),x.setClearColor(j,P),x.toneMapping=Rt}function Co(S,I,z){let B=I.isScene===!0?I.overrideMaterial:null;for(let O=0,lt=S.length;O<lt;O++){let yt=S[O],Rt=yt.object,Pt=yt.geometry,Vt=B===null?yt.material:B,kt=yt.group;Rt.layers.test(z.layers)&&Lu(Rt,I,z,Pt,Vt,kt)}}function Lu(S,I,z,B,O,lt){S.onBeforeRender(x,I,z,B,O,lt),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(x,I,z,B,S,lt),O.transparent===!0&&O.side===ln&&O.forceSinglePass===!1?(O.side=je,O.needsUpdate=!0,x.renderBufferDirect(z,I,B,O,S,lt),O.side=ai,O.needsUpdate=!0,x.renderBufferDirect(z,I,B,O,S,lt),O.side=ln):x.renderBufferDirect(z,I,B,O,S,lt),S.onAfterRender(x,I,z,B,O,lt)}function Lo(S,I,z){I.isScene!==!0&&(I=Et);let B=Bt.get(S),O=m.state.lights,lt=m.state.shadowsArray,yt=O.state.version,Rt=xt.getParameters(S,O.state,lt,I,z),Pt=xt.getProgramCacheKey(Rt),Vt=B.programs;B.environment=S.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(S.isMeshStandardMaterial?F:M).get(S.envMap||B.environment),Vt===void 0&&(S.addEventListener("dispose",rt),Vt=new Map,B.programs=Vt);let kt=Vt.get(Pt);if(kt!==void 0){if(B.currentProgram===kt&&B.lightsStateVersion===yt)return Iu(S,Rt),kt}else Rt.uniforms=xt.getUniforms(S),S.onBuild(z,Rt,x),S.onBeforeCompile(Rt,x),kt=xt.acquireProgram(Rt,Pt),Vt.set(Pt,kt),B.uniforms=Rt.uniforms;let Ot=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ot.clippingPlanes=Ht.uniform),Iu(S,Rt),B.needsLights=Lm(S),B.lightsStateVersion=yt,B.needsLights&&(Ot.ambientLightColor.value=O.state.ambient,Ot.lightProbe.value=O.state.probe,Ot.directionalLights.value=O.state.directional,Ot.directionalLightShadows.value=O.state.directionalShadow,Ot.spotLights.value=O.state.spot,Ot.spotLightShadows.value=O.state.spotShadow,Ot.rectAreaLights.value=O.state.rectArea,Ot.ltc_1.value=O.state.rectAreaLTC1,Ot.ltc_2.value=O.state.rectAreaLTC2,Ot.pointLights.value=O.state.point,Ot.pointLightShadows.value=O.state.pointShadow,Ot.hemisphereLights.value=O.state.hemi,Ot.directionalShadowMap.value=O.state.directionalShadowMap,Ot.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ot.spotShadowMap.value=O.state.spotShadowMap,Ot.spotLightMatrix.value=O.state.spotLightMatrix,Ot.spotLightMap.value=O.state.spotLightMap,Ot.pointShadowMap.value=O.state.pointShadowMap,Ot.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=kt,B.uniformsList=null,kt}function Pu(S){if(S.uniformsList===null){let I=S.currentProgram.getUniforms();S.uniformsList=Js.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Iu(S,I){let z=Bt.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Rm(S,I,z,B,O){I.isScene!==!0&&(I=Et),T.resetTextureUnits();let lt=I.fog,yt=B.isMeshStandardMaterial?I.environment:null,Rt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ie,Pt=(B.isMeshStandardMaterial?F:M).get(B.envMap||yt),Vt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,kt=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ot=!!z.morphAttributes.position,Me=!!z.morphAttributes.normal,vn=!!z.morphAttributes.color,ke=oi;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ke=x.toneMapping);let vi=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ge=vi!==void 0?vi.length:0,Xt=Bt.get(B),Bc=m.state.lights;if(K===!0&&(at===!0||S!==_)){let Rn=S===_&&B.id===U;Ht.setState(B,S,Rn)}let be=!1;B.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Bc.state.version||Xt.outputColorSpace!==Rt||O.isBatchedMesh&&Xt.batching===!1||!O.isBatchedMesh&&Xt.batching===!0||O.isInstancedMesh&&Xt.instancing===!1||!O.isInstancedMesh&&Xt.instancing===!0||O.isSkinnedMesh&&Xt.skinning===!1||!O.isSkinnedMesh&&Xt.skinning===!0||O.isInstancedMesh&&Xt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Xt.instancingColor===!1&&O.instanceColor!==null||Xt.envMap!==Pt||B.fog===!0&&Xt.fog!==lt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Ht.numPlanes||Xt.numIntersection!==Ht.numIntersection)||Xt.vertexAlphas!==Vt||Xt.vertexTangents!==kt||Xt.morphTargets!==Ot||Xt.morphNormals!==Me||Xt.morphColors!==vn||Xt.toneMapping!==ke||Ut.isWebGL2===!0&&Xt.morphTargetsCount!==ge)&&(be=!0):(be=!0,Xt.__version=B.version);let os=Xt.currentProgram;be===!0&&(os=Lo(B,I,O));let Du=!1,Er=!1,Hc=!1,We=os.getUniforms(),as=Xt.uniforms;if(gt.useProgram(os.program)&&(Du=!0,Er=!0,Hc=!0),B.id!==U&&(U=B.id,Er=!0),Du||_!==S){We.setValue(k,"projectionMatrix",S.projectionMatrix),We.setValue(k,"viewMatrix",S.matrixWorldInverse);let Rn=We.map.cameraPosition;Rn!==void 0&&Rn.setValue(k,Dt.setFromMatrixPosition(S.matrixWorld)),Ut.logarithmicDepthBuffer&&We.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&We.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,Er=!0,Hc=!0)}if(O.isSkinnedMesh){We.setOptional(k,O,"bindMatrix"),We.setOptional(k,O,"bindMatrixInverse");let Rn=O.skeleton;Rn&&(Ut.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),We.setValue(k,"boneTexture",Rn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(We.setOptional(k,O,"batchingTexture"),We.setValue(k,"batchingTexture",O._matricesTexture,T));let Vc=z.morphAttributes;if((Vc.position!==void 0||Vc.normal!==void 0||Vc.color!==void 0&&Ut.isWebGL2===!0)&&qt.update(O,z,os),(Er||Xt.receiveShadow!==O.receiveShadow)&&(Xt.receiveShadow=O.receiveShadow,We.setValue(k,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(as.envMap.value=Pt,as.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Er&&(We.setValue(k,"toneMappingExposure",x.toneMappingExposure),Xt.needsLights&&Cm(as,Hc),lt&&B.fog===!0&&ot.refreshFogUniforms(as,lt),ot.refreshMaterialUniforms(as,B,$,H,vt),Js.upload(k,Pu(Xt),as,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Js.upload(k,Pu(Xt),as,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&We.setValue(k,"center",O.center),We.setValue(k,"modelViewMatrix",O.modelViewMatrix),We.setValue(k,"normalMatrix",O.normalMatrix),We.setValue(k,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Rn=B.uniformsGroups;for(let Gc=0,Pm=Rn.length;Gc<Pm;Gc++)if(Ut.isWebGL2){let Nu=Rn[Gc];te.update(Nu,os),te.bind(Nu,os)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return os}function Cm(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Lm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,I,z){Bt.get(S.texture).__webglTexture=I,Bt.get(S.depthTexture).__webglTexture=z;let B=Bt.get(S);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){let z=Bt.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){C=S,A=I,R=z;let B=!0,O=null,lt=!1,yt=!1;if(S){let Pt=Bt.get(S);Pt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(k.FRAMEBUFFER,null),B=!1):Pt.__webglFramebuffer===void 0?T.setupRenderTarget(S):Pt.__hasExternalTextures&&T.rebindTextures(S,Bt.get(S.texture).__webglTexture,Bt.get(S.depthTexture).__webglTexture);let Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(yt=!0);let kt=Bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(kt[I])?O=kt[I][z]:O=kt[I],lt=!0):Ut.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?O=Bt.get(S).__webglMultisampledFramebuffer:Array.isArray(kt)?O=kt[z]:O=kt,E.copy(S.viewport),N.copy(S.scissor),G=S.scissorTest}else E.copy(Y).multiplyScalar($).floor(),N.copy(Z).multiplyScalar($).floor(),G=ct;if(gt.bindFramebuffer(k.FRAMEBUFFER,O)&&Ut.drawBuffers&&B&&gt.drawBuffers(S,O),gt.viewport(E),gt.scissor(N),gt.setScissorTest(G),lt){let Pt=Bt.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pt.__webglTexture,z)}else if(yt){let Pt=Bt.get(S.texture),Vt=I||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,z||0,Vt)}U=-1},this.readRenderTargetPixels=function(S,I,z,B,O,lt,yt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){gt.bindFramebuffer(k.FRAMEBUFFER,Rt);try{let Pt=S.texture,Vt=Pt.format,kt=Pt.type;if(Vt!==Ye&&ut.convert(Vt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ot=kt===Yn&&(Tt.has("EXT_color_buffer_half_float")||Ut.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(kt!==Gi&&ut.convert(kt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===Ei&&(Ut.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-B&&z>=0&&z<=S.height-O&&k.readPixels(I,z,B,O,ut.convert(Vt),ut.convert(kt),lt)}finally{let Pt=C!==null?Bt.get(C).__webglFramebuffer:null;gt.bindFramebuffer(k.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(S,I,z=0){let B=Math.pow(2,-z),O=Math.floor(I.image.width*B),lt=Math.floor(I.image.height*B);T.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,z,0,0,S.x,S.y,O,lt),gt.unbindTexture()},this.copyTextureToTexture=function(S,I,z,B=0){let O=I.image.width,lt=I.image.height,yt=ut.convert(z.format),Rt=ut.convert(z.type);T.setTexture2D(z,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,B,S.x,S.y,O,lt,yt,Rt,I.image.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,B,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,yt,I.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,B,S.x,S.y,yt,Rt,I.image),B===0&&z.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,z,B,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let lt=S.max.x-S.min.x+1,yt=S.max.y-S.min.y+1,Rt=S.max.z-S.min.z+1,Pt=ut.convert(B.format),Vt=ut.convert(B.type),kt;if(B.isData3DTexture)T.setTexture3D(B,0),kt=k.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)T.setTexture2DArray(B,0),kt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let Ot=k.getParameter(k.UNPACK_ROW_LENGTH),Me=k.getParameter(k.UNPACK_IMAGE_HEIGHT),vn=k.getParameter(k.UNPACK_SKIP_PIXELS),ke=k.getParameter(k.UNPACK_SKIP_ROWS),vi=k.getParameter(k.UNPACK_SKIP_IMAGES),ge=z.isCompressedTexture?z.mipmaps[O]:z.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ge.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ge.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,S.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,S.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,S.min.z),z.isDataTexture||z.isData3DTexture?k.texSubImage3D(kt,O,I.x,I.y,I.z,lt,yt,Rt,Pt,Vt,ge.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(kt,O,I.x,I.y,I.z,lt,yt,Rt,Pt,ge.data)):k.texSubImage3D(kt,O,I.x,I.y,I.z,lt,yt,Rt,Pt,Vt,ge),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Me),k.pixelStorei(k.UNPACK_SKIP_PIXELS,vn),k.pixelStorei(k.UNPACK_SKIP_ROWS,ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,vi),O===0&&B.generateMipmaps&&k.generateMipmap(kt),gt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),gt.unbindTexture()},this.resetState=function(){A=0,R=0,C=null,gt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ah?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Ua?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===se?vs:Df}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===vs?se:Ie}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Gl=class extends Gr{};Gl.prototype.isWebGL1Renderer=!0;var Sn=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Wr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new b,Xr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ef=new b,nf=new Gt,sf=new Gt,F_=new b,rf=new mt,Qo=new b,xl=new bn,of=new mt,yl=new _s,ya=class extends Kt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bu,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Qo),this.boundingBox.expandByPoint(Qo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Qo),this.boundingSphere.expandByPoint(Qo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xl.copy(this.boundingSphere),xl.applyMatrix4(i),t.ray.intersectsSphere(xl)!==!1&&(of.copy(i).invert(),yl.copy(t.ray).applyMatrix4(of),!(this.boundingBox!==null&&yl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,yl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Gt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Bu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===d0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;nf.fromBufferAttribute(i.attributes.skinIndex,t),sf.fromBufferAttribute(i.attributes.skinWeight,t),ef.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=sf.getComponent(r);if(o!==0){let a=nf.getComponent(r);rf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(F_.copy(ef).applyMatrix4(rf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},$r=class extends xe{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wl=class extends Ze{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ce,h=Ce,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},af=new mt,z_=new mt,_a=class s{constructor(t=[],e=[]){this.uuid=qn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new mt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:z_;af.multiplyMatrices(a,e[r]),af.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Wl(e,t,t,Ye,Ei);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $r),this.bones.push(o),this.boneInverses.push(new mt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},dn=class extends Pe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$s=new mt,cf=new mt,ta=[],lf=new Pn,B_=new mt,Lr=new Kt,Pr=new bn,Qe=class extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,B_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),lf.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(lf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Pr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),t.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$s),cf.multiplyMatrices(n,$s),Lr.matrixWorld=cf,Lr.raycast(t,ta);for(let o=0,a=ta.length;o<a;o++){let c=ta[o];c.instanceId=r,c.object=this,e.push(c)}ta.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dn(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var qr=class extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},hf=new b,uf=new b,df=new mt,_l=new _s,ea=new bn,ar=class extends xe{constructor(t=new ye,e=new qr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)hf.fromBufferAttribute(e,i-1),uf.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=hf.distanceTo(uf);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;df.copy(i).invert(),_l.copy(t.ray).applyMatrix4(df);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new b,h=new b,u=new b,d=new b,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,w=y-1;x<w;x+=f){let A=g.getX(x),R=g.getX(x+1);if(l.fromBufferAttribute(m,A),h.fromBufferAttribute(m,R),_l.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let U=t.ray.origin.distanceTo(d);U<t.near||U>t.far||e.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,w=y-1;x<w;x+=f){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),_l.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},ff=new b,pf=new b,ba=class extends ar{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ff.fromBufferAttribute(e,i),pf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ff.distanceTo(pf);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ma=class extends ar{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Yr=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mf=new mt,Xl=new _s,na=new bn,ia=new b,wa=class extends xe{constructor(t=new ye,e=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;mf.copy(i).invert(),Xl.copy(t.ray).applyMatrix4(mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){let m=l.getX(g);ia.fromBufferAttribute(u,m),gf(ia,m,c,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)ia.fromBufferAttribute(u,g),gf(ia,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gf(s,t,e,n,i,r,o){let a=Xl.distanceSqToPoint(s);if(a<e){let c=new b;Xl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var cr=class s extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new b,h=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fn=class s extends ye{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function y(){let w=new b,A=new b,R=0,C=(e-t)/n;for(let U=0;U<=r;U++){let _=[],E=U/r,N=E*(e-t)+t;for(let G=0;G<=i;G++){let j=G/i,P=j*c+a,D=Math.sin(P),H=Math.cos(P);A.x=N*D,A.y=-E*n+m,A.z=N*H,u.push(A.x,A.y,A.z),w.set(D,C,H).normalize(),d.push(w.x,w.y,w.z),f.push(j,1-E),_.push(g++)}v.push(_)}for(let U=0;U<i;U++)for(let _=0;_<r;_++){let E=v[_][U],N=v[_+1][U],G=v[_+1][U+1],j=v[_][U+1];h.push(E,N,j),h.push(N,G,j),R+=6}l.addGroup(p,R,0),p+=R}function x(w){let A=g,R=new ft,C=new b,U=0,_=w===!0?t:e,E=w===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let N=g;for(let G=0;G<=i;G++){let P=G/i*c+a,D=Math.cos(P),H=Math.sin(P);C.x=_*H,C.y=m*E,C.z=_*D,u.push(C.x,C.y,C.z),d.push(0,E,0),R.x=D*.5+.5,R.y=H*.5*E+.5,f.push(R.x,R.y),g++}for(let G=0;G<i;G++){let j=A+G,P=N+G;w===!0?h.push(P,P+1,j):h.push(P+1,P,j),U+=3}l.addGroup(p,U,w===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sa=class s extends fn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ea=class s extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new b,d=new b,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,w=0;p===0&&o===0?w=.5/e:p===n&&c===Math.PI&&(w=-.5/e);for(let A=0;A<=e;A++){let R=A/e;u.x=-t*Math.cos(i+R*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+R*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+w,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],w=h[p][y],A=h[p+1][y],R=h[p+1][y+1];(p!==0||o>0)&&f.push(x,w,R),(p!==n-1||c<Math.PI)&&f.push(w,A,R)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var pn=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nf,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},In=class extends pn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function sa(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function H_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function V_(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function vf(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function Wf(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}var qi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$l=class extends qi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dd,endingEnd:dd}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case fd:r=t,a=2*e-n;break;case pd:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fd:o=t,c=2*n-e;break;case pd:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,w=f*m-f*v;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+y*o[l+A]+x*o[c+A]+w*o[u+A];return r}},ql=class extends qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Yl=class extends qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Dn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sa(e,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sa(t.times,Array),values:sa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $l(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case ys:e=this.InterpolantFactoryMethodLinear;break;case Kc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return ys;case this.InterpolantFactoryMethodSmooth:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&H_(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Kc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=ys;var Yi=class extends Dn{};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ir;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends Dn{};Ta.prototype.ValueTypeName="color";var Ai=class extends Dn{};Ai.prototype.ValueTypeName="number";var Kl=class extends qi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)fe.slerpFlat(r,0,o,l-a,o,l,c);return r}},li=class extends Dn{InterpolantFactoryMethodLinear(t){return new Kl(this.times,this.values,this.getValueSize(),t)}};li.prototype.ValueTypeName="quaternion";li.prototype.DefaultInterpolation=ys;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Dn{};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=ir;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends Dn{};Ri.prototype.ValueTypeName="vector";var Aa=class{constructor(t,e=-1,n,i=b0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(W_(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=V_(c);c=vf(c,1,h),l=vf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ai(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,v){if(f.length!==0){let m=[],p=[];Wf(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(let v in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let x=d[g];m.push(x.time),p.push(x.morphTarget===v?1:0)}i.push(new Ai(".morphTargetInfluence["+v+"]",m,p))}c=f.length*o}else{let f=".bones["+e[u].name+"]";n(Ri,f+".position",d,"pos",i),n(li,f+".quaternion",d,"rot",i),n(Ri,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function G_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return Ri;case"color":return Ta;case"quaternion":return li;case"bool":case"boolean":return Yi;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function W_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=G_(s.type);if(s.times===void 0){let e=[],n=[];Wf(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var Hi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},jl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},X_=new jl,Ci=class{constructor(t){this.manager=t!==void 0?t:X_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},Zl=class extends Error{constructor(t,e){super(t),this.response=e}},Kr=class extends Ci{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Hi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(wi[t]!==void 0){wi[t].push({onLoad:e,onProgress:n,onError:i});return}wi[t]=[],wi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=wi[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,v=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:w})=>{if(x)p.close();else{v+=w.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let R=0,C=h.length;R<C;R++){let U=h[R];U.onProgress&&U.onProgress(A)}p.enqueue(w),y()}})}}});return new Response(m)}else throw new Zl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Hi.add(t,l);let h=wi[t];delete wi[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=wi[t];if(h===void 0)throw this.manager.itemError(t),l;delete wi[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Jl=class extends Ci{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Hi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=zr("img");function c(){h(),Hi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var ji=class extends Ci{constructor(t){super(t)}load(t,e,n,i){let r=new Ze,o=new Jl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},lr=class extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ra=class extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},bl=new mt,xf=new b,yf=new b,jr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;xf.setFromMatrixPosition(t.matrixWorld),e.position.copy(xf),yf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yf),e.updateMatrixWorld(),bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ql=class extends jr{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=sr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ca=class extends lr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ql}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},_f=new mt,Ir=new b,Ml=new b,th=class extends jr{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ir),Ml.copy(n.position),Ml.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ml),n.updateMatrixWorld(),i.makeTranslation(-Ir.x,-Ir.y,-Ir.z),_f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f)}},hr=class extends lr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new th}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},eh=class extends jr{constructor(){super(new wn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ur=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new eh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Zi=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},La=class extends ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Pa=class extends Ci{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Hi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Hi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Hi.add(t,c),r.manager.itemStart(t)}};var uh="\\[\\]\\.:\\/",$_=new RegExp("["+uh+"]","g"),dh="[^"+uh+"]",q_="[^"+uh.replace("\\.","")+"]",Y_=/((?:WC+[\/:])*)/.source.replace("WC",dh),K_=/(WCOD+)?/.source.replace("WCOD",q_),j_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),Z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),J_=new RegExp("^"+Y_+K_+j_+Z_+"$"),Q_=["material","materials","bones","map"],nh=class{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($_,"")}static parseTrackName(t){let e=J_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Q_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=nh;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FM=new Float32Array(1);var Ia=class{constructor(t,e,n=0,i=1/0){this.ray=new _s(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ih(t,this,n,e),n.sort(bf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ih(t[i],this,n,e);return n.sort(bf),n}};function bf(s,t){return s.distance-t.distance}function ih(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)ih(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);var tb=`
#ifndef NOISE_GLSL
#define NOISE_GLSL
float fhash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float fnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(fhash(i), fhash(i + vec2(1, 0)), u.x), mix(fhash(i + vec2(0, 1)), fhash(i + vec2(1, 1)), u.x), u.y); }
float ffbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++){ s += a * fnoise(p); p = p * 2.03 + 11.7; a *= .5; } return s; }
#endif
`,fh=`
const float R_EFF = 7.323e6;
vec3 curveDrop(vec3 w){ vec2 d = w.xz - cameraPosition.xz; w.y -= dot(d, d) / (2.0 * R_EFF); return w; }
`,bs=`
uniform vec3 uSunDirW; uniform vec3 uSunCol; uniform float uCloudT; uniform float uCover; uniform float uNight; uniform float uDusk;
uniform float uHazeB; uniform float uHazeH; uniform float uHazeTint;
${tb}
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
`;function Xf(s,t){return{uSunDirW:{value:s},uSunCol:{value:t},uCloudT:{value:0},uCover:{value:.28},uNight:{value:0},uDusk:{value:0},uHazeB:{value:11e-5},uHazeH:{value:650},uHazeTint:{value:1}}}function $f(s){let t=new pe({side:je,depthWrite:!1,depthTest:!1,uniforms:s,vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`${bs}
varying vec3 vD; void main(){ gl_FragColor = vec4(skyCol(normalize(vD), true), 1.0); }`}),e=new Kt(new Ea(9e3,64,32),t);return e.frustumCulled=!1,e.renderOrder=-1,e}function qf(s,t,{curve:e=!1}={}){let n=s.onBeforeCompile;s.onBeforeCompile=(r,o)=>{n?.call(s,r,o),Object.assign(r.uniforms,t),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vHzW;
${e?fh:""}`).replace("#include <project_vertex>",e?`
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
${bs}`).replace("#include <fog_fragment>","gl_FragColor.rgb = applyHaze(gl_FragColor.rgb, vHzW);")};let i=s.customProgramCacheKey?.bind(s);return s.customProgramCacheKey=()=>(i?i():"")+(e?"|hzc":"|hz"),s.fog=!0,s}function Jr(s,t,e,n=new b){let i=pt.degToRad(s),r=pt.degToRad(-23.44)*Math.cos(2*Math.PI/365*(t+10)),o=pt.degToRad(15*(e-12)),a=Math.sin(i)*Math.sin(r)+Math.cos(i)*Math.cos(r)*Math.cos(o),c=Math.asin(a),l=(Math.sin(r)-Math.sin(c)*Math.sin(i))/(Math.cos(c)*Math.cos(i)),h=Math.acos(pt.clamp(l,-1,1));return o>0&&(h=2*Math.PI-h),n.set(Math.cos(c)*Math.sin(h),Math.sin(c),-Math.cos(c)*Math.cos(h))}var Yf=16,fr=9.81;function eb(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ph({wind:s=6,windDir:t=.6,swellDir:e=1.4,swellH:n=.35,seed:i=11}={}){let r=eb(i),o=.877*fr/Math.max(s,.5),a=[];for(let g=0;g<2;g++){let v=[72,51][g],m=2*Math.PI/v,p=n/2*[.8,.55][g],y=e+[0,.18][g];a.push({dx:Math.cos(y),dz:Math.sin(y),k:m,w:Math.sqrt(fr*m),a:p,ph:r()*6.283})}let c=Yf-2,l=o*.75,h=o*3.2;for(let g=0;g<c;g++){let v=(g+.5)/c,m=l*Math.pow(h/l,v),p=m*Math.log(h/l)/c,y=.0081*fr*fr/Math.pow(m,5)*Math.exp(-.74*Math.pow(fr/(s*m),4)),x=Math.sqrt(2*y*p),w=0;for(let C=0;C<3;C++)w+=r()-.5;let A=t+w*(.9+.6*v),R=m*m/fr;a.push({dx:Math.cos(A),dz:Math.sin(A),k:R,w:m,a:x,ph:r()*6.283})}let u=a.reduce((g,v)=>g+v.k*v.a,0),d=Math.min(.8,.4/Math.max(u,1e-6));for(let g of a)g.q=d;let f=4*Math.sqrt(a.reduce((g,v)=>g+v.a*v.a/2,0));return{comps:a,wind:s,windDir:t,hs:f,wp:o}}function Kf(s){let t=s.comps.map(n=>new Gt(n.dx,n.dz,n.k,n.w)),e=s.comps.map(n=>new Gt(n.a,n.q,n.ph,0));return{uWA:{value:t},uWB:{value:e},uSeaK:{value:1}}}function jf(s,t){t.comps.forEach((e,n)=>{s.uWA.value[n].set(e.dx,e.dz,e.k,e.w),s.uWB.value[n].set(e.a,e.q,e.ph,0)})}var Qr=`
#define NW ${Yf}
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
`;function Fa(s,t,e,n,i=1){let r=t,o=e;for(let c=0;c<3;c++){let l=0,h=0;for(let u of s.comps){let d=u.k*(u.dx*r+u.dz*o)-u.w*n+u.ph,f=u.a*i*u.q*Math.cos(d);l+=u.dx*f,h+=u.dz*f}r=t-l,o=e-h}let a=0;for(let c of s.comps)a+=c.a*i*Math.sin(c.k*(c.dx*r+c.dz*o)-c.w*n+c.ph);return a}var Zf=`
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
`;function za(s){return s-Math.floor(s)}function Ba(s,t){let e=za(s*.1031),n=za(t*.1031),i=za(s*.1031),r=e*(n+33.33)+n*(i+33.33)+i*(e+33.33);return e+=r,n+=r,i+=r,za((e+n)*i)}function mh(s,t){let e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,o=i*i*(3-2*i),a=r*r*(3-2*r),c=Ba(e,n),l=Ba(e+1,n),h=Ba(e,n+1),u=Ba(e+1,n+1);return(c+(l-c)*o)*(1-a)+(h+(u-h)*o)*a}var nb=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)},Ha=class{constructor({speed:t=6,dir:e=.6,gust:n=1}={}){this.uniforms={uWind:{value:new ft(Math.cos(e),Math.sin(e))},uWindS:{value:t},uGustK:{value:n}},this.speed=t,this.dir=e}set(t,e,n=this.uniforms.uGustK.value){this.speed=t,this.dir=e,this.uniforms.uWind.value.set(Math.cos(e),Math.sin(e)),this.uniforms.uWindS.value=t,this.uniforms.uGustK.value=n}gust(t,e,n){let i=this.uniforms.uWind.value,r=this.uniforms.uWindS.value,o=t*i.x+e*i.y-r*.8*n,a=-t*i.y+e*i.x,c=o*.0045,l=a*.0022,h=mh(c,l)*.55+mh(c*2.3+7.1,l*2.3+7.1)*.3+mh(c*5.1+3.3,l*5.1+3.3)*.15;return Math.min(1,Math.max(0,nb(.32,.72,h)*this.uniforms.uGustK.value+.12))}at(t,e,n,i=new ft){let r=this.gust(t,e,n),o=this.speed*(.7+.7*r);return i.copy(this.uniforms.uWind.value).multiplyScalar(o)}};var ib="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Li=512,mr=2.2,Va=Li*mr,En=32,pr=8,sb=9,Ga=12,hi=4;function rb(){let s=r=>{let o=Math.abs(r);if(o<8){let d=r*r;return(57568490574+d*(-13362590354+d*(6516196407e-1+d*(-1121442418e-2+d*(77392.33017+d*-184.9052456)))))/(57568490411+d*(1029532985+d*(9494680718e-3+d*(59272.64853+d*(267.8532712+d)))))}let a=8/o,c=a*a,l=o-.785398164,h=1+c*(-.001098628627+c*(2734510407e-14+c*(-2073370639e-15+c*2093887211e-16))),u=-.01562499995+c*(.0001430488765+c*(-6911147651e-15+c*(7621095161e-16-c*934935152e-16)));return Math.sqrt(.636619772/o)*(Math.cos(l)*h-a*Math.sin(l)*u)},n=0;for(let r=1;r<=1e4;r++){let o=r*.001;n+=o*o*Math.exp(-1*o*o)}let i=[];for(let r=0;r<=hi;r++)for(let o=0;o<=hi;o++){let a=Math.hypot(o,r),c=0;for(let l=1;l<=1e4;l++){let h=l*.001;c+=h*h*Math.exp(-1*h*h)*s(h*a)}i.push(a>hi+.5?0:c/n)}return i}var Wa=class{constructor(t,e){this.r=t;let n={type:Yn,format:Ye,minFilter:ve,magFilter:ve,depthBuffer:!1};this.rt=[new Fe(Li,Li,n),new Fe(Li,Li,n)],this.cur=0,this.origin=new ft(0,0),this.hull=[].concat(...e.map(o=>this.hullTable(o)));let i=()=>new ft,r=()=>new Gt;this.quad=new Kt(new jn(2,2)),this.scene=new Sn,this.scene.add(this.quad),this.cam=new wn(-1,1,1,-1,0,1),this.sim=new pe({vertexShader:ib,depthTest:!1,depthWrite:!1,uniforms:{uS:{value:null},uTexel:{value:1/Li},uOrigin:{value:this.origin},uSize:{value:Va},uDt:{value:1/60},uShipP:{value:Array.from({length:pr},r)},uShipF:{value:Array.from({length:pr},r)},uNS:{value:0},uHull:{value:this.hull},uShift:{value:new ft},uTime:{value:0},uK:{value:rb()},uGdt2:{value:0},uA:{value:0},uDrop:{value:Array.from({length:Ga},r)},uND:{value:0}},fragmentShader:`
        uniform sampler2D uS; uniform float uTexel, uSize, uDt, uTime;
        uniform vec2 uOrigin, uShift;
        // per ship: P = (x, z, heave, sub), F = (fwd.x, fwd.z, speed, kind)
        uniform vec4 uShipP[${pr}], uShipF[${pr}]; uniform int uNS;
        uniform vec2 uHull[${En*sb}];
        uniform vec4 uDrop[${Ga}]; uniform int uND;
        uniform float uK[${(hi+1)*(hi+1)}]; uniform float uGdt2, uA;
        varying vec2 vUv;
        float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
        float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
          return mix(mix(h12(i), h12(i + vec2(1, 0)), u.x), mix(h12(i + vec2(0, 1)), h12(i + vec2(1, 1)), u.x), u.y); }
        // signed distance (m) from the waterline outline of the hull, in ship-local (f forward, x port)
        float hullSDF(vec2 q, int k){
          int o = k * ${En};
          float f = q.x, x = abs(q.y);
          vec2 h0 = uHull[o], h1 = uHull[o + ${En-1}];
          if (f < h0.x || f > h1.x) {
            float e = f < h0.x ? h0.x - f : f - h1.x;
            return max(e, x - (f < h0.x ? h0.y : h1.y));
          }
          float w = 0.0;
          for (int i = 0; i < ${En-1}; i++){
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
          for (int j = -${hi}; j <= ${hi}; j++) for (int i = -${hi}; i <= ${hi}; i++) {
            float kk = uK[abs(j) * ${hi+1} + abs(i)];
            if (kk != 0.0) vd += kk * texture2D(uS, uv + vec2(float(i), float(j)) * uTexel).r;
          }
          float hn = (s.r * (2.0 - uA) - s.g - uGdt2 * vd) / (1.0 + uA);
          // bleed off grid-scale ripple (the kernel does not resolve it and it shows as a saw edge on the hull)
          hn = mix(hn, (hl + hr + hd + hu) * 0.25, 0.12);
          hn = clamp(hn, -1.6, 1.6);
          vec2 w = uOrigin + (uv - 0.5) * uSize;           // world xz of this cell
          float make = 0.0, inside = 0.0;
          for (int si = 0; si < ${pr}; si++){
            if (si >= uNS) break;
            vec4 P = uShipP[si], Fw = uShipF[si];
            vec2 d = w - P.xy;
            int kind = int(Fw.w + 0.5);
            float reach = uHull[kind * ${En} + ${En-1}].x + 6.0;
            if (dot(d, d) > reach * reach * 1.6) continue;
            vec2 fwd = Fw.xy, side = vec2(fwd.y, -fwd.x);   // side points to port in three.js axes (x left)
            vec2 q = vec2(dot(d, fwd), dot(d, side));
            float sdf = hullSDF(q, kind);
            float spd = Fw.z, sub = P.w, heave = P.z;
            float hb = uHull[kind * ${En} + ${En/2}].y;          // half-breadth amidships
            // inside the waterline the hull holds the surface down (deeper with speed: the bow wave and stern trough)
            float ins = smoothstep(2.0, -2.0, sdf) * sub;
            float press = -min(0.03 * spd, 0.5) - heave * 0.5;
            hn = mix(hn, press, ins * 0.25 * smoothstep(0.5, 3.0, spd + abs(heave) * 3.0));
            inside = max(inside, ins);
            // foam: a thin white edge along the sides, the bow wave, and the screws' wash astern
            float band = exp(-max(sdf, 0.0) / (0.35 * hb + 1.0)) * smoothstep(-0.5, 0.8, sdf);
            float bowF = uHull[kind * ${En} + ${En-1}].x, sternF = uHull[kind * ${En}].x;
            float L = bowF - sternF;
            // the bow wave: a white roll along both sides of the forefoot, breaking outward (not ahead of the stem)
            float bow = smoothstep(L * 0.22, 0.0, bowF - q.x) * step(q.x, bowF - 1.0) * exp(-max(sdf, 0.0) / (0.5 * hb + 1.0)) * smoothstep(-0.5, 1.0, sdf);
            float stern = smoothstep(hb * 1.5, hb * 0.2, length((q - vec2(sternF - hb * 0.6, 0.0)) * vec2(0.6, 1.0))) * step(q.x, sternF + L * 0.06);
            float n = vn(w * 0.6 + uTime * 0.7) * vn(w * 0.17 - uTime * 0.3);
            float sp = smoothstep(1.0, 9.0, spd);
            make += (band * (0.3 + 0.7 * n) * 0.35 + bow * 1.2 + stern * n * n * 1.6) * sp * sub;
          }
          // balls landing: a pit that rings out, and foam
          for (int di = 0; di < ${Ga}; di++){
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
        }`});for(let o of this.rt)t.setRenderTarget(o),t.clear();t.setRenderTarget(null),this.acc=0,this.t=0,this.uniforms={uWake:{value:this.rt[0].texture},uWakeO:{value:this.origin},uWakeS:{value:Va},uWakeTexel:{value:1/Li}}}reset(t,e){for(let n of this.rt)this.r.setRenderTarget(n),this.r.setClearColor(0,0),this.r.clear();this.r.setRenderTarget(null),this.origin.set(t,e)}hullTable(t){let e=[],n=i=>t[Math.round(i*(t.length-1)/(En-1))];for(let i=0;i<En;i++){let[r,o]=n(i),a=0;for(let c=0;c+1<o.length;c++){let[l,h]=o[c],[u,d]=o[c+1];h<=0&&d>=0&&(a=l+(u-l)*(0-h)/Math.max(d-h,1e-6))}o[0][1]>0&&(a=.05),e.push(new ft(r,a))}return e}step(t,e,n,i=[]){let r=this.sim.uniforms;this.pending?.length&&(i=this.pending.concat(i),this.pending=null);let o=e.x-this.origin.x,a=e.z-this.origin.y,c=0,l=0;Math.abs(o)>Va*.12&&(c=Math.round(o/mr)),Math.abs(a)>Va*.12&&(l=Math.round(a/mr)),this.acc=Math.min(this.acc+t,.1);let h=1/60;r.uGdt2.value=9.81/mr*h*h,r.uA.value=.18*h,r.uDt.value=h;let u=Math.min(n.length,pr);for(let g=0;g<u;g++){let v=n[g];r.uShipP.value[g].set(v.pos.x,v.pos.z,v.heave,v.sub??1),r.uShipF.value[g].set(v.fwd.x,v.fwd.y,v.speed,v.kind)}r.uNS.value=u;let d=Math.min(i.length,Ga);for(let g=0;g<d;g++)r.uDrop.value[g].set(i[g].x,i[g].z,i[g].r,i[g].h);let f=!0;for(;this.acc>=h;)this.acc-=h,this.t+=h,r.uTime.value=this.t,f&&(c||l)?(r.uShift.value.set(c/Li,l/Li),this.origin.x+=c*mr,this.origin.y+=l*mr):r.uShift.value.set(0,0),r.uND.value=f?d:0,f=!1,r.uS.value=this.rt[this.cur].texture,this.quad.material=this.sim,this.r.setRenderTarget(this.rt[1-this.cur]),this.r.render(this.scene,this.cam),this.cur=1-this.cur;f&&(this.pending=i),this.r.setRenderTarget(null),this.uniforms.uWake.value=this.rt[this.cur].texture}},gh=`
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
`;var Jf=`
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
`;var ob=`
${Qr}
${gh}
${fh}
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
}`,ab=`
uniform float uTime;
${bs}
${Qr}
${gh}
${Zf}
${Jf}
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
}`;function cb(s,t,e,n){let i=[],r=[],o=[],a=[0],c=Math.pow(n/e,1/(s-1));for(let h=0;h<s;h++)a.push(e*Math.pow(c,h));for(let h=0;h<a.length;h++){let u=a[h],d=Math.max((a[h+1]??u*c)-u,2*Math.PI*Math.max(u,e)/t);for(let f=0;f<t;f++){let g=f/t*Math.PI*2;i.push(u*Math.cos(g),0,u*Math.sin(g)),r.push(d)}}for(let h=0;h<a.length-1;h++)for(let u=0;u<t;u++){let d=h*t+u,f=h*t+(u+1)%t,g=(h+1)*t+u,v=(h+1)*t+(u+1)%t;o.push(d,g,f,f,g,v)}let l=new ye;return l.setAttribute("position",new Zt(i,3)),l.setAttribute("aFw",new Zt(r,1)),l.setIndex(o),l}function Xa(s,t){let e=a=>a-Math.floor(a),n=e(s*.1031),i=e(t*.1031),r=e(s*.1031),o=n*(i+33.33)+i*(r+33.33)+r*(n+33.33);return n+=o,i+=o,r+=o,e((n+i)*r)}function lb(s,t=[],e=[]){let n=[];for(let o=0;o<40;o++){let a=6*Math.pow(.855,o)*(.8+.4*Xa(o,9.1)),c=s+(Xa(o,3.1)-.5)*2.8,l=2*Math.PI/a,h=Math.sqrt(9.81*l+.074/1e3*l*l*l),u=(f,g,v)=>{let m=Math.min(1,Math.max(0,(v-f)/(g-f)));return m*m*(3-2*m)},d=.11*(.5+Xa(o,7.7))*(.45+.55*u(1.2,.05,a));n.push({dx:Math.cos(c),dz:Math.sin(c),k:l,om:h,amp:d/l,ph:Xa(o,1.3)*6.2831,lam:a})}n.sort((o,a)=>a.lam-o.lam);let i=0,r=new Array(40);for(let o=39;o>=0;o--)i+=(n[o].amp*n[o].k)**2*.5,r[o]=i;return n.forEach((o,a)=>{(t[a]||=new Gt).set(o.dx,o.dz,o.k,o.om),(e[a]||=new Gt).set(o.amp,o.ph,r[a],o.lam)}),{A:t,B:e}}function Qf({skyU:s,seaU:t,wakeU:e,windU:n,tideU:i,reflTarget:r,refrTarget:o,shipShadowU:a,timeU:c,quality:l}){let h=Object.assign({},s,t,e,n,i,a,{uTime:c,uCenter:{value:new b},uRefl:{value:r.texture},uRefr:{value:o.texture},uReflTexel:{value:new ft(1/r.width,1/r.height)},uSunIrr:{value:s.uSunCol.value},uRA:{value:[]},uRB:{value:[]},uLayers:{value:new Gt(1,1,1,0)}}),u=n.uWind.value;lb(Math.atan2(u.y,u.x),h.uRA.value,h.uRB.value);let d=cb(l.oceanRings,l.oceanSeg,.35,16e3),f=new pe({vertexShader:ob,fragmentShader:ab,uniforms:h,side:ln}),g=new Kt(d,f);g.frustumCulled=!1;function v(m){h.uCenter.value.set(Math.round(m.position.x),0,Math.round(m.position.z))}return{mesh:g,uniforms:h,update:v}}function tp(s){let t=new Fe(s,s,{depthBuffer:!0,stencilBuffer:!1}),e=new $i(s,s,Ln);return e.compareFunction=ka,e.magFilter=e.minFilter=ve,t.depthTexture=e,t}var $a=class{constructor(t,e,{landSize:n=6e3,landRes:i=4096,shipSize:r=64,shipRes:o=2048}={}){this.r=t,this.sun=e,this.landRT=tp(i),this.shipRT=tp(o);let a=n/2,c=r/2;this.shipSize=r,this.shipRes=o,this.landCam=new wn(-a,a,a,-a,10,9e3),this.shipCam=new wn(-c,c,c,-c,1,400),this.landScene=new Sn,this.shipScene=new Sn,this.uniforms={uLandSM:{value:this.landRT.depthTexture},uLandVP:{value:new mt},uLandTexel:{value:1/i},uShipSM:{value:this.shipRT.depthTexture},uShipVP:{value:new mt},uShipTexel:{value:1/o},uShadowOn:{value:1},uMirror:{value:1}},this.depthMat=new Vr}aim(t,e,n){t.position.copy(e).addScaledVector(this.sun,n),t.up.set(0,1,0),t.lookAt(e),t.updateMatrixWorld(),t.updateProjectionMatrix()}addCaster(t,{ship:e=!1}={}){let n=t.userData.depthMat??this.depthMat,i=t.isInstancedMesh?new Qe(t.geometry,n,t.count):new Kt(t.geometry,n);return t.isInstancedMesh&&(i.instanceMatrix=t.instanceMatrix,i.count=t.count),i.matrixAutoUpdate=!1,i.frustumCulled=!1,i.userData.src=t,(e?this.shipScene:this.landScene).add(i),i}sync(t){for(let e of t.children){let n=e.userData.src;n&&(e.matrix.copy(n.matrixWorld),e.matrixWorld.copy(n.matrixWorld),n.isInstancedMesh&&(e.count=n.count),e.visible=n.visible)}}renderLand(t){this.aim(this.landCam,t,4e3),this.sync(this.landScene),this._draw(this.landRT,this.landScene,this.landCam),this.uniforms.uLandVP.value.multiplyMatrices(this.landCam.projectionMatrix,this.landCam.matrixWorldInverse)}renderShip(t){this.aim(this.shipCam,t,200);let e=this.shipSize/this.shipRes,n=t.clone(),i=this.shipCam.matrixWorld.elements,r=new b(i[0],i[1],i[2]),o=new b(i[4],i[5],i[6]),a=r.dot(n),c=o.dot(n);n.addScaledVector(r,Math.round(a/e)*e-a).addScaledVector(o,Math.round(c/e)*e-c),this.aim(this.shipCam,n,200),this.sync(this.shipScene),this._draw(this.shipRT,this.shipScene,this.shipCam),this.uniforms.uShipVP.value.multiplyMatrices(this.shipCam.projectionMatrix,this.shipCam.matrixWorldInverse)}_draw(t,e,n){let i=this.r,r=i.getRenderTarget(),o=i.autoClear;i.setRenderTarget(t),i.autoClear=!0,i.clear(!0,!0,!1),i.render(e,n),i.setRenderTarget(r),i.autoClear=o}},hb=`
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
`;function ep(s,t){let e=s.onBeforeCompile;s.onBeforeCompile=(i,r)=>{e?.call(s,i,r),Object.assign(i.uniforms,t.uniforms),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vShW; varying vec3 vShN; uniform float uMirror;`).replace("#include <project_vertex>",`#include <project_vertex>
        { vec4 swp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            swp = instanceMatrix * swp;
          #endif
          vShW = (modelMatrix * swp).xyz;
          vShN = normalize(inverseTransformDirection(transformedNormal, viewMatrix));
          vShW.y *= uMirror; vShN.y *= uMirror; }`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vShW; varying vec3 vShN;
${hb}`).replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
        float shadowF = sunShadowAt(vShW, normalize(vShN));
        reflectedLight.directDiffuse *= shadowF; reflectedLight.directSpecular *= shadowF;`)};let n=s.customProgramCacheKey?.bind(s);return s.customProgramCacheKey=()=>(n?n():"")+"|sh",s}var qa="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";function vh(s,t,e=0,n=!1){let i=new Fe(s,t,{type:Yn,format:Ye,samples:e,minFilter:ve,magFilter:ve,depthBuffer:e>0||n});return n&&(i.depthTexture=new $i(s,t,Ln)),i}var Ya=class{constructor(t,e,n,{samples:i=4,levels:r=6}={}){this.samples=i,this.r=t,this.levels=r,this.quad=new Kt(new jn(2,2)),this.quad.frustumCulled=!1,this.qs=new Sn,this.qs.add(this.quad),this.cam=new wn(-1,1,1,-1,0,1),this.down=new pe({vertexShader:qa,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uTexel:{value:new ft},uThresh:{value:0},uFirst:{value:0}},fragmentShader:`
        uniform sampler2D uTex; uniform vec2 uTexel; uniform float uThresh; uniform float uFirst; varying vec2 vUv;
        vec3 tap(vec2 o){ vec3 c = min(texture2D(uTex, vUv + o * uTexel).rgb, vec3(80.0));
          if (uFirst > 0.5) c = max(c - uThresh, 0.0); return c; }
        void main(){
          vec3 c = tap(vec2(0.0)) * 4.0 + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));
          gl_FragColor = vec4(c / 8.0, 1.0);
        }`}),this.up=new pe({vertexShader:qa,depthTest:!1,depthWrite:!1,blending:Qs,uniforms:{uTex:{value:null},uTexel:{value:new ft},uW:{value:1}},fragmentShader:`
        uniform sampler2D uTex; uniform vec2 uTexel; uniform float uW; varying vec2 vUv;
        void main(){
          vec3 c = vec3(0.0);
          c += texture2D(uTex, vUv + vec2(-2.0, 0.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(2.0, 0.0) * uTexel).rgb;
          c += texture2D(uTex, vUv + vec2(0.0, -2.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(0.0, 2.0) * uTexel).rgb;
          c += (texture2D(uTex, vUv + vec2(-1.0, -1.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(1.0, -1.0) * uTexel).rgb
              + texture2D(uTex, vUv + vec2(-1.0, 1.0) * uTexel).rgb + texture2D(uTex, vUv + vec2(1.0, 1.0) * uTexel).rgb) * 2.0;
          gl_FragColor = vec4(c / 12.0 * uW, 1.0);
        }`}),this.copy=new pe({vertexShader:qa,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uDepth:{value:null},uNear:{value:.3},uFar:{value:9e3}},fragmentShader:`
        uniform sampler2D uTex, uDepth; uniform float uNear, uFar; varying vec2 vUv;
        void main(){
          float z = texture2D(uDepth, vUv).r;
          float ndc = z * 2.0 - 1.0;
          float lin = 2.0 * uNear * uFar / (uFar + uNear - ndc * (uFar - uNear));
          gl_FragColor = vec4(texture2D(uTex, vUv).rgb, lin);
        }`}),this.final=new pe({vertexShader:qa,depthTest:!1,depthWrite:!1,uniforms:{uTex:{value:null},uBloom:{value:null},uExposure:{value:1},uBloomK:{value:.12},uT:{value:0},uVignette:{value:.45},uWarm:{value:new b(1.1,1,.84)},uCool:{value:new b(1,.99,.98)},uSat:{value:1.08},uContrast:{value:1.12},uUnder:{value:0}},fragmentShader:`
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
        }`}),this.setSize(e,n,i)}setSize(t,e,n=this.samples){this.w=t,this.h=e,this.scene?.dispose(),(this.chain||[]).forEach(o=>o.dispose()),this.scene=vh(t,e,n,!0),this.refr?.dispose(),this.refr=vh(t>>1,e>>1),this.chain=[];let i=t,r=e;for(let o=0;o<this.levels;o++)i=Math.max(2,i>>1),r=Math.max(2,r>>1),this.chain.push(vh(i,r))}pass(t,e,n){t.uniforms.uTex.value=e.texture??e,this.quad.material=t,this.r.setRenderTarget(n),this.r.render(this.qs,this.cam)}render(t,e,{exposure:n=1,t:i=0,thresh:r=1.2,overlay:o=null,under:a=0}={}){let c=this.r;if(c.setRenderTarget(this.scene),c.render(t,e),o){let d=this.copy.uniforms;d.uDepth.value=this.scene.depthTexture,d.uNear.value=e.near,d.uFar.value=e.far,this.pass(this.copy,this.scene,this.refr),c.setRenderTarget(this.scene);let f=c.autoClear;c.autoClear=!1,c.render(o,e),c.autoClear=f}let l=this.scene;for(let d=0;d<this.levels;d++){let f=this.chain[d];this.down.uniforms.uTexel.value.set(1/l.width,1/l.height),this.down.uniforms.uFirst.value=d===0?1:0,this.down.uniforms.uThresh.value=r,this.pass(this.down,l,f),l=f}let h=c.autoClear;c.autoClear=!1;for(let d=this.levels-1;d>0;d--){let f=this.chain[d],g=this.chain[d-1];this.up.uniforms.uTexel.value.set(1/f.width,1/f.height),this.up.uniforms.uW.value=1,this.pass(this.up,f,g)}c.autoClear=h;let u=this.final.uniforms;u.uBloom.value=this.chain[0].texture,u.uExposure.value=n,u.uT.value=i,u.uUnder.value=a,this.pass(this.final,this.scene,null)}};var np=new URLSearchParams(location.search).get("q"),ub=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,db=Math.min(screen.width,screen.height)<820,to=np?np==="low":ub&&db||/iPhone|Android.+Mobile/.test(navigator.userAgent);function xh(s,t){if(t===If)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Zr||t===Na){let e=s.getIndex();if(e===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=e.count-2,i=[];if(t===Zr)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}var vr=class extends Ci{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Eh(e)}),this.register(function(e){return new Nh(e)}),this.register(function(e){return new Uh(e)}),this.register(function(e){return new kh(e)}),this.register(function(e){return new Ah(e)}),this.register(function(e){return new Rh(e)}),this.register(function(e){return new Ch(e)}),this.register(function(e){return new Lh(e)}),this.register(function(e){return new Sh(e)}),this.register(function(e){return new Ph(e)}),this.register(function(e){return new Th(e)}),this.register(function(e){return new Dh(e)}),this.register(function(e){return new Ih(e)}),this.register(function(e){return new Mh(e)}),this.register(function(e){return new Oh(e)}),this.register(function(e){return new Fh(e)})}load(t,e,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Zi.extractUrlBase(t);o=Zi.resolveURL(l,this.path)}else o=Zi.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Kr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===ap){try{o[Yt.KHR_BINARY_GLTF]=new zh(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Yt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new $h(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Yt.KHR_MATERIALS_UNLIT:o[u]=new wh;break;case Yt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Bh(r,this.dracoLoader);break;case Yt.KHR_TEXTURE_TRANSFORM:o[u]=new Hh;break;case Yt.KHR_MESH_QUANTIZATION:o[u]=new Vh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}};function fb(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}var Yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Mh=class{constructor(t){this.parser=t,this.name=Yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new _t(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ie);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ur(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hr(h),l.distance=u;break;case"spot":l=new Ca(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Qi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},wh=class{constructor(){this.name=Yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Je}extendParams(t,e,n){let i=[];t.color=new _t(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Ie),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,se))}return Promise.all(i)}},Sh=class{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},Eh=class{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ft(a,a)}return Promise.all(r)}},Th=class{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Ah=class{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new _t(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Ie)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,se)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Rh=class{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ch=class{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new _t().setRGB(a[0],a[1],a[2],Ie),Promise.all(r)}},Lh=class{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ph=class{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new _t().setRGB(a[0],a[1],a[2],Ie),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,se)),Promise.all(r)}},Ih=class{constructor(t){this.parser=t,this.name=Yt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},Dh=class{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Nh=class{constructor(t){this.parser=t,this.name=Yt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Uh=class{constructor(t){this.parser=t,this.name=Yt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},kh=class{constructor(t){this.parser=t,this.name=Yt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Oh=class{constructor(t){this.name=Yt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Fh=class{constructor(t){this.name=Yt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Nn.TRIANGLES&&l.mode!==Nn.TRIANGLE_STRIP&&l.mode!==Nn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let v=new mt,m=new b,p=new fe,y=new b(1,1,1),x=new Qe(g.geometry,g.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,w),c.SCALE&&y.fromBufferAttribute(c.SCALE,w),x.setMatrixAt(w,v.compose(m,p,y));for(let w in c)if(w==="_COLOR_0"){let A=c[w];x.instanceColor=new dn(A.array,A.itemSize,A.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,c[w]);xe.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},ap="glTF",eo=12,ip={JSON:1313821514,BIN:5130562},zh=class{constructor(t){this.name=Yt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,eo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-eo,r=new DataView(t,eo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===ip.JSON){let l=new Uint8Array(t,eo+o,a);this.content=n.decode(l)}else if(c===ip.BIN){let l=eo+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Bh=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Yt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Wh[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Wh[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[t.attributes[h]],f=gr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}u(f)},a,l,Ie,d)})})}},Hh=class{constructor(){this.name=Yt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Vh=class{constructor(){this.name=Yt.KHR_MESH_QUANTIZATION}},Ka=class extends qi{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*l,v=g-l,m=-2*f+3*d,p=f-d,y=1-m,x=p-d+u;for(let w=0;w!==a;w++){let A=o[v+w+a],R=o[v+w+c]*h,C=o[g+w+a],U=o[g+w]*h;r[w]=y*A+x*R+m*C+p*U}return r}},pb=new fe,Gh=class extends Ka{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return pb.fromArray(r).normalize().toArray(r),r}},Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sp={9728:Ce,9729:ve,9984:oa,9985:rh,9986:Dr,9987:ci},rp={33071:_n,33648:Fr,10497:xs},yh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mb={CUBICSPLINE:void 0,LINEAR:ys,STEP:ir},_h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new pn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),s.DefaultMaterial}function Ms(s,t,e){for(let n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Qi(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function vb(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function xb(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yb(s){let t,e=s.extensions&&s.extensions[Yt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+bh(e.attributes):t=s.indices+":"+bh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+bh(s.targets[n]);return t}function bh(s){let t="",e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Xh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _b(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var bb=new mt,$h=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new fb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new ji(this.options.manager):this.textureLoader=new Pa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ms(r,a,i),Qi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Yt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Zi.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=yh[i.type],a=gr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Pe(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=yh[i.type],l=gr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,v,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=e.cache.get(y);x||(v=new l(a,p*f,i.count*f/h),x=new Wr(v,f/h),e.cache.add(y,x)),m=new Xr(x,c,d%f/h,g)}else a===null?v=new l(i.count*c):v=new l(a,d,i.count*c),m=new Pe(v,c,g);if(i.sparse!==void 0){let p=yh.SCALAR,y=gr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,A=new y(o[1],x,i.sparse.count*p),R=new l(o[2],w,i.sparse.count*c);a!==null&&(m=new Pe(m.array.slice(),m.itemSize,m.normalized));for(let C=0,U=A.length;C<U;C++){let _=A[C];if(m.setX(_,R[C*c]),c>=2&&m.setY(_,R[C*c+1]),c>=3&&m.setZ(_,R[C*c+2]),c>=4&&m.setW(_,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=sp[d.magFilter]||ve,h.minFilter=sp[d.minFilter]||ci,h.wrapS=rp[d.wrapS]||xs,h.wrapT=rp[d.wrapT]||xs,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=i.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(v){let m=new Ze(v);m.needsUpdate=!0,d(m)}),e.load(Zi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||_b(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Yt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Yt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Yr,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new qr,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return pn}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[Yt.KHR_MATERIALS_UNLIT]){let u=i[Yt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new _t(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ie),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,se)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=ln);let h=r.alphaMode||_h.OPAQUE;if(h===_h.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_h.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Je&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ft(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Je&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Je){let u=r.emissiveFactor;a.emissive=new _t().setRGB(u[0],u[1],u[2],Ie)}return r.emissiveTexture!==void 0&&o!==Je&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,se)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Qi(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ms(i,u,r),u})}createUniqueName(t){let e=he.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return op(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=yb(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Yt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=op(new ye,l,e),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?gb(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],m=o[f],p,y=l[f];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ya(v,y):new Kt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?p.geometry=xh(p.geometry,Na):m.mode===Nn.TRIANGLE_FAN&&(p.geometry=xh(p.geometry,Zr));else if(m.mode===Nn.LINES)p=new ba(v,y);else if(m.mode===Nn.LINE_STRIP)p=new ar(v,y);else if(m.mode===Nn.LINE_LOOP)p=new Ma(v,y);else if(m.mode===Nn.POINTS)p=new wa(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&xb(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Qi(p,r),m.extensions&&Ms(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&Ms(i,u[0],r),u[0];let d=new we;r.extensions&&Ms(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Le(pt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new wn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Qi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new mt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new _a(a,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let y=0,x=d.length;y<x;y++){let w=d[y],A=f[y],R=g[y],C=v[y],U=m[y];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let _=n._createAnimationTracks(w,A,R,C,U);if(_)for(let E=0;E<_.length;E++)p.push(_[E])}return new Aa(r,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,bb)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new $r:l.length>1?h=new we:l.length===1?h=l[0]:h=new xe,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Qi(h,r),r.extensions&&Ms(n,h,r),r.matrix!==void 0){let u=new mt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new we;n.name&&(r.name=i.createUniqueName(n.name)),Qi(r,n),n.extensions&&Ms(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Mn||d instanceof Ze)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let o=[],a=t.name?t.name:t.uuid,c=[];Ji[r.path]===Ji.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ji[r.path]){case Ji.weights:l=Ai;break;case Ji.rotation:l=li;break;case Ji.position:case Ji.scale:l=Ri;break;default:switch(n.itemSize){case 1:l=Ai;break;case 2:case 3:default:l=Ri;break}break}let h=i.interpolation!==void 0?mb[i.interpolation]:ys,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Ji[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Xh(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof li?Gh:Ka;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Mb(s,t,e){let n=t.attributes,i=new Pn;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new b(c[0],c[1],c[2]),new b(l[0],l[1],l[2])),a.normalized){let h=Xh(gr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new b,c=new b;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=Xh(gr[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new bn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function op(s,t,e){let n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Wh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){let o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Jt.workingColorSpace!==Ie&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Jt.workingColorSpace}" not supported.`),Qi(s,t),Mb(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?vb(s,t.targets,e):s})}var ws=["bb","ca","dd","cl","bc","tr","cv","wh","sp"],ja=["A","E"],wb=700;async function qh(s,t,e,n){let i=await s.loadAsync(t);return i.flipY=!1,i.colorSpace=e?se:Ke,i.anisotropy=n,i}function Za(s,{patch:t,U:e,seaU:n,key:i}){let r=new pn(Object.assign({roughness:1,metalness:1},s));return r.onBeforeCompile=o=>{Object.assign(o.uniforms,n,{uTime:e.uTime}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
${Qr}
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
        }`)},r.customProgramCacheKey=()=>"steel"+i,t?.(r),r}function Sb(s,t){let e=null;return s.traverse(n=>{(n.name===t&&n.geometry||n.name===t&&!e)&&(e=n)}),e}function Ja(s,t){let e=Sb(s,t);if(!e)return null;if(e.geometry)return e.geometry;let n=null;return e.traverse(i=>{!n&&i.geometry&&(n=i.geometry)}),n}var Eb={bb:{L:215,B:32,D:18,T:9.5},bc:{L:240,B:29,D:17,T:9},ca:{L:185,B:19,D:11,T:6},cl:{L:165,B:16.4,D:10,T:5.5},dd:{L:112,B:10.4,D:6.5,T:3.7},tr:{L:140,B:19,D:13.2,T:8},cv:{L:250,B:31,D:18,T:8.5},wh:{L:300,B:40,D:20.6,T:11},sp:{L:300,B:40,D:20.6,T:11}};function Tb(s){let{L:t,B:e,D:n,T:i}=Eb[s],r=n-i,o=[];for(let l=0;l<=24;l++){let h=-t/2+t*l/24,u=h/(t/2),d=e/2*Math.sqrt(Math.max(0,1-Math.pow(Math.max(u,0),2.2)))*(u<0?1-.25*Math.pow(-u,4):1),f=[];for(let g=0;g<=6;g++){let v=g/6;f.push([d*Math.sin(v*Math.PI/2)**.6,-i+(i+r)*v])}o.push([h,f])}let c={bb:[[.32,0],[.2,1],[-.24,1],[-.36,0]],ca:[[.36,0],[.27,1],[.18,2],[-.25,1],[-.34,0]],dd:[[.33,0],[-.22,1],[-.36,0]],cl:[[.31,0],[.25,1],[-.27,1],[-.33,0]],bc:[[.35,0],[.28,1],[-.26,1],[-.32,0]],tr:[],cv:[],wh:[[.35,0],[.27,1],[-.31,0]],sp:[[.35,0],[.28,1],[-.27,1],[-.33,0]]}[s].map(([l,h])=>{let u=l*t,d=u>0;return{at:[0,r+h*e*.09,u],arc:d?[-2.3,2.3]:[Math.PI-2.3,Math.PI+2.3],guns:2,gap:e*.11,trunnion:[0,e*.06,e*.05],barrel_len:e*.6,rest:d?0:Math.PI}});return{kind:s,L:t,B:e,D:n,T:i,deck_top:r,stations:o,turrets:c,funnels:s==="bb"?[[0,r+22,-t*.02]]:s==="ca"?[[0,r+14,-t*.02]]:[[0,r+9,t*.02],[0,r+9,-t*.08]],boxes:[{min:[-e/2,-i,-t/2],max:[e/2,r,t/2],part:"hull"},{min:[-e*.3,r,-t*.14],max:[e*.3,r+e*.9,t*.1],part:"superstructure"}]}}function Ab(s){let{L:t,B:e,deck_top:n}=s,i=[],r=s.stations,o=[],a=[],c=r[0][1].length;for(let[g,v]of r){for(let m=c-1;m>=0;m--)o.push(-v[m][0],v[m][1],g);for(let m=0;m<c;m++)o.push(v[m][0],v[m][1],g)}let l=c*2;for(let g=0;g+1<r.length;g++)for(let v=0;v+1<l;v++){let m=g*l+v,p=m+l;a.push(m,p,m+1,m+1,p,p+1)}let h=o.length/3;for(let[g,v]of r){let m=v[c-1][0];o.push(m,n,g,-m,n,g)}for(let g=0;g+1<r.length;g++){let v=h+g*2;a.push(v,v+2,v+1,v+1,v+2,v+3)}let u=new ye;u.setAttribute("position",new Zt(o,3)),u.setIndex(a),u.computeVertexNormals(),i.push(u);let d=(g,v,m,p,y,x)=>i.push(new Kn(g,v,m).translate(p,y+v/2,x));d(e*.45,e*.5,t*.18,0,n,0),d(e*.25,e*.55,e*.3,0,n+e*.5,t*.05);for(let g of s.funnels)i.push(new fn(e*.09,e*.11,g[1]-n,12).translate(g[0],(g[1]+n)/2,g[2]));return Rb(i)}function Rb(s){let t=[],e=[],n=[],i=0;for(let o of s){o=(o.index,o);let a=o.attributes.position.array,c=o.attributes.normal.array;for(let l=0;l<a.length;l++)t.push(a[l]),e.push(c[l]);if(o.index)for(let l of o.index.array)n.push(l+i);else for(let l=0;l<a.length/3;l++)n.push(l+i);i+=a.length/3}let r=new ye;return r.setAttribute("position",new Zt(t,3)),r.setAttribute("normal",new Zt(e,3)),r.setAttribute("uv",new Zt(new Float32Array(t.length/3*2),2)),r.setIndex(n),r}async function hp(s,{aniso:t=8,patch:e,U:n,seaU:i}){let r=new ji,o=new vr,a={kinds:{}};return await Promise.all(ws.map(async c=>{let l=null;try{let h=await fetch(`${s}${c}.json`);h.ok&&(l=await h.json())}catch{}if(l){let[h,u,d,f]=await Promise.all([qh(r,`${s}${c}_base.webp`,!0,t),qh(r,`${s}${c}_base_e.webp`,!0,t),qh(r,`${s}${c}_orm.webp`,!1,t),o.loadAsync(`${s}${c}.glb`)]);l.kind=c;let g={A:Za({map:h,aoMap:d,roughnessMap:d,metalnessMap:d},{patch:e,U:n,seaU:i,key:"A"}),E:Za({map:u,aoMap:d,roughnessMap:d,metalnessMap:d},{patch:e,U:n,seaU:i,key:"E"})},v=Ja(f.scene,"hull");a.kinds[c]={meta:l,mats:g,geo:{lod:[v,Ja(f.scene,"hull_lod1")??v],turret:Ja(f.scene,"turret"),barrel:Ja(f.scene,"barrel")},baked:!0}}else{l=Tb(c);let h={A:Za({color:2763822,roughness:.6,metalness:.3},{patch:e,U:n,seaU:i,key:"Ai"}),E:Za({color:9146774,roughness:.6,metalness:.3},{patch:e,U:n,seaU:i,key:"Ei"})},u=l.B,d=new fn(u*.16,u*.18,u*.12,16).translate(0,u*.06,0),f=new fn(u*.018,u*.024,u*.6,8).rotateX(Math.PI/2).translate(0,0,u*.3);for(let v of[d,f])v.setAttribute("uv",new Zt(new Float32Array(v.attributes.position.count*2),2));let g=Ab(l);a.kinds[c]={meta:l,mats:h,geo:{lod:[g,g],turret:d,barrel:f},baked:!1}}})),a}var Yh=new mt,Kh=new mt,xr=new mt,jh=new fe,cp=new b,lp=new b(1,1,1),Cb=new b(0,1,0),Lb=new b(1,0,0),Qa=class{constructor(t,e={bb:6,bc:6,ca:14,cl:12,dd:28,tr:6,cv:5,wh:2,sp:2}){this.art=t,this.group=new we,this.sets={};for(let n of ws){let i=t.kinds[n],r=e[n],o=i.meta.turrets.length,a={hull:{},turret:{},barrel:{}};for(let c of ja){let l=(h,u)=>{let d=new Qe(h.clone(),i.mats[c],u);d.count=0,d.frustumCulled=!1;let f=new dn(new Float32Array(u*4),4);return d.geometry.setAttribute("aBurn",f),d.userData.burn=f,this.group.add(d),d};a.hull[c]=i.geo.lod.map(h=>l(h,r)),a.turret[c]=l(i.geo.turret,160),a.barrel[c]=l(i.geo.barrel,480)}this.sets[n]=a}}casters(){let t=[];for(let e of ws)for(let n of ja){let i=this.sets[e];t.push(i.hull[n][0],i.turret[n],i.barrel[n])}return t}update(t,e){for(let n of ws)for(let i of ja){let r=this.sets[n];for(let o of[...r.hull[i],r.turret[i],r.barrel[i]])o.count=0}for(let n of t){if(n.gone)continue;let i=this.art.kinds[n.kind],r=this.sets[n.kind],o=n.body,a=i.meta.L;Yh.compose(o.pos,o.quat,lp);let c=e.distanceTo(o.pos)<wb?0:1,l=(h,u)=>{let d=h.count++;h.setMatrixAt(d,u),h.userData.burn.setXYZW(d,n.burn[0],n.burn[1],n.burn[2],a)};l(r.hull[n.side][c],Yh);for(let h of n.turrets){let u=h.meta,d=this.sets[u.geo??n.kind],f=u.scale??1,g=u.wide??1,v=0;if(h.drop>0){let p=1-h.drop;v=p<.75?40*(1-(p/.75)**2):1.2*Math.sin((p-.75)/.25*Math.PI),h.drop=Math.max(0,h.drop-(this.dt??1/60)*2.2)}Kh.compose(cp.set(u.at[0],u.at[1]+v,u.at[2]),jh.setFromAxisAngle(Cb,-h.yaw),lp).premultiply(Yh),xr.copy(Kh).multiply(new mt().makeScale(f*g,f,f)),l(d.turret[n.side],xr);let m=u.guns??2;for(let p=0;p<m;p++){let y=(p-(m-1)/2)*u.gap,x=h.recoil[p]??0,w=x<=0?0:x<.15?x/.15:Math.max(0,1-(x-.15)/1.4);jh.setFromAxisAngle(Lb,-(h.gunElev?.[p]??h.elev)),xr.compose(cp.set(u.trunnion[0]+y,u.trunnion[1],u.trunnion[2]),jh,new b(f,f,f)),xr.multiply(new mt().makeTranslation(0,0,-w*(u.barrel_len/f)*.08)),xr.premultiply(Kh),l(d.barrel[n.side],xr)}}}for(let n of ws)for(let i of ja){let r=this.sets[n];for(let o of[...r.hull[i],r.turret[i],r.barrel[i]])o.instanceMatrix.needsUpdate=!0,o.userData.burn.needsUpdate=!0}}};var fp=9.81,Pb=1.2,Se={};function Zh(s){let t="g"+(+s).toFixed(1);if(Se[t])return t;let e=s/36,n={calCm:+s,cal:s/100,m:673*e**3,v0:500+140*Math.min(e,1.6),reload:12*e**.8,range:1800+145*s,dmg:18*e**2.3,charge:4*e**1.2,maxElev:.52+.25*(1-Math.min(e,1)),traverse:4.2/e**.9,elevRate:5/e**.6};return n.k=.5*Pb*.3*Math.PI*(n.cal/2)**2/n.m,n.table=Ib(n),Se[t]=n,t}function Ib(s){let t=[];for(let e=-.01;e<=s.maxElev;e+=.002){let n=0,i=12,r=s.v0*Math.cos(e),o=s.v0*Math.sin(e),a=0,c=.01;for(;i>0&&a<120;){let l=Math.hypot(r,o);r-=s.k*l*r*c,o-=(fp+s.k*l*o)*c,n+=r*c,i+=o*c,a+=c}if(t.push({e,r:n,t:a,fall:Math.atan2(-o,r)}),t.length>2&&n<t[t.length-2].r)break}return t}for(let[s,t]of[["bb",36],["bc",36],["ca",20],["cl",15.5],["dd",12.7]])Se[s]=Se[Zh(t)];function yr(s,t){let e=Se[s].table;if(t<e[0].r)return{e:e[0].e,t:e[0].t*t/Math.max(e[0].r,1)};for(let n=1;n<e.length;n++)if(e[n].r>=t){let i=e[n-1],r=e[n],o=(t-i.r)/(r.r-i.r);return{e:i.e+(r.e-i.e)*o,t:i.t+(r.t-i.t)*o,fall:i.fall+(r.fall-i.fall)*o}}return null}function Db(s,t,e,n){let i=0,r=1;for(let o of["x","y","z"]){let a=t[o]-s[o];if(Math.abs(a)<1e-9){if(s[o]<e[o]||s[o]>n[o])return-1;continue}let c=(e[o]-s[o])/a,l=(n[o]-s[o])/a;if(c>l&&([c,l]=[l,c]),i=Math.max(i,c),r=Math.min(r,l),i>r)return-1}return i}var Nb=new b,no=new b,up=new b,io=new fe,dp=new mt,tc=class{constructor(t,e){this.fx=t,this.sea=e,this.shells=[],this.events=[];let n=new fn(.5,.5,1,6,1).rotateX(Math.PI/2);this.mesh=new Qe(n,new Je({color:new _t(3,1.6,.7),transparent:!0,opacity:.85,depthWrite:!1}),600),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=12;let i=new fn(.5,.5,2.6,16).rotateX(Math.PI/2),r=new Sa(.5,1.6,16).rotateX(Math.PI/2).translate(0,0,2.1);this.one=new we;let o=new pn({color:2762790,roughness:.45,metalness:.8});this.one.add(new Kt(i,o),new Kt(r,o));let a=new Kt(new fn(.52,.52,.25,16).rotateX(Math.PI/2).translate(0,0,-1),new pn({color:10119722,roughness:.4,metalness:.9}));this.one.add(a),this.one.visible=!1,this.tracked=null}fire(t,e,n,i,r,o=null){let a=Se[t],c=i.clone().multiplyScalar(a.v0*(1+(Math.random()-.5)*.004));c.add(e.body.vel),this.shells.push({type:t,g:a,p:n.clone(),p0:n.clone(),v:c,from:e,t0:r,target:e.target}),this.fx.blast(n,i,a.charge,e.body.vel),e.body.impulse(i.clone().multiplyScalar(-a.m*a.v0*1.4),n),this.events.push({kind:"fire",type:t,at:n.clone(),from:e})}update(t,e,n){let i=[],r=Math.max(1,Math.ceil(t/.008333333333333333)),o=t/r;for(let h of this.shells){let u=!0;for(let d=0;d<r&&u;d++){let f=Nb.copy(h.p),g=h.v.length();h.v.addScaledVector(h.v,-h.g.k*g*o),h.v.y-=fp*o,h.p.addScaledVector(h.v,o);for(let m of n){if(m===h.from||m.gone||m.body.sunk)continue;let p=m.body,y=m.meta.L*.55+20;if((p.pos.x-h.p.x)**2+(p.pos.z-h.p.z)**2>y*y)continue;io.copy(p.quat).invert();let x=no.copy(f).sub(p.pos).applyQuaternion(io),w=up.copy(h.p).sub(p.pos).applyQuaternion(io),A=2,R=null;for(let C of m.boxes){let U=Db(x,w,C.min,C.max);U>=0&&U<A&&(A=U,R=C)}if(R){let C=x.clone().lerp(w,A),U=f.clone().lerp(h.p,A);this.events.push({kind:"hit",type:h.type,ship:m,part:R,local:C,world:U,vel:h.v.clone(),from:h.from}),u=!1;break}}if(!u)break;let v=Fa(this.sea,h.p.x,h.p.z,e,1);h.p.y<v&&(this.events.push({kind:"splash",type:h.type,world:new b(h.p.x,v,h.p.z),from:h.from}),this.fx.column(new b(h.p.x,v,h.p.z),h.g.cal),u=!1),e-h.t0>40&&(u=!1)}u&&i.push(h)}this.shells=i;let a=0;for(let h of this.shells){let u=h.v.length(),d=Math.min(u*.035,30),f=Math.max(h.g.cal*2.2,.35);if(no.copy(h.v).normalize(),io.setFromUnitVectors(new b(0,0,1),no),dp.compose(up.copy(h.p).addScaledVector(no,-d/2),io,new b(f,f,d)),this.mesh.setMatrixAt(a++,dp),a>=600)break}this.mesh.count=a,this.mesh.instanceMatrix.needsUpdate=!0;let c=this.tracked;if(this.one.visible=!!c&&this.shells.includes(c),this.one.visible){let h=c.g.cal/.36*.36;this.one.position.copy(c.p),this.one.quaternion.setFromUnitVectors(new b(0,0,1),no.copy(c.v).normalize()),this.one.scale.setScalar(h*1)}let l=this.events;return this.events=[],l}};var bt={SMOKE:0,SPRAY:1,SPLINTER:2,SOOT:3,FLASH:4,FLAME:5,EMBER:6,MIST:7},mn=2e4,pp=`
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
}`,mp=`
float fh(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float fn2(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(fh(i), fh(i + vec2(1, 0)), u.x), mix(fh(i + vec2(0, 1)), fh(i + vec2(1, 1)), u.x), u.y); }
float fbm2(vec2 p){ return fn2(p) * 0.5 + fn2(p * 2.1 + 3.7) * 0.3 + fn2(p * 4.3 + 9.1) * 0.2; }
`;function Ub(s,t){return new pe({uniforms:Object.assign({},s,t),transparent:!0,depthWrite:!1,vertexShader:pp,fragmentShader:`
      ${bs}
      ${mp}
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
      }`})}function kb(s){return new pe({uniforms:Object.assign({},s,{uCamR:{value:new b},uCamU:{value:new b}}),transparent:!0,depthWrite:!1,blending:Qs,vertexShader:pp,fragmentShader:`
      ${bs}
      ${mp}
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
      }`})}var ec=class{constructor(t,e){this.wind=e,this.p=new Float32Array(mn*3),this.v=new Float32Array(mn*3),this.size=new Float32Array(mn),this.grow=new Float32Array(mn),this.life=new Float32Array(mn),this.age=new Float32Array(mn),this.type=new Uint8Array(mn),this.seed=new Float32Array(mn),this.drag=new Float32Array(mn),this.buoy=new Float32Array(mn),this.a0=new Float32Array(mn),this.free=[];for(let a=mn-1;a>=0;a--)this.free.push(a);this.live=[],this.U={uCamR:{value:new b},uCamU:{value:new b},uAmbUp:{value:new _t},uAmbDn:{value:new _t}};let n=new jn(1,1),i=a=>{let c=new La;c.index=n.index,c.setAttribute("position",n.attributes.position);let l=new dn(new Float32Array(mn*4),4).setUsage(ch),h=new dn(new Float32Array(mn*4),4).setUsage(ch);c.setAttribute("aP",l),c.setAttribute("aD",h),c.instanceCount=0;let u=new Kt(c,a);return u.frustumCulled=!1,{m:u,g:c,aP:l,aD:h}},r=Ub(t,this.U),o=kb(t);o.uniforms.uCamR=this.U.uCamR,o.uniforms.uCamU=this.U.uCamU,this.blend=i(r),this.add=i(o),this.blend.m.renderOrder=10,this.add.m.renderOrder=11,this.group=new we,this.group.add(this.blend.m,this.add.m),this.lights=[],this.lightGroup=new we;for(let a=0;a<6;a++){let c=new hr(16756848,0,900,2);this.lights.push({L:c,t:0,k:0}),this.lightGroup.add(c)}}spawn(t,e,n,i,r,o,a,c,l,{grow:h=0,drag:u=1,buoy:d=0,alpha:f=1}={}){let g=this.free.pop();return g===void 0?-1:(this.p[g*3]=e,this.p[g*3+1]=n,this.p[g*3+2]=i,this.v[g*3]=r,this.v[g*3+1]=o,this.v[g*3+2]=a,this.size[g]=c,this.grow[g]=h,this.life[g]=l,this.age[g]=0,this.type[g]=t,this.seed[g]=Math.random(),this.drag[g]=u,this.buoy[g]=d,this.a0[g]=f,this.live.push(g),g)}flashLight(t,e,n){let i=this.lights.reduce((r,o)=>r.k<o.k?r:o);i.L.position.copy(t),i.t=n,i.dur=n,i.k=e}muzzle(t,e,n=1,i=null){let r=Math.random,o=i?.x??0,a=i?.z??0;this.spawn(bt.FLASH,t.x+e.x*.6*n,t.y+e.y*.6,t.z+e.z*.6*n,0,0,0,1.6*n+.3,.07),this.spawn(bt.FLASH,t.x+e.x*1.8*n,t.y+e.y*1.8,t.z+e.z*1.8*n,0,0,0,1.1*n+.2,.05),this.flashLight(t,3e3*n,.09);let c=Math.round(10+26*n);for(let l=0;l<c;l++){let h=(4+r()*26)*Math.sqrt(n),u=.25+r()*.35;this.spawn(bt.SMOKE,t.x,t.y,t.z,o+(e.x+(r()-.5)*u)*h,(e.y+(r()-.3)*u)*h,a+(e.z+(r()-.5)*u)*h,(.5+r()*.8)*(.4+n),18+r()*22,{grow:.22+r()*.25,drag:2.2,buoy:.08,alpha:.9})}n>.5&&this.spawn(bt.SMOKE,t.x-e.x*2.2,t.y+.3,t.z-e.z*2.2,0,.8,0,.5,8,{grow:.2,drag:1.5,buoy:.1,alpha:.7});for(let l=0;l<8*n;l++)this.spawn(bt.EMBER,t.x,t.y,t.z,e.x*30*r()+(r()-.5)*4,e.y*30*r()+r()*3,e.z*30*r()+(r()-.5)*4,.06,.6+r()*.8,{drag:.6})}splash(t,e=1){let n=Math.random,i=Math.round(60*e+20);for(let r=0;r<i;r++){let o=n()*Math.PI*2,a=n()*.6,c=(6+n()*12)*Math.sqrt(e);this.spawn(bt.SPRAY,t.x+Math.cos(o)*a,.1,t.z+Math.sin(o)*a,Math.cos(o)*(.5+n()*2.2),c,Math.sin(o)*(.5+n()*2.2),.12+n()*.2,3.5,{drag:.08})}for(let r=0;r<14*e;r++){let o=n()*Math.PI*2;this.spawn(bt.MIST,t.x+Math.cos(o)*.8,1+n()*6*e,t.z+Math.sin(o)*.8,Math.cos(o)*.8,1+n()*2,Math.sin(o)*.8,1.2+n(),6+n()*4,{grow:.35,drag:1.2,buoy:-.05,alpha:.7})}}splinters(t,e,n=1){let i=Math.random;for(let r=0;r<30*n;r++)this.spawn(bt.SPLINTER,t.x,t.y,t.z,e.x*6*i()+(i()-.5)*9,i()*8,e.z*6*i()+(i()-.5)*9,.05+i()*.12,2.5,{drag:.2});for(let r=0;r<6;r++)this.spawn(bt.SMOKE,t.x,t.y,t.z,(i()-.5)*3,i()*2,(i()-.5)*3,.6,6,{grow:.3,drag:2,alpha:.5})}burn(t,e,n){let i=Math.random;i()<n*30*e&&this.spawn(bt.FLAME,t.x+(i()-.5)*1.5,t.y+i()*.5,t.z+(i()-.5)*1.5,i()-.5,2+i()*3,i()-.5,.8+i()*1.2*e,.6+i()*.5,{grow:.4,drag:1.2,buoy:.5}),i()<n*6*e&&this.spawn(bt.SOOT,t.x+(i()-.5),t.y+1.5,t.z+(i()-.5),0,2+i()*2,0,1+i()*e,14+i()*10,{grow:.45,drag:.8,buoy:.35,alpha:.85}),i()<n*10*e&&this.spawn(bt.EMBER,t.x,t.y+1,t.z,(i()-.5)*2,3+i()*4,(i()-.5)*2,.05,2+i()*2,{drag:.5,buoy:.3})}blast(t,e,n,i){let r=Math.random,o=i?.x??0,a=i?.z??0,c=Math.sqrt(n);for(let h=0;h<3;h++)this.spawn(bt.FLASH,t.x+e.x*(2+h*4)*c,t.y+e.y*(2+h*4)*c,t.z+e.z*(2+h*4)*c,o,0,a,(3-h*.6)*c,.08+h*.015);for(let h=0;h<3*c;h++)this.spawn(bt.FLAME,t.x+e.x*4*c,t.y,t.z+e.z*4*c,o+e.x*60*r()*c,e.y*60*r()+r()*4,a+e.z*60*r()*c,(1.5+r()*2)*c,.25+r()*.2,{grow:3*c,drag:4});this.flashLight(t,12e4*n,.1);let l=Math.round(10+10*c);for(let h=0;h<l;h++){let u=(10+r()*70)*c,d=.35;this.spawn(bt.SMOKE,t.x,t.y,t.z,o+(e.x+(r()-.5)*d)*u,(e.y+(r()-.35)*d)*u,a+(e.z+(r()-.5)*d)*u,(1.5+r()*2.5)*c,5+r()*4,{grow:(1.4+r()*1.2)*c,drag:1.8,buoy:.15,alpha:.4})}if(n>1.5){let h=t.x+e.x*12*c,u=t.z+e.z*12*c;for(let d=0;d<40*c;d++){let f=r()*Math.PI*2,g=8+r()*18;this.spawn(bt.SPRAY,h+Math.cos(f)*3,.3,u+Math.sin(f)*3,o+Math.cos(f)*g,2+r()*4,a+Math.sin(f)*g,.6+r()*.8,1.6,{drag:.5})}for(let d=0;d<8;d++){let f=r()*Math.PI*2;this.spawn(bt.MIST,h+Math.cos(f)*6,2,u+Math.sin(f)*6,Math.cos(f)*10,1,Math.sin(f)*10,4+r()*3,4,{grow:2,drag:1.5,alpha:.5})}}}column(t,e){let n=Math.random,i=e/.36,r=85*i**1.3,o=Math.sqrt(2*9.81*r),a=22*i**1.1,c=Math.round(Math.min(Math.max(230*i**.8,40),460)),l=2*o/9.81;for(let h=0;h<c;h++){let u=n()*Math.PI*2,d=Math.sqrt(n())*a*.45,f=Math.pow(n(),.5),g=o*(.35+.65*f);this.spawn(bt.MIST,t.x+Math.cos(u)*d,.5+n()*2,t.z+Math.sin(u)*d,Math.cos(u)*n()*a*.11,g,Math.sin(u)*n()*a*.11,a*(.26+n()*.2)*(1-.5*f),l*(.9+n()*.4)+1.5,{grow:a*.035,drag:.02,buoy:-9.81,alpha:1})}for(let h=0;h<c*1.2;h++){let u=n()*Math.PI*2,d=n()*a*.5;this.spawn(bt.SPRAY,t.x+Math.cos(u)*d,.5,t.z+Math.sin(u)*d,Math.cos(u)*(1+n()*4)*a/6,o*(.3+.8*n()),Math.sin(u)*(1+n()*4)*a/6,.12+n()*.25*a/6,l+1,{drag:.03})}for(let h=0;h<c*.25;h++){let u=n()*Math.PI*2,d=n()*r*.8;this.spawn(bt.MIST,t.x+Math.cos(u)*a*.3,d,t.z+Math.sin(u)*a*.3,Math.cos(u),.5,Math.sin(u),a*(.35+n()*.25),5+n()*4,{grow:a*.05,drag:.8,buoy:-1.2,alpha:.35})}for(let h=0;h<c*.5;h++){let u=n()*Math.PI*2;this.spawn(bt.MIST,t.x+Math.cos(u)*a*.5,1,t.z+Math.sin(u)*a*.5,Math.cos(u)*(4+n()*6)*a/6,2+n()*3,Math.sin(u)*(4+n()*6)*a/6,a*.35,2.5,{grow:a*.2,drag:.8,buoy:-4,alpha:.8})}}hitBurst(t,e){let n=Math.random,i=e>.3?3:e>.15?1.8:1;this.spawn(bt.FLASH,t.x,t.y,t.z,0,0,0,6*i,.12);for(let r=0;r<14*i;r++)this.spawn(bt.FLAME,t.x+(n()-.5)*3*i,t.y+n()*2*i,t.z+(n()-.5)*3*i,(n()-.5)*18*i,n()*14*i,(n()-.5)*18*i,(2+n()*3)*i,.5+n()*.5,{grow:4*i,drag:3,buoy:2});for(let r=0;r<7*i;r++)this.spawn(bt.SOOT,t.x,t.y+2,t.z,(n()-.5)*6*i,2+n()*5*i,(n()-.5)*6*i,(1.5+n()*1.5)*i,7+n()*6,{grow:.9*i,drag:1.2,buoy:.5,alpha:.75});for(let r=0;r<10*i;r++)this.spawn(bt.SPLINTER,t.x,t.y,t.z,(n()-.5)*30*i,n()*22*i,(n()-.5)*30*i,.1+n()*.15*i,1.6,{drag:.05});for(let r=0;r<20*i;r++)this.spawn(bt.EMBER,t.x,t.y,t.z,(n()-.5)*50,n()*40,(n()-.5)*50,.2*i,1+n(),{drag:.3});this.flashLight(t,3e4*i,.12)}magazine(t,e=1){let n=Math.random;for(let i=0;i<4;i++)this.spawn(bt.FLASH,t.x,t.y+i*15,t.z,0,0,0,40*e,.3);for(let i=0;i<160*e;i++){let r=n()*6.283,o=30+n()*90;this.spawn(bt.FLAME,t.x+Math.cos(r)*5,t.y+5,t.z+Math.sin(r)*5,Math.cos(r)*n()*30,o,Math.sin(r)*n()*30,8+n()*10,1+n()*1.5,{grow:10,drag:1.2,buoy:4})}for(let i=0;i<120*e;i++){let r=n()*6.283,o=20+n()*70;this.spawn(bt.SOOT,t.x+Math.cos(r)*8,t.y+10+n()*40,t.z+Math.sin(r)*8,Math.cos(r)*n()*20,o,Math.sin(r)*n()*20,10+n()*12,30+n()*25,{grow:3.5,drag:.5,buoy:.6,alpha:.95})}for(let i=0;i<200*e;i++)this.spawn(bt.SPLINTER,t.x,t.y+5,t.z,(n()-.5)*120,n()*110,(n()-.5)*120,.5+n()*1.5,6,{drag:.02});this.flashLight(t,4e6*e,.6)}funnel(t,e,n,i){let r=Math.random;r()<n*(4+6*e)&&this.spawn(bt.SOOT,t.x+(r()-.5),t.y,t.z+(r()-.5),(i?.x??0)*.5,2+3*e,(i?.z??0)*.5,1.6+r()*.8,16+r()*10,{grow:.55,drag:.25,buoy:.05,alpha:.1+.14*e})}bigFire(t,e,n){let i=Math.random;i()<n*12*e&&this.spawn(bt.FLAME,t.x+(i()-.5)*8,t.y+i()*2,t.z+(i()-.5)*8,(i()-.5)*2,4+i()*5,(i()-.5)*2,3+i()*4*e,.8+i()*.6,{grow:1.5,drag:1.2,buoy:1}),i()<n*7*e&&this.spawn(bt.SOOT,t.x+(i()-.5)*4,t.y+4,t.z+(i()-.5)*4,0,5+i()*4,0,4+i()*3*e,25+i()*15,{grow:1.6,drag:.6,buoy:.3,alpha:.9})}update(t,e,n){let i=n.matrixWorld.elements;this.U.uCamR.value.set(i[0],i[1],i[2]),this.U.uCamU.value.set(i[4],i[5],i[6]);let r=this.wind.uniforms.uWind.value,o=this.blend,a=this.add,c=0,l=0,h=[];for(let u of this.live){this.age[u]+=t;let d=this.life[u];if(this.age[u]>=d){this.free.push(u);continue}h.push(u);let f=this.type[u],g=u*3,v=this.v,m=this.p,p=this.drag[u],y=f===bt.SPRAY||f===bt.SPLINTER||f===bt.EMBER,x=1-Math.exp(-p*t);v[g]+=(r.x-v[g])*x,v[g+2]+=(r.y-v[g+2])*x,v[g+1]+=(y?-9.81*t:0)+this.buoy[u]*t-v[g+1]*(y?0:x),m[g]+=v[g]*t,m[g+1]+=v[g+1]*t,m[g+2]+=v[g+2]*t,(y||this.buoy[u]<-5)&&m[g+1]<0&&(this.age[u]=d),this.size[u]+=this.grow[u]*t*(f===bt.SMOKE?Math.max(.2,1-this.age[u]/d)*2:1);let w=this.age[u]/d,A=this.a0[u];f===bt.SMOKE||f===bt.SOOT||f===bt.MIST?A*=Math.min(w*12,1)*Math.pow(1-w,1.5):f===bt.FLAME?A*=Math.sin(Math.PI*Math.min(w*1.3,1)):f===bt.FLASH?A*=1-w:A*=1-w*w;let R=f>=bt.FLASH&&f!==bt.MIST?a:o,C=R===a?l++:c++;R.aP.array.set([m[g],m[g+1],m[g+2],this.size[u]],C*4),R.aD.array.set([f,w,this.seed[u],A],C*4)}this.live=h,o.g.instanceCount=c,a.g.instanceCount=l;for(let u of[o,a])u.aP.needsUpdate=!0,u.aD.needsUpdate=!0;for(let u of this.lights)u.t>0?(u.t-=t,u.L.intensity=u.k*Math.max(u.t/u.dur,0)):u.L.intensity=0}clear(){for(let t of this.live)this.free.push(t);this.live=[]}setAmbient(t,e){this.U.uAmbUp.value.copy(t),this.U.uAmbDn.value.copy(e)}};var Jh=1025,nc=9.81,ts=()=>new b,Ob=[-.35,0,.33,.66,1],so={bb:{kn:27,turnD:4.6,gm:2.4,pumps:2.5,armor:.75},bc:{kn:31,turnD:5,gm:2,pumps:2.2,armor:.5},cl:{kn:35,turnD:3.9,gm:1.3,pumps:1,armor:.3},ca:{kn:33,turnD:4.2,gm:1.6,pumps:1.4,armor:.45},dd:{kn:36,turnD:3.6,gm:.9,pumps:.6,armor:.1},tr:{kn:14,turnD:4,gm:1.4,pumps:1.2,armor:0},cv:{kn:32,turnD:4.6,gm:2,pumps:2,armor:.35},wh:{kn:26,turnD:5.2,gm:2.8,pumps:3.5,armor:.85},sp:{kn:26,turnD:5.2,gm:2.8,pumps:3.5,armor:.85}},Fb=.5144,ic=class{constructor(t,e){this.meta=t,this.sea=e,this.kind=t.kind,this.K=so[t.kind];let n=t.L,i=t.B,r=t.T;this.V0=n*i*r*.58,this.mass0=Jh*this.V0,this.reserve=n*i*(t.D-r)*.62,this.vmax=this.K.kn*Fb,this.cR=this.mass0*.0016/n,this.P=this.cR*this.vmax**3*1.08,this.pos=ts(),this.vel=ts(),this.yaw=0,this.yawRate=0,this.quat=new fe,this.ctl={tele:3,rudder:0},this.power=0,this.rudder=0,this.heave=0,this.heaveV=0,this.roll=0,this.rollV=0,this.pitchA=0,this.pitchV=0,this.list=0,this.trim=0,this.sinkY=0,this.kickRoll=0,this.comp=[];for(let o=0;o<5;o++)for(let a of[1,-1])this.comp.push({f:(o-2)/5*n,x:a*i*.25,water:0,cap:this.V0*.11,holes:[]});this.water=0,this.sunk=!1,this.founder=0,this.capsize=0,this.gm=this.K.gm,this.sinkBase=0,this.tmp={v:ts(),q:new fe,e:new Xi(0,0,0,"YXZ")},this.updateQuat()}applyFit(t){this.mass0+=t.dW*1e3,this.V0=this.mass0/Jh,this.gm=t.gm,this.sinkBase=t.sink,this.vmax*=t.speedK,this.reserve=Math.max(this.reserve-t.sink*this.meta.L*this.meta.B*.62,this.reserve*.1),t.freeboard<=.3&&this.startFounder()}place(t,e,n,i=0){this.pos.set(t,0,e),this.yaw=n,this.yawRate=0,this.vel.set(Math.sin(n)*i,0,Math.cos(n)*i),this.power=i/this.vmax,this.updateQuat()}get heading(){return this.yaw}get speed(){return this.vel.x*Math.sin(this.yaw)+this.vel.z*Math.cos(this.yaw)}get heel(){return this.roll+this.list}get pitch(){return this.pitchA+this.trim}forward(t=ts()){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}toWorld(t,e=ts()){return e.copy(t).applyQuaternion(this.quat).add(this.pos)}toLocal(t,e=ts()){return e.copy(t).sub(this.pos).applyQuaternion(this.tmp.q.copy(this.quat).invert())}pointVel(t,e=ts()){let n=this.tmp.v.subVectors(t,this.pos);return e.set(this.vel.x+this.yawRate*n.z,0,this.vel.z-this.yawRate*n.x)}hole(t,e){let n=this.comp[0],i=1e9;for(let r of this.comp){let o=Math.abs(r.f-t.z)+(Math.sign(r.x)!==Math.sign(t.x||1)?1e4:0);o<i&&(i=o,n=r)}n.holes.push({p:t.clone(),a:e})}impulse(t,e){let n=this.toLocal(e,ts()),i=new b(Math.cos(this.yaw),0,-Math.sin(this.yaw)),r=this.mass0*(.38*this.meta.B)**2;this.rollV+=t.dot(i)*Math.max(n.y+this.meta.T*.4,1)/r,this.vel.x+=t.x/this.mass0*.6,this.vel.z+=t.z/this.mass0*.6}updateQuat(){let t=this.tmp.e;t.set(-(this.pitchA+this.trim),this.yaw,-(this.roll+this.list)*1,"YXZ"),this.quat.setFromEuler(t)}step(t,e){let n=this.meta,i=this.K,r=this.ctl,o=!this.sunk&&this.founder<=0,a=o?(r.pow??Ob[pt.clamp(r.tele,0,4)])*(1-Math.min(this.water/this.reserve,1)*.6):0;this.power+=pt.clamp(a-this.power,-t*.12,t*.08),this.rudder+=pt.clamp((o?r.rudder:.3)-this.rudder,-t*.35,t*.35);let c=Math.sin(this.yaw),l=Math.cos(this.yaw),h=this.vel.x*c+this.vel.z*l,u=this.vel.x*l-this.vel.z*c,d=this.mass0*1.08+this.water*Jh,f=this.power>=0?this.P*this.power/Math.max(Math.abs(h),this.vmax*.18):this.P*this.power/Math.max(Math.abs(h),this.vmax*.18)*.7,g=Math.abs(h)/Math.sqrt(nc*n.L),v=this.cR*h*Math.abs(h)*(1+6*Math.max(g-.3,0)**2)*(1+this.water/this.V0*3),m=Math.abs(this.yawRate)*Math.abs(h)*d*.35,p=(f-v-m*Math.sign(h))/d,y=-u*Math.abs(u)*this.cR*30/d-u*.15,x=i.turnD*n.L/2,w=h/x*(this.rudder/.6)*-1,A=6+n.L/18;this.yawRate+=(w-this.yawRate)*(1-Math.exp(-t/A)),o||(this.yawRate*=Math.exp(-t*.2)),this.yaw+=this.yawRate*t,y+=-this.yawRate*h*.25;let R=h+p*t,C=u+y*t,U=Math.sin(this.yaw),_=Math.cos(this.yaw);this.vel.set(R*U+C*_,0,R*_-C*U),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;let E=n.L*.38,N=n.B*.42,G=(Dt,Et)=>Fa(this.sea,this.pos.x+U*Dt+_*Et,this.pos.z+_*Dt-U*Et,e,1),j=G(E,0),P=G(-E,0),D=G(0,-N),H=G(0,N),$=(j+P+D+H)/4,X=Math.max(this.gm,.02),W=Math.sqrt(nc/n.T)*.55,Y=2*Math.PI/(.8*n.B/Math.sqrt(X)),Z=Math.sqrt(nc/n.T)*.5,ct=pt.clamp(.55+this.gm/n.B*9,.35,1.25),V=.35;this.heaveV+=(-(this.heave-$)*W*W-2*V*W*this.heaveV)*t,this.heave+=this.heaveV*t;let K=Math.atan2(H-D,2*N)*.6,at=Math.atan2(j-P,2*E)*.8,vt=pt.clamp(-this.yawRate*h*.012*(2.5/i.gm),-.12,.12),dt=this.roll-K-vt,It=Math.sin(dt)*(1-Math.min((dt/ct)**2,1.5))+(this.gm<.05?-.03*Math.sign(dt||1):0);this.rollV+=(-It*Y*Y-2*.06*Y*this.rollV)*t,this.roll+=this.rollV*t,Math.abs(this.roll+this.list)>ct&&this.founder<=0&&(this.capsized=!0,this.startFounder("capsize"),this.fRoll=Math.sign(this.roll+this.list)),this.founder>0&&this.fRoll&&(this.roll+=(this.fRoll*Math.min(this.founder/6,1)*2.4-this.roll)*(1-Math.exp(-t*.6)),this.rollV=0),this.pitchV+=(-(this.pitchA-at)*Z*Z-2*V*Z*this.pitchV)*t,this.pitchA+=this.pitchV*t,this.floodStep(t,e),this.founder>0&&this.founderStep(t),this.pos.y=this.heave-this.sinkY-this.sinkBase,this.updateQuat()}floodStep(t){let e=0,n=0,i=0,r=this.K.pumps*(this.founder>0?0:1),o=this.meta.T;for(let h of this.comp){let u=0;for(let d of h.holes){let g=-(d.p.y-this.sinkY+Math.sin(this.list)*-d.p.x*.5-Math.sin(this.trim)*d.p.z);g>0&&(u+=.62*d.a*Math.sqrt(2*nc*g)*(this.floodK??1))}h.water=pt.clamp(h.water+(u-(h.water>0?r/10:0))*t,0,h.cap*(this.founder>0?3:1)),e+=h.water,n+=h.water*h.x,i+=h.water*h.f}this.water=e;let a=Math.min(e/this.reserve,1),c=e>1?pt.clamp(-n/e/this.meta.B*.9*a*1.4,-.5,.5):0,l=e>1?pt.clamp(i/e/this.meta.L*.5*a,-.25,.25):0;return this.list+=(c-this.list)*(1-Math.exp(-t*.15)),this.founder<=0&&(this.trim+=(l-this.trim)*(1-Math.exp(-t*.15))),this.founder<=0&&(this.sinkY+=(e/(this.meta.L*this.meta.B*.7)-this.sinkY)*(1-Math.exp(-t*.3))),e>this.reserve*.92&&this.founder<=0&&this.startFounder(),o}startFounder(t){if(this.founder>0)return;this.founder=.001;let e=0,n=0,i=0;for(let r of this.comp)e+=r.water*r.f,n+=r.water*r.x,i+=r.water;this.fEnd=i>0?Math.sign(e||1):Math.random()<.5?1:-1,this.fRoll=Math.abs(this.list)>.18||t==="capsize"?Math.sign(this.list||n||1):0,this.fBreak=t==="magazine"}founderStep(t){this.founder+=t;let e=this.founder,n=this.meta.L,i=this.fBreak?40:{bb:120,bc:110,ca:90,cl:80,dd:60}[this.kind],r=Math.min(e/i,1);this.trim+=((this.fBreak?.05:.18+.3*r*r)*this.fEnd*Math.min(e/20,1)-this.trim)*(1-Math.exp(-t*.2)),this.fRoll&&!this.capsized&&(this.list+=(Math.min(e/i*2.2,1)**2*2.6*this.fRoll-this.list)*(1-Math.exp(-t*.3))),this.sinkY+=t*(.04+.5*r*r)*(n/150),this.sinkY>this.meta.D+Math.abs(Math.sin(this.trim))*n*.5+25&&(this.sunk=!0)}};var xp=[12.7,15.5,20,25,36,41,46,51,61,80],ro={bb:36,bc:36,ca:20,cl:15.5,dd:12.7,tr:12.7,cv:12.7,wh:51,sp:51},zb={bb:2.4,bc:2,ca:1.6,cl:1.3,dd:.9,tr:1.4,cv:2,wh:2.8,sp:2.8},gp=1.025;function oo(s,t){return 1e3*(s/36)**2.6*(.55+.45*t)/1.45}function vp(){return 60}function Bb(s,t){let e=s.stations,n=e[0],i=e[e.length-1];for(let c=0;c+1<e.length;c++)if(e[c][0]<=t&&e[c+1][0]>=t){n=e[c],i=e[c+1];break}let r=(t-n[0])/Math.max(i[0]-n[0],1e-6),o=n[1][n[1].length-1],a=i[1][i[1].length-1];return{y:o[1]+(a[1]-o[1])*r,hb:o[0]+(a[0]-o[0])*r}}function es(s){let t=s.turrets.map((i,r)=>({id:"s"+r,at:i.at.slice(),home:i.home??(i.at[2]>=0?0:Math.PI),arc:i.arc.slice(),stock:r,r:i.r})),e=s.L;return({bb:[[.43,0],[-.4,0],[.12,1],[-.16,1],[.12,-1],[-.16,-1]],ca:[[.42,0],[-.4,0],[0,1],[0,-1]],dd:[[0,1],[0,-1],[.18,0]],cl:[[.42,0],[-.42,0],[-.12,1],[-.12,-1]],bc:[[.43,0],[-.41,0],[.15,1],[-.2,1],[.15,-1],[-.2,-1]],sp:[[.44,0],[-.42,0],[.16,1],[-.22,1],[.16,-1],[-.22,-1]]}[s.kind]??[]).forEach(([i,r],o)=>{let a=i*e,c=Bb(s,a),l=r?r*c.hb*.62:0,h=r?r>0?-Math.PI/2:Math.PI/2:a>=0?0:Math.PI,u=r?1.35:2.5;t.push({id:"x"+o,at:[l,c.y+.2,a],home:h,arc:[h-u,h+u],stock:-1,r:s.B*.18,wing:r})}),t}function Un(s,t){let e=t.turrets.map((i,r)=>({slot:"s"+r,type:"gun",cal:ro[s],n:i.guns??2,tier:1}));if(s==="dd"||s==="cl")for(let i of es(t))i.wing&&e.push({slot:i.id,type:"torp"});let n={kind:s,mounts:e,aa:{ha:0,mg:0}};return s==="cv"&&(n.air={f:3,t:4,b:3}),n}function Zn(s,t){let e=s.kind,n=t.kinds[e].meta,i=es(n),r=[],o=[],a=0,c=0,l=0;for(let _ of n.turrets){let E=oo(ro[e],_.guns??2);l+=E}let h=n.turrets.reduce((_,E)=>_+(E.at[1]+2)*oo(ro[e],E.guns??2),0)/Math.max(l,1);for(let _ of s.mounts){let E=i.find(W=>W.id===_.slot);if(!E||_.type==="none")continue;if(_.type==="torp"){o.push({slot:E,at:E.at,side:E.wing||1,home:E.home}),a+=vp(),c+=vp()*E.at[1];continue}let N=E.stock>=0&&_.cal===ro[e]&&(n.turrets[E.stock].guns??2)===_.n,G=_.cal,j=Math.max(1,Math.min(N?4:3,_.n)),P=N?e:G>=28?"bb":G>=15?"ca":"dd",D=N?n.turrets[E.stock]:t.kinds[P].meta.turrets[0],H=N?1:G/ro[P],$=N?1:j===1?.72:j===2?1:1.42,X=((D.top??D.at[1]+4)-D.at[1]+1.2)*H;for(let W=0;W<Math.max(1,Math.min(3,_.tier??1));W++){let Y=[E.at[0],E.at[1]+W*X,E.at[2]];r.push({at:Y,home:E.home,arc:E.arc,guns:j,gap:D.gap*H,trunnion:[0,D.trunnion[1]*H,D.trunnion[2]*H],barrel_len:D.barrel_len*H,gun:Zh(G),geo:P,scale:H,wide:$,slot:E.id,tier:W});let Z=oo(G,j);a+=Z,c+=Z*(Y[1]+2*H)}}let u={ha:s.aa?.ha??0,mg:s.aa?.mg??0},d=u.ha*30+u.mg*6;a+=d,c+=u.ha*30*(n.deck_top+5)+u.mg*6*(n.deck_top+3);let f=n.L*n.B*n.T*.58*gp,g=a-l,v=f+g,m=.62*n.D-n.T,p=c-h*l,y=m+(p-g*m)/v,x=g/(n.L*n.B*.7*gp),w=e==="cv"?{f:3,t:4,b:3,...s.air??{}}:null,A=zb[e]-.5*(y-m)+.1*x-(w?.04*(w.f+w.t+w.b):0),R=Math.max(.3,(f/v)**.33),C=r.reduce((_,E)=>_+Se[E.gun].m*E.guns,0)/1e3,U=n.D-n.T-x;return{kind:e,mounts:r,torps:o,disp:v,dW:g,gm:A,sink:x,speedK:R,broadside:C,freeboard:U,aa:u,air:w,ok:A>.05&&U>.3}}var ui={speed:24.7,run:6e3,depth:3,dmg:70,hole:14},yp=320,Hb=new fe,_p=new b,Vb=new b,bp=new mt,sc=class{constructor(t){this.fx=t,this.list=[],this.events=[];let e=new jn(1,1).rotateX(-Math.PI/2).translate(0,0,-.5),n=new pe({transparent:!0,depthWrite:!1,uniforms:{uLen:{value:yp}},vertexShader:`
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
        }`});this.mesh=new Qe(e,n,256),this.attr=new dn(new Float32Array(256*2),2),this.mesh.geometry.setAttribute("aT",this.attr),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=5}launch(t,e,n,i){let r=new b(n.x,0,n.z).normalize();this.list.push({from:t,p:new b(e.x,-ui.depth,e.z),p0:new b(e.x,0,e.z),d:r,run:0,max:t.oxy?ui.run*2:ui.run,t0:i,alive:!0,fade:1,seed:Math.random()}),this.fx.spawn(7,e.x,1,e.z,r.x*4,2,r.z*4,3,2,{grow:2,drag:1,buoy:-2,alpha:.6}),this.events.push({kind:"launch",type:"torp",at:e.clone(),from:t})}update(t,e,n){for(let o of this.list){if(!o.alive){o.fade-=t/20;continue}let a=ui.speed*t,c=_p.copy(o.p);if(o.p.addScaledVector(o.d,a),o.run+=a,o.run>o.max){o.alive=!1;continue}for(let l of n){if(l===o.from||l.gone||l.body.sunk||o.run<60)continue;let h=l.body,u=l.meta.L*.55;if((h.pos.x-o.p.x)**2+(h.pos.z-o.p.z)**2>u*u)continue;let d=Vb.copy(o.p).sub(h.pos).applyQuaternion(Hb.copy(h.quat).invert()),f=l.meta.L,g=l.meta.B,v=Math.abs(d.z)/(f/2);if(v<1&&Math.abs(d.x)<g/2*Math.sqrt(Math.max(0,1-v**2.4))&&d.y>-l.meta.T-1){o.alive=!1;let m=new b(o.p.x,0,o.p.z);this.events.push({kind:"torphit",type:"torp",ship:l,local:d.clone(),world:m,from:o.from});break}}Math.random()<t*8&&this.fx.spawn(7,o.p.x,.3,o.p.z,Math.random()-.5,.6,Math.random()-.5,1.2,3,{grow:.8,drag:1.5,buoy:-.5,alpha:.5})}this.list=this.list.filter(o=>o.alive||o.fade>0);let i=0;for(let o of this.list){let a=Math.min(o.run,yp);if(a<1)continue;let c=Math.atan2(o.d.x,o.d.z);if(bp.makeRotationY(c).scale(_p.set(7,1,a)).setPosition(o.p.x,.15,o.p.z),this.mesh.setMatrixAt(i,bp),this.attr.setXY(i,Math.max(o.fade,0),o.seed),++i>=256)break}this.mesh.count=i,this.mesh.instanceMatrix.needsUpdate=!0,this.attr.needsUpdate=!0;let r=this.events;return this.events=[],r}};var lo=5,Mp=8,wp={f:{speed:125,alt:450},t:{speed:85,alt:160},b:{speed:95,alt:800}},ho={dd:[0,2],cl:[2,4],ca:[4,6],bc:[6,8],bb:[8,10],cv:[8,12],wh:[16,24],sp:[16,24],tr:[0,2]},Cp={dd:4,cl:8,ca:10,bc:14,bb:18,cv:18,sp:24,wh:0,tr:0},eu=10,Gb=6e3,Wb=1500,Sp=.0055,Xb=.011,$b=16e3,ao=3,Ep=13,Tp=1.6,Ap=40,co=new b,Qh=new b,rc=new mt,oc=new fe,Rp=new Xi,tu=new b,ie=()=>Math.random();function qb(){let s=[new fn(.55,.35,9,8).rotateX(Math.PI/2),new Kn(12,.22,2.2).translate(0,-.2,.8),new Kn(4.2,.16,1.2).translate(0,.1,-3.8),new Kn(.16,1.7,1.3).translate(0,.85,-3.9),new fn(.62,.62,.5,10).rotateX(Math.PI/2).translate(0,0,4.6)],t=[],e=[],n=[],i=0;for(let o of s){let a=o.toNonIndexed();a.computeVertexNormals();let c=a.attributes.position.array,l=a.attributes.normal.array;for(let h=0;h<c.length;h++)t.push(c[h]*2),e.push(l[h]);for(let h=0;h<c.length/3;h++)n.push(i+h);i+=c.length/3}let r=new ye;return r.setAttribute("position",new Zt(t,3)),r.setAttribute("normal",new Zt(e,3)),r.setIndex(n),r}var ac=class{constructor({battle:t,fx:e,torps:n,patch:i}){this.b=t,this.fx=e,this.torps=n,this.sq=[],this.falling=[],this.group=new we,this.patch=i;let r=qb();this.mesh={};for(let[o,a]of[["A",2369579],["E",10199718]]){let c=new pn({color:a,roughness:.55,metalness:.35});i?.(c);for(let l of["f","t","b"]){let h=new Qe(r,c,120);h.count=0,h.frustumCulled=!1,this.mesh[o+l]=h,this.group.add(h)}}this.scale=1,this.prop=null,this.labels=new Map,this.events=[]}async load(t,e=8){let n;try{let v=await fetch(`${t}planes.json`);if(!v.ok)return;n=await v.json()}catch{return}let i=new ji,r=async(v,m)=>{let p=await i.loadAsync(t+v);return p.flipY=!1,p.colorSpace=m?se:Ke,p.anisotropy=e,p},[o,a,c,l]=await Promise.all([r("planes_base.webp",!0),r("planes_base_e.webp",!0),r("planes_orm.webp",!1),new vr().loadAsync(t+"planes.glb")]),h=v=>{let m=null;return l.scene.traverse(p=>{!m&&p.name===v&&p.geometry&&(m=p.geometry)}),m||l.scene.traverse(p=>{!m&&p.geometry&&p.parent?.name===v&&(m=p.geometry)}),m},u={f:"fighter",t:"attack",b:"bomber"},d=1.8;for(let[v,m]of[["A",o],["E",a]]){let p=new pn({map:m,aoMap:c,roughnessMap:c,metalnessMap:c,roughness:1,metalness:1,envMapIntensity:.7});this.patch?.(p);for(let y of["f","t","b"]){let x=h(u[y]);if(!x)continue;let w=this.mesh[v+y],A=new Qe(x.clone().scale(d,d,d),p,120);A.count=0,A.frustumCulled=!1,this.group.remove(w),this.group.add(A),this.mesh[v+y]=A}}let f=new cr(1,24),g=new Je({color:2763306,transparent:!0,opacity:.14,depthWrite:!1,side:ln});return this.prop=new Qe(f,g,260),this.prop.count=0,this.prop.frustumCulled=!1,this.group.add(this.prop),this.meta={f:n.fighter,t:n.attack,b:n.bomber},this.S=d,this.meshes()}meshes(){return Object.values(this.mesh)}reset(){this.sq.length=0,this.falling.length=0;for(let t of this.labels.values())t.remove();this.labels.clear()}airborne(t){return this.sq.filter(e=>e.n>0&&(!t||e.side===t)).length}launchStep(t,e){let n=t.wing;if(!n||!t.alive||(n.cool-=e,n.deck=Math.max(0,n.deck-e),n.cool>0||n.deck>0||t.body.founder>0)||this.airborne()>=Mp||this.airborne(t.side)>=Mp/2)return;let i=this.b.ships.filter(c=>c.side!==t.side&&c.alive);if(this.sq.some(c=>c.side!==t.side&&c.n>0&&c.kind!=="f")&&n.planes.f>=2&&!this.sq.some(c=>c.side===t.side&&c.kind==="f"&&c.job==="cap"))return this.launch(t,"f",{job:"cap"});let o=t.focus?.alive?t.focus:null;if(!o){let c=-1;for(let l of i){let h=l.body.pos.distanceTo(t.body.pos);if(h>$b)continue;let u=({wh:9,sp:9,cv:8,bb:7,bc:6,tr:5.5,ca:4,cl:3,dd:2}[l.kind]??3)-h/8e3;u>c&&(c=u,o=l)}}if(!o)return;n.turn=(n.turn??0)+1;let a=n.turn%3===0?["f","t","b"]:n.turn%2?["t","b","f"]:["b","t","f"];for(let c of a)if(!(n.planes[c]<2)){if(c==="f"){let l=this.sq.filter(h=>h.side===t.side&&h.kind!=="f"&&h.job==="strike"&&h.n>0).pop();if(!l)continue;return this.launch(t,"f",{job:"escort",escort:l,target:o})}return this.launch(t,c,{job:"strike",target:o})}}launch(t,e,n){let i=t.wing,r=Math.min(lo,i.planes[e]);i.planes[e]-=r,i.cool=9+ie()*3;let o={y:t.meta.deck_top+8.7+1.7,z0:-t.meta.L*.3},a=t.body.toWorld(co.set(0,o.y,o.z0),new b),c={side:t.side,kind:e,n:r,n0:r,home:t,pos:a,yaw:t.body.yaw,pitch:0,alt:a.y,speed:t.body.speed,job:n.job,target:n.target??null,escort:n.escort??null,state:"up",t:0,dmg:0,id:Math.random(),deck:o,trail:[]};this.sq.push(c),this.events.push({kind:"launch",side:t.side,plane:e})}update(t,e){this.events.length>200&&this.events.splice(0,this.events.length-100);for(let n of this.b.ships)n.wing&&this.launchStep(n,t);for(let n of this.sq)this.fly(n,t,e);this.aaStep(t),this.dogfights(t);for(let n of this.sq)if(n.n>0&&n.dmg>=1)for(;n.dmg>=1&&n.n>0;)n.dmg-=1,n.n--,this.shotDown(n);this.sq=this.sq.filter(n=>n.n>0&&n.state!=="landed");for(let n of this.falling)n.t+=t,n.vel.y-=9.81*t,n.pos.addScaledVector(n.vel,t),n.rot+=t*2.5,ie()<t*25&&this.fx.spawn(bt.SOOT,n.pos.x,n.pos.y,n.pos.z,0,1,0,3+ie()*2,5,{grow:1.5,drag:1,buoy:.2,alpha:.6});for(let n of this.falling)n.pos.y<=0&&!n.splashed&&(n.splashed=!0,this.fx.column(new b(n.pos.x,0,n.pos.z),.1));this.falling=this.falling.filter(n=>n.pos.y>-5)}shotDown(t){let e=this.placeOf(t,t.n,new b),n=e.yaw+(ie()-.5)*.25,i=e.pos.clone().add(co.set((ie()-.5)*.4,(ie()-.5)*.4,(ie()-.5)*.4)),r=t.speed*.85;this.falling.push({side:t.side,kind:t.kind,pos:i,vel:new b(Math.sin(n)*Math.cos(e.pitch)*r,Math.sin(e.pitch)*r-4,Math.cos(n)*Math.cos(e.pitch)*r),yaw:n,pitch0:e.pitch,bank0:e.bank,rot:0,t:0}),this.fx.spawn(bt.FLASH,i.x,i.y,i.z,0,0,0,10,.1),this.events.push({kind:"downed",side:t.side,plane:t.kind,at:i.clone()})}placeOf(t,e,n){let i=Math.ceil(e/2),r=e%2?1:-1,o=e?r*i*34:0,a=-i*30,c=Math.cos(t.yaw),l=Math.sin(t.yaw);n.set(t.pos.x+o*c+a*l,t.pos.y-i*4+Math.sin(t.t*1.3+e)*2,t.pos.z-o*l+a*c);let h=t.t-e*Tp,u=t.trail?pt.smoothstep(h,ao+6,ao+14):1,d=t.yaw,f=t.pitch,g=t.bank??0;if(u<1){let v=new b,m=t.yaw,p=t.pitch,y=t.bank??0;if(h<ao)this.deckPos(t,h,v),m=t.home.body.yaw,p=0,y=0;else{let x=t.trail[Math.min(t.trail.length-1,Math.max(0,Math.round(h*60)))];x?(v.copy(x.p),m=x.yaw,p=x.pitch,y=x.bank):v.copy(n)}n.copy(v.lerp(n,u)),d=m+(d-m)*u,f=p+(f-p)*u,g=y*(1-u)+g*u}return{pos:n,yaw:d,pitch:f,bank:g,parked:h<0}}steer(t,e,n,i,r,o=wp[t.kind].speed){let a=Math.atan2(e-t.pos.x,n-t.pos.z),c=pt.euclideanModulo(a-t.yaw+Math.PI,Math.PI*2)-Math.PI;t.yaw+=pt.clamp(c,-.35*r,.35*r),t.speed+=(o-t.speed)*Math.min(r*.5,1);let l=pt.clamp(i-t.pos.y,-t.speed*.35,t.speed*.25);return t.pitch=Math.atan2(l,t.speed),t.pos.x+=Math.sin(t.yaw)*t.speed*r,t.pos.z+=Math.cos(t.yaw)*t.speed*r,t.pos.y+=l*r,t.bank=pt.clamp(-c*1.2,-.7,.7),Math.hypot(e-t.pos.x,n-t.pos.z)}fly(t,e,n){t.t+=e;let i=wp[t.kind],r=t.home;if(t.trail&&t.t<Ap&&t.trail.push({p:t.pos.clone(),yaw:t.yaw,pitch:t.pitch,bank:t.bank??0}),t.state==="up"){if(t.t<ao){this.deckPos(t,t.t,t.pos),t.yaw=r.body.yaw,t.pitch=0,t.speed=r.body.speed+Ep*t.t;return}t.speed=Math.min(t.speed+e*6,i.speed),t.pitch=Math.min(t.pitch+e*.12,.16),t.pos.x+=Math.sin(t.yaw)*Math.cos(t.pitch)*t.speed*e,t.pos.z+=Math.cos(t.yaw)*Math.cos(t.pitch)*t.speed*e,t.pos.y+=Math.sin(t.pitch)*t.speed*e,t.t>ao+6&&(t.state=t.job==="cap"?"cap":"out",t.pitch=.05);return}if(t.state==="home"){if(!r.alive||r.body.founder>0){t.ditch=(t.ditch??0)+e,t.ditch>60&&(t.n=0),this.steer(t,r.body.pos.x,r.body.pos.z,120,e);return}this.steer(t,r.body.pos.x,r.body.pos.z,120,e)<350&&(r.wing.planes[t.kind]+=t.n,t.state="landed",this.events.push({kind:"landed",side:t.side}));return}if(t.state==="cap"){let h=(this.b.ships.find(d=>d.side===t.side&&d.flagship&&d.alive)??r).body.pos,u=this.nearestFoe(t,8e3,h);if(u)t.chase=u,this.steer(t,u.pos.x,u.pos.z,u.pos.y,e,i.speed*1.15);else{let d=n*.08+t.id*6;this.steer(t,h.x+Math.sin(d)*1500,h.z+Math.cos(d)*1500,i.alt,e)}t.t>240&&(t.state="home");return}if(t.job==="escort"){let h=t.escort,u=this.nearestFoe(t,3500,t.pos);if(u){this.steer(t,u.pos.x,u.pos.z,u.pos.y,e,i.speed*1.15);return}if(!h||h.n<=0||h.state==="home"||h.state==="landed"){t.state="home";return}this.steer(t,h.pos.x-Math.sin(h.yaw)*200+150,h.pos.z-Math.cos(h.yaw)*200,h.pos.y+150,e,Math.max(h.speed,80));return}let o=t.target;if(!o?.alive){let h=this.b.ships.filter(u=>u.side!==t.side&&u.alive).sort((u,d)=>u.body.pos.distanceTo(t.pos)-d.body.pos.distanceTo(t.pos))[0];if(h&&h.body.pos.distanceTo(t.pos)<9e3)t.target=h;else{t.state="home";return}return}let a=o.body.pos,c=o.body.vel,l=Math.hypot(a.x-t.pos.x,a.z-t.pos.z);if(t.kind==="t"){let h=Math.min(l/i.speed,40)+40.48582995951417,u=a.x+c.x*h*.6,d=a.z+c.z*h*.6,f=l<5e3?30:i.alt;this.steer(t,u,d,f,e),l<1100&&t.pos.y<60&&this.dropTorpedoes(t,o,n)}else if(t.state!=="dive"&&l<1300&&(t.state="dive"),t.state==="dive"){let u=a.x+c.x*4,d=a.z+c.z*4;t.yaw+=pt.clamp(pt.euclideanModulo(Math.atan2(u-t.pos.x,d-t.pos.z)-t.yaw+Math.PI,Math.PI*2)-Math.PI,-e,e),t.speed=Math.min(t.speed+e*25,150);let f=Math.hypot(u-t.pos.x,d-t.pos.z),g=Math.atan2(t.pos.y-250,Math.max(f,1));t.pitch=-Math.min(g,1.25),t.pos.x+=Math.sin(t.yaw)*Math.cos(t.pitch)*t.speed*e,t.pos.z+=Math.cos(t.yaw)*Math.cos(t.pitch)*t.speed*e,t.pos.y+=Math.sin(t.pitch)*t.speed*e,(t.pos.y<=260||f<60)&&this.dropBombs(t,o)}else this.steer(t,a.x,a.z,i.alt,e)}deckPos(t,e,n){let i=t.home.body,r=t.deck,o=e<0?r.z0-13*Math.ceil(-e/Tp):r.z0+.5*Ep*e*e;return i.toWorld(co.set(0,r.y,o),n)}nearestFoe(t,e,n){let i=null,r=e;for(let o of this.sq){if(o.side===t.side||o.n<=0||o.state==="up")continue;let a=o.pos.distanceTo(n);a<r&&(r=a,i=o)}return i}dropTorpedoes(t,e,n){let i=e.body.pos,r=e.body.vel,o=i.x,a=i.z;for(let l=0;l<4;l++){let h=Math.hypot(o-t.pos.x,a-t.pos.z)/24.7;o=i.x+r.x*h,a=i.z+r.z*h}let c=Math.atan2(o-t.pos.x,a-t.pos.z);for(let l=0;l<t.n;l++){let h=(l-(t.n-1)/2)*40,u=new b(t.pos.x+Math.cos(t.yaw)*h,0,t.pos.z-Math.sin(t.yaw)*h),d=c+(l-(t.n-1)/2)*.03;this.torps.launch(t.home,u,new b(Math.sin(d),0,Math.cos(d)),n),this.fx.spawn(bt.SPRAY,u.x,1,u.z,0,6,0,2,1.2)}this.events.push({kind:"drop",side:t.side,plane:"t",at:t.pos.clone()}),t.state="home"}dropBombs(t,e){let i=.36*(1-(Math.min(Math.max(e.body.speed,0)/18,1)*.35+Math.min(Math.abs(e.body.yawRate)*12,.2))),r=0;for(let o=0;o<t.n;o++)if(ie()<i)r++;else{let a=ie()*6.283,c=25+ie()*60;this.fx.column(new b(e.body.pos.x+Math.sin(a)*(e.meta.B/2+c),0,e.body.pos.z+Math.cos(a)*(e.meta.B/2+c)),.14)}for(let o=0;o<r;o++)this.b.bombHit(e,t.home);this.events.push({kind:"drop",side:t.side,plane:"b",at:t.pos.clone(),hits:r}),t.state="home",t.pitch=.5}aaStep(t){for(let e of this.b.ships){if(!e.alive||!e.aa)continue;let n=e.aa.k*(.5+.5*Math.max(e.hp,0)/e.hpMax),i=e.body.pos;for(let r of this.sq){if(r.side===e.side||r.n<=0||r.state==="up")continue;let o=Math.hypot(r.pos.x-i.x,r.pos.z-i.z);if(o>Gb)continue;let a=r.pos.y,c=a>200?e.aa.ha*Sp:e.aa.ha*Sp*.4,l=o<Wb&&a<1e3?e.aa.mg*Xb*(r.state==="dive"||r.kind==="t"?1.3:1):0;if(r.dmg+=(c+l)*n*t,e.aa.ha&&ie()<Math.min(e.aa.ha*.35,5)*Math.min(n*1.6,1)*t&&this.fx.spawn(bt.SOOT,r.pos.x+(ie()-.5)*220,r.pos.y+(ie()-.3)*120,r.pos.z+(ie()-.5)*220,0,.5,0,9+ie()*6,7+ie()*4,{grow:1.6,drag:1,buoy:0,alpha:.85})>=0&&this.flak(r),l&&ie()<Math.min(e.aa.mg*.8,10)*t){let h=e.body.toWorld(co.set((ie()-.5)*e.meta.B*.7,e.meta.deck_top+4,(ie()-.5)*e.meta.L*.5),Qh),u=tu.copy(r.pos).add(co.set((ie()-.5)*60,(ie()-.5)*40,(ie()-.5)*60)).sub(h),d=u.length();u.multiplyScalar(800/d),this.fx.spawn(bt.EMBER,h.x,h.y,h.z,u.x,u.y,u.z,.9,d/800,{drag:0}),ie()<.3&&this.events.push({kind:"aa",at:h.clone()})}}}}flak(t){ie()<.5&&this.fx.spawn(bt.FLASH,t.pos.x+(ie()-.5)*200,t.pos.y+(ie()-.3)*100,t.pos.z+(ie()-.5)*200,0,0,0,7,.07),this.events.push({kind:"flak",at:t.pos.clone()})}dogfights(t){for(let e of this.sq)if(!(e.kind!=="f"||e.n<=0||e.state==="up")){for(let n of this.sq)if(!(n.side===e.side||n.n<=0||n.state==="up")&&!(e.pos.distanceTo(n.pos)>1200)){n.dmg+=e.n*(n.kind==="f"?.045:.1)*t;for(let i of[e,n]){let r=Math.sin(i.t*1.7+i.id*9)*.5;i.yaw+=r*t,i.bank=pt.clamp(-r*1.6,-.9,.9)}if(e.dmg+=n.n*(n.kind==="f"?.045:.008)*t,ie()<t*6){let i=n.pos;this.fx.spawn(bt.EMBER,e.pos.x,e.pos.y,e.pos.z,(i.x-e.pos.x)*2,(i.y-e.pos.y)*2,(i.z-e.pos.z)*2,.8,.5,{drag:0}),this.events.push({kind:"mg",at:e.pos.clone()})}}}}draw(){let t={},e=0,n=(r,o,a,c,l,h,u=!0)=>{let d=r+o,f=this.mesh[d];if(t[d]??=0,!(t[d]>=120)&&(Rp.set(-l,c,h,"YXZ"),oc.setFromEuler(Rp),rc.compose(a,oc,tu.set(1,1,1)),f.setMatrixAt(t[d]++,rc),this.prop&&u&&e<260)){let g=this.meta[o],v=g.propR*this.S;Qh.set(g.prop[0],g.prop[1],g.prop[2]).multiplyScalar(this.S).applyQuaternion(oc).add(a),rc.compose(Qh,oc,tu.set(v,v,v)),this.prop.setMatrixAt(e++,rc)}},i=new b;for(let r of this.sq){for(let o=0;o<r.n;o++){let a=this.placeOf(r,o,i);n(r.side,r.kind,a.pos,a.yaw,a.pitch,a.bank,!a.parked)}r.trail&&r.t>Ap&&(r.trail=null)}for(let r of this.falling)n(r.side,r.kind??"f",r.pos,r.yaw,(r.pitch0??0)+((r.pitch0??0)-.7-(r.pitch0??0))*Math.min(r.t/2.5,1),(r.bank0??0)+r.rot,!1);for(let[r,o]of Object.entries(this.mesh))o.count=t[r]??0,o.instanceMatrix.needsUpdate=!0;this.prop&&(this.prop.count=e,this.prop.instanceMatrix.needsUpdate=!0)}overlay(t,e,n){let i=new Set;for(let r of this.sq){i.add(r);let o=this.labels.get(r);o||(o=document.createElement("div"),o.className="sqd "+(r.side==="A"?"own":"foe"),e.appendChild(o),this.labels.set(r,o));let[a,c,l]=t(r.pos);if(l>1){o.style.display="none";continue}o.style.display="block",o.style.transform=`translate(${(a+14).toFixed(0)}px, ${(c-22).toFixed(0)}px)`,o.textContent=`${n[r.kind]} ${r.n}`}for(let[r,o]of this.labels)i.has(r)||(o.remove(),this.labels.delete(r))}};var nu=()=>new b,Yb={bb:260,bc:200,ca:95,cl:70,dd:30,tr:60,cv:170,sp:520,wh:900},Kb={bb:64e3,bc:42e3,ca:13e3,cl:8500,dd:2400,tr:1e4,cv:38e3,sp:12e4,wh:12e4},jb={ca:2,bc:1.6,cv:1.5,wh:1},He=s=>pt.euclideanModulo(s+Math.PI,Math.PI*2)-Math.PI,Jn=()=>{let s=0;for(let t=0;t<4;t++)s+=Math.random();return(s-2)*1.73},Zb=1,cc=class{constructor({art:t,sea:e,artillery:n,fx:i,torpedoes:r}){this.art=t,this.sea=e,this.arty=n,this.fx=i,this.torp=r,this.ships=[],this.log=[],this.events=[],this.wave=0,this.waveT=0,this.score=0,this.sunkN=0,this.auto=!1,this.waves=!0,this.fog=0,this.stage=null,this.sunkList=[]}reset(){this.ships.length=0,this.log.length=0,this.events.length=0,this.sunkList.length=0,this.wave=0,this.waveT=0,this.score=0,this.sunkN=0,this.stage=null,this.fog=0,this.arty.shells.length=0,this.torp&&(this.torp.list.length=0),this.fx.clear?.(),this.air?.reset()}add(t,e,n,i,r,o=0,a={}){let c=this.art.kinds[t],l=c.meta,h=new ic(l,this.sea);h.place(n,i,r,o),h.ctl.tele=o>0?e==="A"?2:4:1;let u=(l.boxes??[]).map(p=>({min:new b(...p.min),max:new b(...p.max),part:p.part})),d=Zn(a.design??Un(t,l),this.art);a.design&&h.applyFit(d);let f=a.mods??{};f.speedK&&(h.vmax*=f.speedK),f.gm&&(h.gm+=f.gm),f.flood&&(h.floodK=f.flood);let g=d.mounts.map(p=>{let y=p.home,x=Math.min((p.arc[1]-p.arc[0])/2,Math.PI*5/6);p=Object.assign({},p,{arc:[y-x,y+x]});let w=Se[p.gun];return{meta:p,g:w,yaw:y,rest:y,yawV:0,elev:0,elevV:0,reload:Math.random()*w.reload,recoil:new Array(p.guns??2).fill(0),broken:!1,ready:!1,onTarget:!1}});for(let p of d.mounts)if(p.slot[0]==="x"||p.tier>0){let y=4*p.scale*p.wide,x=5*p.scale;u.push({min:new b(p.at[0]-y,p.at[1],p.at[2]-y),max:new b(p.at[0]+y,p.at[1]+x,p.at[2]+y),part:"turret"})}let v=Yb[t]*(e==="A"&&!a.escort?1.8:1)*(f.hpK??1)*(a.boss?jb[t]??1.5:1),m={id:Zb++,kind:t,side:e,meta:l,body:h,boxes:u,turrets:g,fit:d,torps:d.torps.map(p=>({meta:p,reload:Math.random()*20})),maxRange:Math.max(...g.map(p=>p.g.range),1e3),hp:v*(a.hpFrac??1),hpMax:v,burn:[0,0,0],fires:[0,0,0],alive:!0,gone:!1,target:null,focus:null,order:null,slot:null,fc:new Map,player:e==="A"&&!a.escort,flagship:!!a.flagship,group:a.group??0,born:this.t??0,sel:!1,opts:a,uid:a.uid??0,name:a.name??"",boss:!!a.boss,escort:!!a.escort,kills:0,aa:{ha:(f.aaStock?.[0]??ho[t]?.[0]??0)+(d.aa?.ha??0),mg:(f.aaStock?.[1]??ho[t]?.[1]??0)+(d.aa?.mg??0),k:f.aa??1},wing:t==="cv"?{planes:a.planes?{...a.planes}:{f:(d.air?.f??3)*lo,t:(d.air?.t??4)*lo,b:(d.air?.b??3)*lo},cool:15+Math.random()*10,deck:0,turn:0,hits:0}:null,armor:(so[t]?.armor??0)+(f.armor??0),fcStart:f.fcStart??1,fcMin:f.fcMin??(e==="A"?.14:.3),torpK:f.torpK??1,oxy:!!f.oxy};return this.ships.push(m),m}refit(t,e){let n=this.ships.indexOf(t);if(n<0)return t;this.ships.splice(n,1);let i=t.body,r=this.add(t.kind,t.side,i.pos.x,i.pos.z,i.yaw,Math.max(i.speed,0),{...t.opts,design:e,flagship:t.flagship,group:t.group,hpFrac:Math.max(t.hp,0)/t.hpMax});this.ships.pop(),this.ships.splice(n,0,r),r.station=t.station,r.sel=t.sel,r.order=t.order,r.design=e,r.label=t.label;let o=new Set(t.turrets.map(a=>`${a.meta.slot}/${a.meta.tier}/${a.meta.gun}/${a.meta.guns}`));return r.turrets.forEach((a,c)=>{o.has(`${a.meta.slot}/${a.meta.tier}/${a.meta.gun}/${a.meta.guns}`)||(a.drop=1+c*0)}),r.body.ctl.tele=i.ctl.tele,r}dockStep(t,e,n){for(let i of n)i.kind==="hit"&&this.hit(i);for(let i of this.ships)if(!i.gone){if(i.body.sunk){i.gone=!0;continue}i.alive&&i.body.founder>0&&(i.alive=!1,this.log.push({kind:"capsize",ship:i})),i.testAim&&this.turretStep(i,t,e),this.burnStep(i,t)}}enemiesOf(t){return this.ships.filter(e=>e.side!==t.side&&e.alive)}flagship(){return this.ships.find(t=>t.flagship&&t.side==="A")}update(t,e,n){this.t=e;for(let i of n)i.kind==="hit"?this.hit(i):i.kind==="torphit"&&this.torpHit(i);for(let i of this.ships)if(!i.gone){if(i.body.sunk){i.gone=!0;continue}if(i.alive&&i.body.founder>0&&(i.alive=!1,this.log.push({kind:"capsize",ship:i}),this.events.push({kind:"capsize",type:i.kind,world:i.body.pos.clone()})),!i.alive){this.burnStep(i,t);continue}if(this.torpStep(i,t,e),this.evadeStep(i,e),this.pickTarget(i),i.noSteer)i.body.ctl.rudder=0;else if(i.escort){let r=this.flagship();i.evade?this.steerTo(i,i.evade.hd,4):i.station&&r?.alive?this.keepStation(i,r):this.steerTo(i,i.course??i.body.yaw,3),this.avoid(i,t)}else i.player&&!this.auto?this.steerPlayer(i,t):this.steerAI(i,t),this.avoid(i,t);this.turretStep(i,t,e),this.burnStep(i,t)}this.air?.update(t,e),this.stage?this.stageStep(t):this.waves&&this.waveStep(t)}pickTarget(t){let e={range:this.fog?Math.min(t.maxRange,this.fog):t.maxRange};if(t.focus&&!t.focus.alive&&(t.focus=null),t.focus){t.target=t.focus;return}let n=null,i=e.range*1.02;for(let r of this.ships){if(r.side===t.side||!r.alive)continue;let o=r.body.pos.distanceTo(t.body.pos),a=(r===t.target?.8:1)*(r.escort?.7:1);o*a<i&&(i=o*a,n=r)}t.target=n}turretStep(t,e,n){let i=t.body,r=t.target,o=r?t.fc.get(r.id):null;r&&!o&&(o={err:t.fcStart,r:Jn(),a:Jn(),turn:r.body.yawRate},t.fc.set(r.id,o)),o&&Math.abs(r.body.yawRate-o.turn)>.01&&(o.err=Math.min(o.err+.3,1),o.turn=r.body.yawRate);let a=nu(),c=nu();for(let l of t.turrets){let h=l.g,u=l.lockOn?.alive?l.lockOn:t.target,d=u?t.fc.get(u.id)??o:null;for(let A=0;A<l.recoil.length;A++)l.recoil[A]>0&&(l.recoil[A]+=e,l.recoil[A]>1.6&&(l.recoil[A]=0));if(l.broken){l.elev=Math.max(l.elev-e*.01,-.04),l.gunElev&&l.gunElev.fill(l.elev);continue}l.reload=Math.max(0,l.reload-e);let f=l.rest,g=0,v=null;if(i.toWorld(c.set(...l.meta.at),a),t.testAim){let A=He(t.testAim.brg-l.rest),R=He(l.meta.arc[0]-l.rest),C=He(l.meta.arc[1]-l.rest);A>=R&&A<=C&&(f=l.rest+A,g=t.testAim.elev,v={e:g})}else if(u){let A=u.body.pos,R=u.body.vel,C=Math.hypot(A.x-a.x,A.z-a.z),U=0,_=A.x,E=A.z;for(let N=0;N<3&&(v=yr(l.meta.gun,C),!!v);N++)U=v.t,_=A.x+(R.x-i.vel.x)*U,E=A.z+(R.z-i.vel.z)*U,C=Math.hypot(_-a.x,E-a.z);if(v&&C<=h.range){let N=l.perfect?0:d.err,G=N*(.035*C+25)*d.r,j=N*.004*d.a,P=C+G;v=yr(l.meta.gun,P)??v,i.toLocal(c.set(_,a.y,E),c);let D=l.meta.at,H=Math.atan2(-(c.x-D[0]),c.z-D[2])+j,$=He(H-l.rest),X=He(l.meta.arc[0]-l.rest),W=He(l.meta.arc[1]-l.rest);if($>=X&&$<=W){f=l.rest+$;let Y=Math.asin(pt.clamp(new b(-Math.sin(l.rest+$),0,Math.cos(l.rest+$)).applyQuaternion(i.quat).y,-1,1));g=v.e-Y}else v=null}else v=null}let m=h.traverse*Math.PI/180,p=m*.8,y=He(f-l.yaw),x=pt.clamp(y*1.5,-m,m);l.yawV+=pt.clamp(x-l.yawV,-p*e,p*e),l.yaw+=l.yawV*e;let w=h.elevRate*Math.PI/180;l.elev+=pt.clamp((g-l.elev)*3,-w,w)*e,l.gunElev??=l.recoil.map(()=>0);for(let A=0;A<l.gunElev.length;A++){let R=l.reload>h.reload*.35?Math.min(l.elev,.087):l.elev;l.gunElev[A]+=pt.clamp(R-l.gunElev[A],-w*e*(1-A*.06),w*e*(1-A*.06))}l.onTarget=!!v&&Math.abs(He(f-l.yaw))<.006&&Math.abs(g-l.elev)<.003&&l.gunElev.every(A=>Math.abs(A-l.elev)<.004),l.onTarget&&l.reload<=0&&!t.holdFire&&(!t.testAim||t.testAim.fire&&!l.testFired)&&(this.fireTurret(t,l,n),t.testAim&&(l.testFired=!0))}}fireTurret(t,e,n){let i=t.body,r=e.g,o=e.meta,a=o.guns??2,c=new mt().compose(i.pos,i.quat,new b(1,1,1)),l=new fe().setFromAxisAngle(new b(0,1,0),-e.yaw),h=new mt().compose(new b(...o.at),l,new b(1,1,1)).premultiply(c);for(let d=0;d<a;d++){let f=new fe().setFromAxisAngle(new b(1,0,0),-(e.gunElev?.[d]??e.elev)),g=(d-(a-1)/2)*o.gap,v=new mt().compose(new b(o.trunnion[0]+g,o.trunnion[1],o.trunnion[2]),f,new b(1,1,1)).premultiply(h),m=new b(0,0,o.barrel_len).applyMatrix4(v),p=new b(0,0,1).transformDirection(v),y=e.perfect?0:.0012+r.cal*.001;p.x+=Jn()*y,p.y+=Jn()*y*.6,p.z+=Jn()*y,p.normalize(),this.arty.fire(o.gun,t,m,p,n),e.lastShell=this.arty.shells[this.arty.shells.length-1],e.recoil[d]=.001}e.reload=r.reload*(.95+Math.random()*.1);let u=t.target&&t.fc.get(t.target.id);u&&(u.err=Math.max(u.err*.72,t.fcMin),u.r=Jn(),u.a=Jn())}snapAim(t,e,n=.3){let i=Array.isArray(e)?e:[e],r=i[0],o=t.body,a=new b,c=new b;t.turrets.forEach((h,u)=>{let d=i[u%i.length];o.toWorld(c.set(...h.meta.at),a);let f=d.body.pos,g=d.body.vel,v=Math.hypot(f.x-a.x,f.z-a.z),m=f.x,p=f.z,y=null;for(let _=0;_<3&&(y=yr(h.meta.gun,v),!!y);_++)m=f.x+(g.x-o.vel.x)*y.t,p=f.z+(g.z-o.vel.z)*y.t,v=Math.hypot(m-a.x,p-a.z);if(!y)return;o.toLocal(c.set(m,a.y,p),c);let x=h.meta.at,w=Math.atan2(-(c.x-x[0]),c.z-x[2]),A=He(w-h.rest),R=He(h.meta.arc[0]-h.rest),C=He(h.meta.arc[1]-h.rest);if(A<R||A>C)return;let U=Math.asin(pt.clamp(new b(-Math.sin(h.rest+A),0,Math.cos(h.rest+A)).applyQuaternion(o.quat).y,-1,1));h.yaw=h.rest+A,h.yawV=0,h.elev=y.e-U,h.gunElev=h.recoil.map(()=>y.e-U),h.reload=n+Math.random()*.15,h.lockOn=d});let l=r;for(let h of i)t.fc.set(h.id,{err:.12,r:Jn()*.5,a:Jn()*.5,turn:h.body.yawRate});t.focus=l,t.fc.set(l.id,{err:.12,r:Jn()*.5,a:Jn()*.5,turn:l.body.yawRate})}torpStep(t,e,n){if(this.torp)for(let i of t.torps){if(i.reload-=e,i.reload>0)continue;let r=t.body.toWorld(new b(...i.meta.at),new b),o=t.body.yaw-i.meta.home,a=null,c=t.oxy?9e3:5500;for(let g of this.ships){if(g.side===t.side||!g.alive)continue;let v=g.body.pos.x-r.x,m=g.body.pos.z-r.z,p=Math.hypot(v,m);p>c||p<400||Math.abs(He(Math.atan2(v,m)-o))>1.2||(a=g,c=p)}if(!a)continue;let l=a.body.pos,h=a.body.vel,u=l.x,d=l.z;for(let g=0;g<4;g++){let v=Math.hypot(u-r.x,d-r.z)/ui.speed;u=l.x+h.x*v,d=l.z+h.z*v}let f=Math.atan2(u-r.x,d-r.z);for(let g of[-1.5,-.5,.5,1.5]){let v=f+g*.045;this.torp.launch(t,r,new b(Math.sin(v),0,Math.cos(v)),n)}i.reload=55+Math.random()*10}}torpHit(t){let e=t.ship;if(!e.alive&&e.body.founder>30)return;this.fx.column(t.world,1.1),this.fx.hitBurst(t.world.clone().setY(2),.4);let n=t.local,i=Math.sign(n.x||1);e.body.hole(new b(i*e.meta.B*.45,-e.meta.T*.6,n.z),ui.hole),e.body.rollV+=i*.02,e.hp-=ui.dmg*(1-e.armor*.4)*e.torpK*(t.from?.oxy?1.3:1),this.log.push({kind:"torphit",ship:e}),this.events.push({kind:"torphit",type:"torp",world:t.world.clone()}),e.hp<=0&&e.alive&&this.sink(e,t.from,e.kind==="dd"?"magazine":void 0)}bombHit(t,e){if(!t.alive)return;let n=new b((Math.random()-.5)*t.meta.B*.6,t.meta.deck_top+.5,(Math.random()-.5)*t.meta.L*.7),i=t.body.toWorld(n,new b);this.fx.hitBurst(i,.25),t.hp-=22*(1-t.armor*.5);let r=n.z>t.meta.L/6?0:n.z<-t.meta.L/6?2:1;t.fires[r]=Math.min(1,t.fires[r]+.45);for(let o of t.turrets)!o.broken&&Math.hypot(n.x-o.meta.at[0],n.z-o.meta.at[2])<t.meta.B*.3&&Math.random()<.3&&(o.broken=!0);t.wing&&(t.wing.hits++,t.wing.deck=t.wing.hits>=3?1e9:Math.max(t.wing.deck,45)),t.aa.ha=Math.max(0,t.aa.ha-(Math.random()<.3?1:0)),t.aa.mg=Math.max(0,t.aa.mg-(Math.random()<.4?1:0)),this.events.push({kind:"hit",type:"bomb",world:i}),this.log.push({kind:"bombhit",ship:t}),t.hp<=0&&this.sink(t,e)}hit(t){let e=t.ship,n=Se[t.type];if(!e.alive&&e.body.founder>30)return;this.fx.hitBurst(t.world,n.cal);let i=e.armor,r=pt.clamp(n.cal/.36*1.4-i*.9,.12,1),o=e.kind==="dd"&&n.cal>=.3?2.4:e.kind==="cl"&&n.cal>=.3?1.8:e.kind==="ca"&&n.cal>=.4?1.5:1,a=n.dmg*r*o*(.7+Math.random()*.6);e.hp-=a;let c=e.meta.L,l=e.meta.B,h=t.local;h.y<1.8&&t.part.part==="hull"&&e.body.hole(h.clone().setY(Math.min(h.y,-.3)),n.cal*n.cal*5*r);let u=h.z>c/6?0:h.z<-c/6?2:1;(t.part.part!=="hull"||Math.random()<.4)&&(e.fires[u]=Math.min(1,e.fires[u]+.2+n.cal*.9*r));let d=/^turret_(\d+)/.exec(t.part.part??"");d&&e.turrets[+d[1]]&&Math.random()<.6*r&&(e.turrets[+d[1]].broken=!0);for(let f of e.turrets){let g=f.meta.at;if(Math.hypot(h.x-g[0],h.z-g[2])<l*.28){!f.broken&&Math.random()<.35*r&&(f.broken=!0);let m=({bb:.008,bc:.03,ca:.05,cl:.07,dd:.12,tr:.02,cv:.04,sp:.004,wh:.002}[e.kind]??.03)*r*(n.cal>.3?1.6:n.cal>.15?1:.3);if(e.alive&&Math.random()<m){this.magazine(e,Jb(e,g),t.from);return}}}e.hp<=0&&e.alive&&this.sink(e,t.from)}magazine(t,e,n=null){this.fx.magazine(e,{bb:1.6,bc:1.5,ca:1,cl:.85,dd:.6,tr:.9,cv:1.4,sp:1.9,wh:1.9}[t.kind]??1),this.log.push({kind:"magazine",ship:t}),this.events.push({kind:"magazine",type:t.kind,world:e.clone()}),t.hp=0,this.sink(t,n,"magazine")}sink(t,e,n){t.alive=!1,t.body.startFounder(n??(Math.abs(t.body.list)>.15||t.kind==="dd"&&Math.random()<.5?"capsize":void 0));for(let i=0;i<3;i++)t.fires[i]=Math.max(t.fires[i],.5+Math.random()*.5);this.log.push({kind:"sunk",ship:t}),t.side!=="A"&&(this.score+=Kb[t.kind],this.sunkN++,this.sunkList.push({kind:t.kind,boss:t.boss}),e&&e.side==="A"&&e.kills++)}burnStep(t,e){let n=t.meta.L;for(let i=0;i<3;i++){let r=t.fires[i];if(r<=0)continue;t.burn[i]=Math.min(1,t.burn[i]+r*e*.05),t.alive?(t.hp-=r*e*.25,t.fires[i]=Math.max(0,r-e*.012),t.hp<=0&&this.sink(t,null)):t.fires[i]=Math.max(0,r-e*.004);let o=(1-i)*n/3,a=t.body.toWorld(new b((Math.random()-.5)*t.meta.B*.4,t.meta.deck_top+1,o+(Math.random()-.5)*n/4),nu());a.y>-1&&this.fx.bigFire(a,r,e)}}steerTo(t,e,n){t.body.ctl.pow=void 0;let i=He(e-t.body.yaw);t.body.ctl.rudder=pt.clamp(-i*2.2,-.6,.6),t.body.ctl.tele=n}evadeStep(t,e){if(!this.torp||t.evade&&e<t.evade.t)return;t.evade=null;let n=t.body.pos,i=t.body.vel,r=t.meta.L/2+25;for(let o of this.torp.list){if(!o.alive||o.from?.side===t.side)continue;let a=o.p.x-n.x,c=o.p.z-n.z;if(Math.hypot(a,c)>(o.from?.oxy?800:2500))continue;let h=o.d.x*ui.speed-i.x,u=o.d.z*ui.speed-i.z,d=h*h+u*u,f=-(a*h+c*u)/d;if(f<0||f>90||Math.hypot(a+h*f,c+u*f)>r)continue;let g=Math.atan2(o.d.x,o.d.z),v=Math.abs(He(g-t.body.yaw))<Math.PI/2?g:g+Math.PI;t.evade={t:e+Math.min(f+6,30),hd:v};return}}steerPlayer(t,e){let n=t.body;if(t.evade){this.steerTo(t,t.evade.hd,4);return}let i=this.flagship();if(!t.order&&t.station&&i?.alive&&i!==t)return this.keepStation(t,i);if(!t.order){t.body.ctl.rudder*=Math.exp(-e);return}let r=t.order.x-n.pos.x,o=t.order.z-n.pos.z,a=Math.hypot(r,o);if(a<t.meta.L*.8){t.order=null,n.ctl.tele=1,n.ctl.rudder=0;return}this.steerTo(t,Math.atan2(r,o),a>900?4:a>400?3:2)}keepStation(t,e){let n=t.body;{let i=e.body,[r,o]=t.station,a=Math.cos(i.yaw),c=Math.sin(i.yaw),l=i.pos.x+r*a+o*c,h=i.pos.z-r*c+o*a,u=l-n.pos.x,d=h-n.pos.z,f=u*Math.sin(i.yaw)+d*Math.cos(i.yaw),v=Math.hypot(u,d)>120?Math.atan2(u+Math.sin(i.yaw)*300,d+Math.cos(i.yaw)*300):i.yaw;this.steerTo(t,v,4);let m=Math.max(i.speed+pt.clamp(f*.012,-3,4),.5);n.ctl.pow=pt.clamp((m/n.vmax)**3*1.05,.02,1)}}steerAI(t,e){let n=t.body;if(t.evade){this.steerTo(t,t.evade.hd,4);return}let i=t.side==="E"&&this.ships.find(d=>d.escort&&d.alive)||this.ships.find(d=>d.side!==t.side&&d.alive&&(d.flagship||d.kind==="bb"||d.kind==="bc"))||t.target,r=t.target??i;if(!r){this.steerTo(t,n.yaw,3);return}let o=r.body.pos.x-n.pos.x,a=r.body.pos.z-n.pos.z,c=Math.hypot(o,a),l=Math.atan2(o,a);if(t.kind==="cv"){let d=c<9500;this.steerTo(t,d?l+Math.PI:c>14e3?l:l+Math.PI/2,d?4:2);return}let h=t.kind==="dd"?2600:t.maxRange*.7,u;if(c>h*1.15)u=l;else{let d=He(l+Math.PI/2-n.yaw),f=He(l-Math.PI/2-n.yaw);u=Math.abs(d)<Math.abs(f)?l+Math.PI/2:l-Math.PI/2,c<h*.7&&(u+=Math.sign(He(u-l))*.4)}this.steerTo(t,u,4)}avoid(t,e){let n=t.body;for(let i of this.ships){if(i===t||i.gone)continue;let r=n.pos.x-i.body.pos.x,o=n.pos.z-i.body.pos.z,a=Math.hypot(r,o),c=(t.meta.L+i.meta.L)*.42;if(a<c*1.6&&a>1&&(Math.sin(n.yaw)*-r+Math.cos(n.yaw)*-o)/a>.3&&t.alive&&(n.ctl.rudder=pt.clamp(n.ctl.rudder+Math.sign(Math.sin(n.yaw)*o-Math.cos(n.yaw)*r||1)*.6*(1-a/(c*1.6)),-.6,.6)),a<c&&a>1){let l=(c-a)*.6*e;n.pos.x+=r/a*l,n.pos.z+=o/a*l}}}orderMove(t,e,n){if(!t.length)return;let i=t.reduce((o,a)=>o+a.body.pos.x,0)/t.length,r=t.reduce((o,a)=>o+a.body.pos.z,0)/t.length;for(let o of t){let a=o.body.pos.x-i,c=o.body.pos.z-r,l=Math.hypot(a,c),h=260+120*t.length;l>h&&(a*=h/l,c*=h/l),o.order={x:e+a,z:n+c},o.station=null}}orderAttack(t,e){for(let n of t)n.focus=e}waveStep(t){this.waveT+=t;let e=this.ships.filter(i=>i.side==="E"&&i.alive),n=this.flagship();!n||!n.alive||(this.wave===0&&this.waveT>3||this.wave>0&&(e.length===0&&this.waveT>8||e.length<=1&&this.waveT>90))&&(this.wave++,this.waveT=0,this.spawnWave(this.wave))}spawnWave(t){let n=this.flagship().body.pos,i=t===1?["cl","dd","dd","dd"]:t===2?["ca","ca","cl","dd","dd","dd"]:t===3?["bc","ca","ca","cl","dd","dd","dd"]:["bb","bc","ca","ca","cl","dd","dd","dd","dd"].slice(0,6+Math.min(t-3,3)),r=t>=3?2:1,o=Math.random()*Math.PI*2;i.forEach((a,c)=>{let l=c%r,h=o+l*(Math.PI*(.6+Math.random()*.5)),u=6600+Math.random()*700,d=Math.floor(c/r),f=n.x+Math.sin(h)*u,g=n.z+Math.cos(h)*u,v=new ft(Math.cos(h),-Math.sin(h)),m=(d-2)*420;this.add(a,"E",f+v.x*m,g+v.y*m,h+Math.PI,so[a].kn*.5144*.9,{group:t})}),this.log.push({kind:"wave",n:t,count:i.length})}startStage(t,e={}){this.stage={def:t,copies:e.copies??[],wave:0,t:0,waveT:0,over:null,base:e.base??Math.random()*Math.PI*2},this.waves=!1}stageStep(t){let e=this.stage,n=e.def;if(e.over)return;if(e.t+=t,e.waveT+=t,!this.flagship()?.alive)return this.finish(!1,"flag");let r=this.ships.filter(c=>c.side==="E"&&c.alive);if(n.goal==="escort"&&this.ships.filter(l=>l.escort).filter(l=>l.alive).length<n.escort[1])return this.finish(!1,"escort");if(n.goal==="hold"&&e.t>=n.time)return this.finish(!0);if(n.goal==="boss"&&e.bossUp&&!this.ships.some(c=>c.boss&&c.alive))return this.finish(!0);let o=e.wave<n.waves.length,a=r.length===0;if(e.wave===0&&e.waveT>4||e.wave>0&&a&&e.waveT>6)if(o)this.spawnStageWave(n.waves[e.wave]);else if(n.goal==="hold")this.spawnStageWave(n.waves[e.wave%n.waves.length]);else return this.finish(!0);else n.goal==="hold"&&e.wave>0&&e.waveT>110&&r.length<=3&&this.spawnStageWave(n.waves[e.wave%n.waves.length])}finish(t,e=""){let n=this.stage;n.over={won:t,why:e,t:n.t},this.log.push({kind:"over",won:t,why:e})}spawnStageWave(t){let e=this.stage,n=e.def;e.wave++,e.waveT=0,this.wave=e.wave;let i=this.flagship(),r=this.ships.find(d=>d.escort&&d.alive),o=(r??i).body.pos,a=r?r.body.yaw:null,c=t.length>=6?2:1,l=a!==null?a+(Math.random()-.5)*1.6:e.base+e.wave*1.9,h=n.near?3900:this.fog?5600:6800,u=0;t.forEach((d,f)=>{let g=d.replace("!",""),v=null,m=d.endsWith("!");g==="copy"&&(v=e.copies[u++%Math.max(e.copies.length,1)]??null,g=v?.kind??"ca"),this.art.kinds[g]||(g={cv:"bc",wh:"bb",sp:"bb",tr:"cl"}[g]??"ca"),v&&v.kind!==g&&(v=null);let p=f%c,y=Math.floor(f/c),x=l+p*(Math.PI*(.6+Math.random()*.4)),w=h+Math.random()*600+(m?900:0),A=o.x+Math.sin(x)*w,R=o.z+Math.cos(x)*w,C=new ft(Math.cos(x),-Math.sin(x)),U=(y-2)*420,_=this.add(g,"E",A+C.x*U,R+C.y*U,x+Math.PI,(so[g]?.kn??30)*.5144*.9,{group:e.wave,boss:m,design:v});return m&&(e.bossUp=!0),_}),this.log.push({kind:"wave",n:e.wave,count:t.length,boss:t.some(d=>d.endsWith("!"))})}};function Jb(s,t){return s.body.toWorld(new b(t[0],t[1]+3,t[2]),new b)}var lc=class{constructor(t,e){this.c=t,this.el=e,this.target=new b,this.yaw=.6,this.pitch=.62,this.dist=1400,this.keys={},this.follow=null,this.free=!1,addEventListener("keydown",o=>{this.keys[o.code]=!0,(o.code.startsWith("Arrow")||o.code==="Space")&&o.preventDefault()}),addEventListener("keyup",o=>{this.keys[o.code]=!1}),addEventListener("blur",()=>{this.keys={}}),e.addEventListener("wheel",o=>{this.dist=pt.clamp(this.dist*Math.exp(o.deltaY*.0012),90,7e3),o.preventDefault()},{passive:!1});let n=!1,i=0,r=0;e.addEventListener("pointerdown",o=>{(o.button===1||o.button===0&&o.altKey)&&(n=!0,i=o.clientX,r=o.clientY,o.preventDefault())}),addEventListener("pointerup",()=>{n=!1}),addEventListener("pointermove",o=>{n&&(this.yaw-=(o.clientX-i)*.005,this.pitch=pt.clamp(this.pitch+(o.clientY-r)*.004,.06,1.45),i=o.clientX,r=o.clientY)})}set(t){Object.assign(this,t)}update(t){let e=this.keys,n=this.dist*.9*t,i=0,r=0;if((e.KeyW||e.ArrowUp)&&(r+=1),(e.KeyS||e.ArrowDown)&&(r-=1),(e.KeyA||e.ArrowLeft)&&(i-=1),(e.KeyD||e.ArrowRight)&&(i+=1),i||r){this.follow=null;let c=-Math.sin(this.yaw),l=-Math.cos(this.yaw);this.target.x+=(c*r-l*i)*n*-1*-1,this.target.z+=(l*r+c*i)*n}if(this.follow?.body){let c=this.follow.body.pos;this.target.x+=(c.x-this.target.x)*(1-Math.exp(-t*3)),this.target.z+=(c.z-this.target.z)*(1-Math.exp(-t*3))}let o=Math.sin(this.pitch)*this.dist,a=Math.cos(this.pitch)*this.dist;this.c.position.set(this.target.x+Math.sin(this.yaw)*a,Math.max(o,4),this.target.z+Math.cos(this.yaw)*a),this.c.lookAt(this.target.x,0,this.target.z),this.c.updateMatrixWorld()}},iu=new Ia,Lp=new ft,uo=new b,hc=class{constructor({battle:t,camera:e,rcam:n,el:i,overlay:r,W:o,H:a,sound:c}){this.b=t,this.camera=e,this.rcam=n,this.el=i,this.ov=r,this.W=o,this.H=a,this.sound=c,this.sel=[],this.box=document.createElement("div"),this.box.className="selbox",r.appendChild(this.box),this.bars=new Map,this.marks=[],this.enabled=!0;let l=null,h=u=>{let d=i.getBoundingClientRect();return[(u.clientX-d.left)/d.width*o,(u.clientY-d.top)/d.height*a]};i.addEventListener("contextmenu",u=>u.preventDefault()),i.addEventListener("pointerdown",u=>{this.enabled&&(u.button===0&&!u.altKey&&(l=h(u)),u.button===2&&this.command(h(u)))}),addEventListener("pointermove",u=>{if(!l)return;let[d,f]=h(u),g=Math.min(d,l[0]),v=Math.min(f,l[1]);Object.assign(this.box.style,{display:"block",left:g+"px",top:v+"px",width:Math.abs(d-l[0])+"px",height:Math.abs(f-l[1])+"px"})}),addEventListener("pointerup",u=>{if(!l||u.button!==0)return;let[d,f]=h(u);this.box.style.display="none",Math.hypot(d-l[0],f-l[1])<6?this.clickSelect(d,f,u.shiftKey):this.boxSelect(l,[d,f],u.shiftKey),l=null}),addEventListener("keydown",u=>{if(this.enabled&&(u.code==="KeyQ"&&this.select(this.b.ships.filter(d=>d.player&&d.alive)),u.code==="Space")){let d=this.b.flagship();d&&(this.rcam.follow=d)}})}project(t){return uo.copy(t).project(this.camera),[(uo.x*.5+.5)*this.W,(-uo.y*.5+.5)*this.H,uo.z]}ground(t,e){Lp.set(t/this.W*2-1,-(e/this.H*2-1)),iu.setFromCamera(Lp,this.camera);let n=iu.ray.direction,i=iu.ray.origin;if(n.y>=-1e-4)return null;let r=-i.y/n.y;return new b(i.x+n.x*r,0,i.z+n.z*r)}pick(t,e,n){let i=this.ground(t,e),r=null,o=1e9;for(let a of this.b.ships){if(!a.alive||n&&a.side!==n)continue;let[c,l,h]=this.project(a.body.pos);if(h>1)continue;let u=Math.hypot(c-t,l-e),d=Math.max(26,this.screenLen(a)*.5);u<d&&u<o&&(o=u,r=a)}if(!r&&i)for(let a of this.b.ships){if(!a.alive||n&&a.side!==n)continue;let c=a.body.pos.distanceTo(i);c<a.meta.L*.6&&c<o&&(o=c,r=a)}return r}screenLen(t){let e=t.body.forward(new b).multiplyScalar(t.meta.L/2),n=this.project(uo.copy(t.body.pos).add(e)),i=this.project(new b().copy(t.body.pos).sub(e));return Math.hypot(n[0]-i[0],n[1]-i[1])}select(t,e=!1){if(!e)for(let n of this.sel)n.sel=!1;this.sel=e?[...new Set([...this.sel,...t])]:t;for(let n of this.sel)n.sel=!0;t.length&&this.sound?.click?.()}clickSelect(t,e,n){let i=this.pick(t,e,"A");this.select(i?.player?[i]:[],n)}boxSelect(t,e,n){let i=Math.min(t[0],e[0]),r=Math.max(t[0],e[0]),o=Math.min(t[1],e[1]),a=Math.max(t[1],e[1]);this.select(this.b.ships.filter(c=>{if(!c.player||!c.alive)return!1;let[l,h,u]=this.project(c.body.pos);return u<1&&l>=i&&l<=r&&h>=o&&h<=a}),n)}command([t,e]){let n=this.sel.filter(o=>o.alive);if(!n.length)return;let i=this.pick(t,e,"E");if(i){this.b.orderAttack(n,i),this.flash(i.body.pos,"atk");return}let r=this.ground(t,e);r&&(this.b.orderMove(n,r.x,r.z),this.flash(r,"mv"))}flash(t,e){this.marks.push({p:t.clone(),t:0,kind:e})}update(t){let e=new Set;for(let n of this.b.ships){if(n.gone||!n.alive&&n.body.founder>6)continue;e.add(n);let i=this.bars.get(n);i||(i=document.createElement("div"),i.className="bar "+(n.escort?"esc":n.side==="A"?"own":"foe")+(n.flagship?" flag":"")+(n.boss?" boss":""),i.innerHTML="<i></i>",this.ov.appendChild(i),this.bars.set(n,i));let r=n.body.toWorld(new b(0,n.meta.deck_top+n.meta.B*1.2,0),new b),[o,a,c]=this.project(r);if(c>1||o<-50||o>this.W+50||a<-50||a>this.H+50){i.style.display="none";continue}let l=pt.clamp(this.screenLen(n)*.5,22,90);i.style.display="block",i.style.transform=`translate(${(o-l/2).toFixed(1)}px, ${(a-14).toFixed(1)}px)`,i.style.width=l+"px",i.firstChild.style.width=(Math.max(n.hp,0)/n.hpMax*100).toFixed(1)+"%",i.classList.toggle("sel",!!n.sel),i.classList.toggle("dead",!n.alive),i.classList.toggle("tgt",this.sel.some(h=>h.focus===n))}for(let[n,i]of this.bars)e.has(n)||(i.remove(),this.bars.delete(n));for(let n of this.marks){n.t+=t,n.el||(n.el=document.createElement("div"),n.el.className="mark "+n.kind,this.ov.appendChild(n.el));let[i,r]=this.project(n.p);n.el.style.transform=`translate(${i}px, ${r}px) scale(${1+n.t*1.5})`,n.el.style.opacity=Math.max(0,1-n.t/.9)}this.marks=this.marks.filter(n=>n.t>.9?(n.el?.remove(),!1):!0)}};var su={en:{titleSub:"IRON FLEET",cardSub:"IRON FLEET",waveN:s=>`WAVE <b>${s}</b>`,sunk:"SUNK",goal:"You command a small iron fleet: one battleship, two heavy cruisers, three destroyers.<br>Enemy squadrons close in from every side. Break them all, and keep your flagship afloat.",goalC:"You have inherited a small shipyard, an old battleship and two destroyers.<br>The Grey Fleet builds bigger every month. Build, refit, sail. Overload her, and the sea settles the argument.",start:"START",hint:"Left drag: select ships\u3000Right click: move / attack\u3000Q: whole fleet\u3000W A S D: pan\u3000Wheel: zoom\u3000Middle drag: rotate\u3000Space: flagship",keys:"<kbd>LMB</kbd> select\u3000<kbd>RMB</kbd> move / attack\u3000<kbd>Q</kbd> all ships\u3000<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> pan\u3000<kbd>Wheel</kbd> zoom\u3000<kbd>MMB</kbd> rotate\u3000<kbd>Space</kbd> flagship",kinds:{bb:"BATTLESHIP",bc:"BATTLECRUISER",ca:"HEAVY CRUISER",cl:"LIGHT CRUISER",dd:"DESTROYER",cv:"CARRIER",sp:"SUPER-BATTLESHIP",wh:"GREY WHALE",tr:"MERCHANTMAN"},short:{bb:"BB",bc:"BC",ca:"CA",cl:"CL",dd:"DD",cv:"CV",sp:"SBB",wh:"WHALE",tr:"AK"},waveIn:(s,t)=>`WAVE ${s}
${t} ships inbound`,sunkThem:s=>`ENEMY ${s} SUNK`,sunkUs:s=>`OUR ${s} IS LOST`,magazine:s=>`MAGAZINE HIT \u2014 ${s} BLOWS UP`,tons:s=>`${s.toLocaleString("en")} t`,lost:"FLAGSHIP LOST",endSub:(s,t,e)=>`${s} waves held, ${t} ships sunk, ${e.toLocaleString("en")} tons`,again:"AGAIN",refitBtn:"REFIT",refit:"REFIT",calibre:"CALIBRE (cm)",barrels:"BARRELS",tiers:"STACKED",slotHint:"Click a ring on the ship to choose what goes there. Drag to look around, wheel to zoom.",backYard:"BACK TO THE YARD",aaHead:(s,t)=>`ANTI-AIRCRAFT \xB7 added ${s} / ${t}`,haGun:"HIGH-ANGLE GUNS",mgGun:"AA GUNS (25 mm)",airHead:(s,t)=>`AIR GROUP \xB7 ${s} / ${t} squadrons`,planeKinds:{f:"FIGHTERS",t:"ATTACK (torpedo)",b:"BOMBERS (dive)"},planeShort:{f:"F",t:"T",b:"B"},bill:"YARD BILL",rivetsU:"rivets",steelU:"steel",cantPay:s=>`The yard wants ${s.rivets.toLocaleString("en")} rivets and ${s.steel.toLocaleString("en")} steel for this. Undo something.`,testFire:"TEST FIRE",stock:"STOCK",copyAll:"SAME FOR SISTERS",sortie:"SORTIE",copied:"Copied to her sister ships",slotName:s=>s.stock>=0?`MOUNT ${"ABXY"[s.stock]??s.stock+1}`:s.wing?`${s.wing>0?"PORT":"STARBOARD"} WING`:"EXTRA CENTRELINE",empty:"EMPTY",gun:"GUN",torp:"TORPEDOES",single:"single",twin:"twin",triple:"triple",disp:"DISPLACEMENT",speed:"SPEED",broad:"BROADSIDE",range:"RANGE",stab:{ok:"STABLE",tender:"TENDER \u2014 she will roll hard when she fires",capsize:"TOP-HEAVY \u2014 she will not stay upright",sink:"OVERLOADED \u2014 she will not float"},wentOver:"SHE ROLLED OVER",sankDock:"SHE WENT DOWN",capsized:(s,t)=>t?`OUR ${s} CAPSIZED`:`ENEMY ${s} CAPSIZED`,lang:"\u65E5\u672C\u8A9E"},ja:{titleSub:"\u9244\u306E\u8266\u968A",cardSub:"\u9244\u306E\u8266\u968A",waveN:s=>`\u7B2C <b>${s}</b> \u6CE2`,sunk:"\u6483\u6C88",goal:"\u3042\u306A\u305F\u304C\u7387\u3044\u308B\u306E\u306F\u3001\u6226\u82661\u30FB\u91CD\u5DE12\u30FB\u99C6\u90103\u306E\u5C0F\u3055\u306A\u9244\u306E\u8266\u968A\u3002<br>\u56DB\u65B9\u304B\u3089\u6575\u306E\u8266\u968A\u304C\u62BC\u3057\u5BC4\u305B\u308B\u3002\u65D7\u8266\u3092\u6C88\u3081\u305A\u306B\u3001\u3059\u3079\u3066\u8E74\u6563\u3089\u305B\u3002",goalC:"\u5C0F\u3055\u306A\u9020\u8239\u6240\u3068\u3001\u53E4\u3044\u6226\u82661\u96BB\u30FB\u99C6\u9010\u82662\u96BB\u3092\u7D99\u3044\u3060\u3002<br>\u7070\u8272\u8266\u968A\u306F\u6708\u3054\u3068\u306B\u5927\u304D\u306A\u8266\u3092\u9020\u3063\u3066\u304F\u308B\u3002\u9020\u308A\u3001\u8F09\u305B\u66FF\u3048\u3001\u51FA\u6483\u305B\u3088\u3002\u7A4D\u307F\u3059\u304E\u305F\u8266\u306F\u3001\u6D77\u304C\u6C88\u3081\u308B\u3002",start:"\u51FA\u6483",hint:"\u5DE6\u30C9\u30E9\u30C3\u30B0\uFF1A\u8266\u3092\u9078\u3076\u3000\u53F3\u30AF\u30EA\u30C3\u30AF\uFF1A\u79FB\u52D5\u30FB\u653B\u6483\u3000Q\uFF1A\u5168\u8266\u3000W A S D\uFF1A\u8996\u70B9\u306E\u79FB\u52D5\u3000\u30DB\u30A4\u30FC\u30EB\uFF1A\u5BC4\u308B\u30FB\u5F15\u304F\u3000\u4E2D\u30C9\u30E9\u30C3\u30B0\uFF1A\u56DE\u3059\u3000Space\uFF1A\u65D7\u8266\u3078",keys:"<kbd>\u5DE6</kbd> \u9078\u629E\u3000<kbd>\u53F3</kbd> \u79FB\u52D5\u30FB\u653B\u6483\u3000<kbd>Q</kbd> \u5168\u8266\u3000<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> \u8996\u70B9\u3000<kbd>\u30DB\u30A4\u30FC\u30EB</kbd> \u5BC4\u308B\u3000<kbd>\u4E2D</kbd> \u56DE\u3059\u3000<kbd>Space</kbd> \u65D7\u8266",kinds:{bb:"\u6226\u8266",bc:"\u5DE1\u6D0B\u6226\u8266",ca:"\u91CD\u5DE1",cl:"\u8EFD\u5DE1",dd:"\u99C6\u9010\u8266",cv:"\u7A7A\u6BCD",sp:"\u8D85\u5927\u578B\u8266",wh:"\u7070\u9BE8",tr:"\u5546\u8239"},short:{bb:"\u6226\u8266",bc:"\u5DE1\u6226",ca:"\u91CD\u5DE1",cl:"\u8EFD\u5DE1",dd:"\u99C6\u9010",cv:"\u7A7A\u6BCD",sp:"\u8D85\u5927\u578B",wh:"\u7070\u9BE8",tr:"\u5546\u8239"},waveIn:(s,t)=>`\u7B2C${s}\u6CE2
\u6575 ${t}\u96BB \u63A5\u8FD1`,sunkThem:s=>`\u6575${s}\u3092\u6483\u6C88`,sunkUs:s=>`\u5473\u65B9\u306E${s}\u304C\u6C88\u6CA1`,magazine:s=>`\u5F3E\u85AC\u5EAB\u306B\u547D\u4E2D \u2014 ${s}\u304C\u7206\u6C88`,tons:s=>`${s.toLocaleString("ja")} \u30C8\u30F3`,lost:"\u65D7\u8266 \u6C88\u6CA1",endSub:(s,t,e)=>`${s}\u6CE2\u3092\u3057\u306E\u304E\u3001${t}\u96BB\u30FB${e.toLocaleString("ja")}\u30C8\u30F3\u3092\u6483\u6C88`,again:"\u3082\u3046\u4E00\u5EA6",refitBtn:"\u6539\u88C5",refit:"\u6539\u88C5",calibre:"\u53E3\u5F84\uFF08cm\uFF09",barrels:"\u9580\u6570",tiers:"\u6BB5\u6570",slotHint:"\u8266\u306E\u4E0A\u306E\u4E38\u3092\u62BC\u3057\u3066\u3001\u305D\u3053\u306B\u8F09\u305B\u308B\u3082\u306E\u3092\u9078\u3076\u3002\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u3059\u3001\u30DB\u30A4\u30FC\u30EB\u3067\u5BC4\u308B\u3002",backYard:"\u9020\u8239\u6240\u3078",aaHead:(s,t)=>`\u5BFE\u7A7A\u5175\u88C5\u30FB\u8FFD\u52A0 ${s} / ${t}`,haGun:"\u9AD8\u89D2\u7832",mgGun:"\u6A5F\u9283\uFF0825mm\uFF09",airHead:(s,t)=>`\u642D\u8F09\u6A5F\u30FB${s} / ${t} \u7DE8\u968A`,planeKinds:{f:"\u6226\u95D8\u6A5F",t:"\u653B\u6483\u6A5F\uFF08\u96F7\u6483\uFF09",b:"\u7206\u6483\u6A5F\uFF08\u6025\u964D\u4E0B\uFF09"},planeShort:{f:"\u6226",t:"\u653B",b:"\u7206"},bill:"\u5DE5\u8CC3",rivetsU:"\u92F2",steelU:"\u92FC\u6750",cantPay:s=>`\u3053\u306E\u6539\u88C5\u306B\u306F\u92F2 ${s.rivets.toLocaleString("ja")}\u30FB\u92FC\u6750 ${s.steel.toLocaleString("ja")} \u304C\u8981\u308B\u3002\u3069\u3053\u304B\u3092\u5143\u306B\u623B\u3057\u3066\u3002`,testFire:"\u8A66\u3057\u6483\u3061",stock:"\u5143\u306B\u623B\u3059",copyAll:"\u540C\u578B\u8266\u306B\u3082",sortie:"\u51FA\u6483",copied:"\u540C\u578B\u8266\u306B\u3082\u540C\u3058\u6539\u88C5\u3092\u3057\u307E\u3057\u305F",slotName:s=>s.stock>=0?`${"\u4E00\u4E8C\u4E09\u56DB\u4E94"[s.stock]??s.stock+1}\u756A\u7832\u5854`:s.wing?`${s.wing>0?"\u5DE6\u8237":"\u53F3\u8237"}\u306E\u8237\u5074`:"\u8FFD\u52A0\u306E\u7832\u5EA7",empty:"\u7A7A\u304D",gun:"\u4E3B\u7832",torp:"\u9B5A\u96F7",single:"\u5358\u88C5",twin:"\u9023\u88C5",triple:"\u4E09\u9023\u88C5",disp:"\u6392\u6C34\u91CF",speed:"\u901F\u529B",broad:"\u6589\u5C04\u306E\u91CD\u3055",range:"\u5C04\u7A0B",stab:{ok:"\u5B89\u5B9A",tender:"\u4E0D\u5B89\u5B9A\uFF1A\u6483\u3064\u3068\u5927\u304D\u304F\u50BE\u304F",capsize:"\u982D\u304C\u91CD\u3059\u304E\u308B\uFF1A\u307E\u3063\u3059\u3050\u7ACB\u3063\u3066\u3044\u3089\u308C\u306A\u3044",sink:"\u91CD\u3059\u304E\u308B\uFF1A\u6D6E\u304B\u3070\u306A\u3044"},wentOver:"\u8EE2\u8986\u3057\u305F",sankDock:"\u6C88\u3093\u3060",capsized:(s,t)=>t?`\u5473\u65B9\u306E${s}\u304C\u8EE2\u8986`:`\u6575${s}\u304C\u8EE2\u8986`,lang:"English"}},Qb=new URLSearchParams(location.search),ns=Qb.get("lang")??(()=>{try{return localStorage.getItem("kurogane-lang")}catch{return null}})()??"en";su[ns]||(ns="en");var Pp=[],Mt=s=>su[ns][s]??su.en[s];function fo(){document.documentElement.lang=ns;for(let t of document.querySelectorAll("[data-t]"))t.innerHTML=Mt(t.dataset.t);let s=document.getElementById("lang");s&&(s.textContent=Mt("lang"));for(let t of Pp)t()}function ru(s){Pp.push(s)}var kn=()=>ns;function Ip(){ns=ns==="en"?"ja":"en";try{localStorage.setItem("kurogane-lang",ns)}catch{}fo()}var uc=class{constructor(){this.ctx=null}start(){if(this.ctx)return;let t=this.ctx=new AudioContext,e=this.out=t.createGain();e.gain.value=.9;let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,e.connect(n).connect(t.destination);let i=t.createBuffer(2,t.sampleRate*3,t.sampleRate);for(let l=0;l<2;l++){let h=i.getChannelData(l);for(let u=0,d=0;u<h.length;u++)d=.985*d+.015*(Math.random()*2-1),h[u]=d*4+(Math.random()*2-1)*.25}this.nb=i;let r=(l=1)=>{let h=t.createBufferSource();return h.buffer=i,h.loop=!0,h.playbackRate.value=l,h.start(),h},o=(l,h,u,d,f)=>{let g=t.createBiquadFilter();g.type=h,g.frequency.value=u,g.Q.value=d;let v=t.createGain();return v.gain.value=f,l.connect(g).connect(v).connect(e),{f:g,g:v}};this.sea=o(r(1),"bandpass",600,.4,.05),this.sea2=o(r(.71),"highpass",2500,.5,.01),this.bow=o(r(1.3),"bandpass",1200,.7,0),this.wind=o(r(.9),"bandpass",400,1.2,.02),this.whistle=o(r(1.1),"bandpass",1800,18,0),this.flog=o(r(.6),"lowpass",300,.8,0);let a=t.createOscillator();a.frequency.value=5;let c=t.createGain();c.gain.value=0,a.connect(c).connect(this.flog.g.gain),a.start(),this.flogLfo=a,this.flogDepth=c,this.nextSlap=0,this.nextCreak=0,this.nextGull=4,this.lastRoll=0,this.nextBell=30}thump(t,e=90,n=.35,i=0){let r=this.ctx,o=r.currentTime,a=r.createBufferSource();a.buffer=this.nb,a.playbackRate.value=.5+Math.random()*.3;let c=r.createBiquadFilter();c.type="lowpass",c.frequency.value=e*6;let l=r.createGain();l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(t,o+.02),l.gain.exponentialRampToValueAtTime(5e-4,o+n);let h=r.createStereoPanner();h.pan.value=i,a.connect(c).connect(l).connect(h).connect(this.out),a.start(o,Math.random()*2),a.stop(o+n+.05)}creak(t){let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sawtooth";let r=140+Math.random()*180;i.frequency.setValueAtTime(r,n),i.frequency.linearRampToValueAtTime(r*(1.3+Math.random()*.4),n+.4);let o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=900+Math.random()*600,o.Q.value=6;let a=e.createGain();a.gain.value=0;let c=e.createOscillator();c.frequency.value=28+Math.random()*20;let l=e.createGain();l.gain.value=t,c.connect(l).connect(a.gain);let h=e.createGain();h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(1,n+.08),h.gain.linearRampToValueAtTime(0,n+.5);let u=e.createStereoPanner();u.pan.value=Math.random()*1.2-.6,i.connect(o).connect(a).connect(h).connect(u).connect(this.out),i.start(n),c.start(n),i.stop(n+.55),c.stop(n+.55)}gull(t){let e=this.ctx,n=e.currentTime;for(let i=0;i<2+Math.floor(Math.random()*3);i++){let r=n+i*(.28+Math.random()*.1),o=e.createOscillator();o.type="triangle";let a=1500+Math.random()*300;o.frequency.setValueAtTime(a*1.25,r),o.frequency.exponentialRampToValueAtTime(a*.7,r+.22);let c=e.createGain();c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(.012,r+.03),c.gain.linearRampToValueAtTime(0,r+.24);let l=e.createStereoPanner();l.pan.value=t,o.connect(c).connect(l).connect(this.out),o.start(r),o.stop(r+.26)}}bell(){let t=this.ctx,e=t.currentTime,n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=900,n.connect(this.out);for(let[i,r,o]of[[82,.05,14],[165.5,.03,10],[219,.02,7],[296,.012,5],[421,.006,3]]){let a=t.createOscillator();a.frequency.value=i;let c=t.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(r,e+.02),c.gain.exponentialRampToValueAtTime(1e-4,e+o),a.connect(c).connect(n),a.start(e),a.stop(e+o)}}place(t){return[this.ctx.currentTime+t/343,1/(1+t/80),300+11e3*Math.exp(-t/500)]}burst({d:t,pan:e,dur:n,f:i,q:r=.7,type:o="bandpass",gain:a,rate:c=1,attack:l=.004,delay:h=0}){let u=this.ctx,[d,f,g]=this.place(t),v=d+h,m=u.createBufferSource();m.buffer=this.nb,m.playbackRate.value=c;let p=u.createBiquadFilter();p.type=o,p.frequency.value=i,p.Q.value=r;let y=u.createBiquadFilter();y.type="lowpass",y.frequency.value=g;let x=u.createGain();x.gain.setValueAtTime(0,v),x.gain.linearRampToValueAtTime(a*f,v+l),x.gain.exponentialRampToValueAtTime(1e-4,v+n);let w=u.createStereoPanner();w.pan.value=e,m.connect(p).connect(y).connect(x).connect(w).connect(this.out),m.start(v,Math.random()*2),m.stop(v+n+.05)}gun(t,e,n){this.ctx&&(n>=3?(this.burst({d:t,pan:e,dur:.3,f:1800,q:.4,gain:1,attack:.001}),this.burst({d:t,pan:e,dur:1.8,f:90,q:.5,type:"lowpass",gain:2.4,rate:.35}),this.burst({d:t,pan:e,dur:7,f:55,q:.5,type:"lowpass",gain:1,rate:.22,attack:.12}),this.burst({d:t+1400,pan:-e*.4,dur:4,f:80,q:.5,type:"lowpass",gain:.3,rate:.25,attack:.4})):n>1.2?(this.burst({d:t,pan:e,dur:.22,f:2200,q:.5,gain:.8,attack:.001}),this.burst({d:t,pan:e,dur:1.2,f:140,q:.6,type:"lowpass",gain:1.5,rate:.45}),this.burst({d:t,pan:e,dur:4,f:70,q:.5,type:"lowpass",gain:.5,rate:.3,attack:.08})):n>.5?(this.burst({d:t,pan:e,dur:.25,f:2500,q:.5,gain:.9,attack:.002}),this.burst({d:t,pan:e,dur:1.4,f:160,q:.6,type:"lowpass",gain:1.6,rate:.5}),this.burst({d:t,pan:e,dur:4.5,f:70,q:.5,type:"lowpass",gain:.7,rate:.3,attack:.08}),this.burst({d:t+900,pan:-e*.5,dur:3,f:120,q:.5,type:"lowpass",gain:.25,rate:.35,attack:.3})):n>.2?(this.burst({d:t,pan:e,dur:.2,f:2e3,q:.6,gain:.5}),this.burst({d:t,pan:e,dur:.9,f:260,q:.6,type:"lowpass",gain:.8,rate:.6})):(this.burst({d:t,pan:e,dur:.09,f:3200,q:.8,gain:.35,attack:.001}),this.burst({d:t,pan:e,dur:.35,f:400,q:.6,type:"lowpass",gain:.25,rate:.8})))}horn(){if(!this.ctx)return;let t=this.ctx;for(let[e,n]of[[0,110],[1.1,92]]){let i=t.currentTime+e,r=t.createOscillator();r.type="sawtooth",r.frequency.value=n;let o=t.createOscillator();o.type="sawtooth",o.frequency.value=n*1.5;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=700;let c=t.createGain();c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.07,i+.1),c.gain.setValueAtTime(.07,i+.85),c.gain.linearRampToValueAtTime(0,i+1),r.connect(a),o.connect(a),a.connect(c).connect(this.out),r.start(i),o.start(i),r.stop(i+1.05),o.stop(i+1.05)}}click(){this.ctx&&this.burst({d:0,pan:0,dur:.04,f:3e3,q:2,gain:.05,attack:.001})}boom(t,e,n){this.ctx&&(this.burst({d:t,pan:e,dur:.5,f:900,q:.4,gain:1.2*n,attack:.002}),this.burst({d:t,pan:e,dur:3.5,f:60,q:.5,type:"lowpass",gain:2.6*n,rate:.2,attack:.02}),this.burst({d:t,pan:e,dur:9,f:40,q:.5,type:"lowpass",gain:1.2*n,rate:.15,attack:.3}))}splash(t,e,n){this.ctx&&this.burst({d:t,pan:e,dur:n?1.6:.5,f:900,q:.4,gain:n?.35:.08,attack:.02})}strike(t,e){this.ctx&&(this.burst({d:t,pan:e,dur:.18,f:1400,q:1.2,gain:.6,attack:.001}),this.burst({d:t,pan:e,dur:.6,f:300,q:.8,gain:.5,rate:.7,delay:.02}))}drumHit(t,e=0){let n=this.ctx,i=n.currentTime+e,r=n.createOscillator();r.frequency.setValueAtTime(95,i),r.frequency.exponentialRampToValueAtTime(52,i+.35);let o=n.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(t,i+.006),o.gain.exponentialRampToValueAtTime(1e-4,i+.9),r.connect(o).connect(this.out),r.start(i),r.stop(i+1);let a=n.createBufferSource();a.buffer=this.nb;let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=900;let l=n.createGain();l.gain.setValueAtTime(t*.5,i),l.gain.exponentialRampToValueAtTime(1e-4,i+.12),a.connect(c).connect(l).connect(this.out),a.start(i,Math.random()),a.stop(i+.15)}conch(){if(!this.ctx)return;let t=this.ctx;for(let[e,n,i]of[[0,233,2.4],[2.8,233,3.2]]){let r=t.currentTime+e,o=t.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(n*.94,r),o.frequency.linearRampToValueAtTime(n,r+.4),o.frequency.linearRampToValueAtTime(n*.97,r+i);let a=t.createOscillator();a.frequency.value=5.2;let c=t.createGain();c.gain.value=2.5,a.connect(c).connect(o.frequency);let l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=700,l.Q.value=1.4;let h=t.createGain();h.gain.setValueAtTime(0,r),h.gain.linearRampToValueAtTime(.09,r+.5),h.gain.setValueAtTime(.09,r+i-.6),h.gain.linearRampToValueAtTime(0,r+i),o.connect(l).connect(h).connect(this.out),o.start(r),a.start(r),o.stop(r+i+.1),a.stop(r+i+.1),this.burst({d:0,pan:0,dur:i,f:1500,q:.8,gain:.02,attack:.4,delay:e})}}update(t,{speed:e,aw:n,gust:i,roll:r,rollRate:o,heave:a,flog:c,force:l,landDir:h,evening:u}){if(!this.ctx)return;let d=this.ctx.currentTime,f=Math.min(n/12,1.2);this.sea.g.gain.setTargetAtTime(.04+f*.06,d,.5),this.sea2.g.gain.setTargetAtTime(.004+f*.012,d,.5),this.bow.g.gain.setTargetAtTime(Math.min(Math.max(e,0)/5,1)**1.5*.12,d,.3),this.bow.f.frequency.setTargetAtTime(700+e*220,d,.3),this.wind.g.gain.setTargetAtTime(.01+f*f*.05,d,.4),this.wind.f.frequency.setTargetAtTime(250+n*35,d,.4),this.whistle.g.gain.setTargetAtTime(Math.max(0,n-7)*.004*(.5+i),d,.6),this.whistle.f.frequency.setTargetAtTime(1400+n*60,d,.6),this.flog.g.gain.setTargetAtTime(c*.08,d,.15),this.flogDepth.gain.setTargetAtTime(c*.06,d,.15),this.flogLfo.frequency.setTargetAtTime(3+n*.5,d,.3),d>this.nextSlap&&(a<-.15||Math.abs(o)>.05)&&(this.thump(Math.min(.08+Math.abs(a)*.25+Math.abs(o)*1.2,.35),80+Math.random()*40,.3+Math.random()*.3,Math.sign(o)*.5),this.nextSlap=d+.6+Math.random()*1.2),d>this.nextCreak&&Math.abs(o)>.02+Math.random()*.03&&(this.creak(.5+Math.min(Math.abs(o)*8,1)*.5+l*1e-5),this.nextCreak=d+1.5+Math.random()*3),h!==null&&d>this.nextGull&&(this.gull(h),this.nextGull=d+6+Math.random()*14),u&&d>this.nextBell&&(this.bell(),this.nextBell=d+40+Math.random()*30),this.lastRoll=r}battle(t,{beat:e,stroke:n,fire:i,on:r}){if(!this.ctx)return;if(!this.fireN){let a=this.ctx,c=a.createBufferSource();c.buffer=this.nb,c.loop=!0,c.playbackRate.value=1.6,c.start();let l=a.createBiquadFilter();l.type="highpass",l.frequency.value=1500;let h=a.createGain();h.gain.value=0,c.connect(l).connect(h).connect(this.out),this.fireN=h,this.nextPop=0,this.lastStroke=n}let o=this.ctx.currentTime;if(this.fireN.gain.setTargetAtTime(i*.06,o,.5),i>.05&&o>this.nextPop&&(this.burst({d:20/i,pan:Math.random()-.5,dur:.05,f:2500,q:1,gain:.2*i,attack:.001}),this.nextPop=o+Math.random()*.15/i),r&&e>0){let a=Math.floor(this.lastStroke/(Math.PI*2));Math.floor(n/(Math.PI*2))>a&&(this.drumHit(.25+e*.05),e>=3&&this.drumHit(.18,.22))}this.lastStroke=n}};var Tn=(s,t,e)=>s+(t-s)*e,ou=s=>s*s*(3-2*s),Qn=s=>s.ships.find(t=>t.side==="A"&&t.flagship),tM=s=>Math.round(Math.abs(s)*57.3),Dp=s=>Math.round(s).toLocaleString("en"),au={f46:s=>s.filter(t=>!t.wing).map(t=>({slot:t.id,type:"gun",cal:46,n:3,tier:1})),f80:s=>s.filter(t=>t.stock>=0).map(t=>({slot:t.id,type:"gun",cal:80,n:2,tier:1}))},Np=[{name:"line",dur:2.4,ts:1.5,setup:"fleet",fast:26,pick:"flag",flat:[{pos:[-170,6,260],look:[40,22,-500],fov:36},{pos:[-160,6,200],look:[40,22,-500],fov:36}]},{name:"enemy",dur:1.9,ts:1.5,pick:"ebb",flat:[{pos:[700,30,380],look:[0,15,-150],fov:34},{pos:[690,30,330],look:[0,15,-150],fov:34}]},{name:"incoming",dur:2.2,ts:1,setup:"charge",until:"incoming",pick:"hit",flat:[{pos:[-300,14,-160],look:[0,20,0],fov:30},{pos:[-285,14,-130],look:[0,20,0],fov:30}]},{name:"charge",dur:1.9,ts:1.4,pick:"dd",flat:[{pos:[-70,4,190],look:[30,8,-10],fov:36},{pos:[-60,4,150],look:[30,8,-10],fov:36}]},{name:"torps",dur:2.6,ts:4,until:"torps",top:!0},{name:"shell",dur:4.4,setup:"shell",shell:!0,cap:s=>s.shellCap},{name:"kill",dur:3,ts:1.6,until:"kill",pick:"victim",cam:[{yaw:1,pitch:.06,dist:420,lift:8,fov:32},{yaw:.85,pitch:.07,dist:380,lift:8,fov:32}]},{name:"torphit",dur:2.2,ts:1.2,until:"torphit",pick:"torped",cam:[{yaw:-1.2,pitch:.06,dist:380,lift:8,fov:32},{yaw:-1.1,pitch:.07,dist:350,lift:8,fov:32}]},{name:"stock",dur:3.2,ts:1,setup:"refit",fire:.5,pick:"flag",cap:s=>["Stock battleship",`8 \xD7 36 cm \xB7 GM ${s.gm0.toFixed(1)} m`],flat:[{pos:[-60,12,230],look:[0,12,0],fov:30},{pos:[-54,12,205],look:[0,12,0],fov:30}]},{name:"refit46",dur:3,ts:1,refit:"f46",pick:"flag",orbit:[2.6,.35,1,2.2,.3,.95],cap:s=>["Refit: six triple 46 cm turrets",`+${Dp(s.fits.f46.dW)} t \xB7 GM ${s.gm0.toFixed(1)} \u2192 ${s.fits.f46.gm.toFixed(1)} m`]},{name:"b46",dur:3.6,ts:1.2,fire:.5,pick:"flag",cap:s=>["Fire",s.heel>1.5?`She heels ${s.heel}\xB0`:""],flat:[{pos:[-70,14,300],look:[0,12,0],fov:30},{pos:[-64,14,288],look:[0,12,0],fov:30}]},{name:"refit80",dur:2.7,ts:1,refit:"f80",pick:"flag",orbit:[-2.4,.3,1.05,-2,.26,1],cap:s=>["Refit: four twin 80 cm turrets",`+${Dp(s.fits.f80.dW)} t \xB7 GM ${s.fits.f80.gm.toFixed(2)} m`]},{name:"b80",dur:2,ts:1,fire:.45,pick:"flag",cap:()=>["Fire",""],flat:[{pos:[120,30,-170],look:[-200,10,300],fov:34},{pos:[122,30,-165],look:[-200,10,300],fov:34}]},{name:"roll",dur:3.8,ts:1.8,pick:"flag",cap:s=>["Her own recoil rolls her over",`heel ${s.heelNow}\xB0`],flat:[{pos:[-80,14,320],look:[0,10,0],fov:30},{pos:[-74,15,300],look:[0,8,0],fov:30}]},{name:"impact",dur:3.4,ts:1.4,until:"landing",pick:"beam",cap:()=>["...as her 80 cm shells arrive",""],cam:[{yaw:2.55,pitch:.07,dist:1300,lift:40,fov:30},{yaw:2.48,pitch:.08,dist:1200,lift:40,fov:30}]},{name:"end",dur:4.4,ts:1,pick:"flag",title:[1.4,4.4],flat:[{pos:[-260,22,420],look:[0,4,0],fov:30},{pos:[-240,24,390],look:[0,4,0],fov:30}]}],cu=Np.reduce((s,t)=>s+t.dur,0),dc=class{constructor(t,e=Np){this.c=t,this.b=t.battle,this.shots=e,this.cur=-1,this.title=document.getElementById("endcard"),this.tag=document.getElementById("tag"),this.cap=document.getElementById("cap"),this.b.waves=!1;let n=Qn(this.b),i=es(n.meta);this.fits={f46:Zn({kind:"bb",mounts:au.f46(i)},this.b.art),f80:Zn({kind:"bb",mounts:au.f80(i)},this.b.art)},this.gm0=Zn(Un("bb",n.meta),this.b.art).gm,this.heel=0,this.heelNow=0}stageFleet(){let t=this.b,e=Qn(t),n=e.body.pos.clone(),i=e.body.yaw+Math.PI/2;this.H0=e.body.yaw;let r=t.ships.filter(f=>f.side==="A"),o=r.filter(f=>f.kind==="dd"),a=r.filter(f=>f.kind==="ca"),c=[o[0],r.find(f=>f.kind==="cl"),a[0],e,r.find(f=>f.kind==="bc"),a[1],o[1],o[2]].filter(Boolean),l=Math.sin(i),h=Math.cos(i),u=Math.cos(i),d=-Math.sin(i);c.forEach((f,g)=>{let v=900-g*450;f.body.place(n.x+l*v,n.z+h*v,i,12),f.body.ctl.tele=3,f.noSteer=!0,f.station=null,f.order=null}),["dd","dd","ca","bb","ca","ca","dd","dd","dd"].forEach((f,g)=>{let v=2600-g*470,m=4800,p=t.add(f,"E",n.x+l*v+u*m,n.z+h*v+d*m,i+Math.PI,12);p.body.ctl.tele=3,p.noSteer=!0})}stageRefit(){let t=this.b;this.c.fx.clear(),this.c.torps.list.length=0,this.c.arty.shells.length=0;for(let o of t.ships)(o.side==="E"||o.side==="A"&&!o.flagship)&&(o.gone=!0,o.alive=!1);let e=Qn(t);e.body.place(e.body.pos.x,e.body.pos.z,this.H0??e.body.yaw,6),e=t.refit(e,Un("bb",e.meta)),e.noSteer=!0;let n=e.body.pos,i=e.body.yaw;e.body.ctl.tele=2;let r=i+Math.PI/2;["ca","dd","ca","dd","ca","dd"].forEach((o,a)=>{let c=(a-2.5)*420,l=5500+a%2*300,h=t.add(o,"E",n.x+Math.sin(r)*l+Math.sin(i)*c,n.z+Math.cos(r)*l+Math.cos(i)*c,i,5);h.holdFire=!0,h.torps=[],h.noSteer=!0})}beam(){let t=Qn(this.b),e=this.b.ships.filter(n=>n.side==="E"&&n.alive);return e.filter(n=>n.kind==="ca").sort((n,i)=>n.body.pos.distanceTo(t.body.pos)-i.body.pos.distanceTo(t.body.pos))[0]??e[0]??t}shotAt(t){let e=0,n=this.shots;for(let i=0;i<n.length;i++){if(t<e+n[i].dur||i===n.length-1)return[i,t-e];e+=n[i].dur}return[n.length-1,0]}ts(t){let e=this.shots[this.shotAt(t)[0]];return e.shell?this.shellTs??2:e.ts??1}start(t){let e=this.shots[t],n=this.b,i=this.c;if(this.cur=t,this.heel=0,e.setup==="fleet"&&this.stageFleet(),e.setup==="refit"&&this.stageRefit(),e.setup==="charge"){let a=n.ships.find(c=>c.side==="A"&&c.kind==="dd"&&c.alive);if(a){let c=Qn(n);a.noSteer=!1,a.order={x:c.body.pos.x+Math.cos(c.body.yaw)*6e3,z:c.body.pos.z-Math.sin(c.body.yaw)*6e3},a.body.ctl.tele=4,this.dd=a}}if(e.fast&&i.fast(e.fast),e.until==="incoming"&&i.fastUntil(()=>i.arty.shells.some(a=>a.from.side==="E"&&a.g.cal>.15&&a.v.y<0&&a.p.y<120&&n.ships.some(c=>c.side==="A"&&c.alive&&c.body.pos.distanceTo(a.p)<260&&(this.hitShip=c))),60),e.until==="torps"&&i.fastUntil(()=>i.torps.list.filter(a=>a.alive&&a.from.side==="A"&&a.run>300).length>=4,160),e.setup==="shell"&&this.startShell(),e.until==="kill"&&i.fastUntil(()=>!this.victim||!this.victim.alive,25),e.until==="torphit"){let a=n.log.length;i.fastUntil(()=>n.log.slice(a).some(c=>c.kind==="torphit"&&c.ship.side==="E"&&(this.torped=c.ship)),260),i.fast(.3)}let r=Qn(n);(e.refit||e.fire!==void 0||e.until==="landing"||e.setup==="refit")&&(r.holdFire=!0),e.refit?(i.fx.clear(),this.queue=au[e.refit](es(r.meta)),r=n.refit(r,{kind:"bb",mounts:[]}),r.holdFire=!0,r.noSteer=!0,this.added=0,this.refitDur=e.dur*.8):this.queue=null,e.fire!==void 0?(this.fireAt=e.fire,this.fired=!1):this.fireAt=void 0,e.until==="landing"&&i.fastUntil(()=>i.arty.shells.some(a=>a.from===r&&a.v.y<0&&a.p.y<160),30);let o={ebb:n.ships.find(a=>a.side==="E"&&a.kind==="bb"&&a.alive)??r,flag:r,hit:this.hitShip,dd:this.dd,victim:this.victim,torped:this.torped??this.beam(),beam:this.beam()};this.ship=o[e.pick]??r}startShell(){let t=this.b,e=Qn(t),n=(l,h)=>{let u=e.body.toLocal(h.body.pos.clone(),new b),d=l.meta.at,f=Math.atan2(-(u.x-d[0]),u.z-d[2]),g=m=>pt.euclideanModulo(m+Math.PI,Math.PI*2)-Math.PI,v=g(f-l.rest);return v>g(l.meta.arc[0]-l.rest)+.1&&v<g(l.meta.arc[1]-l.rest)-.1&&h.body.pos.distanceTo(e.body.pos)<l.g.range*.85},i=t.ships.filter(l=>l.side==="E"&&l.alive).sort((l,h)=>l.hp-h.hp),r=null;this.victim=null;for(let l of i)if(r=e.turrets.filter(h=>!h.broken&&h.meta.at[2]>0).find(h=>n(h,l)),r){this.victim=l;break}if(!r){for(let l of i)if(r=e.turrets.find(h=>!h.broken&&n(h,l)),r){this.victim=l;break}}if(this.shellObj=null,this.shellEnd=null,this.shellTu=null,!this.victim)return;t.snapAim(e,[this.victim],.05),r.lastShell=null;for(let l of e.turrets)l.perfect=l===r,l.reload=l===r?.05:Math.max(l.reload,8);e.holdFire=!1;let o=this.victim.body.pos.distanceTo(e.body.pos),c=yr(r.meta.gun,o)?.t??10;this.shellTs=(c+1.4)/(this.shots.find(l=>l.shell).dur-.6),this.shellTu=r,this.shellCap=[`One ${Math.round(Se[r.meta.gun].calCm)} cm shell`,`${(o/1e3).toFixed(1)} km \xB7 ${c.toFixed(1)} s in the air`]}apply(t){let[e,n]=this.shotAt(t);e!==this.cur&&this.start(e);let i=this.shots[e],r=this.b,o=Qn(r);if(this.queue){let l=Math.min(this.queue.length,Math.floor(n/this.refitDur*this.queue.length)+1);l>this.added&&(this.added=l,this.c.event?.("drop",o.body.pos),o=r.refit(o,{kind:"bb",mounts:this.queue.slice(0,l)}),o.holdFire=!0,o.noSteer=!0,this.ship=o)}if(this.fireAt!==void 0&&!this.fired&&n>=this.fireAt-.3){this.fired=!0;let l=r.ships.filter(h=>h.side==="E"&&h.alive).sort((h,u)=>h.body.pos.distanceTo(o.body.pos)-u.body.pos.distanceTo(o.body.pos));l.length&&(r.snapAim(o,l,.25),o.holdFire=!1)}if(i.shell&&this.shellTu){let l=this.shellTu.lastShell;!this.shellObj&&l&&this.c.arty.shells.includes(l)&&(this.shellObj=l,this.c.arty.tracked=l),this.shellObj&&!this.c.arty.shells.includes(this.shellObj)&&!this.shellEnd&&(this.shellEnd=this.shellObj.p.clone(),this.endDir=this.shellObj.v.clone().setY(0).normalize(),this.pull=0),this.shellObj&&(o.holdFire=!0)}let a=tM(o.body.heel);this.heelNow=a,this.heel=Math.max(this.heel,a);let c=i.cap?i.cap(this,n):null;return this.tag&&(this.tag.textContent=c?.[0]??"",this.tag.style.opacity=c?1:0),this.cap&&(this.cap.textContent=c?.[1]??"",this.cap.style.opacity=c?.[1]?1:0),this.title&&(this.title.style.opacity=i.title?pt.clamp((n-i.title[0])/.8,0,1):0),{fade:Math.min(1,t/.4,(cu-t)/.35+1e-4)}}focus(){let t=this.shots[this.cur];return t?.shell?this.shellEnd??this.shellObj?.p??this.victim?.body.pos??this.c.rcam.target:t?.top?this.topAt??this.c.rcam.target:this.ship?this.ship.body.pos:this.c.rcam.target}camera(t){let[e,n]=this.shotAt(t),i=this.shots[e],r=this.c.camera,o=ou(Math.min(n/i.dur,1)),a=this.ship??Qn(this.b),c=a.body;if(i.shell){r.fov=40,r.updateProjectionMatrix();let y=this.shellObj;if(y&&!this.shellEnd){let x=y.v.clone().normalize(),w=new b(-x.z,0,x.x).normalize();this.camPos=y.p.clone().addScaledVector(x,-9).add(new b(0,1.4,0)).addScaledVector(w,3.2),r.position.copy(this.camPos),r.lookAt(y.p.clone().addScaledVector(x,70).add(new b(0,-6,0)))}else if(this.shellEnd&&this.camPos){this.pull=Math.min((this.pull??0)+1/30/.7,1);let x=this.endDir??new b(0,0,1),w=this.shellEnd.clone().addScaledVector(x,-(40+220*ou(this.pull))).add(new b(0,8+22*ou(this.pull),0));r.position.copy(w),r.lookAt(this.victim?this.victim.body.pos.clone().setY(12):this.shellEnd)}else if(this.shellTu&&this.victim){let x=Qn(this.b),w=this.shellTu;r.position.copy(x.body.toWorld(new b(w.meta.at[0],w.meta.at[1]+8,w.meta.at[2]-26),new b)),r.lookAt(this.victim.body.pos.clone().setY(30))}r.updateMatrixWorld();return}if(i.top){let y=this.c.torps.list.filter(A=>A.alive&&A.from.side==="A");if(y.length){if(!this.spread||!this.spread.some(A=>A.alive)){let A=Math.max(...y.map(R=>R.t0));this.spread=y.filter(R=>Math.abs(R.t0-A)<.5)}y=this.spread.filter(A=>A.alive)}y.length&&(this.topAt=y.reduce((A,R)=>A.add(R.p),new b).divideScalar(y.length).setY(0),this.topDir=y.reduce((A,R)=>A.add(R.d),new b).normalize());let x=this.topAt??Qn(this.b).body.pos,w=this.topDir??new b(1,0,0);r.fov=38,r.updateProjectionMatrix(),r.position.copy(x).addScaledVector(w,-240+70*o).add(new b(0,48-6*o,0)),r.lookAt(x.clone().addScaledVector(w,900).setY(0)),r.updateMatrixWorld();return}if(i.orbit){let[y,x,w,A,R,C]=i.orbit,U=c.yaw+Tn(y,A,o),_=Tn(x,R,o),E=a.meta.L*1.1*Tn(w,C,o),N=new b(c.pos.x,10,c.pos.z);r.fov=34,r.updateProjectionMatrix(),r.position.set(N.x+Math.sin(U)*Math.cos(_)*E,N.y+Math.sin(_)*E,N.z+Math.cos(U)*Math.cos(_)*E),r.lookAt(N),r.updateMatrixWorld();return}let l=(y,x)=>[Tn(y[0],x[0],o),Tn(y[1],x[1],o),Tn(y[2],x[2],o)];if(i.flat){let[y,x]=i.flat;r.fov=Tn(y.fov,x.fov,o),r.updateProjectionMatrix();let w=Math.cos(c.yaw),A=Math.sin(c.yaw),R=C=>new b(c.pos.x+C[0]*w+C[2]*A,C[1],c.pos.z-C[0]*A+C[2]*w);r.position.copy(R(l(y.pos,x.pos))),r.lookAt(R(l(y.look,x.look))),r.updateMatrixWorld();return}if(i.local){let[y,x]=i.local;r.fov=Tn(y.fov,x.fov,o),r.updateProjectionMatrix(),r.position.copy(c.toWorld(new b(...l(y.pos,x.pos)),new b)),r.up.set(0,1,0).applyQuaternion(c.quat),r.lookAt(c.toWorld(new b(...l(y.look,x.look)),new b)),r.updateMatrixWorld(),r.up.set(0,1,0);return}let[h,u]=i.cam;r.fov=Tn(h.fov,u.fov,o),r.updateProjectionMatrix();let d=Tn(h.yaw,u.yaw,o),f=Tn(h.pitch,u.pitch,o),g=Tn(h.dist,u.dist,o),v=Tn(h.lift,u.lift,o),m=new b(c.pos.x,v,c.pos.z),p=c.yaw+Math.PI+d;r.position.set(m.x+Math.sin(p)*Math.cos(f)*g,m.y+Math.sin(f)*g,m.z+Math.cos(p)*Math.cos(f)*g),r.lookAt(m),r.updateMatrixWorld()}};var eM=s=>s*s*(3-2*s),nM=(s,t,e)=>s+(t-s)*e,Up=[{name:"deck",dur:4.6,ts:1,cap:()=>["Carrier strike","fighters \xB7 torpedo bombers \xB7 dive bombers"]},{name:"climb",dur:3,ts:1.4},{name:"torpedo",dur:3,ts:1,cap:()=>["Torpedo bombers","one torpedo each"]},{name:"dogfight",dur:3.6,ts:.9,cap:()=>["Their fighters come up",""]},{name:"flak",dur:3.2,ts:1,cap:()=>["Anti-aircraft fire",""]},{name:"run",dur:4,ts:1,cap:()=>["30 m above the sea","drop at 1 km"]},{name:"tracks",dur:2.8,ts:4},{name:"torphit",dur:2.8,ts:1},{name:"dive",dur:3.4,ts:1,cap:()=>["Dive bombers","250 kg"]},{name:"bombs",dur:3,ts:.8},{name:"end",dur:4.6,ts:1,title:[1.6,4.6]}],iM=Up.reduce((s,t)=>s+t.dur,0),fc=class{constructor(t,e=Up){this.c=t,this.b=t.battle,this.air=t.air,this.shots=e,this.cur=-1,this.title=document.getElementById("endcard"),this.tag=document.getElementById("tag"),this.cap=document.getElementById("cap"),this.len=iM,this.stage()}stage(){let t=this.b,e=t.flagship()?.body.yaw??0,n=t.flagship()?.body.pos.clone()??new b;t.reset(),t.waves=!1;let i=Math.sin(e),r=Math.cos(e),o=Math.cos(e),a=-Math.sin(e),c=(m,p)=>[n.x+i*m+o*p,n.z+r*m+a*p],l=t.add("cv","A",...c(0,0),e,14,{flagship:!0});l.body.ctl.tele=3,l.noSteer=!0;for(let[m,p,y]of[["ca",900,700],["ca",-700,700],["cl",1200,-500],["dd",1500,300],["dd",-400,-800]]){let x=t.add(m,"A",...c(p,y),e,14);x.body.ctl.tele=3,x.noSteer=!0,x.holdFire=!0}let h=c(6500,6200),u=e-Math.PI/2-.4,d=Math.sin(u),f=Math.cos(u),g=t.add("bb","E",h[0],h[1],u,10);this.ebb=g;for(let[m,p,y]of[["ca",700,600],["ca",-800,500],["dd",1300,-400],["dd",-300,-900],["cl",400,1300]]){let x=t.add(m,"E",h[0]+d*p+f*y,h[1]+f*p-d*y,u,10);x.body.ctl.tele=3,x.noSteer=!0,x.holdFire=!0,x.torps=[]}g.body.ctl.tele=3,g.noSteer=!0,g.holdFire=!0;let v=t.add("cv","E",h[0]-f*4500,h[1]+d*4500,u,10,{planes:{f:3,t:0,b:0}});v.body.ctl.tele=3,v.noSteer=!0;for(let m of t.ships)m.side==="E"&&(m.aa.k=.3);l.focus=g,l.wing.cool=1e9,this.cv=l,this.ecv=v}shotAt(t){let e=0,n=this.shots;for(let i=0;i<n.length;i++){if(t<e+n[i].dur||i===n.length-1)return[i,t-e];e+=n[i].dur}return[n.length-1,0]}ts(t){return this.shots[this.shotAt(t)[0]].ts??1}sq(t,e){let n=this.air.sq.filter(i=>i.side===t&&i.kind===e&&i.n>0);return n.find(i=>i.state!=="home")??n[0]}launch(t,e){this.air.launch(this.cv,t,e),this.cv.wing.cool=1e9}start(t){let e=this.shots[t],n=this.b,i=this.c,r=this.air,o=this.cv;if(this.cur=t,this.q=null,this.ship=null,e.name==="deck"&&(i.fast(2),this.launch("t",{job:"strike",target:this.ebb}),this.q=this.sq("A","t")),e.name==="climb"&&(this.q=this.sq("A","t")),e.name==="torpedo"&&(i.fast(12),this.launch("f",{job:"escort",escort:this.sq("A","t"),target:this.ebb}),i.fast(26),this.q=this.sq("A","t")),e.name==="dogfight"&&(i.fastUntil(()=>r.sq.some(a=>a.side==="E"&&a.kind==="f"&&a.state!=="up"&&r.sq.some(c=>c.side==="A"&&c.kind==="f"&&c.pos.distanceTo(a.pos)<1100)),160),i.fastUntil(()=>r.sq.some(a=>a.side==="E"&&a.kind==="f"&&a.dmg>.55),20),this.q=r.sq.find(a=>a.side==="E"&&a.kind==="f"&&a.dmg>.55)??r.sq.find(a=>a.side==="E"&&a.kind==="f")??this.sq("A","f"),this.q2=this.sq("A","f"),this.fall0=r.falling.length,this.down=null),e.name==="flak"&&(i.fastUntil(()=>{let a=this.sq("A","t");return!a||a.pos.distanceTo(this.ebb.body.pos)<5200},120),this.launch("b",{job:"strike",target:this.ebb}),this.q=this.sq("A","t")),e.name==="run"&&(i.fastUntil(()=>{let a=this.sq("A","t");return!a||Math.hypot(a.pos.x-this.ebb.body.pos.x,a.pos.z-this.ebb.body.pos.z)<2200},120),this.q=this.sq("A","t")),e.name==="dive"&&(i.fastUntil(()=>r.sq.some(a=>a.side==="A"&&a.kind==="b"&&Math.hypot(a.pos.x-this.ebb.body.pos.x,a.pos.z-this.ebb.body.pos.z)<1700),200),this.q=this.sq("A","b")),e.name==="bombs"&&(i.fastUntil(()=>{let a=this.sq("A","b");return!a||a.state!=="dive"||a.pos.y<420},30),this.ship=this.ebb),e.name==="tracks"&&i.fast(4),e.name==="torphit"){let a=n.log.length;i.fastUntil(()=>n.log.slice(a).some(c=>c.kind==="torphit"&&c.ship.side==="E"),40),this.ship=this.ebb}e.name==="end"&&(i.fast(25),this.ship=this.ebb),this.qPos=this.q?this.q.pos.clone():null}apply(t){let[e,n]=this.shotAt(t);e!==this.cur&&this.start(e);let i=this.shots[e],r=i.cap?i.cap(this,n):null;return this.tag&&(this.tag.textContent=r?.[0]??"",this.tag.style.opacity=r?1:0),this.cap&&(this.cap.textContent=r?.[1]??"",this.cap.style.opacity=r?.[1]?1:0),this.title&&(this.title.style.opacity=i.title?pt.clamp((n-i.title[0])/.8,0,1):0),{fade:Math.min(1,t/.4,(this.len-t)/.35+1e-4)}}focus(){return this.q?.pos??this.ship?.body.pos??this.cv.body.pos}lead(){return this.q&&this.q.n>0&&(this.qPos=this.q.pos.clone()),this.qPos??this.cv.body.pos}camera(t){let[e,n]=this.shotAt(t),i=this.shots[e],r=this.c.camera,o=eM(Math.min(n/i.dur,1)),a=(p,y,x)=>{r.fov=x,r.updateProjectionMatrix(),r.position.copy(p),r.lookAt(y),r.updateMatrixWorld()},c=this.cv.body,l=this.q,h=p=>new b(Math.sin(p),0,Math.cos(p)),u=p=>new b(Math.cos(p),0,-Math.sin(p));if(i.name==="deck"){let p=this.cv.meta.deck_top+8.7,y=c.toWorld(new b(5,p+2.4,108),new b),x=l?l.pos.clone().lerp(c.toWorld(new b(2,p+2,-40),new b),.5*(1-o)):c.pos;return a(y,x,40)}if(i.name==="climb"){let p=c.toWorld(new b(140,70+o*20,520),new b);return a(p,l?this.lead().clone().lerp(c.pos,.3):c.pos,36)}if(i.name==="torpedo"){let p=this.lead(),y=l?.yaw??0,x=p.clone().addScaledVector(u(y),-26+4*o).addScaledVector(h(y),14-10*o).add(new b(0,-3,0));return a(x,p.clone().addScaledVector(h(y),6),40)}if(i.name==="dogfight"){let p=this.air;!this.down&&this.camE&&p.falling.length>this.fall0&&(this.down=p.falling.slice(this.fall0).find(R=>R.side==="E"&&R.t<.2&&R.pos.distanceTo(this.camE)<80)??null);let y,x;if(this.down)y=this.down.pos,x=this.down.yaw,this.camE=this.camE?this.camE.lerp(y,.25):y.clone();else if(this.q?.n>0){let R=p.placeOf(this.q,this.q.n-1,new b);y=R.pos.clone(),x=R.yaw,this.camE=y.clone(),this.camY=x}else y=this.lead(),x=this.q?.yaw??0;let w=this.camE??y;this.down&&(x=this.camY??x);let A=w.clone().addScaledVector(u(x),38).addScaledVector(h(x),-26).add(new b(0,6,0));return this.down?(this.camP=this.camP?this.camP.lerp(A,.08):A,a(this.camP,y,42)):(this.camP=A,a(A,w.clone().addScaledVector(h(x),16),42))}if(i.name==="flak"){let p=this.lead(),y=l?.yaw??0,x=p.clone().addScaledVector(h(y),-48+8*o).addScaledVector(u(y),14).add(new b(0,9,0));return a(x,p.clone().addScaledVector(h(y),700).setY(p.y*.4),42)}if(i.name==="run"){let p=this.lead(),y=l?.yaw??0,x=p.clone().addScaledVector(u(y),16).addScaledVector(h(y),-42+8*o);return x.y=Math.max(p.y+5,7),a(x,p.clone().addScaledVector(h(y),500).setY(Math.max(p.y-25,2)),42)}if(i.name==="dive"){let p=this.lead(),y=l?.yaw??0,x=p.clone().addScaledVector(h(y),-42).add(new b(0,16,0)).addScaledVector(u(y),8),w=this.ebb.body.pos.clone().setY(0);return a(x,p.clone().lerp(w,.18),44)}if(i.name==="tracks"){let p=this.c.torps.list.filter(w=>w.alive&&w.from===this.cv);p.length&&(this.topAt=p.reduce((w,A)=>w.add(A.p),new b).divideScalar(p.length).setY(0),this.topDir=p[0].d.clone());let y=this.topAt??this.ebb.body.pos,x=this.topDir??h(0);return a(y.clone().addScaledVector(x,-200+40*o).add(new b(0,46,0)),y.clone().addScaledVector(x,700).setY(0),38)}let d=this.ebb.body,f=d.yaw+(i.name==="end"?2.4-.2*o:i.name==="bombs"?2:-1.2),g=i.name==="end"?nM(520,640,o):i.name==="bombs"?270:380,v=new b(d.pos.x,14,d.pos.z),m=new b(v.x+Math.sin(f)*g,i.name==="end"?60+30*o:34,v.z+Math.cos(f)*g);return a(m,v,i.name==="end"?34:32)}};var kp="kurogane-designs";function sM(){try{return JSON.parse(localStorage.getItem(kp)??"null")}catch{return null}}function rM(s){try{localStorage.setItem(kp,JSON.stringify(s))}catch{}}var Ss=new b,pc=class{constructor(t){Object.assign(this,t),this.open=!1,this.ships=()=>this.battle.ships.filter(i=>i.player),this.designs=sM()??{},this.cur=0,this.slot=null;let e=this.el=document.createElement("div");e.id="dock",e.innerHTML=`
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
      <div class="dk-msg"></div>`,this.root.appendChild(e);let n=i=>e.querySelector(i);this.$={tabs:n(".dk-tabs"),slots:n(".dk-slots"),panel:n(".dk-panel"),name:n(".dk-slotname"),type:n(".dk-type"),cal:n(".dk-cal"),n:n(".dk-n"),tier:n(".dk-tier"),stats:n(".dk-stats"),msg:n(".dk-msg")},n(".dk-go").addEventListener("click",()=>this.close(!0)),n(".dk-stock").addEventListener("click",()=>{let i=this.ship();this.setDesign(i,Un(i.kind,i.meta))}),n(".dk-all").addEventListener("click",()=>this.copyAll()),n(".dk-test").addEventListener("click",()=>this.testFire());for(let i of e.querySelectorAll("button"))i.addEventListener("pointerdown",r=>r.stopPropagation());this.drag=null,this.yaw=2.3,this.pitch=.32,this.dist=1,t.canvas.addEventListener("pointerdown",i=>{this.open&&i.button===0&&(this.drag=[i.clientX,i.clientY])}),addEventListener("pointermove",i=>{this.drag&&(this.yaw-=(i.clientX-this.drag[0])*.006,this.pitch=pt.clamp(this.pitch+(i.clientY-this.drag[1])*.004,.04,1.2),this.drag=[i.clientX,i.clientY])}),addEventListener("pointerup",()=>{this.drag=null}),t.canvas.addEventListener("wheel",i=>{this.open&&(this.dist=pt.clamp(this.dist*Math.exp(i.deltaY*.001),.4,3))},{passive:!0})}ship(){return this.ships()[this.cur]}designOf(t){return this.store?this.store.get(t)??Un(t.kind,t.meta):this.designs[t.station?`${t.kind}@${t.station}`:t.kind+(t.flagship?"*":"")]??Un(t.kind,t.meta)}keyOf(t){return t.station?`${t.kind}@${t.station}`:t.kind+(t.flagship?"*":"")}applyAll(){for(let t of this.ships()){let e=this.designs[this.keyOf(t)];e&&this.battle.refit(t,e)}}setDesign(t,e){this.store?this.store.put(t,e):(this.designs[this.keyOf(t)]=e,rM(this.designs));let n=this.battle.refit(t,e);return this.render(),n}copyAll(){let t=this.ship(),e=this.designOf(t);for(let n of this.ships())n!==t&&n.kind===t.kind&&this.setDesign(n,JSON.parse(JSON.stringify(e)));this.flash(Mt("copied"))}show(t){t!==void 0&&(this.cur=t,this.slot=null),this.entry=new Map(this.ships().map(e=>[e.uid,JSON.parse(JSON.stringify(this.designOf(e)))])),this.open=!0,this.el.classList.add("on"),this.el.querySelector(".dk-go").textContent=Mt(this.store?"backYard":"sortie"),this.render()}bill(t){let e=this.entry?.get(t.uid);return e&&this.billFor?this.billFor(e,this.designOf(t)):null}close(t){if(this.store&&this.pay){let e={rivets:0,steel:0};for(let n of this.ships()){let i=this.bill(n);i&&(e.rivets+=i.rivets,e.steel+=i.steel)}if(!this.pay(e)){this.flash(Mt("cantPay")(e));return}}this.open=!1,this.el.classList.remove("on"),t&&this.onSortie?.()}flash(t){this.$.msg.textContent=t,this.$.msg.classList.add("on"),clearTimeout(this._mt),this._mt=setTimeout(()=>this.$.msg.classList.remove("on"),2600)}testFire(){let t=this.ship();if(!t?.alive)return;let e=t.turrets.filter(n=>n.rest+.01<0||n.meta.arc[0]<-Math.PI/2).length;t.testAim={brg:e>=t.turrets.length/2?-Math.PI/2:Math.PI/2,elev:.14,fire:!0,t:0};for(let n of t.turrets)n.testFired=!1,n.reload=Math.min(n.reload,.5);this.sound?.start()}render(){let t=this.ship();if(!t)return;let e=this.designOf(t);this.$.tabs.innerHTML="",this.ships().forEach((l,h)=>{let u=document.createElement("button");u.type="button",u.className=(h===this.cur?"on":"")+(l.alive?"":" dead"),u.textContent=`${l.label??Mt("short")[l.kind]}${l.flagship?" \u25C6":""}`,u.addEventListener("pointerdown",d=>d.stopPropagation()),u.addEventListener("click",()=>{this.cur=h,this.slot=null,this.render()}),this.$.tabs.appendChild(u)});let n=es(t.meta),i=this.slot&&n.find(l=>l.id===this.slot);if(this.$.panel.classList.toggle("on",!!i),i){let l=e.mounts.find(f=>f.slot===i.id)??{slot:i.id,type:"none",cal:36,n:2,tier:1};this.$.name.textContent=Mt("slotName")(i);let h=(f,g,v,m)=>{f.innerHTML="";for(let[p,y]of g){let x=document.createElement("button");x.type="button",x.textContent=y,p===v&&(x.className="on"),x.addEventListener("pointerdown",w=>w.stopPropagation()),x.addEventListener("click",()=>m(p)),f.appendChild(x)}},u=f=>{let g=JSON.parse(JSON.stringify(e)),v=g.mounts.find(m=>m.slot===i.id);v||(v={slot:i.id,type:"gun",cal:l.cal,n:l.n,tier:1},g.mounts.push(v)),Object.assign(v,f),v.type==="none"&&(g.mounts=g.mounts.filter(m=>m!==v)),this.setDesign(t,g)};h(this.$.type,[["none",Mt("empty")],["gun",Mt("gun")],...i.wing?[["torp",Mt("torp")]]:[]],l.type,f=>u({type:f}));let d=l.type==="gun";for(let f of["cal","n","tier"])this.$[f].classList.toggle("off",!d);h(this.$.cal,(this.cals?.()??xp).map(f=>[f,String(f)]),l.cal,f=>u({type:"gun",cal:f})),h(this.$.n,[[1,Mt("single")],[2,Mt("twin")],[3,Mt("triple")]],l.n,f=>u({type:"gun",n:f})),h(this.$.tier,[[1,"\xD71"],[2,"\xD72"],[3,"\xD73"]],l.tier??1,f=>u({type:"gun",tier:f}))}this.aaPanel(t,e);let r=Zn(e,this.art),o=r.freeboard<=.3?"sink":r.gm<.05?"capsize":r.gm<.6?"tender":"ok",a=Math.max(0,...r.mounts.map(l=>Se[l.gun].range)),c=pt.clamp(r.gm/3,0,1)*100;this.$.stats.innerHTML=`
      <div><i>${Mt("disp")}</i><b>${Math.round(r.disp).toLocaleString("en")}</b> t</div>
      <div><i>${Mt("speed")}</i><b>${(t.body.K.kn*r.speedK).toFixed(1)}</b> kn</div>
      <div><i>${Mt("broad")}</i><b>${r.broadside.toFixed(1)}</b> t</div>
      <div><i>${Mt("range")}</i><b>${(a/1e3).toFixed(1)}</b> km</div>
      <div><i>GM</i><b>${r.gm.toFixed(2)}</b> m<span class="gm"><em style="width:${c}%"></em></span></div>
      <div class="st ${o}">${Mt("stab")[o]}</div>${this.store?(()=>{let l=this.bill(t);return l&&(l.rivets||l.steel)?`<div><i>${Mt("bill")}</i><b>${l.rivets.toLocaleString("en")}</b> <small>${Mt("rivetsU")}</small> <b>${l.steel.toLocaleString("en")}</b> <small>${Mt("steelU")}</small></div>`:""})():""}`}aaPanel(t,e){let n=this.el.querySelector(".dk-aa"),i=Cp[t.kind]??0,r=t.opts?.mods?.aaStock??ho[t.kind]??[0,0],o={ha:0,mg:0,...e.aa??{}},a=[],c=(h,u,d,f,g)=>`<div class="dk-aarow"><span>${h}</span><b>${u}</b><em>${f}</em><button type="button" data-k="${d}" data-d="-1">\u2212</button><button type="button" data-k="${d}" data-d="1" ${g?"":"disabled"}>\uFF0B</button></div>`,l=o.ha+o.mg;if(i&&(a.push(`<div class="dk-lab">${Mt("aaHead")(l,i)}</div>`),a.push(c(Mt("haGun"),r[0]+o.ha,"ha",o.ha?`+${o.ha}`:"",l<i)),a.push(c(Mt("mgGun"),r[1]+o.mg,"mg",o.mg?`+${o.mg}`:"",l<i))),t.kind==="cv"){let h={f:3,t:4,b:3,...e.air??{}},u=h.f+h.t+h.b;a.push(`<div class="dk-lab">${Mt("airHead")(u,eu)}</div>`);for(let d of["f","t","b"])a.push(c(Mt("planeKinds")[d],h[d],"air."+d,"",u<eu))}n.innerHTML=a.join(""),n.style.display=a.length?"block":"none";for(let h of n.querySelectorAll("button"))h.addEventListener("pointerdown",u=>u.stopPropagation()),h.onclick=()=>{let u=JSON.parse(JSON.stringify(e)),d=+h.dataset.d,f=h.dataset.k;if(f.startsWith("air.")){u.air={f:3,t:4,b:3,...u.air??{}};let g=f.slice(4);u.air[g]=Math.max(0,u.air[g]+d)}else u.aa={ha:0,mg:0,...u.aa??{}},u.aa[f]=Math.max(0,u.aa[f]+d);this.setDesign(t,u)}}update(t){if(!this.open)return;let e=this.ship();if(!e)return;let n=e.body,r=e.meta.L*1.15*this.dist,o=n.yaw+this.yaw,a=n.toWorld(Ss.set(0,e.meta.deck_top+4,0),new b);this.camera.position.set(a.x+Math.sin(o)*Math.cos(this.pitch)*r,a.y+Math.sin(this.pitch)*r,a.z+Math.cos(o)*Math.cos(this.pitch)*r),this.camera.lookAt(a),this.camera.updateMatrixWorld(),this.rcam.target.set(n.pos.x,0,n.pos.z);let c=es(e.meta),l=this.designOf(e);if(this.$.slots.childElementCount!==c.length||this.$.slots.dataset.ship!==String(e.id)){this.$.slots.innerHTML="",this.$.slots.dataset.ship=String(e.id);for(let h of c){let u=document.createElement("button");u.type="button",u.className="dk-slot",u.dataset.id=h.id,u.addEventListener("pointerdown",d=>d.stopPropagation()),u.addEventListener("click",()=>{this.slot=h.id,this.render()}),this.$.slots.appendChild(u)}}for(let h of this.$.slots.children){let u=c.find(f=>f.id===h.dataset.id),d=l.mounts.filter(f=>f.slot===u.id)[0];Ss.set(u.at[0],u.at[1]+2,u.at[2]),n.toWorld(Ss,Ss).project(this.camera),h.style.transform=`translate(${((Ss.x*.5+.5)*this.W).toFixed(1)}px, ${((-Ss.y*.5+.5)*this.H).toFixed(1)}px)`,h.style.display=Ss.z<1?"block":"none",h.classList.toggle("on",this.slot===u.id),h.classList.toggle("used",!!d),h.textContent=d?d.type==="torp"?"T":`${d.cal}`:"+"}e.testAim&&(e.testAim.t+=t,e.turrets.every(h=>h.testFired||h.broken)&&e.testAim.t>2&&(e.testAim=null),e.testAim&&e.testAim.t>120&&(e.testAim=null)),!e.alive&&!this._lost&&(this._lost=!0,this.flash(Mt(e.body.capsized?"wentOver":"sankDock"))),e.alive&&(this._lost=!1)}};var oM=[{id:1,wind:6,swell:.6,haze:55e-6,hour:15.6},{id:2,wind:5,swell:.5,haze:32e-5,hour:15,fog:5200},{id:3,wind:10,swell:2.2,haze:7e-5,hour:14.4,cover:.5},{id:4,wind:17,swell:3.4,haze:19e-5,hour:15.2,storm:!0,cover:.8,dim:.35}],is=[{id:"1-1",goal:"all",fee:600,par:360,waves:[["dd","dd"],["dd","dd","dd"]]},{id:"1-2",goal:"escort",fee:800,par:480,escort:[3,2],waves:[["dd","dd"],["dd","dd","dd"]]},{id:"1-3",goal:"all",fee:900,par:420,waves:[["cl","dd","dd"],["dd","dd","dd","dd"]]},{id:"1-4",goal:"hold",fee:1e3,par:0,time:420,waves:[["dd","dd","dd"],["cl","dd","dd"],["cl","cl","dd","dd"]]},{id:"1-5",goal:"boss",fee:1500,par:540,waves:[["cl","dd","dd"],["ca!","cl","dd","dd"]]},{id:"2-1",goal:"all",fee:1600,par:480,near:!0,waves:[["ca","cl","dd","dd"],["cl","dd","dd","dd"]]},{id:"2-2",goal:"all",fee:1800,par:480,hour:17.55,waves:[["cl","dd","dd","dd","dd"],["cl","cl","dd","dd","dd"]]},{id:"2-3",goal:"escort",fee:2e3,par:600,escort:[4,3],waves:[["ca","dd","dd"],["cl","cl","dd","dd"],["ca","dd","dd"]]},{id:"2-4",goal:"hold",fee:2200,par:0,time:480,waves:[["ca","cl","dd","dd"],["ca","ca","dd","dd"],["ca","cl","cl","dd","dd"]]},{id:"2-5",goal:"boss",fee:3e3,par:600,waves:[["ca","cl","dd","dd"],["bc!","ca","ca","dd","dd"]]},{id:"3-1",goal:"all",fee:3500,par:600,waves:[["ca","ca","cl","dd","dd"],["bc","ca","dd","dd"]]},{id:"3-2",goal:"all",fee:3800,par:600,waves:[["bc","ca","dd","dd"],["bc","ca","ca","dd","dd"]]},{id:"3-3",goal:"all",fee:4200,par:660,air:!0,waves:[["cv","ca","cl","dd","dd"],["bc","ca","dd","dd"]]},{id:"3-4",goal:"escort",fee:4500,par:720,escort:[4,3],air:!0,waves:[["cv","ca","dd","dd"],["bc","ca","cl","dd","dd"],["cv","cl","dd","dd"]]},{id:"3-5",goal:"boss",fee:6e3,par:780,air:!0,waves:[["bc","ca","ca","dd","dd"],["cv!","cv!","bc","ca","dd","dd"]]},{id:"4-1",goal:"all",fee:7e3,par:720,waves:[["bb","bc","ca","dd","dd"],["bb","ca","ca","cl","dd","dd"]]},{id:"4-2",goal:"all",fee:7500,par:720,waves:[["copy","copy","ca","dd","dd"],["copy","copy","copy","dd","dd"]]},{id:"4-3",goal:"hold",fee:8e3,par:0,time:540,air:!0,waves:[["bb","ca","dd","dd"],["cv","bc","ca","dd","dd"],["bb","bc","ca","cl","dd"]]},{id:"4-4",goal:"escort",fee:9e3,par:780,escort:[4,3],air:!0,waves:[["bc","ca","dd","dd"],["cv","bb","ca","dd","dd"],["bc","bc","cl","dd","dd"]]},{id:"4-5",goal:"boss",fee:15e3,par:900,air:!0,waves:[["bb","bc","ca","dd","dd"],["wh!","bb","cv","ca","dd","dd"]]}].map(s=>({...s,fee:Math.round(s.fee*1.3/50)*50})),_r=s=>is.find(t=>t.id===s),Op=s=>oM[+s.id[0]-1],Fp=s=>is[is.findIndex(t=>t.id===s)+1]?.id??null;var On={dd:{rivets:800,steel:300,slip:1,tons:2400},cl:{rivets:1800,steel:900,slip:2,tons:8500},ca:{rivets:3e3,steel:1800,slip:3,tons:13e3},bc:{rivets:6e3,steel:5e3,slip:4,tons:42e3},cv:{rivets:7e3,steel:5e3,slip:4,tons:38e3},bb:{rivets:8e3,steel:7e3,slip:4,tons:64e3},sp:{rivets:2e4,steel:18e3,slip:6,tons:12e4}},Bp=["dd","cl","ca","bc","cv","bb","sp"],Mr={dd:null,cl:"1-3",ca:"1-5",bc:"2-5",cv:"3-3",bb:"3-5",sp:"4-5"},aM=[12.7,15.5,20,25,36],cM={dd:60,cl:210,ca:325,bc:1050,bb:1600,cv:950,wh:4e3,tr:0},lM={dd:.08,cl:.12,ca:.18,bc:.25,cv:.25,bb:.3,wh:.6},hM=.6,uM={1:[65,25,9,1],2:[58,29,11,2],3:[50,32,15,3],4:[42,35,19,4]},Ve={steelS:{tier:0,steel:300},bulkhead:{tier:0,part:!0},boiler:{tier:0,part:!0},rangefinder:{tier:1,part:!0},bulge:{tier:1,part:!0},armour:{tier:1,part:!0},steelL:{tier:1,steel:1200},oxy:{tier:1,bp:!0},cal41:{tier:1,bp:!0,cal:41},cal46:{tier:2,bp:!0,cal:46},aadir:{tier:2,part:!0},cal51:{tier:2,bp:!0,cal:51,from:3},cal61:{tier:3,bp:!0,cal:61,from:3},cal80:{tier:9,bp:!0,cal:80}},zp={dd:["Hayate","Asanagi","Shiokaze","Tsumuji","Oboro","Nowaki","Hatsunami","Y\u016Bnagi","Kogarashi","Sazanami","Hayase","Shiranami"],cl:["Kawasemi","Misago","Tsubame","Kamome","Hibari","Isohiyo"],ca:["Kurodake","Shiramine","Aodake","Akaishi","Hiuchi","Kasumidake"],bc:["Narukami","Jinrai","Todoroki","Inazuma"],cv:["\u014Ctori","Amakake","Unkai","Kumoi"],bb:["Hagane","Genbu","Iwao","Banjaku"],sp:["Tetsuhama"]},dM={Hayate:"\u75BE\u98A8",Asanagi:"\u671D\u51EA",Shiokaze:"\u6F6E\u98A8",Tsumuji:"\u65CB\u98A8",Oboro:"\u6727",Nowaki:"\u91CE\u5206",Hatsunami:"\u521D\u6CE2",Y\u016Bnagi:"\u5915\u51EA",Kogarashi:"\u6728\u67AF",Sazanami:"\u7D30\u6CE2",Hayase:"\u65E9\u702C",Shiranami:"\u767D\u6CE2",Kawasemi:"\u7FE1\u7FE0",Misago:"\u9D9A",Tsubame:"\u71D5",Kamome:"\u9D0E",Hibari:"\u96F2\u96C0",Isohiyo:"\u78EF\u9D6F",Kurodake:"\u9ED2\u5CB3",Shiramine:"\u767D\u5DBA",Aodake:"\u9752\u5CB3",Akaishi:"\u8D64\u77F3",Hiuchi:"\u71E7",Kasumidake:"\u971E\u5CB3",Narukami:"\u9CF4\u795E",Jinrai:"\u8FC5\u96F7",Todoroki:"\u8F5F",Inazuma:"\u7A32\u59BB",\u014Ctori:"\u9CF3",Amakake:"\u5929\u7FD4",Unkai:"\u96F2\u6D77",Kumoi:"\u96F2\u5C45",Hagane:"\u92FC",Genbu:"\u7384\u6B66",Iwao:"\u5DCC",Banjaku:"\u78D0\u77F3",Tetsuhama:"\u9244\u6D5C",Kurogane:"\u9ED2\u9244"},Pi=(s,t)=>t?dM[s]??s:s;function mo(){let s={v:1,created:Date.now(),played:0,rivets:1200,steel:400,nextUid:1,ships:[],sortie:[],flag:0,stages:{},items:{},bps:[],pity:0,rng:Math.random()*4294967296>>>0,copies:[],last:"1-1",log:[]},t=br(s,"bb",{name:"Kurogane",old:!0});return br(s,"dd"),br(s,"dd"),s.flag=t.uid,s}function br(s,t,e={}){let n=new Set(s.ships.map(o=>o.name)),i=e.name??(zp[t]??[t]).find(o=>!n.has(o))??`${(zp[t]??[t])[0]} ${s.nextUid}`,r={uid:s.nextUid++,kind:t,name:i,design:null,hp:1,parts:[null,null],kills:0,sorties:0,building:e.building??0,old:!!e.old};return s.ships.push(r),!r.building&&s.sortie.length<8&&s.sortie.push(r.uid),r}var An=(s,t)=>s.ships.find(e=>e.uid===t),lu=s=>Object.values(s.stages).reduce((t,e)=>t+(e.stars??0),0),Hp=(s,t)=>!!s.stages[t]?.clears;function mc(s,t){if(t==="1-1")return!0;let e=is.findIndex(n=>n.id===t);return e>0&&Hp(s,is[e-1].id)}var po=(s,t)=>!Mr[t]||Hp(s,Mr[t]);function go(s){return[...aM,...s.bps.map(t=>Ve[t]?.cal).filter(Boolean)].sort((t,e)=>t-e)}function hu(s){let t=lu(s);return t>=35?24e4:t>=20?18e4:t>=8?12e4:8e4}function uu(s,t){let e=On[t];return po(s,t)&&s.rivets>=e.rivets&&s.steel>=e.steel}function Vp(s,t){if(!uu(s,t))return null;let e=On[t];return s.rivets-=e.rivets,s.steel-=e.steel,br(s,t,{building:e.slip})}var gc=3;function Gp(s,t){let e=t*gc;return s.rivets<e?!1:(s.rivets-=e,s.steel+=t,!0)}var du=s=>Math.round((1-s.hp)*On[s.kind].rivets*.3);function Wp(s,t){let e=du(t);return e<=0||s.rivets<e?!1:(s.rivets-=e,t.hp=1,!0)}function Xp(s,t){if(t.uid===s.flag||t.old)return!1;s.steel+=Math.round(On[t.kind].steel/3);for(let e of t.parts)e&&(s.items[e]=(s.items[e]??0)+1);return s.ships=s.ships.filter(e=>e!==t),s.sortie=s.sortie.filter(e=>e!==t.uid),!0}function fM(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function pM(s,t){let e=uM[t],n=s()*100,i=n<e[0]?0:n<e[0]+e[1]?1:n<e[0]+e[1]+e[2]?2:3,r=Object.keys(Ve).filter(o=>Ve[o].tier===i&&(Ve[o].from??0)<=t);return r.length||(r=Object.keys(Ve).filter(o=>Ve[o].tier===Math.min(i,2)&&(Ve[o].from??0)<=t)),r[Math.floor(s()*r.length)]}function $p(s,t){let e=_r(t.stage),n=+e.id[0],i=fM(s.rng);s.rng=i()*2**32>>>0;let r=s.stages[e.id]??{stars:0,clears:0,best:0},o=t.won&&!r.clears,a={stage:e.id,won:t.won,first:o,stars:0,rivets:0,steel:0,items:[],lost:[],unlocked:[],opened:null};t.won?(a.stars=1+(t.lost.length===0?1:0)+(e.goal==="hold"?t.lostHp<.25?1:0:t.time<=e.par?1:0),a.rivets=Math.round(e.fee*(.6+.2*a.stars)+(o?e.fee*.5:0))):a.rivets=Math.round(e.fee*.1*t.sunk.length/Math.max(e.waves.flat().length,1));for(let c of t.sunk)a.steel+=cM[c.kind]??0;for(let c of t.sunk){let l=(c.boss?hM:lM[c.kind]??.1)+s.pity*.02;i()<l?(a.items.push(pM(i,n)),s.pity=0):s.pity++}t.won&&e.id==="4-5"&&o&&a.items.push("cal80"),s.rivets+=a.rivets,s.steel+=a.steel;for(let c of a.items){let l=Ve[c];l.steel?s.steel+=l.steel:l.bp?s.bps.includes(c)?s.rivets+=500:s.bps.push(c):s.items[c]=(s.items[c]??0)+1}a.insurance=0;for(let c of t.lost){let l=An(s,c);if(l){a.lost.push({kind:l.kind,name:l.name}),l.lent||(a.insurance+=Math.round(On[l.kind].rivets*.35/10)*10),l.design&&s.copies.push(l.design);for(let h of l.parts);s.ships=s.ships.filter(h=>h!==l),s.sortie=s.sortie.filter(h=>h!==c)}}s.rivets+=a.insurance,s.copies.length>12&&s.copies.splice(0,s.copies.length-12);for(let[c,l]of Object.entries(t.hp)){let h=An(s,+c);h&&(h.hp=Math.max(.05,Math.min(1,l)),h.sorties++)}for(let[c,l]of Object.entries(t.kills??{})){let h=An(s,+c);h&&(h.kills+=l)}a.planesLost=0,a.planesCost=0;for(let[c,l]of Object.entries(t.planes??{})){let h=An(s,+c);if(!h)continue;let u={f:(h.design?.air?.f??3)*5,t:(h.design?.air?.t??4)*5,b:(h.design?.air?.b??3)*5};h.planes={};for(let d of["f","t","b"]){let f=Math.max(0,u[d]-(l[d]??0)),g=Math.min(f,Math.floor(s.rivets/40));s.rivets-=g*40,a.planesLost+=f,a.planesCost+=g*40,h.planes[d]=u[d]-f+g}}for(let c of s.ships)c.building>0&&(c.building--,!c.building&&s.sortie.length<8&&s.sortie.push(c.uid));if(t.won){let c=Object.keys(Mr).filter(h=>po(s,h));r.clears++,r.stars=Math.max(r.stars,a.stars),s.stages[e.id]=r,a.unlocked=Object.keys(Mr).filter(h=>po(s,h)&&!c.includes(h));let l=Fp(e.id);o&&l&&(a.opened=l,s.last=l)}if(An(s,s.flag)||(s.flag=[...s.ships].filter(c=>!c.building).sort((c,l)=>On[l.kind].tons-On[c.kind].tons)[0]?.uid??0),!s.ships.some(c=>!c.building)){let c=br(s,"dd");c.lent=!0,s.flag=c.uid,br(s,"dd").lent=!0,a.lent=!0}return s.log.unshift({at:Date.now(),stage:e.id,won:t.won,stars:a.stars}),s.log.length=Math.min(s.log.length,30),a}function qp(s,t){let e=JSON.parse(JSON.stringify(s));for(let n of e.mounts)if(n.type==="gun"){let i=t.indexOf(n.cal);n.cal=t[Math.max(0,i-1)]??n.cal}return e}function Yp(s,t){let e={speedK:1,armor:0,hpK:1,fcStart:1,fcMin:.14,flood:1,gm:0,torpK:1,oxy:s.bps.includes("oxy"),aa:1};t.old&&(e.speedK*=24/27,e.armor-=.1,e.hpK*=240/260,e.fcMin=.2,e.fcStart=1.1,e.aaStock=[4,4]);for(let n of t.parts)n==="bulkhead"?e.flood*=.6:n==="boiler"?e.speedK*=1.06:n==="rangefinder"?(e.fcStart*=.6,e.fcMin*=.7):n==="bulge"?(e.gm+=.4,e.speedK*=.96,e.torpK*=.65):n==="armour"?(e.armor+=.1,e.speedK*=.97):n==="aadir"&&(e.aa*=1.5);return e}function Kp(s,t,e,n){let i=t.parts[e];return n&&!(s.items[n]>0)?!1:(i&&(s.items[i]=(s.items[i]??0)+1),n&&s.items[n]--,t.parts[e]=n,!0)}function fu(s,t){return s.sortie.map(e=>An(s,e)).filter(Boolean).reduce((e,n)=>e+t(n),0)}var jp=s=>Math.ceil(s*.5/10)*10;function Zp(s,t,e){let n=c=>c?`${c.type}/${c.cal}/${c.n}/${c.tier??1}`:"none",i=new Set([...s.mounts,...t.mounts].map(c=>c.slot)),r=0,o=0;for(let c of i){let l=s.mounts.find(d=>d.slot===c),h=t.mounts.find(d=>d.slot===c);if(n(l)===n(h))continue;if(!h||h.type==="none"){r+=60;continue}let u=h.type==="torp"?60:e(h.cal,h.n)*(h.tier??1);r+=150+.25*u,o+=.5*u}let a=c=>(t.aa?.[c]??0)-(s.aa?.[c]??0);r+=Math.max(a("ha"),0)*40+Math.max(a("mg"),0)*15+(Math.abs(a("ha"))+Math.abs(a("mg")))*5,o+=Math.max(a("ha"),0)*15+Math.max(a("mg"),0)*3;for(let c of["f","t","b"])r+=Math.max((t.air?.[c]??0)-(s.air?.[c]??0),0)*5*40;return{rivets:Math.round(r/10)*10,steel:Math.round(o/10)*10}}var em=[75,71,83,49],pu=1,mM=[58,145,14,92,210,119,24,164,107,240,35,158,65,200,5,125,179,47,134,233,18,90,204,48,151,78,251,97,8,213,170,115],gM=[156,20,231,43,88,182,15,209,131,62,106,197,39,153,244,64,29,174,98,7,187,53,143,226,76,112,22,217,161,94,44,243],Qp="kurogane/yard/rivets";function vM(){let s=new Uint8Array(32);for(let t=0;t<32;t++)s[t]=(mM[t]^gM[t*7%32]^Qp.charCodeAt(t%Qp.length)*31)&255;return s}var nm=new TextEncoder,xM=new TextDecoder;async function im(s,t){let e=await crypto.subtle.importKey("raw",vM(),"HKDF",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:s,info:nm.encode("KGS1 save")},e,{name:"AES-GCM",length:256},!1,[t])}async function sm(s,t){return new Uint8Array(await new Response(new Blob([s]).stream().pipeThrough(t)).arrayBuffer())}async function mu(s){let t=await sm(nm.encode(JSON.stringify(s)),new CompressionStream("deflate-raw")),e=crypto.getRandomValues(new Uint8Array(16)),n=crypto.getRandomValues(new Uint8Array(12)),i=new Uint8Array([...em,pu]),r=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:n,additionalData:i},await im(e,"encrypt"),t)),o=new Uint8Array(i.length+28+r.length);return o.set(i,0),o.set(e,5),o.set(n,21),o.set(r,33),o}async function gu(s){if(s=new Uint8Array(s),s.length<49||em.some((i,r)=>s[r]!==i))throw new Error("bad");let t=s[4];if(t>pu)throw new Error("future");let e;try{e=await crypto.subtle.decrypt({name:"AES-GCM",iv:s.slice(21,33),additionalData:s.slice(0,5)},await im(s.slice(5,21),"decrypt"),s.slice(33))}catch{throw new Error("bad")}let n=JSON.parse(xM.decode(await sm(new Uint8Array(e),new DecompressionStream("deflate-raw"))));return _M(n,t)}var yM={};function _M(s,t){for(let e=t;e<pu;e++)s=yM[e](s);return s}var tm=null;function bM(){return tm??=new Promise((s,t)=>{let e=indexedDB.open("kurogane",1);e.onupgradeneeded=()=>e.result.createObjectStore("saves"),e.onsuccess=()=>s(e.result),e.onerror=()=>t(e.error)}),tm}async function vu(s,t){let e=await bM();return new Promise((n,i)=>{let r=e.transaction("saves",s),o=t(r.objectStore("saves"));r.oncomplete=()=>n(o?.result),r.onerror=()=>i(r.error)})}async function vo(s,t){let e=await mu(t);return await vu("readwrite",n=>n.put({bytes:e,at:Date.now(),info:MM(t)},s)),e}async function vc(s){let t=await vu("readonly",e=>e.get(s));return t?{state:await gu(t.bytes),at:t.at,bytes:t.bytes}:null}async function rm(s){let t=await vu("readonly",e=>e.get(s));return t?{at:t.at,...t.info}:null}function MM(s){return{stage:s.last??"1-1",stars:Object.values(s.stages??{}).reduce((t,e)=>t+(e.stars??0),0),ships:(s.ships??[]).length}}function om(s){let t=new Date,e=i=>String(i).padStart(2,"0"),n=document.createElement("a");n.href=URL.createObjectURL(new Blob([s],{type:"application/octet-stream"})),n.download=`kurogane-${t.getFullYear()}${e(t.getMonth()+1)}${e(t.getDate())}.kgs`,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}function am(){return new Promise(s=>{let t=document.createElement("input");t.type="file",t.accept=".kgs",t.onchange=async()=>s(t.files[0]?new Uint8Array(await t.files[0].arrayBuffer()):null),t.click()})}var lm={en:{yard:"KUROGANE YARD",rivets:"RIVETS",steel:"STEEL",fame:"NAME",treaty:"TREATY",tabs:{fleet:"FLEET",build:"SLIPS",store:"STORES",book:"LEDGER"},seaNames:["Inner Sea","Fog Narrows","Open Ocean","Typhoon Sea"],goals:{all:"Sink them all",escort:(s,t)=>`Bring ${t} of ${s} merchantmen through`,hold:s=>`Hold for ${Math.round(s/60)} minutes`,boss:"Sink the flagship"},stages:{"1-1":["Clearing the Lane","Grey destroyers are sitting on the ferry lane. The ferry company would like them elsewhere. Anywhere."],"1-2":["Three Freighters","Bring at least two of the three through. The third is insured."],"1-3":["Grey Scouts","A light cruiser leads them. Sink her and our slip can build one of our own."],"1-4":["Until Dawn","Hold the strait for seven minutes. The harbour master is counting."],"1-5":["The Grey Cruiser","Twice the plating of anything we have met. Her captain has read the same books as you."],"2-1":["Ambush in the Fog","Visibility five kilometres. Their guns reach further. Their eyes do not."],"2-2":["Torpedo Night","The sun goes down and the destroyers come out. Mind the bubbles."],"2-3":["Through the Narrows","Four merchantmen, three needed. The fourth carries the harbour master's piano."],"2-4":["Hold the Narrows","Eight minutes. The relief fleet is on its way, it says."],"2-5":["The Grey Battlecruiser","Fast, heavy, thin-skinned. You and her designer would get on."],"3-1":["Fleet Action","Open sea and a long swell. Top-heavy ships find out today."],"3-2":["The Chase","Two battlecruisers are running. Faster than us, on paper."],"3-3":["First Air Raid","Something is coming over the horizon. It is not a ship."],"3-4":["The Ocean Convoy","Four merchantmen across open water, under an open sky."],"3-5":["The Carrier Group","Two carriers. Hole their decks and their aircraft have nowhere to come home to."],"4-1":["Pursuit in the Storm","Three-metre seas. Every broadside rolls you. It rolls them too."],"4-2":["Your Own Designs","The Grey Fleet has studied your work. It has made it slightly worse."],"4-3":["Hold in the Typhoon","Nine minutes in a typhoon. Nobody asked for this, least of all the cook."],"4-4":["The Last Convoy","Everything the islands have left, in four hulls."],"4-5":["The Grey Whale","Three hundred metres, twelve 51 cm guns. Treaty: not applicable."]},locked:"Clear the stage before",fee:"FEE",enemy:"ENEMY",sortie:"SORTIE",sea:"SEA",seaNote:["Calm","Fog: nothing seen past 5 km","Long swell","Storm"],inSortie:"SAILS",moored:"MOORED",flag:"FLAGSHIP",makeFlag:"Make flagship",refit:"REFIT",repair:s=>`REPAIR ${s.toLocaleString("en")}`,repaired:"SOUND",scrap:"SCRAP",building:s=>`on the slip \xB7 ${s} sortie${s>1?"s":""}`,parts:"PARTS",none:"\u2014",old:"old",build:"BUILD",unlockAt:s=>`opens with ${s}`,slip:s=>`${s} sortie${s>1?"s":""} on the slip`,cost:"COST",blueprints:"BLUEPRINTS",calibres:"CALIBRES",noParts:"No parts in the stores. The sea gives them up, now and then.",save:"SAVE",load:"LOAD",empty:"empty",exportF:"WRITE SAVE FILE",importF:"READ SAVE FILE",newGame:"NEW GAME (twice)",saved:"Saved",loaded:"Loaded",badFile:"That file is not a save of this game, or it has been changed.",record:"RECENT SORTIES",full:"Eight ships already sail.",noFlag:"Choose a flagship that sails.",notReady:"She is still on the slip.",overTreaty:(s,t)=>`${s.toLocaleString("en")} t over the treaty. The inspector will be taken to lunch (${t.toLocaleString("en")} rivets).`,poor:"Not enough rivets.",built:s=>`${s} is laid down`,scrapped:s=>`${s} is broken up`,win:"VICTORY",lose:"DEFEAT",toYard:"BACK TO THE YARD",spoils:"SPOILS",nothing:"Nothing this time.",salvage:"salvage",lostShips:"LOST",opened:s=>`Stage ${s} is open`,unlockedK:s=>`The slip can now build: ${s}`,lent:"The islands lend you two old destroyers. They would like them back.",buySteel:"STEEL FROM THE ISLAND FOUNDRIES",insurance:"INSURANCE",planes:"NEW AIRCRAFT",retreat:"RETREAT",goalHud:{all:(s,t)=>`WAVE ${s} / ${t}`,escort:(s,t)=>`MERCHANTMEN ${s} \xB7 need ${t}`,hold:s=>`HOLD ${s}`,boss:(s,t)=>`WAVE ${s} / ${t}`},why:{flag:"The flagship is lost. The rest come home with the news.",escort:"The cargo is now on the seabed. The customer is unhappy.",retreat:"A tactical withdrawal. Nobody is fooled."},wins:["Enemy squadron gone. Insurance premiums fall.","Firepower was more than adequate. For once, so was stability.","The Grey Fleet will remember this. It will also copy it.","The harbour master stopped counting."],cont:"CONTINUE",fresh:"NEW GAME",bossIn:"THE FLAGSHIP IS HERE",item:{steelS:["Bundle of steel","+300 steel"],steelL:["Stack of steel","+1,200 steel"],bulkhead:["Watertight bulkheads","The sea comes in 40% slower"],boiler:["High-pressure boilers","+6% speed"],rangefinder:["Long rangefinder","The first salvos fall much closer"],bulge:["Torpedo bulges","Steadier (GM +0.4 m), torpedoes do 35% less, 4% slower"],armour:["Extra plating","Hits do less; 3% slower"],aadir:["AA director","Her anti-aircraft fire hits more"],oxy:["Oxygen torpedoes","Twice the run, a heavier warhead (all ships)"],cal41:["41 cm gun","Blueprint"],cal46:["46 cm gun","Blueprint"],cal51:["51 cm gun","Blueprint"],cal61:["61 cm gun","Blueprint"],cal80:["80 cm gun","Blueprint. You know what you did."]},tier:["common","good","rare","phantom","","","","","","phantom"]},ja:{yard:"\u9ED2\u9244\u9020\u8239\u6240",rivets:"\u92F2",steel:"\u92FC\u6750",fame:"\u8A55\u5224",treaty:"\u6761\u7D04",tabs:{fleet:"\u8266\u968A",build:"\u8239\u53F0",store:"\u5009\u5EAB",book:"\u5E33\u7C3F"},seaNames:["\u5185\u6D77","\u9727\u306E\u702C\u6238","\u5916\u6D0B","\u53F0\u98A8\u306E\u6D77"],goals:{all:"\u5168\u8266\u6483\u6C88",escort:(s,t)=>`\u5546\u8239${s}\u96BB\u306E\u3046\u3061${t}\u96BB\u3092\u901A\u3059`,hold:s=>`${Math.round(s/60)}\u5206\u3057\u306E\u3050`,boss:"\u65D7\u8266\u3092\u6C88\u3081\u308B"},stages:{"1-1":["\u822A\u8DEF\u306E\u6383\u9664","\u7070\u8272\u306E\u99C6\u9010\u8266\u304C\u9023\u7D61\u8239\u306E\u822A\u8DEF\u306B\u5C45\u5EA7\u3063\u3066\u3044\u308B\u3002\u9023\u7D61\u8239\u4F1A\u793E\u306F\u3001\u3069\u3053\u304B\u5225\u306E\u5834\u6240\u306B\u884C\u3063\u3066\u307B\u3057\u3044\u305D\u3046\u3060\u3002\u3069\u3053\u3067\u3082\u3044\u3044\u3002"],"1-2":["\u4E09\u96BB\u306E\u8CA8\u7269\u8239","\u4E09\u96BB\u306E\u3046\u3061\u4E8C\u96BB\u3092\u901A\u3057\u3066\u304F\u308C\u3002\u4E09\u96BB\u76EE\u306B\u306F\u4FDD\u967A\u304C\u304B\u3051\u3066\u3042\u308B\u3002"],"1-3":["\u7070\u8272\u306E\u65A5\u5019","\u8EFD\u5DE1\u304C\u7387\u3044\u3066\u3044\u308B\u3002\u6C88\u3081\u308C\u3070\u3001\u3046\u3061\u306E\u8239\u53F0\u3067\u3082\u540C\u3058\u3082\u306E\u304C\u9020\u308C\u308B\u3002"],"1-4":["\u591C\u660E\u3051\u307E\u3067","\u4E03\u5206\u9593\u3001\u702C\u6238\u3092\u5B88\u308C\u3002\u6E2F\u9577\u304C\u6570\u3048\u3066\u3044\u308B\u3002"],"1-5":["\u7070\u8272\u306E\u91CD\u5DE1","\u3053\u308C\u307E\u3067\u306E\u500D\u306E\u88C5\u7532\u3002\u8266\u9577\u306F\u3042\u306A\u305F\u3068\u540C\u3058\u672C\u3092\u8AAD\u3093\u3067\u3044\u308B\u3002"],"2-1":["\u9727\u306E\u4E2D\u306E\u5F85\u3061\u4F0F\u305B","\u8996\u754C5\u30AD\u30ED\u3002\u5411\u3053\u3046\u306E\u7832\u306F\u3082\u3063\u3068\u5C4A\u304F\u3002\u76EE\u306F\u5C4A\u304B\u306A\u3044\u3002"],"2-2":["\u591C\u306E\u6C34\u96F7\u6226","\u65E5\u304C\u6C88\u3080\u3068\u3001\u99C6\u9010\u8266\u304C\u51FA\u3066\u304F\u308B\u3002\u6CE1\u306B\u6C17\u3092\u3064\u3051\u3066\u3002"],"2-3":["\u702C\u6238\u3092\u629C\u3051\u308D","\u5546\u8239\u56DB\u96BB\u3001\u4E09\u96BB\u306F\u8981\u308B\u3002\u56DB\u96BB\u76EE\u306F\u6E2F\u9577\u306E\u30D4\u30A2\u30CE\u3092\u904B\u3093\u3067\u3044\u308B\u3002"],"2-4":["\u702C\u6238\u3092\u3057\u306E\u3052","\u516B\u5206\u3002\u6551\u63F4\u306E\u8266\u968A\u304C\u5411\u304B\u3063\u3066\u3044\u308B\u3001\u3068\u672C\u4EBA\u305F\u3061\u306F\u8A00\u3063\u3066\u3044\u308B\u3002"],"2-5":["\u7070\u8272\u306E\u5DE1\u6D0B\u6226\u8266","\u901F\u304F\u3066\u3001\u91CD\u304F\u3066\u3001\u88C5\u7532\u304C\u8584\u3044\u3002\u8A2D\u8A08\u8005\u3068\u306F\u8A71\u304C\u5408\u3044\u305D\u3046\u3060\u3002"],"3-1":["\u8266\u968A\u6C7A\u6226","\u5916\u6D0B\u306E\u9577\u3044\u3046\u306D\u308A\u3002\u982D\u306E\u91CD\u3044\u8266\u306F\u3001\u4ECA\u65E5\u305D\u308C\u3092\u77E5\u308B\u3002"],"3-2":["\u8FFD\u6483","\u5DE1\u6D0B\u6226\u8266\u304C\u4E8C\u96BB\u3001\u9003\u3052\u3066\u3044\u308B\u3002\u66F8\u985E\u306E\u4E0A\u3067\u306F\u3001\u3053\u3061\u3089\u3088\u308A\u901F\u3044\u3002"],"3-3":["\u521D\u3081\u3066\u306E\u7A7A\u8972","\u6C34\u5E73\u7DDA\u306E\u5411\u3053\u3046\u304B\u3089\u4F55\u304B\u6765\u308B\u3002\u8239\u3067\u306F\u306A\u3044\u3002"],"3-4":["\u5916\u6D0B\u306E\u8239\u56E3","\u958B\u3051\u305F\u6D77\u3092\u3001\u958B\u3051\u305F\u7A7A\u306E\u4E0B\u3067\u3001\u5546\u8239\u56DB\u96BB\u3002"],"3-5":["\u7A7A\u6BCD\u6A5F\u52D5\u90E8\u968A","\u7A7A\u6BCD\u304C\u4E8C\u96BB\u3002\u7532\u677F\u306B\u7A74\u3092\u958B\u3051\u308C\u3070\u3001\u98DB\u884C\u6A5F\u306F\u5E30\u308B\u5834\u6240\u3092\u5931\u3046\u3002"],"4-1":["\u5D50\u306E\u4E2D\u306E\u8FFD\u6483","\u6CE2\u9AD83\u30E1\u30FC\u30C8\u30EB\u3002\u6589\u5C04\u306E\u305F\u3073\u306B\u63FA\u308C\u308B\u3002\u5411\u3053\u3046\u3082\u63FA\u308C\u308B\u3002"],"4-2":["\u5199\u3055\u308C\u305F\u8A2D\u8A08","\u7070\u8272\u8266\u968A\u306F\u3042\u306A\u305F\u306E\u4ED5\u4E8B\u3092\u7814\u7A76\u3057\u305F\u3002\u5C11\u3057\u3060\u3051\u60AA\u304F\u3057\u3066\u3042\u308B\u3002"],"4-3":["\u53F0\u98A8\u3092\u3057\u306E\u3052","\u53F0\u98A8\u306E\u4E2D\u3067\u4E5D\u5206\u3002\u8AB0\u3082\u983C\u3093\u3067\u3044\u306A\u3044\u3002\u7279\u306B\u4E3B\u8A08\u9577\u306F\u3002"],"4-4":["\u6700\u5F8C\u306E\u8239\u56E3","\u7FA4\u5CF6\u306B\u6B8B\u3063\u305F\u3082\u306E\u3059\u3079\u3066\u3092\u3001\u56DB\u96BB\u306B\u7A4D\u3093\u3067\u3002"],"4-5":["\u7070\u9BE8","\u5168\u9577300\u30E1\u30FC\u30C8\u30EB\u300151\u30BB\u30F3\u30C1\u783212\u9580\u3002\u6761\u7D04\uFF1A\u9069\u7528\u5916\u3002"]},locked:"\u524D\u306E\u30B9\u30C6\u30FC\u30B8\u3092\u30AF\u30EA\u30A2\u3059\u308B\u3068\u958B\u304F",fee:"\u5831\u916C",enemy:"\u6575",sortie:"\u51FA\u6483",sea:"\u6D77",seaNote:["\u51EA","\u9727\uFF1A5\u30AD\u30ED\u3088\u308A\u5148\u306F\u898B\u3048\u306A\u3044","\u9577\u3044\u3046\u306D\u308A","\u5D50"],inSortie:"\u51FA\u6483",moored:"\u4FC2\u7559",flag:"\u65D7\u8266",makeFlag:"\u65D7\u8266\u306B\u3059\u308B",refit:"\u6539\u88C5",repair:s=>`\u4FEE\u7406 ${s.toLocaleString("ja")}`,repaired:"\u7121\u50B7",scrap:"\u89E3\u4F53",building:s=>`\u5EFA\u9020\u4E2D\u30FB\u3042\u3068\u51FA\u6483${s}\u56DE`,parts:"\u90E8\u54C1",none:"\u2014",old:"\u65E7\u5F0F",build:"\u5EFA\u9020",unlockAt:s=>`${s} \u3092\u30AF\u30EA\u30A2\u3067\u89E3\u653E`,slip:s=>`\u51FA\u6483${s}\u56DE\u3067\u5B8C\u6210`,cost:"\u8CBB\u7528",blueprints:"\u8A2D\u8A08\u56F3",calibres:"\u4F7F\u3048\u308B\u53E3\u5F84",noParts:"\u5009\u5EAB\u306B\u90E8\u54C1\u306F\u306A\u3044\u3002\u6D77\u304C\u3068\u304D\u3069\u304D\u8FD4\u3057\u3066\u304F\u308C\u308B\u3002",save:"\u4FDD\u5B58",load:"\u8AAD\u8FBC",empty:"\u7A7A\u304D",exportF:"\u30BB\u30FC\u30D6\u3092\u66F8\u304D\u51FA\u3059",importF:"\u30BB\u30FC\u30D6\u3092\u8AAD\u307F\u8FBC\u3080",newGame:"\u306F\u3058\u3081\u304B\u3089\uFF082\u56DE\u62BC\u3059\uFF09",saved:"\u4FDD\u5B58\u3057\u307E\u3057\u305F",loaded:"\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F",badFile:"\u3053\u306E\u30B2\u30FC\u30E0\u306E\u30BB\u30FC\u30D6\u3067\u306F\u306A\u3044\u304B\u3001\u66F8\u304D\u63DB\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002",record:"\u6700\u8FD1\u306E\u51FA\u6483",full:"\u3059\u3067\u306B8\u96BB\u304C\u51FA\u6483\u306B\u5165\u3063\u3066\u3044\u308B\u3002",noFlag:"\u51FA\u6483\u3059\u308B\u8266\u304B\u3089\u65D7\u8266\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002",notReady:"\u307E\u3060\u8239\u53F0\u306E\u4E0A\u3067\u3059\u3002",overTreaty:(s,t)=>`\u6761\u7D04\u8D85\u904E ${s.toLocaleString("ja")} \u30C8\u30F3\u3002\u76E3\u67FB\u5B98\u3092\u663C\u98DF\u306B\u62DB\u5F85\u3057\u307E\u3059\uFF08${t.toLocaleString("ja")} \u92F2\uFF09\u3002`,poor:"\u92F2\u304C\u8DB3\u308A\u306A\u3044\u3002",built:s=>`${s} \u3092\u8D77\u5DE5\u3057\u307E\u3057\u305F`,scrapped:s=>`${s} \u3092\u89E3\u4F53\u3057\u307E\u3057\u305F`,win:"\u52DD\u5229",lose:"\u6557\u5317",toYard:"\u9020\u8239\u6240\u3078",spoils:"\u6226\u5229\u54C1",nothing:"\u4ECA\u56DE\u306F\u4F55\u3082\u306A\u304B\u3063\u305F\u3002",salvage:"\u5F15\u304D\u63DA\u3052",lostShips:"\u5931\u3063\u305F\u8266",opened:s=>`\u30B9\u30C6\u30FC\u30B8 ${s} \u304C\u958B\u3044\u305F`,unlockedK:s=>`\u8239\u53F0\u3067 ${s} \u304C\u9020\u308C\u308B\u3088\u3046\u306B\u306A\u3063\u305F`,lent:"\u5CF6\u304B\u3089\u53E4\u3044\u99C6\u9010\u8266\u30922\u96BB\u8CB8\u3057\u3066\u3082\u3089\u3063\u305F\u3002\u8FD4\u3057\u3066\u307B\u3057\u3044\u305D\u3046\u3060\u3002",buySteel:"\u5CF6\u306E\u88FD\u9244\u6240\u304B\u3089\u92FC\u6750\u3092\u8CB7\u3046",insurance:"\u4FDD\u967A\u91D1",planes:"\u8266\u4E0A\u6A5F\u306E\u88DC\u5145",retreat:"\u64A4\u9000",goalHud:{all:(s,t)=>`\u7B2C${s}\u6CE2 / ${t}`,escort:(s,t)=>`\u5546\u8239 ${s}\u96BB \u5065\u5728\u30FB\u5FC5\u8981 ${t}`,hold:s=>`\u6B8B\u308A ${s}`,boss:(s,t)=>`\u7B2C${s}\u6CE2 / ${t}`},why:{flag:"\u65D7\u8266\u3092\u5931\u3063\u305F\u3002\u6B8B\u308A\u306E\u8266\u304C\u77E5\u3089\u305B\u3092\u6301\u3061\u5E30\u308B\u3002",escort:"\u7A4D\u307F\u8377\u306F\u6D77\u306E\u5E95\u3002\u4F9D\u983C\u4E3B\u306F\u3054\u7ACB\u8179\u3060\u3002",retreat:"\u6226\u8853\u7684\u64A4\u9000\u3002\u8AB0\u3082\u3060\u307E\u3055\u308C\u3066\u3044\u306A\u3044\u3002"},wins:["\u6575\u8266\u968A\u3001\u6D88\u6EC5\u3002\u4FDD\u967A\u6599\u304C\u4E0B\u304C\u308B\u3002","\u706B\u529B\u306F\u7533\u3057\u5206\u306A\u304B\u3063\u305F\u3002\u4ECA\u56DE\u306F\u5B89\u5B9A\u6027\u3082\u3002","\u7070\u8272\u8266\u968A\u306F\u3053\u308C\u3092\u899A\u3048\u308B\u3060\u308D\u3046\u3002\u305D\u3057\u3066\u5199\u3059\u3060\u308D\u3046\u3002","\u6E2F\u9577\u306F\u6570\u3048\u308B\u306E\u3092\u3084\u3081\u305F\u3002"],cont:"\u7D9A\u304D\u304B\u3089",fresh:"\u306F\u3058\u3081\u304B\u3089",bossIn:"\u6575\u65D7\u8266 \u51FA\u73FE",item:{steelS:["\u92FC\u6750\u306E\u675F","\u92FC\u6750 +300"],steelL:["\u92FC\u6750\u306E\u5C71","\u92FC\u6750 +1,200"],bulkhead:["\u9632\u6C34\u533A\u753B","\u6D78\u6C34\u304C40%\u9045\u3044"],boiler:["\u9AD8\u5727\u7F36","\u901F\u529B +6%"],rangefinder:["\u65B0\u578B\u6E2C\u8DDD\u5100","\u521D\u5F3E\u304C\u305A\u3063\u3068\u8FD1\u304F\u306B\u843D\u3061\u308B"],bulge:["\u30D0\u30EB\u30B8","\u5B89\u5B9A\uFF08GM +0.4 m\uFF09\u3001\u9B5A\u96F7\u306E\u88AB\u5BB3 \u221235%\u3001\u901F\u529B \u22124%"],armour:["\u88C5\u7532\u677F","\u88AB\u5BB3\u304C\u6E1B\u308B\u3001\u901F\u529B \u22123%"],aadir:["\u5BFE\u7A7A\u5C04\u6483\u6307\u63EE\u88C5\u7F6E","\u5BFE\u7A7A\u5C04\u6483\u304C\u3088\u304F\u5F53\u305F\u308B"],oxy:["\u9178\u7D20\u9B5A\u96F7","\u5C04\u7A0B2\u500D\u3001\u5F3E\u982D\u304C\u91CD\u3044\uFF08\u5168\u8266\uFF09"],cal41:["41cm\u7832","\u8A2D\u8A08\u56F3"],cal46:["46cm\u7832","\u8A2D\u8A08\u56F3"],cal51:["51cm\u7832","\u8A2D\u8A08\u56F3"],cal61:["61cm\u7832","\u8A2D\u8A08\u56F3"],cal80:["80cm\u7832","\u8A2D\u8A08\u56F3\u3002\u81EA\u5206\u304C\u4F55\u3092\u3057\u305F\u304B\u3001\u308F\u304B\u3063\u3066\u3044\u308B\u306F\u305A\u3060\u3002"]},tier:["\u3075\u3064\u3046","\u826F\u3044","\u73CD\u3057\u3044","\u5E7B","","","","","","\u5E7B"]}},q=s=>lm[kn()]?.[s]??lm.en[s];var hn=s=>Math.round(s).toLocaleString(kn()==="ja"?"ja":"en"),tn=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),xc=class{constructor(t){Object.assign(this,t),this.tab="fleet",this.sea=1,this.sel=null,this.open=!1;let e=this.el=document.createElement("div");e.id="yard",e.innerHTML=`
      <div class="yd-top"><b class="yd-name"></b><span class="yd-res"></span></div>
      <div class="yd-left"><div class="yd-tabs"></div><div class="yd-body"></div></div>
      <div class="yd-right"><div class="yd-seas"></div><div class="yd-stages"></div><div class="yd-brief"></div></div>
      <div class="yd-msg"></div>`,this.root.appendChild(e);let n=r=>e.querySelector(r);this.$={name:n(".yd-name"),res:n(".yd-res"),tabs:n(".yd-tabs"),body:n(".yd-body"),seas:n(".yd-seas"),stages:n(".yd-stages"),brief:n(".yd-brief"),msg:n(".yd-msg")},e.addEventListener("pointerdown",r=>{r.target.closest("button,select,.yd-card")&&r.stopPropagation()});let i=this.resEl=document.createElement("div");i.id="result",this.root.appendChild(i)}get s(){return this.state}show(){this.open=!0,this.el.classList.add("on"),this.sea=+(this.s.last??"1-1")[0],this.sel??=this.s.last??"1-1",this.render()}hide(){this.open=!1,this.el.classList.remove("on")}flash(t,e=3.2){this.$.msg.textContent=t,this.$.msg.classList.add("on"),clearTimeout(this._mt),this._mt=setTimeout(()=>this.$.msg.classList.remove("on"),e*1e3)}changed(t=!0){this.onChange?.(t),this.render()}render(){if(!this.open)return;let t=this.s;this.$.name.textContent=q("yard");let e=fu(t,this.dispOf),n=hu(t);this.$.res.innerHTML=`<span><i>${q("rivets")}</i><b>${hn(t.rivets)}</b></span><span><i>${q("steel")}</i><b>${hn(t.steel)}</b></span>
      <span><i>${q("fame")}</i><b>\u2605 ${lu(t)}</b></span><span class="${e>n?"over":""}"><i>${q("treaty")}</i><b>${hn(e)}</b> / ${hn(n)} t</span>`;let i=q("tabs");this.$.tabs.innerHTML=Object.keys(i).map(r=>`<button type="button" data-tab="${r}" class="${r===this.tab?"on":""}">${i[r]}</button>`).join("");for(let r of this.$.tabs.children)r.onclick=()=>{this.tab=r.dataset.tab,this.render()};this[`tab_${this.tab}`](),this.chart()}tab_fleet(){let t=this.s,e=kn()==="ja",n=r=>{let o=Object.keys(Ve).filter(a=>Ve[a].part&&(t.items[a]>0||a===r));return`<option value="">${q("none")}</option>`+o.map(a=>`<option value="${a}" ${a===r?"selected":""}>${tn(q("item")[a][0])}${a!==r?` \xD7${t.items[a]}`:""}</option>`).join("")},i=t.ships.map(r=>{let o=t.sortie.includes(r.uid),a=t.flag===r.uid,c=du(r),l=Pi(r.name,e);return r.building?`<div class="yd-ship building"><div class="nm"><b>${tn(l)}</b><em>${Mt("kinds")[r.kind]}</em></div><div class="st">${q("building")(r.building)}</div></div>`:`<div class="yd-ship ${o?"in":""}" data-uid="${r.uid}">
        <button type="button" class="tg ${o?"on":""}" data-a="toggle">${o?q("inSortie"):q("moored")}</button>
        <button type="button" class="fl ${a?"on":""}" data-a="flag" title="${q("makeFlag")}">\u25C6</button>
        <div class="nm"><b>${tn(l)}</b><em>${Mt("kinds")[r.kind]}${r.old?` \xB7 ${q("old")}`:""} \xB7 ${tn(this.armOf(r))}</em><i class="hp"><u style="width:${r.hp*100}%"></u></i></div>
        <div class="pt"><select data-a="p0">${n(r.parts[0])}</select><select data-a="p1">${n(r.parts[1])}</select></div>
        <div class="bt"><button type="button" data-a="refit">${q("refit")}</button>${c>0?`<button type="button" data-a="repair">${q("repair")(c)}</button>`:""}${!a&&!r.old?`<button type="button" class="dim" data-a="scrap">${q("scrap")}</button>`:""}</div>
      </div>`}).join("");this.$.body.innerHTML=`<div class="yd-list">${i}</div>`;for(let r of this.$.body.querySelectorAll(".yd-ship[data-uid]")){let o=An(t,+r.dataset.uid);for(let a of r.querySelectorAll("[data-a]")){let c=a.dataset.a;if(a.tagName==="SELECT"){a.onchange=()=>{Kp(t,o,c==="p0"?0:1,a.value||null),this.changed(!0)};continue}a.onclick=()=>{if(c==="toggle")if(t.sortie.includes(o.uid)){if(t.flag===o.uid)return this.flash(q("noFlag"));t.sortie=t.sortie.filter(l=>l!==o.uid)}else{if(t.sortie.length>=8)return this.flash(q("full"));t.sortie.push(o.uid)}else if(c==="flag"){if(!t.sortie.includes(o.uid)){if(t.sortie.length>=8)return this.flash(q("full"));t.sortie.push(o.uid)}t.flag=o.uid}else if(c==="refit"){if(!t.sortie.includes(o.uid)){if(t.sortie.length>=8)return this.flash(q("full"));t.sortie.push(o.uid),this.changed(!0)}return this.onRefit(o.uid)}else if(c==="repair"){if(!Wp(t,o))return this.flash(q("poor"))}else if(c==="scrap")if(a.dataset.armed){let l=Pi(o.name,kn()==="ja");Xp(t,o),this.flash(q("scrapped")(l))}else{a.dataset.armed=1,a.textContent="?";return}this.changed(c!=="repair")}}}}tab_build(){let t=this.s,e=Bp.map(o=>{let a=On[o],c=po(t,o),l=uu(t,o);return`<div class="yd-build ${c?"":"locked"}"><div class="nm"><b>${Mt("kinds")[o]}</b><em>${hn(a.tons)} t \xB7 ${q("slip")(a.slip)}</em></div>
        <div class="cost">${hn(a.rivets)} <i>${q("rivets")}</i> \xB7 ${hn(a.steel)} <i>${q("steel")}</i></div>
        ${c?`<button type="button" data-k="${o}" ${l?"":"disabled"}>${q("build")}</button>`:`<span class="lk">${q("unlockAt")(Mr[o])}</span>`}</div>`}).join(""),n=kn()==="ja",i=t.ships.filter(o=>o.building).map(o=>`<div class="yd-slip">${tn(Pi(o.name,n))} <em>${Mt("kinds")[o.kind]} \xB7 ${q("building")(o.building)}</em></div>`).join(""),r=[500,2e3].map(o=>`<button type="button" data-buy="${o}" ${t.rivets>=o*gc?"":"disabled"}>+${hn(o)} <i>${q("steel")}</i> \xB7 ${hn(o*gc)} <i>${q("rivets")}</i></button>`).join("");this.$.body.innerHTML=`<div class="yd-list">${e}${i?`<div class="yd-sub">${i}</div>`:""}<div class="yd-h">${q("buySteel")}</div><div class="yd-files">${r}</div></div>`;for(let o of this.$.body.querySelectorAll("button[data-buy]"))o.onclick=()=>{Gp(t,+o.dataset.buy)?this.changed(!1):this.flash(q("poor"))};for(let o of this.$.body.querySelectorAll("button[data-k]"))o.onclick=()=>{let a=Vp(t,o.dataset.k);if(!a)return this.flash(q("poor"));this.flash(q("built")(Pi(a.name,n))),this.changed(!1)}}tab_store(){let t=this.s,e=q("item"),n=Object.keys(Ve).filter(r=>Ve[r].part&&t.items[r]>0).map(r=>`<div class="yd-item t${Ve[r].tier}"><b>${tn(e[r][0])} \xD7${t.items[r]}</b><em>${tn(e[r][1])}</em></div>`).join(""),i=t.bps.map(r=>`<div class="yd-item t${Ve[r].tier}"><b>${tn(e[r][0])}</b><em>${tn(e[r][1])}</em></div>`).join("");this.$.body.innerHTML=`<div class="yd-list"><div class="yd-h">${q("parts")}</div>${n||`<p class="yd-note">${q("noParts")}</p>`}
      <div class="yd-h">${q("blueprints")}</div>${i||`<p class="yd-note">${q("none")}</p>`}
      <div class="yd-h">${q("calibres")}</div><p class="yd-cals">${go(t).map(r=>`${r}`).join(" \xB7 ")} cm</p></div>`}async tab_book(){let t=this.s,e=["m1","m2","m3"],n=await Promise.all(e.map(l=>rm(l).catch(()=>null)));if(this.tab!=="book")return;let i=l=>new Date(l).toLocaleString(kn()==="ja"?"ja":"en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),r=e.map((l,h)=>{let u=n[h];return`<div class="yd-save"><b>${h+1}</b><span>${u?`${i(u.at)} \xB7 ${u.stage} \xB7 \u2605${u.stars} \xB7 ${u.ships}`:q("empty")}</span>
      <button type="button" data-save="${l}">${q("save")}</button><button type="button" data-load="${l}" ${u?"":"disabled"}>${q("load")}</button></div>`}).join(""),o=t.log.slice(0,8).map(l=>`<div class="yd-log">${l.stage} ${q("stages")[l.stage][0]} \xB7 ${l.won?"\u2605".repeat(l.stars):q("lose")}</div>`).join("");this.$.body.innerHTML=`<div class="yd-list">${r}
      <div class="yd-files"><button type="button" class="ex">${q("exportF")}</button><button type="button" class="im">${q("importF")}</button></div>
      <div class="yd-h">${q("record")}</div>${o||`<p class="yd-note">${q("none")}</p>`}
      <div class="yd-files"><button type="button" class="dim nw">${q("newGame")}</button></div></div>`;let a=this.$.body;for(let l of a.querySelectorAll("[data-save]"))l.onclick=async()=>{await vo(l.dataset.save,t),this.flash(q("saved")),this.render()};for(let l of a.querySelectorAll("[data-load]"))l.onclick=async()=>{try{let h=await vc(l.dataset.load);this.onReplace(h.state),this.flash(q("loaded"))}catch{this.flash(q("badFile"))}};a.querySelector(".ex").onclick=async()=>om(await mu(t)),a.querySelector(".im").onclick=async()=>{let l=await am();if(l)try{this.onReplace(await gu(l)),this.flash(q("loaded"))}catch{this.flash(q("badFile"),5)}};let c=a.querySelector(".nw");c.onclick=()=>{c.dataset.armed?this.onReplace(mo()):(c.dataset.armed=1,c.textContent+=" ?")}}chart(){let t=this.s,e=q("seaNames");this.$.seas.innerHTML=e.map((l,h)=>`<button type="button" class="${this.sea===h+1?"on":""} ${mc(t,`${h+1}-1`)?"":"dead"}" data-sea="${h+1}">${h+1} \xB7 ${l}</button>`).join("");for(let l of this.$.seas.children)l.onclick=()=>{this.sea=+l.dataset.sea,this.render()};let n=is.filter(l=>+l.id[0]===this.sea),i=q("goals"),r=q("stages");this.$.stages.innerHTML=n.map(l=>{let h=mc(t,l.id),u=t.stages[l.id],d=u?.stars??0,f=l.goal==="escort"?i.escort(...l.escort):l.goal==="hold"?i.hold(l.time):i[l.goal];return`<div class="yd-card ${h?"":"locked"} ${this.sel===l.id?"on":""} ${l.goal==="boss"?"boss":""}" data-id="${l.id}">
        <span class="id">${l.id}</span><b>${h?r[l.id][0]:"\xB7 \xB7 \xB7"}</b><em>${h?f:q("locked")}</em><span class="stars">${h?"\u2605".repeat(d)+"\u2606".repeat(3-d):""}</span></div>`}).join("");for(let l of this.$.stages.children)l.onclick=()=>{l.classList.contains("locked")||(this.sel=l.dataset.id,this.render())};let o=_r(this.sel);if(!o||+o.id[0]!==this.sea||!mc(t,o.id)){this.$.brief.innerHTML="";return}let a={};for(let l of o.waves.flat()){let h=l==="copy"?"copy":l.replace("!","");a[h]=(a[h]??0)+1}let c=Object.entries(a).map(([l,h])=>`${l==="copy"?kn()==="ja"?"\u5199\u3057":"copies":Mt("kinds")[l]} \xD7${h}`).join(" \xB7 ");this.$.brief.innerHTML=`<p class="txt">${tn(r[o.id][1])}</p>
      <div class="kv"><span><i>${q("enemy")}</i>${c}</span><span><i>${q("sea")}</i>${q("seaNote")[this.sea-1]}</span><span><i>${q("fee")}</i>${hn(o.fee)} ${q("rivets")}</span></div>
      <button type="button" class="go">${q("sortie")}</button>`,this.$.brief.querySelector(".go").onclick=()=>this.trySortie(o.id)}trySortie(t){let e=this.s,n=e.sortie.map(o=>An(e,o)).filter(o=>o&&!o.building);if(!n.length||!n.some(o=>o.uid===e.flag))return this.flash(q("noFlag"));let i=fu(e,this.dispOf)-hu(e),r=0;if(i>0){if(r=jp(i),e.rivets<r)return this.flash(q("poor"));this.flash(q("overTreaty")(i,r),4)}this.onSortie(t,r)}results(t,e){let n=kn()==="ja",i=q("item"),r=t.won?q("wins")[Math.floor(Math.random()*q("wins").length)]:q("why")[t.why]??q("why").flag,o=t.items.length?t.items.map(c=>`<div class="yd-item t${Ve[c].tier}"><b>${tn(i[c][0])}</b><em>${q("tier")[Ve[c].tier]} \xB7 ${tn(i[c][1])}</em></div>`).join(""):`<p class="yd-note">${q("nothing")}</p>`,a=[];t.opened&&a.push(q("opened")(t.opened));for(let c of t.unlocked)a.push(q("unlockedK")(Mt("kinds")[c]));t.lent&&a.push(q("lent")),this.resEl.innerHTML=`<div class="rs-box">
      <b class="rs-head ${t.won?"won":"lost"}">${t.won?q("win"):q("lose")}</b>
      <div class="rs-stage">${t.stage} \xB7 ${tn(q("stages")[t.stage][0])}${t.won?` <span class="stars">${"\u2605".repeat(t.stars)}${"\u2606".repeat(3-t.stars)}</span>`:""}</div>
      <p class="rs-why">${tn(r)}</p>
      <div class="kv"><span><i>${q("rivets")}</i>+${hn(t.rivets)}</span><span><i>${q("steel")} (${q("salvage")})</i>+${hn(t.steel)}</span>${t.fine?`<span><i>${q("treaty")}</i>\u2212${hn(t.fine)}</span>`:""}${t.insurance?`<span><i>${q("insurance")}</i>+${hn(t.insurance)}</span>`:""}${t.planesCost?`<span><i>${q("planes")}</i>\u2212${hn(t.planesCost)}</span>`:""}</div>
      <div class="yd-h">${q("spoils")}</div><div class="rs-items">${o}</div>
      ${t.lost.length?`<div class="yd-h">${q("lostShips")}</div><p class="rs-lost">${t.lost.map(c=>`${tn(Pi(c.name,n))} <em>${Mt("kinds")[c.kind]}</em>`).join("\u3000")}</p>`:""}
      ${a.map(c=>`<p class="rs-note">${tn(c)}</p>`).join("")}
      <button type="button" class="go">${q("toYard")}</button></div>`,this.resEl.classList.add("on"),this.resEl.querySelector(".go").onclick=()=>{this.resEl.classList.remove("on"),e()}}};var Be=new URLSearchParams(location.search),un=Be.has("render"),Pc=Be.has("manual"),Ii=!un&&!Pc&&!Be.has("skirmish");if(un||Pc||Be.has("seed")){let s=parseInt(Be.get("seed")??"20261004",10)>>>0;Math.random=()=>{s=s+1831565813>>>0;let t=s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var As=1600,Rs=900,Ts=un?2:Math.min(devicePixelRatio||1,1.5),Ee=1/60,Es=parseFloat(Be.get("ts")??"2"),Ic=document.getElementById("c"),nn=new Gr({canvas:Ic,antialias:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!1});nn.setPixelRatio(Ts);nn.setSize(As,Rs,!1);nn.toneMapping=oi;nn.localClippingEnabled=!0;var Cs=new Sn,Di=new we;Cs.add(Di);var ze=new Le(38,As/Rs,2,6e4),Dc=34.2,Nc=280,gm=un&&Be.has("air"),zn=parseFloat(Be.get("t")??(gm?"12.9":un?"16.2":"15.6")),Re=Jr(Dc,Nc,zn),xo=new _t,Bn=Xf(Re,new b);Bn.uHazeB.value=parseFloat(Be.get("haze")??(un?"3.5e-5":"5.5e-5"));var Ao={uTime:{value:0}},Mu=$f(Bn);Di.add(Mu);var Mo=new ur(16777215,1);Cs.add(Mo,Mo.target);var Sr=new Ra(16777215,16777215,1);Cs.add(Sr);var wc={dim:1};function Uc(){let s=Math.asin(Re.y),t=1/Math.max(Math.sin(Math.max(s,.01))+.15*Math.pow(Math.max(s,0)*57.3+3.885,-1.253),.02),e=[Math.exp(-.035*t),Math.exp(-.075*t),Math.exp(-.16*t)],i=7*pt.smoothstep(s,-.06,.05)*wc.dim;xo.setRGB(e[0]*i,e[1]*i,e[2]*i),Bn.uSunCol.value.set(xo.r,xo.g,xo.b),Mo.color.copy(xo),Mo.intensity=1,Mo.position.copy(Re).multiplyScalar(100);let r=pt.clamp(1-(s-.02)/.3,0,1);Bn.uDusk.value=r*r,Bn.uNight.value=pt.clamp((-s-.02)/.12,0,1);let o=pt.clamp(.15+Re.y*1.6,.02,1)*(1-Bn.uNight.value*.9);Sr.color.setRGB(.62*o,.68*o,.78*o),Sr.groundColor.setRGB(.1*o,.12*o,.12*o),Sr.intensity=2.2*(.55+.45*wc.dim)}Uc();var ss=new Ha({speed:parseFloat(Be.get("wind")??"7"),dir:parseFloat(Be.get("wdir")??"2.4")}),To=ph({wind:ss.speed,windDir:ss.dir,swellDir:1.35,swellH:.6}),Su=Kf(To),Sc=new Ya(nn,As*Ts,Rs*Ts,{samples:to?0:4,levels:6}),wo=new Fe(Math.round(As*Ts*.5),Math.round(Rs*Ts*.5),{type:Yn,depthBuffer:!0,generateMipmaps:!0,minFilter:ci}),rs=new $a(nn,Re,{shipSize:900,shipRes:to?2048:4096}),vm=(s,t)=>qf(ep(s,rs),Bn,t),ei=await hp("data/",{aniso:nn.capabilities.getMaxAnisotropy(),patch:vm,U:Ao,seaU:Su}),Ec=new Qa(ei);Di.add(Ec.group);for(let s of Ec.casters())rs.addCaster(s,{ship:!0});rs.renderLand(new b);var Vn=new ec(Bn,ss);Cs.add(Vn.lightGroup);var mi=new tc(Vn,To),Ui=new sc(Vn),St=new cc({art:ei,sea:To,artillery:mi,fx:Vn,torpedoes:Ui}),gi=new ac({battle:St,fx:Vn,torps:Ui,patch:vm});St.air=gi;Di.add(gi.group);await gi.load("data/",nn.capabilities.getMaxAnisotropy());for(let s of gi.meshes())rs.addCaster(s,{ship:!0});var Qt=St.ships,pi=parseFloat(Be.get("hd")??(gm?String(Math.atan2(Re.x,Re.z)+2.5):un?String(Math.atan2(Re.x,Re.z)):"3.1")),Tc=(s,t)=>[Math.cos(pi)*s+Math.sin(pi)*t,-Math.sin(pi)*s+Math.cos(pi)*t],wM=[["bb",0,0,!0],["bc",0,-520],["ca",-460,-260],["ca",460,-260],["cl",0,620],["dd",-680,880],["dd",0,1080],["dd",680,880]];if(!Ii)for(let[s,t,e,n]of wM){let[i,r]=Tc(t,e),o=St.add(s,"A",i,r,pi,6,{flagship:!!n});n||(o.station=[t,e])}var Ni=St.flagship()??{body:{pos:new b,speed:0},alive:!0};Be.has("nowaves")&&(St.waves=!1);var SM={bb:0,ca:1,dd:2,cl:3,bc:4,tr:5,cv:6,wh:7,sp:8},Eu=new Wa(nn,ws.map(s=>ei.kinds[s].meta.stations)),Ro=new Sn,Ac=Qf({skyU:Bn,seaU:Su,wakeU:Eu.uniforms,windU:ss.uniforms,tideU:{uTide:{value:0},uStrait:{value:new Gt(0,0,0,1)}},reflTarget:wo,refrTarget:Sc.refr,shipShadowU:rs.uniforms,timeU:Ao.uTime,quality:{oceanRings:+(Be.get("orings")??(to?150:240)),oceanSeg:+(Be.get("oseg")??(to?256:420))}});Ro.add(Ac.mesh);Ro.add(Vn.group);Ro.add(mi.mesh);Ro.add(Ui.mesh);Di.add(mi.one);mi.mesh.visible=!un;var EM=new or(nn),Tu=new Sn,xm=new Kt(Mu.geometry,Mu.material);xm.scale.setScalar(.005);Tu.add(xm);Tu.add(new Kt(new cr(40,24).rotateX(-Math.PI/2).translate(0,-.5,0),new Je({color:new _t(.02,.04,.045)})));var xu=null;function kc(){xu?.dispose(),xu=EM.fromScene(Tu,.02),Cs.environment=xu.texture}kc();var oe=new lc(ze,Ic);oe.target.copy(Ni.body.pos);oe.follow=Ni;var en=new uc;for(let s of["pointerdown","keydown"])addEventListener(s,()=>en.start(),{once:!0});var gn=new hc({battle:St,camera:ze,rcam:oe,el:Ic,overlay:document.getElementById("ov"),W:As,H:Rs,sound:en});gn.select(Qt.filter(s=>s.side==="A"));fo();document.getElementById("lang")?.addEventListener("click",s=>{Ip(),s.currentTarget.blur(),Oc()});var Ge=s=>document.getElementById(s),bc=0;function yo(s,t=4){Ge("msg").textContent=s,Ge("msg").classList.add("on"),bc=t}var wu=[];function Oc(){let s=Ge("fleet");s.innerHTML="",wu.length=0;for(let t of Qt.filter(e=>e.player)){let e=document.createElement("button");e.type="button",e.innerHTML=`${t.label??Mt("short")[t.kind]}${t.flagship?" \u25C6":""}<em>${Mt("kinds")[t.kind]}</em><i></i>`,e.addEventListener("click",n=>{t.alive&&gn.select([t],n.shiftKey),e.blur()}),e.addEventListener("dblclick",()=>{oe.follow=t}),s.appendChild(e),wu.push([t,e])}}Oc();var ni=un||Be.has("skip"),Fn=Ge("title");ni?(Fn.style.transition="none",Fn.classList.add("gone")):oe.set({yaw:Math.atan2(Re.x,Re.z)+.5,pitch:.1,dist:1100});var Mc=Fn.querySelector(".go");Mc.disabled=!1;function ym(){ni=!0,Fn.classList.add("gone"),oe.follow=St.flagship(),oe.target.copy(St.flagship().body.pos),oe.set({yaw:Math.atan2(Re.x,Re.z)+.3,pitch:.62,dist:1500}),en.start(),gn.enabled=!0,gn.select(Qt.filter(s=>s.player&&s.alive)),Oc()}var ti=new pc({battle:St,art:ei,camera:ze,rcam:oe,root:document.getElementById("stage"),canvas:Ic,W:As,H:Rs,sound:en,onSortie:()=>Ii?wr(!1):ym(),store:Ii?{get:s=>An(ue,s.uid)?.design,put:(s,t)=>{let e=An(ue,s.uid);e&&(e.design=t,e.planes=null)}}:null,cals:Ii?()=>go(ue):null,billFor:(s,t)=>Zp(s,t,oo),pay:Ii?s=>ue.rivets<s.rivets||ue.steel<s.steel?!1:(ue.rivets-=s.rivets,ue.steel-=s.steel,So(),!0):null});!un&&!Ii&&ti.applyAll();fo();window.__dock=ti;var ue=null,di=null,Fc=!1,_m=0,_o=0,bm=()=>kn()==="ja",TM=s=>{let t=ei.kinds[s.kind]?.meta;if(!t)return On[s.kind].tons;let e=Zn(Un(s.kind,t),ei),n=s.design?Zn(s.design,ei):e;return On[s.kind==="sp"?"sp":s.kind].tons*n.disp/e.disp};function AM(s){let t=ei.kinds[s.kind]?.meta;if(!t)return"";let e=s.design??Un(s.kind,t),n={},i=0;if(s.kind==="cv"){let r={f:3,t:4,b:3,...e.air??{}},o=Mt("planeShort");return`${o.f}${r.f} \xB7 ${o.t}${r.t} \xB7 ${o.b}${r.b}`}for(let r of e.mounts)r.type==="torp"?i++:r.type==="gun"&&(n[r.cal]=(n[r.cal]??0)+r.n*(r.tier??1));return Object.keys(n).sort((r,o)=>o-r).map(r=>`${r}cm\xD7${n[r]}`).concat(i?[`T\xD7${i}`]:[]).join(" \xB7 ")}var hm=null;function So(){clearTimeout(hm),hm=setTimeout(()=>vo("auto",ue).catch(s=>console.warn("save",s)),300)}var yu={big:[[0,-520],[0,-1040],[0,-1560],[0,520]],mid:[[-460,-260],[460,-260],[-460,260],[460,260],[0,620],[-900,-260],[900,-260]],dd:[[-680,880],[680,880],[0,1080],[-1100,600],[1100,600],[-1100,0],[1100,0],[0,-1900]]},RM={bb:"big",bc:"big",cv:"big",sp:"big",ca:"mid",cl:"mid",dd:"dd"};function Rc(s){St.reset();let t=!s,e=0,n=ue.sortie.map(r=>An(ue,r)).filter(r=>r&&!r.building);n.sort((r,o)=>(o.uid===ue.flag)-(r.uid===ue.flag));let i={big:yu.big.slice(),mid:yu.mid.slice(),dd:yu.dd.slice()};for(let r of n){let o=r.uid===ue.flag,a=o?[0,0]:i[RM[r.kind]].shift()??i.mid.shift()??i.dd.shift()??[0,-2400],c=ei.kinds[r.kind].meta.B,l=ei.kinds[r.kind].meta.L/2,[h,u]=t?Tc(e+c/2,l):Tc(...a);t&&(e+=c+34);let d=St.add(r.kind,"A",h,u,pi,s,{flagship:o,design:r.design,mods:Yp(ue,r),hpFrac:r.hp,uid:r.uid,name:r.name,planes:r.planes??null});d.label=Pi(r.name,bm()),o||(d.station=a),s||(d.body.ctl.tele=1)}Ni=St.flagship()??Ni}function Au(s,t){ss.set(s.wind,ss.dir);let e=ph({wind:s.wind,windDir:ss.dir,swellDir:1.35,swellH:s.swell});Object.assign(To,e),jf(Su,To),Bn.uHazeB.value=s.haze,Bn.uCover.value=s.cover??.28,wc.dim=s.dim??1,zn=t,Jr(Dc,Nc,zn,Re),Uc(),kc(),Cc=zn}var Mm={wind:5,swell:.5,haze:55e-6};function wr(s=!0){Fc=!1,ni=!1,gn.enabled=!1,gn.select([]),Ge("hud").classList.remove("campaign"),s&&(Au(Mm,15.6),Rc(0)),ti.open&&ti.close(),oe.follow=null;let t=new b;for(let n of Qt)t.add(n.body.pos);Qt.length&&t.divideScalar(Qt.length);let e=Qt.length?Qt.reduce((n,i)=>n+i.meta.B+34,0):100;oe.target.copy(t),oe.set({yaw:pi+.75,pitch:.17,dist:330+e*1.1+180}),di.show()}function um(s,t){let e=_r(s),n=Op(e);if(ue.rivets-=t,_m=t,ue.last=s,So(),di.hide(),Au(n,e.hour??n.hour),Rc(6),e.goal==="escort")for(let i=0;i<e.escort[0];i++){let r=ei.kinds.tr?"tr":"cl",[o,a]=Tc((i%2?1:-1)*230,200-Math.floor(i/2)*380),c=St.add(r,"A",o,a,pi,6,{escort:!0});r!=="tr"&&(c.turrets.length=0,c.torps.length=0),c.course=pi,c.body.ctl.tele=3,c.station=[(i%2?1:-1)*230,200-Math.floor(i/2)*380]}St.fog=n.fog??0,St.startStage(e,{copies:ue.copies.map(i=>qp(i,go(ue)))}),Fc=!0,ni=!0,_o=0,Eo=0,Ge("hud").classList.add("campaign"),Ge("retreat").textContent=q("retreat"),oe.follow=St.flagship(),oe.target.copy(St.flagship().body.pos),oe.set({yaw:Math.atan2(Re.x,Re.z)+.3,pitch:.62,dist:1600}),en.start(),gn.enabled=!0,gn.select(Qt.filter(i=>i.player&&i.alive)),Oc()}function wm(){let s=St.stage,t=s.def,e=Qt.filter(h=>h.player),n={},i={},r=0,o=0;for(let h of e)i[h.uid]=h.kills,o+=h.hpMax,h.alive&&(n[h.uid]=h.hp/h.hpMax,r+=h.hp);let a={};for(let h of e)if(h.wing&&h.alive){let u={...h.wing.planes};for(let d of gi.sq)d.home===h&&(u[d.kind]+=d.n);a[h.uid]=u}let c={stage:t.id,won:s.over.won,time:s.over.t,sunk:St.sunkList.slice(),lost:e.filter(h=>!h.alive).map(h=>h.uid),hp:n,kills:i,lostHp:1-r/Math.max(o,1),planes:a},l=$p(ue,c);l.why=s.over.why,l.fine=_m,vo("auto",ue).catch(()=>{}),Fc=!1,gn.enabled=!1,di.results(l,()=>wr(!0))}Ge("retreat").addEventListener("click",s=>{s.currentTarget.blur(),St.stage&&!St.stage.over&&St.finish(!1,"retreat")});var dm=!1;function CM(s){if(Ge("wave").innerHTML=Mt("waveN")(St.wave),St.stage){let t=St.stage,e=t.def,n=q("goalHud"),i=Qt.filter(a=>a.escort&&a.alive).length,r=Math.max(0,(e.time??0)-t.t),o=e.goal==="escort"?n.escort(i,e.escort[1]):e.goal==="hold"?n.hold(`${Math.floor(r/60)}:${String(Math.floor(r%60)).padStart(2,"0")}`):n[e.goal](t.wave,e.waves.length);Ge("goalhud").innerHTML=`<em>${e.id} \xB7 ${q("stages")[e.id][0]}</em>${o}`}Ge("sunk").textContent=St.sunkN,Ge("tons").textContent=St.score?`\xB7 ${Mt("tons")(St.score)}`:"";for(let[t,e]of wu)e.style.setProperty("--hp",`${Math.max(t.hp,0)/t.hpMax*100}%`),e.classList.toggle("sel",!!t.sel),e.classList.toggle("dead",!t.alive);bc>0&&(bc-=s,bc<=0&&Ge("msg").classList.remove("on"))}var Eo=0;function LM(){for(;Eo<St.log.length;Eo++){let s=St.log[Eo];if(s.kind==="wave")yo(s.boss?`${q("bossIn")}
${Mt("waveIn")(s.n,s.count).split(`
`)[1]}`:Mt("waveIn")(s.n,s.count),4),en.horn?.();else if(s.kind==="over")yo(s.won?q("win"):q("lose"),5),_o=performance.now();else if(s.kind==="sunk")yo(Mt(s.ship.side==="A"?"sunkUs":"sunkThem")(Mt("kinds")[s.ship.kind]),3);else if(s.kind==="capsize")yo(Mt("capsized")(Mt("kinds")[s.ship.kind],s.ship.side==="A"),4);else if(s.kind==="magazine"){yo(Mt("magazine")(Mt("kinds")[s.ship.kind]),4);let[t,e]=Ru(s.ship.body.pos);en.boom(Math.max(t*.35,30),e,s.ship.kind==="bb"||s.ship.kind==="bc"?1.3:1)}}Ni=St.flagship()??Ni,Fc&&_o&&performance.now()-_o>5500&&(_o=0,wm()),!Ii&&!dm&&!Ni.alive&&(dm=!0,setTimeout(()=>{Ge("endsub").textContent=Mt("endSub")(Math.max(St.wave-1,0),St.sunkN,St.score),Ge("end").classList.add("on")},6e3))}var _u=new b;function Ru(s){_u.set(1,0,0).applyQuaternion(ze.quaternion);let t=s.x-ze.position.x,e=s.z-ze.position.z,n=Math.hypot(t,s.y-ze.position.y,e)||1;return[n,pt.clamp((t*_u.x+e*_u.z)/n,-1,1)*.8]}var zc=[];function PM(s,t){for(let e of t){let n=e.at??e.world;if(!n)continue;let[i,r]=Ru(n);if(i=Math.max(i*.35,30),(un||Pc)&&zc.push([+fi.toFixed(3),e.kind,e.type,Math.round(i),+r.toFixed(2)]),!(e.kind==="launch"||e.kind==="torphit"&&e.ship)){if(e.kind==="torphit"){en.boom(i,r,.7);continue}if(e.kind==="downed"){en.strike(i,r);continue}e.kind==="drop"||e.kind==="landed"||e.kind==="flak"||e.kind==="aa"||e.kind==="mg"||(e.kind==="fire"?en.gun(i,r,Se[e.type].charge):e.kind==="splash"?en.splash(i,r,Se[e.type].cal>.15):e.kind==="hit"?en.strike(i,r):e.kind)}}en.update(s,{speed:Math.max(Ni.body.speed,0)*.3,aw:ss.speed,gust:0,roll:0,rollRate:0,heave:0,flog:0,force:0,landDir:null,evening:!1})}var IM=new $n(new b(0,-1,0),0);function DM(){Di.scale.y=-1,Di.updateMatrixWorld(!0),rs.uniforms.uMirror.value=-1,nn.clippingPlanes=[IM],nn.setRenderTarget(wo),nn.render(Cs,ze),nn.clippingPlanes=[],Di.scale.y=1,Di.updateMatrixWorld(!0),rs.uniforms.uMirror.value=1,nn.setRenderTarget(null)}var re=0,yc=0,NM=parseFloat(Be.get("ev")??"0.9");function UM(s){yc+=s*Es;let t=0;for(;yc>=Ee&&t<8;){yc-=Ee,re+=Ee,t++;for(let n of Qt)n.gone||n.body.step(Ee,re);let e=mi.update(Ee,re,Qt).concat(Ui.update(Ee,re,Qt));ni?St.update(Ee,re,e):ti.open&&St.dockStep(Ee,re,e),PM(Ee,e.concat(St.events.splice(0),gi.events.splice(0)));for(let n of e)n.kind==="splash"&&Sm.push({x:n.world.x,z:n.world.z,r:Se[n.type].cal*14,h:Se[n.type].cal*4})}t===8&&(yc=0),Ao.uTime.value=re}var Sm=[],Cc=zn;function kM(s){window.__freezeClock||!ni||(zn+=s*Es/3600,Jr(Dc,Nc,zn,Re),Uc(),Math.abs(zn-Cc)>.25&&(kc(),Cc=zn))}var fm=new b;function Lc(s){kM(s),UM(s),Vn.setAmbient(Sr.color,Sr.groundColor);for(let i of Qt)if(!(i.gone||i.body.sinkY>i.meta.D))for(let r of i.meta.funnels??[])Vn.funnel(i.body.toWorld(fm.set(r[0],r[1],r[2]),new b),Math.max(i.body.power,.15)*(i.alive?1:.3),s*Es,i.body.vel);Vn.update(s*Es,re,ze),Ec.dt=s,Ec.update(Qt,ze.position),gi.draw();let t=Hn?Hn.focus():oe.target,e=Qt.filter(i=>!i.gone).sort((i,r)=>i.body.pos.distanceToSquared(t)-r.body.pos.distanceToSquared(t)).slice(0,8);Eu.step(s*Es,t,e.map(i=>{let r=i.body.forward(fm);return{pos:i.body.pos,fwd:new ft(r.x,r.z).normalize(),speed:Math.max(i.body.speed,0),heave:i.body.heaveV,sub:i.alive?1:.6,kind:SM[i.kind]}}),Sm.splice(0)),Hn?Hn.camera(fi):ti.open?ti.update(s):(di?.open&&(oe.yaw=pi+.75+.12*Math.sin(re*.04)),oe.update(s)),ni&&!un?(gn.update(s),CM(s),LM(),gi.overlay(i=>gn.project(i),Ge("ov"),Mt("planeShort"))):Ii&&!ti.open?gn.update(s):ti.open&&(Eo=St.log.length),Ac.update(ze),Bn.uCloudT.value=re,rs.renderShip(new b(oe.target.x,4,oe.target.z).lerp(ze.position,.15).setY(4)),DM();let n=1+3.2*pt.smoothstep(-Re.y,-.04,.16);Sc.render(Cs,ze,{exposure:NM*n*Tm*(.5+.5*wc.dim),t:re,overlay:Ro,thresh:1.6*n})}var bo=1,_c=0,bu=0;function pm(s){bo=s;let t=Math.round(As*Ts*s),e=Math.round(Rs*Ts*s);Sc.setSize(t,e),Ac.uniforms.uRefr.value=Sc.refr.texture,wo.setSize(Math.round(t*.5),Math.round(e*.5)),Ac.uniforms.uReflTexel.value.set(1/wo.width,1/wo.height)}var mm=performance.now();function Em(s){let t=Math.min((s-mm)/1e3,.1);if(mm=s,Lc(t),_c+=t,bu++,_c>2){let e=_c/bu;window.__fps=1/e,e>.021&&bo>.61?pm(Math.max(.6,bo-.1)):e<.0135&&bo<.99&&pm(Math.min(1,bo+.1)),_c=0,bu=0}requestAnimationFrame(Em)}var Hn=null,fi=0,Tm=1,OM=s=>({id:s.id,kind:s.kind,side:s.side,alive:s.alive,hp:+s.hp.toFixed(1),pos:s.body.pos.toArray().map(t=>+t.toFixed(1)),speed:+(s.body.speed*1.9438).toFixed(1),heading:+(s.body.yaw*57.3).toFixed(1),heel:+(s.body.heel*57.3).toFixed(1),water:Math.round(s.body.water),founder:+s.body.founder.toFixed(1),sunk:s.body.sunk,turrets:s.turrets.map(t=>[+(t.yaw*57.3).toFixed(1),+(t.elev*57.3).toFixed(2),+t.reload.toFixed(1),t.broken?"X":t.onTarget?"*":""])});window.__battle=St;window.__sun=Re;window.__torps=Ui;window.__wake=Eu;window.__ships=Qt;window.__camera=ze;window.__rcam=oe;window.__fx=Vn;window.__renderer=nn;window.__cmd=gn;window.__state=()=>({t:+re.toFixed(2),wave:St.wave,sunk:St.sunkN,ships:Qt.filter(s=>!s.gone).map(OM)});window.__set=s=>{s.hour!==void 0&&(zn=s.hour,Jr(Dc,Nc,zn,Re),Uc(),kc(),Cc=zn),s.cam&&oe.set(s.cam),s.target&&oe.target.set(s.target[0],0,s.target[1]),s.follow!==void 0&&(oe.follow=s.follow===null?null:Qt[s.follow]),s.start&&(ni=!0,Fn.classList.add("gone"))};window.__fast=s=>{ni=!0,Fn.classList.add("gone");for(let e=0;e<s/Ee;e++){re+=Ee;for(let i of Qt)i.gone||i.body.step(Ee,re);let n=mi.update(Ee,re,Qt).concat(Ui.update(Ee,re,Qt));St.update(Ee,re,n),St.events.length=0}Ao.uTime.value=re;let t=e=>{let n=Qt.filter(i=>i.side===e);return{n:n.length,alive:n.filter(i=>i.alive).length,hp:Math.round(n.filter(i=>i.alive).reduce((i,r)=>i+r.hp,0))}};return{t:Math.round(re),wave:St.wave,sunk:St.sunkN,A:t("A"),E:t("E"),shells:mi.shells.length}};window.__fastUntil=(s,t=120)=>{ni=!0;for(let e=0;e<t/Ee;e++){if(s())return!0;re+=Ee;for(let i of Qt)i.gone||i.body.step(Ee,re);let n=mi.update(Ee,re,Qt).concat(Ui.update(Ee,re,Qt));St.update(Ee,re,n),St.events.length=0}return Ao.uTime.value=re,!1};un&&(ni=!0,Be.has("air")?Hn=new fc({battle:St,air:gi,camera:ze,fast:s=>window.__fast(s),fastUntil:(s,t)=>window.__fastUntil(s,t),rcam:oe,fx:Vn,arty:mi,torps:Ui}):Hn=new dc({battle:St,camera:ze,fast:s=>window.__fast(s),fastUntil:(s,t)=>window.__fastUntil(s,t),rcam:oe,fx:Vn,arty:mi,torps:Ui,event:(s,t)=>{let[e,n]=Ru(t);zc.push([+fi.toFixed(3),s,"bb",Math.round(Math.max(e*.35,30)),+n.toFixed(2)])}}));window.__renderAt=(s,t)=>{let e=s/t;if(Hn){for(;fi<e-1e-6;){let c=Math.min(1/t,e-fi);fi+=c,Tm=Hn.apply(fi).fade,Lc(c/Es*(Hn.ts?.(fi)??Es))}let n=St.flagship(),i=n?.turrets.length?Math.max(...n.turrets.map(c=>Math.abs(c.yawV)/(Se.bb.traverse*Math.PI/180))):0,r=1e9,o=0;for(let c of gi.sq){let l=c.pos.distanceTo(ze.position);r=Math.min(r,l),l<600&&(o+=c.n)}let a=0;for(let c of Qt){let l=Math.max(...c.fires);l>0&&(a=Math.max(a,l*Math.min(1,250/Math.max(c.body.pos.distanceTo(ze.position),1))))}return{t:+re.toFixed(2),shot:Hn.shotAt(fi)[0],ev:zc.splice(0),trav:+Math.min(i,1).toFixed(3),fire:+a.toFixed(3),plane:Math.round(Math.min(r,99999)),planes:o}}for(;re<e-1e-6;)Lc(1/t);return window.__state()};window.__filmLen=Hn?.len??cu;window.__film=Hn;window.__ready=!0;window.__step=(s=1,t=30)=>{for(let e=0;e<s;e++)fi+=1/t,Lc(1/t);return zc.splice(0)};if(Ii){let s=null;try{s=(await vc("auto"))?.state??null}catch(n){console.warn("save unreadable",n)}ue=s??mo(),di=new xc({root:Ge("stage"),state:ue,dispOf:TM,armOf:AM,onRefit:n=>{let i=Qt.filter(r=>r.player).findIndex(r=>r.uid===n);di.hide(),ti.show(Math.max(i,0))},onSortie:um,onChange:n=>{So(),n&&Rc(0)},onReplace:n=>{ue=n,di.state=n,So(),wr(!0)}}),Au(Mm,15.6),Rc(0),oe.target.copy(Ni.body.pos);let t=Fn.querySelector(".refit");Fn.querySelector(".goal").dataset.t="goalC",ru(()=>{Mc.textContent=s?q("cont"):q("fresh"),t.textContent=q("fresh"),t.style.display=s?"":"none"}),fo(),Mc.addEventListener("click",()=>{Fn.classList.add("gone"),en.start(),wr(!1)}),t.addEventListener("click",()=>{if(!t.dataset.armed){t.dataset.armed=1,t.textContent=q("fresh")+" ?";return}ue=mo(),di.state=ue,So(),Fn.classList.add("gone"),en.start(),wr(!0)}),ru(()=>{di.render();for(let n of Qt)n.uid&&(n.label=Pi(n.name,bm()))}),window.__camp={get state(){return ue},sortie:um,toYard:wr,endBattle:wm,yard:di}}else Mc.addEventListener("click",ym),Fn.querySelector(".refit")?.addEventListener("click",()=>{Fn.classList.add("gone"),en.start(),gn.enabled=!1,ti.show()});if(!un&&!Pc)requestAnimationFrame(Em);else{let s=()=>requestAnimationFrame(s);s()}
