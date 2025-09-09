# İlk NextJS Uygulamam

### Proje Klasör Yapısı ve Dosyalar

- **src/** → Projenin ana kaynak kodlarının bulunduğu klasör.  
- **main.ts** → Uygulama bu dosya üzerinden başlar. İçindeki `bootstrap` fonksiyonu ile `AppModule` yüklenir ve uygulamanın çalışacağı port belirlenebilir.  
- **app.module.ts** → Uygulamanın modüllerini yöneten ana modül dosyasıdır.  
- **app.controller.ts** → Uygulamanın controller (yönlendirme) katmanını barındırır.  
- **app.service.ts** → Uygulamanın service (iş mantığı) katmanını barındırır. Controller tarafından çağrılır ve gerekli iş kuralları burada uygulanır.  
- **app.controller.spec.ts** → `app.controller` dosyasının testlerini içerir. Unit test (birim testi) amacıyla kullanılır. Jest test framework’ü ile birlikte çalışır.  
- **eslint.config.js** → Projede kodlama standartlarını ve kurallarını belirleyen ESLint yapılandırma dosyasıdır. Kodun düzenli, hatasız ve tutarlı yazılmasına yardımcı olur.  
- **package.json** → Projenin bağımlılıklarını, scriptlerini, proje adını, sürümünü ve metadata bilgilerini barındıran dosyadır. `npm install` veya `yarn install` komutu bu dosyaya bakarak gerekli paketleri indirir.  
- **tsconfig.json** → TypeScript derleyici ayarlarını tutar. Derleme sırasında hangi dosyaların dahil edileceği, hangi standartların kullanılacağı ve JavaScript çıktısının nasıl üretileceği gibi ayarları içerir.  


## Yaşam Döngüsü (Lifecycle)

NestJS uygulamasının yaşam döngüsü, uygulamanın başlatılmasından kapanmasına kadar olan adımları içerir:

1. **Bootstrap (Başlatma)**  
   - `main.ts` içerisindeki `bootstrap()` fonksiyonu çalıştırılır.  
   - `NestFactory.create(AppModule)` ile uygulama oluşturulur ve gerekli modüller yüklenir.  

2. **Dependency Injection (Bağımlılıkların Yüklenmesi)**  
   - `AppModule` içindeki tüm bağımlılıklar (service, provider vs.) initialize edilir.  
   - NestJS IoC container sayesinde bağımlılıklar otomatik olarak çözülür.  

3. **Routing & Controller Mapping (Yönlendirme ve Controller Eşleştirme)**  
   - Controller’lar taranır ve endpoint’ler route’lara bağlanır.  
   - Örneğin `app.controller.ts` içindeki `/` GET isteği `/` route’una eşlenir.  

4. **Middleware / Pipes / Guards / Interceptors**  
   - Uygulama çalışırken istekler middleware ve guard’lardan geçer.  
   - Pipes ile veri doğrulama ve dönüştürme yapılır, Interceptors ile ek işlemler uygulanabilir.  

5. **Application Running (Uygulama Çalışıyor)**  
   - Uygulama belirtilen portta çalışır ve gelen HTTP isteklerine yanıt verir.  

6. **Shutdown / Cleanup (Kapanış ve Temizlik)**  
   - Uygulama kapatıldığında `OnModuleDestroy` veya `OnApplicationShutdown` hook’ları çalıştırılabilir.  
   - Bağlantılar (DB, Cache vs.) temizlenir ve uygulama güvenli şekilde kapanır.


   ## Temel Komutlar

Bu bölümde projenin geliştirme ve çalıştırma süreçlerinde sık kullanılan npm komutları listelenmiştir:

| Komut | Açıklama |
|-------|----------|
| `npm install` veya `yarn install` | `package.json` içindeki bağımlılıkları indirir ve projeyi hazırlar. |
| `npm run start` | Uygulamayı production modda başlatır. Varsayılan olarak `dist` klasöründeki derlenmiş kod çalıştırılır. |
| `npm run start:dev` | Uygulamayı development modda başlatır ve kod değişikliklerini otomatik olarak izler (Hot Reload). |
| `npm run start:debug` | Uygulamayı debug modunda başlatır. IDE üzerinden breakpoint ile debug yapılabilir. |
| `npm run build` | TypeScript kodunu JavaScript’e derler ve `dist` klasörüne kaydeder. |
| `npm run lint` | Kodun ESLint kurallarına uygunluğunu kontrol eder ve olası hataları listeler. |
| `npm run test` | Projedeki unit testleri çalıştırır. |
| `npm run test:watch` | Testleri izleme modunda çalıştırır; dosya değişikliklerinde otomatik test çalıştırır. |
| `npm run test:cov` | Test kapsamını (coverage) raporlar. |