export default {
  APP_NAME: 'KARO APP',
  APP_COPYRIGHT: 'Copyright 2022 KARO APP',
  UPLOAD_URL: 'http://localhost:8080/upload/',
  BACKEND_URL: 'http://localhost:8080/',
  API_URL: 'http://localhost:8080/',
  SITE_URL: 'http://localhost:8081/',
  turkish: 'Türkçe',
  german: 'Almanca',
  turkish_code: 'TR',
  german_code: 'DE',
  TAMAM: 'Tamam',
  HATA: 'Hata !',
  BASARILI: 'Başarılı!',
  YUKLENIYOR: 'Veriler yükleniyor lütfen bekleyiniz.',
  YOK: ' - ',
  auth: {
    KULLANICI_ADI_SIFRE_GECERSIZ: 'Kullanıcı adı veya şifre geçersiz.',
    OTURUM_SONLANDI: 'Oturumunuz sonlandı lütfen tekrar giriş yapınız.',
  },
  menu: {
    panel: 'Übersicht',
    personel: 'Personeller',
    personel_listesi: 'Personel Listesi',
    personel_olustur: 'Personel Oluştur',
    tanimlar_main: 'Tanımlar',
    dosyalar: 'Dosyalar',
    tanimlar: {
      ulkeler: 'Ülkeler',
      sehirler: 'Şehir & Posta Kodu',
      sigorta_sirketleri: 'Sigorta Şirketleri',
      evrak_tipleri: 'Evrak Tipleri',
      meslek: 'Meslek Grupları',
      uyruklar: 'Uyruklar',
    },
    kullanicilar_main: 'Kullanıcılar',
    kullanicilar: {
      liste: 'Kullanıcı Listesi',
      olustur: 'Kullanıcı Oluştur',
    },
  },
  layout: {
    kullanici: 'Kullanıcı',
    yonetici: 'Yönetici',
    girisyap: 'Giriş Yapın!',
    ayarlar: 'Hesap Ayarları',
    cikis_yap: 'Güvenli Çıkış',
    Ara: 'Sayfada ara..',
  },
  Dosyalar: {
    id: '',
    evrak: 'Evrak Tipi',
    dosya_adi: 'Dosya Adı',
    dosya_boyutu: 'Dosya Boyutu',
    olusturma_tarihi: 'Yükleme Tarihi',
    sil: 'Sil',
    guncelle: 'Guncelle',
    islem: 'İşlemler',
    dosya_yukle: 'Dosya Yükle',
    olustur: 'Yeni dosya ekleyin',
    kaydet: 'Dosya yükle',
    evrak_tipi: 'Evrak Tipi',
    belge: 'Belge',
    yeni_evrak: 'Yeni evrak tipi eklemek için yazın ve ENTER tuşuna basarak kayıt edin.',
    tumunu_indir: 'Tüm Dosyaları indir (.ZIP)',
  },
  login: {
    hosgeldiniz: 'Hoş geldiniz.👋🏻',
    giris_yapin: 'Lütfen hesabınıza giriş yapın ve maceraya başlayın',
    kullanici_adi: 'Kullanıcı Adı',
    sifre: 'Şifre',
    beni_hatirla: 'Beni hatırla',
    sifremi_unuttum: 'Şifremi Unuttum?',
    yenimisin: 'Platformumuzda yeni misiniz?',
    hesap_olustur: 'Hesap oluştur!',
    giris: 'Giriş Yap!',
  },
  kullanicilar: {
    kullanici: 'Kullanıcı',
    yonetici: 'Yönetici',
    id: '#ID',
    kullanici_adi: 'Kullanıcı adı',
    isim: 'İsim',
    soyisim: 'Soy İsim',
    yetki: 'Yetki',
    olusturma_tarihi: 'Oluşturma Tarihi',
    islem: 'İşlemler',
    sifre: 'Şifre',
    kaydet: 'Kaydet',
    sifirla: 'Sıfırla',
    iptal: 'İptal',
    durum: 'Kullanıcı durumu',
    aktif: 'Kullanıcı Aktif',
    pasif: 'Kullanıcı Devredışı',
    kullanici_olustur: 'Yeni kullanıcı kaydı.',
  },
  ulkeler: {
    code: 'KODU',
    isim: 'İsim',
    ulke_olustur: 'Ülke Oluştur.',
    german: 'Almanca Ülke Adı',
    english: 'İngilizce Ülke adı (Opsiyonel)',
    ulke_kaydet: 'Ülke kaydet',
    ulke_duzenle: ' Düzenle',
  },
  Sehirler: {
    id: '#NO',
    sehir: 'Şehir',
    posta_kodu: 'Posta Kodu',
    sehir_olustur: 'Şehir ve Posta Kodu Ekle',
    sehir_kaydet: 'Şehir Kaydet',
  },
  SigortaSirketleri: {
    id: '#NO',
    isim: 'Şirket Adı',
    olusturma_tarihi: 'Oluşturma Tarihi',
    sigorta_sirketi_olustur: 'Sigorta Şirketi Oluştur',
    sigorta_sirketi_duzenle: 'Düzenle - Sigorta Şirketi',
    sigorta_sirketi_kaydet: 'Sigorta Şirketi Kaydet',
  },
  EvrakTipleri: {
    id: '#NO',
    isim: 'İsim',
    aciklama: 'Açıklama',
    olusturma_tarihi: 'Oluşturma Tarihi',
    evrak_olustur: 'Yeni Evrak tipi',
    evrak_kaydet: 'KAYDET',
  },
  MeslekGruplari: {
    id: '#NO',
    meslek: 'Meslek',
    aciklama: 'Açıklama',
    olusturma_tarihi: 'Oluşturma Tarihi',
    Meslek_olustur: 'Yeni meslek grubu oluşturun.',
    Meslek_duzenle: 'Mesleğini Düzenle',
    Meslek_kaydet: 'KAYDET',
  },
  Uyruklar: {
    id: '#NO',
    uyruk: 'Uyruk',
    olusturma_tarihi: 'Oluşturma Tarihi',
    Uyruk_olustur: 'Yeni kişi uyruğu kaydedin.',
    Uyruk_duzenle: 'Düzenle',
    Uyruk_kaydet: 'UYRUK KAYDET',
  },
  Personeller: {
    personel_no: 'PERSONEL NO',
    isim: 'İSİM',
    soyisim: 'SOYİSİM',
    dogum_tarihi: 'DOĞUM TARİHİ',
    dogum_yeri: 'DOĞUM YERİ',
    posta_kodu_id: 'POSTA KODU',
    sehir: 'ŞEHİR',
    ulke_id: 'ÜLKE',
    cadde: 'CADDE',
    meslek_id: 'MESLEK',
    ise_giris_tarihi: 'İŞE GİRİŞ TARİHİ',
    sigorta_sirketi_id: 'SİGORTA ŞİRKETİ',
    kimlik_no: 'KİMLİK NO',
    sosyal_guvenlik_no: 'S.G. NO',
    uyruk_id: 'UYRUK',
    telefon: 'TELEFON',
    kimlik_seri_no: 'KİMLİK SERİ NO',
    kimlik_gecerlilik_tarihi: 'KİMLİK G. TARİHİ',
    pasaport_no: 'PASAPORT NO',
    pasaport_gecerlilik_tarihi: 'PASAPORT G. TARİHİ',
    oturum_izin_no: 'OTURUM İZİN NO',
    oturum_izin_tarihi: 'OTURUM SON. TARİH',
    eposta: 'EPOSTA',
    guvenlik_belgesi: 'GUVENLIK BELGESİ',
    created: 'OLUŞTURMA TARİHİ',
    olustur: 'Personel Kayıt Formu',
    kaydet: 'KAYDET',
    kisisel: 'Kişisel bilgi',
    adres: 'Adres bilgi',
    resmi: 'Resmi',
    sonraki: 'Sonraki ·',
    posta_kodu_ve_sehir: 'ŞEHİR VE POSTA KODU',
    DetayButtonTooltip: 'Kişi kartını görüntülemek için tıklayınız.',
    DosyalarButtonTooltip: 'Dosyaları görmek ve yüklemek için tıklayınız.',
    islem: '',
    Personellistesi: 'Personeller',
  },
  ERROR: {
    ERR_GEREKLI: 'Boş olamaz.',
    ERR_COKKISA_1: 'En az 1 Karakter olmalı.!',
    ERR_COKKISA_2: 'En az 2 Karakter olmalı.!',
    ERR_COKKISA_3: 'En az 3 Karakter olmalı.!',
    ERR_COKKISA_4: 'En az 4 Karakter olmalı.!',
    ERR_COKKISA_5: 'En az 5 Karakter olmalı.!',
    ERR_COKKISA_6: 'En az 6 Karakter olmalı.!',
    ERR_COKKISA_7: 'En az 7 Karakter olmalı.!',
    ERR_COKKISA_8: 'En az 8 Karakter olmalı.!',
    ERR_COKKISA_9: 'En az 9 Karakter olmalı.!',
    ERR_COKKISA_10: 'En az 10 Karakter olmalı.!',
    ERR_COKKISA_11: 'En az 11 Karakter olmalı.!',
    ERR_COKKISA_12: 'En az 12 Karakter olmalı.!',
    ERR_COKKISA_13: 'En az 13 Karakter olmalı.!',
    ERR_COKKISA_14: 'En az 14 Karakter olmalı.!',
    ERR_COKKISA_15: 'En az 15 Karakter olmalı.!',
    ERR_COKKISA_16: 'En az 16 Karakter olmalı.!',
    ERR_COKKISA_17: 'En az 17 Karakter olmalı.!',
    ERR_COKKISA_18: 'En az 18 Karakter olmalı.!',
    ERR_COKKISA_19: 'En az 19 Karakter olmalı.!',
    ERR_COKKISA_20: 'En az 20 Karakter olmalı.!',
    HATA: 'HATA',
    BASARILI: 'Başarılı!',
    kullanici_adi: 'Kullanıcı Adı',
    sifre: 'Şifre',
    isim: 'İsim',
    soyisim: 'Soyisim',
    ERR_KULLANICI_BULUNAMADI: 'Kullanıcı Bulunamadı.',
    MSG_KULLANICI_SILINDI: 'Kullanıcı başarıyla silindi.',
    ERR_GUNCELLEME_YAPILAMADI: 'Güncelleme işlemi başarısız oldu.',
    MSG_GUNCELLENDI: 'Güncelleme başarılı.',
    MSG_KULLANICI_OLUSTURULDU: 'Kullanıcı Oluşturuldu.',
    ERR_SUNUCU_HATASI: 'Sunucu Hatası.',
    MSG_LISTELEME_BASARILI: 'Listeleme başarılı.',
    ERR_KULLANICI_MEVCUT: 'Kullanıcı zaten mevcut',
    ERR_MESLEK_MEVCUT: 'Meslek grubu mevcut.',
    MSG_MESLEK_OLUSTURULDU: 'Başarılı şekilde oluşturuldu',
    ERR_MESLEK_BULUNAMADI: 'Meslek grubu bulunamadı.',
    MSG_MESLEK_SILINDI: 'Başarılı şekilde sistemden silindi',
    ERR_ULKE_MEVCUT: 'Ülke zaten var.',
    MSG_ULKE_OLUSTURULDU: 'Ülke oluşturma işlemi başarılı.',
    ERR_ULKE_BULUNAMADI: 'Ülke bulunamadı',
    ERR_ULKE_SILINEMEZ: 'Ülke silme işlemi kapalı.',
    ERR_POSTA_KODU_MEVCUT: 'Girdiğiniz posta kodu zaten kullanımda.',
    MSG_SEHIR_OLUSTURULDU: 'Şehir başarılı şekilde kaydedildi',
    ERR_SEHIR_BULUNAMADI: 'Şehir bulunamadı.',
    ERR_SEHIR_SILINEMEZ: 'Sistem üzerinde Şehir silme işlemi kapalı.',
    ERR_SIGORTA_SIRKETI_MEVCUT: 'Sigorta şirketi zaten var',
    MSG_SIGORTA_SIRKETI_OLUSTURULDU: 'Sigorta Şirketi Oluşturuldu.',
    ERR_SIGORTA_SIRKETI_BULUNAMADI: 'Sigorta Şirketi bulunamadı.',
    ERR_SIGORTA_SIRKETI_SILINDI: 'Sigorta şirketi silindi.',
    ERR_EVRAK_TIPI_MEVCUT: 'Evrak Tipi Mevcut.',
    ERR_EVRAK_TIPI_OLUSTURULDU: 'Evrak tipi başarılı şekilde kaydedildi.',
    ERR_EVRAK_TIPI_BULUNAMADI: 'Evrak tipi bulunamadı.',
    ERR_EVRAK_TIPI_SILINDI: 'Evrak tipi silindi',
    ERR_EVRAK_TIPI_SILINEMEDI: 'Evrak tipi Silinemedi ..!',
    ERR_UYRUK_MEVCUT: 'Uyruk zaten mevcut.',
    MSG_UYRUK_OLUSTURULDU: 'Uyruk kaydı yapıldı',
    ERR_UYRUK_BULUNAMADI: 'Uyruk bulunamadı.',
    MSG_UYRUK_SILINDI: 'Uyruk silindi.',
    dogum_tarihi: 'Doğum Tarihi',
    personel_no: 'Personel No',
    MSG_PERSONEL_OLUSTURULDU: 'PERSONEL KAYDI BAŞARILI ŞEKİLDE YAPILDI!',
    MSG_DOSYA_YUKLEME_BASARILI: 'DOSYA BAŞARILI ŞEKİLDE YÜKLENDİ.',
    ERR_DOSYA_UZANTISI_GECERSIZ: 'DOSYA TİPİ GEÇERSİZ.',
    ERR_DOSYA_TASIMA_HATASI: 'DOSYA YÜKLEME ESNASINDA SUNUCU HATASI OLUŞTU.',
    ERR_DOSYA_BOYUTU_COK_FAZLA: 'DOSYA BOYUTU İZİN VERİLEN DEĞERİN ÜZERİNDE.',
    ERR_PERSONEL_KLASOR_OLUSTURULAMIYOR: 'KLASÖR OLUŞTURMA SORUNU SUNUCU HATASI.',
    ERR_UPLOAD_KLASORU_YOK: 'KLASÖR OLUŞTURMA SORUNU SUNUCU HATASI.',
    ERR_PERSONEL_NO_GEREKLI: 'PERSONEL NUMARASI GEREKLI',
    ERR_BURALAR_HENUZ_COK_ISSIZ: 'DOSYA LISTESI BOŞ',
    ERR_DOSYA_SILINDI: 'Dosya sistemden silindi.',
    ERR_DOSYA_SILINDI_DATA_SILINEMEDI: 'Dosya kaldırıldı fakat tablodan silinemedi.',
    ERR_DOSYA_SILINEMEDI: 'Dosya Silme işlemi başarısız.',
    ERR_DOSYA_BULUNAMADI: 'Dosya bulunamadı.',
  },


  // Vuetify Dil Dosyası
  $vuetify: {
    badge: 'Abzeichen',
    close: 'Schließen',
    dataIterator: {
      noResultsText: 'Keine Elemente gefunden',
      loadingText: 'Lade Elemente...',
    },
    dataTable: {
      itemsPerPageText: 'Zeilen pro Seite:',
      ariaLabel: {
        sortDescending: 'Absteigend sortiert.',
        sortAscending: 'Aufsteigend sortiert.',
        sortNone: 'Nicht sortiert.',
        activateNone: 'Aktivieren um Sortierung zu entfernen.',
        activateDescending: 'Aktivieren um absteigend zu sortieren.',
        activateAscending: 'Aktivieren um aufsteigend zu sortieren.',
      },
      sortBy: 'Sortiere nach',
    },
    dataFooter: {
      itemsPerPageText: 'Elemente pro Seite:',
      itemsPerPageAll: 'Alle',
      nextPage: 'Nächste Seite',
      prevPage: 'Vorherige Seite',
      firstPage: 'Erste Seite',
      lastPage: 'Letzte Seite',
      pageText: '{0}-{1} von {2}',
    },
    datePicker: {
      itemsSelected: '{0} ausgewählt',
      nextMonthAriaLabel: 'Nächsten Monat',
      nextYearAriaLabel: 'Nächstes Jahr',
      prevMonthAriaLabel: 'Vorheriger Monat',
      prevYearAriaLabel: 'Vorheriges Jahr',
    },
    noDataText: 'Keine Daten vorhanden',
    carousel: {
      prev: 'Vorheriges Bild',
      next: 'Nächstes Bild',
      ariaLabel: {
        delimiter: 'Element {0} von {1}',
      },
    },
    calendar: {
      moreEvents: '{0} mehr',
    },
    fileInput: {
      counter: '{0} Dateien',
      counterSize: '{0} Dateien ({1} gesamt)',
    },
    timePicker: {
      am: 'AM',
      pm: 'PM',
    },
    pagination: {
      ariaLabel: {
        wrapper: 'Seitennavigation',
        next: 'Nächste Seite',
        previous: 'Vorherige Seite',
        page: 'Gehe zu Seite {0}',
        currentPage: 'Aktuelle Seite, Seite {0}',
      },
    },
    rating: {
      ariaLabel: {
        icon: 'Rating {0} of {1}',
      },
    },
  },

  // Vuetify Dil Dosyası sonu
}
