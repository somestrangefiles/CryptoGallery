# Сборка клиентской части приложения

## Внимание: перед сборкой клиентской части необходимо собрать часть приложения со смарт-контрактами

Для начала необходимо установить зависимости с помощью команды

### `npm install`

Для налаживания взаимодействия клиента со смарт-контрактами необходимо в директорию client/src/utils/ скопировать файл <string>CryptoGallery.json</string>, сгенерированный в директории smart_contract/atrifacts/contracts при создании тестовой сети. А также в файле <strong>constants.js</strong> в директории client/src/utils/ изменить значение переменной contractAddress на адрес контракта, сгенерированный при создании тестовой сети.

Для запуска клиентской части приложения воспользуйтесь командой

### `npm start`
