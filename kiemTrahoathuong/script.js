function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        document.write("Ký tự đầu tiên của chuỗi là chữ hoa<br>");
    } else {
        document.write("Ký tự đầu tiên của chuỗi không phải là chữ hoa<br>");
    }
}
isFirstLetterUpperCase('Abcd');
isFirstLetterUpperCase('abcd');
isFirstLetterUpperCase('nguyen van Nam');
isFirstLetterUpperCase('NGUYEN VAN NAM');
isFirstLetterUpperCase('nguyen van Nam');