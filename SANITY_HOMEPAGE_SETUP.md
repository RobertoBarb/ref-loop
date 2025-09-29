# Setup Homepage con Sanity

Questo documento spiega come configurare e utilizzare Sanity per gestire il contenuto dell'homepage.

## Struttura Creata

### 1. Schema Sanity (`src/sanity/schemaTypes/homepage.ts`)
- **Documento**: `homepage`
- **Campi principali**:
  - `title`: Titolo della pagina
  - `seo`: Impostazioni SEO (meta title, meta description)
  - `heroSection`: Sezione hero con titolo, sottotitolo, bottoni e immagine
  - `featuresSection`: Sezione features con titolo, sottotitolo, immagine chaos e array di features
  - `videoSection`: Sezione video YouTube
  - `ctaSection`: Sezione call-to-action
  - `footer`: Footer con logo e informazioni copyright

### 2. Query Sanity (`src/sanity/lib/queries.ts`)
- `homepageQuery`: Query per recuperare tutti i dati dell'homepage
- `homepageBySlugQuery`: Query per recuperare homepage per slug (per future estensioni)

### 3. Hook React (`src/hooks/use-homepage.ts`)
- `useHomepage()`: Hook per recuperare dati homepage con React Query
- Gestisce loading, errori e cache

### 4. Componenti React
- `HomepageContent`: Componente principale che renderizza l'homepage con dati da Sanity
- `HomepageLoading`: Componente di caricamento con skeleton
- `Homepage`: Componente principale che gestisce stati di loading/error

## Come Utilizzare

### 1. Avviare Sanity Studio
```bash
npm run dev
# oppure
pnpm dev
```
Poi vai su `http://localhost:3000/studio`

### 2. Creare il Documento Homepage
1. Apri Sanity Studio
2. Clicca su "Create" → "Homepage"
3. Compila tutti i campi richiesti
4. Salva il documento

### 3. Popolare con Dati di Default (Opzionale)
```bash
# Esegui lo script di seed
npx tsx src/sanity/lib/seed-sanity.ts
```

### 4. Personalizzare il Contenuto
Tutti i contenuti dell'homepage sono ora editabili tramite Sanity Studio:
- Titoli e sottotitoli
- Testi dei bottoni e link
- Immagini (con alt text)
- Features con icone personalizzabili
- Video YouTube
- Testi del footer

## Icone Supportate

Le features supportano le seguenti icone Lucide:
- `Brain`, `Database`, `Cloud`, `Sparkles`
- `Bot`, `Globe`, `Play`, `ArrowRight`, `Zap`

## Gestione Immagini

- Le immagini vengono caricate tramite Sanity CDN
- Supporto per hotspot per il cropping
- Alt text obbligatorio per accessibilità
- Fallback alle immagini statiche se non configurate

## SEO

- Meta title e description configurabili
- I dati SEO vengono utilizzati per i meta tag della pagina

## Estensioni Future

Per aggiungere altre pagine:
1. Crea un nuovo schema in `src/sanity/schemaTypes/`
2. Aggiungi le query in `src/sanity/lib/queries.ts`
3. Crea hook e componenti simili
4. Aggiorna `src/sanity/schemaTypes/index.ts`

## Troubleshooting

### Errore "No homepage found"
- Assicurati di aver creato un documento homepage in Sanity Studio
- Verifica che il documento sia pubblicato

### Immagini non caricate
- Controlla che le immagini siano caricate correttamente in Sanity
- Verifica che l'alt text sia compilato

### Icone non visualizzate
- Assicurati che il nome dell'icona corrisponda esattamente a quello in `iconMap`
- Controlla che l'icona sia importata in `homepage-content.tsx`

