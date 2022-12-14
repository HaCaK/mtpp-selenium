# Workshop Selenium

## Ziel des Workshops

- Installation von Selenium auf Mac/Windows/Linux zeigen
- Use-Case für Selenium vorstellen
- Eigene Anwendung / Test-Erstellung mit Selenium üben
- Entscheidungsfähig, wann Builder API und wann Browser IDE

## 1. Einstieg

- Teilnehmerabfrage → Erwartungen an Selenium/Workshop, Vorkenntnisse

- Was wollt ihr mitnehmen

## 2. Einsatzzweck

Beispiel:

- [Selenium Playground](https://www.selenium.dev/selenium/web/web-form.html)

## 3. Komponenten

- Komponenten und Zusammenspiel
  - WebDriver
  - IDE
  - Grid

## 4. Installation

[https://www.selenium.dev/documentation/webdriver/getting_started/](https://www.selenium.dev/documentation/webdriver/getting_started/)

- Builder API
  - JS Library
    - ```npm install selenium-webdriver``` (mind. Node 14.20.0)
  - Browser-spezifischer WebDriver
    - Chrome 
      - Auf Mac muss chromedriver als sichere Quelle gesetzt werden: ```xattr -d com.apple.quarantine chromedriver```
      - Ausführbar machen: ```chmod +x chromedriver```  
      - In einen Ordner im PATH kopieren: ```sudo mv chromedriver /usr/local/bin/```
    - Safari
      - Auf Mac vorinstalliert
      - In Safari: Preferences → Advanced → "Show develop menu in menu bar" → Develop → "Allow Remote Automation" 
- IDE
  - [https://www.selenium.dev/selenium-ide/](https://www.selenium.dev/selenium-ide/)

## 5. Hands-On

- Initiales Script → https://github.com/SeleniumHQ/seleniumhq.github.io/blob/trunk/examples/javascript/test/getting_started/firstScript.spec.js

Zeile 16-31 Live Tippen/Erklären

## 6. Anwendungsbeispiel (aus Einstieg)

- In Einzelarbeit Testfälle umsetzen und Anforderungen implementieren

→ zuerst mit Builder API schreiben, danach mit Browser IDE live aufnehmen → je nach Geschwindigkeit der Gruppe

## 7. Ausblick

- Zusammenfassung
  - Wofür wird Selenium verwendet
  - Entscheidungsmatrix Builder API vs Browser IDE
    - Mit Gruppe nach Bearbeitung der Aufgaben erarbeiten

| **Kriterien** | **Selenium Builder API** | **Browser IDE** |
|---------------|--------------------------|-----------------|
| **TODO**      |

## 8. Abschluss

- Erwartungen erfüllt
- Feedback
