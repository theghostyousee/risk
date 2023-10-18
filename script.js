function clickonbody() {
    var text = "This is my proof of @RiskOnETH 🎲%0a%0a"
    var hash = "0x" + generateMixed(20);
    window.location.href = "https://twitter.com/intent/tweet?&text=\n" + text + hash
}

window.onload = function() {
    document.getElementById("muerto").addEventListener('click', clickonbody);

}