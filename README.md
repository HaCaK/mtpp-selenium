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

- [Selenium Playground](https://www.selenium.dev/selenium/web/web-form.html) ODER React Honig-Shop 

Problem:

- Verschiedene UI-Komponenten testen

Lösungsansätze:

- Manuell → Gemeinsam erarbeiten, wie die Anforderung manuell getestet werden kann

- Automatisiert mit Selenium → Test Case laufen lassen (jeden Button einmal klicken und itemCount prüfen → Test schlägt fehl)

- Button Funktion einbauen → Test läuft durch → kein weiteres manuelles Testen notwendig → kann automatisiert werden

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
      - Auf Mac muss chromedriver als sichere Quelle gesetzt werden: ```xattr -d com.apple.quarantine chromedriver``` (danach ```./chromedriver``` ausführen)
    - Safari
      - Auf Mac vorinstalliert
- IDE
  - [https://www.selenium.dev/selenium-ide/](https://www.selenium.dev/selenium-ide/)

## 5. Anwendungsbeispiel (aus Einstieg)

- Git Repo auschecken **→ TODO: Git Repo mit Branches für Aufgaben erstellen**

- Gemeinsam Testfälle definieren

- In Einzelarbeit Testfälle umsetzen und Anforderungen implementieren

→ zuerst mit Builder API schreiben, danach mit Browser IDE live aufnehmen → je nach Geschwindigkeit der Gruppe

| **Funktionsanforderung**                                                  | **Testfälle**                                        |
|---------------------------------------------------------------------------|------------------------------------------------------|
| Manipulation der Stückzahl durch Buttons                                  | - Klick auf "+"-Button erhöht die Stückzahl um 1     |
|                                                                           | - Klick auf "-"-Button verringert die Stückzahl um 1 |
| Deaktivierung des "-"-Buttons bei Stückzahl \< 1                          | - "-"-Button initial deaktiviert                     |
|                                                                           | - 1 Klick auf +, 2 Klicks auf -                      |
| Deaktivierung des "Bezahlen"-Buttons bei Stückzahl \< 5                   | **TODO**                                             |
| Konsolenausgabe des Betrags und der Stückzahl nach Absenden des Formulars |

## 6. Ausblick

- Zusammenfassung
  - Wofür wird Selenium verwendet
  - Entscheidungsmatrix Builder API vs Browser IDE (wenn leicht zu finden mit Gruppe erarbeiten, sonst vorausgefüllt)

| **Kriterien** | **Selenium Builder API** | **Browser IDE** |
|---------------|--------------------------|-----------------|
| **TODO**      |

## 7. Abschluss

- Erwartungen erfüllt
- Feedback
