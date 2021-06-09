var SpeechRecognition = window.webkitSpeechRecognition;//webkitSpeechRecognition is a web api to convert speech into text
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = content;
    console.log(content);
    if (content == "take my selfie")
    {
        console.log("taking selfie in 5 seconds");
        speak(); 
    }
}
function speak()
{
    var synth = window.speechSynthesis;//speechSynthesis is also a web api for converting text into speech
    speak_data = "taking selfie in five seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);//SpeechSynthesisUtterance is a function of speechSynthesis api which will convert text into speech
    synth.speak(utterThis);//this speak is a predifiened function of speechSynthesis api
    Webcam.attach('#camera');
    setTimeout(
        function(){
            take_snapshot();
            save();
        },5000);    
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href= image;
    link.click();
}