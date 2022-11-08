# TM Analytics
Funzionalità:

## Consent mode integrato
I tag partono solo se il consenso è accettato. Se non è stato espresso o se è negato i tag restano in attesa del consenso e partiranno retroattivamente solo se viene accettato. Questa logica vale a livello di pagina, non di sessione.

## Cookies

I cookie che vengono salvati sono 2:
### cookie utente: nome standard _user_info
  - client_id: id randomico del client
  - total_sessions: numero totale di sessioni
  - user_source: sorgente di prima acquisizione dell'utente
  - user_timestamp: timestamp di prima acquisizione dell'utente
### cookie sessione: nome standard _session_info
  - session_id: client_id + id randomico
  - total_requests: numero totale di richieste
  - session_source: sorgente di origine della sessione
  - session_timestamp: timestamp di inizio della sessione
  
I cookie possono essere rinominati a piacere. 

## Cross domain tracking
