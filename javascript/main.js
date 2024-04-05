document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let namaproduk = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi')?parent.querySelector('deskripsi').innerHTML:'<i>Tidak ada informasi yang tersedia</i>';
        console.log('deskripsi: ${deskripsi}');
    });
});