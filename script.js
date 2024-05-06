function RC4(key, str) {
    var S = [], j = 0, x, res = '';
    for (var i = 0; i < 256; i++) {
        S[i] = i;
    }
    for (i = 0; i < 256; i++) {
        j = (j + S[i] + key.charCodeAt(i % key.length)) % 256;
        x = S[i];
        S[i] = S[j];
        S[j] = x;
    }
    i = 0;
    j = 0;
    for (var y = 0; y < str.length; y++) {
        i = (i + 1) % 256;
        j = (j + S[i]) % 256;
        x = S[i];
        S[i] = S[j];
        S[j] = x;
        res += String.fromCharCode(str.charCodeAt(y) ^ S[(S[i] + S[j]) % 256]);
    }
    return res;
}

function encrypt() {
    var key = prompt("Enter encryption key:");
    if (key === null || key === "") return;
    var inputText = document.getElementById("inputText").value;
    var encryptedText = RC4(key, inputText);
    document.getElementById("outputText").value = encryptedText;
}

function decrypt() {
    var key = prompt("Enter decryption key:");
    if (key === null || key === "") return;
    var inputText = document.getElementById("inputText").value;
    var decryptedText = RC4(key, inputText);
    document.getElementById("outputText").value = decryptedText;
}