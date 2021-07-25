//These two functions change the image and caption in the about page.

function humor()
{
    document.getElementById("about-humor").innerHTML = "CodeX.exe"
    document.getElementById("img-clutter").src = "codex-exe.png";
    document.getElementById("img-clutter").alt = "CodeX.exe";
}

function unhumor()
{
    document.getElementById("about-humor").innerHTML = "We All Know At Least One Person Like This";
    document.getElementById("img-clutter").src = "cluttered-desktop.jpg";
    document.getElementById("img-clutter").alt = "cluttered desktop";
}