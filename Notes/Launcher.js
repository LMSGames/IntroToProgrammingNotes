javascript:(function(){(()=>{var y="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAADUsYIAS6/pAAI29gD9/f4A+fHmAA8x0gC8vroAx6HiACBbtgAHbPMAUIvjAD7f+AA6lt4Ah+L9AKyemQD8/vwA/f78AP7+/ADw+P0ATYDRANvUxgCp+PgA6KfAAPRdwQC1ldQA+P79APDXtQB+W6sAqTWYAPz+/QDLx8sArLypAP7+/QD51qcABB/NAOO2hgBXaacAkDZ+APb49gCguuoA2cK4AAMy6wDI9v4A/f7+ANSYuwAFL+MA/v7+AMV7qgBcQ8gA64PMAPLZuQDv1/kAy2frAMK1zgDt7e0ACTbxAOa8oAAH2vsAxV/hAN6F0ABneOEA4IjxAP7+/wCILHsAb4FkAHjKuAChl+sAZEWSAO3l7ADvv/wA3bOBAA1F6QDaluwAj0DIANG1zwD4+f4Al3VLAB2n7gCEW6YApmnQADJmtADJl+IA8s28AP3a0QDKm74A79GxAP7//gD09PQA///+AGmD5QDXg/EA3j6qAKNOkACe7/4A3Y32AB89pQD1f9IAq+z+AD1k5AD9//8A/v//AP///wBxpJkAYqr9AP3t3wDw8PAAtrydALy0xAD7/voASdbuAP39/QDu7u4A39/fAE7Q3gBQlv0AqntEAEux/ADktZcA+P3+AGnLwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZWVlZWVlZWVlZEQrZWVlZWVlZWVlYx5hckpOMWVlZWVlZWVlLlxDZwE7HDACLmVlZWVlBGovPyYqGRAFX2JlZWVlR1l3MlZWZWVlEilGZWVlHQwIditlZWVlZRFATBFlZSwYN2VlZWVlZWVlGkg1ZS4kJS5lV29waWllZTM8XmUuFgZlZVc2cGlpbmVlPUVlIUEAZWVlZWVlZWVlZXUfFGUjUi5lZVhlZWVlZQNoU2VlBxNJC3FaNGtlZWVgG1suZStPUU0JOkIOZWU+DRdUZWVlLj4VOSBVZjgtCm10K2VlZWVlZWVlbHMoUCJdD2VlZWVlZWVlZWVlZSdLZWVlZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";var l;(p=>{let u;(E=>{function e(o){document.title=o||"Game"}E.SetPageTitle=e;function i(o){document.querySelectorAll("link[rel~='icon']").forEach(r=>r.remove());let t=document.createElement("link");t.rel="icon",t.type="image/x-icon",t.href=o,document.head.appendChild(t)}E.SetFavicon=i;function C(o,c,t){let r=document.createElement("style");r.type=o,r.id=c,r.textContent=t,document.head.appendChild(r)}E.CreateStyle=C;function n(o){let c=document.createElement("meta");for(let t in o)c.setAttribute(t,o[t]);document.head.appendChild(c)}function b(){n({charset:"UTF-8"}),n({name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"}),n({name:"description",content:"EaglercraftX 1.8 Offline"}),n({name:"keywords",content:"eaglercraft, eaglercraftx, minecraft, 1.8, 1.8.8"}),n({property:"og:locale",content:"en-US"}),n({property:"og:type",content:"website"}),n({property:"og:title",content:"EaglercraftX 1.8"}),n({property:"og:description",content:"Play minecraft 1.8 in your browser"})}E.ReinstateHTML=b})(u=p.Page||={});function x(){document.documentElement.innerHTML="",document.head.innerHTML="",document.body.innerHTML="",document.head.style="";let e=document.documentElement;e.style.margin="0",e.style.padding="0",e.style.overflow="hidden",e.style.height="100%";let i=document.body;i.style.margin="0",i.style.padding="0",i.style.overflow="hidden",i.style.height="100%",i.style.width="100%",document.title="Game",u.SetFavicon(y)}p.ClearHTML=x;function v(){let e=document.createElement("canvas");e.width=innerWidth,e.height=innerHeight,e.style="display:block;",document.body.appendChild(e),p.RenderCanvas=e,p.RenderContext=e.getContext("2d")}p.CreateRenderingCanvas=v})(l||={});l.ClearHTML();l.Page.SetPageTitle("Bookmarklet Launcher");var h=document.getElementById("ecLauncherOverlay");h&&h.remove();var a=document.createElement("div");a.id="ecLauncherOverlay";a.style=`
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
    `;m.onclick=()=>{try{new Function(s.value)()}catch(d){console.error(d),alert("Error running payload: "+d)}a.remove()};a.appendChild(s);a.appendChild(m);document.body.appendChild(a);})();
})();
