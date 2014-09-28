# Specyfikacja

## Definicje

### Uprawnienia
Uprawnienie - permission - resourceType:resourceID:action - "Product:912381923:addProduct"

### Role
Rola - role - posiada uprawnienia. Role mogą należeć do innych ról i będą posiadać maksymalnie tylko uprawnienia roli nadrzędnej.

### Użytkownicy
Użytkownik - User - należy do różnych ról(roles) i ma możliwość zarządzania przypisanymi mu rolami (manage).

### Reporting stores
UserReportingStore
_id(string;uuid.v4), login(string), password(string), email(string), manage(Array), roles(Array)