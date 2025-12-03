javascript:(function(){(()=>{var y="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAADUsYIAS6/pAAI29gD9/f4A+fHmAA8x0gC8vroAx6HiACBbtgAHbPMAUIvjAD7f+AA6lt4Ah+L9AKyemQD8/vwA/f78AP7+/ADw+P0ATYDRANvUxgCp+PgA6KfAAPRdwQC1ldQA+P79APDXtQB+W6sAqTWYAPz+/QDLx8sArLypAP7+/QD51qcABB/NAOO2hgBXaacAkDZ+APb49gCguuoA2cK4AAMy6wDI9v4A/f7+ANSYuwAFL+MA/v7+AMV7qgBcQ8gA64PMAPLZuQDv1/kAy2frAMK1zgDt7e0ACTbxAOa8oAAH2vsAxV/hAN6F0ABneOEA4IjxAP7+/wCILHsAb4FkAHjKuAChl+sAZEWSAO3l7ADvv/wA3bOBAA1F6QDaluwAj0DIANG1zwD4+f4Al3VLAB2n7gCEW6YApmnQADJmtADJl+IA8s28AP3a0QDKm74A79GxAP7//gD09PQA///+AGmD5QDXg/EA3j6qAKNOkACe7/4A3Y32AB89pQD1f9IAq+z+AD1k5AD9//8A/v//AP///wBxpJkAYqr9AP3t3wDw8PAAtrydALy0xAD7/voASdbuAP39/QDu7u4A39/fAE7Q3gBQlv0AqntEAEux/ADktZcA+P3+AGnLwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZWVlZWVlZWVlZEQrZWVlZWVlZWVlYx5hckpOMWVlZWVlZWVlLlxDZwE7HDACLmVlZWVlBGovPyYqGRAFX2JlZWVlR1l3MlZWZWVlEilGZWVlHQwIditlZWVlZRFATBFlZSwYN2VlZWVlZWVlGkg1ZS4kJS5lV29waWllZTM8XmUuFgZlZVc2cGlpbmVlPUVlIUEAZWVlZWVlZWVlZXUfFGUjUi5lZVhlZWVlZQNoU2VlBxNJC3FaNGtlZWVgG1suZStPUU0JOkIOZWU+DRdUZWVlLj4VOSBVZjgtCm10K2VlZWVlZWVlbHMoUCJdD2VlZWVlZWVlZWVlZSdLZWVlZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";var l;(p=>{let u;(E=>{function e(i){document.title=i||"Game"}E.SetPageTitle=e;function r(i){document.querySelectorAll("link[rel~='icon']").forEach(a=>a.remove());let n=document.createElement("link");n.rel="icon",n.type="image/x-icon",n.href=i,document.head.appendChild(n)}E.SetFavicon=r;function C(i,d,n){let a=document.createElement("style");a.type=i,a.id=d,a.textContent=n,document.head.appendChild(a)}E.CreateStyle=C;function o(i){let d=document.createElement("meta");for(let n in i)d.setAttribute(n,i[n]);document.head.appendChild(d)}function b(){o({charset:"UTF-8"}),o({name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"}),o({name:"description",content:"EaglercraftX 1.8 Offline"}),o({name:"keywords",content:"eaglercraft, eaglercraftx, minecraft, 1.8, 1.8.8"}),o({property:"og:locale",content:"en-US"}),o({property:"og:type",content:"website"}),o({property:"og:title",content:"EaglercraftX 1.8"}),o({property:"og:description",content:"Play minecraft 1.8 in your browser"})}E.ReinstateHTML=b})(u=p.Page||={});function x(){document.documentElement.innerHTML="",document.head.innerHTML="",document.body.innerHTML="",document.head.style="";let e=document.documentElement;e.style.margin="0",e.style.padding="0",e.style.overflow="hidden",e.style.height="100%";let r=document.body;r.style.margin="0",r.style.padding="0",r.style.overflow="hidden",r.style.height="100%",r.style.width="100%",document.title="Game",u.SetFavicon(y)}p.ClearHTML=x;function v(){let e=document.createElement("canvas");e.width=innerWidth,e.height=innerHeight,e.style="display:block;",document.body.appendChild(e),p.RenderCanvas=e,p.RenderContext=e.getContext("2d")}p.CreateRenderingCanvas=v})(l||={});l.ClearHTML();l.Page.SetPageTitle("Bookmarklet Launcher");var h=document.getElementById("ecLauncherOverlay");h&&h.remove();var c=document.createElement("div");c.id="ecLauncherOverlay";c.style=`
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.85);
        z-index:999999999;
        display:flex;
        flex-direction:column;
        padding:20px;
        box-sizing:border-box;
    `;var s=document.createElement("textarea");s.style=`
        flex:1;
        width:100%;
        margin-bottom:15px;
        font-size:14px;
        font-family:monospace;
    `;s.placeholder="Paste JavaScript payload here (NO 'javascript:' prefix).";var m=document.createElement("button");m.textContent="Run";m.style=`
        font-size:18px;
        padding:10px;
        cursor:pointer;
    `;m.onclick=()=>{try{let t=s.value;t.startsWith("javascript:")&&(t=t.substring(11).trim()),new Function(t)()}catch(t){console.error(t),alert("Error running payload: "+t)}c.remove()};c.appendChild(s);c.appendChild(m);document.body.appendChild(c);})();
})();
