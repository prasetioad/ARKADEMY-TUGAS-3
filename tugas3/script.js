//  TUGAS NOMOR 3



function seleksiNilai(nilaiAwal,nilaiAkhir,dataArray){
    if(typeof(dataArray) === 'object'){
        dataArray.sort(function(a,b){
            return a-b;
        })
    }else { console.log('Mohon isi dengan benar!')}
    const nilaiTengah = dataArray.filter(n => n > nilaiAwal && n < nilaiAkhir);
    const validasi = typeof(nilaiAwal) === 'number' && typeof(nilaiAkhir) === 'number' && 
    nilaiAwal < nilaiAkhir && dataArray.length > 5 ? nilaiTengah : 'Isi dengan benar atau cek Jumlah data anda!'
    if(validasi.length === 0){
        console.log('Terjadi kesalahan, mohon cek kembali inputan anda!')
    }else{
    console.log(validasi)
    }
}


seleksiNilai(27,30,[5,22,14,20,24,25,26])