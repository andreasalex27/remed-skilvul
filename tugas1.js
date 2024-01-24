function konversiNilai(nilai) {
    if (nilai >= 90 && nilai <= 100) {
        return "A";
    } else if (nilai >= 80 && nilai <= 89) {
        return "B";
    } else if (nilai >= 70 && nilai <= 79) {
        return "C";
    } else {
        return "D";
    }
};

console.log(konversiNilai(95))