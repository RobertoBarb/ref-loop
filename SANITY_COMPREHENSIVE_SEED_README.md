# Sanity Comprehensive Seed

Questo documento descrive il nuovo seed completo per Sanity che include tutti i contenuti di tutte le pagine del sito Loop AI Group.

## Panoramica

Il seed completo (`scripts/comprehensive-seed-sanity.ts`) carica automaticamente tutti i contenuti delle seguenti pagine:

- **Homepage** - Contenuto principale con hero section, features, video e CTA
- **About Us** - Mission, vision, storia aziendale e immagini del team
- **Team** - Executive team e board of advisors con foto e profili LinkedIn
- **Success Cases** - 12 casi di successo con immagini e PDF documenti
- **Contact** - Form di contatto e ubicazioni degli uffici
- **Careers** - Form di candidatura e contenuto per le posizioni aperte
- **Videos** - Collezione di video YouTube e presentazioni
- **Media & Analyst Relations** - Informazioni per media e analisti
- **Loop AI Research (LAIR)** - Contenuto per il laboratorio di ricerca

## Schema Types Creati

Sono stati creati i seguenti schema types per Sanity:

- `homepage.ts` - Schema per la homepage
- `about-us.ts` - Schema per la pagina About Us
- `team.ts` - Schema per la pagina Team
- `success-cases.ts` - Schema per i casi di successo
- `cognitive-platforms.ts` - Schema per le piattaforme cognitive
- `contact.ts` - Schema per la pagina Contact
- `careers.ts` - Schema per la pagina Careers
- `videos.ts` - Schema per la pagina Videos
- `media-analyst-relations.ts` - Schema per Media & Analyst Relations
- `loop-ai-research.ts` - Schema per Loop AI Research

## Come Utilizzare

### 1. Eseguire il Seed Completo

```bash
pnpm sanity:seed:all
```

Questo comando:
- Carica automaticamente tutte le immagini dai file locali
- Carica tutti i PDF dei documenti di successo
- Crea tutti i documenti Sanity con i contenuti completi
- Elimina eventuali documenti esistenti prima di ricreare tutto

### 2. Verificare i Risultati

Dopo l'esecuzione, puoi verificare i risultati:

1. Apri Sanity Studio: `http://localhost:3000/studio`
2. Naviga tra i diversi documenti creati
3. Verifica che tutte le immagini e PDF siano stati caricati correttamente

### 3. Configurazione Richiesta

Assicurati di avere le seguenti variabili d'ambiente configurate nel file `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
SANITY_API_TOKEN=your_api_token
```

## Struttura dei Dati

### Homepage
- Hero section con titolo, sottotitolo e bottoni
- Sezione AI Chaos con immagine
- Enterprise Control Center con 4 features principali
- Video section con YouTube embed
- Call-to-action section
- Footer con informazioni aziendali

### About Us
- Mission e Vision
- Storia aziendale divisa in sezioni narrative
- Immagini del team e conferenze
- Call-to-action per visualizzare il team

### Team
- Executive team con 9 membri (foto, ruoli, LinkedIn)
- Board of advisors con 7 membri
- Slug automatici per i profili individuali

### Success Cases
- 12 casi di successo completi
- Immagini per ogni caso
- PDF documenti scaricabili
- Sezione industrie servite
- Call-to-action per demo

### Contact
- Form di contatto completo con tutti i campi
- Ubicazioni uffici (Americas ed Europa)
- Validazione campi obbligatori

### Careers
- Form di candidatura dettagliato
- Campi per esperienza e contributi
- Opzioni per tipo di posizione (internship, full-time, other)

### Videos
- Collezione di 8 video YouTube
- Embed automatici per ogni video
- Link al canale YouTube ufficiale

### Media & Analyst Relations
- Informazioni di contatto per media
- Email dedicata: media@loop.ai
- Note per uso corretto del contatto

### Loop AI Research
- Hero section con immagine di sfondo
- Sezioni narrative sulla storia e opportunità
- Dettagli su posizioni e ubicazioni
- Call-to-action per candidature

## Gestione delle Immagini

Il seed carica automaticamente tutte le immagini dai seguenti percorsi:

- `public/images/` - Immagini generali
- `public/images/about/` - Immagini per About Us
- `public/images/Team/` - Foto del team
- `public/images/success-cases/` - Immagini dei casi di successo
- `public/images/company/` - Immagini aziendali

## Gestione dei PDF

Il seed carica automaticamente tutti i PDF dai seguenti percorsi:

- `public/docs/` - Documenti PDF dei casi di successo

## Note Importanti

1. **Eliminazione Documenti Esistenti**: Il seed elimina automaticamente tutti i documenti esistenti prima di ricreare tutto per evitare duplicati.

2. **Gestione Errori**: Il seed include gestione degli errori per upload di immagini e PDF falliti.

3. **Validazione**: Tutti i campi obbligatori sono validati secondo gli schema types definiti.

4. **Performance**: L'upload delle immagini avviene in parallelo per ottimizzare i tempi di esecuzione.

## Troubleshooting

### Errori di Upload Immagini
- Verifica che i file immagine esistano nei percorsi corretti
- Controlla i permessi di lettura dei file
- Verifica la connessione a Sanity

### Errori di Autenticazione
- Verifica che `SANITY_API_TOKEN` sia configurato correttamente
- Assicurati che il token abbia i permessi di scrittura
- Controlla che `NEXT_PUBLIC_SANITY_PROJECT_ID` e `NEXT_PUBLIC_SANITY_DATASET` siano corretti

### Documenti Non Creati
- Controlla i log della console per errori specifici
- Verifica che tutti gli schema types siano stati importati correttamente
- Assicurati che Sanity Studio sia aggiornato con i nuovi schema

## Comandi Disponibili

```bash
# Seed completo (raccomandato)
pnpm sanity:seed:all

# Seed solo homepage (legacy)
pnpm sanity:seed:ts

# Seed semplice (legacy)
pnpm sanity:seed:simple
```

Il seed completo è il metodo raccomandato per caricare tutti i contenuti in una sola volta.
