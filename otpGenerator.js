function generateOTP(length) {
    let otp = '';
    for (i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10).toString();
    }

    document.getElementById('generatedOTP').innerHTML = otp;
    return otp;
}
console.log(generateOTP(4));