'use client';
import { useEffect, useRef } from 'react';

export default function Page() {
  const h = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('rv');
    }), { threshold: 0.08, rootMargin: '60px' });
    document.querySelectorAll('.r').forEach(el => o.observe(el));
    setTimeout(() => { if (h.current) h.current.classList.add('on'); }, 300);
    return () => o.disconnect();
  }, []);

  const C = { bg: '#08070A', light: '#F2EDE3', gold: '#B8943E', muted: '#6B5A3E', deep: '#1A1614', wine: '#3D1F2B' };
  const EB = 'https://huglife.vercel.app/tickets';

  return (
    <div style={{background:C.bg,color:C.light,fontFamily:"'DM Sans',sans-serif",overflowX:'hidden'}}>
      <style dangerouslySetInnerHTML={{__html:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        .r{opacity:0;transform:translateY(56px);transition:all 1.2s cubic-bezier(0.16,1,0.3,1)}.r.rv{opacity:1;transform:translateY(0)}
        .d1{transition-delay:.18s}.d2{transition-delay:.35s}.d3{transition-delay:.52s}.d4{transition-delay:.68s}
        .hw{opacity:0;transition:opacity 2s ease}.hw.on{opacity:1}
        .hw.on .hl{transform:scale(1);opacity:1;filter:drop-shadow(0 0 120px rgba(184,148,62,.25))}.hl{transform:scale(1.15);opacity:0;transition:all 2.4s cubic-bezier(0.16,1,0.3,1) .4s}
        .hw.on .ht{opacity:1;transform:translateY(0)}.ht{opacity:0;transform:translateY(50px);transition:all 1.4s cubic-bezier(0.16,1,0.3,1) 1.2s}
        .hw.on .hc{opacity:1;transform:translateY(0)}.hc{opacity:0;transform:translateY(25px);transition:all 1s cubic-bezier(0.16,1,0.3,1) 1.8s}
        .grain{position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.04;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
        .bp{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:#08070A;background:linear-gradient(135deg,#B8943E 0%,#8B6F2E 50%,#B8943E 100%);background-size:200% 200%;padding:20px 60px;border:none;cursor:pointer;text-decoration:none;display:inline-block;transition:all .5s cubic-bezier(0.16,1,0.3,1)}.bp:hover{transform:translateY(-3px);box-shadow:0 16px 60px rgba(184,148,62,.3);background-position:100% 0}
        .bo{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:400;letter-spacing:.2em;text-transform:uppercase;color:rgba(184,148,62,.7);border:1px solid rgba(184,148,62,.2);padding:18px 44px;text-decoration:none;display:inline-block;transition:all .4s;background:transparent}.bo:hover{border-color:rgba(184,148,62,.5);color:#B8943E;background:rgba(184,148,62,.05)}
        .sbg{position:absolute;inset:0;z-index:0;background-size:cover;background-position:center;pointer-events:none}
        .divider{width:60px;height:1px;background:linear-gradient(90deg,transparent,rgba(184,148,62,.4),transparent);margin:0 auto}
        .key-icon{display:inline-block;font-size:32px;filter:drop-shadow(0 0 20px rgba(184,148,62,.3))}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes pulse-glow{0%,100%{box-shadow:0 0 40px rgba(184,148,62,.1)}50%{box-shadow:0 0 80px rgba(184,148,62,.25)}}
        @keyframes line-extend{from{width:0}to{width:60px}}
        .glow-border{animation:pulse-glow 4s ease-in-out infinite}
        @media(max-width:768px){.dg{grid-template-columns:1fr!important}.nl{display:none!important}.hero-title{font-size:clamp(48px,14vw,120px)!important}.stat-grid{grid-template-columns:1fr 1fr!important}}
      `}}/>
      <div className="grain"/>

      {/* NAV — minimal, floating, gold accent */}
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:200,padding:'28px clamp(20px,4vw,60px)',display:'flex',justifyContent:'space-between',alignItems:'center',background:'linear-gradient(180deg,rgba(8,7,10,.95) 0%,rgba(8,7,10,.6) 60%,transparent 100%)'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <span style={{fontSize:18,filter:'drop-shadow(0 0 12px rgba(184,148,62,.4))'}}>🔐</span>
          <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(16px,2vw,22px)',fontWeight:300,letterSpacing:'.15em',color:C.gold}}>SECRET SOCIETY</span>
        </div>
        <div className="nl" style={{display:'flex',gap:'clamp(16px,2.5vw,36px)',alignItems:'center'}}>
          {['The Affair','Access','Gallery'].map(l=><a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(242,237,227,.3)',textDecoration:'none',transition:'color .3s'}}>{l}</a>)}
          <a href={EB} target="_blank" rel="noopener noreferrer" className="bp" style={{padding:'11px 28px',fontSize:9}}>Request Access</a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO — The Invitation
          Full viewport. Logo center. Radial gold glow. Atmospheric depth.
      ═══════════════════════════════════════════ */}
      <section ref={h} className="hw" style={{position:'relative',width:'100%',height:'100vh',overflow:'hidden',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        {/* Atmospheric layers */}
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse 60% 50% at 50% 45%,rgba(184,148,62,.08) 0%,transparent 70%)`,zIndex:1}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(circle at 20% 80%,rgba(61,31,43,.3) 0%,transparent 50%)`,zIndex:1}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(circle at 80% 20%,rgba(184,148,62,.04) 0%,transparent 40%)`,zIndex:1}}/>
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'30%',background:`linear-gradient(180deg,transparent,${C.bg})`,zIndex:2}}/>

        {/* Decorative corner lines */}
        <div style={{position:'absolute',top:80,left:40,width:80,height:80,borderTop:'1px solid rgba(184,148,62,.15)',borderLeft:'1px solid rgba(184,148,62,.15)',zIndex:3}}/>
        <div style={{position:'absolute',bottom:80,right:40,width:80,height:80,borderBottom:'1px solid rgba(184,148,62,.15)',borderRight:'1px solid rgba(184,148,62,.15)',zIndex:3}}/>

        {/* Key icon floating */}
        <div className="hl" style={{position:'relative',zIndex:3,marginBottom:32}}>
          <div className="key-icon" style={{animation:'float 6s ease-in-out infinite'}}>🔑</div>
        </div>

        {/* Title */}
        <div className="ht" style={{position:'relative',zIndex:3,textAlign:'center'}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.6em',textTransform:'uppercase',color:'rgba(184,148,62,.5)',marginBottom:24}}>The Art of Being Selective</div>
          <h1 className="hero-title" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(56px,11vw,160px)',fontWeight:300,letterSpacing:'.04em',color:C.light,lineHeight:.85}}>
            SECRET<br/><span style={{color:C.gold,fontStyle:'italic',fontWeight:400}}>SOCIETY</span>
          </h1>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'.4em',textTransform:'uppercase',color:'rgba(242,237,227,.2)',marginTop:24}}>Atlanta · April 10 & 11 · Midnight</div>
        </div>

        {/* CTA */}
        <div className="hc" style={{position:'relative',zIndex:3,display:'flex',gap:16,marginTop:48,flexWrap:'wrap',justifyContent:'center'}}>
          <a href={EB} target="_blank" rel="noopener noreferrer" className="bp">Request Access</a>
          <a href="#the-affair" className="bo">The Affair</a>
        </div>

        {/* Scroll indicator */}
        <div className="hc" style={{position:'absolute',bottom:40,zIndex:3,display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
          <div style={{width:1,height:40,background:'linear-gradient(180deg,transparent,rgba(184,148,62,.3))'}}/>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:'rgba(184,148,62,.3)'}}>SCROLL</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE AFFAIR — What it is
      ═══════════════════════════════════════════ */}
      <section id="the-affair" style={{position:'relative',padding:'160px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 70% 30%,rgba(61,31,43,.15) 0%,transparent 60%)`}}/>
        <div style={{maxWidth:1200,margin:'0 auto',position:'relative',zIndex:1}}>
          <div className="r" style={{textAlign:'center',marginBottom:80}}>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.5em',textTransform:'uppercase',color:C.gold,marginBottom:20}}>What Happens After Midnight</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,6vw,80px)',fontWeight:300,lineHeight:.9,color:C.light,maxWidth:800,margin:'0 auto'}}>
              NOT EVERY DOOR<br/>OPENS FOR <span style={{color:C.gold,fontStyle:'italic'}}>EVERYONE.</span>
            </h2>
          </div>

          <div className="dg" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'start'}}>
            <div className="r d1">
              <p style={{fontSize:'clamp(15px,1.3vw,18px)',lineHeight:1.9,color:'rgba(242,237,227,.5)',marginBottom:32}}>
                SECRET SOCIETY IS THE MOST EXCLUSIVE AFTER-DARK EXPERIENCE IN ATLANTA. A MIDNIGHT AFFAIR WHERE THE MUSIC IS INTIMATE, THE DRESS CODE IS IMPECCABLE, AND THE GUEST LIST IS CURATED BY REPUTATION.
              </p>
              <p style={{fontSize:'clamp(14px,1.2vw,16px)',lineHeight:1.85,color:'rgba(242,237,227,.35)'}}>
                This isn't a party. It's an invitation into something rare. The room is small by design. The sound is curated. The atmosphere is velvet. Everything about this night was built for those who understand that exclusivity isn't about gatekeeping — it's about intention.
              </p>
            </div>
            <div className="r d2">
              <div style={{display:'grid',gap:24}}>
                {[
                  ['🖤','DARK LUXURY ATMOSPHERE','Velvet-dark interiors, candlelit ambiance, premium sound design'],
                  ['🎵','CURATED SOUND','ATL\'s finest selectors. Intimate sets. No requests.'],
                  ['🥂','PREMIUM BAR','Craft cocktails, champagne, premium bottles'],
                  ['🔑','INVITATION ENTRY','The list is curated. The password changes at midnight.'],
                ].map(([icon,title,desc],i) => (
                  <div key={i} style={{padding:24,background:'rgba(184,148,62,.03)',border:'1px solid rgba(184,148,62,.08)',transition:'all .4s'}}>
                    <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
                      <span style={{fontSize:18}}>{icon}</span>
                      <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'.2em',color:C.gold}}>{title}</span>
                    </div>
                    <p style={{fontSize:13,lineHeight:1.7,color:'rgba(242,237,227,.35)'}}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CINEMATIC BREAK — Full bleed statement
      ═══════════════════════════════════════════ */}
      <section style={{position:'relative',height:'60vh',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{position:'absolute',inset:0,background:`linear-gradient(135deg,${C.deep} 0%,${C.wine} 30%,${C.bg} 100%)`}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(circle at 50% 50%,rgba(184,148,62,.06) 0%,transparent 60%)`}}/>
        <div className="r" style={{position:'relative',zIndex:1,textAlign:'center',padding:'0 24px'}}>
          <div className="divider" style={{marginBottom:40}}/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,7vw,96px)',fontWeight:300,color:C.light,lineHeight:.88}}>
            THE PASSWORD<br/>CHANGES AT<br/><span style={{color:C.gold,fontStyle:'italic'}}>MIDNIGHT.</span>
          </h2>
          <div className="divider" style={{marginTop:40}}/>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE DETAILS — Date, Dress Code, Protocol
      ═══════════════════════════════════════════ */}
      <section style={{position:'relative',padding:'140px clamp(24px,5vw,80px)'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="r" style={{textAlign:'center',marginBottom:80}}>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.5em',textTransform:'uppercase',color:'rgba(184,148,62,.5)',marginBottom:20}}>Event Intelligence</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,5vw,64px)',fontWeight:300,color:C.light}}>THE <span style={{color:C.gold,fontStyle:'italic'}}>DETAILS</span></h2>
          </div>

          <div className="stat-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:32,textAlign:'center'}}>
            {[
              ['📅','APRIL 10 & 11','Two Nights'],
              ['🕛','12AM – 5AM','After Midnight'],
              ['📍','ATLANTA, GA','Location TBA'],
              ['👔','DRESS CODE','Strictly Enforced'],
            ].map(([icon,val,label],i) => (
              <div key={i} className={`r d${i+1}`} style={{padding:40,border:'1px solid rgba(184,148,62,.1)',background:'rgba(184,148,62,.02)'}}>
                <div style={{fontSize:28,marginBottom:16}}>{icon}</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(18px,2vw,28px)',fontWeight:400,color:C.light,marginBottom:8}}>{val}</div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(184,148,62,.4)'}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TICKETS — Access Tiers
      ═══════════════════════════════════════════ */}
      <section id="access" style={{position:'relative',padding:'140px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 50%,rgba(184,148,62,.04) 0%,transparent 50%)`}}/>
        <div style={{maxWidth:1000,margin:'0 auto',position:'relative',zIndex:1}}>
          <div className="r" style={{textAlign:'center',marginBottom:80}}>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.5em',textTransform:'uppercase',color:'rgba(184,148,62,.5)',marginBottom:20}}>Select Your Access</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,5vw,64px)',fontWeight:300,color:C.light}}>TICKET <span style={{color:C.gold,fontStyle:'italic'}}>TIERS</span></h2>
          </div>

          <div style={{display:'grid',gap:20}}>
            {[
              ['🎟️','EARLY BIRD','FREE','Limited — First 7 Days Only','Available now for a limited time. The earliest believers get in free.'],
              ['🥃','SHOT ENTRY','$20','Includes 1 Drink','Your entry into the affair. One drink on us to start the night right.'],
              ['🥂','VIP ACCESS','$40','Premium + 2 Drinks','Priority entry. Premium positioning. Two drinks. The elevated experience.'],
              ['🪑','TABLE TOP','$100','3 Guests + Bottle','The inner circle. Reserved seating. A bottle. Three guests. Reputation confirmed.'],
            ].map(([icon,name,price,sub,desc],i) => (
              <a key={i} href={EB} target="_blank" rel="noopener noreferrer" className={`r d${i+1} glow-border`}
                style={{display:'grid',gridTemplateColumns:'auto 1fr auto',gap:24,alignItems:'center',padding:'28px 36px',
                  border:'1px solid rgba(184,148,62,.12)',background:'rgba(184,148,62,.02)',textDecoration:'none',
                  transition:'all .4s cubic-bezier(0.16,1,0.3,1)',cursor:'pointer'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(184,148,62,.3)';e.currentTarget.style.background='rgba(184,148,62,.06)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(184,148,62,.12)';e.currentTarget.style.background='rgba(184,148,62,.02)'}}>
                <div style={{fontSize:24}}>{icon}</div>
                <div>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:'.15em',color:C.gold,marginBottom:4}}>{name}</div>
                  <div style={{fontSize:13,color:'rgba(242,237,227,.35)'}}>{desc}</div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(24px,3vw,36px)',fontWeight:300,color:C.light}}>{price}</div>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.2em',color:'rgba(184,148,62,.4)'}}>{sub}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="r d4" style={{textAlign:'center',marginTop:48}}>
            <a href={EB} target="_blank" rel="noopener noreferrer" className="bp" style={{padding:'22px 72px',fontSize:11}}>
              GET TICKETS →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CLOSING — The Invitation
      ═══════════════════════════════════════════ */}
      <section style={{position:'relative',padding:'160px clamp(24px,5vw,80px) 80px',textAlign:'center'}}>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 30%,rgba(184,148,62,.06) 0%,transparent 50%)`}}/>
        <div className="r" style={{position:'relative',zIndex:1}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.5em',textTransform:'uppercase',color:'rgba(184,148,62,.4)',marginBottom:32}}>By Invitation · By Reputation</div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,8vw,120px)',fontWeight:300,color:C.light,lineHeight:.85}}>
            IF YOU KNOW,<br/>YOU <span style={{color:C.gold,fontStyle:'italic'}}>KNOW.</span>
          </h2>
          <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(242,237,227,.2)',marginTop:24,marginBottom:48}}>
            If you don't, you weren't invited.
          </p>
          <a href={EB} target="_blank" rel="noopener noreferrer" className="bp" style={{padding:'22px 72px',fontSize:11}}>
            REQUEST YOUR INVITATION →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'60px clamp(24px,5vw,80px)',borderTop:'1px solid rgba(184,148,62,.08)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:24}}>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:300,letterSpacing:'.1em',color:'rgba(184,148,62,.6)'}}>SECRET SOCIETY</div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.3em',color:'rgba(242,237,227,.15)',marginTop:8}}>THE ART OF BEING SELECTIVE</div>
          </div>
          <div style={{display:'flex',gap:32,alignItems:'center'}}>
            <a href="https://huglife.vercel.app" target="_blank" rel="noopener noreferrer" style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.2em',color:'rgba(242,237,227,.2)',textDecoration:'none'}}>HUGLIFE EVENTS</a>
            <a href="https://www.instagram.com/just.huglife" target="_blank" rel="noopener noreferrer" style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.2em',color:'rgba(242,237,227,.2)',textDecoration:'none'}}>INSTAGRAM</a>
          </div>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.2em',color:'rgba(242,237,227,.1)'}}>
            © 2026 THE KOLLECTIVE HOSPITALITY GROUP
          </div>
        </div>
      </footer>
    </div>
  );
}
