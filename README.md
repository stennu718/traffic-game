# 🚦 Liiklusreguleerija

Interaktiivne hariv mäng liikluse planeerimise, parkimise ja reageerimise õpetamiseks.

## 🎮 Mängu tegevused

| Tegevus | Eesmärk | Hariv külg |
|---------|---------|------------|
| 🚦 **Fooride juhtimine** | Vaheta foori klikkides | Fooride töö, prioriteedid |
| 🅿️ **Parkla** | Leia õige vaba parkimiskoht | Parkla struktuur, täituvus |
| 🅿️ **Parkimine** | Sõida auto parkimiskohas | Ruumiparkimine, manööverdamine |
| 🏁 **Kiiruse arvutamine** | Vasta küsimustele | Peatumiskaugust, CO2 |
| 🚑 **Prioriteedid** | Anna kiirabile/bussile eesõigus | Liikluse prioriteedid |
| ⚡ **Reaktsioonid** | Klõpsa rohelisel | Reageerimise aeg |
| 📝 **Tekstülesanded** | Lahenda arvutusülesanded | Kütusekulu, parkimistasu, sõidukaugus |
| ❓ **Kvissiülesanne** | Vasta valikvastustele | Liiklusreeglid |

## 📝 Tekstülesanded (18 ülesannet)

Praktilised arvutusülesanded:
- 🅿️ Parkimistasu arvutamine (Tallinna kesklinn)
- ⛽ Kütusekulu ja hind
- 🅿️ Parkla täituvus
- 🚗 Kiirus ja aeg
- 🅿️ Parkimismaks (ümardamisreeglid)
- 🛞 Rehvi rõhk
- 🚦 Foori ooteaeg (tõenäosus)
- 🅿️ Ruumiparkimise pindala
- ⛽ Elektriauto laadimine
- 🚗 Sõidukulu km kohta
- 🅿️ Parkimisautomaat
- 🚗 Sõidukaugus (reageerimisaeg)
- 🅿️ Parkla tulu
- 🚦 Liiklusvoo tihedus
- 🛞 Pidurdusmaa märgista
- 🅿️ Parkimiskoha leidmine
- 🚗 Kütusekulu kiirendus

## 🅿️ Parkla mäng

- 4×6 parkimisplatsi, osaliselt hõivatud
- Tärniga märgitud koht on sihtkoht
- Klõpsa õigele kohale

## 🅿️ Parkimine simulaator

- Kasuta nooleklahve ← → ↑ ja Q/E pööramiseks
- Sõida auto rohelisse parkimiskasti
- +100 punkti õige manöövri eest

## 📊 Mõõdikud

- **Sõidukid kokku** — läbinud sõidukite arv
- **Keskmine ooteaeg** — kui kaua foori all oodeti
- **CO2 heide** — seismisel mootoriga heide
- **Õnnestumine** — sõidukid <3s ootamisega
- **Kiiruskeskmine** — reaalne liiklusvoog

## 🎯 Sündmused

Juhuslikud sündmused 15-25s tagant:
- 🚑 Kiirabi saabub
- ⚠️ Õnnetus teel
- 🚌 Bussiprioriteet
- 🌧️ Vihm
- 🏎️ Kiiruspiirang

## 🚀 Käivitus

```bash
# Lihtne - ava brauseris
open index.html

# Või Python server
python3 -m http.server 8080
# Ava: http://localhost:8080
```

## 🧠 Õppimine

- **Fooride töö** — mõista tsükleid ja ooteaegu
- **Peatumiskaugust** — kiirus → pidraud = oht
- **CO2** — seismine = heide (keskmiselt 2.3 kg/h)
- **Reaktsioon** — keskmiselt 1.5s otsustamine
- **Prioriteedid** — kiirabi alati esiteisigi
- **Parkimine** — arvutused, mõõtmed, tasu
