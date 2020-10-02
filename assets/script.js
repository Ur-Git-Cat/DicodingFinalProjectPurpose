/* script kegiatan */

document.getElementById("kajianA").addEventListener("mouseover", ubahGambarKajian);
document.getElementById("kajianA").addEventListener("mouseout", ubahGambarNormalKegiatan);
document.getElementById("olahRagaA").addEventListener("mouseover", ubahGambarOlahRaga);
document.getElementById("olahRagaA").addEventListener("mouseout", ubahGambarNormalKegiatan);
document.getElementById("kopiA").addEventListener("mouseover", ubahGambarKopi);
document.getElementById("kopiA").addEventListener("mouseout", ubahGambarNormalKegiatan);
document.getElementById("ceramahA").addEventListener("mouseover", ubahGambarCeramah);
document.getElementById("ceramahA").addEventListener("mouseout", ubahGambarNormalKegiatan);

function ubahGambarKajian(){
    document.getElementById("gambarKegiatan").className="kegiatanKiri kajianImg";
}

function ubahGambarOlahRaga(){
    document.getElementById("gambarKegiatan").className="kegiatanKiri olahRagaImg";
}

function ubahGambarKopi(){
    document.getElementById("gambarKegiatan").className="kegiatanKiri kopiImg";
}

function ubahGambarCeramah(){
    document.getElementById("gambarKegiatan").className="kegiatanKiri ceramahImg";
}
function ubahGambarNormalKegiatan(){
    document.getElementById("gambarKegiatan").className="kegiatanKiri";
}

/*script fasilitas gajadi karena males*/
/*
document.getElementById("kasurDanLemariA").addEventListener("mouseover", ubahGambarKajian);
document.getElementById("kasurDanLemariA").addEventListener("mouseout", ubahGambarNormal);
document.getElementById("mesinCuciA").addEventListener("mouseover", ubahGambarOlahRaga);
document.getElementById("mesinCuciA").addEventListener("mouseout", ubahGambarNormal);
document.getElementById("ruangBelajarA").addEventListener("mouseover", ubahGambarKopi);
document.getElementById("ruangBelajarA").addEventListener("mouseout", ubahGambarNormal);
document.getElementById("masjidA").addEventListener("mouseover", ubahGambarCeramah);
document.getElementById("masjidA").addEventListener("mouseout", ubahGambarNormal);
document.getElementById("lahanParkirA").addEventListener("mouseover", ubahGambarKopi);
document.getElementById("lahanParkirA").addEventListener("mouseout", ubahGambarNormal);
document.getElementById("wifiA").addEventListener("mouseover", ubahGambarCeramah);
document.getElementById("wifiA").addEventListener("mouseout", ubahGambarNormal);

function ubahGambarKajian(){
    document.getElementById("gambarKegiatan").className="kegiatanKiri kajianImg";
}

function ubahGambarOlahRaga(){
    document.getElementById("gambarKegiatan").className="kegiatanKiri olahRagaImg";
}

function ubahGambarKopi(){
    document.getElementById("gambarKegiatan").className="kegiatanKiri kopiImg";
}

function ubahGambarCeramah(){
    document.getElementById("gambarKegiatan").className="kegiatanKiri ceramahImg";
}
function ubahGambarNormalFasilitas(){
    document.getElementById("gambarKegiatan").className="kegiatanKiri";
}
*/
