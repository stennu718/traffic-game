# 🚦 Liiklusreguleerija

Interaktiivne hariv mäng liikluse planeerimise, parkimise ja reageerimise õpetamiseks. Eesti keeles, täielikult lokaliseeritud.

**Live:** [github.com/stennu718/traffic-game](https://github.com/stennu718/traffic-game)

---

## 🎮 Mängu tegevanded (8)

| # | Tegevus | Juhtimine | Hariv külg |
|---|---------|-----------|------------|
| 1 | 🚦 **Fooride juhtimine** | Klikk fooril | Fooride tsüklid, ooteaeg, prioriteedid |
| 2 | 🅿️ **Parkla** | Klikk kohal | Parkla struktuur, täituvus, valik |
| 3 | 🅿️ **Parkimine** | ← → ↑ Q/E | Ruumiparkimine, manööverdamine |
| 4 | 🏁 **Kiiruse arvutamine** | Valikvastused | Peatumiskaugust, CO2, reageerimine |
| 5 | 🚑 **Prioriteedid** | Käitsi foorid | Kiirabi, buss, tram prioriteedid |
| 6 | ⚡ **Reaktsioonid** | Klõpsa rohelisel | Reageerimise aeg (~1.5s norm) |
| 7 | 📝 **Tekstülesanded** | Sisesta number | Kütusekulu, parkimistasu, sõidukaugus |
| 8 | ❓ **Kvissiülesanne** | Valikvastused | Liiklusreeglid, Eesti õigus |

---

## 📝 Tekstülesanded (17 ülesannet)

Iga ülesanne sisaldab arvutuskäiku ja vihjet. Vastus kontrollitub tolerantsiga.

| Kategooria | Ülesanded |
|------------|-----------|
| 🅿️ Parkimine | Parkimistasu (Tallinna), parkimisautomaat, parkla tulu, täituvus, ruumiparkimine, koha leidmine |
| ⛽ Kütus/energia | Kütusekulu, elektriauto laadimine, sõidukulu km kohta, kiirendus |
| 🚗 Liiklus | Kiirus ja aeg, sõidukaugus, pidurdusmaa märgista, liiklusvoo tihedus |
| 🛞 Hooldus | Rehvi rõhk |
| 🚦 Foorid | Foori ooteaeg (tõenäosus) |

---

## 🅿️ Parkla mäng

- 4×6 parkimisplatsi, ~40% juhuslikult hõivatud
- ⭐ tärniga märgitud koht on sihtkoht
- Klõpsa õigele → +50 punkti, uus korraldus 1.5s pärast
- Vale kohaga tagasiside (hõivatud/vaba)

## 🅿️ Parkimine simulaator

- **Klaviatuur**: ← → pööra, ↑ sõida, ↓ tagurda, Q/E täppispööre
- Sõida auto rohelisse parkimiskasti
- +100 punkti õige manöövri eest
- Uus asetsemine pärast edukat parkimist

---

## 📊 Statistika

| Mõõdik | Kirjeldus |
|--------|-----------|
| Sõidukid kokku | Läbinud sõidukite arv |
| Keskmine ooteaeg | Foori all oodetud aeg |
| CO2 heide | Seismisel mootoriga heide (kg) |
| Õnnestumine | Sõidukid <3s ootamisega (%) |
| Kiiruskeskmine | Reaalne liiklusvoog (km/h) |

---

## 🎯 Sündmused

Juhuslikud sündmused 15-25s tagant (auto-režiim peatatakse):

- 🚑 Kiirabi saabub — anna tee
- ⚠️ Õnnetus teel — aeglusta liiklust
- 🚌 Bussiprioriteet — anna eesõigus
- 🌧️ Vihm — pikenda punast
- 🏎️ Kiiruspiirang — kontrolli kiirust

---

## 🚀 Käivitus

```bash
# Lihtne — ava brauseris
open index.html

# Või Python server
python3 -m http.server 8080
# Ava: http://localhost:8080
```

---

## 🧠 Õppimise eesmärgid

- Mõista fooride tööpõhimõtet ja ooteaegu
- Arvutada peatumiskaugust eri kiirustest
- Teada CO2 seost kiiruse ja ootamisega
- Osata prioriteete (kiirabi, buss, tramm)
- Arendada reageerimisvõimet
- Arvutada parkimistasu ja kütusekulu
- Mõista liikluse planeerimise põhimõtet

---

## ⚠️ Puudused / Known Issues

| # | Kirjeldus | Prioriteet | Lahendus |
|---|-----------|------------|----------|
| 1 | **Parkimine simulaator**: puudub täielik kollisioonituvastus | Medium | Lisada tuvastus, kas auto on piisavalt paralleelne kastiga |
| 2 | **Parkimine**: target koht ei pruugi olla saavutatav (ümbritsetud) | Medium | Algoritm, mis tagab tee sihtkohta |
| 3 | **Fooride klikkimine**: klikkimisala võib olla väike suurematel ekraanidel | Low | Suurendada klikkimisraadiusi |
| 4 | **Tekstülesanded**: vastuse sisestamine ei too automaatselt ära Enter klahvi | Low | Lisada keypress Enter handler |
| 5 | **Reaktsioonitest**: puudub ajalimiit — võib otta igavesti | Low | Lisada 5s timeout |
| 6 | **Sündmused**: kui sündmus kestab, ei ilmu uut enne lõppu | Low | Queue süsteem sündmustele |
| 7 | **Mobiilne tugi**: klikkimine töötab, aga puudub puutesüsteem | Medium | Touch event listenerid |
| 8 | **Heliefektid**: puuduvad | Low | Web Audio API helid |
| 9 | **Salvestamine**: punktid kustuvad lehe sulgemisel | Medium | localStorage |
| 10 | **Raskusaste**: tekstülesannete raskustase ei muutu koos mängutasemega | Low | Rastusaste = level × kordaja |
| 11 | **Parkla**: ei näita statistikat (õiged/valed klikid) | Low | Lisada counter |
| 12 | **Foorid**: kollane värv kestab 3s, aga ei näita countdowni | Low | Kollase ajatimer |

---

## 🗺️ Arengukava (Roadmap)

### Phase 1 — Stabiilsus (pärast praegust)
- [ ] Enter klahv tekstülesannete vastuses
- [ ] Reaktsiooni timeout (5s)
- [ ] localStorage punktide salvestus
- [ ] Mobiili touch tugi

### Phase 2 — Sisu laiendus
- [ ] **Ristmike juhtimine** — mitu foori korraga, koordineerimine
- [ ] **Kiiruse piirangud** — erinevad tüübid (kooli ees, tänav, maantee)
- [ ] **Sõidukid** — erinevad tüübid (veoauto, rattaauto, buss) erinevate omadustega
- [ ] **Ilmastik** — vihm/lumi/mägede mõju pidurdusmaale
- [ ] **Öörežiim** — pimedas sõitmine, tulede kasutamine
- [ ] **Eri parkimisliigid** — ristu, paralleel, tagurpidi

### Phase 3 — Süvendus
- [ ] **Sessioonide jälgimine** — mitmikmängija režiim
- [ ] **Edasijõudnute tabel** — parimad tulemused
- [ ] **Järjestus ülesanded** — "päeva ülesanne" iga päev uus
- [ ] **Tõenäosusülesanded** — statistika põhjal arvutused
- [ ] **3D vaade** — Three.js põhiline 3D ristmik

### Phase 4 — Platvorm
- [ ] **Android/iOS** — PWA või React Native
- [ ] **Offline tugi** — Service Worker
- [ ] **Mitmekeelsus** — English, Finnish, Russian
- [ ] **API** — tulemuste jagamine (vabatahtlik)

---

## 📄 Litsents

Hariduslik kasutamine vaba.

## 👨‍💻 Autor

Sten — Eesti, liikluse ja huvitatud harivast sisust.
