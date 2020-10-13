const corsProxy = "https://cors-anywhere.herokuapp.com/"
var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
];


urls.map((url => {
    $.get(url).then(console.log(url)).then(console.log("Data was fetched!"));
}))