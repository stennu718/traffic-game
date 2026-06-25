# 🚦 Liiklusreguleerija

Interaktiivne hariv mäng liikluse planeerimise ja reageerimise õpetamiseks.

## 🎮 Mängu tegevused

| Tegevus | Eesmärk | Hariv külg |
|---------|---------|------------|
| 🚦 **Fooride juhtimine** | Vaheta foori klikkides | Fooride töö, prioriteedid |
| 🏁 **Kiiruse arvutamine** | Vasta küsimustele | Peatumiskaugust, CO2 |
| 🚑 **Prioriteedid** | Anna kiirabile/bussile eesõigus | Liikluse prioriteedid |
| ⚡ **Reaktsioonid** | Klõpsa rohelisel | Reageerimise aeg |
| ❓ **Kvissiülesanne** | Vasta küsimustele | Liiklusreeglid |

## 📊 Mõõdikud

- **Sõidukid kokku** — läbinud sõidukite arv
- **Keskmine ooteaeg** — kui kaua foori all oodeti
- **CO2 heide** — seismisel mootoriga heide
- **Õnnestumine** — sõidukid <3s ootamisega
- **Kiiruskeskmine** — reaalne liiklusvoog

## 🎯 Sündmused

Juhuslikud sündmused 15-25s tagant:
- 🚑 Kiirabi saabub
- ⚠️ õnnetus teel
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

## 📕 Reeglid

1. Klõpsa fooril, et muuta punane → roheline
2. Kiirabi ja bussid saavad märguande
3. Vasta küsimustele punktide saamiseks
4. Tase tõuseb iga 500 punkti tagant
5. Ülesanded muutuvad raskemaks kõrgemal tasemel

## 🧠 Õppimine

- **Fooride töö** — mõista tsükleid ja ooteaegu
- **Peatumiskaugust** — kiirus → pidraud = oht
- **CO2** — seismine = heide (keskmiselt 2.3 kg/h)
- **Reaktsioon** — keskmiselt 1.5s otsustamine
- **Prioriteedid** — kiirabi alati esiteisigi
