# 🚀 Guida Completa: Sanity Setup e Seed Script

## 📋 Indice
- [Configurazione Iniziale](#configurazione-iniziale)
- [Accesso e Autenticazione](#accesso-e-autenticazione)
- [Gestione Token](#gestione-token)
- [Esecuzione Seed Script](#esecuzione-seed-script)
- [Troubleshooting](#troubleshooting)
- [Comandi Utili](#comandi-utili)

## 🔧 Configurazione Iniziale

### 1. File .env.local
Crea il file `.env.local` nella root del progetto con:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="7nyhn8ww"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="il_tuo_token_qui"
```

### 2. Verifica Configurazione
```bash
# Controlla che le variabili siano caricate
npx sanity debug --secrets
```

## 🔐 Accesso e Autenticazione

### Login a Sanity
```bash
# Fai login con GitHub
npx sanity login
```

### Verifica Accesso
```bash
# Lista tutti i progetti a cui hai accesso
npx sanity projects list
```

### Output Atteso
```
id         members   name          url                                             created
7nyhn8ww   1         loop-sanity   https://www.sanity.io/manage/project/7nyhn8ww   2025-09-15T17:30:56.091Z
```

## 🔑 Gestione Token

### Lista Token Esistenti
```bash
# Mostra tutti i token del progetto
npx sanity tokens list --project=7nyhn8ww
```

### Crea Nuovo Token
```bash
# Crea un token con permessi di Editor
npx sanity tokens add --project=7nyhn8ww
```

**Parametri del Token:**
- **Label**: `seed-token` (o nome descrittivo)
- **Role**: `Editor` (per scrivere dati)
- **Permessi**: Lettura e scrittura

### Output del Token
```
Token created successfully!
Label: seed-token
ID: si0RDxIqYZcT02
Role: Editor
Token: sk4R9nQO9pYaJEXY0kAcxodVv5uFO5YUtxzwEKQNOS4AX7T6voKghIyZj0PP3IlvZOtG3l0kV7xSHE02LFHps6wxzmphnxVGudkGOCN4JdGVoZr4dI1cDJLplmQFC4KsBN12kmH8EALvdd5dUTIPLxkjaXIsh94dHpz48WkxAEbUNrNiPrw3

Copy the token above – this is your only chance to do so!
```

### Aggiorna .env.local
Sostituisci `il_tuo_token_qui` con il token generato:
```bash
SANITY_API_TOKEN="sk4R9nQO9pYaJEXY0kAcxodVv5uFO5YUtxzwEKQNOS4AX7T6voKghIyZj0PP3IlvZOtG3l0kV7xSHE02LFHps6wxzmphnxVGudkGOCN4JdGVoZr4dI1cDJLplmQFC4KsBN12kmH8EALvdd5dUTIPLxkjaXIsh94dHpz48WkxAEbUNrNiPrw3"
```

## 🌱 Esecuzione Seed Script

### Metodo 1: Con npx tsx (Raccomandato)
```bash
npx tsx scripts/seed-sanity.ts
```

### Metodo 2: Con ts-node
```bash
npx ts-node scripts/seed-sanity.ts
```

### Metodo 3: Con variabile d'ambiente temporanea
```bash
# Windows PowerShell
$env:SANITY_API_TOKEN="il_tuo_token"; npx tsx scripts/seed-sanity.ts

# Windows CMD
set SANITY_API_TOKEN=il_tuo_token && npx tsx scripts/seed-sanity.ts

# Linux/Mac
SANITY_API_TOKEN="il_tuo_token" npx tsx scripts/seed-sanity.ts
```

### Output Atteso
```
🔍 Checking for existing homepage...
🌱 Creating homepage document...
✅ Homepage created successfully!
📄 Homepage ID: homepage_123456
🔗 You can now view it in Sanity Studio at: http://localhost:3000/studio
🎉 Homepage seeding completed successfully!
```

## 🛠️ Troubleshooting

### Errore 401 Unauthorized
**Problema**: `ClientError: project user not found for user ID`

**Soluzioni**:
1. **Verifica il token**:
   ```bash
   npx sanity tokens list --project=7nyhn8ww
   ```

2. **Crea un nuovo token** se non ne hai uno:
   ```bash
   npx sanity tokens add --project=7nyhn8ww
   ```

3. **Verifica i permessi** del token (deve essere Editor o Admin)

### Errore "Missing environment variable"
**Problema**: Variabili d'ambiente non trovate

**Soluzione**:
1. Verifica che `.env.local` esista
2. Controlla che le variabili siano corrette:
   ```bash
   type .env.local  # Windows
   cat .env.local   # Linux/Mac
   ```

### Errore "No tokens found"
**Problema**: Nessun token configurato per il progetto

**Soluzione**:
```bash
npx sanity tokens add --project=7nyhn8ww
```

### Sanity Studio non si apre
**Problema**: `http://localhost:3000/studio` non funziona

**Soluzioni**:
1. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   # oppure
   pnpm dev
   ```

2. **Verifica la configurazione** in `sanity.config.ts`

3. **Controlla le variabili d'ambiente**

## 📚 Comandi Utili

### Debug e Diagnostica
```bash
# Debug completo della configurazione
npx sanity debug --secrets

# Verifica la connessione al progetto
npx sanity dataset list --project=7nyhn8ww

# Mostra informazioni sul progetto
npx sanity projects list
```

### Gestione Dataset
```bash
# Lista dataset del progetto
npx sanity dataset list --project=7nyhn8ww

# Crea nuovo dataset (se necessario)
npx sanity dataset create production --project=7nyhn8ww
```

### Gestione Token
```bash
# Lista token
npx sanity tokens list --project=7nyhn8ww

# Crea token
npx sanity tokens add --project=7nyhn8ww

# Elimina token
npx sanity tokens delete --token-id=TOKEN_ID --project=7nyhn8ww
```

### Sanity Studio
```bash
# Avvia Sanity Studio
npx sanity start

# Build per produzione
npx sanity build

# Deploy
npx sanity deploy
```

## ✅ Verifica Finale

Dopo aver eseguito il seed script:

1. **Vai su Sanity Studio**: `http://localhost:3000/studio`
2. **Verifica il documento**: Dovresti vedere "Homepage" nella lista
3. **Controlla la Vision**: `http://localhost:3000/studio/vision`
4. **Testa la homepage**: `http://localhost:3000`

## 🔄 Flusso Completo

```bash
# 1. Login
npx sanity login

# 2. Verifica progetti
npx sanity projects list

# 3. Crea token
npx sanity tokens add --project=7nyhn8ww

# 4. Aggiorna .env.local con il token

# 5. Esegui seed
npx tsx scripts/seed-sanity.ts

# 6. Verifica risultato
# Vai su http://localhost:3000/studio
```

## 📝 Note Importanti

- **Token**: Salva sempre il token in un posto sicuro, non puoi recuperarlo
- **Permessi**: Usa sempre il ruolo "Editor" per i token di seed
- **Dataset**: Assicurati che il dataset sia "production"
- **Project ID**: Verifica sempre che sia "7nyhn8ww"

## 🆘 Supporto

Se continui ad avere problemi:
1. Controlla i log di errore
2. Verifica la configurazione di Sanity
3. Assicurati di avere i permessi corretti sul progetto
4. Controlla che il token sia valido e non scaduto