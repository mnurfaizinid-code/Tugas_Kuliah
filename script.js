function hitungUmur() {
      let tahunLahirInput = document.getElementById("tahun").value;
      let tahunSekarang = new Date().getFullYear();
      let elemenHasil = document.getElementById("hasil");

      if (tahunLahirInput === "") {
        elemenHasil.innerHTML = "Harap masukkan tahun lahir!";
        return;
      }

      let tahunLahir = Number(tahunLahirInput);

      if (tahunLahir > tahunSekarang) {
        elemenHasil.innerHTML = "Sekarang masih " + tahunSekarang + " mas, yang bener aja";
        return;
      }

      let umur = tahunSekarang - tahunLahir;

      if (umur > 30) {
        elemenHasil.innerHTML = "Umur kamu " + umur + " , Fosil mas?.";
        return;
      }

      let isKabisat = (tahunLahir % 4 === 0 && tahunLahir % 100 !== 0) || (tahunLahir % 400 === 0);
      let teksKabisat = isKabisat ? "Tahun lahir kamu adalah Tahun Kabisat." : "Tahun lahir kamu Bukan Tahun Kabisat.";

      elemenHasil.innerHTML = "Umur kamu sekarang adalah " + umur + " tahun.<br>" + teksKabisat;
    }

   function cekNilai() {
      let nilaiInput = document.getElementById("nilai").value;
      let elemenHasilNilai = document.getElementById("hasilNilai");

      if (nilaiInput === "") {
      elemenHasilNilai.innerHTML = "Masukkan nilai antara 0 sampai 100!";
      return;
      }

      let nilai = Number(nilaiInput);
      let nilaiHuruf = "";

      if (nilai < 0 || nilai > 100) {
        nilaiHuruf = "Edan";
      } else if (nilai >= 90) {
        nilaiHuruf = "A";
      } else if (nilai >= 80) {
        nilaiHuruf = "B";
      } else if (nilai >= 70) {
        nilaiHuruf = "C";
      } else if (nilai === 0) {
        nilaiHuruf = "Z";
      } else {
        nilaiHuruf = "D";
      }

      let keterangan = "";
      switch (nilaiHuruf) {
        case "A":
          keterangan = "Albert Einstein aja kalah sama lu";
          break;
        case "B":
          keterangan = "Bisa lebih harusnya";
          break;
        case "C":
          keterangan = "Boleh lah";
          break;
        case "D":
          keterangan = "Ngawor banget rek";
          break;
        case "Z":
          keterangan = "Yang bener aja mas";
          break;
        case "Edan":
          keterangan = "Nilaimu gak valid mas";
          break;
      }

      elemenHasilNilai.innerHTML = "Nilai kamu: <b>" + nilaiHuruf + "</b> (" + keterangan + ")";
    }