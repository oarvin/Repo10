function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Dino Merlin",
            title: "Hotel",
            release_year: 2000,
            id : 133,
            formats: {
                1: "DVD",
                2: "Radio",
                3: "MP3"
            }

        }
    };
    return myMusic;
    
}

myFunction()[2];
module.exports = myFunction;