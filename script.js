function stilDegistir() {
    // Form elemanlarına erişim
    var renk_secimi = document.getElementById("renk_secimi");
    var yazi_tipi = document.getElementById("yazi_tipi");
    var yazi_boyutu = document.getElementById("yazi_boyutu");
    var overlay = document.querySelector(".overlay");
    var container = document.querySelector(".container");

    // Seçilen değerleri al ve variable'a ata
    var secilen_renk = renk_secimi.value;
    var secilen_yazi_tipi = yazi_tipi.value;
    var secilen_yazi_boyutu = yazi_boyutu.value;

    if (secilen_yazi_boyutu === "") {
        alert("Lütfen yazı boyutunu girin.");
        return; // Hata durumunda fonksiyonu sonlandır
    }

    // Overlay rengini değiştirir ve opaklığı ayarlar
    overlay.style.backgroundColor = secilen_renk;
    overlay.style.opacity = 0.3

    // Değişten veriler doğrultusunda html sayfasındaki sonuça yazdırır.
    document.getElementById("sonuc").innerHTML = "<h1 style='font-family: " + secilen_yazi_tipi + "; font-size: " + secilen_yazi_boyutu + "px; color: " + secilen_renk + ";'>NİŞANTAŞI ÜNİVERSİTESİ</h1>";
    

}
